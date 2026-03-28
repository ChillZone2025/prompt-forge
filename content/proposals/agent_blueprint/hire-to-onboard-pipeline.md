# Hire-to-Onboard Pipeline

**Screen, interview, offer, and onboard new hires with 4 AI agents — from job req to Day 1.**

| Detail | Value |
|--------|-------|
| Agents | 4 |
| Setup time | ~15 minutes |
| Difficulty | Beginner |
| Access | Pro only |

---

## The Problem

Hiring is one of the most time-consuming processes in any growing company. A single hire involves screening dozens — sometimes hundreds — of resumes, designing structured interviews, drafting compliant offer letters, and building an onboarding plan, all while the hiring manager does their actual job. Each step lives in a different tool, a different template, or someone's tribal knowledge that walks out the door when they do.

This pipeline is built for HR teams of 1–5 people, recruiting agencies, and hiring managers at companies with 10–500 employees. Each agent receives exactly what it needs from the one before it — the job requisition flows into a ranked shortlist, which flows into a structured interview guide, which feeds a compliant offer package, which produces a 90-day onboarding plan. One job req in, a complete hire out.

---

## The Pipeline

```
┌──────────────────────────┐
│     JOB REQUISITION      │  (your input: role title, requirements, must-haves,
│                          │   nice-to-haves, compensation band, start date)
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│    RESUME SCREENER       │  → produces: ranked candidate shortlist with
│                          │             match scores, strengths/gaps,
│                          │             bias flags, recommended interview pool
└────────────┬─────────────┘
             │
             │  ◀── HUMAN REVIEW CHECKPOINT 1 ──▶
             │      Review shortlist before scheduling interviews.
             │      Confirm top candidates match your actual priorities.
             │      Adjust pool size or override rankings if needed.
             │
             ▼
┌──────────────────────────┐
│   INTERVIEW ARCHITECT    │  → produces: structured interview guide with
│                          │             8-12 questions, scoring rubric,
│                          │             interviewer instructions, red flags
└────────────┬─────────────┘
             │
             │  ◀── HUMAN REVIEW CHECKPOINT 2 ──▶
             │      Review scores after interviews are complete.
             │      Confirm selected candidate before extending offer.
             │      Document any deviations from the rubric.
             │
             ▼
┌──────────────────────────┐
│   OFFER LETTER AGENT     │  → produces: complete offer package with role,
│                          │             compensation breakdown, benefits,
│                          │             conditions, legal language, signature blocks
└────────────┬─────────────┘
             │
             │  ◀── HUMAN REVIEW CHECKPOINT 3 ──▶
             │      Review offer letter before sending to candidate.
             │      Verify compensation, benefits, and legal language.
             │      Get sign-off from finance or legal if required.
             │
             ▼
┌──────────────────────────┐
│    ONBOARDING AGENT      │  → produces: Day 1 checklist, first-week schedule,
│                          │             30/60/90-day milestones, key contacts,
│                          │             success metrics
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│     NEW HIRE — DAY 1     │  (your output: fully prepped, structured onboarding
│                          │   plan ready before the hire walks in the door)
└──────────────────────────┘
```

---

## Agent Roles

### 1. Resume Screener

**Prompt Forge Agent ID:** `resume_screen`

**Role in this pipeline:** First agent in the chain. Takes the job requisition and a batch of resumes, then ranks candidates with transparent scoring and explicit bias flags. Every ranking decision is explained — not a black box. Sets the interview pool that every downstream agent works from.

**Input:** Job requisition (role title, required qualifications, must-haves, nice-to-haves, compensation band) + resume batch (paste or upload candidate resumes, one per message or in a batch summary).

**Output:** Ranked shortlist with per-candidate match scores (0–100), strengths and gaps relative to the job req, bias flags for any criteria that could introduce adverse impact, and a recommended interview pool size with justification.

**Prompt customizations (userContext suggestions):**
- `"Role is a Senior DevOps Engineer. Must-haves: 5+ years Kubernetes, AWS certified. Nice-to-haves: Terraform, GitOps experience."`
- `"We are screening 47 resumes. Recommend top 8 for phone screens and flag anyone with unexplained employment gaps over 12 months."`
- `"Bias flags are critical — we have an active DEI initiative. Surface any criteria that could disadvantage protected groups."`

---

### 2. Interview Architect

**Prompt Forge Agent ID:** `interview_arch`

