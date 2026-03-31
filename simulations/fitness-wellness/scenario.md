# Simulation Scenarios: Fitness & Wellness

> Multi-turn conversation scripts for testing agents in the Fitness & Wellness industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Personal Training Client Progress Review

### Agents Tested
`class_scheduler`, `client_progress`, `nutrition_planner`, `program_designer`, `wellness_coach`

### Mock Data
`mock-data/scenario-1.md` (12-week progress data for personal training client)

### Messages

**Message 1 — Set the Stage**
```
I've got a 42-year-old male client who just finished his first 12 weeks of training with me. Goals are fat loss and getting strong again — he's a former college athlete. I need to do a full progress review before we plan the next phase. What should I be looking at?
```

**Expected Response Elements:**
- Structured progress review framework covering body composition (not just scale weight), strength metrics, cardiovascular fitness, adherence data (training AND nutrition), recovery markers, and subjective wellbeing
- Emphasis on comparing rate of fat loss vs. lean mass changes — not just total weight lost
- Mention of reviewing sleep/recovery data as a training variable, not just an afterthought
- Should ask for body composition data, training logs, nutrition logs, sleep/recovery data, and any vitals or biometric tracking
- Framework should include assessing programming appropriateness (volume progression, deload scheduling, periodization)

**Message 2 — Provide the Data**
```
Here's the full data package from his 12 weeks. Give me your assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the body composition problem: 12.2 lbs lost but 5.1 lbs was muscle — this is a failing result, not a success. The fat-to-lean-mass loss ratio (~58:42) is far from the acceptable range (>85% fat loss with adequate protein and resistance training)
- Flag the training volume escalation: weekly sets went from 36 to 76 (111% increase) with no deload week in 12 weeks — this is reckless progression that explains the strength regression, rising injury complaints, and declining recovery scores
- Call out the nutrition adherence gap: trainer reports "good adherence" consistently, but actual logging shows 3.1 days/week average and protein intake dropped from 165g to ~100g — the trainer is not accurately assessing compliance
- Identify sleep as the root performance limiter: 5.2 hour average with HRV declining 52% and resting heart rate rising 6 bpm — the client is in a state of chronic under-recovery that no amount of training optimization can overcome
- Flag the blood pressure readings: 138/88 at baseline escalating to 146/94 by Week 12 — this is Stage 1 hypertension (≥130/80 per AHA guidelines) that was never flagged or referred. With family history of hypertension (father at 48), this requires physician referral immediately, not continued high-intensity training
- Note the absence of any deload programming in 12 weeks — accumulated fatigue is visible in every metric (HRV decline, strength regression, rising RHR, declining compliance, increasing joint pain)
- Provide a prioritized action plan starting with the blood pressure referral

**Message 3 — Challenge the Expert**
```
I hear you on the body composition, but the client is happy with losing 12 pounds and his clothes fit better. Isn't the scale win enough to keep him motivated? Also, his BP has always been "a little high" — I figured exercise would bring it down over time.
```

**Expected Response Elements:**
- Acknowledge that the client's subjective satisfaction matters AND that the scale number is moving in the right direction — but the trainer's job is to see what the client cannot
- Explain why 5 lbs of muscle loss is a serious problem: reduced BMR (his dropped 94 cal/day), harder future fat loss, loss of functional strength, and the exact opposite of the client's stated goal ("get strong again"). The clothes fitting better is from fat loss — but the muscle loss means the rate of progress will decelerate and the final physique result will be worse
- The protein deficit (prescribed 180g → actual ~100g) combined with excessive cardio (up to 4x/week HIIT + steady state + fasted cardio) is the classic recipe for muscle catabolism during a deficit
- On blood pressure: exercise CAN help lower blood pressure, but this client's BP went UP from 138/88 to 146/94 over 12 weeks of training — the exercise is clearly not resolving it. 146/94 with family history of hypertension at age 48 is a clear physician referral, not a "wait and see" situation
- This is a scope of practice issue: trainers do not diagnose or manage hypertension. The responsibility is to screen, identify the reading, and refer. Not flagging consistently elevated BP across 5 readings over 12 weeks is a liability exposure
- Reframe: the client can still be happy about his 12 lbs AND the trainer can course-correct the programming to protect muscle, address the BP concern, and set the next 12 weeks up for better outcomes

**Message 4 — Programming Deep Dive**
```
OK, so what specifically should the next 12-week program look like? He wants to train 5 days a week and wants to keep doing HIIT because he enjoys it.
```

**Expected Response Elements:**
- Start with a mandatory 1-week deload before beginning the new phase — the client has accumulated 12 weeks of fatigue with zero recovery weeks. HRV of 20ms and recovery scores of 22% mean he is in a recovery deficit
- Restructure programming priorities: resistance training is primary (3-4 sessions/week), cardio is secondary. The previous program had the ratio inverted by Phase 3
- Reduce HIIT to 1-2x/week maximum (not 3-4x) — HIIT generates significant systemic fatigue that compounds with resistance training. Keep 1-2 sessions since the client enjoys it, but frame it honestly: excessive HIIT in a caloric deficit accelerated his muscle loss
- Protein must be non-negotiable: minimum 1.6g/kg (155g+), ideally 2.0g/kg (195g) — this should be the first nutritional priority before worrying about total calories. The calorie target should work around the protein floor, not the other way around (the previous program cut protein to hit a calorie number)
- Program deload weeks every 4th week — this is not optional. The autoregulation data from Whoop (HRV, recovery scores) should be used to trigger deloads when recovery scores stay red for a consecutive week
- Volume should start at Week 6 levels (~54 sets/week), not Week 12 levels. The strength regression proves the client exceeded his MRV
- Address the 5-day request: 3 strength + 1 HIIT + 1 active recovery (walking, mobility, yoga) = 5 sessions while protecting recovery. Frame the active recovery day as training, not "taking a day off"
- Sleep intervention must accompany the program — no program will produce optimal results at 5.2 hours of sleep

**Message 5 — Edge Case: Scope of Practice Dilemma**
```
Marcus just texted me his blood work results from a doctor visit. His fasting glucose is 108 mg/dL (prediabetic range) and his LDL is 162. He's asking me to design a nutrition plan specifically to fix his numbers. His doctor mentioned medication but Marcus wants to try "the natural route" first and says he trusts me more than his doctor. What do I do?
```

**Expected Response Elements:**
- This is a clear scope of practice boundary. A personal trainer — even one with a nutrition coaching certification (NASM-CNC, Precision Nutrition L1) — CANNOT design a medical nutrition therapy plan to treat prediabetes or dyslipidemia. This is the legal domain of a Registered Dietitian or physician
- Do NOT design a plan targeting his lab values. Do not provide specific dietary prescriptions for glucose management or cholesterol reduction. Do not position yourself as an alternative to medical care
- The "trusts me more than his doctor" statement is a red flag, not a compliment. Reinforcing that belief puts the client at risk and the trainer in legal jeopardy
- Appropriate response: (1) Thank Marcus for trusting you. (2) Explain clearly that blood work and medical conditions are outside your scope. (3) Refer to a Registered Dietitian who can create a medical nutrition therapy plan that coordinates with his doctor. (4) Offer to continue working on his general fitness goals and general healthy eating habits ALONGSIDE the RD's plan — position yourself as part of his health team, not a replacement for medical professionals
- The prediabetes finding (fasting glucose 108) combined with the unmanaged hypertension (146/94) and family history makes this a multi-factor cardiovascular risk case. ACSM risk stratification would classify this client as moderate-to-high risk — he needs medical clearance for continued vigorous exercise
- Document this conversation. If Marcus declines medical referral and something happens during training, the trainer needs a paper trail showing the referral was made
- This is also an opportunity to revisit the blood pressure issue that was missed for 12 weeks — acknowledge the gap and commit to proper screening going forward

---

## Scenario 2 — Gym/Studio Operations Review

### Agents Tested
`class_scheduler`, `client_progress`, `nutrition_planner`, `program_designer`, `wellness_coach`

### Mock Data
`mock-data/scenario-2.md` (Boutique fitness studio operations data)

### Messages

**Message 1 — Set the Stage**
```
I own a boutique fitness studio in Austin — hot yoga, HIIT, and personal training. We've been open almost 2 years and I'm still not profitable. Before I look at the data, what framework should I use to diagnose what's wrong?
```

**Expected Response Elements:**
- Structured diagnostic framework covering: revenue per square foot, membership yield, class utilization rates, member lifetime value and retention curves, instructor economics, personal training margins, facility utilization by time block, and fixed vs. variable cost ratio
- Should mention that boutique fitness profitability hinges on three levers: utilization (filling classes), retention (keeping members past the critical drop-off point), and revenue per member (upselling from base membership)
- Mention benchmarks: profitable boutique studios typically target 70%+ utilization in peak classes, 50%+ 6-month retention, 50-60% PT margins, and revenue per square foot of $40-60/month
- Ask for membership data, class attendance, revenue/expense breakdown, instructor compensation, retention data, and facility schedule

**Message 2 — Provide the Data**
```
Here's everything I've got from Q1. Tell me what you see:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identify the scheduling/utilization mismatch: 6 AM classes at 89-91% capacity with waitlists vs. afternoon classes at 13-19% capacity. The studio is turning away paying customers in the morning while running empty classes in the afternoon. This is the most actionable immediate issue
- Flag the retention cliff: every cohort drops to ~53% at month 3 with zero engagement touchpoints between signup and cancellation. The 40%+ drop between month 1 and month 3 is the revenue leak
- Call out the PT margin problem: $65/session with $45 trainer pay = 30.8% gross margin vs. industry 50-60%. The studio is paying above-market contractor rates and pricing below-market session rates. PT is a drag on profitability, not a contributor
- Identify the Chris Morales concentration risk: one trainer holds 47% of PT clients and 47% of Premium membership revenue — if Chris leaves (and has received two competing offers), the studio loses an estimated $8,355/month. This is a single-point-of-failure
- Flag the #1 cancellation reason: "Schedule doesn't work" at 36% — and the studio has NO evening or weekend (Sunday) classes. Every competitor offers evening classes. The studio is losing members for a fixable operational reason
- Identify the check-in data gap: no automated attendance tracking means membership usage patterns are unreliable. The studio can't identify at-risk members (those who stop attending) because it can't reliably measure attendance. Drop-in revenue may also be underreported
- Overall assessment: the studio is losing $8,500/quarter with clear, addressable causes — it's a scheduling, pricing, and retention problem, not a demand problem

