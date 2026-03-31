# Simulation Scenarios: Real Estate

> Multi-turn conversation scripts for testing agents in the Real Estate industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — CMA Package for Listing Presentation

### Agents Tested
`listing_gen`, `market_comp`

### Mock Data
`mock-data/scenario-1.md` (CMA package for a 4BR/2.5BA suburban home)

### Messages

**Message 1 — Set the Stage**
```
I have a listing appointment tomorrow for a 4BR colonial in Maplewood Heights. The sellers are relocating and need to close within 60 days. I've pulled comps and put together a CMA package. Can you review my approach before I present?
```

**Expected Response Elements:**
- Ask for the CMA package and property details
- Establish a review framework: comp selection criteria, adjustment methodology, market conditions analysis, pricing strategy rationale
- Mention that a 60-day closing timeline influences pricing strategy — aggressive pricing generates urgency, overpricing wastes critical time
- Should reference the importance of school district consistency, recency of comps, and size/condition matching
- May ask about the seller's motivation beyond relocation (outstanding mortgage balance, equity position, flexibility on price vs. speed)

**Message 2 — Provide the Data**
```
Here's the full CMA package. Review it and tell me if my $439,000 list price recommendation is defensible.

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identify the school district mismatch on Comp 3 (Ridgeview 5/10 vs. Maplewood Heights 8/10) — this comp should be excluded or adjusted upward by $40,000-$60,000+
- Flag Comp 2 as not truly comparable (800 sq ft larger, pool, finished basement, 3-car garage) — needs line-item adjustments or exclusion
- Challenge the use of the pending sale list price ($449,000) as a value indicator when the actual sale price is unknown
- Note that Comp 4 is 11 months old in a market appreciating at ~8% annualized — needs a time adjustment of approximately $25,000-$27,000
- Address the stale tax assessment ($298,500 vs. estimated $420K-$445K market value) and warn about impending tax increase after 2025 reappraisal
- Analyze Active Listing 1 (165 Winding Brook Lane) — 95 DOM, 2 price reductions, same street — as evidence of a pricing ceiling and cautionary example
- Provide an adjusted value range based on the corrected comps
- Assess whether $439,000 is still defensible after adjustments (likely yes, but the reasoning needs to be rebuilt)

**Message 3 — Challenge the Expert**
```
The seller saw the Zillow Zestimate at $458,000 and wants to list at $465,000 "to leave room for negotiation." How do I handle this?
```

**Expected Response Elements:**
- Acknowledge this is one of the most common listing conversations — sellers anchor on Zestimates
- Explain Zestimate limitations: algorithm-based AVM with a median error rate of 6-7% (Zillow's own disclosure), does not account for interior condition, upgrades, or hyper-local factors like cul-de-sac vs. busy street
- Use the active comp on the same street as ammunition: "Your neighbor listed at $499,900 — $30,000 above Zestimate territory — and has been sitting for 95 days with two price cuts. That's the reality of overpricing."
- Present the DOM data: average DOM in this market is 18 days, 38% of homes sell above list. Properties priced right generate competition. Overpriced properties generate silence.
- Frame the pricing conversation around the seller's goal: "You need to close in 60 days. Listing at $465,000 means you'll likely sit for 30-45 days, take a price reduction, and close in 90+ days — missing your deadline."
- Suggest a pricing strategy: list at $435,000-$439,000 to generate multiple offers within the first 2 weeks, with a high probability of selling at or above list in this market (101.2% sale-to-list ratio)
- Never dismiss the seller's feelings — validate their desire to maximize value while redirecting to data

**Message 4 — Market Analysis Deep Dive**
```
The seller also asked about the tax situation. They're paying $6,420/year but the house is worth much more than the assessed $298,500. What should I tell them, and what should I tell buyers?
```

**Expected Response Elements:**
- Explain that the $298,500 assessment reflects the 2022 county reappraisal, now nearly 4 years stale in a market that has appreciated 20%+ since then
- The 2025 reappraisal is coming — assessment will likely jump to $400,000-$445,000 depending on the county's methodology
- Projected new annual tax: approximately $8,600-$9,600 based on current millage rates applied to the new assessment (a 34-50% increase)
- For the seller: "Your current low taxes are not a selling point — they're a ticking time bomb that a smart buyer's agent will catch. Every buyer will look at the tax bill, see $6,420, and assume that's what they'll pay. When they discover the reappraisal is coming, it creates distrust if you didn't disclose it."
- For buyers: proactive disclosure builds trust. Include a note in the listing agent remarks or prepare a disclosure sheet: "Current taxes reflect 2022 assessment. Buyer should budget for 2025 reappraisal at current market value."
- Reference the CMA's misframing of the low assessment as a "value story for buyers" — it is the opposite. It is a hidden cost that will surprise buyers at closing or shortly after.
- Practical advice: the lender's escrow analysis will use current taxes, but the buyer's monthly PITI will jump after reappraisal. This should be discussed during buyer consultation to avoid payment shock.

**Message 5 — Edge Case: Competing Offers**
```
We listed at $439,000 on Thursday. By Saturday we have 4 offers. One is $455,000 cash with a 10-day close. Another is $462,000 conventional with an appraisal contingency and 45-day close. A third is $445,000 FHA with a $5,000 seller concession. The fourth is $450,000 conventional with an escalation clause up to $470,000 and a $10,000 appraisal gap guarantee. How do I advise the sellers?
```

**Expected Response Elements:**
- Analyze each offer systematically beyond the headline price:
  - **Offer 1 ($455K cash, 10-day close):** No financing risk, no appraisal contingency, meets the 60-day close requirement with room to spare. Net to seller: $455,000. The fastest and most certain path to closing.
  - **Offer 2 ($462K conventional, appraisal contingency, 45 days):** Highest nominal price but carries appraisal risk. If the appraiser uses the same comps (especially the problematic ones), the appraisal could come in at $430K-$445K. The buyer would need to cover the gap or renegotiate. 45-day close is within the seller's window but leaves no buffer.
  - **Offer 3 ($445K FHA, $5K concession):** Net to seller is $440,000 ($445K - $5K concession). FHA loans have stricter appraisal requirements (the property must meet FHA minimum property requirements) and typically take 30-45 days. Lowest net offer.
  - **Offer 4 ($450K conventional, escalation to $470K, $10K appraisal gap):** Escalation clause triggers against competing offers — with the $462K offer on the table, this would escalate to $463,000 (or whatever the increment specifies, plus $1). The $10K appraisal gap guarantee means the buyer will cover up to $10K if the appraisal comes in low. Net: up to $463K+ with $10K gap coverage.
- Recommend considering seller priorities: speed and certainty (Offer 1) vs. maximum price (Offer 4 with escalation)
- Flag that the seller needs to close in 60 days — Offers 1 and 4 both meet this requirement
- Discuss the appraisal risk: in a market appreciating at 8%, appraisers may lag. The $10K gap guarantee in Offer 4 mitigates but does not eliminate this risk
- Note that the escalation clause must be verified — does the seller need to disclose competing offer prices to trigger the escalation? What is the increment? Is there a cap verification process?
- The correct answer depends on the seller's risk tolerance, but the analysis should be thorough enough for the seller to make an informed decision
- Most experienced agents would recommend Offer 1 (cash, 10-day close) for a relocating seller who needs certainty, or Offer 4 for a seller who prioritizes price and can tolerate moderate risk

---

## Scenario 2 — Commercial Lease Review

### Agents Tested
`lease_review`, `lead_nurture`

### Mock Data
`mock-data/scenario-2.md` (commercial lease for a 3,200 sq ft retail café space)

### Messages

**Message 1 — Set the Stage**
```
I'm representing a small business owner who wants to sign a 7-year NNN lease for a retail café space. She's relocating from a smaller location. The landlord sent over the lease and some financial disclosures. What should I be looking for before she signs?
```

**Expected Response Elements:**
- Structured lease review framework covering: rent structure and escalations, NNN charges and CAM reconciliation, TI allowance and timeline, exclusivity and use restrictions, personal guarantee terms, insurance requirements, assignment/subletting, co-tenancy protections, HVAC obligations, and landlord financial health
- Mention that a 7-year NNN lease for a small business owner is a major financial commitment — total occupancy cost over 7 years will exceed $800,000
- Flag that food service tenants have specific concerns: grease trap compliance, hood/ventilation requirements, health department permits, ADA compliance, and hours of operation restrictions
- Ask for the lease document, CAM reconciliation, landlord financials, and tenant's current insurance coverage
- Mention the importance of reviewing the landlord's financial health — a distressed landlord can mean deferred maintenance, reduced services, or forced sale

**Message 2 — Provide the Data**
```
Here's the full lease package including the lease terms, CAM reconciliation, TI allowance details, and the landlord's financial disclosures. Review everything and tell me what concerns you.

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identify the CAM reconciliation issue: $67,500 parking lot resurfacing is a capital expenditure that should be amortized over 10-15 years, not passed through as a single-year operating expense. Tenant's share of properly amortized cost: ~$474/year vs. $5,684 as a lump charge
- Flag the CPI escalation ambiguity: "Consumer Price Index" is not specific enough — needs to identify CPI-U vs. CPI-W, geographic area, base period, and measurement month
- Alert on the personal guarantee: 24-month tail period beyond lease term with no liability cap is extremely unusual and disadvantageous. Recommend burn-off and cap provisions
- Calculate the TI timeline and identify the "use it or lose it" risk: construction completion estimated August 15 – September 15, lien waivers take 2-4 weeks after that — the August 29 TI Deadline is nearly impossible to meet
- Analyze the exclusivity clause carve-out for "Online Sales Channels" — this effectively allows a competing bakery/café to open in the same shopping center as long as it's delivery-focused
- Flag the insurance gap: lease requires $2M umbrella, tenant currently has $1M
- Secondary concerns: HVAC replacement at tenant's cost regardless of system age, declining shopping center occupancy (79%), landlord's DSCR at 1.18x (below 1.20x covenant), and the assignment profit-sharing clause
- Provide a prioritized list of negotiation points before the tenant signs

