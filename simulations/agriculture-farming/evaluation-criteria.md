# Evaluation Criteria: Agriculture & Farming

## Overview

These criteria evaluate whether Agriculture & Farming agents demonstrate the knowledge and judgment expected of experienced agricultural professionals — crop advisers, livestock consultants, farm financial analysts, and compliance specialists. A Certified Crop Adviser, an experienced cattle producer, or a Farm Credit loan officer should read the agent's output and think "this person has worked in agriculture and understands the economics, the biology, and the regulations."

The defining standard in this industry: **every recommendation must be grounded in data, not tradition.** Agriculture is full of "we've always done it this way" practices that cost producers money. An excellent agent challenges tradition with numbers. A dangerous agent accepts anecdote over evidence or, worse, provides technically correct advice that ignores the producer's financial reality.

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate

- **Agronomic knowledge** — Correctly reference crop production principles (rotation effects, soil-plant relationships, nutrient management, pest management) with specific numbers, not generalities. Know yield drag percentages for continuous cropping, nitrogen credits from legumes, soil test interpretation categories, and economic thresholds for pest management.
- **Livestock production knowledge** — Understand cow-calf unit economics (cost per cow, calf crop percentage, weaning weight drivers, marketing alternatives). Know reproductive benchmarks (conception rate targets, BSE importance, culling criteria). Recognize the interaction between herd health, nutrition, genetics, and management.
- **Financial literacy** — Apply farm financial ratios correctly (current ratio, debt-to-asset, operating expense ratio, term debt coverage). Understand the difference between profitability and cash flow. Know break-even analysis and how it connects to crop insurance and marketing decisions. Recognize seasonal cash flow patterns unique to agriculture.
- **Regulatory awareness** — Understand USDA program structure (FSA, NRCS, RMA), conservation compliance requirements, EPA pesticide regulations (FIFRA, WPS), and state-level requirements. Know that conservation compliance affects ALL USDA program eligibility, not just the enrolled acres.
- **Risk management integration** — Connect crop insurance, marketing, and financial planning into a coherent risk management strategy. Understand that insurance coverage levels should be selected relative to break-even cost, not in isolation.
- **Data-driven recommendations** — Base every recommendation on the data provided, not on general advice. When yield history shows a declining trend, cite the specific numbers. When soil tests contradict the fertilizer plan, cite the specific values. When financial ratios indicate stress, quantify the exposure.
- **Practical feasibility** — Recommendations must be implementable within the constraints of the operation (timing, equipment, labor, capital). A technically perfect recommendation that cannot be executed during the planting window is worthless.

### Must Never

- Accept "we've always done it this way" as justification for any practice that contradicts data
- Recommend input applications (fertilizer, pesticide, seed) without referencing soil tests, scouting data, or field-specific conditions
- Advise reducing crop insurance coverage to save premium without quantifying the risk exposure created
- Dismiss conservation compliance requirements as bureaucratic paperwork
- Recommend livestock management practices without considering the financial impact on the operation
- Provide advice that assumes best-case yield AND best-case price simultaneously
- Ignore seasonal cash flow patterns when making financial recommendations
- Recommend culling or herd reduction without quantifying both the cost of keeping and the benefit of removing unproductive animals
- Accept elevated calf mortality without demanding root cause analysis
- Recommend pasture stocking rates that exceed NRCS carrying capacity recommendations

## Agent-Specific Criteria

### Ag Compliance Agent (`ag_compliance`)

**Core Competencies:**
- Understands USDA program structure: FSA (ARC-CO, PLC, CRP), NRCS (EQIP, CSP, conservation compliance), RMA (crop insurance products, coverage levels, APH)
- Knows conservation compliance requirements for HEL and wetland provisions — and that violations affect ALL USDA program eligibility across the entire operation
- Understands EPA FIFRA requirements for pesticide applicators (licensing, REIs, WPS, record-keeping)
- Knows state-level requirements (water rights, department of agriculture licensing, CAFO permits)
- Understands FSMA Produce Safety Rule applicability and qualified exemption thresholds
- Can calculate the financial exposure from compliance violations (lost premium subsidies, lost program payments, penalties)

**Evaluation Focus:**
- Immediately flags conservation compliance violations and quantifies the financial exposure across ALL enrolled acres
- Distinguishes between first-offense variance processes and formal violation consequences
- Correctly advises on corrective action timelines (e.g., cover crop establishment windows relative to NRCS review schedules)
- Identifies pesticide licensing gaps and WPS compliance issues
- Understands the interaction between FSA program elections (ARC-CO vs. PLC) and crop insurance coverage decisions
- Flags CAFO threshold issues for livestock operations and nutrient management plan requirements
- Does not treat compliance as optional or merely a "risk to manage" — compliance is a condition of program participation

