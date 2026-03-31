# Simulation Scenarios: Marketing & Growth

> Multi-turn conversation scripts for testing agents in the Marketing & Growth industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Q1 Marketing Performance Review

### Agents Tested
`seo_content`, `campaign_optimizer`, `attribution_analyst`, `social_media_mgr`

### Mock Data
`mock-data/scenario-1.md` (Q1 marketing dashboard for B2B SaaS at $22M ARR)

### Messages

**Message 1 — Set the Stage**
```
I'm the VP of Marketing at a $22M ARR B2B SaaS. We just closed Q1 and I need to present performance to the board next week. Can you walk me through how to structure a marketing performance review that actually shows what's working?
```

**Expected Response Elements:**
- Framework for structured performance review (channel-level, campaign-level, funnel analysis)
- Emphasis on separating branded from non-branded performance in paid channels
- Recommendation to analyze attribution methodology before trusting channel-level revenue numbers
- Mention of funnel conversion rates as leading indicators, not just top-line revenue
- Should ask for the data package or outline what data points are needed

**Message 2 — Provide the Data**
```
Here's our full Q1 dashboard. Tell me what's actually working and what isn't:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Immediately flag the branded vs. non-branded paid search split (non-branded ROAS is 0.66, below breakeven — the blended 1.57 ROAS is misleading)
- Call out the paid social budget misallocation (53.3% of spend, 7.0% of SQLs, 3.8% of revenue)
- Identify the blog traffic paradox (traffic up 45%, conversions down 62% — keyword strategy driving informational traffic with no conversion path)
- Flag the attribution model limitation (last-touch makes email look like the top performer at 40.27 ROAS, but the example journey shows email is capturing credit from LinkedIn and organic)
- Question the "Consulting Firms Resource Planning" campaign spotlight (3 deals from 12 pipeline entries is not statistically reliable for ROAS projections)
- Note that SEO ranking improvements are concentrated on informational keywords, not commercial-intent keywords

**Message 3 — Challenge the Expert**
```
My CEO loves the email ROAS number — 40x return. She wants me to shift 30% of paid social budget to email. Is that the right move?
```

**Expected Response Elements:**
- Explain why the 40x ROAS is an artifact of last-touch attribution, not a real efficiency metric
- Email is the last touchpoint in multi-step journeys — it captures conversions that were created by other channels
- Shifting budget FROM awareness channels (paid social) TO email would reduce the pipeline that email converts — the 40x would actually decrease
- Recommend implementing multi-touch attribution before making budget reallocation decisions
- Suggest a more nuanced approach: yes, reduce Meta spend (zero SQLs at $164K) but not by shifting to email — reallocate to channels with proven SQL contribution
- Distinguish between LinkedIn (which generates SQLs, albeit expensively) and Meta (which generates zero SQLs for B2B)

**Message 4 — Dig Deeper on a Channel**
```
The SEO team is celebrating — rankings are up across the board and organic traffic grew 45%. They want a 40% budget increase for Q2. Should I approve it?
```

**Expected Response Elements:**
- Acknowledge the traffic growth but immediately challenge the quality of that growth
- The ranking improvements are overwhelmingly for informational keywords (69,500 combined monthly volume) while commercial-intent keywords (2,960 combined volume) barely moved
- Blog conversion rate collapsed from 2.1% to 0.8% — the traffic increase is attracting the wrong audience
- Top 5 posts by traffic (73% of blog sessions) have an average 0.15% conversion rate — these are "what is a Gantt chart" type queries from people who are not buying PSA software
- The SEO strategy needs redirection, not more budget — invest in commercial-intent content (comparison pages, buyer's guides, ROI calculators) rather than informational content
- Recommend approving a smaller increase (10-15%) with explicit KPIs tied to commercial-intent rankings and blog conversion rate, not raw traffic
- Note: Domain Authority improvement (52→55) and backlink growth are positive but new backlinks average DA 28 — low-quality links that may not move commercial rankings

**Message 5 — Edge Case: Strategic Decision**
```
Our board member says we should cut all paid social because the numbers look terrible. Another board member says the LinkedIn thought leadership content is "building brand" even though there are no conversions from it. How do I navigate this?
```

**Expected Response Elements:**
- Acknowledge that both board members have partial truths
- The data supports cutting Meta spend — $164K with zero SQLs is indefensible for a B2B SaaS. The audience targeting is wrong for this product category.
- LinkedIn is a more nuanced question. The thought leadership campaign ($82K, zero leads) has no direct conversion attribution but may be contributing to the pipeline through brand awareness that shows up as "direct" or "organic" traffic later.
- Recommend a measurement framework: implement UTM tracking on LinkedIn content, set up brand lift studies, track LinkedIn impression-to-website-visit correlation, and run a 60-day holdout test (pause LinkedIn in one geo, maintain in another, compare pipeline)
- The right answer is not "cut all paid social" or "trust that brand is working" — it's "measure it properly before deciding"
- Provide the board with a decision framework: channels need to demonstrate either (a) direct pipeline contribution within 2 quarters, or (b) measurable brand impact through controlled testing
- Short-term recommendation: cut Meta entirely, reduce LinkedIn by 50%, and use the savings to fund proper measurement infrastructure and higher-performing channels

---

## Scenario 2 — A/B Test Results Analysis

### Agents Tested
`ab_test_analyst`, `campaign_optimizer`, `brand_voice`

### Mock Data
`mock-data/scenario-2.md` (A/B test results for pricing page redesign)

### Messages

**Message 1 — Set the Stage**
```
We just finished an A/B test on our pricing page and the team says it's a winner. I need someone to validate the results before we ship the change to 100% of traffic. What should I look for?
```

**Expected Response Elements:**
- Structured validation framework: statistical significance, practical significance, sample size adequacy, test duration, segment analysis, external validity threats
- Emphasis on checking for full business cycle coverage (weekdays AND weekends)
- Importance of pre-registered sample size calculation vs. stopping when it "looks good"
- Check for novelty effect (new designs may show initial lift that fades)
- Ask for test details: hypothesis, sample size calc, duration, primary metric, segment breakdowns, daily data

**Message 2 — Provide the Data**
```
Here are the full test results. Is this a real winner?

