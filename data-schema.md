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

### General (15 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `sop_gen` | 📋 | SOP Generator | Upload any file → get a full Standard Operating Procedure | #f5c518 | fixedPrompt, isNew |
| `email_draft` | ✉ | Email Draft Agent | Professional emails, cold outreach, follow-ups | #e8913a | isNew |
| `cyber` | ⬡ | Cybersecurity Advisor | Threat assessment, security policies, incident response | #4db8c8 | |
| `code_review` | ⟨⟩ | Code Reviewer | Security, performance, best practices | #9b7fd4 | |
| `data` | ∿ | Data Analyst | SQL, Python, insight generation | #4db88c | |
| `meeting_prep` | 🗣 | Meeting Prep Agent | Agenda drafting, talking points, follow-up summaries | #d4834d | isNew |
| `pm` | ◎ | Project Manager | Agile, risk, stakeholder comms | #c46896 | |
| `security` | ⬛ | Security Assessor | Risk analysis, vulnerability scans, security policies | #c44d4d | |
| `finance` | ∑ | Financial Modeler | Valuation, forecasting, scenario analysis, projections | #d4a84d | |
| `market` | ◉ | Market Researcher | Competitive intel, trend analysis | #4d8cd4 | |
| `support` | ◷ | Customer Support | De-escalation, resolution, empathy | #4dc87a | |
| `content` | ✦ | Content Strategist | SEO, brand voice, editorial calendar | #a04dc8 | |
| `devops` | ∞ | DevOps Engineer | CI/CD, infra, incident response | #4daed4 | |
| `pres_builder` | 🖥 | Presentation Builder | Slide outlines, speaker notes, deck structure | #f5c518 | isNew |
| `nego_strat` | ♟ | Negotiation Strategist | BATNA analysis, counter-offers, leverage tactics | #d4a84d | isNew |

### Healthcare (6 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `med_scribe` | ✍ | Medical Scribe | Clinical notes, EMR integration | #4db88c | |
| `prior_auth` | 📋 | Prior Auth Agent | Payer workflows, claim denial reduction | #4d8cd4 | |
| `rcm` | 💰 | RCM Specialist | Billing, coding, A/R follow-ups | #d4a84d | |
| `triage` | 🏥 | Patient Triage Agent | Symptom checking, care routing | #c44d4d | |
| `diagnostics` | 🔬 | Diagnostics Assistant | Radiology & dermatology flagging | #9b7fd4 | |
| `clinical_trial` | 🧬 | Clinical Trial Coordinator | Protocol summaries, consent forms, site reports | #4daed4 | isNew |

### Finance (5 agents)

| ID | Icon | Name | Description | Color |
|----|------|------|-------------|-------|
| `close_agent` | 📊 | Autonomous Close Agent | Financial close, multi-entity consolidation | #d4a84d |
| `treasury_liq` | 💧 | Treasury & Liquidity | Cash forecasting, working capital mgmt | #4daed4 |
| `audit_comp` | 🔍 | Audit & Compliance | Fraud monitoring, regulatory drift | #c44d4d |
| `credit_risk` | 📈 | Credit Risk Underwriter | Automated scoring, loan analysis | #4db88c |
| `tax_agent` | 🧾 | Tax Strategy Agent | Real-time tax tracking, automated filing | #d4834d |

### Comms & Sales (8 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `sdr` | 📣 | Autonomous SDR | Prospecting, outreach, lead qualification | #e8913a | |
| `repurpose` | ♻ | Content Repurposer | One asset → 50+ social posts | #9b7fd4 | fixedPrompt |
| `voice_ai` | 📞 | Call Center Agent | Call scripts, objection handling, appointment booking | #4db88c | |
| `market_intel` | 🧠 | Market Intelligence | Competitor pricing, strategic alerts | #4d8cd4 | |
| `pr_agent` | 📰 | PR & Media Agent | Journalist targeting, pitch drafting | #c46896 | |
| `proposal_gen` | 📝 | Proposal Generator | Client proposals, scope docs, pricing sections | #d4a84d | isNew |
| `email_seq` | 📧 | Email Sequence Writer | Drip campaigns, nurture flows, follow-up cadences | #4daed4 | isNew |
| `cust_success` | 🎯 | Customer Success Agent | Onboarding playbooks, churn prevention, QBR prep | #4db88c | isNew |

