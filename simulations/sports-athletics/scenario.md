# Simulation Scenarios: Sports & Athletics

> Multi-turn conversation scripts for testing agents in the Sports & Athletics industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Mid-Season Performance Analytics Report (Basketball)

### Agents Tested
`athlete_perf`, `game_plan`, `scout_analyst`

### Mock Data
`mock-data/scenario-1.md` (College basketball mid-season performance data)

### Messages

**Message 1 — Set the Stage**
```
We're 14-7 and sitting on the NCAA tournament bubble. Our analytics guy just handed me the mid-season performance report. I need a comprehensive assessment before our game against the #2 team in conference. What should I be looking at?
```

**Expected Response Elements:**
- Structured framework for a mid-season performance review: team-level efficiency metrics, individual player evaluation (traditional + advanced stats), lineup analysis, load management data, opponent scouting, and remaining schedule implications
- Should ask for the data package and identify what data points are most critical for bubble teams (NET ranking, quality wins, strength of schedule)
- Should mention the importance of integrating performance data with load management data — wins don't matter if your best player gets injured
- Reference specific tools/metrics: KenPom, NET ranking, offensive/defensive ratings, ACWR for load management

**Message 2 — Provide the Data**
```
Here's the full mid-season package. Break it down and tell me what you see:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the DeShawn Parker load management crisis (ACWR 1.62, declining HRV, rising force plate asymmetry) — this is the most urgent finding because an injury ends the season
- Flag the three-point attempt rate gap (28.2% vs. 35.4% conference average) and quantify the ~4-5 PPG being left on the table
- Identify Terrence Allen as severely underutilized (best advanced stats on the team, only 18.1 MPG)
- Call out bench production as dead last in conference — recommend staggering starters rather than 5-man bench units
- Flag the opponent scouting report being 3 games stale and missing the PG injury / defensive scheme change
- Identify the second-half defensive collapse pattern and connect it to fatigue / rotation depth
- Prioritize findings by urgency: (1) Parker injury risk, (2) stale scouting report for the next game, (3) rotation/minutes adjustment, (4) shot selection optimization

**Message 3 — Challenge the Expert**
```
Coach Tillman says Parker is "fine — he's a competitor and he wants to play." He's resistant to cutting Parker's minutes because "you don't bench your best scorer in March." How do I make the case with data?
```

**Expected Response Elements:**
- Acknowledge the competitive reality — March matters, and coaches rightfully prioritize winning now
- BUT: Parker is NOT the team's best scorer per minute. Terrence Allen has a higher PER (19.4 vs. 16.8), higher TS% (59.2 vs. 51.2), higher offensive rating (114.8 vs. 104.6), and a dramatically better plus/minus per 40 (+9.8 vs. +3.1)
- The ACWR data is not opinion — 1.62 is in the empirically validated high-risk zone. Research shows injury probability increases 2-4x when ACWR exceeds 1.5
- HRV decline (58 -> 42ms, a 28% drop) indicates systemic recovery failure, not "soreness"
- Force plate asymmetry at 14% (threshold: 10%) is an objective marker of compensatory movement — the body is already adapting around a developing issue
- The proposal isn't to "bench" Parker — it's to reduce him from 36 to 28-30 MPG and give Allen 26-28 MPG. The lineup data shows Cross/Allen/Webb/Reznikov/Hughes has a BETTER net rating (+21.6) than the starting lineup with Parker (+14.8), albeit in a smaller sample
- Frame it as risk management: if Parker tears an ACL in a regular season game, the tournament conversation is over. A 6-minute reduction preserves him for the games that matter most

**Message 4 — Tactical Deep Dive**
```
The Riverview game is in 3 days. Our scouting report is from March 8. What do I need to know that's changed, and what adjustments should we make?
```

**Expected Response Elements:**
- Clearly state that the scouting report is dangerously outdated — Riverview is a fundamentally different team than 3 weeks ago
- Key changes: (1) Starting PG Darius Mitchell is out with ankle sprain — replaced by freshman Isaiah Ford who averages 4.8 TO/G in 3 starts. (2) Hawks switched from switch-everything man to 2-3 zone defense (60%+ of possessions in last 2 games). (3) Offensive rating dropped from 114.8 to 102.4 — transition scoring cut nearly in half.
- Tactical adjustments against the zone: this is where the three-point shooting gap becomes critical. Zone defense is designed to pack the paint — the antidote is outside shooting. Webb (36.1%) and Allen (38.4%) should be primary perimeter options. The team's low 3PA rate is a vulnerability against zone.
- Exploit the freshman PG: full-court pressure, trapping on ball screens, forcing Ford to make decisions in transition. His 4.8 TO/G in starts suggests he's vulnerable to pressure.
- The Hawks' transition scoring dropped from 14.8 to 8.2 PPG — without Mitchell pushing pace, Ridgemont can control tempo and play in the half court
- Emphasize that an updated scouting report must be prepared immediately — assign the analyst to break down the last 3 Hawks games before practice tomorrow

**Message 5 — Edge Case: Strategic Season Decision**
```
If we lose to Riverview and drop to 14-8, are we still a tournament team? What's the path from here, and how should that affect decisions about resting Parker vs. chasing every win?
```

**Expected Response Elements:**
- At 14-8 (7-5 conference), with a NET ranking of 71 and RPI of 68, the team is squarely on the bubble — not safely in, not out
- A loss to Riverview (NET 42) is not a bad loss, but it's a missed quality win opportunity that would have strengthened the profile
- The path: need to win at least 2 of the remaining 3 regular season games AND reach the conference tournament semifinal (minimum). A quarterfinal exit at 16-9 or 17-8 likely isn't enough without a marquee win
- This context actually STRENGTHENS the case for managing Parker's load, not weakening it: if the team needs to win 5-6 more games over the next 2-3 weeks to make the tournament, Parker's availability for ALL of those games is more important than his minutes in any single one
- A fully healthy Parker playing 30 MPG for 6 games is worth more than an injured Parker playing 36 MPG for 2 games before a soft-tissue injury ends his season
- Additionally: increasing Allen's minutes now gives him experience and confidence for higher-leverage tournament situations. A freshman averaging 18 MPG suddenly being asked to play 30 in a conference tournament semifinal is a risk; gradually building his minutes over the next 2 weeks reduces that shock
- The second-half defensive collapse is the biggest tactical threat to the tournament path — the team has been outscored by 4.8 PPG in the final 8 minutes over the last 10 games. In close tournament games, that's the difference between advancing and going home. Fixing the rotation depth addresses this directly

---

## Scenario 2 — Season Ticket & Fan Engagement Analysis

### Agents Tested
`fan_engage`, `sports_ops`

### Mock Data
`mock-data/scenario-2.md` (Minor league baseball business operations data)

### Messages

**Message 1 — Set the Stage**
```
I'm the GM of a Triple-A minor league baseball team. Our revenue dropped 7% last year and I'm getting pressure from ownership to turn it around for 2026. I need a full business health assessment. What data do you need from me?
```

**Expected Response Elements:**
- Structured framework for a minor league business assessment: ticket revenue (season, single-game, group), sponsorship portfolio, fan engagement metrics (email, social, CRM), merchandise, concessions/F&B, facility utilization
- Should ask about specific data points: attendance trends by day of week, season ticket renewal rates, pricing history, sponsorship inventory sold vs. unsold, email list health, social media engagement rates, e-commerce revenue
- Should mention dynamic pricing capability as a baseline question — does the team currently adjust prices based on demand?
- Reference the interconnectedness of these revenue streams — ticket attendance drives concession and merchandise per-caps, sponsorship value depends on attendance figures

**Message 2 — Provide the Data**
```
Here's everything from our 2025 season review. Give me the honest assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Lead with the season ticket pricing problem — this is the root cause of the largest revenue decline. 72% of non-renewals cite price as the reason. Satisfaction is high; value perception is not. The 18% price increase was too aggressive.
- Identify the dynamic pricing opportunity as the highest-impact revenue lever ($180K-$240K potential). Friday at 95% vs. Tuesday at 33% with the same ticket price is leaving massive revenue on the table on both ends.
- Flag the sponsorship sales execution gap — $340K unsold with 40% of previous sponsors not contacted. This is a staffing/capacity problem, not a market demand problem.
- Call out the email list as a deliverability disaster — 37.8% inactive, 12% open rate, never cleaned, zero segmentation. The list is hurting itself.
- Identify the e-commerce merchandise gap — $0 online revenue vs. $110K-$135K industry benchmark opportunity.
- Flag the social media engagement rate (0.8%) and the content strategy mismatch — high-engagement content is underproduced, low-engagement content dominates.
- Quantify total addressable revenue improvement: dynamic pricing ($180-240K) + sponsorship recovery ($94-142K) + e-commerce launch ($110-135K) + email optimization (improved conversion on existing sends) = potentially $400K-$550K in incremental revenue, which would more than offset the 7% decline.

