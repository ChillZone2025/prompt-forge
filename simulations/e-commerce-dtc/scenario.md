# Simulation Scenarios: E-commerce & DTC

> Multi-turn conversation scripts for testing agents in the E-commerce & DTC industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — DTC Brand Health Audit

### Agents Tested
`abandon_cart`, `ecomm_email`, `product_desc`, `review_mgmt`, `pricing_intel`, `listing_opt`

### Mock Data
`mock-data/scenario-1.md` (DTC Brand Health Dashboard — Skincare)

### Messages

**Message 1 — Set the Stage**
```
We're a $6.2M DTC skincare brand on Shopify Plus. Investor board meeting is in 2 weeks and the CEO wants a full brand health audit. Where do you start and what are the critical metrics you need to see?
```

**Expected Response Elements:**
- Structured audit framework covering unit economics, customer acquisition, retention, product health, and channel performance
- Specific request for data: P&L at contribution margin level, cohort-based LTV (not blended), CAC by channel with attribution methodology noted, email/SMS performance with list health metrics, product-level return rates and review data, subscription churn curves
- Mention that "revenue" is not a health metric — contribution margin, LTV:CAC, and cohort trends are what matter
- Flag that investor-facing metrics often use favorable assumptions (attribution windows, blended LTV) that need to be validated against actual data
- Should ask what attribution tool is in use and what window is configured

