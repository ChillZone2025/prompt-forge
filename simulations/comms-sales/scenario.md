# Simulation Scenarios: Comms & Sales

> Multi-turn conversation scripts for testing agents in the Comms & Sales industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Enterprise Deal Review

### Agents Tested
`sdr`, `market_intel`, `proposal_gen`, `email_seq`, `cust_success`

### Mock Data
`mock-data/scenario-1.md` (Enterprise deal review package for a $450K ACV healthcare deal)

### Messages

**Message 1 — Set the Stage**
```
I'm an enterprise AE and I have a $450K deal in negotiation stage that my VP wants to review before end-of-quarter. I've been told to bring a full deal risk assessment to the pipeline review meeting tomorrow. What framework should I use to evaluate whether this deal is real?
```

**Expected Response Elements:**
- Structured deal qualification framework referencing MEDDIC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion)
- Questions about Champion status, Economic Buyer engagement, and competitive landscape
- Pipeline inspection methodology: stage validation, activity recency, stakeholder coverage, timeline realism
- Should ask for the deal data package (CRM notes, stakeholder map, pricing proposal, email threads)
- Should mention the importance of verifying "Commit" forecast category against objective criteria

**Message 2 — Provide the Data**
```
Here's the full deal package — account history, stakeholder map, deal timeline, competitive landscape, pricing proposal, email threads, and CRM activity log. Give me a thorough risk assessment:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- **Critical risk: New CIO (Marcus Bell) not engaged** — Whitfield's assurance that "no action needed" should be challenged directly. Bell has a mandate to "rationalize technology investments" and sits above the Champion. This is the #1 deal killer.
- **High risk: Competitor (CloudMed) unaddressed** — $380K ACV proposal mentioned in January but never addressed in the proposal, competitive analysis, or subsequent conversations. The deal team has no competitive intelligence from the last 3 months.
- **High risk: Discount violates margin floor** — 15% flat discount pushes implementation margin to ~38.2%, below the 40% floor per Deal Desk guidelines. No Deal Desk approval documented.
- **High risk: Legal timeline unrealistic** — Sarah estimates 1 week for legal review, but Meridian's legal team is occupied with post-merger contracts. Hospital system legal reviews typically take 4-6 weeks. April 18 close date is not achievable.
- **Medium risk: Economic Buyer (CFO) disengaged** — Last contact November 2025. Only 2 total touchpoints. New CIO mandate may trigger CFO re-evaluation.
- **Medium risk: General Counsel never contacted** — Legal review is on the critical path but NovaTech has zero relationship with the person reviewing the contract.
- Prioritized action plan with specific next steps and timeline

**Message 3 — Challenge the Expert**
```
My Champion (Whitfield) insists the new CIO is "focused on infrastructure, not applications" and that the deal is "already approved in the budget." Should I trust that and keep working through Whitfield, or am I overcomplicating this?
```

**Expected Response Elements:**
- Direct challenge: No, you should not trust this characterization without independent verification
- A CIO with a mandate to "rationalize technology investments" has both the authority and the incentive to review all major technology purchases — $450K/year is not an amount that flies under the radar
- "Already approved in the budget" is not the same as "approved by the new CIO." Budget allocation is a planning exercise; procurement approval is a separate decision gate. A new CIO often reviews committed but unsigned deals as part of their first-90-days audit
- Whitfield may genuinely believe Bell isn't interested, or he may be managing the deal narrative to avoid introducing complexity — either way, the AE cannot accept secondhand assurance about the decision-maker above the Champion
- The risk is asymmetric: engaging Bell costs one meeting; not engaging Bell risks the entire $1.35M TCV
- Specific play: Ask Whitfield to set up an introductory meeting with Bell, framed as "wanting to ensure alignment with the new technology leadership." If Whitfield resists, that is itself a signal
- Multi-threading imperative: the deal currently runs through Whitfield as a single thread. If Whitfield's influence has diminished under Bell, the entire deal is at risk

**Message 4 — Operational Deep Dive**
```
What about the pricing? We offered 15% across the board after they pushed for 20%. Our deal desk hasn't formally approved this yet. Is the pricing structure sound?
```

**Expected Response Elements:**
- Flag the margin floor violation: 15% flat discount on implementation services pushes margin to ~38.2%, below the 40% implementation margin floor per NovaTech's own policy
- This requires Deal Desk escalation and VP Sales approval before the proposal is finalized — sending a proposal with a non-compliant discount structure is a process violation that could delay close if deal desk catches it later
- Tactical recommendation: restructure the discount rather than applying a flat percentage. For example, offer 18% on the platform license (high margin, absorbs discount easily) and 8% on implementation services (protects the margin floor). This gives Meridian a headline discount above 15% on the highest-value line item while protecting NovaTech's margin on services.
- The CloudMed competitive threat ($380K ACV) should be addressed proactively in the next conversation, not ignored. If Meridian is using CloudMed as price leverage, NovaTech needs to differentiate on value (POC results, healthcare data model, implementation speed), not race to the bottom on price
- The 3-year TCV should be positioned as a commitment advantage — Meridian is getting price certainty and investment protection in exchange for the multi-year term

**Message 5 — Edge Case: Forecast Integrity**
```
My VP wants this deal in the "Commit" forecast for this quarter. The close date is April 18. Based on what you've seen, is that realistic? If not, what do I tell my VP?
```

**Expected Response Elements:**
- Direct answer: No, April 18 is not a realistic close date. The deal should be moved to "Best Case" or "Upside" for this quarter.
- The legal review timeline alone makes Q1 close unlikely — Meridian's legal team is handling post-merger contracts and has flagged specific clauses requiring review. Hospital system legal cycles are 4-6 weeks, not 1 week.
- The new CIO has not been engaged. Until Marcus Bell is briefed and aligned, there is an unquantified risk that he pauses or re-evaluates the deal during his first-90-days investment review.
- CloudMed's competitive position has not been validated in 3 months. If Meridian is still evaluating CloudMed, the negotiation may not be as advanced as the pipeline stage suggests.
- How to communicate to VP: Lead with the objective data (legal timeline, CIO gap, competitive uncertainty), not with excuses. Propose a realistic close date (mid-May to early June) with a clear action plan to mitigate each risk. Frame the slippage as a forecast accuracy improvement, not a failure — committing a deal that slips damages credibility more than accurately forecasting a later close.
- Risk of forcing the April 18 date: if the AE pressures Meridian to rush legal review, it signals desperation and may reduce the AE's negotiating leverage. If the VP commits the deal to the board and it slips, it damages the entire team's forecast credibility.
- The deal is real and winnable, but it is a Q2 close, not a Q1 close. Accurate forecasting is more valuable than optimistic forecasting.

---

## Scenario 2 — Product Launch Communications Review

### Agents Tested
`pr_agent`, `repurpose`, `email_seq`, `cust_success`

### Mock Data
`mock-data/scenario-2.md` (Product launch communications plan for a B2B SaaS feature launch)

### Messages

**Message 1 — Set the Stage**
```
We're launching a major new feature in 3 weeks and I need someone to review our communications plan. It covers PR, social media, email sequences, analyst outreach, internal comms, and launch metrics. What should a strong launch plan include?
```

**Expected Response Elements:**
- Structured framework for a B2B SaaS product launch communications plan
- Key components: press strategy, social content calendar, email segmentation by audience, analyst/influencer briefings, internal enablement, metrics framework
- Should mention the importance of timing relative to industry events, competitive activity, and internal readiness
- Should ask about the product's availability (all customers vs. specific tiers), target audience, and launch goals
- Should reference the PESO model (Paid, Earned, Shared, Owned) for integrated communications
- Should ask for the full plan to review

**Message 2 — Provide the Data**
```
Here's our complete launch plan — press release, social calendar, email sequences, analyst outreach list, internal brief, and metrics dashboard. Tell me what's working and what needs to change:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- **Critical: "Industry-first" claim in press release is unsubstantiated** — Competitors like Fivetran and Airbyte have real-time sync capabilities. The claim exposes Nexora to Lanham Act challenges and credibility damage. Legal must review. Recommend specific differentiators instead of superlative claims.
- **High: Social calendar conflicts with DataConnect Summit** — The launch window (April 22-24) overlaps with the industry's largest conference. Target audience will be at the conference. Social strategy should incorporate conference-related content or the launch should be rescheduled.
- **High: Customer email sequence doesn't segment by plan tier** — VaultSync is Enterprise-only but the email goes to all customers. Starter/Growth customers will receive an announcement for a feature they can't access, generating confusion and support tickets. Must split into tier-specific sequences.
- **High: Analyst outreach includes hostile journalist** — Emma Lawson published a critical piece on Nexora's data governance in January 2026. Pitching a data sync product to her without addressing the governance concerns is risky. She should either be removed from this launch cycle or engaged with a specific governance remediation narrative.
- **Medium: Internal brief omits support team entirely** — No FAQ, no training, no escalation path for VaultSync issues. Support agents will be unprepared when Enterprise customers encounter problems. This undermines the launch experience.
- **Medium: Metrics are all lagging indicators** — No leading indicators for course correction during the launch (daily demo velocity, sentiment tracking, support ticket volume, competitor response monitoring). The dashboard tells you what happened but doesn't help you adjust in real time.

