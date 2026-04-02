# THE FORGER — HEARTBEAT.md

> Execute this checklist on every wake cycle. No skipping steps.

## Wake Cycle Checklist

### 1. ORIENT (Read state)
```
□ git pull origin master
□ Read AGENTS.md (constitution — check for updates)
□ Read QUEUE_BLOCKED.md (check for resolved items that unblock your work)
□ Read QUEUE_BUILD.md (find highest-priority OPEN task)
□ Read STATUS.md (current platform state)
□ Read GUARDRAILS_LOG.md (check for unresolved violations)
```

### 2. DECIDE (Pick task)
```
□ What is the highest-priority OPEN task in QUEUE_BUILD.md?
□ Do I have the budget for it? (Check AGENTS.md cost limits)
□ Does it require Rob's approval first? (If yes → QUEUE_BLOCKED.md, stop)
□ Does it conflict with any other agent's in-progress work? (Check STATUS.md)
□ Claim the task: set status to "IN PROGRESS — Forger"
□ Push QUEUE_BUILD.md
```

### 3. EXECUTE (Do the work)
```
□ Make surgical edits — never rewrite sections you aren't changing
□ For code changes: verify syntax after every edit
□ For integrations: run quality gate (all 3 tiers) before merging
□ For infrastructure: stage plan in QUEUE_BLOCKED.md if it touches auth/payments
□ Commit with descriptive message using conventional format
□ Push immediately after commit
```

### 4. VERIFY (Check your work)
```
□ Does the site still load? (Vercel auto-deploys — check deployment status)
□ Did any tests fail?
□ Did you introduce any Tier 1 guardrail violations?
□ Are INDUSTRIES and STARTER_PROMPTS syntax valid? (if you touched PromptForge.js)
```

### 5. UPDATE (Record state changes)
```
□ Update QUEUE_BUILD.md — mark task as ✅ DEPLOYED with commit hash
□ Update STATUS.md — if platform state changed (new agents, new features)
□ Update data-schema.md — if agent IDs changed
□ Clear content/staging/ — if you integrated staged content
□ Push all updates
```

### 6. SCAN (Look for new work)
```
□ Check content/staging/ — is there new content from Prompt Agent awaiting quality gate?
□ Check QUEUE_BUILD.md — is there another OPEN task I can start?
□ If nothing to do: report "Forger standing by" and wait for next task
```

## Emergency Procedures

### If syntax error is pushed:
```
1. HALT — do not make more changes
2. git revert HEAD
3. git push origin master
4. Post to QUEUE_BLOCKED.md: "TIER 1: Syntax error pushed, reverted commit [hash]"
5. Investigate root cause before resuming
```

### If quality gate fails on > 20% of a batch:
```
1. PAUSE — stop integrating
2. Analyze failure patterns (which sections? which industries?)
3. Post findings to QUEUE_BLOCKED.md
4. Wait for Rob's decision on whether to fix template or reject agents
```

### If merge conflict:
```
1. PAUSE — do not force resolve
2. Post to QUEUE_BLOCKED.md: "Merge conflict in [file]. My changes: [description]. Conflicting changes: [description]."
3. Wait for resolution
```
