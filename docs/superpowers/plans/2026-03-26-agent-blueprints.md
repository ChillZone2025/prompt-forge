# Agent Blueprints Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 3 Pro-only Agent Blueprint documents in Playbook format, staged in `/content/proposals/agent_blueprint/` for Rob's review.

**Architecture:** Each blueprint is a standalone markdown document following the fixed Playbook template from the design spec. All blueprints reference existing Prompt Forge agents by ID. No code changes, no UI work — pure content production.

**Spec:** `docs/superpowers/specs/2026-03-26-agent-blueprints-design.md`

**Template reference:** All 6 sections of the Playbook format must appear in every blueprint:
1. Header Block (title, subtitle, agent count, setup time, difficulty, Pro badge)
2. The Problem (pain point, who experiences it)
3. The Pipeline (ASCII diagram with labeled arrows)
4. Agent Roles (one subsection per agent: ID, pipeline role, input, output, prompt customizations)
5. Handoff Protocol (human review points, how outputs flow)
6. Technical Appendix (CrewAI/LangGraph sketch, agent definitions, I/O schemas)

---

### Task 1: Client Delivery Pipeline Blueprint

**Files:**
- Create: `content/proposals/agent_blueprint/client-delivery-pipeline.md`

- [ ] **Step 1: Create the blueprint file with full content**

Write `content/proposals/agent_blueprint/client-delivery-pipeline.md` with this exact content:

```markdown
# Agent Blueprint: Client Delivery Pipeline

> **Pro-only content** | 4 agents | ~15 min setup | Beginner

**How consultants and agencies turn a lead into a delivered project using 4 AI agents.**

---

## The Problem

Freelancers and small agencies spend 3-5 hours per new client just on the proposal-to-delivery cycle: scoping the work, planning milestones, pulling data, and packaging the final deliverable. Each step is manual, disconnected, and starts from scratch every time.

This blueprint targets solo consultants, boutique agencies (2-10 people), and freelancers managing multiple client engagements simultaneously. If you bill clients for deliverables — reports, strategies, audits, analyses — this pipeline turns a client brief into a polished output in a fraction of the time.

---

## The Pipeline

```
Client Brief (email, call notes, or RFP)
       |
       v
+--------------------+
| Proposal & SOW     |  Scoped proposal with deliverables,
| Writer             |  timeline, and pricing structure
+--------------------+
       |
       v  [Human reviews proposal before sending to client]
+--------------------+
| Project Manager    |  Milestone plan, task breakdown,
|                    |  risk register, dependencies
+--------------------+
       |
       v  [Human approves plan before execution begins]
+--------------------+
| Data Analyst       |  Insights, charts, data narratives
|                    |  from client data
+--------------------+
       |
       v
+--------------------+
| Content Strategist |  Polished client-facing deliverable
|                    |  (report, strategy doc, deck outline)
+--------------------+
       |
       v  [Human reviews deliverable before client delivery]
