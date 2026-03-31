# Evaluation Criteria: Energy & Utilities

## Overview

These criteria evaluate whether Energy & Utilities agents demonstrate the knowledge and judgment expected of experienced energy professionals — licensed engineers, certified energy managers, utility planners, renewable energy developers, and grid operators. A PE-licensed power systems engineer or a CEM-certified energy auditor should read the agent's output and think "this person knows the industry and understands what's at stake."

The defining standard in this industry: **the numbers must be right.** Energy analysis is quantitative. An agent that confuses kW and kWh, overestimates solar production, ignores demand charges, or builds a financial model on unrealistic assumptions is not just unhelpful — it produces work product that destroys project economics, misleads investors, and erodes client trust. Every recommendation must be backed by correct calculations using the right units, the right rates, and the right assumptions.

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate

- **Unit precision** — Correctly distinguish between kW (power) and kWh (energy), between kBtu and therms, between site and source energy. Never confuse instantaneous power with cumulative energy. All calculations must use consistent, correct units.
- **Rate structure literacy** — Understand utility rate structures: demand charges, time-of-use pricing, tiered rates, rider charges, net metering credits. Savings calculations must use the actual rate structure, not blended averages, unless a blended rate is explicitly justified.
- **Benchmarking competence** — Use ENERGY STAR Portfolio Manager, EUI comparisons, and ASHRAE standards correctly. Know what constitutes good, average, and poor performance for different building types and climate zones.
- **Regulatory awareness** — Understand the relevant regulatory landscape: FERC vs. state PUC jurisdiction, NERC reliability standards, IRA tax credit requirements, RPS mandates, interconnection processes. Cite specific regulations accurately.
- **Financial rigor** — Apply correct financial analysis methods: simple payback, NPV, IRR, LCOE. Understand the difference between nominal and real dollars, between pre-tax and after-tax returns. Include all relevant incentives (utility rebates, ITC, PTC, MACRS) in financial analysis.
- **Technology knowledge** — Demonstrate current knowledge of energy technologies: chiller efficiencies (kW/ton, IPLV), solar capacity factors by region, battery storage costs and applications, LED lighting performance, building envelope metrics (R-value, U-factor, SHGC).
- **Risk assessment** — Identify and quantify risks. Every energy project has risks (production uncertainty, curtailment, regulatory change, equipment failure, offtaker credit). An agent that presents projections without discussing risks is providing incomplete analysis.

### Must Never

- Confuse kW and kWh in any calculation or recommendation
- Calculate energy savings using a blended rate when the customer is on a time-of-use or demand-based rate structure, without acknowledging the limitation
- Overestimate solar production by using nameplate capacity instead of modeled yield
- Ignore demand charges in commercial energy analysis
- Present LCOE comparisons between dispatchable and intermittent resources without noting the limitation
- Claim federal tax credits (ITC/PTC) without verifying qualification requirements (prevailing wage, apprenticeship, domestic content)
- Dismiss curtailment risk for projects in congested transmission zones
- Recommend renewable energy installations without first addressing energy efficiency opportunities
- Accept degradation, production, or financial assumptions without questioning the source and methodology
- Ignore available utility rebates and incentives when calculating retrofit ROI

## Agent-Specific Criteria

### Energy Auditor (`energy_auditor`)

**Core Competencies:**
- Conducts ASHRAE Level I, II, and III energy audits with proper methodology
- Analyzes utility bills to identify consumption patterns, demand profiles, and rate optimization opportunities
- Benchmarks buildings using ENERGY STAR Portfolio Manager, EUI, and ASHRAE standards
- Evaluates HVAC, lighting, envelope, and plug load systems with current performance data
- Calculates energy conservation measure (ECM) savings using correct rates and methodologies
- Identifies available utility rebates, tax incentives, and financing programs

**Evaluation Focus:**
- Starts every analysis with utility bill review and rate structure — not equipment inventory
- Catches scheduling failures (HVAC running 24/7) as highest-priority findings
- Identifies missing utility rebates that materially change project economics
- Challenges misleading benchmarking characterizations (calling bottom-quartile performance "average")
- Prioritizes measures by ROI, not by energy savings alone
- Correctly applies the "efficiency first, then renewables" principle
- Knows the difference between simple payback, lifecycle cost analysis, and NPV for ECM evaluation

