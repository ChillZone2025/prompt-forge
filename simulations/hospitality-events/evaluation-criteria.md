# Evaluation Criteria: Hospitality & Events

## Overview

These criteria evaluate whether Hospitality & Events agents demonstrate real operational knowledge — the kind that separates someone who has run a hotel, managed a banquet, or built a revenue strategy from someone who read a textbook. A hotel GM, executive chef, or CMP-certified event planner should read the agent's output and think "this person has worked in my world."

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate
- **Revenue thinking tied to profitability, not just volume** — Filling rooms or selling tickets is meaningless without understanding net revenue, cost structure, and contribution margin. An agent that celebrates 95% occupancy without asking about ADR, channel cost, and labor efficiency is thinking like a front desk agent, not a manager.
- **Guest experience as a business driver** — Guest satisfaction is not a soft metric. SALT scores, NPS, review ratings, and repeat guest rates directly correlate with RevPAR premium and booking conversion. Agents must connect guest experience recommendations to financial outcomes.
- **Food safety as non-negotiable** — Any recommendation involving food service must account for allergen management, HACCP principles, temperature control, and health code compliance. "The chef will handle it" is never an acceptable answer for 400+ person events.
- **Labor law awareness** — Hospitality staffing recommendations must account for overtime rules, split shift premiums, tip pooling regulations, predictive scheduling requirements, and minor labor restrictions. Staffing plans that violate labor law are worse than understaffing.
- **Regulatory compliance reflexes** — Fire code occupancy limits, liquor licensing, ADA accessibility, health department codes, event permits, and occupancy tax are not optional. Agents must flag violations immediately, not as afterthoughts.
- **Vendor and contract literacy** — Understanding attrition clauses, F&B minimums, cancellation terms, service charges, and guarantee count implications. Reading the fine print is the event planner's job.

### Must Never
- Recommend or accept a floor plan that exceeds fire marshal occupancy limits.
- Dismiss allergen management as something the kitchen can "handle on the fly" at scale.
- Report gross OTA revenue as profit without netting commission costs.
- Accept a staffing ratio below industry standards for the service style without flagging the consequence.
- Approve event budgets with zero contingency allocation.
- Recommend blanket rate cuts without analyzing comp set positioning and long-term rate integrity effects.
- Ignore attrition clause enforcement when data shows systematic overages.
- Treat online reviews and reputation management as optional or secondary.

## Agent-Specific Criteria

### Event Planner (`event_plan`)
- Produces structured event timelines with critical-path dependencies identified.
- Catches fire code, ADA, and permitting issues before they become day-of problems.
- Builds BEOs with complete detail: timing, setup specs, menu, AV cues, staffing positions, and contingency protocols.
- Manages vendor coordination — identifies timeline conflicts (like AV setup requiring venue access before the contract allows).
- Calculates event P&L correctly: revenue minus all direct costs (food, labor, AV, rentals, entertainment, service charges, tax).
- Includes contingency budgets (10-15% for events over $50K) and explains why.
- Understands guarantee count vs. expected attendance vs. actual attendance — and the financial implications of each.
- Identifies when a venue is wrong for the event (capacity, configuration, access, infrastructure) and recommends alternatives rather than forcing a bad fit.

### Guest Experience Manager (`guest_exp`)
- Maps the complete guest journey: research, booking, pre-arrival, arrival, stay, departure, post-stay.
- Identifies friction points using data (survey scores, review sentiment, complaint logs) rather than assumptions.
- Connects guest satisfaction metrics (NPS, SALT, review ratings) to business outcomes (repeat rate, RevPAR premium, referral value).
- Designs guest recovery protocols with empowerment levels (what can the front desk agent comp without manager approval?).
- Understands the difference between fixing a problem and recovering a guest — speed and empathy matter more than the dollar value of the comp.
- Recommends reputation management strategy: review response timelines, response templates by complaint type, escalation protocols for public-facing issues.
- Builds loyalty and retention strategies that drive repeat business — email capture, post-stay engagement, return visit incentives.

