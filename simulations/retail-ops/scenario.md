# Simulation Scenarios: Retail & Ops

> Multi-turn conversation scripts for testing agents in the Retail & Ops industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Quarterly Inventory & Demand Review

### Agents Tested
`inventory_optimizer`, `pricing_strategist`, `supply_chain`, `returns_agent`, `store_ops_manager`

### Mock Data
`mock-data/scenario-1.md` (Quarterly inventory and demand review for a 12-store outdoor gear retailer)

### Messages

**Message 1 — Set the Stage**
```
We're a 12-store outdoor gear chain plus e-commerce doing $48M annually. I need a full inventory health assessment heading into spring buying season. What's your framework for evaluating our position?
```

**Expected Response Elements:**
- Structured framework covering inventory turnover, weeks of supply by category, ABC classification of SKUs, sell-through analysis, stockout/overstock identification, and demand forecast accuracy review
- Mention of seasonal considerations for outdoor retail (winter clearance timing, spring/summer buy window)
- Reference to key metrics: GMROI, WOS, sell-through rate, markdown exposure, aged inventory analysis
- Should ask for SKU-level data, demand forecast vs. actual, vendor performance data, and returns analysis
- Framework should include both quantitative (metrics) and qualitative (vendor relationships, channel allocation) assessment

