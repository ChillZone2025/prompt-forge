# Simulation Scenarios: Media & Publishing

> Multi-turn conversation scripts for testing agents in the Media & Publishing industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Digital Publication Performance Review

### Agents Tested
`audience_dev`, `content_cal`, `editorial_agent`

### Mock Data
`mock-data/scenario-1.md` (The Meridian Report — digital publication performance data)

### Messages

**Message 1 — Set the Stage**
```
We're a digital news and analysis publication with about 200K monthly visitors and 8,500 paid subscribers. Traffic is up almost 30% quarter-over-quarter but something feels off — subscriber growth isn't keeping pace and our ad revenue is actually down. Can you help me diagnose what's happening?
```

**Expected Response Elements:**
- Framework for diagnosing the disconnect between traffic growth and subscriber/revenue stagnation
- Ask for specific data: traffic sources, content mix, subscriber funnel metrics, ad revenue breakdown
- Identify that traffic growth without corresponding subscriber growth usually indicates an audience quality problem — the new visitors aren't the same profile as the existing subscriber base
- Mention the need to examine content performance by type (original vs. aggregated), traffic source quality (social vs. organic vs. direct), and subscriber conversion funnel stage-by-stage
- Should not jump to solutions before seeing the data

**Message 2 — Provide the Data**
```
Here's our full performance package for Q4 2025. Take a look and tell me what you see:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- **Issue 1 (audience quality):** Traffic up 29.5% but visitor-to-subscriber conversion rate dropped from 2.1% to 0.56%. Social media traffic (especially X/Twitter and Reddit) surged 68% but drives near-zero conversions. Average session duration dropped 18%. The publication is attracting a fundamentally different audience — high-bounce, low-intent visitors drawn by viral aggregated content.
- **Issue 2 (content mix):** Top 5 articles are ALL aggregated content (listicles, roundups, news aggregation). Not a single piece of original reporting in the top performers by pageviews. But original analysis drives 95% of subscriber conversions despite being only 38% of content output. The content strategy is optimized for the wrong metric.
- **Issue 3 (email CTR):** Open rate is 52% (excellent) but CTR dropped 35% to 3.1%. The newsletter is sending 45% of its links to EXTERNAL sources — readers open the email, click, and end up at Bloomberg or Reuters instead of Meridian content. The newsletter is functioning as a traffic driver for competitors.
- **Issue 4 (churn):** Monthly churn rate spiked to 8% (annualized ~64%). Exit surveys show "not reading enough" (38%) and "content quality declined" (22%). 45% of subscribers have never logged in after signup — massive activation failure with no onboarding sequence.
- **Issue 5 (activation):** 3,843 subscribers (45%) have never logged in after initial signup. No onboarding email sequence exists. No activation campaign. These subscribers are paying but receiving zero value — they will churn as soon as they notice the charge.
- **Issue 6 (ad revenue):** Programmatic CPM declining 15% QoQ. Direct-sold advertisers are shifting to programmatic because Meridian's audience quality is deteriorating. CloudBase's feedback explicitly cites audience quality decline. No first-party data strategy to differentiate from programmatic alternatives.
- Should prioritize issues by impact and recommend a structured approach to addressing them

**Message 3 — Challenge the Expert**
```
My marketing manager says we should double down on the viral content because it's driving traffic growth, and we can "convert that traffic later." She wants to hire two more freelance writers for aggregated content. Is that the right move?
```

**Expected Response Elements:**
- This is the wrong move and the data proves it definitively
- The aggregated content is producing a conversion rate of 0.22-0.25 subscriber conversions per article. Original analysis produces 6-10 conversions per article — roughly 30-40x more effective at driving subscriptions
- "Convert that traffic later" assumes these visitors can be moved down a funnel, but the data shows they bounce in under 60 seconds with sub-2 pages per session. They are not prospects — they are passersby
- Doubling down on viral content will accelerate the negative feedback loop: more low-quality traffic -> lower engagement metrics -> lower ad CPMs -> lower direct-sold advertiser interest -> declining revenue
- The correct investment is more original analysis content, which is the publication's competitive advantage and the content type that actually converts readers to subscribers
- Use the content performance data to make the case: investing $X in two more analysts (not aggregation freelancers) would likely produce Y additional conversions based on the demonstrated conversion rates
- Acknowledge the marketing manager's instinct is common — traffic growth feels like progress — but distinguish between vanity metrics and business metrics

**Message 4 — Operational Deep Dive**
```
OK, I'm convinced on the content strategy shift. But we have 3,843 subscribers who've never logged in and our churn is 8% monthly. What's the playbook to stop the bleeding?
```

**Expected Response Elements:**
- Triage the crisis into two immediate workstreams: activation (the 3,843 dormant subscribers) and retention (the 8% monthly churn)
- **Activation playbook:** (1) Deploy a 5-email onboarding sequence immediately — welcome, setup instructions, best-of content roundup, feature tutorial, personal note from editor. (2) Segment the dormant cohort by signup date — recent signups are recoverable, those dormant 6+ months are likely lost. (3) Personalize the re-engagement by content category preference (if available from paywall hit data). (4) Set up automated "we noticed you haven't visited" trigger emails at 7, 14, and 30 days post-signup.
- **Retention playbook:** (1) Implement a cancellation save flow — when a subscriber clicks cancel, offer a pause (1-3 months), a reduced rate ($6/month for 3 months), or a switch to annual plan with discount. (2) Add engagement monitoring — flag subscribers whose visit frequency drops below 2x/month as churn risks and trigger a re-engagement campaign. (3) Launch a subscriber-exclusive benefit beyond content: early access, editor Q&A, comment community, annual subscriber event. (4) Fix the weekly deep-dive newsletter — subscriber-only open rates dropping to 58% suggests the premium content isn't compelling enough.
- Reference the exit survey data: 38% say "not reading enough to justify cost" — this is the activation problem manifesting as churn. 14% say "didn't realize I was still subscribed" — these are the dormant subscribers.
- Set measurable targets: reduce monthly churn from 8% to 4% within 90 days, activate at least 30% of dormant subscribers within 60 days
- Calculate the revenue impact: reducing churn by 4 points saves approximately 340 subscribers/quarter at $10/month = $40,800 annualized

**Message 5 — Edge Case: Newsletter Strategy**
```
One more thing — our newsletter has a 52% open rate, which seems great. But our marketing manager wants to add more external links because "that's what readers want to see" based on the click data. She says it will drive more opens and shares. What do you think?
```

**Expected Response Elements:**
- The 52% open rate is genuinely excellent — top quartile for media newsletters. But open rate is a vanity metric if it doesn't drive business outcomes
- The click data is misleading. External links get a 4.8% CTR vs. 2.2% for Meridian aggregated articles and 6.4% for Meridian original analysis. The marketing manager is looking at the wrong comparison — external links perform better than Meridian aggregated content (because the aggregated content isn't as good as the original sources) but WORSE than Meridian original analysis
- Adding more external links would turn the newsletter into a competitor traffic driver. Every click to Bloomberg or Reuters is a reader who could have read a Meridian article, hit the paywall, and converted
- The correct strategy: (1) Replace external news links with Meridian original analysis links — these already get the highest CTR (6.4%). (2) Add more original "newsletter-only" commentary and analysis that drives engagement without requiring a click. (3) Use the newsletter as a subscriber conversion tool — give free readers a taste of premium analysis with a CTA to subscribe for the full article. (4) A/B test newsletter formats: headline roundup vs. single-topic deep analysis
- The newsletter should be measured by downstream conversions (newsletter reader -> subscriber), not by open rate or even CTR in isolation
- Flag that the 45% external link share in the current newsletter is actively undermining the subscription business model — readers get their "daily briefing" need met by the newsletter + external clicks without ever needing to visit Meridian directly

---

## Scenario 2 — Book Rights & Licensing Portfolio

### Agents Tested
`rights_mgmt`, `copy_editor`

### Mock Data
`mock-data/scenario-2.md` (Hearthstone Press — rights and licensing portfolio)

### Messages

**Message 1 — Set the Stage**
```
I'm the publisher at a mid-size independent press with about 120 active titles. We recently hired a new rights associate who's been doing an audit, and she's finding some concerning things. Can you help me assess our rights portfolio and figure out where we're exposed?
```

**Expected Response Elements:**
- Framework for a comprehensive rights audit: rights inventory (what rights do we control, what's licensed, what's unexercised), contract compliance (reversion clauses, option terms, performance thresholds), financial accuracy (royalty calculations, advance status), and risk assessment (counterparty exposure, expiring terms)
- Ask for specific data: rights inventory by category, active licensing deals, royalty statements, contract reversion provisions, any outstanding disputes
- Note that a rights audit after an internal management change often surfaces legacy issues — set expectations that findings may be uncomfortable
- Should express urgency about getting the full picture before any issues compound further

**Message 2 — Provide the Data**
```
Here's everything our new rights associate has compiled. Take a look and give me the full assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- **Issue 1 (unexercised audio rights):** 15 high-priority titles with combined estimated revenue of $253K-$368K sitting completely idle. No outreach, no proposals, no negotiations. In the fastest-growing format in publishing (audiobook market grew 25% in 2024), this is a critical revenue gap. Recommend immediate outreach to Audible, Spotify/Findaway, and independent producers for all 15 titles.
- **Issue 2 (reversion risk):** *Ceremony of Dust* (8,800 units) and *Notes from the Undercommons* (9,200 units) are BELOW the 10,000-unit reversion threshold and eligible for author-initiated reversion NOW. *Iron Country* (10,400 units, declining 22% YoY) will cross the threshold within 6 months at current trajectory. Margaret Holloway's agent (WME) is known for aggressive reversion enforcement. Hearthstone has no monitoring system in place.
- **Issue 3 (bankruptcy exposure):** Ediciones Luminar holds Spanish rights to Hearthstone's two most valuable titles and has filed for insolvency. Hearthstone has a contractual right to terminate but has NOT sent a termination notice despite learning about the insolvency two months ago. Delay creates risk that Spanish rights get transferred to a third party in Luminar's asset sale. €3,200 in unpaid royalties and €2,400 in unearned advance are at risk. Recommend immediate legal consultation and termination notice.
- **Issue 4 (royalty overpayment):** $27,975 overpayment to Priya Chandrasekaran across three royalty periods due to a Klopotek migration error (list price vs. net receipts for ebook royalty calculation). The error is compounding. Must be corrected immediately in the system, but the clawback conversation requires extreme care given Chandrasekaran is a bestselling author with a book under option.
- **Issue 5 (perpetuity digital rights):** 8 backlist titles had digital rights sold in perpetuity for a total of $11,700 in 2015. Those rights now generate $37,500/year for MegaBooks Corp and are growing 12% annually. Hearthstone receives nothing. No termination pathway exists because MegaBooks is in compliance. Authors are noticing the discrepancy between Amazon rankings and royalty statements. This is a legacy mistake with no clean fix — but the author relationship damage is the immediate risk.
- **Issue 6 (expired film/TV options):** Options on three titles (combined $650K in potential purchase price) expired without renewal negotiation. No tickler system, no expiry tracking, no proactive outreach. Hearthstone lost negotiating leverage by letting the options lapse silently. The rights are now free but the "heat" around these titles has cooled.
- Prioritize by urgency: (1) Luminar bankruptcy — time-sensitive legal action, (2) reversion risk — immediate monitoring and intervention, (3) royalty overpayment — stop the bleeding, (4) expired options — assess whether to reshop, (5) audio rights — revenue opportunity, (6) digital perpetuity — long-term strategy

