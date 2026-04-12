'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { track } from '@vercel/analytics'
import { MODEL_PRICING } from '../../lib/modelPricing'
import { estimateTokens, calculateCostPerCall, projectCosts } from '../../lib/tokenCount'

// ─── Diff Utility ────────────────────────────────────────────────────────────

function buildDiff(original, compressed) {
  const origLines = original.split('\n')
  const compLines = compressed.split('\n')
  const compSet = new Set(compLines)
  const origSet = new Set(origLines)
  const result = []
  for (const line of origLines) {
    result.push({ text: line, type: compSet.has(line) ? 'unchanged' : 'removed' })
  }
  for (const line of compLines) {
    if (!origSet.has(line)) {
      result.push({ text: line, type: 'added' })
    }
  }
  return result
}

// ─── Currency Formatter ───────────────────────────────────────────────────────

function formatCost(value) {
  if (value === 0) return '$0.00'
  if (value < 0.01) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD',
      minimumFractionDigits: 4, maximumFractionDigits: 4,
    }).format(value)
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD',
    minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(value)
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function OptimizerPage() {
  // Module 1 — Model Router
  const [taskDescription, setTaskDescription] = useState('')
  const [routeResult, setRouteResult] = useState(null)
  const [routeLoading, setRouteLoading] = useState(false)
  const [routeError, setRouteError] = useState(null)

  // Module 2 — Prompt Compressor
  const [promptInput, setPromptInput] = useState('')
  const [compressResult, setCompressResult] = useState(null)
  const [compressLoading, setCompressLoading] = useState(false)
  const [compressError, setCompressError] = useState(null)
  const [compressUsed, setCompressUsed] = useState(null) // null = show "5 of 5"
  const [activeTab, setActiveTab] = useState('compressed')
  const [copied, setCopied] = useState(false)

  // Module 3 — Cost Projector
  const [inputTokens, setInputTokens] = useState(500)
  const [outputTokens, setOutputTokens] = useState(500)
  const [callsPerDay, setCallsPerDay] = useState(1000)
  const [callsInput, setCallsInput] = useState('1000')

  // ─── Module 1 Handler ──────────────────────────────────────────────────────

  const handleRoute = useCallback(async () => {
    if (!taskDescription.trim() || routeLoading) return
    setRouteLoading(true)
    setRouteError(null)
    setRouteResult(null)
    track('optimizer_route', { task_length: taskDescription.length })
    try {
      const res = await fetch('/api/optimizer/route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: taskDescription }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Unknown error')
      setRouteResult(data)
    } catch {
      setRouteError("Couldn't analyse this task. Check your connection and try again.")
    } finally {
      setRouteLoading(false)
    }
  }, [taskDescription, routeLoading])

  const handleRouteKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') handleRoute()
  }

  // ─── Module 2 Handler ──────────────────────────────────────────────────────

  const promptTokens = estimateTokens(promptInput)
  const compressedTokens = compressResult ? estimateTokens(compressResult.compressed_prompt) : 0

  const handleCompress = useCallback(async () => {
    if (!promptInput.trim() || compressLoading) return
    setCompressLoading(true)
    setCompressError(null)
    setCompressResult(null)
    const origTokens = estimateTokens(promptInput)
    try {
      const res = await fetch('/api/optimizer/compress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptInput }),
      })
      const data = await res.json()
      if (res.status === 429) {
        setCompressUsed(0)
        setCompressError('rate_limited')
        return
      }
      if (!res.ok) throw new Error(data.error || 'Unknown error')
      setCompressResult(data)
      setActiveTab('compressed')
      if (typeof data.rate_limit_remaining === 'number') {
        setCompressUsed(data.rate_limit_remaining)
      }
      // Auto-populate Module 3 input tokens with original token count
      setInputTokens(origTokens)
      // Fire analytics
      const compTokens = estimateTokens(data.compressed_prompt)
      track('optimizer_compress', {
        input_tokens: origTokens,
        output_tokens: compTokens,
        reduction_pct: origTokens > 0 ? Math.round((1 - compTokens / origTokens) * 100) : 0,
      })
    } catch {
      setCompressError('Compression failed. Try again or paste a shorter prompt.')
    } finally {
      setCompressLoading(false)
    }
  }, [promptInput, compressLoading])

  const handleCompressKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') handleCompress()
  }

  const handleCopy = () => {
    if (!compressResult) return
    navigator.clipboard.writeText(compressResult.compressed_prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // ─── Module 3 Calculations ─────────────────────────────────────────────────

  const models = ['haiku', 'sonnet', 'opus']
  const costs = {}
  for (const model of models) {
    const pricing = MODEL_PRICING[model]
    const costPerCall = calculateCostPerCall(inputTokens, outputTokens, pricing)
    costs[model] = projectCosts(costPerCall, callsPerDay)
  }

  // Savings row: only shown if Module 2 ran and produced fewer tokens
  const showSavings = compressResult && compressedTokens < promptTokens && promptTokens > 0
  const savings = {}
  if (showSavings) {
    for (const model of models) {
      const pricing = MODEL_PRICING[model]
      const origCostPerCall = calculateCostPerCall(promptTokens, outputTokens, pricing)
      const compCostPerCall = calculateCostPerCall(compressedTokens, outputTokens, pricing)
      savings[model] = projectCosts(origCostPerCall - compCostPerCall, callsPerDay).annual
    }
  }

  const handleCallsPreset = (val) => {
    setCallsPerDay(val)
    setCallsInput(val.toString())
  }

  const handleCallsInput = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, '')
    setCallsInput(raw)
    const num = parseInt(raw, 10)
    if (!isNaN(num) && num > 0) setCallsPerDay(num)
  }

  const remainingDisplay = compressUsed === null ? '5 of 5' : `${compressUsed} of 5`

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .opt-root {
          min-height: 100vh;
          background: #faf8f5;
          color: #0f0e0d;
          font-family: 'DM Sans', sans-serif;
        }
        .opt-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 60px;
          border-bottom: 1px solid #e8e4dc;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .opt-nav-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 20px;
          color: #0f0e0d;
          text-decoration: none;
        }
        .opt-nav-logo span { color: #c8501a; }
        .opt-nav-links {
          display: flex;
          gap: 24px;
          align-items: center;
        }
        .opt-nav-links a {
          color: #8a877f;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.15s;
        }
        .opt-nav-links a:hover { color: #0f0e0d; }
        .opt-nav-links a.active { color: #c8501a; font-weight: 500; }
        .opt-nav-cta {
          background: #0f0e0d;
          color: #faf8f5;
          text-decoration: none;
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          transition: background 0.15s;
        }
        .opt-nav-cta:hover { background: #c8501a; }
        .opt-hero {
          max-width: 800px;
          margin: 0 auto;
          padding: 64px 24px 40px;
          text-align: center;
        }
        .opt-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: 36px;
          line-height: 1.2;
          margin-bottom: 16px;
          color: #0f0e0d;
        }
        .opt-hero-sub {
          font-size: 18px;
          color: #8a877f;
          line-height: 1.6;
        }
        .opt-modules {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 80px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .opt-module {
          background: #ffffff;
          border: 1px solid #e8e4dc;
          border-radius: 12px;
          padding: 32px;
        }
        .opt-module-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .opt-module-title {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          color: #0f0e0d;
        }
        .opt-rate-badge {
          font-size: 13px;
          color: #8a877f;
          background: #f2ede5;
          padding: 4px 12px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .opt-rate-badge.exhausted { color: #dc2626; background: #fee2e2; }
        .opt-textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e8e4dc;
          border-radius: 8px;
          background: #faf8f5;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          resize: vertical;
          color: #0f0e0d;
          outline: none;
          transition: border-color 0.15s;
          line-height: 1.5;
        }
        .opt-textarea:focus { border-color: #c8501a; }
        .opt-textarea-meta {
          font-size: 12px;
          color: #8a877f;
          margin-top: 6px;
          margin-bottom: 16px;
        }
        .opt-btn {
          background: #c8501a;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 10px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .opt-btn:hover:not(:disabled) { background: #b34516; }
        .opt-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .opt-error {
          color: #dc2626;
          font-size: 13px;
          margin-top: 12px;
          padding: 10px 14px;
          background: #fef2f2;
          border-radius: 6px;
          border: 1px solid #fecaca;
        }
        .opt-error a { color: #c8501a; }
        .opt-result-card {
          background: #faf8f5;
          border: 1px solid #e8e4dc;
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
        }
        .opt-rec-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .opt-rec-label { font-size: 13px; color: #8a877f; }
        .opt-chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 14px;
          border-radius: 20px;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .opt-confidence {
          font-size: 13px;
          color: #8a877f;
        }
        .opt-justification {
          font-size: 14px;
          line-height: 1.6;
          color: #0f0e0d;
          margin-bottom: 12px;
        }
        .opt-opus-note {
          font-size: 13px;
          color: #8a877f;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          padding: 10px 14px;
          background: #f2ede5;
          border-radius: 6px;
        }
        .opt-tabs {
          display: flex;
          gap: 0;
          border-bottom: 1px solid #e8e4dc;
          margin-bottom: 16px;
        }
        .opt-tab {
          padding: 8px 18px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          cursor: pointer;
          color: #8a877f;
          transition: color 0.15s;
          margin-bottom: -1px;
        }
        .opt-tab:hover { color: #0f0e0d; }
        .opt-tab.on { color: #c8501a; border-bottom-color: #c8501a; font-weight: 500; }
        .opt-tab-content { position: relative; }
        .opt-prompt-display {
          width: 100%;
          min-height: 160px;
          padding: 12px 16px;
          background: #faf8f5;
          border: 1px solid #e8e4dc;
          border-radius: 8px;
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 13px;
          line-height: 1.6;
          color: #0f0e0d;
          white-space: pre-wrap;
          word-break: break-word;
          max-height: 320px;
          overflow-y: auto;
        }
        .opt-diff-container {
          max-height: 320px;
          overflow-y: auto;
          border: 1px solid #e8e4dc;
          border-radius: 8px;
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 13px;
          line-height: 1.8;
        }
        .opt-diff-line {
          padding: 1px 12px;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .opt-diff-removed { background: #fee2e2; color: #991b1b; }
        .opt-diff-added { background: #dcfce7; color: #166534; }
        .opt-diff-unchanged { color: #0f0e0d; }
        .opt-compress-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .opt-token-delta {
          font-size: 14px;
          color: #0f0e0d;
        }
        .opt-token-delta .saving { color: #166534; font-weight: 500; }
        .opt-copy-btn {
          background: none;
          border: 1px solid #e8e4dc;
          border-radius: 6px;
          padding: 5px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          cursor: pointer;
          color: #0f0e0d;
          transition: background 0.15s;
        }
        .opt-copy-btn:hover { background: #f2ede5; }
        .opt-removed-list {
          margin-top: 16px;
          font-size: 13px;
          color: #8a877f;
        }
        .opt-removed-list ul {
          margin: 6px 0 0 0;
          padding-left: 20px;
        }
        .opt-removed-list li { margin-bottom: 3px; }

        /* Module 3 */
        .opt-inputs-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        .opt-field label {
          display: block;
          font-size: 12px;
          color: #8a877f;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .opt-number-input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e8e4dc;
          border-radius: 6px;
          background: #faf8f5;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #0f0e0d;
          outline: none;
        }
        .opt-number-input:focus { border-color: #c8501a; }
        .opt-calls-row {
          margin-bottom: 24px;
        }
        .opt-calls-row label {
          display: block;
          font-size: 12px;
          color: #8a877f;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .opt-calls-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .opt-preset-btn {
          padding: 6px 14px;
          border: 1px solid #e8e4dc;
          border-radius: 6px;
          background: #faf8f5;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          cursor: pointer;
          color: #0f0e0d;
          transition: all 0.15s;
        }
        .opt-preset-btn:hover { background: #f2ede5; border-color: #c8501a; }
        .opt-preset-btn.on { background: #c8501a; color: #fff; border-color: #c8501a; }
        .opt-divider { color: #e8e4dc; }
        .opt-table-wrapper { overflow-x: auto; margin-bottom: 16px; }
        .opt-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          min-width: 360px;
        }
        .opt-table th {
          text-align: right;
          padding: 10px 14px;
          color: #8a877f;
          font-weight: 500;
          border-bottom: 2px solid #e8e4dc;
          font-size: 13px;
        }
        .opt-table th:first-child { text-align: left; }
        .opt-table td {
          padding: 10px 14px;
          border-bottom: 1px solid #f2ede5;
          text-align: right;
        }
        .opt-table td:first-child { text-align: left; color: #8a877f; font-size: 13px; }
        .opt-table tr:last-child td { border-bottom: none; }
        .opt-table .col-haiku { }
        .opt-table .col-annual-haiku { background: #f0fdf4; }
        .opt-table .col-annual-savings-haiku { background: #dcfce7; font-weight: 600; color: #166534; }
        .opt-table .col-annual-savings-sonnet { background: #dcfce7; font-weight: 600; color: #166534; }
        .opt-table .col-annual-savings-opus { background: #dcfce7; font-weight: 600; color: #166534; }
        .opt-savings-label {
          font-size: 12px;
          color: #8a877f;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .opt-savings-label::before {
          content: '';
          display: inline-block;
          width: 12px;
          height: 1px;
          background: #e8e4dc;
        }
        .opt-cta-btn {
          display: block;
          width: 100%;
          background: #c8501a;
          color: #ffffff;
          text-decoration: none;
          text-align: center;
          padding: 16px;
          border-radius: 8px;
          font-family: 'DM Serif Display', serif;
          font-size: 18px;
          margin-top: 24px;
          transition: background 0.15s;
          cursor: pointer;
          border: none;
        }
        .opt-cta-btn:hover { background: #b34516; }

        @media (max-width: 768px) {
          .opt-nav { padding: 0 20px; }
          .opt-nav-links { display: none; }
          .opt-hero { padding: 40px 16px 24px; }
          .opt-hero-title { font-size: 28px; }
          .opt-hero-sub { font-size: 16px; }
          .opt-modules { padding: 0 16px 60px; }
          .opt-module { padding: 20px; }
          .opt-inputs-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="opt-root">

        {/* Nav */}
        <nav className="opt-nav">
          <a href="/" className="opt-nav-logo">Prompt<span>Forge</span></a>
          <div className="opt-nav-links">
            <a href="/forge">Forge</a>
            <a href="/optimizer" className="active">Optimizer</a>
          </div>
          <Link href="/forge" className="opt-nav-cta">Start Forging Free →</Link>
        </nav>

        {/* Hero */}
        <div className="opt-hero">
          <h1 className="opt-hero-title">Stop guessing what AI actually costs you.</h1>
          <p className="opt-hero-sub">
            Model routing · Prompt compression · Cost projection.<br />
            Free tools for AI practitioners.
          </p>
        </div>

        <div className="opt-modules">

          {/* ── Module 1: Model Router ── */}
          <div className="opt-module">
            <div className="opt-module-header">
              <h2 className="opt-module-title">Module 1: What are you building?</h2>
            </div>

            <textarea
              className="opt-textarea"
              rows={4}
              placeholder="Describe your task — e.g. 'classify support tickets by urgency' or 'draft quarterly board reports'"
              value={taskDescription}
              onChange={(e) => { setTaskDescription(e.target.value); setRouteError(null) }}
              onKeyDown={handleRouteKeyDown}
            />

            <div style={{ marginTop: 12 }}>
              <button
                className="opt-btn"
                onClick={handleRoute}
                disabled={routeLoading || !taskDescription.trim()}
              >
                {routeLoading ? (
                  <>
                    <span style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'opt-spin 0.7s linear infinite' }} />
                    Analysing...
                  </>
                ) : 'Analyse →'}
              </button>
            </div>

            {routeError && <div className="opt-error">{routeError}</div>}

            {routeResult && (
              <div className="opt-result-card">
                <div className="opt-rec-row">
                  <span className="opt-rec-label">Recommended:</span>
                  <span
                    className="opt-chip"
                    style={{ background: MODEL_PRICING[routeResult.recommended_model]?.color || '#374151' }}
                  >
                    {MODEL_PRICING[routeResult.recommended_model]?.name || routeResult.recommended_model}
                  </span>
                  <span className="opt-confidence">Confidence: {routeResult.confidence === 'high' ? 'High' : 'Medium'}</span>
                </div>
                <p className="opt-justification">{routeResult.justification}</p>
                <div className="opt-opus-note">
                  {routeResult.would_opus_help ? (
                    <>⚠ Opus would help here: {routeResult.would_opus_help_reason}</>
                  ) : (
                    <>
                      ✓ Would Opus help? No — {routeResult.recommended_model === 'sonnet' ? 'Sonnet is ~5× cheaper' : routeResult.recommended_model === 'haiku' ? 'Haiku is ~19× cheaper' : 'this model handles it fully'} here.
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ── Module 2: Prompt Compressor ── */}
          <div className="opt-module">
            <div className="opt-module-header">
              <h2 className="opt-module-title">Module 2: Compress your prompt</h2>
              <span className={`opt-rate-badge${compressUsed === 0 ? ' exhausted' : ''}`}>
                {remainingDisplay} free uses
              </span>
            </div>

            <textarea
              className="opt-textarea"
              rows={8}
              placeholder="Paste your system prompt here..."
              value={promptInput}
              onChange={(e) => { setPromptInput(e.target.value); setCompressError(null) }}
              onKeyDown={handleCompressKeyDown}
            />
            <div className="opt-textarea-meta">
              Token estimate: {promptTokens.toLocaleString()} tokens
            </div>

            <button
              className="opt-btn"
              onClick={handleCompress}
              disabled={compressLoading || !promptInput.trim()}
            >
              {compressLoading ? (
                <>
                  <span style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'opt-spin 0.7s linear infinite' }} />
                  Compressing...
                </>
              ) : 'Compress →'}
            </button>

            {compressError === 'rate_limited' ? (
              <div className="opt-error">
                You&apos;ve used your 5 free compressions this month.{' '}
                <a href="/pricing">Upgrade for unlimited access.</a>
              </div>
            ) : compressError ? (
              <div className="opt-error">{compressError}</div>
            ) : null}

            {compressResult && (
              <div style={{ marginTop: 20 }}>
                <div className="opt-tabs">
                  {['original', 'compressed', 'diff'].map(tab => (
                    <button
                      key={tab}
                      className={`opt-tab${activeTab === tab ? ' on' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="opt-compress-meta">
                  <span className="opt-token-delta">
                    {promptTokens.toLocaleString()} tokens →{' '}
                    <span className="saving">{compressedTokens.toLocaleString()} tokens</span>
                    {promptTokens > 0 && (
                      <> ({Math.round((1 - compressedTokens / promptTokens) * 100)}% reduction)</>
                    )}
                  </span>
                  <button className="opt-copy-btn" onClick={handleCopy}>
                    {copied ? 'Copied!' : 'Copy compressed'}
                  </button>
                </div>

                <div className="opt-tab-content">
                  {activeTab === 'original' && (
                    <div className="opt-prompt-display">{promptInput}</div>
                  )}
                  {activeTab === 'compressed' && (
                    <div className="opt-prompt-display">{compressResult.compressed_prompt}</div>
                  )}
                  {activeTab === 'diff' && (
                    <div className="opt-diff-container">
                      {buildDiff(promptInput, compressResult.compressed_prompt).map((line, i) => (
                        <div
                          key={i}
                          className={`opt-diff-line opt-diff-${line.type}`}
                        >
                          {line.text || '\u00A0'}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {(compressResult.removed_elements?.length > 0) && (
                  <div className="opt-removed-list">
                    <strong>What was removed:</strong>
                    <ul>
                      {compressResult.removed_elements.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── Module 3: Cost Projector ── */}
          <div className="opt-module">
            <div className="opt-module-header">
              <h2 className="opt-module-title">Module 3: Project your costs</h2>
            </div>

            <div className="opt-inputs-row">
              <div className="opt-field">
                <label>Input tokens per call</label>
                <input
                  type="number"
                  className="opt-number-input"
                  value={inputTokens}
                  min={1}
                  onChange={(e) => setInputTokens(Math.max(1, parseInt(e.target.value, 10) || 1))}
                />
              </div>
              <div className="opt-field">
                <label>Estimated output tokens</label>
                <input
                  type="number"
                  className="opt-number-input"
                  value={outputTokens}
                  min={1}
                  onChange={(e) => setOutputTokens(Math.max(1, parseInt(e.target.value, 10) || 1))}
                />
              </div>
            </div>

            <div className="opt-calls-row">
              <label>Calls per day</label>
              <div className="opt-calls-controls">
                {[100, 1000, 10000, 100000].map(preset => (
                  <button
                    key={preset}
                    className={`opt-preset-btn${callsPerDay === preset ? ' on' : ''}`}
                    onClick={() => handleCallsPreset(preset)}
                  >
                    {preset >= 1000 ? `${preset / 1000}K` : preset}
                  </button>
                ))}
                <span className="opt-divider">|</span>
                <input
                  type="text"
                  className="opt-number-input"
                  style={{ width: 90 }}
                  value={callsInput}
                  onChange={handleCallsInput}
                  placeholder="Custom"
                />
              </div>
            </div>

            <div className="opt-table-wrapper">
              <table className="opt-table">
                <thead>
                  <tr>
                    <th></th>
                    {models.map(model => (
                      <th
                        key={model}
                        style={routeResult?.recommended_model === model
                          ? { color: MODEL_PRICING[model].color, outline: `2px solid ${MODEL_PRICING[model].color}`, outlineOffset: -2, borderRadius: 4 }
                          : {}
                        }
                      >
                        {MODEL_PRICING[model].name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cost per call</td>
                    {models.map(model => (
                      <td key={model}>{formatCost(costs[model].perCall)}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Daily</td>
                    {models.map(model => (
                      <td key={model}>{formatCost(costs[model].daily)}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Monthly</td>
                    {models.map(model => (
                      <td key={model}>{formatCost(costs[model].monthly)}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Annual</td>
                    {models.map((model, i) => (
                      <td key={model} className={i === 0 ? 'col-annual-haiku' : ''}>
                        {formatCost(costs[model].annual)}
                      </td>
                    ))}
                  </tr>

                  {showSavings && (
                    <>
                      <tr>
                        <td colSpan={4} style={{ paddingBottom: 4, paddingTop: 16 }}>
                          <div className="opt-savings-label">
                            Annual savings if compressed ({compressedTokens.toLocaleString()} tokens)
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>You&apos;d save</td>
                        {models.map(model => (
                          <td key={model} className={`col-annual-savings-${model}`}>
                            {formatCost(savings[model])}
                          </td>
                        ))}
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>

            <Link
              href="/forge"
              className="opt-cta-btn"
              onClick={() => track('optimizer_to_forge')}
            >
              Get a quality-verified, pre-optimized agent prompt → Try Prompt Forge free
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes opt-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
