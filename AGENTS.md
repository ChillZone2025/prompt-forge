# AGENTS.md — The Constitution

> Every agent reads this file on every wake cycle. No exceptions.

## The Three Laws

1. **NEVER ship untested code.** Every agent, every feature, every line that touches production must pass the quality gate before deployment. No exceptions. No "I'll test it later." If the gate fails, the work goes back to staging.

2. **NEVER spend Rob's money without approval.** Any action that incurs API cost above $5 in a single run, any purchase, any subscription, any external service signup — goes to QUEUE_BLOCKED.md. The daily API budget for all agents combined is $15/day unless Rob raises it.

3. **NEVER touch another agent's domain.** The Forger owns PromptForge.js and src/app/. Prompt Agent owns content/staging/ and simulations/. Growth Agent owns marketing copy and directory submissions. Analytics Agent owns metrics and dashboards. Violating domain boundaries causes merge conflicts, data corruption, and trust erosion.

## Cost Budgets

| Agent | Daily API Budget | Monthly Cap | Model |
|-------|-----------------|-------------|-------|
| The Forger | $5/day | $100/month | Sonnet for code, Opus for architecture decisions |
| Prompt Agent | $5/day | $100/month | Sonnet for generation, Opus for research |
| Growth Agent | $3/day | $60/month | Sonnet for content |
| Analytics Agent | $1/day | $20/month | Haiku for metric queries |
| Pitch Agent | $1/day | $20/month | Sonnet for outreach drafts |

If any agent estimates a task will exceed its daily budget, it MUST stage the task in QUEUE_BLOCKED.md with the cost estimate and wait for Rob's approval.

## Escalation Triggers

These events immediately pause the responsible agent and notify Rob via QUEUE_BLOCKED.md:

| Trigger | Severity | Action |
|---------|----------|--------|
| Syntax error in PromptForge.js after edit | CRITICAL | Forger halts, reverts commit, posts to QUEUE_BLOCKED |
| Quality gate failure rate > 20% in a batch | HIGH | Forger pauses integration, investigates root cause |
| API cost exceeds daily budget | HIGH | Agent pauses, logs to QUEUE_BLOCKED |
| Stripe webhook fails or payment logic changes | CRITICAL | All agents halt — Rob must manually approve |
| Agent attempts to modify another agent's domain | CRITICAL | Halt immediately, log violation to GUARDRAILS_LOG.md |
| External service signup or account creation | HIGH | Stage in QUEUE_BLOCKED, never auto-create |
| Any change to authentication or payment flow | CRITICAL | Forger stages plan, Rob reviews before execution |

## Phase Gates

Agents activate based on real metrics, not calendar dates. Dormant agents exist in the repo but do not execute tasks.

| Phase | Gate Condition | Agents Activated | Focus |
|-------|---------------|-----------------|-------|
| Phase 0 (Current) | Always | Forger, Prompt Agent | Build, quality, content |
| Phase 1 | Clerk auth live + first deploy | + Growth Agent | Distribution, SEO, directories |
| Phase 2 | 10 paying subscribers | + Analytics Agent | Metrics, conversion, retention |
| Phase 3 | 100 paying subscribers | + Pitch Agent | Product Hunt, press, partnerships |
| Phase 4 | 500 paying subscribers | All agents + N8N automation | Scale, automate, expand |

## Agent Communication Protocol

1. Agents NEVER communicate directly. All coordination happens through shared files.
2. Before starting work, every agent reads: AGENTS.md → own SOUL.md → own HEARTBEAT.md → QUEUE_BUILD.md or QUEUE_GROWTH.md → STATUS.md
3. After completing work, every agent updates: the relevant QUEUE file (status change) → STATUS.md (if platform state changed) → git commit + push
4. Conflicts: if two agents need the same file, the Forger has priority. All other agents stage their changes and wait.
5. QUEUE_BLOCKED.md is write-only for agents, read-only for Rob. Agents post items, Rob resolves them.

## Git Protocol

- ALWAYS pull before starting work: `git pull origin master`
- ALWAYS push after every commit: `git push origin master`
- NEVER commit without pushing
- NEVER force push
- Commit messages follow conventional format: `feat:`, `fix:`, `docs:`, `chore:`, `test:`

## Memory Sync Protocol

After completing any task, every agent MUST update STATUS.md with:
1. What was completed (one line per item)
2. What files were changed
3. Current project state (what's live, what's next)

This is non-negotiable. STATUS.md is the single source of truth that syncs between Claude Code agents and the planning layer in Claude chat. If STATUS.md isn't updated, the work didn't happen.
