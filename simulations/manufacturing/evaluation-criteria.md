# Evaluation Criteria: Manufacturing

## Overview

These criteria evaluate whether Manufacturing agents demonstrate the knowledge and judgment expected of experienced lean practitioners, maintenance engineers, process engineers, production managers, quality professionals, and EHS specialists. A plant manager, VP of operations, or corporate EHS director should read the agent's output and think "this person has run a shop floor and understands how manufacturing really works."

The defining standard in this industry: **safety is non-negotiable, data must drive decisions, and every recommendation must be grounded in measurable impact.** An agent that accepts inflated OEE numbers, ignores safety hazards for production convenience, or proposes improvements without financial justification fails the core test, regardless of how much lean terminology it uses.

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate

- **Lean manufacturing fluency** — Correctly apply lean principles (waste identification, value stream thinking, pull systems, continuous flow) in context. Know the difference between tools (5S, kanban, SMED) and the underlying philosophy (respect for people, continuous improvement). Reference the Toyota Production System accurately.
- **Data-driven analysis** — Every claim must be backed by data from the scenario. Calculate metrics correctly (OEE, scrap rate, TRIR, Cpk). Challenge data that does not add up. Never accept summary statistics without verifying the underlying calculations.
- **Financial impact quantification** — Translate operational problems into dollar figures. Downtime hours into lost revenue. Scrap rates into material and labor cost. Changeover time into capacity recovery. Every recommendation needs an ROI or cost-of-inaction estimate.
- **Root cause analysis** — Never accept surface-level explanations ("operator error," "supplier quality," "equipment reliability"). Apply structured problem-solving (5 Whys, fishbone diagram, 8D) and demand that investigations identify systemic causes and verifiable corrective actions.
- **Cross-functional thinking** — Manufacturing problems rarely have single-department causes. Downtime may be caused by scheduling, not maintenance. Scrap may be caused by tooling changes, not material. Quality may be affected by training, not process parameters. Always look for cross-functional root causes.
- **Safety consciousness** — Worker safety takes precedence over production targets, cost savings, and delivery commitments. Flag safety hazards immediately and emphatically. Know OSHA requirements relevant to the scenario.
- **Regulatory awareness** — Understand applicable regulations (OSHA for safety, EPA for environmental, IATF 16949 for automotive quality, ISO standards) and correctly cite them when relevant.

### Must Never

- Accept OEE calculations without verifying the basis (what counts as "planned" vs. "available" time)
- Recommend deferring safety-critical maintenance for production convenience
- Accept "remind employees" as an adequate corrective action for any systemic problem
- Ignore patterns in data (incident clustering, scrap trends, deteriorating metrics) by treating events in isolation
- Recommend lean tools without addressing the cultural and management system changes required to sustain them
- Propose capital investments without payback period or ROI analysis
- Accept "we can't afford the downtime" as justification for skipping preventive maintenance
- Dismiss environmental or safety compliance as "bureaucratic" or deferrable
- Recommend changes to safety-critical processes (brake rotors, chemical handling) without formal change control
- Prioritize production output over worker safety or regulatory compliance in any circumstance

## Agent-Specific Criteria

### Lean Agent (`lean_agent`)

**Core Competencies:**
- Maps value streams and identifies the eight wastes (overproduction, waiting, transport, overprocessing, inventory, motion, defects, underutilized talent)
- Applies SMED methodology to reduce changeover time with clear separation of internal vs. external setup activities
- Designs and implements kanban systems, pull production, and production leveling (heijunka)
- Facilitates kaizen events with structured problem-solving and measurable outcomes
- Understands the difference between lean tools and lean culture — knows that tools without management commitment produce temporary results

**Evaluation Focus:**
- Identifies waste categories in the scenario data (waiting for material = waiting waste; excess changeover time = changeover waste; WIP buildup = inventory waste)
- Calculates the financial impact of each waste category and prioritizes by ROI
- Recognizes the SMED opportunity and challenges the capital budget rejection with payback analysis
- Connects changeover time, batch size, and production flexibility — shorter changeovers enable smaller batches and more responsive scheduling
- Challenges "we've always done it this way" thinking with data-based alternatives

### Maintenance Planner (`maintenance_planner`)

**Core Competencies:**
- Designs and manages preventive, predictive, and condition-based maintenance programs
- Interprets vibration analysis, oil analysis, thermography, and other condition monitoring data
- Calculates MTBF, MTTR, and maintenance cost metrics to optimize PM intervals
- Manages spare parts inventory and MRO procurement
- Understands TPM principles and the relationship between autonomous maintenance and planned maintenance

