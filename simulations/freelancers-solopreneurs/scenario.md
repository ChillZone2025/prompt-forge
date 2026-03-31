# Simulation Scenarios: Freelancers & Solopreneurs

> Multi-turn conversation scripts for testing agents in the Freelancers & Solopreneurs industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Freelance Business Annual Review

### Agents Tested
`client_onboard`, `rate_calc`, `scope_guard`

### Mock Data
`mock-data/scenario-1.md` (Independent UX designer — 3 years freelancing, full business data)

### Messages

**Message 1 — Set the Stage**
```
I've been freelancing for 3 years as a UX designer and I want to do a full business health check before heading into 2026. I've got my revenue data, project history, time tracking, and pipeline. Where should we start and what should I be looking for?
```

**Expected Response Elements:**
- Structured review framework covering at minimum: revenue analysis, profitability per project/client, utilization rate, pricing benchmarks, client concentration, tax compliance, pipeline health, and risk exposure (contracts, insurance, accounts receivable)
- Should ask for the business data to conduct the analysis
- Should mention that effective hourly rate (not stated rate) is the true measure of pricing health for fixed-price freelancers
- Framework should address both financial health and operational sustainability (hours worked, burnout indicators)

**Message 2 — Provide the Data**
```
Here's everything. Revenue, projects, time tracking, expenses, and pipeline. Give me the full assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of effective hourly rate collapse: weighted average ~$85/hr across projects vs. $125/hr stated rate. Worst projects (Nexus Dashboard $62.72/hr, Nexus Mobile $70.97/hr) earning below junior rates
- Flag extreme client concentration: Nexus 42.6% + Bloom 27.5% = 70.1% from two clients
- Flag $0 in estimated quarterly taxes on $142K net income — $42K+ tax liability incoming with only $15K cash on hand
- Identify catastrophic utilization: 55 hours/week but only 48.8% utilization — 14.3% of time spent on unbilled revisions
- Flag the $35K Nexus project with no contract — $0 collected, 196 hours invested
- Note 3 years without a rate increase while market has moved 20-25%
- Prioritize issues by severity: tax crisis > contract risk > client concentration > pricing > utilization

**Message 3 — Challenge on Pricing**
```
But my clients love me — I have 8-10 NPS scores. If I raise my rates, won't I lose them? Nexus has been my anchor client since day one.
```

**Expected Response Elements:**
- Acknowledge the strong client relationships — NPS scores of 8-10 indicate genuine value delivery
- BUT: high satisfaction with below-market rates means Maya is being undervalued, not fairly compensated. Clients love her partly because they're getting premium work at a discount.
- Nexus is simultaneously her best relationship AND her worst financial performer — the Dashboard project earned $62.72/hr, which is a 50% discount on her stated rate
- A 20% rate increase to $150/hr (still below Austin market rate for her experience level) on Nexus work alone would have added ~$14,400 in 2025
- Rate increase strategy: grandfather existing projects, implement new rates on new SOWs, offer existing clients a "loyalty rate" that's still an increase (e.g., $140/hr for existing clients, $160/hr for new clients)
- The real risk isn't losing clients to a rate increase — it's the $35K contract-free project and the 90-day overdue invoice. The Nexus relationship is at risk of a different kind of loss: one VP departure and Maya loses 42.6% of her revenue
- Reference the Skyline Ventures project ($126.32/hr effective rate) as proof that well-scoped projects with clear boundaries can be highly profitable

**Message 4 — Deep Dive on the Tax Crisis**
```
OK the tax situation is terrifying. I have $15K in the bank and you're saying I owe $42K+. What do I do? Am I going to get in trouble with the IRS?
```

**Expected Response Elements:**
- Immediate reassurance: this is a solvable problem, but it requires action now, not at tax time
- The IRS has formal programs for this exact situation — Maya is not going to jail, but she will pay penalties
- Step-by-step action plan:
  1. File taxes on time (or file for extension) — late filing penalties are MUCH worse than late payment penalties
  2. Pay as much as possible with the return to reduce penalty/interest accrual
  3. Apply for an IRS Installment Agreement (Form 9465) for the remaining balance — available for amounts under $50K with up to 72-month payment plans
  4. Start making 2026 estimated quarterly tax payments immediately (Q1 due April 15)
  5. Set up a separate tax savings account and auto-transfer 30% of every client payment
- Explain the underpayment penalty: approximately 8% annualized rate on the underpayment, roughly $1,200-1,800 for the year
- Recommend consulting a CPA or enrolled agent who specializes in freelancer taxes — this is worth the $500-1,000 investment
- Mention the home office deduction optimization (she's using simplified method leaving ~$2,100 on the table)
- Mention the QBI deduction (Section 199A) — at her income level she may qualify for up to 20% deduction on qualified business income
- Long-term: at $142K net income, she should evaluate LLC + S-Corp election to reduce self-employment tax (could save $5,000-8,000/year)

**Message 5 — Edge Case: The Uncontracted $35K Project**
```
About the Nexus settings project — the VP just messaged me saying "the CEO wants to review everything you've done so far and might want to go in a different direction." I've put in 196 hours with no contract and no money. What do I do?
```

**Expected Response Elements:**
- This is an urgent situation — Maya has $24,500 in labor invested (196 hours x $125/hr) with zero documentation and zero payment
- Immediate actions (in order):
  1. Do NOT do any more work until this is resolved — stop the bleeding immediately
  2. Send a professional email (not Slack) summarizing all work completed to date, hours invested, and the verbal agreement. Create a paper trail NOW.
  3. Send a formal SOW and contract for the work already completed and any future work — present it as "formalizing what we discussed" not as escalation
  4. Invoice immediately for work completed to date — frame it as a milestone invoice
  5. Require a signed contract and deposit before any additional work proceeds
- Legal reality: without a written contract, Maya's position is weak but not hopeless. The Slack thread showing the VP's verbal commitment, the work product itself, and the pattern of the ongoing relationship all support an implied contract claim (unjust enrichment / quantum meruit). But proving the $35K amount will be difficult.
- The "CEO wants to go in a different direction" signal is a major red flag — this is exactly how projects get killed and freelancers get stiffed. The VP committed $35K, but if the CEO overrides the direction, the VP may not fight for Maya's payment.
- Risk assessment: Maya should prepare for the possibility that she collects $0 on this project. At $24,500 in labor, this represents 14.5% of her annual revenue written off. Combined with the Meridian $4,500 overdue invoice, she could be looking at $29,000 in uncollectable revenue — and she already can't pay her taxes.
- Lesson: never start work without a signed contract and deposit. Period. No exceptions for "trusted" clients. The trust was misplaced — the VP may be trustworthy, but the VP doesn't write the checks.

---

## Scenario 2 — Client Onboarding & Scope Definition

### Agents Tested
`client_onboard`, `pitch_writer`, `portfolio_builder`, `scope_guard`

### Mock Data
`mock-data/scenario-2.md` (New client engagement — web redesign proposal and contract)

### Messages

**Message 1 — Set the Stage**
```
I just had a great discovery call with a new client — wellness supplement company, they want a full website redesign. They were referred by a previous client so the vibe is good. I'm about to send over my proposal and contract. Can you review my onboarding package before I send it?
```

**Expected Response Elements:**
- Express willingness to review the complete package
- Should ask for the proposal, contract, and any notes from the discovery call
- Should mention the key elements they'll be evaluating: scope definition, pricing structure, payment terms, IP ownership, revision limits, timeline realism, termination protections, and client red flags
- Should note that referred clients still require the same contractual rigor as cold clients

**Message 2 — Provide the Data**
```
Here's the full package — proposal, contract, timeline, communication plan, and my discovery call notes. Tell me if this is ready to send:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Firm recommendation: DO NOT send this package as-is. Multiple critical gaps that expose Maya to significant financial and legal risk.
- Identification of all 6 planted issues, prioritized:
  1. **Unlimited revisions** — the single most dangerous clause. Given the CEO's invisible involvement, the fired previous designer, and "we'll know it when we see it," this will spiral. Recommend 2-3 rounds per phase, with additional rounds at $150/hr.
  2. **100% payment on completion** — Maya works 8+ weeks for free with zero leverage. Recommend 33/33/34 split (deposit / wireframe approval / final delivery) or 50/25/25.
  3. **No kill fee** — combined with 100% on completion, if the client cancels after 6 weeks, Maya gets $0 for 6 weeks of work. Recommend tiered kill fee + non-refundable deposit.
  4. **No IP transfer terms** — $28K project with no clarity on who owns the designs. Must specify assignment upon final payment with portfolio usage rights retained.
  5. **Timeline ignores feedback cycles** — 8 weeks with zero buffer for client review. Realistic timeline is 12-16 weeks with 5-7 business day feedback windows built into each phase.
  6. **Fixed-price / hours mismatch** — "Shopify implementation support" is undefined, and unlimited revisions on a fixed price means Maya bears all risk. Either tighten scope or convert to time-and-materials with cap.
