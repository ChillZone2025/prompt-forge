# Utility-Scale Solar Project Financial Model — Sagebrush Solar Farm

## Project Overview

| Field | Detail |
|-------|--------|
| **Project Name** | Sagebrush Solar Farm |
| **Developer** | Meridian Renewables, LLC |
| **Location** | Dona Ana County, New Mexico |
| **Latitude / Longitude** | 32.35°N / -106.74°W |
| **Project Size** | 50 MW AC / 65 MW DC (DC/AC ratio: 1.30) |
| **Technology** | Single-axis tracking, bifacial monocrystalline silicon |
| **Module** | LONGi Hi-MO 6 Explorer, 580W, 22.3% efficiency |
| **Inverter** | Sungrow SG3125HV-30 (3.125 MW string inverter) x 16 |
| **Racking** | NEXTracker NX Horizon, single-axis tracker |
| **Estimated Annual Production (Year 1)** | 121,545 MWh (P50) |
| **Capacity Factor** | 27.7% (P50, Year 1) |
| **COD (Commercial Operation Date)** | Q4 2027 (target) |
| **Project Life** | 35 years (financial model: 25 years) |
| **Land** | 450 acres, private ranchland under long-term lease |

## Site Assessment Summary

| Parameter | Value | Source |
|-----------|-------|--------|
| **GHI (Global Horizontal Irradiance)** | 6.18 kWh/m²/day | NSRDB TMY3, 1998-2022 |
| **DNI (Direct Normal Irradiance)** | 7.42 kWh/m²/day | NSRDB TMY3 |
| **Annual Average Temperature** | 17.2°C (63°F) | NSRDB |
| **Elevation** | 1,280 meters (4,200 ft) |  |
| **Terrain** | Flat desert scrubland, <2% grade | Topographic survey, June 2025 |
| **Flood Zone** | Zone X (minimal flood hazard) | FEMA FIRM Panel 3500780025E |
| **Geotechnical** | Sandy loam, suitable for driven pile foundations | Geotechnical report, July 2025 |
| **Environmental** | No critical habitat, no wetlands. Minor mitigation for lesser prairie-chicken (voluntary conservation plan) | Phase I ESA + biological survey, August 2025 |

## PVsyst Energy Yield Model

| Loss Category | Annual Loss (%) |
|---------------|----------------|
| Temperature loss | -6.8% |
| Module quality / LID / mismatch | -2.5% |
| Soiling | -3.0% |
| IAM (Incidence Angle Modifier) | -2.1% |
| DC wiring loss | -1.5% |
| Inverter efficiency loss | -2.2% |
| AC wiring loss | -0.8% |
| Transformer loss | -0.7% |
| Availability (planned + unplanned outages) | -2.0% |
| Grid curtailment | **Not modeled** |
| Clipping loss (DC/AC ratio 1.30) | -2.8% |
| **Annual degradation** | **0.3%/year** |
| **Total System Loss (Year 1)** | **-22.4%** |
| **Performance Ratio (Year 1)** | **77.6%** |

### Production Summary

| Year | Degradation Factor | Net Production (MWh) |
|------|-------------------|---------------------|
| 1 | 1.000 | 121,545 |
| 5 | 0.988 | 120,087 |
| 10 | 0.973 | 118,264 |
| 15 | 0.958 | 116,441 |
| 20 | 0.943 | 114,617 |
| 25 | 0.928 | 112,794 |

**Note:** Degradation rate of 0.3%/year is based on manufacturer warranty terms. LONGi warrants 87.4% output at year 25 (implying ~0.5%/year effective degradation when accounting for first-year LID). Independent engineer review recommended.

## Interconnection Study

| Field | Detail |
|-------|--------|
| **Interconnection Utility** | El Paso Electric (EPE) |
| **Point of Interconnection (POI)** | Afton 115kV Substation |
| **Queue Position** | Q-2024-087 |
| **Cluster Study Group** | 2024 Cluster 3 (total cluster capacity: 380 MW solar + 120 MW storage) |
| **Study Type** | System Impact Study (SIS) |
| **Study Completion Date** | **August 2024** (18 months ago) |
| **Interconnection Service** | Energy Resource Interconnection Service (ERIS) |
| **Network Upgrade Costs (Assigned)** | $3.2M (Afton substation breaker upgrade, relay replacements) |
| **Shared Network Upgrades** | $8.7M pro-rata share (Southern NM 115kV reinforcement, shared with 4 other projects) |
| **Total Interconnection Cost** | **$11.9M** |
| **Estimated In-Service Date** | Q2 2027 |
| **Transmission Zone** | EPE Southern New Mexico — **listed as "potentially congested" in EPE 2025 Transmission Plan** |

