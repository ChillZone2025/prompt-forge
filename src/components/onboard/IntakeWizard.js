'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { track } from '@vercel/analytics'

const WIZARD_CONFIG = {
  'capital-markets': {
    heading: "What's your focus?",
    subVerticals: [
      { id: 'fx_risk',        label: 'FX Risk Management' },
      { id: 'm_and_a',        label: 'M&A Advisory' },
      { id: 'treasury_ops',   label: 'Treasury Ops & Liquidity' },
      { id: 'controls_audit', label: 'Controls & Audit' },
    ],
    useCases: [
      { id: 'internal_ops',  label: 'Internal ops automation' },
      { id: 'client_facing', label: 'Client-facing deliverables' },
      { id: 'regulatory',    label: 'Regulatory / compliance' },
    ],
  },
  'developer': {
    heading: "What are you building?",
    subVerticals: [
      { id: 'frontend', label: 'Frontend / UI' },
      { id: 'backend',  label: 'Backend / APIs' },
      { id: 'devops',   label: 'DevOps / Infrastructure' },
      { id: 'data',     label: 'Data / ML' },
    ],
    useCases: [
      { id: 'code_review',    label: 'Code review & refactoring' },
      { id: 'documentation',  label: 'Documentation' },
      { id: 'architecture',   label: 'Architecture decisions' },
    ],
  },
  'business': {
    heading: "What's your focus?",
    subVerticals: [
      { id: 'operations', label: 'Operations' },
      { id: 'sales',      label: 'Sales & Revenue' },
      { id: 'finance',    label: 'Finance & Accounting' },
      { id: 'strategy',   label: 'Strategy & Planning' },
    ],
    useCases: [
      { id: 'internal_ops',  label: 'Internal workflows' },
      { id: 'client_facing', label: 'Client deliverables' },
      { id: 'reporting',     label: 'Reporting & analysis' },
    ],
  },
}

export default function IntakeWizard({ vertical }) {
  const router = useRouter()
  const [step, setStep]           = useState(1)
  const [subVertical, setSubVertical] = useState(null)
  const [useCase, setUseCase]     = useState(null)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState(null)

  // Fire onboard_vertical_selected on mount — VerticalSelector only navigates,
  // it does not call track(), so we fire the event here once we land on the page.
  useEffect(() => {
    track('onboard_vertical_selected', { vertical })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const config = WIZARD_CONFIG[vertical]

  // Unknown vertical (e.g. /onboard/other) — redirect to forge
  useEffect(() => {
    if (!config) router.replace('/forge')
  }, [config, router])

  if (!config) return null

  function handleSubVerticalSelect(sv) {
    setSubVertical(sv)
    setStep(2)
  }

  async function handleUseCaseSelect(uc) {
    setUseCase(uc)
    await handleSubmit(uc)
  }

  async function handleSubmit(uc) {
    setLoading(true)
    setError(null)
    track('onboard_completed', {
      vertical,
      sub_vertical: subVertical.id,
      use_case: uc.id,
    })
    try {
      const res = await fetch('/api/onboard/resolve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vertical,
          subVertical: subVertical.id,
          useCase: uc.id,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Resolution failed')
      router.push(`/results/${data.resolution_id}`)
    } catch (err) {
      setError('Something went wrong — try again')
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={styles.fullscreen}>
        <style>{spinnerCSS}</style>
        <div className="iw-spinner" />
        <p style={styles.loadingText}>Finding your AI team…</p>
      </div>
    )
  }

  return (
    <div style={styles.fullscreen}>
      <div style={styles.card}>
        {/* Back navigation */}
        {step === 1 ? (
          <a href="/" style={styles.back}>← Back</a>
        ) : (
          <button style={styles.backBtn} onClick={() => { setStep(1); setUseCase(null) }}>← Back</button>
        )}

        {/* Step indicator (step 2 only) */}
        {step === 2 && (
          <p style={styles.stepIndicator}>Step 2 of 2</p>
        )}

        <h1 style={styles.heading}>
          {step === 1 ? config.heading : 'How will you use it?'}
        </h1>

        {error && <p style={styles.error}>{error}</p>}

        {/* Tile grid */}
        <div style={styles.grid}>
          {(step === 1 ? config.subVerticals : config.useCases).map((item) => {
            const isSelected = step === 1
              ? subVertical?.id === item.id
              : useCase?.id === item.id
            return (
              <button
                key={item.id}
                style={{ ...styles.tile, ...(isSelected ? styles.tileSelected : {}) }}
                onClick={() => step === 1 ? handleSubVerticalSelect(item) : handleUseCaseSelect(item)}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const spinnerCSS = `
  @keyframes iw-spin { to { transform: rotate(360deg); } }
  .iw-spinner {
    width: 40px; height: 40px;
    border: 3px solid rgba(200,80,26,0.2);
    border-top-color: #c8501a;
    border-radius: 50%;
    animation: iw-spin 0.75s linear infinite;
    margin-bottom: 16px;
  }
`

const styles = {
  fullscreen: {
    minHeight: '100vh',
    background: '#faf8f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '24px',
    fontFamily: "'DM Sans', sans-serif",
  },
  card: {
    width: '100%',
    maxWidth: '520px',
  },
  back: {
    display: 'inline-block',
    fontSize: '14px',
    color: '#8a877f',
    textDecoration: 'none',
    marginBottom: '32px',
    transition: 'color 0.15s',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#8a877f',
    padding: '0',
    marginBottom: '32px',
  },
  stepIndicator: {
    fontSize: '12px',
    color: '#c8501a',
    fontWeight: '500',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  heading: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: '400',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    color: '#0f0e0d',
    marginBottom: '32px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  tile: {
    background: '#ffffff',
    border: '1px solid rgba(15,14,13,0.10)',
    borderRadius: '12px',
    padding: '20px 18px',
    fontSize: '15px',
    fontWeight: '500',
    color: '#0f0e0d',
    cursor: 'pointer',
    textAlign: 'left',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'border-color 0.15s, background 0.15s',
    lineHeight: '1.4',
  },
  tileSelected: {
    borderColor: '#c8501a',
    background: 'rgba(200,80,26,0.06)',
  },
  loadingText: {
    fontSize: '15px',
    color: '#4a4742',
    fontWeight: '400',
  },
  error: {
    fontSize: '14px',
    color: '#c8501a',
    marginBottom: '16px',
    background: 'rgba(200,80,26,0.06)',
    border: '1px solid rgba(200,80,26,0.2)',
    borderRadius: '8px',
    padding: '10px 14px',
  },
}
