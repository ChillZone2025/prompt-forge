# Simulation Scenarios: Pharma & Biotech

> Multi-turn conversation scripts for testing agents in the Pharma & Biotech industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Clinical Trial Safety Assessment

### Agents Tested
`clin_trial`, `drug_safety`

### Mock Data
`mock-data/scenario-1.md` (Phase II oncology trial safety report)

### Messages

**Message 1 — Set the Stage**
```
We're 18 months into a Phase II oncology trial and the DSMB just met. I need an independent safety assessment before we brief the steering committee. What's your framework?
```

**Expected Response Elements:**
- Structured safety review framework (aggregate AE analysis, SAE-level review, signal detection, benefit-risk assessment)
- Reference to ICH E6 GCP sponsor safety responsibilities
- Mention of DSMB charter review and independence verification
- Framework should include hepatotoxicity-specific monitoring given PD-L1 drug class
- Should ask for the safety data package, DSMB minutes, protocol, and IB

**Message 2 — Provide the Data**
```
Here's the safety data package. Analyze and give me your assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the Site 08 hepatotoxicity cluster (2 Grade 4 events in 15 patients vs. 0 at other sites) — this is the most critical finding
- Flag the SUSAR reporting timeline violation (22 days vs. 15-day requirement)
- Challenge the DSMB's recommendation to continue without modification
- Question the "encouraging" efficacy characterization given the CI includes futility
- Identify the protocol deviations for autoimmune history enrollment
- Flag the outdated consent forms at EU sites
- Provide a prioritized action plan

**Message 3 — Challenge the Expert**
```
The principal investigator says the hepatotoxicity signal is "consistent with the drug class" and doesn't require dose modification. Is that a sufficient response?
```

**Expected Response Elements:**
- Acknowledge that hepatotoxicity is a known class effect of PD-L1 inhibitors, BUT:
- The rate at Site 08 (13.3% Grade 4) is dramatically above class average (typically 1-3% Grade 3+ hepatic events with anti-PD-L1s)
- "Consistent with class" doesn't explain the site-specific clustering
- A responsible safety response requires root cause investigation (concomitant meds, manufacturing lot, protocol adherence at site)
- Distinguish between expected class effect at population level vs. alarming cluster at site level
- Recommend specific actions: enhanced hepatic monitoring, potential site audit, hold enrollment at Site 08

**Message 4 — Regulatory Deep Dive**
```
If we need to file an IND safety report with FDA, what's the timeline and what needs to be included?
```

**Expected Response Elements:**
- 21 CFR 312.32 requirements for IND safety reports
- 15-calendar-day timeline for written report of SUSARs (the autoimmune encephalitis is already overdue)
- 7-day telephone/fax requirement if fatal or life-threatening
- Content requirements: MedWatch 3500A form, narrative, relevant lab data, rechallenge information if applicable
- Discuss that the sponsor is already in violation — the SUSAR occurred March 4, it's now late March
- Risk of clinical hold if FDA determines the IND safety report was late
- Recommend filing immediately with acknowledgment of delay and remediation plan for reporting procedures
- Should mention EMA and PMDA reporting obligations since this is a multinational trial

**Message 5 — Edge Case: Commercial Pressure**
```
Our CEO is presenting to investors next week and wants to use the 18% ORR as "proof of efficacy." The interim analysis wasn't powered for efficacy. How do I advise him?
```

**Expected Response Elements:**
- Firmly advise against presenting interim ORR as "proof of efficacy"
- The interim analysis was pre-specified for futility assessment, not efficacy demonstration
- 95% CI (11.2-27.4%) includes the futility threshold — statistically, you cannot exclude that the drug is futile
- Conditional power of 35% means the study has a ~65% probability of failing to meet the primary endpoint
- SEC and FDA implications: public statements about unapproved drugs in clinical trials are subject to securities law (forward-looking statements) and FDA promotional regulations (pre-approval promotion)
- Appropriate framing: "The study has crossed the futility boundary and continues enrollment" — factual without overstating
- Reference the CRO biostatistician's internal note as the objective assessment
- Flag that if the safety issues (especially the SUSAR reporting violation) become known alongside inflated efficacy claims, the combination is reputationally and legally devastating

---

## Scenario 2 — GMP Quality Review

### Agents Tested
`pharma_qc`, `reg_submit`

### Mock Data
`mock-data/scenario-2.md` (GMP manufacturing quality review for injectable drug product)

### Messages

**Message 1 — Set the Stage**
```
We're preparing for a pre-approval inspection at our CDMO and I want to review their quality posture. What red flags should I look for?
```

**Expected Response Elements:**
- Structured pre-inspection readiness framework
- Key areas: data integrity (audit trails, Part 11 compliance), CAPA timeliness, deviation investigations, environmental monitoring trends, OOS investigation quality, batch record review thoroughness
- CDMO-specific concerns: multi-product facility cross-contamination controls, QP oversight adequacy, technology transfer completeness
- Reference to FDA PAI focus areas for biologics (process validation, analytical method validation, reference standard management)
- Should mention reviewing media fill history and aseptic process qualification status
- Mention importance of reviewing open CAPAs and overdue actions

**Message 2 — Provide the Data**
```
Here's the quality review package. Assess our inspection readiness:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of Grade A EM excursion and flawed batch release justification for 2026-003
- Flag the OOS investigation as data integrity concern (retesting without assignable cause)
- Highlight the overdue CAPA-2025-029 (data integrity, 90 days past due) and pattern of "resetting the clock" with CAPA-2026-003
- Question the stability data trend and lack of statistical modeling for 36-month shelf life claim
- Flag the media fill failure gap (no retrospective batch assessment for 3 batches)
- Overall assessment: NOT inspection ready — multiple findings that FDA will escalate
- Prioritized remediation plan

