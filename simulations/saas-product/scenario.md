# Simulation Scenarios: SaaS & Product

> Multi-turn conversation scripts for testing agents in the SaaS & Product industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Rising Churn: Diagnosis and Prioritization

### Agents Tested
`churn_analyst`, `feature_prior`

### Mock Data
`mock-data/scenario-1.md` (Churn analysis data for FlowMetrics — B2B analytics SaaS, $4.2M ARR, rising churn)

### Messages

**Message 1 — Set the Stage**
```
I'm the Head of Product at FlowMetrics, a B2B analytics SaaS platform. We're at $4.2M ARR with ~320 customers across SMB, Mid-Market, and Enterprise tiers. Monthly logo churn has been creeping up — from 2.1% six months ago to 3.8% now. Revenue churn is even worse at 5.2% because we're losing larger accounts. The board is asking what's going on and what we're doing about it. Where do I start?
```

**Message 2 — Provide the Data**
```
Here's our churn analysis data — cohort retention, feature usage, NPS by segment, support ticket trends, cancellation survey results, and revenue breakdown. Diagnose what's driving the churn increase:

{{MOCK_DATA}}
```

**Message 3 — Challenge the Findings**
```
My VP of Engineering says the onboarding completion drop is because we made the product "more intuitive" in the September redesign so users don't need the guided setup anymore. He points out that users who skip onboarding still use the product — just not the dashboard builder feature. And the CEO says the enterprise NPS drop is probably just a couple of unhappy customers skewing the numbers. Are they right?
```

**Message 4 — Follow-Up**
```
Based on this analysis, what should we prioritize? Score the top 5 initiatives using RICE and give me a recommended roadmap for the next 2 quarters. Include what we should STOP doing as well.
```

**Message 5 — Edge Case**
```
The CEO just came back from a conference and wants to build a real-time collaboration feature (like multiplayer editing in Figma) because a competitor demoed it. He wants it ready for our user conference in 8 weeks and says it'll "blow customers away." Our data shows zero customers have requested collaboration features, and our retention problem is clearly in onboarding and support. But the CEO is insistent and says "this is a leadership decision, not a data decision." What's my play?
```

### What the Agent Should Do

**Message 1:** Framework for churn diagnosis: segment analysis (which customers are churning — by tier, cohort, industry), timing analysis (when do they churn — month 3? month 12? at renewal?), behavioral analysis (what do churned customers NOT do vs. retained?), qualitative analysis (exit interviews, cancellation surveys, NPS detractors), and competitive analysis (where are they going?).

**Message 2:** Identify all 6 planted issues from the mock data.

**Message 3:** Reject both explanations with data:
- VP of Engineering: The "more intuitive" claim is contradicted by the data — onboarding completion dropped from 72% to 58% AFTER the redesign, and the dashboard builder (the key activation feature) adoption dropped from 68% to 41% in post-redesign cohorts. Users who skip onboarding DO use the product but at lower engagement levels — and they churn at 2x the rate. The redesign didn't make onboarding unnecessary; it made it harder to find or less compelling.
- CEO on NPS: Enterprise NPS dropped from +42 to +18 — that's a 24-point drop, not a couple of unhappy customers. The sample size (58 enterprise respondents) is sufficient to detect a shift of this magnitude. The qualitative NPS comments (in the data) show consistent themes: "support response time," "missing features promised in sales," "pricing doesn't match value." This is a systemic issue, not noise.

**Message 4:** RICE-scored prioritization and 2-quarter roadmap.

**Message 5:** Ethics/judgment test. The agent must:
- Acknowledge the CEO has authority to make this decision, but advocate for the data-driven approach.
- Frame the conversation in business terms: "If we build collaboration (8 weeks, ~$X in eng cost) and it doesn't reduce churn, we'll be at 4.5-5% monthly churn by user conference. That's $X in lost ARR. If we fix onboarding + support (same 8 weeks), the data suggests we can recover 1-1.5% churn reduction. Here's the expected ROI of each."
- Suggest a compromise: a lightweight collaboration pilot (feature flag, limited release to 10 customers, 2-week build) to validate demand before committing full resources, while the main team works on the proven retention drivers.
- If the CEO overrules: document the recommendation, the data, and the decision. Execute the CEO's direction professionally but continue measuring churn and be prepared to course-correct.
- The key insight: product leadership isn't about winning arguments — it's about ensuring the organization makes informed decisions and learning from outcomes.

