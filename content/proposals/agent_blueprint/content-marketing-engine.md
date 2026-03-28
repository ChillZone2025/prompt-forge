# Content Marketing Engine

**Turn one keyword into a full content pipeline — from SEO brief to 50+ social posts — with 4 AI agents.**

| Detail | Value |
|--------|-------|
| Agents | 4 |
| Setup time | ~15 minutes |
| Difficulty | Beginner |
| Access | Pro only |

---

## The Problem

Marketing teams and solopreneurs face the same bottleneck: creating consistent, high-quality content at scale. Research a keyword, write a piece, match brand voice, plan distribution, then manually chop it into social posts for every platform. Each step is a different tool, a different process. Most content dies after one use because repurposing takes too long.

This pipeline is built for marketing teams of 1–10 people, content agencies, and solopreneurs who publish weekly or more. Each agent receives exactly what it needs from the one before it — keyword research flows into a brand-aligned draft, which flows into a distribution plan, which feeds a full social post library. One keyword in, a complete content campaign out.

---

## The Pipeline

```
┌──────────────────────────┐
│  TARGET KEYWORD OR TOPIC │  (your input: keyword, niche, target audience)
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│   SEO CONTENT AGENT      │  → produces: content brief with keyword map,
│                          │             topic clusters, search intent,
│                          │             H2/H3 structure, competitor gaps
└────────────┬─────────────┘
             │
             │  ◀── HUMAN REVIEW CHECKPOINT 1 ──▶
             │      Review keyword strategy and brief structure.
             │      Confirm search intent matches your goals.
             │      Adjust target word count or H2 structure if needed.
             │
             ▼
┌──────────────────────────┐
│   BRAND VOICE AGENT      │  → produces: full brand-aligned draft hitting
│                          │             all keywords and brief headings
└────────────┬─────────────┘
             │
             │  ◀── HUMAN REVIEW CHECKPOINT 2 ──▶
             │      Review draft for brand alignment and accuracy.
             │      Edit tone, add proprietary examples, fix anything
             │      that doesn't sound like you before moving forward.
             │
             ▼
┌──────────────────────────┐
│   CONTENT STRATEGIST     │  → produces: editorial plan, distribution
│                          │             strategy, email integration,
│                          │             internal linking, lifecycle plan
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│   CONTENT REPURPOSER     │  → produces: 50+ platform-specific social
│                          │             posts (LinkedIn, X, Instagram,
│                          │             email snippets, pull quotes)
└────────────┬─────────────┘
             │
             │  ◀── HUMAN REVIEW CHECKPOINT 3 ──▶
             │      Review social posts before scheduling.
             │      Check platform tone, confirm messaging is on-brand.
             │      Schedule approved posts via your publishing tool.
             │
             ▼
┌──────────────────────────┐
│   CONTENT CAMPAIGN OUT   │  (your output: brief, draft, strategy, 50+ posts)
└──────────────────────────┘
```

---

## Agent Roles

### 1. SEO Content Agent

**Prompt Forge Agent ID:** `seo_content`

**Role in this pipeline:** First agent in the chain. Takes a target keyword or topic and produces a complete content brief — the blueprint every downstream agent works from. Defines search intent, maps keyword clusters, identifies competitor gaps, and sets the structural skeleton of the final piece.

**Input:** Target keyword or topic, plus any context about your niche, audience, or domain authority.

**Output:** Content brief including primary and secondary keywords, search intent classification, competitor gap analysis, H2/H3 heading structure, recommended word count, and topic cluster map for internal linking opportunities.

**Prompt customizations (userContext suggestions):**
- `"Niche is B2B SaaS for HR teams. Domain authority is low — focus on long-tail, low-competition keywords."`
- `"Target platform is a blog. Audience is small business owners with no technical background."`
- `"Prioritize featured snippet optimization — client wants position zero for informational queries."`

---

### 2. Brand Voice Agent

**Prompt Forge Agent ID:** `brand_voice`

