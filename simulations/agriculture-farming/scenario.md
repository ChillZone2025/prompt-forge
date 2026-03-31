# Simulation Scenarios: Agriculture & Farming

> Multi-turn conversation scripts for testing agents in the Agriculture & Farming industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Annual Crop Plan & Financial Projection

### Agents Tested
`ag_compliance`, `crop_planner`, `farm_finance`

### Mock Data
`mock-data/scenario-1.md` (2,400-acre Midwest row crop operation — corn/soybean plan, financials, insurance, FSA enrollment)

### Messages

**Message 1 — Set the Stage**
```
I'm finalizing my 2026 crop plan for a 2,400-acre corn/soybean operation in central Illinois. Before I sign off on seed orders and fertilizer contracts, I want a second opinion. What do you need to review?
```

**Expected Response Elements:**
- Request the crop plan with field-level detail (acres, crop sequence, soil types)
- Ask for yield history (minimum 5 years) to assess trends and rotation effects
- Request soil test results (date of tests critical — stale data is a red flag)
- Ask for the fertilizer plan with rates and sources, and the basis for recommendations
- Request crop insurance elections (coverage level, unit structure, APH yields)
- Ask for FSA program enrollment and conservation compliance status
- Request cash flow projection and equipment payment schedule
- Should mention that field-level profitability analysis requires all of the above — operation-level averages hide problems