### Field Service Agent (`field_service`)

**Core Competencies:**
- Diagnoses HVAC, electrical, and building system issues in the field
- Understands BAS (Building Automation System) programming, scheduling, and optimization
- Evaluates equipment condition, remaining useful life, and replacement timing
- Applies OSHA electrical safety standards and NFPA 70E arc flash requirements
- Coordinates with utility demand response programs and load management strategies
- Performs measurement and verification (M&V) per IPMVP protocols

**Evaluation Focus:**
- Identifies field-verifiable issues from audit data (equipment running outside schedule, sensors malfunctioning, economizers disabled)
- Recommends low-cost/no-cost operational improvements before capital expenditures
- Understands demand limiting and load shedding strategies through BAS programming
- Correctly assesses equipment condition and remaining useful life (e.g., 18-year-old chiller approaching end of life)
- Knows the practical implementation challenges of audit recommendations
- Can translate engineering analysis into actionable work orders

### Grid Operations (`grid_ops`)

**Core Competencies:**
- Understands bulk power system operations: economic dispatch, unit commitment, frequency regulation, voltage control
- Applies NERC reliability standards (TPL, TOP, IRO, CIP) in operational contexts
- Manages real-time grid balancing with high renewable penetration (duck curve, ramp rate management, curtailment)
- Understands ISO/RTO market structures: LMP, capacity markets, ancillary services, congestion management
- Evaluates transmission congestion and its impact on generator economics
- Assesses interconnection study results and network upgrade requirements

**Evaluation Focus:**
- Identifies transmission congestion risk from interconnection data and queue position
- Understands curtailment mechanics: why it happens, who bears the cost, how to model it
- Correctly interprets interconnection study results and assesses whether assigned costs are reasonable
- Recognizes when interconnection studies are stale and may not reflect current grid conditions
- Understands the impact of renewable penetration on grid operations (ramping, frequency, voltage)
- Can explain LMP, congestion pricing, and curtailment to non-technical stakeholders

### Renewable Development (`renewable_dev`)

**Core Competencies:**
- Manages utility-scale renewable energy projects from site assessment through commercial operation
- Evaluates energy yield models (PVsyst, wind resource assessments) with technical rigor
- Navigates the interconnection process (queue management, study reviews, cost allocation)
- Understands federal and state permitting requirements (NEPA, ESA, SHPO, local zoning)
- Manages PPA negotiations and understands offtake structures
- Evaluates land control options (lease vs. purchase, escalation terms, access rights)

**Evaluation Focus:**
- Catches unrealistic production assumptions (degradation rates, capacity factors, soiling losses)
- Identifies stale interconnection studies as material risks
- Evaluates PPA terms holistically — not just the $/MWh price but escalation structure, curtailment provisions, performance guarantees, and termination rights
- Flags land lease risks (uncapped escalation, renegotiation terms, termination provisions)
- Assesses permitting timeline risks realistically, especially federal processes (BLM, NEPA, USFWS)
- Understands that a project's financial viability depends on the interaction of all these factors — a great PPA price means nothing if interconnection costs are understated or curtailment is unmodeled

### Utility Regulator (`utility_reg`)

**Core Competencies:**
- Understands rate case proceedings: revenue requirements, rate base, allowed ROE, rate design
- Applies FERC, NERC, and state PUC regulatory frameworks
- Evaluates Integrated Resource Plans (IRPs) for reasonableness and compliance with state mandates
- Understands RPS compliance mechanics (REC tracking, compliance reporting, alternative compliance payments)
- Assesses utility service quality, reliability metrics (SAIDI, SAIFI, CAIDI), and customer protection standards
- Navigates PURPA qualifying facility requirements and avoided cost determinations

**Evaluation Focus:**
- Evaluates rate design proposals for cost causation, equity across customer classes, and alignment with policy goals
- Identifies when utility investments may represent "gold-plating" (excessive rate base additions)
- Assesses IRP assumptions for reasonableness: load growth forecasts, fuel price assumptions, technology costs, discount rates
- Understands the tension between utility shareholder returns and customer affordability
- Correctly applies regulatory principles: used and useful, prudence standard, regulatory compact
- Can evaluate whether a proposed rate structure sends appropriate price signals for efficient resource use

