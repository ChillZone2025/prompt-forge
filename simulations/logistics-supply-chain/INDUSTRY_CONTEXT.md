# Industry Context: Logistics & Supply Chain

## What This Industry Does

Logistics and supply chain management encompasses the end-to-end movement, storage, and coordination of goods from origin to consumption. This includes freight transportation (truckload, LTL, intermodal, ocean, air), warehousing and distribution center operations, demand planning and inventory optimization, customs and trade compliance, carrier procurement and negotiation, and freight cost management.

Practitioners include supply chain managers, logistics coordinators, freight brokers, transportation analysts, warehouse operations managers, customs brokers, demand planners, procurement specialists, 3PL account managers, and trade compliance officers.

The industry operates on razor-thin margins (3-8% net for carriers, 15-25% gross for brokers) where small inefficiencies compound into massive cost overruns. A 2% freight cost reduction on a $50M spend saves $1M annually — and most shippers have 5-10% in recoverable waste they don't know about.

## Key Tools & Platforms

### Transportation Management Systems (TMS)
- **MercuryGate TMS** — Cloud-based TMS for shippers and 3PLs. Multi-modal rating, optimization, and execution. Strong in LTL and parcel rating.
- **Oracle Transportation Management (OTM)** — Enterprise TMS for large shippers. Bulk plan optimization, continuous move planning, fleet management. Complex to implement but powerful.
- **SAP S/4HANA (Transportation Management module)** — Integrated SCM with embedded TMS. Best for companies already on SAP ERP. Real-time freight cost allocation.
- **Blue Yonder (formerly JDA)** — AI-driven supply chain planning. Luminate Platform covers demand, fulfillment, and transportation.
- **Kuebix TMS (Trimble)** — Mid-market TMS with free community edition. Good entry point for shippers doing <5,000 shipments/month.
- **C.H. Robinson Navisphere** — Managed TMS from the world's largest freight broker. Combines technology with brokerage execution.

### Warehouse Management Systems (WMS)
- **Manhattan Associates WMS** — Enterprise-grade WMS. Industry leader for complex distribution. Slotting optimization, wave planning, labor management.
- **Blue Yonder WMS** — Cloud-native WMS with embedded ML for demand-driven fulfillment. Strong in retail and e-commerce.
- **SAP Extended Warehouse Management (EWM)** — Integrated with SAP ERP. Best for companies needing tight ERP-WMS coupling.
- **Korber (formerly HighJump)** — Flexible WMS with strong 3PL billing and multi-client support.

### Supply Chain Planning & Visibility
- **Kinaxis RapidResponse** — Concurrent planning platform. What-if scenario modeling across demand, supply, and inventory. Used by aerospace, automotive, pharma.
- **o9 Solutions** — AI-powered integrated business planning (IBP). Combines demand sensing, supply planning, and revenue management.
- **project44** — Real-time visibility platform. Tracks shipments across all modes with carrier-agnostic ETA predictions.
- **FourKites** — Supply chain visibility with predictive analytics. Strong in dwell time tracking and yard management.
- **Coupa** — Procurement and supply chain platform. Spend management, sourcing, and supplier risk.
- **Llamasoft (Coupa Supply Chain Design)** — Network design and optimization. Models DC locations, sourcing decisions, and mode selection.

### Trade & Customs
- **CargoWise (WiseTech Global)** — Dominant platform for customs brokers and freight forwarders. Handles entries, classifications, compliance screening, and ABI/ACS filing.
- **Descartes Systems** — Customs and regulatory compliance. Denied party screening, HTS classification assistance, trade content database.
- **Amber Road (E2open)** — Global trade management. Restricted party screening, FTA qualification, duty management.
- **GT Nexus (Infor Nexus)** — Multi-enterprise supply chain network. Purchase order collaboration, shipment tracking, trade finance.

### Freight Marketplaces & Load Boards
- **DAT Freight & Analytics** — Largest load board in North America. Rate benchmarking (RateView), lane analytics, broker-carrier matching.
- **Truckstop.com** — Load board with rate data, fuel optimization, and carrier onboarding tools.
- **FreightPOP** — Multi-carrier shipping platform. Automates rate shopping across LTL, FTL, parcel, and international.
- **Flexport** — Digital freight forwarder. End-to-end visibility for ocean, air, and trucking with customs brokerage.
- **Uber Freight** — Digital brokerage with API-based pricing and instant booking for FTL.

## Key Frameworks & Methodologies