```

---

## Agent Roles

### Agent 1: Proposal & SOW Writer
- **Prompt Forge agent:** Proposal & SOW Writer (`proposal_writer`)
- **Role in this pipeline:** First in chain. Takes the raw client brief (email, call transcript, or RFP) and produces a structured Statement of Work with defined deliverables, timeline, milestones, and pricing.
- **Input:** Client brief — can be a pasted email, meeting notes, or formal RFP document.
- **Output:** Structured SOW with: project scope, deliverables list, timeline with dates, pricing breakdown, assumptions and exclusions.
- **Prompt customizations for this use case:** When generating the Proposal Writer prompt, add this to userContext: "I run a [your service type] consultancy. My typical engagement is [duration]. My deliverables are usually [type]. Generate a proposal template that includes scope, deliverables, timeline, pricing, and assumptions sections."

### Agent 2: Project Manager
- **Prompt Forge agent:** Project Manager (`pm`)
- **Role in this pipeline:** Receives the approved SOW and breaks it into an execution plan. Creates the operational backbone: what gets done, in what order, by when, and what could go wrong.
- **Input:** Approved SOW from Agent 1 (copy the deliverables and timeline sections).
- **Output:** Milestone plan with task breakdown, owner assignments (you vs. client), dependency map, risk register with mitigation actions.
- **Prompt customizations for this use case:** When generating the PM prompt, add this to userContext: "I need to break down a consulting SOW into a project plan. The SOW has [N] deliverables over [duration]. I'm a solo consultant / small team of [N]. Create a milestone plan with tasks, dependencies, and risks."

### Agent 3: Data Analyst
- **Prompt Forge agent:** Data Analyst (`data`)
- **Role in this pipeline:** Execution phase. Takes client data (spreadsheets, reports, databases) and produces the analytical backbone of the deliverable. Generates the insights, charts, and data narratives that make the final output credible and specific.
- **Input:** Client data files plus the relevant milestone from the PM's plan (so the analyst knows what questions to answer).
- **Output:** Data summary with key findings, recommended visualizations, statistical highlights, and narrative explanations suitable for a non-technical client audience.
- **Prompt customizations for this use case:** When generating the Data Analyst prompt, add this to userContext: "I'm analyzing data for a client deliverable in [industry]. The client needs [specific outcome — e.g., market sizing, performance audit, trend analysis]. Data is in [format]. Produce insights with chart recommendations and plain-English narratives."

### Agent 4: Content Strategist
- **Prompt Forge agent:** Content Strategist (`content`)
- **Role in this pipeline:** Final agent. Takes the raw analysis from Agent 3 and packages it into a polished, client-ready deliverable: a report, strategy document, or presentation outline. This is what the client sees.
- **Input:** Data Analyst output (findings, charts, narratives) plus the SOW (so the strategist knows what the client was promised).
- **Output:** Structured client deliverable with executive summary, methodology section, findings with supporting data, recommendations, and next steps.
- **Prompt customizations for this use case:** When generating the Content Strategist prompt, add this to userContext: "I need to package data analysis into a client deliverable. The format is [report / strategy doc / presentation]. The client is [role/industry]. They need [specific outcome]. Tone should be [professional/executive/technical]. Include an executive summary, findings, and recommendations."

---

## Handoff Protocol

### How outputs flow between agents

This is a **manual pipeline** — you copy the output of one agent and paste the relevant sections as input to the next. No automation required. Each agent's output is designed to feed cleanly into the next agent's expected input.

| From | To | What to copy |
|------|----|-------------|
| Proposal Writer | Project Manager | Deliverables list, timeline, and milestone sections from the SOW |
| Project Manager | Data Analyst | The specific milestone/task being executed, plus any client data context |
| Data Analyst | Content Strategist | Full analysis output — findings, chart specs, narratives |

### Human review checkpoints

Three mandatory review points are built into this pipeline:

1. **After Proposal Writer:** Review the SOW before sending to the client. Check: Does the scope match what was discussed? Are the deliverables specific enough? Is the pricing right?
2. **After Project Manager:** Review the milestone plan before starting execution. Check: Are the tasks realistic for your team size? Are dependencies correct? Did the PM flag any risks you hadn't considered?
3. **After Content Strategist:** Review the final deliverable before sending to the client. Check: Does it deliver on everything promised in the SOW? Is the tone right for this client? Are the data points accurate?

---

## Technical Appendix

### CrewAI Implementation Sketch

For technical builders who want to automate this pipeline using CrewAI:

```python
from crewai import Agent, Task, Crew, Process

# Define agents — use Prompt Forge to generate the system prompts
# Go to getpromptforge.net, select each agent, generate the prompt,
# and paste it as the backstory/system prompt below.

proposal_writer = Agent(
    role="Proposal & SOW Writer",
    goal="Turn client briefs into structured Statements of Work",
    backstory="[Paste Prompt Forge output for proposal_writer here]",
    verbose=True
)

project_manager = Agent(
    role="Project Manager",
    goal="Break SOWs into executable milestone plans",
    backstory="[Paste Prompt Forge output for pm here]",
    verbose=True
)

data_analyst = Agent(
    role="Data Analyst",
    goal="Generate insights and data narratives from client data",
    backstory="[Paste Prompt Forge output for data here]",
    verbose=True
)

content_strategist = Agent(
    role="Content Strategist",
    goal="Package analysis into polished client deliverables",
    backstory="[Paste Prompt Forge output for content here]",
    verbose=True
)

# Define tasks — sequential chain
task_proposal = Task(
    description="Given this client brief, produce a Statement of Work: {client_brief}",
    expected_output="Structured SOW with scope, deliverables, timeline, pricing",
    agent=proposal_writer
)

task_plan = Task(
    description="Break this SOW into a milestone plan with tasks and risks",
    expected_output="Milestone plan with task breakdown, dependencies, risk register",
    agent=project_manager
)

task_analysis = Task(
    description="Analyze this client data and produce insights: {client_data}",
    expected_output="Data summary with findings, chart recommendations, narratives",
    agent=data_analyst
)

task_deliverable = Task(
    description="Package these findings into a client-ready deliverable",
    expected_output="Polished report with exec summary, findings, recommendations",
    agent=content_strategist
)

# Assemble the crew — sequential process
crew = Crew(
    agents=[proposal_writer, project_manager, data_analyst, content_strategist],
    tasks=[task_proposal, task_plan, task_analysis, task_deliverable],
    process=Process.sequential,
    verbose=True
)