**Message 3 — Challenge the Expert**
```
The landlord's broker says the CAM charges are "standard for the market" and that the parking lot resurfacing was an emergency repair, not a capital improvement. He also says the personal guarantee is "standard for new tenants." Is he right?
```

**Expected Response Elements:**
- On CAM: The landlord's broker is conflating two different things. Whether a parking lot needs resurfacing is not the question — the question is how the cost is categorized for pass-through purposes. Resurfacing (vs. patching) extends the useful life of the parking lot by 10-15 years. By definition, this is a capital expenditure under GAAP and standard lease accounting. The landlord is almost certainly capitalizing this on their own books for depreciation purposes while simultaneously passing the full cost through to tenants as an operating expense — a double benefit. "Emergency" and "safety" are justifications for why the work was done, not for how it is billed. If the landlord maintains this position, the tenant should demand a CAM cap (typically 3-5% annual increase) or an explicit capital expenditure exclusion in the lease.
- On the personal guarantee: A personal guarantee for a small business tenant is indeed standard. What is NOT standard is: (a) a 24-month tail period after lease expiration, (b) no liability cap whatsoever, and (c) no burn-off provision. Market-standard personal guarantees for creditworthy small business tenants typically include: burn-off after 24-36 months of clean payment, a cap of 12-24 months' rent, and termination at lease expiration (no tail). The landlord's broker calling this "standard" is either uninformed or deliberately misleading. Pull comparable lease terms from 3-5 similar retail spaces in the area to demonstrate market norms.
- Position the negotiation: these are not deal-breakers, they are negotiation points. The landlord has two vacant suites (15.8% vacancy) and a DSCR below covenant — they need tenants. The tenant has leverage.

