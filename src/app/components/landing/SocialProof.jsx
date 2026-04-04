/**
 * SocialProof — usage counter + optional testimonials.
 *
 * Props:
 *   count (number) — total prompts generated. Required.
 *   testimonials (array, optional) — { name, role, quote }. Rendered if provided.
 */
export default function SocialProof({ count = 1247, testimonials }) {
  return (
    <section className="sp-root">
      <style>{`
        .sp-root {
          padding: 80px 24px;
          background: var(--bg);
          text-align: center;
        }
        .sp-inner {
          max-width: 700px;
          margin: 0 auto;
        }
        .sp-count {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(40px, 7vw, 64px);
          color: var(--ink);
          line-height: 1;
          margin-bottom: 8px;
        }
        .sp-count-label {
          font-size: 17px;
          color: var(--ink-muted);
          font-weight: 300;
          margin-bottom: 48px;
        }
        .sp-testimonials {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-top: 48px;
        }
        .sp-quote-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          text-align: left;
        }
        .sp-quote-text {
          font-size: 14px;
          color: var(--ink-soft);
          line-height: 1.65;
          font-weight: 300;
          font-style: italic;
          margin-bottom: 16px;
        }
        .sp-quote-name {
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
        }
        .sp-quote-role {
          font-size: 12px;
          color: var(--ink-muted);
          font-weight: 300;
        }
      `}</style>

      <div className="sp-inner">
        <div className="sp-count">{count.toLocaleString()}</div>
        <div className="sp-count-label">agent prompts generated</div>

        {testimonials && testimonials.length > 0 && (
          <div className="sp-testimonials">
            {testimonials.map((t, i) => (
              <div className="sp-quote-card" key={i}>
                <p className="sp-quote-text">&ldquo;{t.quote}&rdquo;</p>
                <div className="sp-quote-name">{t.name}</div>
                <div className="sp-quote-role">{t.role}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
