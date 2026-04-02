import Link from 'next/link'
import { INDUSTRIES, PRO_INDUSTRIES, INDUSTRY_TABS, INDUSTRY_META, toSlug, fromSlug } from '../../data/industries'

// ─── Static Params ──────────────────────────────────────────────────────────
export function generateStaticParams() {
  return INDUSTRY_TABS.map(name => ({ slug: toSlug(name) }))
}

// ─── Dynamic Metadata ───────────────────────────────────────────────────────
export function generateMetadata({ params }) {
  const name = fromSlug(params.slug)
  if (!name) return { title: 'Industry Not Found | Prompt Forge' }

  const agents = INDUSTRIES[name] || []
  const meta = INDUSTRY_META[name] || {}
  const first3 = agents.slice(0, 3).map(a => a.name).join(', ')
  const slug = params.slug

  return {
    title: `AI Agents for ${name} — ${agents.length} System Prompts | Prompt Forge`,
    description: `${agents.length} deployment-ready AI agent prompts for ${name}: ${first3}, and more. Generate structured system prompts in one click.`,
    openGraph: {
      title: `AI Agents for ${name} — ${agents.length} System Prompts | Prompt Forge`,
      description: meta.description || '',
      url: `https://getpromptforge.net/industry/${slug}`,
      siteName: 'Prompt Forge',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `AI Agents for ${name} | Prompt Forge`,
      description: `${agents.length} deployment-ready AI agent prompts for ${name}.`,
    },
    alternates: {
      canonical: `https://getpromptforge.net/industry/${slug}`,
    },
  }
}

