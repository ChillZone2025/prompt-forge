# DATA-SCHEMA.md — Data Structures, Agent Registry & Content Schemas

## Architecture Overview

Prompt Forge currently has **no backend database**. All agent definitions and prompt data are hardcoded in `src/app/forge/PromptForge.js`. This file is the single source of truth.

Content changes = code changes. To add new agents or prompts, you modify the JavaScript data structures in PromptForge.js.

## Primary Data Structures

### 1. INDUSTRIES Object

Location: `PromptForge.js`, line ~20
Type: JavaScript object where keys are industry names and values are arrays of agent objects.

```javascript
const INDUSTRIES = {
  "Industry Name": [
    {
      id: "unique_snake_case",      // Required. Unique across ALL industries.
      icon: "📋",                    // Required. Single emoji or unicode character.
      name: "Agent Display Name",    // Required. 2-4 words, title case.
      desc: "Capability keywords",   // Required. Under 50 chars, comma-separated.
      color: "#hex123",              // Required. From approved palette.
      isNew: true,                   // Optional. Flags new agents with gold badge.
      fixedPrompt: "..."             // Optional. Pre-written prompt, skips API.
    }
  ]
}
```

### 2. STARTER_PROMPTS Array

Location: `PromptForge.js`, line ~111
Type: JavaScript array of prompt objects.

```javascript
const STARTER_PROMPTS = [
  {
    id: "s1",                        // Required. Format: "s" + sequential number.
    category: "Work",                // Required. Must match a STARTER_CATS entry.
    color: "#e8913a",                // Required. Matches category color.
    title: "Summarize This Email",   // Required. 3-6 words, verb-led.
    desc: "Get key points fast.",    // Required. Under 60 chars.
    prompt: "Summarize the following email...\n\n[PASTE HERE]"  // Required. With [PLACEHOLDERS].
  }
]
```

### 3. STARTER_CATS Array

Location: `PromptForge.js`, line ~130
Type: JavaScript array of category strings. First element must always be `'All'`.

```javascript
const STARTER_CATS = ['All', 'Work', 'Writing', 'Learning', 'Life']
```

## Complete Agent Registry

### General (12 agents)

| ID | Icon | Name | Description | Color |
|----|------|------|-------------|-------|
| `sop_gen` | 📋 | SOP Generator | Upload any file → get a full Standard Operating Procedure | #f5c518 |
| `treasury` | ◈ | FX Treasury Analyst | Hedging, derivatives, currency risk | #e8913a |
| `cyber` | ⬡ | Cyber Investigator | Threat hunting, forensics, OSINT | #4db8c8 |
| `code_review` | ⟨⟩ | Code Reviewer | Security, performance, best practices | #9b7fd4 |
| `data` | ∿ | Data Analyst | SQL, Python, insight generation | #4db88c |
| `legal` | ⚖ | Legal Researcher | Case law, contracts, compliance | #d4834d |
| `pm` | ◎ | Project Manager | Agile, risk, stakeholder comms | #c46896 |
| `security` | ⬛ | Security Auditor | Pen testing, vulnerability assessment | #c44d4d |
| `finance` | ∑ | Financial Modeler | DCF, LBO, valuation, scenarios | #d4a84d |
| `market` | ◉ | Market Researcher | Competitive intel, trend analysis | #4d8cd4 |
| `support` | ◷ | Customer Support | De-escalation, resolution, empathy | #4dc87a |
| `content` | ✦ | Content Strategist | SEO, brand voice, editorial calendar | #a04dc8 |
| `devops` | ∞ | DevOps Engineer | CI/CD, infra, incident response | #4daed4 |

> Note: `sop_gen` has `isNew: true` and a `fixedPrompt` (skips Claude API).

### Healthcare (5 agents)

| ID | Icon | Name | Description | Color |
|----|------|------|-------------|-------|
| `med_scribe` | ✍ | Medical Scribe | Clinical notes, EMR integration | #4db88c |
| `prior_auth` | 📋 | Prior Auth Agent | Payer workflows, claim denial reduction | #4d8cd4 |
| `rcm` | 💰 | RCM Specialist | Billing, coding, A/R follow-ups | #d4a84d |
| `triage` | 🏥 | Patient Triage Agent | Symptom checking, care routing | #c44d4d |
| `diagnostics` | 🔬 | Diagnostics Assistant | Radiology & dermatology flagging | #9b7fd4 |

### Finance (5 agents)

