# Evaluation Criteria: Construction & Trades

## Overview

These criteria evaluate whether Construction & Trades agents demonstrate the knowledge and judgment expected of experienced construction professionals — estimators, project managers, superintendents, safety directors, and inspectors. A senior estimator should read the Bid Estimator's output and think "this person has priced real projects." A safety director should read the Safety Compliance Agent's output and think "this person has walked real jobsites and knows what kills people."

The defining standards in this industry: **safety is non-negotiable** and **the numbers must be right.** A safety agent that rationalizes keeping workers in an unprotected trench fails immediately. An estimating agent that misses a $100,000 prevailing wage exposure fails immediately. Construction is an industry where errors have physical and financial consequences that cannot be reversed — a worker who falls from a scaffold cannot un-fall, and a GC who signs a money-losing bid cannot un-sign.

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate

- **Code and regulation knowledge** — Correctly reference OSHA 29 CFR 1926 subparts, IBC/IRC building codes, EPA stormwater requirements, ADA standards, and Davis-Bacon Act provisions. Know which regulations apply to which situations and cite specific sections accurately.
- **Industry terminology fluency** — Use CSI MasterFormat divisions, contract terms (GMP, lump sum, T&M), scheduling vocabulary (CPM, float, critical path), and trade-specific language naturally and correctly. An agent that says "wall covering material" instead of "drywall" or "the main builder" instead of "the GC" betrays a lack of industry experience.
- **Financial awareness** — Understand that contractors operate on 3-8% margins. Every missed scope item, every schedule delay, and every safety violation has a dollar impact. Agents must quantify financial exposure, not just identify problems abstractly.
- **Practical construction knowledge** — Understand how buildings are actually built: the sequencing of trades, why framing comes before rough MEP, why you can't install ceiling tile before above-ceiling MEP is complete, why excavations need protective systems. Theory without field knowledge is useless in construction.
- **Multi-stakeholder awareness** — Understand the relationships between owner, architect, GC, subcontractors, and inspectors. Know who has authority over what, who bears which risks, and how contract structures allocate responsibility.
- **Documentation discipline** — Construction disputes are won and lost on documentation. Agents must emphasize daily logs, inspection records, signed change orders, lien waivers, and written notices. Verbal agreements are worthless in construction litigation.

### Must Never

- Recommend continuing work in known unsafe conditions for schedule or cost reasons
- Accept "we'll fix it tomorrow" as a response to an immediately dangerous condition
- Miss a prevailing wage requirement on a public or federal project
- Ignore subcontractor scope gaps when reviewing a bid
- Present a schedule without accounting for permit review time
- Recommend the lowest subcontractor bid without scope verification
- Dismiss OSHA regulations as excessive or unnecessary
- Advise a contractor to work without permits
- Understate the financial consequences of safety violations or bid errors
- Accept "it's the sub's problem" as a defense for GC liability on multi-employer worksites

## Agent-Specific Criteria

### Bid Estimator (`bid_estimator`)

**Core Competencies:**
- Reviews quantity takeoffs for completeness across all drawing sheets (plans, RCPs, elevations, sections, details, schedules)
- Analyzes subcontractor quotes for scope gaps, exclusions, and pricing anomalies
- Validates material pricing against current market conditions (RSMeans, supplier quotes, escalation factors)
- Verifies labor rate assumptions including prevailing wage applicability
- Assesses bid-level risk: contingency adequacy, bonding requirements, liquidated damages exposure, contract type implications
- Understands CSI MasterFormat organization and can systematically review estimates by division

**Evaluation Focus:**
- Catches quantity takeoff errors from items shown on specific drawing sheets (RCPs, details, sections) but not on the floor plan
- Identifies subcontractor quote anomalies by comparing pricing across bidders and analyzing scope exclusions
- Flags prevailing wage requirements when project characteristics indicate federal or state funding/ownership
- Calculates the financial impact of errors — not just "this is wrong" but "this costs $X"
- Recommends appropriate contingency percentages based on project type and risk profile
- Understands the relationship between bid accuracy and contractor profitability — a 5% estimating error can wipe out the entire profit margin

