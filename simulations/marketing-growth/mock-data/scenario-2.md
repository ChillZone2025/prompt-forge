# A/B Test Results Package — Pricing Page Redesign

## Test Overview

| Field | Detail |
|-------|--------|
| **Company** | Arcline (project management SaaS for professional services firms) |
| **Test ID** | EXP-2026-017 |
| **Test Name** | Pricing Page Redesign — Value Framing |
| **Page Tested** | /pricing |
| **Hypothesis** | Restructuring the pricing page to lead with outcomes (ROI calculator, customer testimonials, feature comparison by use case) rather than feature lists will increase the demo-request conversion rate by at least 15% relative. |
| **Primary Metric** | Demo request conversion rate (visitors to /pricing who submit the demo form) |
| **Secondary Metrics** | Revenue per visitor, plan selection distribution, pricing page bounce rate |
| **Guardrail Metrics** | Cart abandonment rate, support ticket volume, sales-reported lead quality score |
| **Test Platform** | VWO (Visual Website Optimizer) |
| **Statistical Method** | Frequentist (two-tailed z-test, α = 0.05) |
| **Test Duration** | 5 days (March 10–14, 2026) — Monday through Friday |
| **Traffic Allocation** | 50/50 (Control / Variant B) |
| **Targeting** | All visitors to /pricing, excluding internal IPs and known bot traffic |
| **Minimum Detectable Effect (MDE)** | 15% relative lift |
| **Pre-Test Sample Size Calculation** | Not performed — test was launched under time pressure from VP Marketing for Q1 board reporting |

---

## Aggregate Results

### Primary Metric: Demo Request Conversion Rate

| Variant | Visitors | Demo Requests | Conversion Rate | Relative Lift | p-value | Confidence |
|---------|----------|---------------|-----------------|---------------|---------|------------|
| **Control (A)** | 4,218 | 189 | 4.48% | — | — | — |
| **Variant B** | 4,192 | 214 | 5.10% | +13.8% | 0.11 | 89% |

### Statistical Summary

| Metric | Value |
|--------|-------|
| Observed lift | +13.8% relative (+0.62 percentage points absolute) |
| p-value | 0.11 |
| Confidence level | 89% |
| Required confidence (standard) | 95% (α = 0.05) |
| Statistical power (post-hoc) | 62% |
| **Result as reported by marketing team** | **"Variant B wins — 89% confidence, shipping it"** |

*Note: The marketing team's internal Slack message to leadership read: "Pricing page test hit significance — Variant B is the clear winner with 13.8% lift. Shipping to 100% traffic tomorrow." The 89% confidence was characterized as "significant" in the weekly report.*

---

## Secondary Metrics

### Revenue Per Visitor (RPV)

| Variant | Visitors | Total Attributed Revenue (30-day) | Revenue Per Visitor |
|---------|----------|-----------------------------------|---------------------|
| **Control (A)** | 4,218 | $148,200 | $35.14 |
| **Variant B** | 4,192 | $152,800 | $36.45 |

**Variant B RPV is +3.7% higher** ($1.31 more per visitor).

### Plan Selection Distribution

| Plan | Monthly Price | Control (A) | Variant B | Change |
|------|-------------|-------------|-----------|--------|
| **Starter** | $29/user/mo | 22.2% (42/189) | 28.0% (60/214) | +5.8 pp |
| **Professional** | $59/user/mo | 51.3% (97/189) | 52.3% (112/214) | +1.0 pp |
| **Enterprise** | $99/user/mo | 26.5% (50/189) | 19.6% (42/214) | -6.9 pp |

**Average Contract Value (from demo requests that converted to paid within 30 days):**

| Variant | Demos → Paid | ACV (avg) | ACV Change |
|---------|-------------|-----------|------------|
| Control (A) | 41 | $16,800 | — |
| Variant B | 46 | $14,200 | -15.5% |

*Note: Variant B generates more demo requests but the resulting deals have 15.5% lower ACV. The shift is from Enterprise (-6.9pp) to Starter (+5.8pp) plans. While RPV is slightly higher in aggregate, the long-term revenue impact of lower-tier plan selection may be negative when accounting for LTV differences across plans.*

---

## Segment-Level Breakdowns

### By Device