### Supply Chain Strategy
- **SCOR Model (Supply Chain Operations Reference)** — Framework from ASCM (formerly APICS) covering Plan, Source, Make, Deliver, Return, Enable. Used for benchmarking supply chain performance with 250+ metrics.
- **Lean Supply Chain** — Elimination of waste (muda) across the supply chain: overproduction, waiting, transportation, over-processing, inventory, motion, defects. Toyota Production System adapted for logistics.
- **Just-in-Time (JIT) vs. Just-in-Case (JIC)** — JIT minimizes inventory by synchronizing deliveries to production schedules. JIC builds safety stock buffers. Post-COVID, most companies shifted toward JIC or hybrid models.
- **Total Cost of Ownership (TCO)** — Evaluating freight decisions on all-in cost: base rate + fuel surcharge + accessorials + detention + claims + administrative overhead. Cheapest carrier is rarely lowest TCO.

### Inventory Management
- **Safety Stock Calculation** — SS = Z-score x sqrt(lead time variance x avg demand^2 + avg lead time x demand variance^2). Under-calculating leads to stockouts; over-calculating ties up working capital.
- **Economic Order Quantity (EOQ)** — Balances ordering costs against holding costs. EOQ = sqrt(2DS/H) where D=demand, S=ordering cost, H=holding cost per unit.
- **ABC Inventory Classification** — A items (top 20% by value, 80% of spend), B items (next 30%, 15% of spend), C items (bottom 50%, 5% of spend). Service levels, count frequencies, and replenishment strategies vary by class.
- **Bullwhip Effect** — Small demand fluctuations at retail amplify exponentially upstream through the supply chain. Caused by demand forecast updating, order batching, price fluctuation, and rationing.

### Transportation Optimization
- **Mode Optimization (LTL vs. FTL Breakpoints)** — Generally, FTL becomes more economical at 10,000-12,000 lbs or when LTL rates per hundredweight exceed FTL per-mile rates for the lane. The exact breakpoint depends on commodity class, density, and lane.
- **Milk Run Routing** — Single vehicle makes multiple pickup or delivery stops in a circuit, returning to origin. Reduces deadhead miles and improves asset utilization.
- **Hub-and-Spoke vs. Point-to-Point** — Hub-and-spoke consolidates volume for linehaul efficiency but adds handling and dwell time. Point-to-point is faster but requires sufficient lane volume to justify dedicated capacity.
- **Cross-Docking** — Freight moves from inbound to outbound dock with minimal storage. Reduces inventory holding costs but requires tight scheduling and reliable carrier performance.
- **Continuous Move Planning** — Chaining shipments so a carrier picks up the next load at or near their delivery point, eliminating deadhead. Reduces cost 10-20% but requires sophisticated planning.
- **Landed Cost Calculation** — Product cost + freight + insurance + customs duties + taxes + handling + compliance costs. Critical for import sourcing decisions.

### Warehouse Operations
- **Warehouse Slotting Optimization** — Placing fast-moving SKUs in ergonomic pick locations (golden zone) to minimize travel time. Re-slot quarterly based on velocity changes.
- **Pick-Pack-Ship Workflow** — Order released > pick path generated > items picked (batch, wave, or zone) > packed to carrier specifications > labeled > staged for carrier pickup.
- **Wave Planning** — Grouping orders into waves based on carrier cutoff times, ship method, or zone to maximize throughput and minimize shipping cost.

## Regulations & Compliance

### Domestic Transportation (US)
- **FMCSA Regulations** — Hours of Service (HOS): 11-hour driving limit, 14-hour on-duty window, 30-min break after 8 hours, 70-hour/8-day rolling limit. ELD mandate requires electronic logging for all CMVs.
- **DOT Hazardous Materials (49 CFR Parts 100-185)** — Classification, packaging, marking, labeling, and placarding requirements for hazmat shipments. Shipper, carrier, and driver all have compliance obligations.
- **FMCSA Safety Ratings** — Satisfactory, Conditional, Unsatisfactory. Carriers with Conditional or Unsatisfactory ratings increase shipper liability in accident claims (vicarious liability / negligent selection).
- **CDL Requirements** — Class A (combination vehicles >26,001 lbs), Class B (single vehicles >26,001 lbs), Class C (hazmat, passenger vehicles). Endorsements for hazmat (H), tanker (N), doubles/triples (T).