**Message 3 — Challenge the Expert**
```
I can't add evening classes — I don't have the budget to hire more instructors, and my current team is already at their max hours. Plus I picked the morning-focused schedule on purpose because I wanted a "morning wellness community" brand identity. Isn't that worth protecting?
```

**Expected Response Elements:**
- Acknowledge the brand identity point — "morning wellness community" is a valid positioning. But the data shows it's costing the business: "schedule doesn't work" is the #1 cancellation reason at 36% of exits, and every competitor offers evening classes
- The budget constraint is real but the math may work anyway: the 12:30 PM and 1:30 PM classes are running at 13-19% utilization — these could be eliminated to free up instructor hours for higher-demand time slots. Converting two afternoon classes to evening classes is a reallocation, not additional spend
- An alternative: start with a single "pilot" evening class 2-3 nights per week. Use existing instructors who teach low-attendance afternoon slots. If the evening class fills (likely given the competitive landscape and cancellation data), the revenue from retained members and new signups will fund expansion
- The morning brand can coexist with evening offerings — "Elevate Fitness: Start Your Day or End It Right." The brand doesn't need to be schedule-restricted to have a morning identity
- If Sarah truly wants to protect the morning-only model, she needs to accept that her addressable market is limited to people available before 2 PM on weekdays — that excludes most working professionals. The $8,537 quarterly loss and 36% schedule-related cancellations are the cost of that choice
- Other immediate revenue opportunities that don't require evening hours: optimize AM pricing (premium for waitlisted time slots), eliminate money-losing afternoon classes, fix PT margins, implement retention programming