**Message 3 — Challenge the Expert**
```
The royalty overpayment to Priya Chandrasekaran is $28K. Her agent Rebecca Liu is tough. Priya's next book is under option with us and she's our second-biggest seller. My rights director says we should just absorb the loss and fix the rate going forward to avoid damaging the relationship. What do you think?
```

**Expected Response Elements:**
- Understand the instinct to protect the author relationship — Chandrasekaran is a top revenue generator and the next book under option makes her strategically critical
- However, simply absorbing $28K and saying nothing is NOT the right approach, for several reasons:
  1. **Legal exposure:** If Chandrasekaran's agent discovers the error during a routine audit (which agents are entitled to under standard contracts), finding that Hearthstone knew about the overpayment and concealed it would destroy trust far more than a transparent disclosure
  2. **Fiduciary obligation:** Hearthstone has a contractual obligation to maintain accurate royalty records. Knowingly paying incorrect royalties — even overpayments — violates the spirit of the publishing agreement
  3. **Precedent:** If other authors learn that Hearthstone absorbed an overpayment for a top author, smaller authors will question whether they're receiving the same consideration
  4. **Continuing error:** The current period (H2 2025) is also being calculated incorrectly. Every additional period compounds both the financial and relationship risk
- Recommended approach: (1) Fix the Klopotek rate immediately to stop further overpayment. (2) Prepare a clear, factual summary of the error for the agent. (3) Disclose proactively — frame it as "we found this during our migration audit, here's what happened, and here's how we've fixed it." (4) Propose a recovery plan that's relationship-sensitive: offset the $28K against future royalties over 4-6 royalty periods rather than demanding a lump-sum clawback. (5) Pair the disclosure with a positive conversation about the next book option and audio rights opportunity for *What We Carried*.
- The goal is to turn a potential crisis into a demonstration of integrity. Authors and agents respect publishers who catch their own errors and handle them transparently.

