# Evaluation Criteria: Marketing & Growth

## Overview

These criteria evaluate whether Marketing & Growth agents demonstrate the knowledge and judgment expected of experienced marketing professionals — people who have managed real budgets, run real experiments, and been accountable for real pipeline numbers. A Head of Growth, VP of Marketing, or Director of Analytics should read the agent's output and think "this person has been in the data, understands what the numbers actually mean, and knows where the bodies are buried."

The defining standard in this industry: **every metric is a proxy, and the agent must know what it's a proxy for.** ROAS is not profit. Traffic is not demand. Confidence is not certainty. Statistical significance is not business significance. An agent that takes any marketing metric at face value without interrogating its construction, attribution methodology, and incrementality fails the fundamental competency test for this field.

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate

- **Attribution literacy** — Understand how different attribution models (first-touch, last-touch, linear, time-decay, data-driven) change the story. Know that last-touch attribution systematically overvalues bottom-of-funnel channels and undervalues awareness channels. Recommend multi-touch analysis and incrementality testing before making budget reallocation decisions.
- **Statistical rigor** — Apply proper significance testing (p-values, confidence intervals, sample size calculations, power analysis). Know the difference between statistical significance and practical significance. Understand the peeking problem, multiple comparisons, and Simpson's paradox. Never accept 80-89% confidence as "significant" when the standard is 95%.
- **Business context** — Connect marketing metrics to business outcomes. Traffic means nothing without conversion. Conversions mean nothing without revenue. Revenue means nothing without profit. Always ask: "Does this metric actually move the number that matters?"
- **Channel expertise** — Demonstrate deep knowledge of how specific channels work (Google's auction, Meta's algorithm, email deliverability scoring, SEO ranking factors). Generic advice that could apply to any channel indicates surface-level understanding.
- **Incrementality awareness** — Question whether marketing spend is creating demand or just capturing demand that would have existed anyway. Branded search, retargeting, and email to existing leads are particularly prone to taking credit for conversions they didn't cause.
- **Regulatory knowledge** — Know FTC endorsement guidelines, CAN-SPAM requirements, GDPR consent rules, and platform-specific advertising policies. Flag compliance risks proactively.
- **Segmentation instinct** — Never trust aggregate numbers without checking segment-level performance. A test that "wins" in aggregate but loses on mobile is not a win — it's a segment-specific effect masked by aggregation (Simpson's paradox).

### Must Never

- Accept last-touch attribution as a reliable measure of channel value without caveats
- Declare a test result "significant" below 95% confidence without explicit disclosure and justification
- Recommend budget reallocation based on a single attribution model without cross-validation
- Ignore the branded vs. non-branded split in paid search performance analysis
- Recommend shipping an A/B test variant without checking segment-level results (device, source, visitor type)
- Present revenue projections from statistically insignificant test results as reliable forecasts
- Advise increasing budget for a channel based only on traffic growth without examining conversion quality
- Treat platform-reported conversions as ground truth without cross-referencing actual revenue data
- Ignore sample size requirements or test duration minimums for experimentation
- Recommend influencer or endorsement campaigns without FTC disclosure requirements

## Agent-Specific Criteria

### SEO Content Agent (`seo_content`)

**Core Competencies:**
- Distinguishes between informational, commercial, navigational, and transactional search intent — and knows which drives revenue
- Understands topic clusters, topical authority, and E-E-A-T as ranking signals
- Analyzes keyword strategy by intent distribution, not just volume or ranking position
- Evaluates content performance through conversion rate AND traffic, not traffic alone
- Knows technical SEO fundamentals (crawlability, indexation, Core Web Vitals, schema markup)
- Understands backlink quality signals (relevance, authority, anchor text diversity) beyond raw count

**Evaluation Focus:**
- Catches the blog traffic paradox: traffic up but conversions down means the keyword strategy is misaligned with commercial intent
- Identifies that ranking improvements for informational keywords (69,500 combined volume) are vanity metrics when commercial-intent keywords (2,960 combined volume) haven't moved proportionally
- Recommends content strategy redirection toward comparison pages, buyer's guides, and bottom-of-funnel content rather than more informational articles
- Evaluates backlink quality (average DA 28 for new links is low) not just backlink quantity
- Provides actionable SEO recommendations tied to revenue outcomes, not just ranking improvements

### Campaign Optimizer (`campaign_optimizer`)

