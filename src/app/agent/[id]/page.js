import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllAgents, getAgentById, getAgentsByIndustry } from '../../../lib/agents'
import QualityBadge from '../../../components/QualityBadge'

const BASE = 'https://www.getpromptforge.net'

// ─── Static Params ───────────────────────────────────────────────────────────
export function generateStaticParams() {
  return getAllAgents().map(agent => ({ id: agent.id }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export function generateMetadata({ params }) {
  const agent = getAgentById(params.id)
  if (!agent) return { title: 'Agent Not Found | Prompt Forge' }

  const scoreFragment = agent.qualityScore
    ? `Quality score: ${agent.qualityScore.toFixed(1)}/10. `
    : ''

  return {
    title: `${agent.name} System Prompt | Prompt Forge`,
    description: `Deployment-ready AI system prompt for ${agent.name}. ${scoreFragment}One-click generation for ${agent.industry} professionals.`,
    openGraph: {
      title: `${agent.name} System Prompt | Prompt Forge`,
      description: `Deployment-ready AI system prompt for ${agent.name}. ${scoreFragment}One-click generation for ${agent.industry} professionals.`,
      url: `${BASE}/agent/${params.id}`,
      siteName: 'Prompt Forge',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${agent.name} System Prompt | Prompt Forge`,
      description: `Deployment-ready AI system prompt for ${agent.name}. ${scoreFragment}One-click generation for ${agent.industry} professionals.`,
    },
    alternates: {
      canonical: `${BASE}/agent/${params.id}`,
    },
  }
}

// ─── Preview Text ─────────────────────────────────────────────────────────────
function getPreviewText(agent) {
  if (agent.fixedPrompt) {
    return agent.fixedPrompt.slice(0, 220)
  }
  return `## AGENT IDENTITY\nYou are a ${agent.name}, a specialized AI agent designed for ${agent.industry} professionals. Your primary function is ${agent.desc}. You operate with deep domain expertise, structured reasoning, and a commitment to delivering precise, actionable outputs that a working professional can deploy immediately.\n\n## CORE CAPABILITIES\n— ${agent.desc}\n— Industry-specific frameworks and methodologies\n— Structured analysis and professional deliverables`
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function AgentPage({ params }) {
  const agent = getAgentById(params.id)
  if (!agent) notFound()

  const related = getAgentsByIndustry(agent.industrySlug)
    .filter(a => a.id !== agent.id)
    .slice(0, 3)

  const preview = getPreviewText(agent)
  const industrySlug = agent.industrySlug

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #faf8f5; --surface: #ffffff; --surface-alt: #f2ede5;
          --border: rgba(15,14,13,0.10); --border-soft: rgba(15,14,13,0.06);
          --accent: #c8501a; --accent-hover: #8c3510; --accent-light: #f5ddd3; --accent-dim: rgba(200,80,26,0.08);
          --ink: #0f0e0d; --ink-soft: #4a4742; --ink-muted: #8a877f; --ink-dim: #b5b0a8;
          --radius: 12px; --radius-sm: 6px;
        }

        body {
          background: var(--bg); color: var(--ink);
          font-family: 'DM Sans', sans-serif; line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .ag-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 62px;
          background: rgba(250,248,245,0.88); backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .ag-nav-logo { font-family: 'DM Serif Display', serif; font-size: 21px; color: var(--ink); text-decoration: none; }
        .ag-nav-logo span { color: var(--accent); }
        .ag-nav-cta { background: var(--ink); color: var(--bg); padding: 9px 20px; border-radius: var(--radius-sm); font-weight: 500; font-size: 14px; text-decoration: none; transition: background 0.2s; }
        .ag-nav-cta:hover { background: var(--accent); }

        .ag-wrap { max-width: 760px; margin: 0 auto; padding: 0 24px; }

        .ag-breadcrumb { padding: 84px 0 0; font-size: 13px; color: var(--ink-muted); }
        .ag-breadcrumb a { color: var(--ink-muted); text-decoration: none; }
        .ag-breadcrumb a:hover { color: var(--accent); }
        .ag-breadcrumb span { margin: 0 7px; opacity: 0.5; }

        .ag-hero { padding: 32px 0 40px; }
        .ag-hero-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); margin-bottom: 14px; }
        .ag-hero h1 { font-family: 'DM Serif Display', serif; font-size: clamp(28px, 4vw, 40px); font-weight: 400; letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 16px; }
        .ag-hero-desc { font-size: 16px; color: var(--ink-soft); line-height: 1.7; max-width: 580px; margin-bottom: 20px; }

        .ag-section { margin-bottom: 48px; }
        .ag-section-title { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-muted); margin-bottom: 16px; }

        .ag-preview-box {
          border: 1px solid var(--border); border-radius: var(--radius);
          background: var(--surface); overflow: hidden; position: relative;
        }
        .ag-preview-header {
          background: var(--ink); color: var(--bg); padding: 12px 20px;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 12px;
        }
        .ag-preview-label { font-weight: 700; letter-spacing: 0.08em; font-size: 10px; opacity: 0.6; text-transform: uppercase; }
        .ag-preview-body { padding: 24px 20px; min-height: 140px; position: relative; }
        .ag-preview-text {
          font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--ink-soft);
          line-height: 1.8; white-space: pre-wrap; filter: blur(3.5px); user-select: none;
          pointer-events: none;
        }
        .ag-preview-gate {
          position: absolute; inset: 0; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 12px;
          background: linear-gradient(to bottom, transparent 0%, rgba(250,248,245,0.7) 30%, rgba(250,248,245,0.97) 65%);
          padding: 24px;
        }
        .ag-preview-gate-text { font-size: 13px; color: var(--ink-muted); text-align: center; }

        .ag-cta-btn {
          display: inline-block; background: var(--accent); color: #fff;
          padding: 13px 32px; border-radius: var(--radius-sm);
          font-weight: 600; font-size: 15px; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .ag-cta-btn:hover { background: var(--accent-hover); transform: translateY(-1px); }
        .ag-cta-sub { font-size: 12px; color: var(--ink-muted); margin-top: 8px; }

        .ag-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .ag-step { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px 18px; }
        .ag-step-num { font-family: 'DM Serif Display', serif; font-size: 28px; color: var(--accent); margin-bottom: 8px; }
        .ag-step-title { font-weight: 600; font-size: 14px; margin-bottom: 4px; }
        .ag-step-desc { font-size: 13px; color: var(--ink-muted); line-height: 1.5; }

        .ag-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .ag-related-card {
          display: block; text-decoration: none; color: inherit;
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
          padding: 18px 16px; transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
          position: relative; overflow: hidden;
        }
        .ag-related-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.07); border-color: rgba(200,80,26,0.2); }
        .ag-related-icon { font-size: 22px; margin-bottom: 8px; }
        .ag-related-name { font-weight: 600; font-size: 13px; margin-bottom: 4px; line-height: 1.3; }
        .ag-related-desc { font-size: 12px; color: var(--ink-muted); line-height: 1.4; }

        .ag-cta-band { background: var(--surface-alt); padding: 56px 24px; text-align: center; }
        .ag-cta-band h2 { font-family: 'DM Serif Display', serif; font-size: 30px; font-weight: 400; margin-bottom: 12px; }
        .ag-cta-band p { color: var(--ink-soft); font-size: 15px; max-width: 480px; margin: 0 auto 24px; }

        .ag-footer { text-align: center; padding: 36px 24px; font-size: 13px; color: var(--ink-dim); border-top: 1px solid var(--border-soft); }
        .ag-footer a { color: var(--ink-muted); text-decoration: none; margin: 0 8px; }
        .ag-footer a:hover { color: var(--accent); }

        @media (max-width: 640px) {
          .ag-nav { padding: 0 20px; }
          .ag-steps { grid-template-columns: 1fr; }
          .ag-related-grid { grid-template-columns: 1fr 1fr; }
          .ag-wrap { padding: 0 16px; }
        }
        @media (max-width: 420px) {
          .ag-related-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* NAV */}
      <nav className="ag-nav">
        <Link href="/" className="ag-nav-logo">Prompt<span>Forge</span></Link>
        <Link href="/forge" className="ag-nav-cta">Open Forge</Link>
      </nav>

      {/* CONTENT */}
      <div className="ag-wrap">

        {/* Breadcrumb */}
        <nav className="ag-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={`/industry/${industrySlug}`}>{agent.industry}</Link>
          <span>/</span>
          {agent.name}
        </nav>

        {/* Hero */}
        <header className="ag-hero">
          <div className="ag-hero-eyebrow">{agent.industry} · AI System Prompt</div>
          <h1>{agent.name} — AI System Prompt</h1>
          <p className="ag-hero-desc">{agent.desc}. Deployment-ready in one click.</p>
          {agent.qualityScore && (
            <div style={{ marginBottom: 8 }}>
              <QualityBadge
                score={agent.qualityScore}
                tier1Passed={agent.tier1Pass ?? true}
                lastValidated={agent.validatedAt}
              />
            </div>
          )}
        </header>

        {/* Prompt Preview */}
        <section className="ag-section">
          <div className="ag-section-title">Preview</div>
          <div className="ag-preview-box">
            <div className="ag-preview-header">
              <span className="ag-preview-label">System Prompt</span>
              <span style={{ fontWeight: 500 }}>{agent.name}</span>
            </div>
            <div className="ag-preview-body">
              <pre className="ag-preview-text">{preview}</pre>
              <div className="ag-preview-gate">
                <p className="ag-preview-gate-text">
                  Full 8-section prompt — 600–900 words — generates free in one click
                </p>
                <Link href={`/forge?agent=${agent.id}`} className="ag-cta-btn">
                  Generate Full Prompt Free
                </Link>
                <p className="ag-cta-sub">No credit card required</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="ag-section">
          <div className="ag-section-title">How it works</div>
          <div className="ag-steps">
            <div className="ag-step">
              <div className="ag-step-num">1</div>
              <div className="ag-step-title">Select</div>
              <div className="ag-step-desc">Choose this agent in the Forge — no setup required.</div>
            </div>
            <div className="ag-step">
              <div className="ag-step-num">2</div>
              <div className="ag-step-title">Generate</div>
              <div className="ag-step-desc">Claude produces a full 8-section system prompt in seconds.</div>
            </div>
            <div className="ag-step">
              <div className="ag-step-num">3</div>
              <div className="ag-step-title">Deploy</div>
              <div className="ag-step-desc">Copy and paste into any AI tool — ChatGPT, Claude, your API.</div>
            </div>
          </div>
        </section>

        {/* Related Agents */}
        {related.length > 0 && (
          <section className="ag-section">
            <div className="ag-section-title">More {agent.industry} Agents</div>
            <div className="ag-related-grid">
              {related.map(rel => (
                <Link key={rel.id} href={`/agent/${rel.id}`} className="ag-related-card">
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: rel.color, borderRadius: '12px 12px 0 0' }} />
                  <div className="ag-related-icon">{rel.icon}</div>
                  <div className="ag-related-name">{rel.name}</div>
                  <div className="ag-related-desc">{rel.desc}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* CTA Band */}
      <section className="ag-cta-band">
        <h2>Generate your {agent.name} prompt</h2>
        <p>Full 8-section system prompt, deployment-ready in one click. Quality-verified by a 3-tier simulation gate.</p>
        <Link href={`/forge?agent=${agent.id}`} className="ag-cta-btn">
          Generate This Prompt Free
        </Link>
        <p className="ag-cta-sub" style={{ marginTop: 12 }}>Free to start · No account required for first 3 prompts</p>
      </section>

      {/* Footer */}
      <footer className="ag-footer">
        Prompt Forge by Hilbert Entertainment, LLC
        <span style={{ margin: '0 6px' }}>·</span>
        <Link href="/privacy">Privacy</Link>
        <span style={{ margin: '0 6px' }}>·</span>
        <Link href="/terms">Terms</Link>
      </footer>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: `${agent.name} AI System Prompt`,
            description: `Deployment-ready AI system prompt for ${agent.name}. ${agent.desc}. One-click generation for ${agent.industry} professionals.`,
            url: `${BASE}/agent/${agent.id}`,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            isPartOf: { '@type': 'WebSite', name: 'Prompt Forge', url: BASE },
          }),
        }}
      />
    </>
  )
}