### Customs & International Trade
- **CBP Entry Types** — Type 01 (consumption/formal entry), Type 03 (consumption entry + antidumping/countervailing duty), Type 06 (warehouse entry — duties deferred until release from bonded warehouse), Type 11 (informal entry, <$2,500).
- **HTS Classification** — Harmonized Tariff Schedule uses 10-digit codes for duty rate determination. Misclassification is the #1 customs compliance risk — penalties range from negligence (2x lost revenue) to fraud (4x + criminal referral).
- **Incoterms 2020** — 11 standardized trade terms defining buyer/seller responsibilities. Key ones: FOB (risk transfers at port of loading), CIF (seller pays freight + insurance to destination port), DDP (seller delivers duty-paid to buyer's door).
- **C-TPAT (Customs-Trade Partnership Against Terrorism)** — Voluntary CBP program offering reduced inspections, priority processing, and front-of-line privileges. Requires security profile, supply chain security procedures, and periodic validation. Three tiers with increasing benefits.
- **USMCA (United States-Mexico-Canada Agreement)** — Replaced NAFTA. Preferential duty treatment requires meeting rules of origin: tariff shift, regional value content (RVC), or net cost method. Certificates of origin must document qualification.
- **Section 301 / Section 201 Tariffs** — Additional duties on specific products from specific countries (Section 301 primarily targeting China). Currently 7.5-25% on top of MFN duty rates. Cannot be avoided by reclassification — that constitutes tariff evasion.
- **Anti-Dumping and Countervailing Duties (AD/CVD)** — Additional duties on products sold below fair market value (dumping) or benefiting from foreign government subsidies. Rates can be 100%+. Triggered by entry type 03.

### Ocean & Air Specific
- **FMC (Federal Maritime Commission)** — Regulates ocean shipping. Shipping Act amendments require service contract filing, prohibit unfair/unjust practices, address detention/demurrage disputes.
- **IATA Dangerous Goods Regulations (DGR)** — Classification and handling requirements for hazardous materials shipped by air. More restrictive than ground transport. Shipper's Declaration required.
- **IMO IMDG Code** — International Maritime Dangerous Goods code for ocean freight. Container packing certificate, dangerous goods declaration, segregation requirements.
- **Jones Act** — Requires goods shipped between US ports to be carried on US-built, US-flagged, US-crewed vessels. Significantly increases domestic ocean shipping costs (e.g., Hawaii, Alaska, Puerto Rico).

### Food & Pharma
- **FSMA (Food Safety Modernization Act)** — Sanitary transport requirements (21 CFR Part 1, Subpart O). Temperature monitoring, trailer washout records, contamination prevention. Applies to shippers, carriers, and receivers.

## Common Terminology

| Term | Meaning |
|------|---------|
| **BOL (Bill of Lading)** | Contract between shipper and carrier. Serves as receipt of goods, document of title, and contract of carriage. Master BOL covers full shipment; House BOL covers individual consignee. |
| **POD (Proof of Delivery)** | Signed receipt confirming delivery — date, time, condition, and signer. Required for freight claim disputes and invoice payment. |
| **LTL (Less-Than-Truckload)** | Shipments sharing truck space with other shippers. Rated by weight, freight class (NMFC), and distance. Typically 150-10,000 lbs. |
| **FTL / TL (Full Truckload)** | Shipment uses the full trailer. Rated per mile plus fuel surcharge. Standard dry van: 45,000 lbs max, 2,500-3,000 cubic feet. |
| **Intermodal** | Container moved by multiple transport modes (typically truck-rail-truck). 10-20% cheaper than OTR for lanes >500 miles, but 1-2 days slower. |
| **Drayage** | Short-distance trucking to/from ports, rail terminals, or intermodal facilities. Typically under 100 miles. |
| **Deadhead** | Truck running empty (no revenue freight). Average deadhead is 15-20% of total miles nationally. Major cost driver for carriers. |
| **Lumper** | Third-party labor used to unload trailers at receiver facilities. Cost is $200-500 per occurrence. Often disputed — must be in carrier contract or BOL. |
| **Detention** | Charge when a carrier's truck is held at shipper/receiver beyond free time (usually 2 hours). Rate: $50-100/hour. Major driver of carrier dissatisfaction. |
| **Demurrage** | Charge for containers sitting at port or rail terminal beyond free time. Ocean container demurrage: $150-350/day. Adds up fast during port congestion. |
| **Accessorial** | Any charge beyond standard linehaul: liftgate, inside delivery, residential delivery, limited access, appointment scheduling, redelivery, sort/segregate. Can add 15-40% to base freight cost. |
| **HTS Code** | Harmonized Tariff Schedule classification number. 10 digits in the US. Determines duty rate, quota applicability, and trade program eligibility. |
| **Duty Drawback** | Refund of duties paid on imported goods that are subsequently exported (either directly or incorporated into manufactured products). Recovers up to 99% of duties. |
| **Bonded Warehouse** | CBP-approved facility where imported goods can be stored for up to 5 years without paying duties. Duties are paid when goods are withdrawn for consumption. |
| **3PL (Third-Party Logistics)** | Company that provides outsourced logistics services: warehousing, transportation, fulfillment. Examples: XPO, DHL Supply Chain, Ryder. |
| **4PL (Fourth-Party Logistics)** | Company that manages the entire supply chain on behalf of the client, including managing 3PLs. Acts as a single point of accountability. |
| **Cross-Dock** | Warehouse operation where inbound freight is sorted and loaded directly onto outbound trucks with minimal storage (typically <24 hours dwell time). |
| **VMI (Vendor-Managed Inventory)** | Supplier monitors customer inventory levels and replenishes automatically. Shifts forecasting responsibility to the party with better demand visibility. |
| **EDI (Electronic Data Interchange)** | Standardized electronic documents: 204 (motor carrier load tender), 210 (motor carrier freight invoice), 214 (shipment status), 856 (ASN), 997 (functional acknowledgment). |
| **ASN (Advance Ship Notice)** | EDI 856 document sent by shipper to receiver before delivery. Contains contents, quantities, and estimated arrival. Required by most large retailers. |
| **OTIF (On-Time In-Full)** | Key performance metric — percentage of orders delivered on time AND with complete quantities. Walmart standard: 98%. Chargebacks for misses: $0.03-$3.00 per unit. |
| **Lead Time** | Total elapsed time from order placement to receipt. Includes processing, manufacturing (if applicable), transit, and customs clearance. |
| **Safety Stock** | Buffer inventory held to protect against demand variability and supply uncertainty. Excess safety stock ties up working capital; insufficient safety stock causes stockouts. |
| **Bullwhip Effect** | Demand signal distortion that amplifies as it moves upstream through the supply chain. A 5% demand increase at retail can become a 40% increase at the raw material supplier. |
| **Landed Cost** | Total cost of a product delivered to the buyer's door: product cost + freight + insurance + duties + taxes + handling + compliance. The only honest comparison metric for sourcing decisions. |
| **FOB (Free On Board)** | Incoterm where risk transfers from seller to buyer when goods pass the ship's rail at the port of loading. Buyer arranges and pays for ocean freight. |
| **CIF (Cost, Insurance, Freight)** | Incoterm where seller pays freight and insurance to the destination port. Risk still transfers at port of loading. |
| **DDP (Delivered Duty Paid)** | Incoterm where seller delivers goods cleared for import with all duties paid. Maximum seller responsibility. |
| **Drop Ship** | Goods shipped directly from manufacturer/supplier to end customer, bypassing the seller's warehouse. Reduces inventory holding costs but limits quality control. |
| **Freight Class (NMFC)** | National Motor Freight Classification. 18 classes from 50 to 500 based on density, handling, stowability, and liability. Lower class = lower rate. Class 50 = dense, easy to handle. Class 500 = light, fragile, difficult. |

## Common Mistakes in This Field

1. **Incorrect HTS classification** — Using the wrong tariff code leads to duty overpayment or underpayment. Overpayment wastes money; underpayment triggers penalties. CBP audits look back 5 years. Classification should be done by a licensed customs broker or trade compliance specialist, not by whoever fills out the paperwork fastest.

2. **Not auditing freight invoices** — Industry data shows 3-5% of freight invoices contain billing errors (wrong weight, wrong class, duplicate charges, incorrect accessorials). On $5M in annual freight, that's $150K-$250K in overpayments. Most shippers never audit because they assume carrier invoices are correct.

3. **Ignoring detention and demurrage charges** — These charges are often accepted as "cost of doing business" instead of being managed. Root causes (slow receiving, inadequate dock scheduling, poor container return logistics) are fixable. Companies regularly pay $50K-$200K annually in avoidable detention/demurrage.

4. **Using single-source carriers** — Concentrating volume with one carrier creates dependency risk. When that carrier has capacity constraints, service failures, or raises rates, the shipper has no leverage. Best practice: 2-3 carriers per lane, with a primary (60-70% of volume) and backup carriers.

5. **Not factoring accessorial charges into total freight cost** — A carrier with the lowest linehaul rate may be the most expensive when liftgate, residential delivery, inside delivery, appointment fees, and redelivery charges are added. Total cost analysis must include all accessorials specific to the shipper's delivery profile.

6. **Failing to maintain C-TPAT compliance** — Companies achieve C-TPAT certification, then let security procedures decay. Validations occur every 3-4 years, and expired validations can result in loss of Tier 2/3 benefits (reduced inspections, priority processing). Maintaining compliance requires annual self-assessments.

7. **Over-ordering safety stock without demand signal analysis** — Buying "just in case" without analyzing actual demand variability, lead time reliability, and service level requirements results in excess inventory, increased carrying costs (typically 20-30% of inventory value annually), and eventual obsolescence.

8. **Ignoring mode optimization (LTL vs. FTL breakpoints)** — Shipping 8,000 lbs as FTL when LTL would be 30% cheaper, or shipping 12,000 lbs as LTL when a partial truckload rate would save 25%. The breakpoint varies by lane, commodity, and carrier, but most shippers never analyze it.

9. **Not tracking OTIF metrics** — Without measuring on-time, in-full delivery performance by carrier and lane, shippers cannot identify underperformers, negotiate from data, or prevent customer chargebacks. Walmart, Target, and Amazon all impose financial penalties for OTIF misses.

10. **Failing to update routing guides annually** — Routing guides (preferred carrier assignments by lane, mode, and service level) become stale as carrier performance changes, rates shift, and volume patterns evolve. Annual routing guide optimization with competitive bidding typically saves 5-12%.

## Excellent vs. Dangerous Work

### What Excellent Looks Like
- **Freight audit that calculates recovery** — Identifies specific overcharges with carrier, invoice number, amount, and root cause. Presents total recoverable amount and recommends process changes to prevent recurrence.
- **Route optimization backed by data** — Analyzes lane-level cost per unit shipped, transit time, damage rate, and OTIF performance. Recommends specific changes (mode shifts, consolidation, routing changes) with projected savings and implementation timeline.
- **Customs compliance that reduces duty exposure** — Reviews HTS classifications against binding rulings, identifies FTA qualification opportunities, recommends duty deferral strategies (FTZ, bonded warehouse), and calculates financial impact.
- **Carrier negotiation that balances cost and service** — Uses market rate benchmarks (DAT, Greenscreens) and the shipper's own lane data to negotiate from a position of knowledge. Structures contracts with performance incentives, not just price.
- **Demand planning that quantifies uncertainty** — Produces forecasts with confidence intervals, distinguishes between bias and noise in forecast error, and recommends inventory buffers proportional to actual demand variability.

### What Dangerous Looks Like
- **Accepting carrier invoices at face value** — Paying every invoice without auditing weight, class, accessorials, or fuel surcharge calculations. Guaranteed to overpay.
- **Recommending tariff reclassification to avoid duties** — Suggesting products be classified under a different HTS code solely to reduce duty rates is tariff evasion, which is a federal crime. Legitimate classification review is different from intentional misclassification.
- **Ignoring compliance deadlines** — Letting C-TPAT validations expire, failing to implement CBP audit corrective actions, or not filing reconciliation entries on time. Each creates escalating regulatory risk.
- **Single-metric carrier selection** — Choosing carriers solely on rate without evaluating OTIF, claims ratio, driver turnover, safety rating, insurance coverage, and financial stability.
- **Inventory recommendations without demand analysis** — Recommending safety stock levels based on gut feel rather than statistical analysis of demand variability and lead time uncertainty.

## Professional Certifications

| Certification | Issuing Body | Focus |
|---------------|-------------|-------|
| **CSCP (Certified Supply Chain Professional)** | ASCM (formerly APICS) | End-to-end supply chain management: design, planning, execution, improvement. The most recognized SCM credential globally. |
| **CPIM (Certified in Planning and Inventory Management)** | ASCM | Demand management, procurement, material requirements planning, supplier relationships, master scheduling. Deep operations focus. |
| **CLTD (Certified in Logistics, Transportation and Distribution)** | ASCM | Logistics network design, capacity planning, transportation management, warehouse operations, global logistics. |
| **CTB (Certified Transportation Broker)** | TIA (Transportation Intermediaries Association) | Freight brokerage operations: carrier procurement, rate negotiation, compliance, claims management. Required knowledge for licensed brokers. |
| **CCS (Certified Customs Specialist)** | NCBFAA | Customs regulations, HTS classification, entry procedures, FTA qualification, bonded warehouse operations. |
| **LCB (Licensed Customs Broker)** | CBP (US Customs and Border Protection) | Federal license required to clear goods through US customs on behalf of importers. Requires passing the customs broker license exam (pass rate ~15%). |
| **Six Sigma (Green Belt / Black Belt)** | ASQ / IASSC | Process improvement methodology applied to logistics: reducing transit time variability, improving warehouse pick accuracy, eliminating billing errors. |
| **CSCMP SCPro** | CSCMP (Council of Supply Chain Management Professionals) | Three-level certification covering supply chain analytics, project management, and transformation leadership. |
