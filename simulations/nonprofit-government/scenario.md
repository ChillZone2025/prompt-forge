# Simulation Scenarios: Nonprofit & Government

> Multi-turn conversation scripts for testing agents in the Nonprofit & Government industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Federal Grant Application Review

### Agents Tested
`grant_writer`, `impact_report`, `policy_analyst`

### Mock Data
`mock-data/scenario-1.md` (HRSA New Access Points grant application for community health center)

### Messages

**Message 1 — Set the Stage**
```
We're applying for an HRSA New Access Points grant to open a second community health center site in a rural Appalachian county. The application is due in two weeks and I need a thorough review before submission. What's your framework for evaluating a federal grant application of this size?
```

**Expected Response Elements:**
- Structured review framework covering all HRSA NAP review criteria (Need, Response, Evaluative Measures, Impact, Organizational Capacity)
- Reference to the NOFO requirements as the primary evaluation standard
- Mention of common fatal flaws: budget-narrative misalignment, match shortfall, eligibility errors
- Framework should include compliance checks (SAM.gov, UEI, Grants.gov registration)
- Should ask for the full application package including budget, narrative, biosketches, and letters of support
- Mention reviewing prior grant performance as a component of organizational capacity

**Message 2 — Provide the Data**
```
Here's the full application package. Review it against HRSA NAP criteria and flag any issues that would reduce our score or make us ineligible:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the indirect cost rate error (25% applied vs. 15% NICRA) — this is a fatal budget error
- Flag the patient volume impossibility (5,000 patients with 2 FTE providers — the math doesn't work)
- Catch the matching funds shortfall (18% documented vs. 25% required)
- Identify the outdated biosketch for Dr. Lindholm who left the organization
- Flag the 35% underspending on current HRSA grant as a capacity red flag
- Note the evaluation plan weakness (pre/post only, no comparison group)
- Provide a prioritized remediation plan with the fatal flaws first
- Calculate the actual federal budget against the $650K/year award ceiling

**Message 3 — Challenge the Expert**
```
Our CFO says we can use a 25% indirect cost rate because "that's what other health centers charge." Our NICRA says 15%. Who's right and what happens if we submit with 25%?
```

**Expected Response Elements:**
- The CFO is wrong. Under 2 CFR 200.414, the organization must use its current NICRA when charging indirect costs to federal awards
- The fact that other health centers have 25% rates is irrelevant — each organization negotiates its own rate based on its actual indirect cost pool
- Submitting a budget with a 25% rate when the NICRA specifies 15% will result in one of two outcomes: (a) HRSA budget reviewers will catch it and reduce the indirect costs, potentially making the budget unworkable, or (b) if somehow approved, it would be flagged in a future audit as an unallowable cost, requiring repayment
- The inflated rate contributes to the federal request exceeding the $650K/year ceiling — a compounding problem
- Organizations can renegotiate their NICRA, but that process takes months and the current rate applies until a new agreement is executed
- Recommend resubmitting the budget at 15% and restructuring direct costs to make the project viable within the award ceiling

**Message 4 — Capacity Deep Dive**
```
An HRSA reviewer will see our 35% underspending on the current Section 330 grant. How bad is this, and how do we address it in the application?
```

**Expected Response Elements:**
- This is a significant red flag. HRSA tracks grantee performance through BPHC data systems, and 35% underspending on a $1.8M grant ($630K unspent) signals serious capacity concerns
- Underspending driven by provider vacancies is particularly damaging when the new application is requesting funding to hire more providers at a new site
- The logical reviewer question: "If you can't fill positions at your existing site, why should we fund you to open a new one?"
- The application must address this proactively, not hope reviewers won't notice — they will
- Recommended narrative approach: (1) acknowledge the challenge transparently, (2) describe specific new recruitment strategies (NHSC loan repayment, relocation incentives, partnership with medical schools), (3) present evidence these strategies are working (current recruitment pipeline, letters of intent from candidates), (4) explain what has changed structurally
- The underspending also connects to the patient volume projection — claiming 5,000 patients when the existing site is operating at 82% of its patient target further undermines credibility
- Consider whether the budget should be more conservative in Year 1 with a documented ramp-up plan

**Message 5 — Edge Case: The Departed Key Personnel**
```
Our Quality Director left two months ago and she's still listed as the Quality & Evaluation Lead on this application with her old biosketch. Our CEO says "just leave it — we'll find someone before the grant starts." Is that acceptable?
```

**Expected Response Elements:**
- Absolutely not. Submitting a biosketch for someone who no longer works at the organization is a material misrepresentation in a federal grant application
- HRSA and all federal agencies require that key personnel information be current and accurate at the time of submission
- If discovered during review (e.g., a reviewer calls the organization or checks LinkedIn), it will damage the organization's credibility and raise questions about the integrity of the entire application
- If discovered after award, it could constitute a false statement in a federal grant application — a serious compliance violation
- The vacancy also creates a substantive problem: the person responsible for implementing the evaluation plan is not available, and the evaluation plan is already weak
- Recommended approach: (1) remove Dr. Lindholm from the application, (2) either name an interim Quality & Evaluation Lead with a current biosketch or describe the recruitment plan for this position with a timeline, (3) strengthen the evaluation plan to demonstrate the organization's evaluation capacity beyond one individual
- If BCHA cannot identify a qualified evaluation lead, consider partnering with a university evaluation team — this actually strengthens the application by adding independent evaluation capacity
- Honesty about organizational transitions is always better than misrepresentation — reviewers respect transparency

---

## Scenario 2 — Nonprofit Operations Assessment

### Agents Tested
`constituent_service`, `volunteer_coord`, `impact_report`

### Mock Data
`mock-data/scenario-2.md` (mid-size nonprofit annual operations review)

### Messages

**Message 1 — Set the Stage**
```
I'm the new board chair of a mid-size nonprofit and I've inherited a mess. The previous chair barely engaged. I need a comprehensive assessment of our organizational health before our state contract comes up for rebid. What should I be looking at?
```

**Expected Response Elements:**
- Structured organizational health assessment framework covering financial stability, program effectiveness, governance, compliance, human resources, and stakeholder relationships
- Emphasis on the contract rebid as the organizing priority — everything should be evaluated through the lens of "will this help or hurt our rebid?"
- Flag revenue diversification as a critical area given contract dependency
- Mention board governance assessment as a starting point given the described leadership vacuum
- Should ask for financial statements, program data, board records, compliance documentation, and staff/volunteer metrics
- Reference the Balanced Scorecard for Nonprofits or similar framework

**Message 2 — Provide the Data**
```
Here's our full operations package — financials, program data, volunteer metrics, board records, and compliance status. Give me the honest assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Lead with the existential risk: 65% revenue concentration in a contract up for rebid in 6 months, with no preparation underway
- Identify the overhead ratio misrepresentation as a serious integrity issue (18% reported publicly vs. 34-42% actual)
- Flag the board governance crisis (quorum failed 4 of 6 meetings, no compensation committee, no CEO review since 2022)
- Highlight the volunteer retention collapse (41% → 28% over 3 years) and the cost trajectory
- Call out the complete absence of outcomes measurement across all programs
- Note the CEO compensation governance gap (no comparability study, no compensation committee, IRC 4958 risk)
- Prioritize recommendations by urgency: (1) contract rebid preparation, (2) governance remediation, (3) overhead ratio correction, (4) outcomes measurement, (5) volunteer program redesign
- Frame findings constructively but do not sugarcoat — the board needs to hear the truth