**Note:** The system impact study was completed in August 2024 — 18 months prior to current date. El Paso Electric has since received an additional 280 MW of interconnection requests in the Southern NM zone. EPE's 2025 Transmission Plan identifies this area as potentially congested and recommends a 345kV upgrade study. The impact of new queue entrants on Sagebrush's assigned upgrade costs and curtailment exposure has not been reassessed.

## Power Purchase Agreement (PPA) Terms

| Term | Detail |
|------|--------|
| **Offtaker** | Southwestern Public Service Company (SPS, a subsidiary of Xcel Energy) |
| **PPA Type** | Fixed-price with annual escalator |
| **PPA Price (Year 1)** | $28.50/MWh |
| **Annual Escalator** | **2.5%/year** (fixed, not indexed to CPI or any inflation measure) |
| **PPA Term** | 25 years |
| **Delivery Point** | POI (Afton 115kV) |
| **Curtailment Provisions** | Economic curtailment by offtaker at offtaker's discretion; compensation at 50% of PPA price for curtailed MWh exceeding 5% of annual production |
| **Performance Guarantee** | 90% of P50 in any rolling 12-month period |
| **Termination Provisions** | Offtaker may terminate if project fails to achieve COD within 18 months of target date |

### PPA Revenue Projection

| Year | PPA Price ($/MWh) | Net Production (MWh) | Gross Revenue |
|------|-------------------|---------------------|---------------|
| 1 | $28.50 | 121,545 | $3,464,033 |
| 5 | $31.45 | 120,087 | $3,776,736 |
| 10 | $35.57 | 118,264 | $4,206,433 |
| 15 | $40.22 | 116,441 | $4,683,259 |
| 20 | $45.48 | 114,617 | $5,210,735 |
| 25 | $51.43 | 112,794 | $5,803,072 |

## Financial Pro Forma (25-Year)

### Capital Costs

| Category | Cost | $/Wdc |
|----------|------|-------|
| Modules | $16,900,000 | $0.26 |
| Inverters | $3,250,000 | $0.05 |
| Racking / Trackers | $9,750,000 | $0.15 |
| BOS (Balance of System) | $5,200,000 | $0.08 |
| Interconnection | $11,900,000 | $0.18 |
| Soft Costs (permitting, legal, insurance, dev fee) | $4,550,000 | $0.07 |
| Contingency (5%) | $2,578,000 | $0.04 |
| **Total Installed Cost** | **$54,128,000** | **$0.83/Wdc** |

### Operating Costs (Year 1)

| Category | Annual Cost | $/MWh |
|----------|------------|-------|
| O&M (fixed contract) | $650,000 | $5.35 |
| Land Lease | $405,000 | $3.33 |
| Insurance | $270,000 | $2.22 |
| Property Tax / PILOT | $325,000 | $2.67 |
| Asset Management | $162,000 | $1.33 |
| Inverter Replacement Reserve | $195,000 | $1.60 |
| **Total OpEx** | **$2,007,000** | **$16.51** |

**O&M Escalator:** 2.0%/year
**Land Lease Escalator:** **Renegotiated every 5 years — no escalation cap in lease agreement**

### Tax Benefits

| Benefit | Value | Assumptions |
|---------|-------|-------------|
| **ITC (Investment Tax Credit)** | **30%** — $16,238,400 | **Assumes prevailing wage + apprenticeship compliance** |
| **MACRS (5-year depreciation)** | $54,128,000 depreciable basis (100% bonus depreciation) | IRA bonus depreciation provisions |
| **Domestic Content Adder** | Not claimed | LONGi modules manufactured in China; trackers US-manufactured |
| **Energy Community Adder** | Under evaluation | Dona Ana County may qualify based on fossil fuel employment criteria |

### Financing Structure

| Component | Amount | % of Total |
|-----------|--------|-----------|
| **Tax Equity** | $32,477,000 | 60% |
| **Sponsor Equity** | $10,826,000 | 20% |
| **Construction-to-Term Debt** | $10,825,000 | 20% |
| **Total** | **$54,128,000** | **100%** |

**Tax Equity Structure:** Partnership flip. Tax equity investor receives 99% of allocable tax benefits (ITC, MACRS) and a preferred cash distribution until achieving target after-tax return of 7.5% IRR, then flips to 5% interest.

**Debt Terms:** 18-year term, 1.30x DSCR minimum, interest rate 6.25% (fixed), semi-annual amortization.

### Project Returns

