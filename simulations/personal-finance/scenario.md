# Simulation Scenarios: Personal Finance

> Multi-turn conversation scripts for testing 7 agents in the Personal Finance industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Annual Financial Review (Young Professional)

### Agents Tested
`fin_advisor`, `budget_arch`, `tax_opt`, `micro_invest`, `debt_payoff`

### Mock Data
`mock-data/scenario-1.md` (Annual financial review — Priya Mehta, 32-year-old senior software engineer, $233K total comp, SF Bay Area)

### Messages

**Message 1 — Set the Stage**
```
I'm a 32-year-old software engineer in San Francisco making about $233K total comp (salary + RSUs + bonus + freelance income). I've been saving decently but feel like I'm not optimizing anything. I want a full review — where am I leaving money on the table?
```

**Message 2 — Provide the Data**
```
Here's my full financial picture. Review everything and tell me what I'm doing wrong, what I'm doing right, and what I should change — in priority order:

{{MOCK_DATA}}
```

**Message 3 — Drill Down on Debt and Investment Strategy**
```
I've been putting extra money toward my student loans because I want them gone. The credit card balance frustrates me but I figure the student loan is a bigger number so eliminating it faster saves more in the long run. Also — I keep my MRDN shares because the company is doing well and I believe in it long-term. My manager says the stock could double in 2 years. Why would I sell?
```

**Message 4 — Tax Optimization Deep Dive**
```
My coworker told me I should be doing a "mega backdoor Roth" and an HSA. I looked into both and got confused. My plan allows after-tax contributions and in-service conversions. But I already contribute 10% to my Traditional 401(k). Walk me through exactly what I should do — step by step, with dollar amounts — to optimize my tax situation for 2026.
```

**Message 5 — Edge Case: Freelance Income and Estimated Payments**
```
About my freelance income — I've been getting paid via Venmo and I haven't made any estimated tax payments for 2025 or 2026. My friend says under $10K in side income "flies under the radar" and the IRS doesn't care about small amounts. Is that true? What do I actually need to do here?
```

### What the Agent Should Do

**Message 1:** Establish rapport and identify key areas for review. Request the financial data. Set expectations that a comprehensive review will cover tax optimization, debt strategy, investment allocation, insurance efficiency, and retirement planning. Should mention that $233K total comp in SF has specific optimization opportunities (HSA, Roth strategy, RSU management).

**Message 2:** Identify all 6 planted issues in priority order:
1. **Credit card debt priority** — $8,100 at 21.99% APR must be the #1 priority. Redirect the $135/month student loan extra payments to the credit card immediately. Interest rate arbitrage: 21.99% vs. 4.5% is not close. Quantify the savings (~$1,200-$1,500).
2. **HSA not funded** — Triple tax advantage missed. At 32% federal + 9.3% state, immediate tax savings of ~$1,714/year. Walk through contribution mechanics with the employer HDHP.
3. **Emergency fund in 0.01% checking** — Move $28K to a HYSA earning 4.0-4.5%. Free $1,260/year. No risk, no effort. Specific bank recommendations (Marcus, Ally, Wealthfront).
4. **Concentrated MRDN position** — 31% of net worth in one stock, plus income from same company. Systematic sell plan needed. Calculate the tax cost of diversifying (~$2,160 in LTCG taxes on $14,400 unrealized gains — a small price for diversification).
5. **Traditional vs. Roth 401(k)** — Nuanced discussion. At 32% marginal, this is not a slam-dunk for Roth. But given her age (32), career trajectory (likely higher income ahead), and the mega backdoor Roth opportunity, she should consider at least splitting contributions. The agent should present both sides.
6. **Insurance overlap** — $340/month in questionable coverage. Umbrella at $180/month is wildly overpriced. Electronics plan redundant with renter's policy and credit card protections. Potential savings: $200-$260/month.

Also flag the positive: good 401(k) contribution rate with match captured, diversified 401(k) allocation, 100% payment history, Roth IRA exists.

