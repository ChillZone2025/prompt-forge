# Landing Page Rebuild — 7-Section Conversion Architecture

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the landing page around a conversion sequence ordered by visitor psychology — each section answers the silent question a skeptical stranger asks before the next one.

**Architecture:** Replace the current monolithic `page.js` sections with 4 new extracted components (BeforeAfter, HowItWorks, SocialProof, FinalCTA) and modify Hero, AgentPreview (Industries), and Pricing inline. The page uses embedded `<style>` CSS (no Tailwind) — all new components follow the same pattern with CSS custom properties from `:root`.

**Tech Stack:** Next.js 14 (App Router), React, embedded CSS, DM Sans + DM Serif Display fonts

**Assembly order (final):**
```
<Nav />
<HeroSection />          ← copy changes only
<VerticalSelector />     ← already deployed, keep as-is
<BeforeAfter />          ← NEW component
<HowItWorks />           ← NEW component (replaces current inline steps)
<AgentPreview />         ← modified Industries section
<SocialProof />          ← NEW component (replaces stats bar + one-liner)
<PricingSection />       ← copy changes only (Free first — already done)
<FinalCTA />             ← NEW component (replaces current CTA)
<Footer />
```

**Removed:** Founder quote section, standalone stats bar, standalone social proof one-liner.

---

### Task 1: Create `BeforeAfter.jsx` Component

**Files:**
- Create: `src/app/components/landing/BeforeAfter.jsx`

This is a 2-column before/after panel. No CTA inside this component (hard constraint from spec).

- [ ] **Step 1: Create the directory**

```bash
mkdir -p src/app/components/landing
```

- [ ] **Step 2: Create BeforeAfter.jsx**

```jsx
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
```

- [ ] **Step 3: Verify file was created**

```bash
ls src/app/components/landing/BeforeAfter.jsx
```

- [ ] **Step 4: Commit**

```bash
git add src/app/components/landing/BeforeAfter.jsx
git commit -m "feat: add BeforeAfter landing component — 2-column comparison panel"
git push origin master
```

---

### Task 2: Create `HowItWorks.jsx` Component

**Files:**
- Create: `src/app/components/landing/HowItWorks.jsx`

3-step horizontal flow: Pick role → Generate → Paste anywhere. Max 12 words per step label. No CTA inside (hard constraint — first CTA lives in AgentPreview).

- [ ] **Step 1: Create HowItWorks.jsx**

```jsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/landing/HowItWorks.jsx
git commit -m "feat: add HowItWorks landing component — 3-step conversion flow"
git push origin master
```

---

### Task 3: Create `SocialProof.jsx` Component

**Files:**
- Create: `src/app/components/landing/SocialProof.jsx`

Usage counter with `count` prop from database (or hardcoded placeholder integer). Testimonial prop stubbed as `testimonials?: Testimonial[]` and conditionally rendered.

- [ ] **Step 1: Create SocialProof.jsx**

```jsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/landing/SocialProof.jsx
git commit -m "feat: add SocialProof landing component — usage counter + testimonial slots"
git push origin master
```

---

### Task 4: Create `FinalCTA.jsx` Component

**Files:**
- Create: `src/app/components/landing/FinalCTA.jsx`

Single headline, single button, free tier reinforcement. No nav links, no distractions.

- [ ] **Step 1: Create FinalCTA.jsx**

```jsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/landing/FinalCTA.jsx
git commit -m "feat: add FinalCTA landing component — single CTA with free reinforcement"
git push origin master
```

---

### Task 5: Modify Hero Section in `page.js`

**Files:**
- Modify: `src/app/page.js` (Hero section, lines 432-461)

Changes: Add use-case chip row below subheadline. Remove duplicate CTA if present. Keep structure intact.

- [ ] **Step 1: Add use-case chip CSS to the `<style>` block (insert after `.lp-proof-icon` styles, before `@keyframes fadeUp`)**

```css
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
```

- [ ] **Step 2: Add chip row in Hero HTML (after `</p>` of `.lp-sub`, before `.lp-actions`)**

```jsx
          <div className="lp-chips">
            <span className="lp-chip" data-filter="onboarding">Client onboarding</span>
            <span className="lp-chip" data-filter="finance">Financial analysis</span>
            <span className="lp-chip" data-filter="email">Email triage</span>
            <span className="lp-chip" data-filter="content">Content creation</span>
            <span className="lp-chip" data-filter="research">Research &amp; intel</span>
            <span className="lp-chip" data-filter="automation">Process automation</span>
          </div>
```

- [ ] **Step 3: Commit**

```bash
git add src/app/page.js
git commit -m "feat: add use-case chip row to hero section"
git push origin master
```

---

### Task 6: Modify Industries → AgentPreview in `page.js`

**Files:**
- Modify: `src/app/page.js` (Industries section, lines 542-579)

Changes: Reduce visible cards to 9 on initial load (already showing 16 + "more" link). Replace CTA button text. Add first CTA below grid: "Build my first agent free".

- [ ] **Step 1: Trim the industries array to 9 cards**

Keep these 9 from the existing array: General, Healthcare, Finance, Comms & Sales, Education, Real Estate, Marketing & Growth, AI Agent Development, Cyber Intelligence. Remove the other 7.

- [ ] **Step 2: Replace the "+25 more" link text**

