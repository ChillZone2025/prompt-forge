# Strategic Audit: Agent Library & Starter Prompts
**Date:** March 19, 2026
**Scope:** All 77 agents across 14 industries + 16 starter prompts
**Framework:** Revenue Optimization Framework from competitive-intel.md

## Scoring Key

Each agent scored on a weighted 10-point scale:
- **WTP (30%)** — Would this professional easily justify $12/month?
- **Frequency (25%)** — Would they generate prompts weekly, or just once?
- **Pain (20%)** — How hard is it to write this prompt from scratch?
- **Market (15%)** — How many people hold this job title?
- **SEO (10%)** — Are people searching for AI help here?

Scores: 1-3 = Weak | 4-6 = Moderate | 7-9 = Strong | 10 = Exceptional

---

## 1. KEEP AS-IS

These agents are strong revenue drivers. Well-named, well-positioned, and high-value.

### General
| Agent | Score | Why It Works |
|-------|-------|-------------|
| SOP Generator | 9.2 | Only fixedPrompt agent. Unique interactive workflow. Universal need. High pain — writing SOPs from scratch is brutal. |
| Code Reviewer | 8.5 | Every developer, every day. High frequency, high pain. "Code review" is a high-volume search term. |
| Data Analyst | 8.7 | Universal role. SQL/Python insight generation is a daily task. Massive market. |
| Project Manager | 8.3 | Every org has PMs. Agile, risk, stakeholder comms are daily pain points. High frequency. |
| Market Researcher | 8.0 | Competitive intel is a constant need. Clear value prop. Good SEO potential. |
| Customer Support | 8.4 | Every business with customers. De-escalation scripts are high-pain. Very high frequency. |
| Content Strategist | 7.8 | SEO and editorial calendar are real daily tasks. Slight overlap with Marketing & Growth but earns its General slot as a showcase. |
| DevOps Engineer | 7.5 | CI/CD and incident response are daily. Strong WTP from engineering teams. Niche but loyal audience. |

### Healthcare (All 5 — KEEP)
| Agent | Score | Why It Works |
|-------|-------|-------------|
| Medical Scribe | 9.0 | Clinical notes are the #1 time sink. EMR integration language is highly specific. Massive pain point. |
| Prior Auth Agent | 8.8 | Claim denials cost practices thousands. Payer workflow language is hard to write. |
| RCM Specialist | 8.5 | Billing and coding are daily, high-stakes tasks. Revenue cycle = revenue. |
| Patient Triage Agent | 7.8 | Care routing is a real workflow. Slightly lower due to liability sensitivity. |
| Diagnostics Assistant | 7.5 | Niche but high-value. Radiology flagging is genuinely useful for prompt-based triage support. |

### Finance (All 5 — KEEP)
| Agent | Score | Why It Works |
|-------|-------|-------------|
| Autonomous Close Agent | 8.5 | Financial close is a monthly nightmare. Multi-entity consolidation is high-pain. |
| Treasury & Liquidity | 8.0 | Cash forecasting is daily. Working capital management is critical. |
| Audit & Compliance | 8.3 | Fraud monitoring and regulatory drift are constant. High stakes. |
| Credit Risk Underwriter | 8.2 | Automated scoring is a real workflow. Loan analysis is daily in lending. |
| Tax Strategy Agent | 8.0 | Tax tracking is ongoing. Automated filing checklists save hours. |

### Comms & Sales
| Agent | Score | Why It Works |
|-------|-------|-------------|
| Autonomous SDR | 9.0 | Prospecting and outreach are the highest-volume sales tasks. Every sales team wants this. |
| Content Repurposer | 8.8 | "One asset → 50+ posts" is a killer value prop. High frequency. See UPGRADE section — this could be even better. |
| Market Intelligence | 8.2 | Competitor pricing and strategic alerts are ongoing needs. |
| PR & Media Agent | 7.6 | Journalist targeting and pitch drafting are real tasks. Smaller market but high WTP. |

### Education
| Agent | Score | Why It Works |
|-------|-------|-------------|
| Grading & Feedback | 8.5 | Essays and coding critiques are the highest-volume teacher task. Massive pain. |
| Research Assistant | 8.0 | Academic paper synthesis is daily for researchers. Doctoral support is high-pain. |
| Admissions Agent | 7.8 | Enrollment pipeline is a real role. Higher ed institutions pay for tools. |

