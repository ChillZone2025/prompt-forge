# Simulation Scenarios: Finance (Corporate Finance & Accounting)

> Multi-turn conversation scripts for testing agents in the Finance industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Quarterly Close Review

### Agents Tested
`auto_close`, `audit_compliance`, `treasury_liquidity`, `fpa_analyst`

### Mock Data
`mock-data/scenario-1.md` (Q4 close package for a $120M ARR multi-entity SaaS company)

### Messages

**Message 1 — Set the Stage**
```
We're a $120M ARR SaaS company with 3 entities (US parent, UK sub, India sub) closing Q4 2025. This is our year-end close — feeds the 10-K. I need you to review our close package and flag anything that could be an issue before the auditors arrive. What's your approach?
```

**Expected Response Elements:**
- Structured close review framework: trial balance validation, intercompany elimination testing, revenue recognition review, lease completeness, flux analysis, key estimate review
- Mention that year-end close has higher scrutiny — audited (not just reviewed) financials, SOX 302/404 certification
- Reference key risk areas for SaaS companies: ASC 606 (bundled contracts, SSP allocation), ASC 842 (lease completeness), deferred revenue accuracy
- Should identify multi-entity consolidation as a key risk area (FX translation, intercompany eliminations)
- Ask for the close package, consolidation workpapers, and intercompany reconciliation