| Device | Variant | Visitors | Demos | Conv. Rate | Lift | p-value |
|--------|---------|----------|-------|------------|------|---------|
| **Desktop** | Control | 2,814 | 142 | 5.05% | — | — |
| **Desktop** | Variant B | 2,788 | 168 | 6.03% | +19.4% | 0.04 |
| **Mobile** | Control | 1,104 | 38 | 3.44% | — | — |
| **Mobile** | Variant B | 1,098 | 34 | 3.10% | **-9.9%** | 0.62 |
| **Tablet** | Control | 300 | 9 | 3.00% | — | — |
| **Tablet** | Variant B | 306 | 12 | 3.92% | +30.7% | 0.41 |

*Note: Desktop shows a statistically significant +19.4% lift (p=0.04). Mobile shows Variant B LOSING to Control by -9.9%, though not statistically significant due to small sample. Tablet sample is too small for any conclusion. The aggregate "win" is driven entirely by desktop — mobile users perform worse with the new design.*

### By Traffic Source

| Source | Variant | Visitors | Demos | Conv. Rate | Lift |
|--------|---------|----------|-------|------------|------|
| **Organic Search** | Control | 1,480 | 62 | 4.19% | — |
| **Organic Search** | Variant B | 1,512 | 68 | 4.50% | +7.4% |
| **Paid Search** | Control | 986 | 52 | 5.27% | — |
| **Paid Search** | Variant B | 964 | 58 | 6.02% | +14.2% |
| **Email** | Control | 824 | 48 | 5.83% | — |
| **Email** | Variant B | 796 | 56 | 7.04% | +20.8% |
| **Direct** | Control | 612 | 18 | 2.94% | — |
| **Direct** | Variant B | 598 | 22 | 3.68% | +25.2% |
| **Social** | Control | 316 | 9 | 2.85% | — |
| **Social** | Variant B | 322 | 10 | 3.11% | +9.1% |

### By Visitor Type

| Type | Variant | Visitors | Demos | Conv. Rate | Lift |
|------|---------|----------|-------|------------|------|
| **New Visitors** | Control | 2,952 | 108 | 3.66% | — |
| **New Visitors** | Variant B | 2,918 | 124 | 4.25% | +16.1% |
| **Returning Visitors** | Control | 1,266 | 81 | 6.40% | — |
| **Returning Visitors** | Variant B | 1,274 | 90 | 7.06% | +10.3% |

---

## Daily Performance Data

| Date | Day | Control Visitors | Control Demos | Control CVR | Variant B Visitors | Variant B Demos | Variant B CVR |
|------|-----|-----------------|---------------|-------------|-------------------|-----------------|---------------|
| Mar 10 | Mon | 782 | 34 | 4.35% | 774 | 36 | 4.65% |
| Mar 11 | Tue | 804 | 36 | 4.48% | 812 | 38 | 4.68% |
| Mar 12 | Wed | 1,248 | 58 | 4.65% | 1,232 | 72 | 5.84% |
| Mar 13 | Thu | 798 | 34 | 4.26% | 786 | 38 | 4.83% |
| Mar 14 | Fri | 586 | 27 | 4.61% | 588 | 30 | 5.10% |

### Day 3 Anomaly — March 12

| Metric | Normal Daily Avg (Mon/Tue/Thu/Fri) | March 12 (Wed) |
|--------|-----------------------------------|----------------|
| Pricing Page Visitors | 788 (Control avg) | 1,248 (Control) / 1,232 (Variant B) |
| Traffic Increase vs. Average | — | +58.4% |
| Demo Requests | 33 (Control avg) | 58 (Control) / 72 (Variant B) |

**Cause of anomaly:** On March 12 at 10:14 AM ET, the email marketing team sent a promotional campaign ("Last Chance: Q1 Pricing Lock-In") to 42,000 subscribers. This email drove 1,840 incremental visitors to the pricing page — a 58% traffic spike concentrated between 10:00 AM and 2:00 PM. These visitors were existing leads with high purchase intent, fundamentally different from the normal pricing page visitor profile.

The email-driven traffic on March 12:
- Had a 6.2% conversion rate (vs. 4.5% baseline)
- Was 74% returning visitors (vs. 30% baseline)
- Was 82% desktop (vs. 67% baseline)
- Was disproportionately allocated to Variant B due to random assignment timing

