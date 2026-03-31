# Simulation Scenarios: Energy & Utilities

> Multi-turn conversation scripts for testing agents in the Energy & Utilities industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Commercial Building Energy Audit

### Agents Tested
`energy_auditor`, `field_service`

### Mock Data
`mock-data/scenario-1.md` (100,000 sq ft office building energy audit)

### Messages

**Message 1 — Set the Stage**
```
We just received an ASHRAE Level II energy audit for our 100,000 sq ft office building. Before I share the data, what's your framework for reviewing an energy audit report? What red flags do you look for?
```

**Expected Response Elements:**
- Structured review framework: utility bill analysis first (rate structure, demand charges, consumption trends), then benchmarking (EUI, ENERGY STAR score), then end-use breakdown, then measure-level analysis
- Red flags to watch for: measures analyzed without the actual rate structure, missing demand charge analysis, savings calculated with blended rates instead of marginal rates, missing utility rebates/incentives, benchmarking without context
- Should mention that a good audit starts with the billing data and works inward — not the other way around
- Should ask for the utility bills, rate schedule, audit report, and building information

**Message 2 — Provide the Data**
```
Here's the full audit package. Review it and give me your assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the HVAC 24/7 scheduling failure as the single highest-priority finding — lowest cost, highest impact, immediate implementation
- Flag that the lighting retrofit ROI excludes Duke Energy Smart $aver rebate, which would reduce payback from 6.5 years to ~4.1 years
- Challenge the "average performance" characterization when EUI is 30% above median and ENERGY STAR score is 28 (bottom quartile)
- Identify that demand charges represent 32.5% of the electric bill with no demand management strategy proposed
- Flag the 18-year-old chiller operating at 0.85 kW/ton vs. modern 0.55 kW/ton — replacement ROI not calculated
- Note the solar-ready 200kW roof with no renewable assessment included
- Provide a reprioritized recommendation list with corrected economics

**Message 3 — Challenge the Expert**
```
The auditor says demand charges are "a fixed cost that can't be managed without expensive battery storage." Is that true?
```

**Expected Response Elements:**
- This is incorrect. Demand charges are highly manageable through multiple strategies, many of which cost little or nothing:
- **BAS demand limiting** — program the building automation system to shed non-critical loads (lighting zones, AHU fans, plug load circuits) when demand approaches a target threshold. Cost: programming time only, since the BAS already exists.
- **HVAC pre-cooling** — pre-cool the building during off-peak hours and coast through peak demand periods. Reduces cooling-driven demand peaks at zero equipment cost.
- **Load staggering** — sequence the startup of AHUs, chillers, and other large loads instead of simultaneous startup (which creates the highest demand spikes).
- **Chiller staging optimization** — run two chillers at partial load rather than one at full load during peak periods (lower demand per ton at part load).
- Battery storage is ONE option, but it's the most expensive. The low-cost/no-cost strategies should be implemented first.
- Quantify the opportunity: reducing peak demand by 10% (69 kW) saves ~$9,936/year at $12/kW demand charge.

**Message 4 — Deeper Analysis**
```
The building owner is considering a chiller replacement. The existing 400-ton Trane is 18 years old at 0.85 kW/ton. What's the business case?
```

**Expected Response Elements:**
- Calculate energy savings: at ~752,000 kWh cooling energy, with chiller consuming approximately 340 kW at full load vs. 220 kW for a modern unit — savings depend on operating hours and load profile
- Use IPLV (Integrated Part Load Value) for realistic savings, not just full-load comparison — chillers operate at part load most of the time. Modern IPLV of 0.35 kW/ton vs. estimated existing IPLV of ~0.70 kW/ton represents ~50% improvement
- Approximate annual savings: $25,000-$40,000 in energy costs (highly dependent on operating hours and load profile)
- Capital cost for 400-ton centrifugal chiller replacement: approximately $250,000-$350,000 installed
- Simple payback: 7-12 years on energy alone — BUT factor in: (a) avoided maintenance costs on aging equipment, (b) reliability risk of an 18-year unit, (c) potential refrigerant transition (R-123 phase-down), (d) demand reduction during peak cooling
- Recommend aligning replacement with the next maintenance event or failure to capture the incremental cost difference rather than full replacement cost
- Note that the 400-ton chiller is approaching end of useful life (20-25 years typical) — this is not just an efficiency project, it's capital planning

**Message 5 — Edge Case: Solar vs. Efficiency**
```
The building owner wants to skip efficiency upgrades and go straight to a 200kW rooftop solar installation. "Solar is sexier and the ITC makes it basically free." How do I advise him?
```

**Expected Response Elements:**
- Efficiency first, then solar. This is a foundational principle of energy management, not just an opinion.
- The building is wasting 25-35% of HVAC energy running 24/7 — fixing the BAS schedule costs $4,500 and saves $18,200/year. That's a 3-month payback. Solar doesn't come close to that ROI.
- A 200kW solar system at ~$350,000 (before ITC) produces ~268,000 kWh/year, saving ~$19,300/year — a 12.7-year payback before ITC, ~8.9 years after 30% ITC. Good, but not "basically free."
- The ITC is 30%, not 100%. The owner still pays 70% of the cost. And the 30% requires prevailing wage compliance for systems over 1MW (this system is under, so it qualifies for 30% without the requirement).
- More importantly: if you reduce the building's consumption first through efficiency, the solar system can offset a larger percentage of the remaining load. Efficiency + solar is better than solar alone.
- The correct sequence: (1) BAS scheduling ($4,500, 3-month payback), (2) lighting retrofit with Duke rebate ($67,490 net, 4.1-year payback), (3) demand management (low/no cost), (4) chiller replacement when end-of-life (capital planning), (5) THEN solar to offset the reduced load.
- After efficiency measures, the building might need only a 150kW system instead of 200kW to hit the same offset percentage — saving $50K+ in capital.
- Flag that "sexy" is not a financial metric. The board/investors care about ROI and payback period, and the efficiency measures win on both.

---

## Scenario 2 — Utility-Scale Solar Project Financial Model

### Agents Tested
`renewable_dev`, `renewable_finance`, `grid_ops`

### Mock Data
`mock-data/scenario-2.md` (50MW solar project development package)

### Messages

**Message 1 — Set the Stage**
```
We're evaluating a 50MW utility-scale solar project in Southern New Mexico for potential investment. Before I share the development package, what's your due diligence framework? What kills deals?
```

**Expected Response Elements:**
- Structured due diligence framework covering: (1) resource assessment and energy yield (PVsyst or equivalent, P50/P75/P90 production estimates, degradation assumptions), (2) interconnection (queue position, study age, network upgrade costs, curtailment risk), (3) offtake (PPA terms, offtaker creditworthiness, escalation structure), (4) permitting (federal, state, local — timeline risks), (5) tax equity (ITC/PTC qualification, prevailing wage compliance, MACRS), (6) land control (lease terms, escalation, access), (7) construction (EPC contract, module supply, schedule)
- Deal killers: stale interconnection studies in congested zones, uncapped land lease escalation, ITC qualification risk (prevailing wage non-compliance), curtailment risk not modeled, unrealistic degradation or production assumptions
- Should emphasize that the financial model is only as good as its inputs — garbage assumptions produce garbage returns
- Should ask for the full development package including PVsyst report, interconnection study, PPA, land lease, and permitting status

**Message 2 — Provide the Data**
```
Here's the complete development package. Assess project viability and flag any concerns:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Catch the degradation rate discrepancy: model uses 0.3%/year but LONGi warranty implies ~0.5%/year — cumulative revenue impact of ~$2.7M over 25 years
- Flag the fixed 2.5%/year PPA escalator with no sensitivity analysis — project NPV is highly sensitive to this assumption
- Identify the 30% ITC qualification risk: prevailing wage and apprenticeship compliance is assumed but not documented
- Flag the 18-month-old interconnection study in a zone now designated "potentially congested" with 280 MW of new queue entrants
- Identify curtailment as the most significant unmodeled risk — "Not assessed" in the risk register despite congested transmission zone
- Flag the uncapped land lease escalation as a material financial risk
- Overall assessment: project has strong fundamentals (good resource, solid offtaker, competitive PPA) but several material risks are unaddressed — not investable without resolution

