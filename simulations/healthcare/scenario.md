# Simulation Scenarios: Healthcare

> Multi-turn conversation scripts for testing agents in the Healthcare industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Revenue Cycle Analysis

### Agents Tested
`medical_scribe`, `prior_auth`, `rcm_specialist`

### Mock Data
`mock-data/scenario-1.md` (Revenue Cycle Analysis — Multi-Specialty Practice)

### Messages

**Message 1 — Set the Stage**
```
Our multi-specialty practice has seen denial rates climb from 8% to 13% over the past year and our adjusted collection rate has dropped below 90%. The CFO wants a full revenue cycle assessment. What's your framework for diagnosing the root causes?
```

**Expected Response Elements:**
- Structured RCM diagnostic framework: denial analysis (by category, payer, CPT code, provider), A/R aging review, coding accuracy audit, payer contract analysis, workflow assessment
- Reference to industry benchmarks (clean claim rate >95%, denial rate <5%, adjusted collection rate >95%, days in A/R <35)
- Mention of looking for systemic patterns vs. one-off errors
- Should ask for claims data, denial reports, A/R aging, coding audit results, and payer contracts
- Should note that a 5-percentage-point drop in denial rate over 12 months suggests a process breakdown, not random variation

**Message 2 — Provide the Data**
```
Here's our complete revenue cycle data package for Q4. Analyze and give me a prioritized assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of Dr. Chen's 85% 99214 rate as the most critical compliance risk (fraud exposure under False Claims Act)
- Flag the echocardiogram denial spike tied to LCD L35041 revision (October 1, 2025) — a solvable process issue
- Identify the CLM-9187 timely filing loss ($8,200) as a workflow failure in denial management
- Flag the Humana MA contract as below-benchmark and overdue for renegotiation
- Identify modifier 25 overuse pattern in the coding audit
- Note the deteriorating 12-month trend in collection rate, denial rate, and days in A/R
- Provide a prioritized action plan (compliance risk first, then revenue recovery, then process improvement)

**Message 3 — Challenge the Expert**
```
Our billing manager says the echocardiogram denials are "just Medicare being difficult" and that we should appeal all of them. Is that the right approach?
```

**Expected Response Elements:**
- The billing manager is wrong — this is not a payer behavior problem; it is a practice process failure
- LCD L35041 was revised effective October 1, 2025 with clear, documented changes to coverage criteria
- Appealing claims that don't meet the revised LCD criteria will fail — you cannot win an appeal by arguing against a valid LCD
- The correct approach: (1) update ordering templates to include required clinical indication statements, (2) ensure covered ICD-10 codes are used (not symptom-only codes), (3) train cardiology staff on new requirements, (4) review the 64 denied claims to identify which have sufficient clinical documentation to support a successful appeal vs. which are truly non-covered
- Prevention > rework: implementing LCD-compliant ordering practices will eliminate future denials; mass-appealing non-compliant claims is a waste of staff time
- Mention that tracking LCD changes should be a standing monthly task for the billing/coding team

**Message 4 — Compliance Deep Dive**
```
I'm concerned about Dr. Chen's coding pattern. She says she just sees sicker patients. How do I determine whether this is a documentation issue, a coding issue, or a real compliance problem?
```

**Expected Response Elements:**
- Start with the data: 85% 99214 is a statistical outlier by any measure — national benchmark for IM is 45%, practice average is 53%
- "Sicker patients" is testable: compare her patient panel's ICD-10 diagnosis mix against other IM providers. If her patients genuinely have more complex conditions (multiple chronic diseases, higher comorbidity burden), the MDM complexity should support higher E/M levels in the documentation
- The coding audit already provides the answer for 10 encounters: 6 of 10 audited notes show straightforward MDM billed at 99214 — the documentation does not support the code
- Three possible root causes: (a) Dr. Chen does more complex work than she documents (documentation issue — the fix is education on documentation requirements for MDM levels); (b) the coder defaults to 99214 regardless of what Dr. Chen documents (coding issue — the fix is coder re-education and prospective audits); (c) Dr. Chen knowingly bills 99214 for straightforward visits (compliance issue — requires investigation, disclosure, and corrective action)
- Recommended investigation: expand the audit to 30-50 encounters across multiple months, engage an external coding auditor for independence, compare documentation against coding for each encounter
- If systematic overcoding is confirmed, the practice should consider a voluntary self-disclosure to the OIG Self-Disclosure Protocol — proactive disclosure significantly reduces penalties compared to waiting for an external audit
- Reference the OIG's use of statistical sampling and extrapolation: if an auditor finds 40% overcoding in a sample of 50 claims, they will extrapolate that rate across all of Dr. Chen's claims for the relevant period — the financial exposure is not the $200 per encounter difference on audited claims, it is the extrapolated overpayment plus treble damages

**Message 5 — Edge Case: Operational Tension**
```
Dr. Chen generates the most revenue in the practice. If we downcode her visits to 99213, our revenue drops by $150K annually. The CFO says we can't afford the hit. How do I handle this?
```

**Expected Response Elements:**
- This is not a financial decision — it is a compliance decision with financial consequences
- Billing 99214 for visits that support 99213 is a False Claims Act violation regardless of the revenue impact
- The $150K in "lost revenue" is not revenue — it is money the practice was never entitled to receive. Keeping it creates escalating exposure: recoupment of overpayments, treble damages, per-claim penalties ($11,000+), potential exclusion from Medicare
- If a payer or OIG audit occurs, the practice will lose far more than $150K — statistical extrapolation across 3-5 years of claims could produce a demand letter in the $500K-$1M range
- The real financial question is not "can we afford to code correctly" but "can we afford the consequences of not coding correctly"
- Practical solutions to mitigate the revenue impact: (a) documentation education — Dr. Chen may be doing complex work and under-documenting it; better documentation could legitimately support higher E/M levels; (b) review all providers' coding — if some are undercoding (and the practice average is below national benchmark for some providers), correcting undercoding offsets the downcoding; (c) focus on the revenue recovery opportunities identified in the assessment (LCD-compliant echo ordering, denial management workflow, Humana contract renegotiation) — these represent recoverable revenue that is being left on the table
- The CFO's response should be: "We code correctly and find legitimate revenue elsewhere." Any other answer creates legal liability for the practice, the CFO personally, and Dr. Chen

---

## Scenario 2 — Clinical Trial Protocol Review

### Agents Tested
`diagnostics_assistant`, `clinical_trial_mgr`, `patient_triage`

### Mock Data
`mock-data/scenario-2.md` (Phase III Diabetes Study Protocol)

### Messages

**Message 1 — Set the Stage**
```
We're a community research site evaluating a Phase III diabetes trial for feasibility. The sponsor wants us to enroll 12 patients. Before we commit, I want a thorough protocol review. What should I focus on?
```

**Expected Response Elements:**
- Structured feasibility assessment framework: patient population (can the site identify and enroll enough eligible patients?), protocol complexity (visit schedule, procedures, fasting requirements), site capability (lab processing, ECG, pharmacy for drug storage), budget adequacy, regulatory burden (IRB, amendments, safety reporting)
- Mention of evaluating the inclusion/exclusion criteria against the site's patient population — HbA1c 7.5-12.0% on metformin monotherapy is a specific population
- Note the importance of screen failure rate estimation — sites often underestimate screen failures, which affects both enrollment timelines and site economics
- Should ask for the protocol, informed consent, IB, and site budget
- Reference ICH-GCP investigator responsibilities (Section 4 of ICH E6 R2)

**Message 2 — Provide the Data**
```
Here's the complete protocol package. Review it and tell me what concerns you:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the HbA1c inclusion ceiling (12.0%) vs. safety alert threshold (10.0%) gap — patients with HbA1c 10.1-12.0% on placebo could go 52 weeks without adequate glycemic control
- Flag the Visit 4 holiday scheduling conflict for the expected enrollment cohort
- Identify that the SAP uses LOCF as primary method — FDA will likely require MMRM, potentially delaying the program
- Catch the missing gallbladder risk disclosure in the informed consent (present in IB but absent from consent)
- Identify that the site budget does not cover screen failure costs
- Note the power calculation mismatch — powered for LOCF, not for the MMRM analysis FDA will require
- Provide a risk-rated assessment with recommendations for each issue
- Distinguish between issues the site should raise with the sponsor vs. issues that are deal-breakers