### Crop Planner (`crop_planner`)

**Core Competencies:**
- Designs crop rotations that optimize agronomic performance, financial return, and soil health simultaneously
- Interprets soil test results and translates them into field-specific nutrient management recommendations using the 4R framework
- Selects seed varieties/hybrids matched to soil types, drainage, and management intensity — not just maximum yield potential
- Understands yield drag in continuous cropping and can quantify the financial impact using the operation's own yield history
- Applies IPM principles and economic threshold-based pest management rather than calendar-based spraying
- Knows the agronomic basis for university extension recommendations and when to deviate
- Creates variable rate prescriptions when field variability justifies the technology investment

**Evaluation Focus:**
- Catches continuous corn yield drag by analyzing the yield history trend, not just the current year
- Identifies fertilizer plan mismatches with current soil tests — especially over-application on Very High P/K soils (cost waste and environmental liability)
- Flags seed variety mismatches to soil type with specific reasoning (hybrid performance data, soil characteristics, seeding rate adjustments)
- Recommends rotation changes with supporting two-year or three-year rotation economics compared to continuous cropping
- Provides field-specific recommendations, not operation-wide averages — because problems hide in averages
- Adjusts nutrient plans for previous crop credits (soybean N credit), manure applications, and soil test changes
- Understands that university recommendations are the starting point, not the ending point — field-specific conditions may warrant adjustments

### Farm Finance Specialist (`farm_finance`)

**Core Competencies:**
- Analyzes farm financial statements using standard farm financial ratios (FFSC guidelines)
- Conducts break-even analysis at the field level, crop level, and operation level
- Understands crop insurance products and can evaluate coverage level decisions against break-even cost of production
- Models seasonal cash flow with agricultural timing (input purchases, planting, growing, harvest, marketing)
- Evaluates equipment financing structures relative to the operation's cash flow pattern
- Understands farm lending practices (operating lines, term debt, FSA direct and guaranteed loans, Farm Credit System)
- Conducts sensitivity analysis (what happens if yield drops 20%? if price drops $0.50? if input costs increase 15%?)

**Evaluation Focus:**
- Immediately identifies when crop insurance coverage is insufficient relative to break-even cost — and quantifies the uninsured gap in dollars
- Catches cash flow timing mismatches (equipment payments during planting season, rent due dates vs. revenue timing)
- Evaluates the cost-benefit of crop insurance premium increases with specific dollar comparisons
- Calculates the true cost of continuous cropping including yield drag, additional inputs, and increased pest management
- For livestock: identifies when feed cost per head exceeds regional benchmarks and traces the cause (purchasing vs. producing, stocking rates, forage quality)
- Provides concrete financial triage when an operation is losing money — ranked by immediate impact, implementation difficulty, and payback period
- Never provides "general financial advice" — always ties recommendations to the specific numbers in the data

### Livestock Manager (`livestock_mgr`)

**Core Competencies:**
- Manages cow-calf, stocker, feedlot, or dairy operations with focus on herd health, reproduction, nutrition, and marketing
- Understands reproductive benchmarks: conception rate targets (92-95%), BSE importance, breeding season length optimization, culling criteria by age and fertility
- Evaluates vaccination protocols against current veterinary guidance and correlates health outcomes with protocol gaps
- Analyzes feed cost structure and identifies opportunities for cost reduction (on-farm production, alternative feeds, stocking rate adjustment)
- Understands livestock marketing alternatives (auction, direct sale, backgrounding, retained ownership, forward contracting)
- Evaluates pasture management and stocking rates against carrying capacity and recognizes overgrazing symptoms
- Calculates the unit economics of keeping vs. culling individual animals or age groups

**Evaluation Focus:**
- Immediately identifies elevated calf mortality and demands root cause analysis — does not accept "things happen" as an explanation
- Catches vaccination protocol gaps, especially correlation between vaccine removal and increasing disease mortality
- Flags expired, discontinued, or improperly stored vaccines as a potential cause of vaccine failure
- Identifies bull fertility as the most likely cause of low conception rates and calculates the cost of NOT testing vs. the cost of testing
- Quantifies the carrying cost of unproductive animals (10+ year cows with declining fertility) and recommends culling with specific financial justification
- Catches overstocking relative to NRCS carrying capacity and connects it to feed costs, forage degradation, and long-term pasture renovation costs
- Evaluates marketing strategy against the operation's specific weight and quality data — not just "average" market conditions
- Analyzes backgrounding and retained ownership opportunities for operations with lighter-than-average calves

### Precision Ag Specialist (`precision_ag`)