| ID | Icon | Name | Description | Color |
|----|------|------|-------------|-------|
| `close_agent` | 📊 | Autonomous Close Agent | Financial close, multi-entity consolidation | #d4a84d |
| `treasury_liq` | 💧 | Treasury & Liquidity | Cash forecasting, working capital mgmt | #4daed4 |
| `audit_comp` | 🔍 | Audit & Compliance | Fraud monitoring, regulatory drift | #c44d4d |
| `credit_risk` | 📈 | Credit Risk Underwriter | Automated scoring, loan analysis | #4db88c |
| `tax_agent` | 🧾 | Tax Strategy Agent | Real-time tax tracking, automated filing | #d4834d |

### Comms & Sales (5 agents)

| ID | Icon | Name | Description | Color |
|----|------|------|-------------|-------|
| `sdr` | 📣 | Autonomous SDR | Prospecting, outreach, lead qualification | #e8913a |
| `repurpose` | ♻ | Content Repurposer | One asset → 50+ social posts | #9b7fd4 |
| `voice_ai` | 📞 | Voice AI Agent | 24/7 call center, appointment booking | #4db88c |
| `market_intel` | 🧠 | Market Intelligence | Competitor pricing, strategic alerts | #4d8cd4 |
| `pr_agent` | 📰 | PR & Media Agent | Journalist targeting, pitch drafting | #c46896 |

### Education (5 agents)

| ID | Icon | Name | Description | Color |
|----|------|------|-------------|-------|
| `micro_learn` | 🎯 | Micro-Learning Agent | Custom curricula, progress-based | #4daed4 |
| `grading` | ✅ | Grading & Feedback | Essays, coding critiques, instant feedback | #4db88c |
| `career_track` | 🗺 | Career Growth Tracker | Skills vs job market, certification paths | #d4a84d |
| `admissions` | 🎓 | Admissions Agent | Inquiry to enrollment pipeline mgmt | #9b7fd4 |
| `research_asst` | 🔭 | Research Assistant | Academic paper synthesis, doctoral support | #d4834d |

### Personal Finance (5 agents)

| ID | Icon | Name | Description | Color |
|----|------|------|-------------|-------|
| `fin_advisor` | 🧭 | Financial Advisor | Full-context accounts, taxes, investments | #4db88c |
| `sub_nego` | ✂ | Subscription Negotiator | Find, cancel, renegotiate bills | #e8913a |
| `tax_opt` | 🔖 | Tax Optimizer | Year-round deduction scanning | #d4a84d |
| `micro_invest` | 🌱 | Micro-Investing Agent | Goal-based portfolio rebalancing | #4d8cd4 |
| `fraud_watch` | 🛡 | Fraud Watchdog | Credit monitoring, identity protection | #c44d4d |

### Parenting (5 agents)

| ID | Icon | Name | Description | Color |
|----|------|------|-------------|-------|
| `homework` | 📚 | Homework Helper | Subject tutoring, step-by-step explanations | #60a5fa |
| `scheduler` | 📅 | Family Scheduler | Activity coordination, calendar management | #34d399 |
| `development` | 🌱 | Child Development Tracker | Milestone tracking, age-appropriate guidance | #a78bfa |
| `stories` | 🌙 | Bedtime Story Agent | Custom stories, reading level adaptation | #fb923c |
| `coach` | 🤝 | Parent Coach | Behavior strategies, emotional regulation | #f472b6 |

### Retail & Ops (5 agents)

| ID | Icon | Name | Description | Color |
|----|------|------|-------------|-------|
| `inventory` | 📦 | Inventory Optimizer | Demand forecasting, returns logistics | #d4a84d |
| `commerce` | 🛒 | Agentic Commerce | Instant checkout, autonomous buying | #e8913a |
| `supply_chain` | ⛓ | Supply Chain Agent | Bottleneck detection, re-routing | #4daed4 |
| `prop_val` | 🏠 | Property Valuator | Real-time appraisal, market data | #4db88c |
| `contract_rev` | 📜 | Contract Reviewer | Unfavorable clause detection for SMBs | #9b7fd4 |

## Complete Starter Prompt Registry

| ID | Category | Title | Color |
|----|----------|-------|-------|
| `s1` | Work | Summarize This Email | #e8913a |
| `s2` | Work | Write a Performance Review | #e8913a |
| `s3` | Work | Notes → Action Items | #e8913a |
| `s4` | Work | Reply to Difficult Email | #e8913a |
| `s5` | Writing | Explain Like I'm 5 | #9b7fd4 |
| `s6` | Writing | Improve My Writing | #9b7fd4 |
| `s7` | Writing | Write a LinkedIn Post | #9b7fd4 |
| `s8` | Writing | Proofread & Fix Grammar | #9b7fd4 |
| `s9` | Learning | Teach Me Anything | #4db88c |
| `s10` | Learning | Make a Study Plan | #4db88c |
| `s11` | Learning | Summarize an Article | #4db88c |
| `s12` | Learning | Quiz Me on This Topic | #4db88c |
| `s13` | Life | Help Me Make a Decision | #4d8cd4 |
| `s14` | Life | Plan My Week | #4d8cd4 |
| `s15` | Life | Write My Bio | #4d8cd4 |
| `s16` | Life | Give Me Honest Feedback | #4d8cd4 |