**Message 2 — Provide the Data**
```
Here's the full package — crop plan, field maps, yield history, soil tests, fertilizer plan, insurance elections, FSA enrollment, equipment schedule, and cash flow projection. Review it and tell me what you'd change:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the corn-on-corn yield drag on Home North (3rd year) and River Bottom (4th+ year) — yield history shows the decline clearly
- Flag the crop insurance gap: 65% RP leaves $141.69/acre uninsured on corn when break-even is $785/acre; compare to 75% RP which would cost only $10,880 more but reduce exposure by $218,296
- Catch the outdated fertilizer plan: 2019 recommendations being applied despite 2025 soil tests showing Very High phosphorus on Home North and River Bottom — wasting $25,000-30,000 in unnecessary P2O5
- Identify the seed variety mismatch: DKC64-35RIB on 600 acres of sandy loam (Sand Hills) where the hybrid has no performance data — wrong hybrid for the soil type, wrong seeding rate (34,000 vs. 28,000-30,000 recommended for sand)
- Flag the cash flow gap: April-May borrowing need exceeds the operating line by $22,000 during the most critical window of the year
- Catch the conservation compliance violation: no cover crops planned on 800 HEL acres despite NRCS requirement — risk of losing ALL USDA program eligibility
- Prioritize findings by financial impact and urgency

**Message 3 — Challenge the Expert**
```
Dave says he's been running corn-on-corn on River Bottom for 5 years and "the yields are still fine." He doesn't want to rotate because corn revenue per acre is higher than soybeans. Is he right?
```

**Expected Response Elements:**
- Acknowledge that corn gross revenue per acre often exceeds soybeans, BUT:
- River Bottom yield has declined from 201 to 178 bu/acre over the continuous corn period — a 11.4% decline that is ALREADY happening
- At 178 bu/acre (2025 actual), River Bottom corn revenue = 178 x $4.85 = $863/acre
- If rotated to soybeans, yield would reset for the following corn year. Rotated corn typically yields 210-220 on River Bottom soils. At 215 bu/acre: 215 x $4.85 = $1,043/acre — a $180/acre improvement
- The yield drag will worsen in year 5-6 (documented at 15-20% for continuous corn beyond year 3)
- Additional hidden costs of continuous corn: +40-50 lb N/acre ($30-40/acre), increased corn rootworm pressure requiring additional insecticide ($15-25/acre), increased disease pressure (gray leaf spot, northern corn leaf blight)
- Two-year rotation math: corn-soybean rotation averages ($1,043 + $718) / 2 = $880.50/acre vs. continuous corn at $863/acre and declining — rotation is already more profitable
- The declining yield trend is the data — "yields are still fine" is contradicted by his own combine monitor

**Message 4 — Regulatory Deep Dive**
```
You mentioned conservation compliance. What exactly happens if NRCS catches us without cover crops on those HEL fields, and how quickly can we fix it?
```

**Expected Response Elements:**
- Conservation compliance is a condition of ALL USDA program participation — not just the HEL fields
- If NRCS determines a violation during the scheduled Fall 2026 review:
  - First, a "variance" may be issued with a corrective timeline — but this is discretionary, not guaranteed
  - If a formal violation is determined: loss of eligibility for ARC-CO/PLC payments, crop insurance premium subsidies, EQIP cost-share, CRP rental payments, and FSA direct and guaranteed loans
  - This applies to ALL 1,800 FSA base acres, not just the 800 HEL acres
  - Financial exposure: crop insurance premium subsidies ($25,000-35,000/year) + ARC-CO/PLC payments (variable, could be $0-80,000 depending on market) + any EQIP contracts
- Timeline to fix: cover crops must be established after the 2026 corn harvest (September-October) to be in compliance for the Fall 2026 review
  - Aerial seeding of cereal rye into standing corn (August-September) is an option at $25-30/acre
  - Drill seeding after harvest (October) is preferred at $30-40/acre but requires timely harvest
- Cost of compliance: 800 acres x $30-40/acre = $24,000-32,000
- Cost of non-compliance: potentially $50,000-100,000+ per year in lost program benefits
- The NRCS conservation plan is a legal agreement — "We'll deal with it if they come out" is not a strategy
- Recommend contacting the local NRCS office immediately to discuss the cover crop plan and ensure compliance before the Fall 2026 review

**Message 5 — Edge Case: Financial Pressure**
```
My lender just told me my operating line won't be increased this year because ag credit is tightening. I'm going to be $22K short in April-May. What are my options, and which ones should I avoid?
```

**Expected Response Elements:**
- Acknowledge this is a critical short-term liquidity problem during the most time-sensitive window of the year — planting waits for no one
- Options (ranked by least to most disruptive):
  1. **Pre-sell grain from 2025 crop** — If any 2025 grain is still in storage, sell immediately for cash. Even at a slight discount to future delivery price, the cash is needed NOW
  2. **Negotiate equipment payment deferral** — Contact the equipment lender (likely the Deere Financial dealer or Farm Credit) and request deferral of April and May equipment payments ($35,800). Most ag lenders will accommodate a 60-90 day deferral during planting season for a borrower with a strong repayment track record
  3. **Negotiate input supplier terms** — Delay payment on seed or chemical purchases to 60-90 day terms. Most ag retailers offer extended terms during planting season
  4. **Short-term personal bridge loan or line from another lender** — $22K is small enough for a personal line of credit to bridge
- Options to AVOID:
  - **Do NOT sell 2026 crop at distressed prices just for cash** — Forward contracting should be a marketing decision, not a desperation move
  - **Do NOT skip or delay planting** — Every day of planting delay after the optimal window costs approximately 1-2 bu/acre/day in yield. A $22K cash shortfall that causes 3-day planting delay on 1,760 corn acres at 1.5 bu/day x $4.85 = $12,830/day in lost yield
  - **Do NOT reduce crop insurance coverage to save premium** — The operation is already underinsured at 65%; dropping to 60% would be reckless
  - **Do NOT skip side-dress nitrogen** — This is a $48K expense in May that directly drives yield; deferring it is not an option
- Structural fix for future years: restructure equipment debt to reduce monthly payments during planting season (seasonal payment schedule — lower in spring, higher post-harvest)
- The $22K gap is a symptom of the larger problem: equipment payments not structured around the farm's seasonal cash flow

---

## Scenario 2 — Livestock Operation Health & Financial Review

### Agents Tested
`ag_compliance`, `livestock_mgr`, `farm_finance`

### Mock Data
`mock-data/scenario-2.md` (500-head cow-calf operation — herd health, breeding, feed costs, market data, pasture management)

### Messages

**Message 1 — Set the Stage**
```
I run a 500-head cow-calf operation in southeast Kansas and I lost money last year. I need someone to look at the whole picture — herd health, feed costs, marketing, pasture — and tell me where I'm bleeding. What information do you need?
```

**Expected Response Elements:**
- Request complete herd inventory with age distribution (age is a critical profitability driver in cow-calf)
- Ask for breeding and reproduction data (conception rates, breeding season length, bull BSE records)
- Request calving data including calf mortality with cause-of-death breakdown
- Ask for the vaccination and health protocol with dates of last veterinary review
- Request feed cost breakdown by source (purchased vs. produced, cost per ton, total per cow)
- Ask for pasture inventory with stocking rates and condition assessments
- Request market/sale data with weights and prices compared to regional averages
- Ask for the full income statement and balance sheet
- Should emphasize that cow-calf profitability analysis requires all of these together — a single metric in isolation misses the interactions (e.g., overstocking causes feed cost increase AND health problems)

**Message 2 — Provide the Data**
```
Here's everything I've got — herd records, breeding data, calving records, vaccination protocol, feed costs, pasture data, sale results, and financials. The operation lost $282K last year. Where do I start?

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the calf mortality crisis: 8.2% vs. 3-4% benchmark, with scours vaccine removal as the most likely cause of escalating scours deaths (4 -> 8 -> 14 over 3 years)
- Flag feed cost as the dominant problem: $889/cow vs. $712 regional average, driven by purchasing ALL hay when on-farm production could save $63,000+/year
- Catch the BSE testing gap: no testing in 2025, none scheduled for 2026, 2 "questionable" bulls retained from 2024, and the herd's 87% conception rate reflects the consequence
- Identify the 60 cows over 10 years with 55% conception — these are consuming resources and producing nothing; aggressive culling would generate $65,160 in immediate revenue and improve herd metrics
- Flag the lighter-than-average calf weights and the absence of any backgrounding or retained ownership analysis
- Catch the pasture overstocking: 580 AU on capacity for 530, with NRCS-documented forage degradation on West Range and Home Pasture
- Connect the issues: overstocking drives up feed costs (purchasing hay to compensate for overgrazed pasture), which drives operating losses, while carrying unproductive 10+ year cows makes the overstocking worse
- Prioritize by financial impact: feed cost reduction and culling are the highest-impact actions

