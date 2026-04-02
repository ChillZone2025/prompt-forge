# Churn Analysis Data — FlowMetrics B2B Analytics Platform

## Company Profile
- **Product:** FlowMetrics — B2B analytics and dashboard platform
- **ARR:** $4.2M
- **Customers:** 320 (180 SMB, 95 Mid-Market, 45 Enterprise)
- **Pricing:** SMB $99/mo, Mid-Market $499/mo, Enterprise $1,499/mo+
- **Founded:** 2022, launched product 2023
- **Team:** 42 employees (18 engineering, 6 product/design, 8 sales, 5 CS, 5 other)
- **Key Feature:** Dashboard builder — drag-and-drop analytics dashboards connected to any data source

---

## Monthly Churn Trend (Logo Churn)

| Month | Starting Customers | Churned | Churn Rate | Net New | Ending |
|-------|-------------------|---------|-----------|---------|--------|
| Oct 2025 | 298 | 6 | 2.0% | 14 | 306 |
| Nov 2025 | 306 | 7 | 2.3% | 12 | 311 |
| Dec 2025 | 311 | 8 | 2.6% | 10 | 313 |
| Jan 2026 | 313 | 9 | 2.9% | 11 | 315 |
| Feb 2026 | 315 | 11 | 3.5% | 9 | 313 |
| Mar 2026 | 313 | 12 | 3.8% | 8 | 309 |

**Trend: Churn accelerating. Net new customers declining. Customer count peaked in January and is now contracting.**

## Revenue Churn (Monthly)

| Month | Starting MRR | Churned MRR | Contraction MRR | Expansion MRR | Net MRR Change | Revenue Churn Rate |
|-------|-------------|-------------|-----------------|---------------|----------------|-------------------|
| Oct 2025 | $328,000 | $8,200 | $2,100 | $6,800 | -$3,500 | 3.1% |
| Nov 2025 | $324,500 | $9,400 | $3,200 | $7,100 | -$5,500 | 3.9% |
| Dec 2025 | $319,000 | $11,800 | $2,800 | $5,200 | -$9,400 | 4.6% |
| Jan 2026 | $309,600 | $12,400 | $3,600 | $6,800 | -$9,200 | 5.2% |
| Feb 2026 | $300,400 | $14,200 | $4,100 | $5,400 | -$12,900 | 6.1% |
| Mar 2026 | $287,500 | $15,000 | $3,800 | $4,200 | -$14,600 | 6.5% |

**Revenue churn worse than logo churn — losing larger accounts (Mid-Market and Enterprise).**

---

## Cohort Retention (Monthly — Percentage of Cohort Still Active)

| Cohort | Month 1 | Month 2 | Month 3 | Month 6 | Month 9 | Month 12 |
|--------|---------|---------|---------|---------|---------|----------|
| Jan 2025 | 96% | 91% | 86% | 78% | 72% | 68% |
| Apr 2025 | 95% | 89% | 84% | 75% | 69% | — |
| Jul 2025 | 94% | 87% | 80% | 70% | — | — |
| Oct 2025 (post-redesign) | 91% | 82% | 73% | — | — | — |
| Jan 2026 (post-redesign) | 88% | 78% | — | — | — | — |

**Note:** The September 2025 UI redesign ("Project Refresh") simplified the interface. Post-redesign cohorts show worse retention at every interval.

---

## Feature Usage — Churned vs. Retained Customers (Last 6 Months)

| Feature | Retained Users | Churned Users | Delta | Notes |
|---------|---------------|---------------|-------|-------|
| Dashboard builder (core feature) | 89% | 34% | -55% | **Strongest retention predictor.** Users who build ≥1 dashboard in first 14 days retain at 91%. |
| Data source connections (≥2) | 76% | 28% | -48% | Connecting multiple data sources correlates with activation |
| Scheduled reports | 62% | 12% | -50% | High-value feature — used by retained mid-market/enterprise |
| Alerts & notifications | 54% | 18% | -36% | Usage growing among retained users |
| Team sharing | 41% | 8% | -33% | Enterprise feature — low adoption overall |
| API access | 22% | 4% | -18% | Developer feature — niche but very sticky |
| CSV export | 68% | 72% | +4% | **Churned users export MORE** — extracting data before leaving? |