# Run the pipeline
result = crew.kickoff(inputs={
    "client_brief": "Your client brief text here",
    "client_data": "Your client data here"
})
```

### LangGraph Implementation Sketch

For builders using LangGraph:

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict

class PipelineState(TypedDict):
    client_brief: str
    sow: str
    milestone_plan: str
    analysis: str
    deliverable: str
    human_approved: bool

def write_proposal(state: PipelineState) -> PipelineState:
    # Call your LLM with the Prompt Forge-generated system prompt
    # for proposal_writer, passing state["client_brief"] as input
    state["sow"] = llm_call(system_prompt=PROPOSAL_WRITER_PROMPT,
                            user_input=state["client_brief"])
    return state

def plan_project(state: PipelineState) -> PipelineState:
    state["milestone_plan"] = llm_call(system_prompt=PM_PROMPT,
                                        user_input=state["sow"])
    return state

def analyze_data(state: PipelineState) -> PipelineState:
    state["analysis"] = llm_call(system_prompt=DATA_ANALYST_PROMPT,
                                  user_input=state["milestone_plan"])
    return state

def create_deliverable(state: PipelineState) -> PipelineState:
    state["deliverable"] = llm_call(system_prompt=CONTENT_STRATEGIST_PROMPT,
                                     user_input=state["analysis"])
    return state

# Build the graph
workflow = StateGraph(PipelineState)
workflow.add_node("proposal", write_proposal)
workflow.add_node("planning", plan_project)
workflow.add_node("analysis", analyze_data)
workflow.add_node("deliverable", create_deliverable)

workflow.set_entry_point("proposal")
workflow.add_edge("proposal", "planning")
workflow.add_edge("planning", "analysis")
workflow.add_edge("analysis", "deliverable")
workflow.add_edge("deliverable", END)

app = workflow.compile()
```

### Prompt Forge Agent Links

Generate each agent's system prompt at getpromptforge.net:

| Pipeline Role | Prompt Forge Agent | Agent ID |
|---------------|-------------------|----------|
| Proposal Writer | Proposal & SOW Writer | `proposal_writer` |
| Project Manager | Project Manager | `pm` |
| Data Analyst | Data Analyst | `data` |
| Content Strategist | Content Strategist | `content` |
```

- [ ] **Step 2: Validate the blueprint against the Playbook template**

Verify all 6 sections are present:
1. Header Block — title, subtitle, agent count, setup time, difficulty, Pro badge ✓
2. The Problem — pain point and audience ✓
3. The Pipeline — ASCII diagram with labeled handoffs ✓
4. Agent Roles — 4 subsections with ID, role, input, output, customizations ✓
5. Handoff Protocol — flow table and human review points ✓
6. Technical Appendix — CrewAI code, LangGraph code, agent links table ✓

- [ ] **Step 3: Commit and push**

```bash
git add content/proposals/agent_blueprint/client-delivery-pipeline.md
git commit -m "feat: add Client Delivery Pipeline agent blueprint"
git push origin master
```

---

### Task 2: Content Marketing Engine Blueprint

**Files:**
- Create: `content/proposals/agent_blueprint/content-marketing-engine.md`

- [ ] **Step 1: Create the blueprint file with full content**

Write `content/proposals/agent_blueprint/content-marketing-engine.md` with this exact content:

```markdown
# Agent Blueprint: Content Marketing Engine

> **Pro-only content** | 4 agents | ~15 min setup | Beginner

**Turn one keyword into a full content pipeline — from SEO brief to 50+ social posts — with 4 AI agents.**

---

## The Problem

Marketing teams and solopreneurs face the same bottleneck: creating consistent, high-quality content at scale. You research a keyword, write a piece, make sure it matches brand voice, plan distribution, then manually chop it into social posts for every platform. Each step is a different tool, a different process, a different headache. Most content dies after one use because repurposing takes too long.

This blueprint targets marketing teams (1-10 people), content agencies, and solopreneurs who publish weekly or more. If you're producing blog posts, newsletters, or thought leadership and want to squeeze maximum distribution from every piece, this pipeline does it.

---

## The Pipeline

```
Target Keyword or Topic
       |
       v
+--------------------+
| SEO Content Agent  |  Content brief with keyword map,
|                    |  topic clusters, search intent
+--------------------+
       |
       v  [Human reviews brief before writing begins]
+--------------------+
| Brand Voice Agent  |  Brand-aligned draft matching
|                    |  tone, messaging, style guide
+--------------------+
       |
       v  [Human reviews draft before distribution planning]
+--------------------+
| Content Strategist |  Editorial calendar, distribution
|                    |  plan, channel strategy
+--------------------+
       |
       v
+--------------------+
| Content Repurposer |  50+ social posts across platforms
|                    |  (LinkedIn, X, Instagram, email)
+--------------------+
       |
       v  [Human reviews posts before scheduling]
```

