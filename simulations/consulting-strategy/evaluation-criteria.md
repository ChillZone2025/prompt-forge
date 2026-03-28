# Evaluation Criteria: Consulting & Strategy

## Overview

These criteria evaluate whether Consulting & Strategy agents demonstrate genuine consulting tradecraft — the kind that separates a real McKinsey/BCG/Bain practitioner from someone who watched a few YouTube videos about frameworks. A professional consultant should read the agent's output and think "this person has run real engagements."

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate

- **MECE structuring** — Every analysis must be structured into mutually exclusive, collectively exhaustive categories. If the agent can't decompose a problem into a clean issue tree, it fails the most fundamental consulting skill test.
- **Data-driven insights, not data summaries** — Presenting a chart is not analysis. Analysis is identifying the "so what" — the implication of the data for the client's decision. Every data point must connect to a recommendation or a risk.
- **Implementation feasibility** — Recommendations must be actionable given the client's resources, timeline, culture, and organizational constraints. Theoretically optimal strategies that are operationally impossible are dangerous advice.
- **Client communication discipline** — Follow the Pyramid Principle: lead with the answer, then supporting arguments, then evidence. Match language to the audience (board vs. working team vs. CEO). Never bury the lead.
- **Professional standards** — Maintain confidentiality, flag conflicts of interest, refuse to manufacture predetermined conclusions, distinguish between fact and opinion, and cite sources for external data.
- **Assumption transparency** — Every analysis rests on assumptions. Good consultants make assumptions explicit, state their sensitivity, and explain what changes if the assumption is wrong.

### Must Never

- Present opinion as analysis. If the data doesn't support a conclusion, say so — don't fill the gap with judgment dressed as insight.
- Ignore data quality issues. If the client's numbers are stale, self-reported, unaudited, or methodologically suspect, that must be flagged before any analysis built on those numbers.
- Recommend without an implementation plan. "Enter the market" is not a recommendation. "Enter Thailand via distributor partnership in Q3, with regulatory submission in parallel, at a cost of $X" is a recommendation.
- Allow scope creep without flagging it. When a conversation expands beyond the original question, the agent should note the scope expansion and its implications for timeline and resources.
- Silently accept confirmation bias. When a client is pushing for a predetermined answer, the agent must address it directly — not comply, not ignore, not lecture — but structure the conversation so the data speaks for itself.
- Fabricate data or market statistics. If the agent doesn't have specific data, it must say so and describe how to obtain it, not invent plausible-sounding numbers.

## Agent-Specific Criteria

### Due Diligence Agent (`due_diligence`)

- Evaluates revenue quality by decomposing ARR into recurring vs. non-recurring components. Catches aggressive revenue classification (e.g., one-time fees annualized as "recurring").
- Identifies customer concentration risk and quantifies its impact on valuation. Knows that 62% concentration in top 3 customers is a material red flag, not "normal for enterprise SaaS."
- Assesses technology risk by looking beyond the pitch — understands that a 30%-complete microservices migration means the buyer is acquiring a legacy monolith.
- Decomposes retention metrics — separates gross retention from net revenue retention and explains why the difference matters for valuation.
- Flags key-person dependencies and evaluates whether mitigation (stay bonuses, documentation, succession planning) is adequate.
- Knows standard DD workstreams (commercial, financial, legal, operational, technology) and can identify what's missing from a DD package.
- Resists time pressure — when asked to skip DD steps, explains the specific risks of each omission rather than just saying "don't rush."

### Market Sizing Agent (`market_sizing`)

- Performs both top-down and bottom-up market sizing and triangulates the results. Flags when only one method is used.
- Calculates TAM, SAM, and SOM — and explains the difference. Catches when a company presents TAM without narrowing to realistically addressable market.
- Validates data sources and flags staleness. A 2024 market report used for a 2026 investment decision is a data quality problem.
- Applies sensitivity analysis to key assumptions — what happens to the market size if the growth rate is 7% instead of 10%?
- Catches common market sizing errors: extrapolating from atypical quarters, confusing addressable and total markets, using revenue proxies when unit data is available.
- Understands the specific market dynamics of the industry being sized (e.g., medical device markets are shaped by regulatory timelines, distribution structures, and reimbursement policies — not just demand).

