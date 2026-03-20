# CLAUDE.md — Prompt Forge Agent Operating Instructions

> This file is the primary instruction set for Claude Code and any autonomous agents operating on the Prompt Forge codebase. Read this first, then reference the linked files for specifics.

## Project Identity

**Prompt Forge** is a live freemium SaaS that generates deployment-ready AI agent system prompts in one click.

- **Live URL:** https://www.getpromptforge.net (forge at /forge)
- **Entity:** Hilbert Entertainment, LLC (DBA Prompt Forge)
- **Owner:** Rob (non-coder founder — all instructions and outputs must be plain-English accessible)
- **Repo:** `ChillZone2025/prompt-forge` (private GitHub)

## Reference Files

| File | Purpose |
|------|---------|
| `bootstrap.md` | Tech stack, environment setup, deployment pipeline, repo structure |
| `business-rules.md` | Quality standards, prompt structure, voice/tone, formatting requirements |
| `project-overview.md` | Product vision, revenue model, roadmap, expansion strategy |
| `data-schema.md` | Current data structures, agent definitions, content schema for new additions |
| `competitive-intel.md` | Market landscape, competitor analysis, strategic positioning, revenue targets |

## Agent Mission

**Make Prompt Forge the first and largest AI agent prompt generation platform on earth.**

No competitor generates deployment-ready agent system prompts — they all sell static libraries. Prompt Forge's speed of expansion is its moat. Every new industry and agent widens the gap.

This is not a side project. Rob is building this to replace his day job. Every content decision must serve two goals simultaneously: genuinely help users deploy AI agents AND drive Pro subscriptions. Read `competitive-intel.md` for the full strategic picture, revenue targets, and scoring framework for new content.

Agents operate within guardrails and can publish content that meets quality standards. Rob spot-checks.

## Core Workflow: Adding New Content

### Step 1 — Research & Draft
- Research a target industry, role, or AI service category
- Draft new agents, starter prompts, or service content as structured JSON/markdown files
- Stage drafts in `/content/staging/` directory for review

### Step 2 — Validate Against Business Rules
- Every new agent must pass the quality checklist in `business-rules.md`
- Prompt structure must follow the exact template in `business-rules.md`
- No duplicate agent IDs, no overlapping functionality with existing agents

### Step 3 — Deploy via Claude Code
- Once content passes validation, Claude Code integrates it into `PromptForge.js`
- Update the `INDUSTRIES` object (for agents) or `STARTER_PROMPTS` array (for starters)
- Commit with descriptive message: `feat: add [industry] agents — [agent names]`
- Vercel auto-deploys on push to main branch

### Step 4 — Spot-Check
- Rob reviews deployments periodically
- Agents flag anything uncertain with `// REVIEW:` comments in staged files

## Content Types Agents Can Create

1. **Industry Agents** — New agents within existing or new industries (added to `INDUSTRIES` object)
2. **Starter Prompts** — Ready-to-use prompts for everyday tasks (added to `STARTER_PROMPTS` array)
3. **New Industries** — Entirely new industry tabs with 5+ agents each
4. **Service Expansions** (staged as proposals in `/content/proposals/`):
   - Workflow templates (N8N, Make, Zapier)
   - Agent blueprints / multi-agent architectures
   - API integration tutorials
   - Fine-tuning guides

## Critical Rules

### NEVER Do
- Modify payment logic, Stripe integration, or subscription verification
- Change the `/api/checkout`, `/api/webhook`, or `/api/verify-subscription` routes
- Alter CSS class names or layout structure without explicit approval
- Remove or rename existing agents (only add)
- Push breaking changes that affect the live site
- Store secrets, API keys, or credentials in any file

### ALWAYS Do
- Read `business-rules.md` before creating any new content
- Validate agent IDs are unique across the entire `INDUSTRIES` object
- Test that new content follows the exact data structure in `data-schema.md`
- Use descriptive commit messages prefixed with `feat:`, `fix:`, or `docs:`
- Stage proposals for new service categories — don't implement without approval
- Keep `PromptForge.js` as the single source of truth for all agent/prompt data

## Working With Rob

Rob is a non-coder founder. When generating reports, proposals, or documentation:
- Use plain English, no unexplained jargon
- Lead with the "what" and "why" before the "how"
- One concept per paragraph
- When uncertain, ask — don't assume

## File Modification Safety

`PromptForge.js` is a large, monolithic component (~860 lines). When modifying it:
- Always work from the current version in the repo (never from memory)
- Make surgical additions — don't rewrite sections you aren't changing
- After adding agents: verify the `INDUSTRIES` object still has valid JS syntax (matching brackets, trailing commas)
- After adding starters: verify the `STARTER_PROMPTS` array is valid
- Run a syntax check before committing

## Deployment

- **Platform:** Vercel (auto-deploys on push to main)
- **Domain:** getpromptforge.net (Vercel redirects non-www → www)
- **No manual deployment steps** — just push clean code to main branch