---

## Agent Roles

### Agent 1: SEO Content Agent
- **Prompt Forge agent:** SEO Content Agent (`seo_content`)
- **Role in this pipeline:** First in chain. Takes a target keyword or topic and produces a comprehensive content brief: primary and secondary keywords, search intent analysis, topic clusters, suggested headings, competitor gap analysis, and recommended word count.
- **Input:** Target keyword or topic (e.g., "AI agent prompts for consulting firms").
- **Output:** Content brief with: primary keyword, secondary keywords (5-10), search intent classification, suggested H2/H3 structure, competitor content gaps, target word count.
- **Prompt customizations for this use case:** When generating the SEO Content Agent prompt, add this to userContext: "I publish content for [industry/niche]. My target audience is [role]. My domain authority is [low/medium/high]. I need a content brief optimized for [Google/LinkedIn/both]. Include keyword difficulty estimates and competitor gaps."

### Agent 2: Brand Voice Agent
- **Prompt Forge agent:** Brand Voice Agent (`brand_voice`)
- **Role in this pipeline:** Takes the SEO brief and produces a brand-aligned draft. Ensures the content matches your established tone, messaging framework, and style guidelines — so every piece sounds like you, not like generic AI output.
- **Input:** Content brief from Agent 1 (keyword map, structure, search intent) plus your brand voice guidelines (if you have them).
- **Output:** Full draft article or content piece aligned to brand voice, hitting all keywords from the brief, structured according to the recommended headings.
- **Prompt customizations for this use case:** When generating the Brand Voice Agent prompt, add this to userContext: "My brand voice is [describe: e.g., authoritative but approachable, technical but clear]. My audience is [role/industry]. Here are examples of my existing content: [paste 2-3 excerpts]. Write in this voice while hitting all SEO targets from the brief."

### Agent 3: Content Strategist
- **Prompt Forge agent:** Content Strategist (`content`)
- **Role in this pipeline:** Takes the finished draft and builds the distribution strategy. Determines which channels get what version, creates an editorial calendar, and plans the content lifecycle — from publish date through promotion through repurposing.
- **Input:** Finished draft from Agent 2 plus your publishing schedule and active channels.
- **Output:** Distribution plan with: publish date, promotion schedule by channel, email integration points, internal linking opportunities, content lifecycle milestones (refresh date, repurpose triggers).
- **Prompt customizations for this use case:** When generating the Content Strategist prompt, add this to userContext: "I publish on [channels: blog, LinkedIn, X, newsletter, etc.]. My publishing cadence is [frequency]. My audience is most active on [channel]. Create a distribution plan that maximizes reach from a single content piece over [timeframe]."

### Agent 4: Content Repurposer
- **Prompt Forge agent:** Content Repurposer (`repurpose`)
- **Role in this pipeline:** Final agent. Takes one finished content asset and explodes it into 50+ platform-specific social posts. Each post is formatted for its target platform (LinkedIn character limits, X thread structure, Instagram carousel format, email subject lines).
- **Input:** Finished draft from Agent 2 plus the distribution plan from Agent 3 (so repurposer knows which platforms and what schedule).
- **Output:** Platform-specific content batch: LinkedIn posts (5-10), X threads (3-5), Instagram carousel scripts (2-3), email newsletter snippets (2-3), pull quotes, and a scheduling recommendation.
- **Prompt customizations for this use case:** When generating the Content Repurposer prompt, add this to userContext: "Repurpose this [article/post/newsletter] into content for [list platforms]. My audience on each platform is [describe]. Maintain the same core message but adapt format, length, and tone for each platform. Include hashtag recommendations and optimal posting times."

---

## Handoff Protocol

### How outputs flow between agents

Manual pipeline — copy relevant output sections as input to the next agent.

| From | To | What to copy |
|------|----|-------------|
| SEO Content Agent | Brand Voice Agent | Full content brief — keywords, structure, search intent, headings |
| Brand Voice Agent | Content Strategist | Finished draft (full text) |
| Brand Voice Agent | Content Repurposer | Finished draft (full text) |
| Content Strategist | Content Repurposer | Distribution plan — channels, schedule, platform priorities |

Note: Agents 3 and 4 both receive output from Agent 2. The Content Strategist tells the Repurposer *where* to distribute; the draft tells it *what* to repurpose.

### Human review checkpoints

Three mandatory review points:

