# Quality Audit: Prompt Forge v2 Engine

**Date:** 2026-03-20
**Auditor:** Prompt Agent
**Methodology:** 30 agents tested via live API (stratified sample across industries), plus 5 userContext tests and 3 differentiation tests = 38 total API calls
**Verdict:** **PASS** (8.59 average, above 7.0 threshold) — with one critical fix needed

---

## Executive Summary

The v2 prompt engine produces genuinely excellent, deployment-ready system prompts. Domain accuracy is outstanding — every tested agent referenced real tools, frameworks, and methodologies that professionals in each field would recognize. The userContext personalization feature is a standout differentiator (9.4/10 avg).

**However, there is one critical defect: `max_tokens: 1024` is too low.** 29 of 30 tested agents were truncated, consistently losing the Constraints & Safety section and First Message. Users are receiving incomplete prompts on the live site right now.

---

## Overall Scores (30 Agents)

| Criteria | Average Score |
|----------|--------------|
| Specificity | 9.1 |
| Deployability | 9.0 |
| Domain Accuracy | 8.9 |
| Structure | 7.8 |
| First Message | 7.5 |
| **Overall Average** | **8.59** |

**PASS/FAIL: PASS** (minimum 7.0 required)

---

## Full Agent Scoring Table

| # | Agent | Industry | SPEC | DEPLOY | DOMAIN | STRUCT | FIRST | AVG | TRUNCATED |
|---|-------|----------|------|--------|--------|--------|-------|-----|-----------|
| 1 | Data Analyst | General | 9 | 9 | 9 | 8 | 7 | 8.4 | YES |
| 2 | Credit Risk Underwriter | Finance | 10 | 9 | 10 | 8 | 8 | 9.0 | YES |
| 3 | Medical Scribe | Healthcare | 10 | 9 | 10 | 8 | 8 | 9.0 | YES |
| 4 | Negotiation Strategist | General | 10 | 9 | 10 | 8 | 8 | 9.0 | YES |
| 5 | Autonomous SDR | Comms & Sales | 9 | 9 | 9 | 8 | 8 | 8.6 | YES |
| 6 | Research Assistant | Education | 9 | 9 | 9 | 8 | 8 | 8.6 | YES |
| 7 | Tax Optimizer | Personal Finance | 10 | 9 | 10 | 8 | 8 | 9.0 | YES |
| 8 | Inventory Optimizer | Retail & Ops | 9 | 9 | 9 | 8 | 7 | 8.4 | YES |
| 9 | Spec Review Agent | Architecture & Eng | 9 | 9 | 5 | 8 | 8 | 7.8 | YES |
| 10 | Threat Modeling Agent | Cybersecurity | 10 | 9 | 10 | 8 | 8 | 9.0 | YES |
| 11 | Strategy Deck Builder | Consulting | 9 | 9 | 9 | 7 | 8 | 8.4 | YES |
| 12 | Executive Briefing Agent | Executive | 9 | 9 | 9 | 8 | 8 | 8.6 | YES |
| 13 | Revenue Management Agent | Hospitality | 10 | 9 | 10 | 8 | 8 | 9.0 | YES |
| 14 | Customs & Trade Agent | Logistics | 10 | 9 | 10 | 8 | 9 | 9.2 | YES |
| 15 | Clinical Trial Agent | Pharma & Biotech | 10 | 9 | 10 | 7 | 9 | 9.0 | YES |
| 16 | KYC/AML Agent | Banking & Lending | 10 | 9 | 10 | 8 | 8 | 9.0 | YES |
| 17 | Quality Control Agent | Manufacturing | 10 | 9 | 10 | 7 | 8 | 8.8 | YES |
| 18 | Listing Optimizer | E-commerce & DTC | 9 | 9 | 9 | 8 | 8 | 8.6 | NO |
| 19 | Bid Estimator | Construction | 10 | 9 | 10 | 8 | 8 | 9.0 | YES |
| 20 | Service Advisor Agent | Automotive | 10 | 9 | 10 | 8 | 8 | 9.0 | YES |
| 21 | Veterinary Records Agent | Veterinary | 9 | 9 | 9 | 8 | 7 | 8.4 | YES |
| 22 | Program Design Agent | Fitness & Wellness | 9 | 9 | 9 | 8 | 8 | 8.6 | YES |
| 23 | Parent Coach | Parenting | 9 | 9 | 9 | 7 | 7 | 8.2 | YES |
| 24 | Freelance Pitch Writer | Freelancers | 8 | 9 | 8 | 8 | 6 | 7.8 | YES |
| 25 | PRD Writer | SaaS & Product | 8 | 9 | 9 | 8 | 7 | 8.2 | YES |
| 26 | Grant Writer Agent | Nonprofit & Gov | 9 | 9 | 10 | 8 | 7 | 8.6 | YES |
| 27 | OpenClaw Deployment Agent | AI Agent Dev | 8 | 8 | 7 | 8 | 7 | 7.6 | YES |
| 28 | SOUL.md Writer | AI Agent Dev | 8 | 8 | 8 | 7 | 7 | 7.6 | YES |
| 29 | Crop Planning Agent | Agriculture | 9 | 9 | 9 | 7 | 7 | 8.2 | YES |
| 30 | Email Draft Agent | General | 8 | 9 | 8 | 8 | 7 | 8.0 | YES |

