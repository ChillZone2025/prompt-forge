# Simulation Scenarios: Architecture & Engineering

> Multi-turn conversation scripts for testing all 5 agents in the Architecture & Engineering industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Cost Estimate Review (tests `cost_est`, `spec_review`)

### Mock Data
`mock-data/scenario-1.md` (Mixed-use development cost estimate package)

### Messages

**Message 1 — Set the Stage**
```
We received the GC's cost estimate for our mixed-use project — 5 stories, retail ground floor, 40 residential units above, below-grade parking. We're at 60% DD and need to present the budget to the client next week. What should I check before I present this estimate as reliable?
```

**Message 2 — Provide the Data**
```
Here's the full estimate package from the GC, including their CSI breakdown, the three bids we received, and the VE options they proposed. Review it and flag any concerns before I send it to the client:

{{MOCK_DATA}}
```

**Message 3 — Challenge a Specific Finding**
```
The GC's project manager says 3% contingency is appropriate because "they've built 20 of these" and know exactly what it costs. He says the other bidders are padding their numbers with inflated contingencies. Should I accept that logic and present the lower number to the client?
```

**Message 4 — Value Engineering Decision**
```
The client wants to cut $400K from the budget. The GC proposed the VE options in the estimate. Which of those are real savings that won't come back as change orders, and which ones will cause problems? I need to give the client a recommendation this week.
```

**Message 5 — Edge Case: Fast-Track Pressure**
```
The client wants to start construction next month while we finalize the design documents to "save time on the schedule." They want to issue an early release package for foundations and below-grade work while we finish the upper floors design. The GC says this is normal and they do it all the time. What are the risks I need to communicate to the client?
```

---

## Scenario 2 — RFI & Submittal Review (tests `rfi_drafter`, `site_report`, `proj_coord`)

### Mock Data
`mock-data/scenario-2.md` (Hospital renovation RFI log and submittal package)

### Messages

**Message 1 — Set the Stage**
```
I'm managing a hospital renovation — converting an admin floor to a 24-bed patient care unit. We're in month 4 of 10, doing structural and MEP rough-in. The RFI and submittal backlog is getting out of hand and I'm losing track of what's critical versus what can wait. How should I prioritize the open items?
```

**Message 2 — Provide the Data**
```
Here's the current RFI log and the 5 pending submittals that need review. Tell me what needs immediate attention and what I can safely push to next week:

{{MOCK_DATA}}
```

**Message 3 — Challenge a Contractor Claim**
```
The contractor says the A36 steel substitution is "equivalent" to A992 and doesn't need structural engineer review. He says A36 has been used in hospitals for decades and the structural members are sized conservatively. He wants me to approve the submittal so fabrication can start Monday. Is he right? Can I approve this without sending it to the EOR?
```

**Message 4 — Schedule Pressure with Life Safety Implications**
```
We're 3 weeks behind schedule because of unresolved RFIs and the asbestos discovery. The hospital administrator wants to accelerate by overlapping Phase 1 finishing work and Phase 2 demolition at the same time in adjacent areas. She says the construction barrier is adequate and patients won't be affected. What are the life safety and infection control concerns I need to raise?
```

**Message 5 — Edge Case: Pressure to Rubber-Stamp**
```
The contractor is threatening to file a delay claim for the unanswered RFIs — specifically RFI-007 which has been open 23 days. Our principal says to just approve all the open submittals and respond to all the RFIs with "approved" or "proceed as proposed" to kill the delay claim. He says we can always issue corrections later via addendum. What should I do?
```

---

## Scenario Coverage Matrix

| Agent | Scenario | Primary Messages | Skills Tested |
|-------|----------|-----------------|---------------|
| `cost_est` | 1 | Msg 2, 3, 4 | Budget analysis, contingency evaluation, VE assessment, scope gap identification, RSMeans benchmarking |
| `spec_review` | 1 | Msg 2, 5 | CSI division review, spec-to-drawing consistency, code compliance, accessibility requirements |
| `rfi_drafter` | 2 | Msg 2, 3, 5 | RFI prioritization, response drafting, contractual timeline tracking, claim exposure assessment |
| `site_report` | 2 | Msg 4 | Field condition documentation, life safety in occupied buildings, ICRA classification, phasing risks |
| `proj_coord` | 2 | Msg 1, 2, 4, 5 | Multi-discipline coordination, schedule impact analysis, submittal review workflow, stakeholder communication |