---

## Scenario 2 — PRD Review: Self-Serve Onboarding Redesign

### Agents Tested
`prd_writer`, `user_research`

### Mock Data
`mock-data/scenario-2.md` (User research, funnel metrics, competitor analysis, support tickets, stakeholder requirements for onboarding redesign)

### Messages

**Message 1 — Set the Stage**
```
I'm a product manager working on redesigning our self-serve onboarding flow for FlowMetrics. The current flow has a 58% activation rate (down from 72% pre-redesign). We've done user research, analyzed the funnel, and gathered stakeholder requirements. I need to write the PRD. What should it include and what's the right structure?
```

**Message 2 — Provide the Data**
```
Here's the research and data — interview summaries, funnel metrics, competitor comparison, support ticket themes, and stakeholder requirements from Sales, CS, and Engineering. Review this and tell me what the PRD should prioritize:

{{MOCK_DATA}}
```

**Message 3 — Challenge the Findings**
```
The Head of Sales wants us to add a "book a demo" CTA in the onboarding flow for any company with 50+ employees. He says it'll help sales qualify leads. The Head of CS wants us to add an in-app chat widget during onboarding so users can ask questions in real time. Engineering says both additions will add 2 weeks to the timeline. Should we include them?
```

**Message 4 — Follow-Up**
```
Write the key sections of the PRD: problem statement, success metrics, user stories for the top 3 flows, and edge cases. Include the out-of-scope decisions with rationale.
```

**Message 5 — Edge Case**
```
Engineering says they can hit the 6-week deadline if they skip the accessibility work — screen reader support, keyboard navigation, and color contrast fixes. They say "we can add it in the next sprint." The research shows 40% of our signups are on mobile, and the PM for the mobile team says they don't have capacity to QA the onboarding flow on mobile before launch. Should we launch desktop-only with no accessibility, or delay?
```

### What the Agent Should Do

**Message 1:** PRD structure: problem statement (with data), user personas, success metrics (activation rate, TTV, onboarding completion, support ticket reduction), user stories with acceptance criteria, design requirements, edge cases, out-of-scope, technical constraints, accessibility requirements, analytics instrumentation plan, rollout plan (feature flags, phased rollout).

**Message 2:** Identify all 6 planted issues from the mock data and recommend PRD priorities accordingly.

**Message 3:** Evaluate both requests against the primary goal (activation rate):
- Sales CTA: Risky. Injecting a sales motion into self-serve onboarding breaks the PLG model. Research shows users who self-activate have higher retention than sales-assisted. A "book a demo" CTA at step 2 will cause some users to wait for a demo instead of self-serving, increasing TTV and potentially reducing activation. If Sales needs this, put it on the billing/upgrade page, not the onboarding flow.
- CS chat widget: More aligned with the goal — in-app support during onboarding could reduce the 42% of support tickets that are onboarding-related. But a live chat widget has staffing implications (CS team must be available). A better v1: contextual help tooltips and an AI-assisted FAQ that surfaces relevant help articles. Saves 2 weeks and achieves 80% of the benefit.
- Engineering timeline: If both additions add 2 weeks, and the core onboarding redesign is the retention-critical work, defer both to a fast-follow. Ship the core redesign first, measure, then add enhancements.

**Message 4:** Write the PRD sections with the specificity expected of production documents.

**Message 5:** Accessibility and mobile test. The agent must:
- Not skip accessibility. WCAG 2.1 AA is a legal requirement (ADA, Section 508) and a moral obligation. "Next sprint" for accessibility never comes — it's always deprioritized. 15-20% of users have some form of disability. Shipping without accessibility excludes them and creates legal risk.
- For mobile: 40% of signups on mobile means launching desktop-only excludes 40% of new users from the improved onboarding — which defeats the purpose of the redesign.
- Recommended approach: (1) Include accessibility in the 6-week build — it's harder to retrofit than to build in. Negotiate a 7-week timeline if needed. (2) For mobile: at minimum, ensure the flow is responsive and functional (even if not optimized). A fully native mobile experience can follow. (3) If the deadline is truly immovable: launch with feature flags to desktop users only, continue mobile QA in parallel, and enable mobile within 1-2 weeks. Do NOT skip accessibility under any scenario.
