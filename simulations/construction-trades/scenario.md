# Simulation Scenarios: Construction & Trades

> Multi-turn conversation scripts for testing agents in the Construction & Trades industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Commercial Bid Estimate Review

### Agents Tested
`bid_estimator`, `material_calc`, `schedule_optimizer`

### Mock Data
`mock-data/scenario-1.md` (Commercial bid estimate — 15,000 SF office tenant improvement)

### Messages

**Message 1 — Set the Stage**
```
We're bidding a 15,000 SF office tenant improvement in an existing commercial building in Denver. Bid is due in 3 weeks. I need you to review our estimate package before we submit. What do you look at first?
```

**Expected Response Elements:**
- Structured bid review framework: plans/specs completeness check, quantity takeoff verification, subcontractor scope gap analysis, pricing validation, schedule feasibility, contract terms review
- Reference to CSI MasterFormat organization for systematic review
- Should ask for the full bid package (plans, specs, subcontractor quotes, takeoff, schedule, contract)
- Mention of TI-specific concerns: existing conditions investigation, building rules/restrictions, after-hours work requirements, permit timeline
- Should note that TI work in existing buildings carries higher estimating risk than new construction — contingency is essential

**Message 2 — Provide the Data**
```
Here's the full bid package — plans, takeoff, sub quotes, and schedule. Tell me what's wrong before I sign this bid:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the Sparks & Sons electrical quote anomaly ($82,500 vs. $118,200-$124,800 from competitors — 30%+ below, likely missing data cabling scope worth $35,000-$45,000)
- Catch the missed drywall return wall from the RCP (Detail 3/A2.1 — 14 LF x 12' full-height server room wall, ~$8,400 underestimate)
- Flag the schedule problem: permit submittal shown as 0-day milestone with demolition starting same day — Denver permit review is 3-4 weeks, making actual duration 15-16 weeks vs. the 12 weeks shown
- Note outdated material pricing (Q3 2025 steel stud rates vs. current Q1 2026 with 14% increase)
- Flag the missing contingency line item (standard 5-10% for TI work)
- Identify the Davis-Bacon prevailing wage issue (GSA-leased building triggers federal prevailing wage requirements)
- Prioritized list of corrections needed before bid submission

**Message 3 — Challenge on the Electrical Quote**
```
Sparks & Sons says their quote covers "full electrical per plans and specs" — they didn't list any exclusions. Shouldn't we be able to hold them to that?
```

**Expected Response Elements:**
- Acknowledge that contractually, a quote stating "full electrical per plans and specs" with no exclusions could theoretically be enforced
- BUT: the practical reality is very different from the legal theory
- If Sparks & Sons missed $35,000-$45,000 in data cabling scope, they will either (a) refuse to perform the work and claim it's Division 27, not Division 26, (b) file a claim for scope change, (c) do substandard work to minimize losses, or (d) go bankrupt mid-project
- A subcontractor losing money is the GC's biggest liability — they cut corners, pull workers off the job, delay other trades, or abandon the project entirely
- The GC's financial exposure if Sparks & Sons defaults: re-procuring the electrical scope mid-project costs 20-40% more than the original quote (mobilization, premium pricing, schedule impact)
- Professional approach: call Sparks & Sons and walk through the scope line by line. Ask specifically about Section 27 10 00 data cabling. If they confirm it's included and can demonstrate they priced it, use the number. If they missed it, you need their revised number or you use the next lowest bidder (Mile High at $118,200 + data cabling scope)
- Reference to the concept that the cheapest bid is often the most expensive project

**Message 4 — Schedule Deep Dive**
```
The owner says they've already signed a lease starting August 15 and furniture is being delivered August 10. They won't negotiate the completion date. Can we make the 12-week schedule work?
```

**Expected Response Elements:**
- Direct answer: no, not with the current approach. The permit timeline makes August 7 completion impossible if the GC waits until May 15 to submit for permit.
- Calculate the real timeline: 3-4 weeks permit review + 12 weeks construction = 15-16 weeks. Starting May 15, completion is September 4-11 — 4+ weeks past deadline.
- Mitigation strategies (prioritized):
  1. Submit for permit immediately (this week), before contract execution — most jurisdictions accept permit applications from the architect without a GC on record. This front-loads the review and potentially allows a May start.
  2. Fast-track permitting — Denver offers expedited review for additional fees (~$2,000-$4,000). Check eligibility.
  3. Phased permitting — submit demolition permit separately (faster review), begin demo while full TI permit is reviewed.
  4. Negotiate NTP tied to permit approval, not calendar date — shifts permit risk to owner.
  5. If permit cannot be accelerated, compress the construction schedule: overlap framing and rough MEP (2 crews working concurrently instead of sequentially), extend to 6-day work weeks (adds cost), work extended hours within building restrictions.
- Risk disclosure: if the GC signs a contract with an August 7 completion date knowing the schedule is unachievable, the $1,500/day liquidated damages exposure is $42,000+ and the GC has no defense because they knew the schedule was impossible at bid time
- Advise the owner in writing that the schedule is contingent on permit approval by a specific date — put this in the contract

**Message 5 — Edge Case: Prevailing Wage Discovery**
```
I just found out the building is on a GSA master lease. The owner didn't mention prevailing wage in the bid documents. What does this mean for our number?
```

**Expected Response Elements:**
- This is a potentially catastrophic finding. The Davis-Bacon Act requires prevailing wage on all construction in or on federally owned or leased buildings.
- The entire labor component of the estimate must be repriced using DOL prevailing wage rates for Denver, CO
- Quantify the impact: labor is roughly 40-45% of the $575,804 subtotal = $230,000-$260,000 in labor. Denver prevailing wage rates are 40-65% higher than open-shop rates. The labor increase is approximately $92,000-$169,000.
- This doesn't just affect the GC — every subcontractor quote must also be at prevailing wage rates. The HVAC, electrical, and plumbing subs need to confirm their quotes are prevailing wage.
- Additional Davis-Bacon requirements: certified payroll submitted weekly, wage rate determination posted on site, 10-day notification for any apprentices, payroll records retained for 3 years
- If the owner failed to include Davis-Bacon in the bid documents but the project is subject to it, this is the owner's error — the GC has grounds to adjust the contract price
- Options: (a) reprice the entire estimate at prevailing wage and submit the adjusted bid, (b) submit the original bid with a prevailing wage exclusion/qualifier, (c) withdraw from the bid if the prevailing wage makes the project unprofitable
- The GC must verify Davis-Bacon applicability directly — check the GSA lease, contact the building owner's legal counsel, and potentially contact the DOL Wage and Hour Division
- Warning: bidding without prevailing wage on a Davis-Bacon project is not just a financial risk — it's a federal violation. If discovered after contract award, the GC faces back-pay liability, debarment from future federal work, and potential False Claims Act exposure

---

## Scenario 2 — Construction Site Safety Audit

### Agents Tested
`safety_compliance`, `inspection_agent`

### Mock Data
`mock-data/scenario-2.md` (Active commercial construction site safety audit)

### Messages

**Message 1 — Set the Stage**
```
I'm the safety director for a GC running a 4-story commercial build in Austin. I need to do a comprehensive site safety audit before our client's quarterly review. What should my audit cover?
```

**Expected Response Elements:**
- Structured safety audit framework organized by OSHA 29 CFR 1926 subparts
- Focus Four hazards as primary categories: falls (Subpart M), struck-by (Subpart CC — cranes, Subpart R — steel), caught-in/between (Subpart P — excavation), electrocution (Subpart K)
- Site-specific elements: fall protection plan compliance, excavation protective systems, crane inspection records, scaffold inspection, GFCI testing, toolbox talk attendance, fire protection, emergency preparedness
- Documentation review: OSHA 300 log, competent person designations, training records, equipment inspection certificates, SDS binders
- Multi-employer worksite considerations: GC responsibility for subcontractor safety under the controlling employer doctrine
- Should ask for the site safety plan, recent inspection records, and any open corrective actions

**Message 2 — Provide the Data**
```
Here's the full site audit data — safety plan, inspection findings, crane records, toolbox talks, everything. Give me the unvarnished assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the scaffold fall protection violation as the most immediately dangerous condition (3 workers at 14 feet without harnesses/guardrails — OSHA serious violation, potential for willful if GC had knowledge)
- Flag the unprotected excavation at 7.5 feet as life-threatening — no trench box, no sloping, no shoring, plus compounding violations (no inspection in 7 days, no post-rain inspection, inadequate egress, no soil classification). Potential willful violation.
- Catch the expired GFCI testing (4 months overdue, last test November 2025)
- Identify the expired crane annual inspection certificate (17 days past expiration, crane in daily use)
- Flag the toolbox talk attendance gap (same 8 GC workers every week, 67% non-participation, zero subcontractor attendance)
- Note expired fire extinguisher inspection tags (3 months overdue in trailer and Floor 2 west corridor), missing extinguisher on Floor 3
- Overall assessment: this site has multiple serious and potentially willful violations across multiple OSHA subparts — it is NOT ready for a client safety review
- Prioritized corrective action plan starting with immediately dangerous conditions (evacuate the trench, stop scaffold work, shut down the crane)

