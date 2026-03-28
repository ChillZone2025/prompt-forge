# Due Diligence Summary — Acquisition of CloudOps Inc.

## Engagement Summary
- **Buyer:** Apex Capital Partners (mid-market PE firm, $2.4B AUM)
- **Target:** CloudOps Inc.
- **Transaction Type:** Platform acquisition for Apex's cloud infrastructure thesis
- **Proposed Valuation:** $280M (8x ARR)
- **Deal Stage:** LOI signed, exclusivity period (45 days remaining)
- **DD Team:** Commercial (Apex internal), Financial (Deloitte), Legal (Kirkland & Ellis), Technology (Apex operating partner)

## Target Company Profile — CloudOps Inc.

### Overview
- **Founded:** 2019
- **Headquarters:** Austin, TX
- **Employees:** 150 (as of Q4 2025)
- **CEO:** Sarah Kim (co-founder, previously VP Engineering at Rackspace)
- **CTO:** David Okafor (co-founder, previously principal engineer at AWS)
- **Product:** Cloud infrastructure management platform — multi-cloud orchestration, cost optimization, compliance monitoring
- **Target Customers:** Mid-market enterprises (500-5,000 employees) managing hybrid and multi-cloud environments
- **Investors:** Series A ($8M, 2020, Foundry Group), Series B ($22M, 2022, Insight Partners)

### Key Metrics Dashboard

| Metric | FY2023 | FY2024 | FY2025 |
|---|---|---|---|
| ARR | $14M | $24M | $35M |
| ARR Growth | — | 71% | 46% |
| Gross Margin | 72% | 74% | 76% |
| EBITDA | -$6M | -$2M | $1.2M |
| Customers | 85 | 142 | 198 |
| ACV (Average Contract Value) | $165K | $169K | $177K |
| Net Revenue Retention | 112% | 115% | 110% |
| Logo Churn | 14% | 12% | 15% |
| LTV/CAC | 3.2x | 3.8x | 4.1x |
| Payback Period | 14 months | 12 months | 11 months |
| Employees | 80 | 120 | 150 |
| Revenue/Employee | $175K | $200K | $233K |

### Revenue Breakdown by Type

| Revenue Type | Amount | % of ARR |
|---|---|---|
| Platform subscription (annual) | $22M | 63% |
| Platform subscription (monthly) | $5M | 14% |
| Platform fees | $8M | 23% |
| **Total ARR** | **$35M** | **100%** |

*Note: Platform fees include onboarding, migration, and custom integration work billed on a project basis. These are recorded as recurring revenue as customers typically require ongoing integration support.*

### Customer Concentration

| Customer | ARR | % of Total |
|---|---|---|
| MegaCorp Industries | $9.8M | 28% |
| Pinnacle Financial Group | $7.2M | 21% |
| TerraForm Logistics | $4.6M | 13% |
| Customer 4 | $2.1M | 6% |
| Customer 5 | $1.8M | 5% |
| Remaining 193 customers | $9.5M | 27% |

*Full customer list and contract details available in Appendix C of the data room.*

### Technology Assessment

**Platform Architecture:**
- Core platform built on Kubernetes with microservices architecture
- Migration from legacy monolith to microservices initiated Q1 2024
- Current state: approximately 30% of services migrated to new architecture
- Remaining 70% runs on original monolithic Python/Django application
- Full migration estimated to complete Q4 2026

**Technology Stack:**
- Backend: Python (Django), Go (new microservices)
- Frontend: React, TypeScript
- Infrastructure: AWS (primary), GCP (DR), Terraform for IaC
- Data: PostgreSQL, Redis, Elasticsearch
- CI/CD: GitHub Actions, ArgoCD

**IP Portfolio:**
- 2 provisional patents (cloud cost optimization algorithms)
- No granted patents
- All code proprietary, no significant open-source licensing risk identified
- SOC 2 Type II certified (renewed Q3 2025)

### Management Team Assessment

| Role | Name | Tenure | Notes |
|---|---|---|---|
| CEO | Sarah Kim | Co-founder (6 yrs) | Strong vision, credible with enterprise buyers |
| CTO | David Okafor | Co-founder (6 yrs) | Deeply technical, manages all architecture decisions personally |
| VP Sales | Mike Torres | 2 years | Previously at Datadog, built current sales team |
| VP Engineering | Priya Sharma | 18 months | Reports to CTO, manages 45 engineers |
| CFO | James Liu | 3 years | Previously controller at a Series C SaaS company |

**Organizational Notes:**
- Engineering team (65 people) is 43% of the company
- CTO David Okafor personally reviews all major architectural decisions and production deployments
- Two senior engineers (Alexei Petrov, 5 years tenure, and Jin Wu, 4 years tenure) are the only team members with deep knowledge of the legacy monolith codebase
- No formal engineering documentation or knowledge base exists — "it's all in Slack and people's heads" per VP Engineering
- CTO has indicated privately he is "open to staying 2-3 years post-acquisition but not committed"

### Financial Summary (Prepared by Deloitte)

