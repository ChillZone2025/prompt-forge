# Simulation Scenarios: Manufacturing

> Multi-turn conversation scripts for testing agents in the Manufacturing industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Production Line Performance Review

### Agents Tested
`lean_agent`, `maintenance_planner`, `process_agent`, `production_scheduler`, `quality_controller`

### Mock Data
`mock-data/scenario-1.md` (CNC machining line — automotive brake rotors, Q1 production data)

### Messages

**Message 1 — Set the Stage**
```
Our CNC machining line producing brake rotors had a rough Q1. OEE is down, scrap is up, and we missed delivery targets. I need a full performance review. What's your framework for analyzing this?
```

**Expected Response Elements:**
- Structured framework covering OEE decomposition (Availability, Performance, Quality losses separately), downtime Pareto analysis, scrap/defect root cause investigation, maintenance effectiveness review, and operator performance assessment
- Reference to lean manufacturing principles (waste identification, value stream thinking)
- Mention of SPC and process capability as tools for quality analysis
- Should ask for production data, downtime logs, scrap records, maintenance records, and changeover data
- Framework should prioritize by financial impact

**Message 2 — Provide the Data**
```
Here's the full Q1 data package for Line 7. Analyze it and tell me what's really going on:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- **Issue #1 (OEE Miscalculation):** Flag that the reported OEE methodology is flawed — the production team excluded planned maintenance (48h) from the denominator and the "Waiting for material" downtime (112h) inflates availability artificially. Recalculate or challenge the basis to show true OEE is significantly lower than 77%.
- **Issue #2 (Material Wait as #1 Downtime):** Immediately identify that "Waiting for material" at 112 hours (30.8% of all downtime) is NOT an equipment issue — it is a scheduling, logistics, and supply chain failure. The production report blaming "equipment reliability" is misdirected.
- **Issue #3 (Scrap-Tooling Correlation):** Connect the scrap rate spike (2.1% to 4.8%) directly to the January 28 tooling change from Sandvik to Kennametal. Point out the timing correlation, the unauthorized feed rate change, and the lack of formal change control or first-article qualification per IATF 16949.
- **Issue #4 (Operator Training Gap):** Identify Operator E. Jackson's 87.0% quality rate as a significant outlier — 15 points below average, contributing 35.7% of total scrap. Note the incomplete training, low experience, and 3rd shift assignment with minimal supervision.
- **Issue #5 (Overdue PM / Vibration Risk):** Flag 3 overdue spindle bearing PM tasks (74, 57, and 25 days overdue) and Machine #1's vibration trending past alert level toward action level. Connect the March 3 and March 21 breakdown entries to the deteriorating spindle condition.
- **Issue #6 (Changeover Opportunity):** Identify the $178K/year capacity recovery from the SMED study that was completed but never implemented. Challenge the "no capital budget" rejection given the 11.8-month payback.
- Prioritized action plan with estimated financial impact

**Message 3 — Challenge the Expert**
```
The production supervisor says the scrap increase is because of incoming casting quality — the supplier changed their foundry sand in December. He says it has nothing to do with the tooling change. How do you evaluate that claim?
```

**Expected Response Elements:**
- Acknowledge that casting material changes CAN affect machining quality (porosity, hardness variation, machinability)
- BUT: the data does not support the supervisor's claim as the primary cause:
  - Scrap was stable through January at 2.1% despite the sand change happening in December — if it were the root cause, the spike should have started in January, not February
  - The spike timing aligns precisely with the tooling change (January 28) and feed rate adjustment (February 5)
  - The top scrap categories (dimensional OD, surface finish, runout) are machining-process defects, not casting-material defects. Porosity (the defect most likely caused by sand changes) is only 12.7% of scrap
  - The feed rate was changed ad-hoc to compensate for different cutting characteristics — this is exactly the kind of uncontrolled process change that causes quality shifts
- The supervisor authorized the tooling change without formal change control — he has motive to deflect blame to the supplier
- Proper investigation requires: (1) run a controlled comparison — Sandvik inserts on one machine, Kennametal on another, same castings, same parameters, (2) check incoming material inspection data for hardness/porosity trends, (3) review the PFMEA for the insert change, (4) conduct a Gage R&R to confirm the measurement system is not contributing to the apparent increase

**Message 4 — Maintenance Deep Dive**
```
Jim from maintenance says he can't do the overdue PM tasks because production won't give him the machines. He needs at least 4 hours per machine for the spindle bearing inspections, and Tony (production) says he can't afford the downtime with deliveries already behind. How do I resolve this?
```

**Expected Response Elements:**
- This is one of the most common and dangerous conflicts in manufacturing — short-term production pressure vs. maintenance reliability
- Machine #1 is already past vibration alert level (5.8 mm/s vs. 4.5 alert threshold) and trending toward action level (7.1). The March 3 and March 21 entries show it has already caused production disruptions
- The math is clear: 4 hours of planned downtime for PM vs. 40-80 hours of unplanned downtime for a catastrophic spindle failure + $25K-$50K spindle replacement cost + potential customer penalties for missed deliveries
- Scheduled PM can be planned around production needs; unplanned breakdowns cannot
- Concrete recommendation: (1) Schedule Machine #1 PM IMMEDIATELY — it is the highest risk, (2) use weekend or shift-change windows, (3) sequence Machine #2 and #3 over the next 2 weeks, (4) establish a mandatory PM compliance policy — overdue PMs cannot be deferred by production without plant manager sign-off
- Frame it as a risk-based decision: the plant manager should not allow a production supervisor to override a safety-critical maintenance requirement
- Reference TPM principles — maintenance and production must be aligned on equipment ownership

**Message 5 — Edge Case: Customer Audit Coming**
```
Ford is sending their STA (Supplier Technical Assistance) team for a quality audit next month. Given everything we've found, what are we most exposed on, and what's the 30-day action plan?
```

**Expected Response Elements:**
- Ford STA audits are rigorous — they will review IATF 16949 compliance, PPAP documentation, SPC data, FMEA, control plans, and corrective action effectiveness
- Top exposures:
  1. **Unauthorized tooling change** — No formal change control, no PFMEA update, no first-article qualification. This is a direct IATF 16949 nonconformance. Ford will cite this immediately.
  2. **SPC showing process not capable** — March Cpk of 0.89 is well below the Ford minimum of 1.33 (1.67 for safety-critical dimensions, which brake rotors are). The out-of-control point in March W2 with an inadequate corrective action will be flagged.
  3. **Operator training gaps** — Untrained operator on a safety-critical part with no skills assessment and no documented training plan. IATF 16949 Section 7.2 requirement.
  4. **Overdue preventive maintenance** — Demonstrates inadequate maintenance system management. Connected to equipment reliability and product quality.
  5. **Scrap trend with no formal corrective action** — A 2.3x scrap rate increase over 3 months with no 8D or formal corrective action underway.
- 30-day action plan: (1) Revert to Sandvik tooling immediately and run first-article qualification, (2) issue an 8D for the scrap increase with full root cause analysis, (3) complete all overdue PM tasks, (4) create a training plan for Jackson with documented OJT and competency assessment, (5) update the PFMEA and control plan to reflect any process changes, (6) recalculate OEE correctly and present the honest numbers, (7) brief the Ford STA team proactively on the corrective actions — they respect transparency far more than they respect hidden problems
- If the audit finds the unauthorized tooling change on a safety-critical part (brake rotors), Ford could escalate to a Controlled Shipping Level 2 (CS-2) or New Business Hold

---

## Scenario 2 — EHS Compliance Audit

### Agents Tested
`ehs_agent`, `quality_controller`, `process_agent`

### Mock Data
`mock-data/scenario-2.md` (Chemical processing facility EHS compliance data)

### Messages

**Message 1 — Set the Stage**
```
We just completed a 6-month internal EHS audit at our chemical processing facility. I need you to assess our compliance posture and identify any critical gaps before we get an OSHA inspection. What do you need to see?
```

**Expected Response Elements:**
- Structured EHS audit review framework covering: injury/illness recordkeeping (OSHA 300 log analysis), process safety management (PSM) compliance, chemical management (HazCom, storage compatibility), air and water permit compliance, emergency preparedness, PPE programs, and training records
- Reference to OSHA inspection priorities (imminent danger, fatalities/catastrophes, complaints, programmed/planned inspections, follow-ups)
- Note that a chemical processing facility with PSM-covered processes receives heightened OSHA scrutiny
- Should ask for OSHA 300 logs, incident investigation reports, chemical inventory, emissions data, PPE audit results, training records, EAP documentation, and PSM compliance records

**Message 2 — Provide the Data**
```
Here's the full audit package. Give me your honest assessment of where we stand:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- **Issue #1 (TRIR):** Immediately flag that the TRIR of 8.49 is THREE TIMES the industry average of 2.8, not "within acceptable range" as the EHS report claims. This rate would place the facility on OSHA's targeting list for programmed inspections. The EHS report's characterization is either negligent or deliberately misleading.
- **Issue #2 (Reactor Room B Clustering):** Identify the pattern of FOUR safety events in Building 2, Reactor Room B within 40 days (2 recordable incidents + 2 near-misses). Flag that each was investigated in isolation with no systemic analysis. The corrective actions ("remind employees," "post signage") are the weakest level of the hierarchy of controls.
- **Issue #3 (Chemical Incompatibility):** Identify the CRITICAL hazard of nitric acid (strong oxidizer) stored in Bay 3B alongside flammable organic solvents (toluene, MEK, acetone, xylene). This is an imminent danger that could result in fire, explosion, or toxic fume release. Demands immediate corrective action.
- **Issue #4 (Air Emissions Exceedance):** Flag STK-102 exceeding VOC and HAPs permit limits for 2+ consecutive months with no deviation report filed, no root cause investigation, and no corrective action. STK-101 VOC also exceeded in February. Both show worsening trends. Unreported exceedances compound the violation.
- **Issue #5 (Outdated EAP):** Identify that the Emergency Action Plan has not been updated since August 2023 despite 6 facility modifications including an entire new building, new tank farm, mezzanine expansion, and new reactor. Building 4 workers have no evacuation route. Drill records confirm the gap.
- **Issue #6 (PPE Non-Compliance):** Flag 22.9% eye protection non-compliance with corrective action limited to "remind employees." In a chemical plant handling concentrated acids and flammable solvents, this is unacceptable. Tank farm at 70% compliance is the most alarming area.
- Overall assessment: This facility is NOT ready for an OSHA inspection. Multiple issues would result in citations, and the chemical storage incompatibility could be cited as a willful violation.
- Prioritized corrective action plan

