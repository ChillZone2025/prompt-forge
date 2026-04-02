# B006: SEO Landing Pages Per Industry — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create SEO-optimized landing pages at `/industry/{slug}` for all 41 industries to drive organic search traffic and Pro conversions.

**Architecture:** Extract shared industry data from PromptForge.js into a data module. Create a single dynamic route `src/app/industry/[slug]/page.js` using Next.js `generateStaticParams` + `generateMetadata` for fully static, SEO-friendly pages. Add URL param support to /forge for deep-linking CTAs.

**Tech Stack:** Next.js App Router (static generation), inline CSS (matching existing design system)

---

### Task 1: Extract Industry Data into Shared Module

**Files:**
- Create: `src/app/data/industries.js`
- Modify: `src/app/forge/PromptForge.js:9` (PRO_INDUSTRIES), `src/app/forge/PromptForge.js:20-640` (INDUSTRIES)

- [ ] **Step 1: Create the shared data module**

Create `src/app/data/industries.js` with the INDUSTRIES object, PRO_INDUSTRIES array, and helper functions:

```javascript
// Shared industry data — single source of truth
// Imported by PromptForge.js (client) and SEO pages (server)

export const PRO_INDUSTRIES = [
  'AI Agent Development', 'Cyber Intelligence', 'Cybersecurity',
  'Consulting & Strategy', 'Architecture & Engineering', 'SaaS & Product',
  'Banking & Lending', 'Pharma & Biotech', 'Aviation & Aerospace',
  'Executive & Leadership'
]

export const INDUSTRIES = {
  // ... entire INDUSTRIES object moved here verbatim from PromptForge.js lines 20-640
}

export const INDUSTRY_TABS = Object.keys(INDUSTRIES)

// Slug utilities
export function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function fromSlug(slug) {
  return INDUSTRY_TABS.find(name => toSlug(name) === slug) || null
}

// Industry metadata for SEO pages
export const INDUSTRY_META = {
  'General': { icon: '⚡', description: 'Versatile AI agents for cross-functional business operations — SOPs, email drafting, data analysis, project management, and negotiation strategy.' },
  'Healthcare': { icon: '🏥', description: 'AI agents for clinical documentation, prior authorization, revenue cycle management, patient triage, diagnostics, and clinical trial coordination.' },
  'Finance': { icon: '📊', description: 'AI agents for financial close automation, treasury management, audit compliance, credit risk underwriting, tax strategy, and FP&A analysis.' },
  'Comms & Sales': { icon: '📣', description: 'AI agents for sales development, content repurposing, call center scripts, market intelligence, email sequences, and proposal writing.' },
  'Education': { icon: '🎓', description: 'AI agents for curriculum design, career coaching, grant writing, student advising, tutoring, and academic program development.' },
  'Personal Finance': { icon: '💰', description: 'AI agents for financial advising, tax optimization, budget architecture, debt strategy, investment analysis, and retirement planning.' },
  'Parenting': { icon: '👶', description: 'AI agents for parenting guidance, child development tracking, education planning, family scheduling, and behavioral support.' },
  'Retail & Ops': { icon: '🛒', description: 'AI agents for inventory management, demand forecasting, customer experience, visual merchandising, loss prevention, and supply chain optimization.' },
  'Real Estate': { icon: '🏡', description: 'AI agents for listing generation, market comparables, lead nurturing, property valuation, transaction coordination, and investment analysis.' },
  'Legal & Compliance': { icon: '📋', description: 'AI agents for contract analysis, compliance monitoring, dispute resolution, regulatory tracking, legal research, and policy drafting.' },
  'Marketing & Growth': { icon: '📈', description: 'AI agents for SEO content creation, campaign optimization, A/B testing, growth strategy, brand positioning, and analytics reporting.' },
  'HR & People Ops': { icon: '👥', description: 'AI agents for resume screening, interview design, onboarding automation, employee engagement, performance management, and HR compliance.' },
  'Accounting & Tax': { icon: '🏢', description: 'AI agents for bookkeeping automation, invoice processing, tax preparation, financial reporting, audit support, and payroll management.' },
  'Insurance': { icon: '🛡️', description: 'AI agents for claims processing, underwriting automation, policy comparison, risk assessment, customer retention, and regulatory compliance.' },
  'AI Agent Development': { icon: '🧠', description: 'Pro-only AI agents for agent architecture design, SOUL.md writing, multi-agent orchestration, prompt engineering, and agentic system debugging.' },
  'Cyber Intelligence': { icon: '🔎', description: 'Pro-only AI agents for OSINT planning, threat intelligence, digital footprint analysis, dark web monitoring, and attribution research.' },
  'Cybersecurity': { icon: '🔒', description: 'Pro-only AI agents for incident response, penetration testing, SOC analysis, vulnerability assessment, security architecture, and compliance auditing.' },
  'Consulting & Strategy': { icon: '🎯', description: 'Pro-only AI agents for strategy consulting, market entry analysis, organizational design, change management, competitive positioning, and executive advising.' },
  'Architecture & Engineering': { icon: '🏗️', description: 'Pro-only AI agents for structural analysis, project estimation, building code compliance, site planning, and engineering documentation.' },
  'SaaS & Product': { icon: '🚀', description: 'Pro-only AI agents for PRD writing, churn analysis, feature prioritization, user research synthesis, product-led growth, and roadmap planning.' },
  'Banking & Lending': { icon: '🏦', description: 'Pro-only AI agents for loan origination, credit decisioning, regulatory compliance, portfolio risk management, and customer onboarding.' },
  'Pharma & Biotech': { icon: '🧬', description: 'Pro-only AI agents for drug discovery support, clinical trial design, regulatory submission, pharmacovigilance, and research literature analysis.' },
  'Aviation & Aerospace': { icon: '✈️', description: 'Pro-only AI agents for flight operations, maintenance scheduling, safety compliance, crew management, and aerospace engineering documentation.' },
  'Executive & Leadership': { icon: '👔', description: 'Pro-only AI agents for executive communications, board preparation, strategic planning, stakeholder management, and leadership coaching.' },
  'Hospitality & Events': { icon: '🏨', description: 'AI agents for event planning, guest experience management, revenue optimization, venue coordination, and hospitality operations.' },
  'Logistics & Supply Chain': { icon: '🚛', description: 'AI agents for route optimization, warehouse management, demand planning, supplier evaluation, customs documentation, and fleet tracking.' },
  'Agriculture & Farming': { icon: '🌾', description: 'AI agents for crop planning, precision agriculture, livestock management, market pricing, sustainability reporting, and farm operations.' },
  'Automotive': { icon: '🚗', description: 'AI agents for dealership management, vehicle diagnostics, inventory optimization, customer follow-up, and service scheduling.' },
  'Construction & Trades': { icon: '🔨', description: 'AI agents for project estimation, safety compliance, subcontractor management, building permits, and construction scheduling.' },
  'Dental & Optometry': { icon: '🦷', description: 'AI agents for patient scheduling, treatment planning, insurance verification, clinical documentation, and practice management.' },
  'E-commerce & DTC': { icon: '🛍️', description: 'AI agents for product listing optimization, customer support automation, conversion analysis, inventory management, and marketing attribution.' },
  'Energy & Utilities': { icon: '⚡', description: 'AI agents for grid management, energy trading, regulatory compliance, sustainability reporting, outage response, and demand forecasting.' },
  'Fitness & Wellness': { icon: '💪', description: 'AI agents for workout programming, nutrition planning, client onboarding, retention strategy, and wellness coaching.' },
  'Freelancers & Solopreneurs': { icon: '🎯', description: 'AI agents for proposal writing, client management, invoicing, scope definition, and personal brand building.' },
  'Manufacturing': { icon: '🏭', description: 'AI agents for production scheduling, quality control, equipment maintenance, supply chain coordination, safety compliance, and lean manufacturing.' },
  'Media & Publishing': { icon: '📰', description: 'AI agents for editorial planning, content production, audience analytics, distribution strategy, and monetization optimization.' },
  'Nonprofit & Government': { icon: '🏛️', description: 'AI agents for grant writing, donor management, program evaluation, public policy analysis, and community outreach.' },
  'Property Management': { icon: '🏘️', description: 'AI agents for tenant screening, maintenance coordination, rent collection, lease management, and property marketing.' },
  'Recruitment & Staffing': { icon: '🤝', description: 'AI agents for candidate sourcing, job matching, interview scheduling, offer management, talent pipeline building, and placement tracking.' },
  'Sports & Athletics': { icon: '🏅', description: 'AI agents for performance analytics, training programming, scouting reports, team management, and sports media content.' },
  'Veterinary': { icon: '🐾', description: 'AI agents for patient records, treatment protocols, client communication, appointment scheduling, and practice management.' },
}
```

