# Simulation Scenarios: HR & People Ops

> Multi-turn conversation scripts for testing agents in the HR & People Ops industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Annual Compensation Review

### Agents Tested
`resume_screener`, `compensation_analyst`, `performance_mgmt`

### Mock Data
`mock-data/scenario-1.md` (Annual compensation review package for 300-person tech company)

### Messages

**Message 1 — Set the Stage**
```
We're a 300-person Series C SaaS company preparing for our annual comp review cycle effective April 1. I need you to audit our compensation data and flag any risks before we finalize manager recommendations. What's your framework for reviewing this?
```

**Expected Response Elements:**
- Structured compensation review framework (market competitiveness analysis, internal equity audit, pay equity analysis, band structure integrity, budget sufficiency assessment)
- Reference to pay equity methodology (regression analysis, controlled gap analysis)
- Mention of checking market data freshness and applying aging factors if needed
- Should ask for the comp data package including pay bands, market benchmarks, employee data, equity analysis, and budget
- Framework should address both legal compliance (Equal Pay Act, state pay equity laws) and business risk (retention, compression)

**Message 2 — Provide the Data**
```
Here's our full comp review package. Audit everything and give me your risk assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the pay equity flag: Sarah Chen and Rachel Torres are 15-17% below male peers at L3 with equal or better qualifications — this is the most legally urgent finding
- Flag the stale market data: Radford data is 14 months old at implementation, no aging factor applied, company is likely targeting 50th percentile when they think they're at 60th
- Identify the L5/L6 band compression: 80% overlap destroys promotion incentive and creates retention risk
- Flag Wei Zhang at 22% above band maximum without documented justification
- Call out the merit budget gap: 3.5% vs. 4.8% market movement means the company falls further behind every year
- Identify the equity concentration problem: Engineering gets refresh grants, 146 non-engineering employees have no equity retention
- Prioritized remediation plan with immediate actions (pay equity fixes) and strategic actions (band restructuring, budget increase, equity program expansion)

**Message 3 — Challenge the Expert**
```
Our CFO says we can't increase the merit budget above 3.5% — "that's what the board approved." She also says the pay equity gaps are "within normal range" and don't require immediate action. How do I push back?
```

**Expected Response Elements:**
- Firmly establish that a 5.0% controlled gender gap and 4.5-5.7% ethnicity gaps are NOT "within normal range" — they are statistically significant and legally actionable
- Equal Pay Act liability: the burden is on the employer to justify disparities. "Within normal range" is not a legal defense.
- State pay equity law exposure: California, Colorado, New York, and other states have aggressive pay equity enforcement with private right of action
- The $191,000 equity adjustment budget is inadequate — the Chen and Torres adjustments alone would consume roughly $30,000-$40,000, and the Mercer analysis identified organization-wide gaps
- On the merit budget: present the math. 3.5% merit vs. 4.8% market movement = cumulative 2.6% lag over 2 years. Model the cost of turnover (typically 50-200% of salary) vs. the incremental cost of raising the budget to 4.5-5.0%
- Frame for the CFO: "The question isn't whether we can afford to increase the budget. The question is whether we can afford not to — and whether we can afford the litigation risk of documented pay disparities we chose not to fix."
- Recommend reframing the equity adjustment as a legal risk mitigation investment, not a discretionary budget increase

**Message 4 — Deep Dive on Pay Equity**
```
Walk me through exactly how to fix the Chen and Torres situation. What's the right adjustment, how do we justify it internally, and what documentation do we need?
```

**Expected Response Elements:**
- Calculate target adjustments: Chen should be at minimum $121,000-$128,000 (compa-ratio of 1.07-1.13, consistent with male peers at same level/tenure/performance). Torres should be at minimum $119,000-$128,000.
- That's roughly $12,500-$19,500 for Chen and $9,800-$18,800 for Torres — these are equity adjustments, not merit increases, and should come from the equity adjustment budget, not the merit pool
- Documentation required: written analysis showing the disparity, controlling factors considered, business justification for the adjustment, manager notification talking points
- Internal communication: frame as "market and equity adjustment" — do not label it a "pay equity fix" in employee-facing communications (this creates legal discovery risk)
- Recommend adjusting both simultaneously — fixing one and not the other creates a new equity problem
- Advise privilege review: conduct the pay equity analysis under attorney-client privilege (through outside counsel) to protect the analysis from discovery in future litigation
- Flag that fixing these two individuals is necessary but insufficient — the Mercer analysis shows systemic gaps that require a broader remediation program
- Recommend documenting a prospective compensation decision framework to prevent recurrence (e.g., hiring ranges anchored to band midpoint, standardized offer approval thresholds)

**Message 5 — Edge Case: The Wei Zhang Problem**
```
Wei Zhang's manager says he's our most critical engineer — he built our core infrastructure and if he leaves, it would take 6 months to replace him. The manager wants to give him another 5% raise on top of his already above-band salary. How do we handle this?
```

**Expected Response Elements:**
- Acknowledge that Zhang is clearly a retention-critical employee, but the current approach is creating serious structural problems
- Zhang is already 22% above L5 max ($266K vs. $218K max). Another 5% puts him at $279K — which is above the L6 midpoint ($225K) and well into the L7 range ($240K-$320K).
- This signals that the problem isn't Zhang's pay — it's his level. If he's doing L6 or L7 work, promote him and align his comp to the appropriate band.
- If he's doing L5 work at exceptional quality, create a formal "above-range" policy with documented criteria (critical skills premium, retention agreement, formal exception approval by VP People and CFO)
- An additional raise without structural justification sets a precedent that any manager can negotiate above-band pay by claiming their person is "critical" — this undermines the entire compensation framework
- Alternative retention tools: retention bonus (one-time, doesn't increase base), accelerated equity vesting, supplemental RSU grant (Zhang already receives 4,000 RSU refreshes — the largest individual grant in the sample), deferred compensation, sabbatical, title/scope expansion
- Recommend: promote to L6 if justified by scope and impact, or implement a formal retention agreement with a one-time retention bonus and supplemental equity grant. Do NOT increase base salary further without resolving the leveling question.
- Document whatever decision is made — the absence of documentation is one of the current problems

---

## Scenario 2 — Employee Relations Investigation

### Agents Tested
`employee_relations`, `interview_architect`, `onboarding_agent`

### Mock Data
`mock-data/scenario-2.md` (Workplace harassment investigation file)

### Messages

**Message 1 — Set the Stage**
```
I'm the VP of People at a 300-person tech company. We have an open harassment investigation and I need you to review the case file for procedural issues, evidentiary gaps, and risk exposure. What should I send you?
```

**Expected Response Elements:**
- Structured investigation review framework (complaint intake completeness, investigation timeliness, interview methodology, evidence preservation, interim measures, policy applicability, documentation quality)
- Reference to Title VII employer liability standards (knew or should have known, prompt and effective remedial action)
- Mention of checking investigator neutrality and training
- Should request: complaint, timeline, interview notes for all parties, applicable policies, prior HR interactions, documentary evidence, and investigation status/timeline
- Framework should address both legal compliance and procedural best practice

**Message 2 — Provide the Data**
```
Here's the complete investigation file. Review everything and give me your assessment of how this investigation has been conducted:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the 21-day delay in opening the investigation — this is the most immediately actionable finding
- Flag that a witness (Derek Rawlings) was interviewed with Craig Donovan (respondent's effective manager) present — this compromises witness independence
- Identify the prior complaint from June 2025 that was dismissed by Tom Bradley and never escalated to HR — NovaTech was on notice
- Flag the policy gap: the anti-harassment policy doesn't cover contractors, and the respondent is a contractor
- Identify the documentation asymmetry between complainant and respondent interviews (interviewer bias)
- Flag that no interim protective measures have been implemented — Maya is self-accommodating by working from home
- Prioritized remediation plan: immediate interim measures, re-interview Derek without Donovan, policy update, outside investigator consideration
- Overall assessment: this investigation has significant procedural deficiencies that increase the company's legal exposure regardless of the substantive findings

**Message 3 — Challenge the Expert**
```
Our employment attorney says the investigation is "adequate" and that we should just finish it and take appropriate action on the findings. She says re-interviewing Derek or bringing in an outside investigator would "signal that we don't trust our own HR team." Is she right?
```

**Expected Response Elements:**
- The attorney's advice prioritizes optics over substance — and ironically, the current investigation's deficiencies create far more litigation risk than correcting them would
- "Adequate" is a low bar. The standard under Title VII is "prompt, thorough, and impartial." This investigation fails on "prompt" (21-day delay) and arguably on "impartial" (witness interviewed with interested party present, documentation asymmetry)
- Re-interviewing Derek is not about distrusting the HR team — it's about ensuring evidentiary integrity. If this case goes to litigation, plaintiff's counsel will ask Derek under oath whether anyone from management was present during his HR interview, and his answer will undermine whatever he said
- An outside investigator isn't a lack of confidence — it's a standard risk mitigation practice when: (a) the complaint involves a contractor relationship managed by someone who participated in the investigation, (b) there's a prior unreported complaint, and (c) the investigator (HRBP) is relatively junior for a case with this complexity and legal exposure
- The real question: if Maya files an EEOC charge or lawsuit, will this investigation file demonstrate that NovaTech took her complaint seriously and conducted a proper investigation? Right now, the answer is no.
- Recommend getting a second opinion from an employment litigator (not just an advisory attorney) who has defended harassment cases at trial

**Message 4 — Contractor Complication**
```
We want to remove Viktor from the engagement, but Craig Donovan says the Apex Talent Group MSA requires 30 days notice for contractor removal and we'd owe a $15,000 early termination fee. He says we should wait until Viktor's engagement naturally ends in April. What do I do?
```

**Expected Response Elements:**
- Waiting until April is not acceptable. Maya has been experiencing harassment since November 2025. The complaint was filed in February. It is now mid-March. Allowing Viktor to remain on-site for another month to avoid a $15,000 fee is a textbook example of prioritizing cost over employee safety.
- $15,000 is trivial compared to the litigation exposure. A single harassment lawsuit — even one that settles — typically costs $75,000-$250,000 in legal fees and settlement, plus management time, plus the reputational damage. An EEOC investigation alone costs $30,000-$50,000 in attorney time.
- Review the MSA immediately — most MSAs have provisions for removal due to policy violations or conduct issues that override standard termination notice. A harassment complaint with corroborating witnesses likely qualifies.
- Even if the MSA requires 30 days and a fee: remove Viktor from the NovaTech workspace immediately, pay the fee, and negotiate with Apex afterward. The fee is a business expense; Maya's safety and the company's legal exposure are not negotiable.
- Donovan's involvement in this decision is itself a problem — he approved Viktor's engagement, was present during witness interviews, and now is advocating to keep Viktor on-site. He has a conflict of interest and should be removed from all decisions related to this investigation.
- Implement interim measures NOW: at minimum, direct Viktor to work remotely for the remainder of his engagement, issue a no-contact directive, and inform Apex Talent Group of the investigation.
- Contact Apex about Viktor's history at prior client engagements — this should have been done when the complaint was first filed

**Message 5 — Edge Case: Retaliation Risk**
```
Maya's annual performance review is coming up in three weeks. Her new manager Lena Park says Maya's work has "noticeably declined" since January — missed deadlines, less vocal in meetings, lower output. Lena wants to give her a "Needs Improvement" rating. Maya has never received below "Meets Expectations." How do we handle this?
```

**Expected Response Elements:**
- This is a retaliation landmine. Under Title VII and virtually all state anti-retaliation statutes, any adverse employment action following a protected activity (filing a harassment complaint) creates a presumption of retaliation if the timing is close.
- Maya filed her complaint on February 10. A "Needs Improvement" rating three weeks later would be the most obvious retaliation fact pattern a plaintiff's attorney could hope for — even if the performance decline is genuine.
- The performance decline Lena describes — missed deadlines, less vocal, lower output — is entirely consistent with someone experiencing ongoing workplace harassment with no protective measures, who dreads coming to the office, and who has been crying in 1:1s with her manager. The harassment is the cause of the performance decline. Rating her down for it compounds the harm.
- Do NOT give Maya a "Needs Improvement" rating right now. This is not about inflating her review — it's about recognizing that her performance was directly impacted by conduct the company failed to promptly address.
- Appropriate approach: (1) Document that performance concerns emerged concurrent with the harassment complaint and investigation. (2) Defer the formal performance rating by 90 days to allow the investigation to conclude and protective measures to take effect. (3) Provide Maya with support: EAP referral, workload adjustment, clear communication that her job is not at risk. (4) After the investigation concludes and Maya has had time to stabilize in a safe work environment, assess performance with a clean baseline.
- Coach Lena Park on retaliation risk — managers often inadvertently create retaliation claims by documenting performance changes that are directly caused by the harassment they're simultaneously investigating. Lena needs to understand that her 1:1 notes already document the causal link between Viktor's behavior and Maya's disengagement.
- If the company gives Maya "Needs Improvement" and she later files an EEOC charge or lawsuit, the sequence — harassment complaint filed February 10, negative performance review issued March, no interim protective measures during investigation — will be exhibit A in the retaliation claim.

---

## Scenario 3 — Resume Screening & Interview Design

### Agents Tested
`resume_screener`, `interview_architect`

### Mock Data
None required (general knowledge scenario)

### Messages

**Message 1 — Set the Stage**
```
We're hiring a Senior Product Manager and we've received 200 applications. I need to build a screening and interview process that's both efficient and legally defensible. Where do we start?
```

**Expected Response Elements:**
- Start with job analysis: define 5-7 critical competencies for the role (strategic thinking, stakeholder management, data-driven decision making, technical fluency, cross-functional leadership, customer empathy, execution/delivery)
- Build a structured screening rubric: minimum qualifications (knock-out criteria) and preferred qualifications scored on a consistent scale
- Reference adverse impact considerations: any screening criteria must be job-related and consistent with business necessity
- Recommend structured interview design with predetermined questions, scoring rubrics, and interviewer assignments by competency
- Mention the 4/5ths rule for monitoring selection rates across protected groups at each stage
- Should ask about the role's specific requirements, team composition, and any DE&I goals

**Message 2 — Process Design**
```
Here are the role requirements: 5+ years PM experience, B2B SaaS background, experience with enterprise customers, data analytics fluency, and cross-functional leadership. Design the full interview loop.
```

**Expected Response Elements:**
- Multi-stage process: (1) Resume screen against rubric, (2) Recruiter phone screen (30 min), (3) Hiring manager screen (45 min), (4) Interview loop (4-5 interviews, each testing specific competencies), (5) Debrief and decision
- Each interview stage should map to specific competencies with no redundancy
- Interview questions should be behavioral (STAR format) and situational, not hypothetical or brainteaser
- Provide anchored rating scales (1-5 with behavioral descriptors for each score)
- Recommend independent scoring: interviewers submit scorecards before the debrief to prevent anchoring bias
- Include at least one work sample or case study (e.g., "Review this PRD and tell us what you'd change")
- Address bias mitigation: diverse interview panel, structured questions, independent scoring, debrief protocol
- Timeline: target 2-3 weeks from first screen to offer for competitive candidates

**Message 3 — Bias Challenge**
```
Our engineering VP wants to add a "culture fit" interview. He says he can "tell within 5 minutes" whether someone will work well with the team. How do I handle this?
```

**Expected Response Elements:**
- "Culture fit" interviews are one of the most common vectors for bias in hiring. Research consistently shows that unstructured "fit" assessments correlate with demographic similarity (same background, same hobbies, same communication style) rather than job performance.
- "I can tell within 5 minutes" is a red flag for reliance on snap judgments and affinity bias — exactly what structured interviews are designed to prevent
- Do NOT allow an unstructured culture fit interview. Instead, reframe as "values alignment" or "collaboration style" interview with structured questions
- Provide alternative: structured questions about how the candidate handles disagreement, how they build alignment across teams, how they operate in the company's specific work environment (remote/hybrid, cross-functional, data-driven)
- Each question should have a scoring rubric with behavioral anchors — not a gut feeling
- Cite research: structured interviews are 2x more predictive of job performance than unstructured interviews (Schmidt & Hunter meta-analysis)
- If the VP insists on a free-form conversation, it should NOT be a decision-making input — it can be informational but cannot have scoring weight

**Message 4 — Screening Dilemma**
```
After initial screening, our recruiter flagged that the top 10 candidates are all male. The applicant pool was 40% female. Should we adjust our screening criteria?
```

**Expected Response Elements:**
- This is an adverse impact signal. Apply the 4/5ths rule: if 10% of male applicants passed screening but less than 8% (4/5ths of 10%) of female applicants passed, there is statistical evidence of adverse impact.
- Do NOT lower standards or create quotas — that creates reverse discrimination liability
- Instead, audit the screening criteria: which specific criteria are filtering out female candidates? Is each criterion genuinely job-related and consistent with business necessity?
- Common culprits: years of experience requirements that are higher than necessary (women re-enter the workforce more often), industry-specific requirements that are preferred but not essential, "prestigious company" bias in resume screening
- Review the job posting: does the language inadvertently discourage female applicants? (Research shows gendered language in job postings affects application rates)
- Expand the top of funnel: targeted sourcing on platforms and communities with higher female representation, employee referral outreach specifically asking for diverse candidates
- Document the analysis: if the criteria are genuinely job-related, document that conclusion. If criteria can be broadened without compromising quality, adjust and re-screen.
- Monitor going forward: track pass-through rates by gender at every stage of the funnel

**Message 5 — Edge Case: AI Screening Tool**
```
Our recruiter wants to use an AI resume screening tool to handle the volume. The vendor says it's "bias-free because it doesn't see names or demographics." Should we use it?
```

**Expected Response Elements:**
- "Bias-free because it doesn't see demographics" is a misleading claim. AI screening tools can learn proxy discrimination — features that correlate with protected characteristics without being explicitly demographic (e.g., college name correlates with race and socioeconomic status; gaps in employment correlate with gender; zip code correlates with race)
- The EEOC and state regulators are actively scrutinizing AI hiring tools. NYC's Local Law 144 (effective 2023) requires annual bias audits of automated employment decision tools. Illinois AIPA requires disclosure. Colorado AI Act addresses high-risk AI in employment.
- Before adopting any AI screening tool: (1) Require the vendor to provide an adverse impact audit on their training data and model outputs, (2) Conduct your own adverse impact analysis on the tool's output for your applicant pool, (3) Ensure a human reviews every rejection before it's final, (4) Disclose to candidates that AI is used in screening (required in several jurisdictions), (5) Document your validation process
- The vendor's claim of being "bias-free" is itself a red flag — responsible AI vendors acknowledge limitations and provide audit data rather than claiming perfection
- Recommend using AI as a ranking/flagging tool rather than a pass/fail gate — let it surface likely strong candidates but keep human review in the loop for all decisions
- Maintain records of AI-assisted decisions for adverse impact monitoring

---

## Scenario 4 — Onboarding & Performance Management

### Agents Tested
`onboarding_agent`, `performance_mgmt`

### Mock Data
None required (general knowledge scenario)

### Messages

**Message 1 — Set the Stage**
```
We're scaling from 150 to 300 employees this year. Our current onboarding is a mess — new hires get a laptop, a Slack invite, and a "good luck." Turnover in the first 90 days is 18%. Design a proper onboarding program.
```

**Expected Response Elements:**
- 18% 90-day turnover is a crisis — industry benchmark is 5-8%. This signals fundamental failures in expectation-setting, integration, and early management.
- Structure a 90-day onboarding program with clear phases: Pre-boarding (before Day 1), Week 1 (orientation and setup), Weeks 2-4 (role immersion), Weeks 5-8 (building independence), Weeks 9-12 (performance baseline)
- Pre-boarding checklist: IT provisioning, benefits enrollment, welcome packet, first-week schedule, manager introduction email, buddy/mentor assignment
- Week 1: company mission/values/strategy, team introductions, role expectations document (written, not verbal), tool access and training, first 30-day goals
- Ongoing: weekly 1:1s with manager (non-negotiable for first 90 days), 30/60/90 day check-ins with structured feedback, buddy system for cultural integration
- Measurable outcomes: time-to-productivity, 90-day retention rate, new hire satisfaction scores, manager satisfaction with onboarding quality
- Technology: HRIS-driven onboarding workflows (BambooHR, Rippling, or similar) to ensure nothing falls through the cracks at scale

**Message 2 — Performance System Design**
```
We also need to overhaul our performance management system. Currently it's an annual review that managers hate and employees find useless. What should we build?
```

**Expected Response Elements:**
- Annual reviews alone are insufficient — research shows recency bias dominates annual reviews (managers remember the last 2-3 months, not the full year)
- Recommend a continuous performance management system: quarterly goal-setting (OKRs or similar), monthly 1:1s with documented talking points, semi-annual formal reviews, and real-time recognition/feedback mechanisms
- Goal-setting framework: OKRs or similar cascade from company objectives to team to individual. Goals should be SMART and aligned to business outcomes.
- Review structure: calibration sessions across managers to ensure rating consistency, forced distribution vs. no-curve (recommend no forced curve but with calibration), self-assessment component, peer feedback (360 for managers)
- Performance ratings: recommend 4 or 5-point scale with clear behavioral descriptors for each level by role family
- Link to compensation: clearly define how performance ratings connect to merit increases, bonus payouts, and promotion eligibility — employees need to understand the consequences
- Manager training: managers must be trained on giving feedback, conducting reviews, having difficult conversations, and recognizing bias in evaluations
- Tools: Lattice, 15Five, or Culture Amp for continuous performance management workflow

**Message 3 — The PIP Question**
```
A manager wants to put a 2-year employee on a PIP. The employee was "Meets Expectations" last year but has missed 3 deadlines in the past 2 months. The manager has never given written feedback about the performance decline. Is a PIP the right move?
```

**Expected Response Elements:**
- A PIP is premature. The manager has skipped the entire progressive discipline framework — no verbal counseling, no written feedback, no documentation of the performance decline.
- Jumping to PIP without prior documentation creates two problems: (1) If the employee is terminated, it looks like a pretext because there's no progressive record of concern, and (2) It denies the employee the opportunity to course-correct with lighter intervention.
- Recommended sequence: (1) Documented conversation about the missed deadlines — specific dates, specific deliverables, impact on the team. (2) Written summary of the conversation emailed to the employee with clear expectations for improvement. (3) 30-day observation period with weekly check-ins. (4) If performance doesn't improve, then formal PIP with measurable targets, timeline, and consequences.
- Before any action, investigate the cause: has anything changed? Personal issues, workload changes, tool/process changes, management changes, role confusion? A 2-year employee who was previously meeting expectations doesn't suddenly decline without a reason.
- Coach the manager: this is a management failure first and a performance issue second. If the manager hasn't been providing regular feedback, the employee may not even know there's a problem.
- Document everything from this point forward — dates, conversations, expectations, outcomes

**Message 4 — Calibration Conflict**
```
During our performance calibration session, two managers are in conflict. Manager A rated 80% of her team "Exceeds Expectations." Manager B rated only 15% of his team "Exceeds." Both manage teams of similar size doing similar work. How do we resolve this?
```

**Expected Response Elements:**
- This is a classic calibration problem that indicates either inconsistent rating standards, different management philosophies, or one manager is inflating/deflating
- Do NOT simply force both to a target distribution — that's arbitrary and creates resentment
- Calibration approach: (1) Review the specific evidence for each "Exceeds" rating in Manager A's team. Are the accomplishments genuinely above expectations or are expectations set too low? (2) Review Manager B's "Meets" ratings — are there team members whose accomplishments match Manager A's "Exceeds" employees?
- Use behavioral evidence: ask both managers to cite specific accomplishments, metrics, and impact for their top-rated employees. Compare across teams using consistent criteria.
- The problem may be goal-setting, not rating: if Manager A's team has easy goals and Manager B's team has stretch goals, the same quality of work gets rated differently. This is a goal-setting calibration issue upstream of the review.
- Resolution: align on what "Exceeds Expectations" means in concrete terms for this role family, re-rate based on aligned criteria, and implement shared goal-setting standards for the next cycle
- Avoid public confrontation between managers — facilitate individually first, then bring together with an HR facilitator

**Message 5 — Edge Case: Remote Performance Management**
```
A fully remote employee's manager says she "doesn't trust that he's actually working 8 hours a day" because he doesn't respond to Slack messages within 15 minutes. She wants to implement time-tracking software. Is this the right approach?
```

**Expected Response Elements:**
- Time-tracking for a salaried knowledge worker is almost certainly the wrong approach. It signals distrust, damages the employment relationship, and measures the wrong thing (presence vs. outcomes).
- If the employee is exempt under FLSA, tracking hours is irrelevant — they're paid for the job, not the hours. Implementing surveillance will likely accelerate the employee's departure.
- Reframe the question: the manager's concern isn't really about hours — it's about responsiveness and visibility. Address the actual concern with appropriate tools.
- Solutions: (1) Set clear expectations for response times (e.g., "respond to Slack within 2 hours during core hours of 10am-4pm"). (2) Establish daily or twice-weekly standups for visibility into work progress. (3) Define deliverables and deadlines rather than monitoring activity. (4) Use project management tools (Asana, Linear, Jira) for work tracking.
- Coach the manager on managing outcomes, not inputs. If the employee is meeting deadlines, producing quality work, and attending meetings, the number of hours or Slack response time is irrelevant.
- If the employee is genuinely not meeting expectations, that's a performance management issue to address through feedback and goal-setting — not surveillance
- Mention privacy considerations: employee monitoring software may trigger notification requirements under state privacy laws (Connecticut, Delaware, New York, etc.)

---

## Scenario 5 — Cross-Functional HR Challenge

### Agents Tested
`compensation_analyst`, `employee_relations`, `performance_mgmt`

### Mock Data
None required (general knowledge scenario)

### Messages

**Message 1 — Set the Stage**
```
We just acquired a 50-person startup. Their entire team is joining us. They have no formal HR — no pay bands, no performance reviews, no employee handbook. The founder set salaries "based on what felt fair." I need to integrate this team. Where do I start?
```

**Expected Response Elements:**
- Prioritized integration plan: (1) Compliance essentials (handbook, policies, I-9 re-verification), (2) Compensation mapping (slot into existing bands), (3) Benefits harmonization, (4) Performance management alignment, (5) Cultural integration
- Compensation mapping is the most sensitive task — expect significant pay inconsistencies in the acquired team
- Run every acquired employee through the leveling framework: map their role to the closest NovaTech equivalent, determine the appropriate level, and compare their current pay to the NovaTech band
- Expect findings: some people overpaid relative to NovaTech bands (founder favorites), some underpaid (especially non-technical roles), likely no equity or inconsistent equity
- Legal requirements: acquired employees may need new offer letters, benefits enrollment within 30 days, and COBRA for any changes in health plan
- Communication plan: acquired team is anxious about changes. Lead with "no one will have their pay reduced" (if that's the policy) and provide clear timeline for integration

**Message 2 — Compensation Chaos**
```
As expected, it's a mess. The acquired startup's "lead engineer" makes $280K (way above our L5 band), their office manager makes $52K (below our L1 minimum), and the founder's college roommate is a "VP of Strategy" making $200K but has no direct reports and his role doesn't map to anything we have. How do I sort this out?
```

**Expected Response Elements:**
- Handle each case separately with clear rationale:
- Lead engineer at $280K: similar to the Wei Zhang situation — don't reduce pay (creates legal and morale risk during acquisition). Map to the correct level. If L5, document the above-band exception with a retention rationale. Consider whether L6 is appropriate. Freeze base salary increases until the band catches up, and use equity/bonus for ongoing retention.
- Office manager at $52K: bring to at minimum the L1 floor ($55K) immediately. Paying below your own minimum creates internal equity problems and potential legal exposure if the role has been misclassified. Review for exempt/non-exempt classification.
- "VP of Strategy" (founder's roommate): this is the hardest one. Conduct an honest role assessment. If the role doesn't exist in the NovaTech structure, options are: (1) redefine the role with clear scope and map to appropriate level, (2) offer a transitional role with a defined timeline, or (3) negotiate a separation with severance. Do NOT create a phantom VP title that undermines the leadership structure.
- General principle: honor existing compensation through the acquisition close (contractual obligation), then migrate to NovaTech bands over 6-12 months using a combination of band alignment, merit adjustments, and honest conversations.

**Message 3 — The Founder Problem**
```
The acquired company's founder (now reporting to our CTO) is undermining the integration. He's telling his former team to "ignore the HR stuff" and that "NovaTech's processes will kill our culture." Two of his people have already asked about leaving. What do I do?
```

**Expected Response Elements:**
- This is an employee relations issue that requires swift, direct intervention — but through the right channel
- The CTO (founder's manager) must address this directly in a 1:1. The message: "You are now part of NovaTech. Telling your team to ignore company processes is insubordination and undermines the integration that the entire company is investing in."
- Document the behavior: specific statements, dates, who heard them, impact on integration
- Understand the founder's concerns: is he resisting because the processes are genuinely wrong for his team, or because he's lost control? If it's the former, there may be legitimate feedback. If it's the latter, it's a leadership problem.
- For the two employees asking about leaving: immediate retention conversations. What are their concerns? What would make them stay? This is a flight-risk moment that requires proactive outreach, not waiting.
- If the founder continues after coaching, this becomes a progressive discipline issue — documented expectations, written warning, and if necessary, termination with appropriate severance and non-disparagement provisions
- Broader lesson: acquisition integration requires executive alignment before it reaches the team level. The CTO should have had an explicit conversation with the founder about behavioral expectations before the deal closed.

**Message 4 — Compliance Gaps**
```
While reviewing the acquired company's records, we discovered they classified all 50 employees as exempt salaried — including the office manager ($52K), two customer support reps ($48K and $50K), and a data entry specialist ($45K). They've never paid overtime. What's our exposure?
```

**Expected Response Elements:**
- This is a FLSA misclassification issue with significant back-pay liability. The office manager, customer support reps, and data entry specialist almost certainly do not meet the duties tests for any FLSA exemption (executive, administrative, professional, computer employee, or outside sales).
- Exposure calculation: back overtime for 2-3 years (FLSA statute of limitations is 2 years for non-willful, 3 years for willful violations). If these employees regularly worked 45+ hours/week, the back-pay exposure for 4 employees over 2-3 years could be $50,000-$150,000+
- Liquidated damages: FLSA provides for liquidated damages equal to the unpaid wages (effectively doubling the exposure) unless the employer can show good faith
- Immediate actions: (1) Reclassify the misclassified employees as non-exempt immediately. (2) Implement time tracking for newly non-exempt employees. (3) Engage outside employment counsel to assess total exposure and advise on voluntary remediation vs. waiting for a claim. (4) Consider proactive back-pay settlement — the DOL looks more favorably on employers who self-correct.
- Due diligence question: was this discovered during acquisition due diligence? If so, the acquisition agreement may have indemnification provisions. If it wasn't discovered because due diligence was inadequate, that's a separate issue.
- Communicate carefully: reclassification feels like a demotion to affected employees. Frame it as "ensuring you receive all the protections you're entitled to under federal law, including overtime pay."

**Message 5 — Edge Case: Merged Culture Conflict**
```
Three months into integration, an acquired employee files an anonymous complaint that NovaTech's interview process is "biased against startup people." She says she was passed over for a promotion because the calibration committee told her she "doesn't have enough process experience" despite exceeding her performance goals. Is this a legitimate concern?
```

**Expected Response Elements:**
- Take the complaint seriously — "doesn't have enough process experience" could be a proxy for "didn't come from a big company" which, while not a protected class, signals cultural bias in the promotion process that will drive acquired-team attrition
- Review the promotion criteria: are they written, objective, and applied consistently? If "process experience" was never a stated criterion for the role, citing it as a reason for denial is ad hoc and unfair.
- Review all promotion decisions in the current cycle: are acquired employees being promoted at the same rate as NovaTech legacy employees? If there's a pattern of acquired employees being denied, the system is biased.
- This is not an EEO issue (company of origin is not a protected class), but it IS a retention and integration issue. If acquired employees believe the system is rigged against them, they'll leave — and then the acquisition fails to deliver the talent value it was supposed to.
- Recommended actions: (1) Audit promotion criteria for objectivity. (2) Review this specific decision — if the employee exceeded performance goals, what specifically was the gap? (3) Provide the employee with a clear, written development plan showing what's needed for promotion. (4) Create a mentorship or sponsorship program pairing acquired employees with NovaTech leaders. (5) Track promotion rates by pre-/post-acquisition cohort for the next two cycles.
- Flag to leadership: if acquired employees are systematically held to different (higher) standards, the acquisition premium the company paid is being destroyed by post-merger talent attrition.