### Renewable Finance Specialist (`renewable_finance`)

**Core Competencies:**
- Structures tax equity partnerships (partnership flip, sale-leaseback, inverted lease) for renewable energy projects
- Understands ITC and PTC qualification requirements under the IRA, including prevailing wage, apprenticeship, domestic content, and energy community adders
- Evaluates project financial models: LCOE, IRR (levered, unlevered, sponsor, tax equity), DSCR, NPV
- Assesses offtaker credit risk and PPA bankability
- Understands MACRS depreciation, bonus depreciation, and their interaction with tax equity structures
- Models sensitivity analysis across production, price, degradation, and financing variables

**Evaluation Focus:**
- Catches financial model errors: incorrect degradation rates, missing cost escalation, unrealistic assumptions
- Identifies ITC/PTC qualification risks before they become deal-killers
- Evaluates tax equity structures for alignment between developer and investor interests
- Assesses DSCR adequacy under stress scenarios (P90 production, high curtailment, rising costs)
- Demands sensitivity analysis on key variables — a model without sensitivities is a pitch, not an analysis
- Understands that the difference between 30% ITC and 6% ITC is often the difference between a viable project and a dead one
- Can explain complex tax equity structures in plain English to non-financial stakeholders

## Planted Issues Reference

### From Scenario 1 (Commercial Building Energy Audit)

| # | Issue | Key Reference | Catch Priority |
|---|-------|--------------|----------------|
| 1 | HVAC running 24/7 including weekends — no BAS schedule configured | ASHRAE 90.1 (mandatory schedules), ENERGY STAR building operations | **Critical** — highest-impact, lowest-cost finding |
| 2 | Lighting retrofit ROI calculated without Duke Energy Smart $aver rebate — understates savings by 37% | Duke Energy DSM programs; standard audit practice to include utility incentives | **High** — materially changes project economics |
| 3 | EUI 30% above ENERGY STAR median but report says "average performance" — ENERGY STAR score is 28 (bottom quartile) | ENERGY STAR Portfolio Manager scoring methodology | **High** — misleading characterization |
| 4 | Demand charges are 32.5% of electric bill but no demand management strategy proposed | Utility rate structure analysis; demand response best practices | **High** — major savings opportunity ignored |
| 5 | 18-year-old chiller at 0.85 kW/ton vs. modern 0.55 kW/ton — replacement ROI not calculated | ASHRAE equipment lifecycle data; ARI/AHRI chiller efficiency standards | **Medium** — capital planning gap |
| 6 | 200kW solar-ready roof with no renewable assessment included | ASHRAE Level II audit scope (should address on-site generation potential) | **Medium** — missed opportunity |

### From Scenario 2 (Utility-Scale Solar Financial Model)

| # | Issue | Key Reference | Catch Priority |
|---|-------|--------------|----------------|
| 1 | Degradation rate of 0.3%/year vs. manufacturer warranty implying 0.5%/year — ~$2.7M cumulative revenue impact | PVsyst best practices; IE report standards; LONGi warranty terms | **Critical** — inflates production projections |
| 2 | PPA escalator of 2.5%/year with no sensitivity analysis — project NPV drops to near-zero at 1.0% escalator | Standard project finance due diligence; sensitivity analysis requirements | **High** — unexamined key assumption |
| 3 | ITC claimed at 30% without documented prevailing wage/apprenticeship compliance — $13M at risk | IRA Section 48(a); DOL prevailing wage guidance; Treasury guidance on apprenticeship | **Critical** — deal-killing if non-compliant |
| 4 | Interconnection study 18 months old in zone now designated "potentially congested" with 280 MW new queue entrants | FERC interconnection procedures; EPE Transmission Plan | **High** — stale study may understate costs and curtailment risk |
| 5 | Curtailment risk "Not assessed" despite congested transmission zone — PPA provides only 50% compensation above 5% threshold | ISO/RTO curtailment data; PPA curtailment provisions | **Critical** — most significant unmodeled risk |
| 6 | Land lease has no escalation cap — renegotiated every 5 years to "fair market value" | Standard solar lease terms; project finance risk assessment | **High** — material uncontrolled cost escalation |

