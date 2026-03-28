# Freight Audit & Route Optimization Analysis — Consumer Goods Distributor

## Company Profile

- **Company:** Great Lakes Consumer Products, Inc.
- **Industry:** Consumer packaged goods (household cleaning, personal care)
- **Annual Freight Spend:** $4.2M (outbound distribution only)
- **Shipments per Month:** ~8,500 (mix of LTL and FTL)
- **Distribution Centers:** 3

| DC | Location | Monthly Shipments | Primary Coverage |
|----|----------|-------------------|-----------------|
| DC-ATL | Atlanta, GA | 3,400 | Southeast US (FL, GA, AL, SC, NC, TN, MS) |
| DC-ORD | Chicago, IL (Romeoville) | 3,100 | Midwest + South Central (IL, IN, OH, MI, WI, MN, TX, OK, MO) |
| DC-EWR | Newark, NJ | 2,000 | Northeast + Mid-Atlantic (NY, NJ, PA, CT, MA, MD, VA, DC) |

- **Average Shipment Weight:** 8,200 lbs (skews toward LTL/partial TL)
- **Product Characteristics:** Freight class 70-85, non-hazmat, floor-loaded and palletized, standard dry van, some temperature-sensitive items (not reefer — just "protect from freeze")
- **Primary Customers:** Regional grocery chains, mass merchants, drug stores, e-commerce fulfillment centers

---

## Current Carrier Roster

| Carrier | Code | Contract Start | Modes | Primary Lanes | Contracted Rate Basis |
|---------|------|---------------|-------|---------------|----------------------|
| Southeast Express Lines | SEL | Jan 2024 | FTL, LTL | ATL outbound | FTL: $2.45/mi + FSC; LTL: tariff discount CZAR 400-40% |
| Heartland Motor Freight | HMF | Mar 2024 | FTL, LTL | ORD outbound | FTL: $2.52/mi + FSC; LTL: CZAR 400-42% |
| Carrier B — National Logistics Corp | NLC | Jun 2023 | FTL, LTL, Partial | All DCs | FTL: $2.28/mi + FSC; LTL: CZAR 400-45% |
| Atlantic Freight Systems | AFS | Sep 2024 | LTL, Partial | EWR outbound | LTL: CZAR 400-38%; Partial TL: $1,850 flat <12,000 lbs |
| Express Intermodal Partners | EIP | Jan 2025 | Intermodal | ORD-TX, ORD-Southeast | Container rate: $1,450 Chicago-Dallas, $1,280 Chicago-Atlanta |

### Fuel Surcharge Basis
- All carriers: DOE National Average Diesel, applied as percentage of linehaul per published scale
- Base trigger: $3.00/gallon
- Current DOE avg: $3.82/gallon
- **Expected FSC: ~22-26% of linehaul**

---

## Freight Invoice Sample (20 Invoices — Last 30 Days)