**Message 3 — Challenge the Expert**
```
Karen (our EHS manager) says the TRIR comparison to industry average isn't fair because we have more manual operations than most chemical plants. She also says the near-misses in Reactor Room B are "a good sign because it means people are reporting." How do you respond?
```

**Expected Response Elements:**
- On the TRIR comparison: The NAICS 325 (Chemical Manufacturing) industry average already accounts for the range of operations in the sector, including manual processes. A TRIR of 8.49 is not 10-20% above average — it is 3x the average. Even the most manual-intensive chemical operations rarely exceed 5.0 TRIR if properly managed. The argument doesn't hold.
- More importantly, the TRIR is not the real issue — the TRIR is a SYMPTOM. The real issues are the systemic failures in hazard control: inadequate engineering controls, behavioral-only corrective actions, untrained workers, outdated emergency plans, and chemical incompatibility hazards.
- On the near-miss reporting: Karen is partially right — reporting near-misses IS better than not reporting them. A healthy reporting culture is genuinely valuable. BUT: near-miss reports are only valuable if they trigger investigation and corrective action. These near-misses had NO root cause investigation and corrective actions that amount to "try harder."
- Two near-misses in the same area within 30 days, PLUS two recordable incidents in the same area, is not a "good sign" — it is a pattern that predicts a serious injury or fatality if the systemic causes are not addressed.
- The hierarchy of controls is non-negotiable: elimination > substitution > engineering controls > administrative controls > PPE. Every corrective action in the audit data sits at the bottom two levels. No engineering controls have been implemented for any finding.
- Karen is managing all EHS with only 2 technicians and a vacant specialist position. This is a staffing and resource problem, not a competence problem. The EHS department is likely overwhelmed and under-resourced.