**IMPORTANT:** The actual INDUSTRIES object is ~620 lines. Copy it verbatim from PromptForge.js — do not summarize or truncate.

- [ ] **Step 2: Update PromptForge.js to import from shared module**

At the top of `src/app/forge/PromptForge.js`, replace the inline data with imports:

```javascript
// Remove lines 9, 20-642 (PRO_INDUSTRIES, INDUSTRIES, INDUSTRY_TABS)
// Add this import after line 2:
import { INDUSTRIES, PRO_INDUSTRIES, INDUSTRY_TABS } from '../data/industries'
```

Keep everything else in PromptForge.js untouched. The STARTER_PROMPTS, WALKTHROUGH, buildPrompt, and all UI code stay where they are.

- [ ] **Step 3: Verify the forge page still works**

Run: `npm run build 2>&1 | head -30`

Expected: Compilation succeeds (page data collection may fail without env vars — that's fine, compilation success = valid code).

- [ ] **Step 4: Commit and push**

```bash
git add src/app/data/industries.js src/app/forge/PromptForge.js
git commit -m "refactor: extract INDUSTRIES data into shared module for SEO pages"
git push origin master
```

---

### Task 2: Add URL Param Support to /forge

**Files:**
- Modify: `src/app/forge/PromptForge.js:983` (industry useState)

- [ ] **Step 1: Add useSearchParams and deep-link support**

In `src/app/forge/PromptForge.js`, add `useSearchParams` to the next/navigation import (or add a new import if none exists), then update the industry initialization:

```javascript
// Add at top of file (after existing imports):
import { useSearchParams } from 'next/navigation'

// Inside the PromptForge component, before the existing useState calls:
const searchParams = useSearchParams()

// Replace: const [industry, setIndustry] = useState('General')
// With:
const [industry, setIndustry] = useState(() => {
  const param = searchParams.get('industry')
  if (param) {
    const match = INDUSTRY_TABS.find(
      name => name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === param
    )
    if (match) return match
  }
  return 'General'
})
```

This lets `/forge?industry=ai-agent-development` pre-select that industry.

- [ ] **Step 2: Wrap with Suspense in the forge page**

`useSearchParams` requires a Suspense boundary. Update `src/app/forge/page.js`:

```javascript
import { Suspense } from 'react'
import PromptForge from './PromptForge'

export default function ForgePage() {
  return (
    <Suspense fallback={null}>
      <PromptForge />
    </Suspense>
  )
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build 2>&1 | head -30`

Expected: Compilation succeeds.

- [ ] **Step 4: Commit and push**

```bash
git add src/app/forge/PromptForge.js src/app/forge/page.js
git commit -m "feat: add URL param support for industry deep-linking from SEO pages"
git push origin master
```

---

### Task 3: Create the SEO Landing Page Template

**Files:**
- Create: `src/app/industry/[slug]/page.js`

- [ ] **Step 1: Create the dynamic route directory**

```bash
mkdir -p src/app/industry/\[slug\]
```

- [ ] **Step 2: Write the SEO landing page component**

Create `src/app/industry/[slug]/page.js` — a server component with `generateStaticParams`, `generateMetadata`, and the full page layout.

The page must include:
1. **Meta tags** — title, description, og tags optimized for "AI agent for [industry]" and "AI system prompt for [industry]"
2. **Breadcrumb** — Home > Industries > [Industry Name]
3. **Industry hero** — icon, name, description, agent count, Pro badge if applicable
4. **Agent grid** — all agents with icon, name, description, color accent
5. **Sample prompt preview** — static example of what a generated prompt looks like (3 sections)
6. **CTA** — "Generate your [industry] agent prompt" linking to `/forge?industry={slug}`
7. **Navigation** — back to home, link to forge

```javascript
import Link from 'next/link'
import { INDUSTRIES, PRO_INDUSTRIES, INDUSTRY_TABS, INDUSTRY_META, toSlug, fromSlug } from '../../data/industries'

// Generate all 41 industry pages at build time
export function generateStaticParams() {
  return INDUSTRY_TABS.map(name => ({ slug: toSlug(name) }))
}

// Dynamic metadata per industry
export async function generateMetadata({ params }) {
  const { slug } = await params
  const name = fromSlug(slug)
  if (!name) return { title: 'Industry Not Found | Prompt Forge' }

  const meta = INDUSTRY_META[name]
  const agents = INDUSTRIES[name]
  const isPro = PRO_INDUSTRIES.includes(name)
  const agentCount = agents.length

  return {
    title: `AI Agents for ${name} — ${agentCount} System Prompts | Prompt Forge`,
    description: `Generate deployment-ready AI agent system prompts for ${name}. ${agentCount} professional archetypes: ${agents.slice(0, 3).map(a => a.name).join(', ')}, and more.`,
    openGraph: {
      title: `AI Agents for ${name} | Prompt Forge`,
      description: meta.description,
      url: `https://getpromptforge.net/industry/${slug}`,
      siteName: 'Prompt Forge',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `AI Agents for ${name} | Prompt Forge`,
      description: meta.description,
    },
    alternates: {
      canonical: `https://getpromptforge.net/industry/${slug}`,
    },
  }
}