{{MOCK_DATA}}
```

**Expected Response Elements:**
- **Immediately flag that the test did NOT reach statistical significance** — p=0.11 at 89% confidence is NOT significant at the standard 95% threshold. The marketing team's characterization of this as "significant" is wrong.
- **Flag the insufficient test duration** — 5 days (Monday–Friday) does not cover a full business cycle. Weekend traffic patterns, which may differ significantly, are entirely absent. Minimum duration should be 2 full weeks.
- **Identify the Day 3 email blast contamination** — The March 12 traffic spike (+58%) was caused by an uncoordinated email campaign. This polluted the test with high-intent returning visitors who are fundamentally different from the normal pricing page population.
- **Catch the peeking problem** — Test was checked daily, and the ship decision was made on Day 3 when the anomalous data inflated the result to p=0.03. No multiple comparisons correction was applied. Under Šidák correction, even the Day 3 result (p=0.03) would not be significant.
- **Identify the mobile regression** — Mobile users show Variant B LOSING to Control by -9.9%. The aggregate "win" is driven entirely by desktop. Shipping Variant B harms mobile users.
- **Flag the ACV decrease** — While RPV is slightly higher, plan selection shifted from Enterprise to Starter. ACV dropped 15.5% ($16,800 → $14,200). More demos at lower value may be a net negative.

**Message 3 — Challenge the Expert**
```
The VP of Marketing already told the CEO this is a win and it's going into the board deck. He says 89% confidence is "close enough" and the revenue projections show $7.6M annual impact. How do I push back?
```

**Expected Response Elements:**
- Provide clear, non-technical language for why 89% is not "close enough" — there's an 11% chance the result is pure noise, meaning roughly 1 in 9 chance the change does nothing or hurts
- The $7.6M projection is built on compounding errors: (1) uses an insignificant conversion rate as if it were real, (2) uses company-average ACV instead of Variant B's lower ACV, (3) ignores the mobile regression, (4) ignores the email blast contamination
- Recalculate with honest numbers: even if the lift were real, using the Variant B ACV ($14,200 instead of $16,800) reduces the projection by ~15%. Accounting for mobile losses reduces it further.
- Frame it in terms the VP and CEO understand: "If we tell the board $7.6M and the real number is $0 or negative, that's a credibility problem we can't walk back"
- Recommend the path forward: re-run the test properly (2+ weeks, pre-calculated sample size, no mid-test email blasts, daily peeking protocol with alpha spending function), then present real results to the board
- If there's political pressure to show something: present it as "promising signal that requires validation" rather than "confirmed $7.6M impact"

**Message 4 — Dig Deeper on Segments**
```
Looking at the segment data, desktop shows a significant lift but mobile doesn't. Should we just ship the variant for desktop only?
```

**Expected Response Elements:**
- Desktop-only deployment is directionally reasonable but still has caveats
- The desktop result (p=0.04) is marginally significant and was achieved with only 5 days of data — it's more reliable than the aggregate but still at risk of being a false positive
- Shipping different experiences by device adds technical complexity and maintenance cost — make sure the team can support this long-term
- The mobile regression (-9.9%) is not statistically significant (p=0.62) — we can't say mobile is truly worse, just that we have no evidence it's better
- Before shipping desktop-only: investigate WHY mobile performs worse. The pricing page redesign likely has layout or interaction issues on smaller screens. This is actionable — fix the mobile experience and re-test rather than accepting a fragmented experience.
- Recommended approach: (1) fix mobile UX issues identified in the variant, (2) re-run the full test for 2+ weeks with the fixed mobile experience, (3) ship only if the full test reaches significance

**Message 5 — Edge Case: Process & Culture**
```
This is the third time this quarter the marketing team has declared a test a "winner" before reaching significance. The CEO now expects every test to produce a win. How do I fix the experimentation culture?
```

**Expected Response Elements:**
- This is a systemic problem, not a one-time error — the team has been trained to seek confirmation rather than truth
- Root causes to address: (1) no pre-registered test plans with stopping rules, (2) daily peeking without alpha spending correction, (3) incentives aligned with "finding wins" rather than "finding truth," (4) leadership pressure for positive results driving confirmation bias
- Concrete fixes:
  - Implement mandatory test registration (hypothesis, sample size calculation, duration, stopping rules) BEFORE launch
  - Use a sequential testing framework (Optimizely's Stats Engine, or alpha spending functions) that corrects for repeated looks
  - Set an organizational rule: no test result is communicated to leadership until the pre-registered stopping point is reached
  - Reframe "failed" tests as successful learning — a properly run test that shows no effect saved the company from implementing a change that doesn't work
  - Track experimentation program health metrics: test velocity, average test duration, percentage reaching required sample size, false discovery rate
- The CEO expectation problem: a healthy experimentation program expects 1 in 3 tests to win, 1 in 3 to lose, and 1 in 3 to be inconclusive. If "every test wins," the tests are either too easy (testing obvious improvements) or the statistics are being gamed
- Reference: the "peeking problem" is one of the most well-documented issues in experimentation — point to Optimizely's white paper on sequential testing or Evan Miller's "How Not To Run an A/B Test" as educational resources for the team
