# Strategic Audit V2: Full Agent Library & Starter Prompts
**Date:** March 19, 2026
**Auditor:** The Forger
**Scope:** All 110 agents across 19 industries + 16 starter prompts
**Framework:** Revenue Optimization Framework from competitive-intel.md
**Previous audit:** V1 covered 77 agents. All V1 recommendations (renames, swaps, fixedPrompt upgrades, starter overhaul) have been implemented. This V2 audit covers the full 110-agent library including 5 newly staged industries.

## Scoring Key

Weighted 10-point scale per competitive-intel.md:
- **WTP (30%)** — Would this professional easily justify $12/month?
- **Frequency (25%)** — Weekly prompt generation, or one-time?
- **Pain (20%)** — How hard to write these prompts from scratch?
- **Market (15%)** — How many people hold this job title?
- **SEO (10%)** — Are people actively searching for AI help here?

---

## 1. KEEP AS-IS

### Tier 1 — Highest Revenue Potential (Score 8.5+)

| Industry | Agent | Score | Why |
|----------|-------|-------|-----|
| General | SOP Generator | 9.2 | Only fixedPrompt with interactive workflow. Universal need. |
| General | Email Draft Agent | 9.0 | Highest-volume writing task. Daily use. Massive market. |
| General | Data Analyst | 8.7 | Universal role. SQL/Python daily. |
| General | Code Reviewer | 8.5 | Every developer, every day. |
| Comms & Sales | Autonomous SDR | 9.0 | Every sales team. Highest-volume outreach task. |
| Comms & Sales | Content Repurposer | 8.8 | fixedPrompt. "One asset → 50+ posts" is killer value prop. |
| Comms & Sales | Proposal Generator | 8.8 | High-stakes deliverable. Hours saved per proposal. |
| Comms & Sales | Email Sequence Writer | 8.5 | Backbone of sales automation. |
| Healthcare | Medical Scribe | 9.0 | #1 time sink for clinicians. |
| Healthcare | Prior Auth Agent | 8.8 | Claim denials cost thousands. |
| Healthcare | RCM Specialist | 8.5 | Revenue cycle = revenue. |
| Personal Finance | Subscription Negotiator | 8.5 | fixedPrompt. Viral savings potential. |
| Personal Finance | Budget Architect | 8.5 | #1 personal finance task. |
| Parenting | Homework Helper | 8.5 | fixedPrompt. Nightly parent pain point. |
| Education | Grading & Feedback | 8.5 | Highest-volume teacher task. |
| HR & People Ops | Resume Screener | 8.5 | fixedPrompt. Structured scoring workflow. |
| Consulting & Strategy | Proposal & SOW Writer | 9.1 | Weekly deliverable. $200+/hr professionals. |
| Consulting & Strategy | Strategy Deck Builder | 8.9 | Weekly deliverable. High domain expertise needed. |
| Consulting & Strategy | Market Sizing Analyst | 8.8 | Core consulting deliverable. |
| Architecture & Eng | Site Report Generator | 8.6 | Daily field reports. Massive frequency. |
| Architecture & Eng | RFI/RFP Drafter | 8.5 | Dozens per project. Very high frequency. |
| Logistics & SC | Route Optimization Agent | 8.5 | Daily task. Small savings = thousands. |
| Logistics & SC | Customs & Trade Agent | 8.4 | Misclassification = fines. Very high pain. |

### Tier 2 — Strong Performers (Score 7.5–8.4)

All remaining agents not listed in other sections fall here. These are solid, well-positioned agents that serve their industries effectively. No changes needed.

**Count:** 72 agents across all 19 industries.

---

## 2. RENAME / REBRAND

All V1 renames have been implemented. Scanning the 25 new agents for naming issues:

| Industry | Current | Proposed | Rationale |
|----------|---------|----------|-----------|
| Consulting & Strategy | `due_diligence` — "CDD, VDD, risk flagging, deal memos" | Keep name, fix desc → **"Risk assessment, deal analysis, investment memos"** | "CDD, VDD" are M&A acronyms most users won't know. "Risk assessment" and "deal analysis" are accessible. |
| Hospitality & Events | `menu_eng` — Menu Engineering Agent / "Pricing strategy, food cost analysis, descriptions" | **Menu Design Agent** / "Pricing strategy, food cost analysis, descriptions" | "Menu Engineering" is industry jargon. "Menu Design" communicates the same thing more clearly to restaurant owners. |