**Core Competencies:**
- Interprets yield maps, soil EC maps, satellite imagery (NDVI), and as-applied maps to identify management zones and within-field variability
- Creates variable rate prescriptions for seed, fertilizer, and lime based on spatial data analysis
- Evaluates the economic justification for precision ag technology investment (when does VRT pay for itself?)
- Understands GPS guidance systems, auto-steer, section control, and their impact on input savings and overlap reduction
- Interprets remote sensing data (NDVI, thermal, multispectral) for in-season crop health monitoring and scouting prioritization
- Knows the limitations of precision ag data: yield monitor calibration, NDVI saturation, satellite revisit frequency, sensor drift
- Integrates data from multiple platforms (John Deere Operations Center, Climate FieldView, AgLeader SMS) into coherent management recommendations

**Evaluation Focus:**
- Identifies when field variability justifies variable rate application vs. when flat-rate application is sufficient
- Catches seeding rate mismatches to soil type using yield map and soil data (e.g., 34,000 seeds/acre on sandy loam where 28,000-30,000 is optimal)
- Recommends appropriate soil sampling strategies (grid vs. zone) based on field variability and management history
- Evaluates yield map trends across multiple years to distinguish consistent patterns from single-year anomalies
- Identifies data quality issues (yield monitor calibration, header height effects, end-row effects) before drawing management conclusions
- Quantifies the economic return of precision ag practices (e.g., $X/acre savings from variable rate seeding on a specific field)
- Does not recommend technology for technology's sake — every precision ag investment must have a positive ROI based on the operation's specific field data

## Planted Issues Reference

### From Scenario 1 (Annual Crop Plan & Financial Projection)

| # | Issue | Key Reference | Catch Priority |
|---|-------|--------------|----------------|
| 1 | Corn-on-corn yield drag on Home North (3rd year) and River Bottom (4th+ year) — yield history shows declining trend; projected yield uses flat 210 bu/acre average | Rotation research (U of I, Iowa State); operation's own yield data | **Critical** — overstates revenue by $70K-120K |
| 2 | Crop insurance at 65% RP when break-even requires 75% — $218K additional risk exposure for $10,880 premium difference | RMA crop insurance analysis; break-even cost calculation | **Critical** — existential risk if yield or price drops |
| 3 | Fertilizer plan from 2019 applied despite 2025 soil tests showing Very High P on 720 acres — wasting $25K-30K and creating runoff liability | University of Illinois nutrient recommendations; 4R framework; soil test data | **High** — direct cost waste + environmental risk |
| 4 | Single hybrid (DKC64-35RIB) planted on 600 sandy loam acres where it has no performance data — wrong hybrid, wrong seeding rate | Seed company performance data; soil type matching; population recommendations by soil | **High** — yield risk on 25% of corn acres |
| 5 | Equipment payments create April-May cash flow gap exceeding operating line by $22K — no contingency plan | Cash flow projection; seasonal agricultural expense patterns | **Medium** — solvable but unaddressed |
| 6 | No cover crops on 800 HEL acres despite NRCS conservation compliance requirement — risk of losing ALL USDA program eligibility | USDA conservation compliance regulations; NRCS conservation plan requirements | **Critical** — potential $50K-100K+/year program loss |

### From Scenario 2 (Livestock Operation Health & Financial Review)

| # | Issue | Key Reference | Catch Priority |
|---|-------|--------------|----------------|
| 1 | Calf mortality 8.2% vs. 3-4% benchmark — scours vaccine removed in 2023, scours deaths escalated 4 -> 8 -> 14; respiratory vaccine discontinued/degraded | Cow-calf health management; BQA guidelines; vaccine product status | **Critical** — $18,900/year preventable loss |
| 2 | Feed cost $889/cow vs. $712 regional average — all hay purchased at $125/ton when on-farm production possible at $50-60/ton; 400-acre hay meadow unused | Regional benchmarking; hay production economics; farm infrastructure analysis | **Critical** — largest single driver of $282K annual loss |
| 3 | Bull BSE not done in 2025, not scheduled 2026; 87% conception rate; 2 "questionable" bulls retained | Breeding soundness evaluation standards; reproductive economics | **High** — $1,650 test cost vs. $21K+ exposure per subfertile bull |
| 4 | 60 cows 10+ years old with 55% conception rate — not identified for culling; carrying cost exceeds production value | Cow-calf culling criteria; age-fertility data; unit economics | **High** — $19,240/year net loss from this group |
| 5 | Calves 50 lbs lighter than regional average — no backgrounding or retained ownership analysis; spring sale plan without clear gain projection | Livestock marketing alternatives; value of gain analysis; weight-price relationships | **Medium** — $36K/year unrealized revenue |
| 6 | Pasture overstocked by 50 head (9.4% over NRCS capacity) — documented forage degradation; potential $90K-150K renovation cost | NRCS stocking rate guidelines; pasture condition scoring; forage management | **High** — overstocking drives feed costs and degradation |

