# Simulation Scenarios: Automotive

> Multi-turn conversation scripts for testing agents in the Automotive industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Dealership Monthly Performance Review

### Agents Tested
`dealer_crm`, `parts_mgr`, `service_advisor`, `warranty_agent`

### Mock Data
`mock-data/scenario-1.md` (Riverside Honda — March 2026 monthly performance package)

### Messages

**Message 1 — Set the Stage**
```
I'm the GM of a Honda franchise and I just got our March numbers. The dealer principal is asking why we lost money this month. I need a full operational assessment — what should I be looking at?
```

**Expected Response Elements:**
- Structured diagnostic framework covering all profit centers (new, used, F&I, service, parts)
- Mention of key metrics: gross per unit (front-end + back-end), service absorption, inventory aging, F&I PVR, BDC conversion, CSI
- Reference to NADA composite benchmarks for comparison
- Framework should examine both revenue shortfalls and expense overruns
- Should ask for the financial composite, inventory aging report, CSI scores, and department P&L statements

**Message 2 — Provide the Data**
```
Here's our full March performance package. Tell me where we're bleeding and prioritize the fixes:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the used inventory aging crisis — 35 units over 60 days, $33,876/month in floor plan interest, no markdown strategy
- Flag the service absorption gap — 67.9% vs. 80% benchmark, $160K/month in uncovered fixed overhead
- Catch the used F&I PVR gap — $900 vs. $1,850 new, $77,900/month in unrealized gross
- Identify the BDC show rate failure — 44.9% vs. 65% benchmark, 33 lost sales/month from broken confirmation process
- Flag parts obsolescence — $180K in dead inventory, no OEM return program utilization
- CSI risk — 870 vs. 900 threshold, $400K/year allocation bonus at stake
- Prioritize findings by financial impact and urgency
- Connect the dots: the dealership is not just losing money — it has systemic operational failures across every department

**Message 3 — Challenge the Expert**
```
My used car manager says we shouldn't lower prices because "our cars are better reconditioned than the competition" and that the market will come back to us. Is he right?
```

**Expected Response Elements:**
- Directly counter this claim with data from the mock data
- The data shows the opposite: vehicles over 60 days average $680 front-end gross (61-75 days) and $220 (76-90 days) — the longer they sit, the LESS they make, not more
- 90+ day units are selling at a $350 LOSS on average — the market is not "coming back"
- The 6 detailed aged units are priced 8-12% above vAuto market data — they are objectively overpriced
- "Better reconditioned" is not visible in online listings where 90%+ of buyers shop first — price and photos drive leads, not reconditioning
- Reconditioning quality supports a SLIGHT premium (2-3%), not 8-12% above market
- The floor plan math: 35 units x $40/day average = $1,400/day in carrying cost while waiting for the market to "come back"
- Reference the industry principle: "The first loss is the best loss" — a $500 wholesale loss at day 45 is always better than a $2,000 loss at day 90
- Recommend implementing a firm markdown protocol: price-to-market at day 30, aggressive markdown at day 45, wholesale decision at day 60

**Message 4 — Operational Deep Dive**
```
The service department is my biggest concern. We have good techs and the quality scores are fine, but we can't seem to grow revenue. What's the root cause and what do I fix first?
```

**Expected Response Elements:**
- Identify the service revenue problem as multi-layered, not a single issue
- Root cause 1: Effective Labor Rate at $148 vs. $155-$170 benchmark — the department is undercharging. Even a $7/hour increase across 2,624 flagged hours = $18,368/month additional revenue
- Root cause 2: Hours per RO at 1.42 vs. 1.6-2.0 benchmark — service advisors are not recommending work found during multi-point inspections. The Hunter Quick Check system generates objective data (alignment, tire tread, brake measurements) that advisors are not presenting to customers
- Root cause 3: Service advisor upsell at $62/RO vs. $80-$120 benchmark — advisors are rushing through presentations, likely due to high RO volume and inadequate staffing
- The combined effect: if hours/RO increased to 1.7 and ELR increased to $155, customer-pay labor revenue would increase by approximately $42,000/month
- Specific recommendations: (1) adjust posted labor rate, (2) implement mandatory Hunter Quick Check presentation on every RO, (3) set advisor-level recommended-to-sold metrics with accountability, (4) consider adding a service advisor to reduce per-advisor workload during peak hours
- Connect to service absorption: these fixes directly address the 67.9% absorption rate
- Connect to CSI: service timeliness (838) and communication (854) scores are related — overwhelmed advisors cannot provide timely updates

**Message 5 — Edge Case: CSI vs. Profitability Trade-off**
```
I know our CSI is low, but fixing it means spending money — hiring another F&I manager, adding service staff, maybe upgrading our communication tools. We just lost money this month. How do I justify investing to fix CSI when we can't afford it?
```

**Expected Response Elements:**
- Reframe the question: the dealership cannot afford NOT to fix CSI — the $400K/year allocation bonus is at stake
- The math: the combined cost of a third F&I manager ($65K-$85K salary + benefits) and automated service communication tools ($500-$1,000/month) is approximately $100K-$110K/year
- The at-risk allocation bonus is $400K/year — this is a 3.6:1 to 4:1 return on investment
- One more quarter below 900 CSI triggers loss of the bonus. Q2 is happening NOW — every week of delay increases the risk
- The F&I manager is also a revenue producer, not just a cost: a third F&I manager reduces the delivery bottleneck (2.5 hours to target 1-1.5 hours), which directly improves sales CSI, AND adds capacity to improve used vehicle F&I PVR (the $900 vs. benchmark gap)
- The service communication fix is nearly free compared to the alternative: automated text updates (Xtime or similar) cost $500-$1,000/month and directly address the communication (854) and timeliness perception (838) scores
- Frame the investment decision: $110K/year in cost vs. $400K/year in protected bonus + $467K/year in potential used F&I improvement + $500K/year in aged inventory reduction. The total opportunity exceeds $1.3M/year
- Conclude: the dealership is not choosing between CSI and profitability — fixing CSI IS the profitability fix. The same operational improvements that raise CSI (faster delivery, better service communication, stronger F&I process) are the same improvements that generate revenue

---

## Scenario 2 — Vehicle Appraisal & Reconditioning Analysis

### Agents Tested
`vehicle_appraiser`, `parts_mgr`, `service_advisor`

### Mock Data
`mock-data/scenario-2.md` (10 trade-in vehicle appraisals with reconditioning decisions)

### Messages

**Message 1 — Set the Stage**
```
We had a big sales event this weekend and took in 10 trades. I need you to review the appraisals and reconditioning plans before I approve the acquisitions. What's your process for vetting a batch like this?
```

**Expected Response Elements:**
- Structured appraisal review framework
- Key checkpoints: market data freshness (must be current, not historical), title history verification (Carfax/AutoCheck), reconditioning estimate completeness (cross-reference with service inspection), retail pricing vs. market data (vAuto/MMR positioning), reconditioning ROI analysis, and incoming model/market shift awareness
- Mention of the acquisition decision tree: market demand -> comparable data -> reconditioning cost -> target retail -> maximum acquisition cost
- Should ask for the appraisal worksheets, Carfax reports, service inspection notes, and current vAuto market data

**Message 2 — Provide the Data**
```
Here are all 10 appraisals with the supporting data. Tell me which ones to buy, which to pass on, and what needs to change:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Immediate flag on Vehicle 4 (Equinox) — branded flood title not acknowledged by appraiser. This is the most critical finding and should be addressed first due to legal and compliance risk.
- Flag Vehicle 1 (Tesla Model 3) — stale market data, 6-month-old KBB value, $4,500 underwater at proposed acquisition
- Catch Vehicle 3 (F-150) — reconditioning estimate missing transmission service that the service advisor flagged. Note the $4,200-$5,800 escalation risk.
- Identify Vehicle 7 (Mercedes GLE 350) — negative reconditioning ROI, should be wholesaled
- Flag Vehicles 5, 6, 9 (Camry, Tucson, CR-V) — all priced 8-12% above vAuto market, will age past 60 days. Connect to dealership's existing aged inventory problem.
- Catch Vehicle 10 (Ram 1500) — incoming redesigned model launch will depress used values, need to price for fast turn or reduce acquisition offer
- Approve Vehicles 2 (Civic) and 8 (Pilot) as solid buys
- Provide a clear buy/decline/adjust recommendation for each vehicle

