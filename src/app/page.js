import Link from 'next/link'
import { toSlug } from './data/industries'
import LandingTracker from './LandingTracker'
import VerticalSelector from './components/onboarding/VerticalSelector'
import BeforeAfter from './components/landing/BeforeAfter'
import HowItWorks from './components/landing/HowItWorks'
import SocialProof from './components/landing/SocialProof'
import FinalCTA from './components/landing/FinalCTA'

export const metadata = {
  title: 'Prompt Forge — One-Click AI Agent Prompts for Professionals',
  description: 'Generate deployment-ready AI agent system prompts in one click. 251 professional archetypes across 41 industries. Free to start.',
}

export default function Home() {
  // UPDATE THESE AFTER EVERY MAJOR INTEGRATION
  const TOTAL_AGENTS = 251
  const TOTAL_INDUSTRIES = 41
  const FREE_INDUSTRIES = 31
  const PRO_INDUSTRIES = 10
  const TOTAL_STARTERS = 24

  return (
    <>
      <LandingTracker />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #faf8f5;
          --bg-warm: #f2ede5;
          --surface: #ffffff;
          --surface-alt: #f2ede5;
          --border: rgba(15,14,13,0.10);
          --border-soft: rgba(15,14,13,0.06);
          --accent: #c8501a;
          --accent-hover: #8c3510;
          --accent-light: #f5ddd3;
          --accent-dim: rgba(200,80,26,0.08);
          --ink: #0f0e0d;
          --ink-soft: #4a4742;
          --ink-muted: #8a877f;
          --ink-dim: #b5b0a8;
          --radius: 12px;
          --radius-sm: 6px;
          --radius-lg: 16px;
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          line-height: 1.6;
          font-size: 16px;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

        /* ── NAV ── */
        .lp-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 62px;
          background: rgba(250,248,245,0.88);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .lp-nav-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 21px; letter-spacing: -0.02em;
          color: var(--ink); text-decoration: none;
        }
        .lp-nav-logo span { color: var(--accent); }
        .lp-nav-links { display: flex; align-items: center; gap: 32px; }
        .lp-nav-links a {
          color: var(--ink-muted); text-decoration: none;
          font-size: 14px; font-weight: 400; transition: color 0.2s;
        }
        .lp-nav-links a:hover { color: var(--ink); }
        .lp-nav-cta {
          background: var(--ink); color: var(--bg);
          padding: 9px 20px; border-radius: var(--radius-sm);
          font-weight: 500; font-size: 14px; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .lp-nav-cta:hover { background: var(--accent); transform: translateY(-1px); }

        /* ── HERO ── */
        .lp-hero {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 120px 24px 80px;
          position: relative; overflow: hidden;
        }
        .lp-hero-bg {
          position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 80% 55% at 50% 0%, rgba(200,80,26,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 15% 85%, rgba(200,80,26,0.04) 0%, transparent 60%);
        }
        .lp-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(200,80,26,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,80,26,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        .lp-hero-inner { position: relative; z-index: 2; max-width: 900px; text-align: center; }

        .lp-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent-light);
          border: 1px solid rgba(200,80,26,0.2);
          border-radius: 20px; padding: 6px 16px; margin-bottom: 32px;
          animation: fadeUp 0.6s ease both;
        }
        .lp-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent);
          animation: lp-pulse 2s infinite;
        }
        @keyframes lp-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .lp-badge span { font-size: 12px; color: var(--accent-hover); font-weight: 500; letter-spacing: 0.04em; }

        .lp-headline {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: clamp(52px, 8vw, 96px);
          line-height: 0.97; letter-spacing: -0.03em;
          margin-bottom: 28px;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .lp-headline .l1 { display: block; color: var(--ink); }
        .lp-headline .l2 { display: block; color: var(--accent); font-style: italic; }

        .lp-sub {
          font-size: clamp(17px, 2.5vw, 20px);
          color: var(--ink-soft); max-width: 560px;
          margin: 0 auto 48px;
          font-weight: 300; line-height: 1.7;
          animation: fadeUp 0.6s 0.2s ease both;
        }
        .lp-sub strong { color: var(--ink); font-weight: 500; }

        .lp-actions {
          display: flex; align-items: center; justify-content: center;
          gap: 14px; flex-wrap: wrap; margin-bottom: 48px;
          animation: fadeUp 0.6s 0.3s ease both;
        }
        .lp-btn-primary {
          background: var(--accent); color: #fff;
          padding: 14px 30px; border-radius: var(--radius-sm);
          font-weight: 500; font-size: 15px; text-decoration: none;
          transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px;
        }
        .lp-btn-primary:hover { background: var(--accent-hover); transform: translateY(-2px); box-shadow: 0 10px 32px rgba(200,80,26,0.25); }
        .lp-btn-secondary {
          background: transparent; color: var(--ink-soft);
          padding: 14px 26px; border-radius: var(--radius-sm);
          font-weight: 400; font-size: 15px; text-decoration: none;
          transition: all 0.2s; border: 1px solid var(--border);
        }
        .lp-btn-secondary:hover { border-color: rgba(15,14,13,0.25); color: var(--ink); background: var(--bg-warm); }

        .lp-proof {
          display: flex; align-items: center; justify-content: center;
          gap: 28px; flex-wrap: wrap;
          animation: fadeUp 0.6s 0.4s ease both;
        }
        .lp-proof-item { display: flex; align-items: center; gap: 7px; font-size: 13px; color: var(--ink-dim); }
        .lp-proof-icon { color: #2d9e6b; font-size: 13px; }

        .lp-chips {
          display: flex; align-items: center; justify-content: center;
          gap: 8px; flex-wrap: wrap; margin-bottom: 40px;
          animation: fadeUp 0.6s 0.25s ease both;
        }
        .lp-chip {
          font-size: 12px; color: var(--ink-muted);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 20px; padding: 5px 14px;
          font-weight: 400; white-space: nowrap;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }


        /* ── SECTIONS ── */
        .lp-section { padding: 100px 24px; }
        .lp-section-alt { background: var(--surface-alt); }
        .lp-section-inner { max-width: 900px; margin: 0 auto; }

        .lp-label {
          font-size: 11px; color: var(--accent);
          letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 16px; display: block; font-weight: 500;
        }
        .lp-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 400; line-height: 1.1;
          letter-spacing: -0.02em; color: var(--ink); margin-bottom: 20px;
        }
        .lp-title .acc { color: var(--accent); font-style: italic; }
        .lp-body { font-size: 17px; color: var(--ink-soft); line-height: 1.75; max-width: 600px; font-weight: 300; }


        /* ── INDUSTRIES ── */
        .lp-ind-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px; margin-top: 56px;
        }
        .lp-ind-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 22px;
          transition: all 0.2s; position: relative;
        }
        .lp-ind-card:hover { border-color: rgba(200,80,26,0.25); transform: translateY(-3px); box-shadow: 0 14px 40px rgba(15,14,13,0.08); }
        .lp-ind-icon { font-size: 26px; margin-bottom: 10px; display: block; }
        .lp-ind-name { font-size: 15px; font-weight: 500; color: var(--ink); margin-bottom: 5px; display: flex; align-items: center; gap: 8px; }
        .lp-ind-count { font-size: 11px; color: var(--accent); letter-spacing: 0.06em; font-weight: 500; text-transform: uppercase; }
        .lp-ind-agents { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 5px; }
        .lp-ind-agent {
          font-size: 10px; color: var(--ink-muted);
          background: var(--bg-warm); border: 1px solid var(--border-soft);
          border-radius: 4px; padding: 2px 8px;
        }
        .lp-pro-badge {
          font-size: 9px; font-weight: 500; color: #fff;
          background: var(--accent); padding: 2px 7px;
          border-radius: 4px; letter-spacing: 0.04em; flex-shrink: 0;
        }
        .lp-ind-more {
          display: flex; align-items: center; justify-content: center;
          background: var(--surface);
          border: 1px dashed rgba(15,14,13,0.15);
          border-radius: var(--radius); padding: 22px;
          font-size: 15px; font-weight: 400; color: var(--ink-muted);
          transition: all 0.2s; text-decoration: none;
        }
        .lp-ind-more:hover { border-color: rgba(200,80,26,0.3); color: var(--accent); }
        .lp-ind-cta { text-align: center; margin-top: 48px; }

        /* ── PRICING ── */
        .lp-pricing-cards {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 20px; margin-top: 56px;
          text-align: left; max-width: 760px;
          margin-left: auto; margin-right: auto;
        }
        .lp-pricing-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-lg); padding: 32px; position: relative;
        }
        .lp-pricing-card.featured {
          border-color: rgba(200,80,26,0.35);
          box-shadow: 0 0 0 1px rgba(200,80,26,0.08), 0 24px 60px rgba(15,14,13,0.08);
        }
        .lp-featured-badge {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: var(--accent); color: #fff;
          font-size: 10px; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 4px 14px; border-radius: 20px; white-space: nowrap;
        }
        .lp-plan-name { font-size: 12px; font-weight: 500; color: var(--ink-muted); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.08em; }
        .lp-plan-price {
          font-family: 'DM Serif Display', serif;
          font-size: 48px; color: var(--ink); line-height: 1; margin-bottom: 6px;
        }
        .lp-plan-price span { font-size: 18px; color: var(--ink-muted); font-family: 'DM Sans', sans-serif; font-weight: 300; }
        .lp-plan-desc { font-size: 13px; color: var(--ink-muted); margin-bottom: 28px; font-weight: 300; }
        .lp-plan-features { list-style: none; margin-bottom: 28px; }
        .lp-plan-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--ink-soft); margin-bottom: 10px; font-weight: 300; }
        .lp-feat-check { color: #2d9e6b; flex-shrink: 0; margin-top: 1px; }
        .lp-feat-x { color: var(--ink-dim); flex-shrink: 0; margin-top: 1px; }
        .lp-plan-btn {
          display: block; text-align: center; text-decoration: none;
          padding: 12px; border-radius: var(--radius-sm);
          font-weight: 500; font-size: 14px; transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .lp-plan-btn.free { background: transparent; border: 1px solid var(--border); color: var(--ink-soft); }
        .lp-plan-btn.free:hover { border-color: rgba(15,14,13,0.25); color: var(--ink); background: var(--bg-warm); }
        .lp-plan-btn.pro { background: var(--accent); color: #fff; }
        .lp-plan-btn.pro:hover { background: var(--accent-hover); transform: translateY(-1px); }


        /* ── FOOTER ── */
        .lp-footer {
          padding: 28px 48px;
          border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
          background: var(--bg);
        }
        .lp-footer-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 17px; color: var(--ink); letter-spacing: -0.01em;
        }
        .lp-footer-logo span { color: var(--accent); }
        .lp-footer-links { display: flex; gap: 24px; }
        .lp-footer-links a { font-size: 13px; color: var(--ink-dim); text-decoration: none; transition: color 0.2s; }
        .lp-footer-links a:hover { color: var(--accent); }
        .lp-footer-copy { font-size: 12px; color: var(--ink-dim); }

        /* ── RESPONSIVE ── */
        @media(max-width:768px){
          .lp-nav { padding: 0 20px; }
          .lp-nav-links { display: none; }
          .lp-pricing-cards { grid-template-columns: 1fr; }
          .lp-footer { flex-direction: column; text-align: center; padding: 28px 20px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="lp-nav">
        <a href="/" className="lp-nav-logo">Prompt<span>Forge</span></a>
        <div className="lp-nav-links">
          <a href="#how">How It Works</a>
          <a href="#industries">Industries</a>
          <a href="#pricing">Pricing</a>
        </div>
        <Link href="/forge" className="lp-nav-cta">Start Forging Free →</Link>
      </nav>

      {/* HERO */}
      <section className="lp-hero">
        <div className="lp-hero-bg">
          <div className="lp-grid"></div>
        </div>
        <div className="lp-hero-inner">
          <div className="lp-badge">
            <div className="lp-badge-dot"></div>
            <span>Live Now · Free to Try</span>
          </div>
          <h1 className="lp-headline">
            <span className="l1">AI That Actually</span>
            <span className="l2">Works For You</span>
          </h1>
          <p className="lp-sub">
            Most people use AI like a search engine. The professionals getting real results use{' '}
            <strong>system prompts</strong> — and Prompt Forge builds them in one click.
          </p>
          <div className="lp-chips">
            <span className="lp-chip" data-filter="onboarding">Client onboarding</span>
            <span className="lp-chip" data-filter="finance">Financial analysis</span>
            <span className="lp-chip" data-filter="email">Email triage</span>
            <span className="lp-chip" data-filter="content">Content creation</span>
            <span className="lp-chip" data-filter="research">Research &amp; intel</span>
            <span className="lp-chip" data-filter="automation">Process automation</span>
          </div>
          <div className="lp-actions">
            <Link href="/forge" className="lp-btn-primary">Start Forging Free →</Link>
            <a href="#how" className="lp-btn-secondary">See How It Works</a>
          </div>
          <div className="lp-proof">
            <div className="lp-proof-item"><span className="lp-proof-icon">✓</span> No account required</div>
            <div className="lp-proof-item"><span className="lp-proof-icon">✓</span> 3 free generates</div>
            <div className="lp-proof-item"><span className="lp-proof-icon">✓</span> Works with any AI tool</div>
            <div className="lp-proof-item"><span className="lp-proof-icon">✓</span> Deploy in 30 seconds</div>
          </div>
        </div>
      </section>

      {/* VERTICAL SELECTOR — intent-first onboarding */}
      <section style={{ background: 'var(--bg-warm)', padding: '80px 24px', textAlign: 'center' }}>
        <VerticalSelector />
      </section>

      {/* BEFORE / AFTER */}
      <BeforeAfter />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* INDUSTRIES / AGENT PREVIEW */}
      <section className="lp-section" id="industries">
        <div className="lp-section-inner">
          <span className="lp-label">{TOTAL_AGENTS} Agents · {TOTAL_INDUSTRIES} Industries</span>
          <h2 className="lp-title">Built for <span className="acc">professionals</span>,<br/>not hobbyists.</h2>
          <p className="lp-body">Every agent archetype is curated for real business use — not generic chat helpers.</p>
          <div className="lp-ind-grid">
            {[
              { icon:'⚡', name:'General', count:'15 AGENTS', agents:['SOP Generator','Email Draft','Cybersecurity Advisor','Data Analyst','Financial Modeler'] },
              { icon:'🏥', name:'Healthcare', count:'6 AGENTS', agents:['Medical Scribe','Prior Auth','Patient Triage','Clinical Trial'] },
              { icon:'📊', name:'Finance', count:'5 AGENTS', agents:['Autonomous Close','Credit Risk','Tax Strategy'] },
              { icon:'📣', name:'Comms & Sales', count:'8 AGENTS', agents:['Autonomous SDR','Call Center','Content Repurposer','Email Sequence'] },
              { icon:'🎓', name:'Education', count:'7 AGENTS', agents:['Curriculum Designer','Career Coach','Grant Writer'] },
              { icon:'🏡', name:'Real Estate', count:'6 AGENTS', agents:['Listing Generator','Market Comp','Lead Nurture'] },
              { icon:'📈', name:'Marketing & Growth', count:'6 AGENTS', agents:['SEO Content','Campaign Optimizer','A/B Test Analyst'] },
              { icon:'🧠', name:'AI Agent Development', count:'10 AGENTS', pro:true, agents:['Agent Architecture','SOUL.md Writer','Multi-Agent Orchestrator'] },
              { icon:'🔎', name:'Cyber Intelligence', count:'10 AGENTS', pro:true, agents:['OSINT Planner','Threat Intel','Digital Footprint'] },
            ].map(ind => (
              <Link href={`/industry/${toSlug(ind.name)}`} className="lp-ind-card" key={ind.name} style={{textDecoration:'none',color:'inherit'}}>
                <span className="lp-ind-icon">{ind.icon}</span>
                <div className="lp-ind-name">{ind.name}{ind.pro && <span className="lp-pro-badge">PRO</span>}</div>
                <div className="lp-ind-count">{ind.count}</div>
                <div className="lp-ind-agents">
                  {ind.agents.map(a => <span className="lp-ind-agent" key={a}>{a}</span>)}
                </div>
              </Link>
            ))}
            <Link href="/forge" className="lp-ind-more">Browse all 251 agents →</Link>
          </div>
          <div className="lp-ind-cta">
            <Link href="/forge" className="lp-btn-primary">Build my first agent free →</Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <SocialProof count={1247} />

      {/* PRICING */}
      <section className="lp-section lp-section-alt" id="pricing">
        <div className="lp-section-inner" style={{textAlign:'center'}}>
          <span className="lp-label">Pricing</span>
          <h2 className="lp-title">Start free.<br/><span className="acc">Upgrade when it clicks.</span></h2>
          <div className="lp-pricing-cards">
            <div className="lp-pricing-card">
              <div className="lp-plan-name">Free</div>
              <div className="lp-plan-price">$0</div>
              <div className="lp-plan-desc">No account. No credit card. Just try it.</div>
              <ul className="lp-plan-features">
                <li><span className="lp-feat-check">✓</span> 3 agent generates</li>
                <li><span className="lp-feat-check">✓</span> {FREE_INDUSTRIES} free industries</li>
                <li><span className="lp-feat-check">✓</span> {TOTAL_STARTERS}-prompt Starter Pack</li>
                <li><span className="lp-feat-x">×</span> Save to personal library</li>
                <li><span className="lp-feat-x">×</span> Personalized prompts</li>
                <li><span className="lp-feat-x">×</span> Prompt refinement</li>
                <li><span className="lp-feat-x">×</span> Pro-only industries ({PRO_INDUSTRIES})</li>
                <li><span className="lp-feat-x">×</span> Custom agent builder</li>
              </ul>
              <Link href="/forge" className="lp-plan-btn free">Start Free →</Link>
            </div>
            <div className="lp-pricing-card featured">
              <div className="lp-featured-badge">MOST POPULAR</div>
              <div className="lp-plan-name">Pro</div>
              <div className="lp-plan-price">$12 <span>/ month</span></div>
              <div className="lp-plan-desc">For professionals who use AI every day.</div>
              <ul className="lp-plan-features">
                <li><span className="lp-feat-check">✓</span> Unlimited generates</li>
                <li><span className="lp-feat-check">✓</span> All {TOTAL_INDUSTRIES} industries including Pro-only</li>
                <li><span className="lp-feat-check">✓</span> {TOTAL_STARTERS}-prompt Starter Pack</li>
                <li><span className="lp-feat-check">✓</span> Personalized prompts (describe your role)</li>
                <li><span className="lp-feat-check">✓</span> Prompt refinement (iterate on outputs)</li>
                <li><span className="lp-feat-check">✓</span> Pro-only industries (Cyber Intelligence, AI Agent Dev…)</li>
                <li><span className="lp-feat-check">✓</span> Save to personal library</li>
                <li><span className="lp-feat-check">✓</span> Custom agent builder</li>
                <li><span className="lp-feat-check">✓</span> Priority generation</li>
              </ul>
              <Link href="/forge" className="lp-plan-btn pro">Upgrade to Pro →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />

      {/* FOOTER */}
      <footer className="lp-footer">
        <div className="lp-footer-logo">Prompt<span>Forge</span></div>
        <div className="lp-footer-links">
          <Link href="/forge">Launch App</Link>
          <a href="#pricing">Pricing</a>
          <a href="#industries">Industries</a>
        </div>
        <div className="lp-footer-copy">© 2026 Prompt Forge · getpromptforge.net</div>
      </footer>
    </>
  )
}