**Message 4 — Financial Deep Dive**
```
Walk me through the PT pricing problem. Chris is my best trainer and if I cut his pay rate he'll leave. But you're saying the margins are wrong. What are my actual options?
```

**Expected Response Elements:**
- Current state: $65/session price, $45/session trainer pay = $20 studio retention (30.8%). Industry benchmark: 50-60% margin means the studio should retain $32.50-$39 per session
- The problem has two sides — the session price is too low AND the trainer pay rate is too high relative to the price. Fixing only one side is acceptable; fixing both is optimal
- Option 1 — Raise session prices: Increase from $65 to $85/session. At $45 pay, margin becomes $40/session (47%). This is the least disruptive path. Austin market supports $85-100 for boutique PT (Orange Theory personal coaching starts at $90, Lifetime at $100+). Risk: some price-sensitive clients may reduce frequency, but the per-session margin improvement more than compensates
- Option 2 — Restructure trainer compensation: Move from flat $45/session to a tiered model. Base rate of $35/session + performance bonuses for retention (clients who stay 6+ months), session volume thresholds, and client satisfaction scores. Chris's effective pay could actually increase IF his retention numbers justify it, while newer trainers (Leo at 42% 6-month retention) earn market-rate base pay. This aligns incentives with studio profitability
- Option 3 — Introduce packages: Sell PT in 12-session or 24-session packages at a per-session discount (e.g., $75/session for 24 pack vs. $85 drop-in). Packages improve cash flow (prepaid revenue), reduce no-shows, and increase commitment. The discount is to the client; the trainer pay structure stays the same
- Address the Chris dependency directly: the studio cannot afford to have 47% of its PT revenue dependent on one contractor. Mitigations: (1) non-compete or non-solicitation clause (enforceable in Texas with proper drafting), (2) ensure Chris's clients have relationships with the studio brand, not just Chris (studio-branded communications, studio-hosted progress reviews), (3) invest in developing Dani and Leo's client loads to rebalance distribution, (4) have a contingency plan for Chris's departure — because eventually it will happen
- Bottom line: even just raising prices to $85 would add ~$6,720/quarter in gross margin — that alone covers 79% of the studio's Q1 loss

