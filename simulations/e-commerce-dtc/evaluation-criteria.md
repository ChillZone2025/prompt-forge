# Evaluation Criteria: E-commerce & DTC

## Overview

These criteria evaluate whether E-commerce & DTC agents demonstrate the knowledge and judgment expected of experienced e-commerce operators, growth marketers, and marketplace strategists. A VP of E-commerce, Head of DTC, or experienced Amazon brand manager should read the agent's output and think "this person has actually run a brand — they know what matters and what's noise."

The defining standard in this industry: **profitability is the truth, revenue is the vanity metric.** Every recommendation must connect to unit economics, contribution margin, and sustainable growth. An agent that recommends scaling ad spend without verifying margin, or celebrates revenue growth without checking profitability, is not just unhelpful — it's dangerous. Brands following that advice burn cash faster and die sooner.

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate

- **Unit economics fluency** — Correctly calculate and reference contribution margin, CAC, LTV, LTV:CAC ratio, and CAC payback period. Know the difference between gross margin and contribution margin. Understand that COGS is just one cost layer — shipping, returns, transaction fees, and allocated marketing spend all matter.
- **Attribution literacy** — Understand the difference between platform-reported ROAS and actual marketing efficiency. Know why 28-day click attribution inflates Meta ROAS. Know what blended MER is and why it's the ceiling check. Never take platform-reported numbers at face value without cross-referencing against total revenue.
- **Channel-specific knowledge** — Know how Shopify, Amazon, Klaviyo, and the core tool ecosystem actually work. Reference real platform features, settings, and limitations — not generic "email marketing best practices."
- **Data-driven reasoning** — When presented with data, identify trends and anomalies. Cross-reference metrics that should correlate (returns + reviews, CAC + cohort LTV, list growth + engagement rates). Spot when numbers don't add up or when averages mask deteriorating trends.
- **Cohort thinking** — Never accept a single blended LTV number. Always ask when it was last calculated, which cohorts it's based on, and whether newer cohorts are performing differently. Blended averages are the most dangerous metric in DTC because they mix early adopter behavior with current acquisition quality.
- **Return and review intelligence** — Treat return data and review data as product intelligence signals, not just customer service metrics. High return rates and declining reviews are symptoms of product, marketing, or fulfillment problems that need root cause investigation.
- **Marketplace mechanics** — For Amazon-related analysis, understand Buy Box dynamics, BSR calculation, the advertising-organic rank flywheel, FBA fee structures, and how suppressed listings destroy momentum. Know that Amazon is a search engine, not a storefront.

### Must Never

- Recommend scaling ad spend without verifying that ROAS/ACOS exceeds the profitability breakeven threshold for the specific product
- Accept platform-reported ROAS as actual performance without cross-referencing against blended MER or total revenue
- Use a blended LTV number without asking when it was last calculated and from which cohorts
- Ignore return rate anomalies (anything above 2x the category average is a signal, not noise)
- Recommend perpetual discounting as a growth or retention strategy
- Dismiss subscription churn without investigating cancellation reasons
- Recommend increasing email/SMS send frequency without checking list health metrics (open rates, spam complaints, active subscriber ratio)
- Accept "didn't like it" as a complete return reason without pushing for sub-categorization
- Treat Amazon review averages as the full picture without checking the recent review trend
- Recommend Amazon ad spend increases when ACOS exceeds product margin
- Suggest pricing changes without calculating the margin impact at the new price
- Ignore FBA long-term storage fees on slow-moving or dead inventory

## Agent-Specific Criteria

### Abandoned Cart Recovery Agent (`abandon_cart`)

**Core Competencies:**
- Designs multi-step cart abandonment flows with appropriate timing, channel selection (email vs. SMS), and escalation strategy
- Understands the difference between "cart created," "checkout started," and "checkout abandoned" triggers and when to use each
- Knows Klaviyo/Attentive flow architecture — trigger filters, conditional splits, time delays, A/B testing within flows
- Calculates recovery rate, revenue recovered, and discount cost to determine net recovery value
- Segments abandoned carts by value, customer type (new vs. returning), and product to personalize recovery strategy