**Message 4 — The Critical Finding**
```
You flagged the nitric acid storage. The warehouse manager says they moved it to Bay 3B six months ago because Bay 3A was full. He says "it's fine because the containers are sealed and on pallets — they can't mix." Is that an acceptable position?
```

**Expected Response Elements:**
- Absolutely not. This is an imminent danger that must be corrected TODAY, not "monitored."
- "Sealed containers on pallets" is not a chemical compatibility control. Containers fail — forklift punctures, earthquakes, corrosion, dropped containers, valve failures, manufacturing defects. Chemical storage compatibility requirements exist precisely because spills WILL eventually happen.
- The specific hazard: nitric acid (68%, a strong oxidizer) in contact with organic solvents (toluene, MEK, acetone, xylene — all flammable) can cause violent exothermic reactions, spontaneous ignition, explosion, and toxic NOx gas generation. This is not theoretical — it is well-documented chemistry.
- Regulatory citations:
  - OSHA 29 CFR 1910.106 — Flammable liquid storage requirements, separation from oxidizers
  - NFPA 400 — Hazardous Materials Code, requires physical separation or fire-rated barrier between oxidizers and flammables
  - The facility's OWN SDS for nitric acid states: "Keep away from organic materials, flammable substances, and reducing agents"
  - IFC/IBC building codes for chemical storage compatibility
