# Simulation Scenarios: Recruitment & Staffing

> Multi-turn conversation scripts for testing agents in the Recruitment & Staffing industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Quarterly Recruiting Operations Review

### Agents Tested
`employer_brand`, `job_desc`, `offer_letter`, `recruit_pipe`, `source_agent`

### Mock Data
`mock-data/scenario-1.md` (Q1 recruiting dashboard for a 400-person tech company)

### Messages

**Message 1 — Set the Stage**
```
We're a 400-person cybersecurity SaaS company with 25 open reqs. The Head of Talent says our recruiting metrics are improving — TTF is down to 32 days, and we have 40% diverse candidates in our pipeline. I need an independent assessment of our recruiting operations. What's your framework for a quarterly review?
```

**Expected Response Elements:**
- Structured review framework covering pipeline health, funnel conversion rates, source-of-hire effectiveness, cost-per-hire analysis, offer acceptance trends, quality-of-hire indicators, and diversity metrics by funnel stage
- Should explicitly state that headline metrics (TTF, top-of-funnel diversity) need to be validated against underlying data — surface metrics often mask problems
- Ask for the full recruiting dashboard including requisition-level data, source breakdowns, cost data, offer outcomes, and diversity by stage
- Mention that TTF definition matters (from req approval? from posting? from first candidate?) and should be verified
- Framework should include hiring manager engagement and agency performance as standard review areas