**Message 3 — Challenge the Expert**
```
The developer says "0.3%/year degradation is conservative — that's what LONGi's latest test data shows in hot-dry climates." Should we accept that?
```

**Expected Response Elements:**
- No. The bankable degradation rate should be based on the manufacturer's warranty, not promotional test data.
- LONGi warrants 87.4% output at year 25. Working backwards: (100% - 87.4%) / 25 years = 0.504%/year (simplified linear). When you account for first-year LID (Light Induced Degradation) of ~1.5-2%, the annual degradation after year 1 might be ~0.4-0.45%/year — but the effective rate including LID is still ~0.5%.
- Hot-dry climates actually accelerate certain degradation mechanisms (UV degradation, thermal cycling, potential-induced degradation) while slowing others (humidity-related corrosion). The net effect is climate-specific and not universally favorable.
- Independent engineer (IE) reports for bankable projects typically use 0.5%/year for crystalline silicon unless third-party testing (PVEL, Fraunhofer) supports a lower rate for the specific module model.
- Tax equity investors and lenders will apply their own degradation assumptions regardless of the developer's model — typically 0.5%/year or higher. Using 0.3% in the developer's model creates a disconnect that will surface during due diligence and erode credibility.
- Recommend using 0.5%/year in the base case and running 0.3%/year as an upside sensitivity.

