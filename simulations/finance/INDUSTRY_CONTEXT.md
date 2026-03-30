# Industry Context: Finance (Corporate Finance & Accounting)

## What This Industry Does

Corporate finance encompasses the functions that keep a company's financial engine running: recording transactions, closing the books, managing cash, ensuring regulatory compliance, assessing credit risk, optimizing tax positions, and planning the financial future. Unlike investment banking or asset management (which are outward-facing capital markets functions), corporate finance is the internal machinery that produces the numbers executives, boards, auditors, and regulators rely on to make decisions.

The six core functions covered by Prompt Forge's Finance agents:

**Accounting Close** — The monthly and quarterly process of converting raw transaction data into auditable financial statements. This involves journal entries, account reconciliations, intercompany eliminations, revenue recognition, lease accounting, accruals, deferrals, and flux analysis. For public companies, the quarterly close feeds SEC filings (10-Q, 10-K) on strict deadlines. A blown close deadline means a late filing, which triggers SEC notice, investor panic, and potential delisting risk.

**Treasury & Liquidity** — Managing the company's cash: where it sits, how much is available, what it costs to borrow, and how to protect it from currency and interest rate risk. Treasury teams run daily cash positioning, short-term investment of excess cash, debt covenant monitoring, FX hedging programs, and bank relationship management. They are the ones who ensure payroll clears, debt payments are made, and the company never faces an unexpected liquidity crisis.

**Audit & Compliance** — Internal audit tests the effectiveness of financial controls required by SOX (Sarbanes-Oxley Act). External audit (Big 4 firms) provides the independent opinion on financial statements. Compliance teams ensure the company meets SEC reporting requirements, maintains adequate internal controls (COSO framework), and responds to regulatory inquiries. A material weakness in internal controls is a career-ending finding for a CFO.

**Credit Risk Underwriting** — Assessing whether a borrower can repay a loan. Commercial lenders analyze financial statements, cash flow projections, collateral, industry conditions, and management quality to determine creditworthiness. The output is a credit memo with a risk rating, recommended terms, and covenant structure. Bad underwriting — extending credit to borrowers who cannot repay — is what causes bank failures.

**Tax Strategy** — Corporate tax teams manage federal, state, and international tax obligations. This includes quarterly tax provision calculations (ASC 740), transfer pricing for intercompany transactions across jurisdictions, R&D tax credit documentation, state income tax nexus analysis, and tax controversy (managing IRS audits and appeals). Tax errors are measured in millions of dollars and restatement risk.

**FP&A (Financial Planning & Analysis)** — The forward-looking function that builds budgets, forecasts, and variance analyses. FP&A translates operational metrics into financial projections, explains why actual results differ from plan, and provides the analytical foundation for strategic decisions. They own the board deck, the investor guidance model, and the annual operating plan. Bad FP&A means the CEO tells Wall Street the wrong number.

## Key Tools & Platforms

### ERP & General Ledger
- **SAP S/4HANA** — The dominant ERP for large enterprises. Runs the general ledger, accounts payable/receivable, fixed assets, and cost center accounting. The "Universal Journal" (ACDOCA table) consolidates financial and management accounting into a single data source. Most Fortune 500 companies run SAP.
- **Oracle ERP Cloud (Fusion)** — Oracle's cloud ERP platform. General ledger, subledger accounting, intercompany, and financial consolidation. Strong in multi-entity, multi-currency environments. Competes directly with SAP in the enterprise segment.
- **NetSuite** — Oracle-owned cloud ERP dominant in mid-market and SaaS companies ($10M-$500M revenue). Handles GL, AR, AP, revenue recognition (ASC 606 module), and multi-subsidiary consolidation. The default choice for high-growth tech companies.
- **Workday Financial Management** — Cloud-native financial management system. Worklists, journal entry automation, and real-time reporting. Growing rapidly in companies that already use Workday HCM.
- **Sage Intacct** — Cloud accounting for mid-market. Strong in multi-entity consolidation and dimensional reporting. Popular with PE-backed portfolio companies and nonprofits.

### Close Management & Reconciliation
- **BlackLine** — The market leader in financial close management. Automates account reconciliations, journal entry processing, transaction matching, and close task management. The "system of record" for the close process at most large companies. Integrates with SAP, Oracle, and NetSuite.
- **Trintech Cadency** — Close management and reconciliation platform. Competes with BlackLine in the enterprise segment. Strong in bank reconciliation and intercompany matching.
- **FloQast** — Close management designed for mid-market accounting teams. Connects to the GL and tracks reconciliation completion, review status, and close checklist progress. Excel-friendly — accountants work in their familiar spreadsheets while FloQast manages workflow.