---

## Onboarding Funnel — Pre-Redesign vs. Post-Redesign

| Step | Pre-Redesign (Jun-Aug 2025) | Post-Redesign (Oct-Mar 2026) | Change |
|------|---------------------------|------------------------------|--------|
| 1. Account creation | 100% | 100% | — |
| 2. Email verification | 94% | 92% | -2% |
| 3. Connect first data source | 82% | 71% | **-11%** |
| 4. Complete guided setup | 72% | 58% | **-14%** |
| 5. Build first dashboard | 68% | 41% | **-27%** |
| 6. Invite team member | 38% | 29% | -9% |
| 7. Set up first scheduled report | 24% | 14% | -10% |

**Biggest drops at steps 3-5 — the critical activation sequence. Post-redesign, guided setup completion dropped 14 points and dashboard creation dropped 27 points.**

---

## NPS by Segment (Last Survey: February 2026, 248 respondents)

| Segment | Respondents | Promoters (9-10) | Passives (7-8) | Detractors (0-6) | NPS |
|---------|------------|-------------------|----------------|-------------------|-----|
| SMB | 124 | 48% | 32% | 20% | +28 |
| Mid-Market | 66 | 39% | 29% | 32% | +7 |
| Enterprise | 58 | 36% | 19% | 45% | **-9** |
| **Overall** | **248** | **42%** | **28%** | **30%** | **+12** |

**Previous survey (August 2025): Overall NPS +34. Enterprise NPS +42. Enterprise dropped 51 points in 6 months.**

### Top NPS Detractor Comments (Enterprise, Selected)
- "Support used to respond in 2 hours. Now it takes 8+ hours and sometimes we don't hear back at all."
- "We were promised custom integrations during the sales process. Six months later, still nothing."
- "The new UI is pretty but I can't find anything. Where did the advanced query builder go?"
- "We pay $1,499/month and get the same support as someone paying $99."
- "Your competitor [DataWeave] just shipped the exact feature we've been requesting for a year."

---

## Support Ticket Analysis (Last 6 Months)

| Category | Tickets (6mo) | % of Total | Trend | Avg Resolution Time |
|----------|--------------|-----------|-------|-------------------|
| Onboarding help ("how do I...") | 842 | 42% | ↑ 65% since redesign | 4.2 hours |
| Bug reports | 324 | 16% | Stable | 12.8 hours |
| Feature requests | 286 | 14% | ↑ 22% | N/A |
| Data source connectivity issues | 248 | 12% | ↑ 18% | 6.4 hours |
| Billing / account management | 186 | 9% | Stable | 2.1 hours |
| "Where is [feature]?" after redesign | 128 | 6% | NEW category (post-redesign) | 1.8 hours |

**Total tickets: 2,014 (6 months). Onboarding tickets up 65% since the redesign. A new category emerged: users can't find features that were moved or renamed.**

### Support Response Time (SLA: 2 hours for Enterprise, 8 hours for Mid-Market, 24 hours for SMB)

| Month | Enterprise Avg | Enterprise SLA Met | Mid-Market Avg | SMB Avg |
|-------|---------------|-------------------|---------------|---------|
| Oct 2025 | 2.4 hrs | 78% | 6.2 hrs | 14 hrs |
| Nov 2025 | 3.1 hrs | 64% | 7.8 hrs | 18 hrs |
| Dec 2025 | 4.8 hrs | 52% | 9.4 hrs | 22 hrs |
| Jan 2026 | 6.2 hrs | 38% | 11.6 hrs | 28 hrs |
| Feb 2026 | 7.8 hrs | 24% | 14.2 hrs | 32 hrs |
| Mar 2026 | 8.4 hrs | 21% | 16.1 hrs | 36 hrs |

