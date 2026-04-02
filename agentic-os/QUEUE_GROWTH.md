# QUEUE_GROWTH.md — Growth Tasks

> Owned by Growth Agent (when active). Phase-gated — tasks only execute when metrics unlock them.

## Phase 1 Tasks (Gate: Clerk live — UNLOCKED)

| ID | Task | Owner | Status | Success Criteria |
|----|------|-------|--------|-----------------|
| G001 | Submit to 10+ free AI tool directories | Growth | IN PROGRESS (Rob) | Listed on 10+ directories with backlinks |
| G002 | Submit MCP server to 5 MCP directories | Growth | IN PROGRESS (Rob) | Listed on Glama, MCP.so, awesome-mcp-servers, LobeHub, ClaudePro |
| G003 | Hacker News "Show HN" post | Growth | OPEN | Post live, monitor comments |
| G004 | LinkedIn builder's journey post | Growth | OPEN | Posted with MCP screenshot |
| G005 | Dev.to technical blog post | Growth | OPEN | Architecture post published |
| G006 | LinkedIn video demo (2 min screen record) | Growth | OPEN | Video posted showing generation flow |
| G007 | SEO blog posts — 1/week cadence | Growth | OPEN | "AI agent prompt for [industry]" articles |
| G008 | LinkedIn commenting — 5 AI posts/day | Growth | OPEN | Consistent daily engagement |

## Phase 2 Tasks (Gate: 10 paying subscribers)

| ID | Task | Owner | Status | Success Criteria |
|----|------|-------|--------|-----------------|
| G009 | Collect 3 real testimonials | Growth | BLOCKED | 3 quotes from paying users on landing page |
| G010 | Real generation counter on landing page | Growth | BLOCKED | Vercel KV live, real number displayed |
| G011 | Case study — one user's workflow | Growth | BLOCKED | 500-word case study with before/after |
| G012 | Cross-post simulation results as proof content | Growth | BLOCKED | Finance, Legal, Cyber, Healthcare results shared |

## Phase 3 Tasks (Gate: 100 paying subscribers)

| ID | Task | Owner | Status | Success Criteria |
|----|------|-------|--------|-----------------|
| G013 | Product Hunt launch | Pitch | BLOCKED | Top 5 on launch day |
| G014 | Partnership outreach — 5 AI newsletters | Pitch | BLOCKED | Featured in 2+ newsletters |
| G015 | Press outreach — AI/SaaS publications | Pitch | BLOCKED | 1 article published about Prompt Forge |
| G016 | Affiliate program for consultants | Pitch | BLOCKED | 10 affiliate partners signed |

## Phase 4 Tasks (Gate: 500 paying subscribers)

| ID | Task | Owner | Status | Success Criteria |
|----|------|-------|--------|-----------------|
| G017 | Native app store listings (iOS/Android PWA) | Growth | BLOCKED | App store presence |
| G018 | Enterprise tier ($49/mo teams) | Growth | BLOCKED | Team features, shared libraries |
| G019 | Agent Orchestra Builder | Build | BLOCKED | Visual multi-agent canvas live |
| G020 | API access for developers ($29/mo) | Build | BLOCKED | Public API with docs |

## Rules

- Growth Agent only executes tasks in the current unlocked phase
- Tasks in locked phases have status BLOCKED — agents cannot work on them
- When a phase gate unlocks, Growth Agent reads this file and starts the highest-priority task
- All marketing copy goes through QUEUE_BLOCKED.md before Rob publishes
- Social media posts are NEVER auto-published — always staged for Rob's review
