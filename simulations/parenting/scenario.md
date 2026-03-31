# Simulation Scenarios: Parenting

> Multi-turn conversation scripts for testing agents in the Parenting industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — IEP Annual Review Package

### Agents Tested
`iep_advocate`, `homework_helper`, `child_development`, `parent_coach`

### Mock Data
`mock-data/scenario-1.md` (IEP annual review for 9-year-old with ADHD and dyslexia)

### Messages

**Message 1 — Set the Stage**
```
My son Ethan is 9 and has an IEP for ADHD and dyslexia. His annual review is coming up next week. I feel like things aren't going well but I don't really know how to prepare or what questions to ask. Can you help me get ready for this meeting?
```

**Expected Response Elements:**
- Structured IEP meeting preparation framework (review current goals, gather data, document concerns, prepare questions)
- Explain the parent's rights as an equal member of the IEP team
- Ask to see the current IEP document, progress monitoring data, evaluation reports, and any teacher communications
- Mention Prior Written Notice rights and the right to bring an advocate
- Explain that the parent should put concerns in writing before the meeting
- Empathetic tone — acknowledge that IEP meetings can be overwhelming

**Message 2 — Provide the Data**
```
Here's everything we have from the school — his IEP goals, the evaluation, teacher reports, OT logs, test scores, behavior reports, and my letter to the team. Can you review it all and tell me what I should be focusing on?

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of the written expression goal showing no progress for 3 consecutive quarters with no goal revision proposed — this is the most critical IEP process failure
- Flag the self-regulation goal also showing no progress for 3 quarters with the teacher recommending "continue current strategies"
- Catch the OT service reduction from 2x/week to 1x/week without documentation, parent notification, IEP amendment, or team meeting — this is a procedural violation under IDEA
- Identify the disconnect between reading specialist progress data (growth on Wilson probes) and standardized test scores (12th percentile ELA) — possible "teaching to the probe"
- Flag that the BIP references a "safe space walk" de-escalation strategy that was never actually established
- Note that Mrs. Park says Ethan is "doing great in class" while discipline records show 12 office referrals this year
- Catch that the evaluation recommended assistive technology but no AT assessment was scheduled or provided
- Prioritized list of concerns for the IEP meeting

**Message 3 — Challenge the Expert**
```
The special ed teacher keeps saying they should "continue current strategies" for the goals where Ethan isn't making progress. That doesn't sound right to me but she's the expert. Am I wrong to push back?
```

**Expected Response Elements:**
- Validate the parent's instinct — they are absolutely right to push back
- Under IDEA, when a child is not making progress toward IEP goals, the team is obligated to revise the goals, change the strategies, or increase services — "continue current strategies" after 3 quarters of no progress is not legally defensible
- Explain the concept of "meaningful educational benefit" — a child is entitled to more than minimal progress
- Reference the Endrew F. v. Douglas County School District (2017) Supreme Court decision: IEP goals must be "appropriately ambitious in light of the child's circumstances," not merely "de minimis"
- Specifically address Goal 2 (written expression) and Goal 4 (self-regulation) as the two goals requiring immediate revision
- Suggest specific questions to ask: "What data supports continuing these strategies?" "What alternative strategies have been considered?" "If the current approach hasn't worked in 9 months, what will be different about the next 12?"
- Recommend requesting an IEP team meeting to revise goals and strategies before the annual review if possible

**Message 4 — Rights & Advocacy Deep Dive**
```
I just found out they cut Ethan's OT from twice a week to once a week back in December and nobody told us. Can they just do that? What should I do?
```

**Expected Response Elements:**
- No, they absolutely cannot do that without parental involvement
- IDEA requires that any change to the frequency, duration, or intensity of related services in the IEP must go through the IEP team process and requires parent consent
- Reducing services without a team meeting, prior written notice, and parent consent is a procedural violation
- The school owes Ethan compensatory services for the missed sessions — approximately 20+ sessions (8 sessions in December + 12 sessions in Jan-March = 20 sessions at the 2x/week rate, minus 14 sessions actually delivered at 1x/week = approximately 6 missed sessions minimum, but calculate the actual delta)
- Explain how to calculate compensatory services owed
- Recommend putting the concern in writing immediately (sample language)
- Explain escalation options: formal complaint to the special education director, state education department complaint, request for mediation, due process hearing
- Reassure the parent that advocating for their child's services is their right and not "causing trouble"

**Message 5 — Edge Case: Conflicting Data & AT Recommendation**
```
The reading specialist says Ethan is making great progress but his state test score was at the 12th percentile. That doesn't add up. Also, the evaluation said to "consider assistive technology" back in September but nothing happened. What should I ask about these things at the meeting?
```

**Expected Response Elements:**
- Address the progress monitoring vs. standardized test discrepancy directly — this is a well-known issue in special education called "teaching to the probe" or narrow skill measurement vs. broad skill generalization
- Wilson Reading System probes measure decoding accuracy on controlled texts at specific skill levels; state assessments measure reading comprehension, inference, vocabulary, and analysis on grade-level text — these are different skills
- The growth on Wilson probes is real and positive but it does not mean Ethan is performing at grade level in reading — the state test is a more accurate picture of his overall ELA skills
- The IEP team needs to reconcile these data sources honestly and set goals that address the full range of reading skills
- On the AT recommendation: "consider assistive technology" in an evaluation report should trigger an AT assessment. Under IDEA, the IEP team must consider AT for every child with an IEP. When a psychoeducational evaluation specifically recommends AT (and Ethan's 34-point VCI/PSI gap strongly supports it), failing to act on that recommendation for 6 months is a significant omission
- The parent should formally request an AT evaluation in writing at the IEP meeting
- Specific AT tools relevant to Ethan's profile: speech-to-text (Google Voice Typing, Dragon NaturallySpeaking), word prediction (Co:Writer, Google's built-in prediction), text-to-speech for reading comprehension (NaturalReader, Learning Ally), graphic organizers for writing (Kidspiration, Google Docs outline mode)
- Frame the ask: "The evaluation recommended AT in September. It's now March. I am formally requesting an assistive technology evaluation be completed within 30 days."

---

## Scenario 2 — Family Schedule & Wellness Assessment

### Agents Tested
`family_scheduler`, `bedtime_story`, `parent_coach`, `child_development`

### Mock Data
`mock-data/scenario-2.md` (Family schedule and wellness data for dual-income household with 3 kids)

### Messages

**Message 1 — Set the Stage**
```
I'm a working mom with 3 kids (ages 5, 8, and 12) and I feel like our family is running on fumes. Everyone is always going in different directions, the kids eat junk, I never see my husband, and I can't remember the last time I had an hour to myself. Can you help me figure out where we're going wrong?
```

**Expected Response Elements:**
- Empathetic acknowledgment of the overwhelm without minimizing it
- Framework for family wellness assessment (schedule audit, sleep analysis, nutrition review, connection time mapping, stress indicators)
- Ask to see the family's schedule, activity commitments, meal patterns, and academic information
- Normalize that many dual-income families hit this wall — the problem is systemic, not a personal failure
- Avoid the trap of immediately suggesting "self-care" without understanding the structural constraints first

**Message 2 — Provide the Data**
```
Here's everything — our schedules, the kids' activities, screen time reports, sleep data, what we eat, how the kids are doing in school, and honestly some stuff about how James and I are doing. Be straight with me.

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of Lily's sleep deficit — 7.0-7.25 hours on school nights is dangerously below the 8-10 hour recommendation, especially for an athlete on an honors track. This is the most immediately actionable concern.
- Flag Nora's screen time at 3.5 hours/day (3.5x the AAP recommendation of 1 hour for ages 2-5), predominantly passive YouTube consumption
- Point out that the family has zero shared weekday dinners — James eats alone 4 of 5 weeknights, and there is no protected family mealtime
- Catch Owen's grade drop from B+/B to C-/C with the teacher's email sitting unanswered for 40 days
- Identify James' work pattern (55+ hours including Saturday overtime) as a burnout/avoidance indicator, combined with increasing alcohol consumption and frequent headaches
- Flag the nutrition pattern — 6 of 7 dinners are processed/convenience/fast food, which is a modifiable risk factor particularly relevant for Owen's attention and academic issues
- Prioritize findings by urgency: (1) Lily's sleep, (2) Owen's academic decline and unanswered teacher, (3) Nora's screen time, (4) nutrition overhaul, (5) parent wellness and relationship, (6) James' work/avoidance pattern

