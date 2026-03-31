# Industry Context: Construction & Trades

## What This Industry Does

The construction industry designs, builds, renovates, and maintains the physical infrastructure of civilization — commercial buildings, residential housing, industrial facilities, transportation networks, and public works. It is the second-largest industry in the world by employment and one of the most fragmented, with hundreds of thousands of general contractors, specialty subcontractors, material suppliers, and project owners operating across overlapping scopes.

Key functions include preconstruction (estimating, bidding, value engineering), project scheduling and management, procurement and material logistics, field supervision and quality control, safety and regulatory compliance, and closeout (punch list, commissioning, warranty). The industry spans two broad sectors: commercial construction (offices, retail, healthcare, education, government) and residential construction (single-family, multifamily, custom homes, renovations).

The defining characteristic of construction is that every project is a prototype. Unlike manufacturing, where processes are repeated thousands of times, each construction project is unique in location, design, conditions, and workforce. This makes estimation inherently uncertain, scheduling inherently fragile, and safety inherently dependent on human behavior in uncontrolled environments. Errors cost money, time, and — in safety failures — lives. A missed scope item in a bid can bankrupt a subcontractor. A missed safety violation can kill a worker. The margin for error is razor-thin: general contractors typically operate on 3-8% net profit margins, meaning a single bad estimate or delay can erase an entire year's profit.

## Key Tools & Platforms

### Project Management & Collaboration
- **Procore** — The dominant cloud-based construction project management platform. Manages RFIs, submittals, change orders, daily logs, drawings, photos, punch lists, and financials. Used by GCs, owners, and subs. The industry's closest equivalent to Salesforce.
- **PlanGrid (now Autodesk Build)** — Field-focused construction management platform for viewing and marking up drawings, managing punch lists, tracking issues, and documenting field conditions. Widely used by superintendents and foremen on tablets in the field.
- **BuilderTREND** — Residential and light commercial project management. Manages selections, change orders, scheduling, client communication, and payments. Popular with custom home builders and remodelers.
- **CoConstruct** — Residential construction project management focused on custom builders and remodelers. Handles estimates, selections, specifications, scheduling, and client portals.
- **Fieldwire** — Task management and field collaboration platform. Manages punch lists, inspections, and task assignments at the jobsite level.

### Estimating & Takeoff
- **RSMeans (Gordian)** — The industry-standard construction cost database. Provides unit cost data for labor, materials, and equipment across all CSI divisions, adjusted by geographic location. The baseline reference for every estimator in North America.
- **STACK** — Cloud-based takeoff and estimating platform. Measures quantities from digital plans and integrates with cost databases. Replaces paper-based manual takeoff for many estimators.
- **PlanSwift** — Digital takeoff and estimating software. Measures lengths, areas, counts, and volumes from PDF plans. Widely used by specialty subcontractors.
- **On-Screen Takeoff (OST)** — Digital takeoff tool by ConstructConnect. Measures quantities from blueprints with condition-based assemblies for automated counting.
- **Bluebeam Revu** — PDF markup, collaboration, and takeoff tool. The industry-standard for reviewing construction documents, RFIs, and submittals. Studio Sessions enable real-time collaboration across project teams.
- **Sage Estimating** — Database-driven estimating platform integrated with Sage 300 CRE accounting. Used by mid-to-large GCs and specialty contractors for detailed and conceptual estimates.

### Accounting & ERP
- **Sage 300 CRE (formerly Timberline)** — The legacy standard for construction accounting. Handles job costing, accounts payable/receivable, general ledger, project management, and payroll. Deeply entrenched in mid-to-large commercial contractors.
- **Viewpoint Vista** — Cloud-based construction ERP covering financials, project management, HR, payroll, and equipment management. Competes with Sage for larger contractors.
- **Foundation Software** — Construction accounting for commercial contractors. Strong in job costing, certified payroll, and AIA billing.
- **QuickBooks for Contractors** — Entry-level accounting used by smaller contractors. Limited job costing but ubiquitous among trades with under $5M revenue.

