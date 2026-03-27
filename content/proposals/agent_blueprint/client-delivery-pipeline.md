# Client Delivery Pipeline

**Automate the full arc from client brief to delivered work — without dropping the ball between steps.**

| Detail | Value |
|--------|-------|
| Agents | 4 |
| Setup time | ~15 minutes |
| Difficulty | Beginner |
| Access | Pro only |

---

## The Problem

Freelancers, consultants, and agencies lose time and credibility at handoffs — the proposal doesn't match the project plan, the project plan ignores what the data says, and the final deliverable drifts from the original brief. Each agent in this pipeline receives exactly what it needs from the one before it, so nothing falls through the cracks between intake and delivery.

---

## The Pipeline

```
┌─────────────────┐
│  CLIENT BRIEF   │  (your input: scope, goals, client name, budget)
└────────┬────────┘
         │
         ▼
┌─────────────────────┐
│  PROPOSAL WRITER    │  → produces: project proposal + SOW draft
└────────┬────────────┘
         │
         │  ◀── HUMAN REVIEW CHECKPOINT 1 ──▶
         │      Review proposal before sending to client.
         │      Get client sign-off on scope and budget.
         │
         ▼
┌─────────────────────┐
│  PROJECT MANAGER    │  → produces: project plan, milestones, risk log
└────────┬────────────┘
         │
         │  ◀── HUMAN REVIEW CHECKPOINT 2 ──▶
         │      Confirm milestones match the signed SOW.
         │      Adjust timelines if needed before kickoff.
         │
         ▼
┌─────────────────────┐
│  DATA ANALYST       │  → produces: research brief, KPI framework, data summary
└────────┬────────────┘
         │
         ▼
┌─────────────────────┐
│  CONTENT STRATEGIST │  → produces: final deliverable outline + content plan
└────────┬────────────┘
         │
         │  ◀── HUMAN REVIEW CHECKPOINT 3 ──▶
         │      Final review before delivering to client.
         │      Verify deliverable matches original brief and SOW.
         │
         ▼
┌─────────────────────┐
│  CLIENT DELIVERY    │  (your output: polished, on-scope deliverable)
└─────────────────────┘
```

---

## Agent Roles

### 1. Proposal & SOW Writer

**Prompt Forge Agent ID:** `proposal_writer`

**Role in this pipeline:** First agent in the chain. Translates a raw client brief into a professional project proposal and statement of work that defines scope, deliverables, timeline, and pricing. Sets the contract that every downstream agent works within.

**Input:** Client name, project goals, scope description, budget range, timeline constraints, any known risks or exclusions.

**Output:** Full project proposal (executive summary, problem statement, proposed approach, deliverables list) + Statement of Work (SOW) with milestones, payment schedule, and out-of-scope clause.

**Prompt customizations (userContext suggestions):**
- `"Client is a mid-market SaaS company. Tone should be consultative, not salesy."`
- `"This is a 3-month retainer engagement. SOW should include monthly deliverable checkpoints."`
- `"Include a 'What's Not Included' section — client has a history of scope creep."`

---

### 2. Project Manager

**Prompt Forge Agent ID:** `pm`

**Role in this pipeline:** Receives the signed SOW and translates it into an operational project plan. Owns the milestones, task breakdown, resource allocation, and risk log that will govern actual execution.

**Input:** The SOW output from the Proposal Writer, including deliverables list, milestones, and timeline. Paste the SOW directly into the chat.

**Output:** Full project plan with phases, task-level breakdown, milestone dates, dependency map, resource assignments, and a risk register with mitigation notes.

**Prompt customizations (userContext suggestions):**
- `"Team is two people. Flag any tasks that require external resources."`
- `"Client has a hard deadline of [date]. Work backwards from that."`
- `"Use a phased delivery approach: Discovery, Build, Review, Launch."`

---

### 3. Data Analyst

**Prompt Forge Agent ID:** `data`

**Role in this pipeline:** Translates the project plan's goals into a research and measurement framework. Defines what data needs to be gathered, what metrics will prove success, and surfaces any existing data the content work should be grounded in.

**Input:** Project goals and success criteria from the SOW + milestone context from the Project Manager's plan. Include the KPIs or success metrics if the client specified them.

**Output:** Research brief (what questions need answering), KPI framework (how success will be measured), data summary or audit notes (what exists vs. what needs to be sourced), and any analytical caveats or data quality flags.

