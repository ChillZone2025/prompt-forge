# Simulation Scenarios: Education

> Multi-turn conversation scripts for testing agents in the Education industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — University Program Review

### Agents Tested
`micro_learn`, `grading_feedback`, `career_growth`, `admissions`

### Mock Data
`mock-data/scenario-1.md` (Computer Science department program review data package)

### Messages

**Message 1 — Set the Stage**
```
We're preparing for our ABET reaffirmation visit and HLC program review for our Computer Science department. I need a thorough analysis of our program review data package before we submit the self-study. What framework should we use to evaluate this?
```

**Expected Response Elements:**
- Structured evaluation framework covering ABET CAC criteria (Student Outcomes 1-7, Continuous Improvement, Curriculum, Faculty, Facilities)
- Reference to HLC Criteria for Accreditation (particularly Criterion 4: Teaching and Learning)
- Mention of IPEDS data standards for graduation rates and enrollment reporting
- Framework should include assessment of data quality and methodology, not just outcomes
- Should ask for the data package, current self-study drafts, and previous accreditation reports

**Message 2 — Provide the Data**
```
Here's our program review data package. Analyze it and tell me what an ABET evaluator and HLC reviewer would flag:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the graduation rate cohort definition discrepancy (58% internal vs. 49% IPEDS — this is the most critical finding for accreditation)
- Flag the 12% survey response rate as statistically invalid for any claims about student satisfaction
- Challenge the 95.5% "placement rate" methodology — counting Fiverr gig work as employment is misleading
- Identify the publication double-counting inflating research productivity by ~16%
- Flag the expired/expiring grants treated as recurring revenue in budget projections
- Call out the aspirational peer comparison as methodologically inappropriate
- Provide a prioritized action plan for self-study remediation

**Message 3 — Challenge the Expert**
```
Our department chair says the 95.5% placement rate is "standard practice" in how departments report outcomes and that ABET doesn't prescribe a specific methodology. Is that a sufficient defense?
```

**Expected Response Elements:**
- Acknowledge that ABET does not prescribe a specific placement methodology, BUT:
- ABET Criterion 1 (Students) requires "tracking student outcomes including graduation rates, placement rates, and job titles"
- NACE (National Association of Colleges and Employers) First Destination Survey standards are the professional standard for placement reporting
- Counting $2,400 in Fiverr income over 6 months as "employed" is indefensible regardless of methodology
- The 62% response rate means 38% of graduates are unaccounted for — presenting respondent-only data as the institutional rate is misleading
- ABET evaluators will compare this to other programs' placement data; an inflated rate will stand out
- The deeper issue: if the department cannot honestly report student outcomes, it undermines the entire self-study's credibility
- Recommend: adopt NACE standards, report full-class outcomes with "unknown" category, disaggregate by employment type

**Message 4 — Regulatory Deep Dive**
```
We're also concerned about our graduation rate numbers. If we use the IPEDS cohort, our rate drops to 49%. How should we handle this in the self-study without making us look bad?
```

**Expected Response Elements:**
- Use the IPEDS rate as the primary reported metric — period. Accreditors expect IPEDS-consistent data.
- The 9-point gap between internal (58%) and IPEDS (49%) rates is a transparency issue, not a cosmetic one
- The custom cohort definition can be included as supplementary context with full disclosure of methodology and the reason for the difference
- 49% is below the national average (~60% for CS at public 4-year institutions) — this is a real problem that needs a real response
- The self-study should: (1) report the IPEDS rate, (2) analyze contributing factors (DFW rates in gateway courses are 27% vs. 19% university average), (3) present a specific improvement plan with measurable targets
- HLC Criterion 4 expects not just data but evidence of using data to drive improvement — showing you identified the problem and have a plan is more valuable than reporting a high number
- Attempting to obscure the graduation rate with a custom definition will be caught and will damage credibility far more than the low rate itself

**Message 5 — Edge Case: Data Ethics**
```
Our dean wants to include the student satisfaction data (3.6 overall, 4.1 on curriculum relevance) in our marketing materials and recruitment presentations. She says "the students who responded clearly like the program." Should we allow this?
```

**Expected Response Elements:**
- Firmly advise against using this data in marketing materials
- A 12% response rate means 88% of students did not respond — you cannot draw conclusions about "the students" from 12% of them
- Non-response bias is severe: self-selected respondents are systematically different from the population
- The demographic breakdown of respondents should be compared to department demographics — if 68% of respondents are male but the department is 75% male, even the respondent pool may not represent the actual student body
- Using this data in marketing could constitute misleading advertising, particularly if prospective students rely on it for enrollment decisions
- If this data appears in accreditation materials AND marketing with different framing, HLC reviewers will notice the inconsistency
- FERPA considerations: ensure the survey data and comments cannot be traced back to individual students, especially the open-ended comments which may be identifiable in a small department
- Recommend: conduct a proper satisfaction survey with adequate response rate (minimum 30%) before using results in any external materials. Consider incentives, in-class administration time, and shorter instrument to boost response rates
- If the dean insists on using data, require prominent disclosure: "Based on 79 responses from 660 students (12% response rate). Results may not be representative."

---

## Scenario 2 — Federal Grant Proposal Review

### Agents Tested
`research_asst`, `grant_writer`

### Mock Data
`mock-data/scenario-2.md` (NSF CAREER grant application draft)

### Messages

**Message 1 — Set the Stage**
```
I'm submitting an NSF CAREER proposal and want a thorough pre-submission review. This is my first CAREER submission and my tenure case depends on it. What should a good review cover?
```

**Expected Response Elements:**
- Structured review framework covering all CAREER proposal components: Project Summary, Project Description (intellectual merit, broader impacts), Budget, DMP, Bio Sketch, C&P, Facilities
- Reference to NSF PAPPG (current version) requirements
- Mention that CAREER proposals are evaluated on both research plan AND educational plan — the educational component must be as rigorous as the research
- Emphasis on common CAREER rejection reasons: disconnect between research and education, weak broader impacts, budget errors, compliance violations
- Should ask for the full proposal and any prior review feedback

**Message 2 — Provide the Data**
```
Here's my full proposal draft. Give me an honest assessment — what would kill this in panel review?

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the "in preparation" publication in the bio sketch — compliance violation that could trigger return without review
- Flag the postdoc salary as below NRSA minimum — reviewers will note this as inadequate mentoring support
- Identify the missing TriageAI industry project in Current & Pending — research integrity violation
- Challenge the data management plan's inadequate human subjects protections
- Question the IJCAI travel relevance
- Flag the broader impacts as generic and disconnected from the research
- Overall assessment: strong research plan but compliance issues could be fatal before the science is even evaluated
- Prioritized fix list