### Personal Finance
| Agent | Score | Why It Works |
|-------|-------|-------------|
| Financial Advisor | 8.3 | Full-context financial guidance. Universal need. |
| Subscription Negotiator | 8.5 | Viral potential. Everyone hates overpaying for subscriptions. High emotional appeal. |
| Tax Optimizer | 8.0 | Year-round deduction scanning. Saves real money. |

### Parenting
| Agent | Score | Why It Works |
|-------|-------|-------------|
| Homework Helper | 8.5 | Every parent's nightly battle. High frequency during school year. Huge market. |
| Bedtime Story Agent | 8.0 | Delightful and viral. Custom stories are genuinely magical. Parents share this. |
| Parent Coach | 7.5 | Behavior strategies and emotional regulation are real pain points. |

### All New Industries (Legal, Real Estate, Marketing, HR, Accounting, Insurance)
**All 30 agents — KEEP AS-IS.** These were designed today using the Revenue Optimization Framework. No changes needed.

---

## 2. RENAME / REBRAND

These agents have the right idea but weak names or descriptions that don't communicate enough value.

| Industry | Current | Proposed | Rationale |
|----------|---------|----------|-----------|
| General | `cyber` — Cyber Investigator / "Threat hunting, forensics, OSINT" | **Cybersecurity Advisor** / "Threat assessment, security policies, incident response" | "Investigator" implies law enforcement. "Advisor" is accessible to SMBs. "OSINT" means nothing to most users. Broader desc captures more use cases. |
| General | `security` — Security Auditor / "Pen testing, vulnerability assessment" | **Security Assessor** / "Risk analysis, vulnerability scans, security policies" | "Pen testing" is a specialist skill. "Risk analysis" and "security policies" are tasks any IT manager does. Broader appeal without losing credibility. |
| General | `finance` — Financial Modeler / "DCF, LBO, valuation, scenarios" | **Financial Modeler** / "Valuation, forecasting, scenario analysis, projections" | Keep the name. Fix the desc — "DCF, LBO" are jargon that only finance professionals know. "Forecasting" and "projections" are universal. |
| Comms & Sales | `voice_ai` — Voice AI Agent / "24/7 call center, appointment booking" | **Call Center Agent** / "Call scripts, objection handling, appointment booking" | "Voice AI Agent" is vague — what prompt would you generate? "Call Center Agent" maps to a real role. Scripts and objection handling are tangible outputs. |
| Education | `micro_learn` — Micro-Learning Agent / "Custom curricula, progress-based" | **Curriculum Designer** / "Lesson plans, learning paths, assessment design" | "Micro-Learning" is ed-tech jargon. "Curriculum Designer" is a real job title people search for. Better desc with actionable outputs. |
| Education | `career_track` — Career Growth Tracker / "Skills vs job market, certification paths" | **Career Coach Agent** / "Skills gap analysis, certification paths, job market intel" | "Tracker" implies a tool, not an agent. "Coach" implies guidance. Better desc. |
| Personal Finance | `micro_invest` — Micro-Investing Agent / "Goal-based portfolio rebalancing" | **Investment Advisor** / "Portfolio strategy, goal-based planning, risk allocation" | "Micro-Investing" sounds small and limiting. "Investment Advisor" is the role people want. |
| Personal Finance | `fraud_watch` — Fraud Watchdog / "Credit monitoring, identity protection" | **Identity Shield Agent** / "Fraud detection, credit alerts, identity protection" | "Watchdog" is cute but not professional. "Identity Shield" communicates protection. "Fraud detection" is more active than "credit monitoring." |

---

## 3. SWAP

These agents should be replaced with higher-value alternatives in the same industry.

### General: `treasury` (FX Treasury Analyst) → **Email Draft Agent**

**Why swap:** FX hedging and currency derivatives are Fortune 500 treasury tasks. An SMB owner browsing General will never click this. It scores 4.2 — low frequency, tiny market for the Prompt Forge audience, zero SEO value for our buyer persona.

**Replacement:**
```
id: "email_draft"
icon: "✉"
name: "Email Draft Agent"
desc: "Professional emails, cold outreach, follow-ups"
color: "#e8913a"
```
**Score: 9.0** — Everyone writes emails daily. High frequency, massive market, high pain (people agonize over wording). Top SEO potential for "AI email writer."

