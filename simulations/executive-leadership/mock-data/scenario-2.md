# Executive Decision Brief -- Build vs. Buy Analysis for AI Integration

## Classification: Confidential -- Executive Team Only
## Prepared for: Jessica Marlowe, CEO, Vanguard Solutions
## Prepared by: Corporate Strategy Team
## Date: March 25, 2026

---

## 1. Decision Context

Vanguard Solutions is a mid-market enterprise software company ($120M ARR, 650 employees) serving the logistics and supply chain industry. Our customers are increasingly requesting AI-powered demand forecasting, route optimization, and anomaly detection capabilities.

Three of our top 10 customers have explicitly stated in QBRs that they will evaluate alternatives if we don't deliver AI capabilities by Q1 2027. Two competitors (LogiSense AI and FreightMind) have launched AI features in the last 6 months and are winning competitive evaluations we previously dominated.

**The Strategic Question:** How should Vanguard Solutions acquire AI/ML capability -- build it internally, acquire an AI startup, or form a strategic partnership?

**Decision Deadline:** Board meeting April 22, 2026
**Decision Maker:** CEO (with board approval required for Option B)

---

## 2. Option A: Build Internally

### Overview
Hire a dedicated AI/ML engineering team and build proprietary AI capabilities integrated directly into the Vanguard platform.

### Details
- **Team Size:** 15 AI/ML engineers (3 senior, 8 mid-level, 4 junior)
- **Timeline:** 18 months from team formation to GA release
  - Months 1-3: Hiring and onboarding
  - Months 4-9: Core model development and training
  - Months 10-15: Integration with existing platform
  - Months 16-18: Beta testing and GA release
- **Total Cost:** $8M over 18 months
  - Compensation: $5.4M (avg. $360K fully-loaded per engineer)
  - Infrastructure (GPU compute, data pipeline): $1.8M
  - Tooling and training data: $800K

### Advantages
- Full control over technology roadmap
- Deep integration with existing platform architecture
- No cultural integration risk
- IP remains 100% internal
- Lower total cost over 5-year horizon

### Risks
- Execution timeline risk (AI talent is competitive)
- No existing IP or training data -- starting from zero
- 18 months to market while competitors advance
- Key person risk (no existing AI leadership)

---

## 3. Option B: Acquire NeuralEdge (Recommended)

### Company Overview
- **Company:** NeuralEdge, Inc.
- **Founded:** 2023
- **Employees:** 22 (18 engineers, 2 product, 1 sales, 1 CEO/founder)
- **ARR:** $2M (8 customers, all in logistics/supply chain)
- **Funding:** $6M Seed (2023), no subsequent rounds
- **Technology:** Proprietary demand forecasting and route optimization ML models trained on logistics data
- **IP:** 2 provisional patents filed, 3 open-source contributions to PyTorch logistics libraries

### Proposed Terms
- **Acquisition Price:** $45M (all-cash)
- **Valuation Multiple:** 22.5x ARR
- **Earnout Structure:** $10M of purchase price in earnout tied to retention (18-month cliff)
- **Retention Packages:** $5M in retention bonuses for all 22 employees (vesting over 24 months)
- **Total Deal Cost:** $50M ($45M acquisition + $5M retention)

### Financial Projections (Post-Acquisition)

| Year | Revenue Contribution | Integration Cost | Net Contribution |
|------|---------------------|-----------------|-----------------|
| Year 1 | $5M | ($8M) | ($3M) |
| Year 2 | $15M | ($3M) | $12M |
| Year 3 | $30M | ($1M) | $29M |
| Year 4 | $45M | -- | $45M |

### Advantages
- Immediate access to trained AI/ML team with domain expertise
- Existing product with 8 paying customers validates market demand
- Proprietary training data from logistics industry (24 months of production data)
- Time-to-market: 6 months for integrated feature launch vs. 18 months for build
- Eliminates a potential competitor before they scale

### Risks
- High valuation premium (22.5x ARR)
- Integration complexity with existing Vanguard platform
- Employee retention post-acquisition
- Cultural fit between startup and enterprise teams

---

## 4. Option C: Strategic Partnership

### Overview
Partner with a major cloud AI provider (AWS SageMaker, Google Vertex AI, or Azure ML) to embed pre-built AI models into the Vanguard platform via API integration.

### Summary
- **Cost:** $2M/year in API fees and integration engineering
- **Timeline:** 6-9 months to initial integration
- **Ongoing:** Revenue share or per-API-call pricing

This option was evaluated and deemed insufficient for our needs. Cloud AI platforms provide general-purpose models that lack logistics domain specificity. Customization to match NeuralEdge's domain expertise would require significant investment in fine-tuning, effectively becoming a more expensive version of Option A with less control over the technology.

**Recommendation: Do not pursue.**

---

## 5. Comparative Summary

| Criterion | Build (A) | Acquire (B) | Partner (C) |
|-----------|-----------|-------------|-------------|
| Time to market | 18 months | 6 months | 6-9 months |
| Total cost (Year 1) | $8M | $50M | $2M |
| Total cost (5-year) | $28M | $62M | $12M |
| IP ownership | Full | Full | None |
| Domain expertise | None (build from scratch) | Strong (24 months data) | Moderate (general models) |
| Risk level | High (execution) | Medium (integration) | Low (reversible) |
| Competitive moat | Strong (if successful) | Strongest | Weak |

