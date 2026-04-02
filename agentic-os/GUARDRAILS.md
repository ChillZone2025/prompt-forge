# GUARDRAILS.md — Hard Stops and Safety

> The system that prevents agents from causing damage. Three tiers of severity.

## Tier 1 — HALT (System stops immediately)

These violations halt the responsible agent and require Rob's manual intervention before resuming.

| Violation | What Happens |
|-----------|-------------|
| Syntax error pushed to production | Forger reverts commit, halts, posts to QUEUE_BLOCKED |
| Payment/auth logic modified without explicit approval | All agents halt until Rob reviews |
| API key or secret exposed in a commit | Agent halts, Rob rotates key immediately |
| Agent modifies another agent's domain files | Violating agent halts, logged to GUARDRAILS_LOG.md |
| External account created (any service) without approval | Agent halts, Rob decides whether to keep or delete |
| Database schema change (when DB exists) | Agent halts, Rob reviews migration plan |
| Any action that could charge a real user incorrectly | ALL agents halt — nuclear stop |
| Stripe webhook endpoint modified | Forger halts, Rob verifies before deploy |

## Tier 2 — PAUSE (Agent pauses, alerts Rob)

These violations pause the agent until the next work cycle. Rob is notified in QUEUE_BLOCKED.md.

| Violation | What Happens |
|-----------|-------------|
| Quality gate failure rate > 20% in a batch | Forger pauses, investigates, reports findings |
| Daily API budget exceeded | Agent pauses until next day or Rob raises budget |
| Task takes more than 30 minutes with no progress | Agent pauses, posts status update |
| Agent produces output that contradicts business-rules.md | Output discarded, agent re-reads rules |
| Git merge conflict | Agent pauses, does not force resolve, posts to QUEUE_BLOCKED |
| Third-party API returns unexpected errors (Stripe, Clerk, Claude) | Agent pauses, logs error, posts to QUEUE_BLOCKED |

## Tier 3 — FLAG (Note in daily brief, continue working)

These are warnings that don't stop work but get logged for Rob's review.

| Violation | What Happens |
|-----------|-------------|
| Generated prompt scores below 7.0 on quality gate | Logged, agent continues with other agents |
| A staged agent has a revenue_score below 6.0 | Logged as low-value, still integrable if justified |
| Duplicate agent name or ID detected | Logged, agent re-assigns ID |
| Minor formatting inconsistencies | Logged, fixed in next cleanup pass |
| Task sits in QUEUE_BUILD.md for > 3 days untouched | Flagged for reprioritization |

## IP and Legal Guardrails

- NEVER scrape competitor content (PromptBase, AIPRM, FlowGPT)
- NEVER copy competitor prompt text or structures
- NEVER claim endorsements or partnerships that don't exist
- NEVER use "AI-generated" testimonials — all social proof must be from real users
- NEVER auto-post to social media without Rob's review of the content
- ALL marketing copy goes through QUEUE_BLOCKED.md before publishing
- Prompt Forge generates prompts — it does NOT provide legal, medical, or financial advice. Agent descriptions must never claim otherwise.

## Data Guardrails

- NEVER store user API keys, passwords, or payment details in any file, log, or commit
- NEVER log generated prompt content to public repos (it may contain user context)
- All .env files are gitignored — verify before every push
- User data (when Clerk/DB exists) is never committed to the repo
- Simulation mock data is clearly labeled as MOCK — never use real user data

## Cost Guardrails

- Total daily API spend across all agents: $15 max
- Total monthly spend: $300 max
- Any single operation estimated above $5: QUEUE_BLOCKED
- Batch quality gate runs: calculate cost estimate before starting, post estimate to QUEUE_BLOCKED if > $10
- Model selection: use Sonnet by default, Opus only when the task requires deep reasoning

## Guardrails Log

All violations are appended to `GUARDRAILS_LOG.md` with:
- Timestamp
- Agent name
- Violation tier
- Description
- Resolution (or "pending Rob's review")