**Core Competencies:**
- Separates branded from non-branded performance in paid search analysis — always
- Evaluates campaign-level efficiency, not just account-level or channel-level aggregates
- Understands auction dynamics (quality score, ad rank, impression share) and their impact on CPC and ROAS
- Knows when to expand, reduce, or reallocate budget based on marginal efficiency
- Identifies budget misallocation by comparing share-of-spend to share-of-pipeline across channels
- Recognizes sample size limitations in campaign-level performance data

**Evaluation Focus:**
- Immediately flags that paid search ROAS (1.57) is inflated by branded terms — non-branded ROAS is 0.66
- Identifies paid social budget misallocation: 53.3% of spend generating 7.0% of SQLs
- Distinguishes between LinkedIn (which generates expensive but real SQLs) and Meta (which generates zero SQLs for B2B)
- Questions the "Consulting Firms" campaign spotlight — 3 deals from 12 pipeline entries is not a statistically reliable sample for ROAS claims
- Provides specific reallocation recommendations with expected impact ranges, not just "spend more here, less there"

### A/B Test Analyst (`ab_test_analyst`)

**Core Competencies:**
- Validates statistical significance, sample size adequacy, and test duration before accepting any result
- Identifies the peeking problem and knows when alpha spending corrections are needed
- Catches external validity threats (traffic anomalies, seasonal effects, concurrent campaigns)
- Performs segment-level analysis (device, source, visitor type) to check for Simpson's paradox
- Understands the difference between statistical significance and practical significance (a statistically significant 0.1% lift may not be worth implementing)
- Evaluates revenue impact projections for honest methodology vs. cherry-picked inputs

**Evaluation Focus:**
- Immediately rejects the "89% confidence = significant" characterization — 95% is the standard
- Catches the 5-day test duration problem (no weekend data, not a full business cycle)
- Identifies the Day 3 email blast as test contamination that invalidates the mid-test significance reading
- Flags the peeking problem: 5 daily checks without multiple comparisons correction inflated the effective alpha
- Catches the mobile regression buried in the aggregate win
- Identifies the ACV decrease (Enterprise → Starter plan shift) as a potential net-negative despite higher demo volume
- Recalculates the $7.6M revenue projection with honest inputs and demonstrates the compounding errors
- Recommends re-running the test with proper methodology rather than shipping a flawed result

### Brand Voice Agent (`brand_voice`)

**Core Competencies:**
- Develops and maintains consistent brand messaging across channels and formats
- Understands brand positioning frameworks (StoryBrand, JTBD, category design)
- Evaluates messaging effectiveness through engagement metrics and conversion impact
- Adapts voice for different audience segments while maintaining brand consistency
- Knows the difference between brand awareness (measurable through brand lift studies, branded search volume, direct traffic) and vanity engagement (likes, impressions)

**Evaluation Focus:**
- Evaluates the LinkedIn thought leadership content's brand contribution critically — $82K with zero leads requires measurement, not faith
- Recommends brand measurement frameworks: branded search volume trends, direct traffic correlation, brand lift studies, aided/unaided awareness surveys
- Distinguishes between "building brand" (measurable brand equity growth) and "posting content" (activity without verified impact)
- Provides actionable recommendations for brand measurement before asking for more brand spend
- Advises on how to present brand value to data-driven boards using quantifiable proxies

### Attribution Analyst (`attribution_analyst`)

**Core Competencies:**
- Understands all major attribution models (first-touch, last-touch, linear, time-decay, data-driven, algorithmic) and their biases
- Knows how to design and interpret incrementality tests (holdout groups, geo-tests, matched market tests)
- Identifies when platform-reported conversions overcount due to view-through attribution, cross-device assumptions, or attribution window settings
- Can explain attribution concepts to non-technical stakeholders (CEOs, board members)
- Understands the relationship between attribution methodology and budget allocation decisions

**Evaluation Focus:**
- Immediately identifies last-touch attribution as the root cause of misleading channel performance data (email at 40x ROAS is an artifact, not reality)
- Explains the attribution journey example in the data: LinkedIn created awareness, organic search built consideration, email captured the conversion — last-touch gives 100% credit to email
- Warns against budget reallocation based on last-touch data — cutting awareness channels will shrink the pipeline that email converts
- Recommends specific next steps: implement multi-touch attribution (Google Analytics 4 data-driven, or a dedicated tool like Rockerbox, Northbeam, or Triple Whale), run incrementality tests on top channels, and build a media mix model
- Calculates what email ROAS would look like under different attribution models to demonstrate the sensitivity