**Message 2 — Provide the Data**
```
Here's the full Q1 recruiting dashboard. Give me the unvarnished assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the TTF measurement discrepancy (reported as 32 days but actual from approval to hire is 34.4 days, with a systematic 6+ day gap between approval and posting)
- Flag employee referrals as highest-quality, lowest-cost channel with $0 investment — recommend a formal referral program
- Identify the 4 zombie requisitions (90+ days open, zero pipeline) and trace root cause to hiring manager disengagement
- Call out the offer acceptance rate collapse (88% to 71%) driven by below-market compensation on 3 key roles
- Expose the diversity drop-off between phone screen and offer (40% to 8%) as the critical DEI failure, not top-of-funnel
- Flag the agency spend problem ($340K/year, 3 agencies with zero placements, $156K in retainers for zero return)
- Prioritized action plan with the highest-impact items first

**Message 3 — Challenge the Expert**
```
The Head of Talent pushes back: "Our TTF of 32 days is below industry average of 44 days, our diverse pipeline is at 40%, and our agency relationships give us surge capacity. The real problem is hiring managers being too picky." How do you respond?
```

**Expected Response Elements:**
- TTF rebuttal: The 32-day figure is measured from an inconsistent starting point and understates reality. The actual hiring manager experience is 34.4 days from req submission to acceptance. More importantly, 4 reqs have been open 90+ days and aren't included in the "average" because they haven't resulted in hires yet — survivorship bias in the metric
- Diversity rebuttal: 40% diverse pipeline is a sourcing metric, not a hiring metric. Only 9.7% of hires are diverse. The massive drop-off at interview-to-offer (23.2% vs. 34.6% conversion for diverse vs. overall) points to structural bias in the interview process, not a sourcing problem
- Agency rebuttal: "Surge capacity" you're paying $156K in retainers for isn't surging anything — 3 agencies have zero placements. The 2 retained agencies (Sterling, Apex retainer) are engaged on roles where the hiring managers won't review candidates. The agencies cannot succeed.
- "Picky hiring managers" rebuttal: In 2 of 4 stale req cases, the issue isn't pickiness — it's complete disengagement (CEO hasn't reviewed any of Sterling's 6 submissions for VP Marketing; Chen hasn't looked at 14 sourced candidates for Director of Engineering). One req (Marketing Manager) has no hiring manager at all because it reports to the open VP Marketing role.
- Constructive framing: these are fixable operational issues, not character flaws. Recommend specific actions with owners and timelines.

**Message 4 — Deep Dive on Compensation**
```
The CFO says we can't increase compensation bands because "we're pre-profitability and need to preserve runway." But we're losing 7 out of 11 offer declines to compensation. What's the business case?
```

**Expected Response Elements:**
- Quantify the cost of declined offers: 11 declined offers x (recruiter hours + interview panel hours + pipeline rebuild time) = substantial wasted investment. Estimate $8,000-$15,000 per declined offer in fully-loaded costs.
- The 3 roles with repeated declines (Staff Security Engineer, Sr. AE, Enterprise AE) are revenue-critical — security for a cybersecurity company and quota-carrying sales roles. Unfilled sales seats have direct revenue impact.
- Staff Security Engineer has been declined twice by two different candidates citing identical reason (below market). Each cycle wastes 2-3 months. The role has been effectively vacant for 4+ months.
- Frame it as ROI: increasing comp bands by 12-15% for the 3 problem roles costs ~$60-80K/year in incremental salary. The company is currently spending more than that on agency fees, recruiter time, and interview hours trying to fill these roles at below-market rates.
- Alternative levers if base salary is truly constrained: equity acceleration, signing bonuses, title adjustments, remote flexibility, professional development budgets
- Reference the Radford market data already in the dashboard — the gap is documented, not speculative
- Risk framing: in cybersecurity, an understaffed security team for a security company is both an operational risk and a credibility problem with customers and investors

**Message 5 — Edge Case: Diversity Program Design**
```
The CEO wants to announce a "commitment to hiring 30% diverse candidates by year-end" at the next board meeting. Currently we're at 9.7%. Is this the right approach?
```

**Expected Response Elements:**
- The goal is directionally right but the framing and approach are wrong in multiple ways
- Legal risk: a public commitment to hire 30% diverse candidates could be construed as a quota. Under Title VII and EEOC guidance, quotas are illegal — goals are permissible, but they must be aspirational targets paired with process improvements, not rigid hiring mandates. The distinction matters, especially if non-diverse candidates who are rejected bring reverse discrimination claims.
- The 9.7% hire rate is not a sourcing problem — it's an interview-to-offer conversion problem. The company already sources 40% diverse candidates. Announcing a hiring target without fixing the interview process will either (a) fail because the same biased process continues, or (b) pressure hiring managers into legally questionable selection decisions.
- What actually needs to happen: structured interviewing with calibrated scorecards (reduces subjectivity that drives disparate impact), interviewer training with emphasis on scoring criteria not "culture fit," diverse interview panels, blind resume review pilot, and stage-by-stage diversity tracking with monthly reviews
- Offer acceptance gap: diverse candidates accept at 50% vs. 73.8% overall. This may indicate compensation inequity or candidate experience issues that also need investigation.
- Better board framing: "We're implementing structured hiring practices and stage-by-stage diversity tracking to eliminate the drop-off between our diverse pipeline (40%) and diverse hires (9.7%). Our target is to close this gap by X% by year-end, measured by conversion rate improvement at each stage."
- Reference NYC Local Law 144 if the company uses AI screening tools — bias audits are required and relevant to this discussion

---

## Scenario 2 — Contingent Workforce Program Review

### Agents Tested
`contingent_mgmt`, `recruit_pipe`, `source_agent`

### Mock Data
`mock-data/scenario-2.md` (Contingent workforce program for a 680-person financial services company)

### Messages

**Message 1 — Set the Stage**
```
We're a financial services company with 680 FTEs and 120 contractors across 8 staffing agencies. Our HR manager handles the contingent program as 30% of her role. The CFO is asking why our contingent spend keeps climbing and wants a full program review. What should we assess?
```

**Expected Response Elements:**
- Structured program review framework covering: spend analysis, rate card compliance, agency performance, co-employment risk assessment, background check compliance, tenure analysis, worker classification review, and technology/systems evaluation
- Flag that a 120-contractor program managed as 30% of one person's job with no VMS is a red flag — industry standard for this spend level ($18M+) is a dedicated contingent workforce program manager and a VMS platform
- Ask for contractor roster with tenure, bill rates, rate card comparisons, agency performance data, background check status, and worker classification indicators (who supervises, what tools, what schedule)
- Mention that financial services has heightened regulatory requirements (FINRA, state regulators) for workforce compliance and background screening
- Framework should include co-employment risk as a top-tier assessment area, not an afterthought

**Message 2 — Provide the Data**
```
Here's the complete contingent workforce data. Tell me what you find:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the co-employment crisis: 15 contractors at 19+ months tenure performing identical work to FTEs, with 13 of 16 IRS factors indicating employee relationship. This is the highest-priority finding.
- Flag rate card non-compliance: 64% compliance rate, $911K annual overage, rate card 20 months stale, agencies billing above approved rates with no automated detection
- Call out Apex Talent's 45% 90-day turnover as a quality crisis requiring immediate intervention (PIP or termination)
- Identify the 8 contractors with no background check — especially C-025 (EA to CEO) and C-008 (26 months, no check ever)
- Quantify the insource opportunity: $301K savings from converting the top 3 long-tenure contractors to FTE
- Flag the three-spreadsheet tracking system as an operational and compliance failure for an $18.4M program
- Prioritized remediation plan: (1) co-employment, (2) background checks, (3) rate card, (4) agency performance, (5) VMS implementation

**Message 3 — Challenge the Expert**
```
The Engineering VP says: "Those contractors have been here for 3 years because they're great. Converting them to FTE means they'd cost more with benefits, and I'd lose flexibility. The agencies handle the compliance stuff — that's what we pay them for." Is he right?
```