**Message 3 — Challenge the Expert**
```
My mentor says the TriageAI project doesn't need to be disclosed because it's a "consulting arrangement" and I'm not the PI — they pay me as a consultant, not through a subaward. Does that matter?
```

**Expected Response Elements:**
- Yes, it absolutely matters. NSF's definition of Current & Pending support is broader than "grants where you are PI."
- NSF PAPPG Chapter II.D.2.h (or current equivalent) requires disclosure of "all resources made available to an individual in support of and/or related to all of their research efforts, regardless of whether or not they have monetary value"
- This includes "in-kind contributions, consulting activities, and other appointments"
- The TriageAI arrangement is particularly problematic because: (a) it uses similar datasets and methods as the CAREER proposal, (b) there is potential intellectual property overlap, (c) there is a potential financial conflict of interest
- NSF has dramatically increased C&P enforcement since the 2019-2020 investigations into undisclosed foreign funding — the agency takes non-disclosure very seriously
- The "consulting" framing does not exempt it — NSF explicitly includes consulting in the scope of required disclosure
- Dr. Singh should also check Lakewood State's institutional conflict of interest policy — an industry-funded project related to a federal proposal likely triggers disclosure requirements at the university level too
- Failure to disclose could result in: proposal return without review, award termination if discovered post-award, debarment from federal funding in extreme cases, and damage to tenure case if a research integrity investigation is opened

**Message 4 — Budget Deep Dive**
```
The budget drops sharply in Years 3-5 ($79K, $60K, $2K). My department chair asked if this is realistic for a $550K proposal. Should I redistribute?
```

**Expected Response Elements:**
- The budget distribution is unusual and will raise panel and program officer questions
- Year 5 at $1,691 is essentially zero — this suggests the PI hasn't thought through Year 5 activities
- NSF CAREER awards are specifically designed to support sustained 5-year programs — front-loading the budget contradicts the program's purpose
- The drop-off appears to be because the postdoc is only budgeted for Year 1 and the SRECCS summer program accounts for most of Year 2
- Concerns: (a) Who conducts the Aim 3 pilot deployment in Years 4-5 if the postdoc left after Year 1? (b) What personnel support the ongoing SRECCS program in Years 3-5? (c) How is the educational plan sustained through Year 5?
- NSF program officers may view this as a "front-loaded" proposal where the PI plans to finish the research quickly and coast — this perception is fatal for CAREER
- Recommend: extend the postdoc appointment to at least 2 years, budget a graduate student in Years 3-5, distribute SRECCS costs across Years 2-5, ensure each year has meaningful research AND education activities
- The total budget ($549,872) is near the CAREER maximum for CISE ($600,000) — there is room to redistribute within the cap

**Message 5 — Edge Case: Broader Impacts vs. Intellectual Merit**
```
A colleague reviewed my proposal and said the broader impacts are "the weakest part." But the research plan is strong. In your experience, can a CAREER proposal win on intellectual merit alone if the broader impacts are just okay?
```

**Expected Response Elements:**
- No. CAREER proposals cannot win on intellectual merit alone.
- NSF's own description of the CAREER program states it is for faculty who "effectively integrate research and education" — integration is the defining criterion
- Both merit review criteria (Intellectual Merit and Broader Impacts) carry equal weight in NSF review. This is not theoretical — panel summaries routinely show proposals with "Excellent" IM ratings receiving "Good" or "Fair" overall ratings due to weak BI
- The specific problems with the current broader impacts: (1) the courses are listed without assessment plans, (2) the SRECCS program has no persistence tracking, (3) the community workshops are not connected to the research findings, (4) none of the BI activities demonstrate how the specific research advances educational goals
- CAREER proposals are different from standard research proposals — the expectation is that the educational plan is as well-developed as the research plan, with its own aims, methods, and assessment
- A strong CAREER educational plan would: integrate research data and tools directly into coursework, create research opportunities that are integral to the research plan (not separate summer programs), include assessment of educational activities with measurable outcomes, and show how the PI's educational philosophy connects to their research identity
- Recommend: redesign BI to show how Aims 1-3 feed directly into educational activities — e.g., students in CS 395 use Aim 1 models on real data, SRECCS students contribute to Aim 2 interface design, the rural healthcare workshop uses Aim 3 pilot findings
- The strongest CAREER proposals make research and education inseparable — the research could not succeed without the educational activities, and the educational activities could not exist without the research