**2 renames recommended.** Minimal — the staged agents were well-named.

---

## 3. SWAP

No swaps recommended. All V1 swaps have been implemented. The 5 new industries were designed with revenue scores and show no weak agents.

---

## 4. DELETE

No deletions recommended. Every agent at current count serves a distinct role without redundancy.

**Overlap watch list** (not actionable yet, but monitor):
- `proposal_gen` (Comms & Sales) vs `proposal_writer` (Consulting) — different audiences (sales vs consulting), different outputs. Distinct enough to keep both.
- `supply_chain` (Retail & Ops) vs Logistics & Supply Chain industry — Retail's agent focuses on bottleneck detection for retailers. Logistics industry covers fleet/warehouse/customs. Distinct enough.

---

## 5. UPGRADE TO FIXED PROMPT

V1 upgrades implemented: Content Repurposer, Homework Helper, Resume Screener, Subscription Negotiator. Current fixedPrompt count: 5.

### New fixedPrompt Candidates

| Agent | Industry | Score | Why |
|-------|----------|-------|-----|
| `proposal_writer` | Consulting & Strategy | 9.1 | SOW writing follows a very specific structure. An interactive workflow (project type → scope questions → deliverables → pricing → draft SOW) would dramatically outperform the generic template. Consultants would share this. |
| `site_report` | Architecture & Eng | 8.6 | Field reports follow a rigid format. A workflow (project info → inspection category → observations → photos/notes → generate report) would produce immediately usable output. |
| `listing_gen` | Real Estate | 8.0 | Listing descriptions follow patterns. A workflow (property details → features → neighborhood → target buyer → generate listing) would produce MLS-ready copy. Strong candidate for the standalone RE app. |

**Recommendation:** Upgrade `proposal_writer` first — highest revenue score, highest-WTP audience (consultants bill $200+/hr), and weekly frequency.

---

## 6. MISSING GAPS

### High-Value Agents Missing From Current Industries

| Industry | Proposed Agent | Score | Rationale |
|----------|---------------|-------|-----------|
| General | **Presentation Builder** — "Slide outlines, speaker notes, deck structure" | 8.5 | Every professional builds presentations. Complements Strategy Deck Builder but targets non-consultants. |
| Comms & Sales | **Customer Success Agent** — "Onboarding playbooks, churn prevention, QBR prep" | 8.3 | CS is a growing profession. QBR prep and churn playbooks are weekly tasks. |
| Healthcare | **Clinical Trial Coordinator** — "Protocol summaries, consent forms, site reports" | 8.0 | Niche but very high WTP. Pharma/biotech pays for everything. |
| Real Estate | **Open House Agent** — "Marketing flyers, follow-up scripts, social posts" | 8.2 | Open houses are weekly for active agents. Multiple deliverables per event. |
| Marketing & Growth | **Social Media Manager** — "Content calendars, platform strategy, analytics reports" | 8.5 | Every marketing team. High frequency. Daily social management. |
| Accounting & Tax | **Payroll Specialist** — "Payroll compliance, deduction calculations, reporting" | 8.0 | Every business with employees. Monthly/biweekly frequency. |
| Insurance | **Renewal Specialist** — "Renewal analysis, retention scripts, coverage updates" | 8.0 | Renewals are the #1 revenue retention task. Annual but high-stakes. |

**7 gap-fill agents identified. Adding these would bring total to 117.**

---

## Starter Prompt Audit

### Current State (16 starters)
All V1 replacements implemented. Current mix is heavily Work-weighted (8 Work, 2 Writing, 1 Learning, 2 Life, 3 recategorized to Work).

### Category Balance Issue
The current category split is:
- **Work:** 8 starters (s1, s2, s3, s4, s8, s9, s10, s12, s16) — oversaturated
- **Writing:** 3 starters (s5, s6, s7) — adequate
- **Learning:** 1 starter (s11) — underserved
- **Life:** 3 starters (s13, s14, s15) — adequate

**Recommendation:** Add 8 new starters (s17–s24) to reach 24 total, focusing on underserved categories and professional buyer conversion:

| ID | Category | Title | Desc | Target |
|----|----------|-------|------|--------|
| `s17` | Work | Write a Status Report | Turn project updates into a structured report | Managers |
| `s18` | Work | Create Interview Questions | Role-specific questions from a job description | HR/Hiring |
| `s19` | Writing | Rewrite for Tone | Adjust any text to a different tone | Universal |
| `s20` | Learning | Explain This Code | Plain-English explanation of any code snippet | Developers |
| `s21` | Life | Write a Thank You Note | Professional or personal gratitude in 60 seconds | Universal |
| `s22` | Life | Prep for a Tough Conversation | Get talking points for any difficult discussion | Managers/Parents |
| `s23` | Work | Summarize a Document | Extract key points from any long document | Universal |
| `s24` | Learning | Learn From My Mistakes | Analyze what went wrong and how to improve | Professionals |

---

## Industry Health Scorecard

| Industry | Agents | Avg Score | fixedPrompts | Health | Notes |
|----------|--------|-----------|-------------|--------|-------|
| General | 13 | 8.3 | 1 | Strong | Showcase industry. Well-rounded. |
| Healthcare | 5 | 8.3 | 0 | Strong | High WTP. Consider adding 1-2. |
| Finance | 5 | 8.2 | 0 | Strong | Enterprise audience. Solid. |
| Comms & Sales | 7 | 8.4 | 1 | Strong | Top revenue industry. Room for 2 more. |
| Education | 7 | 7.8 | 0 | Moderate | Lower WTP. Focus on teacher/admin roles. |
| Personal Finance | 7 | 8.0 | 1 | Strong | Viral potential agents. |
| Parenting | 6 | 7.6 | 1 | Moderate | Lowest WTP industry. IEP Advocate is the standout. |
| Retail & Ops | 6 | 7.9 | 0 | Solid | Well-refreshed after V1 swaps. |
| Legal & Compliance | 5 | 8.1 | 0 | Strong | High WTP SMB audience. |
| Real Estate | 5 | 8.0 | 0 | Strong | Standalone app candidate. |
| Marketing & Growth | 5 | 8.2 | 0 | Strong | Marketers pay for tools. |
| HR & People Ops | 5 | 8.3 | 1 | Strong | Resume Screener fixedPrompt is a differentiator. |
| Accounting & Tax | 5 | 8.0 | 0 | Solid | Bookkeepers/accountants pay without blinking. |
| Insurance | 5 | 7.9 | 0 | Solid | Agent-focused. Clear roles. |
| Architecture & Eng | 5 | 8.3 | 0 | Strong | Very high WTP. $150-400/hr professionals. |
| Consulting & Strategy | 5 | 8.6 | 0 | Strongest | Highest avg score. Upgrade proposal_writer to fixedPrompt. |
| Executive & Leadership | 5 | 8.0 | 0 | Strong | Execs don't think twice about $12/mo. |
| Hospitality & Events | 5 | 7.9 | 0 | Solid | High frequency, moderate WTP. |
| Logistics & Supply Chain | 5 | 8.2 | 0 | Strong | Underserved market. Zero AI prompt competition. |

---

## Priority Execution Order

| Priority | Action | Effort | Impact |
|----------|--------|--------|--------|
| 1 | Rename 2 agents (due_diligence desc, menu_eng name) | 10 min | Low risk, immediate clarity |
| 2 | Upgrade `proposal_writer` to fixedPrompt | 30 min | Highest-revenue industry gets flagship workflow |
| 3 | Add 8 new starter prompts (s17–s24) | 30 min | Better free tier → more Pro conversions |
| 4 | Add 7 gap-fill agents | 45 min | Push toward 117 agents |
| 5 | Upgrade `site_report` to fixedPrompt | 30 min | AEC professionals are high-WTP |
| 6 | Upgrade `listing_gen` to fixedPrompt | 30 min | Foundation for standalone RE app |

---

## Milestone Tracking

| Milestone | Status |
|-----------|--------|
| 100 agents / 14 industries | ACHIEVED (110 / 19) |
| 250 agents / 20+ industries | Next target. Need 140 more agents + 1 industry. |
| $1,000 MRR (~84 subscribers) | Unknown — need analytics. |

---

*This audit supersedes V1. Next audit should be triggered at 150+ agents or when significant new content is staged.*