// Sample prompt preview (static — no API call)
function SamplePromptPreview({ agentName, agentDesc, industryName }) {
  return (
    <div className="seo-sample">
      <div className="seo-sample-header">
        <span className="seo-sample-label">SAMPLE OUTPUT</span>
        <span className="seo-sample-agent">{agentName}</span>
      </div>
      <div className="seo-sample-body">
        <div className="seo-sample-section">
          <strong>## AGENT IDENTITY</strong>
          <p>You are {agentName}, a specialized AI agent designed for {industryName} professionals. Your core purpose is to {agentDesc.toLowerCase()}. You combine deep domain expertise with practical, actionable guidance tailored to real-world workflows.</p>
        </div>
        <div className="seo-sample-section">
          <strong>## CORE CAPABILITIES</strong>
          <p>• Analyze complex {industryName.toLowerCase()} scenarios and provide structured recommendations<br/>
          • Generate professional documentation, reports, and deliverables on demand<br/>
          • Apply industry best practices and current regulatory frameworks<br/>
          <span className="seo-sample-fade">• 5 more capabilities...</span></p>
        </div>
        <div className="seo-sample-section">
          <strong>## BEHAVIORAL GUIDELINES</strong>
          <p>Communicate with authority and precision. Lead with actionable insights. Reference specific tools, methodologies, and frameworks used by {industryName.toLowerCase()} professionals...<br/>
          <span className="seo-sample-fade">+ 5 more sections in full output</span></p>
        </div>
      </div>
    </div>
  )
}