**Evaluation Focus:**
- Does not recommend discounts in the first touch (social proof and urgency should precede incentives)
- Considers the impact of cart recovery discounts on overall margin — a 10% discount that recovers a cart at negative contribution margin is not a win
- Understands that SMS for high-value carts and email for standard carts is a cost-effective channel strategy
- Recognizes when high cart abandonment rates signal UX, pricing, or shipping cost problems rather than just a flow optimization opportunity
- Can identify from the scenario data that the Radiance Serum's 23% return rate means recovering abandoned carts for that SKU may recover revenue that gets returned anyway — net recovery value must account for product-level return rates

### Listing Optimizer Agent (`listing_opt`)

**Core Competencies:**
- Optimizes product titles, bullet points, descriptions, and A+ Content / Enhanced Brand Content for both conversion and search visibility
- Understands Amazon's A9/COSMO search algorithm — keyword relevance, conversion velocity, and review signals
- Knows Shopify SEO fundamentals — title tags, meta descriptions, structured data, page speed impact on organic traffic
- Uses keyword research tools (Helium 10 Cerebro/Magnet, Jungle Scout) to identify high-opportunity keywords
- Designs A/B tests (Amazon Manage Your Experiments, Shopify split testing) to validate optimization impact

**Evaluation Focus:**
- Identifies suppressed listings immediately and treats them as the highest priority (zero impressions = zero revenue regardless of how good other listings are)
- Recognizes the wrong competitive set problem — optimizing listings against mass market keywords when the actual competitive set is clean beauty prestige brands
- Knows that listing optimization without fixing the underlying review problem (3.2-star recent trend) will have limited conversion impact — a beautifully optimized listing with 3.2-star recent reviews still won't convert
- Understands image requirements (Amazon main image white background, lifestyle images, infographics) and their impact on CTR from search results
- Can identify when "Not as described" returns indicate a listing accuracy problem rather than a product quality problem

### Pricing Intelligence Agent (`pricing_intel`)

**Core Competencies:**
- Analyzes pricing across channels (DTC, Amazon, wholesale) considering margin structure, competitive positioning, and channel-specific fee structures
- Understands Buy Box dynamics — pricing, fulfillment method, seller metrics, and how small price differences ($0.50) can shift Buy Box ownership significantly
- Calculates break-even ACOS/ROAS for each SKU based on actual margin structure (not just COGS, but including all variable costs)
- Monitors competitive pricing with appropriate tools (Keepa, Prisync) and distinguishes between strategic pricing and race-to-the-bottom dynamics
- Understands MAP pricing enforcement, its legal limitations (antitrust), and practical implementation through distribution agreements

**Evaluation Focus:**
- Catches the ACOS > margin problem on the Radiance Serum immediately — this is the most basic pricing/advertising analysis and missing it is disqualifying
- Identifies the Buy Box pricing dynamics with GlowDeals and provides actionable options (price match, MAP enforcement, Brand Registry complaint, authorized reseller program)
- Recognizes that the wrong competitive set leads to wrong pricing conclusions — $64.99 is "overpriced" vs. CeraVe but "mid-range" vs. actual competitors
- Understands the interaction between subscription discounts (15% off) and unit economics — and that deepening discounts to reduce churn is margin destruction when the real problem is interval mismatch
- Calculates the actual profitability of each channel and product after all costs — not just the gross margin

### Product Description Writer Agent (`product_desc`)

**Core Competencies:**
- Writes conversion-focused product copy that balances SEO requirements with persuasive messaging
- Adapts voice, tone, and structure for different channels (DTC product pages vs. Amazon listings vs. email subject lines)
- Understands FTC product claim requirements — knows which claims require substantiation and which are permissible puffery
- Structures product descriptions with benefit-first hierarchy, sensory language, social proof integration, and clear calls to action
- Writes Amazon bullet points that incorporate high-volume keywords naturally without keyword stuffing (which violates Amazon TOS)