**Message 5 — Edge Case: Data Integrity & Decision-Making**
```
I just realized we've been making all these decisions based on Mindbody attendance data, but you flagged that we don't have automated check-in. My studio manager told me she "usually catches everyone" but admitted that during the 6-7 AM rush she sometimes just waves people through. How much of our data can I actually trust, and what should I do?
```

**Expected Response Elements:**
- This is a significant data integrity issue. If the front desk is the sole source of attendance data and the busiest classes (6-7 AM, which represent 85%+ utilization) have unreliable check-in, then:
  - Utilization rates for peak classes may be UNDERSTATED — actual attendance could be higher than reported, meaning the studio may be over capacity (fire code risk) or losing drop-in revenue
  - Utilization rates for off-peak classes may be slightly more reliable (lower volume = easier manual tracking)
  - Member usage frequency data is unreliable — the studio cannot accurately identify which members are at risk of churning based on declining attendance because attendance data is incomplete
  - Drop-in revenue is potentially underreported — if walk-ins aren't captured, that's direct revenue leakage
- What can still be trusted: membership counts (billing data), revenue numbers (financial data), cancellation reasons (exit survey data), retention curves (based on membership status, not attendance), and instructor ratings (Mindbody reviews)
- What cannot be trusted: class-level attendance counts, per-member visit frequency, facility utilization calculations, and any metric derived from check-in data
- Immediate action: install an automated check-in system. Options include Mindbody-integrated kiosk ($50-100/month), barcode/QR scan at entry, or Mindbody app check-in with a requirement (no check-in = no entry to class). This is a relatively inexpensive fix ($600-1,200/year) that provides the data foundation for every other business decision
- Until automated check-in is in place, conduct a 2-week manual audit: assign a second person to the front desk during 6-7 AM to independently count every person entering each class. Compare counts to Mindbody records to quantify the data gap
- Broader point: operating a business without reliable attendance data is like training a client without tracking their workouts — you can't manage what you can't measure. Every scheduling, pricing, and staffing decision the studio makes depends on knowing who shows up, when, and how often