**Message 3 — Challenge the Expert**
```
The CDMO's QA director says the OOS retesting approach is "standard practice" and "all our other clients accept it." Should we?
```

**Expected Response Elements:**
- Absolutely not. The practice is explicitly non-compliant with FDA guidance.
- FDA's 2006 OOS guidance is clear: initial OOS results can only be invalidated when an assignable laboratory cause is identified
- "All our other clients accept it" is a red flag, not reassurance — it means this non-compliant practice is systemic
- The FDA already cited this in the 483 (Observation 2) — the CDMO cannot claim ignorance
- If the OOS is truly a lab error, the investigation must demonstrate the specific error (wrong dilution, pipetting error, incorrect standard, instrument malfunction with documented evidence)
- The combination of retesting without cause + audit trail gaps suggests a broader data integrity problem
- Recommend demanding a retrospective review of all OOS investigations at this CDMO for the past 2 years
- This finding alone could be grounds for reconsidering the CDMO relationship

**Message 4 — Risk Assessment**
```
What's the risk that the overdue data integrity CAPA escalates to a warning letter, and what should we demand from the CDMO before the inspection?
```

**Expected Response Elements:**
- Risk is high. Data integrity is FDA's #1 enforcement priority in pharmaceutical manufacturing.
- The escalation pattern: 483 observation -> inadequate response -> Warning Letter -> Import Alert (for non-US sites) -> consent decree (extreme)
- CAPA-2025-029 being overdue means the CDMO knew about the problem, set a deadline, and missed it — this demonstrates inadequate quality system management
- CAPA-2026-003 appearing to address the same issue with a later deadline looks like clock-resetting
- For an Irish CDMO, HPRA (the local regulator) will also be concerned, and FDA/HPRA share inspection information under mutual recognition
- Demands before inspection: (1) complete CAPA-2025-029 immediately, (2) provide evidence that audit trail gaps did not result in data manipulation, (3) implement continuous audit trail monitoring, (4) conduct retrospective review of all data processed during audit trail gaps, (5) engage independent data integrity consultant
- Timeline pressure: if NDA filing depends on this CDMO, a Warning Letter could delay approval by 1-2 years

**Message 5 — Edge Case: Patient Safety Decision**
```
The CDMO wants to release Batch 2026-003 (the one with the Grade A excursion) because "the organisms are environmental and non-pathogenic." It's a sterile injectable. What's our position?
```

**Expected Response Elements:**
- The batch should NOT be released in its current state. This is a patient safety issue with no acceptable commercial compromise.
- Grade A action limit is 0 CFU per EU GMP Annex 1. The limit is absolute. The identity of the organism is irrelevant to the compliance determination.
- The purpose of Grade A monitoring is to verify the integrity of the aseptic barrier — recovery of ANY organism means the barrier was breached
- Non-pathogenic organisms in a Grade A zone indicate the same environmental breach that could allow pathogenic organisms — the next excursion could be *Pseudomonas*, *Burkholderia*, or *Bacillus cereus*
- The organism identification (*Micrococcus luteus*) actually supports a personnel-derived contamination event, suggesting gowning or aseptic technique failure
- Options: (1) additional sterility testing with extended incubation, (2) bioburden testing of retained samples, (3) parametric release assessment if applicable — but none of these change the fundamental compliance gap
- The QP (Dr. Brennan) has personal legal liability for batch certification under EU law — releasing this batch puts her registration at risk
- This is the type of decision that, if it goes wrong and a patient develops a serious infection, will be reviewed by regulators, litigators, and media — "we knew about the Grade A excursion and released anyway" is indefensible
- Recommend rejecting release, initiating thorough contamination investigation, and manufacturing a replacement batch