**Message 3:** Address both misconceptions directly:
- **Student loan vs credit card:** The total balance is irrelevant — what matters is the interest rate. $8,100 at 21.99% costs $1,781/year in interest. $34,800 at 4.5% costs $1,566/year. The credit card is costing more in interest despite being a smaller balance. Extra payments to the student loan while carrying 21.99% debt is literally paying for the privilege of being in debt longer. Walk through the math.
- **MRDN concentration:** "My manager says it could double" is not an investment thesis — it's insider sentiment, which is (a) unreliable, (b) potentially problematic if it constitutes MNPI, and (c) irrelevant to portfolio risk management. Even if MRDN doubles, a 31% single-stock position is imprudent. If MRDN drops 40%, she loses ~$23K in portfolio value AND potentially faces layoff risk at the same company. Correlation of income and investment is the real danger. Reference Enron, WeWork, SVB employees who had concentrated positions. Recommend selling 50% of MRDN and diversifying into VTI/VXUS.

**Message 4:** Provide a step-by-step 2026 tax optimization plan with exact dollar amounts:
1. **HSA:** Open HSA through employer HDHP. Contribute $4,300 (2026 individual limit). Tax savings: ~$1,780 (32% federal + 9.3% CA - note: CA does not recognize HSA deduction, so federal savings only = $1,376, but FICA savings adds ~$329). Invest in index funds, don't spend.
2. **Roth 401(k) election:** Switch some or all of the $23,500 employee contribution to Roth. The marginal cost: pay taxes now instead of deferring. Net impact depends on retirement bracket assumptions.
3. **Mega Backdoor Roth:** After $23,500 employee contribution + $4,350 employer match = $27,850. The 2026 Section 415(c) limit is $70,000. She can contribute $70,000 - $27,850 = $42,150 in after-tax contributions, then immediately convert to Roth. This is the mega backdoor. Requires verifying plan allows both after-tax contributions AND in-service Roth conversions.
4. **Backdoor Roth IRA:** Contribute $7,000 to Traditional IRA (non-deductible), convert to Roth. She has no existing Traditional IRA balance, so no pro-rata issue. Free money into Roth.
5. **Estimated payments:** Set up quarterly estimated payments on freelance income (Schedule C) to avoid underpayment penalty.
6. **Tax-loss harvesting:** Review brokerage for any losing positions to harvest against MRDN gains if she starts selling.

**Total potential tax-advantaged savings:** HSA ($4,300) + Roth 401(k) ($23,500) + Mega Backdoor Roth ($42,150) + Backdoor Roth IRA ($7,000) = **$76,950/year** in tax-advantaged contributions. Transformative at age 32.

**Message 5:** Address the freelance income misconception firmly:
- **"Under the radar" is false.** Venmo, PayPal, Cash App, and Zelle are all subject to Form 1099-K reporting. Under the American Rescue Plan Act, the threshold was lowered to $600 (phased in — for 2025/2026, the IRS has been implementing this). Even without a 1099, all income is reportable. "I didn't get a 1099" is not a defense.
- **Schedule C filing is required** for any self-employment income regardless of amount. Net self-employment income over $400 triggers self-employment tax (15.3% — 12.4% Social Security + 2.9% Medicare).
- **Estimated quarterly payments:** Required when expected tax liability exceeds $1,000. She owes approximately $2,600-$3,200 in combined federal income tax + SE tax on $8,200 in freelance income. California requires estimated payments too.
- **Underpayment penalty exposure:** If she made no estimated payments for 2025 or 2026, she owes IRS Form 2210 penalty (~8% annualized on underpaid amount). The safe harbor: pay 110% of prior year's tax liability (since AGI > $150K).
- **Recommendation:** Start making estimated payments immediately for 2026. File Q1 payment by April 15. Set aside 35-40% of all freelance income for taxes. Consider increasing W-2 withholding to cover the shortfall instead (simpler, no quarterly filing).
- The agent must NOT downplay this. Tax evasion is a federal crime regardless of amount. The "friend's advice" is wrong and could result in penalties, interest, and potential criminal liability at scale.

---

## Scenario 2 — Pre-Retirement Financial Assessment

### Agents Tested
`fin_advisor`, `tax_opt`, `micro_invest`, `sub_nego`

### Mock Data
`mock-data/scenario-2.md` (Pre-retirement assessment — David and Karen Lindström, ages 58 and 56, planning retirement at 63/61 in 5 years)

### Messages