### Retail & Ops: `commerce` (Agentic Commerce) → **Pricing Strategist**

**Why swap:** "Instant checkout, autonomous buying" doesn't translate to a useful system prompt. What would someone actually paste this into? It scores 3.8 — vague concept, no clear workflow, no real professional role behind it.

**Replacement:**
```
id: "pricing_strat"
icon: "💲"
name: "Pricing Strategist"
desc: "Competitive pricing, margin analysis, discount modeling"
color: "#e8913a"
```
**Score: 8.3** — Every retailer agonizes over pricing. Daily task, high pain, clear output.

### Retail & Ops: `prop_val` (Property Valuator) → **Returns & Refund Agent**

**Why swap:** Property valuation now belongs in the Real Estate industry. Having it in Retail & Ops is confusing and redundant. Scores 5.0 in this industry due to audience mismatch.

**Replacement:**
```
id: "returns_agent"
icon: "🔄"
name: "Returns & Refund Agent"
desc: "Return policies, customer resolution, loss prevention"
color: "#4db88c"
```
**Score: 8.0** — Returns are a daily headache for every retailer. Policy writing and customer resolution are high-pain.

### Retail & Ops: `contract_rev` (Contract Reviewer) → **Vendor Negotiator**

**Why swap:** Contract review now lives in Legal & Compliance (contract_analyze). Redundant. Scores 5.5 due to overlap.

**Replacement:**
```
id: "vendor_nego"
icon: "🤝"
name: "Vendor Negotiator"
desc: "Supplier terms, bulk pricing, contract leverage"
color: "#9b7fd4"
```
**Score: 8.2** — Every retail/ops manager negotiates with vendors. High pain, high frequency, clear output.

### Parenting: `scheduler` (Family Scheduler) → **Meal Planner**

**Why swap:** Calendar management is a solved problem (Google Calendar, Cozi, etc.). "Activity coordination" as a system prompt has low pain of alternatives. Scores 4.5.

**Replacement:**
```
id: "meal_plan"
icon: "🍽"
name: "Family Meal Planner"
desc: "Weekly menus, grocery lists, dietary needs"
color: "#34d399"
```
**Score: 8.2** — Meal planning is a universal parent pain point. Weekly frequency. Dietary restrictions make it high-pain. "AI meal planner" has strong search volume.

---

## 4. DELETE

These agents should be removed entirely — their slot is better used elsewhere.

### General: `legal` (Legal Researcher)

**Why delete:** We now have an entire Legal & Compliance industry with 5 dedicated agents (Contract Analyzer, Compliance Monitor, Policy Writer, Regulatory Navigator, Dispute Resolution Agent). A generic "Legal Researcher" in General is redundant and weaker than any of the specialized Legal agents. Case law research targets attorneys, not our SMB audience.

**Score: 4.8** — Low frequency for non-lawyers, low market size in our audience, fully redundant with Legal & Compliance industry.

**Recommendation:** Replace this slot with **Meeting Prep Agent** — "Agenda drafting, talking points, follow-up summaries" (score: 8.5). Everyone has meetings. No one prepares well enough.

---

## 5. UPGRADE TO FIXED PROMPT

These agents would be dramatically better with a hand-crafted `fixedPrompt` that includes a multi-step workflow, like the SOP Generator.

### Content Repurposer (`repurpose`)

**Why:** The current API-generated prompt gives generic content repurposing advice. A fixedPrompt could define a specific workflow:
1. User pastes one piece of content (blog post, video transcript, podcast notes)
2. Agent asks clarifying questions: target platforms, tone, audience
3. Agent generates a structured repurposing plan with platform-specific variations

**Impact:** Transforms from "here's how to repurpose content" to "paste your content and I'll generate 10 platform-specific variations right now." Much higher perceived value.

### Homework Helper (`homework`)

**Why:** The API template generates a generic tutoring prompt. A fixedPrompt could create an interactive learning flow:
1. Student identifies subject and grade level
2. Agent asks for the specific problem or concept
3. Agent works through it step-by-step, checking understanding at each stage
4. Agent provides practice problems at the end

**Impact:** Turns a generic tutor into a structured learning session. Parents would share this with other parents — viral potential.