**Message 4 — Financial Analysis**
```
Maria is concerned about the total cost. Can you break down the real total occupancy cost for the full 7-year lease term, including the CAM issues and the TI risk?
```

**Expected Response Elements:**
- Build a comprehensive 7-year cost model:
  - Base Rent (Years 1-7): $75,000 + $77,250 + $79,568 + $81,955 + $84,413 + $86,946 + $89,554 = **$574,686**
  - NNN Charges (assuming 3% annual increase from Year 1 estimate of $41,280): approximately **$319,000-$330,000** over 7 years
  - **Total Occupancy Cost: approximately $893,000-$905,000** over 7 years
- Add risk-adjusted costs:
  - If CAM capital expenditures are not capped, a single major project (roof, parking lot, facade) could add $3,000-$8,000 in any given year beyond the normal CAM increase
  - If the TI Deadline is missed and $144,000 is forfeited, the total out-of-pocket build-out cost jumps from $21,000 to $165,000 — a $144,000 swing that could be catastrophic for a small café
  - HVAC replacement (Section 11.03) at tenant's expense: a commercial HVAC system for 3,200 sq ft typically costs $15,000-$30,000 to replace, and the lease makes this entirely the tenant's responsibility regardless of the system's age at commencement
- Present the cost per month in plain English: "Maria is looking at approximately $10,600-$10,900/month in total occupancy cost by Year 7, before considering unexpected CAM charges or HVAC replacement"
- Calculate the revenue required to support this rent: at a typical café rent-to-revenue ratio of 8-12%, Maria needs $90,000-$135,000/month in gross revenue to sustainably afford this space
- Compare to market: is $36.34/sq ft total occupancy cost competitive for retail café space in this submarket?