**Message 3 — Challenge the Expert**
```
Our CFO says the overhead ratio reporting is "standard practice" and "every nonprofit allocates costs to look better." He says Charity Navigator penalizes high overhead so we have to do this. Should I be concerned?
```

**Expected Response Elements:**
- The CFO's claim that "every nonprofit does this" is wrong, and even if it were true, it wouldn't make it acceptable
- There is a difference between reasonable allocation methodology (where judgment is involved) and deliberate misclassification (where internal workpapers document one allocation while the 990 reports another)
- The internal workpaper showing the CEO's actual time at 40% admin while reporting 100% program is not an allocation judgment call — it is a documented misrepresentation
- Charity Navigator has explicitly moved away from penalizing overhead through its Encompass Rating System — the "overhead myth" has been debunked by the sector (see the "Overhead Myth" letter signed by GuideStar, BBB Wise Giving Alliance, and Charity Navigator)
- The legal risks are real: (1) Form 990 is signed under penalties of perjury; (2) state attorneys general can investigate misrepresentation to donors; (3) donors who gave based on the 18% overhead claim could allege fraud; (4) the state contract likely has audit clauses that could uncover the discrepancy
- This is not a disagreement about methodology — the organization has internal documentation showing the actual allocation differs from what was reported
- Recommend: engage an independent CPA to develop a defensible cost allocation methodology, restate the 990 if material, and stop using the 18% figure immediately

