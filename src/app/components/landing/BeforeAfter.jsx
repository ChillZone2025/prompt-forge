'use client';

export default function BeforeAfter() {
  return (
    <section className="ba-root">
      <style>{`
        .ba-root {
          padding: 100px 24px;
          background: var(--bg);
        }
        .ba-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .ba-label {
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
          font-weight: 500;
        }
        .ba-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 56px;
        }
        .ba-title .acc { color: var(--accent); font-style: italic; }
        .ba-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .ba-col {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 32px;
          position: relative;
        }
        .ba-col.before {
          background: var(--surface-alt);
        }
        .ba-col.after {
          border-color: rgba(200,80,26,0.25);
          box-shadow: 0 0 0 1px rgba(200,80,26,0.08), 0 24px 60px rgba(15,14,13,0.06);
        }
        .ba-col-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
          display: block;
        }
        .ba-col.before .ba-col-label { color: var(--ink-muted); }
        .ba-col.after .ba-col-label { color: var(--accent); }
        .ba-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ba-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 15px;
          color: var(--ink-soft);
          margin-bottom: 14px;
          line-height: 1.55;
          font-weight: 300;
        }
        .ba-list li:last-child { margin-bottom: 0; }
        .ba-icon-x { color: var(--ink-dim); flex-shrink: 0; margin-top: 2px; }
        .ba-icon-check { color: #2d9e6b; flex-shrink: 0; margin-top: 2px; }
        @media (max-width: 768px) {
          .ba-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ba-inner">
        <span className="ba-label">The Problem</span>
        <h2 className="ba-title">
          Before Prompt Forge vs. <span className="acc">after.</span>
        </h2>
        <div className="ba-grid">
          <div className="ba-col before">
            <span className="ba-col-label">Without a system prompt</span>
            <ul className="ba-list">
              <li><span className="ba-icon-x">✕</span> Generic outputs that miss your context</li>
              <li><span className="ba-icon-x">✕</span> Hours wasted re-explaining your role to AI</li>
              <li><span className="ba-icon-x">✕</span> Starting from zero every single session</li>
              <li><span className="ba-icon-x">✕</span> No industry-specific knowledge or frameworks</li>
              <li><span className="ba-icon-x">✕</span> AI feels like a toy, not a tool</li>
            </ul>
          </div>
          <div className="ba-col after">
            <span className="ba-col-label">With Prompt Forge</span>
            <ul className="ba-list">
              <li><span className="ba-icon-check">✓</span> Outputs tailored to your exact role and industry</li>
              <li><span className="ba-icon-check">✓</span> One-click agent setup — no prompt engineering</li>
              <li><span className="ba-icon-check">✓</span> Persistent context across every session</li>
              <li><span className="ba-icon-check">✓</span> Real tools and frameworks baked into every prompt</li>
              <li><span className="ba-icon-check">✓</span> AI that works like a trained team member</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