**Message 2 — Provide the Data**
```
Here's our full dashboard. Give me the honest assessment — what should I be worried about before the board meeting?

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the stale LTV assumption ($142 based on 2021-2022 data vs. current cohorts tracking to $88-92 — a 38% decline). The reported 4.6:1 LTV:CAC is actually ~2.8:1 and falling.
- Flag the Meta ROAS inflation — 28-day click window manually re-enabled, actual 7-day ROAS likely 2.3-2.6x, not 4.2x
- Call out the Radiance Serum return rate (23.4%) with uninvestigated "didn't like it" returns — this is either a product problem or a marketing-expectation mismatch
- Identify the email list health crisis — open rates down 32%, spam complaints up 167%, active subscribers declining while total list grows
- Flag subscription churn (45% by month 3) driven by interval mismatch — #1 cancellation reason is "too much product"
- Identify the 52% SKU revenue concentration risk
- Prioritize issues by financial impact and urgency
- Provide specific dollar-impact estimates where possible

**Message 3 — Challenge the Expert**
```
Our head of marketing says the 4.2x Meta ROAS is accurate because we re-enabled the 28-day click window specifically to get the most complete attribution picture. She says 7-day click "misses conversions" and gives us an incomplete view. Is she right?
```

**Expected Response Elements:**
- Acknowledge the kernel of truth: 7-day click does miss some conversions that happen beyond the 7-day window, and some purchases genuinely have longer consideration cycles (especially at a $68 price point for skincare)
- BUT: The 28-day click window doesn't just capture "missed" conversions — it takes credit for purchases that would have happened anyway (organic, email-driven, repeat purchases). That's why Meta changed the default post-iOS 14.5
- The real test: compare platform-reported ROAS against blended MER. If Meta claims 4.2x on $68K spend ($285,600 attributed), Google claims 3.8x on $32K ($121,600 attributed), and TikTok claims 2.1x on $18K ($37,800 attributed), that's $445,000 in platform-attributed revenue — but actual monthly revenue is only ~$500K, and that includes organic, direct, and returning customers. The platforms are collectively claiming ~89% of revenue
- The right approach: use blended MER as the ceiling check, use 7-day click for apples-to-apples benchmarking and optimization, and if the brand wants deeper attribution, invest in a proper incrementality test (geo-lift test, holdout test) rather than extending windows
- Note that making budget decisions on inflated ROAS means over-allocating to Meta and potentially under-investing in channels that actually drive incremental revenue

**Message 4 — Operational Deep Dive**
```
The Radiance Serum is our hero SKU — 52% of revenue. The 23% return rate is concerning but the product has a 4.1 star rating. Should we be worried, or is this just the cost of doing business at scale?
```

**Expected Response Elements:**
- The 4.1-star rating is masking the real story. Must cross-reference with return data:
  - 23.4% return rate is 3-4x higher than every other SKU in the catalog
  - 41.2% of returns are "Didn't like it" — this is a garbage-pail category that hides the actual reason
  - Another 22.8% are "Not as described" — combined with "Didn't like it," 64% of returns suggest marketing/product mismatch
  - 18.4% "Caused irritation" is a product safety signal that could trigger FTC attention if the product makes efficacy or gentleness claims
- The financial impact: $50,180/month in return costs reduces net serum revenue by 26.6%
- The concentration risk: 52% of revenue in a single SKU with a deteriorating return profile is fragile. One viral TikTok review, one ingredient supply disruption, or one Amazon listing suspension creates a revenue crisis
- Action plan: (1) implement a post-return survey to sub-categorize "didn't like it," (2) audit marketing claims against actual product experience, (3) compare new-batch vs. old-batch feedback if formulation changed, (4) develop 2-3 complementary SKUs to reduce concentration below 35%
- This is NOT "cost of doing business" — it's an undiagnosed product or marketing problem burning $600K/year in return costs

**Message 5 — Edge Case: Subscription Strategy**
```
Our subscription manager wants to send 3 free samples with every shipment to reduce churn. She says it worked at her last company. Our COO says we should just discount the subscription to 25% off instead of 15%. Who's right, and what should we actually do?
```

**Expected Response Elements:**
- Neither addresses the root cause. The data shows the #1 churn reason (34.2%) is "I have too much product" — the problem is interval, not value proposition or delight
- Free samples: increases COGS by $3-5 per shipment x 4,820 subscribers = $14,460-$24,100/month in added cost. At a brand doing 5.2% net margin, this is significant. Samples can work for cross-sell (introduce new SKUs to reduce concentration), but won't fix the "too much product" problem
- Deeper discount (25% off): destroys margin further and trains customers to expect deeper discounts. Moving from 15% to 25% discount on a $68 serum = additional $6.80/unit x ~2,780 subscriber units/month = ~$18,900/month in margin erosion. And it doesn't address the churn reason — customers aren't leaving because of price, they're leaving because they have 3 unopened bottles in their bathroom
- The actual fix based on the data:
  1. Change default subscription interval from 30 to 45 days (matches actual usage for most customers)
  2. Add a pre-shipment "skip" notification 3 days before each charge (Recharge supports this)
  3. Offer a quiz-based interval recommendation during checkout ("How often do you use serums?" -> recommend 30/45/60 day interval)
  4. Track actual usage by monitoring reorder intervals of one-time purchasers — this is the ground truth for consumption rate
  5. If samples are included, make them trial sizes of underperforming SKUs (Enzyme Mask, Toner) to drive portfolio diversification, not random freebies
- Quantify the churn impact: reducing month 2-3 churn by even 25% (from 45.2% to ~34%) would retain an additional ~110 subscribers per 1,000-subscriber cohort, worth approximately $71,500/year in incremental subscription revenue

---

## Scenario 2 — Amazon Marketplace Expansion

### Agents Tested
`listing_opt`, `pricing_intel`, `review_mgmt`, `product_desc`, `abandon_cart`, `ecomm_email`

### Mock Data
`mock-data/scenario-2.md` (Amazon Marketplace Expansion)

### Messages

**Message 1 — Set the Stage**
```
We launched on Amazon 8 months ago and it's at $112K/month — about 22% of our total revenue. The goal is to get Amazon to 35% of total within 12 months. What do I need to audit before we scale?
```

**Expected Response Elements:**
- Structured Amazon audit framework covering: listing health (all ASINs active, no suppressions), advertising efficiency (ACOS vs. margin by SKU, TACOS trend), Buy Box ownership (especially on branded ASINs), review velocity and trajectory, inventory health (FBA fees, aging, days of supply), account health metrics, competitor positioning, and brand protection
- Ask specifically about: Are all listings active? Any suppressions or policy violations? What's the ACOS target and how does it compare to product margins? Who else is selling your products? What does the review trend look like on key SKUs?
- Flag that scaling Amazon means scaling both revenue AND profitability — growing to 35% of revenue at negative contribution margin makes the business weaker, not stronger
- Mention that Amazon and DTC often cannibalize each other — need to understand whether Amazon growth is incremental or just shifting existing DTC customers to a lower-margin channel

**Message 2 — Provide the Data**
```
Here's the full Amazon account data. Tell me where we stand and whether the 35% goal is realistic.

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the ACOS disaster on Radiance Serum — 45% ACOS on 30% margin means losing $9.82 on every ad-driven sale. This is the #1 priority to fix
- Flag the 2 suppressed ASINs — 22-24 days with zero impressions, $9,200/month in lost revenue, $1,980/month in dead storage fees. This is basic operational negligence
- Identify the Buy Box erosion — 68% ownership on the hero SKU, GlowDeals winning by $0.50, approximately $25,200/month in diverted revenue
- Call out the review trajectory collapse — 4.1 all-time masking 3.2 recent average, with multiple reviews referencing a formula change. If this hits 4.0, conversion will drop 15-25%
- Flag $4,200/month in unnecessary FBA storage fees
- Identify the wrong competitive set — benchmarking against CeraVe/Neutrogena when actual shoppers compare against Herbivore/Biossance/Drunk Elephant
- Assessment: the 35% goal is NOT realistic in the current state. The account has fundamental profitability, operational, and brand health problems that must be fixed before scaling. Scaling a broken operation makes every problem bigger and more expensive
- Provide a prioritized fix list before any scaling discussion