**Message 3 — Challenge the Expert**
```
Our ticket ops manager says "fans won't accept dynamic pricing — they'll feel ripped off when they see Friday tickets cost more than Tuesday." How do I respond to that?
```

**Expected Response Elements:**
- This objection is common but empirically wrong — dynamic pricing is standard across professional sports and most entertainment. Every MLB, NBA, and NFL team uses it. Airlines, hotels, and concerts all use it. Fans already experience dynamic pricing on the secondary market (StubHub/SeatGeek).
- The key insight: fans ALREADY pay dynamic prices — just to resellers, not to the team. The secondary market data shows Friday tickets reselling at $42. Fans are willing to pay it. The question is whether that $14 premium goes to the team or to a ticket broker.
- On the low end: $8 Tuesday tickets on the secondary market mean the $28 face value is a BARRIER to attendance. Lowering Tuesday prices to $12-15 would increase walk-up traffic, which drives concession and merchandise revenue. An extra 500 fans at $12 tickets who each spend $15 on food and $5 on merch generates more revenue than 200 fewer fans at $28.
- Implementation framing matters: don't call it "surge pricing" or "dynamic pricing" to fans. Call it "value nights" (cheap Tuesdays), "premium games" (fireworks Friday), or "early bird pricing." Fans accept price variation when it's framed as deals, not as penalties.
- Reference MiLB peers who have successfully implemented: many Triple-A teams report 15-25% ticket revenue increases in the first year of dynamic pricing adoption.