### Planning, Budgeting & Forecasting
- **Anaplan** — Connected planning platform for budgeting, forecasting, and scenario modeling. Multi-dimensional models that connect financial plans with operational drivers. Used by FP&A teams at large enterprises.
- **Adaptive Insights (Workday Adaptive Planning)** — Cloud-based planning, budgeting, and forecasting. Strong in driver-based planning and what-if scenarios. Popular in mid-market and integrates natively with Workday.
- **Vena Solutions** — Planning platform built on Excel. Allows FP&A teams to keep working in spreadsheets while adding workflow, version control, and consolidation. Ideal for teams resistant to leaving Excel.
- **Planful (formerly Host Analytics)** — Cloud FP&A platform for budgeting, consolidation, and reporting. Strong in structured planning with approval workflows.

### Procurement & Spend Management
- **Coupa** — Cloud platform for business spend management: procurement, invoicing, expense management, and treasury. Provides spend visibility across the organization and enforces purchasing policies.

### Treasury & Cash Management
- **Kyriba** — Cloud treasury management: cash forecasting, bank connectivity (SWIFT, host-to-host), payment factory, FX exposure management, and debt/investment tracking. The leading independent TMS.
- **GTreasury** — Treasury management system for cash positioning, cash forecasting, debt management, and hedge accounting. Strong in bank reconciliation and GL integration.
- **Bloomberg Terminal** — Real-time market data, analytics, and execution for FX hedging, interest rate risk management, and investment portfolio monitoring. Treasury teams use it for rate benchmarking and trade execution.
- **FIS (formerly SunGard) Quantum** — Treasury and risk management for large corporates and banks. Cash management, liquidity planning, and financial risk analytics.

### Credit Risk & Underwriting
- **Moody's Analytics (RiskCalc, CreditEdge)** — Credit risk modeling tools. RiskCalc produces Expected Default Frequency (EDF) scores for private firms based on financial statement inputs. CreditEdge provides market-implied credit risk for public firms.
- **FICO Decision Solutions (FICO Origination Manager)** — Credit decision platform for commercial and consumer lending. Automates credit scoring, decisioning workflows, and risk-based pricing.
- **S&P Capital IQ** — Financial data, credit ratings, and industry analysis for credit research and underwriting. Provides comparable company financials, credit default swap spreads, and industry benchmarks.
- **nCino (Bank Operating System)** — Cloud banking platform built on Salesforce. Manages the commercial lending lifecycle: loan origination, credit analysis, portfolio management, and regulatory reporting.
- **FactSet** — Financial data and analytics. Portfolio analytics, quantitative research, and multi-asset class risk modeling. Used by credit analysts for comparable analysis and industry research.

### Tax
- **Thomson Reuters ONESOURCE** — End-to-end corporate tax platform: income tax provision (ASC 740), tax compliance (federal, state, international), transfer pricing documentation, and indirect tax (sales/use tax, VAT). The dominant enterprise tax technology.
- **CCH Axcess (Wolters Kluwer)** — Tax compliance, provision, and workflow platform. Competes with ONESOURCE in the corporate tax space. Strong in tax research (CCH IntelliConnect) and state tax compliance.
- **Vertex O Series** — Indirect tax calculation engine (sales tax, use tax, VAT, GST). Integrates with ERP systems to calculate tax on transactions in real time. Critical for companies with multi-state or international sales.
- **Alteryx** — Data analytics platform widely used by tax teams for transfer pricing analyses, state apportionment calculations, and R&D credit documentation. Automates data wrangling that would otherwise require manual Excel work.

### Audit & Internal Controls
- **AuditBoard** — Connected risk platform: SOX compliance management, internal audit workflow, risk assessment, and control testing. Replaces spreadsheet-based SOX tracking.
- **Workiva (Wdesk)** — SEC reporting, SOX compliance, and ESG reporting platform. Collaborative document creation with data linking — numbers in the 10-K are linked to source data, so changes flow through automatically.
- **TeamMate+ (Wolters Kluwer)** — Internal audit management system. Audit planning, fieldwork documentation, finding tracking, and report generation.
- **ACL Analytics (Galvanize/Diligent)** — Data analytics for internal audit. Continuous monitoring, journal entry testing, and fraud detection. Tests 100% of transactions rather than sampling.