**Message 3 — Challenge the Expert**
```
Linda says she keeps the older cows because "they've been good producers their whole lives" and she doesn't want to cull cows that have been loyal. I understand the sentiment, but what do the numbers say?
```

**Expected Response Elements:**
- Acknowledge that attachment to individual animals is natural in ranching, BUT:
- The numbers are unambiguous: the 10+ year group has a 55% conception rate — nearly half produce NO calf in a given year
- Cost to maintain 60 cows for a year: 60 x $889 = $53,340 in feed costs alone
- Revenue from those 60 cows: 33 pregnant x 93% weaning rate = ~31 calves x $1,100 average value = $34,100
- Net loss from the 10+ year group: $53,340 - $34,100 = **-$19,240/year** (before labor, vet, and pasture costs)
- Culling all 60 head at $1,086/head = $65,160 in immediate cash
- Replacing with 60 productive replacements (already developing 60 heifers annually): 60 x 95.5% conception x 93% weaning = ~53 calves x $1,100 = $58,300 in revenue
- Net improvement: from -$19,240 to approximately +$5,000 = **$24,000+/year swing** plus $65,160 in cull revenue
- Additionally: removing 60 head reduces pasture stocking from 580 to 520 AU — below the NRCS recommended 530, resolving the overgrazing problem
- This is not about whether the cows "deserve" to stay — it is about whether the operation survives. The operation lost $282K last year. Carrying sentiment-based unproductive inventory is a luxury this operation cannot afford
- Recommend a phased approach if full culling is emotionally difficult: cull the 27 open cows from the 10+ group immediately (they will not produce a calf in 2026 regardless), then evaluate the remaining 33 pregnant cows at next pregnancy check

**Message 4 — Herd Health Deep Dive**
```
Our vet said 2 years ago we should add the scours vaccine back. Linda says vaccine costs are just "throwing money at a problem." Can you show me the ROI on that vaccine?
```