**Message 2 — Provide the Data**
```
Here's our full quarterly review package. Analyze and give me your assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the Alpine Down Parka stockout crisis (OW-1001/1002 at 3 WOS with 6-week lead time, no reorder placed) — this is the most urgent finding
- Flag the Q4 demand forecast failure (-40% miss on outerwear due to no weather adjustment)
- Call out The North Face vendor performance collapse (62% OTIF, declining every quarter) and the 28% return rate
- Identify the Powder Bowl markdown ineffectiveness (3 markdowns, zero unit lift)
- Flag the siloed channel inventory creating artificial stockouts
- Note the $273,336 in overstock at cost from weather-dependent categories
- Provide a prioritized action plan with immediate, short-term, and strategic recommendations

**Message 3 — Challenge the Expert**
```
Our buyer says The North Face products sell well despite the returns because the brand draws traffic, and the 2% lower cost offsets the quality issues. Is that a valid position?
```

**Expected Response Elements:**
- Acknowledge that brand traffic draw is a real consideration in retail, BUT:
- Calculate the true cost: 28% return rate means for every 100 units bought, 28 come back. At an average processing cost of $15-25/return (inspection, restock, shipping), the returns alone cost $4.20-$7.00/unit on all 24,800 units sold
- The 2% cost savings on $1.9M spend = ~$38,000. The return handling cost on 6,944 returns at $20 avg = ~$138,880. The "savings" are negative by $100,000+
- Add the lost sales from 62% OTIF (29% of units not arriving on time = missed selling opportunities)
- Add the overstock markdown exposure on unsold TNF inventory (Chilkat boots, Carto Triclimate at 16-18 WOS)
- The quality issues (zipper failure, sole delamination) are manufacturing defects, not normal wear — this is a vendor quality problem, not a product acceptance issue
- Recommend: demand a formal corrective action plan from VF Corp, establish chargeback program for quality defects, source alternative vendors for overlapping categories as a hedge, and set a 90-day improvement threshold

**Message 4 — Operational Deep Dive**
```
We've never done ship-from-store. Is it worth the investment to unify our inventory, or should we just get better at allocation?
```

**Expected Response Elements:**
- Present a data-driven case using the mock data: $153,700 in estimated lost sales from stockouts, a significant portion of which occurred when the other channel had ample inventory
- Specific examples from the data: Alpine Down Parka had 5.3 WOS in e-commerce but 1.8 in stores (12 stockout days); Merino Base Layer had 72 units in stores but 0 in e-commerce (12 stockout days)
- Better allocation alone won't solve the problem because demand patterns shift in-season and static allocation can't respond
- Ship-from-store implementation costs for a 12-store Shopify Plus retailer: estimate $50-100K for technology (OMS integration, inventory sync) plus training and process changes
- ROI calculation: if ship-from-store prevents even 30% of the channel-based lost sales, that's ~$46K/year — payback in 1-2 years
- Operational considerations: pick/pack workflow in stores, carrier integration, inventory accuracy requirements (need >95% accuracy at store level), and impact on store labor
- Phased approach: start with 3-4 highest-volume stores, prove the model, then roll out
- Ship-from-store also reduces markdown risk by making slow-moving store inventory available to a larger demand pool

**Message 5 — Edge Case: Emergency Reorder Decision**
```
I just noticed the Alpine Down Parka situation — 3 weeks of supply, 6-week lead time, and it's our #1 revenue SKU. Arc'teryx can do air freight for 3x the shipping cost. The total landed cost would jump from $274 to $310 per unit. Our retail is $549. Should we air freight or accept the stockout?
```

**Expected Response Elements:**
- This is a clear air freight case. Do it immediately.
- Margin math: At $549 retail and $310 air-freight landed cost, gross margin is $239/unit (43.5%). At normal landed cost of $274, margin is $275/unit (50.1%). The margin reduction is 6.6 percentage points — meaningful but not catastrophic.
- Stockout cost math: The data shows these SKUs already lost $96,000 in Q4 from stockouts. At ~$549 retail and current sell rate, each week of stockout costs approximately $7,000-$9,000 in lost sales (conservative). A 3-week stockout = $21,000-$27,000 in lost revenue and $10,500-$13,500 in lost margin.
- Air freight the reorder: 85 units (Men's) + 80 units (Women's) at $36/unit premium = ~$5,940 in additional shipping cost. This is recovered in approximately 3-4 days of sales.
- Also consider: stockout on #1 SKU damages brand perception, sends customers to competitors, and may lose the sale permanently (outdoor gear purchases are often need-based for upcoming trips)
- The real question is WHY this happened again — the same stockout pattern occurred in Q4. The root cause is either (a) no safety stock buffer calculated for A-class items with long lead times, or (b) the reorder point is set too low. Fix the process so this never recurs.
- Recommend implementing an automated alert when any A-class SKU falls below lead-time-equivalent weeks of supply

---

## Scenario 2 — Vendor Contract Renegotiation

### Agents Tested
`vendor_negotiator`, `supply_chain`, `pricing_strategist`

### Mock Data
`mock-data/scenario-2.md` (Vendor contract renegotiation package for a key private-label supplier)

### Messages

**Message 1 — Set the Stage**
```
We have a key private-label supplier doing $4.2M annually and the contract is coming up. I want to renegotiate for better terms. What should I be looking at before going into this?
```

**Expected Response Elements:**
- Structured pre-negotiation framework: current contract term review, volume trajectory analysis, pricing tier compliance, quality performance trend, competitive benchmarking, raw material cost analysis, relationship assessment
- Key documents to review: current MSA, pricing schedule, volume history, quality SLA and performance data, competitive quotes, market pricing for key inputs
- Strategic considerations: single-source risk, switching costs, IP ownership, contract renewal mechanics (auto-renewal deadlines)
- Mention that preparation should include calculating total cost of relationship (not just unit price), identifying leverage points, and establishing walk-away position
- Should ask for all the above data before making specific recommendations

**Message 2 — Provide the Data**
```
Here's the full renegotiation package. Analyze and build me a negotiation strategy:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Immediate alarm on the auto-renewal deadline (March 31 notice deadline is days away) — this must be the first action item
- Identification of the $273,336 pricing tier overpayment — demand retroactive rebate as opening move
- Flag the expired SLA penalty notification windows ($23,100 in penalties lost)
- Note that competitive quotes are not apples-to-apples (different specs for 2 of 3)
- Calculate the raw material cost reduction (~7.5%) that hasn't been passed through
- Identify the missing contract provisions (force majeure, IP assignment, supply disruption contingency)
- Build a prioritized negotiation agenda: (1) send non-renewal notice immediately, (2) demand Tier 4 rebate, (3) negotiate new pricing reflecting material cost reductions, (4) strengthen quality SLAs, (5) add missing contract protections
- Assess the relationship dynamics (personal buyer-vendor relationship, single-source dependency)

**Message 3 — Challenge the Expert**
```
Derek (our buyer) says we shouldn't push too hard because AlpineForge kept pricing stable during COVID and we owe them loyalty. He's worried that demanding the rebate will damage the relationship. How do I handle this?
```