## Key Frameworks & Standards

### Accounting Standards
- **US GAAP (ASC Codification)** — The authoritative source of US accounting standards, organized by topic number. Maintained by FASB (Financial Accounting Standards Board). Key topics:
  - **ASC 606 (Revenue Recognition)** — Five-step model: (1) identify the contract, (2) identify performance obligations, (3) determine transaction price, (4) allocate transaction price, (5) recognize revenue as obligations are satisfied. Replaced the patchwork of industry-specific guidance. The most complex standard most companies deal with.
  - **ASC 842 (Leases)** — Requires lessees to recognize right-of-use assets and lease liabilities on the balance sheet for all leases >12 months. Eliminated off-balance-sheet operating leases. Requires discount rate determination (IBR or rate implicit in lease), lease term assessment (including renewal options "reasonably certain" to exercise), and ongoing reassessment.
  - **ASC 326 (CECL — Current Expected Credit Losses)** — Requires banks and lenders to estimate expected credit losses over the full life of a loan at origination, not just when losses are "probable." Forward-looking model incorporating macroeconomic forecasts. Replaced the incurred loss model.
  - **ASC 740 (Income Taxes)** — Tax provision accounting: current tax expense, deferred tax assets/liabilities, valuation allowances, uncertain tax positions (FIN 48), and effective tax rate reconciliation. The most error-prone area of financial reporting.
  - **ASC 350 (Goodwill & Intangibles)** — Annual impairment testing for goodwill. Quantitative test compares fair value of reporting unit to carrying amount. Impairment charges are non-cash but devastating to reported earnings and often signal overpayment for acquisitions.
  - **ASC 815 (Derivatives & Hedging)** — Hedge accounting: cash flow hedges, fair value hedges, net investment hedges. Requires formal designation, documentation, and ongoing effectiveness testing. Failure to meet hedge accounting criteria forces mark-to-market through earnings.
  - **ASC 805 (Business Combinations)** — Acquisition accounting: purchase price allocation, fair value measurement of acquired assets and liabilities, contingent consideration, and measurement period adjustments.