**Role in this pipeline:** Receives the job requisition and the shortlisted candidates, then designs a structured interview that every interviewer runs consistently. Eliminates the "whatever I feel like asking today" problem that kills hiring signal and creates legal exposure.

**Input:** Job requisition from the hiring manager + candidate shortlist from the Resume Screener (paste the top candidates' profiles and match scores). Include the number of interviewers and the interview format (phone screen, panel, technical, behavioral, or a combination).

**Output:** Interview guide with 8–12 structured questions mapped to specific competencies, scoring rubric with 1–5 ratings and behavioral anchors for each score level, interviewer instructions (how to probe, what to avoid, how to document), and a red flag list for responses that should trigger escalation or disqualification.

**Prompt customizations (userContext suggestions):**
- `"Role requires strong cross-functional communication. Weight behavioral questions on stakeholder management over pure technical depth."`
- `"Two interviewers: hiring manager (technical) and HR (behavioral/culture). Split the guide into two separate sections."`
- `"Interview format is one 60-minute panel. Design for depth on 3 competencies rather than breadth across 10."`

---

### 3. Offer Letter Agent

**Prompt Forge Agent ID:** `offer_letter`

**Role in this pipeline:** Takes the selected candidate's details and produces a complete, compliant offer package. Handles the compensation structure, benefits summary, employment conditions, and legal language so you are not copying from a four-year-old template or searching for the right statutory disclosure language.

**Input:** Selected candidate name and role, compensation band and final offer amount, benefits package details, employment type (full-time, part-time, contractor), start date, reporting manager, jurisdiction (state/country for legal compliance language), and any special conditions (sign-on bonus, equity, probationary period, relocation).

**Output:** Complete offer letter including role title and department, base compensation with pay frequency, variable compensation structure (if applicable), benefits summary, employment conditions and contingencies (background check, drug screen, reference checks), legal disclosures appropriate to the jurisdiction, at-will language (or equivalent), and signature blocks for both parties.

**Prompt customizations (userContext suggestions):**
- `"Jurisdiction is California. Include required CCPA disclosure and comply with CA salary history ban."`
- `"Offer includes $10,000 sign-on bonus with 12-month clawback provision. Add repayment terms."`
- `"This is a contractor engagement, not W-2 employment. Remove benefits language and include IC classification language instead."`

---

### 4. Onboarding Agent

**Prompt Forge Agent ID:** `onboard_agent`

**Role in this pipeline:** Final agent in the chain. Takes the new hire's role, department, start date, and team structure, then builds the complete onboarding plan from Day 1 through 90 days. Eliminates the "we figured it out as we went" problem that costs companies 3–6 months of ramp time on every new hire.

**Input:** Role title and department, start date, reporting manager and team structure, required tools and system access (HR system, Slack, project management, code repositories, etc.), key contacts and internal stakeholders the hire needs to meet, and any role-specific training or certification requirements.

**Output:** Day 1 checklist (logistics, system access, introductions, first-day priorities), first-week schedule (structured daily agenda), 30/60/90-day milestones (what success looks like at each stage), key contacts list with relationship context, and success metrics the hiring manager can use to evaluate early performance without micromanaging.

**Prompt customizations (userContext suggestions):**
- `"Start date is Monday. Role is remote-first. Include Slack channel list, video conferencing setup, and async communication norms."`
- `"Department is engineering. First 30 days should be heavy on codebase orientation, architecture review, and pairing sessions before independent work begins."`
- `"Team size is 4. Include a suggested 1:1 schedule with each team member in the first two weeks."`

---

## Handoff Protocol

This table shows exactly what to copy from each agent's output and paste into the next agent's input.

| From | To | What to Copy |
|------|----|--------------|
| Job Requisition | Resume Screener | Full job req — role title, required qualifications, must-haves, nice-to-haves, compensation band. **Keep this accessible throughout the pipeline — Agents 2 and 3 also need it.** |
| Resume Screener | Interview Architect | Top candidates from the shortlist — names, match scores, strengths, gaps. Include the job req again as context. |
| Interview Architect (post-interviews) | Offer Letter Agent | Selected candidate name and interview scorecard summary. Include the job req for role and compensation band reference. |
| Offer Letter Agent | Onboarding Agent | Accepted candidate's role title, department, start date, reporting manager. Add team structure and required tools separately. |

> Note: The job requisition is the spine of this pipeline. Keep it in a doc or clipboard and pass it into Agents 1, 2, and 3 — not just the first one. Each agent uses it for different reasons: screening uses requirements, the interview guide uses competencies, and the offer letter uses compensation band and role scope.

### Human Review Checkpoints

**Checkpoint 1 — After Resume Screener**
Review the ranked shortlist before scheduling a single interview. Confirm that the top candidates actually match your real priorities — not just the written job req, which is often incomplete. Check the bias flags and decide whether any criteria need to be weighted differently. The interview pool size affects everything downstream; set it deliberately, not by default.

**Checkpoint 2 — After Interview Architect (post-interviews)**
This checkpoint happens after the interviews are complete, not before. Use the scoring rubric from the Interview Architect to consolidate scores across interviewers, then review the results before contacting the candidate. Confirm that the selected candidate's scores justify the offer you plan to make and document any interviewer disagreements before moving to the offer stage.

**Checkpoint 3 — After Offer Letter Agent**
Read every line of the offer letter before it goes to the candidate. Verify the compensation figures match what finance approved, the benefits summary reflects your current plan year, and the legal language is appropriate for the candidate's jurisdiction. If your company requires legal or HR sign-off before offers go out, this is the gate. Do not send an AI-generated offer letter without a human reading it in full.

---

## Technical Appendix

For builders who want to run this pipeline programmatically, below are implementation sketches for the two most common agent orchestration frameworks.

### CrewAI — Sequential Crew

```python
from crewai import Agent, Task, Crew, Process

# Requires OPENAI_API_KEY env var, or pass llm=YourLLM() to each Agent
# Define agents
resume_screener = Agent(
    role="Resume Screener",
    goal="Rank a batch of candidates against a job requisition with transparent scoring, bias flags, and a recommended interview pool",
    backstory="HR specialist and talent analyst trained in structured hiring, adverse impact analysis, and competency-based candidate evaluation",
    verbose=True
)

interview_architect = Agent(
    role="Interview Architect",
    goal="Design a structured interview guide with competency-mapped questions, behavioral anchors, and a consistent scoring rubric",
    backstory="Organizational psychologist and interviewing expert who builds structured hiring processes that improve signal quality and reduce legal exposure",
    verbose=True
)

offer_letter_agent = Agent(
    role="Offer Letter Agent",
    goal="Produce a complete, compliant offer package with compensation breakdown, benefits, employment conditions, and jurisdiction-appropriate legal language",
    backstory="Employment law-aware HR professional who drafts offer letters that are legally sound, clearly structured, and candidate-ready",
    verbose=True
)

onboarding_agent = Agent(
    role="Onboarding Agent",
    goal="Build a complete Day 1 through 90-day onboarding plan that ramps a new hire to full productivity with clear milestones and success metrics",
    backstory="People operations specialist who designs structured onboarding programs that cut ramp time, reduce early attrition, and set new hires up to succeed",
    verbose=True
)

# Define tasks
task_screen = Task(
    description="Screen this resume batch against the job requisition and produce a ranked shortlist: {job_req}. Resumes: {resumes}",
    agent=resume_screener,
    expected_output="Ranked candidate shortlist with match scores (0-100), per-candidate strengths and gaps, bias flags, and a recommended interview pool with justification"
)

task_interview = Task(
    description="Design a structured interview guide for the shortlisted candidates from the previous task. Reference the original job requisition for competency mapping.",
    agent=interview_architect,
    context=[task_screen],  # Interview Architect needs the shortlist AND the job req context — not just the immediately preceding task output
    expected_output="Interview guide with 8-12 competency-mapped questions, 1-5 scoring rubric with behavioral anchors, interviewer instructions, and red flag list"
)

task_offer = Task(
    description="Draft a complete offer letter for the selected candidate. Use the job requisition for role scope and compensation band, and the screening output for candidate details.",
    agent=offer_letter_agent,
    context=[task_screen, task_interview],  # Offer Letter Agent needs candidate details from screening and role context from the job req
    expected_output="Complete offer letter with role title, compensation breakdown, benefits summary, employment conditions, jurisdiction-appropriate legal language, and signature blocks"
)

task_onboard = Task(
    description="Build a complete onboarding plan for the new hire from Day 1 through 90 days based on their role, department, and team structure.",
    agent=onboarding_agent,
    expected_output="Day 1 checklist, first-week schedule, 30/60/90-day milestones, key contacts list, and success metrics for the hiring manager"
)

# Assemble and run the crew
crew = Crew(
    agents=[resume_screener, interview_architect, offer_letter_agent, onboarding_agent],
    tasks=[task_screen, task_interview, task_offer, task_onboard],
    process=Process.sequential,
    verbose=True
)

result = crew.kickoff(inputs={"job_req": "Your job requisition here", "resumes": "Your resume batch here"})
print(result)
```

> Note: In a production implementation, add human-in-the-loop checkpoints after `task_screen` and `task_offer` using CrewAI's callback hooks or by splitting the crew into separate runs with a manual gate between them.

---

### LangGraph — StateGraph Implementation

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict

# Define shared state
class HiringState(TypedDict):
    job_req: str
    resumes: str
    shortlist: str
    interview_guide: str
    offer_letter: str
    onboarding_plan: str

# Define node functions — each returns ONLY the keys it sets (partial dict)
def run_resume_screener(state: HiringState) -> dict:
    prompt = f"""
    You are a Resume Screener. Given this job requisition and resume batch, rank the candidates
    with match scores (0-100), per-candidate strengths and gaps, explicit bias flags, and a
    recommended interview pool with justification.

    Job Requisition: {state['job_req']}
    Resumes: {state['resumes']}
    """
    # response = your_llm_call(prompt)
    return {"shortlist": "[shortlist output]"}

def run_interview_architect(state: HiringState) -> dict:
    prompt = f"""
    You are an Interview Architect. Given this job requisition and candidate shortlist, design
    a structured interview guide with 8-12 competency-mapped questions, a 1-5 scoring rubric
    with behavioral anchors for each level, interviewer instructions, and a red flag list.

    Job Requisition: {state['job_req']}
    Candidate Shortlist: {state['shortlist']}
    """
    # response = your_llm_call(prompt)
    return {"interview_guide": "[interview guide output]"}

def run_offer_letter_agent(state: HiringState) -> dict:
    prompt = f"""
    You are an Offer Letter Agent. Given the selected candidate's details and the job requisition,
    produce a complete offer letter with role title, compensation breakdown, benefits summary,
    employment conditions, jurisdiction-appropriate legal language, and signature blocks.

    Job Requisition: {state['job_req']}
    Candidate Details: {state['shortlist']}
    """
    # response = your_llm_call(prompt)
    return {"offer_letter": "[offer letter output]"}

def run_onboarding_agent(state: HiringState) -> dict:
    prompt = f"""
    You are an Onboarding Agent. Given the new hire's role, department, and start context from
    the job requisition and offer, build a complete onboarding plan: Day 1 checklist, first-week
    schedule, 30/60/90-day milestones, key contacts list, and success metrics.

    Job Requisition: {state['job_req']}
    Offer Letter: {state['offer_letter']}
    """
    # response = your_llm_call(prompt)
    return {"onboarding_plan": "[onboarding plan output]"}

# Build the graph
graph = StateGraph(HiringState)

graph.add_node("resume_screen", run_resume_screener)
graph.add_node("interview_arch", run_interview_architect)
graph.add_node("offer_letter", run_offer_letter_agent)
graph.add_node("onboard_agent", run_onboarding_agent)

graph.set_entry_point("resume_screen")
graph.add_edge("resume_screen", "interview_arch")
graph.add_edge("interview_arch", "offer_letter")
graph.add_edge("offer_letter", "onboard_agent")
graph.add_edge("onboard_agent", END)

app = graph.compile()

# Run the pipeline
result = app.invoke({"job_req": "Your job requisition here", "resumes": "Your resume batch here"})

print(result["onboarding_plan"])
```

> Note: To add human review checkpoints in LangGraph, use `interrupt_before` on the nodes that follow each checkpoint: `app = graph.compile(interrupt_before=["interview_arch", "offer_letter", "onboard_agent"])`. This pauses execution and lets you inspect and edit state before the next node runs.

---

### Prompt Forge Agent Links

| Agent | Role in Pipeline | Prompt Forge URL |
|-------|-----------------|------------------|
| Resume Screener | Job Req + Resumes → Ranked Shortlist | https://www.getpromptforge.net/forge?agent=resume_screen |
| Interview Architect | Shortlist → Structured Interview Guide | https://www.getpromptforge.net/forge?agent=interview_arch |
| Offer Letter Agent | Selected Candidate → Compliant Offer Package | https://www.getpromptforge.net/forge?agent=offer_letter |
| Onboarding Agent | New Hire Details → 90-Day Onboarding Plan | https://www.getpromptforge.net/forge?agent=onboard_agent |