**Message 3 — Challenge the Expert**
```
The sponsor's CRA says the LOCF approach "has been used in hundreds of diabetes trials" and that the FDA will accept it. Should we take their word for it?
```

**Expected Response Elements:**
- No. The CRA is either misinformed or repeating a talking point that is outdated
- LOCF was historically common in diabetes trials — that is true. However, the FDA's position has evolved significantly
- The FDA's Division of Diabetes, Lipid Disorders, and Obesity (within CDER's Office of New Drugs) has explicitly communicated that MMRM is preferred over LOCF for the primary analysis in diabetes trials
- LOCF's fundamental problem: it assumes the last observed value is the true value at Week 52. For a diabetes drug, if a patient drops out at Week 12 with an HbA1c reduction of -0.8%, LOCF carries that -0.8% forward to Week 52 — but biologically, the patient's HbA1c would revert toward baseline after stopping the drug. LOCF therefore overestimates treatment effect for patients who drop out of the active arm and underestimates worsening for patients who drop out of the placebo arm
- FDA has issued Complete Response Letters (refusal to approve) for diabetes programs that used LOCF as the primary method
- The site cannot force a SAP change, but the PI should formally document this concern in writing to the sponsor — this protects the site and the PI if the program is delayed by an FDA-mandated protocol amendment
- The sponsor's biostatistics team, not the CRA, should be addressing this question