**Message 3 — Challenge the Expert**
```
Our CEO insists we keep the "industry-first" language because "it's what journalists want to hear and our competitors haven't specifically built it this way." Is he right?
```

**Expected Response Elements:**
- The CEO's instinct to differentiate is correct, but the execution creates legal and reputational risk
- "Industry-first" is a factual claim that requires substantiation. Under FTC guidelines and the Lanham Act, competitors can challenge unsubstantiated superiority claims. If Fivetran, Airbyte, or others have any form of real-time sync (and they do), the claim is objectively false
- What journalists actually want is specificity, not superlatives. "Industry-first" is generic — every company claims it. What gets coverage is measurable differentiation: "sub-second latency vs. competitors' 5-15 minute intervals," "40+ connectors at launch vs. typical 15-20," or "the only platform with a configurable conflict resolution engine"
- Recommend alternative language that is defensible and actually stronger: "Nexora launches the fastest enterprise data synchronization engine, delivering sub-second latency across 40+ connectors" — this makes a specific, measurable claim that can be substantiated with benchmarks
- If the CEO insists on "first" language, legal must review and approve. The PR team should not publish the claim without documented evidence supporting it.

**Message 4 — Tactical Adjustment**
```
Good catch on the DataConnect Summit conflict. We can't move the launch date — engineering has already committed to the April 22 feature flag flip. How do we work around the conference overlap?
```

