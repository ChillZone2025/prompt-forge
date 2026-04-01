# Industry Context: Banking & Lending

## What This Industry Does

Commercial banking and lending encompasses the core financial intermediation activities that keep the economy running: accepting deposits, originating loans (consumer, commercial, CRE, SBA), managing credit risk, ensuring regulatory compliance, and providing treasury/cash management services. Practitioners range from branch operations managers overseeing teller lines and vault operations to commercial lenders structuring $50M credit facilities to BSA/AML officers monitoring billions in transaction flows for suspicious activity.

The industry is among the most heavily regulated in the US economy. Banks operate under a dual chartering system (national vs. state), supervised by overlapping federal and state regulators (OCC, FDIC, Federal Reserve, state banking departments), and subject to hundreds of specific regulations covering everything from how interest is disclosed (Reg Z) to how customer identity is verified (CIP/CDD). The cost of non-compliance isn't just fines — it's consent orders, MRAs (Matters Requiring Attention), and in severe cases, charter revocation.

The lending cycle follows a structured workflow: origination (application, CIP/CDD, credit analysis) → underwriting (risk rating, approval/decline, structuring) → closing (documentation, perfection of collateral, funding) → servicing (payment processing, covenant monitoring, renewals) → workout (if the credit deteriorates). Each stage has specific regulatory requirements, documentation standards, and risk checkpoints. A loan that's properly underwritten but poorly documented is just as dangerous as one that's poorly underwritten — examiners will cite both.

## Key Tools & Platforms

### Core Banking Systems
- **FIS (Fidelity National Information Services)** — Largest banking technology provider globally. Core platforms include FIS Modern Banking Platform, IBS, and Systematics. Powers ~50% of global banking.
- **Fiserv (now merged with First Data)** — Core platforms: DNA, Premier, Signature, Cleartouch. Strong in community banking. Integrated with payment processing post-First Data merger.
- **Jack Henry & Associates** — Core platforms: SilverLake (large community banks), CIF 20/20 (community banks), Symitar (credit unions). Known for open architecture and API access.
- **Temenos** — Global core banking platform. T24/Transact powers 3,000+ banks in 150 countries. Strongest in international/emerging markets.
- **nCino (Bank Operating System)** — Cloud-native platform built on Salesforce. Loan origination, credit analysis, portfolio management, customer onboarding. Growing rapidly in US commercial banking. Replaced paper-based workflows at 1,700+ institutions.
- **FIS Code Connect / Open APIs** — API layer enabling fintech integrations with core banking systems.

### Loan Origination & Credit Analysis
- **nCino** — End-to-end loan origination: application intake, spreading, credit memo generation, approval workflow, closing checklist, portfolio monitoring.
- **Abrigo (formerly Sageworks/FARIN)** — Credit analysis, CECL modeling, loan pricing, stress testing, BSA/AML. Strong in community banking. Advisory analytics platform.
- **Moody's Analytics (CreditLens, RiskCalc)** — Commercial credit analysis, PD/LGD modeling, portfolio analytics. RiskCalc generates probability of default scores for private firms.
- **S&P Capital IQ Pro** — Financial data, credit ratings, industry research, comparable analysis. Used for borrower financial analysis and market intelligence.
- **Baker Hill NextGen** — Loan origination and risk management platform for community and mid-size banks.
- **Finastra (Fusion)** — Lending solutions including commercial, consumer, and mortgage origination.

### BSA/AML & KYC
- **NICE Actimize** — Market-leading AML platform: transaction monitoring (SAM), KYC/CDD (ActimizeWatch), sanctions screening, fraud detection. Used by most top-50 US banks.
- **LexisNexis Risk Solutions (Bridger Insight)** — Sanctions screening (OFAC, PEP, adverse media), identity verification, enhanced due diligence. Integrates with major core systems.
- **Refinitiv World-Check (now LSEG)** — PEP and sanctions database. 4.9M+ profiles. Used for customer screening at onboarding and ongoing monitoring.
- **Verafin (now Nasdaq)** — BSA/AML and fraud detection for community and mid-size banks. Cloud-based consortium model shares anonymized transaction patterns across 3,500+ institutions.
- **Oracle Financial Crime and Compliance Management (FCCM)** — Enterprise AML, KYC, sanctions screening for large banks.

