export default function HowItWorks() {
  return (
    <section className="hiw-root" id="how">
      <style>{`
        .hiw-root {
          padding: 100px 24px;
          background: var(--surface-alt);
        }
        .hiw-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .hiw-label {
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
          font-weight: 500;
        }
        .hiw-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 20px;
        }
        .hiw-title .acc { color: var(--accent); font-style: italic; }
        .hiw-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 56px;
          position: relative;
        }
        .hiw-steps::before {
          content: '';
          position: absolute;
          top: 28px;
          left: 15%;
          right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent);
        }
        .hiw-step { text-align: center; }
        .hiw-step-num {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--accent-light);
          border: 1px solid rgba(200,80,26,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          color: var(--accent);
          margin: 0 auto 20px;
          position: relative;
          z-index: 1;
        }
        .hiw-step-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 10px;
        }
        .hiw-step-desc {
          font-size: 14px;
          color: var(--ink-muted);
          line-height: 1.65;
          font-weight: 300;
        }
        .hiw-powered {
          text-align: center;
          padding-top: 24px;
        }
        .hiw-powered-text {
          font-size: 12px;
          color: var(--ink-dim);
        }
        @media (max-width: 768px) {
          .hiw-steps { grid-template-columns: 1fr; }
          .hiw-steps::before { display: none; }
        }
      `}</style>

      <div className="hiw-inner">
        <span className="hiw-label">How It Works</span>
        <h2 className="hiw-title">
          From zero to <span className="acc">deployed agent</span><br />in three clicks.
        </h2>
        <div className="hiw-steps">
          <div className="hiw-step">
            <div className="hiw-step-num">1</div>
            <div className="hiw-step-title">Pick Your Role</div>
            <div className="hiw-step-desc">Choose from 251 professional archetypes across 41 industries.</div>
          </div>
          <div className="hiw-step">
            <div className="hiw-step-num">2</div>
            <div className="hiw-step-title">Generate in One Click</div>
            <div className="hiw-step-desc">Claude builds a complete system prompt with identity, domain knowledge, and safety constraints.</div>
          </div>
          <div className="hiw-step">
            <div className="hiw-step-num">3</div>
            <div className="hiw-step-title">Paste &amp; Deploy</div>
            <div className="hiw-step-desc">Drop it into Claude, ChatGPT, or any AI tool. Works everywhere, deploys in 30 seconds.</div>
          </div>
        </div>
        <div className="hiw-powered">
          <p className="hiw-powered-text">Powered by Claude — Anthropic&apos;s most capable AI model</p>
        </div>
      </div>
    </section>
  );
}