**Role in this pipeline:** Receives the SEO brief and writes the actual draft — fully aligned to brand voice, hitting every keyword, and structured per the brief's heading map. This agent bridges the gap between SEO requirements and human-sounding content that readers actually want.

**Input:** Content brief from the SEO Content Agent (paste in full) + brand voice guidelines, including tone descriptors, audience profile, and links or excerpts from existing content examples.

**Output:** Full draft matched to the brief's word count and heading structure, naturally incorporating primary and secondary keywords, written in the brand's established voice and at the correct reading level for the target audience.

**Prompt customizations (userContext suggestions):**
- `"Brand voice is direct and no-nonsense — no corporate buzzwords, no passive voice."`
- `"Audience is senior marketers. Assume familiarity with GA4, HubSpot, and content attribution models."`
- `"Here is an existing post that represents our ideal tone: [paste URL or excerpt]"`

---

### 3. Content Strategist

**Prompt Forge Agent ID:** `content`

**Role in this pipeline:** Receives the finished draft and transforms it into a full distribution strategy. Maps the content to the right channels, builds a promotion schedule, identifies internal linking targets, and plans the content's lifecycle beyond the publish date so it keeps working for months.

**Input:** Finished draft from the Brand Voice Agent (paste in full) + your publishing schedule and active channels (blog, email list, LinkedIn, X, Instagram, YouTube, etc.).

**Output:** Distribution plan including recommended publish date, promotion schedule by channel, email newsletter integration angle, internal linking recommendations, partnership or repurposing milestones, and a 30/60/90-day lifecycle plan for keeping the content active.

**Prompt customizations (userContext suggestions):**
- `"Active channels: blog, weekly email newsletter, LinkedIn, and X. No Instagram or video."`
- `"Publishing cadence is weekly. Email goes out Tuesdays at 9am EST — align promotion schedule to that."`
- `"Audience is most active on LinkedIn Thursday mornings. Weight promotion schedule accordingly."`

---

### 4. Content Repurposer

**Prompt Forge Agent ID:** `repurpose`

**Role in this pipeline:** Final agent in the chain. Takes one finished content asset and turns it into a complete social media library — 50+ platform-specific posts ready to schedule. Adapts tone, format, and length for each platform without losing the original message or keyword alignment.

**Input:** Finished draft from the Brand Voice Agent + distribution plan from the Content Strategist (platforms, posting schedule, audience notes per channel).

**Output:**
- LinkedIn posts: 5–10 posts (mix of narrative, list, and insight formats)
- X threads: 3–5 threads with hook, body, and CTA
- Instagram carousel scripts: 2–3 carousels (slide-by-slide copy)
- Email snippets: 2–3 short teasers for newsletter or drip use
- Pull quotes: 5–8 standalone quotes formatted for image overlays
- Scheduling recommendation: which posts to deploy first based on the distribution plan

**Prompt customizations (userContext suggestions):**
- `"LinkedIn audience is B2B decision-makers. X audience skews technical and startup-focused. Adapt tone accordingly."`
- `"No Instagram — skip carousel scripts and prioritize LinkedIn and email snippets."`
- `"Brand does not use emojis on any platform. Keep all posts clean and text-forward."`

---

## Handoff Protocol

This table shows exactly what to copy from each agent's output and paste into the next agent's input.

| From | To | What to Copy |
|------|----|--------------|
| Target Keyword | SEO Content Agent | Keyword or topic phrase + niche context, audience description, domain authority notes |
| SEO Content Agent | Brand Voice Agent | Full content brief — keyword map, search intent, H2/H3 structure, word count, competitor gaps |
| Brand Voice Agent | Content Strategist | Full draft as written — do not summarize; paste the complete article text |
| Brand Voice Agent | Content Repurposer | Full draft as written — same draft goes to both Agents 3 and 4 |
| Content Strategist | Content Repurposer | Distribution plan — channels, posting schedule, audience activity notes, lifecycle milestones |

> Note: Agents 3 and 4 both receive the finished draft from Agent 2. Run the Content Strategist first, then pass both the draft and the distribution plan into the Content Repurposer together.

