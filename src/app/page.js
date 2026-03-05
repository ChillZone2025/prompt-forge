import Link from 'next/link'

export const metadata = {
  title: 'Prompt Forge — One-Click AI Agent Prompts for Professionals',
  description: 'Generate deployment-ready AI agent system prompts in one click. 47 professional archetypes across 8 industries. Free to start.',
}

export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0d0f1a; --surface: #1c1f30; --border: #2a2d42;
          --yellow: #f5c518; --yellow-dim: rgba(245,197,24,0.12);
          --text: #e5e7eb; --muted: #6b7280; --dim: #374151;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; line-height: 1.6; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

        .lp-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 48px;
          background: rgba(13,15,26,0.85); backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(42,45,66,0.6);
        }
        .lp-nav-logo { font-family: 'Syne', sans-serif; font-weight: 900; font-size: 20px; color: var(--yellow); letter-spacing: 0.04em; text-decoration: none; }
        .lp-nav-logo span { color: var(--text); }
        .lp-nav-links { display: flex; align-items: center; gap: 32px; }
        .lp-nav-links a { color: var(--muted); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .lp-nav-links a:hover { color: var(--text); }
        .lp-nav-cta { background: var(--yellow); color: #0d0f1a; padding: 9px 20px; border-radius: 8px; font-weight: 700; font-size: 14px; text-decoration: none; transition: all 0.2s; }
        .lp-nav-cta:hover { background: #ffd740; }

        .lp-hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 120px 24px 80px; position: relative; overflow: hidden; }
        .lp-hero-bg { position: absolute; inset: 0; pointer-events: none; }
        .lp-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(245,197,24,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.03) 1px, transparent 1px); background-size: 56px 56px; }
        .lp-glow1 { position: absolute; width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 65%); top: -200px; left: 50%; transform: translateX(-50%); }
        .lp-glow2 { position: absolute; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%); bottom: 0; right: -100px; }

        .lp-hero-inner { position: relative; z-index: 2; max-width: 900px; text-align: center; }
        .lp-badge { display: inline-flex; align-items: center; gap: 8px; background: var(--yellow-dim); border: 1px solid rgba(245,197,24,0.2); border-radius: 20px; padding: 6px 16px; margin-bottom: 32px; }
        .lp-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--yellow); animation: lp-pulse 2s infinite; }
        @keyframes lp-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .lp-badge span { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--yellow); letter-spacing: 0.06em; }

        .lp-headline { font-family: 'Syne', sans-serif; font-weight: 900; font-size: clamp(52px,8vw,96px); line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 28px; }
        .lp-headline .l1 { display: block; color: var(--text); }
        .lp-headline .l2 { display: block; background: linear-gradient(120deg,#f5c518,#ffd740,#f5c518); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: 200% auto; animation: lp-shimmer 3s linear infinite; }
        @keyframes lp-shimmer { to { background-position: 200% center; } }

        .lp-sub { font-size: clamp(17px,2.5vw,21px); color: var(--muted); max-width: 580px; margin: 0 auto 48px; font-weight: 400; line-height: 1.65; }
        .lp-sub strong { color: #9ca3af; font-weight: 500; }

        .lp-actions { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; }
        .lp-btn-primary { background: var(--yellow); color: #0d0f1a; padding: 15px 32px; border-radius: 10px; font-weight: 700; font-size: 16px; text-decoration: none; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .lp-btn-primary:hover { background: #ffd740; transform: translateY(-2px); box-shadow: 0 12px 40px rgba(245,197,24,0.25); }
        .lp-btn-secondary { background: transparent; color: var(--muted); padding: 15px 28px; border-radius: 10px; font-weight: 500; font-size: 16px; text-decoration: none; transition: all 0.2s; border: 1px solid var(--border); }
        .lp-btn-secondary:hover { border-color: #4a4d62; color: var(--text); }

        .lp-proof { display: flex; align-items: center; justify-content: center; gap: 32px; flex-wrap: wrap; }
        .lp-proof-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--dim); }
        .lp-proof-icon { color: #10b981; }

        .lp-stats-bar { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 40px 24px; }
        .lp-stats-inner { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); text-align: center; }
        .lp-stat { padding: 0 24px; }
        .lp-stat + .lp-stat { border-left: 1px solid var(--border); }
        .lp-stat-num { font-family: 'Syne', sans-serif; font-size: 40px; font-weight: 900; color: var(--yellow); display: block; line-height: 1; margin-bottom: 8px; }
        .lp-stat-label { font-size: 13px; color: var(--muted); font-weight: 500; }

        .lp-section { padding: 100px 24px; }
        .lp-section-inner { max-width: 900px; margin: 0 auto; }
        .lp-section-alt { background: var(--surface); }
        .lp-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--yellow); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 16px; display: block; }
        .lp-title { font-family: 'Syne', sans-serif; font-size: clamp(32px,5vw,52px); font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; color: var(--text); margin-bottom: 20px; }
        .lp-title .acc { color: var(--yellow); }
        .lp-body { font-size: 17px; color: var(--muted); line-height: 1.75; max-width: 600px; }

        .lp-problem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 56px; }
        .lp-problem-card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 28px; position: relative; overflow: hidden; }
        .lp-problem-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background: linear-gradient(90deg, transparent, rgba(239,68,68,0.4), transparent); }
        .lp-prob-icon { font-size: 28px; margin-bottom: 14px; display: block; }
        .lp-prob-title { font-size: 16px; font-weight: 600; color: var(--text); margin-bottom: 8px; }
        .lp-prob-desc { font-size: 14px; color: var(--muted); line-height: 1.65; }

        .lp-steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 32px; margin-top: 56px; position: relative; }
        .lp-steps::before { content:''; position:absolute; top:28px; left:15%; right:15%; height:1px; background: linear-gradient(90deg,transparent,var(--border) 20%,var(--border) 80%,transparent); }
        .lp-step { text-align: center; }
        .lp-step-num { width:56px; height:56px; border-radius:50%; background:var(--yellow-dim); border:1px solid rgba(245,197,24,0.25); display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; font-weight:900; font-size:20px; color:var(--yellow); margin:0 auto 20px; position:relative; z-index:1; }
        .lp-step-title { font-size: 16px; font-weight: 600; color: var(--text); margin-bottom: 10px; }
        .lp-step-desc { font-size: 14px; color: var(--muted); line-height: 1.65; }

        .lp-ind-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 16px; margin-top: 56px; }
        .lp-ind-card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 24px; transition: all 0.2s; }
        .lp-ind-card:hover { border-color: rgba(245,197,24,0.3); transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.3); }
        .lp-ind-icon { font-size: 28px; margin-bottom: 12px; display: block; }
        .lp-ind-name { font-size: 15px; font-weight: 600; color: var(--text); margin-bottom: 6px; }
        .lp-ind-count { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--yellow); letter-spacing: 0.06em; }
        .lp-ind-agents { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 6px; }
        .lp-ind-agent { font-size: 10px; color: var(--dim); background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 4px; padding: 2px 8px; }

        .lp-pricing-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 56px; text-align: left; max-width: 760px; margin-left: auto; margin-right: auto; }
        .lp-pricing-card { background: var(--bg); border: 1px solid var(--border); border-radius: 16px; padding: 32px; position: relative; }
        .lp-pricing-card.featured { border-color: rgba(245,197,24,0.4); box-shadow: 0 0 0 1px rgba(245,197,24,0.1), 0 24px 60px rgba(0,0,0,0.3); }
        .lp-featured-badge { position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:var(--yellow); color:#0d0f1a; font-size:10px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; padding:4px 14px; border-radius:20px; white-space:nowrap; }
        .lp-plan-name { font-size:13px; font-weight:600; color:var(--muted); margin-bottom:12px; text-transform:uppercase; letter-spacing:0.06em; }
        .lp-plan-price { font-family:'Syne',sans-serif; font-weight:900; font-size:48px; color:var(--text); line-height:1; margin-bottom:6px; }
        .lp-plan-price span { font-size:18px; color:var(--muted); font-weight:400; font-family:'DM Sans',sans-serif; }
        .lp-plan-desc { font-size:13px; color:var(--muted); margin-bottom:28px; }
        .lp-plan-features { list-style:none; margin-bottom:28px; }
        .lp-plan-features li { display:flex; align-items:center; gap:10px; font-size:14px; color:#9ca3af; margin-bottom:10px; }
        .lp-feat-check { color:#10b981; flex-shrink:0; } .lp-feat-x { color:var(--dim); flex-shrink:0; }
        .lp-plan-btn { display:block; text-align:center; text-decoration:none; padding:12px; border-radius:8px; font-weight:600; font-size:14px; transition:all 0.2s; }
        .lp-plan-btn.free { background:transparent; border:1px solid var(--border); color:var(--muted); }
        .lp-plan-btn.free:hover { border-color:#4a4d62; color:var(--text); }
        .lp-plan-btn.pro { background:var(--yellow); color:#0d0f1a; }
        .lp-plan-btn.pro:hover { background:#ffd740; }

        .lp-founder { padding: 100px 24px; }
        .lp-founder-inner { max-width: 760px; margin: 0 auto; text-align: center; }
        .lp-quote-mark { font-family:'Syne',sans-serif; font-size:80px; color:rgba(245,197,24,0.15); line-height:0.8; margin-bottom:24px; display:block; }
        .lp-quote-text { font-size:clamp(18px,2.5vw,22px); color:#9ca3af; line-height:1.7; font-style:italic; margin-bottom:32px; }
        .lp-quote-text strong { color:var(--text); font-style:normal; }
        .lp-quote-author { display:flex; align-items:center; justify-content:center; gap:14px; }
        .lp-author-avatar { width:44px; height:44px; border-radius:50%; background:var(--yellow-dim); border:1px solid rgba(245,197,24,0.2); display:flex; align-items:center; justify-content:center; font-family:'Syne',sans-serif; font-weight:900; font-size:16px; color:var(--yellow); }
        .lp-author-name { font-size:14px; font-weight:600; color:var(--text); }
        .lp-author-title { font-size:12px; color:var(--muted); }

        .lp-cta { padding:100px 24px; background:radial-gradient(ellipse at 50% 100%,rgba(245,197,24,0.06) 0%,transparent 60%); border-top:1px solid var(--border); }
        .lp-cta-inner { max-width:680px; margin:0 auto; text-align:center; }
        .lp-cta-title { font-family:'Syne',sans-serif; font-weight:900; font-size:clamp(36px,6vw,64px); line-height:1.05; letter-spacing:-0.02em; color:var(--text); margin-bottom:20px; }
        .lp-cta-sub { font-size:17px; color:var(--muted); margin-bottom:40px; }
        .lp-cta-note { font-size:12px; color:var(--dim); margin-top:16px; }

        .lp-footer { padding:32px 48px; border-top:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; }
        .lp-footer-logo { font-family:'Syne',sans-serif; font-weight:900; font-size:16px; color:var(--yellow); }
        .lp-footer-links { display:flex; gap:24px; }
        .lp-footer-links a { font-size:13px; color:var(--dim); text-decoration:none; transition:color 0.2s; }
        .lp-footer-links a:hover { color:var(--muted); }
        .lp-footer-copy { font-size:12px; color:var(--dim); }

        @media(max-width:768px){
          .lp-nav{padding:16px 20px;}
          .lp-nav-links{display:none;}
          .lp-problem-grid{grid-template-columns:1fr;}
          .lp-steps{grid-template-columns:1fr;}
          .lp-steps::before{display:none;}
          .lp-pricing-cards{grid-template-columns:1fr;}
          .lp-stats-inner{grid-template-columns:1fr 1fr;gap:24px;}
          .lp-stat+.lp-stat{border-left:none;}
          .lp-footer{flex-direction:column;text-align:center;}
        }
      `}</style>

      {/* NAV */}
      <nav className="lp-nav">
        <a href="/" className="lp-nav-logo">PROMPT<span>FORGE</span></a>
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
          <div className="lp-glow1"></div>
          <div className="lp-glow2"></div>
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
          <div className="lp-actions">
            <Link href="/forge" className="lp-btn-primary">Start Forging Free →</Link>
            <a href="#how" className="lp-btn-secondary">See How It Works</a>
          </div>
          <div className="lp-proof">
            <div className="lp-proof-item"><span className="lp-proof-icon">✓</span> No account required</div>
            <div className="lp-proof-item"><span className="lp-proof-icon">✓</span> 5 free generates</div>
            <div className="lp-proof-item"><span className="lp-proof-icon">✓</span> Works with any AI tool</div>
            <div className="lp-proof-item"><span className="lp-proof-icon">✓</span> Deploy in 30 seconds</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="lp-stats-bar">
        <div className="lp-stats-inner">
          <div className="lp-stat"><span className="lp-stat-num">47</span><span className="lp-stat-label">Agent Archetypes</span></div>
          <div className="lp-stat"><span className="lp-stat-num">8</span><span className="lp-stat-label">Industries</span></div>
          <div className="lp-stat"><span className="lp-stat-num">16</span><span className="lp-stat-label">Starter Prompts</span></div>
          <div className="lp-stat"><span className="lp-stat-num">30s</span><span className="lp-stat-label">To Deploy</span></div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="lp-section">
        <div className="lp-section-inner">
          <span className="lp-label">The Problem</span>
          <h2 className="lp-title">You're using AI wrong.<br/><span className="acc">It's not your fault.</span></h2>
          <p className="lp-body">Nobody teaches professionals how to configure AI — they just hand you a chatbox and expect magic. The gap between "AI is mediocre" and "AI is transformative" is almost entirely a prompt quality problem.</p>
          <div className="lp-problem-grid">
            <div className="lp-problem-card">
              <span className="lp-prob-icon">😤</span>
              <div className="lp-prob-title">Generic, frustrating outputs</div>
              <div className="lp-prob-desc">Without a system prompt, AI has no context about who you are, what you need, or how to behave. Every response starts from zero.</div>
            </div>
            <div className="lp-problem-card">
              <span className="lp-prob-icon">⏰</span>
              <div className="lp-prob-title">Hours wasted on prompt tweaking</div>
              <div className="lp-prob-desc">Writing a good system prompt from scratch takes hours of trial and error — time professionals don't have.</div>
            </div>
            <div className="lp-problem-card">
              <span className="lp-prob-icon">🔍</span>
              <div className="lp-prob-title">No professional archetypes exist</div>
              <div className="lp-prob-desc">Generic prompt libraries don't understand your industry. A treasury analyst needs different AI behavior than a sales rep.</div>
            </div>
            <div className="lp-problem-card">
              <span className="lp-prob-icon">🔄</span>
              <div className="lp-prob-title">Starting over every session</div>
              <div className="lp-prob-desc">Without a saved library, you re-explain your context to AI every single time. That's not a workflow — that's a tax.</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="lp-section lp-section-alt" id="how">
        <div className="lp-section-inner">
          <span className="lp-label">How It Works</span>
          <h2 className="lp-title">From zero to <span className="acc">deployed agent</span><br/>in three clicks.</h2>
          <div className="lp-steps">
            <div className="lp-step">
              <div className="lp-step-num">1</div>
              <div className="lp-step-title">Choose Your Agent</div>
              <div className="lp-step-desc">Pick from 47 professional archetypes across 8 industries — or describe your own custom agent.</div>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">2</div>
              <div className="lp-step-title">Generate in One Click</div>
              <div className="lp-step-desc">Claude builds a complete system prompt — identity, capabilities, behavior rules, constraints, and an activation phrase.</div>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">3</div>
              <div className="lp-step-title">Copy & Deploy</div>
              <div className="lp-step-desc">Paste into any AI tool — Claude, ChatGPT, or your own API. Save to your personal library for future sessions.</div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="lp-section" id="industries">
        <div className="lp-section-inner">
          <span className="lp-label">47 Agents · 8 Industries</span>
          <h2 className="lp-title">Built for <span className="acc">professionals</span>,<br/>not hobbyists.</h2>
          <p className="lp-body">Every agent archetype is curated for real business use — not generic chat helpers.</p>
          <div className="lp-ind-grid">
            {[
              { icon:'⚡', name:'General', count:'12 AGENTS', agents:['FX Treasury','Cyber Investigator','Data Analyst','Legal Researcher'] },
              { icon:'🏥', name:'Healthcare', count:'5 AGENTS', agents:['Medical Scribe','Prior Auth','Patient Triage'] },
              { icon:'📊', name:'Finance', count:'5 AGENTS', agents:['Close Agent','Credit Risk','Tax Strategy'] },
              { icon:'📣', name:'Comms & Sales', count:'5 AGENTS', agents:['Autonomous SDR','Voice AI','PR Agent'] },
              { icon:'🎓', name:'Education', count:'5 AGENTS', agents:['Micro-Learning','Career Tracker','Research Asst'] },
              { icon:'💰', name:'Personal Finance', count:'5 AGENTS', agents:['Financial Advisor','Tax Optimizer','Fraud Watchdog'] },
              { icon:'🏪', name:'Retail & Ops', count:'5 AGENTS', agents:['Inventory Optimizer','Supply Chain','Contract Review'] },
              { icon:'👨‍👩‍👧', name:'Parenting', count:'5 AGENTS', agents:['Homework Helper','Family Scheduler','Child Development','Bedtime Stories'] },
            ].map(ind => (
              <div className="lp-ind-card" key={ind.name}>
                <span className="lp-ind-icon">{ind.icon}</span>
                <div className="lp-ind-name">{ind.name}</div>
                <div className="lp-ind-count">{ind.count}</div>
                <div className="lp-ind-agents">
                  {ind.agents.map(a => <span className="lp-ind-agent" key={a}>{a}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <li><span className="lp-feat-check">✓</span> 5 agent generates</li>
                <li><span className="lp-feat-check">✓</span> All 8 industries</li>
                <li><span className="lp-feat-check">✓</span> 16-prompt Starter Pack</li>
                <li><span className="lp-feat-check">✓</span> Personal library</li>
                <li><span className="lp-feat-x">✗</span> Unlimited generates</li>
                <li><span className="lp-feat-x">✗</span> Custom agent builder</li>
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
                <li><span className="lp-feat-check">✓</span> All 8 industries</li>
                <li><span className="lp-feat-check">✓</span> 16-prompt Starter Pack</li>
                <li><span className="lp-feat-check">✓</span> Personal library</li>
                <li><span className="lp-feat-check">✓</span> Priority generation</li>
                <li><span className="lp-feat-check">✓</span> Custom agent builder</li>
              </ul>
              <Link href="/forge" className="lp-plan-btn pro">Upgrade to Pro →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="lp-founder">
        <div className="lp-founder-inner">
          <span className="lp-quote-mark">"</span>
          <p className="lp-quote-text">
            I built this because I needed it. As a treasury analyst managing an $850M derivatives portfolio,
            I was spending hours configuring AI tools that kept forgetting context.{' '}
            <strong>One well-crafted system prompt changed everything.</strong>{' '}
            I built Prompt Forge so every professional could have that same unlock — in one click.
          </p>
          <div className="lp-quote-author">
            <div className="lp-author-avatar">RH</div>
            <div>
              <div className="lp-author-name">Rob Hilbert</div>
              <div className="lp-author-title">Senior Treasury Analyst · Founder, Prompt Forge</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lp-cta">
        <div className="lp-cta-inner">
          <h2 className="lp-cta-title">Stop prompting.<br/>Start <span className="acc">forging.</span></h2>
          <p className="lp-cta-sub">Generate your first professional AI agent prompt in under 30 seconds. Free to start, no account needed.</p>
          <Link href="/forge" className="lp-btn-primary">Start Forging Free →</Link>
          <p className="lp-cta-note">Works with Claude, ChatGPT, Gemini, and any AI that accepts system prompts.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        <div className="lp-footer-logo">PROMPT FORGE</div>
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
