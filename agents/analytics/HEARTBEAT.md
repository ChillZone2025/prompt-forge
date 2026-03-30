# ANALYTICS AGENT — HEARTBEAT.md

> DORMANT until Phase 2 (10 paying subscribers). Execute this checklist weekly when active.

## Wake Cycle Checklist

### 1. ORIENT
```
□ Read AGENTS.md (verify phase gate)
□ Read MILESTONE_MAP.md (where are we vs. targets?)
□ Read STATUS.md (current platform state)
```

### 2. COLLECT
```
□ Check Stripe dashboard: current subscribers, new this week, churned this week, MRR
□ Check Clerk dashboard: total users, new signups this week
□ Check Vercel Analytics: page views, referral sources, top pages
□ Check generation logs (when Vercel KV is live): total generates, popular agents
```

### 3. REPORT
```
□ Update metrics/subscribers.md with current numbers
□ Update metrics/generations.md with usage data
□ Update metrics/traffic.md with referral sources
□ Compare actuals to MILESTONE_MAP.md targets
```

### 4. ALERT
```
□ Check all alert triggers (listed in SOUL.md)
□ If any trigger fires: post to QUEUE_BLOCKED.md with data and recommendation
□ If no triggers: continue
```

### 5. WEEKLY SUMMARY (post to QUEUE_BLOCKED.md every Monday)
```
Week of [date]:
- Subscribers: [X] (+/- [Y] from last week)
- MRR: $[X]
- Free-to-Pro conversion: [X]%
- Churn: [X]%
- Top 3 agents by generation count: [list]
- Top referral source: [source]
- On track for monthly target: YES/NO
- Action needed: [if any]
```