### Regulatory Reporting & Compliance
- **Wolters Kluwer (OneSumX, Wiz)** — Regulatory reporting (Call Reports, FR Y-9C), compliance management, risk analytics.
- **Axiom (now part of S&P Global)** — Regulatory reporting automation: Call Reports, FFIEC 041/051, FR Y-9C, HMDA, CRA.
- **Ncontracts** — Vendor management, compliance management, risk assessment for community banks.
- **Continuity (now CSI)** — Compliance management software: regulations tracking, audit management, policy management.
- **QwickRate** — CD marketplace and bank financial analysis. Used for liquidity management and peer benchmarking.

### Appraisal & Collateral
- **CoreLogic** — Property valuation, flood zone determination, real estate data. Provides AVMs (Automated Valuation Models) and full appraisal management.
- **CoStar / LoopNet** — Commercial real estate data, comparable sales, rent comps, property analytics. Essential for CRE lending.
- **Trepp** — CMBS and CRE loan analytics, DSCR calculations, default modeling, market intelligence.
- **Black Knight (now ICE Mortgage Technology)** — Mortgage servicing, origination, data analytics. MSP platform services ~60% of US mortgage loans.

## Key Frameworks & Standards

### Capital & Risk Management
- **Basel III / Basel III Endgame** — International capital adequacy framework. Sets minimum capital ratios: CET1 (4.5%), Tier 1 (6%), Total Capital (8%), plus buffers (conservation buffer 2.5%, countercyclical buffer 0-2.5%, G-SIB surcharge 1-4.5%). US implementation through OCC/Fed/FDIC joint rulemaking. Basel III Endgame (finalization) introduces revised standardized approach for credit risk and operational risk.
- **CECL (Current Expected Credit Losses) — ASC 326** — Replaced the incurred loss model with a lifetime expected loss model for estimating credit losses. Banks must estimate expected losses over the entire life of the loan at origination (not just when losses are probable). Implemented 2020 (large banks) / 2023 (smaller institutions). Requires quantitative models (DCF, loss rate, vintage, PD/LGD) plus qualitative adjustments.
- **CAMELS Rating System** — Regulatory rating framework: Capital adequacy, Asset quality, Management, Earnings, Liquidity, Sensitivity to market risk. Each component rated 1-5 (1 = best). Composite rating determines supervisory strategy. A CAMELS downgrade triggers increased examination frequency and potential enforcement action.
- **Dual Risk Rating System** — Most banks use two ratings per loan: (1) Borrower risk rating (PD — probability of default based on financial condition) and (2) Facility risk rating (LGD — loss given default based on collateral and structure). Combined to estimate expected loss.

### Lending Standards
- **OCC Comptroller's Handbook: Commercial Lending** — The definitive reference for commercial loan underwriting, administration, and workout. Covers credit analysis, documentation, collateral, problem loan identification, and loan review.
- **Interagency Guidelines on CRE Concentrations (2006)** — CRE loans exceeding 300% of total risk-based capital (or construction loans exceeding 100%) trigger enhanced risk management expectations: board-approved limits, stress testing, enhanced portfolio monitoring.
- **SBA SOP 50-10 (Lender and Development Company Loan Programs)** — Standard Operating Procedure for SBA 7(a) lending. 800+ pages of underwriting, closing, servicing, and liquidation requirements.
- **Uniform Commercial Code (UCC)** — Governs security interests in personal property. Article 9 covers secured transactions — lien perfection (UCC-1 filing), priority, and enforcement. Critical for commercial lending collateral.
- **FIRREA / USPAP** — Financial Institutions Reform, Recovery, and Enforcement Act requires appraisals by state-licensed/certified appraisers for federally related transactions over $500K (commercial) or $400K (residential, per 2019 threshold increase). Appraisals must comply with USPAP (Uniform Standards of Professional Appraisal Practice).

### BSA/AML Framework
- **Bank Secrecy Act (BSA) / Anti-Money Laundering (AML)** — The foundational US AML framework: CTR filing ($10K+ cash transactions), SAR filing (suspicious activity), CIP (Customer Identification Program), CDD (Customer Due Diligence), beneficial ownership identification, and ongoing monitoring.
- **FinCEN CDD Rule (2016/2018)** — Requires banks to identify and verify beneficial owners (25%+ ownership or single individual with significant control) of legal entity customers. Effective 2018.
- **OFAC Sanctions Compliance** — Office of Foreign Assets Control administers sanctions programs. Banks must screen all customers and transactions against the SDN (Specially Designated Nationals) list. Strict liability — no intent required for violations.
- **USA PATRIOT Act, Section 326 (CIP)** — Requires banks to implement a written CIP: collect name, DOB, address, ID number; verify identity through documentary or non-documentary methods; screen against government lists; maintain records for 5 years after account closure.