### Education (7 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `micro_learn` | 🎯 | Curriculum Designer | Lesson plans, learning paths, assessment design | #4daed4 | |
| `grading` | ✅ | Grading & Feedback | Essays, coding critiques, instant feedback | #4db88c | |
| `career_track` | 🗺 | Career Coach Agent | Skills gap analysis, certification paths, job market intel | #d4a84d | |
| `admissions` | 🎓 | Admissions Agent | Inquiry to enrollment pipeline mgmt | #9b7fd4 | |
| `research_asst` | 🔭 | Research Assistant | Academic paper synthesis, doctoral support | #d4834d | |
| `parent_comm` | 💬 | Parent Communicator | Progress reports, behavior updates, conference prep | #c46896 | isNew |
| `grant_writer` | 💰 | Grant Writer | Education grants, funding applications, budget narratives | #e8913a | isNew |

### Personal Finance (7 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `fin_advisor` | 🧭 | Financial Advisor | Full-context accounts, taxes, investments | #4db88c | |
| `sub_nego` | ✂ | Subscription Negotiator | Find, cancel, renegotiate bills | #e8913a | fixedPrompt |
| `tax_opt` | 🔖 | Tax Optimizer | Year-round deduction scanning | #d4a84d | |
| `micro_invest` | 🌱 | Investment Advisor | Portfolio strategy, goal-based planning, risk allocation | #4d8cd4 | |
| `fraud_watch` | 🛡 | Identity Shield Agent | Fraud detection, credit alerts, identity protection | #c44d4d | |
| `budget_arch` | 📊 | Budget Architect | Monthly budgets, expense tracking, savings goals | #9b7fd4 | isNew |
| `debt_payoff` | 📉 | Debt Payoff Strategist | Payoff plans, refinance analysis, snowball vs avalanche | #4daed4 | isNew |

### Parenting (6 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `homework` | 📚 | Homework Helper | Subject tutoring, step-by-step explanations | #60a5fa | fixedPrompt |
| `meal_plan` | 🍽 | Family Meal Planner | Weekly menus, grocery lists, dietary needs | #34d399 | isNew |
| `development` | 🌱 | Child Development Tracker | Milestone tracking, age-appropriate guidance | #a78bfa | |
| `stories` | 🌙 | Bedtime Story Agent | Custom stories, reading level adaptation | #fb923c | |
| `coach` | 🤝 | Parent Coach | Behavior strategies, emotional regulation | #f472b6 | |
| `iep_advocate` | 📋 | IEP Advocate | Special education plans, accommodation requests, meeting prep | #d4834d | isNew |

### Retail & Ops (6 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `inventory` | 📦 | Inventory Optimizer | Demand forecasting, returns logistics | #d4a84d | |
| `pricing_strat` | 💲 | Pricing Strategist | Competitive pricing, margin analysis, discount modeling | #e8913a | isNew |
| `supply_chain` | ⛓ | Supply Chain Agent | Bottleneck detection, re-routing | #4daed4 | |
| `returns_agent` | 🔄 | Returns & Refund Agent | Return policies, customer resolution, loss prevention | #4db88c | isNew |
| `vendor_nego` | 🤝 | Vendor Negotiator | Supplier terms, bulk pricing, contract leverage | #9b7fd4 | isNew |
| `store_ops` | 🏪 | Store Operations Agent | Staff scheduling, daily workflows, opening/closing checklists | #c46896 | isNew |

### Legal & Compliance (5 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `contract_analyze` | 📑 | Contract Analyzer | Clause review, risk flagging, plain-language summaries | #d4834d | isNew |
| `compliance_mon` | 🔔 | Compliance Monitor | Regulatory tracking, audit prep, policy gaps | #c44d4d | isNew |
| `policy_writer` | 📝 | Policy Writer | Handbooks, privacy policies, internal procedures | #9b7fd4 | isNew |
| `reg_nav` | 🧭 | Regulatory Navigator | Licensing, filing deadlines, industry regulations | #4d8cd4 | isNew |
| `dispute_res` | ⚖ | Dispute Resolution Agent | Demand letters, mediation prep, escalation paths | #d4a84d | isNew |

### Real Estate (6 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `listing_gen` | 🏡 | Listing Generator | Property descriptions, MLS optimization, photo captions | #e8913a | isNew |
| `market_comp` | 📊 | Market Comp Analyzer | Comparable sales, pricing strategy, market trends | #4d8cd4 | isNew |
| `lease_review` | 📄 | Lease Review Agent | Clause analysis, tenant screening, renewal terms | #d4834d | isNew |
| `lead_nurture` | 🤝 | Lead Nurture Agent | Follow-up sequences, client segmentation, drip campaigns | #4db88c | isNew |
| `showing_sched` | 🗓 | Showing Scheduler | Appointment coordination, route planning, availability | #34d399 | isNew |
| `open_house` | 🏠 | Open House Agent | Marketing flyers, follow-up scripts, social posts | #9b7fd4 | isNew |