**Message 4 — Operational Deep Dive**
```
What about the Luminar situation in Spain? Our rights director says "these things sort themselves out" and we shouldn't overreact. We've never dealt with a licensee bankruptcy before.
```

**Expected Response Elements:**
- "These things sort themselves out" is dangerously wrong. In a licensee insolvency, inaction is the worst possible strategy.
- The contract gives Hearthstone an explicit termination right upon licensee insolvency. This right must be EXERCISED — it does not activate automatically. Failure to send a termination notice while the insolvency proceeding is active could be interpreted as waiver or acquiescence.
- The specific risks of inaction:
  1. **Asset transfer:** The insolvency administrator can sell Luminar's publishing assets — including the Spanish-language rights to Hearthstone's two most valuable titles — to a third-party buyer. Once transferred, Hearthstone would need to deal with a publisher they didn't choose, under terms they didn't negotiate.
  2. **Financial loss:** The €3,200 in unpaid royalties and €2,400 unearned advance become unsecured creditor claims in the insolvency. Recovery rate for unsecured creditors in Spanish insolvencies averages 5-15%. The money is likely gone, but the claim must be filed.
  3. **Rights limbo:** While the insolvency proceeds, Luminar may continue to sell existing inventory but is unlikely to invest in new printings, marketing, or distribution. The titles will effectively go dormant in the Spanish market during a critical period.
