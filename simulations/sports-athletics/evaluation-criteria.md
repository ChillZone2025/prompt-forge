# Evaluation Criteria: Sports & Athletics

## Overview

These criteria evaluate whether Sports & Athletics agents demonstrate genuine performance analytics, scouting, and sports business knowledge — the kind that separates a credentialed analyst or experienced front-office professional from someone who reads box scores. A Director of Analytics, head scout, or VP of Ticket Sales should read the agent's output and think "this person understands both the game and the business."

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate
- **Data-driven analysis over narrative** — Every recommendation must be backed by specific metrics. "The team needs better defense" is worthless; "the team's 2nd-half defensive rating is 11.8 points worse, correlated with starter minutes above 34" is actionable.
- **Advanced metrics literacy** — Correct use of PER, true shooting%, offensive/defensive rating, plus/minus, pace-adjusted stats, xG, WAR, EPA, or sport-appropriate advanced metrics. Relying solely on traditional box score stats signals amateur analysis.
- **Context awareness** — Stats without context mislead. A player's PER means nothing without minutes context. Attendance means nothing without capacity and pricing context. Always frame metrics relative to benchmarks, peers, and trends.
- **Operational pragmatism** — Recommendations must account for real constraints: salary caps, roster limits, scheduling, facility capacity, staffing, budget. Idealized solutions that ignore constraints are useless.
- **Revenue and business acumen** — Sports is a business. Fan engagement, ticket pricing, sponsorship, and merchandise are revenue operations that require the same analytical rigor as on-field performance.
- **Industry terminology** — Correct use of sport-specific and business-specific terminology (PER, TS%, DRtg, ORtg, plus/minus, MPG, pace, usage rate, STH, per-cap, dynamic pricing, sponsorship activation, CPM, etc).

### Must Never
- Recommend lineup or tactical changes without supporting statistical evidence
- Present traditional stats (points, rebounds) as sufficient for player evaluation
- Ignore load management data when recommending playing time
- Evaluate attendance or revenue without accounting for pricing, competition, and market size
- Use stale scouting data without flagging that it may be outdated
- Make player health or medical recommendations (scope of athletic training/medical staff)
- Recommend contract or compensation decisions without salary cap analysis

## Agent-Specific Criteria

### Athlete Performance Analyst (`athlete_perf`)
- Uses advanced metrics (PER, TS%, offensive/defensive rating, usage rate) not just box score stats
- Identifies fatigue and load management indicators from workload data
- Correlates performance trends with minutes, rest days, and schedule density
- Compares player output to positional benchmarks and conference averages
- Identifies underutilized players using efficiency metrics vs. minutes allocation
- Flags conditioning issues supported by split data (1st half vs 2nd half, early season vs late season)

### Fan Engagement Agent (`fan_engage`)
- Analyzes attendance patterns by day-of-week, opponent, promotion, and weather
- Identifies revenue optimization opportunities (dynamic pricing, premium experiences, e-commerce)
- Evaluates email marketing health (list hygiene, segmentation, engagement rates)
- Analyzes social media content strategy using engagement data, not just follower counts
- Quantifies the revenue impact of engagement initiatives
- Recommends fan retention strategies grounded in churn data and exit survey insights

### Game Plan Strategist (`game_plan`)
- Builds tactical recommendations from opponent tendencies and team strengths
- Identifies matchup advantages and mismatches using efficiency data
- Recommends rotation patterns based on lineup plus/minus data
- Accounts for opponent adjustments and recent changes (not stale scouting)
- Balances short-term tactical needs with player health and load management

### Scout Analyst (`scout_analyst`)
- Evaluates talent using both physical tools and statistical production
- Identifies performance indicators that project future development
- Accounts for context (level of competition, role, teammates, coaching system)
- Flags character/culture concerns with appropriate sensitivity
- Compares prospects to relevant historical comps using measurable criteria

### Sports Operations Manager (`sports_ops`)
- Analyzes facility utilization and identifies scheduling optimization opportunities
- Evaluates staffing levels against operational demands
- Manages budget with revenue and cost awareness
- Identifies sponsorship inventory gaps and sales execution failures
- Recommends merchandise and concession strategies grounded in per-cap data

## Planted Issues Reference

### Scenario 1: Mid-Season Basketball Performance Analytics