**Message 3 — Challenge on the Excavation**
```
My superintendent says it's "just a shallow trench" and they'll have the trench box in tomorrow. He wants to keep the pipe crew working today to stay on schedule. Is that acceptable?
```

**Expected Response Elements:**
- Absolutely not. The trench is 7.5 feet deep — that is not "shallow" by any definition. OSHA requires protective systems at 5 feet.
- "Tomorrow" is not acceptable when workers are in the trench today. A cave-in happens in seconds with no warning. Workers cannot outrun collapsing soil.
- The superintendent's attitude is itself a red flag — he is the designated competent person for excavations on this site, and he is the one proposing to continue work in an unprotected trench
- The multi-violation situation (no protection + no inspection + post-rain + inadequate egress) dramatically increases cave-in probability. Clay soil after rain is particularly unstable.
- If a worker dies in this trench today while the GC knew about the conditions and chose to continue for schedule reasons, this is textbook willful violation + criminal negligence
- OSHA willful violation penalty: up to $156,259. Criminal prosecution for a willful violation causing death: up to 6 months imprisonment (first offense) or 12 months (repeat)
- The correct action is immediate: (1) evacuate all workers from the trench NOW, (2) barricade the trench to prevent entry, (3) do not resume work until the trench box is in place and a documented soil classification and daily inspection have been performed, (4) document the stop-work action
- The schedule impact of one day's delay on pipe installation is trivial compared to the consequences of a cave-in fatality