**Message 5 — Edge Case: Landlord Distress Signals**
```
I just noticed the landlord's DSCR is 1.18x, which is below their loan covenant of 1.20x. The occupancy has been dropping. What does this mean for Maria if she signs this lease?
```

**Expected Response Elements:**
- Explain DSCR in plain language: the landlord's rental income barely covers their mortgage payment. At 1.18x, they are generating only 18 cents of income for every dollar of debt service — below the bank's minimum requirement of 1.20x. This means the landlord is in technical default on their loan covenant.
- Consequences of landlord financial distress:
  - The lender may demand the landlord cure the covenant violation (bring in more equity, reduce expenses, increase rents, fill vacancies)
  - If the landlord cannot cure, the lender could accelerate the loan or foreclose. The mortgage matures in September 2028 — just 2 years into Maria's 7-year lease. If the property is sold or foreclosed, the new owner inherits existing leases but may be a more aggressive operator
  - Declining occupancy (from 92% to 79%) means less CAM income spread across fewer tenants. If another tenant leaves, the remaining tenants' CAM share could increase (check the lease for "gross-up" provisions)
  - The landlord may defer maintenance to conserve cash — a distressed landlord is less likely to honor TI allowance timelines, respond to maintenance requests promptly, or invest in property improvements
- Protective measures Maria should negotiate:
  - **SNDA (Subordination, Non-Disturbance, and Attornment Agreement)** — ensures that if the landlord is foreclosed on, the lender or new owner must honor Maria's lease. Without an SNDA, the new owner could potentially terminate the lease.
  - **TI Allowance escrow** — request that the TI funds be placed in escrow with a third party rather than disbursed directly by the landlord. If the landlord becomes insolvent, the TI funds are protected.
  - **Self-help provisions** — allow the tenant to perform landlord obligations (maintenance, repairs) and deduct costs from rent if the landlord fails to perform within a specified cure period
  - **Audit rights** — confirm the tenant's right to audit CAM charges and verify that NNN calculations are accurate
- Frame the overall risk: "Maria is committing to 7 years and $900,000 in a shopping center where the landlord is financially stressed, occupancy is declining, and the mortgage matures mid-term. This is not necessarily a deal-breaker — the space may be perfect and the rent competitive — but she needs contractual protections that most tenants overlook."