## Regulatory Landscape

### Federal Regulators
- **OCC (Office of the Comptroller of the Currency)** — Primary regulator for national banks and federal savings associations. Conducts examinations, issues enforcement actions (consent orders, CMPs, C&D orders), and publishes the Comptroller's Handbook.
- **FDIC (Federal Deposit Insurance Corporation)** — Insures deposits (standard $250K per depositor per institution). Regulates state-chartered banks not in the Federal Reserve system. Conducts examinations and has backup enforcement authority for all insured institutions.
- **Federal Reserve** — Regulates bank holding companies, state-chartered member banks, and systemically important financial institutions (SIFIs). Conducts stress testing (DFAST/CCAR for large banks). Sets monetary policy affecting bank funding costs.
- **CFPB (Consumer Financial Protection Bureau)** — Regulates consumer financial products: mortgages, credit cards, student loans, auto loans. Enforces TILA (Reg Z), RESPA (Reg X), ECOA (Reg B), FCRA, UDAAP. Supervision of banks with >$10B in assets; enforcement authority over all.
- **FinCEN (Financial Crimes Enforcement Network)** — Administers BSA. Receives and analyzes CTRs, SARs, and other BSA filings. Issues enforcement actions for BSA violations. Published the CDD Rule and the beneficial ownership reporting requirements.