| Inv # | Date | Carrier | Origin DC | Destination | City/State | Mode | Weight (lbs) | Class | Linehaul | FSC | Accessorials | Total | Notes |
|-------|------|---------|-----------|-------------|------------|------|-------------|-------|----------|-----|-------------|-------|-------|
| 8001 | 03/01 | SEL | ATL | Publix DC | Lakeland, FL | FTL | 42,000 | — | $1,568.00 | $376.32 | $0.00 | $1,944.32 | 640 mi |
| 8002 | 03/02 | NLC | ATL | Costco DC | Jacksonville, FL | FTL | 38,500 | — | $780.00 | $187.20 | $0.00 | $967.20 | 342 mi (NLC rate: $2.28/mi) |
| 8003 | 03/03 | SEL | ATL | CVS Warehouse | Miami, FL | FTL | 41,200 | — | $1,641.50 | $393.96 | $0.00 | $2,035.46 | 670 mi |
| 8004 | 03/04 | NLC | ATL | Grocery Outlet | Tampa, FL | LTL | 6,800 | 70 | $892.00 | $214.08 | $385.00 | $1,491.08 | **Liftgate + Residential** |
| 8005 | 03/05 | HMF | ORD | Kroger DC | Cincinnati, OH | FTL | 43,000 | — | $756.00 | $181.44 | $0.00 | $937.44 | 300 mi |
| 8006 | 03/05 | NLC | ORD | Target DC | Dallas, TX | FTL | 40,500 | — | $2,098.80 | $503.71 | $0.00 | $2,602.51 | 921 mi |
| 8007 | 03/06 | EIP | ORD | Target DC | Dallas, TX | IM | 39,800 | — | $1,450.00 | incl. | $0.00 | $1,450.00 | Intermodal container |
| 8008 | 03/07 | AFS | EWR | BJ's Wholesale | Westborough, MA | LTL | 4,200 | 85 | $620.00 | $148.80 | $0.00 | $768.80 | |
| 8009 | 03/08 | NLC | EWR | Walmart DC | Bethlehem, PA | LTL | 8,400 | 70 | $485.00 | $116.40 | $225.00 | $826.40 | **Liftgate charge** |
| 8010 | 03/09 | SEL | ATL | Dollar General DC | Scottsville, KY | FTL | 44,000 | — | $980.00 | $235.20 | $0.00 | $1,215.20 | 400 mi |
| 8011 | 03/10 | HMF | ORD | Meijer DC | Lansing, MI | FTL | 42,500 | — | $554.40 | $133.06 | $0.00 | $687.46 | 220 mi |
| 8012 | 03/11 | NLC | ATL | Winn-Dixie DC | Jacksonville, FL | FTL | 37,800 | — | $779.76 | $187.14 | $0.00 | $966.90 | 342 mi |
| 8013 | 03/12 | SEL | ATL | Food Lion DC | Greencastle, PA | FTL | 41,500 | — | $1,862.25 | $446.94 | $0.00 | $2,309.19 | 760 mi |
| 8014 | 03/13 | AFS | EWR | ShopRite DC | Elizabeth, NJ | LTL | 3,100 | 85 | $285.00 | $68.40 | $320.00 | $673.40 | **Liftgate + Residential** |
| 8015 | 03/14 | NLC | ORD | HEB DC | San Antonio, TX | FTL | 41,000 | — | $2,770.80 | $664.99 | $0.00 | $3,435.79 | 1,215 mi |
| 8016 | 03/15 | HMF | ORD | Aldi DC | Dwight, IL | FTL | 43,500 | — | $201.60 | $48.38 | $0.00 | $249.98 | 80 mi |
| 8017 | 03/16 | NLC | ATL | Family Dollar DC | Fort Mill, SC | LTL | 5,400 | 70 | $445.00 | $106.80 | $0.00 | $551.80 | |
| 8018 | 03/17 | EIP | ORD | Walmart DC | Cleburne, TX | IM | 40,200 | — | $1,450.00 | incl. | $0.00 | $1,450.00 | Intermodal |
| 8019 | 03/18 | SEL | ATL | Publix DC | Deerfield Beach, FL | FTL | 38,000 | — | $1,690.00 | $405.60 | $0.00 | $2,095.60 | 690 mi (S. FL lane) |
| 8020 | 03/20 | NLC | EWR | Wegmans DC | Rochester, NY | FTL | 39,500 | — | $820.80 | $196.99 | $0.00 | $1,017.79 | 360 mi |

---

## Current Routing Guide (Simplified)

| Lane | Origin | Destination Region | Primary Carrier | Backup Carrier | Mode |
|------|--------|-------------------|----------------|----------------|------|
| L-001 | ATL | Florida (all) | SEL | NLC | FTL |
| L-002 | ATL | Carolinas / Virginia | SEL | NLC | FTL/LTL |
| L-003 | ATL | Northeast (PA, NY) | SEL | AFS | FTL |
| L-004 | ORD | Texas / Oklahoma | NLC | EIP | FTL/IM |
| L-005 | ORD | Ohio / Michigan / Indiana | HMF | NLC | FTL |
| L-006 | ORD | Minnesota / Wisconsin | HMF | NLC | FTL |
| L-007 | ORD | Dallas (dedicated) | EIP | NLC | IM |
| L-008 | EWR | New England | AFS | NLC | LTL |
| L-009 | EWR | Mid-Atlantic (PA, MD, VA) | NLC | AFS | FTL/LTL |
| L-010 | EWR | Upstate NY | NLC | AFS | FTL |
| L-011 | ORD | Southeast (via Memphis hub) | NLC | SEL | FTL |
| L-012 | ATL | South Florida (Miami/FLL/WPB) | SEL | NLC | FTL |