// ─── Page Component ─────────────────────────────────────────────────────────
export default function IndustryPage({ params }) {
  const name = fromSlug(params.slug)

  // 404 handling
  if (!name) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, fontFamily: "'DM Sans', sans-serif" }}>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32 }}>Industry not found</h1>
        <p style={{ color: '#8a877f' }}>The industry you're looking for doesn't exist.</p>
        <Link href="/" style={{ color: '#c8501a', textDecoration: 'none', fontWeight: 500 }}>← Back to Home</Link>
      </div>
    )
  }

  const agents = INDUSTRIES[name] || []
  const meta = INDUSTRY_META[name] || {}
  const slug = params.slug
  const isPro = PRO_INDUSTRIES.includes(name)
  const featured = agents[0]

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #faf8f5; --bg-warm: #f2ede5; --surface: #ffffff; --surface-alt: #f2ede5;
          --border: rgba(15,14,13,0.10); --border-soft: rgba(15,14,13,0.06);
          --accent: #c8501a; --accent-hover: #8c3510; --accent-light: #f5ddd3; --accent-dim: rgba(200,80,26,0.08);
          --ink: #0f0e0d; --ink-soft: #4a4742; --ink-muted: #8a877f; --ink-dim: #b5b0a8;
          --radius: 12px; --radius-sm: 6px; --radius-lg: 16px;
        }

        body {
          background: var(--bg); color: var(--ink);
          font-family: 'DM Sans', sans-serif; line-height: 1.6; font-size: 16px;
          -webkit-font-smoothing: antialiased;
        }

        /* ── NAV ── */
        .ind-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 62px;
          background: rgba(250,248,245,0.88);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .ind-nav-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 21px; letter-spacing: -0.02em;
          color: var(--ink); text-decoration: none;
        }
        .ind-nav-logo span { color: var(--accent); }
        .ind-nav-links { display: flex; align-items: center; gap: 32px; }
        .ind-nav-links a {
          color: var(--ink-muted); text-decoration: none;
          font-size: 14px; font-weight: 400; transition: color 0.2s;
        }
        .ind-nav-links a:hover { color: var(--ink); }
        .ind-nav-cta {
          background: var(--ink); color: var(--bg);
          padding: 9px 20px; border-radius: var(--radius-sm);
          font-weight: 500; font-size: 14px; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .ind-nav-cta:hover { background: var(--accent); transform: translateY(-1px); }

        /* ── BREADCRUMB ── */
        .ind-breadcrumb {
          padding: 84px 48px 0;
          font-size: 13px; color: var(--ink-muted);
          max-width: 1200px; margin: 0 auto;
        }
        .ind-breadcrumb a { color: var(--ink-muted); text-decoration: none; }
        .ind-breadcrumb a:hover { color: var(--accent); }
        .ind-breadcrumb span { margin: 0 8px; opacity: 0.5; }

        /* ── HERO ── */
        .ind-hero {
          text-align: center; padding: 48px 24px 56px;
          max-width: 800px; margin: 0 auto;
        }
        .ind-hero-icon { font-size: 48px; margin-bottom: 16px; }
        .ind-hero h1 {
          font-family: 'DM Serif Display', serif;
          font-size: 42px; letter-spacing: -0.02em;
          line-height: 1.15; margin-bottom: 16px; font-weight: 400;
        }
        .ind-hero h1 em {
          color: var(--accent); font-style: italic;
        }
        .ind-pro-badge {
          display: inline-block;
          background: var(--accent-light); color: var(--accent);
          font-size: 11px; font-weight: 700; letter-spacing: 0.05em;
          padding: 3px 10px; border-radius: 20px;
          margin-left: 12px; vertical-align: middle;
        }
        .ind-hero-desc {
          color: var(--ink-soft); font-size: 17px;
          line-height: 1.7; max-width: 640px; margin: 0 auto 32px;
        }
        .ind-stats {
          display: flex; justify-content: center; gap: 40px;
          flex-wrap: wrap;
        }
        .ind-stat { text-align: center; }
        .ind-stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 28px; color: var(--accent);
        }
        .ind-stat-label {
          font-size: 13px; color: var(--ink-muted); margin-top: 2px;
        }

        /* ── AGENT GRID ── */
        .ind-grid-section {
          max-width: 1200px; margin: 0 auto;
          padding: 0 48px 64px;
        }
        .ind-grid-title {
          font-family: 'DM Serif Display', serif;
          font-size: 24px; margin-bottom: 24px; font-weight: 400;
        }
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .ind-card {
          position: relative;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px 24px;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .ind-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }
        .ind-card-icon { font-size: 28px; margin-bottom: 12px; }
        .ind-card-name {
          font-weight: 600; font-size: 15px;
          margin-bottom: 6px; color: var(--ink);
        }
        .ind-card-desc {
          font-size: 13px; color: var(--ink-muted); line-height: 1.5;
        }
        .ind-card-new {
          position: absolute; top: 12px; right: 12px;
          background: var(--accent); color: #fff;
          font-size: 10px; font-weight: 700; letter-spacing: 0.05em;
          padding: 2px 8px; border-radius: 10px;
        }

        /* ── SAMPLE PREVIEW ── */
        .ind-preview-section {
          max-width: 800px; margin: 0 auto 64px;
          padding: 0 48px;
        }
        .ind-preview {
          border-radius: var(--radius);
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .ind-preview-header {
          background: var(--ink);
          color: var(--bg);
          padding: 14px 24px;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 13px;
        }
        .ind-preview-label {
          font-weight: 700; letter-spacing: 0.08em; font-size: 11px;
          opacity: 0.6; text-transform: uppercase;
        }
        .ind-preview-agent { font-weight: 500; }
        .ind-preview-body {
          background: var(--surface);
          padding: 28px 24px;
          position: relative;
        }
        .ind-preview-section-title {
          font-weight: 700; font-size: 12px;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 8px;
        }
        .ind-preview-text {
          font-size: 14px; color: var(--ink-soft);
          line-height: 1.7; margin-bottom: 24px;
        }
        .ind-preview-fade {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(transparent, var(--surface));
          display: flex; align-items: flex-end; justify-content: center;
          padding-bottom: 16px;
          font-size: 13px; color: var(--ink-muted); font-weight: 500;
        }

        /* ── CTA ── */
        .ind-cta-section {
          background: var(--surface-alt);
          padding: 64px 24px;
          text-align: center;
        }
        .ind-cta-title {
          font-family: 'DM Serif Display', serif;
          font-size: 32px; margin-bottom: 16px; font-weight: 400;
        }
        .ind-cta-desc {
          color: var(--ink-soft); font-size: 16px;
          max-width: 520px; margin: 0 auto 28px; line-height: 1.6;
        }
        .ind-cta-btn {
          display: inline-block;
          background: var(--accent); color: #fff;
          padding: 14px 36px; border-radius: var(--radius-sm);
          font-weight: 600; font-size: 16px; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .ind-cta-btn:hover { background: var(--accent-hover); transform: translateY(-1px); }
        .ind-cta-sub {
          margin-top: 12px; font-size: 13px; color: var(--ink-muted);
        }

        /* ── FOOTER ── */
        .ind-footer {
          text-align: center; padding: 40px 24px;
          font-size: 13px; color: var(--ink-dim);
          border-top: 1px solid var(--border-soft);
        }
        .ind-footer a { color: var(--ink-muted); text-decoration: none; margin: 0 8px; }
        .ind-footer a:hover { color: var(--accent); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .ind-nav { padding: 0 20px; }
          .ind-nav-link-text { display: none; }
          .ind-breadcrumb { padding: 84px 20px 0; }
          .ind-hero { padding: 32px 20px 40px; }
          .ind-hero h1 { font-size: 28px; }
          .ind-hero-desc { font-size: 15px; }
          .ind-stats { gap: 24px; }
          .ind-grid-section { padding: 0 20px 48px; }
          .ind-grid { grid-template-columns: 1fr; }
          .ind-preview-section { padding: 0 20px; }
          .ind-cta-title { font-size: 24px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="ind-nav">
        <Link href="/" className="ind-nav-logo">
          Prompt<span>Forge</span>
        </Link>
        <div className="ind-nav-links">
          <Link href="/#industries" className="ind-nav-link-text">Industries</Link>
          <Link href="/#pricing" className="ind-nav-link-text">Pricing</Link>
          <Link href="/forge" className="ind-nav-cta">Open Forge</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div className="ind-breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/#industries">Industries</Link>
        <span>/</span>
        {name}
      </div>

      {/* HERO */}
      <section className="ind-hero">
        <div className="ind-hero-icon">{meta.icon || '⚡'}</div>
        <h1>
          AI Agents for <em>{name}</em>
          {isPro && <span className="ind-pro-badge">PRO</span>}
        </h1>
        <p className="ind-hero-desc">{meta.description || ''}</p>
        <div className="ind-stats">
          <div className="ind-stat">
            <div className="ind-stat-num">{agents.length}</div>
            <div className="ind-stat-label">AI Agents</div>
          </div>
          <div className="ind-stat">
            <div className="ind-stat-num">8</div>
            <div className="ind-stat-label">Sections per prompt</div>
          </div>
          <div className="ind-stat">
            <div className="ind-stat-num">1</div>
            <div className="ind-stat-label">Click to generate</div>
          </div>
        </div>
      </section>

      {/* AGENT GRID */}
      <section className="ind-grid-section">
        <h2 className="ind-grid-title">All {name} Agents</h2>
        <div className="ind-grid">
          {agents.map(agent => (
            <div key={agent.id} className="ind-card">
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: agent.color, borderRadius: '12px 12px 0 0' }} />
              {agent.isNew && <div className="ind-card-new">NEW</div>}
              <div className="ind-card-icon">{agent.icon}</div>
              <div className="ind-card-name">{agent.name}</div>
              <div className="ind-card-desc">{agent.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE PROMPT PREVIEW */}
      {featured && (
        <section className="ind-preview-section">
          <div className="ind-preview">
            <div className="ind-preview-header">
              <span className="ind-preview-label">Sample Output</span>
              <span className="ind-preview-agent">{featured.name}</span>
            </div>
            <div className="ind-preview-body">
              <div className="ind-preview-section-title">Agent Identity</div>
              <p className="ind-preview-text">
                You are a {featured.name}, a specialized AI agent designed for the {name} industry.
                Your primary function is {featured.desc.toLowerCase()}. You operate with domain expertise
                and follow industry best practices to deliver precise, actionable outputs.
              </p>

              <div className="ind-preview-section-title">Core Capabilities</div>
              <p className="ind-preview-text">
                You excel at task analysis, structured problem-solving, and generating professional
                deliverables specific to {name}. You adapt your communication style to match the
                user&apos;s expertise level while maintaining technical accuracy throughout every interaction.
              </p>

              <div className="ind-preview-section-title">Behavioral Guidelines</div>
              <p className="ind-preview-text">
                Always clarify ambiguous requests before proceeding. Provide sources and reasoning
                for recommendations. Maintain a professional yet approachable tone suited to {name} professionals.
              </p>

              <div className="ind-preview-fade">
                + 5 more sections in full output
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="ind-cta-section">
        <h2 className="ind-cta-title">Generate your {name} agent prompt</h2>
        <p className="ind-cta-desc">
          {isPro
            ? `Unlock all ${agents.length} ${name} agents with a Pro subscription. Full 8-section system prompts, one-click generation, copy-paste deployment.`
            : `Generate deployment-ready system prompts for all ${agents.length} ${name} agents. Full 8-section output, one click, completely free.`
          }
        </p>
        <Link href={`/forge?industry=${slug}`} className="ind-cta-btn">
          Open the Forge
        </Link>
        <div className="ind-cta-sub">
          {isPro ? '$12/month — cancel anytime' : 'Free to start — no account required'}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ind-footer">
        Prompt Forge by Hilbert Entertainment, LLC
        <span style={{ margin: '0 6px' }}>·</span>
        <Link href="/privacy">Privacy</Link>
        <span style={{ margin: '0 6px' }}>·</span>
        <Link href="/terms">Terms</Link>
      </footer>

      {/* JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `AI Agents for ${name}`,
            description: meta.description,
            url: `https://getpromptforge.net/industry/${slug}`,
            isPartOf: {
              '@type': 'WebSite',
              name: 'Prompt Forge',
              url: 'https://getpromptforge.net',
            },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: agents.length,
              itemListElement: agents.map((agent, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: agent.name,
                description: agent.desc,
              })),
            },
          }),
        }}
      />
    </>
  )
}