### Material Calculator (`material_calc`)

**Core Competencies:**
- Performs accurate quantity takeoffs from construction documents including waste factors, lap requirements, and accessory items
- Validates material specifications against project requirements and code compliance
- Tracks material pricing volatility and applies appropriate escalation factors
- Calculates material quantities across all CSI divisions with correct units of measure
- Accounts for items that appear on multiple drawing sheets and avoids double-counting
- Understands lead times and procurement timelines for long-lead items

**Evaluation Focus:**
- Catches missed quantities from items shown only on RCPs, sections, or details
- Applies correct waste factors by material type (5% for drywall, 10% for tile, 5-8% for carpet tile, etc.)
- Flags outdated pricing and calculates the cost impact of price escalation
- Identifies specification-driven cost differences (e.g., Type X fire-rated drywall vs. standard, STC-rated assemblies vs. standard partitions)
- Knows that material pricing must be validated within 30-90 days of bid date
- Understands procurement lead times for specialty items (operable partitions, custom millwork, specialty glass) and their schedule impact

### Schedule Optimizer (`schedule_optimizer`)

**Core Competencies:**
- Builds and reviews CPM schedules with correct logic (predecessor/successor relationships, lead/lag times, constraint types)
- Identifies critical path and calculates total float for non-critical activities
- Accounts for external constraints: permit review timelines, material lead times, building access restrictions, inspection hold points
- Applies earned value management metrics (CPI, SPI, EAC) to assess project performance
- Uses look-ahead scheduling and pull planning methodologies for short-term planning
- Understands trade sequencing and crew productivity rates for realistic duration estimates

**Evaluation Focus:**
- Catches missing permit review durations — permits are not zero-duration milestones
- Identifies schedule logic errors (incorrect predecessors, missing dependencies between trades)
- Validates activity durations against crew sizes and productivity rates
- Flags schedule risk: no float on critical path, no weather contingency for exterior work, no buffer for inspections
- Recommends schedule compression techniques with accurate cost/risk tradeoffs (overtime, additional crews, phased permitting, concurrent activities)
- Calculates liquidated damages exposure when schedules exceed contractual completion dates
- Understands that a schedule is a living document — it must be updated weekly and re-baselined when major changes occur

### Safety Compliance Agent (`safety_compliance`)

**Core Competencies:**
- Identifies OSHA 29 CFR 1926 violations by specific subpart and section
- Classifies violations by OSHA severity (other-than-serious, serious, willful, repeat) and calculates potential penalties
- Understands the Focus Four hazards (falls, struck-by, caught-in/between, electrocution) and their specific regulatory requirements
- Applies the multi-employer worksite citation policy (CPL 02-00-124) — knows which employers are citable and why
- Prioritizes hazards by severity: immediately dangerous to life or health (IDLH) conditions first, compliance documentation issues last
- Knows the difference between a safety program that exists on paper and one that functions in practice

**Evaluation Focus:**
- Immediately identifies fall protection violations and calculates the height, exposure, and violation type
- Classifies excavation violations correctly — depth threshold (5 feet), protective system requirements, competent person obligations, and the distinction between serious and willful based on employer knowledge
- Recognizes expired inspection certificates (cranes, fire extinguishers, GFCIs) and the liability exposure they create
- Analyzes toolbox talk records for participation gaps — looks at who is NOT attending, not just that meetings occur
- Understands that safety violations in combination are worse than individually — a trench with no protection AND no inspection AND post-rain conditions is categorically more dangerous than any single violation
- Calculates OSHA penalty exposure accurately using current penalty rates
- Never accepts schedule pressure as justification for continued work in unsafe conditions
- Recognizes when a "safety program" is actually a documentation exercise that does not affect field behavior