1. **After SEO Content Agent:** Review the content brief before writing begins. Check: Is the keyword strategy aligned with your business goals? Are the competitor gaps real opportunities? Is the suggested structure logical?
2. **After Brand Voice Agent:** Review the draft before distribution planning. Check: Does it sound like your brand? Are all keywords naturally integrated (not stuffed)? Is it genuinely useful to the target reader?
3. **After Content Repurposer:** Review the social posts before scheduling. Check: Does each post work standalone (not just a fragment)? Are platform formats correct? Do the hashtags make sense?

---

## Technical Appendix

### CrewAI Implementation Sketch

```python
from crewai import Agent, Task, Crew, Process

seo_agent = Agent(
    role="SEO Content Agent",
    goal="Create comprehensive content briefs from target keywords",
    backstory="[Paste Prompt Forge output for seo_content here]",
    verbose=True
)

brand_voice = Agent(
    role="Brand Voice Agent",
    goal="Write brand-aligned content drafts from SEO briefs",
    backstory="[Paste Prompt Forge output for brand_voice here]",
    verbose=True
)

content_strategist = Agent(
    role="Content Strategist",
    goal="Build distribution strategies and editorial calendars",
    backstory="[Paste Prompt Forge output for content here]",
    verbose=True
)

repurposer = Agent(
    role="Content Repurposer",
    goal="Transform one asset into 50+ platform-specific posts",
    backstory="[Paste Prompt Forge output for repurpose here]",
    verbose=True
)

task_brief = Task(
    description="Create a content brief for this keyword: {keyword}",
    expected_output="Content brief with keywords, structure, search intent",
    agent=seo_agent
)

task_draft = Task(
    description="Write a brand-aligned draft from this content brief",
    expected_output="Full draft article matching brand voice and SEO targets",
    agent=brand_voice
)

task_strategy = Task(
    description="Create a distribution plan for this content piece",
    expected_output="Editorial calendar with channel strategy and promotion schedule",
    agent=content_strategist
)

task_repurpose = Task(
    description="Repurpose this content into 50+ platform-specific posts",
    expected_output="Batch of LinkedIn, X, Instagram, and email content",
    agent=repurposer
)

crew = Crew(
    agents=[seo_agent, brand_voice, content_strategist, repurposer],
    tasks=[task_brief, task_draft, task_strategy, task_repurpose],
    process=Process.sequential,
    verbose=True
)

result = crew.kickoff(inputs={"keyword": "Your target keyword here"})
```

### LangGraph Implementation Sketch

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict

class ContentState(TypedDict):
    keyword: str
    content_brief: str
    draft: str
    distribution_plan: str
    social_posts: str

def create_brief(state: ContentState) -> ContentState:
    state["content_brief"] = llm_call(
        system_prompt=SEO_CONTENT_PROMPT,
        user_input=state["keyword"]
    )
    return state

def write_draft(state: ContentState) -> ContentState:
    state["draft"] = llm_call(
        system_prompt=BRAND_VOICE_PROMPT,
        user_input=state["content_brief"]
    )
    return state

def plan_distribution(state: ContentState) -> ContentState:
    state["distribution_plan"] = llm_call(
        system_prompt=CONTENT_STRATEGIST_PROMPT,
        user_input=state["draft"]
    )
    return state

def repurpose_content(state: ContentState) -> ContentState:
    state["social_posts"] = llm_call(
        system_prompt=REPURPOSER_PROMPT,
        user_input=f"Draft:\n{state['draft']}\n\nDistribution Plan:\n{state['distribution_plan']}"
    )
    return state

workflow = StateGraph(ContentState)
workflow.add_node("brief", create_brief)
workflow.add_node("draft", write_draft)
workflow.add_node("distribution", plan_distribution)
workflow.add_node("repurpose", repurpose_content)

workflow.set_entry_point("brief")
workflow.add_edge("brief", "draft")
workflow.add_edge("draft", "distribution")
workflow.add_edge("distribution", "repurpose")
workflow.add_edge("repurpose", END)

app = workflow.compile()
```

### Prompt Forge Agent Links

| Pipeline Role | Prompt Forge Agent | Agent ID |
|---------------|-------------------|----------|
| SEO Research | SEO Content Agent | `seo_content` |
| Draft Writing | Brand Voice Agent | `brand_voice` |
| Distribution | Content Strategist | `content` |
| Repurposing | Content Repurposer | `repurpose` |
```

- [ ] **Step 2: Validate the blueprint against the Playbook template**

Verify all 6 sections are present:
1. Header Block — title, subtitle, agent count, setup time, difficulty, Pro badge ✓
2. The Problem — pain point and audience ✓
3. The Pipeline — ASCII diagram with labeled handoffs ✓
4. Agent Roles — 4 subsections with ID, role, input, output, customizations ✓
5. Handoff Protocol — flow table and human review points ✓
6. Technical Appendix — CrewAI code, LangGraph code, agent links table ✓

