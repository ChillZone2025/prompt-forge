# Evaluation Criteria: Insurance

## Overview

These criteria evaluate whether Insurance agents demonstrate genuine industry knowledge — the kind that separates a real underwriter, adjuster, or compliance professional from someone who read a policy summary on Investopedia. A CPCU, experienced claims adjuster, or senior underwriter should read the agent's output and think "this person has handled real files."

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate
- **Coverage analysis accuracy** — Correctly identify what is and isn't covered under a given policy form. Reference specific coverage parts, conditions, and exclusions — not just general principles. Know the difference between named perils and open perils, claims-made and occurrence, admitted and surplus lines.
- **Regulatory awareness** — Know that insurance is state-regulated. Reference relevant DOI requirements, NAIC model laws, and state-specific fair claims settlement practices. Understand filing requirements, market conduct obligations, and solvency standards.
- **Claims handling procedures** — Follow proper FNOL-to-settlement workflow. Set appropriate reserves. Investigate before deciding coverage. Document everything. Know the difference between duty to defend and duty to indemnify.
- **Underwriting discipline** — Evaluate risk based on data, not relationships. Request and review loss runs. Verify classifications. Apply filed rates. Identify coverage gaps, moral hazards, and adverse selection indicators.
- **Customer communication** — Explain coverage decisions in plain language. Manage expectations without making promises. Document conversations. Know when to involve legal counsel.
- **Financial literacy** — Understand loss ratios, combined ratios, reserve development, and how underwriting decisions impact carrier profitability. Know the difference between earned and written premium, incurred and paid losses.

### Must Never
- Accept a claim demand at face value without independent investigation and coverage analysis.
- Recommend paying an inflated claim simply to avoid litigation or preserve a relationship.
- Bind coverage without reviewing loss runs, verifying classifications, or checking driver MVRs.
- Ignore coinsurance provisions, waiting periods, or policy conditions that affect claim payments.
- Approve underwriting exceptions based solely on broker relationship or premium volume.
- Overlook subrogation opportunities or fail to preserve evidence.
- Provide coverage opinions without referencing specific policy language.
- Ignore state-specific regulatory requirements or assume all states follow the same rules.

## Agent-Specific Criteria

### Claims Agent (`claims_agent`)
- Follows structured FNOL-to-settlement workflow: acknowledge, investigate, reserve, determine coverage, negotiate, settle.
- Identifies all applicable coverages AND exclusions before making coverage recommendations.
- Catches coinsurance penalties, waiting periods, and valuation disputes (RCV vs. ACV).
- Recognizes subrogation potential at first notice and takes preservation steps immediately.
- Calculates business income correctly using net income + continuing expenses, not gross revenue.
- Separates covered from non-covered property (business vs. personal items in commercial claims).
- Addresses bad faith allegations with specific regulatory knowledge — timelines, documentation requirements, and statutory obligations.
- Knows when to involve coverage counsel vs. handling in-house.
- Sets reserves based on realistic exposure analysis, not optimistic or pessimistic estimates.

### Underwriter (`underwrite`)
- Evaluates risk using multiple data sources: applications, loss runs, MVRs, financial statements, inspections.
- Catches discrepancies between broker narratives and underlying data (loss ratio trends, MVR details, coverage gaps).
- Identifies adverse selection indicators: non-renewal by prior carrier, overinsured assets, rapid growth without infrastructure.
- Applies appropriate classification codes and verifies they match actual operations.
- Recognizes when coverage gaps in a submission indicate undisclosed exposures (hazmat operations, pollution liability).
- Resists relationship-based pricing pressure with data-driven analysis.
- Recommends specific, enforceable policy conditions and loss control requirements — not generic safety platitudes.
- Understands the difference between standard, specialty, and surplus lines market placement.
- Knows when to decline, when to write with conditions, and when to refer to a specialty market.

### Policy Compliance Analyst (`policy_comp`)
- Reviews policy forms for internal consistency — endorsements that contradict base form conditions.
- Verifies policy language meets state-specific readability and filing requirements.
- Identifies ambiguities that would be construed against the carrier under contra proferentem.
- Ensures endorsements match the quote and binder — no coverage gaps introduced during issuance.
- Knows ACORD form standards and when manuscript endorsements require separate DOI filing.
- Catches anti-stacking provisions, other insurance clauses, and coordination of benefits issues.
- Understands the difference between ISO, AAIS, and proprietary policy forms.

### Insurance Compliance Officer (`ins_compliance`)
- Knows state DOI filing requirements for rates, rules, and forms.
- Monitors regulatory changes — NAIC model law adoptions, DOI bulletins, legislative updates.
- Understands market conduct examination procedures and how to prepare for them.
- Identifies unfair trade practice violations before they trigger regulatory action.
- Knows anti-rebating laws by state and exceptions (California, Florida, Ohio).
- Ensures surplus lines compliance — diligent search documentation, tax filings, and stamping office requirements.
- Manages producer licensing compliance across multiple states.
- Understands HIPAA obligations for health insurance operations and PHI handling.

### Client Intake Specialist (`client_intake`)
- Gathers complete exposure data at intake — not just what the client volunteers.
- Asks probing questions to uncover undisclosed operations, locations, and hazards.
- Identifies coverage gaps in expiring programs by comparing current to proposed.
- Documents client conversations with precision — what was asked, what was answered, what was recommended.
- Knows which ACORD forms are required for each line of business.
- Understands the difference between a binder, a quote, and a policy — and communicates that to clients.
- Recognizes when a risk needs specialty market placement vs. standard market.

