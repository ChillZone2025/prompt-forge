# Agent Blueprints — Service Expansion Design Spec

## Overview

Agent Blueprints are a new Pro-only content type for Prompt Forge. Each blueprint is a self-contained "playbook" showing how 3-4 existing Prompt Forge agents work together as a pipeline to solve a real business workflow.

**Target audiences:**
- Solo operators, freelancers, and small agencies (business layer — plain English, no code)
- Technical builders using CrewAI, LangGraph, or similar frameworks (technical appendix)

**Delivery model:**
- Phase 1: Markdown documents staged in `/content/proposals/agent_blueprint/`
- Phase 2 (future, requires Rob's approval): Downloadable Pro-only PDFs or dedicated `/blueprints` page linking to Prompt Forge agents

**Revenue model:** Pro-only content. Free users see blueprint titles only. Each blueprint drives 3-4 prompt generations per use, multiplying engagement and demonstrating the value of chaining agents.

## Blueprint Format — "Playbook" Template

Every blueprint follows this fixed structure:

### 1. Header Block
- Blueprint title
- Subtitle: one sentence on who it's for and what problem it solves
- Agent count, estimated setup time, difficulty level (Beginner/Intermediate)
- Pro-only badge

### 2. The Problem
- 2-3 sentences describing the pain point this pipeline addresses
- Who experiences it (role, company size, industry)

### 3. The Pipeline (Visual)
- ASCII agent chain diagram showing flow and handoff points
- Arrows labeled with what gets passed between agents

### 4. Agent Roles (one subsection per agent)
- Which Prompt Forge agent fills this role (with agent ID)
- What it does in this specific pipeline (not its generic description)
- Input: what it receives from the previous agent
- Output: what it passes to the next agent
- Key prompt customizations for this use case

### 5. Handoff Protocol
- How outputs flow between agents (copy-paste, shared doc, automation)
- Decision points where a human reviews before the next agent fires

### 6. Technical Appendix
- CrewAI/LangGraph implementation sketch
- Agent definitions, task chains, expected I/O formats
- Links to relevant Prompt Forge agents to generate each prompt

## First Batch — 3 Blueprints

### Blueprint 1: Client Delivery Pipeline

**Title:** Client Delivery Pipeline
**Subtitle:** How consultants and agencies turn a lead into a delivered project using 4 AI agents
**Audience:** Freelancers, boutique agencies, solo consultants

**Agent chain:**
1. **Proposal & SOW Writer** (`proposal_writer`) — Takes client brief, generates scoped proposal with deliverables, timeline, pricing
2. **Project Manager** (`pm`) — Breaks approved proposal into milestones, tasks, risk register
3. **Data Analyst** (`data`) — Generates insights, charts, data narratives from client data
4. **Content Strategist** (`content`) — Produces polished client-facing deliverable

**Flow:**
```
Client Brief
    |
[Proposal Writer] --> Scoped SOW with deliverables & timeline
    |
[Project Manager] --> Milestone plan, task breakdown, risk register
    |
[Data Analyst] --> Insights, charts, data narratives
    |
[Content Strategist] --> Polished client deliverable
```

**Handoff points (human review):**
- Proposal before sending to client
- Milestone plan before execution begins
- Final deliverable before client delivery

**Revenue score:**

| Factor | Score | Reasoning |
|--------|-------|-----------|
| Willingness to Pay | 9 | Consultants/agencies expense tools easily |
| Frequency of Use | 8 | New client = new pipeline run |
| Pain of Alternatives | 8 | Building from scratch takes hours per client |
| Market Size | 7 | Millions of freelancers and small agencies globally |
| SEO Opportunity | 7 | "AI consulting workflow" is low-competition |
| **Weighted Total** | **8.05** | |

### Blueprint 2: Content Marketing Engine

**Title:** Content Marketing Engine
**Subtitle:** Turn one keyword into a full content pipeline with 4 AI agents
**Audience:** Marketing teams, solopreneurs, content agencies

**Agent chain:**
1. **SEO Content Agent** (`seo_content`) — Keyword research, topic clustering, content briefs
2. **Brand Voice Agent** (`brand_voice`) — Aligns draft to brand tone, messaging guidelines
3. **Content Strategist** (`content`) — Editorial calendar, distribution strategy
4. **Content Repurposer** (`repurpose`) — One asset into 50+ social posts across platforms

**Flow:**
```
Target Keyword
    |
[SEO Content Agent] --> Content brief with keyword map
    |
[Brand Voice Agent] --> Brand-aligned draft
    |
[Content Strategist] --> Editorial plan & distribution strategy
    |
[Content Repurposer] --> 50+ social posts from one asset
```

**Handoff points (human review):**
- Content brief before writing begins
- Brand-aligned draft before distribution planning
- Final social posts before scheduling

**Revenue score:**

| Factor | Score | Reasoning |
|--------|-------|-----------|
| Willingness to Pay | 8 | Marketing budgets include tools |
| Frequency of Use | 9 | Weekly content cycles |
| Pain of Alternatives | 8 | Manual content repurposing is tedious |
| Market Size | 8 | Every business does content marketing |
| SEO Opportunity | 7 | "AI content pipeline" growing search term |
| **Weighted Total** | **8.15** | |

### Blueprint 3: Hire-to-Onboard Pipeline

**Title:** Hire-to-Onboard Pipeline
**Subtitle:** Screen, interview, offer, and onboard new hires with 4 AI agents
**Audience:** HR teams, recruiting agencies, hiring managers

**Agent chain:**
1. **Resume Screener** (`resume_screen`) — ATS filtering, candidate ranking, bias reduction
2. **Interview Architect** (`interview_arch`) — Structured interview questions, rubric generation
3. **Offer Letter Agent** (`offer_letter`) — Compliant offer letters, compensation benchmarking
4. **Onboarding Agent** (`onboard_agent`) — Day 1 plan, training schedule, checklist

**Flow:**
```
Job Requisition
    |
[Resume Screener] --> Ranked candidate shortlist
    |
[Interview Architect] --> Structured interview guide & rubric
    |
[Offer Letter Agent] --> Compliant offer package
    |
[Onboarding Agent] --> Day 1 onboarding plan
```

**Handoff points (human review):**
- Candidate shortlist before scheduling interviews
- Interview scores before extending offers
- Offer letter before sending to candidate

**Revenue score:**

| Factor | Score | Reasoning |
|--------|-------|-----------|
| Willingness to Pay | 8 | HR teams budget for recruitment tools |
| Frequency of Use | 7 | Spikes during hiring cycles |
| Pain of Alternatives | 8 | Manual screening and onboarding is slow |
| Market Size | 8 | Every company with 10+ employees hires |
| SEO Opportunity | 6 | "AI hiring pipeline" moderate competition |
| **Weighted Total** | **7.55** | |

## Why These 3 First

- All use agents that already exist on the platform — no new agents needed
- They cover 3 distinct audiences (consulting, marketing, HR) proving format breadth
- Each scores above 7.5 on the Revenue Optimization Framework
- Together they showcase the value proposition: Prompt Forge is not just prompts, it is ready-made AI workflows

## Scope Boundaries

**In scope:**
- 3 blueprint documents in Playbook format
- Staged in `/content/proposals/agent_blueprint/`
- Each document is standalone and production-quality

**Out of scope:**
- UI changes to the platform
- New agents (all blueprints use existing agents)
- PDF generation or download functionality
- `/blueprints` page development