| # | Issue | What Catching It Looks Like | Severity |
|---|-------|---------------------------|----------|
| 1 | Star player at 36 MPG with fatigue indicators — no load reduction | Identifies fatigue data, correlates with 2nd-half defensive decline, recommends reducing to 30-32 MPG with specific minute-distribution plan | Critical |
| 2 | 3-point attempt rate 28% vs conference average 35% — leaving 4-5 PPG on the table | Identifies shot selection inefficiency, quantifies the scoring gap, recommends increasing 3PA through offensive scheme and personnel | High |
| 3 | Bench scoring is bottom 10% in conference — rotation depth crisis | Identifies the 5-man bench unit's -28.6 net rating, recommends staggering starters rather than full-unit substitution | Critical |
| 4 | Opponent scouting report is 3 games stale — doesn't reflect lineup/scheme changes | Flags the specific changes missed (PG injury, zone switch, offensive rating drop), recommends mandatory 24-48 hour pre-game scouting updates | High |
| 5 | Freshman's advanced stats are best on team but averaging only 18 MPG — underutilized | Identifies Allen's elite PER (19.4), TS% (59.2%), and per-40 plus/minus (+9.8), makes the case for 26-28 MPG or starting role | High |
| 6 | 2nd-half defensive rating 11.8 points worse — conditioning/minutes problem, not scheme | Correlates the split with starter minutes threshold (34+ min = 12.2 point decline vs <32 min = 3.8 point decline), connects to rotation depth and load management issues | Critical |

### Scenario 2: Season Ticket & Fan Engagement Analysis

| # | Issue | What Catching It Looks Like | Severity |
|---|-------|---------------------------|----------|
| 1 | Season ticket renewal dropped from 78% to 61% — pricing issue, not satisfaction issue | Identifies exit survey data (72% cite pricing), notes satisfaction 8.2/10 and NPS +32, recommends price freeze or value-add rather than product changes | Critical |
| 2 | Friday at 95% capacity, Tuesday at 33% — no dynamic pricing implemented | Quantifies the revenue gap, references secondary market data ($42 vs $8 resale), estimates $180K-$240K incremental revenue from dynamic pricing | Critical |
| 3 | $340K unsold sponsorship inventory with 40% of previous sponsors uncontacted | Identifies as sales execution failure not market problem, prioritizes the 4 high-value uncontacted accounts, estimates $94K-$142K recovery | High |
| 4 | Email list has 12% open rate and 38% inactive subscribers — deliverability disaster | Recommends immediate list cleaning, behavioral segmentation, and content strategy shift from 80% promotional to value-driven | High |
| 5 | Zero e-commerce for merchandise — missing $110K-$135K annual revenue | Identifies that 85% of merch is game-day only, benchmarks against MiLB peers, recommends online store with online-exclusive items | Medium |
| 6 | Follower growth strong but 0.8% engagement — content strategy inverted | Identifies that 60% of posts are lowest-engagement types while 13.6% are highest-engagement, recommends flipping the ratio and increasing TikTok | Medium |

## Red Flags (Automatic Score Reduction)

The following behaviors reduce the score to 4/10 or below:
1. Recommending increased playing time for a player showing fatigue indicators
2. Using only traditional stats (points, rebounds, assists) without advanced metrics
3. Evaluating attendance without analyzing pricing, day-of-week, and market context
4. Ignoring that a scouting report is stale when opponent changes have occurred
5. Treating social media follower count as a success metric without engagement analysis
6. Making medical or injury rehabilitation recommendations (out of scope)
7. Recommending player personnel decisions without salary cap or roster constraint analysis

## Safety Boundaries

- **Always defer to medical staff** on injury management, return-to-play decisions, and load management protocols
- **Never make** clinical health assessments based on performance data — flag for medical evaluation
- **Recommend legal/compliance review** for contract negotiations, NIL deals, and agent interactions
- **Flag Title IX implications** when recommendations affect resource allocation between programs
- **Never advise** on substance use, supplements, or recovery protocols beyond general wellness
- **Protect player privacy** — individual performance data shared with appropriate stakeholders only

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | Catches all planted issues, uses advanced metrics correctly, quantifies business impact, connects on-field and business recommendations, demonstrates deep domain expertise |
| 7-8 | Catches most planted issues (4+), solid use of advanced metrics, good quantification, demonstrates strong working knowledge |
| 5-6 | Catches some issues (2-3), uses a mix of advanced and traditional metrics, directionally correct but lacks depth |
| 3-4 | Misses critical issues, relies on traditional stats, provides generic recommendations without data support |
| 1-2 | Misses most issues, demonstrates no real analytics or sports business expertise |

**Pass Thresholds:**
- Tier 2: Minimum 7.0/10
- Tier 3: Minimum 8.0/10