**Message 4 — Patient Safety Assessment**
```
I'm worried about patients randomized to placebo with very high HbA1c. A patient enrolled at HbA1c 11.5% on placebo could go a year without effective diabetes treatment. Is the protocol's safety monitoring adequate?
```

**Expected Response Elements:**
- This is a legitimate and serious patient safety concern
- The protocol allows enrollment up to HbA1c 12.0% but the safety alert for HbA1c is set at > 10.0% — there's a gap
- A patient enrolled at 11.5% randomized to placebo: their HbA1c is already above the alert threshold at enrollment, so the alert fires immediately — but the protocol says "consider rescue therapy," not "mandate rescue therapy." The investigator has discretion, which creates variability
- The real risk: a patient enrolled at HbA1c 9.8% randomized to placebo whose HbA1c gradually rises to 10.5% over 26 weeks. This patient is receiving no active treatment for their diabetes for 6 months, with worsening glycemic control. At what point does continued placebo participation become ethically unjustifiable?
- Compare to other Phase III diabetes trials: SUSTAIN trials (semaglutide) capped HbA1c at 10.0-10.5% for inclusion, and most modern diabetes trials use rescue therapy criteria of HbA1c > 9.0-9.5% after Week 12-16
- This protocol is more permissive than current standards in both enrollment ceiling and rescue therapy trigger
- Site PI should raise this at the investigator meeting and recommend: (a) mandatory (not discretionary) rescue at HbA1c > 10.0%, (b) consider lowering the inclusion ceiling to 10.5%, (c) more frequent monitoring (monthly FPG) for patients enrolled with HbA1c > 9.5%
- Reference the Declaration of Helsinki (2013), Article 33: every patient in a trial must receive the best proven intervention when no intervention exists — in diabetes, leaving a patient on metformin alone with HbA1c > 10% for 52 weeks is ethically questionable when effective treatments exist

**Message 5 — Edge Case: Budget Negotiation**
```
Our site manager calculated that with a 35% screen failure rate, we'll lose about $5,500 on screening costs that the budget doesn't cover. The sponsor says "screen failures are a cost of doing business." Do we push back or accept?
```

**Expected Response Elements:**
- Push back. Screen failure costs are a legitimate, quantifiable expense that should be covered in the site budget
- The math: 12 target enrollments / 0.65 (65% randomization rate) = ~18-19 patients screened. 6-7 screen failures at $850 per screening visit (physician time for consent discussion, lab draws, ECG, data entry) = $5,100-$5,950 in unreimbursed costs
- A 35% screen failure rate in a T2DM trial with HbA1c 7.5-12.0% is conservative — actual rates may be higher due to eGFR exclusion (patients with diabetes often have CKD), incidental lab findings, or patients not meeting the 8-week stable metformin requirement
- "Cost of doing business" is a negotiation tactic, not a legitimate position. Industry-standard screen failure payments are $400-$600 per patient, and most experienced sites negotiate this into the budget
- The site's negotiating leverage: experienced diabetes sites with established patient populations are valuable. The sponsor needs 85 sites to enroll 900 patients — sites that can actually deliver enrollment have leverage
- Recommended approach: (a) submit a budget amendment requesting $500 per screen failure, (b) cap it at a reasonable number (8-10 screen failures), (c) present the math showing that without this coverage, the site loses money on the study — which affects site staff retention, investigator motivation, and ultimately enrollment performance
- If the sponsor refuses all screen failure coverage, the site should factor this into the enrollment commitment — promising 12 patients but only delivering 8-10 (because the site slows screening to control losses) is worse for both parties than negotiating a fair budget upfront
- Reference that SCRS (Society for Clinical Research Sites) has published guidance on fair budget negotiation, and screen failure payments are standard in most Phase III protocols from experienced sponsors
