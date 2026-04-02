# PROMPT FORGE — AGENTIC OS v1.0

> An autonomous AI workforce that builds, tests, grows, and monitors Prompt Forge 24/7.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    ROB (Human-in-the-Loop)               │
│              Strategy · Approvals · Revenue Calls        │
├─────────────────────────────────────────────────────────┤
│                     QUEUE_BLOCKED.md                     │
│              (Rob's inbox — needs human eyes)            │
├────────┬────────┬────────┬────────┬─────────────────────┤
│        │        │        │        │                     │
│ FORGER │ PROMPT │ GROWTH │ ANALYTICS │    PITCH          │
│        │ AGENT  │ AGENT  │ AGENT    │    AGENT           │
│        │        │        │          │                    │
│ Code   │Content │ SEO    │ Metrics  │  Launches          │
│ Deploy │Research│ Social │ Signals  │  Outreach           │
│ QA     │Staging │Content │ Alerts   │  Press              │
│        │Sims    │Distrib │          │                    │
├────────┴────────┴────────┴──────────┴────────────────────┤
│                      SCHEMA.md                           │
│           (Shared memory — all agents read/write)        │
├─────────────────────────────────────────────────────────┤
│  QUEUE_BUILD.md  │  QUEUE_GROWTH.md  │  QUEUE_BLOCKED.md │
│  (Build tasks)   │  (Growth tasks)   │  (Human approvals) │
├─────────────────────────────────────────────────────────┤
│                    GUARDRAILS.md                          │
│          (Hard stops · Cost limits · Safety gates)        │
├─────────────────────────────────────────────────────────┤
│                     AGENTS.md                            │
│        (Constitution · Laws · Phase Gates · Budgets)      │
└─────────────────────────────────────────────────────────┘
```

## Agent Roster

| Agent | Status | Phase Gate | Domain |
|-------|--------|------------|--------|
| The Forger | **ACTIVE** | Always on | Production code, quality gate, deployment |
| Prompt Agent | **ACTIVE** | Always on | Content research, staging, simulations |
| Growth Agent | **DORMANT** | Activates after Clerk ships | SEO, directories, social content, distribution |
| Analytics Agent | **DORMANT** | Activates at 10 subscribers | Metrics, conversion tracking, churn signals |
| Pitch Agent | **DORMANT** | Activates at 100 subscribers | Product Hunt, partnerships, press, outreach |

## Quick Start

### Initialize (first time)
```bash
cd Downloads/prompt-forge/prompt-forge
git pull origin master
# Drop all agentic-os files into repo root
# Agents read from repo root — no special install needed
```

### Start The Forger
```bash
claude
# Paste: "Read AGENTS.md, then read agents/forger/SOUL.md and agents/forger/HEARTBEAT.md. Execute your wake cycle."
```

### Start Prompt Agent
```bash
claude
# Paste: "Read AGENTS.md, then read agents/prompt-agent/SOUL.md and agents/prompt-agent/HEARTBEAT.md. Execute your wake cycle."
```

### Start Growth Agent (when phase gate unlocks)
```bash
claude
# Paste: "Read AGENTS.md, then read agents/growth/SOUL.md and agents/growth/HEARTBEAT.md. Execute your wake cycle."
```

## Daily Brief Format
Each morning, check QUEUE_BLOCKED.md for items needing your approval. The Forger updates STATUS.md after every deployment. Growth Agent posts a daily metrics snapshot when active.

## File Map

```
/
├── AGENTS.md                    # Constitution
├── GUARDRAILS.md                # Hard stops and safety
├── SCHEMA.md                    # Shared memory architecture
├── MILESTONE_MAP.md             # 12-month roadmap with phase gates
├── QUEUE_BUILD.md               # Builder task queue
├── QUEUE_GROWTH.md              # Growth task queue (phase-gated)
├── QUEUE_BLOCKED.md             # Human approval inbox
├── STATUS.md                    # Live platform state (existing)
├── agents/
│   ├── forger/
│   │   ├── SOUL.md              # Identity, philosophy, tools
│   │   └── HEARTBEAT.md         # Wake cycle checklist
│   ├── prompt-agent/
│   │   ├── SOUL.md
│   │   └── HEARTBEAT.md
│   ├── growth/
│   │   ├── SOUL.md
│   │   └── HEARTBEAT.md
│   ├── analytics/
│   │   ├── SOUL.md
│   │   └── HEARTBEAT.md
│   └── pitch/
│       ├── SOUL.md
│       └── HEARTBEAT.md
```