### Human Review Checkpoints

**Checkpoint 1 — After SEO Content Agent**
Review the content brief before writing anything. Confirm the primary keyword matches your actual targeting intent, the search intent classification is correct (informational vs. commercial vs. navigational), and the H2/H3 structure covers what your audience actually needs. If the competitor gap analysis flags topics you don't want to cover, remove them from the brief before passing it forward.

**Checkpoint 2 — After Brand Voice Agent**
Read the full draft before it goes into distribution planning. This is the moment to fix anything that doesn't sound like your brand, add proprietary data or examples the AI couldn't access, and verify every factual claim. Once the draft moves to Agents 3 and 4, changes cascade across the entire social library — get it right here.

**Checkpoint 3 — After Content Repurposer**
Review the full social post library before scheduling anything. Check that platform tone is appropriate for each channel, the messaging hierarchy is consistent across posts, and no single post reads as obviously AI-generated. This is also the moment to remove any posts that don't fit your current editorial calendar and queue the approved set in your scheduling tool.

---

## Technical Appendix

For builders who want to run this pipeline programmatically, below are implementation sketches for the two most common agent orchestration frameworks.

### CrewAI — Sequential Crew

```python
from crewai import Agent, Task, Crew, Process

# Requires OPENAI_API_KEY env var, or pass llm=YourLLM() to each Agent
# Define agents
seo_content_agent = Agent(
    role="SEO Content Strategist",
    goal="Turn a target keyword into a complete content brief with keyword map, search intent, competitor gaps, and H2/H3 structure",
    backstory="Expert in technical SEO, keyword research, and content architecture who builds briefs that rank and convert",
    verbose=True
)

brand_voice_agent = Agent(
    role="Brand Voice Writer",
    goal="Write a full draft from an SEO content brief, perfectly matched to the brand's tone, audience, and keyword requirements",
    backstory="Senior content writer who specializes in translating SEO briefs into human-sounding, brand-aligned long-form content",
    verbose=True
)

content_strategist = Agent(
    role="Content Strategist",
    goal="Build a multi-channel distribution strategy and editorial lifecycle plan from a finished content draft",
    backstory="Distribution-focused strategist who maximizes content ROI by mapping every piece to the right channels, cadence, and lifecycle milestones",
    verbose=True
)

content_repurposer = Agent(
    role="Content Repurposer",
    goal="Transform one long-form content asset into 50+ platform-specific social posts, email snippets, and pull quotes",
    backstory="Social content specialist who adapts long-form content for LinkedIn, X, Instagram, and email without losing brand voice or keyword alignment",
    verbose=True
)

# Define tasks
task_seo_brief = Task(
    description="Research the target keyword and produce a complete content brief: {keyword}",
    agent=seo_content_agent,
    expected_output="Content brief with primary/secondary keywords, search intent, H2/H3 structure, competitor gaps, topic clusters, and target word count"
)

task_draft = Task(
    description="Write a full brand-aligned draft using the content brief produced in the previous task",
    agent=brand_voice_agent,
    expected_output="Complete article draft matching the brief's word count and heading structure, incorporating all keywords naturally"
)

task_strategy = Task(
    description="Build a distribution strategy and editorial lifecycle plan from the finished draft",
    agent=content_strategist,
    expected_output="Distribution plan with publish date, channel-by-channel promotion schedule, email integration, internal linking, and 30/60/90-day lifecycle milestones"
)

task_repurpose = Task(
    description="Repurpose the finished draft and distribution plan into a full social post library",
    agent=content_repurposer,
    context=[task_draft, task_strategy],  # Ensure repurposer sees both the draft and the distribution strategy
    expected_output="50+ social posts: 5-10 LinkedIn posts, 3-5 X threads, 2-3 Instagram carousel scripts, 2-3 email snippets, 5-8 pull quotes, and scheduling recommendation"
)

# Assemble and run the crew
crew = Crew(
    agents=[seo_content_agent, brand_voice_agent, content_strategist, content_repurposer],
    tasks=[task_seo_brief, task_draft, task_strategy, task_repurpose],
    process=Process.sequential,
    verbose=True
)

result = crew.kickoff(inputs={"keyword": "Your target keyword here"})
print(result)
```