### Menu Engineer (`menu_eng`)
- Applies the menu engineering matrix correctly (Stars, Plowhorses, Puzzles, Dogs) using actual sales mix and food cost data, not guesses.
- Calculates food cost percentage accurately and flags when it exceeds segment targets (fine dining 28-32%, casual 30-35%).
- Identifies allergen risks in menus and recommends protocols — especially for large-scale events where "handle it night-of" is unacceptable.
- Understands pour cost targets and beverage program profitability (spirits 18-24%, beer 20-28%, wine 30-40%).
- Recommends menu size appropriate to the concept — flags menus that are too large (inventory waste, execution complexity) or too narrow (guest satisfaction risk).
- Designs menus with ingredient overlap to control waste and reduce prep complexity.
- Accounts for dietary trends and requirements (vegetarian, vegan, gluten-free, halal, kosher) as part of menu design, not afterthoughts.
- Understands the relationship between menu engineering and kitchen labor — complex menus require more skilled (expensive) labor.

### Revenue Manager (`rev_mgmt`)
- Uses RevPAR, ADR, occupancy, and RPI as interconnected metrics — never in isolation. High occupancy with below-comp-set ADR is a pricing failure, not a success.
- Analyzes channel mix by net revenue contribution, not gross revenue share. A channel that produces 30% of revenue but costs 22% in commissions contributes less than one producing 15% of revenue at 4% cost.
- Builds demand forecasts using historical data, events calendar, booking pace, and comp set intelligence — not GM intuition.
- Implements rate fences and restrictions (MLOS, advance purchase, non-refundable) as tools to capture value during peak demand.
- Identifies and quantifies attrition clause enforcement failures as recoverable revenue.
- Recommends RMS technology appropriate to the property's size and sophistication, with realistic implementation timelines and ROI projections.
- Pushes back on blanket rate cuts — explains rate integrity, comp set positioning, and the long-term cost of training price-sensitive demand.
- Connects loyalty and guest retention to revenue strategy — repeat guests book direct (no commission), spend more on ancillary, and are less price-sensitive.

### Staff Scheduler (`staff_sched`)
- Builds staffing models based on historical demand curves by day-of-week and daypart, not monthly averages.
- Knows correct staffing ratios by service style: buffet (1:25-30), plated casual (1:15-20), plated formal/black-tie (1:10-12), cocktail reception (1:20-25).
- Accounts for cross-training depth — identifies single-point-of-failure positions and recommends cross-training plans.
- Calculates labor cost as a percentage of revenue and flags when it exceeds segment targets (hotels 25-30%, restaurants 28-35%).
- Incorporates labor law compliance: overtime thresholds, split shift premiums, predictive scheduling requirements, minor labor restrictions, and tip pooling rules.
- Plans for setup, service, and teardown labor — not just front-of-house during the event. Flip time between events requires separate labor allocation.
- Recommends scheduling technology (HotSchedules, 7shifts) with shift-swap, communication, and forecasting capabilities.
- Identifies understaffing risks before they become guest experience failures — slow service at a $500/plate dinner is unacceptable.

## Planted Issues Reference

### Scenario 1 — Revenue Management (mock-data/scenario-1.md)
Agents must catch these issues when analyzing the boutique hotel portfolio:

| # | Issue | Severity | Which Agent Should Catch |
|---|-------|----------|--------------------------|
| 1 | OTA commission masking true profitability (Salthaus reports gross revenue, 15-20% lower net) | Critical | `rev_mgmt` |
| 2 | Urban property (The Lark) under-pricing during high demand (89% occ, ADR $30 below comp set) | High | `rev_mgmt` |
| 3 | Mountain property (Ridgeline) has no demand forecasting (GM sets rates by "feel") | High | `rev_mgmt` |
| 4 | Group attrition not enforced (35% actual vs. 10% contractual, $178K lost annually) | Critical | `rev_mgmt`, `event_plan` |
| 5 | No length-of-stay restrictions during peak periods | Medium | `rev_mgmt` |
| 6 | Loyalty/retention crisis (8% repeat rate vs. 25-35% benchmark, no CRM or loyalty program) | High | `rev_mgmt`, `guest_exp` |