**Message 3 — Challenge the Expert**
```
Our Amazon agency says we need to increase ad spend to 40% of Amazon revenue to "win the flywheel." They point out that our BSR on the Radiance Serum dropped from 1,800 to 2,840 since launch and more ad spend will push it back up. Should we follow their advice?
```

**Expected Response Elements:**
- The agency's flywheel theory has a correct premise and a dangerous conclusion
- Correct premise: on Amazon, paid advertising does drive organic rank through increased sales velocity, which increases organic impressions, which drives more organic sales. The flywheel is real
- Dangerous conclusion: increasing ad spend when ACOS already exceeds margin doesn't build a flywheel — it builds a money pit. The flywheel requires that incremental sales from ads eventually generate enough organic momentum to reduce ACOS over time (declining TACOS). Luma's TACOS has been flat at 25-26% for 6 months — there is no evidence of a flywheel effect occurring
- The BSR decline from 1,800 to 2,840 is more likely driven by the review trajectory collapse (4.1 -> 3.2 recent) and Buy Box losses (32% going to GlowDeals) than insufficient ad spend. Throwing more money at ads won't fix bad reviews or a leaking Buy Box
- What the agency should be recommending: (1) fix the suppressed listings immediately (free revenue), (2) reduce Radiance Serum ACOS below margin through bid caps, negative keywords, and dayparting, (3) shift budget to profitable SKUs (Cleanser, SPF), (4) address the review trajectory before it drops below 4.0, (5) resolve the Buy Box issue with GlowDeals, (6) fix the competitive set and keyword strategy to target clean beauty terms
- Consider whether the agency's incentive (typically a % of ad spend managed) is aligned with the brand's profitability

**Message 4 — Brand Protection Deep Dive**
```
Who is GlowDeals and how are they getting our product? Our COO says it's "free money — they're selling our product for us." Is that a reasonable take?
```