### Marketing & Growth (6 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `seo_content` | 🔍 | SEO Content Agent | Keyword strategy, content briefs, SERP analysis | #4db88c | isNew |
| `campaign_opt` | 📈 | Campaign Optimizer | Ad spend allocation, channel ROI, budget pacing | #e8913a | isNew |
| `ab_analyst` | 🧪 | A/B Test Analyst | Experiment design, statistical significance, variant recs | #4d8cd4 | isNew |
| `brand_voice` | 🎨 | Brand Voice Agent | Tone guidelines, messaging frameworks, copy review | #9b7fd4 | isNew |
| `attrib_analyst` | 🎯 | Attribution Analyst | Multi-touch attribution, funnel analysis, conversion paths | #d4a84d | isNew |
| `social_mgr` | 📱 | Social Media Manager | Content calendars, platform strategy, analytics reports | #c46896 | isNew |

### HR & People Ops (5 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `resume_screen` | 📄 | Resume Screener | ATS filtering, candidate ranking, bias reduction | #4db88c | isNew, fixedPrompt |
| `interview_arch` | 🎙 | Interview Architect | Role-specific questions, scoring rubrics, panel prep | #9b7fd4 | isNew |
| `onboard_agent` | 🚀 | Onboarding Agent | New hire workflows, checklist generation, 30-60-90 plans | #4daed4 | isNew |
| `comp_analyst` | 💰 | Compensation Analyst | Salary benchmarking, equity modeling, offer structuring | #d4a84d | isNew |
| `perf_mgmt` | 📋 | Performance Manager | Review cycles, goal tracking, feedback frameworks | #c46896 | isNew |

### Accounting & Tax (6 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `bookkeeper` | 📒 | AI Bookkeeper | Transaction categorization, reconciliation, cleanup | #4db88c | isNew |
| `invoice_agent` | 🧾 | Invoice Agent | Invoice generation, payment tracking, aging reports | #e8913a | isNew |
| `audit_prep` | 🔎 | Audit Prep Agent | Document assembly, compliance checks, gap analysis | #c44d4d | isNew |
| `tax_prep` | 📑 | Tax Prep Agent | Deduction identification, filing checklists, deadlines | #d4834d | isNew |
| `fin_reporter` | 📊 | Financial Reporter | P&L statements, cash flow analysis, board reporting | #4d8cd4 | isNew |
| `payroll_spec` | 💵 | Payroll Specialist | Payroll compliance, deduction calculations, reporting | #d4a84d | isNew |

### Insurance (6 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `claims_agent` | 📋 | Claims Processor | Claim intake, documentation review, status tracking | #4daed4 | isNew |
| `underwrite` | 🛡 | Underwriting Agent | Risk assessment, policy pricing, coverage analysis | #c44d4d | isNew |
| `policy_comp` | ⚖ | Policy Comparator | Coverage comparison, gap identification, renewal analysis | #4d8cd4 | isNew |
| `ins_compliance` | 📜 | Insurance Compliance | Regulatory filings, license tracking, audit readiness | #d4834d | isNew |
| `client_intake` | 🤝 | Client Intake Agent | Needs assessment, quote generation, onboarding | #e8913a | isNew |
| `renewal_spec` | 🔁 | Renewal Specialist | Renewal analysis, retention scripts, coverage updates | #9b7fd4 | isNew |

### Architecture & Engineering (5 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `cost_est` | 💲 | Cost Estimator | Quantity takeoffs, unit pricing, budget tracking | #4db88c | isNew |
| `proj_coord` | 📌 | Project Coordinator | Schedules, RFIs, submittals, stakeholder logs | #9b7fd4 | isNew |
| `rfi_drafter` | 📨 | RFI/RFP Drafter | Submittals, clarifications, bid responses | #e8913a | isNew |
| `site_report` | 🏗 | Site Report Generator | Inspection notes, punch lists, field reports | #d4a84d | isNew, fixedPrompt |
| `spec_review` | 📑 | Spec Review Agent | Code compliance, specification gap analysis | #4daed4 | isNew |

