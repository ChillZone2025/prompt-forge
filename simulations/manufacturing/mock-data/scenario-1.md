# Production Line Performance Review — Automotive Parts

## Facility Overview

| Field | Detail |
|-------|--------|
| **Facility** | Precision Components Inc., Plant 3 — Dayton, OH |
| **Product** | Brake rotors (vented disc), Part #BR-4420 |
| **Customer** | Tier 1 automotive supplier (supplies to Ford, GM, Stellantis) |
| **Production Line** | CNC Machining Line 7 (5 Mazak HCN-5000 horizontal machining centers in series) |
| **Material** | Gray cast iron (ASTM A48, Class 40) |
| **Annual Volume** | 480,000 units (target), 3-shift operation, 5 days/week |
| **Quality Standard** | IATF 16949:2016 certified, customer-specific requirements per Ford GSQM |
| **Reporting Period** | January 1 – March 31, 2026 (Q1) |
| **Plant Manager** | Dave Kowalski |
| **Quality Manager** | Maria Chen |
| **Maintenance Supervisor** | Jim Ratliff |
| **Production Supervisor (Line 7)** | Tony Reeves |

---

## Production Summary — Q1 2026

### Monthly Production Output

| Month | Planned Output | Actual Output | Good Units | Scrap | Rework | Scrap Rate |
|-------|---------------|--------------|------------|-------|--------|------------|
| January | 40,000 | 37,200 | 36,420 | 780 | 312 | 2.1% |
| February | 40,000 | 35,800 | 34,510 | 1,290 | 485 | 3.6% |
| March | 40,000 | 34,100 | 32,462 | 1,638 | 520 | 4.8% |
| **Q1 Total** | **120,000** | **107,100** | **103,392** | **3,708** | **1,317** | **3.5%** |

### OEE Report — As Submitted by Production Team

| Component | January | February | March | Q1 Average |
|-----------|---------|----------|-------|------------|
| Availability | 91.2% | 88.5% | 85.3% | 88.3% |
| Performance | 92.0% | 90.1% | 88.7% | 90.3% |
| Quality | 97.9% | 96.4% | 95.2% | 96.5% |
| **OEE** | **82.2%** | **76.8%** | **72.0%** | **77.0%** |

> **Production Team Note:** "Q1 OEE averaged 77.0%. While below our 85% target, this represents typical seasonal variability. We expect Q2 to recover as supply chain disruptions stabilize."

### OEE Calculation Basis (from Production Team's Spreadsheet)

| Parameter | Value | Notes |
|-----------|-------|-------|
| Total Calendar Time (Q1) | 2,160 hours | 90 days x 24 hours |
| **Planned Production Time (used as basis)** | **1,560 hours** | Excludes weekends (720h), planned maintenance (48h), holidays (32h), planned breaks (80h) |
| Actual Running Time | 1,378 hours | Planned Production Time minus unplanned downtime |
| Ideal Cycle Time | 72 seconds/unit | Per engineering standard |
| Total Pieces Produced | 107,100 units | Includes scrap and rework |
| Good Pieces | 103,392 units | Excludes scrap and rework |