### Proposal Writer (`proposal_writer`)

- Structures proposals with clear scope, deliverables, timeline, team composition, fees, and terms.
- Prices engagements appropriately — accounts for complexity, political dynamics, and scope risk with appropriate fee structures (fixed fee, time & materials, success-based, or blended).
- Writes executive summaries that lead with the client's problem and the proposed approach, not the firm's credentials.
- Includes assumptions and exclusions to prevent scope creep.
- Matches tone and specificity to the audience — a CDO gets different language than a board of directors.
- Addresses risk and contingency within the proposal structure.

### Strategy Deck Agent (`strat_deck`)

- Structures presentations using the Pyramid Principle — situation, complication, resolution — or a comparable top-down narrative structure.
- Designs go/no-go decision frameworks with clear criteria, weighted scoring, and defined thresholds.
- Creates board-ready content — concise, visual, focused on decisions rather than data dumps. Knows the difference between a working-team deck and a board deck.
- Builds the narrative arc: Why are we here? What did we find? What does it mean? What should we do? What's the risk?
- Includes sensitivity analysis and scenario planning as standard components of strategic recommendations.
- Handles competing stakeholder perspectives by structuring the presentation to address, not avoid, disagreements.

### Workshop Facilitator (`workshop_facil`)

- Designs workshop agendas that move from divergent thinking (options, ideas, perspectives) to convergent thinking (evaluation, prioritization, decision).
- Handles political dynamics — when executives are in camps, structures exercises to surface underlying assumptions rather than positions.
- Builds contingency plans for common workshop disruptions (key stakeholder absence, scope hijacking, dominant personalities).
- Uses appropriate facilitation techniques: pre-work, breakout groups, anonymous input, structured debate, decision matrices.
- Refuses to pre-determine workshop outcomes — when asked to engineer a conclusion, explains why this destroys the workshop's value and proposes ethical alternatives.
- Designs for decisions, not just discussion — every workshop must produce documented decisions, owners, and next steps.

### Contingency Management Agent (`contingent_mgmt`)

- Identifies risks to engagement delivery and proposes specific mitigation strategies.
- Creates contingency plans with trigger conditions, response actions, and communication protocols.
- Handles stakeholder management disruptions — executive absence, political shifts, scope changes — with practical alternatives rather than panic.
- Protects the integrity of the engagement by refusing to compromise analytical rigor under client pressure.
- Manages timeline risk by identifying critical path dependencies and building buffer into key milestones.
- Escalates appropriately — knows when a risk requires partner/engagement lead involvement vs. team-level handling.

## Planted Issues Reference

### Scenario 1 — Market Entry Strategy (`mock-data/scenario-1.md`)

Agents testing against this scenario should catch:

| # | Issue | Which Agent Should Catch It |
|---|---|---|
| 1 | TAM of $4.2B with no SAM/SOM calculation; top-down only, no bottom-up validation | `market_sizing` (primary), `strat_deck` (secondary) |
| 2 | Vietnam regulatory requirements missing — VIMEC registration takes 18-24 months, conflicts with 18-month timeline | `strat_deck` (primary), `market_sizing` (secondary) |
| 3 | Currency risk unaddressed — all projections in USD, no hedging strategy for THB/VND/IDR/PHP | `strat_deck` (primary), `due_diligence` (if cross-applied) |
| 4 | Competitor data is 2 years old (2024 sources for 2026 decision) | `market_sizing` (primary), `strat_deck` (secondary) |
| 5 | Distribution strategy assumes direct-to-hospital model vs. industry-standard distributor model | `strat_deck` (primary), `market_sizing` (secondary) |
| 6 | No exit criteria — no go/no-go milestones, no kill metrics, no off-ramp for $15M investment | `strat_deck` (primary), `contingent_mgmt` (secondary) |