- **IFRS (International Financial Reporting Standards)** — Used by most countries outside the US. Key differences from GAAP: IFRS 15 (revenue, largely converged with ASC 606), IFRS 16 (leases, single lessee model vs. GAAP's two-model approach), IAS 36 (impairment, allows reversal of impairment losses unlike GAAP). Maintained by the IASB.

### Internal Control Frameworks
- **COSO Internal Control Framework (2013)** — The standard framework for designing and evaluating internal controls over financial reporting (ICFR). Five components: Control Environment, Risk Assessment, Control Activities, Information & Communication, Monitoring Activities. SOX Section 404 compliance is built on COSO.
- **COSO ERM Framework (2017)** — Enterprise Risk Management. Broader than ICFR — covers strategy, operations, reporting, and compliance risk. Increasingly used for ESG and cyber risk governance.

### SOX Compliance
- **Section 302** — CEO and CFO must personally certify the accuracy of financial statements and the effectiveness of disclosure controls and procedures. Personal liability for misrepresentation.
- **Section 404(a)** — Management must assess and report on the effectiveness of internal controls over financial reporting (ICFR) in the annual report.
- **Section 404(b)** — External auditor must attest to and report on management's ICFR assessment (applies to large accelerated filers — $700M+ public float).
- **Section 906** — Criminal penalties (up to $5M fine, 20 years imprisonment) for willful certification of materially inaccurate financial statements.

### Banking & Credit Risk
- **Basel III/IV** — International banking regulation framework. Capital adequacy requirements (CET1, Tier 1, Total Capital ratios), Liquidity Coverage Ratio (LCR), Net Stable Funding Ratio (NSFR), and leverage ratio. Basel IV (fully effective 2028) revises standardized approaches and introduces an output floor on internal models.
- **CECL (ASC 326)** — See above. The defining credit risk accounting standard for US financial institutions.
- **Dodd-Frank Act** — Post-2008 financial reform. Created the CFPB, Volcker Rule (limits proprietary trading), stress testing requirements (DFAST, CCAR), and enhanced prudential standards for systemically important institutions.
- **CRA (Community Reinvestment Act)** — Requires banks to serve the credit needs of their entire community, including low- and moderate-income areas. CRA ratings affect M&A approval.

### Tax Frameworks
- **Transfer Pricing (OECD Guidelines)** — Arm's-length principle: intercompany transactions must be priced as if between unrelated parties. Methods: Comparable Uncontrolled Price (CUP), Resale Price, Cost Plus, Transactional Net Margin Method (TNMM), Profit Split. Documentation requirements (Master File, Local File, CbCR) under BEPS Action 13.
- **BEPS (Base Erosion and Profit Shifting)** — OECD/G20 framework to combat tax avoidance by multinational enterprises. 15 Action Items. Pillar One (reallocation of taxing rights) and Pillar Two (15% global minimum tax) are the current focus.
- **IRS Code Sections** — Key provisions: Section 163(j) (interest deduction limitation — 30% of adjusted taxable income), Section 174 (R&D expense capitalization requirement effective 2022), Section 250 (FDII/GILTI), Section 951A (GILTI inclusion), Section 59A (BEAT).

### FP&A Methodologies
- **Driver-based planning** — Building financial models from operational drivers (headcount, pricing, volume, win rate) rather than top-down percentage growth assumptions. Connects operational decisions to financial outcomes.
- **Rolling forecasts** — Continuously extending the forecast horizon (typically 12-18 months forward) rather than forecasting to a fixed year-end. Reduces the "hockey stick" problem in annual budgets.
- **Zero-based budgeting (ZBB)** — Every expense starts from zero each budget cycle and must be justified. Contrasts with incremental budgeting (prior year + X%). Aggressive but effective at cutting embedded waste.
- **Variance analysis framework** — Price vs. volume vs. mix analysis for revenue. Rate vs. efficiency vs. spending analysis for costs. Bridge charts connecting budget to actual.

## Regulations

### SEC Reporting
- **10-K (Annual Report)** — Filed within 60 days of fiscal year-end (large accelerated filers). Contains audited financial statements, MD&A, risk factors, and management's ICFR assessment.
- **10-Q (Quarterly Report)** — Filed within 40 days of fiscal quarter-end. Contains unaudited financial statements and condensed MD&A. Reviewed (not audited) by external auditors.
- **8-K (Current Report)** — Filed within 4 business days of triggering events: material agreements, acquisition/disposition of assets, creation of financial obligations, changes in auditor, departures of directors/officers, regulation FD disclosures.
- **Regulation S-X** — Prescribes the form and content of financial statements filed with the SEC. Rules 3-01 through 12-29 cover everything from balance sheet presentation to pro forma financial information for acquisitions.
- **Regulation G / Non-GAAP Measures** — SEC rules governing the presentation of non-GAAP financial measures (Adjusted EBITDA, non-GAAP EPS, free cash flow). Requires reconciliation to the most directly comparable GAAP measure, equal or greater prominence of GAAP measures, and prohibition of excluding "non-recurring" charges that recur.

### Sarbanes-Oxley Act (SOX)
- Sections 302, 404(a), 404(b), 906 — described above in Frameworks section.
- **PCAOB Auditing Standards** — AS 2201 (audit of ICFR), AS 2401 (consideration of fraud), AS 2110 (identifying risks of material misstatement). The PCAOB sets standards for external auditors of public companies.

### Tax Regulations
- **IRC Sections** — The Internal Revenue Code as amended. Key corporate provisions: Sections 11 (corporate tax rates), 163(j) (interest limitation), 174 (R&D capitalization), 250 (FDII/GILTI deduction), 382 (NOL limitation after ownership change), 1502 (consolidated returns).
- **Treasury Regulations** — IRS regulatory guidance interpreting the IRC. Proposed, temporary, and final regulations. Transfer pricing rules under Treas. Reg. 1.482.
- **State Tax Nexus** — Physical presence vs. economic nexus (post-Wayfair). Each state has its own income tax rules, apportionment formulas (single sales factor trending), and filing requirements. Multistate compliance is a significant burden.
- **OECD Pillar Two (GloBE Rules)** — 15% global minimum effective tax rate on a jurisdiction-by-jurisdiction basis. Qualified Domestic Minimum Top-up Tax (QDMTT), Income Inclusion Rule (IIR), and Undertaxed Profits Rule (UTPR). Effective in most jurisdictions 2024-2025.

### Banking Regulations
- **Dodd-Frank Act** — Described above. Key provisions for commercial lending: stress testing, risk retention rules (Volcker Rule), enhanced prudential standards.
- **OCC/FDIC/Fed Guidance** — Interagency guidance on commercial real estate lending concentrations, leveraged lending, and allowance for credit losses (CECL transition).
- **BSA/AML** — Bank Secrecy Act and Anti-Money Laundering requirements. Know Your Customer (KYC), Suspicious Activity Reports (SARs), Currency Transaction Reports (CTRs). Failure to comply results in consent orders and massive fines.

## Common Workflows

### Monthly/Quarterly Close Process
1. **Sub-ledger close** — Close AP, AR, payroll, fixed assets sub-ledgers. Post final transactions.
2. **Journal entries** — Post recurring entries (depreciation, amortization, prepaid expense), non-recurring entries (accruals, reclassifications), and adjusting entries.
3. **Account reconciliations** — Reconcile every balance sheet account: bank reconciliation, intercompany balances, prepaid expenses, accrued liabilities, deferred revenue. Investigate and clear reconciling items.
4. **Intercompany elimination** — Match and eliminate intercompany receivables/payables, revenue/expense, and profit in inventory. Currency translation for foreign subsidiaries (ASC 830: balance sheet at spot rate, P&L at average rate, equity at historical rate).
5. **Revenue recognition** — Apply ASC 606 five-step model. Assess performance obligation completion, variable consideration estimates, and contract modification treatment.
6. **Lease accounting** — Remeasure lease liabilities, record ROU asset amortization, reassess any modified or new leases per ASC 842.
7. **Flux analysis** — Compare current period to prior period and to budget. Investigate and explain variances exceeding thresholds (typically 5-10% and $X).
8. **Financial statement preparation** — Generate trial balance, produce balance sheet, income statement, cash flow statement, and statement of stockholders' equity.
9. **Management review** — Controller reviews financials with VP Finance/CFO. Discussion of key judgments, estimates, and unusual items.
10. **Close certification** — Close is complete. Management certifies under SOX 302.

### Cash Forecasting (Treasury)
1. **Daily cash positioning** — Aggregate bank balances across all accounts and entities. Identify net cash position.
2. **Short-term forecast (13-week)** — Week-by-week cash inflows (customer receipts, other income) and outflows (payroll, AP, debt service, tax payments, capex). Updated weekly.
3. **Medium-term forecast (12-month)** — Monthly cash flow projection aligned with FP&A operating forecast. Includes seasonal patterns, planned capital expenditures, and debt maturities.
4. **FX exposure management** — Identify net exposures by currency pair. Execute hedges per treasury policy (typically 50-80% of forecasted exposure, rolling 12-month window).
5. **Debt covenant monitoring** — Calculate covenant ratios (leverage, interest coverage, fixed charge coverage) quarterly. Forecast forward to identify potential breaches before they occur.
6. **Investment of excess cash** — Deploy surplus cash per investment policy (money market funds, T-bills, commercial paper, bank deposits). Balance yield with liquidity and credit risk.

### Credit Underwriting Process
1. **Application intake** — Receive loan request, financial statements, tax returns, business plan.
2. **Spreading** — Input financial statements into spreading software. Normalize for non-recurring items, related-party transactions, and accounting differences.
3. **Cash flow analysis** — Calculate EBITDA, debt service coverage ratio (DSCR), fixed charge coverage ratio (FCCR). Assess free cash flow generation and working capital trends.
4. **Collateral analysis** — Appraise collateral (real estate, equipment, inventory, receivables). Apply advance rates to determine borrowing base. Use liquidation values, not replacement cost.
5. **Industry analysis** — Assess borrower's industry: growth trends, cyclicality, competitive dynamics, regulatory risks.
6. **Risk rating** — Assign internal risk rating based on financial analysis, collateral coverage, management quality, and industry conditions. Map to probability of default.
7. **Credit memo** — Document the analysis, recommendation (approve/decline/modify), proposed terms, covenants, and risk mitigants. Present to credit committee.
8. **Ongoing monitoring** — Annual reviews, quarterly covenant compliance testing, early warning indicator monitoring (deposit activity, utilization trends, public information).

### Tax Provision Process (Quarterly)
1. **Pre-tax book income** — Start with GAAP pre-tax income from the close.
2. **Permanent differences** — Identify items that are book expenses but never tax deductions (or vice versa): meals, fines, stock compensation, tax-exempt income, GILTI inclusions.
3. **Temporary differences** — Identify timing differences between book and tax: depreciation methods, revenue recognition timing, accruals not yet deductible, NOL carryforwards.
4. **Current tax calculation** — Apply statutory rates to taxable income (federal 21%, state varies). Calculate credits (R&D, foreign tax credits).
5. **Deferred tax calculation** — Compute deferred tax assets and liabilities from temporary differences. Assess valuation allowance (is it "more likely than not" that DTAs will be realized?).
6. **ETR reconciliation** — Reconcile effective tax rate to statutory rate. Explain each reconciling item (state taxes, permanent differences, credits, rate changes, foreign rate differentials).
7. **ASC 740-10 (FIN 48) analysis** — Evaluate uncertain tax positions. Apply "more likely than not" recognition threshold and "largest amount >50% likely" measurement.
8. **Transfer pricing** — Ensure intercompany charges are at arm's length. Document under OECD guidelines and local requirements.

## Common Terminology

| Term | Meaning |
|------|---------|
| **Trial Balance** | Listing of all general ledger accounts with their debit and credit balances at a point in time. The starting point for financial statement preparation. |
| **Journal Entry (JE)** | A record of a financial transaction in the general ledger. Debits must equal credits. Types: standard, adjusting, reclassifying, correcting, reversing. |
| **Accrual** | Recording revenue or expense before cash changes hands. An accrued liability (e.g., accrued wages) recognizes an obligation that will be paid in a future period. |
| **Deferral** | Delaying recognition of revenue or expense. Deferred revenue (contract liability) is cash received before the performance obligation is satisfied. |
| **Intercompany Elimination** | Removing transactions between entities within the same consolidated group so they don't inflate the consolidated financial statements. IC revenue/expense, IC receivables/payables, IC profit in inventory. |
| **Goodwill Impairment** | A non-cash charge recognized when the fair value of a reporting unit falls below its carrying amount (including goodwill). Often follows an acquisition where the buyer overpaid. Governed by ASC 350. |
| **EBITDA** | Earnings Before Interest, Taxes, Depreciation, and Amortization. The most common proxy for operating cash flow. "Adjusted EBITDA" adds back stock-based compensation, restructuring charges, and other items — subject to SEC Regulation G. |
| **Free Cash Flow (FCF)** | Operating cash flow minus capital expenditures. Measures the cash available for debt repayment, dividends, buybacks, or acquisitions. Not a GAAP measure — SEC requires reconciliation to GAAP operating cash flow. |
| **Working Capital** | Current assets minus current liabilities. Measures short-term liquidity. Key components: accounts receivable, inventory, accounts payable. |
| **DSO (Days Sales Outstanding)** | Average number of days to collect receivables. Formula: (AR / Revenue) x Days. Higher DSO = slower collection = more cash tied up. |
| **DPO (Days Payable Outstanding)** | Average number of days to pay suppliers. Formula: (AP / COGS) x Days. Higher DPO = company holds cash longer (favorable for cash flow, but strains supplier relationships). |
| **DIO (Days Inventory Outstanding)** | Average number of days inventory is held before sale. Formula: (Inventory / COGS) x Days. Higher DIO = slower inventory turns = more capital tied up and obsolescence risk. |
| **Cash Conversion Cycle (CCC)** | DSO + DIO - DPO. Measures how quickly a company converts resource inputs into cash. Lower is better. |
| **WACC (Weighted Average Cost of Capital)** | The blended cost of a company's debt and equity capital, weighted by the proportion of each in the capital structure. Used as the discount rate in DCF valuations and impairment testing. |
| **Covenant** | A condition in a loan agreement that the borrower must comply with. Financial covenants: leverage ratio, interest coverage, fixed charge coverage, minimum liquidity. Violation ("breach") can trigger default and acceleration of the loan. |
| **Provision (Tax)** | The estimated income tax expense recorded in the financial statements. Includes current tax (payable this period) and deferred tax (future periods). Governed by ASC 740. |
| **Valuation Allowance** | A contra-asset that reduces a deferred tax asset when it is "more likely than not" (>50%) that some or all of the DTA will not be realized. Increasing the VA reduces net income. |
| **Material Weakness** | A deficiency in ICFR such that there is a "reasonable possibility" that a material misstatement would not be prevented or detected on a timely basis. Requires disclosure in the 10-K and remediation. The most serious SOX finding. |
| **Significant Deficiency** | A deficiency in ICFR that is less severe than a material weakness but important enough to merit attention by those responsible for oversight. Communicated to the audit committee but not publicly disclosed. |
| **Reconciling Item** | A difference between two data sources (e.g., bank statement vs. GL cash balance) that must be investigated and resolved. Stale reconciling items are audit red flags. |
| **Flux Analysis** | Comparison of financial statement line items across periods to identify and explain significant changes. Threshold-based: typically >5% and >$X. The primary analytical procedure in the close process. |
| **Substantive Testing** | Audit procedures that directly test account balances or transaction classes for material misstatement. Contrasted with "tests of controls" which test the operating effectiveness of internal controls. |
| **DSCR (Debt Service Coverage Ratio)** | Net operating income divided by total debt service (principal + interest). Measures ability to service debt from operating cash flow. Minimum 1.25x is typical for commercial loans. |
| **FCCR (Fixed Charge Coverage Ratio)** | (EBITDA - Capex - Taxes - Distributions) / (Interest + Principal). A more conservative coverage metric than DSCR because it deducts recurring non-discretionary cash outflows. |
| **Borrowing Base** | The maximum amount a borrower can draw on a revolving credit facility, calculated as a percentage of eligible collateral (e.g., 85% of eligible receivables + 50% of eligible inventory). |
| **NOL (Net Operating Loss)** | A tax loss that can be carried forward to offset future taxable income. Post-TCJA (2017): federal NOLs can be carried forward indefinitely but are limited to 80% of taxable income (no carryback). |
| **Transfer Price** | The price charged in transactions between related entities (e.g., parent to subsidiary). Must be at arm's length per OECD guidelines and IRC Section 482. |
| **Effective Tax Rate (ETR)** | Total income tax expense divided by pre-tax book income. Differs from the statutory rate (21% federal) due to state taxes, permanent differences, credits, and foreign rate differentials. |
| **Right-of-Use (ROU) Asset** | The lessee's right to use an underlying asset for the lease term, recognized on the balance sheet under ASC 842. Initially measured as the lease liability + prepayments - lease incentives + initial direct costs. |
| **IBR (Incremental Borrowing Rate)** | The rate of interest a lessee would have to pay to borrow on a collateralized basis over a similar term and amount. Used to discount lease payments when the rate implicit in the lease is not readily determinable. ASC 842. |
| **Purchase Price Allocation (PPA)** | The process of allocating the purchase price in a business combination to the identifiable assets acquired and liabilities assumed at fair value. The residual is goodwill. ASC 805. |

## Five Most Common Mistakes

### 1. Revenue Recognition Errors (ASC 606)
Misidentifying performance obligations in bundled contracts is the single most common financial reporting error. Companies routinely treat a bundle of software license + implementation services + post-contract support as a single performance obligation recognized ratably, when in fact each is a distinct obligation that may require different recognition patterns (point-in-time vs. over time) and standalone selling price allocation. The five-step model is conceptually straightforward but devilishly complex in practice — especially for SaaS companies with implementation services, multi-year contracts with variable consideration, and contract modifications.

### 2. Intercompany Elimination Failures in Multi-Entity Consolidation
As companies grow through acquisition and international expansion, intercompany transactions multiply. The most common elimination failure: intercompany balances that don't net to zero due to timing differences, FX rate mismatches (using spot rate for one entity and average rate for the counterparty), or transactions posted in one entity but not the other. A $50K intercompany mismatch in a $120M revenue company seems immaterial, but auditors will trace it — and the investigation often reveals process failures that affect other balances.

### 3. Incomplete Lease Population (ASC 842)
Companies routinely miss leases that should be on the balance sheet under ASC 842. New leases signed after the initial ASC 842 adoption are the most common gap — the real estate team signs a lease but doesn't notify accounting. Embedded leases in service contracts (e.g., a dedicated server rack in a data center) are another frequent miss. Each missed lease is an off-balance-sheet liability, which is exactly what ASC 842 was designed to eliminate.

### 4. "Adjusted EBITDA" That Adjusts Away Reality
Companies add back "non-recurring" charges to EBITDA that occur every single year: restructuring charges, litigation settlements, acquisition costs, integration expenses. If a charge recurs annually, it is not non-recurring — it is a cost of doing business. The SEC has increased scrutiny of non-GAAP adjustments (Regulation G, C&DIs on Non-GAAP Financial Measures). Overstating Adjusted EBITDA misleads investors and, in leveraged lending, can inflate borrowing capacity by making the company appear more creditworthy than it actually is.

### 5. Stale Assumptions in Credit Underwriting
Credit analysts rely on historical financial statements and forward projections, but frequently fail to challenge key assumptions. Revenue growth projections that dramatically exceed industry growth rates, "non-recurring" addbacks to DSCR calculations that recur annually, and collateral valuations based on outdated appraisals or replacement cost (rather than liquidation value) are endemic in commercial lending. These errors compound — each individual assumption may seem reasonable, but in aggregate they create an overly optimistic credit profile that masks real repayment risk.

## What Excellent vs. Dangerous Work Looks Like

### Excellent Work
- **Close process:** Trial balance ties to sub-ledger detail, every balance sheet account is reconciled with documented support, intercompany balances eliminate to zero, flux analysis explains every material variance with specific business context (not "timing"), and management discussion points flag forward-looking risks (not just backward-looking results).
- **Credit underwriting:** DSCR calculated on a fully adjusted basis with transparent addback methodology, collateral valued at liquidation (not replacement cost), cash flow projections stress-tested against downside scenarios, industry risk explicitly incorporated into the risk rating, and covenants calibrated to provide early warning of deterioration.
- **Tax provision:** ETR reconciliation ties to the penny, uncertain tax positions are documented with specific statutory authority and "more likely than not" analysis, transfer pricing documentation is contemporaneous (not retrofitted), and the provision reflects actual tax law (not last year's provision with updated numbers).
- **FP&A:** Variance analysis isolates price vs. volume vs. mix effects, forecasts are built from operational drivers (not "last year + 10%"), scenarios are genuinely different (not just optimistic/base/pessimistic versions of the same story), and presentations give executives the information they need to make decisions — not just data dumps.

### Dangerous Work
- **Closing the books with unreconciled accounts** — if a balance sheet account is unreconciled, the financial statements are unreliable. Period.
- **Ignoring intercompany mismatches** — every dollar of intercompany mismatch represents a transaction that isn't properly recorded. The aggregate may be "immaterial" but the underlying control failure is not.
- **Recognizing revenue before performance obligations are satisfied** — premature revenue recognition is the #1 cause of financial restatements and SEC enforcement actions.
- **Using spot rates for P&L translation of foreign subsidiaries** — ASC 830 requires average rates for income statement items. Using spot rates distorts consolidated results and can create material misstatements in multi-currency environments.
- **Approving loans based on projected performance that contradicts industry reality** — if the industry is growing at 3% and the borrower's projections assume 15%, the underwriter must challenge it. Accepting fantasy projections is how banks take losses.
- **Calculating DSCR with addbacks for "non-recurring" items that occur every year** — this artificially inflates debt service capacity and masks real cash flow risk. A borrower who can only meet DSCR by adding back recurring costs cannot actually service the debt.
- **Filing financial statements with a known material weakness in ICFR** without disclosure — this is a SOX 302/906 violation with personal criminal liability for the CEO and CFO.

## Professional Certifications

| Certification | Full Name | Relevance |
|--------------|-----------|-----------|
| **CPA** | Certified Public Accountant | Required to sign audit opinions and file SEC documents. The foundational credential for accountants. State-licensed, requires 150 credit hours + exam + experience. |
| **CFA** | Chartered Financial Analyst | Three-level exam covering financial analysis, valuation, portfolio management. Relevant for FP&A, treasury, and credit analysis roles. Globally recognized. |
| **CMA** | Certified Management Accountant | IMA credential focused on financial planning, analysis, control, and decision support. Directly relevant for FP&A and management accounting. |
| **CIA** | Certified Internal Auditor | IIA credential for internal audit professionals. Covers internal audit standards, risk management, and governance. Required for many internal audit director positions. |
| **FRM** | Financial Risk Manager | GARP credential covering market risk, credit risk, operational risk, and risk management in banking. Relevant for credit risk and treasury functions. |
| **CISA** | Certified Information Systems Auditor | ISACA credential for IT audit and information systems controls. Relevant for SOX IT general controls testing and cybersecurity risk assessment in financial systems. |
| **EA** | Enrolled Agent | IRS-credentialed tax professional authorized to represent taxpayers before the IRS. The highest credential the IRS grants. Relevant for tax controversy and compliance. |
| **CGMA** | Chartered Global Management Accountant | AICPA/CIMA credential for management accounting. Focuses on strategic finance, business performance, and leadership. |
| **CFE** | Certified Fraud Examiner | ACFE credential covering fraud prevention, detection, and investigation. Relevant for internal audit teams focused on financial fraud and embezzlement. |
