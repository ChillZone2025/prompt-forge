# QUEUE_BLOCKED.md — Rob's Inbox

> Items here need human eyes before proceeding. Agents write, Rob resolves.

## How This Works

- Any agent can ADD items to this queue
- ONLY Rob can RESOLVE items (mark as approved/rejected)
- Agents check this file on every wake cycle for resolved items
- Items older than 7 days with no resolution get re-flagged

## Pending

| ID | Date | Agent | Item | Est. Cost | Status |
|----|------|-------|------|-----------|--------|
| — | — | — | No pending items | — | — |

## Resolved

| ID | Date | Agent | Item | Resolution | Resolved Date |
|----|------|-------|------|------------|--------------|
| BLK-001 | 2026-03-28 | Forger | Clerk auth integration plan | APPROVED — build it | 2026-03-28 |
| BLK-002 | 2026-03-28 | Forger | MCP server publish to npm | APPROVED — published v1.0.1 | 2026-03-28 |

## How to Add an Item

Agents: append a new row to the Pending table with:
- ID: BLK-{next number}
- Date: today's date
- Agent: your name
- Item: one-line description of what needs approval
- Est. Cost: dollar amount if applicable, or "N/A"
- Status: PENDING