**Expected Response Elements:**
- Acknowledge that the COVID loyalty is real and valuable — suppliers who held pricing during disruption deserve recognition
- BUT: loyalty and contractual compliance are different things. The tier pricing is written into the contract. AlpineForge agreed to these terms. Asking for what the contract says is not "pushing too hard" — it's basic contract administration.
- The rebate discussion can be framed constructively: "We've realized there was a billing discrepancy, and we'd like to work together to resolve it and ensure the correct tier is applied going forward."
- Flag the conflict of interest: Derek's personal relationship with Wei Chen (attended his daughter's wedding) may be influencing his business judgment. This is not unusual but must be managed. The renegotiation should be led by someone with less personal attachment — Derek can remain the relationship manager but should not be the sole decision-maker on terms.
- The real risk of NOT pushing: Summit Trail is overpaying $273K, accepting declining quality without penalty, and heading into a contract renewal with no leverage established. AlpineForge's loyalty extended to holding pricing flat — which is now above market given raw material cost declines. Loyalty runs both directions.
- Strategic framing for the conversation: position it as "we want to grow the relationship but we need the contract to reflect current market conditions and quality expectations"

**Message 4 — Risk Assessment**
```
What's the risk if we push hard on pricing and quality and AlpineForge decides to deprioritize our production? They make product for 6 other brands and we're only 15% of their revenue.
```

**Expected Response Elements:**
- The risk is real but manageable. AlpineForge will not voluntarily lose a $4.2M account (their 3rd largest) over a pricing correction and quality improvement demand.
- However, deprioritization is subtler than losing the account: longer lead times, lower fill rates, B-team production staff, last-priority scheduling during peak season
- Mitigation strategies: (1) frame demands as partnership strengthening, not adversarial; (2) offer volume commitments in exchange for pricing concessions (projected 90K+ units in FY2026 brings more Tier 4 revenue); (3) propose a formal quarterly business review structure that gives AlpineForge visibility into Summit Trail's growth plans
- The bigger risk is NOT acting: continuing to overpay, accepting quality deterioration, and being locked into unfavorable terms for another year is a guaranteed cost. The risk of deprioritization is probabilistic and can be mitigated.
- Dual-source strategy: begin qualifying SummitCraft (matching spec, competitive lead time) as a secondary supplier for 20-30% of volume. This reduces single-source risk AND gives AlpineForge incentive to perform. Do not position this as a threat — position it as supply chain risk management (which it genuinely is).
- The IP issue is the real leverage concern: AlpineForge holds patterns for 8 proprietary styles with no IP assignment clause. This must be addressed in the new contract regardless of the pricing outcome.

**Message 5 — Edge Case: The Deadline**
```
It's March 28. The auto-renewal notice deadline is March 31. We haven't sent anything yet and Derek is on vacation until April 2. What do I do right now?
```

**Expected Response Elements:**
- This is a 48-hour emergency. Act immediately — do not wait for Derek.
- Step 1 (TODAY): Draft and send a formal written notice of intent to renegotiate terms per the MSA's non-renewal clause. Send via email AND overnight courier to the contract-specified address. The notice does not need to be hostile — it simply preserves Summit Trail's right to renegotiate.
- Suggested language: "Pursuant to Section [X] of the Master Supply Agreement dated April 1, 2023, this letter serves as formal notice that Summit Trail Outfitters elects to renegotiate the terms of the Agreement rather than allow automatic renewal. We value our partnership with AlpineForge and look forward to discussing updated terms that reflect our growing volume and evolving business needs."
- Who should sign: whoever has signing authority per the MSA (likely a VP or above, not necessarily the buyer). Check the contract's notice provisions for required delivery method and recipient.
- Confirm receipt: request delivery confirmation or read receipt. Follow up with a phone call to Wei Chen on March 29 to maintain the relationship tone.
- Missing this deadline is a $273K+ mistake (locked in for another year at incorrect pricing) plus another year of quality issues without renegotiated SLAs, missing contract protections, and no raw material cost adjustment.
- After the notice is sent, brief Derek when he returns — the notice preserves optionality, it doesn't commit to any specific demand. He can still lead the relationship through the negotiation.
- Process improvement: implement a contract calendar system that flags auto-renewal deadlines 90 days in advance. This should never come down to 48 hours.