**Enterprise SLA compliance dropped from 78% to 21% in 6 months. Support team has not grown — same 5 CS reps handling 40% more tickets due to onboarding surge.**

---

## Cancellation Survey Results (Last 90 Days, 32 Responses)

| Reason | Count | % | Representative Quote |
|--------|-------|---|---------------------|
| "Couldn't get value from the product" | 9 | 28% | "I spent 3 hours trying to build a dashboard and gave up." |
| "Too expensive for what we use" | 7 | 22% | "We only used the CSV export. Not worth $499/month." |
| "Switched to competitor" | 6 | 19% | "DataWeave has the same features at half the price and better support." |
| "Support too slow" | 5 | 16% | "Filed a critical bug and didn't hear back for 3 days." |
| "Missing features we need" | 3 | 9% | "No Snowflake connector. That was a dealbreaker." |
| "Company budget cuts" | 2 | 6% | "Nothing wrong with the product — just budget." |

---

## PLANTED ISSUES (for evaluation — agent should catch these)

### Issue 1 — Onboarding Redesign Caused Activation Collapse
The September 2025 UI redesign ("Project Refresh") directly correlated with a drop in onboarding completion (72% → 58%) and dashboard creation (68% → 41%). Dashboard builder usage is the #1 retention predictor (91% retention for users who build a dashboard in first 14 days). The redesign removed or relocated the guided setup flow, and 6% of support tickets are now a new category: users can't find features that moved. The VP of Engineering's claim that users "don't need" the guided setup is contradicted by the data — post-redesign cohorts have worse retention at every interval.

### Issue 2 — Enterprise Support SLA Collapse
Enterprise support response time degraded from 2.4 hours to 8.4 hours (250% increase) over 6 months. SLA compliance dropped from 78% to 21%. Enterprise NPS dropped from +42 to -9. Enterprise customers pay 15x the SMB price ($1,499 vs $99) and expect premium support. The support team (5 reps) has not grown despite a 65% increase in ticket volume driven by the onboarding redesign. The support crisis is both a cause of enterprise churn AND a symptom of the onboarding problem.

### Issue 3 — CSV Export Usage as Leading Churn Indicator
Churned users export MORE CSV data than retained users (72% vs 68%). This counterintuitive finding suggests users are extracting their data before canceling — a leading indicator of impending churn. The product should track CSV export frequency as an early warning signal and trigger a CS intervention when export activity spikes (e.g., >3 exports in a week by an account that typically does 1/month).

### Issue 4 — Revenue Churn Worse Than Logo Churn (Losing Larger Accounts)
Monthly revenue churn (6.5%) is significantly worse than logo churn (3.8%), meaning the company is disproportionately losing higher-value customers (Mid-Market and Enterprise). Enterprise NPS is -9. The product is retaining SMB customers (lower ARPU) while losing the accounts that drive the majority of revenue. This trajectory leads to ARR contraction even if logo churn stabilizes.

### Issue 5 — Competitor Threat: DataWeave
6 of 32 cancellation respondents (19%) explicitly cited switching to DataWeave. NPS detractors mention DataWeave shipping features FlowMetrics has been requested to build. DataWeave is positioned as "same features, half the price, better support." This is a competitive displacement pattern — not a market contraction. The response should include competitive analysis and a specific plan to differentiate.

### Issue 6 — Pricing-Value Mismatch in Mid-Market
22% of cancellations cite "too expensive for what we use" — with the representative quote being "$499/month for CSV export." This suggests some Mid-Market customers are on the wrong plan or aren't being activated into the features that justify the price. The product should analyze feature usage by plan tier and identify customers who are paying for features they're not using — these are prime contraction/churn risks. Usage-based pricing or a value-aligned tier restructure may be needed.
