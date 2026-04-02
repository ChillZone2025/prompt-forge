# Evaluation Criteria: SaaS & Product

## Overview

These criteria evaluate whether SaaS & Product agents demonstrate the analytical rigor and product judgment expected of experienced product managers, growth leads, and user researchers. A real Head of Product or VP of Growth should read the agent's output and think "this person has shipped products, analyzed churn, and navigated stakeholder politics."

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate

- **Data literacy** — Reads cohort charts, calculates churn rates, interprets NPS distributions, and identifies statistical significance vs. noise. Doesn't conflate correlation with causation but uses correlation as a signal for investigation.
- **Framework fluency** — Applies RICE/ICE scoring correctly, understands JTBD, knows the difference between output metrics (features shipped) and outcome metrics (retention improved). Uses frameworks as tools, not religion.
- **User empathy grounded in research** — Recommendations tied to specific user research findings, not assumptions. Distinguishes between what users say they want and what the data shows they need.
- **Business context** — Understands that product decisions have revenue implications. Connects churn analysis to ARR impact. Knows that a 1% improvement in activation can be worth more than a new feature.
- **Stakeholder navigation** — Provides actionable advice for navigating conflicting stakeholder requirements. Doesn't just say "push back on sales" but explains how to present the data and offer alternatives.
- **Prioritization discipline** — Recommends what NOT to build as clearly as what to build. Identifies when a requested feature doesn't serve the core retention/activation goal.

### Must Never

- Recommend building features without validating demand through data or research
- Ignore accessibility as deferrable — WCAG compliance is a legal and ethical requirement
- Accept stakeholder opinions over contradicting data without addressing the conflict
- Use vanity metrics (total signups, page views) to justify decisions when outcome metrics (activation, retention) tell a different story
- Ship to production with known broken experiences for significant user segments (e.g., 40% mobile users)
- Treat churn as a single number without segmenting by cohort, tier, and behavior

---

## Agent-Specific Criteria

### Churn Analyst (`churn_analyst`)

- Segments churn by meaningful dimensions: cohort (acquisition date), tier (SMB/MM/Enterprise), behavior (feature usage), and source (acquisition channel)
- Identifies leading indicators of churn: declining usage, support ticket escalation, NPS detractor, CSV export spikes
- Distinguishes between logo churn and revenue churn and explains why the difference matters
- Connects behavioral data to qualitative research (survey responses, interview quotes) for a complete picture
- Quantifies the revenue impact of churn and the expected ROI of retention initiatives
- Identifies competitive displacement patterns vs. product-fit issues vs. economic churn

### Feature Prioritization Agent (`feature_prior`)

- Applies RICE (or ICE) scoring with realistic estimates for each factor, not just intuition
- Considers opportunity cost: what are we NOT building while we build this?
- Separates "nice to have" from "must have" based on data, not stakeholder volume
- Recommends what to stop doing as well as what to start
- Creates roadmaps that balance quick wins (< 2 weeks) with strategic investments (1-2 quarters)
- Evaluates build-vs-buy-vs-partner for significant capabilities

### PRD Writer (`prd_writer`)

- Writes problem statements grounded in data and user research, not assumptions
- Defines success metrics that are measurable, time-bound, and tied to business outcomes
- Includes user stories with acceptance criteria that cover happy path, edge cases, error states, and empty states
- Explicitly documents out-of-scope decisions with rationale
- Includes accessibility requirements as first-class citizens, not afterthoughts
- Specifies analytics instrumentation: what events to track, what funnels to measure, what dashboards to create

### User Research Agent (`user_research`)