---

## CRITICAL ISSUE: Truncation (max_tokens: 1024)

**29 out of 30 agents were truncated.** The v2 8-section format consistently needs 1200-1600 tokens to complete. With max_tokens at 1024, the model is forced to cut off mid-sentence.

**What users lose:**
- Constraints & Safety section (the guardrails) — missing or incomplete in 25 of 30 tests
- First Message section — missing or incomplete in 18 of 30 tests
- These are the last two sections, so they're always the first to be cut

**Fix:** Increase `max_tokens` in `/api/generate/route.js` from 1024 to at least 2048. This is the single highest-impact improvement available. Estimated cost increase: ~$0.001-0.002 per generation (negligible).

---

## Agents Scoring Below 6 on Any Criteria

| Agent | Criteria | Score | Issue |
|-------|----------|-------|-------|
| Spec Review Agent | Domain Accuracy | 5 | **Wrong domain.** Generated a SOFTWARE specification review agent (IEEE 830, DOORS, NIST CSF) when it should have been a BUILDING CODE review agent (IBC, ADA, ASHRAE). The desc "Code compliance, specification gap analysis" is ambiguous — "code" means building codes in Architecture & Engineering, but the API doesn't receive industry context, only name + desc. |

**Root cause:** The `buildPrompt()` template passes only `agentName` and `agentDesc` to the model. It does NOT pass the industry name. For agents with ambiguous descriptions, the model can't determine the correct domain.

**Fix:** Add the industry name as context in the buildPrompt template:
```
Agent role: ${name}
Agent specialty: ${desc}
Industry context: ${industry}
```
This would resolve the Spec Review Agent issue and improve accuracy for any agent where the desc alone is ambiguous.

---

## Agents Needing Attention (Below 8.0 Average)

| Agent | Avg | Primary Issue |
|-------|-----|---------------|
| OpenClaw Deployment Agent | 7.6 | Domain accuracy — OpenClaw is new enough that the model treats infrastructure tooling (Kong, Terraform, Kubernetes) as the core domain rather than OpenClaw's specific file-based architecture (SOUL.md, AGENTS.md, skills/). The generated prompt is a good DevOps prompt but not specifically an OpenClaw prompt. |
| SOUL.md Writer | 7.6 | Similar issue — the model generates a generic "AI personality designer" prompt rather than one specifically tailored to OpenClaw's SOUL.md format and injection system. References Constitutional AI and Big Five which are relevant but misses OpenClaw-specific concepts. |
| Freelance Pitch Writer | 7.8 | First Message is weak (score 6) — truncated to one incomplete sentence. Some domain knowledge feels like keyword stuffing rather than practitioner knowledge. |
| Spec Review Agent | 7.8 | Domain accuracy failure (see above). Wrong professional domain entirely. |

---

## userContext Personalization Test (5 Agents)

| Agent | Without Context | With Context | Personalization Score |
|-------|----------------|--------------|---------------------|
| Data Analyst | Generic enterprise analyst | Churn-focused SaaS analyst using Snowflake/dbt | 9/10 |
| Negotiation Strategist | Generic negotiation consultant | Commercial real estate lease specialist for restaurants | 10/10 |
| Medical Scribe | Multi-EMR generic scribe | Epic-specific dermatology documentation specialist | 9/10 |
| Bid Estimator | Generic construction estimator | Texas residential roofing insurance claims specialist | 10/10 |
| OpenClaw Deployment Agent | Generic DevOps deployer | Shopify + WhatsApp customer support agent builder | 9/10 |
| **Average** | | | **9.4/10** |