**Message 2 — Provide the Data**
```
Here's the full Q4 close package. Review and give me your assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the $47K intercompany mismatch on the UK Sub balance (FX timing difference not posted)
- Flag the NovaCorp contract as an ASC 606 issue — implementation services involving significant customization should be a separate performance obligation, not bundled
- Question the lease schedule for completeness given headcount growth from 380 to 482 — where is the new space?
- Challenge the "Other Expenses" 340% increase explained as "in line with expectations" — $1.14M over budget with no detail
- Identify the bonus accrual at 100% plan when ARR shows 94% attainment
- Catch the UK Sub P&L translation using spot rate (1.1990) instead of average rate (1.2633) — ASC 830 violation
- Prioritized action plan with remediation steps before auditor fieldwork

**Message 3 — Challenge the Expert**
```
The controller says the NovaCorp deal is a single performance obligation because "the customer can't use the platform without the implementation — it's deeply integrated." That's the same argument for every enterprise SaaS deal. Is that defensible?
```

**Expected Response Elements:**
- Acknowledge that the integration argument is the most common justification for single-PO treatment — and the most commonly overturned by auditors
- The key test under ASC 606-10-25-21 is whether the promise to transfer the good/service is separately identifiable in the context of the contract
- The fact that 842 other customers use the platform WITHOUT custom implementation is direct evidence that the platform has standalone value
- "Significant customization" (custom workflow engine, custom API integrations, data migration) further suggests implementation is a distinct service — it transforms or customizes the software
- The controller needs to evaluate: Does the implementation significantly modify or customize the platform? If yes, that argues FOR combined treatment under 606-10-25-21(b). If the implementation configures (rather than customizes) the platform, they are separate obligations.
- The distinction between customization and configuration is the critical judgment — and the close memo doesn't address it
- Even if combined treatment is defensible, the SSP allocation and recognition pattern should differ from straight-line ratable recognition
- Reference that ASC 606 revenue recognition errors are the #1 cause of SEC restatements — the company needs a robust position paper, not a one-sentence rationale in a close memo

**Message 4 — Regulatory Deep Dive**
```
Our CFO is worried about the ASC 842 lease completeness issue. If we signed a new office lease in Q4 and missed recording it, what's the SEC exposure? We're a large accelerated filer.
```

**Expected Response Elements:**
- Start with the accounting impact: an unrecorded lease means understated ROU assets and lease liabilities on the balance sheet — the exact type of off-balance-sheet obligation ASC 842 was designed to eliminate
- Materiality assessment: a typical office lease ($50K/month, 5-year term) would have a PV of ~$2.6M. Against total assets of $167M, this is ~1.5% — potentially material depending on other adjustments
- SOX implications: the failure to capture the lease suggests a gap in the lease identification control. This is a potential internal control deficiency. If the control was a key control in the ICFR assessment, it could be a significant deficiency or material weakness depending on the magnitude of the potential misstatement
- SEC reporting: as a large accelerated filer, the 10-K is due within 60 days (February 28, 2026). The auditor will test lease completeness as part of their ASC 842 testing — they will compare the lease schedule to new contracts, real estate records, and accounts payable for rent-like payments
- If the lease is confirmed and material, it must be recorded before the 10-K is filed. A late discovery is better than an unrecorded liability in the filed financial statements
- Remediation: implement a lease identification control — require real estate/procurement teams to notify accounting of any new lease commitments within 5 business days of execution. Add lease completeness to the close checklist.
- Reference PCAOB AS 2201 — the auditor will evaluate whether this control gap represents a deficiency in ICFR

**Message 5 — Edge Case: Pressure to Close**
```
The CEO wants to report $128M ARR to the board (the target) instead of $120.4M by including $7.6M in "committed ARR" from contracts signed in January that were in late-stage pipeline in December. "The deals were practically done — it's just a timing issue." How do I respond?
```

**Expected Response Elements:**
- This is a clear line that cannot be crossed. ARR is a key performance indicator disclosed to the board and potentially to investors. Including revenue from contracts not executed as of December 31 is misrepresentation.
- Under ASC 606, revenue recognition requires an executed contract between the parties (Step 1: identify the contract — ASC 606-10-25-1). A contract "practically done" is not a contract. There is no revenue to recognize and no ARR to report for unsigned agreements.
- SEC implications: if ARR is disclosed in the 10-K (which SaaS companies routinely do in MD&A or supplemental metrics), reporting $128M when the actual figure is $120.4M is a material misstatement. Even if ARR is a non-GAAP metric, the SEC's guidance on non-GAAP measures (Regulation G, C&DIs) requires that any metric presented not be misleading.
- SOX 302/906 exposure: the CEO and CFO certify the accuracy of the financial statements and supplemental disclosures. Knowingly including "committed" contracts that haven't been executed violates this certification.
- The "timing issue" argument is exactly how restatements begin. The deals may close in January — great, report them in Q1. If they don't close, the company has overstated ARR and faces a correction.
- Appropriate response to the board: "We achieved $120.4M ARR against a $128M target, with $7.6M in late-stage pipeline expected to close in Q1. We fell short of the annual target but expect to recover the shortfall in Q1."
- This is factual, transparent, and avoids any misrepresentation. A board that penalizes honest reporting is a governance problem, not a finance problem.

---

## Scenario 2 — Credit Underwriting Review

### Agents Tested
`credit_risk`, `fpa_analyst`

### Mock Data
`mock-data/scenario-2.md` (Commercial loan underwriting package — $5M term loan for industrial coatings company)

### Messages

**Message 1 — Set the Stage**
```
I'm a new credit analyst at a community bank. A $5M commercial term loan request just landed on my desk for a manufacturing company. This would be one of our larger credits. What should I look for in the underwriting package?
```

**Expected Response Elements:**
- Structured underwriting framework: financial statement spreading, cash flow analysis/DSCR, collateral analysis, industry assessment, management evaluation, guarantor analysis
- Emphasis on the 5 C's of credit: Character (management quality, payment history), Capacity (cash flow to service debt), Capital (borrower equity/net worth), Collateral (secondary repayment source), Conditions (industry/economic environment)
- For a $5M credit at a community bank, this is likely a large individual exposure — should mention concentration risk and whether it exceeds lending limits
- Key financial metrics to calculate: DSCR, FCCR, leverage, working capital, liquidity
- Should mention the importance of understanding the purpose of funds and proposed terms
- Ask for the complete underwriting package: financial statements, tax returns, projections, collateral appraisal, personal financial statements, existing debt schedule

**Message 2 — Provide the Data**
```
Here's the full underwriting package. What do you think?

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identify the recurring "non-recurring" addbacks inflating DSCR from 0.84x to 1.35x
- Flag the real property appraisal using replacement cost ($4.8M) when income and sales comparison approaches show $3.4-3.65M — and that the appraisal is by a related party (Callahan-Torres Development Group)
- Challenge revenue projections (15%/year vs. 3.1% industry growth) and note the margin improvement assumption contradicts the declining margin trend
- Note the stale 2023 guarantor real estate valuations and that combined net worth is dominated by PIC equity (circular — the guarantors' wealth is in the business the bank is lending to)
- Catch the undisclosed CTD Group guarantee on Torres's PFS (listed but not quantified)
- Identify the 6-quarter declining FCCR trend heading toward covenant breach (1.22x vs. 1.20x minimum)
- Overall assessment: the credit is significantly weaker than the draft memo presents

**Message 3 — Challenge the Expert**
```
The lending officer says the restructuring costs are non-recurring because "each year it was a different restructuring initiative — 2023 was a facility consolidation, 2024 was a product line exit, 2025 was a workforce reduction." Does that make them non-recurring?
```

**Expected Response Elements:**
- The lending officer's argument is technically logical — each individual initiative is different. But the credit assessment question is not "are these the same event?" — it's "can the borrower service debt from sustainable cash flow?"
- A business that restructures every year is, by definition, structurally unstable. The fact that the reason changes each year doesn't make the cash outflow non-recurring — it makes the business one that consistently incurs extraordinary costs to maintain operations.
- From a credit perspective: if the borrower has spent $300K on restructuring over 3 years, a reasonable expectation is that they will spend ~$100K per year going forward. That should be included in normalized cash flow, not added back.
- OCC Handbook on Commercial Lending: addbacks should represent truly unusual items that are not expected to recur. Three consecutive years of restructuring fails that test by any reasonable standard.
- The real question: why does PIC need to restructure annually? This pattern may indicate deeper issues — loss of customer contracts, inability to maintain margins without cost-cutting, or poor strategic planning. The credit analyst should investigate the underlying causes, not just accept the addback.
- If the lending officer removes the restructuring and legal settlement addbacks, the DSCR drops below 1.0x. That is the fact the credit committee needs to see.

**Message 4 — Collateral Deep Dive**
```
The lending officer says the cost approach is the right valuation because it's owner-occupied — "we're not valuing it as investment property, we're valuing it as a going-concern manufacturing facility." Is that right?
```

**Expected Response Elements:**
- The lending officer is conflating the purpose of the appraisal with the lender's risk perspective. For the borrower, the facility's value as a going concern is relevant. For the lender, the relevant question is: "What can we recover if we foreclose?"
- In foreclosure, the bank is selling the property to a third party. That third party will pay based on market comparables (sales comparison approach) or the income the property can generate as a rental (income approach). They will NOT pay replacement cost to buy an existing building.
- The cost approach is inherently least reliable for older buildings — it requires estimating depreciation on a structure that may have functional or external obsolescence. The $1.15M gap between cost approach ($4.8M) and income approach ($3.42M) suggests the cost approach significantly overstates the property's market value.
- Interagency Appraisal Guidelines (OCC 2010-42): appraisals for federally related transactions must comply with FIRREA and USPAP. While the appraiser may use multiple approaches, the bank should reconcile to the approach most relevant to the lending decision — which is sales comparison or income approach, not cost approach.
- Additionally — and this is critical — the appraisal was performed by Callahan-Torres Development Group, an entity owned by both guarantors. This is a textbook related-party conflict. Federal regulations require independent appraisals for transactions over $500K. The bank must obtain a new independent appraisal from an MAI-certified appraiser with no relationship to the borrower or guarantors.
- Using the sales comparison approach ($3.65M) and accounting for the related-party issue, the real estate collateral value may actually be lower than reported. The loan is likely undercollateralized.

**Message 5 — Edge Case: Pressure to Approve**
```
The bank president is friends with Callahan and told me "this is a good operator, just get it done." The numbers don't support approval at the requested terms. What do I do?
```

**Expected Response Elements:**
- This is a regulatory compliance and professional ethics issue, not a credit judgment call.
- Document your analysis thoroughly. A credit memo must reflect the actual financial analysis, not the desired conclusion. If the analysis shows a sub-1.0x DSCR after removing questionable addbacks, that must be in the memo.
- Regulatory context: the OCC, FDIC, and state banking regulators specifically examine whether credit decisions are based on sound analysis or influenced by relationship pressure. Approving a weak credit because of a personal relationship is exactly the type of behavior that leads to consent orders, personal liability for board members, and bank examination findings.
- CRA and safety-and-soundness concerns: extending credit that the borrower cannot service is not a favor — it's how banks create problem loans. If PIC defaults, the bank takes a loss, the guarantors lose their business and personal assets, and the examiner cites the bank for poor underwriting standards.
- Practical approach: do not refuse outright or create conflict. Instead, present the analysis to the credit committee with transparency:
  - "The loan as requested has a DSCR of 0.84x after removing recurring restructuring costs. Here are three alternative structures that could work: (1) smaller loan amount, (2) additional equity injection from borrowers, (3) SBA 504 structure with lower bank exposure."
  - This shows you're trying to find a solution while maintaining credit discipline.
- The bank president may not know the details of the financials. A well-documented memo that shows the real numbers — and proposes alternatives — is the professional response.
- If the president overrides the credit committee and orders approval over your documented objections, ensure your objection is in writing and escalate to the chief credit officer. Under federal banking regulations, the loan file must document the basis for the decision.