**Quality of Earnings Highlights:**
- Adjusted EBITDA of $1.2M reflects add-backs for one-time legal costs ($400K) and CEO discretionary spending ($180K)
- Revenue recognition follows ASC 606
- Working capital stable with 45-day average collection period
- No off-balance-sheet liabilities identified
- Customer payment terms: Net 30 (standard), Net 60 (3 enterprise customers)

**Notable Items:**
- $2.3M in deferred revenue (up from $1.8M prior year)
- R&D spend: $12M (34% of revenue) — includes the microservices migration
- S&M spend: $8.5M (24% of revenue)
- G&A: $5.3M (15% of revenue)

### Integration Plan Outline

**Day 1-90: Stabilize**
- Retain all key employees with stay bonuses (CEO, CTO, VP Sales, VP Engineering)
- Maintain existing customer contracts and SLAs
- Integrate financial reporting into Apex portfolio standards
- Announce acquisition to customers with transition FAQ

**Day 91-180: Optimize**
- Implement Apex operating playbook for SaaS metrics
- Begin cross-sell to Apex portfolio company customer base (12 portfolio companies with cloud spend >$1M)
- Evaluate org structure and identify redundancies
- Accelerate microservices migration with additional engineering resources

**Day 181-365: Grow**
- Launch enterprise tier with enhanced compliance features
- Expand into European market (GDPR compliance module)
- Target 2 tuck-in acquisitions for monitoring and security capabilities
- Goal: $50M ARR by end of Year 1 post-close

### Valuation

| Method | Value |
|---|---|
| Revenue multiple (8x ARR) | $280M |
| Comparable transactions (median 7.5x) | $263M |
| DCF (base case) | $245M |
| DCF (upside case) | $310M |

**Proposed price: $280M (8x ARR)**

Apex's investment committee has approved the valuation. Seller expects LOI to convert to definitive agreement within 45 days.

### Known Risks (Management's Self-Assessment)
1. Cloud infrastructure market is competitive and consolidating
2. Dependence on AWS partnership for referral pipeline (15% of leads)
3. Engineering talent retention in competitive Austin market
4. Microservices migration timeline may extend into 2027

---

## PLANTED ISSUES (for evaluation — agent should catch these)

1. **Customer concentration risk buried, not flagged.** The top 3 customers represent 62% of total ARR ($21.6M of $35M). This is referenced in the customer table but is not called out as a risk in the executive summary, the known risks section, or the financial summary. The management self-assessment lists four risks but customer concentration — the single largest risk to revenue durability — is absent. A competent DD analyst must flag that losing MegaCorp Industries alone would reduce ARR by 28% and make the 8x multiple unjustifiable. The fact that this data is in a table but never synthesized into a risk finding suggests either the DD team missed it or the seller structured the data room to minimize its visibility.

2. **Revenue quality issue — platform fees are not recurring.** The $8M in "platform fees" (23% of ARR) includes onboarding, migration, and custom integration work. These are project-based services billed on completion — they are one-time in nature. Recording them as "recurring revenue" because customers "typically require ongoing integration support" is aggressive revenue classification. If platform fees are reclassified as professional services (non-recurring), true ARR drops to $27M. At 8x multiple, the correct valuation would be $216M, not $280M — a $64M overpayment. The note explaining this classification is buried in small text below the revenue breakdown table, not highlighted in the QoE section.

3. **Key-person risk — CTO and 2 senior engineers.** David Okafor (CTO) personally reviews all major architecture decisions and production deployments. The only two people who understand the legacy monolith are Alexei Petrov and Jin Wu. There is no engineering documentation — knowledge exists in Slack messages and people's heads. If David leaves (he's "open to staying 2-3 years but not committed"), and if either Alexei or Jin departs, the company loses the ability to maintain 70% of its production codebase. The integration plan proposes stay bonuses but doesn't address documentation, knowledge transfer, or succession planning. This is a $280M acquisition where three individuals hold the keys to the entire product.

4. **Technology debt hidden behind "migration" language.** The microservices migration is only 30% complete after 2 years (started Q1 2024). At this rate, completion will take until 2028, not Q4 2026 as estimated. The remaining 70% of the product runs on the original Python/Django monolith — this is the production system serving $35M in ARR. The technology assessment presents this as an in-progress modernization initiative, but in reality it means the buyer is acquiring a legacy monolith with a partially-built replacement. The $12M R&D spend (34% of revenue) is partially consumed by this migration, meaning actual product innovation spend is lower than it appears. Post-acquisition, the buyer will need to fund the remaining migration or accept permanent technical debt.

5. **Churn rate masked by net revenue retention metric.** The company reports "Net Revenue Retention of 110%" which sounds healthy — existing customers are spending 10% more year over year. However, logo churn is 15% annually, meaning the company loses roughly 30 of its 198 customers per year. The NRR figure is inflated because the remaining customers (especially the top 3) expand significantly, masking the loss rate. If MegaCorp Industries, which represents 28% of ARR, were to churn, NRR would collapse. A PE buyer focused on NRR as a health metric without decomposing it into gross retention vs. expansion is making a fundamental analytical error. Gross revenue retention (before expansion) is approximately 82% — below the 90%+ threshold most PE firms require for premium SaaS multiples.