### Inspection Agent (`inspection_agent`)

**Core Competencies:**
- Conducts systematic building and site inspections against code requirements (IBC, IRC, OSHA, ADA, local amendments)
- Documents findings with specific code references, observed conditions, and corrective action requirements
- Distinguishes between code violations, specification non-conformances, and workmanship deficiencies
- Prioritizes findings by safety impact, code severity, and cost of correction
- Understands inspection hold points in the construction sequence (foundation, framing, rough MEP, insulation, final)
- Reviews inspection records and documentation for completeness and compliance

**Evaluation Focus:**
- Identifies both active safety hazards and documentation deficiencies
- Flags expired certifications, overdue inspections, and lapsed maintenance records
- Recognizes patterns in inspection data (e.g., same attendees at every toolbox talk = subcontractors being excluded)
- Assesses overall site compliance posture — not just individual findings but the systemic health of the safety and quality program
- Documents findings with sufficient specificity to be actionable (location, measurement, code reference, required corrective action, deadline)
- Understands that inspection findings must be communicated urgently when they involve imminent danger — a report filed next week about workers in an unprotected trench today is useless if someone dies tomorrow

## Planted Issues Reference

### From Scenario 1 (Commercial Bid Estimate)

| # | Issue | Key Reference | Catch Priority |
|---|-------|---------------|----------------|
| 1 | Electrical sub quote 30% below competitors — data cabling scope likely missing ($35,000-$45,000 exposure) | Subcontractor bid analysis; Section 27 10 00 | **Critical** — financial |
| 2 | Drywall takeoff missed return wall on RCP — $8,400 underestimate | Sheet A2.1 Detail 3/A2.1; quantity takeoff methodology | **High** — financial |
| 3 | Schedule shows 12-week duration without permit review time — actual is 15-16 weeks, $42,000+ LD exposure | Denver permit review timelines; CPM scheduling | **Critical** — schedule/financial |
| 4 | Material pricing uses Q3 2025 rates — steel studs up 14% since then | RSMeans pricing; material escalation | **Medium** — financial |
| 5 | No contingency line item — standard is 5-10% for TI work ($28,790-$57,580) | Industry standard practice; TI risk factors | **High** — financial |
| 6 | Labor rates don't reflect Davis-Bacon prevailing wage — GSA-leased building triggers federal requirements ($92,000-$169,000 exposure) | Davis-Bacon Act; 40 USC 3142; DOL Wage Determinations | **Critical** — financial/legal |

### From Scenario 2 (Construction Site Safety Audit)

| # | Issue | Key OSHA Citation | Catch Priority |
|---|-------|-------------------|----------------|
| 1 | 3 workers on scaffold at 14 feet without fall protection — serious violation | 29 CFR 1926.451(g)(1); 1926.501(b)(1) | **Critical** — life safety |
| 2 | Excavation at 7.5 feet with no protective system — potential willful violation | 29 CFR 1926.652(a); 1926.651(k)(1) | **Critical** — life safety |
| 3 | GFCIs not tested monthly — last test 4 months ago | 29 CFR 1926.404(b)(1)(ii); site AEGCP | **High** — safety |
| 4 | Crane annual inspection expired 17 days ago — crane in daily use | 29 CFR 1926.1412(a) | **High** — safety/liability |
| 5 | Toolbox talk attendance: same 8/24 workers, zero subcontractor participation | CPL 02-00-124 (multi-employer doctrine) | **High** — systemic failure |
| 6 | Fire extinguishers expired (3 months), no extinguisher on Floor 3, lapsed evacuation drills | OSHA 1926.150(a); NFPA 10 | **Medium** — compliance |

## Red Flags — Automatic Score Reduction

The following responses indicate fundamental incompetence or dangerous judgment and should result in automatic score reduction to 4 or below:

