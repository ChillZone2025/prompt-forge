# TASK_QUEUE.md — Agent Coordination & Task Tracking

> Both agents read and update this file. Use `git pull` before reading, `git commit + push` after updating. This is the single source of truth for what's in progress.

## How This Works

Inspired by production agent orchestration patterns (OpenClaw, CrewAI, LangGraph):
- Agents **claim** tasks by adding their role name and a timestamp
- Agents **update** status as they work (open → in_progress → staged → integrated → deployed)
- The Forger owns the final integration step — Prompt Agent never marks anything as "integrated" or "deployed"
- If a task has been `in_progress` for more than 2 hours with no update, it can be reclaimed

## Status Legend

| Status | Meaning |
|--------|---------|
| `open` | Available for any agent to claim |
| `in_progress` | Claimed and actively being worked on |
| `staged` | Content drafted and sitting in `content/staging/` |
| `review` | Awaiting Rob's review before integration |
| `integrating` | The Forger is actively modifying PromptForge.js |
| `deployed` | Live on getpromptforge.net via Vercel auto-deploy |
| `blocked` | Waiting on Rob or an external dependency |

## Active Tasks

<!-- Agents: add new tasks here. Format:
### TASK-[number]: [description]
- **Status:** open
- **Assigned:** unassigned
- **Priority:** high/medium/low
- **Created:** YYYY-MM-DD
- **Notes:** (any context)
-->

## Completed Tasks

<!-- Move completed tasks here with a completion date -->