**Message 4 — Prioritization**
```
I have a limited budget and a small staff. I can't do everything at once. Give me the top 3 priorities for the off-season, ranked by ROI and feasibility.
```

**Expected Response Elements:**
- **Priority 1: Implement dynamic pricing (ROI: $180K-$240K / Cost: ~$15K-$25K for platform + setup).** Highest revenue impact with lowest operational complexity. SeatGeek, Digonex, and Qcue all offer turnkey dynamic pricing for minor league teams. The data already exists (secondary market benchmarks, historical attendance by day). Can be implemented before Opening Day 2026. One-time setup, then largely automated.
- **Priority 2: Fix the sponsorship sales pipeline (ROI: $94K-$142K / Cost: $20K-$30K for part-time sales support).** Immediately contact the 17 uncontacted previous sponsors — prioritize the 4 high-value accounts first. Hire a part-time sales assistant or college intern to handle outreach, proposals, and follow-up. Create a 2-3 year deal incentive (10% discount on multi-year contracts) to reduce annual churn. This is a sales execution problem, not a market problem — the inventory exists and sponsors have historically bought it.
- **Priority 3: Clean the email list and implement segmentation (ROI: Improved conversion across all email campaigns / Cost: ~$0-$2K, mostly staff time).** Suppress the 17K inactive addresses immediately. Set up 4 basic segments (STH, multi-game, single-game, never-purchased). Create one email template per segment. This is the highest-leverage low-cost action — it improves the effectiveness of every other marketing initiative.
- **Honorable mention:** Launch e-commerce store ($110K-$135K opportunity) — but this requires more setup time and may be a Q2 2026 project rather than pre-season.
- Should explicitly note: season ticket pricing for 2026 should be frozen at 2025 levels or offered with a 5-10% "loyalty" discount to returning holders. The 18% increase was the single biggest revenue destroyer.

**Message 5 — Edge Case: Ownership Pressure**
```
Ownership wants to raise ticket prices again for 2026 to "make up for lost revenue." They're pointing to the high satisfaction scores as proof that fans will pay more. How do I push back with data?
```

**Expected Response Elements:**
- This is the most important conversation the GM will have this off-season. The data clearly shows another price increase would accelerate the revenue decline, not reverse it.
- The satisfaction scores prove the product is good — but the exit survey proves the price is already too high. 72% of non-renewals cite price. "Value for money" (5.4/10) is the only metric below 7.0. These data points are not contradictory — they're telling a clear story: fans love the experience but won't pay more for it.
- Show the math: The 18% price increase generated $742 more per full season ticket. But it cost 210 season ticket holders (620 -> 410). Lost revenue from departing STHs: 210 x $1,680 avg (2024 price) = $352,800 lost. Revenue gained from price increase on remaining holders: 410 x $300 avg increase = $123,000 gained. Net impact: **-$229,800.** The price increase LOST the team $230K.
- Each season ticket holder represents not just ticket revenue but ancillary spending: concessions (~$480/season), merchandise (~$120/season), parking (~$140/season). Losing 210 STHs lost approximately $155,400 in ancillary revenue on top of the $230K ticket revenue decline.
- The alternative pitch to ownership: "We don't need higher prices — we need more revenue per fan and more fans in seats." Dynamic pricing captures the premium on high-demand nights without raising the base price. Better sponsorship execution adds $94K-$142K without touching ticket prices. E-commerce adds $110K-$135K with zero impact on ticket pricing. The total addressable revenue improvement ($400K-$550K) far exceeds what any price increase could generate — and it doesn't drive fans away.
- Frame the risk: another 18% increase on the current base would push Field Box season tickets to ~$2,340. At that price, the secondary market becomes even more attractive for occasional use, and renewal rates could drop below 50%. The team would be in a death spiral of rising prices and shrinking season ticket base.