### Social Media Manager (`social_media_mgr`)

**Core Competencies:**
- Understands platform-specific algorithms (LinkedIn favors long-form engagement, Meta favors video and shares, Instagram favors Reels and saves)
- Evaluates social media ROI through funnel contribution, not just engagement metrics
- Knows the difference between organic social (community, engagement, brand) and paid social (demand generation, lead capture)
- Understands social listening, community management, and crisis response
- Applies FTC endorsement guidelines and platform-specific ad policies to influencer and branded content strategies

**Evaluation Focus:**
- Evaluates the paid social budget split critically: LinkedIn generates expensive SQLs while Meta generates zero for B2B — these are fundamentally different problems requiring different responses
- Assesses the LinkedIn thought leadership spend ($82K) with nuance — engagement content has brand value but needs measurement infrastructure to justify continued investment
- Identifies that the Meta strategy (lookalike audiences, interest targeting) is fundamentally misaligned for a mid-market B2B SaaS product
- Recommends specific social strategy changes: double down on LinkedIn for SQLs, implement brand measurement for thought leadership, cut Meta entirely for B2B lead gen
- Provides platform-specific tactical recommendations, not generic social media advice

## Planted Issues Reference

### From Scenario 1 (Q1 Marketing Performance Review)

| # | Issue | What Good Looks Like | Catch Priority |
|---|-------|---------------------|----------------|
| 1 | Paid search ROAS inflated by branded terms — overall 1.57 masks non-branded 0.66 | Immediately separate branded/non-branded, identify that non-branded is below breakeven, recommend audit of brand vs. non-brand budget allocation | **Critical** — fundamental analysis error |
| 2 | Blog traffic up 45% but conversion rate dropped from 2.1% to 0.8% — informational keywords attracting wrong audience | Identify the traffic quality problem, trace it to keyword intent misalignment (informational vs. commercial), recommend content strategy pivot | **Critical** — hidden behind a positive headline metric |
| 3 | Last-touch attribution makes email appear as 40x ROAS performer when it's capturing credit from awareness channels | Explain attribution bias, use the example customer journey in the data to illustrate, recommend multi-touch analysis before budget decisions | **Critical** — drives wrong budget allocation |
| 4 | "Consulting Firms" campaign claims 340% ROAS from 12 conversions (only 3 closed-won deals) — not statistically significant | Flag the tiny sample size, explain that 3 deals cannot establish reliable ROAS projections, recommend continued monitoring before scaling | **High** — small sample masquerading as proven performance |
| 5 | 53.3% of budget on paid social generates only 7.0% of SQLs and 3.8% of revenue — massive misallocation | Calculate the SQL Efficiency Index, compare paid social's contribution to its spend share, recommend significant reallocation | **High** — largest budget category with worst efficiency |
| 6 | SEO ranking improvements concentrated on informational keywords (69,500 volume) not commercial intent (2,960 volume) | Compare intent distribution of ranking wins vs. revenue-driving potential, flag that informational rankings don't drive pipeline | **Medium** — hidden behind positive ranking metrics |

### From Scenario 2 (A/B Test Results)

| # | Issue | What Good Looks Like | Catch Priority |
|---|-------|---------------------|----------------|
| 1 | Test ran only 5 days (Mon–Fri) — no weekend data, not a full business cycle | Flag insufficient duration immediately, explain weekday/weekend behavioral differences, recommend 2+ week minimum | **Critical** — invalidates result reliability |
| 2 | 89% confidence reported as "significant" — actual standard is 95% | Clearly state that 89% does not meet the 95% significance standard, quantify the false positive risk (11%), reject the "significant" characterization | **Critical** — misrepresentation of statistical evidence |
| 3 | Variant B RPV slightly higher but ACV decreased 15.5% — plan selection shifted from Enterprise to Starter | Identify the plan shift, calculate LTV impact of lower-tier selection, flag that more demos at lower value may be net-negative long-term | **High** — positive headline metric masking negative composition shift |
| 4 | Mobile segment shows Variant B losing to Control (-9.9%) but buried in aggregate win | Perform device-level segment analysis, identify the mobile regression, flag Simpson's paradox risk, recommend mobile UX investigation | **High** — aggregate result masks segment-level harm |
| 5 | Day 3 email blast drove 58% traffic spike with high-intent returning visitors, contaminating the test | Identify the traffic anomaly in daily data, trace it to the email campaign, explain how it polluted the test population, recommend excluding Day 3 or re-running | **Critical** — external validity threat that invalidated mid-test significance |
| 6 | No pre-test sample size calculation, test stopped when it "looked good" (peeking problem) | Flag the missing sample size calc, calculate the post-hoc requirement (11,400 vs 4,200 actual), explain the peeking problem and alpha inflation, recommend pre-registered stopping rules | **Critical** — fundamental experimentation methodology failure |