### Consulting & Strategy (5 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `change_mgmt` | 🔄 | Change Management Lead | Stakeholder mapping, adoption plans, comms | #e8913a | isNew |
| `due_diligence` | 🔎 | Due Diligence Agent | Risk assessment, deal analysis, investment memos | #c44d4d | isNew |
| `market_sizing` | 📐 | Market Sizing Analyst | TAM/SAM/SOM, bottoms-up modeling | #4d8cd4 | isNew |
| `proposal_writer` | 📝 | Proposal & SOW Writer | Scope, deliverables, pricing structure | #4db88c | isNew, fixedPrompt |
| `strat_deck` | 📊 | Strategy Deck Builder | Frameworks, slide structure, executive narratives | #9b7fd4 | isNew |

### Executive & Leadership (5 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `exec_brief` | ⚡ | Executive Briefing Agent | One-pagers, situation summaries, talking points | #d4a84d | isNew |
| `board_prep` | 🏛 | Board Prep Agent | Board decks, KPI narratives, governance docs | #9b7fd4 | isNew |
| `decision_frame` | 🎯 | Decision Framework Agent | Options analysis, risk matrices, go/no-go recs | #4d8cd4 | isNew |
| `exec_comms` | 🎙 | Executive Comms Writer | All-hands scripts, investor updates, memos | #e8913a | isNew |
| `okr_agent` | 📈 | OKR & Goals Architect | Objective cascading, alignment scoring, reviews | #4db88c | isNew |

### Hospitality & Events (5 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `event_plan` | 🎪 | Event Planning Agent | Timelines, vendor coordination, run-of-show docs | #9b7fd4 | isNew |
| `guest_exp` | 🛎 | Guest Experience Agent | Service scripts, complaint resolution, upselling | #f5c518 | isNew |
| `menu_eng` | 🍽 | Menu Design Agent | Pricing strategy, food cost analysis, descriptions | #4db88c | isNew |
| `rev_mgmt` | 💹 | Revenue Management Agent | Dynamic pricing, occupancy optimization, comp sets | #e8913a | isNew |
| `staff_sched` | 🗓 | Staff Scheduling Agent | Shift coverage, labor cost forecasting, compliance | #4daed4 | isNew |

### Logistics & Supply Chain (5 agents)

| ID | Icon | Name | Description | Color | Notes |
|----|------|------|-------------|-------|-------|
| `route_opt` | 🛣 | Route Optimization Agent | Fleet routing, delivery windows, fuel efficiency | #4daed4 | isNew |
| `warehouse_ops` | 🏭 | Warehouse Ops Agent | Layout optimization, pick/pack, labor | #d4a84d | isNew |
| `carrier_nego` | 🤝 | Carrier Negotiation Agent | Rate benchmarking, contract terms, lane analysis | #e8913a | isNew |
| `customs_comp` | 🌐 | Customs & Trade Agent | HS codes, tariff classification, trade docs | #c44d4d | isNew |
| `demand_plan` | 🔮 | Demand Planning Agent | Forecast modeling, seasonality, SKU analysis | #4d8cd4 | isNew |

## Complete Starter Prompt Registry

| ID | Category | Title | Color |
|----|----------|-------|-------|
| `s1` | Work | Summarize This Email | #e8913a |
| `s2` | Work | Write a Performance Review | #e8913a |
| `s3` | Work | Notes → Action Items | #e8913a |
| `s4` | Work | Reply to Difficult Email | #e8913a |
| `s5` | Writing | Break Down Any Concept | #9b7fd4 |
| `s6` | Writing | Improve My Writing | #9b7fd4 |
| `s7` | Writing | Write a LinkedIn Post | #9b7fd4 |
| `s8` | Work | Write a Cold Email | #e8913a |
| `s9` | Work | Prep for a Meeting | #e8913a |
| `s10` | Work | Write a Project Brief | #e8913a |
| `s11` | Learning | Summarize an Article | #4db88c |
| `s12` | Work | Draft a Slack Update | #e8913a |
| `s13` | Life | Negotiate My Salary | #4d8cd4 |
| `s14` | Life | Plan My Week | #4d8cd4 |
| `s15` | Life | Generate My Professional Bio | #4d8cd4 |
| `s16` | Work | Write a Client Proposal Intro | #e8913a |
| `s17` | Work | Write a Status Report | #e8913a |
| `s18` | Work | Create Interview Questions | #e8913a |
| `s19` | Writing | Rewrite for Tone | #9b7fd4 |
| `s20` | Learning | Explain This Code | #4db88c |
| `s21` | Life | Write a Thank You Note | #4d8cd4 |
| `s22` | Life | Prep for a Tough Conversation | #4d8cd4 |
| `s23` | Work | Summarize a Document | #e8913a |
| `s24` | Learning | Learn From My Mistakes | #4db88c |