**Message 4 — Governance Crisis**
```
We haven't had quorum in 4 of our last 6 board meetings. Two members barely show up and we have 3 empty seats. How bad is this and what do I do first?
```

**Expected Response Elements:**
- This is a governance crisis, not an inconvenience. Without quorum, the board cannot legally transact business — any votes taken without quorum are voidable
- The July 2025 meeting with 3 members and no minutes is particularly concerning — if any decisions were made or implied, they have no legal standing
- The September approval of the CEO contract renewal should be reviewed — verify quorum was actually present and the vote was properly recorded
- Immediate actions: (1) recruit at minimum 3 new board members to fill vacant seats and restore reliable quorum, (2) have a direct conversation with Dr. Reeves (33% attendance) and Margaret Stone (17%) about their commitment — they should either re-engage or resign, (3) consider amending bylaws to reduce board size or quorum threshold if 9 members is unrealistic
- Governance remediation priorities: establish a compensation committee before the next CEO compensation decision, conduct a CEO performance review (overdue since 2022), update all governance policies (conflict of interest hasn't been reviewed since 2021), collect missing conflict-of-interest disclosures from the 2 non-compliant board members
- Connect to the contract rebid: state funders evaluate governance as part of contract due diligence — a board that can't meet quorum will raise red flags with the contracting agency
- Connect to the CEO compensation issue: the IRS rebuttable presumption of reasonableness requires an authorized body using comparability data with contemporaneous documentation — RYFS has none of these

**Message 5 — Edge Case: The Outcomes Measurement Gap**
```
Our state contract is up for rebid in 6 months and the new RFP will almost certainly require outcomes data. We've never measured outcomes — only outputs. Is it too late? What can we realistically do in 6 months?
```

**Expected Response Elements:**
- It is not too late to start, but be honest: 6 months is not enough time to build a rigorous outcomes measurement system with longitudinal data — the organization needs a realistic plan, not a perfect one
- What can be done in 6 months: (1) implement pre/post assessments using validated instruments for at least 2 programs (youth mentoring and workforce development are the best candidates because they have clearest outcome pathways), (2) establish data sharing agreements with the school district and employers for secondary outcomes data, (3) begin collecting baseline data immediately so you have at minimum 4-5 months of before/after data by rebid time
- Validated instruments to deploy quickly: youth mentoring could use the Search Institute's Developmental Assets Profile or the YOQ (Youth Outcome Questionnaire); workforce development could use employment verification at 30/60/90 days post-completion
- For the rebid proposal: present a measurement framework showing the logic model (inputs → outcomes), instruments selected, data collection timeline, and preliminary data — funders value a credible plan even if the data set is limited
- What to avoid: do not fabricate outcomes data, do not present output data as outcomes data, do not overpromise measurement capacity you cannot deliver
- Longer-term: engage a university evaluation partner to design a proper outcomes evaluation with comparison groups, validated instruments, and appropriate statistical methods
- Connect to the overhead ratio issue: outcomes measurement requires investment in data systems and evaluation staff — organizations that suppress reported overhead often underinvest in exactly these capabilities
- The absence of outcomes data after 16 years of operation is itself a finding that the state will notice — acknowledge it and show the plan to address it