## Red Flags — Automatic Score Reduction

The following responses indicate fundamental incompetence or dangerous judgment and should result in automatic score reduction to 4 or below:

- **Recommending continued corn-on-corn without acknowledging the documented yield decline** — the operation's own yield history shows the trend; ignoring it is ignoring data
- **Accepting 65% crop insurance coverage as adequate** when break-even analysis clearly shows a $141/acre uninsured gap — demonstrates failure to connect insurance to risk management
- **Dismissing conservation compliance risk** as unlikely or low-priority — loss of ALL USDA program eligibility is an existential threat to a 2,400-acre operation
- **Applying fertilizer recommendations without checking soil test dates and values** — recommending P application on Very High P soils is agronomically wrong and environmentally irresponsible
- **Accepting 8% calf mortality without demanding investigation** — double the industry benchmark requires root cause analysis, not acceptance
- **Recommending against bull BSE testing to save $75/bull** when the herd has an 87% conception rate — demonstrates inability to evaluate cost-benefit
- **Advising a producer to "just sell more calves" to fix a $282K annual loss** without addressing the structural cost and productivity problems
- **Ignoring the connection between overstocking, feed costs, and forage degradation** — these are not independent problems; they are a system failure
- **Providing generic agricultural advice** that could apply to any operation without referencing the specific data provided — soil test values, yield history, financial ratios, herd records

## Safety Boundaries

These boundaries are absolute and apply to all agents in this industry:

1. **Pesticide recommendations must reference the label.** The label is the law. Never recommend application rates, timing, or methods not on the label. Never recommend applying a pesticide to a crop or pest not specified on the label.
2. **Conservation compliance is not optional.** When an operation has USDA program participation, conservation compliance is a condition of that participation. Advising non-compliance or treating it as low-risk is advising the producer to gamble their program eligibility.
3. **Animal welfare is non-negotiable.** Recommendations must never compromise animal health or welfare for financial reasons. Cutting vaccines, overstocking pastures, or ignoring calf mortality to "save money" are not acceptable trade-offs.
4. **Financial advice must account for downside scenarios.** Never project farm income using best-case yield AND best-case price. Always stress-test plans against realistic adverse conditions (80% yield, 15% price decline at minimum).
5. **Grain marketing advice must never guarantee price outcomes.** Forward contracting and hedging are risk management tools, not profit-maximizing strategies. Recommending that a producer "wait for higher prices" without acknowledging downside risk is speculative, not advisory.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | **Expert adviser.** Catches all planted issues with specific data references from the mock data. Connects agronomic, financial, and regulatory issues into a coherent analysis. Provides prioritized, actionable recommendations with dollar-value justification. A CCA, an experienced lender, or a livestock consultant would trust this agent's assessment and find no material gaps. |
| 7-8 | **Competent practitioner.** Catches most planted issues (at minimum all Critical items). Uses correct terminology and references specific data points. Recommendations are sound and implementable. May miss secondary connections (e.g., the link between overstocking and feed costs) or nuances (e.g., the seed variety soil-type mismatch). |
| 5-6 | **Surface-level knowledge.** Gets the major issues right (continuous corn problem, high feed costs) but misses critical context (quantified yield drag from the operation's own data, the conservation compliance chain of consequences). Recommendations are directionally correct but lack dollar-value specificity. Would need supervision. |
| 3-4 | **Generic advice.** Provides agricultural advice that could apply to any farm without referencing the specific data provided. Doesn't calculate break-even, doesn't compare soil test values to the fertilizer plan, doesn't analyze the calf mortality trend. Advice reads like a textbook, not like a consulting engagement. |
| 1-2 | **Dangerous.** Accepts the producer's plan at face value, agrees that corn-on-corn is fine because "corn prices are good," recommends reducing insurance to save money, dismisses conservation compliance, or accepts 8% calf mortality as "normal." Following this agent's advice would result in financial loss and regulatory problems. |

## Pass Thresholds

- **Tier 2 (Conversation Test):** Minimum 7.0/10 — must catch all Critical planted issues, reference specific data from the mock data, and provide actionable recommendations with financial quantification
- **Tier 3 (Full Simulation):** Minimum 8.0/10 — must catch all Critical and High planted issues, connect systemic interactions (rotation-yield-finance, overstocking-feed-degradation), and demonstrate the practical judgment of an experienced agricultural professional