### Scheduling
- **Primavera P6 (Oracle)** — Enterprise-level scheduling for large commercial, infrastructure, and industrial projects. Supports CPM (Critical Path Method) scheduling, resource leveling, earned value analysis, and multi-project management. The standard for projects over $50M.
- **Microsoft Project** — Mid-level scheduling tool. Used for smaller commercial projects and by owners who don't require Primavera's complexity.
- **BuilderTREND / CoConstruct Scheduling** — Residential scheduling modules integrated with project management. Gantt-style scheduling with drag-and-drop interfaces for builders and remodelers.

### Safety & Compliance
- **SafetyCulture (iAuditor)** — Mobile inspection and audit platform. Used for safety inspections, quality checklists, site audits, and compliance documentation. Generates reports with photos, timestamps, and corrective action tracking.
- **BIM 360 (Autodesk)** — Building Information Modeling collaboration platform. Manages 3D models, clash detection, field coordination, and design collaboration between architects, engineers, and contractors.
- **SiteDocs** — Digital safety management platform for toolbox talks, orientations, hazard assessments, and incident reporting.

## Key Frameworks & Methodologies

### Estimating
- **CSI MasterFormat (Divisions 01-49)** — The universal classification system for organizing construction specifications, cost data, and contract documents. Division 01 (General Requirements), Division 03 (Concrete), Division 05 (Metals), Division 09 (Finishes), Division 26 (Electrical), etc. Every professional estimate, specification book, and cost database is organized by MasterFormat divisions.
- **Unit Cost Estimating** — The standard method for detailed construction estimates. Each work item is quantified (takeoff) and priced using unit costs (labor + material + equipment per unit of measure). Example: drywall = $3.85/SF installed (labor $2.10/SF + material $1.45/SF + equipment/overhead $0.30/SF).
- **Quantity Takeoff Methodology** — The systematic measurement of material quantities from construction drawings. Takeoff must account for waste factors (typically 5-15% depending on material), lap/overlap requirements, and conditions shown across multiple drawing sheets (plans, elevations, sections, details, reflected ceiling plans).
- **Assemblies Estimating** — Groups related work items into assemblies (e.g., "interior partition wall" = metal studs + drywall + taping + painting + insulation) for faster estimating at the conceptual level.

### Scheduling
- **Critical Path Method (CPM)** — The foundational scheduling methodology. Identifies the longest sequence of dependent activities (the critical path) that determines the minimum project duration. Any delay to a critical path activity delays the entire project. Non-critical activities have float (scheduling flexibility).
- **Earned Value Management (EVM)** — Performance measurement methodology that integrates scope, schedule, and cost. Key metrics: CPI (Cost Performance Index), SPI (Schedule Performance Index), EAC (Estimate at Completion), ETC (Estimate to Complete). CPI < 1.0 means over budget; SPI < 1.0 means behind schedule.
- **Work Breakdown Structure (WBS)** — Hierarchical decomposition of project scope into manageable work packages. The basis for scheduling, estimating, and cost tracking. Typically organized by location, trade, or phase.
- **Look-Ahead Scheduling** — Short-term planning methodology (typically 3-6 week rolling window) that identifies upcoming activities, confirms resource availability, and removes constraints before they cause delays.
- **Pull Planning (Last Planner System)** — Lean construction methodology where trade foremen collaboratively plan work sequences by working backward from milestones. Each trade "pulls" work from the next trade by identifying what they need and when. Improves coordination and reduces waiting time between trades.

### Safety
- **OSHA 10/30 Training** — OSHA 10-hour (workers) and OSHA 30-hour (supervisors) construction safety training courses. Cover hazard recognition, fall protection, scaffolding, electrical, excavation, and workers' rights. OSHA 30 is required for supervisors on most commercial projects.
- **Job Hazard Analysis (JHA)** — Systematic process for identifying hazards associated with specific tasks, assessing risk, and defining control measures. Required before starting any high-risk activity.
- **Hierarchy of Controls** — NIOSH framework for hazard mitigation: (1) Elimination, (2) Substitution, (3) Engineering Controls, (4) Administrative Controls, (5) PPE. PPE is always the last resort, not the first response.