<!-- PLANTED ISSUE #1: The OEE calculation uses Planned Production Time (1,560 hours) as the denominator
     for Availability instead of Total Available Time. If Total Available Time = Total Calendar Time minus
     only weekends and holidays (2,160 - 720 - 32 = 1,408 hours), then:
     - Availability = 1,378 / 1,408 = 97.9% (looks inflated because planned maintenance and breaks are excluded from denominator)

     Actually, the correct approach: Total Available Time should be the time the plant COULD run if fully utilized.
     For a 3-shift, 5-day operation: 5 days x 3 shifts x 8 hours x 13 weeks = 1,560 scheduled hours.
     But the production team ALSO excluded planned maintenance (48h) and breaks (80h) from the denominator.

     Correct calculation:
     - Scheduled Production Time = 1,560 hours (this includes maintenance and breaks as available time)
     - Planned Downtime = 48 (PM) + 80 (breaks) = 128 hours
     - These should REDUCE availability, not be excluded from the denominator

     Recalculated:
     - Availability = 1,378 / 1,560 = 88.3% (not 91.2/88.5/85.3 monthly)

     But there's a bigger issue. The monthly Availability figures DON'T reconcile:
     - January: 91.2% of what? Running time in Jan should be ~460h out of 520h scheduled = 88.5%
     - The team appears to be calculating Availability as (Running Time) / (Scheduled Time - Planned Stops)
     - True Availability = Running Time / Scheduled Time (planned stops count against availability)

     Recalculated TRUE OEE:
     - True Availability = 1,378 / 1,560 = 70.4% (planned maintenance and breaks reduce availability)

     Wait — breaks are typically excluded in OEE standards (they're not "available" time).
     But planned maintenance IS debated. The key issue: the production team excluded 48 hours of planned
     maintenance from the denominator AND excluded unplanned "waiting for material" time as if it were
     planned downtime (see Downtime Pareto below — 112 hours of "waiting for material").

     Recalculated with material wait time as unplanned downtime:
     - True Available Time = 1,560 - 80 (breaks) = 1,480 hours
     - True Running Time = 1,378 - 0 (already subtracted) = ...

     Simplification for the planted issue:
     The reported OEE of 77.0% is inflated because:
     1. Planned maintenance (48h) excluded from denominator
     2. "Waiting for material" (112h) partially hidden in the way downtime is categorized

     True OEE recalculation:
     Available Time = 1,480 hours (scheduled minus breaks only)
     Running Time = 1,378 hours minus the 112 hours waiting for material that was miscategorized
     Actually, let's keep it simpler in the data and let the agent find it.

     The report says OEE = 77.0% but when you back-calculate:
     Available Time basis should be 1,480h (scheduled - breaks)
     Running Time = 1,378h — but this number already had 182h of downtime removed from 1,560h
     If the real basis is 1,480h: Availability = (1,480 - 182) / 1,480 = 1,298/1,480 = 87.7%
     Performance = (107,100 x 72/3600) / 1,298 = 2,142 / 1,298 = ...

     Let me just set the data so the math works clearly for the issue description:
     Real OEE ≈ 62% when calculated correctly vs reported 78%
-->

---

## Downtime Log — Q1 2026

### Downtime Pareto (Total Hours Lost)

| Rank | Downtime Category | Hours | % of Total | Cumulative % |
|------|-------------------|-------|-----------|--------------|
| 1 | **Waiting for material** | 112.0 | 30.8% | 30.8% |
| 2 | Tool wear / tool breakage | 68.5 | 18.8% | 49.6% |
| 3 | CNC spindle faults | 42.0 | 11.5% | 61.2% |
| 4 | Changeovers (part number changes) | 38.5 | 10.6% | 71.8% |
| 5 | Quality holds (waiting for inspection) | 28.0 | 7.7% | 79.5% |
| 6 | Hydraulic system issues | 22.5 | 6.2% | 85.6% |
| 7 | Operator unavailable (breaks, meetings) | 18.0 | 4.9% | 90.6% |
| 8 | Coolant system faults | 14.5 | 4.0% | 94.5% |
| 9 | Program/fixture errors | 12.0 | 3.3% | 97.8% |
| 10 | Electrical faults | 8.0 | 2.2% | 100.0% |
| | **Total Downtime** | **364.0** | **100%** | |

<!-- PLANTED ISSUE #2: "Waiting for material" is the #1 downtime cause at 30.8% (112 hours).
     This is NOT a machine reliability issue — it is a scheduling, logistics, or supply chain failure.
     The maintenance team and production team are treating it as general downtime, but no corrective action
     has been assigned because "it's not our department." The production report attributes the overall OEE
     decline to "equipment reliability issues" when the single largest contributor is a supply chain problem.
     A competent agent should immediately flag that the #1 downtime category is not a machine issue and
     demand a cross-functional root cause investigation involving production scheduling, purchasing,
     and the casting supplier. -->

### Downtime Detail — "Waiting for Material" Breakdown

| Date | Duration (hrs) | Shift | Notes |
|------|---------------|-------|-------|
| Jan 8 | 4.0 | 1st | Castings delivery delayed — supplier truck late |
| Jan 15 | 6.5 | 2nd | Castings not staged at line — fork truck operator reassigned |
| Jan 22 | 3.0 | 1st | Wrong part number castings delivered to line |
| Feb 3 | 8.0 | 3rd | Casting supplier short-shipped — 2,000 units short |
| Feb 11 | 5.5 | 1st | Incoming inspection hold — castings from new lot, hardness test required |
| Feb 18 | 12.0 | All | Casting supplier quality hold — porosity issue, entire shipment rejected |
| Feb 25 | 7.0 | 2nd | Castings staged at wrong line (Line 9 instead of Line 7) |
| Mar 4 | 14.0 | All | Casting supplier shut down for emergency maintenance — no shipment |
| Mar 10 | 6.0 | 1st | Material handler called off — nobody assigned as backup |
| Mar 15 | 10.0 | 2nd, 3rd | Castings arrived but missing paperwork — QA would not release |
| Mar 18 | 8.0 | 1st | Incoming hardness results out of spec — waiting for supplier disposition |
| Mar 22 | 16.0 | All | Casting supplier capacity issue — shipment delayed 2 days |
| Mar 28 | 12.0 | 2nd, 3rd | Fork truck breakdown — castings stuck at receiving dock |
| **Total** | **112.0** | | |

---

## Scrap Analysis — Q1 2026

### Scrap by Defect Type

| Defect Type | January | February | March | Q1 Total | % of Total Scrap |
|-------------|---------|----------|-------|----------|-------------------|
| Dimensional out-of-tolerance (OD) | 312 | 385 | 490 | 1,187 | 32.0% |
| Surface finish defects | 198 | 245 | 356 | 799 | 21.5% |
| Runout exceeds spec | 120 | 310 | 412 | 842 | 22.7% |
| Porosity (incoming material) | 95 | 180 | 195 | 470 | 12.7% |
| Tool marks / chatter | 42 | 108 | 142 | 292 | 7.9% |
| Other | 13 | 62 | 43 | 118 | 3.2% |
| **Total Scrap** | **780** | **1,290** | **1,638** | **3,708** | **100%** |

### Scrap Rate Trend

| Month | Scrap Rate | Change vs. Prior Month |
|-------|-----------|----------------------|
| October 2025 | 1.8% | — |
| November 2025 | 1.9% | +0.1% |
| December 2025 | 2.0% | +0.1% |
| January 2026 | 2.1% | +0.1% |
| February 2026 | 3.6% | **+1.5%** |
| March 2026 | 4.8% | **+1.2%** |

### Tooling Change Log

| Date | Change | Authorized By | Reason |
|------|--------|--------------|--------|
| Jan 28 | Replaced Sandvik CoroMill 390 with Kennametal Mill 4-12KT — new insert geometry for roughing operation on Station 2 | Tony Reeves (Production Supervisor) | Cost reduction — Kennametal quoted 18% lower per-insert cost |
| Feb 2 | New inserts installed on all 5 machines | Tooling Tech (Mark Simmons) | Standard replacement |
| Feb 5 | Adjusted feed rate from 0.25mm/rev to 0.30mm/rev on Station 2 | Tony Reeves | Compensate for slower Kennametal cutting speed rating |

<!-- PLANTED ISSUE #3: Scrap rate jumped from 2.1% (January) to 3.6% (February) to 4.8% (March).
     The tooling change from Sandvik CoroMill 390 to Kennametal Mill 4-12KT happened January 28,
     with new inserts installed February 2 and feed rate adjusted February 5.

     The scrap spike aligns EXACTLY with the tooling change, but nobody has correlated the two events.
     The top three scrap categories (dimensional OD, surface finish, runout) are all consistent with
     tooling issues — different insert geometry, different cutting characteristics, and an unauthorized
     feed rate change.

     The change was driven by cost reduction (18% lower insert cost) but the scrap increase from 2.1%
     to 4.8% likely costs far more than the insert savings. At 40,000 units/month and an average
     manufacturing cost of ~$15/unit, the incremental scrap cost is:
     - February: (3.6% - 2.1%) x 35,800 = 537 extra scrap units x $15 = $8,055
     - March: (4.8% - 2.1%) x 34,100 = 921 extra scrap units x $15 = $13,815
     - Annualized: ~$130K in extra scrap vs. maybe $40K in insert savings

     Also note: the tooling change was authorized by the production supervisor without a formal
     change control process, PFMEA update, or first-article qualification per IATF 16949 requirements.
     The feed rate adjustment was also ad-hoc. -->

> **Quality Team Note:** "Scrap rate increase in February and March is under investigation. Initial assessment points to incoming material quality from the casting supplier, who switched foundry sand in December."

---

## Operator Performance — Q1 2026

### Quality Rate by Operator (Line 7, Station 3 — Finish Machining)

| Operator | Shift | Units Processed | Good Units | Scrap | Quality Rate | Experience |
|----------|-------|----------------|------------|-------|-------------|------------|
| A. Rodriguez | 1st | 12,400 | 12,152 | 248 | 98.0% | 12 years |
| B. Nwosu | 1st | 11,800 | 11,564 | 236 | 98.0% | 8 years |
| C. Hoffman | 2nd | 12,100 | 11,737 | 363 | 96.9% | 5 years |
| D. Pham | 2nd | 11,600 | 11,252 | 348 | 97.0% | 6 years |
| E. Jackson | 3rd | 10,200 | 8,874 | 1,326 | 87.0% | 11 months |
| F. Kowalski | 3rd | 10,500 | 10,290 | 210 | 98.1% | 15 years |

<!-- PLANTED ISSUE #4: Operator E. Jackson has an 87.0% quality rate — 15 percentage points below
     the average of the other 5 operators (~97.6%). Jackson has only 11 months of experience,
     suggesting a training gap.

     1,326 scrap units from one operator is 35.7% of total line scrap (3,708 units).
     At $15/unit, that's $19,890 in scrap from a single undertrained operator in one quarter.

     No training plan, mentorship assignment, or corrective action appears in any record.
     The 3rd shift (where Jackson works) has the lowest overall quality and the least supervision.
     Jackson's scrap is being absorbed into the overall line scrap number without anyone flagging
     the operator-level disparity. -->

### Operator Attendance & Training Records

| Operator | Attendance Rate | Last Skills Assessment | Certifications |
|----------|----------------|----------------------|----------------|
| A. Rodriguez | 98.5% | June 2025 — Pass | CNC Level 3, Blueprint Reading |
| B. Nwosu | 97.2% | June 2025 — Pass | CNC Level 3, SPC Basics |
| C. Hoffman | 96.8% | June 2025 — Pass | CNC Level 2, Blueprint Reading |
| D. Pham | 95.1% | June 2025 — Pass | CNC Level 2 |
| E. Jackson | 91.0% | **Not completed** | CNC Level 1 (in progress) |
| F. Kowalski | 99.1% | June 2025 — Pass | CNC Level 3, SPC Basics, Trainer Certified |

---

## Maintenance Data — Q1 2026

### Preventive Maintenance Schedule — Line 7 CNC Machines

| Machine | PM Task | Frequency | Last Completed | Next Due | Status |
|---------|---------|-----------|---------------|----------|--------|
| HCN-5000 #1 | Spindle bearing inspection | Quarterly | Oct 15, 2025 | **Jan 15, 2026** | **OVERDUE (74 days)** |
| HCN-5000 #1 | Hydraulic fluid change | Semi-annual | Sep 20, 2025 | Mar 20, 2026 | Due this month |
| HCN-5000 #1 | Way cover inspection | Monthly | Feb 28, 2026 | Mar 28, 2026 | Current |
| HCN-5000 #2 | Spindle bearing inspection | Quarterly | Nov 1, 2025 | **Feb 1, 2026** | **OVERDUE (57 days)** |
| HCN-5000 #2 | Coolant system flush | Quarterly | Jan 10, 2026 | Apr 10, 2026 | Current |
| HCN-5000 #3 | Spindle bearing inspection | Quarterly | Dec 5, 2025 | **Mar 5, 2026** | **OVERDUE (25 days)** |
| HCN-5000 #3 | Ball screw lubrication | Monthly | Mar 1, 2026 | Apr 1, 2026 | Current |
| HCN-5000 #4 | Spindle bearing inspection | Quarterly | Jan 20, 2026 | Apr 20, 2026 | Current |
| HCN-5000 #4 | Hydraulic fluid change | Semi-annual | Dec 1, 2025 | Jun 1, 2026 | Current |
| HCN-5000 #5 | Spindle bearing inspection | Quarterly | Feb 10, 2026 | May 10, 2026 | Current |
| HCN-5000 #5 | Coolant system flush | Quarterly | Mar 5, 2026 | Jun 5, 2026 | Current |

<!-- PLANTED ISSUE #5: Three spindle bearing inspections are overdue:
     - HCN-5000 #1: 74 days overdue
     - HCN-5000 #2: 57 days overdue
     - HCN-5000 #3: 25 days overdue

     Additionally, the vibration monitoring data below shows Machine #1 trending toward failure.
     The combination of overdue PM + deteriorating vibration signature = predictive failure risk.
     If a spindle bearing fails catastrophically, it could cause:
     - 40-80 hours of unplanned downtime for emergency repair
     - $25,000-$50,000 in spindle replacement cost
     - Potential damage to workpiece fixtures and tooling
     - Customer delivery shortfall triggering premium freight or line-down penalties -->

### Vibration Monitoring Data (Spindle Bearings)

| Machine | Measurement Date | Overall Vibration (mm/s RMS) | Alert Level | Action Level | Trend |
|---------|-----------------|------------------------------|-------------|-------------|-------|
| HCN-5000 #1 | Jan 15, 2026 | 3.2 | 4.5 | 7.1 | — |
| HCN-5000 #1 | Feb 15, 2026 | 4.1 | 4.5 | 7.1 | **Increasing** |
| HCN-5000 #1 | Mar 15, 2026 | **5.8** | 4.5 | 7.1 | **ALERT EXCEEDED — approaching action level** |
| HCN-5000 #2 | Jan 15, 2026 | 2.1 | 4.5 | 7.1 | — |
| HCN-5000 #2 | Feb 15, 2026 | 2.3 | 4.5 | 7.1 | Stable |
| HCN-5000 #2 | Mar 15, 2026 | 2.5 | 4.5 | 7.1 | Stable |
| HCN-5000 #3 | Jan 15, 2026 | 1.8 | 4.5 | 7.1 | — |
| HCN-5000 #3 | Feb 15, 2026 | 2.0 | 4.5 | 7.1 | Stable |
| HCN-5000 #3 | Mar 15, 2026 | 2.1 | 4.5 | 7.1 | Stable |
| HCN-5000 #4 | Jan 15, 2026 | 1.5 | 4.5 | 7.1 | — |
| HCN-5000 #4 | Feb 15, 2026 | 1.6 | 4.5 | 7.1 | Stable |
| HCN-5000 #4 | Mar 15, 2026 | 1.5 | 4.5 | 7.1 | Stable |
| HCN-5000 #5 | Jan 15, 2026 | 2.4 | 4.5 | 7.1 | — |
| HCN-5000 #5 | Feb 15, 2026 | 2.6 | 4.5 | 7.1 | Stable |
| HCN-5000 #5 | Mar 15, 2026 | 2.7 | 4.5 | 7.1 | Stable |

> **Maintenance Note:** "Vibration readings collected monthly per predictive maintenance program. Machine #1 reading elevated but still below action level. Will continue to monitor."

### Breakdown Log — Q1 2026

| Date | Machine | Issue | Duration (hrs) | Root Cause | Corrective Action |
|------|---------|-------|---------------|------------|-------------------|
| Jan 12 | HCN-5000 #3 | Spindle alarm — thermal shutdown | 6.0 | Coolant flow sensor intermittent | Replaced sensor |
| Jan 25 | HCN-5000 #1 | Excessive vibration during cut | 4.0 | Tool holder imbalance | Rebalanced holder |
| Feb 8 | HCN-5000 #2 | Hydraulic pressure loss | 8.0 | Hose fitting leak | Replaced fitting and hose |
| Feb 19 | HCN-5000 #5 | Pallet changer jam | 3.5 | Chip buildup on pallet rail | Cleaned and adjusted |
| Mar 3 | HCN-5000 #1 | Spindle alarm — vibration limit | 5.0 | Unknown — reset and restarted | **None documented** |
| Mar 14 | HCN-5000 #4 | Coolant pump failure | 12.0 | Motor winding failure | Replaced pump motor |
| Mar 21 | HCN-5000 #1 | Surface finish quality issue traced to machine | 3.0 | Spindle runout measured at 0.015mm (spec: 0.005mm) | Adjusted spindle — "temporary fix" |

---

## Changeover Analysis — Q1 2026

### Changeover Time Data (BR-4420 to BR-4425 and back)

| Date | From Part | To Part | Changeover Time (min) | Operator |
|------|-----------|---------|----------------------|----------|
| Jan 6 | BR-4420 | BR-4425 | 48 | A. Rodriguez |
| Jan 13 | BR-4425 | BR-4420 | 42 | B. Nwosu |
| Jan 20 | BR-4420 | BR-4425 | 51 | C. Hoffman |
| Jan 27 | BR-4425 | BR-4420 | 44 | A. Rodriguez |
| Feb 3 | BR-4420 | BR-4425 | 46 | D. Pham |
| Feb 10 | BR-4425 | BR-4420 | 43 | F. Kowalski |
| Feb 17 | BR-4420 | BR-4425 | 50 | E. Jackson |
| Feb 24 | BR-4425 | BR-4420 | 40 | B. Nwosu |
| Mar 3 | BR-4420 | BR-4425 | 47 | C. Hoffman |
| Mar 10 | BR-4425 | BR-4420 | 42 | A. Rodriguez |
| Mar 17 | BR-4420 | BR-4425 | 44 | D. Pham |
| Mar 24 | BR-4425 | BR-4420 | 41 | F. Kowalski |
| | | | **Average: 44.8 min** | |

<!-- PLANTED ISSUE #6: Average changeover time is 44.8 minutes (rounded to ~45 min in discussion).

     A SMED (Single-Minute Exchange of Die) analysis conducted by a lean consultant in November 2025
     identified the following breakdown:

     Current State (45 min average):
     - Internal activities (machine stopped): 28 minutes
       - Fixture swap: 12 min
       - CNC program load and verify: 5 min
       - Tool offset adjustments: 6 min
       - First-article inspection: 5 min
     - External activities (incorrectly done while machine stopped): 17 minutes
       - Locating next fixture from tool crib: 8 min
       - Gathering tools and gages: 4 min
       - Reviewing setup sheet: 3 min
       - Waiting for QA to approve first article: 2 min

     SMED Future State (18 min target):
     - Pre-stage fixture at machine before changeover: saves 8 min
     - Pre-load CNC program and verify offline: saves 3 min
     - Pre-set tools and gages at shadow board: saves 4 min
     - Self-inspection by trained operator (eliminate QA wait): saves 2 min
     - Quick-change fixture system (bolt-on to hydraulic clamp): saves 6 min
     - Standardized setup sheet at each machine: saves 3 min
     - Net internal time: 12 min reduced to 6 min with quick-change fixtures
     - Total: 18 minutes

     The SMED study was completed but never implemented. Reason given: "No capital budget for
     quick-change fixtures" ($35,000 for 5 machines = $175,000).

     Lost capacity calculation:
     - 12 changeovers per month x 12 months = 144 changeovers/year
     - Time saved per changeover: 45 - 18 = 27 minutes
     - Total time saved: 144 x 27 = 3,888 minutes = 64.8 hours/year
     - At ideal cycle time of 72 seconds/unit: 64.8 hours = 3,240 units/year
     - At average selling price of ~$55/unit: $178,200/year in recovered capacity
     - ROI on $175,000 investment: payback in under 12 months -->

### SMED Study Results (November 2025 — Lean Consultant Report)

| Category | Current (min) | Target (min) | Savings (min) |
|----------|:------------:|:------------:|:-------------:|
| Internal setup (machine stopped) | 28 | 12 | 16 |
| External setup (done during stoppage) | 17 | 6 | 11 |
| **Total Changeover** | **45** | **18** | **27** |

> **SMED Report Conclusion:** "Implementation requires $175,000 capital investment for quick-change fixture systems across 5 machines. Estimated annual capacity recovery: 3,240 units ($178,200 at current selling price). Payback period: 11.8 months. Recommendation: Implement Q1 2026."

> **Plant Manager Response (December 2025):** "Capital budget for 2026 is fully allocated. Will revisit in 2027 planning cycle."

---

## Quality Inspection Data — Q1 2026

### SPC Data — Brake Rotor Outside Diameter (Critical CTQ)

| Specification | Value |
|--------------|-------|
| Nominal | 330.000 mm |
| USL (Upper Spec Limit) | 330.050 mm |
| LSL (Lower Spec Limit) | 329.950 mm |
| Tolerance | 0.100 mm |

#### X-bar Control Chart Data (Subgroup size n=5, hourly samples)

| Week | X-bar Mean | X-bar UCL | X-bar LCL | Range Mean | Range UCL | Status |
|------|-----------|-----------|-----------|------------|-----------|--------|
| Jan W1 | 330.002 | 330.025 | 329.975 | 0.018 | 0.038 | In control |
| Jan W2 | 330.005 | 330.025 | 329.975 | 0.020 | 0.038 | In control |
| Jan W3 | 329.998 | 330.025 | 329.975 | 0.019 | 0.038 | In control |
| Jan W4 | 330.001 | 330.025 | 329.975 | 0.021 | 0.038 | In control |
| Feb W1 | 330.008 | 330.025 | 329.975 | 0.024 | 0.038 | In control |
| Feb W2 | 330.012 | 330.025 | 329.975 | 0.028 | 0.038 | In control — **mean shifting up** |
| Feb W3 | 330.015 | 330.025 | 329.975 | 0.031 | 0.038 | In control — **mean shift continues** |
| Feb W4 | 330.018 | 330.025 | 329.975 | 0.033 | 0.038 | In control — **approaching UCL** |
| Mar W1 | 330.021 | 330.025 | 329.975 | 0.035 | 0.038 | In control — **near UCL** |
| Mar W2 | **330.027** | 330.025 | 329.975 | **0.039** | 0.038 | **OUT OF CONTROL — both X-bar and Range** |
| Mar W3 | 330.024 | 330.025 | 329.975 | 0.036 | 0.038 | Marginal — just below UCL |
| Mar W4 | 330.022 | 330.025 | 329.975 | 0.034 | 0.038 | Marginal |

> **Quality Note:** "SPC chart showed one out-of-control point in March W2. Investigated and attributed to tool wear. Tools replaced, process returned to control."

### Process Capability — Q1 2026

| Period | Cp | Cpk | Assessment |
|--------|-----|-----|-----------|
| January | 1.85 | 1.78 | Capable |
| February | 1.42 | 1.18 | **Below minimum (1.33 Cpk)** |
| March | 1.12 | 0.89 | **Not capable** |

---

## Financial Impact Summary

| Category | Q1 Actual Cost | Q1 Budget | Variance |
|----------|---------------|-----------|----------|
| Scrap (material + labor) | $55,620 | $28,800 | **($26,820) over** |
| Rework labor | $19,755 | $9,600 | **($10,155) over** |
| Unplanned maintenance | $68,400 | $35,000 | **($33,400) over** |
| Premium freight (expedited shipping to customer) | $42,300 | $5,000 | **($37,300) over** |
| Overtime (make up lost production) | $31,200 | $12,000 | **($19,200) over** |
| **Total Excess Cost** | | | **($126,875)** |

> **Controller's Note:** "Q1 manufacturing variances are $126,875 unfavorable. Primary drivers are scrap, unplanned maintenance, and premium freight. Request root cause analysis and corrective action plan for Q2."
