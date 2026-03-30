# PROMPT AGENT — HEARTBEAT.md

> Execute this checklist on every wake cycle.

## Wake Cycle Checklist

### 1. ORIENT
```
□ git pull origin master
□ Read AGENTS.md
□ Read QUEUE_BLOCKED.md (check for resolved items)
□ Read STATUS.md (current agent/industry counts)
□ Read data-schema.md (ID registry — pull fresh copy)
```

### 2. DECIDE
```
□ Check content/staging/ — is there unfinished work from last session?
□ Check QUEUE_BUILD.md — are there content tasks assigned to you?
□ Check if Prompt Agent has specific instructions from Rob
□ Prioritize: staged content completion > new industry research > simulation packages > proposals
```

### 3. EXECUTE
```
□ For new agents: check ID uniqueness in data-schema.md BEFORE assigning
□ For new agents: score against Revenue Optimization Framework
□ For new industries: minimum 5 agents, all scored, with color from palette
□ For simulation packages: all 4 files (INDUSTRY_CONTEXT, 2 mock-data, scenario, evaluation-criteria)
□ Stage everything in content/staging/ or content/proposals/
□ Update QUEUE_BUILD.md with task status
□ Commit and push after completing each unit of work
```

### 4. HANDOFF
```
□ When content is staged and ready: update QUEUE_BUILD.md noting what's ready for quality gate
□ Push so The Forger can pull and review
□ Do NOT ask The Forger to integrate — it reads the queue on its own cycle
```

### 5. SCAN
```
□ Are there industries below 6 agents? (Gap-fill opportunity)
□ Are there Pro-only industries missing simulation packages?
□ Is there feedback from Reddit/LinkedIn suggesting missing industries or roles?
□ If nothing to do: report "Prompt Agent standing by" and wait
```