**Expected Response Elements:**
- This is one of the clearest cost-benefit cases in livestock management:
- **Cost of ScourGuard vaccine:** approximately $4,500/year for 500 cows (administered 6 weeks pre-calving)
- **Scours calf deaths:** 4 (2023, year vaccine removed) -> 8 (2024) -> 14 (2025)
- **Value of 14 scours deaths at weaning:** 14 x $1,050 = $14,700 in lost revenue
- **Treatment costs for surviving scours calves:** Not fully broken out, but calf treatment vet costs are $24.80/cow — 2x regional average, with scours treatment being a major driver
- **ROI calculation:** $4,500 vaccine cost to prevent an estimated 10-12 deaths (assuming baseline 2-4 scours deaths even with vaccine) = $10,500-$12,600 in saved revenue
- **Return:** approximately 2.3-2.8x the investment — the vaccine pays for itself 2-3 times over
- But the problem is bigger than just scours:
  - The modified-live respiratory vaccine (Cattle Master Gold) was discontinued in 2024 — remaining stock from 2023 is likely degraded
  - BRD killed 12 calves — potentially related to degraded vaccine
  - The entire protocol has not been reviewed by the veterinarian since January 2024
  - 6 of the 9 "other/unknown" calf deaths had no necropsy — root cause is unknowable without diagnostics
- **Total excess calf mortality cost:** 18 excess deaths (35 actual - 17 at 4% benchmark) x $1,050 = $18,900/year
- Recommendation: schedule an immediate herd health review with Dr. Pruitt, update the entire vaccination protocol, replace discontinued products, reinstate ScourGuard, and implement a necropsy protocol for all calf deaths (cost: $75-150/necropsy, but diagnostic information is essential for protocol improvement)
- The $4,500 vaccine is not "throwing money at a problem" — it is the single highest-ROI expenditure available to this operation

**Message 5 — Edge Case: Survival Decision**
```
We lost $282K last year. My lender says we need to show a path to profitability or they'll restructure the loan. If I can only make three changes this year, what gives me the biggest bang for the buck?
```

**Expected Response Elements:**
- This is a triage situation — the operation is losing money and the lender is signaling potential action. Three changes, ranked by immediate financial impact:
- **Change 1: Aggressive culling of 10+ year cows (60 head) and the 25 retained open cows from 2024.**
  - Immediate cash: 85 cull cows x $1,086 = $92,310
  - Annual feed savings: 85 fewer head x $889 = $75,565/year
  - Herd drops to 415 cows (plus 55 first-calf heifers = 470 total), reducing stocking rate below NRCS capacity
  - Conception rate improves from 87% to ~93% immediately
  - This single action improves the financial picture by approximately $167,000 in Year 1 (cull revenue + feed savings)
- **Change 2: Begin on-farm hay production on the 400-acre unused meadow.**
  - Requires equipment (used mower-conditioner, rake, baler: $60,000-80,000 or custom hire at $35-40/ton)
  - Even with custom hire: 900 tons x $40/ton custom hire = $36,000 vs. purchasing at $125/ton = $112,500
  - Savings: approximately $76,500/year using custom hire (no equipment purchase needed)
  - Combined with the reduced herd (85 fewer head consuming ~400 fewer tons of hay), total hay purchase drops from 2,400 tons to approximately 1,100 tons
  - Total feed cost savings: $150,000+/year
- **Change 3: Reinstate the vaccination program and schedule bull BSE testing.**
  - Cost: $4,500 (ScourGuard) + $5,000 (updated protocol) + $1,650 (BSE)= ~$11,150
  - Expected recovery: $18,900 in reduced calf mortality + improved conception rate (each 1% improvement = ~5 additional calves = ~$5,250)
  - Net improvement: approximately $15,000-25,000/year
- **Combined Year 1 impact:**
  - Cull revenue: $92,310
  - Feed cost reduction: $150,000+
  - Reduced mortality/improved conception: $15,000-25,000
  - Total improvement: approximately $257,000-$267,000 — nearly eliminating the $282K loss
- Present this to the lender as a concrete restructuring plan with specific actions, timelines, and projected financial impact. Lenders want to see that the borrower has identified the problems and has an executable plan — not just a promise to "try harder"
- The $282K loss is not a mystery — it is the predictable result of carrying unproductive animals, purchasing all feed at retail prices, and allowing preventable calf deaths. Every one of these problems has a quantifiable solution