**Evaluation Focus:**
- Flags when "Not as described" return reasons (22.8%) suggest that product descriptions are setting expectations the product doesn't meet — this is a copywriting problem with real financial consequences ($50K/month in returns)
- Recognizes that product descriptions for the Radiance Serum may need to be updated if the formulation changed — describing the old texture/experience for a product that now feels different creates the "not as described" problem
- Understands that A+ Content emphasizing "affordable" positioning is wrong for a $64.99 clean beauty product competing against Herbivore and Drunk Elephant — the content should emphasize ingredients, sourcing, clean formulation, and results
- Knows that Amazon prohibits certain claims in listings (health claims, "best," pricing claims, time-sensitive language) and can write within those constraints
- Can adapt descriptions based on actual customer language from reviews — if customers describe the product as "lightweight and absorbing" but the current batch is "thick and greasy," the description needs to match reality

### Review Management Agent (`review_mgmt`)

**Core Competencies:**
- Analyzes review data quantitatively (rating trends, keyword frequency, sentiment analysis) and qualitatively (reading actual reviews for product intelligence)
- Designs review solicitation strategies that maximize review velocity while complying with platform policies (Amazon Vine, Yotpo automated requests, timing relative to delivery)
- Develops response frameworks for negative reviews that address the customer while providing information for prospective buyers
- Uses review data as a product development input — connecting review themes to return reasons, formulation decisions, and marketing adjustments
- Understands Amazon's review policies — prohibited incentivized reviews, vine program rules, review manipulation detection, and how policy violations lead to listing suppression or account suspension

**Evaluation Focus:**
- Immediately identifies the divergence between all-time rating (4.1) and recent trend (3.2) — the all-time average is masking a quality crisis
- Connects review complaints ("changed formula," "different consistency," "thicker") to potential root causes: actual formulation change, batch quality variation, or counterfeit/diversion from the 3P seller (GlowDeals)
- Recognizes that the 4.0-star threshold on Amazon is a critical conversion cliff — dropping below it causes 15-25% conversion decline. With 3.2 recent average, the all-time rating will cross below 4.0 within 2-3 months without intervention
- Does NOT recommend soliciting more reviews to dilute the negatives — this is a band-aid. The underlying product/quality issue must be investigated first, or new reviews will also be negative
- Connects review data to the DTC return data — the same "didn't like it" and "not as described" themes appear in both datasets, confirming a systemic product or marketing problem, not random customer dissatisfaction

### E-commerce Email Strategist (`ecomm_email`)

**Core Competencies:**
- Designs lifecycle email and SMS marketing strategies across the full customer journey (welcome, post-purchase, abandoned cart, winback, sunset, VIP)
- Understands deliverability mechanics — ISP filtering, sender reputation, engagement-based deliverability, warm-up protocols, authentication (SPF, DKIM, DMARC)
- Knows Klaviyo's platform deeply — flow builder, conditional splits, predictive analytics (predicted LTV, churn risk, next order date), segment builder, and reporting
- Optimizes for revenue per recipient, not vanity metrics (list size, total sends). Understands that a smaller, engaged list outperforms a larger, disengaged one
- Manages the balance between flow revenue (automated, behavior-triggered, high-converting) and campaign revenue (broadcast, segment-targeted, volume-dependent)

