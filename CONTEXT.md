---
generated: 2026-04-07
---

## Current State

- **Live URL:** https://www.getpromptforge.net
- **Total agents:** 267
- **Total industries:** 41 (10 Pro-only)
- **Starter prompts:** 24 across 4 categories (Work, Writing, Learning, Life)
- **Agents with fixedPrompt:** 8 (SOP Generator, Content Repurposer, Subscription Negotiator, Homework Helper, Listing Generator, Resume Screener, Site Report Generator, Proposal & SOW Writer)
- **Free tier:** 3 prompt generations, no account required
- **Pro tier:** $12/month — unlimited generations, all Pro-only industries, Save to Library, userContext personalization, Custom Agent Builder
- **Prompt engine:** v2 (XML-tagged, 8-section output, userContext support, max_tokens: 4096)
- **Staging queue:** Empty — all content integrated
- **Active task:** TASK-005 (Agent Blueprints — 3 playbooks staged, awaiting Rob's review)

### Pro-only Industries
AI Agent Development (10), Cyber Intelligence (10), Cybersecurity, Consulting & Strategy, Architecture & Engineering, SaaS & Product, Banking & Lending, Pharma & Biotech, Aviation & Aerospace, Executive & Leadership

### UI Features (live)
Streaming output, Regenerate, Generation metadata, userContext input (Pro), Global search, Industry dropdown, Filter pills, Pro blur/lock system, SEO landing pages (`/industry/{slug}`), URL deep-linking (`/forge?industry=`), VerticalSelector onboarding, Vercel Analytics (5 funnel stages), 7-section conversion landing page (BeforeAfter, HowItWorks, SocialProof, FinalCTA), hero use-case chips

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript / JavaScript |
| Auth | Clerk (`@clerk/nextjs` v5) |
| Payments | Stripe (live mode, server-side verification) |
| AI | Anthropic Claude API (`@anthropic-ai/sdk` v0.24) |
| Cache / Rate limiting | Upstash Redis |
| Analytics | Vercel Analytics |
| Deployment | Vercel (auto-deploy on push to master) |
| Storage | localStorage (Pro status, prompt library) — no backend DB |

### Key File Locations
- `src/app/data/` — INDUSTRIES data module (shared source of truth for all agents)
- `src/app/forge/` — Main forge tool route
- `src/app/industry/` — SEO landing pages per industry (dynamic route)
- `src/app/components/landing/` — BeforeAfter, HowItWorks, SocialProof, FinalCTA components
- `src/app/api/` — Server routes (checkout, webhook, verify-subscription — DO NOT MODIFY)
- `TASK_QUEUE.md` — Agent coordination board
- `STATUS.md` — Live platform snapshot
- `business-rules.md` — Quality gates, prompt template, color palette
- `data-schema.md` — Agent data structure reference

---

## Decisions

- **No user accounts** — free tier requires zero signup; Pro status verified via Stripe + localStorage customer ID
- **No backend database** — all persistence in localStorage; deferred until 100+ subscribers
- **Pricing locked at $12/month** — see `competitive-intel.md`; no changes without scoring justification
- **INDUSTRIES extracted to shared data module** (2026-04-01) — previously monolithic in PromptForge.js
- **Prompt engine v2** — XML-tagged, 8-section output replaced v1; max_tokens fixed 1024→4096
- **SEO strategy** — one landing page per industry (`/industry/{slug}`) with JSON-LD structured data
- **Content scoring** — all new agents scored against Revenue Optimization Framework: willingness to pay (30%), frequency (25%), pain of alternatives (20%), market size (15%), SEO opportunity (10%)
- **PWA over native app** — App Store deferred until ~500 subscribers (Apple's 30% cut not worth it earlier)

---

## Graveyard

- **PromptForge.js as monolith** — previously held all INDUSTRIES data inline; extracted to `/data/` module 2026-04-01
- **Pricing tiers beyond $12/month Pro** — deferred until 100+ subscribers
- **N8N automation suite** — planned in roadmap, not built
- **Email capture** — planned, not built
- **User accounts / Supabase** — Phase 4 roadmap item, deferred
- **Team/enterprise tier** — deferred until 100+ subscribers

---

## Next

From roadmap and task queue:

1. **TASK-005** — Agent Blueprints (3 Pro-only playbooks) awaiting Rob's review before launch
2. **Content expansion** — 2-3 new agents/week, 1 new industry/month, 3-4 new starter prompts/month
3. **Pro workspace features** — Prompt refinement (Phase 1 priority): second Claude call applies user modifiers to generated prompts
4. **Regenerate with version history** — Phase 2
5. **Saved userContext templates** — Phase 2
6. **Export (markdown, .txt)** — Phase 2
7. **Use-case chip filter logic** — chips are visual-only in current build; filter wiring is a future task
8. **SocialProof real data** — currently placeholder count; needs real DB query when available