- Specific red flags from discovery call: CEO not available but has strong opinions, previous designer fired mid-project, "we'll know it when we see it" brief, Maya agreeing to "figure out" Shopify development
- Recommended revisions to the contract and proposal before sending

**Message 3 — Challenge on Client Relationship**
```
I'm worried that if I send a contract with revision limits and a kill fee, the client will think I'm being difficult. The referral came from Skyline Ventures — I don't want to make that look bad. Can't I just be flexible?
```

**Expected Response Elements:**
- Being professional is not being difficult. A clear, fair contract protects BOTH parties.
- The Skyline Ventures referral actually makes professionalism MORE important, not less — if this engagement goes badly (and without protections, it likely will), it reflects poorly on Maya AND on the referral source
- Frame the conversation: these terms are standard industry practice for professional design engagements. A client who objects to revision limits, milestone payments, and a kill fee is revealing something about how they intend to work — and that's information Maya needs before committing 8+ weeks.
- Historical evidence from Maya's own data: her most profitable project (Skyline Ventures, $126.32/hr effective rate) had clear boundaries and 2 revision rounds. Her least profitable projects (Nexus Dashboard $62.72/hr, Nexus Mobile $70.97/hr) had no limits. "Flexibility" has literally cost Maya tens of thousands of dollars.
- The previous designer was fired mid-project — that alone should be reason enough to have strong cancellation protections
- Offer compromise language that feels collaborative: "My standard process includes 3 rounds of revisions per phase — I've found this keeps us moving efficiently. If we need additional rounds, I'm happy to accommodate at $X/round." This is professional, not adversarial.