**Expected Response Elements:**
- The COO is wrong — this is not free money, it's a brand and revenue problem
- Revenue impact: GlowDeals is winning the Buy Box 32% of the time on the highest-volume ASIN, diverting approximately $25,200/month ($302,400/year). That is revenue Luma pays to manufacture and market the product but doesn't capture the sale margin on
- Brand risk: Luma has zero control over GlowDeals' storage, handling, or customer service. If GlowDeals' units are expired, damaged, or improperly stored, those customers leave negative reviews on Luma's listing. The recent "changed formula" reviews could be from GlowDeals selling older inventory or improperly stored product
- Price erosion: GlowDeals at $64.49 pressures Luma's pricing. If Luma drops to match, margin shrinks. If another reseller enters at $63.99, a race to the bottom begins on the brand's own product
- Investigation steps: (1) Buy a unit from GlowDeals and check batch numbers/expiry, (2) Review all wholesale, distribution, and retail accounts to identify the leak, (3) Check if product is being purchased from retail (Target, Sephora, etc.) and resold — common with beauty brands, (4) Contact Amazon Brand Registry to report unauthorized reseller if applicable
- Protection strategy: (1) implement MAP pricing in all distribution agreements, (2) add serialization or lot tracking to identify diversion source, (3) file an IP complaint through Brand Registry if GlowDeals is unauthorized, (4) consider an authorized reseller program with enforceable pricing terms, (5) use Amazon's Transparency program for anti-counterfeiting
- Connect to the review problem: if GlowDeals is selling older or improperly stored inventory, this could explain the "changed formula" reviews — different batches from different storage conditions would have different texture and scent characteristics

**Message 5 — Edge Case: Cross-Channel Cannibalization**
```
If we fix all these issues and scale Amazon to 35% of revenue, won't that just cannibalize our DTC site where margins are higher? Our CFO is concerned we're "building on rented land" and wants to pull back from Amazon entirely. What's the right framework for this decision?
```

**Expected Response Elements:**
- The CFO's concern is legitimate but pulling back entirely is the wrong conclusion. Need a framework, not a binary choice
- Channel margin comparison (be specific):
  - DTC contribution margin (post-marketing): 33.7% per the P&L
  - Amazon contribution margin: after referral fee (8%), FBA fees (~9%), advertising (~25% TACOS), and higher return costs on Amazon = roughly 10-15% contribution margin at best, negative on the serum currently
  - DTC is clearly more profitable per order — but the question is whether Amazon sales are incremental or substitutional
- Cannibalization test: (1) Compare zip-code-level DTC sales before and after Amazon launch — did DTC decline in regions where Amazon is strong? (2) Check if Amazon customers overlap with DTC customers (email matching via Amazon Attribution), (3) Analyze whether Amazon revenue growth correlated with DTC revenue decline or if total revenue increased
- "Building on rented land" framework: Amazon controls pricing (Buy Box), customer relationship (no email/address), advertising costs (CPC inflation), and policy (one policy change can suspend the account). These are real risks. Mitigation: never let Amazon exceed 40% of total revenue, always drive Amazon customers to the DTC brand experience through inserts (within Amazon TOS — no direct links or discount codes, but brand story and website mention are allowed), and maintain brand registry and IP protection
- The right framework: Amazon is a customer acquisition and brand awareness channel, not a profit maximization channel. Use Amazon to reach customers who would never find the DTC site (Amazon captures ~40% of US e-commerce searches). Optimize Amazon for break-even or modest profit, invest DTC savings in owned channel growth (email, SMS, SEO), and track total brand revenue growth rather than optimizing each channel in isolation
- Specific recommendation: fix the profitability problems first (ACOS, Buy Box, suppressed listings, storage fees), then grow Amazon to 30-35% of revenue with a target of 10%+ contribution margin. If Amazon contribution margin stays negative after optimization, the CFO's instinct to pull back becomes correct — subsidizing Amazon sales at scale is not a growth strategy, it's a wealth transfer to Amazon