**Message 3 — Challenge the Expert**
```
Jason says the Tesla is fine because "Teslas always hold their value" and the Equinox "looks clean, the customer said it was never in a flood." Should I trust the appraiser on these?
```

**Expected Response Elements:**
- On the Tesla: "Teslas hold their value" was true in 2021-2023 but is demonstrably false in the current market. Tesla's aggressive new vehicle price cuts (multiple rounds since 2023) have compressed used Tesla values dramatically. The data proves it: the same vehicle valued at $32,800 in September 2025 is now worth $28,200 — an 18% decline in 6 months. Using 6-month-old data on a Tesla is like using last year's stock price to trade today. The appraiser must use current vAuto/MMR data, period.
- On the Equinox: What the customer "says" is irrelevant — the Carfax SHOWS a branded flood title from Louisiana. A branded title is a legal fact recorded by the state. The customer's verbal claim does not override the title history report. Furthermore: (a) the dealer has a legal obligation to verify title status before acquisition, (b) reselling a flood-titled vehicle without disclosure is fraud under California consumer protection law, (c) the appraiser's failure to note the branded title in his written notes suggests he either did not pull the Carfax or did not read it. Either failure is disqualifying for an appraiser.
- Frame the broader issue: these are not judgment calls — they are process failures. The appraiser is not following basic appraisal protocols (current data, title verification, inspection note review). The dealership needs to implement a mandatory appraisal checklist with manager sign-off.