**Message 4 — Scope Clarification**
```
Sarah just emailed: "Forgot to mention — the CEO also wants a full product photography style guide and some social media templates. Can we add those into the same project?" How do I handle this?
```

**Expected Response Elements:**
- This is a textbook scope expansion request — handle it with a formal change order, NOT by absorbing it into the existing proposal
- A photography style guide and social media templates are entirely different deliverables from a website redesign. They require different skills and potentially different tools.
- The fact that this is coming BEFORE the contract is signed is actually good news — it's easier to scope correctly before the project starts than to add change orders mid-stream
- Two options:
  1. **Add as a separate line item in the proposal** — price the photography style guide ($3,000-5,000) and social media templates ($2,000-4,000) separately, with their own deliverable definitions and revision limits. Adjust the total project price.
  2. **Propose as a Phase 2 engagement** — complete the website redesign first, then scope the additional deliverables as a separate SOW. This keeps the current project focused and manageable.
- Do NOT fold these into the existing $28,000 price. That price was based on a specific scope. Adding deliverables without adjusting price reduces the effective hourly rate.
- Also flag: "the CEO wants" suggests the CEO is already influencing scope from the sidelines. This reinforces the need for a defined change order process and revision limits. If the CEO can add deliverables before the project starts, imagine what happens mid-project when the contract has "unlimited revisions."

**Message 5 — Edge Case: Client Wants to Start Before Contract**
```
Sarah says she's "ready to go" and wants to start discovery this week. She says she'll "sign the contract next week when the CEO gets back from travel." She wants me to do the competitive analysis now so we don't lose time. What should I do?
```

**Expected Response Elements:**
- Do NOT start work before the contract is signed. This is a non-negotiable professional boundary.
- Maya literally has a $35K project right now with 196 hours invested and no contract — she knows exactly what happens when work starts before paperwork. She cannot afford to repeat this mistake.
- The request sounds reasonable on the surface but it's a pattern: urgency + delayed paperwork = freelancer working at risk. If the CEO doesn't sign, or changes the budget, or decides to go in a "different direction," Maya has no protection.
- Professional response to Sarah: "I completely understand the urgency and I'm excited to get started too! I want to make sure we're set up for a smooth project from day one. I can have the signed contract and first invoice ready for you to review today — once we have signatures and the deposit processed, I can start the competitive analysis the very next day. That way we're both protected and aligned."
- If Sarah pushes back: "I've found that starting without formal agreements in place creates confusion down the road. The contract takes 10 minutes to review and sign — it's a standard digital signature. This isn't about trust, it's about making sure we both have a clear record of what we agreed to."
- The "CEO gets back from travel" timeline means the contract could be delayed indefinitely. If Sarah has budget authority up to $50K (per the brief), she can sign the contract herself.
- Underlying principle: a client who respects your work respects your process. Urgency that bypasses professional protections is a red flag, not a compliment.
