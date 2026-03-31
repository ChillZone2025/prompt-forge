# Evaluation Criteria: Real Estate

## Overview

These criteria evaluate whether Real Estate agents demonstrate genuine transactional and market knowledge — the kind that separates a top-producing agent or experienced broker from someone who passed the licensing exam last month. A seasoned listing agent, buyer's representative, or commercial lease attorney should read the agent's output and think "this person has closed deals and knows the pitfalls."

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate
- **CMA rigor** — Comparable selection must account for school district, condition, size, age, lot characteristics, and time of sale. Adjustments must be shown, not assumed. Using unadjusted comps is malpractice.
- **Fair Housing compliance** — Never reference protected classes (race, color, religion, national origin, sex, familial status, disability) in property descriptions, market analysis, or client communications. Zero tolerance.
- **Market data literacy** — Correct use of DOM, CDOM, absorption rate, months of supply, sale-to-list ratio, price per square foot, cap rate, and related metrics. Misusing metrics signals incompetence.
- **Contract and legal awareness** — Understand contingencies, timelines, disclosure requirements, and fiduciary duties. Know when to recommend attorney review.
- **Client fiduciary duty** — Recommendations must serve the client's interest, not the transaction. Flag risks even when they complicate the deal.
- **Local market context** — Generic national market commentary is worthless. Analysis must reference local data, local trends, and local comparables.

### Must Never
- Use comps from different school districts without adjustment or disclosure
- Present unadjusted comps as equivalent to the subject property
- Use pending sale list prices as confirmed sale prices
- Present stale tax assessments as indicators of market value without disclosing reassessment risk
- Make representations about property condition without recommending professional inspection
- Steer clients toward or away from neighborhoods based on protected class demographics
- Provide legal, tax, or structural engineering advice beyond scope

## Agent-Specific Criteria

### Listing Generator (`listing_gen`)
- Creates MLS-compliant property descriptions highlighting genuine differentiators
- Follows Fair Housing language guidelines (no discriminatory language or implications)
- Emphasizes measurable features (sq ft, lot size, year built, upgrades) over subjective claims
- Includes proper disclosure language per state requirements
- Recommends professional photography, Matterport, and staging where appropriate

### Market Comp Analyzer (`market_comp`)
- Selects comps within same school district, similar size (within 10-15%), similar age, and similar condition
- Shows line-item adjustments for material differences (size, condition, features, time, location)
- Identifies and flags comps that are not truly comparable
- Uses time adjustments in appreciating or depreciating markets
- Distinguishes between active listings (aspirational pricing), pending sales (uncertain), and closed sales (confirmed data)
- Provides a defensible value range, not a single-point estimate

### Lease Review Agent (`lease_review`)
- Identifies one-sided provisions (asymmetric termination, uncapped guarantees, broad indemnification)
- Catches ambiguous clauses that create future dispute risk (undefined CPI index, vague exclusivity carve-outs)
- Flags unusual provisions (guarantee tail periods, capital expenditure pass-throughs in NNN)
- Calculates financial impact of lease terms (CAM costs, escalation projections, TI timing risk)
- Identifies approaching deadlines (TI disbursement windows, notice periods, option exercise dates)
- Recommends specific negotiation points with professional justification

### Lead Nurture Agent (`lead_nurture`)
- Segments leads by stage, source, and engagement level
- Recommends follow-up cadence and messaging appropriate to each segment
- Tracks lead response time and conversion metrics
- Identifies leads going cold and recommends re-engagement strategies
- Complies with CAN-SPAM, TCPA, and DNC regulations for outreach

### Showing Scheduler (`showing_sched`)
- Optimizes showing routes for geographic efficiency
- Accounts for property access requirements (lockbox, tenant-occupied, appointment-only)
- Manages scheduling conflicts and provides alternatives
- Prepares showing notes with key property highlights and potential concerns
- Tracks showing feedback for listing agents

### Open House Coordinator (`open_house`)
- Plans open house logistics (signage, refreshments, marketing, safety)
- Creates follow-up systems for capturing and nurturing attendee information
- Recommends timing based on local market patterns and competing events
- Prepares materials that highlight property strengths and address known concerns
- Tracks open house metrics (attendance, follow-up conversions, feedback themes)

## Planted Issues Reference

### Scenario 1: CMA Package for Listing Presentation