> Note: In a production implementation, add human-in-the-loop checkpoints after `task_seo_brief` and `task_draft` using CrewAI's callback hooks or by splitting the crew into separate runs with a manual gate between them.

---

### LangGraph — StateGraph Implementation

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict

# Define shared state
class ContentState(TypedDict):
    keyword: str
    seo_brief: str
    draft: str
    distribution_plan: str
    social_library: str

# Define node functions — each returns ONLY the keys it sets (partial dict)
def run_seo_content_agent(state: ContentState) -> dict:
    prompt = f"""
    You are an SEO Content Strategist. Given this target keyword, produce a complete content brief
    including primary and secondary keywords, search intent classification, H2/H3 heading structure,
    competitor gap analysis, topic cluster map, and recommended word count.

    Target Keyword: {state['keyword']}
    """
    # response = your_llm_call(prompt)
    return {"seo_brief": "[seo brief output]"}

def run_brand_voice_agent(state: ContentState) -> dict:
    prompt = f"""
    You are a Brand Voice Writer. Using this SEO content brief, write a complete article draft
    that matches the heading structure, incorporates all keywords naturally, and is written in
    a clear, direct brand voice appropriate for the target audience.

    SEO Brief: {state['seo_brief']}
    """
    # response = your_llm_call(prompt)
    return {"draft": "[draft output]"}

def run_content_strategist(state: ContentState) -> dict:
    prompt = f"""
    You are a Content Strategist. Given this finished article draft, build a multi-channel
    distribution strategy including publish date, promotion schedule by channel, email newsletter
    integration, internal linking recommendations, and a 30/60/90-day lifecycle plan.

    Draft: {state['draft']}
    """
    # response = your_llm_call(prompt)
    return {"distribution_plan": "[distribution plan output]"}

def run_content_repurposer(state: ContentState) -> dict:
    prompt = f"""
    You are a Content Repurposer. Given this finished draft and distribution plan, produce a
    complete social post library: 5-10 LinkedIn posts, 3-5 X threads, 2-3 Instagram carousel
    scripts, 2-3 email snippets, 5-8 pull quotes, and a scheduling recommendation.

    Draft: {state['draft']}
    Distribution Plan: {state['distribution_plan']}
    """
    # response = your_llm_call(prompt)
    return {"social_library": "[social library output]"}

# Build the graph
graph = StateGraph(ContentState)

graph.add_node("seo_content", run_seo_content_agent)
graph.add_node("brand_voice", run_brand_voice_agent)
graph.add_node("content", run_content_strategist)
graph.add_node("repurpose", run_content_repurposer)

graph.set_entry_point("seo_content")
graph.add_edge("seo_content", "brand_voice")
graph.add_edge("brand_voice", "content")
graph.add_edge("content", "repurpose")
graph.add_edge("repurpose", END)

app = graph.compile()

# Run the pipeline
result = app.invoke({"keyword": "Your target keyword here"})

print(result["social_library"])
```

> Note: To add human review checkpoints in LangGraph, use `interrupt_before` on the nodes that follow each checkpoint: `app = graph.compile(interrupt_before=["brand_voice", "repurpose"])`. This pauses execution and lets you inspect and edit state before the next node runs.

---

### Prompt Forge Agent Links

| Agent | Role in Pipeline | Prompt Forge URL |
|-------|-----------------|------------------|
| SEO Content Agent | Keyword → Content Brief | https://www.getpromptforge.net/forge?agent=seo_content |
| Brand Voice Agent | Brief → Brand-Aligned Draft | https://www.getpromptforge.net/forge?agent=brand_voice |
| Content Strategist | Draft → Distribution Plan | https://www.getpromptforge.net/forge?agent=content |
| Content Repurposer | Draft + Plan → 50+ Social Posts | https://www.getpromptforge.net/forge?agent=repurpose |
