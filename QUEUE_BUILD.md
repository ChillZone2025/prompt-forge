# QUEUE_BUILD.md — Builder Tasks

> Owned by The Forger. Infrastructure, features, and platform improvements.

## Active Tasks

| ID | Task | Owner | Status | Priority | Success Criteria |
|----|------|-------|--------|----------|-----------------|
| B001 | Clerk authentication integration | Forger | ✅ DEPLOYED | P0 | Sign-in/sign-up works, Stripe tied to Clerk userId, Pro verified server-side |
| B002 | MCP server — publish to npm | Forger | ✅ DEPLOYED | P0 | promptforge-mcp v1.0.1 on npm, 3 tools working |
| B003 | Landing page — real numbers | Forger | ✅ DEPLOYED | P0 | 251/41/24 shown, pricing cards accurate |
| B004 | Checkmark rendering fix | Forger | ✅ DEPLOYED | P1 | All ✓ symbols render correctly |
| B005 | Tooltips on buttons | Forger | OPEN | P2 | Hover tooltips on all action buttons in /forge |
| B006 | SEO landing pages per industry | Forger | ✅ DEPLOYED | P1 | Each industry gets /industry/{slug} page with meta tags, agent list, sample output |
| B007 | Vercel KV generation counter | Forger | OPEN | P2 | Real-time "X prompts generated" on landing page |
| B008 | Email capture for free users | Forger | ✅ DEPLOYED | P1 | Clerk captures email on sign-up — verified by Rob |
| B009 | Supabase integration for user data | Forger | OPEN | P3 | Saved prompts, generation history, usage analytics persisted in DB |
| B010 | Agent Orchestra Builder (Phase 4) | Forger | BLOCKED | P4 | Visual drag-and-drop canvas for multi-agent systems — deferred to 500 subscribers |

## Completed Tasks Archive

| ID | Task | Completed | Commit |
|----|------|-----------|--------|
| B001 | Clerk auth | 2026-03-28 | — |
| B002 | MCP server | 2026-03-28 | — |
| B003 | Landing page | 2026-03-23 | — |
| B004 | Checkmark fix | 2026-03-28 | b03f3e2 |
| B006 | SEO landing pages | 2026-04-01 | 6fb97f2 |
| B008 | Email capture | 2026-04-01 | — (Clerk built-in) |

## How to Claim a Task

1. Read this file
2. Find the highest-priority OPEN task you're authorized to do
3. Change status to `IN PROGRESS — [Agent Name]`
4. Do the work
5. Change status to `✅ DEPLOYED` with commit hash
6. Push this file
