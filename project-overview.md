# PROJECT-OVERVIEW.md — Vision, Revenue Model & Roadmap

## What Prompt Forge Does

Prompt Forge lets anyone generate a deployment-ready AI agent system prompt in one click. Users pick an industry, pick an agent archetype, and get a complete system prompt they can paste into Claude, ChatGPT, or any AI tool.

The core value proposition: **Skip the prompt engineering learning curve. Get a professional agent prompt in seconds.**

## Target Audience

1. **Business professionals** exploring AI for their workflows (primary)
2. **AI-curious non-technical users** who want to use AI tools but don't know how to prompt effectively
3. **Developers and consultants** who need quick-start system prompts for client projects
4. **Small business owners** looking to automate specific functions with AI agents

## Revenue Model

### Current Tiers

| Tier | Price | What You Get |
|------|-------|-------------|
| **Free (Apprentice)** | $0 | 5 prompt generations. Full access to Starter Prompts. No account required. |
| **Pro** | $12/month | Unlimited generations. All agents across all industries. Prompt library with save/search. |

### How Payment Works
- No user accounts — free tier works immediately with no signup
- Pro subscription via Stripe Checkout ($12/month recurring)
- Pro status verified server-side against Stripe on every page load
- Cancellations and refunds automatically revoke Pro access
- Customer ID stored in browser localStorage, verified against Stripe's API

### Revenue Growth Levers
1. **More agents = more value for Pro** — each new industry/agent increases the reason to subscribe
2. **More starter prompts = better free experience** — draws users in, demonstrates value
3. **SEO from industry-specific content** — each industry page is a potential search landing
4. **Service expansions** — workflow templates, blueprints, and tutorials create upsell opportunities
5. **LinkedIn content** — 3x/week posting cadence driving awareness

## Business Entity

- **Legal entity:** Hilbert Entertainment, LLC
- **DBA:** Prompt Forge
- **Address:** 204 Birch Creek Road, McLeansville, NC 27301
- **Contact:** thehilberts25@gmail.com

## Current Product State

### What's Live
- Full forge tool at getpromptforge.net/forge
- 47 agents across 8 industries
- 16 starter prompts across 4 categories (Work, Writing, Learning, Life)
- Stripe Pro subscription (live mode, server-side verification)
- PWA (installable on mobile/desktop)
- Terms of Service and Privacy Policy pages
- Walkthrough/onboarding modal for new users
- Prompt library with save, search, and delete

### What's NOT Built Yet
- User accounts / authentication
- Backend database (everything is localStorage + Stripe)
- Analytics dashboard (Vercel Analytics enabled but basic)
- N8N automation suite
- Email collection or marketing automation
- Social sharing features
- SEO optimization for individual industries/agents

## Roadmap

### Phase 1 — Content Expansion (Current Priority)
Goal: Go from 47 agents / 8 industries to 100+ agents / 14+ industries

- Add 6+ new industries (Legal, Real Estate, HR, Marketing, Construction, Nonprofit)
- Expand starter prompts from 16 to 40+
- Add new starter categories (Code, Marketing, Finance, Health)
- Implement agent staging workflow (JSON/markdown → PromptForge.js integration)

### Phase 2 — Automation & Distribution
Goal: Automate marketing and build inbound channels

- N8N automation suite for lead nurturing and content distribution
- LinkedIn content automation (3x/week posting cadence)
- SEO optimization — meta tags, structured data, industry landing pages
- Email capture for free users (optional, for marketing)

### Phase 3 — Service Expansion
Goal: Move beyond prompts into adjacent AI services

- Workflow templates (N8N, Make, Zapier integrations)
- Agent blueprints (multi-agent architecture designs)
- API integration tutorials
- Fine-tuning guides
- Potential new pricing tiers — DEFERRED until 100+ subscribers (see pricing lock in `competitive-intel.md`)

### Phase 4 — Platform Maturation
Goal: Build real infrastructure for scale

- Supabase or similar database for agent/prompt storage
- User accounts and authentication
- Admin dashboard for content management
- Usage analytics per agent/industry
- A/B testing on prompt templates
- Potential team/enterprise tier — DEFERRED until 100+ subscribers (see pricing lock in `competitive-intel.md`)

## Competitive Positioning

Prompt Forge is NOT:
- A general-purpose AI chatbot
- A prompt marketplace (we generate, not curate third-party prompts)
- An AI development platform

Prompt Forge IS:
- A one-click prompt generator for specific professional roles
- Organized by industry (not by AI model or capability)
- Designed for people who want to USE AI, not people who want to BUILD AI
- Freemium with a low-friction onboarding (no account needed)

## Key Metrics to Track

| Metric | Why It Matters |
|--------|---------------|
| Total generates (free + Pro) | Overall engagement |
| Free-to-Pro conversion rate | Revenue health |
| Generates per industry | Which industries drive the most value |
| Starter prompt copies | Free tier engagement / top-of-funnel |
| Monthly recurring revenue (MRR) | Business health |
| Churn rate | Subscription stickiness |
| LinkedIn impressions → site visits | Marketing effectiveness |

## Content Strategy for Agents

When creating new content autonomously, use the **Revenue Optimization Framework** in `competitive-intel.md` as the primary scoring tool. Every proposed agent or industry must be scored on: willingness to pay (30%), frequency of use (25%), pain of alternatives (20%), market size (15%), and SEO opportunity (10%).

General prioritization principles:

1. **High search volume + low competition** — Industries where people are actively searching for AI solutions but few purpose-built tools exist
2. **High willingness to pay** — Professional roles where $12/month is trivial compared to the value delivered
3. **Clear agent archetypes** — Industries with well-defined professional roles that map cleanly to AI agents
4. **Adjacent to existing industries** — Easier to cross-sell when users already understand the product

### Content Creation Cadence Target
- **2-3 new agents per week** added to existing industries
- **1 new industry per month** (5+ agents at launch)
- **3-4 new starter prompts per month**
- **1 service expansion proposal per month**