**Message 4 — Regulatory Deep Dive**
```
Walk me through the ITC qualification risk. What exactly do we need to verify before financial close?
```

**Expected Response Elements:**
- Under the IRA (Inflation Reduction Act), the ITC for projects over 1MW is 6% (base rate). To qualify for the full 30% rate, the project must meet BOTH:
  - **Prevailing wage requirements:** All laborers and mechanics must be paid prevailing wages (as determined by DOL for the project location) during construction AND for the first 5 years of operation (for alterations and repairs).
  - **Registered apprenticeship requirements:** A specified percentage of labor hours must be performed by registered apprentices (12.5% for projects beginning construction in 2024, 15% for 2025+).
- The financial impact of non-compliance: ITC drops from $16.2M (30%) to $3.2M (6%) — a $13M difference. This collapses the tax equity structure and likely kills the project.
- What to verify before financial close: (1) EPC contract must include explicit prevailing wage provisions with DOL wage determination incorporated by reference, (2) apprenticeship program documentation — which registered apprenticeship programs will provide apprentices, (3) payroll monitoring and compliance reporting procedures, (4) cure provisions — what happens if a subcontractor violates prevailing wage (the IRA provides a correction/penalty mechanism for good-faith errors), (5) O&M contract must include prevailing wage provisions for the 5-year post-COD period
- The IRA's correction mechanism: if a prevailing wage violation is discovered and corrected within 180 days (back-pay + $5,000 penalty per affected worker), the full ITC is preserved. If not corrected, or if it's an intentional violation, the credit reverts to 6% plus a penalty.
- Recommend engaging a Davis-Bacon/prevailing wage compliance consultant and requiring the EPC contractor to provide weekly certified payroll reports.

**Message 5 — Edge Case: Curtailment Risk**
```
The developer says curtailment risk is "theoretical" because SPS has an obligation to take the power under the PPA. Is that correct?
```

**Expected Response Elements:**
- This is a dangerous mischaracterization. The PPA explicitly allows economic curtailment at the offtaker's discretion, with only partial compensation (50% of PPA price) for curtailment exceeding 5% of annual production.
- "Obligation to take" applies to the contracted quantity, but the PPA's curtailment provisions carve out significant flexibility for the offtaker. The first 5% of annual curtailment (~6,077 MWh at P50) is entirely uncompensated — a direct revenue loss of ~$173K/year at the Year 1 PPA price.
- The project is in EPE's Southern New Mexico zone, which EPE's own 2025 Transmission Plan designates as "potentially congested." With 380 MW of solar in the current cluster study plus 280 MW of new queue entrants, transmission capacity will be strained.
- Historical precedent: ERCOT (Texas) and CAISO (California) solar projects in congested zones have experienced curtailment rates of 5-15%. MISO and SPP projects in wind-heavy zones have seen even higher rates. The EPE Southern NM zone, while smaller, faces similar dynamics.
- Financial modeling exercise: at 5% curtailment, uncompensated loss is ~$173K/year. At 10% curtailment, loss is ~$173K (first 5% uncompensated) + ~$173K at 50% (next 5% partially compensated) = ~$260K/year. At 15%, the impact grows further and could reduce sponsor IRR by 2-3 percentage points.
- The stale interconnection study (18 months old) makes this worse — the curtailment assumptions baked into the original SIS may no longer reflect current grid conditions.
- Recommend: (1) obtain historical curtailment data from EPE for the Southern NM zone, (2) request an updated congestion study or at minimum an informal assessment from EPE, (3) model curtailment scenarios at 0%, 5%, 10%, and 15% in the pro forma, (4) negotiate better curtailment compensation in the PPA (higher % or lower threshold), (5) evaluate battery storage co-location to mitigate curtailment by shifting production to non-congested hours.