---

## OTIF Performance by Carrier (Last 6 Months — Oct 2025 through Mar 2026)

| Carrier | Oct | Nov | Dec | Jan | Feb | Mar (MTD) | 6-Mo Avg | On-Time Avg | In-Full Avg | Shipment Count |
|---------|-----|-----|-----|-----|-----|-----------|----------|-------------|-------------|----------------|
| SEL | 94% | 92% | 88% | 93% | 95% | 94% | 92.7% | 93.8% | 98.2% | 4,800 |
| HMF | 96% | 95% | 91% | 96% | 97% | 96% | 95.2% | 95.8% | 99.1% | 3,200 |
| **NLC** | **78%** | **74%** | **68%** | **71%** | **75%** | **69%** | **72.5%** | **73.2%** | **91.4%** | **8,900** |
| AFS | 91% | 89% | 85% | 90% | 92% | 91% | 89.7% | 90.3% | 97.8% | 2,100 |
| EIP | 88% | 87% | 82% | 89% | 90% | 88% | 87.3% | 88.0% | 98.5% | 1,400 |

### Notes on NLC Performance
- NLC handles 40% of total shipments across all 3 DCs
- Lowest contract rates in the roster (FTL $2.28/mi vs. next lowest $2.45/mi)
- December/January OTIF drop correlated with driver shortage; NLC lost 15% of drivers in Q4 2025
- 23 customer complaints attributed to NLC late deliveries in last 90 days
- 4 Walmart OTIF chargebacks totaling $8,400 in last quarter (all NLC shipments)
- Claims ratio: 1.8% (industry avg: 0.5-1.0%)

---

## Lane-Level Cost Analysis — Top 15 Lanes (Monthly Average)

| Rank | Lane | Origin | Destination | Monthly Shipments | Avg Weight | Mode | Avg Cost/Shipment | Monthly Spend | Avg Transit (days) | Avg Utilization |
|------|------|--------|-------------|-------------------|-----------|------|-------------------|---------------|-------------------|-----------------|
| 1 | ATL → S. Florida | ATL | Miami/FLL/WPB | 480 | 28,500 lbs | FTL | $2,065 | $991,200 | 2.1 | **65%** |
| 2 | ORD → Dallas/FW | ORD | Dallas metro | 340 | 40,200 lbs | FTL/IM | $2,150 | $731,000 | 2.8 (FTL) / 4.2 (IM) | 92% |
| 3 | ATL → Jacksonville | ATL | Jacksonville, FL | 310 | 39,800 lbs | FTL | $967 | $299,770 | 1.0 | 91% |
| 4 | ORD → Cincinnati | ORD | Cincinnati, OH | 280 | 42,000 lbs | FTL | $938 | $262,640 | 1.0 | 96% |
| 5 | EWR → Boston Metro | EWR | MA/CT | 260 | 5,800 lbs | LTL | $785 | $204,100 | 1.5 | n/a (LTL) |
| 6 | ATL → Charlotte | ATL | Charlotte, NC | 240 | 36,500 lbs | FTL | $845 | $202,800 | 0.5 | 83% |
| 7 | ORD → Detroit | ORD | Detroit, MI | 220 | 41,800 lbs | FTL | $730 | $160,600 | 1.0 | 95% |
| 8 | EWR → Philadelphia | EWR | Philadelphia, PA | 210 | 7,200 lbs | LTL | $520 | $109,200 | 0.5 | n/a |
| 9 | ORD → Minneapolis | ORD | Minneapolis, MN | 190 | 38,000 lbs | FTL | $1,120 | $212,800 | 1.5 | 87% |
| 10 | ATL → Nashville | ATL | Nashville, TN | 180 | 34,000 lbs | FTL | $715 | $128,700 | 0.5 | 78% |
| 11 | ORD → Atlanta (via Memphis) | ORD | Atlanta, GA | 170 | 39,500 lbs | FTL | $1,680 | $285,600 | 2.5 | 90% |
| 12 | EWR → Baltimore/DC | EWR | MD/DC | 165 | 6,400 lbs | LTL | $610 | $100,650 | 1.0 | n/a |
| 13 | ATL → Raleigh | ATL | Raleigh, NC | 150 | 32,000 lbs | FTL | $780 | $117,000 | 0.5 | 73% |
| 14 | ORD → San Antonio | ORD | San Antonio, TX | 140 | 40,800 lbs | FTL | $3,435 | $480,900 | 3.0 | 93% |
| 15 | EWR → Rochester/Buffalo | EWR | Upstate NY | 130 | 38,800 lbs | FTL | $1,020 | $132,600 | 1.5 | 89% |

