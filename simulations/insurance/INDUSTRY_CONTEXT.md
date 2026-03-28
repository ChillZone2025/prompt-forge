# Industry Context: Insurance

## What This Industry Does

Insurance is the business of pooling risk — policyholders pay premiums, and the carrier pays claims when covered losses occur. The industry divides broadly into Property & Casualty (P&C), Life & Annuities, and Health. Within P&C alone, you have personal lines (homeowners, auto), commercial lines (general liability, commercial property, workers' comp, commercial auto, professional liability), and specialty lines (marine, aviation, surety, cyber). Underwriting decides who to insure and at what price. Claims determines what gets paid when something goes wrong. Compliance keeps the whole operation within the bounds of state and federal regulation.

The insurance value chain runs: product development and actuarial pricing, marketing and distribution (agents/brokers/direct), underwriting and risk selection, policy issuance and servicing, claims handling and settlement, reinsurance, and financial reporting. Every step has its own tooling, regulations, and failure modes.

## Key Tools & Platforms

### Core Policy Administration & Claims Systems
- **Guidewire (ClaimCenter, PolicyCenter, BillingCenter)** — The dominant enterprise platform for P&C carriers. ClaimCenter handles FNOL through settlement, PolicyCenter manages quoting through issuance, BillingCenter manages premium billing and collections. Most top-25 carriers run Guidewire.
- **Duck Creek Technologies** — Cloud-native policy administration, billing, and claims platform. Competes with Guidewire in the mid-to-large carrier space. Known for configurability without heavy custom development.
- **Majesco** — Cloud platform for P&C and L&A carriers covering policy, billing, claims, and distribution management. Strong in digital-first carrier implementations.
- **Insurity** — Policy administration and claims for P&C carriers, with strength in specialty and program business.

### Agency Management & Distribution
- **Applied Epic** — Agency management system used by independent insurance agencies. Manages client records, policies, commissions, and carrier connectivity.
- **EZLynx** — Comparative rating and agency management platform. Agents use it to quote across multiple carriers simultaneously.
- **Vertafore AMS360** — Agency management system competing with Applied Epic. Handles policy lifecycle management from the agency side.
- **IVANS** — Industry network connecting carriers, agents, and MGAs for real-time policy data exchange (downloads, messages, eDocs).

### Rating, Analytics & Data
- **ISO (Insurance Services Office) / Verisk** — Industry-standard rating tools, policy forms, and loss cost data. ISO provides the base rates and forms that most carriers use for commercial lines. Verisk is the parent company offering analytics, actuarial data, and underwriting decision support.
- **AAIS (American Association of Insurance Services)** — Alternative to ISO for advisory forms and loss costs, particularly in farm, inland marine, and commercial property.
- **LexisNexis Risk Solutions** — Data analytics for underwriting and claims. Products include C.L.U.E. (Comprehensive Loss Underwriting Exchange) reports showing prior claims history, and current carrier reports for auto and property.
- **RMS (Risk Management Solutions)** — Catastrophe modeling platform. Models hurricane, earthquake, flood, wildfire, and other perils. Underwriters and reinsurers use RMS models to price catastrophe-exposed risks.
- **AIR Worldwide (Verisk)** — Competing catastrophe modeling platform. Widely used for probabilistic loss estimation in reinsurance and portfolio management.
- **ACORD (Association for Cooperative Operations Research and Development)** — Industry data standards body. ACORD forms (applications, certificates of insurance, loss runs) are the universal data exchange format in insurance.

## Key Frameworks & Methodologies

### Underwriting
- **Underwriting Guidelines** — Carrier-specific rules defining acceptable risks, prohibited classes, required documentation, pricing parameters, and authority levels. The underwriter's bible.
- **Loss Ratio Analysis** — Incurred losses divided by earned premium. A 60% loss ratio means $0.60 of every premium dollar goes to claims. Target loss ratios vary by line (auto: 65-75%, workers' comp: 60-70%, commercial property: 50-60%).
- **Combined Ratio** — Loss ratio + expense ratio. Below 100% = underwriting profit. Above 100% = underwriting loss (carrier may still profit from investment income). Industry average hovers around 98-102%.
- **Risk Appetite Framework** — Formal documentation of what classes of business a carrier wants to write, at what limits, in what geographies, and at what price. Drives underwriting authority delegation.
- **Actuarial Tables** — Statistical tables used to price risk. Mortality tables for life insurance, loss development triangles for casualty, frequency/severity models for property.
- **Catastrophe Modeling** — Probabilistic simulation of natural disaster losses. Models run thousands of scenarios to estimate probable maximum loss (PML) and average annual loss (AAL) for a portfolio.
- **Experience Modification (Experience Mod)** — Workers' compensation rating factor comparing an employer's actual losses to expected losses for their industry. A mod above 1.0 means worse-than-average experience; below 1.0 means better.

### Claims
- **FNOL (First Notice of Loss)** — The initial report of a claim. Triggers the claims process. FNOL quality directly impacts claim outcomes — the best adjusters capture detailed information at first contact.
- **Claims Investigation & Adjustment** — Field inspection, documentation review, coverage analysis, damage estimation, and settlement negotiation. Adjusters must balance the duty to the policyholder with the carrier's financial interests.
- **Subrogation** — The carrier's right to recover claim payments from a responsible third party. If a plumber's negligence causes water damage, the property insurer pays the claim and then subrogs against the plumber's liability carrier.
- **Salvage** — Recovery of value from damaged property after a claim is paid. Totaled vehicles, damaged goods, scrap materials.
- **Reserving** — Estimating the ultimate cost of open claims. Reserves directly impact financial statements. Under-reserving flatters earnings short-term but creates future problems; over-reserving depresses earnings but is more conservative.

### Reinsurance
- **Treaty Reinsurance** — Standing agreement where the reinsurer automatically accepts a share of all risks in a defined portfolio. Quota share (proportional) or excess of loss (non-proportional).
- **Facultative Reinsurance** — Individual risk placement. The cedant (primary carrier) submits a specific risk to the reinsurer for approval. Used for large or unusual risks that fall outside treaty terms.

## Regulations & Legal Frameworks

- **State Department of Insurance (DOI)** — Insurance is regulated at the state level in the US. Each state DOI approves policy forms, rates, market conduct, and financial solvency. Carriers must be licensed in each state where they operate.
- **NAIC (National Association of Insurance Commissioners)** — Coordinates regulatory standards across states. Publishes model laws and regulations that states adopt (with variations). Key models include the Unfair Claims Settlement Practices Act, Market Conduct Surveillance Model, and Risk-Based Capital requirements.
- **Unfair Claims Settlement Practices Act** — NAIC model law (adopted by most states) requiring carriers to handle claims promptly, communicate clearly, and settle fairly. Violations include failing to acknowledge claims promptly, not conducting reasonable investigations, and compelling claimants to litigate by making unreasonably low offers.
- **Fair Claims Settlement Practices** — State-level regulations defining timelines for claim acknowledgment (typically 15 days), acceptance/denial decisions (typically 30-45 days), and payment after agreement (typically 30 days). Timeframes vary by state.
- **Solvency II (EU)** — European regulatory framework for insurance company capital requirements. Three pillars: quantitative requirements, governance and supervision, and disclosure.
- **IFRS 17** — International Financial Reporting Standard for insurance contracts. Effective 2023. Fundamentally changes how insurance liabilities are measured and reported.
- **NFIP (National Flood Insurance Program)** — Federal program providing flood insurance through FEMA. Private flood insurance is growing but NFIP remains dominant. Write Your Own (WYO) carriers administer NFIP policies.
- **Dodd-Frank Act** — Created the Federal Insurance Office (FIO) for monitoring systemic risk in insurance. Also affects insurance companies designated as systemically important financial institutions (SIFIs).
- **HIPAA** — Applies to health insurance carriers and their handling of protected health information (PHI). Violation penalties are severe.
- **Anti-Rebating Laws** — Most states prohibit agents from returning part of their commission to the insured as an inducement. Exceptions exist in some states (California, Florida, Ohio).
- **Surplus Lines Regulations** — Non-admitted carriers (not licensed in a state) can write risks that admitted carriers decline. Surplus lines brokers must document diligent search of the admitted market before placing with a non-admitted carrier. Surplus lines taxes apply.
- **Duty to Defend vs. Duty to Indemnify** — Liability policies create two distinct obligations. The duty to defend is broader — triggered by allegations in a complaint that potentially fall within coverage. The duty to indemnify is narrower — only triggered by actual covered damages. Critical distinction in coverage litigation.

## Common Terminology

| Term | Meaning |
|------|---------|
| **Premium** | The price paid for insurance coverage, typically annual or semi-annual |
| **Deductible** | The amount the policyholder pays out-of-pocket before insurance kicks in |
| **Limit** | Maximum amount the carrier will pay for a covered loss — per occurrence and/or aggregate |
| **Endorsement** | Amendment to a policy that adds, removes, or modifies coverage |
| **Rider** | Similar to an endorsement, commonly used in life and health insurance |
| **Binder** | Temporary evidence of insurance coverage before the policy is issued |
| **Dec Page (Declarations Page)** | Summary page of a policy showing named insured, coverages, limits, deductibles, premium, and policy period |
| **FNOL (First Notice of Loss)** | Initial report of a claim to the insurance carrier |
| **Subrogation** | Carrier's right to recover claim payments from a responsible third party |
| **Salvage** | Recovery of value from damaged property after a total loss claim |
| **Loss Ratio** | Incurred losses / earned premium — measures underwriting profitability |
| **Combined Ratio** | Loss ratio + expense ratio — below 100% means underwriting profit |
| **MLR (Medical Loss Ratio)** | Percentage of health insurance premium spent on medical care (ACA requires 80-85%) |
| **Admitted Carrier** | Insurance company licensed and regulated by a state DOI, with guaranty fund backing |
| **Non-Admitted / Surplus Lines** | Carrier not licensed in a state, writing risks the admitted market won't cover |
| **Aggregate Limit** | Maximum total payout for all claims during the policy period |
| **Occurrence Limit** | Maximum payout for a single event or occurrence |
| **Retroactive Date** | Date on a claims-made policy before which claims are not covered |
| **Tail Coverage (ERP)** | Extended Reporting Period — allows claims to be reported after a claims-made policy expires |
| **Claims-Made Policy** | Covers claims reported during the policy period, regardless of when the event occurred (subject to retroactive date) |
| **Occurrence Policy** | Covers events that occur during the policy period, regardless of when the claim is reported |
| **Manuscript Policy** | Custom-drafted policy (not using standard ISO/AAIS forms), tailored for a specific risk |
| **Blanket Coverage** | Single limit applying across multiple locations, properties, or categories |
| **Coinsurance** | Clause requiring the policyholder to insure property to a specified percentage (typically 80%) of its replacement cost, or face a penalty on partial losses |
| **Loss Run** | Historical record of claims filed under a policy — the insurance equivalent of a credit report |
| **Experience Mod** | Workers' comp rating factor comparing actual losses to expected losses for the industry class |

## Common Mistakes in This Field

1. **Underwriting without loss runs** — Quoting a new account without requesting and reviewing at least 5 years of loss history. Loss runs reveal claim frequency, severity, and trends that applications alone cannot. Binding without loss runs is flying blind.

2. **Failing to identify coverage gaps** — Not comparing the expiring policy to the proposed policy line by line. Clients lose coverage they previously had, and the agent or underwriter doesn't catch it until there's an uncovered claim.

3. **Misclassifying risk** — Using the wrong SIC/NAICS code or ISO class code for a commercial risk. A restaurant classified as an office gets the wrong rate, wrong forms, and potentially no coverage when a kitchen fire claim is filed.

4. **Ignoring duty to defend vs. duty to indemnify** — Denying a claim outright when the complaint alleges facts that could potentially fall within coverage. The duty to defend is broader than the duty to indemnify — failure to defend when obligated creates bad faith exposure.

5. **Missing subrogation opportunities** — Paying a property claim without investigating whether a third party caused the loss. Once evidence is gone and statutes of limitations expire, the recovery opportunity is lost permanently.

6. **Failing to reserve adequately** — Setting initial reserves too low to make current financials look better. When reserves develop adversely, it creates earnings volatility and erodes surplus. Regulators scrutinize reserve adequacy closely.

7. **Not verifying endorsements match the quote** — The policy is issued with endorsements that differ from what was quoted. The insured thinks they have coverage they don't, and the error surfaces only at claim time.

8. **Overlooking concurrent causation** — When a loss results from both covered and excluded causes simultaneously. Some jurisdictions apply the "efficient proximate cause" doctrine, others apply "concurrent causation." Getting this wrong leads to incorrect coverage determinations.

9. **Ignoring anti-stacking provisions** — Failing to check whether policy language prevents stacking of limits across multiple policies or coverage years. Stacking disputes generate expensive litigation.

10. **Missing reporting deadlines for claims-made policies** — A claims-made policy only covers claims reported during the policy period (or any extended reporting period). Missing the reporting deadline by even one day can result in a complete denial. Unlike occurrence policies, there is no fallback.

## Excellent vs. Dangerous Work

### Excellent Work Looks Like
- Underwriter who identifies a coinsurance penalty exposure in a submission and proactively recommends agreed amount endorsements to protect the insured.
- Claims adjuster who recognizes subrogation potential at FNOL and immediately issues a preservation of evidence letter to the responsible party.
- Policy compliance analyst who catches that a manuscript endorsement contradicts the base form's conditions, creating an ambiguity that would be resolved against the carrier in litigation.
- Compliance officer who identifies that a new product filing conflicts with a recent DOI bulletin and flags it before the filing is submitted.
- Renewal specialist who benchmarks a client's program against market alternatives and documents why the current structure is optimal (or recommends changes), rather than just rubber-stamping the renewal.

### Dangerous Work Looks Like
- Underwriter who binds a habitational risk at minimum rate without checking loss history, building age, or local code compliance — then a fire kills tenants.
- Claims adjuster who denies a claim based on a policy exclusion without first analyzing whether the duty to defend is triggered by the complaint allegations.
- Agent who lets a client's claims-made professional liability policy lapse without arranging tail coverage — past acts are now completely uninsured.
- Compliance analyst who approves a policy form for filing without verifying it meets the state's readability requirements — the form is rejected and the carrier can't write business for 60 days.
- Renewal specialist who auto-renews a large account at expiring terms without noticing that loss experience has deteriorated to a 95% loss ratio — the carrier loses money for another year.

## Professional Certifications

| Certification | Full Name | Issuing Body | Focus |
|---------------|-----------|-------------|-------|
| **CPCU** | Chartered Property Casualty Underwriter | The Institutes | Comprehensive P&C insurance — the gold standard designation. Covers underwriting, claims, risk management, law, and ethics. |
| **CIC** | Certified Insurance Counselor | The National Alliance | Agency-focused designation covering commercial property, commercial casualty, personal lines, life & health, and agency management. |
| **ARM** | Associate in Risk Management | The Institutes | Enterprise risk management principles, risk assessment, and risk treatment. |
| **AIC** | Associate in Claims | The Institutes | Claims investigation, coverage analysis, negotiation, litigation management, and claims management. |
| **AU** | Associate in Commercial Underwriting | The Institutes | Commercial lines underwriting principles, risk analysis, and pricing. |
| **AINS** | Associate in General Insurance | The Institutes | Entry-level designation covering insurance fundamentals, policy contracts, and the business of insurance. |
| **AAI** | Accredited Adviser in Insurance | The Institutes | Agency-focused designation for insurance producers and account managers. |
| **CWCP** | Certified Workers' Compensation Professional | CWCP Board | Specialized in workers' compensation claims, administration, and cost containment. |
| **SCLA** | Senior Claim Law Associate | American Educational Institute | Advanced claims law including coverage analysis, bad faith avoidance, and litigation management. |
| **Series 6/63/65** | FINRA Securities Licenses | FINRA | Required for selling variable life insurance, variable annuities, and other insurance products with securities components. |