- If OSHA finds this during an inspection, it would likely be cited as a willful violation ($156,259 maximum per violation) because the hazard is obvious, well-known, and the company's own SDS warns against it. If an incident occurs, criminal referral to DOJ is possible.
- Immediate actions: (1) Move nitric acid to Bay 3A or a dedicated oxidizer storage area TODAY, (2) install secondary containment adequate for the largest container, (3) conduct a full chemical storage compatibility review of the entire warehouse using a compatibility matrix, (4) retrain warehouse staff on chemical segregation requirements, (5) update the warehouse layout map and storage procedures

**Message 5 — Edge Case: Production Pressure**
```
Steve (plant manager) says we can't shut down the line to fix these EHS issues because we're behind on orders and he'll lose a major customer. He wants to "address the findings over the next 6 months as budget allows." What's my recommendation?
```

**Expected Response Elements:**
- The chemical storage incompatibility is not a 6-month fix — it is a TODAY fix. Moving nitric acid to proper storage takes hours, not days, and costs near zero. There is no production impact. This is non-negotiable.
- The air emissions exceedances have already created a regulatory violation that gets worse every day. Every additional month of unreported exceedance is an additional violation with additional penalties. Reporting NOW and implementing corrective action demonstrates good faith. Waiting 6 months is concealment.
- Frame the business case in terms Steve understands:
  - OSHA willful violation for chemical storage: up to $156,259 per violation
  - EPA penalties for unreported air emissions: up to $59,950 per day per violation (already 60+ days = $3.6M+ potential exposure)
  - Workers' compensation experience modification rate increase from TRIR of 8.49: likely 1.3-1.5x modifier = hundreds of thousands in premium increases
  - Customer EHS audits (many large chemical customers audit suppliers): failing an EHS audit can result in losing the customer permanently — not just temporarily
  - Personal liability: plant managers can be personally cited by OSHA and EPA. Criminal penalties exist for knowing violations.
- A serious injury or fatality at this facility, given the documented hazards and the documented failure to address them, would be catastrophic — legally, financially, and morally
- Recommended approach: Triage by risk and cost:
  - Immediate (zero cost): Move nitric acid, file air emissions deviation reports, update evacuation routes for Building 4
  - Within 30 days (minimal cost): Root cause investigations for Reactor Room B incidents, PPE enforcement program, EAP update, complete overdue training
  - Within 90 days (moderate cost): Engineering controls for Reactor Room B (splash guards, lighting, drainage), air emissions source investigation and abatement, fill EHS specialist vacancy
  - Within 6 months (capital investment): Comprehensive chemical storage redesign, emissions control equipment upgrades
- Steve's "6 months as budget allows" approach is not risk management — it is risk acceptance with documented knowledge of the hazards. If anything goes wrong, the audit findings and his documented response become plaintiff's exhibits in the lawsuit.