---

## Fuel Surcharge Detail

| Carrier | FSC Basis | Base Trigger | Current FSC % | Calculation Method |
|---------|-----------|-------------|--------------|-------------------|
| SEL | DOE National Avg | $3.00/gal | 24.0% | Per published table, national benchmark |
| HMF | DOE National Avg | $3.00/gal | 24.0% | Per published table, national benchmark |
| NLC | **DOE Midwest Region** | $2.90/gal | **28.2%** | Region-specific, lower trigger |
| AFS | **DOE East Coast Region** | $2.95/gal | **27.1%** | Region-specific, lower trigger |
| EIP | All-inclusive | n/a | incl. | FSC built into container rate |

---

## Newark Cross-Dock Operations

| Metric | Current Performance | Industry Benchmark |
|--------|--------------------|--------------------|
| Avg Inbound-to-Outbound Dwell | **2.3 days** | <24 hours |
| Dock Door Utilization | 62% | 85-90% |
| Inbound Appointments Scheduled | 45% of receipts | 90%+ |
| Average Unload Time | 3.2 hours | 1.5-2.0 hours |
| Outbound Staging Errors | 4.1% | <1% |
| Receiving Labor Hours/Week | 480 | Est. 280 (based on volume) |

### Root Cause Notes
- Only 12 of 20 dock doors are operational (4 need leveler repairs, 4 lack bumpers)
- No appointment scheduling system — carriers arrive unannounced
- Inbound receiving and outbound staging share the same floor area with no physical separation
- Yard management is manual (whiteboard-based) — no visibility into trailer locations
- 2 FTEs dedicated to "finding trailers in the yard" each shift

---

## PLANTED ISSUES (for evaluation — agent should catch these)

### Issue 1: Accessorial Overbilling on Commercial Addresses ($2,400)
Invoices #8004, #8009, and #8014 include liftgate and/or residential delivery surcharges. However:
- **Inv #8004** — Grocery Outlet in Tampa, FL: This is a commercial retail distribution address with a loading dock. Liftgate ($185) and residential ($200) charges are incorrect. Total overbilling: $385.
- **Inv #8009** — Walmart DC in Bethlehem, PA: Walmart DCs have dock-height receiving doors. Liftgate charge ($225) is incorrect. The Walmart routing guide specifically prohibits liftgate deliveries. Total overbilling: $225.
- **Inv #8014** — ShopRite DC in Elizabeth, NJ: ShopRite's Elizabeth facility is a full-scale distribution center with 80+ dock doors. Liftgate ($185) and residential ($135) charges are incorrect. Total overbilling: $320.
- **Combined overbilling: $930 in sample + projected $2,400/month based on error rate across full invoice volume.**

A freight audit agent should flag these as obvious errors: major retail DCs and grocery distribution centers are never residential addresses and always have loading docks. These accessorial charges should be disputed and recovered.

### Issue 2: Carrier B (NLC) — Lowest Rate, Worst Performance
NLC has the lowest contract rate ($2.28/mi FTL vs. $2.45 next-lowest), but its OTIF performance is 72.5% — far below the 95%+ standard that major retailers require. The true cost of NLC includes:
- **Walmart OTIF chargebacks:** $8,400 in the last quarter alone
- **Customer complaints:** 23 in 90 days (brand damage, relationship risk)
- **Claims ratio:** 1.8% vs. industry average 0.5-1.0% (freight damage)
- **Expedite costs:** When NLC misses delivery windows, Great Lakes must book emergency shipments at spot rates (typically 40-80% premium)
- **Estimated true cost premium of NLC's poor service: $12,000-$18,000/month** when factoring chargebacks, claims, expedites, and customer compensation