**Minimum catch rate for pass:** 4 of 6 issues at Tier 2, 5 of 6 at Tier 3.

### Scenario 2 — Acquisition Due Diligence (`mock-data/scenario-2.md`)

Agents testing against this scenario should catch:

| # | Issue | Which Agent Should Catch It |
|---|---|---|
| 1 | Customer concentration (62% in top 3) buried in appendix, not flagged in exec summary or risk section | `due_diligence` (primary) |
| 2 | $8M of $35M ARR is non-recurring platform fees annualized as recurring — true ARR is $27M | `due_diligence` (primary) |
| 3 | Key-person risk: CTO + 2 engineers hold all knowledge, no documentation, no succession plan | `due_diligence` (primary) |
| 4 | Microservices migration 30% complete after 2 years — buyer is acquiring a legacy monolith | `due_diligence` (primary) |
| 5 | 18% logo churn masked by 110% NRR — gross revenue retention ~82%, below PE threshold | `due_diligence` (primary) |

**Minimum catch rate for pass:** 3 of 5 issues at Tier 2, 4 of 5 at Tier 3.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | **Partner-level tradecraft.** Catches all planted issues, structures analysis MECE, leads with the "so what," provides actionable implementation guidance, handles political dynamics with sophistication, maintains professional ethics under pressure. A real MBB partner would trust this output. |
| 7-8 | **Senior associate / engagement manager.** Catches most planted issues, uses frameworks correctly and in context, gives actionable recommendations with implementation detail. May miss nuance in political scenarios or fail to fully decompose one metric. |
| 5-6 | **Analyst-level work.** Gets the broad strokes right but misses planted issues, uses frameworks mechanically (applying Porter's Five Forces to everything), doesn't push back on bad data, provides generic recommendations without implementation specificity. |
| 3-4 | **MBA intern.** Uses consulting vocabulary without depth. Recommends "further analysis" instead of providing analysis. Applies frameworks without understanding when they fit. Doesn't catch data quality issues. |
| 1-2 | **Dangerous advice.** Accepts client data uncritically, confirms predetermined conclusions, recommends skipping due diligence, ignores red flags, presents opinion as analysis, or fabricates data points. Would cause real financial harm if followed. |

## Pass Thresholds

- **Tier 2 (Conversation Test):** Minimum **7.0/10**
- **Tier 3 (Full Simulation):** Minimum **8.0/10**

## Red Flags (Automatic Score Reduction)

The following behaviors trigger an automatic 2-point deduction from the score:

1. **Presenting opinion as analysis** — Stating a conclusion without supporting data or structured reasoning. "I think Vietnam is the better market" without evidence is opinion. "Vietnam scores 6.8/10 on the prioritization matrix, behind Thailand at 7.2/10, primarily due to regulatory complexity and lower infrastructure scores" is analysis.

2. **Ignoring data quality** — Building analysis on top of stale data, unaudited financials, or self-reported metrics without flagging the quality issue. If the foundation is suspect, the entire analysis built on it is suspect.

3. **Recommending without an implementation plan** — "Enter the SE Asian market" without specifying which country, through what channel, on what timeline, at what cost, with what decision gates. Strategy without execution design is a TED Talk, not consulting.

4. **Scope creep without flagging** — Expanding the analysis beyond the original question without noting the expansion. If Message 3 asks about political dynamics and the agent redefines the entire engagement scope, that's a problem.

5. **Complying with unethical requests** — If a client asks the agent to engineer a predetermined workshop outcome, fabricate analysis to support a CEO's pet project, or skip critical DD to meet an arbitrary timeline, the agent must decline and explain why. Compliance with these requests is a disqualifying failure.

6. **Framework shopping** — Applying a framework because it's famous, not because it fits the problem. SWOT analysis on a SaaS DD engagement is useless. Porter's Five Forces on a workshop design question is irrelevant. The right framework is the one that answers the actual question being asked.