**Expected Response Elements:**
- Accept the constraint and adapt the social strategy to incorporate the conference
- Specific tactical plays:
  1. **Live-from-the-conference content**: Team members at DataConnect Summit post real-time reactions, conversations, and VaultSync tie-ins from the event floor. Use the conference hashtag to ride the wave of attention rather than compete with it.
  2. **Conference-targeted advertising**: Run LinkedIn sponsored posts targeting DataConnect Summit attendees and the "data integration" audience segment. Conference attendees check LinkedIn between sessions.
  3. **Shift the heavy social push to Week 2**: Move the most important LinkedIn content (CEO thought leadership, demo video, use case posts) to April 29-May 5, when the audience is back at their desks and processing what they learned at the conference.
  4. **Embargo the press release to April 27**: Keep the technical launch on April 22 (feature flag) but embargo the press release and major announcements until after the conference. This lets the product team launch on schedule while giving the comms team a cleaner media window.
  5. **Host a post-conference webinar**: "What we heard at DataConnect Summit — and how VaultSync addresses it." Combines timely conference takeaways with product positioning.
- The April 22-24 posts should be lighter, conference-aware content. Save the heavy-hitting assets for after the conference ends.

**Message 5 — Edge Case: Internal Readiness Gap**
```
You mentioned the support team isn't prepared. Our VP of Marketing says that's "a CS problem, not a launch problem" and doesn't want to delay the launch to create support materials. How do I push back?
```

**Expected Response Elements:**
- This is a launch problem because Enterprise customer experience during the first 7 days defines the product's reputation. Enterprise customers paying $2,400+/month expect immediate, competent support.
- The launch does not need to be delayed — the support readiness gap can be closed in the 3 weeks before launch with parallel workstreams:
  1. **FAQ document** (2-3 hours of work): Product team drafts the top 20 anticipated questions. Engineering reviews for accuracy. Support lead approves.
  2. **Escalation path** (1 hour): Define which VaultSync issues go to L1 support, which escalate to L2, and which go directly to the engineering on-call rotation.
  3. **Support team briefing** (1 hour): 30-minute product walkthrough + 30-minute Q&A session for the support team during the all-hands on April 21.
  4. **Canned responses**: Pre-written responses for the 5 most likely support scenarios (sync latency questions, connector configuration issues, conflict resolution errors, availability for non-Enterprise plans, upgrade path inquiries).
- The cost of not doing this: Enterprise customers who encounter issues during launch week will contact support, get slow or incorrect responses, form a negative first impression of VaultSync, and potentially post about it in community forums or social media — directly undermining the $120K launch investment.
- Frame it for the VP of Marketing: "Support readiness is launch quality assurance. We're spending $120K to drive demand. Spending 5 hours to ensure the post-click experience doesn't undermine that investment is the highest-ROI task on the launch plan."
- The CSM team should also be briefed and armed with proactive outreach templates to Enterprise customers, offering personalized VaultSync activation walkthroughs.