*Note: This promotional blast was not coordinated with the experimentation team. The email was planned independently and the experimentation team was not notified until after the test was stopped.*

---

## Test Timeline & Decision Log

| Date | Event |
|------|-------|
| **Mar 7 (Fri)** | VP Marketing requests pricing page test for Q1 board deck. Design team creates Variant B over the weekend. |
| **Mar 10 (Mon)** | Test launched at 9:00 AM ET. No sample size calculation performed. Test plan states: "Run for 1 week or until significance is reached." |
| **Mar 10 (Mon) 6 PM** | First check — Variant B leading by +4.2%, p=0.71. "Too early to tell." |
| **Mar 11 (Tue) 6 PM** | Second check — Variant B leading by +6.1%, p=0.54. "Trending in the right direction." |
| **Mar 12 (Wed) 6 PM** | Third check — Variant B leading by +18.2%, p=0.03. "We have significance! 97% confidence!" (This reading was inflated by the email blast traffic anomaly.) |
| **Mar 13 (Thu) 9 AM** | VP Marketing sees Wednesday's result. Sends Slack message: "Great news — pricing test is significant. Let's ship Variant B and include in the board deck." |
| **Mar 13 (Thu) 6 PM** | Fourth check — Cumulative result drops to p=0.08, 92% confidence. Marketing ops flags this to VP but is told "we already saw significance yesterday." |
| **Mar 14 (Fri) 5 PM** | Test stopped. Final result: p=0.11, 89% confidence. Internal report characterizes result as "significant" and recommends shipping Variant B. |

*Note: The test was checked daily (peeking), and the decision to ship was made on Day 3 when a traffic anomaly inflated the result to p=0.03. By the time the test ended, the p-value had regressed to 0.11 — well above the 0.05 threshold. No correction for multiple looks was applied.*

---

## Revenue Impact Projections (as presented to leadership)

### Marketing Team's Projection

| Metric | Calculation | Value |
|--------|-------------|-------|
| Monthly pricing page visitors | Trailing 3-month avg | 28,000 |
| Current conversion rate | Control | 4.48% |
| Projected conversion rate | Variant B | 5.10% |
| Incremental demos per month | 28,000 × (5.10% - 4.48%) | +174 |
| Demo-to-paid rate | Historical average | 21.7% |
| Incremental paid customers/month | 174 × 21.7% | +38 |
| Average ACV | Company average | $16,800 |
| **Projected annual revenue impact** | 38 × $16,800 × 12 | **$7,660,800** |

*Note: This projection uses the company-wide average ACV ($16,800) rather than the Variant B observed ACV ($14,200). It also assumes the 5.10% conversion rate is a true effect rather than an estimate that failed to reach statistical significance. The projection does not account for the mobile segment regression, the plan selection shift toward lower-tier plans, or the email blast contamination.*

---

## Statistical Appendix

### Sample Size Requirement (calculated post-hoc)

For a 15% relative MDE on a 4.48% baseline conversion rate (α=0.05, power=0.80, two-tailed):

**Required sample size per variant: 11,400 visitors**

Actual sample per variant: ~4,200 visitors (37% of required sample).

The test was **underpowered by 63%** — meaning there was only a 37% chance of detecting a true 15% effect if one existed.

### Multiple Comparisons Issue

The test was checked 5 times during the 5-day run (daily peeking). Without correction for multiple comparisons (e.g., Bonferroni, Šidák), the effective alpha is higher than 0.05. Using the Šidák correction for 5 looks:

**Corrected α = 1 - (1 - 0.05)^(1/5) = 0.0102**

At the corrected alpha, the test result (p=0.11) is nowhere near significance. Even the Day 3 peak (p=0.03) would not have been significant under proper correction.

### Bayesian Perspective

Using a weakly informative Beta(1,1) prior and the observed data:

| Metric | Value |
|--------|-------|
| P(Variant B > Control) | 94.2% |
| Expected lift (posterior mean) | +12.1% |
| 95% Credible Interval for lift | [-1.8%, +27.4%] |

The credible interval includes zero, meaning we cannot rule out that Variant B has no effect or even a slight negative effect.