### Quality & Compliance
- **Building Code Compliance (IBC/IRC)** — International Building Code (commercial) and International Residential Code (residential) set minimum requirements for structural integrity, fire protection, accessibility, energy efficiency, and life safety. Local jurisdictions adopt and amend these codes.
- **AIA Contract Documents** — The American Institute of Architects publishes standard construction contract forms (A101 — Owner-Contractor, A201 — General Conditions, G702/G703 — Application for Payment). These contracts define rights, responsibilities, and dispute resolution for virtually every commercial project.
- **LEED (Leadership in Energy and Environmental Design)** — Green building certification system by USGBC. Levels: Certified, Silver, Gold, Platinum. Requires documented compliance with energy, water, materials, and indoor environmental quality credits during construction.

## Regulations

### Federal — OSHA
- **29 CFR 1926 (Construction Standards)** — The primary federal safety regulation for construction. Covers fall protection (Subpart M), scaffolding (Subpart L), electrical (Subpart K), excavations (Subpart P), cranes (Subpart CC), steel erection (Subpart R), confined spaces (Subpart AA), and hazard communication (Subpart Z). OSHA's "Focus Four" hazards (falls, struck-by, caught-in/between, electrocution) account for over 60% of construction fatalities.
- **29 CFR 1926.501-503 (Fall Protection)** — Requires fall protection at 6 feet in general construction. Methods include guardrails, safety nets, and personal fall arrest systems. Each method has specific engineering, inspection, and training requirements.
- **29 CFR 1926.650-652 (Excavations)** — Trenches 5 feet or deeper require protective systems (sloping, shoring, or trench boxes) unless excavated in stable rock. Competent person must inspect daily and after rain events. Cave-ins are one of the most lethal construction hazards.
- **29 CFR 1926.1400+ (Cranes)** — Crane operator certification (NCCCO or equivalent), annual inspection requirements, load chart compliance, critical lift planning, and signal person qualifications.

### Federal — Environmental
- **EPA Stormwater (NPDES/SWPPP)** — Construction sites disturbing 1+ acre require a Stormwater Pollution Prevention Plan. SWPPP must identify BMPs (Best Management Practices) for erosion and sediment control — silt fences, inlet protection, stabilized construction entrances. Non-compliance results in EPA enforcement and project shutdowns.
- **EPA Lead/Asbestos Abatement** — Lead paint (pre-1978 structures) and asbestos-containing materials require licensed abatement contractors, air monitoring, and specific disposal procedures per NESHAP regulations. Renovations of older buildings must test before disturbing materials.

### Federal — Labor & Contracts
- **Davis-Bacon Act** — Federal construction contracts over $2,000 require payment of prevailing wages as determined by the Department of Labor for the project locality. Certified payroll must be submitted weekly. Applies to all federally funded or federally leased projects. Violation results in contractor debarment.
- **Miller Act** — Federal construction contracts over $150,000 require performance bonds and payment bonds from the prime contractor. Performance bond guarantees project completion; payment bond guarantees payment to subcontractors and suppliers.
- **ADA Compliance** — All commercial construction must comply with Americans with Disabilities Act accessibility requirements: accessible routes, door widths, restroom clearances, ramp slopes, signage, and parking.

### State & Local
- **State Contractor Licensing** — Most states require contractor licenses with financial, experience, and examination requirements. Operating without a license is a criminal offense in many jurisdictions and voids lien rights.
- **Building Permits** — All construction requires local building permits before work begins. Permit review timelines vary from days (simple residential) to months (complex commercial with zoning variances). Work without permits must be demolished at the contractor's expense.
- **Mechanic's Lien Laws** — State-specific laws that allow contractors, subcontractors, and suppliers to place liens on property for unpaid work. Notice requirements, filing deadlines, and enforcement procedures vary by state. Missing a lien deadline = losing the right to payment security.
- **Bonding Requirements** — Bid bonds (guarantee the bidder will enter the contract), performance bonds (guarantee completion), and payment bonds (guarantee payment to subs and suppliers). Bonding capacity is based on the contractor's financial strength, experience, and work-in-progress. Running out of bonding capacity limits a contractor's ability to take new work.