**Verdict:** userContext is a killer feature. The API doesn't just append context — it fundamentally restructures every section of the prompt (identity, capabilities, domain knowledge, protocols, constraints). The Negotiation Strategist transformed from generic M&A advice into a commercial lease negotiation specialist with NNN lease structures, CAM reconciliation, and CoStar data references. The Bid Estimator became a Texas roofing insurance claims specialist referencing Xactimate, EagleView, and local tax rates. This level of personalization is a genuine competitive moat.

---

## Differentiation Test (3 Agents, Generated Twice Each)

| Agent | Differentiation Score | Notes |
|-------|----------------------|-------|
| Autonomous SDR | 3/10 | Different agent names (ProspectAI vs Alex), but same capabilities, tools, and structure |
| Tax Optimizer | 4/10 | Different agent names, minor capability variations, substantially similar |
| Threat Modeling Agent | 2/10 | Same agent name both times, nearly identical output |
| **Average** | **3.0/10** | |

**Verdict:** Outputs are largely deterministic for same inputs. This is expected behavior from Sonnet at default temperature and is arguably a feature (reliability/consistency). If "generate multiple options" becomes a product goal, adding a `temperature` parameter or variation seed would help. Not a defect — just a characteristic to be aware of.

---

## Top Performers (Agents That Nailed It)

| Agent | Avg | Why It's Great |
|-------|-----|----------------|
| Customs & Trade Agent | 9.2 | References GRI 1-6, CROSS database, 19 CFR Parts 141-181, ISF 10+2, USMCA, Section 301/232. Reads like it was written by a licensed customs broker. |
| Credit Risk Underwriter | 9.0 | FICO models, Regulation B, FCRA Section 615, Fannie Mae DU, D&B reports — a real underwriter would trust this immediately. |
| Medical Scribe | 9.0 | Joint Commission, CMS E&M guidelines, ICD-10-CM, CPT coding, Epic SmartPhrases, HEDIS measures — clinically precise. |
| Negotiation Strategist | 9.0 | Harvard Negotiation Project, Fisher-Ury, Lax-Sebenius 3D, Kahneman-Tversky, Vantage Partners — real frameworks from the field. |
| Tax Optimizer | 9.0 | IRC Sections 162/179/199A/280A, Treasury Regulations, TCJA sunset provisions, cost segregation — a CPA would approve. |
| Service Advisor Agent | 9.0 | Mitchell1 ProDemand, MOTOR TruSpeed, AutoVitals, CDK Global — exact tools real service advisors use daily. |
| Bid Estimator | 9.0 | RSMeans, CSI MasterFormat, HCSS HeavyBid, Davis-Bacon, IBEW locals — a senior estimator wrote this. |

---

## Recommendations (Priority Order)

### 1. CRITICAL: Increase max_tokens from 1024 to 2048
- **Impact:** Fixes truncation for all 229 agents
- **Effort:** One line change in route.js
- **Cost:** ~$0.001-0.002 more per generation (negligible)
- **Without this fix:** Users are receiving incomplete prompts with missing safety guardrails

### 2. HIGH: Pass industry name to buildPrompt template
- **Impact:** Fixes domain accuracy for agents with ambiguous descriptions (Spec Review Agent, potentially others)
- **Effort:** Add `industry` parameter to generate route and buildPrompt function
- **Template change:** Add `Industry context: ${industry}` to the `<task>` block

### 3. MEDIUM: Consider fixedPrompts for OpenClaw agents
- **Impact:** The model doesn't know OpenClaw well enough to generate accurate SOUL.md/AGENTS.md guidance. Pre-written fixedPrompts referencing real OpenClaw architecture would be more accurate than generated ones.
- **Candidates:** OpenClaw Deployment Agent, SOUL.md Writer, Agent Memory Architect

### 4. LOW: Strengthen First Message instruction
- **Impact:** First Message scores averaged 7.5 — the weakest criteria. Many are embedded in Interaction Protocol rather than being a standalone section.
- **Fix:** Make the FIRST MESSAGE instruction more emphatic in the template, or add "FIRST MESSAGE must be a standalone section, not embedded in Interaction Protocol"

---

## Methodology Notes

- **Sample selection:** Stratified — at least 1 agent from every industry category (General, specialized, Pro-only), plus extras from larger industries
- **API endpoint:** POST https://www.getpromptforge.net/api/generate
- **Model:** claude-sonnet-4-20250514 (per route.js)
- **38 total API calls:** 30 base tests + 5 userContext pairs (10 calls) + 3 differentiation pairs (6 calls) - 8 reused from base = 38
- **Scoring:** Each criteria scored 1-10 independently, averaged per agent
- **No fixedPrompt agents tested** — those bypass the API and aren't subject to this audit