**Message 4 — Reconditioning Decision Framework**
```
The Mercedes is a beautiful truck and I think it'll show well on the lot. Jason wants to recondition it. Walk me through why the numbers don't work.
```

**Expected Response Elements:**
- Acknowledge the emotional pull — luxury vehicles look impressive on the lot and feel like they should command profit
- Then show the math: $17,800 acquisition + $4,800 reconditioning = $22,600 total invested
- vAuto market retail is $21,400 — the dealership is $1,200 OVER market before the vehicle hits the lot
- To retail above total invested: need to sell at $24,200+ (13% above market). In a transparent pricing environment, a high-mileage luxury SUV at a Honda store priced 13% above market will not generate buyer interest
- Realistic outcome: sits 60-90 days, accumulates $2,400-$3,600 in floor plan interest, eventually retailed at $22,000-$23,000 after markdowns. Total loss: $2,000-$4,000
- Alternative: wholesale at MMR ($17,200) today for a $600 loss. Total exposure: $600
- The reconditioning ROI rule: if projected front-end gross does not exceed reconditioning cost by at least $500, wholesale the unit. Here, projected front-end gross ($1,600) is $3,200 LESS than reconditioning cost ($4,800) — this fails the test dramatically
- The broader principle for a Honda store: brand-aligned inventory (Honda, Toyota, mainstream makes) turns faster, reconditioning costs are lower, parts availability is better, and the buyer demographic matches. Off-brand luxury vehicles at mainstream stores are a known margin trap.

**Message 5 — Edge Case: Appraiser Process Failure**
```
After this review, I'm concerned about Jason's appraisal process overall. What systemic issues do you see, and what guardrails should I put in place?
```

**Expected Response Elements:**
- Identify the systemic pattern: these are not isolated errors — they reveal a broken appraisal process
- Issue 1: No requirement to use current market data. Jason used 6-month-old KBB data on the Tesla instead of live vAuto/MMR data. Fix: mandatory vAuto screenshot or printout attached to every appraisal worksheet, dated within 24 hours of appraisal.
- Issue 2: No title verification step in the appraisal workflow. The flood-titled Equinox made it to the offer stage without anyone catching the branded title. Fix: Carfax/AutoCheck must be pulled and reviewed before any offer is made, with branded title fields highlighted and initialed.
- Issue 3: Service inspection notes are not integrated into the reconditioning estimate. The F-150 transmission issue was identified by the service advisor but not reflected in the appraiser's reconditioning estimate. Fix: service inspection report must be attached to the appraisal worksheet, and every service advisor finding must have a corresponding line item in the reconditioning estimate (even if the decision is "declined — wholesale instead").
- Issue 4: No pricing discipline — systematic overpricing above vAuto market. Three vehicles priced 8-12% above market in a single batch suggests the appraiser is pricing to desired gross rather than market reality. Fix: retail pricing must be within 3-5% of vAuto market average unless documented justification exists (e.g., single-owner, brand-aligned, significantly below-average mileage).
- Issue 5: No reconditioning ROI threshold. The Mercedes reconditioning decision should never have been proposed. Fix: implement a hard rule — if projected front-end gross does not exceed reconditioning cost by $500+, the vehicle goes to wholesale. No exceptions without GM approval.
- Issue 6: No competitive market awareness. The Ram 1500 appraisal ignores an imminent model redesign launch. Fix: monthly competitive briefing on upcoming new model launches and their impact on used values in the dealership's market area.
- Recommend: mandatory appraisal checklist with 6 gates, manager review before any offer exceeds $20,000, and weekly appraisal accuracy review (compare projected gross at appraisal to actual gross at sale).