- [ ] **Step 3: Commit and push**

```bash
git add content/proposals/agent_blueprint/content-marketing-engine.md
git commit -m "feat: add Content Marketing Engine agent blueprint"
git push origin master
```

---

### Task 3: Hire-to-Onboard Pipeline Blueprint

**Files:**
- Create: `content/proposals/agent_blueprint/hire-to-onboard-pipeline.md`

- [ ] **Step 1: Create the blueprint file with full content**

Write `content/proposals/agent_blueprint/hire-to-onboard-pipeline.md` with this exact content:

```markdown
# Agent Blueprint: Hire-to-Onboard Pipeline

> **Pro-only content** | 4 agents | ~15 min setup | Beginner

**Screen, interview, offer, and onboard new hires with 4 AI agents — from job req to Day 1.**

---

## The Problem

Hiring is one of the most time-consuming processes in any growing company. A single hire involves screening dozens (or hundreds) of resumes, designing structured interviews, drafting compliant offer letters, and building an onboarding plan — all while the hiring manager is also doing their actual job. Each step typically uses a different tool, a different template, and a different person's tribal knowledge.

This blueprint targets HR teams (1-5 people), recruiting agencies, and hiring managers at companies with 10-500 employees who hire regularly. If you're running 3+ open roles at a time and drowning in resumes, this pipeline systematizes the entire flow.

---

## The Pipeline

```
Job Requisition (role, requirements, salary band)
       |
       v
+--------------------+
| Resume Screener    |  Ranked candidate shortlist with
|                    |  scoring rationale and bias flags
+--------------------+
       |
       v  [Human reviews shortlist before scheduling interviews]
+--------------------+
| Interview          |  Structured interview guide,
| Architect          |  rubric, and scorecard
+--------------------+
       |
       v  [Human reviews scores before extending offers]
+--------------------+
| Offer Letter Agent |  Compliant offer package with
|                    |  compensation benchmarking
+--------------------+
       |
       v  [Human reviews offer before sending to candidate]
+--------------------+
| Onboarding Agent   |  Day 1 plan, training schedule,
|                    |  30/60/90 milestones
+--------------------+
       |
       v