### Scenario 2 — Corporate Gala (mock-data/scenario-2.md)
Agents must catch these issues when reviewing the event plan:

| # | Issue | Severity | Which Agent Should Catch |
|---|-------|----------|--------------------------|
| 1 | Fire code violation (446 people vs. 380 max occupancy in banquet config) | Critical — event cannot proceed as planned | `event_plan`, `staff_sched` |
| 2 | No allergen protocol (shellfish in 2 of 3 courses, no pre-collection, 400 guests) | Critical — liability and safety | `menu_eng`, `event_plan`, `guest_exp` |
| 3 | Zero contingency budget ($0 of $200K, standard is 10-15%) | High | `event_plan` |
| 4 | A/V setup timeline impossible (needs 11 AM access, venue available at 2 PM) | High — setup will fail | `event_plan` |
| 5 | Understaffed for plated service (1:25 ratio vs. 1:10-12 standard for black-tie) | High — guest experience failure | `staff_sched`, `event_plan`, `guest_exp` |

## Red Flags (Automatic Score Reduction)

The following responses indicate fundamental knowledge gaps and should result in significant score penalties:

- **Ignoring fire code occupancy limits** — Accepting a floor plan that exceeds posted occupancy or dismissing the overage as minor. Fire code is absolute. There is no "we'll be fine."
- **Accepting "the chef will handle allergies night-of"** — For any event over 50 guests, allergen management must be systematized, not improvised. Agreeing with the client that advance collection is unnecessary shows dangerous ignorance of food safety liability.
- **Approving 1:25 server ratio for plated black-tie service** — This is buffet staffing for a plated gala. Any agent that accepts this ratio without flagging it does not understand banquet operations.
- **Recommending blanket rate cuts without analysis** — Cutting rates 20% across a portfolio without analyzing comp set positioning, demand elasticity, and long-term rate integrity effects is the most common mistake in hotel revenue management. An agent that agrees with ownership is not a revenue manager.
- **Reporting gross OTA revenue as profitability** — Treating a $5.3M gross revenue figure as real profit when $812K is commission to OTAs demonstrates a failure to understand distribution cost. Net revenue is the only meaningful measure.
- **Ignoring attrition enforcement** — $178K in annual recoverable revenue from contractual attrition penalties is not a "nice to have." It's the single fastest revenue recovery lever in the portfolio. Overlooking it shows a lack of operational awareness.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | Operational expert. Catches all planted issues, quantifies financial impact, uses correct industry metrics and ratios, provides actionable recommendations with realistic timelines. A hotel GM or CMP planner would trust this agent's judgment. |
| 7-8 | Strong practitioner. Catches most planted issues (minimum 4 of 6 in Scenario 1, 4 of 5 in Scenario 2), uses industry terminology correctly, gives practical recommendations. Minor gaps in depth or specificity. |
| 5-6 | Surface-level knowledge. Gets basic concepts right (RevPAR, food cost) but misses critical planted issues (fire code, allergen protocol), uses vague recommendations ("consider adjusting pricing"), doesn't quantify financial impact. |
| 3-4 | Generic business advice. Recommendations could apply to any industry. Doesn't use hospitality-specific metrics, frameworks, or terminology. No awareness of regulatory or safety requirements. |
| 1-2 | Wrong or dangerous. Accepts fire code violations, dismisses allergen risks, recommends blanket rate cuts, approves understaffed service plans. Following this agent's advice would create liability, lose revenue, or harm guests. |

## Pass Thresholds
- **Tier 2 (Conversation Test):** Minimum 7.0/10
- **Tier 3 (Full Simulation):** Minimum 8.0/10
