# STATUS.md — Platform State Snapshot

> Updated by The Forger after every deployment. Prompt Agent reads this before proposing new content. Last updated by agents — check git log for timestamp.

## Live Platform Stats

- **Total agents:** 267
- **Total industries:** 41 (10 Pro-only)
- **Total starter prompts:** 24
- **Starter categories:** 4 (Work, Writing, Learning, Life)
- **Agents with fixedPrompt:** 8 (SOP Generator, Content Repurposer, Subscription Negotiator, Homework Helper, Listing Generator, Resume Screener, Site Report Generator, Proposal & SOW Writer)
- **Prompt engine version:** v2 (XML-tagged, 8-section output, userContext support, max_tokens: 4096)
- **Free limit:** 3 generates
- **UI features:** Streaming output, Regenerate button, Generation metadata, userContext input (Pro only), Global search, Industry dropdown, Filter pills, Pro-only blur/lock system, SEO landing pages (/industry/{slug}), URL deep-linking (/forge?industry=, /forge?agent=), VerticalSelector onboarding component (landing page), Vercel Analytics funnel events (5 stages), 7-section conversion landing page (BeforeAfter, HowItWorks, SocialProof, FinalCTA components), hero use-case chips, QualityBadge (score pill + hover tooltip on validated agents), Agent pages (/agent/{id} — 267 pages), /sitemap.xml (309 URLs), /robots.txt, Supabase prompt library (save/list/delete), /dashboard saved prompts page
- **Pro-only industries:** AI Agent Development, Cyber Intelligence, Cybersecurity, Consulting & Strategy, Architecture & Engineering, SaaS & Product, Banking & Lending, Pharma & Biotech, Aviation & Aerospace, Executive & Leadership
- **Gated features:** userContext personalization, Save to Library, Custom Agent Builder
- **Pricing:** $12/month Pro (LOCKED — see competitive-intel.md)

## Industries & Agent Counts

| Industry | Agents | Status |
|----------|--------|--------|
| General | 15 | Live |
| Comms & Sales | 8 | Live |
| Education | 7 | Live |
| Personal Finance | 7 | Live |
| Healthcare | 6 | Live |
| Parenting | 6 | Live |
| Retail & Ops | 6 | Live |
| Real Estate | 6 | Live |
| Marketing & Growth | 6 | Live |
| Accounting & Tax | 6 | Live |
| Insurance | 6 | Live |
| Finance | 6 | Live |
| Legal & Compliance | 6 | Live |
| HR & People Ops | 6 | Live |
| Architecture & Engineering | 6 | Live (Pro-only) |
| Consulting & Strategy | 6 | Live (Pro-only) |
| Executive & Leadership | 6 | Live (Pro-only) |
| Hospitality & Events | 6 | Live |
| Logistics & Supply Chain | 6 | Live |
| Agriculture & Farming | 6 | Live |
| Automotive | 6 | Live |
| Aviation & Aerospace | 6 | Live (Pro-only) |
| Banking & Lending | 6 | Live (Pro-only) |
| Construction & Trades | 6 | Live |
| Cybersecurity | 6 | Live (Pro-only) |
| Dental & Optometry | 6 | Live |
| E-commerce & DTC | 6 | Live |
| Energy & Utilities | 6 | Live |
| Fitness & Wellness | 6 | Live |
| Freelancers & Solopreneurs | 6 | Live |
| Manufacturing | 6 | Live |
| Media & Publishing | 6 | Live |
| Nonprofit & Government | 6 | Live |
| Pharma & Biotech | 6 | Live (Pro-only) |
| Property Management | 6 | Live |
| Recruitment & Staffing | 6 | Live |
| SaaS & Product | 6 | Live (Pro-only) |
| Sports & Athletics | 6 | Live |
| Veterinary | 6 | Live |
| AI Agent Development | 10 | Live (Pro-only) |
| Cyber Intelligence | 10 | Live (Pro-only) |

## What's Currently Staged (content/staging/)

Empty — all staged content has been integrated and staging cleaned up.

## What's In the Proposal Queue (content/proposals/)

- `strategic-audit.md` — V2 full library audit. All recommendations executed.
- `pro-industry-scoring.md` — Revenue framework scoring for all 41 industries.
- `quality-audit.md` — Full v2 engine audit (30 agents tested via live API, 38 total calls). Verdict: PASS (8.59 avg). Identified max_tokens truncation fix (already applied).
- `quality-test-results.json` — Automated quality test (40 agents, v2 template validation).
- `agent_blueprint/client-delivery-pipeline.md` — Pro-only blueprint: 4-agent consulting workflow (proposal → plan → analysis → deliverable)
- `agent_blueprint/content-marketing-engine.md` — Pro-only blueprint: 4-agent content pipeline (SEO → draft → distribute → repurpose)
- `agent_blueprint/hire-to-onboard-pipeline.md` — Pro-only blueprint: 4-agent hiring workflow (screen → interview → offer → onboard)