## Red Flags — Automatic Score Reduction

The following responses indicate fundamental incompetence or dangerous judgment and should result in automatic score reduction to 4 or below:

- **Confusing kW and kWh** in any calculation — this is the equivalent of a doctor confusing milligrams and milliliters. It invalidates every downstream analysis.
- **Recommending solar installation before addressing a building that wastes 25-35% of its HVAC energy on 24/7 operation** — efficiency first is not optional, it is the foundational principle of energy management.
- **Accepting a 0.3%/year degradation rate** when the manufacturer's warranty implies 0.5%/year, without questioning the assumption — demonstrates willingness to accept the developer's most optimistic input.
- **Failing to identify curtailment risk** for a project in a congested transmission zone — this is the most significant unmodeled risk in the entire pro forma and it's listed as "Not assessed" in the risk register.
- **Claiming the full 30% ITC is assured** without verifying prevailing wage and apprenticeship compliance — the difference between 30% and 6% is $13M.
- **Ignoring demand charges** in a commercial energy audit when they represent 32.5% of the bill — this is like doing a physical exam and skipping the blood pressure check.
- **Presenting nameplate solar capacity as annual production** (e.g., "a 200kW system produces 200 kWh per hour") — demonstrates fundamental misunderstanding of solar energy.

## Safety Boundaries

These boundaries are absolute and apply to all agents in this industry:

1. **The numbers must be right.** Energy analysis is quantitative. Incorrect units, wrong rates, or unrealistic assumptions do not produce "approximately correct" results — they produce garbage. Every calculation must be verifiable.
2. **Efficiency before generation.** Reducing waste is always cheaper and faster than adding new supply. An agent that skips efficiency to recommend generation is providing bad advice, regardless of the generation technology.
3. **Assumptions must be stated and justified.** Every financial model, every energy estimate, every savings calculation depends on assumptions. Unstated assumptions are hidden risks. State them, justify them, and run sensitivities on the ones that matter.
4. **Incentives and rebates are not optional in analysis.** Failing to include available utility rebates, tax credits, or other incentives in ROI calculations produces artificially pessimistic results that kill viable projects. Always check what's available.
5. **Grid reliability is non-negotiable.** Recommendations that compromise grid reliability (overloading circuits, bypassing protection, ignoring NERC standards) are never acceptable, regardless of cost savings or project economics.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | **Industry expert.** Catches all planted issues with correct technical and financial analysis. Applies correct units, rates, and methodologies. Quantifies findings with actual numbers. Provides specific, actionable recommendations prioritized by impact and feasibility. A PE or CEM would trust this agent's work product. |
| 7-8 | **Competent practitioner.** Catches most planted issues (at minimum all Critical items). Uses correct terminology and units. Calculations are directionally correct even if not precise. May miss secondary issues (solar-ready roof, chiller lifecycle) or nuances (rate structure optimization). |
| 5-6 | **Surface-level knowledge.** Gets the obvious issues (HVAC scheduling, degradation rate) but misses the financial implications (demand charges, utility rebates, ITC qualification risk). Recommendations are generic rather than quantified. Would need supervision. |
| 3-4 | **Generic business advice.** Applies general consulting frameworks without energy-specific knowledge. Doesn't know rate structures, capacity factors, or regulatory requirements. Advice could apply to any industry. |
| 1-2 | **Dangerous.** Confuses kW and kWh, recommends solar without addressing efficiency, accepts unrealistic production estimates, ignores curtailment risk, or presents financial projections without examining assumptions. Following this agent's advice would result in financial loss and misallocated capital. |

## Pass Thresholds

- **Tier 2 (Conversation Test):** Minimum 7.0/10 — must catch all Critical planted issues, use correct units throughout, and demonstrate rate structure literacy
- **Tier 3 (Full Simulation):** Minimum 8.0/10 — must catch all Critical and High planted issues, provide quantified analysis with correct methodologies, and demonstrate judgment an energy professional would trust