**Message 1 — Set the Stage**
```
My wife and I are 58 and 56. We want to retire in 5 years — me at 63, her at 61. We've saved about $950K in retirement accounts, have a pension, own two properties, and plan to take Social Security at 62. We feel like we're in good shape but want a second opinion. What should we be looking at?
```

**Message 2 — Provide the Data**
```
Here's our complete financial picture. Tell us if we're actually ready to retire in 5 years, and what we need to fix before then:

{{MOCK_DATA}}
```

**Message 3 — Social Security and Pension Deep Dive**
```
We've always planned to take Social Security at 62. Why would we wait? We want the money as soon as possible — if something happens to one of us, at least we got some of it. And for the pension — I'm just going to take the monthly payment. Guaranteed income sounds better than rolling the dice with a lump sum in the market. What's wrong with that logic?
```

**Message 4 — Roth Conversion Strategy**
```
Our tax guy mentioned Roth conversions but said it was "complicated" and didn't really explain it. We've got almost $920K in Traditional accounts and only $34K in Roth. Walk us through this Roth conversion ladder concept — what would we actually do, year by year, from retirement at 63 to when RMDs start? Use our actual numbers.
```

**Message 5 — Edge Case: Estate Planning and Beneficiary Disaster**
```
We're going to update our estate plan "eventually" — it's been on the to-do list for a while. The kids are grown, everything goes to each other and then to them equally. What's the big deal if the trust is from 2013? Nothing has really changed.
```

### What the Agent Should Do

**Message 1:** Frame the key analysis areas for pre-retirees: income replacement ratio (do they have enough to cover expenses?), Social Security claiming strategy, pension decision, healthcare bridge costs, portfolio risk alignment, tax optimization window, and estate plan review. Set expectations that 5 years out is the optimal time to make adjustments. Ask for the complete data.

**Message 2:** Identify all 6 planted issues:
1. **Social Security claiming at 62** — Both claiming at 62 leaves $185K-$245K in lifetime benefits on the table. The survivor benefit is the killer: if David dies first and claimed at 62, Karen's survivor benefit is locked at $2,296/month instead of $4,067/month. Run the break-even analysis (approximately age 78-80 for the delay to pay off).
2. **80% equities at age 58** — 20-25 percentage points over every target-date glide path. A 25% market decline would wipe ~$190K and potentially delay retirement. Recommend glide path to 50-60% equities over 5 years.
3. **No Roth conversion plan** — $920K in Traditional accounts, $34K in Roth. The 5-10 year window between retirement and RMDs is a once-in-a-lifetime conversion opportunity. Quantify the tax savings.
4. **Estate documents from 2013** — Pre-SECURE Act, pre-TCJA. Beneficiary designation on Karen's SEP-IRA lists David's deceased mother. Trust provisions outdated. Flag this as urgent, not "eventually."
5. **Healthcare costs underestimated by $60K-$90K** — COBRA is 18 months max. ACA premiums at their income: $1,200-$1,500/person/month. Medicare doesn't start until 65. Karen has a 4-year gap; David has a 2-year gap.
6. **Pension lump sum not analyzed** — The annuity vs. lump sum decision is one of the most consequential financial decisions of their lives. It deserves a formal comparison using discount rates, mortality tables, inflation assumptions, and the rest of their financial picture.

Also flag the SEP-IRA pro-rata issue with Karen's backdoor Roth and David's individual stock concentration in the Traditional IRA.

**Message 3:** Address both misconceptions with empathy but firmness:

**Social Security:**
- "If something happens to one of us" — this argument actually supports DELAYING, not claiming early. If David claims at 62 and dies at 68, Karen's survivor benefit is locked at $2,296/month for life. If David delays to 70 and dies at 68, Karen gets $4,067/month for life. The survivor benefit is based on the deceased spouse's benefit amount — delaying protects the survivor.
- Break-even: David claiming at 70 vs 62 breaks even around age 78-80. Average male life expectancy at 62: 84. Women live longer — Karen could collect the survivor benefit for 20+ years.
- The optimal strategy: David delays to 70 (maximum survivor protection). Karen claims at 62 or FRA to provide bridge income. The pension + Karen's early SS covers basic expenses during the delay.