## Recent Deployments

- 2026-03-19 — Add 6 new industries (Legal, RE, Marketing, HR, Accounting, Insurance) — `4354387`
- 2026-03-19 — Rename 8 agents + strategic audit — `3eab2e6`
- 2026-03-19 — Swap 6 low-value agents — `4f8c3b9`
- 2026-03-19 — Overhaul starter prompts — `41c0645`
- 2026-03-19 — Upgrade 4 agents to fixedPrompt — `4dc240d`
- 2026-03-19 — Add 8 gap-fill agents — `79dc81d`
- 2026-03-19 — Add 5 industries (Architecture, Consulting, Executive, Hospitality, Logistics) — `610a414`
- 2026-03-19 — Upgrade buildPrompt to v2 — `8665de5`
- 2026-03-19 — Execute audit V2 — `9a8e5c6`
- 2026-03-19 — Upgrade listing_gen and site_report to fixedPrompt — `dfcb0e3`
- 2026-03-19 — Add streaming, regenerate, metadata — `87d66f4`
- 2026-03-19 — Add userContext input UI — `f7df7b7`
- 2026-03-19 — Integrate 20 new industries (100 agents) — `ff49885`
- 2026-03-19 — Premium UI redesign + Pro-only blur system — `290052d`
- 2026-03-19 — Add AI Agent Development (10 agents, Pro-only) — `2618c22`
- 2026-03-19 — Paywall restructure: 3 free, 9 Pro industries, gated features — `d92f6aa`
- 2026-03-19 — Global search, industry dropdown, filter pills — `5212e2e`
- 2026-03-20 — Quality test (40 agents) + max_tokens fix (1024→4096) — `9f6589b`
- 2026-03-20 — Add Cyber Intelligence (10 agents, Pro-only) — `2810fb6`
- 2026-04-01 — Extract INDUSTRIES into shared data module — `0980966`
- 2026-04-01 — Add URL param deep-linking for /forge — `e766053`
- 2026-04-01 — Add SEO landing pages for all 41 industries (/industry/{slug}) — `4bf1aca`
- 2026-04-01 — Add JSON-LD structured data to SEO pages — `a3ee1fc`
- 2026-04-01 — Link homepage industry cards to SEO pages — `6fb97f2`
- 2026-04-02 — Add Vercel Analytics funnel events (5 stages) — `15defe1`
- 2026-04-02 — Add memory sync protocol to AGENTS.md — `19c1290`
- 2026-04-03 — Add VerticalSelector onboarding component to landing page — `03dcfbc`
- 2026-04-04 — Rebuild landing page to 7-section conversion architecture (TASK-006) — `b331cd0`
- 2026-04-04 — Forge visual alignment to landing page — light theme (TASK-007) — `3ec3380`
- 2026-04-04 — Dark wrapper fix + forge header typography (TASK-008) — `bb99fe3`
- 2026-04-04 — Full design system alignment — yellow→orange, CSS variables (TASK-009) — `0483912`
- 2026-04-04 — Integrate 16 gap-fill agents across industries (total 267) — `dafb35b`
- 2026-04-08 — Add MCP server section to root README for Glama submission — `c86ab8a`
- 2026-04-08 — Rewrite root README to lead with MCP for Glama scanner — `d962545`
- 2026-04-08 — Fix: Pro status not recognized after login — add verify-subscription sync + user.reload() on sign-in — `085fc93`
- 2026-04-12 — Add QualityBadge: surface quality gate scores on generated prompts (30 agents scored, 7.6–9.2 range) — `72917ef`
- 2026-04-12 — SEO template system: 267 agent pages, sitemap (309 URLs), robots.txt, industry page upgrades, Supabase library, /dashboard, ?agent= deep-link — `77562d6`
- 2026-04-12 — Score remaining 237 agents with quality gate data (qualityScore, tier1Pass, validatedAt) — all 267 agents now scored — `36b5ad9`
- 2026-04-13 — Optimizer: fix hydration (dynamic ssr:false, relative import); Module 3 full 10-model table with 3-provider toggle, dividers, mobile single-select — `9b3c446`