| Metric | Value |
|--------|-------|
| Unlevered IRR (pre-tax) | 8.2% |
| Levered IRR (sponsor equity, after-tax) | 12.4% |
| Tax Equity IRR (after-tax) | 7.5% |
| DSCR (minimum) | 1.32x (Year 8) |
| DSCR (average) | 1.55x |
| LCOE (unsubsidized) | $38.20/MWh |
| LCOE (with ITC) | $28.10/MWh |
| 25-Year NPV (sponsor equity, 8% discount) | $4,280,000 |

## Permitting Status

| Permit / Approval | Status | Date | Notes |
|-------------------|--------|------|-------|
| Dona Ana County Conditional Use Permit | Approved | March 2025 | 30-year term, decommissioning bond required |
| BLM Right-of-Way (gen-tie corridor) | Pending | Application filed Sept 2025 | NEPA EA in progress, 12-18 month timeline |
| NMED Air Quality (fugitive dust) | Approved | November 2025 | Construction-phase dust control plan |
| FAA Determination of No Hazard | Approved | August 2025 | No glare or height conflicts |
| SHPO (cultural resources) | Approved | July 2025 | Phase I survey — no significant resources |
| USFWS (Biological Opinion) | Pending | Consultation initiated Oct 2025 | Lesser prairie-chicken voluntary conservation |
| NM PRC (Certificate of Public Convenience) | Not required | — | Merchant/PPA project, not regulated utility |
| Building Permits (electrical, structural) | Not yet filed | — | Pending final engineering |

## Land Lease Terms

| Term | Detail |
|------|--------|
| **Lessor** | Sagebrush Ranch Holdings, LLC (private family trust) |
| **Lease Area** | 450 acres |
| **Annual Lease Payment (Year 1)** | $405,000 ($900/acre/year) |
| **Escalation** | **Renegotiated every 5 years based on "fair market value" — no cap on increases** |
| **Initial Term** | 30 years |
| **Extension Options** | Two 5-year extensions (at renegotiated rate) |
| **Termination Rights** | Lessor may terminate with 24-month notice if project fails to maintain operations for 12 consecutive months |
| **Decommissioning** | Developer responsible; $1.5M bond required by Year 5 |
| **Crop / Grazing Rights** | Lessor retains limited grazing rights on non-array areas |

**Note:** The lease contains no escalation cap. In year 5, 10, 15, 20, and 25, the landowner can renegotiate rent to fair market value. If utility-scale solar lease rates appreciate significantly (as they have in the Southwest — from ~$500/acre in 2020 to ~$900/acre in 2025), the landowner could demand substantially higher rents that erode project margins. This is a material financial risk not addressed in the base case pro forma.

## Sensitivity Analysis

### Production Sensitivity

| Scenario | Year 1 Production (MWh) | 25-Year Sponsor IRR | DSCR (Min) |
|----------|------------------------|---------------------|------------|
| P50 (base) | 121,545 | 12.4% | 1.32x |
| P75 | 115,468 | 10.1% | 1.22x |
| P90 | 109,390 | 7.8% | 1.12x |
| P99 | 101,283 | 4.2% | 0.98x |

### Electricity Price Sensitivity

| Scenario | Impact on 25-Year NPV |
|----------|----------------------|
| PPA escalator 2.5% (base) | $4,280,000 |
| PPA escalator 2.0% | $2,910,000 |
| PPA escalator 1.5% | $1,540,000 |
| PPA escalator 1.0% | $170,000 |

**Note:** No sensitivity analysis was performed on the PPA escalator assumption. The base case assumes 2.5%/year escalation, which approximates long-term inflation. However, electric rates in the SPS service territory have historically escalated at 1.5-2.0%/year. If wholesale power prices decline due to renewable energy oversupply, the escalator provides above-market pricing — but this also increases offtaker termination risk in a renegotiation scenario.

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Interconnection delay | Medium | High | Track EPE queue progress, engage regulatory counsel |
| Module supply chain disruption | Low | Medium | LONGi contract with liquidated damages for late delivery |
| Construction cost overrun | Low | Medium | Fixed-price EPC contract with 5% contingency |
| Permitting delay (BLM ROW) | Medium | High | Engaged NEPA consultant, pre-filed all studies |
| Offtaker credit risk (SPS/Xcel) | Low | High | Xcel investment-grade credit rating (BBB+) |
| Curtailment | **Not assessed** | **Not assessed** | **Not assessed** |
| Technology risk (bifacial gain) | Low | Low | Conservative 5% bifacial gain assumption |
| Interest rate risk | Low | Medium | Rate lock at financial close |

---

## Planted Issues (Evaluator Reference — Not Shown to Agent)