### Resume Screener (`resume_screen`)

**Why:** Resume screening follows a very specific workflow that benefits from structure:
1. User provides job description and key requirements
2. Agent asks for must-have vs. nice-to-have qualifications
3. User pastes resume(s)
4. Agent scores against criteria with specific pass/fail reasoning

**Impact:** Structured evaluation with clear scoring beats a generic "screen this resume" prompt. HR managers need consistency.

### Subscription Negotiator (`sub_nego`)

**Why:** This agent has viral potential but needs a specific workflow to deliver:
1. User lists their current subscriptions and monthly costs
2. Agent identifies savings opportunities (duplicates, unused, overpriced)
3. Agent drafts cancellation scripts and negotiation talking points for each
4. Agent provides a "savings summary" with projected annual savings

**Impact:** The before/after savings summary is shareable content. "This AI saved me $247/month" drives word-of-mouth.

---

## 6. MISSING GAPS

High-value agents that should exist in current industries but don't. These are the strongest candidates for reaching the 100-agent milestone.

### General (currently 13 — room for more showcase agents)

| Proposed Agent | Score | Rationale |
|----------------|-------|-----------|
| **Meeting Prep Agent** — "Agenda drafting, talking points, follow-up summaries" | 8.5 | Fills the `legal` delete slot. Everyone has meetings. Universal high-frequency use. |
| **Email Draft Agent** — "Professional emails, cold outreach, follow-ups" | 9.0 | Fills the `treasury` swap slot. Highest-volume writing task in business. |

### Comms & Sales (currently 5 — room for 7 more)

| Proposed Agent | Score | Rationale |
|----------------|-------|-----------|
| **Proposal Generator** — "Client proposals, scope docs, pricing sections" | 8.8 | Proposals are high-stakes, high-pain. Every sales team writes them. Hours saved per proposal. |
| **Email Sequence Writer** — "Drip campaigns, nurture flows, follow-up cadences" | 8.5 | Email sequences are the backbone of sales automation. High frequency, high pain. |

### Education (currently 5 — room for 7 more)

| Proposed Agent | Score | Rationale |
|----------------|-------|-----------|
| **Parent Communicator** — "Progress reports, behavior updates, conference prep" | 8.0 | Teachers spend hours on parent communication. High frequency, high pain. |
| **Grant Writer** — "Education grants, funding applications, budget narratives" | 8.3 | Grant writing is extremely high-pain. Education institutions constantly seek funding. |

### Personal Finance (currently 5 — room for 7 more)

| Proposed Agent | Score | Rationale |
|----------------|-------|-----------|
| **Budget Architect** — "Monthly budgets, expense tracking, savings goals" | 8.5 | Budgeting is the #1 personal finance task. Universal need, high frequency. |
| **Debt Payoff Strategist** — "Payoff plans, refinance analysis, snowball vs avalanche" | 8.2 | Debt is emotional and complex. High pain, high WTP for anyone carrying debt. |

### Parenting (currently 5 — weakest WTP industry, but gaps exist)

| Proposed Agent | Score | Rationale |
|----------------|-------|-----------|
| **Family Meal Planner** — "Weekly menus, grocery lists, dietary needs" | 8.2 | Fills the `scheduler` swap slot. Weekly pain point for every parent. |
| **IEP Advocate** — "Special education plans, accommodation requests, meeting prep" | 8.5 | Extremely high-pain niche. Parents of children with disabilities will pay anything for help navigating IEP processes. Strong emotional driver. |

### Retail & Ops (currently 5 — 3 swaps proposed above)

Swap replacements (Pricing Strategist, Returns & Refund Agent, Vendor Negotiator) fill the gaps created by removing redundant agents.

---

## Summary: Impact of Proposed Changes

| Action | Count | Net Agent Change |
|--------|-------|-----------------|
| KEEP AS-IS | 60 agents | — |
| RENAME/REBRAND | 8 agents | 0 (same agents, better positioning) |
| SWAP | 5 agents | 0 (5 out, 5 in) |
| DELETE + REPLACE | 1 agent | 0 (1 out, 1 in) |
| UPGRADE TO FIXED PROMPT | 4 agents | 0 (same agents, better prompts) |
| MISSING GAPS (new) | 8 agents | +8 |