**Expected Response Elements:**
- He is wrong on every point, and these misconceptions are how companies end up in co-employment lawsuits.
- "They're great" is exactly the problem — the longer high-performing contractors stay in FTE-identical roles, the stronger the misclassification case becomes. The IRS doesn't care if they're great; the IRS cares whether they're actually employees.
- "Cost more with benefits" is backwards: the fully-loaded FTE cost is $88-$95/hr vs. contractor bill rates of $135-$145/hr. Even after adding benefits (healthcare, 401k, PTO, payroll taxes), the FTE cost is 35-65% less. The agencies are taking a 30-40% margin on top of what the worker actually earns.
- "Lose flexibility" — these workers have been here 31-38 months. There is no flexibility being exercised. They are de facto permanent employees. True flexibility means contractors who come and go for defined projects, not people who've onboarded new FTEs and know all the legacy systems.
- "Agencies handle compliance" — the agencies handle payrolling and invoicing. They do not handle co-employment risk. Co-employment liability falls on the company that exercises control over the work, not the staffing agency. If the IRS or DOL classifies these workers as employees, Meridian owes the back taxes, not AlphaStaff.
- Provide specific legal precedent context: Vizcaino v. Microsoft is the landmark case establishing that long-term temps performing FTE-identical work are entitled to employee benefits. Financial exposure includes back FICA (employer share), retroactive benefits eligibility, state unemployment insurance, and penalties.

**Message 4 — Compliance Deep Dive**
```
How serious is the background check gap, really? The agencies were supposed to handle background checks as part of their contracts. Can we just tell them to get it done?
```

**Expected Response Elements:**
- The gap is serious, especially for a financial services company.
- FCRA compliance: even when agencies run background checks, the employer has obligations. If adverse information is found now (26 months into an engagement for C-008), the company faces a difficult situation — taking adverse action based on a background check that should have been run at onboarding creates FCRA liability and potential wrongful termination exposure.
- FINRA regulatory exposure: financial services companies are expected to conduct thorough background screening for all personnel with access to client data and financial systems. Regulators don't accept "the agency was supposed to do it" as an excuse.
- C-025 (Jessica Taylor, EA to CEO) is a particularly acute risk — she has access to board materials, M&A information, investor communications, and executive financial data. No background check was ever conducted.
- C-039b (temp admin) wasn't even in the tracking system — discovered during this review. If this person has access to client data and something goes wrong, the company cannot demonstrate any diligence.
- Immediate actions: (1) run background checks on all 8 missing contractors within 5 business days, (2) re-screen all 8 contractors with expired checks (24+ months), (3) audit agency contracts to verify background check requirements are explicit and include rescreening provisions, (4) implement a tracking system that flags expiring background checks 60 days in advance
- Going forward: background check status should be a hard gate — no contractor starts work without a completed, clear background check. No exceptions, no "we'll get it done next week."
- The contractual claim against agencies may be valid — if their contracts require background checks and they failed to perform them, the agencies are in breach. But the regulatory liability still sits with Meridian.

**Message 5 — Edge Case: VMS Business Case**
```
I want to implement a VMS but the CFO says it's "just another software cost we don't need — Janet's spreadsheets work fine." Help me build the business case.
```

**Expected Response Elements:**
- Janet's spreadsheets demonstrably do not "work fine" — this review just proved it:
  - Three spreadsheets give three different answers about contractor count and spend
  - One contractor (C-039b) was not in any spreadsheet
  - Rate card overages of $911K/year went undetected because spreadsheets don't auto-compare bill rates to approved rates
  - Background check expirations are not tracked or flagged
  - Co-employment risk (tenure thresholds) is invisible without manual analysis
  - 6 contractors have rate discrepancies between HR's spreadsheet and Procurement's invoice log
- Quantified ROI for a VMS:
  - Rate card compliance enforcement: $911K in annual overage detected. Even recovering 50% through renegotiation and automated compliance = $455K savings.
  - Agency performance management: identifying and removing underperforming agencies (Apex at 45% turnover) saves replacement costs ($24.5K from Apex alone) plus productivity losses
  - Co-employment alerts: automated tenure tracking with alerts at 12/18/24 months prevents the current situation where 15 contractors silently pass the risk threshold
  - Background check tracking: automated expiration alerts prevent the compliance gaps found in this review
  - Time savings: Janet currently spends ~12 hours/week maintaining spreadsheets and answering queries. A VMS reduces this to 3-4 hours with better data.
  - Audit readiness: financial services regulators can and do review contingent workforce practices. "We manage it in spreadsheets" is not an acceptable answer for an $18.4M program.
- VMS cost context: platforms like Beeline, SAP Fieldglass, or Coupa (formerly Wand/VectorVMS) cost $50-150K/year depending on scale. Against $18.4M in annual spend and $911K in detected rate card overage alone, the ROI is immediate.
- Implementation approach: start with a lightweight VMS deployment focused on rate card compliance and background check tracking, then expand to full agency management and reporting. 90-day implementation for core features.
- The real risk of not implementing: when (not if) a regulator, auditor, or plaintiff's attorney asks "how do you manage your contingent workforce compliance?" — "three Excel spreadsheets maintained by three different people who give three different answers" is not a defensible response for a financial services company.