## Summary Counts

| Category | Count |
|----------|-------|
| Industries | 39 |
| Total agents | 219 |
| Agents with fixedPrompt | 8 (SOP Generator, Content Repurposer, Subscription Negotiator, Homework Helper, Resume Screener, Listing Generator, Site Report Generator, Proposal & SOW Writer) |
| Starter prompts | 24 |
| Starter categories | 4 (Work, Writing, Learning, Life) |

## Reserved ID Prefixes

When creating new content, use these conventions:
- Agent IDs: descriptive snake_case (e.g., `resume_screen`, `bid_est`)
- Starter IDs: `s` + next sequential number (next available: `s25`)
- **Note:** With 39 industries, ID uniqueness checks are critical. Always grep the full list below.
- Industry names: title case, 1-3 words, ampersand OK (e.g., `Comms & Sales`)

## ID Uniqueness Check

Before adding any new agent, verify the ID doesn't exist in this complete list:

```
sop_gen, email_draft, cyber, code_review, data, meeting_prep, pm, security,
finance, market, support, content, devops, pres_builder, nego_strat,
med_scribe, prior_auth, rcm, triage, diagnostics, clinical_trial,
close_agent, treasury_liq, audit_comp, credit_risk, tax_agent,
sdr, repurpose, voice_ai, market_intel, pr_agent, proposal_gen, email_seq,
cust_success, micro_learn, grading, career_track, admissions, research_asst,
parent_comm, grant_writer, fin_advisor, sub_nego, tax_opt, micro_invest,
fraud_watch, budget_arch, debt_payoff, homework, meal_plan, development,
stories, coach, iep_advocate, inventory, pricing_strat, supply_chain,
returns_agent, vendor_nego, store_ops, contract_analyze, compliance_mon,
policy_writer, reg_nav, dispute_res, listing_gen, market_comp, lease_review,
lead_nurture, showing_sched, open_house, seo_content, campaign_opt,
ab_analyst, brand_voice, attrib_analyst, social_mgr, resume_screen,
interview_arch, onboard_agent, comp_analyst, perf_mgmt, bookkeeper,
invoice_agent, audit_prep, tax_prep, fin_reporter, payroll_spec,
claims_agent, underwrite, policy_comp, ins_compliance, client_intake,
renewal_spec, cost_est, proj_coord, rfi_drafter, site_report, spec_review,
change_mgmt, due_diligence, market_sizing, proposal_writer, strat_deck,
exec_brief, board_prep, decision_frame, exec_comms, okr_agent,
event_plan, guest_exp, menu_eng, rev_mgmt, staff_sched,
route_opt, warehouse_ops, carrier_nego, customs_comp, demand_plan,
ag_compliance, crop_plan, farm_finance, livestock_mgmt, precision_ag,
dealer_crm, parts_mgmt, service_advisor, vehicle_appr, warranty_agent,
aero_cert, flight_ops, ground_ops, mro_agent, safety_mgmt,
branch_ops, comm_lender, kyc_agent, loan_orig, portfolio_mgr,
bid_est, inspect_agent, material_calc, safety_comp, sched_opt,
incident_resp, pentest_plan, soc_analyst, threat_model, vuln_mgmt,
dental_treatment, ins_verify, optical_sales, patient_comms, practice_mgmt,
abandon_cart, listing_opt, pricing_intel, product_desc, review_mgmt,
energy_audit, field_service, grid_ops, renew_dev, util_reg,
class_sched, client_progress, nutrition_plan, program_design, wellness_coach,
client_onboard, freelance_pitch, portfolio_build, rate_calc, scope_guard,
lean_agent, maint_plan, proc_agent, prod_sched, quality_ctrl,
audience_dev, content_cal, copy_editor, editorial_agent, rights_mgmt,
constituent_svc, grant_writer, impact_report, policy_analyst, volunteer_coord,
clin_trial, drug_safety, med_affairs, pharma_qc, reg_submit,
lease_mgmt, maint_coord, prop_financials, tenant_comms, tenant_screen,
employer_brand, job_desc, offer_letter, recruit_pipe, source_agent,
churn_analyst, feature_prior, prd_writer, release_notes, user_research,
athlete_perf, fan_engage, game_plan, scout_analyst, sports_ops,
pet_comms, practice_growth, vet_billing, vet_records, vet_triage
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