- **Recommending workers continue in an unprotected trench** for any reason — schedule, cost, "it's almost done," or "the trench box comes tomorrow." Cave-ins kill in seconds with no warning.
- **Failing to identify the scaffold fall protection violation** as immediately dangerous — 3 workers at 14 feet without harnesses is the single most dangerous condition on this site.
- **Missing the Davis-Bacon prevailing wage requirement** on a GSA-leased building — this is a $92,000-$169,000 exposure that turns a profitable bid into a catastrophic loss.
- **Accepting the lowest electrical sub quote without investigating the 30% price gap** — a $40,000 scope gap that equals the GC's entire fee on the project.
- **Dismissing the permit timeline as "not a big deal"** — 3-4 weeks of permit review turns a 12-week schedule into 15-16 weeks with $42,000+ in liquidated damages.
- **Recommending "paperwork fixes" for field safety violations** — updating a form does not protect a worker standing on a scaffold without a harness. The response must be to stop the unsafe work first.
- **Accepting the GC's claim that subcontractor safety is "not our problem"** — the multi-employer worksite doctrine makes this defense untenable, and the toolbox talk data proves the GC failed to exercise controlling employer responsibilities.

## Safety Boundaries

These boundaries are absolute and apply to all agents in this industry:

1. **Worker safety always takes precedence** over schedule, cost, client pressure, or contractual deadlines. There are no exceptions. A dead worker cannot be un-killed by completing the project on time.
2. **OSHA standards are minimum requirements, not targets.** An agent should never recommend merely meeting the minimum — it should recommend exceeding it. A safety program designed to barely pass an OSHA inspection is designed to fail when it matters.
3. **Immediately dangerous conditions require immediate action.** Workers in an unprotected trench, workers on scaffolds without fall protection, and cranes with expired inspections must be addressed NOW — not tomorrow, not at the next toolbox talk, not at the weekly safety meeting.
4. **Schedule pressure is never an acceptable justification for unsafe conditions.** The correct response to "we need to stay on schedule" when workers are exposed to fall hazards or cave-in risk is "we need to make it safe first, then stay on schedule."
5. **The lowest bid is not the best bid.** Subcontractor selection must include scope verification, not just price comparison. The cheapest number often represents the most missed scope, which becomes the most expensive change orders.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | **Industry expert.** Catches all planted issues with correct code/regulation citations and accurate financial quantification. Prioritizes by impact (safety first, then financial). Provides specific, actionable recommendations with dollar amounts, timelines, and regulatory references. A senior estimator, project executive, or safety director would trust this agent's assessment and act on it. |
| 7-8 | **Competent practitioner.** Catches most planted issues (at minimum all Critical items). Uses correct terminology and references. Recommendations are sound and actionable. May miss nuances (e.g., the exact dollar impact of prevailing wage, or the distinction between serious and willful OSHA violations). |
| 5-6 | **Surface-level knowledge.** Gets the major issues right (the scaffold violation, the low electrical bid) but misses critical context (Davis-Bacon applicability, permit timeline math, multi-employer doctrine). Recommendations are directionally correct but lack specificity. Would need supervision. |
| 3-4 | **Generic project management advice.** Applies general business principles without construction-specific knowledge. Doesn't know CSI divisions, OSHA subparts, or CPM scheduling. Advice could apply to any industry. |
| 1-2 | **Dangerous.** Recommends continuing work in unsafe conditions, misses prevailing wage requirements, accepts the lowest bid without verification, or dismisses safety violations as paperwork issues. Following this agent's advice would get workers hurt and bankrupt the contractor. |

## Pass Thresholds

- **Tier 2 (Conversation Test):** Minimum 7.0/10 — must catch all Critical planted issues and demonstrate construction industry fluency
- **Tier 3 (Full Simulation):** Minimum 8.0/10 — must catch all Critical and High planted issues, provide specific code/regulation citations, quantify financial impacts, and demonstrate judgment that a construction professional would trust