### Key Regulations
- **Regulation B (Equal Credit Opportunity Act / ECOA)** — Prohibits discrimination in lending on the basis of race, color, religion, national origin, sex, marital status, age, receipt of public assistance. Adverse action notice required within 30 days.
- **Regulation Z (Truth in Lending Act / TILA)** — Requires disclosure of credit terms: APR, finance charge, amount financed, total of payments. Applies to consumer credit. HOEPA provisions (§1026.32) for high-cost mortgages.
- **Regulation X (RESPA)** — Real Estate Settlement Procedures Act. Governs mortgage servicing: escrow, loss mitigation, error resolution, force-placed insurance. Prohibits kickbacks and unearned fees.
- **HMDA (Home Mortgage Disclosure Act / Reg C)** — Requires collection and reporting of mortgage application data: demographics, loan terms, property location, action taken. Used for fair lending analysis and CRA evaluation.
- **CRA (Community Reinvestment Act)** — Requires banks to meet the credit needs of their entire community, including low- and moderate-income neighborhoods. CRA ratings (Outstanding, Satisfactory, Needs to Improve, Substantial Noncompliance) affect merger/acquisition approvals.
- **UDAAP (Unfair, Deceptive, or Abusive Acts or Practices)** — Dodd-Frank prohibition on unfair (substantial injury not reasonably avoidable, not outweighed by benefit), deceptive (misleading material representation), or abusive (takes unreasonable advantage of consumer's lack of understanding) practices.
- **Flood Insurance (Reg H / NFIP)** — Mandatory flood insurance for loans secured by property in Special Flood Hazard Areas (SFHAs). Lender must determine flood zone (Standard Flood Hazard Determination Form), ensure adequate coverage, provide notice to borrower. Civil money penalties for non-compliance: up to $2,000 per violation.

## Essential Terminology

| Term | Definition |
|------|-----------|
| **DSCR (Debt Service Coverage Ratio)** | NOI divided by annual debt service (P&I). Minimum 1.20x typical for CRE; 1.25x-1.50x for C&I depending on risk |
| **LTV (Loan-to-Value)** | Loan amount divided by appraised value of collateral. CRE guidelines: 80% improved, 65% raw land, 75% income-producing |
| **NOI (Net Operating Income)** | Gross rental income minus operating expenses (before debt service). The fundamental cash flow measure for income-producing real estate |
| **Cap Rate (Capitalization Rate)** | NOI divided by property value. Indicates the return an investor would receive on an all-cash purchase. Lower cap rate = higher price/lower risk |
| **Debt Yield** | NOI divided by loan amount. Measures property cash flow as a percentage of the loan, independent of interest rate or amortization. Minimum 8-10% typical |
| **Global Cash Flow** | Combined analysis of business cash flow AND personal cash flow of guarantors. Shows total repayment capacity across all sources |
| **UCC-1 Filing** | Financing statement filed with the Secretary of State to perfect a security interest in personal property (accounts, inventory, equipment). Priority = first to file |
| **Blanket Lien** | UCC-1 covering all assets of the borrower — inventory, accounts receivable, equipment, general intangibles. Standard for commercial lines of credit |
| **Participation** | Sharing a loan with another bank to manage concentration or legal lending limit issues. Lead bank originates and services; participant(s) fund a portion |
| **Classified Asset** | Loan rated Substandard, Doubtful, or Loss by examiners. Substandard = well-defined weakness; Doubtful = full repayment questionable; Loss = uncollectible |
| **MRA (Matter Requiring Attention)** | Examiner finding that requires corrective action. Less severe than a formal enforcement action but must be addressed in a board-approved action plan |
| **SAR (Suspicious Activity Report)** | Filed with FinCEN when a bank detects transactions that may involve money laundering, fraud, terrorist financing, or other suspicious activity. $5,000+ threshold for known subjects |
| **CTR (Currency Transaction Report)** | Filed with FinCEN for cash transactions over $10,000 in a single business day. Aggregation rules apply — multiple transactions by same person must be combined |
| **Structuring** | Breaking cash transactions into amounts below $10,000 to evade CTR filing. Federal crime (31 USC §5324) — even if the underlying funds are legitimate |
| **CIP (Customer Identification Program)** | Bank's program to verify customer identity at account opening: name, DOB, address, ID number. Required by USA PATRIOT Act §326 |
| **CDD (Customer Due Diligence)** | Process of understanding the customer's expected account activity, source of funds, and risk profile. Standard CDD for most; Enhanced Due Diligence (EDD) for high-risk |
| **Beneficial Owner** | Individual(s) who own 25%+ of a legal entity or a single individual with significant management responsibility. Must be identified at account opening per FinCEN CDD Rule |
| **PEP (Politically Exposed Person)** | Foreign government official, their family member, or close associate. High-risk category requiring EDD due to corruption risk |
| **Covenant** | Contractual requirement in a loan agreement. Affirmative (must do: provide financials, maintain insurance) or negative (must not: no additional debt, no asset sales without consent) |
| **Workout** | Managing a troubled credit: restructuring terms, negotiating paydowns, forbearance agreements, or liquidating collateral. Goal is to minimize bank losses |
| **Provision for Loan Losses** | Income statement charge to build the Allowance for Credit Losses (ACL). Under CECL, reflects lifetime expected losses on the portfolio |
| **Stress Testing** | Analyzing portfolio performance under adverse economic scenarios (rising rates, unemployment spike, CRE vacancy increase). Required for large banks (DFAST/CCAR); expected by examiners for community banks on CRE concentrations |

## Top 10 Common Mistakes

1. **Approving loans based on collateral value rather than repayment capacity** — "We're secured" is not underwriting. The primary source of repayment must be demonstrated cash flow — collateral is the secondary source. Examiners cite loans where the DSCR is below 1.0x but the LTV looks good as a fundamental underwriting weakness. When cash flow doesn't support the debt, you're making a liquidation bet, not a loan.

2. **Failing to verify borrower financial information against tax returns** — P&L statements and internal financials prepared by the borrower often differ materially from tax returns (which have penalties for misstatement). Revenue discrepancies between the P&L and the 1040/1120 are a red flag. Always global cash flow and reconcile borrower-prepared statements to tax returns.

3. **Missing UCC lien searches before closing** — A prior UCC-1 blanket lien from another creditor means your bank's collateral position may be subordinate. A lien search (Secretary of State + county recorder) is mandatory before closing any secured loan. Missing this creates a false sense of security and can result in recovery of pennies on the dollar in a workout.

4. **Inadequate BSA/AML transaction monitoring** — Setting transaction monitoring rules too broadly (too many alerts = alert fatigue) or too narrowly (missing actual suspicious activity). Common gap: not aggregating cash transactions by customer across branches — allows structuring to go undetected. BSA consent orders are among the most expensive and reputationally damaging regulatory actions.

5. **Not performing flood zone determinations or lapsing mandatory coverage** — Every loan secured by improved real estate requires a Standard Flood Hazard Determination (SFHD). If the property is in an SFHA, flood insurance is mandatory. Failing to determine or maintain coverage carries civil money penalties of up to $2,000 per violation — and violations compound across every loan in the portfolio that's deficient.

6. **Allowing CRE concentrations to grow without enhanced monitoring** — The 2006 Interagency Guidelines set supervisory thresholds: total CRE > 300% of capital or construction > 100% of capital. Exceeding these doesn't prohibit lending but triggers expectations for board-approved limits, stress testing, and enhanced portfolio monitoring. Banks that exceed without enhanced management are guaranteed an MRA.

7. **Incomplete or untimely SAR filing** — SARs must be filed within 30 days of initial detection of suspicious activity (60 days if no suspect is identified). Common failures: not filing at all because "the customer is a long-time relationship," filing late because of internal review delays, or filing but with insufficient narrative to be useful. SAR filing is not optional — failure to file is a BSA violation with civil money penalties up to $1M per violation per day.

8. **Weak covenant monitoring and tickler systems** — Loan agreements require annual financials, insurance renewals, property tax payments, borrowing base certificates. If the bank doesn't have a reliable tickler system to track these, exceptions pile up. By the time the loan deteriorates, the bank has months or years of missing information and no leverage. Examiners expect documented evidence of ongoing monitoring.

9. **Appraisal deficiencies — stale appraisals, inappropriate comps, or unlicensed appraisers** — FIRREA requires appraisals by state-licensed/certified appraisers using USPAP standards for transactions above regulatory thresholds. Common issues: using an appraisal that's more than 12 months old without an update, accepting comps from a different market or property type, not reviewing the appraisal for reasonableness before relying on it for the credit decision.

10. **Pressure-driven credit decisions — approving "relationship" loans that don't meet policy** — Bank leadership or relationship managers pressure credit teams to approve loans for important customers or board members that don't meet the bank's credit standards. This creates documentation problems (credit memos that don't reflect the real analysis), concentration risk, and fair lending exposure (if exceptions correlate with protected classes). Examiners specifically review exception rates and the quality of exception justifications.