**Message 4 — Regulatory Exposure Assessment**
```
If OSHA showed up tomorrow, what are we looking at in terms of citations and penalties? Give me the worst case.
```

**Expected Response Elements:**
- Systematic penalty calculation based on current OSHA penalty structure (2026 rates):
- **Scaffold — Fall Protection (Serious, potential Willful):**
  - Serious: up to $16,131 per instance x 3 workers = $48,393
  - If classified as Willful: up to $156,259 per instance x 3 = $468,777
- **Excavation — No Protective System (Serious, potential Willful):**
  - Multiple violations: no protection, no soil classification, no daily inspection, no post-rain inspection, inadequate egress
  - Willful (unprotected trench): $156,259
  - Serious (no inspection, no egress): $16,131 x 3-4 instances = $48,393-$64,524
- **Crane — Expired Annual Inspection (Serious):**
  - $16,131
- **GFCI — Testing not current (Other-than-Serious or Serious):**
  - $16,131
- **Toolbox Talk / Training (Other-than-Serious):**
  - $16,131
- **Fire Extinguisher (Other-than-Serious):**
  - $16,131
- **LOTO violation (Serious):**
  - $16,131
- **Worst-case total (if willful classifications applied to scaffold and excavation):** $700,000-$800,000+
- Beyond penalties: OSHA can issue an Imminent Danger order shutting down specific operations (the trench, the scaffold, potentially the crane). A stop-work order on steel erection delays the entire project.
- If there's a fatality: OSHA conducts a mandatory investigation, potential criminal referral to DOJ, wrongful death litigation, and the contractor's EMR (Experience Modification Rate) increases, raising workers' comp premiums for 3 years
- Repeat violations within 5 years of a previous citation: penalties double
- Reputational damage: OSHA citations are public record, searchable in OSHA's online database. Clients, owners, and bonding companies review this data.

**Message 5 — Edge Case: Subcontractor Responsibility**
```
The scaffold and trench issues are subcontractor crews — not my employees. The drywall sub set up the scaffold and the excavation sub dug the trench. Can we push the OSHA liability to them?
```

**Expected Response Elements:**
- No. Under OSHA's Multi-Employer Worksite Citation Policy (CPL 02-00-124), the GC is the "controlling employer" and can be cited for hazardous conditions created by subcontractors.
- OSHA classifies employers on multi-employer worksites into four categories:
  1. **Creating employer** — the employer whose workers created the hazard (the drywall sub for the scaffold, the excavation sub for the trench)
  2. **Exposing employer** — the employer whose workers are exposed to the hazard (same subs in this case)
  3. **Correcting employer** — the employer responsible for correcting the hazard (could be the GC or the sub, depending on contract terms)
  4. **Controlling employer** — the employer with authority to require other employers to correct hazards (the GC on virtually every commercial project)
- The GC is citable as the controlling employer if it: (a) had authority to require the sub to comply with safety standards (yes — standard subcontract safety clauses give the GC this authority), AND (b) failed to exercise reasonable care in monitoring and enforcing safety (the toolbox talk data proves the GC was not training or monitoring subcontractor safety)
- The subcontractors will ALSO be cited as creating and exposing employers — but their citation does not reduce the GC's citation
- The GC's defense would be stronger if it could demonstrate: regular safety inspections that caught and corrected violations, documented enforcement actions against subs for safety violations, training records showing subs received safety orientation. The audit data shows none of these are in place.
- The toolbox talk records actually hurt the GC's case — they prove the GC was conducting safety meetings but systematically excluded subcontractors, demonstrating awareness of safety requirements combined with failure to extend them to the workers performing the most dangerous tasks
- Bottom line: the GC will be cited alongside the subs, not instead of them. And the GC's failure to exercise its controlling employer responsibilities may actually result in higher penalties than the subs receive