The agent should calculate total cost of ownership, not just linehaul rate, and recommend a phased volume reduction plan for NLC with performance-based reinstatement criteria.

### Issue 3: Atlanta-to-South Florida Lane Underutilization ($4,200/month savings)
Lane L-012 (ATL → South Florida) is the highest-spend lane at $991,200/month on 480 shipments. Average weight is 28,500 lbs with **65% FTL utilization** — meaning trailers are leaving Atlanta 35% empty.

At 28,500 lbs average, these shipments are in the partial truckload range. Options:
- **Consolidation:** Combine 2-3 days of S. Florida orders into fuller loads. At 90% utilization, the 480 shipments could be reduced to ~347 shipments, saving $274,000/month (but adding 1-2 days transit).
- **Mode shift to LTL:** For shipments under 12,000 lbs (estimated 30% of the lane), LTL would save approximately $4,200/month.
- **Partial TL programs:** Carriers like AFS offer flat partial TL rates for shipments between 8,000-16,000 lbs that are 15-25% cheaper than booking a full FTL.

The agent should identify the utilization problem and recommend a multi-pronged approach matching the right mode to the right shipment size.

### Issue 4: Chicago-to-Atlanta Routing Through Memphis ($6,120/month savings)
Lane L-011 (ORD → Atlanta) routes through Memphis, adding approximately 200 miles to what should be a 720-mile direct route. The routing guide assigns this lane to NLC, whose network hub is in Memphis.

- Current distance: ~920 miles (via Memphis)
- Direct distance: ~720 miles
- Extra cost per shipment: ~$18 (200 mi × ~$0.09/mi marginal cost after accounting for NLC's per-mile rate on the extra distance)
- Monthly volume: 340 shipments
- **Monthly waste: $6,120**
- Additionally, the Memphis hub adds 0.5-1.0 days of transit time and introduces a handling touch point (increasing damage risk)

The agent should flag this routing inefficiency and recommend either direct-routing with NLC (if they have direct service) or assigning this lane to SEL, which operates direct Atlanta service from Chicago.

### Issue 5: Fuel Surcharge Discrepancy (Unaudited Regional Rates)
The carrier contracts specify fuel surcharges based on "DOE National Average Diesel." However:
- **NLC** is calculating FSC using DOE Midwest Region rates with a lower trigger ($2.90 vs. $3.00), resulting in 28.2% FSC instead of the ~24% national-average-based rate. This is a 4.2% overage.
- **AFS** is using DOE East Coast Region rates with a $2.95 trigger, resulting in 27.1% FSC vs. ~24%. This is a 3.1% overage.

On NLC's monthly linehaul of approximately $185,000 across all lanes, the 4.2% FSC overage equals ~$7,770/month. On AFS's monthly linehaul of approximately $62,000, the 3.1% overage equals ~$1,922/month.

**Combined monthly overpayment: ~$9,692 in excess fuel surcharges.**

The agent should catch that the FSC basis in the invoices doesn't match the contract terms and recommend an immediate audit of all carrier FSC calculations against the contracted national average benchmark.

### Issue 6: Newark Cross-Dock Dwell Time (2.3 Days vs. <24 Hour Benchmark)
The Newark DC's cross-dock operation is averaging 2.3 days of dwell time — nearly 5x the industry benchmark of <24 hours. Root causes include:
- Only 60% of dock doors operational (12 of 20)
- No inbound appointment scheduling (45% scheduled vs. 90% benchmark)
- No physical separation between receiving and outbound staging areas
- Manual yard management (whiteboard) with 2 FTEs per shift just locating trailers
- 3.2-hour average unload time (benchmark: 1.5-2.0 hours)

The financial impact includes:
- Carrier detention charges (at $75/hour beyond 2 hours free time on ~55% of inbound loads)
- Estimated $22,000-$35,000/month in detention
- Lost inventory velocity: 2.3 days of extra inventory carrying cost on all Newark throughput
- Customer service failures from delayed outbound shipments

The agent should recommend: dock door repair, appointment scheduling software (e.g., OpenDock, SchedulePro), physical staging lane separation, and yard management system implementation. Total investment ~$80,000-$120,000 with 4-6 month payback.