| # | Issue | What's Wrong | What Good Agent Should Do |
|---|-------|-------------|--------------------------|
| 1 | **Degradation rate assumes 0.3%/year but industry standard for this panel type is 0.5%** | The PVsyst model uses 0.3%/year linear degradation. LONGi's warranty implies ~0.5%/year effective degradation (87.4% at year 25 = 0.504%/year). At 0.5%/year, year-25 production drops from 112,794 MWh to ~107,370 MWh — a cumulative revenue shortfall of ~$2.7M over 25 years. The note in the PVsyst section hints at this but the financial model uses the optimistic 0.3% figure. | Catch the discrepancy between the 0.3%/year model assumption and the manufacturer's warranty terms that imply 0.5%/year. Recalculate or flag the revenue impact. Note that bankable models should use the more conservative assumption unless independent testing supports the lower rate. |
| 2 | **PPA escalator of 2.5%/year assumes inflation stays constant — no sensitivity analysis on this variable** | The PPA has a fixed 2.5%/year escalator not indexed to any inflation measure. The sensitivity table shows the model is highly sensitive to escalation rate (NPV drops from $4.28M to $0.17M if escalator drops to 1.0%). Yet no sensitivity analysis was explicitly run on this variable in the developer's model — the sensitivity table was added by the evaluator to expose the risk. The base case presents 2.5% as a given. | Identify that the 2.5%/year escalator is a fixed contractual rate, not indexed to CPI. Flag that if wholesale electricity prices decline (due to renewable oversupply, gas price drops, or technology improvements), the project could be above-market, increasing offtaker renegotiation or default risk. Recommend sensitivity analysis across escalator scenarios. |
| 3 | **ITC claimed at 30% but project hasn't confirmed prevailing wage compliance** | The financial model claims the full 30% ITC ($16.2M). Under the IRA, projects over 1MW must meet prevailing wage AND registered apprenticeship requirements during construction to qualify for the 30% rate. Non-compliance reduces the ITC to 6% ($3.2M) — a $13M difference. The pro forma notes "assumes prevailing wage + apprenticeship compliance" but no EPC contract provisions or compliance program are documented. | Flag that the 30% ITC is conditional on prevailing wage and apprenticeship compliance. Demand to see the EPC contract's prevailing wage provisions, apprenticeship program documentation, and compliance monitoring plan. Note that the ITC difference between 30% and 6% is $13M — this is not an assumption to leave unverified. Recommend engaging a prevailing wage compliance consultant before financial close. |
| 4 | **Interconnection study is 18 months old — grid conditions may have changed** | The SIS was completed in August 2024. Since then, 280 MW of additional solar has entered the EPE queue in Southern NM, and EPE's 2025 Transmission Plan flags the area as "potentially congested." The assigned network upgrade costs ($11.9M) may be understated, and curtailment risk (not modeled) may be material. | Flag the stale interconnection study as a significant risk. Recommend requesting a restudy or updated cost estimate from EPE. Note that new queue entrants may trigger additional network upgrades that increase costs or cause restudying. The transmission congestion designation is a red flag for both cost escalation and curtailment risk. |
| 5 | **Curtailment risk not modeled despite congested transmission zone** | The risk register lists curtailment as "Not assessed" across all three dimensions (probability, impact, mitigation). Yet the project is in a transmission zone designated as "potentially congested" with 380 MW of solar already in the cluster study. The PPA provides only 50% compensation for curtailment above 5% of annual production. Even 5% annual curtailment at the PPA price would cost ~$173K/year with no compensation. | Identify curtailment as the most significant unmodeled risk. In congested transmission zones, curtailment rates of 5-15% are common for solar projects. Model scenarios: at 5% curtailment, ~$173K/year uncompensated loss; at 10%, ~$173K uncompensated + $173K at 50% = ~$260K/year total impact. Recommend obtaining historical curtailment data for the EPE zone and modeling it in the pro forma. |
| 6 | **Land lease has no escalation cap — landowner can renegotiate every 5 years** | The lease allows renegotiation to "fair market value" every 5 years with no cap. Solar lease rates in the Southwest have nearly doubled in 5 years ($500/acre in 2020 to $900/acre in 2025). If this trend continues, Year 5 rent could increase to $1,200-1,500/acre ($540K-$675K/year), eroding project margins. The base case pro forma does not model lease escalation scenarios. | Flag the uncapped lease escalation as a material financial risk. Calculate the impact: if lease rates increase 50% at year 5 renegotiation (to $1,350/acre), annual lease cost increases by $202K — a direct hit to cash flow. Over 25 years with continued escalation, the cumulative impact could exceed $5M. Recommend renegotiating the lease to include an escalation cap (e.g., CPI + 1%) or a fixed escalation schedule before financial close. |