## Red Flags — Automatic Score Reduction

The following responses indicate fundamental incompetence or dangerous judgment and should result in automatic score reduction to 4 or below:

- **Accepting 89% confidence as "significant"** without explicitly flagging that it fails the 95% standard — demonstrates either statistical illiteracy or willingness to validate bad methodology
- **Recommending budget reallocation based solely on last-touch ROAS** — any agent that says "email has 40x ROAS, shift budget there" without questioning attribution methodology is giving advice that will destroy pipeline
- **Treating blended paid search ROAS as an indicator of paid search effectiveness** without separating branded from non-branded — brands would have captured those conversions through organic if the branded ads weren't running
- **Recommending shipping the A/B test variant without flagging the statistical issues** — the test did not reach significance, was contaminated by an email blast, ran for insufficient duration, and showed mobile regression
- **Celebrating traffic growth without examining conversion quality** — more traffic with lower conversion rates is not a success, it's a strategy misalignment
- **Presenting the $7.6M revenue projection as credible** without identifying the compounding errors (insignificant result, wrong ACV, ignored segments, contaminated data)
- **Ignoring the mobile segment regression** in aggregate test results — any analyst who doesn't check segment-level performance is not doing their job

## Safety Boundaries

These boundaries are absolute and apply to all agents in this industry:

1. **Statistical integrity is non-negotiable.** Never characterize a result as significant when it does not meet the stated significance threshold. Never recommend business decisions based on statistically insignificant data without full disclosure of the uncertainty.
2. **Attribution honesty.** Always disclose the attribution methodology used and its known biases. Never present last-touch ROAS as channel effectiveness without caveat. Budget reallocation requires multi-model validation or incrementality evidence.
3. **Sample size discipline.** Never draw conclusions from samples too small to be reliable. Three deals does not establish ROAS. Five days does not establish a pricing page effect. Small samples produce volatile estimates that regress to the mean.
4. **Segment analysis is mandatory.** Aggregate results must be validated at the segment level before implementation. A test that wins in aggregate but loses for 26% of traffic (mobile) is not a clean win.
5. **Regulatory compliance.** All marketing recommendations must comply with FTC, CAN-SPAM, GDPR, CCPA, and platform-specific advertising policies. Non-compliance exposes the business to fines, account bans, and reputational damage.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | **Marketing executive.** Catches all planted issues with correct reasoning. Applies attribution literacy, statistical rigor, and business context simultaneously. Recommendations are specific, actionable, and prioritized by impact. A CMO or Head of Growth would trust this agent's analysis to guide budget decisions. |
| 7-8 | **Senior practitioner.** Catches most planted issues (at minimum all Critical items). Demonstrates channel expertise and analytical depth. Recommendations are sound and well-reasoned. May miss nuances (e.g., the plan selection shift in the A/B test, the informational vs. commercial keyword distinction). |
| 5-6 | **Mid-level marketer.** Gets the obvious issues (89% isn't significant, paid social is expensive) but misses systemic problems (attribution bias, branded vs. non-branded split, peeking problem). Recommendations are directionally correct but lack analytical depth. Would need supervision for budget decisions. |
| 3-4 | **Generic business advice.** Applies common sense ("spend more on what works, less on what doesn't") without marketing-specific analytical frameworks. Doesn't understand attribution methodology, statistical testing, or channel economics. Advice could come from anyone with a spreadsheet. |
| 1-2 | **Dangerous.** Accepts all metrics at face value. Recommends shipping the A/B test variant. Celebrates the 40x email ROAS without questioning attribution. Would cause the business to misallocate budget, ship a harmful pricing page change, or mislead the board with fabricated revenue projections. |

## Pass Thresholds

- **Tier 2 (Conversation Test):** Minimum 7.0/10 — must catch all Critical planted issues and demonstrate attribution literacy and statistical rigor
- **Tier 3 (Full Simulation):** Minimum 8.0/10 — must catch all Critical and High planted issues, provide channel-specific recommendations with supporting analysis, and demonstrate judgment a marketing executive would trust
