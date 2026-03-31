# Evaluation Criteria: Retail & Ops

## Overview

These criteria evaluate whether Retail & Ops agents demonstrate genuine operational and merchandising knowledge — the kind that separates a seasoned retail operator from someone with surface-level familiarity. A VP of Merchandising, inventory planning director, or experienced buyer should read the agent's output and think "this person has managed real inventory and real vendor relationships."

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate
- **Data-driven decision making** — Never recommend action without quantifying the financial impact. Every recommendation must include dollar amounts, margin implications, and the assumptions behind the math.
- **Retail math fluency** — Correct use of GMROI, sell-through rate, weeks of supply, stock-to-sales ratio, turn rate, contribution margin, and markdown optimization math. Getting the math wrong is an automatic credibility failure.
- **Omnichannel awareness** — Understand that inventory, pricing, and customer experience span physical stores and e-commerce. Siloed thinking is a red flag.
- **Vendor relationship sophistication** — Evaluate vendors on total cost of ownership (unit cost + freight + defect cost + return processing + stockout cost + markdown cost), not just invoice price.
- **Seasonal and demand cycle awareness** — Recommendations must account for seasonality, product lifecycle, fashion risk, and weather-dependent categories.
- **Industry-standard terminology** — Correct use of SKU, GMROI, OTB, sell-through, markdown, shrinkage, planogram, BOPIS, ASP, AUR, UPT, WOS, OTIF, and related terms.

### Must Never
- Recommend inventory decisions without analyzing weeks of supply and lead times together
- Ignore return rate patterns as a signal of product quality or marketing issues
- Accept vendor performance at face value without auditing OTIF, defect rates, and cost variances
- Recommend markdowns without analyzing prior markdown effectiveness (price elasticity)
- Make pricing decisions without understanding competitive positioning and margin floors
- Propose single-channel solutions in an omnichannel business
- Ignore contractual deadlines, auto-renewal clauses, or SLA notification windows

## Agent-Specific Criteria

### Inventory Optimizer (`inventory`)
- Calculates weeks of supply against lead time to identify imminent stockouts
- Flags items where WOS < lead time as urgent reorder candidates
- Identifies overstock positions and recommends liquidation strategies
- Analyzes demand forecast accuracy and flags methodology weaknesses
- Recommends safety stock adjustments based on demand variability and lead time variability
- Understands channel allocation and identifies cross-channel rebalancing opportunities

### Pricing Strategist (`pricing_strat`)
- Analyzes markdown effectiveness using unit lift data, not just revenue
- Identifies dead stock (zero price elasticity) and recommends accelerated clearance
- Understands competitive pricing dynamics and MAP policy implications
- Calculates breakeven points and margin impact of pricing decisions
- Differentiates between promotional pricing (temporary) and permanent markdown strategies

### Supply Chain Agent (`supply_chain`)
- Evaluates vendors on total cost of ownership, not just unit price
- Flags declining OTIF trends and recommends corrective action
- Identifies single-source risk and recommends dual-sourcing strategies
- Understands lead time variability and its impact on safety stock requirements
- Catches inventory allocation inefficiencies between channels

### Returns Agent (`returns_agent`)
- Identifies return rate outliers by brand, category, and product line
- Distinguishes between sizing/preference returns and quality/defect returns
- Calculates the full cost of returns (processing + shipping + lost margin + restocking)
- Flags patterns where high returns are not triggering buying adjustments
- Recommends root cause investigation for quality-driven return spikes

### Vendor Negotiator (`vendor_nego`)
- Catches contract compliance issues (missed tier thresholds, unclaimed rebates)
- Identifies approaching contractual deadlines (auto-renewal, SLA notification windows)
- Evaluates competitive quotes on an apples-to-apples basis (spec matching)
- Uses market data (raw material costs, commodity pricing) as negotiation leverage
- Identifies missing contractual protections (force majeure, IP assignment, supply contingency)
- Calculates total cost of vendor underperformance vs. unit price savings

### Store Operations Manager (`store_ops`)
- Analyzes store-level performance metrics (conversion, UPT, AUR, labor productivity)
- Identifies operational inefficiencies in fulfillment, receiving, and inventory management
- Recommends ship-from-store or cross-channel fulfillment capabilities where applicable
- Understands store-level P&L and controllable vs. uncontrollable expenses

## Planted Issues Reference

### Scenario 1: Quarterly Inventory & Demand Review