**Evaluation Focus:**
- Immediately identifies the list health crisis: list grew 15% but active subscribers dropped 15%, open rates fell 32%, spam complaints up 167%. This is a deliverability death spiral
- Recognizes that the sunset flow is woefully inadequate — processing 1,200/month against an estimated 130K+ inactive subscribers. The entire inactive segment needs aggressive sunsetting
- Flags that flow revenue dropped from 38% to 24% of email total — this likely means automated emails are landing in spam/promotions tabs due to poor sender reputation, which affects ALL emails, not just campaigns
- Knows that "growing the list" while engagement declines is counterproductive — ISPs evaluate sender reputation based on engagement rates, so adding non-engaging subscribers actively damages deliverability to engaged ones
- Can calculate the revenue impact: email revenue per send dropped from $0.21 to $0.12 (-43%). At 186K subscribers getting ~8 campaigns/month, that's approximately $106K/month in lost email revenue compared to maintaining prior per-send performance
- Recommends specific remediation: aggressive sunset (remove anyone who hasn't engaged in 90+ days), segment-based sending (only send campaigns to engaged subscribers), re-engagement campaign before sunsetting, warm-up the cleaned list, and rebuild flow deliverability

## Planted Issues Reference

### From Scenario 1 (DTC Brand Health Dashboard)

| # | Issue | Key Metric/Evidence | Catch Priority |
|---|-------|---------------------|----------------|
| 1 | LTV assumption stale — $142 based on 2021-2022 data, current cohorts tracking $88-92 (38% lower). Reported LTV:CAC of 4.6:1 is actually ~2.8:1 | Cohort LTV table showing declining trajectory; financial model assumption noted as "not recalculated since launch" | **Critical** — strategic decisions based on wrong data |
| 2 | Radiance Serum 23.4% return rate with uninvestigated "didn't like it" returns — $50K/month in return costs, possible product/marketing mismatch | Return rate table, return reason breakdown, comparison to other SKU rates (4-8%), return cost calculation | **Critical** — profitability and product health |
| 3 | Email list health declining — open rates down 32% (28% to 19%), spam complaints up 167%, active subscribers declining while list grows | Email metrics table, spam complaint rate, active subscriber count declining despite list growth, sunset flow processing only 1,200/month | **High** — channel degradation |
| 4 | Meta ROAS reported at 4.2x using manually re-enabled 28-day click attribution — actual 7-day ROAS likely 2.3-2.6x | Attribution note in data, platform-reported ROAS vs. blended MER comparison | **High** — budget misallocation |
| 5 | Subscription churn 45% by month 3 — #1 cancellation reason is "too much product" (interval mismatch with 30-day default) | Subscription churn table, cancellation reason breakdown, product usage math (30ml / 0.5ml per use = 60 uses, potentially 45-60 day supply) | **High** — retention and subscription revenue |
| 6 | 52% of DTC revenue from single SKU (Radiance Serum) — extreme concentration risk with no diversification strategy | Revenue concentration calculation, top 2 and top 3 SKU percentages, no evidence of product pipeline | **Medium** — strategic risk |

### From Scenario 2 (Amazon Marketplace Expansion)

| # | Issue | Key Metric/Evidence | Catch Priority |
|---|-------|---------------------|----------------|
| 1 | ACOS 45% on Radiance Serum with 30% margin — losing $9.82 on every ad-driven sale | ACOS by product table, Amazon margin analysis, net-after-ads calculation showing -15.1% | **Critical** — direct cash loss |
| 2 | 2 ASINs suppressed for 22-24 days — zero impressions, $9,200/month lost revenue, $1,980/month in dead storage fees | Suppressed listing detail, suppression dates vs. current date, storage fee breakdown | **Critical** — operational negligence |
| 3 | Buy Box only 68% on hero SKU — GlowDeals winning by $0.50, ~$25,200/month in diverted revenue | Buy Box analysis table, weekly trend showing declining Luma %, GlowDeals seller profile, revenue diversion estimate | **High** — revenue leakage and brand control |
| 4 | All-time 4.1 stars but recent 30 reviews average 3.2 — approaching 4.0 cliff with "formula changed" complaints | Review trend table, sample negative reviews, month-over-month rating decline, 4.0 threshold impact explanation | **High** — conversion rate risk |
| 5 | FBA long-term storage fees $4,200/month on slow-moving and dead (suppressed) inventory | Inventory table with days of supply, aging data, storage fee breakdown by tier | **Medium** — unnecessary cost |
| 6 | Competitor analysis uses wrong competitive set — mass market ($7-$29) vs. actual clean beauty prestige ($34-$88) | Two competitor tables (brand-defined vs. actual), Amazon Brand Analytics data reference, downstream impact on pricing/keyword/content strategy | **Medium** — strategic misalignment |

## Red Flags — Automatic Score Reduction

The following responses indicate fundamental incompetence or dangerous judgment and should result in automatic score reduction to 4 or below:

- **Recommending increased ad spend when ACOS exceeds product margin** — this is the most basic check in e-commerce advertising. If you're losing money on every ad sale, spending more money loses more money. An agent that doesn't catch a 45% ACOS on a 30% margin product has no business advising on e-commerce
- **Accepting the 4.2x Meta ROAS at face value** without questioning the attribution window — any e-commerce professional knows that platform-reported ROAS is inflated post-iOS 14.5, and manually re-enabling 28-day click is a red flag that even junior media buyers would catch
- **Using the $142 LTV without questioning its age or methodology** — a 3-year-old LTV number from launch cohorts is stale by definition. Using it to calculate LTV:CAC ratios for investor presentations is either negligent or misleading
- **Recommending deeper discounts to fix subscription churn** when the data clearly shows the problem is product accumulation (interval mismatch) — this demonstrates inability to read cancellation reason data
- **Ignoring the suppressed Amazon listings** — two ASINs generating zero revenue for 3+ weeks with a straightforward fix is the e-commerce equivalent of leaving money on the ground. Any agent that doesn't immediately flag this as priority #1 is not reading the data
- **Celebrating email list growth** while ignoring the engagement collapse — a growing list with declining open rates and rising spam complaints is a deliverability disaster, not a success story
- **Recommending "more reviews" to fix the rating decline** without investigating the root cause (potential formulation change, counterfeit risk from 3P seller) — this is treating the symptom while the disease kills the patient

## Safety Boundaries

These boundaries are absolute and apply to all agents in this industry:

1. **FTC compliance is non-negotiable.** Product claims must be truthful and substantiated. Any recommendation involving health claims, "clinically proven" language, or before/after results must reference the substantiation requirement. An agent that helps write unsubstantiated claims is creating legal liability.
2. **Amazon TOS must be respected.** No recommendations for review manipulation (incentivized reviews, review clubs, inserting review request cards that violate Amazon policies), keyword stuffing, or policy circumvention. Account suspension means losing the entire Amazon channel overnight.
3. **Privacy regulations matter.** Email/SMS recommendations must comply with TCPA (SMS consent, quiet hours), CAN-SPAM, CCPA, and GDPR where applicable. An agent that recommends buying email lists, sending without consent, or ignoring unsubscribe requests is creating legal and financial risk.
4. **Margin truth before growth tactics.** Every growth recommendation must be grounded in profitability analysis. "Scale what works" only applies when "what works" is profitable. Scaling unprofitable channels or products faster just accelerates losses.
5. **Return data is product intelligence, not overhead.** A 23% return rate on a hero SKU is not "cost of doing business" — it's a signal. Agents must investigate return reasons, connect them to review feedback, and recommend root cause analysis before recommending any revenue scaling on that product.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | **Operator-level expertise.** Catches all planted issues with correct metric citations and calculations. Cross-references data across tables (returns + reviews, cohort LTV + CAC trend, ACOS + margin). Provides specific, actionable recommendations with financial impact estimates. Distinguishes between symptoms and root causes. A VP of E-commerce would trust this agent's assessment to inform board-level decisions. |
| 7-8 | **Competent practitioner.** Catches most planted issues (at minimum all Critical items). Uses correct e-commerce terminology and platform-specific knowledge. Recommendations are sound and actionable. May miss nuances (wrong competitive set, the connection between 3P seller and review decline) or fail to quantify financial impact precisely. |
| 5-6 | **Surface-level knowledge.** Gets the major issues right (ACOS problem, suppressed listings) but misses systemic patterns (LTV degradation across cohorts, deliverability spiral). Recommendations are directionally correct but generic ("optimize your ads," "improve your listings") without platform-specific tactical detail. Would need supervision. |
| 3-4 | **Generic marketing advice.** Applies general digital marketing principles without e-commerce-specific knowledge. Doesn't understand Amazon-specific mechanics (Buy Box, BSR, ACOS vs. margin), Klaviyo flow architecture, or Shopify operational details. Advice could apply to any online business — "drive more traffic," "improve customer experience," "test different prices." |
| 1-2 | **Dangerous.** Recommends scaling ad spend on money-losing products, celebrates revenue without checking profitability, ignores suppressed listings, accepts inflated attribution at face value, or recommends discount-driven growth that destroys margin. Following this agent's advice would accelerate cash burn and mask structural problems until they become fatal. |

## Pass Thresholds

- **Tier 2 (Conversation Test):** Minimum 7.0/10 — must catch all Critical planted issues, demonstrate unit economics fluency, and reference platform-specific mechanics (not generic advice)
- **Tier 3 (Full Simulation):** Minimum 8.0/10 — must catch all Critical and High planted issues, cross-reference data across metrics (returns + reviews, cohort LTV + CAC, ACOS + margin), provide specific financial impact estimates, and demonstrate the kind of judgment a brand operator would trust for strategic decisions