```

---

## Agent Roles

### Agent 1: Resume Screener
- **Prompt Forge agent:** Resume Screener (`resume_screen`)
- **Role in this pipeline:** First in chain. Takes the job requisition and a batch of resumes, then ranks candidates against the role requirements. Flags potential bias in screening criteria and provides transparent scoring rationale for each candidate.
- **Input:** Job requisition (role title, requirements, must-haves vs. nice-to-haves, salary band) plus resume batch (paste or describe candidates).
- **Output:** Ranked candidate shortlist with: match score per candidate, strengths/gaps analysis, bias flag notes, recommended interview pool (top 5-10).
- **Prompt customizations for this use case:** When generating the Resume Screener prompt, add this to userContext: "I'm hiring for [role] at [company type/size]. Must-have skills: [list]. Nice-to-haves: [list]. I have [N] resumes to screen. Rank candidates with transparent scoring and flag any potential bias in my criteria."

### Agent 2: Interview Architect
- **Prompt Forge agent:** Interview Architect (`interview_arch`)
- **Role in this pipeline:** Takes the shortlisted candidates and the job requirements, then designs a structured interview process: behavioral and technical questions, scoring rubric, and interviewer guide. Ensures consistency across all candidates.
- **Input:** Job requisition plus the candidate shortlist from Agent 1 (so questions can probe identified gaps).
- **Output:** Interview guide with: 8-12 questions (mix of behavioral, technical, situational), scoring rubric (1-5 per question with anchor descriptions), interviewer instructions, red flag indicators.
- **Prompt customizations for this use case:** When generating the Interview Architect prompt, add this to userContext: "I'm interviewing for [role]. The key competencies are [list]. Interview format is [phone screen / panel / technical / multi-round]. I need a structured guide with questions, a scoring rubric, and instructions for [N] interviewers."

### Agent 3: Offer Letter Agent
- **Prompt Forge agent:** Offer Letter Agent (`offer_letter`)
- **Role in this pipeline:** Takes the selected candidate and produces a compliant offer package. Includes compensation benchmarking against market data, benefits summary, and all required legal language for the jurisdiction.
- **Input:** Selected candidate details, role title, compensation band, benefits package, start date, and jurisdiction/state.
- **Output:** Complete offer letter with: role and reporting structure, compensation breakdown (base, bonus, equity if applicable), benefits summary, start date and conditions, legal compliance language, signature blocks.
- **Prompt customizations for this use case:** When generating the Offer Letter Agent prompt, add this to userContext: "I'm extending an offer for [role] in [state/country]. Compensation: [base + bonus + equity]. Benefits include [list]. Employment type is [full-time/contract]. Include all required legal language for [jurisdiction] and a professional but warm tone."

### Agent 4: Onboarding Agent
- **Prompt Forge agent:** Onboarding Agent (`onboard_agent`)
- **Role in this pipeline:** Final agent. Takes the new hire's role and start date, then produces a comprehensive onboarding plan: Day 1 checklist, first-week schedule, training milestones, 30/60/90-day goals, and key contacts.
- **Input:** Role title, department, start date, team structure, and any role-specific tools or systems the new hire needs access to.
- **Output:** Onboarding package with: Day 1 checklist (IT setup, badge, workspace, introductions), first-week schedule (meetings, training sessions, shadowing), 30/60/90-day milestone plan, key contacts and their roles, success metrics for the probation period.
- **Prompt customizations for this use case:** When generating the Onboarding Agent prompt, add this to userContext: "New hire starting [date] as [role] in [department]. Team size is [N]. Key tools they need: [list]. Their manager is [name/role]. Create a Day 1 through 90-day onboarding plan with specific milestones and success metrics."

---

## Handoff Protocol

### How outputs flow between agents

Manual pipeline — copy relevant output sections as input to the next agent.

| From | To | What to copy |
|------|----|-------------|
| Resume Screener | Interview Architect | Job requisition + ranked shortlist (especially gaps to probe) |
| Interview Architect | Offer Letter Agent | Selected candidate details + role requirements |
| Offer Letter Agent | Onboarding Agent | Role title, start date, reporting structure |

Note: The job requisition created at the start feeds into Agents 1, 2, and 3. Keep it accessible throughout.

### Human review checkpoints

Three mandatory review points:

1. **After Resume Screener:** Review the ranked shortlist before scheduling interviews. Check: Does the scoring rationale make sense? Were any strong candidates missed? Are bias flags legitimate concerns or false positives?
2. **After Interview Architect (post-interviews):** Review interview scores before extending an offer. Check: Did the rubric produce consistent scores across interviewers? Does the top candidate's score pattern match your instinct? Any red flags?
3. **After Offer Letter Agent:** Review the offer package before sending to the candidate. Check: Is compensation competitive for this market? Is all legal language correct for the jurisdiction? Does the tone reflect your company culture?

---

## Technical Appendix

### CrewAI Implementation Sketch

```python
from crewai import Agent, Task, Crew, Process

screener = Agent(
    role="Resume Screener",
    goal="Rank candidates against job requirements with transparent scoring",
    backstory="[Paste Prompt Forge output for resume_screen here]",
    verbose=True
)

interviewer = Agent(
    role="Interview Architect",
    goal="Design structured interviews with rubrics and scorecards",
    backstory="[Paste Prompt Forge output for interview_arch here]",
    verbose=True
)

offer_writer = Agent(
    role="Offer Letter Agent",
    goal="Generate compliant offer packages with market benchmarking",
    backstory="[Paste Prompt Forge output for offer_letter here]",
    verbose=True
)

onboarder = Agent(
    role="Onboarding Agent",
    goal="Create comprehensive Day 1 through 90-day onboarding plans",
    backstory="[Paste Prompt Forge output for onboard_agent here]",
    verbose=True
)

task_screen = Task(
    description="Screen these resumes for {role}: {resumes}",
    expected_output="Ranked shortlist with scores, rationale, and bias flags",
    agent=screener
)

task_interview = Task(
    description="Design a structured interview for the shortlisted candidates",
    expected_output="Interview guide with questions, rubric, and interviewer instructions",
    agent=interviewer
)

task_offer = Task(
    description="Draft an offer letter for the selected candidate: {candidate}",
    expected_output="Complete offer package with compensation, benefits, legal language",
    agent=offer_writer
)

task_onboard = Task(
    description="Create an onboarding plan for the new hire starting {start_date}",
    expected_output="Day 1 checklist, first-week schedule, 30/60/90 plan",
    agent=onboarder
)

crew = Crew(
    agents=[screener, interviewer, offer_writer, onboarder],
    tasks=[task_screen, task_interview, task_offer, task_onboard],
    process=Process.sequential,
    verbose=True
)

