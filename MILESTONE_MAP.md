# MILESTONE_MAP.md — 12-Month Roadmap

> Phase gates tied to real subscriber counts. No vanity metrics.

## Phase Gates

```
SUBSCRIBERS    PHASE    NAME              AGENTS ACTIVE             FOCUS
──────────────────────────────────────────────────────────────────────────────
0              Phase 0  Foundation        Forger, Prompt Agent      Build, quality, content
0 + Clerk      Phase 1  Distribution      + Growth Agent            SEO, directories, social
10             Phase 2  Validation        + Analytics Agent         Metrics, retention, conversion
100            Phase 3  Scale             + Pitch Agent             Product Hunt, press, partnerships
500            Phase 4  Expand            All + N8N automation      API, enterprise, orchestra builder
1,000          Phase 5  Sustain           All                       Optimize, reduce churn, grow MRR
```

## Monthly Targets (Conservative)

| Month | Target Subs | MRR | Phase | Key Milestones |
|-------|------------|-----|-------|----------------|
| Month 1 (Apr 2026) | 10 | $120 | Phase 2 | First paying users, analytics active |
| Month 2 (May 2026) | 30 | $360 | Phase 2 | 3 testimonials, SEO pages live |
| Month 3 (Jun 2026) | 75 | $900 | Phase 2 | Product Hunt prep, case studies |
| Month 4 (Jul 2026) | 100 | $1,200 | Phase 3 | Product Hunt launch, Pitch Agent activates |
| Month 5 (Aug 2026) | 175 | $2,100 | Phase 3 | Newsletter features, partnership outreach |
| Month 6 (Sep 2026) | 300 | $3,600 | Phase 3 | Content flywheel working, organic growth |
| Month 7 (Oct 2026) | 400 | $4,800 | Phase 3 | Approaching Phase 4 gate |
| Month 8 (Nov 2026) | 500 | $6,000 | Phase 4 | API access launches, enterprise tier |
| Month 9 (Dec 2026) | 650 | $7,800 | Phase 4 | Agent Orchestra Builder MVP |
| Month 10 (Jan 2027) | 800 | $9,600 | Phase 4 | N8N automation suite |
| Month 11 (Feb 2027) | 950 | $11,400 | Phase 4 | Approaching Phase 5 |
| Month 12 (Mar 2027) | 1,000+ | $12,000+ | Phase 5 | $12K MRR = Rob exits corporate |

## Key Decision Thresholds

| Metric | Threshold | Decision |
|--------|-----------|----------|
| DAU/MAU ratio < 10% | After Month 3 | Investigate engagement — may need to add features |
| Monthly churn > 15% | After Month 2 | Fix retention before spending on acquisition |
| Free-to-Pro conversion < 2% | After Month 2 | Revisit paywall — may be too aggressive or not enough |
| Average generates per Pro user < 5/month | After Month 3 | Users aren't coming back — need stickiness features |
| MRR growth < 20% month-over-month | After Month 4 | Current channels exhausted — need new distribution |

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Claude API pricing increases | Medium | High | Monitor costs daily, build model-agnostic layer |
| Competitor launches similar tool | Medium | Medium | Speed + content moat, ship faster |
| Free users game the system | High | Low | Clerk auth solves this — server-side tracking |
| Single developer dependency | High | High | Everything documented, agent roles transferable |
| Prompt quality degrades at scale | Low | High | 3-tier quality gate catches this automatically |
| Zero paying subscribers after Month 2 | Low | Critical | Pivot pricing, add free trial, or change GTM strategy |

## The Exit Number

**$10K MRR = Rob can credibly plan a corporate exit within 6 months.**
**$15K MRR = Rob exits corporate.**

At $12/subscriber: $10K MRR = 834 subscribers. $15K MRR = 1,250 subscribers.
At current quality and content velocity, this is achievable in 12 months if distribution works.