**Message 3 — Challenge the Expert**
```
I hear you on the schedule stuff but I can't just pull Lily out of volleyball — she's on a competitive travel team and this is her identity. And James needs to work — he can't just take Saturdays off. These aren't things I can change.
```

**Expected Response Elements:**
- Acknowledge that both concerns are legitimate — Lily's athletic identity matters, and James' work commitment is real
- But push back respectfully: the data shows Lily is getting 7 hours of sleep and falling asleep in class. A competitive athlete on insufficient sleep will underperform athletically (sleep is when growth hormone is released, muscles recover, and motor learning consolidates) AND academically. This isn't sustainable.
- The solution isn't necessarily "quit volleyball" — it's restructuring the nights to protect sleep:
  - Move homework to before practice on volleyball days (3:00-5:00 PM slot)
  - Implement strict no-phone-in-bedroom policy (charge phones in kitchen overnight)
  - Evaluate whether drama club on Thursday (the day she already has volleyball) is one commitment too many
  - Talk to Lily about trade-offs — she's 12, she can participate in this decision
- On James: the Saturday overtime is "not exactly mandatory" and the family doesn't need the money. Combined with increased drinking, headaches, and feeling "shut out" at home, this pattern deserves a direct conversation. Not an accusation — an observation: "You seem exhausted and disconnected. What's going on?"
- The real question isn't whether individual activities can change — it's whether the family can continue on this trajectory without something breaking (Lily's health, Owen's academics, Kate and James' marriage)

**Message 4 — Focus on the Overlooked Child**
```
Wait — you mentioned Owen's teacher emailed me in February? I think I saw that but things were so crazy I must have forgotten to respond. His grades dropped that much? What should I do?
```

**Expected Response Elements:**
- Yes — Owen's grades went from B+/B average to C-/C range in one semester, and his teacher specifically flagged reading comprehension as the issue spreading to other subjects
- The teacher's email was sent February 8 and has gone 40 days without a response — this needs to be addressed immediately
- Draft a response to the teacher: apologize for the delay, express concern, request a conference within the next week
- Owen's profile is concerning: decoding is improving (tutoring is helping) but comprehension is declining as 3rd grade texts get more complex. This suggests he may need a different type of reading intervention — not just phonics-based tutoring but comprehension strategy instruction
- The pattern of saying "I can't" and declining confidence is an emotional warning sign — when children start internalizing academic struggles as identity ("I'm dumb"), it becomes much harder to reverse
- Consider requesting an evaluation through the school if Owen hasn't been assessed — his profile (reading difficulties impacting multiple subjects, declining grades, behavior changes) could indicate a specific learning disability
- Connect the dots: Kate's overwhelm means Owen's needs are falling through the cracks. The family schedule has Kate managing everything for 3 children while running from activity to activity — the "quiet" middle child with declining grades gets the least attention because he's not creating urgent crises

**Message 5 — Edge Case: Parent Burnout & Honest Conversation**
```
Honestly? I broke down crying in my car after drop-off yesterday. I don't want to keep doing this. I love my kids but I feel like I'm drowning. James and I barely talk except about logistics. Is this just what parenting is?
```

**Expected Response Elements:**
- This is NOT "just what parenting is." What Kate is describing is burnout, and it is serious.
- Validate the emotion without pathologizing it — crying in the car after drop-off when you're running on 7 hours of sleep, managing everything alone, eating poorly, exercising never, and feeling disconnected from your partner is a completely rational response to an unsustainable situation
- But this is also a moment where the agent must recognize its limits: if Kate is experiencing persistent sadness, loss of interest, or hopelessness, she should talk to a mental health professional, not just a scheduling app. Screen for severity without diagnosing.
- The structural problems are real and fixable, but they require James as a full partner in the solution — this cannot be solved by Kate "optimizing" harder
- Specific recommendations:
  1. **Immediate:** Respond to Owen's teacher today. One email, 5 minutes. Get that off the mental load list.
  2. **This week:** Have an honest conversation with James — not about logistics, about the state of the family. Use the data: "Our daughter is sleeping 7 hours, our son's grades dropped two letter grades, our 5-year-old watches 3.5 hours of screens a day, and we haven't had dinner together on a weekday in months."
  3. **This month:** Cut one thing from the schedule. Not everything — one thing. The lowest-value commitment.
  4. **Ongoing:** Redistribute the mental load. James managing even one child's complete activity/school/appointment portfolio would change the dynamic.
  5. **Non-negotiable:** Kate schedules one appointment for herself — therapist, doctor, or even just a coffee with a friend. Parental burnout is a recognized condition (ICD-11: QD85) and it affects the children.
- The agent must NOT suggest that Kate just needs better time management, a meal prep service, or a more positive attitude. The problem is structural and relational, not organizational.