## Common Terminology

| Term | Meaning |
|------|---------|
| **GC (General Contractor)** | The prime contractor responsible for overall project execution, coordination of subcontractors, and contractual relationship with the owner |
| **Sub (Subcontractor)** | Specialty contractor performing a specific trade (electrical, plumbing, HVAC, drywall, concrete) under contract to the GC |
| **Owner** | The entity funding and commissioning the construction project — may be a developer, corporation, government agency, or individual |
| **A/E (Architect/Engineer)** | The design team responsible for drawings and specifications. Architect of Record has legal responsibility for design compliance |
| **CM (Construction Manager)** | Owner's representative managing the construction process. CM-at-Risk holds the GMP contract; CM-Agency advises without financial risk |
| **RFI (Request for Information)** | Formal written question from the contractor to the A/E seeking clarification on drawings or specifications. RFI responses become part of the contract documents |
| **Submittal** | Product data, shop drawings, samples, or test reports submitted by the contractor for A/E review and approval before installation. Submittal review ensures specified products are being used |
| **Change Order (CO)** | A formal modification to the contract that changes scope, cost, or schedule. Must be signed by both parties. Unauthorized work without a CO is at the contractor's financial risk |
| **ASI (Architect's Supplemental Instruction)** | A directive from the architect clarifying or changing the design that does not affect contract cost or time. If it does affect cost/time, it should be a Change Order |
| **Punch List** | A list of incomplete or defective work items identified during a walkthrough near the end of construction. Must be completed before final payment |
| **Substantial Completion** | The point at which the project is sufficiently complete for the owner to occupy and use it for its intended purpose. Triggers the warranty period and release of retainage |
| **Retainage** | A percentage (typically 5-10%) of each progress payment withheld by the owner until substantial completion. Ensures the contractor completes punch list work. Release of retainage is often the most contentious payment issue |
| **Liquidated Damages (LDs)** | A pre-agreed daily monetary penalty the contractor pays to the owner for each day the project extends beyond the contractual completion date. Typically $500-$5,000/day for commercial projects |
| **Bonding** | Financial guarantees (bid bond, performance bond, payment bond) issued by a surety company backing the contractor's obligations. Bonding capacity is a key constraint for growing contractors |
| **GMP (Guaranteed Maximum Price)** | A contract structure where the GC guarantees the project will not exceed a maximum cost. Overruns are absorbed by the GC; savings are typically shared with the owner |
| **Lump Sum (Stipulated Sum)** | A fixed-price contract where the contractor agrees to complete the work for a specific dollar amount regardless of actual costs |
| **T&M (Time and Materials)** | A cost-plus contract structure where the owner pays for actual labor hours and materials plus a markup. Used for undefined scope or emergency work |
| **AIA Billing (G702/G703)** | The standard Application for Payment forms used on most commercial projects. G702 is the cover sheet; G703 is the schedule of values showing percent complete by line item |
| **Schedule of Values (SOV)** | A detailed breakdown of the contract amount into line items (by trade, area, or phase) used for progress billing. Must align with the WBS and be approved by the owner before first billing |
| **Notice to Proceed (NTP)** | Formal owner notification authorizing the contractor to begin work. The contractual start date for scheduling and liquidated damages |
| **Certificate of Occupancy (CO/TCO)** | Government-issued permit allowing building occupancy after passing final inspections. Temporary CO (TCO) allows partial occupancy before all work is complete |
| **Per Diem** | Daily allowance for workers traveling to jobsites away from home. Varies by locality and trade. Not subject to payroll tax if within IRS limits |
| **Prevailing Wage** | The hourly wage, benefits, and overtime rate established by the Department of Labor for each trade in a specific locality. Required on all Davis-Bacon (federal) and many state-funded projects |
| **Competent Person** | OSHA-defined role: a person capable of identifying existing and predictable hazards and authorized to take prompt corrective measures to eliminate them. Required for excavation, scaffolding, fall protection, and other high-risk activities |
| **Means and Methods** | The contractor's choice of construction techniques, procedures, equipment, and sequencing. Generally the contractor's responsibility, not the designer's |
| **Constructability Review** | A preconstruction review of design documents to identify potential field conflicts, sequencing issues, and buildability concerns before construction begins |
| **Value Engineering (VE)** | The process of analyzing project design to identify cost savings without sacrificing function or quality. Typically performed during preconstruction |
| **Mobilization** | The process of moving personnel, equipment, temporary facilities, and materials to a jobsite to begin work. Often a separate line item in the contract |
| **Demobilization** | The reverse of mobilization — removing equipment, temporary facilities, and cleaning the site at project completion |
| **As-Built Drawings** | Marked-up construction drawings showing actual installed conditions, including field changes, routing, and locations that differ from the original design. Required at closeout |
| **Closeout** | The final phase of construction: punch list completion, final inspections, as-built drawings, O&M manuals, training, warranty letters, final lien waivers, and release of retainage |
| **Daily Log (Daily Report)** | The superintendent's daily record of weather, manpower, work performed, deliveries, visitors, incidents, and delays. Critical documentation for claims and disputes |
| **Shop Drawings** | Detailed fabrication drawings prepared by the contractor or subcontractor showing how specified products will be manufactured and installed. Reviewed by the A/E for design compliance |

## Common Mistakes in This Field

1. **Incomplete quantity takeoff** — Missing items that appear only on certain drawing sheets (reflected ceiling plans, enlarged details, sections, schedules). Construction documents are a 3D puzzle spread across dozens of 2D sheets. If the estimator only reviews the floor plan, they will miss items shown on the RCP, elevations, sections, and detail sheets. A missed return wall on the RCP can represent $5,000-$15,000 in drywall, framing, and paint.

2. **Not accounting for permit timelines in the schedule** — Treating the permit as a zero-duration milestone when it actually takes 2-8 weeks depending on jurisdiction and project complexity. Many schedules show construction starting immediately after "permit submittal" with no review duration. This is fiction. Permit delays are the single most common cause of schedule overruns on commercial projects.

3. **Using outdated material pricing** — Construction material prices are volatile. Steel, lumber, copper, and drywall prices can swing 10-25% in a quarter. An estimate using 6-month-old pricing on a project that doesn't start for 3 months can be 15-30% off on material costs. Professional estimators use material escalation clauses or real-time pricing from suppliers.

4. **Omitting contingency for unforeseen conditions** — Especially in tenant improvement and renovation work, where hidden conditions (asbestos, lead paint, structural deficiencies, unknown utilities) are common. Industry standard is 5-10% contingency for TI work, 10-15% for renovation, and 3-5% for new construction. Bidding without contingency is gambling with the company's profit margin.

5. **Failing to verify prevailing wage applicability** — Not checking whether a project is subject to Davis-Bacon (federal) or state prevailing wage requirements. Prevailing wage rates can be 30-80% higher than open-shop rates depending on the trade and locality. Using open-shop rates on a prevailing wage project means the bid is catastrophically low on labor — the contractor must still pay prevailing wages regardless of what they bid.

6. **Inadequate fall protection compliance** — OSHA's number one cited violation in construction, year after year. Falls from heights are the leading cause of death in construction. Common violations: no guardrails on open-sided floors, no personal fall arrest systems on scaffolding above 6 feet, no hole covers, and inadequate training. A single fall fatality results in OSHA investigation, potential willful violation citations ($156,259 per violation), and criminal prosecution for repeat offenders.

7. **Poor subcontractor scope coordination** — Gaps and overlaps between subcontractor scopes of work. If the GC's bid documents don't clearly define who provides fire caulking, backing for wall-mounted items, or temporary protection, these costs become change orders or field disputes. Scope gaps are the leading source of project cost overruns.

8. **Ignoring excavation safety requirements** — Trenches 5 feet or deeper require protective systems. Cave-ins are among the most lethal construction events — workers have seconds to react and the force of soil collapse is fatal. Despite this, unprotected trenches are a top-5 OSHA citation. The "competent person" requirement is frequently ignored.

9. **Not protecting lien rights** — Subcontractors and suppliers who fail to send preliminary notices, miss lien filing deadlines, or don't track payment bonds lose their legal right to payment. State lien laws have strict timelines (often 20-90 days from last work). Missing a deadline by one day = no lien rights = no leverage = no payment.

10. **Schedule logic errors on the critical path** — Using incorrect predecessor/successor relationships (finish-to-start vs. start-to-start), missing dependencies between trades, or not including commissioning and inspection durations. A schedule that looks achievable on paper but has broken logic will fail in the field. The critical path should be validated by the superintendent, not just the scheduler.

## Excellent vs. Dangerous Work

### Excellent Work Looks Like
- Estimates that capture every scope item from every drawing sheet, include waste factors, verify current material pricing, and carry appropriate contingency
- Schedules built collaboratively with trade foremen using pull planning, with realistic durations validated against crew productivity rates
- Safety programs where 100% of workers attend toolbox talks, hazard reporting is encouraged and acted upon, and near-misses are investigated as thoroughly as incidents
- Bid comparisons that analyze subcontractor quotes for scope gaps, not just lowest number — the cheapest bid is often the one that missed the most scope
- Change order management that documents cost and schedule impacts before performing additional work, with photographic evidence and daily logs supporting every claim
- Inspection reports that identify root causes, not just deficiencies — "the anchor bolts are misaligned" vs. "the anchor bolts are misaligned because the layout was done from the wrong control line, and all 14 columns in this grid need to be verified"

### Dangerous Work Looks Like
- Bidding projects without visiting the site, reviewing all drawing sheets, or verifying existing conditions
- Scheduling without float, contingency, or weather days — "best case" schedules that have zero margin for reality
- Treating safety as paperwork — completing OSHA documentation without actually inspecting conditions
- Using "lowest bidder wins" for subcontractor selection without scope verification
- Working without permits because "we'll get them later" — this can result in demolition of completed work
- Operating cranes with expired inspection certificates or unqualified operators
- Excavating without protective systems because "it's just a quick trench"
- Releasing retainage before punch list completion because the owner is pressuring occupancy

## Relevant Certifications

| Certification | Issuing Body | Focus |
|--------------|-------------|-------|
| **PE (Professional Engineer)** | State licensing boards (NCEES exam) | Licensed engineers can stamp structural calculations, MEP designs, and civil drawings. Required for structural work, foundation design, and specialty engineering |
| **PMP (Project Management Professional)** | Project Management Institute (PMI) | General project management methodology — scheduling, budgeting, risk management, stakeholder management. Widely respected but not construction-specific |
| **OSHA 30 (Construction)** | OSHA (via authorized trainers) | 30-hour construction safety course covering fall protection, scaffolding, electrical, excavation, PPE, hazard communication. Required for all supervisors on most commercial projects |
| **OSHA 10 (Construction)** | OSHA (via authorized trainers) | 10-hour construction safety orientation for workers. Required on many commercial and public projects |
| **LEED AP (Accredited Professional)** | USGBC (US Green Building Council) | Leadership in Energy and Environmental Design credential for green building professionals. Specialties: BD+C (Building Design + Construction), ID+C (Interior Design + Construction), O+M (Operations + Maintenance) |
| **CCM (Certified Construction Manager)** | CMAA (Construction Management Association of America) | Professional certification for construction managers demonstrating competency in project management, cost management, time management, quality management, and contract administration |
| **CPC (Certified Professional Constructor)** | AIC (American Institute of Constructors) | Two-level certification (Associate Constructor and Certified Professional Constructor) testing knowledge of estimating, scheduling, safety, contracts, and project management |
| **NCCCO (Crane Operator Certification)** | National Commission for the Certification of Crane Operators | Required certification for crane operators under OSHA 29 CFR 1926.1427. Tests written knowledge and practical operation for specific crane types |
| **AWS CWI (Certified Welding Inspector)** | American Welding Society | Certification for inspecting structural and miscellaneous steel welding per AWS D1.1. Required on most structural steel projects |
| **ACI Concrete Certifications** | American Concrete Institute | Field testing technician (Grade I and II), flatwork finisher, and other concrete certifications for testing and placement inspection |
