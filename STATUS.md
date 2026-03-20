# STATUS.md — Platform State Snapshot

> Updated by The Forger after every deployment. Prompt Agent reads this before proposing new content. Last updated by agents — check git log for timestamp.

## Live Platform Stats

- **Total agents:** 239
- **Total industries:** 41 (10 Pro-only)
- **Total starter prompts:** 24
- **Starter categories:** 4 (Work, Writing, Learning, Life)
- **Agents with fixedPrompt:** 8 (SOP Generator, Content Repurposer, Subscription Negotiator, Homework Helper, Listing Generator, Resume Screener, Site Report Generator, Proposal & SOW Writer)
- **Prompt engine version:** v2 (XML-tagged, 8-section output, userContext support, max_tokens: 4096)
- **Free limit:** 3 generates
- **UI features:** Streaming output, Regenerate button, Generation metadata, userContext input (Pro only), Global search, Industry dropdown, Filter pills, Pro-only blur/lock system
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
| Finance | 5 | Live |
| Legal & Compliance | 5 | Live |
| HR & People Ops | 5 | Live |
| Architecture & Engineering | 5 | Live (Pro-only) |
| Consulting & Strategy | 5 | Live (Pro-only) |
| Executive & Leadership | 5 | Live (Pro-only) |
| Hospitality & Events | 5 | Live |
| Logistics & Supply Chain | 5 | Live |
| Agriculture & Farming | 5 | Live |
| Automotive | 5 | Live |
| Aviation & Aerospace | 5 | Live (Pro-only) |
| Banking & Lending | 5 | Live (Pro-only) |
| Construction & Trades | 5 | Live |
| Cybersecurity | 5 | Live (Pro-only) |
| Dental & Optometry | 5 | Live |
| E-commerce & DTC | 5 | Live |
| Energy & Utilities | 5 | Live |
| Fitness & Wellness | 5 | Live |
| Freelancers & Solopreneurs | 5 | Live |
| Manufacturing | 5 | Live |
| Media & Publishing | 5 | Live |
| Nonprofit & Government | 5 | Live |
| Pharma & Biotech | 5 | Live (Pro-only) |
| Property Management | 5 | Live |
| Recruitment & Staffing | 5 | Live |
| SaaS & Product | 5 | Live (Pro-only) |
| Sports & Athletics | 5 | Live |
| Veterinary | 5 | Live |
| AI Agent Development | 10 | Live (Pro-only) |
| Cyber Intelligence | 10 | Live (Pro-only) |

## What's Currently Staged (content/staging/)

Nothing — all staging cleared as of 2026-03-20.

## What's In the Proposal Queue (content/proposals/)

- `strategic-audit.md` — V2 full library audit. All recommendations executed.
- `pro-industry-scoring.md` — Revenue framework scoring for all 41 industries.
- `quality-test-results.json` — Automated quality test (40 agents, v2 template validation).

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