**Prompt customizations (userContext suggestions):**
- `"Client has Google Analytics and a CRM. Start with existing data before recommending new tracking."`
- `"Primary KPI is qualified leads generated. Secondary is content engagement rate."`
- `"Benchmarks should be industry-specific — client is in B2B professional services."`

---

### 4. Content Strategist

**Prompt Forge Agent ID:** `content`

**Role in this pipeline:** Final agent before delivery. Receives the project goals, plan, and data framework, then produces the content plan and deliverable outline that the client actually receives. This is the agent closest to the final work product.

**Input:** Project goals and deliverables list from the SOW + milestone structure from the Project Manager + KPI framework and research brief from the Data Analyst. Paste all three as context.

**Output:** Content strategy document including deliverable outline, content calendar (if applicable), messaging framework, channel recommendations, and content-to-KPI mapping so the client can see how each piece of content connects to a business goal.

**Prompt customizations (userContext suggestions):**
- `"Deliverables include a whitepaper, 4 blog posts, and a LinkedIn campaign. Build the strategy around those formats."`
- `"Audience is CFOs and finance directors. Adjust tone and depth accordingly."`
- `"Client wants thought leadership positioning, not product promotion."`

---

## Handoff Protocol

This table shows exactly what to copy from each agent's output and paste into the next agent's input.

| From | To | What to Copy |
|------|----|--------------|
| Client Brief | Proposal Writer | Full brief text — goals, client name, scope, budget, timeline, any constraints |
| Proposal Writer | Project Manager | Full SOW section — deliverables list, milestones, payment schedule, out-of-scope clause |
| Project Manager | Data Analyst | Project goals, success criteria, milestone names, and any KPIs already mentioned in the SOW |
| Data Analyst | Content Strategist | KPI framework, research brief summary, data audit notes, and the deliverables list from the SOW |

### Human Review Checkpoints

**Checkpoint 1 — After Proposal Writer**
Review the proposal and SOW before sending it to the client. Check that scope matches your actual capacity, pricing reflects your margins, and the out-of-scope clause protects you from the most likely areas of creep. Get client sign-off before moving to planning.

**Checkpoint 2 — After Project Manager**
Confirm that every milestone in the project plan maps directly to a deliverable in the signed SOW. If the client negotiated changes during sign-off, update the SOW before running this agent. Adjust timelines if resource constraints have shifted since the proposal was written.

**Checkpoint 3 — After Content Strategist**
Before delivering to the client, verify the final content plan addresses everything in the SOW's deliverables list. Check that the KPI-to-content mapping makes sense and that the tone and format match what the client was expecting based on your kickoff conversation. This is your last gate before the client sees it.

---

## Technical Appendix

For builders who want to run this pipeline programmatically, below are implementation sketches for the two most common agent orchestration frameworks.

### CrewAI — Sequential Crew

```python
from crewai import Agent, Task, Crew, Process

# Define agents
proposal_writer = Agent(
    role="Proposal & SOW Writer",
    goal="Turn a raw client brief into a signed-ready project proposal and statement of work",
    backstory="Expert in consulting engagements, scope definition, and contract language for professional services",
    verbose=True
)

project_manager = Agent(
    role="Project Manager",
    goal="Convert a signed SOW into an executable project plan with milestones and risk management",
    backstory="Experienced delivery manager who specializes in translating client agreements into operational roadmaps",
    verbose=True
)

data_analyst = Agent(
    role="Data Analyst",
    goal="Define the research framework and KPIs that will measure project success",
    backstory="Analytical strategist who grounds deliverables in data and ensures every goal is measurable",
    verbose=True
)

content_strategist = Agent(
    role="Content Strategist",
    goal="Produce the final deliverable outline and content plan mapped to project KPIs",
    backstory="Senior content strategist who translates business goals and data frameworks into audience-ready content plans",
    verbose=True
)

# Define tasks
task_proposal = Task(
    description="Write a full project proposal and SOW based on the client brief: {client_brief}",
    agent=proposal_writer,
    expected_output="Project proposal with executive summary, deliverables list, timeline, and SOW with milestones and out-of-scope clause"
)

task_plan = Task(
    description="Create a full project plan from the SOW produced in the previous task",
    agent=project_manager,
    expected_output="Project plan with phased milestones, task breakdown, resource assignments, and risk register"
)

task_data = Task(
    description="Build a research brief and KPI framework based on the project goals and plan",
    agent=data_analyst,
    expected_output="Research brief, KPI framework, data audit notes, and measurement recommendations"
)

task_content = Task(
    description="Produce the final content strategy and deliverable outline using all prior context",
    agent=content_strategist,
    expected_output="Content strategy document with deliverable outline, messaging framework, channel plan, and KPI-to-content mapping"
)

# Assemble and run the crew
crew = Crew(
    agents=[proposal_writer, project_manager, data_analyst, content_strategist],
    tasks=[task_proposal, task_plan, task_data, task_content],
    process=Process.sequential,
    verbose=True
)

result = crew.kickoff(inputs={"client_brief": "Your client brief text here"})
print(result)
```