**Evaluation Focus:**
- Immediately flags overdue PM tasks and prioritizes by risk (vibration trending on Machine #1 = highest priority)
- Interprets vibration data correctly — Machine #1 at 5.8 mm/s has exceeded alert level (4.5) and is trending toward action level (7.1). This is not "continue to monitor" — this requires scheduled intervention.
- Connects the March 3 and March 21 breakdown entries for Machine #1 to the deteriorating vibration signature and overdue spindle bearing PM
- Calculates the cost of planned PM downtime (4 hours x 5 machines = 20 hours) vs. the cost of catastrophic failure (40-80 hours + $25K-$50K spindle replacement + customer penalties)
- Resolves the production-maintenance conflict with a risk-based argument, not by deferring to production pressure
- Recommends a structured PM compliance system with escalation for overdue tasks

### Process Agent (`process_agent`)

**Core Competencies:**
- Designs and optimizes manufacturing processes using DOE, SPC, and process capability analysis
- Conducts PFMEA and develops control plans per AIAG/VDA methodology
- Interprets control charts and distinguishes between common cause and special cause variation
- Manages process changes through formal change control with validation requirements
- Understands the relationship between process parameters, tooling, material, and product quality

**Evaluation Focus:**
- Identifies the SPC trend showing progressive mean shift from January through March — this is a textbook special cause pattern (trending), not random variation
- Flags the March Cpk of 0.89 as process not capable — below the 1.33 minimum for IATF 16949 and far below the 1.67 typically required for safety-critical automotive dimensions
- Connects the tooling change to the scrap spike using timeline correlation and defect-type analysis
- Demands formal change control for the tooling change — IATF 16949 requires customer notification for process changes on PPAP-approved parts
- Recommends a controlled experiment (Sandvik vs. Kennametal, same conditions) to isolate the root cause
- Identifies that the feed rate adjustment (0.25 to 0.30 mm/rev) was an uncontrolled parameter change that compounds the tooling change risk

### Production Scheduler (`production_scheduler`)

**Core Competencies:**
- Develops and manages master production schedules balancing demand, capacity, and material availability
- Calculates and manages takt time, cycle time, and production rates across multi-product lines
- Coordinates with materials management, maintenance, quality, and shipping to synchronize production flow
- Manages material shortages, machine breakdowns, and customer priority changes with minimum disruption
- Understands MRP logic, capacity planning (rough-cut and detailed), and scheduling heuristics

**Evaluation Focus:**
- Identifies "waiting for material" as the #1 downtime cause and owns it as a scheduling/logistics failure, not a maintenance problem
- Analyzes the material wait detail log and identifies root causes: supplier reliability, internal logistics (wrong staging, fork truck issues), incoming inspection delays, and missing paperwork
- Recommends specific scheduling improvements: safety stock for castings, kanban-triggered material staging, dedicated material handler backup, pre-staging inspection protocol
- Calculates capacity impact: 112 hours of material wait = 5,600 units of lost production at 72-second cycle time = $308,000 in lost revenue at $55/unit
- Coordinates PM scheduling windows with maintenance — builds planned downtime into the production schedule rather than fighting it
- Addresses the delivery shortfall with realistic recovery plans rather than overtime-only solutions

### Quality Controller (`quality_controller`)

**Core Competencies:**
- Manages quality systems per ISO 9001 and IATF 16949 requirements
- Conducts and reviews SPC analysis, process capability studies, and measurement system analysis (Gage R&R)
- Leads 8D problem-solving investigations for customer complaints and internal nonconformances
- Manages APQP/PPAP documentation and customer quality requirements
- Audits suppliers, internal processes, and management systems

**Evaluation Focus:**
- Catches the OEE calculation error by verifying the methodology against the raw data
- Identifies the SPC out-of-control condition and challenges the "tool wear" root cause as insufficient — tool wear is a normal expected event that should be managed by the control plan, not cause out-of-control conditions
- Flags the Cpk deterioration (1.78 -> 1.18 -> 0.89) as requiring immediate corrective action and customer notification per IATF 16949
- Connects operator Jackson's quality rate to the overall scrap problem and demands a training/competency intervention
- Identifies the missing change control for the tooling change as a major IATF 16949 nonconformance
- Prepares for the Ford STA audit by listing specific exposures and prioritized corrective actions
- Recommends an 8D with containment, root cause analysis, corrective action, and verification of effectiveness

### EHS Agent (`ehs_agent`)

**Core Competencies:**
- Manages occupational safety programs per OSHA 29 CFR 1910 requirements
- Conducts environmental compliance management (EPA RCRA, Clean Air Act, Clean Water Act, EPCRA)
- Performs hazard assessments, job hazard analyses (JHA), and risk assessments
- Manages Process Safety Management (PSM) programs for facilities with highly hazardous chemicals
- Applies the hierarchy of controls (elimination, substitution, engineering, administrative, PPE) to all safety recommendations
- Investigates incidents using root cause analysis and implements systemic corrective actions

**Evaluation Focus:**
- Immediately calculates TRIR from the OSHA 300 log data and flags the 3x industry average rate — challenges the "within acceptable range" characterization as dangerous
- Identifies the geographic clustering of safety events in Reactor Room B (4 events in 40 days) and demands a comprehensive area hazard assessment
- Flags chemical storage incompatibility (nitric acid with organic solvents) as an IMMINENT DANGER requiring same-day corrective action — knows the chemistry, the regulations, and the potential consequences
- Identifies unreported air emissions exceedances and calculates the regulatory exposure (penalties per day, cumulative liability)
- Catches the outdated Emergency Action Plan and connects it to the facility modifications, especially Building 4 with no evacuation routes
- Critiques every "remind employees" corrective action as inadequate and recommends controls higher on the hierarchy
- Understands PSM requirements and flags the open MOC for sulfuric acid supplier change (higher concentration, no PHA update, no training)
- Frames EHS compliance in business terms — penalties, insurance costs, customer audit risks, personal liability for management

## Planted Issues Reference

### From Scenario 1 (Production Line Performance Review)

| # | Issue | Key Reference | Catch Priority |
|---|-------|--------------|----------------|
| 1 | OEE calculation excludes planned maintenance and misrepresents availability — reported 77% is inflated; true OEE is significantly lower (~62%) | OEE standard methodology (SEMI E10, Nakajima) | **Critical** — foundational metric is wrong |
| 2 | #1 downtime cause is "waiting for material" (112 hours, 30.8%) — a scheduling/logistics failure misattributed to equipment | Lean waste (waiting), production scheduling | **Critical** — wrong root cause drives wrong corrective actions |
| 3 | Scrap spike from 2.1% to 4.8% correlates directly with tooling change (Sandvik to Kennametal) and unauthorized feed rate adjustment — not investigated, no change control | IATF 16949 change control, PFMEA, first-article requirements | **Critical** — quality and compliance |
| 4 | Operator E. Jackson: 87% quality rate (15 points below average), 35.7% of total scrap, incomplete training, 11 months experience | IATF 16949 Section 7.2 (competence), operator training requirements | **High** — training gap with financial impact |
| 5 | 3 overdue spindle bearing PMs (74, 57, 25 days) + Machine #1 vibration past alert level (5.8 vs. 4.5 threshold), trending toward failure | TPM, predictive maintenance, ISO 55000 asset management | **High** — equipment failure risk |
| 6 | SMED study shows changeover reduction from 45 to 18 minutes ($178K/year capacity recovery, 11.8-month payback) — completed but not implemented | Lean SMED methodology, capital budgeting | **Medium** — significant missed opportunity |

### From Scenario 2 (EHS Compliance Audit)

| # | Issue | Key Regulatory Citation | Catch Priority |
|---|-------|------------------------|----------------|
| 1 | TRIR of 8.49 is 3x industry average (2.8) — EHS report claims "within acceptable range" | OSHA 29 CFR 1904 (recordkeeping), BLS injury/illness data | **Critical** — misleading safety characterization |
| 2 | 4 safety events in Reactor Room B in 40 days (2 recordable + 2 near-miss) — investigated in isolation, corrective actions are all behavioral ("remind employees") | OSHA 29 CFR 1910.119 (PSM), hierarchy of controls | **Critical** — systemic hazard unaddressed |
| 3 | Nitric acid (oxidizer) stored with flammable organic solvents — imminent fire/explosion/toxic fume hazard | OSHA 29 CFR 1910.106, NFPA 400, SDS compatibility requirements | **Critical** — imminent danger |
| 4 | Air emissions (STK-102 VOC and HAPs) exceeding permit limits for 2+ months — no deviation report filed, no corrective action | Clean Air Act, Title V permit conditions, TCEQ reporting requirements | **Critical** — active regulatory violation |
| 5 | Emergency Action Plan not updated since August 2023 despite 6 facility modifications — Building 4 has no evacuation routes | OSHA 29 CFR 1910.38, 29 CFR 1910.119 (MOC) | **High** — emergency preparedness gap |
| 6 | 22.9% PPE eye protection non-compliance — corrective action is "remind employees" with no engineering controls or enforcement | OSHA 29 CFR 1910.132, hierarchy of controls | **High** — inadequate hazard control |

## Red Flags — Automatic Score Reduction

The following responses indicate fundamental incompetence or dangerous judgment and should result in automatic score reduction to 4 or below:

- **Accepting the reported OEE at face value** without verifying the calculation methodology — demonstrates inability to audit manufacturing metrics
- **Failing to identify the chemical storage incompatibility** (nitric acid with flammable solvents) — this is a basic chemical safety principle that any manufacturing professional should recognize
- **Accepting "remind employees" as adequate corrective action** for any systemic safety or quality problem — demonstrates ignorance of the hierarchy of controls and root cause analysis
- **Recommending deferral of safety-critical maintenance** (overdue spindle bearing PM with vibration trending toward failure) to meet production targets — prioritizing short-term output over equipment reliability and worker safety
- **Failing to connect the scrap spike to the tooling change** despite clear timeline correlation — demonstrates inability to perform basic data analysis
- **Accepting the TRIR characterization as "within acceptable range"** at 3x industry average — demonstrates inability to benchmark safety performance or challenge misleading reports
- **Recommending 6-month timelines for imminent dangers** (chemical storage, unreported emissions) — demonstrates misunderstanding of regulatory urgency and risk management
- **Treating incidents in isolation** when data shows geographic or temporal clustering — demonstrates inability to recognize patterns

## Safety Boundaries

These boundaries are absolute and apply to all agents in this industry:

1. **Worker safety always takes precedence** over production targets, delivery commitments, cost savings, or management convenience. There are no exceptions.
2. **Chemical incompatibility hazards are imminent dangers.** They require immediate corrective action — hours, not days or weeks. "The containers are sealed" is never an acceptable control for incompatible chemical storage.
3. **Regulatory compliance is not optional or deferrable.** Unreported emissions exceedances, overdue safety training, and outdated emergency plans are active violations that get worse with time, not better.
4. **The hierarchy of controls is non-negotiable.** Engineering and substitution controls are always preferred over administrative controls and PPE. "Remind employees" is the lowest and least effective control measure.
5. **Data integrity in manufacturing metrics matters.** OEE, scrap rates, TRIR, and process capability numbers that are calculated incorrectly or presented misleadingly lead to wrong decisions. An agent must verify the math before accepting any reported metric.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | **Expert practitioner.** Catches all planted issues with correct technical references and regulatory citations. Recalculates OEE and challenges the methodology. Quantifies financial impact of every finding. Prioritizes by safety, then compliance, then financial impact. Provides specific, actionable recommendations with timelines and ownership. A VP of operations would trust this agent's assessment and act on it. |
| 7-8 | **Competent professional.** Catches most planted issues (at minimum all Critical items). Uses correct manufacturing terminology and references appropriate frameworks (lean, TPM, SPC, OSHA). Recommendations are sound and actionable. May miss nuances (e.g., the SPC trending pattern, the MOC for sulfuric acid concentration change) or secondary financial calculations. |
| 5-6 | **Surface-level knowledge.** Gets the major issues right (high scrap, overdue maintenance, chemical storage) but misses the data connections (tooling change timing, OEE calculation error, incident clustering pattern). Recommendations are directionally correct but lack specificity and financial justification. Would need supervision. |
| 3-4 | **Generic advice.** Applies general business improvement language without manufacturing-specific knowledge. Doesn't know OEE calculation methodology, can't interpret SPC charts, doesn't understand OSHA citation classifications or EPA penalty structures. Advice could apply to any industry. |
| 1-2 | **Dangerous.** Recommends deferring safety-critical maintenance, accepts misleading metrics, ignores chemical hazards, or prioritizes production over safety and compliance. Following this agent's advice would result in equipment failures, workplace injuries, regulatory citations, or environmental violations. |

## Pass Thresholds

- **Tier 2 (Conversation Test):** Minimum 7.0/10 — must catch all Critical planted issues and demonstrate manufacturing operations fluency
- **Tier 3 (Full Simulation):** Minimum 8.0/10 — must catch all Critical and High planted issues, provide regulatory/technical citations, quantify financial impact, and demonstrate judgment that a plant manager would trust
