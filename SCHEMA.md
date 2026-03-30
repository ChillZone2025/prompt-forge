# SCHEMA.md — Shared Memory Architecture

> Every agent reads and writes to the same key namespaces. This prevents duplication, conflicts, and data loss.

## Namespace Map

All shared state lives in files in the repo root or designated directories. Agents NEVER create ad-hoc files outside these namespaces.

```
NAMESPACE              OWNER(S)           LOCATION                         PURPOSE
─────────────────────────────────────────────────────────────────────────────────────
platform.state         Forger             STATUS.md                        Live agent/industry counts, deployment log
platform.config        Forger             business-rules.md                Quality standards, prompts, color palette
platform.schema        Forger             data-schema.md                   ID registry, agent schemas, counts
platform.competitive   All (read)         competitive-intel.md             Market landscape, revenue framework
platform.overview      All (read)         project-overview.md              Vision, revenue model, roadmap

agents.constitution    All (read)         AGENTS.md                        Laws, budgets, escalation, phase gates
agents.guardrails      All (read)         GUARDRAILS.md                    Safety rules, violation tiers
agents.log             All (write)        GUARDRAILS_LOG.md                Violation log
agents.souls           Per agent          agents/{name}/SOUL.md            Agent identity and tools
agents.heartbeats      Per agent          agents/{name}/HEARTBEAT.md       Wake cycle checklists

queue.build            Forger (execute)   QUEUE_BUILD.md                   Build/infrastructure tasks
queue.growth           Growth (execute)   QUEUE_GROWTH.md                  Marketing/distribution tasks
queue.blocked          All (write)        QUEUE_BLOCKED.md                 Human approval inbox
queue.legacy           Forger             TASK_QUEUE.md                    Legacy queue (migrate to new system)

content.staging        Prompt Agent       content/staging/                 Staged agents awaiting quality gate
content.proposals      Prompt Agent       content/proposals/               Reports, blueprints, audits
content.simulations    Prompt Agent       simulations/                     Quality gate results, mock data, scenarios

code.production        Forger ONLY        src/app/                         Production application code
code.api               Forger ONLY        src/app/api/                     API routes
code.scripts           Forger             scripts/                         Quality gate, test harness, utilities
code.mcp               Forger             mcp-server/                      MCP server package

metrics.subscribers    Analytics Agent    metrics/subscribers.md           Subscriber count, MRR, churn
metrics.generations    Analytics Agent    metrics/generations.md           Generation count, popular agents
metrics.traffic        Analytics Agent    metrics/traffic.md               Page views, referral sources
```

## Read/Write Permissions

| Agent | Can Read | Can Write |
|-------|----------|-----------|
| Forger | Everything | STATUS.md, data-schema.md, TASK_QUEUE.md, QUEUE_BUILD.md, QUEUE_BLOCKED.md, src/app/*, scripts/*, mcp-server/* |
| Prompt Agent | Everything except src/app/* | content/staging/*, content/proposals/*, simulations/*, QUEUE_BUILD.md (status updates only), QUEUE_BLOCKED.md |
| Growth Agent | Everything | QUEUE_GROWTH.md, QUEUE_BLOCKED.md, marketing/* (when created) |
| Analytics Agent | Everything | metrics/*, QUEUE_BLOCKED.md |
| Pitch Agent | Everything | QUEUE_BLOCKED.md (proposals only) |

## ID Uniqueness

All agent IDs are registered in `data-schema.md`. Before creating any new agent:
1. Read data-schema.md
2. Check the ID list for conflicts
3. Assign next available ID
4. After integration, Forger updates data-schema.md with new IDs

No agent may reuse an ID. No agent may assign an ID without checking the registry.

## Status Updates

After any deployment or significant state change, the responsible agent updates STATUS.md with:
- Current agent count
- Current industry count
- Latest commit hash
- Timestamp
- One-line description of what changed