**Current total: 77 agents / 14 industries**
**Post-audit total: 85 agents / 14 industries**
**Remaining to 100-agent milestone: 15 agents**

---

## Starter Prompt Audit

### KEEP AS-IS (Strong top-of-funnel drivers)
| ID | Title | Score | Why |
|----|-------|-------|-----|
| s1 | Summarize This Email | 9.5 | Universal, daily use. Perfect gateway to Pro. |
| s2 | Write a Performance Review | 9.0 | High pain, high stakes. Managers dread this. |
| s3 | Notes → Action Items | 9.0 | Daily use after every meeting. |
| s4 | Reply to Difficult Email | 9.2 | Emotional relief. People share this with coworkers. |
| s6 | Improve My Writing | 8.5 | Universal. Quick win that demonstrates value. |
| s7 | Write a LinkedIn Post | 8.8 | Professionals use weekly. LinkedIn audience = Pro buyers. |
| s11 | Summarize an Article | 8.0 | Useful for professionals consuming industry content. |
| s14 | Plan My Week | 8.5 | Weekly repeat use. Builds habit. |

### REBRAND (Good idea, weak framing)
| ID | Current | Proposed | Why |
|----|---------|----------|-----|
| s5 | "Explain Like I'm 5" / "Make any complex topic simple and clear" | **"Break Down Any Concept"** / "Get a clear, jargon-free explanation of anything" | "Explain Like I'm 5" is a meme that undersells the tool. Professionals won't click it. "Break Down Any Concept" is professional and actionable. |
| s15 | "Write My Bio" / "Generate a professional bio from bullet points" | **"Generate My Professional Bio"** / "LinkedIn, speaker, or company bio in 30 seconds" | Adding platform context (LinkedIn, speaker) makes it more specific and searchable. |

### WEAK — Consider Replacing
| ID | Title | Score | Issue | Suggested Replacement |
|----|-------|-------|-------|----------------------|
| s8 | Proofread & Fix Grammar | 5.5 | Grammarly exists. Free. Better at this. Low conversion driver. | **"Write a Cold Email"** — "Get a personalized outreach email from a few bullet points." Score: 9.0. Daily sales task. |
| s9 | Teach Me Anything | 5.0 | Too vague. One-time use. Low conversion. | **"Prep for a Meeting"** — "Get talking points and questions for any upcoming meeting." Score: 8.5. Weekly use. |
| s10 | Make a Study Plan | 5.5 | One-time use. Students ≠ Pro buyers. | **"Write a Project Brief"** — "Turn a rough idea into a clear project brief with scope and deliverables." Score: 8.8. |
| s12 | Quiz Me on This Topic | 4.5 | Fun but zero conversion. Students don't buy Pro. | **"Draft a Slack Update"** — "Turn bullet points into a polished team update." Score: 8.5. Daily use. |
| s13 | Help Me Make a Decision | 6.0 | Interesting but infrequent. Low repeat use. | **"Negotiate My Salary"** — "Get a script and strategy for your next salary conversation." Score: 9.0. High emotional stakes. |
| s16 | Give Me Honest Feedback | 5.5 | Vague. No clear output. | **"Write a Client Proposal Intro"** — "Turn your service details into a compelling proposal opening." Score: 8.5. |

### MISSING Starter Categories
Current categories (Work, Writing, Learning, Life) miss the professional buyer. Proposed additions:

| New Category | Color | Why |
|-------------|-------|-----|
| **Sales** | #e8913a | Direct pipeline to Pro. Sales professionals have highest WTP. |
| **Management** | #c46896 | Managers are decision-makers who approve $12/mo without blinking. |

---

## Priority Execution Order

If implementing these changes, this is the order that maximizes revenue impact per hour of effort:

1. **RENAME/REBRAND** (30 min) — Zero risk, immediate improvement. Just change strings.
2. **SWAP redundant agents** (45 min) — Remove overlap, strengthen weak industries.
3. **Replace weak starter prompts** (30 min) — Better top-of-funnel = more Pro conversions.
4. **UPGRADE to fixedPrompt** (2-3 hours) — Content Repurposer and Subscription Negotiator first. Highest impact.
5. **ADD missing gap agents** (1-2 hours) — Push toward 100-agent milestone.

---

*This audit should be re-run quarterly as the market evolves and usage data becomes available.*