> Note: In a production implementation, add human-in-the-loop checkpoints after `task_proposal` and `task_plan` using CrewAI's callback hooks or by splitting the crew into separate runs with a manual gate between them.

---

### LangGraph — StateGraph Implementation

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict

# Define shared state
class PipelineState(TypedDict):
    client_brief: str
    proposal: str
    sow: str
    project_plan: str
    data_framework: str
    content_strategy: str

# Define node functions (each calls your LLM of choice with an appropriate prompt)
def run_proposal_writer(state: PipelineState) -> PipelineState:
    prompt = f"""
    You are a Proposal & SOW Writer. Given this client brief, produce a full project proposal
    and statement of work including deliverables, milestones, timeline, and out-of-scope clause.

    Client Brief: {state['client_brief']}
    """
    # response = your_llm_call(prompt)
    state["proposal"] = "[proposal output]"
    state["sow"] = "[sow output]"
    return state

def run_project_manager(state: PipelineState) -> PipelineState:
    prompt = f"""
    You are a Project Manager. Given this SOW, produce a full project plan with phases,
    milestones, task breakdown, resource assignments, and risk register.

    SOW: {state['sow']}
    """
    # response = your_llm_call(prompt)
    state["project_plan"] = "[project plan output]"
    return state

def run_data_analyst(state: PipelineState) -> PipelineState:
    prompt = f"""
    You are a Data Analyst. Given these project goals and plan, produce a research brief
    and KPI framework that will measure project success.

    Project Plan: {state['project_plan']}
    SOW: {state['sow']}
    """
    # response = your_llm_call(prompt)
    state["data_framework"] = "[data framework output]"
    return state

def run_content_strategist(state: PipelineState) -> PipelineState:
    prompt = f"""
    You are a Content Strategist. Given the project plan and data framework, produce the
    final content strategy with deliverable outline and KPI-to-content mapping.

    SOW: {state['sow']}
    Project Plan: {state['project_plan']}
    Data Framework: {state['data_framework']}
    """
    # response = your_llm_call(prompt)
    state["content_strategy"] = "[content strategy output]"
    return state

# Build the graph
graph = StateGraph(PipelineState)

graph.add_node("proposal_writer", run_proposal_writer)
graph.add_node("pm", run_project_manager)
graph.add_node("data", run_data_analyst)
graph.add_node("content", run_content_strategist)

graph.set_entry_point("proposal_writer")
graph.add_edge("proposal_writer", "pm")
graph.add_edge("pm", "data")
graph.add_edge("data", "content")
graph.add_edge("content", END)

app = graph.compile()

# Run the pipeline
result = app.invoke({
    "client_brief": "Your client brief text here",
    "proposal": "",
    "sow": "",
    "project_plan": "",
    "data_framework": "",
    "content_strategy": ""
})

print(result["content_strategy"])
```

> Note: To add human review checkpoints in LangGraph, use `interrupt_before` on the nodes that follow each checkpoint: `app = graph.compile(interrupt_before=["pm", "content"])`. This pauses execution and lets you inspect and edit state before the next node runs.

---

### Prompt Forge Agent Links

| Agent | Role in Pipeline | Prompt Forge URL |
|-------|-----------------|------------------|
| Proposal & SOW Writer | Intake → Proposal + SOW | https://www.getpromptforge.net/forge?agent=proposal_writer |
| Project Manager | SOW → Project Plan | https://www.getpromptforge.net/forge?agent=pm |
| Data Analyst | Goals → KPI Framework | https://www.getpromptforge.net/forge?agent=data |
| Content Strategist | All context → Deliverable | https://www.getpromptforge.net/forge?agent=content |