### Renewal Specialist (`renewal_spec`)
- Reviews expiring program against current exposure — doesn't rubber-stamp renewals.
- Analyzes loss experience trends and their impact on renewal pricing and terms.
- Benchmarks current program against market alternatives before recommending renewal.
- Identifies coverage enhancements or reductions that should be discussed with the client.
- Calculates experience modification factors and their impact on workers' comp renewals.
- Manages renewal timelines to avoid gaps in coverage — especially for claims-made policies requiring tail coverage.
- Documents renewal recommendations with data-driven justification.

## Planted Issues Reference

### Scenario 1 — Warehouse Fire Claim (tests `claims_agent`)
| # | Issue | What the Agent Should Catch |
|---|-------|-----------------------------|
| 1 | Coinsurance penalty | Building insured at $2M but replacement cost is ~$2.8M. 80% coinsurance clause means required insurance is $2.24M. Penalty reduces building payout by ~$128,571. |
| 2 | Sprinkler inspection non-compliance | Last inspection March 2024. Policy requires annual certification. Broker reminder sent Sept 2025 — no response. Potential coverage defense for fire equipment endorsement. |
| 3 | BI calculation uses gross revenue | CPA used $1.25M/month gross revenue. Correct method is net income + continuing expenses. Overstates BI claim by approximately 40%. |
| 4 | Personal property in contents claim | $53,000 in owner's personal items (artwork, golf clubs, family photos) mixed into business contents. Not covered under commercial policy. |
| 5 | Subrogation evidence not preserved | Electrical contractor (Apex) likely caused the fire. No spoliation notice sent. Fire scene released. Owner planning cleanup/demolition. Evidence at immediate risk. |
| 6 | 72-hour BI waiting period not applied | Policy has 72-hour waiting period for business income. Not reflected in policyholder's BI calculation. |

### Scenario 2 — Fleet Underwriting (tests `underwrite`)
| # | Issue | What the Agent Should Catch |
|---|-------|-----------------------------|
| 1 | Three uninsurable drivers | D-004 (HOS + logbook + following too closely), D-008 (DUI reduced to reckless + speeding), D-017 (overweight + unsafe lane change + expired CDL). Buried in MVR appendix, not in broker summary. |
| 2 | Loss ratio trend misrepresented | Broker says "stable" — actual trend is 45% → 52% → 58% → 67% → 74%. Clear deterioration. Non-renewal contradicts broker's "carrier exiting segment" explanation. |
| 3 | Hazmat exposure without required coverage | Operations footnote reveals cleaning chemicals and industrial solvents (49 CFR regulated). MCS-90 endorsement and pollution liability not requested. Only 4 of 28 drivers have hazmat endorsements. |
| 4 | Overinsured older trucks | Units #138 and #139 (15-16 years old) listed at $85,000 each. Actual market value is $10,000-$15,000. Moral hazard indicator. |
| 5 | Fleet growth without safety infrastructure | 36% fleet growth in one year, no dedicated safety director, operations manager handles safety + dispatch. Loss frequency correlating with growth period. |

## Red Flags — Automatic Score Reduction

The following responses indicate fundamental competency gaps:

- **Missing coverage gaps:** Failing to identify the coinsurance penalty, the BI calculation error, or the personal property issue demonstrates inability to read a policy.
- **Ignoring coinsurance:** Coinsurance is one of the most common and consequential policy provisions in commercial property. Missing it is disqualifying.
- **Accepting claims at face value:** Taking the policyholder's or public adjuster's demand without independent analysis shows no claims investigation instinct.
- **Underwriting without loss analysis:** Recommending writing a risk without analyzing loss trends is the underwriting equivalent of malpractice.
- **Compliance shortcuts:** Ignoring state-specific requirements, filing obligations, or regulatory timelines.
- **Relationship-based decisions:** Recommending paying inflated claims or discounting rates because of broker relationships rather than data.
- **Missing subrogation:** Failing to identify or act on subrogation opportunities when a third-party cause is evident.
- **Generic advice:** Responses that could apply to any industry ("review the policy carefully," "document everything") without insurance-specific substance.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | **Expert practitioner.** Catches all planted issues. References specific policy provisions, regulatory codes, and industry standards. Calculations are correct (coinsurance penalty, BI methodology). Recommendations are specific and actionable. A CPCU would trust this output. |
| 7-8 | **Solid professional.** Catches most planted issues (4-5 of 6 in Scenario 1, 3-4 of 5 in Scenario 2). Uses correct terminology and methodology. Minor gaps in depth or misses a nuance, but no fundamental errors. Recommendations are sound. |
| 5-6 | **Surface-level knowledge.** Catches obvious issues but misses subtle ones (coinsurance, BI calculation errors, overinsured trucks). Uses industry terminology but sometimes incorrectly. Gives general recommendations without specifics. |
| 3-4 | **Generic insurance knowledge.** Identifies that "there are coverage issues" but can't specify what they are. Doesn't reference policy language or regulatory requirements. Advice could come from a Google search. |
| 1-2 | **Wrong or dangerous advice.** Recommends paying inflated claims without investigation. Writes risks without loss analysis. Ignores regulatory requirements. Gives advice that would create E&O liability for a real professional. |

## Pass Thresholds

- **Tier 2 (Conversation Test):** Minimum 7.0/10
- **Tier 3 (Full Simulation):** Minimum 8.0/10

A Tier 3 pass requires catching at least 5 of 6 planted issues in Scenario 1 and 4 of 5 in Scenario 2, with correct methodology on coinsurance calculations and BI calculations. The agent must also demonstrate appropriate resistance to pressure (bad faith threats, broker leverage, VP override requests) without either capitulating or being unnecessarily adversarial.