Change:
```jsx
<Link href="/forge" className="lp-ind-more">+25 more industries in the Forge →</Link>
```
To:
```jsx
<Link href="/forge" className="lp-ind-more">Browse all 251 agents →</Link>
```

- [ ] **Step 3: Add the first CTA button below the grid**

Add this CSS to the `<style>` block (in the Industries section area):
```css
        .lp-ind-cta {
          text-align: center;
          margin-top: 48px;
        }
```

Add this HTML after the closing `</div>` of `.lp-ind-grid`, inside `.lp-section-inner`:
```jsx
          <div className="lp-ind-cta">
            <Link href="/forge" className="lp-btn-primary">Build my first agent free →</Link>
          </div>
```

- [ ] **Step 4: Commit**

```bash
git add src/app/page.js
git commit -m "feat: update AgentPreview — 9 cards, browse link, first CTA"
git push origin master
```

---

### Task 7: Rewire `page.js` — Final Assembly

**Files:**
- Modify: `src/app/page.js`

Replace inline HowItWorks, Problem, Stats bar, Social proof one-liner, Founder quote, and CTA sections with new components. Final assembly order.

- [ ] **Step 1: Add imports at top of page.js**

```jsx
import BeforeAfter from './components/landing/BeforeAfter'
import HowItWorks from './components/landing/HowItWorks'
import SocialProof from './components/landing/SocialProof'
import FinalCTA from './components/landing/FinalCTA'
```

- [ ] **Step 2: Remove these sections from the JSX (delete entire blocks)**

1. Stats bar (`{/* STATS */}` — the `lp-stats-bar` div)
2. Social proof one-liner (`{/* SOCIAL PROOF */}` — the `lp-social-proof` div)
3. Problem section (`{/* PROBLEM */}` — the entire `lp-section` with problem cards)
4. How It Works section (`{/* HOW IT WORKS */}` — the entire `lp-section lp-section-alt` with steps)
5. Founder section (`{/* FOUNDER */}` — the entire `lp-founder` section)
6. CTA section (`{/* CTA */}` — the entire `lp-cta` section)

- [ ] **Step 3: Remove the CSS for deleted sections from the `<style>` block**

Remove all CSS classes for: `.lp-stats-*`, `.lp-social-proof*`, `.lp-problem-*`, `.lp-prob-*`, `.lp-steps`, `.lp-step`, `.lp-step-*`, `.lp-powered*`, `.lp-founder*`, `.lp-quote-*`, `.lp-author-*`, `.lp-cta` (but keep `.lp-btn-primary` which is reused).

- [ ] **Step 4: Assemble new section order in JSX**

Final JSX body should be:
```jsx
      {/* NAV */}
      <nav className="lp-nav">...</nav>

      {/* HERO */}
      <section className="lp-hero">...</section>

      {/* VERTICAL SELECTOR */}
      <section style={{ background: '#13120F', padding: '80px 24px', textAlign: 'center' }}>
        <VerticalSelector />
      </section>

      {/* BEFORE / AFTER */}
      <BeforeAfter />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* INDUSTRIES / AGENT PREVIEW */}
      <section className="lp-section" id="industries">...</section>

      {/* SOCIAL PROOF */}
      <SocialProof count={1247} />

      {/* PRICING */}
      <section className="lp-section lp-section-alt" id="pricing">...</section>

      {/* FINAL CTA */}
      <FinalCTA />

      {/* FOOTER */}
      <footer className="lp-footer">...</footer>
```

- [ ] **Step 5: Run build to verify**

```bash
npm run build
```

Expected: Compilation succeeds (page data collection may fail locally due to missing env vars — that's OK, compilation success = valid code).

- [ ] **Step 6: Commit**

```bash
git add src/app/page.js
git commit -m "feat: rewire landing page to 7-section conversion architecture"
git push origin master
```

---

### Task 8: Verify CTA Placement Constraint

**Files:**
- Read: `src/app/page.js`

Hard constraint: No CTA button between Hero and AgentPreview (sections 1-3: Hero, VerticalSelector, BeforeAfter, HowItWorks should have zero `<button>` or `<a className="lp-btn-primary">` CTA elements).

- [ ] **Step 1: Verify by reading the final page.js**

Scan from Hero through HowItWorks. Confirm:
- VerticalSelector has navigation buttons (tiles), but those are onboarding selectors — not CTA buttons. Allowed.
- BeforeAfter has no CTA. ✓
- HowItWorks has no CTA. ✓
- First CTA is inside Industries/AgentPreview section. ✓

- [ ] **Step 2: Verify Free tier is first pricing card**

Already confirmed — current page.js already renders Free ($0) before Pro ($12).

---

### Task 9: Update STATUS.md and TASK_QUEUE.md

**Files:**
- Modify: `STATUS.md`
- Modify: `TASK_QUEUE.md`

- [ ] **Step 1: Update STATUS.md**

Add to UI features: "7-section conversion landing page (BeforeAfter, HowItWorks, SocialProof, FinalCTA components)"
Add deployment line with commit hash.

- [ ] **Step 2: Update TASK_QUEUE.md**

Move TASK-006 from Active Tasks to Completed Tasks. Set status to `deployed` with completion date 2026-04-04.

- [ ] **Step 3: Commit**

```bash
git add STATUS.md TASK_QUEUE.md
git commit -m "docs: update STATUS.md and TASK_QUEUE.md — TASK-006 deployed"
git push origin master
```