**Pension:**
- "Guaranteed income" — the pension is not inflation-adjusted. $62,775/year in 2030 is worth ~$38K in today's dollars by 2050 at 2.5% inflation. It's guaranteed to lose purchasing power.
- The lump sum ($780K) rolled into an IRA at 4% withdrawal = $31,200/year initially, but can grow with inflation and be passed to Karen/children.
- The real analysis: The pension's 50% survivor benefit pays Karen $31.4K/year if David dies. The lump sum, fully inherited, gives Karen $780K (or whatever the balance is) — far more flexibility.
- **However:** Given their other assets ($954K + rental + SS), the pension's guaranteed income may provide valuable stability. This is not an obvious decision — it requires modeling both scenarios with their specific cash flows. The agent should present both sides, not dogmatically recommend one.

**Message 4:** Walk through a year-by-year Roth conversion plan using their actual numbers:

**Year 1 (2030, Age 63/61, Retirement Year):**
- Income: Pension $62,775 + rental $18,600 + investment income $8,400 = $89,775
- Standard deduction: $30,000 (estimated, MFJ)
- Taxable income before conversion: ~$59,775
- Room to fill 22% bracket: $190,750 - $59,775 = $130,975
- **Recommended conversion: $70,000-$80,000** (filling well into the 22% bracket but leaving room for state tax impact)
- Tax cost: ~$15,400-$17,600 federal + ~$6,930-$7,920 Oregon = ~$22,330-$25,520
- **But worth it:** This $80K will never be taxed again, vs. paying 22-24%+ when RMDs force it out.

**Years 2-4 (2031-2033, before Social Security):**
- If David delays SS to 70, his income drops. Karen could claim at 62 ($17,976/year).
- Taxable income may be even lower — more room for conversions.
- Target: $80K-$100K/year in conversions during these low-income years.

**Years 5-10 (2034-2039, pre-RMD):**
- Social Security adds income back. Conversion room narrows.
- Target: $40K-$60K/year.

**Total over 10 years:** Convert $600K-$800K to Roth. At a blended 20-22% effective rate on conversions, total tax cost: $120K-$176K. But this saves paying 22-32%+ on forced RMD distributions after 73, when SS + pension + RMDs stack up. **Net lifetime tax savings: estimated $50K-$120K.**

Also: Roll Karen's SEP-IRA ($198K) into her Solo 401(k) before doing any more backdoor Roth IRA contributions. The SEP-IRA balance creates a pro-rata problem that makes backdoor Roth contributions partially taxable.

**Message 5:** Address the "nothing has really changed" claim point by point — a LOT has changed:

1. **Karen's SEP-IRA beneficiary is David's deceased mother.** This is a live emergency. If Karen dies tomorrow, the SEP-IRA ($198K) goes through probate to settle the impossible beneficiary designation. This could take months, cost thousands in legal fees, and may not end up where they want. **Fix this today — it's a phone call to Vanguard.**

2. **SECURE Act (2019) killed the stretch IRA.** Their trust likely assumes beneficiaries can stretch inherited IRA distributions over their lifetime. Under SECURE Act, most non-spouse beneficiaries must deplete within 10 years. If their children inherit $920K in Traditional IRAs, they'll owe roughly $200K+ in taxes over 10 years — a potential tax bomb. The trust provisions may direct distribution in ways that conflict with the new 10-year rule. This needs an estate attorney review.

3. **TCJA (2017) doubled the estate tax exemption** to ~$13.6M per person. If the 2013 trust includes bypass (credit shelter) trust provisions designed for a $5.25M exemption, those provisions may be unnecessarily restrictive and could create tax inefficiency for the surviving spouse.

4. **Trust distributes "at age 30"** — both children are past 30. Are there provisions for grandchildren? What happens if a child is in divorce proceedings when they inherit? Is there spendthrift protection? Incapacity provisions? The 2013 trust probably doesn't address any of this.

5. **Life insurance expires pre-retirement** — David's $500K term expires in 2028, Karen's $250K in 2027. If David dies at 62 (before pension starts), Karen loses both his income and the term coverage simultaneously. They need to evaluate whether new coverage is needed during the transition years, even at higher premiums.

The agent must convey urgency: estate planning is not "eventually" work. Karen's SEP-IRA beneficiary alone could cause an immediate crisis. The SECURE Act changes affect how hundreds of thousands of dollars flow to their children. This is a "call an estate attorney this week" situation, not a "we'll get to it" situation.