- Immediate actions: (1) Engage a Spanish IP attorney (or a US firm with Spanish counsel) to send a termination notice under the contract's insolvency clause. (2) File a creditor claim for the €5,600 owed. (3) Notify the authors (Vasquez and Okafor) and their agents — they have a right to know. (4) Begin identifying alternative Spanish-language publishers for relicensing once rights are recovered.
- The two-month delay since Hearthstone learned of the insolvency is already problematic. Every additional week increases the risk of the asset sale closing before Hearthstone acts.

**Message 5 — Edge Case: Perpetuity Digital Rights**
```
Three of our authors — Arai, Okafor, and Blakemore — have asked why their ebook earnings seem low compared to what they see on Amazon. They don't know about the 2015 perpetuity deals. How do I handle this conversation?
```

**Expected Response Elements:**
- This is the most difficult conversation in the portfolio and it cannot be avoided. The authors are already asking questions, which means they are already suspicious. Delay will make it worse.
- The core problem: in 2015, a previous publisher sold these authors' digital rights in perpetuity for a total of $11,700. Those rights now generate $37,500/year and growing. The authors were not consulted (the contracts didn't require it), but they are bearing the financial consequence — their ebook royalty statements show only Hearthstone-direct digital sales, not MegaBooks sales, making their earnings appear artificially low.
- What the authors need to know: (1) The previous publisher made these deals. (2) The current management disagrees with the decision but inherited the contracts. (3) The deals are legally binding and MegaBooks is in compliance — there is no easy exit. (4) Hearthstone is exploring every possible avenue to recover these rights.
- Potential recovery strategies (none are quick or certain): (1) Negotiate a buyback from MegaBooks — they may be willing to sell the rights back at a premium given the titles' growth trajectory. (2) Examine the original contracts for any breach or termination provision that may have been overlooked. (3) If the contracts are older than the authors' contracts with Hearthstone, check whether the previous publisher actually had the authority to grant perpetuity digital rights. (4) Consult an IP attorney on whether the terms may be unconscionable given the disparity between the flat fees and current revenue.
- Relationship management: (1) Be transparent about the full situation. (2) Acknowledge that this was a bad deal made by prior management. (3) Present a concrete action plan (legal review, buyback negotiation). (4) Consider whether Hearthstone should compensate these authors from its own funds as a goodwill gesture — even a partial offset demonstrates that Hearthstone values the relationship. (5) For Okafor specifically, note that this conversation should be coordinated with the Luminar bankruptcy disclosure — he is affected by both issues.
- The worst outcome is the authors discovering the full picture through their own research (which they are clearly on the path to doing) and concluding that Hearthstone concealed it. Proactive disclosure is the only path that preserves trust.