result = crew.kickoff(inputs={
    "role": "Senior Software Engineer",
    "resumes": "Paste resume batch here",
    "candidate": "Selected candidate details",
    "start_date": "2026-04-15"
})
```

### LangGraph Implementation Sketch

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict

class HiringState(TypedDict):
    job_req: str
    resumes: str
    shortlist: str
    interview_guide: str
    selected_candidate: str
    offer_letter: str
    onboarding_plan: str

def screen_resumes(state: HiringState) -> HiringState:
    state["shortlist"] = llm_call(
        system_prompt=RESUME_SCREENER_PROMPT,
        user_input=f"Job Req:\n{state['job_req']}\n\nResumes:\n{state['resumes']}"
    )
    return state

def design_interviews(state: HiringState) -> HiringState:
    state["interview_guide"] = llm_call(
        system_prompt=INTERVIEW_ARCH_PROMPT,
        user_input=f"Job Req:\n{state['job_req']}\n\nShortlist:\n{state['shortlist']}"
    )
    return state

def draft_offer(state: HiringState) -> HiringState:
    state["offer_letter"] = llm_call(
        system_prompt=OFFER_LETTER_PROMPT,
        user_input=f"Candidate:\n{state['selected_candidate']}\n\nJob Req:\n{state['job_req']}"
    )
    return state

def plan_onboarding(state: HiringState) -> HiringState:
    state["onboarding_plan"] = llm_call(
        system_prompt=ONBOARDING_PROMPT,
        user_input=f"Role:\n{state['job_req']}\n\nOffer:\n{state['offer_letter']}"
    )
    return state

workflow = StateGraph(HiringState)
workflow.add_node("screen", screen_resumes)
workflow.add_node("interview", design_interviews)
workflow.add_node("offer", draft_offer)
workflow.add_node("onboard", plan_onboarding)

workflow.set_entry_point("screen")
workflow.add_edge("screen", "interview")
workflow.add_edge("interview", "offer")
workflow.add_edge("offer", "onboard")
workflow.add_edge("onboard", END)

app = workflow.compile()
```

### Prompt Forge Agent Links

| Pipeline Role | Prompt Forge Agent | Agent ID |
|---------------|-------------------|----------|
| Resume Screening | Resume Screener | `resume_screen` |
| Interview Design | Interview Architect | `interview_arch` |
| Offer Drafting | Offer Letter Agent | `offer_letter` |
| Onboarding | Onboarding Agent | `onboard_agent` |
```

- [ ] **Step 2: Validate the blueprint against the Playbook template**

Verify all 6 sections are present:
1. Header Block — title, subtitle, agent count, setup time, difficulty, Pro badge ✓
2. The Problem — pain point and audience ✓
3. The Pipeline — ASCII diagram with labeled handoffs ✓
4. Agent Roles — 4 subsections with ID, role, input, output, customizations ✓
5. Handoff Protocol — flow table and human review points ✓
6. Technical Appendix — CrewAI code, LangGraph code, agent links table ✓

- [ ] **Step 3: Commit and push**

```bash
git add content/proposals/agent_blueprint/hire-to-onboard-pipeline.md
git commit -m "feat: add Hire-to-Onboard Pipeline agent blueprint"
git push origin master
```

---

### Task 4: Update TASK_QUEUE.md and STATUS.md

**Files:**
- Modify: `TASK_QUEUE.md`
- Modify: `STATUS.md`

- [ ] **Step 1: Add task entry to TASK_QUEUE.md**

Add a new active task entry under `## Active Tasks`:

```markdown
### TASK-005: Agent Blueprints — first 3 playbooks (service expansion)
- **Status:** staged
- **Assigned:** Prompt Agent (staged)
- **Priority:** medium
- **Created:** 2026-03-26
- **Notes:** 3 Agent Blueprint documents staged in content/proposals/agent_blueprint/. Playbook format: business layer + technical appendix (CrewAI/LangGraph). Blueprints: Client Delivery Pipeline (8.05), Content Marketing Engine (8.15), Hire-to-Onboard Pipeline (7.55). All use existing agents. Pro-only content proposal awaiting Rob's review.
```

- [ ] **Step 2: Update STATUS.md proposals section**

Update the "What's In the Proposal Queue" section to include:

```markdown
- `agent_blueprint/client-delivery-pipeline.md` — Pro-only blueprint: 4-agent consulting workflow (proposal → plan → analysis → deliverable)
- `agent_blueprint/content-marketing-engine.md` — Pro-only blueprint: 4-agent content pipeline (SEO → draft → distribute → repurpose)
- `agent_blueprint/hire-to-onboard-pipeline.md` — Pro-only blueprint: 4-agent hiring workflow (screen → interview → offer → onboard)
```

- [ ] **Step 3: Commit and push**

```bash
git add TASK_QUEUE.md STATUS.md
git commit -m "docs: update task queue and status with agent blueprints"
git push origin master
```
