import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="fcta-root">
      <style>{`
        .fcta-root {
          padding: 100px 24px;
          background: var(--ink);
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .fcta-inner {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }
        .fcta-title {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: clamp(36px, 6vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 20px;
        }
        .fcta-title .acc {
          color: var(--accent-light);
          font-style: italic;
        }
        .fcta-sub {
          font-size: 17px;
          color: rgba(255,255,255,0.45);
          margin-bottom: 40px;
          font-weight: 300;
        }
        .fcta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent);
          color: #fff;
          padding: 16px 36px;
          border-radius: var(--radius-sm);
          font-weight: 500;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .fcta-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(200,80,26,0.25);
        }
        .fcta-note {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          margin-top: 20px;
        }
      `}</style>

      <div className="fcta-inner">
        <h2 className="fcta-title">
          Build my first <span className="acc">agent</span> free.
        </h2>
        <p className="fcta-sub">
          Generate a deployment-ready AI agent prompt in under 30 seconds.
        </p>
        <Link href="/forge" className="fcta-btn">
          Build my first agent free →
        </Link>
        <p className="fcta-note">Always free — no credit card required</p>
      </div>
    </section>
  );
}