| # | Issue | What Catching It Looks Like | Severity |
|---|-------|---------------------------|----------|
| 1 | Top SKUs (Alpine Down Parka) have 3 WOS but 6-week lead time — stockout imminent, no reorder on order | Flags as emergency reorder, calculates lost revenue risk ($96K prior Q4 loss), recommends air freight consideration | Critical |
| 2 | Q4 demand forecast 40% off — used historical average without weather adjustment in weather-dependent category | Identifies methodology gap, recommends incorporating weather forecast data into seasonal demand models, quantifies overstock/markdown cost | High |
| 3 | Worst-performing vendor (TNF, 52% OTIF) has lowest cost — no renegotiation, no alternatives explored, auto-renewal approaching | Calculates total cost of poor performance (stockouts + returns + markdowns) vs. 2% cost advantage, flags April 1 auto-renewal deadline | Critical |
| 4 | TNF brand 28% return rate (5.5% industry avg) due to quality defects — buying continues unchanged | Identifies quality-driven returns vs. preference returns, calculates full return cost, flags that buyer's reliance on verbal assurance is insufficient | High |
| 5 | Powder Bowl Jackets marked down 3x with zero unit lift — should have been clearanced faster | Identifies zero price elasticity (dead stock), recommends immediate deep clearance or liquidation, calculates total margin destruction | Medium |
| 6 | E-commerce/store inventory allocated as fixed pools — artificial stockouts in both channels | Identifies channel allocation inefficiency, calculates lost sales from artificial stockouts ($153K), recommends unified inventory or ship-from-store | High |

### Scenario 2: Vendor Contract Renegotiation

| # | Issue | What Catching It Looks Like | Severity |
|---|-------|---------------------------|----------|
| 1 | Volume exceeded Tier 4 threshold for 18 months — $273K overpayment | Identifies as contract compliance issue (not negotiation), calculates exact overpayment, demands retroactive rebate as opening move | Critical |
| 2 | Auto-renewal deadline ~March 31 — imminent, locks in current unfavorable terms | Flags as highest-urgency action, recommends immediate written notice to preserve negotiation leverage | Critical |
| 3 | Quality SLA breach notification windows expired — $23K in penalties likely uncollectable | Identifies process failure, recommends automated SLA monitoring, uses quality data as renegotiation leverage despite missed windows | High |
| 4 | Competitive quotes are different specs (600-fill duck, 550-fill poly vs. 650-fill goose) — not apples-to-apples | Identifies spec mismatches, notes only SummitCraft is a true comparable, flags that presenting mismatched quotes damages credibility | High |
| 5 | Raw material costs dropped ~12% but vendor pricing unchanged — no pass-through clause | Uses market data as negotiation leverage, recommends 5-8% price reduction and adding raw material index clause | Medium |
| 6 | No force majeure, no supply disruption contingency, no IP assignment — single-source risk | Identifies critical missing contractual protections, especially IP ownership of 8 proprietary styles and single-source dependency | High |

## Red Flags (Automatic Score Reduction)

The following behaviors reduce the score to 4/10 or below:
1. Recommending inventory reorders without checking lead time against current WOS
2. Accepting vendor cost savings claims without analyzing total cost of ownership
3. Failing to catch an imminent contractual deadline (auto-renewal, SLA notification window)
4. Treating competitive quotes as comparable when specs don't match
5. Ignoring a 28% return rate as normal or acceptable
6. Recommending continued markdowns on a product showing zero price elasticity

## Safety Boundaries

- **Always recommend human review** for vendor contract execution, legal claims, and financial commitments above $50K
- **Never advise** on product safety recalls, consumer injury claims, or regulatory compliance decisions
- **Flag uncertainty** when data is insufficient to make a confident recommendation
- **Refuse to assist** with anti-competitive practices (price fixing, market allocation, bid rigging)
- **Recommend legal counsel** for any IP, contract dispute, or trade compliance questions

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | Catches all planted issues, quantifies impact, provides actionable recommendations with timeline, demonstrates deep retail operations expertise |
| 7-8 | Catches most planted issues (4+), provides solid analysis with some quantification, demonstrates strong working knowledge |
| 5-6 | Catches some issues (2-3), analysis is directionally correct but lacks specificity or quantification |
| 3-4 | Misses critical issues, provides generic advice, demonstrates surface-level retail knowledge |
| 1-2 | Misses most issues, gives incorrect recommendations, demonstrates no real retail expertise |

**Pass Thresholds:**
- Tier 2: Minimum 7.0/10
- Tier 3: Minimum 8.0/10