export default async function IndustryPage({ params }) {
  const { slug } = await params
  const name = fromSlug(slug)

  if (!name) {
    return (
      <div style={{ padding: '120px 24px', textAlign: 'center', fontFamily: "'DM Sans', sans-serif" }}>
        <h1>Industry not found</h1>
        <Link href="/">Go home</Link>
      </div>
    )
  }

  const agents = INDUSTRIES[name]
  const meta = INDUSTRY_META[name]
  const isPro = PRO_INDUSTRIES.includes(name)
  const featuredAgent = agents[0]

  return (
    <>
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

        body {
          background: var(--bg);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          line-height: 1.6;
          font-size: 16px;
          -webkit-font-smoothing: antialiased;
        }

        /* ── NAV ── */
        .seo-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 62px;
          background: rgba(250,248,245,0.88);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .seo-nav-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 21px; letter-spacing: -0.02em;
          color: var(--ink); text-decoration: none;
        }
        .seo-nav-logo span { color: var(--accent); }
        .seo-nav-links { display: flex; align-items: center; gap: 24px; }
        .seo-nav-links a {
          color: var(--ink-muted); text-decoration: none;
          font-size: 14px; font-weight: 400; transition: color 0.2s;
        }
        .seo-nav-links a:hover { color: var(--ink); }
        .seo-nav-cta {
          background: var(--ink); color: var(--bg);
          padding: 9px 20px; border-radius: var(--radius-sm);
          font-weight: 500; font-size: 14px; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .seo-nav-cta:hover { background: var(--accent); transform: translateY(-1px); }

        /* ── BREADCRUMB ── */
        .seo-breadcrumb {
          padding: 80px 24px 0;
          max-width: 1000px; margin: 0 auto;
        }
        .seo-breadcrumb nav {
          font-size: 13px; color: var(--ink-muted);
          display: flex; align-items: center; gap: 8px;
        }
        .seo-breadcrumb a {
          color: var(--ink-muted); text-decoration: none;
          transition: color 0.2s;
        }
        .seo-breadcrumb a:hover { color: var(--accent); }
        .seo-breadcrumb .sep { color: var(--ink-dim); }
        .seo-breadcrumb .current { color: var(--ink-soft); font-weight: 500; }

        /* ── HERO ── */
        .seo-hero {
          padding: 48px 24px 64px;
          max-width: 1000px; margin: 0 auto;
        }
        .seo-hero-icon {
          font-size: 48px; margin-bottom: 16px; display: block;
        }
        .seo-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400; line-height: 1.1;
          letter-spacing: -0.02em; color: var(--ink);
          margin-bottom: 8px;
        }
        .seo-hero-title .acc { color: var(--accent); font-style: italic; }
        .seo-pro-badge {
          display: inline-block;
          background: var(--accent); color: #fff;
          font-size: 11px; font-weight: 500;
          padding: 3px 10px; border-radius: 4px;
          letter-spacing: 0.06em; margin-left: 12px;
          vertical-align: middle;
        }
        .seo-hero-desc {
          font-size: 18px; color: var(--ink-soft);
          line-height: 1.7; max-width: 700px;
          font-weight: 300; margin-bottom: 32px;
        }
        .seo-hero-stats {
          display: flex; gap: 32px; flex-wrap: wrap;
        }
        .seo-stat {
          display: flex; align-items: center; gap: 8px;
          font-size: 14px; color: var(--ink-muted);
        }
        .seo-stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 28px; color: var(--ink);
        }

        /* ── AGENT GRID ── */
        .seo-agents-section {
          padding: 0 24px 80px;
          max-width: 1000px; margin: 0 auto;
        }
        .seo-agents-label {
          font-size: 11px; color: var(--accent);
          letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 24px; display: block; font-weight: 500;
        }
        .seo-agents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .seo-agent-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .seo-agent-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(15,14,13,0.07);
        }
        .seo-agent-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          border-radius: var(--radius) var(--radius) 0 0;
        }
        .seo-agent-icon { font-size: 28px; margin-bottom: 12px; display: block; }
        .seo-agent-name {
          font-size: 16px; font-weight: 500; color: var(--ink);
          margin-bottom: 6px;
        }
        .seo-agent-desc {
          font-size: 14px; color: var(--ink-muted);
          line-height: 1.6; font-weight: 300;
        }
        .seo-agent-new {
          position: absolute; top: 12px; right: 12px;
          background: var(--accent-light);
          color: var(--accent); font-size: 10px;
          font-weight: 500; padding: 2px 8px;
          border-radius: 4px; letter-spacing: 0.04em;
        }

        /* ── SAMPLE PROMPT ── */
        .seo-sample-section-wrap {
          padding: 0 24px 80px;
          max-width: 1000px; margin: 0 auto;
        }
        .seo-sample {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .seo-sample-header {
          background: var(--ink);
          padding: 16px 24px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .seo-sample-label {
          font-size: 11px; color: rgba(255,255,255,0.4);
          letter-spacing: 0.1em; font-weight: 500;
        }
        .seo-sample-agent {
          font-size: 13px; color: rgba(255,255,255,0.7);
          font-weight: 400;
        }
        .seo-sample-body { padding: 28px 24px; }
        .seo-sample-body .seo-sample-section {
          margin-bottom: 20px;
        }
        .seo-sample-body .seo-sample-section:last-child {
          margin-bottom: 0;
        }
        .seo-sample-body strong {
          font-size: 13px; color: var(--accent);
          display: block; margin-bottom: 8px;
          font-weight: 500; letter-spacing: 0.02em;
        }
        .seo-sample-body p {
          font-size: 14px; color: var(--ink-soft);
          line-height: 1.7; font-weight: 300;
        }
        .seo-sample-fade {
          color: var(--ink-dim); font-style: italic;
        }

        /* ── CTA ── */
        .seo-cta-section {
          padding: 80px 24px;
          background: var(--surface-alt);
          text-align: center;
        }
        .seo-cta-inner { max-width: 600px; margin: 0 auto; }
        .seo-cta-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 400; line-height: 1.15;
          letter-spacing: -0.02em; color: var(--ink);
          margin-bottom: 16px;
        }
        .seo-cta-title .acc { color: var(--accent); font-style: italic; }
        .seo-cta-desc {
          font-size: 16px; color: var(--ink-soft);
          line-height: 1.7; font-weight: 300;
          margin-bottom: 32px;
        }
        .seo-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent); color: #fff;
          padding: 16px 36px; border-radius: var(--radius-sm);
          font-weight: 500; font-size: 16px; text-decoration: none;
          transition: all 0.2s;
        }
        .seo-cta-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(200,80,26,0.25);
        }
        .seo-cta-sub {
          margin-top: 16px;
          font-size: 13px; color: var(--ink-dim);
        }

        /* ── FOOTER ── */
        .seo-footer {
          padding: 40px 24px;
          text-align: center;
          border-top: 1px solid var(--border);
        }
        .seo-footer-text {
          font-size: 13px; color: var(--ink-dim);
        }
        .seo-footer a {
          color: var(--ink-muted); text-decoration: none;
        }
        .seo-footer a:hover { color: var(--accent); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .seo-nav { padding: 0 20px; }
          .seo-hero { padding: 32px 20px 48px; }
          .seo-agents-section { padding: 0 20px 60px; }
          .seo-agents-grid { grid-template-columns: 1fr; }
          .seo-sample-section-wrap { padding: 0 20px 60px; }
          .seo-hero-stats { gap: 20px; }
          .seo-cta-section { padding: 60px 20px; }
        }
        @media (max-width: 480px) {
          .seo-nav-links a:not(.seo-nav-cta) { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className="seo-nav">
        <Link href="/" className="seo-nav-logo">Prompt<span>Forge</span></Link>
        <div className="seo-nav-links">
          <Link href="/#industries">Industries</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/forge" className="seo-nav-cta">Open Forge</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div className="seo-breadcrumb">
        <nav>
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <Link href="/#industries">Industries</Link>
          <span className="sep">/</span>
          <span className="current">{name}</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="seo-hero">
        <span className="seo-hero-icon">{meta.icon}</span>
        <h1 className="seo-hero-title">
          AI Agents for <span className="acc">{name}</span>
          {isPro && <span className="seo-pro-badge">PRO</span>}
        </h1>
        <p className="seo-hero-desc">{meta.description}</p>
        <div className="seo-hero-stats">
          <div className="seo-stat">
            <span className="seo-stat-num">{agents.length}</span>
            <span>agents</span>
          </div>
          <div className="seo-stat">
            <span className="seo-stat-num">8</span>
            <span>sections per prompt</span>
          </div>
          <div className="seo-stat">
            <span className="seo-stat-num">1</span>
            <span>click to generate</span>
          </div>
        </div>
      </section>

      {/* AGENT GRID */}
      <section className="seo-agents-section">
        <span className="seo-agents-label">Available Agents</span>
        <div className="seo-agents-grid">
          {agents.map(agent => (
            <div
              className="seo-agent-card"
              key={agent.id}
              style={{ '--card-color': agent.color }}
            >
              <style>{`
                .seo-agent-card[style*="${agent.color}"]::before {
                  background: ${agent.color};
                }
              `}</style>
              {agent.isNew && <span className="seo-agent-new">NEW</span>}
              <span className="seo-agent-icon">{agent.icon}</span>
              <div className="seo-agent-name">{agent.name}</div>
              <div className="seo-agent-desc">{agent.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE PROMPT PREVIEW */}
      <section className="seo-sample-section-wrap">
        <SamplePromptPreview
          agentName={featuredAgent.name}
          agentDesc={featuredAgent.desc}
          industryName={name}
        />
      </section>

      {/* CTA */}
      <section className="seo-cta-section">
        <div className="seo-cta-inner">
          <h2 className="seo-cta-title">
            Generate your <span className="acc">{name}</span> agent prompt
          </h2>
          <p className="seo-cta-desc">
            {isPro
              ? `Unlock all ${agents.length} ${name} agents with Pro. Deployment-ready system prompts in one click.`
              : `${agents.length} deployment-ready system prompts. Click any agent, get a complete prompt in seconds.`
            }
          </p>
          <Link href={`/forge?industry=${slug}`} className="seo-cta-btn">
            {isPro ? 'Unlock Pro & Generate' : 'Generate Now'} →
          </Link>
          <p className="seo-cta-sub">
            {isPro ? 'Pro plan — $12/month' : 'Free to start — no account required'}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="seo-footer">
        <p className="seo-footer-text">
          Prompt Forge by <Link href="/">Hilbert Entertainment, LLC</Link> · <Link href="/privacy-policy">Privacy</Link> · <Link href="/terms">Terms</Link>
        </p>
      </footer>
    </>
  )
}
```

- [ ] **Step 3: Handle the agent card color top-bar more cleanly**

The inline style approach for per-card colors needs a cleaner pattern. Use inline style on the `::before` pseudo-element workaround — add a small colored div instead:

Replace the `::before` pseudo-element approach with a real element:

```jsx
{agents.map(agent => (
  <div className="seo-agent-card" key={agent.id}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: agent.color, borderRadius: 'var(--radius) var(--radius) 0 0' }} />
    {agent.isNew && <span className="seo-agent-new">NEW</span>}
    <span className="seo-agent-icon">{agent.icon}</span>
    <div className="seo-agent-name">{agent.name}</div>
    <div className="seo-agent-desc">{agent.desc}</div>
  </div>
))}
```

And remove the `seo-agent-card::before` CSS rule and the per-card inline `<style>` tags.

- [ ] **Step 4: Verify build**

Run: `npm run build 2>&1 | head -40`

Expected: Compilation succeeds. Static pages generated for all 41 slugs.

- [ ] **Step 5: Commit and push**

```bash
git add src/app/industry/
git commit -m "feat: add SEO landing pages for all 41 industries (B006)"
git push origin master
```

---

### Task 4: Add Structured Data (JSON-LD) for SEO

**Files:**
- Modify: `src/app/industry/[slug]/page.js`

- [ ] **Step 1: Add JSON-LD structured data to the page**

Inside the `IndustryPage` component, before the closing `</>`, add:

```jsx
{/* JSON-LD Structured Data */}
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
```

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | head -30`

- [ ] **Step 3: Commit and push**

```bash
git add src/app/industry/
git commit -m "feat: add JSON-LD structured data to industry SEO pages"
git push origin master
```

---

### Task 5: Link Landing Page to Industry SEO Pages

**Files:**
- Modify: `src/app/page.js` (industry cards section, ~lines 557-566)

- [ ] **Step 1: Wrap industry cards in Link components**

In `src/app/page.js`, update the industry card rendering to link to SEO pages. Import `toSlug` from the data module:

At the top of the file, the existing import is:
```javascript
import Link from 'next/link'
```

Add:
```javascript
import { toSlug } from './data/industries'
```

Then update the industry card (around line 557-566) from:

```jsx
<div className="lp-ind-card" key={ind.name}>
```

To:

```jsx
<Link href={`/industry/${toSlug(ind.name)}`} className="lp-ind-card" key={ind.name} style={{textDecoration:'none',color:'inherit'}}>
```

And change the closing `</div>` to `</Link>`.

Also update the "+25 more industries" link (line 567):

From: `<Link href="/forge" className="lp-ind-more">+25 more industries →</Link>`
To: `<Link href="/forge" className="lp-ind-more">+{41 - 16} more industries in the Forge →</Link>`

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | head -30`

- [ ] **Step 3: Commit and push**

```bash
git add src/app/page.js
git commit -m "feat: link landing page industry cards to SEO pages"
git push origin master
```

---

### Task 6: Update QUEUE_BUILD.md and STATUS.md

**Files:**
- Modify: `QUEUE_BUILD.md`
- Modify: `STATUS.md`

- [ ] **Step 1: Update QUEUE_BUILD.md — mark B006 deployed**

Change B006 row status from `OPEN` to `✅ DEPLOYED` and add to completed archive.

- [ ] **Step 2: Update STATUS.md — add SEO pages to platform state**

Add under the Recent Deployments section and update any relevant stats.

- [ ] **Step 3: Update B008 status**

Change B008 from `OPEN` to `✅ DEPLOYED` with note: "Clerk captures email on sign-up — verified by Rob."

- [ ] **Step 4: Commit and push**

```bash
git add QUEUE_BUILD.md STATUS.md
git commit -m "docs: mark B006 SEO pages and B008 email capture as deployed"
git push origin master
```