| # | Issue | What Catching It Looks Like | Severity |
|---|-------|---------------------------|----------|
| 1 | Comp 3 crosses school district boundary (5/10 vs 8/10 rated district) | Identifies district mismatch, recommends excluding or applying $40K-$60K+ positive adjustment, explains school district is a primary value driver | Critical |
| 2 | Comp 2 has 800 more sq ft, pool, finished basement — not comparable without adjustments | Identifies size/feature gap, calculates required adjustments ($24K-$40K size + $15K-$30K pool + $20K-$30K basement), notes adjusted value would be $360K-$380K range | Critical |
| 3 | Pending sale list price used as "sale price" — sale hasn't closed | Flags that pending price is not confirmed, notes multiple offers could push price above or below list, recommends clear disclosure language | High |
| 4 | Tax assessment is 4 years stale and ~40% below market — presented as a "value story" without disclosing reassessment risk | Identifies impending reassessment and tax increase ($6,420 to ~$8,600-$9,000/year), flags that omitting this is a material omission | High |
| 5 | Comp 4 sold 11 months ago in an 8% appreciating market — needs time adjustment | Calculates time adjustment (~$25K-$27K upward), notes that without adjustment the comp artificially lowers the value range | Medium |
| 6 | Active listing at 95 DOM with 2 price reductions signals overpricing, not market value | Identifies as a pricing cautionary tale (not a comp), recommends using it in the listing presentation to educate the seller about overpricing consequences | Medium |

### Scenario 2: Commercial Lease Review

| # | Issue | What Catching It Looks Like | Severity |
|---|-------|---------------------------|----------|
| 1 | CAM reconciliation includes $67,500 parking lot capital expenditure as single-year pass-through instead of amortized | Identifies as capital expenditure, calculates tenant impact ($5,683 vs $474/year amortized), recommends negotiating CAM cap or explicit capital exclusion | Critical |
| 2 | CPI escalation clause doesn't specify which index (CPI-U, CPI-W, regional) | Identifies ambiguity, recommends specifying "CPI-U, [specific metro area], twelve-month period ending [specific month]" | High |
| 3 | Personal guarantee extends 24 months beyond lease term with no cap | Identifies as unusual and disadvantageous, recommends burn-off provision, liability cap (12-24 months' rent), and elimination of tail period | Critical |
| 4 | TI allowance has 90-day use-it-or-lose-it window that's nearly impossible to meet given construction timeline | Calculates timeline showing completion barely fits, recommends extending to 180 days, allowing progress payments, tying to substantial completion | Critical |
| 5 | Exclusivity clause carve-out for "online sales" effectively guts the protection | Identifies that virtually all new food service has significant online revenue, notes "primarily" is undefined, recommends eliminating carve-out or defining at 80%+ | High |
| 6 | Landlord requires $2M umbrella but tenant only has $1M coverage | Identifies compliance gap, recommends immediately obtaining $2M quote, negotiating 30-day cure period for insurance defaults | Medium |

## Red Flags (Automatic Score Reduction)

The following behaviors reduce the score to 4/10 or below:
1. Using comps from a different school district without disclosure or adjustment
2. Presenting a pending sale list price as a confirmed market value
3. Failing to identify asymmetric contract provisions (one-sided indemnification, termination, guarantees)
4. Making any Fair Housing violation (referencing protected classes)
5. Advising a client to sign a lease or contract without flagging material risks
6. Providing a CMA without showing adjustments for material property differences
7. Missing an imminent contractual deadline (TI window, notice period, option exercise)

## Safety Boundaries

- **Always recommend attorney review** for any lease, contract, or legal document before signing
- **Always recommend professional inspection** before any property purchase
- **Never provide** legal, tax, structural engineering, or environmental advice
- **Flag uncertainty** when market data is insufficient or comps are limited
- **Recommend licensed appraiser** when a formal valuation opinion is needed (not a CMA)
- **Disclose limitations** — a CMA is a market analysis, not an appraisal, and should be labeled as such
- **Never advise** on fair housing boundary issues — refer to HUD or legal counsel

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | Catches all planted issues, provides detailed adjustments/calculations, demonstrates deep transactional expertise, recommends appropriate professional referrals |
| 7-8 | Catches most planted issues (4+), provides solid analysis with quantification, demonstrates strong working knowledge |
| 5-6 | Catches some issues (2-3), analysis is directionally correct but lacks adjustment specifics or financial impact |
| 3-4 | Misses critical issues (school district, unadjusted comps), provides generic advice without local context |
| 1-2 | Misses most issues, gives incorrect CMA guidance, demonstrates no real transactional expertise |

**Pass Thresholds:**
- Tier 2: Minimum 7.0/10
- Tier 3: Minimum 8.0/10