---

## 6. Risk Analysis

### Option B (Recommended) Risk Matrix

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Key employee departures | Medium | High | Retention packages + earnout |
| Integration delays | Medium | Medium | Dedicated integration team |
| Technology doesn't scale | Low | High | Technical due diligence (completed) |
| Customer confusion during transition | Low | Medium | Joint communication plan |
| Regulatory (data transfer) | Low | Low | Legal review (completed) |

### Financial Risk: Cash Impact
- Vanguard current cash position: $85M
- Post-acquisition cash: $35M ($85M - $50M)
- Quarterly burn rate: $4M
- Post-deal runway: 8.75 quarters (~26 months)

---

## 7. Recommendation

**We recommend Option B: Acquire NeuralEdge for $45M.**

The acquisition provides immediate AI capability with domain-specific expertise that would take 18+ months to build internally. The financial projections show break-even in Year 2 and significant revenue contribution by Year 3. While the valuation premium is high, the strategic value of time-to-market and competitive positioning justifies the investment.

### Requested Board Action
- Approve acquisition of NeuralEdge, Inc. for up to $45,000,000
- Authorize CEO to execute definitive agreement
- Approve retention bonus pool of $5,000,000

---

## PLANTED ISSUES (for evaluation -- agent should catch these)

1. **Unrealistic build timeline:** The build option estimates 18 months total, with only 3 months for hiring 15 AI/ML engineers. In the current talent market, hiring senior AI engineers takes 3-6 months per role. Recruiting 15 qualified AI/ML engineers (especially 3 seniors) would realistically take 6-9 months minimum, even with a dedicated recruiting team and competitive comp packages. After hiring, the team needs to gel, establish architecture decisions, acquire training data, and build from zero domain expertise. Realistic timeline for Option A is 24-30 months, not 18. By understating the build timeline, the analysis makes the acquisition look comparatively more attractive on the time-to-market dimension. A decision-ready brief should use realistic ranges, not best-case estimates.

2. **Extreme acquisition valuation with no comparables:** The proposed $45M acquisition at 22.5x ARR is presented without any comparable transaction analysis. SaaS median acquisition multiples in 2025-2026 range from 8-12x ARR for companies with $2M ARR. Even at the high end of AI premium multiples (15-18x for hot AI startups with strong growth), 22.5x is an outlier. The brief should include: (a) 5-10 comparable acquisitions with multiples, (b) a discounted cash flow analysis, (c) a discussion of what premium, if any, is justified by the domain-specific data and IP, and (d) a range of valuations under different assumptions. Without comparables, the board is being asked to approve a price with no market context. The NeuralEdge CEO likely set the 22.5x number, and it hasn't been challenged.

3. **Partnership option dismissed without rigorous analysis:** Option C (strategic partnership) receives one paragraph of analysis compared to full pages for Options A and B. The dismissal reasoning -- "general-purpose models lack logistics domain specificity" -- ignores that cloud AI platforms offer fine-tuning, custom model training, and industry-specific solutions (AWS Supply Chain, Google Cloud Cortex for logistics). The partnership option is the lowest-risk, lowest-cost path with the fastest time to market (6-9 months at $2M/year vs. $50M). A fair analysis would show: fine-tuning costs, time to domain-specific accuracy, hybrid approaches (partner for base models + internal team for domain customization), and a comparison of 5-year TCO. The one-paragraph dismissal suggests the analysis was written to support a predetermined conclusion (acquire), not to genuinely evaluate all options.

4. **No cultural integration assessment:** The brief mentions "cultural fit" as a one-line risk item but provides no actual assessment. Integrating 22 startup employees (18 of whom are engineers accustomed to startup autonomy, speed, and flat hierarchy) into a 650-person enterprise software company is a known high-failure-rate pattern. Research (McKinsey, Bain) consistently shows that 70% of acquisitions fail to deliver expected value, and cultural integration is the #1 cited reason. The brief should include: (a) an organizational compatibility assessment, (b) a reporting structure plan for the NeuralEdge team, (c) a decision on whether to maintain NeuralEdge as a semi-autonomous unit or fully integrate, (d) an integration timeline with milestones, and (e) identified cultural friction points (e.g., NeuralEdge likely ships weekly; Vanguard likely ships quarterly). The absence of this analysis is a material gap.

5. **Retention projections assume 100% employee retention:** The financial projections and strategic rationale assume all 22 NeuralEdge employees stay post-acquisition. The $5M retention package (avg. $227K per person over 24 months) is presented as sufficient mitigation. In reality, acqui-hire retention rates average 60-70% at 18 months even with retention packages. For AI/ML engineers specifically -- the most in-demand talent market -- retention is often lower. If 7-8 of the 18 engineers leave within 18 months, the "immediate AI capability" rationale collapses. The financial projections should model scenarios at 100%, 80%, and 60% retention to show the board the range of outcomes. Additionally, the $10M earnout tied to an 18-month cliff creates a perverse incentive: employees stay exactly 18 months, collect the earnout, then leave. A graded vesting schedule would be more effective.