- Synthesizes multiple interview sources into patterns without over-indexing on any single user
- Identifies when user requests conflict with behavioral data (e.g., users say they want feature X but don't use similar feature Y)
- Extracts actionable insights, not just summaries: "8 users mentioned onboarding" → "Users who can't find the guided setup after step 3 abandon the product because they don't know what to do with connected data"
- Recommends specific research methods for specific questions: usability test for UX problems, survey for quantitative validation, interview for "why" questions
- Identifies gaps in research: who wasn't interviewed that should have been? What segment is underrepresented?

---

## Planted Issues Reference

### Scenario 1 — Churn Analysis (mock-data/scenario-1.md)

| # | Issue | What the Agent Must Catch | Key Data Point |
|---|-------|--------------------------|----------------|
| 1 | Onboarding redesign caused activation collapse | Dashboard creation dropped 68%→41% post-redesign. Guided setup completion 72%→58%. Post-redesign cohorts have worse retention at every interval. | Cohort retention table + onboarding funnel |
| 2 | Enterprise support SLA collapse | Response time 2.4→8.4 hrs. SLA compliance 78%→21%. Enterprise NPS +42→-9. Support team didn't grow with ticket volume. | Support response time table + NPS |
| 3 | CSV export as leading churn indicator | Churned users export MORE than retained (72% vs 68%). Counterintuitive = valuable signal. Data extraction before cancellation. | Feature usage table |
| 4 | Revenue churn worse than logo churn | 6.5% revenue vs 3.8% logo churn. Losing larger accounts. Enterprise/MM churn driving ARR contraction. | Revenue churn table |
| 5 | Competitive displacement by DataWeave | 19% of cancellations cite DataWeave. NPS detractors mention it. Feature gap + price gap + support gap. | Cancellation survey + NPS comments |
| 6 | Pricing-value mismatch in Mid-Market | 22% cancel as "too expensive for what we use." Mid-Market customers using only CSV export on $499 plan. | Cancellation survey + feature usage |

### Scenario 2 — PRD/Research (mock-data/scenario-2.md)

| # | Issue | What the Agent Must Catch | Key Data Point |
|---|-------|--------------------------|----------------|
| 1 | Sales CTA contradicts self-serve activation data | Self-serve activated users retain at 91%. Sales motion at step 2 diverts from self-serve path. | Interview 1, 8 + retention data |
| 2 | Step 3 drop-off: connector overwhelm + missing connectors | 40+ connectors with no guidance. Snowflake missing (118 tickets). | Funnel + support themes + Interview 6 |
| 3 | Guided setup hidden in side menu post-redesign | Primary activation driver moved to obscure location. Multiple users can't find it. | Interviews 1, 3, 8 + support theme #1 |
| 4 | Mobile onboarding broken (40% of signups) | Buttons cut off, wizard doesn't scroll. 54 support tickets. 40% of signups on mobile. | Interview 7 + support + signup data |
| 5 | Engineering wants to cut accessibility | WCAG is a legal requirement. Retrofitting is harder than building in. 15-20% of users affected. | Engineering requirements + legal |
| 6 | Missing templates (top user request + competitor gap) | 68 support tickets, 3 interviews mention it, competitors offer 20-50 templates. Templates = activation scaffolding. | Support + interviews + competitor table |

---

## Red Flags — Automatic Failure Indicators

1. **Recommends building the CEO's conference feature without addressing the data** — Ignoring churn data to build an unvalidated feature because a senior leader wants it is the definition of HiPPO-driven development.
2. **Accepts the "more intuitive" explanation for the onboarding drop** — When data shows a 27-point drop in activation after a redesign, "it's more intuitive now" is not a credible explanation. The data wins.
3. **Agrees to cut accessibility** — WCAG compliance is not optional. Recommending shipping without accessibility is both a legal risk and a failure of product judgment.
4. **Ignores the revenue churn / logo churn divergence** — If the agent only analyzes logo churn without segmenting by revenue impact, they're missing the most important signal: the business is losing its best customers.
5. **Doesn't connect CSV export spike to churn risk** — Missing the counterintuitive finding (churned users export MORE) means the agent isn't reading the data carefully.
6. **Injects the sales CTA into onboarding without questioning it** — Accepting stakeholder requests that contradict user research without pushback demonstrates poor product judgment.

---

## Scoring Rubric

### Scale: 1-10

| Score | Description |
|-------|-------------|
| **10** | Expert-level. Catches all planted issues. Connects data points across tables. Provides RICE-scored prioritization. Handles stakeholder politics with specific, actionable framing. Writes PRD sections with measurable success criteria and edge cases. |
| **9** | Near-expert. Catches all or nearly all issues. Strong analytical rigor. May miss one nuance (e.g., catches the churn problem but doesn't connect CSV export to early warning). |
| **8** | Strong practitioner. Catches 4-5 of 6 issues. Correct analysis. Good prioritization framework. Handles stakeholder conflicts well. May miss the subtler findings. |
| **7** | Competent. Catches 3-4 issues. Generally correct analysis but may lack quantification. Stakeholder navigation advice is generic rather than specific. |
| **6** | Adequate but gaps. Catches 2-3 issues. May accept stakeholder explanations without data challenge. Prioritization lacks rigor. |
| **5** | Marginal. Catches 1-2 obvious issues. Generic advice. Doesn't engage deeply with the specific data. |
| **4** | Below standard. Misses most issues. May recommend building the CEO's feature without addressing churn. |
| **3** | Poor. Fails to identify that the redesign caused the activation drop. Accepts "more intuitive" at face value. |
| **2** | Dangerous. Recommends shipping without accessibility, approves the sales CTA without question, or ignores churn data. |
| **1** | Actively harmful. Recommends decisions that would accelerate churn: cutting support, ignoring enterprise segment, building vanity features. |

### Pass Thresholds

| Tier | Minimum Score | What It Means |
|------|--------------|---------------|
| **Tier 2** | 7.0 | Agent is competent for product analysis. Catches major churn drivers, provides useful prioritization, navigates stakeholder conflicts. Suitable for churn analysis, feature scoring, and PRD drafting. |
| **Tier 3** | 8.0 | Agent demonstrates senior PM-level judgment. Catches most or all issues, connects data points, provides specific and actionable recommendations. Credible to a Head of Product or VP of Growth. |

### Scoring Notes

- **Data engagement is required** — An agent that provides generic product advice without referencing the specific data in the mock files cannot score above 5.0. The data is there to be used.
- **Quantification is rewarded** — "Fix onboarding" is less valuable than "Restoring the guided setup to the main flow should recover 10-15% activation (based on pre-redesign baseline of 68%), which at current signup rates would retain ~25 additional customers per quarter worth ~$75K ARR."
- **Stakeholder navigation matters** — Saying "push back on the CEO" without providing specific framing ("here's how to present the ROI comparison") is unhelpful. The agent should model the conversation.
- **Accessibility is non-negotiable** — Any agent that recommends cutting accessibility caps at 5.0 regardless of other performance.
- **Counterintuitive findings test analytical depth** — Catching the CSV export pattern (Issue 3) and the revenue/logo churn divergence (Issue 4) demonstrates that the agent is reading the data carefully, not just scanning for obvious patterns.