## Summary Counts

| Category | Count |
|----------|-------|
| Industries | 8 |
| Total agents | 47 (12 General + 5×7 others) |
| Agents with fixedPrompt | 1 (SOP Generator) |
| Starter prompts | 16 |
| Starter categories | 4 (Work, Writing, Learning, Life) |

## Reserved ID Prefixes

When creating new content, use these conventions:
- Agent IDs: descriptive snake_case (e.g., `resume_screen`, `bid_est`)
- Starter IDs: `s` + next sequential number (next available: `s17`)
- Industry names: title case, 1-3 words, ampersand OK (e.g., `Comms & Sales`)

## ID Uniqueness Check

Before adding any new agent, verify the ID doesn't exist in this complete list:

```
sop_gen, treasury, cyber, code_review, data, legal, pm, security, finance,
market, support, content, devops, med_scribe, prior_auth, rcm, triage,
diagnostics, close_agent, treasury_liq, audit_comp, credit_risk, tax_agent,
sdr, repurpose, voice_ai, market_intel, pr_agent, micro_learn, grading,
career_track, admissions, research_asst, fin_advisor, sub_nego, tax_opt,
micro_invest, fraud_watch, homework, scheduler, development, stories,
coach, inventory, commerce, supply_chain, prop_val, contract_rev
```

## Staging Schema for New Content

When agents draft new content, stage it as JSON files in `/content/staging/`. Every new agent and industry proposal must include a `rationale` field that references the Revenue Optimization Framework scores from `competitive-intel.md`.

### New Agent Staging Format
File: `/content/staging/agents/{industry_name}/{agent_id}.json`

```json
{
  "id": "resume_screen",
  "icon": "📄",
  "name": "Resume Screener",
  "desc": "ATS filtering, candidate ranking, bias reduction",
  "color": "#4db88c",
  "industry": "HR & People Ops",
  "isNew": true,
  "rationale": "High demand from HR teams automating initial resume review. Complements existing hiring workflow gaps.",
  "revenue_score": {
    "willingness_to_pay": 8,
    "frequency_of_use": 7,
    "pain_of_alternatives": 9,
    "market_size": 7,
    "seo_opportunity": 6,
    "weighted_total": 7.6
  },
  "created_by": "agent",
  "created_at": "2026-03-19"
}
```

### New Starter Prompt Staging Format
File: `/content/staging/starters/{id}.json`

```json
{
  "id": "s17",
  "category": "Work",
  "color": "#e8913a",
  "title": "Write a Slack Update",
  "desc": "Turn bullet points into a polished team update.",
  "prompt": "Turn these bullet points into a clear, professional Slack update for my team. Keep it under 150 words.\n\nBullets:\n[PASTE BULLETS HERE]",
  "rationale": "Fills gap between email and informal messaging. High daily use case.",
  "created_by": "agent",
  "created_at": "2026-03-19"
}
```

### Service Expansion Proposal Format
File: `/content/proposals/{service_type}/{title_slug}.md`

```markdown
# Proposal: [Title]

## Service Type
[workflow_template | agent_blueprint | api_tutorial | fine_tuning_guide]

## Summary
[2-3 sentence overview]

## Target Audience
[Who benefits from this]

## Implementation Effort
[Low / Medium / High]

## Revenue Impact
[How this drives subscriptions or creates upsell opportunity]

## Content Outline
[Detailed outline of what would be created]

## Dependencies
[What needs to exist before this can be built]
```

## localStorage Keys Reference

| Key | Type | Purpose |
|-----|------|---------|
| `pf_usage` | string (number) | Count of prompts generated |
| `pf_pro` | string ("true"/"false") | Pro subscription flag (verified server-side) |
| `pf_library` | JSON string (array) | User's saved prompt library |
| `pf_seen` | string ("true") | Whether user has seen the walkthrough |
| `pf_customer_id` | string | Stripe customer ID for subscription verification |

## API Routes Reference

| Route | Method | Purpose | Agents May Modify? |
|-------|--------|---------|-------------------|
| `/api/generate` | POST | Calls Claude API to generate prompt | NO |
| `/api/checkout` | POST | Creates Stripe checkout session | NO |
| `/api/webhook` | POST | Handles Stripe webhook events | NO |
| `/api/verify-subscription` | POST | Verifies Pro status against Stripe | NO |