## Excellent vs. Dangerous Work

### What Excellent Banking Work Looks Like
- Credit memos that clearly articulate the borrower's business, the purpose of the loan, the source and adequacy of repayment, the collateral and its value, and the risks with mitigants — a complete narrative that could stand up to examiner review years later
- DSCR analysis using tax-return-verified cash flows with sensitivity scenarios (what happens if revenue drops 10%? if rates rise 200 bps?)
- BSA/AML programs that are risk-based — higher monitoring intensity on higher-risk customers, with documented rationale for risk ratings
- Timely SAR filings with detailed narratives that explain what was suspicious, what investigation was conducted, and what action was taken
- Proactive identification of credit deterioration before it becomes classified — reaching out to borrowers when covenant compliance is trending down, not waiting for a payment default
- CRA programs that genuinely serve the community — not just checking boxes but making loans and providing services in LMI areas

### What Dangerous Banking Work Looks Like
- Credit memos that read like sales pitches — emphasizing positives and burying or omitting risk factors to get approval
- Approving loans without current financial statements or tax returns because "we know this borrower"
- Ignoring structuring patterns because the customer is high-value or well-connected
- Allowing concentration limits to be breached without board awareness or enhanced monitoring
- Using stale appraisals or in-house evaluations when a full appraisal is required
- Treating BSA/AML as a "compliance department problem" rather than a front-line responsibility — branch staff not filing referrals for unusual activity because they don't want to lose the customer

## Professional Certifications

| Certification | Issuing Body | Scope |
|--------------|-------------|-------|
| **CRCM (Certified Regulatory Compliance Manager)** | ABA (American Bankers Association) | Compliance management across all banking regulations. The gold standard for bank compliance officers. Requires experience + exam + CPE. |
| **CAMS (Certified Anti-Money Laundering Specialist)** | ACAMS (Association of Certified AML Specialists) | BSA/AML program management, transaction monitoring, SAR filing, sanctions compliance. Required by many banks for BSA officer role. |
| **CRC (Credit Risk Certification)** | RMA (Risk Management Association) | Commercial credit risk analysis, portfolio management, regulatory requirements. Requires experience + exam. Highly regarded in commercial lending. |
| **CFA (Chartered Financial Analyst)** | CFA Institute | Investment analysis, portfolio management, financial modeling. 3-level exam series. Common in bank investment portfolios, capital markets, and credit analysis. |
| **CCRA (Certified Credit Research Analyst)** | AICRA (Association of International Credit Research Analysts) | Credit research and analysis for financial institutions. Emerging credential. |
| **NMLS (Nationwide Multistate Licensing System)** | CSBS (Conference of State Bank Supervisors) | Required registration for mortgage loan originators under the SAFE Act. Pre-licensing education, exam, and annual renewal. |
| **CFE (Certified Fraud Examiner)** | ACFE (Association of Certified Fraud Examiners) | Fraud prevention, detection, and investigation. Relevant for BSA/AML, internal audit, and special assets/workout. |
| **CIA (Certified Internal Auditor)** | IIA (Institute of Internal Auditors) | Internal audit methodology, risk assessment, governance. Essential for bank internal audit functions. |
