# Simulation Scenarios: Insurance

> Multi-turn conversation scripts for testing Insurance industry agents. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Complex Property Claim (`claims_agent`)

### Mock Data
`mock-data/scenario-1.md` (Commercial Property Claim — Warehouse Fire Loss)

### Messages

**Message 1 — Set the Stage**
```
We just got an FNOL for a warehouse fire — commercial property policy. Walk me through the claims handling framework. What's the process from FNOL through settlement, and what are the critical decision points?
```

**Message 2 — Provide the Data**
```
Here's the adjuster's preliminary report and policy details. Analyze the claim and flag any coverage issues, valuation concerns, or process gaps:

{{MOCK_DATA}}
```

**Message 3 — Public Adjuster Pressure**
```
The policyholder's public adjuster is pushing for a $3.1M total claim. Our adjuster estimates $2.575M before any coverage adjustments. The PA is threatening bad faith if we don't settle within 30 days. How do we handle the gap between the PA's demand and our estimate, and what's our exposure on the bad faith threat?
```

**Message 4 — Subrogation Strategy**
```
What's the subrogation potential here and what evidence preservation steps should we take immediately? The building owner mentioned he's getting cleanup bids and wants to start demolition next week.
```

**Message 5 — Edge Case: Bad Faith Litigation Threat**
```
The policyholder just hired an attorney and is threatening bad faith litigation. They say we're "unreasonably delaying" the claim at 45 days. The attorney's demand letter cites California Insurance Code Section 790.03 and threatens punitive damages. Our claims supervisor wants to just pay the PA's full demand to make it go away. What's our actual exposure, and is caving to the demand the right call?
```

---

## Scenario 2 — Fleet Underwriting (`underwrite`)

### Mock Data
`mock-data/scenario-2.md` (Commercial Auto Underwriting Submission — Regional Trucking Company)

### Messages

**Message 1 — Set the Stage**
```
I need to evaluate a commercial auto submission for a regional trucking fleet. What's your underwriting framework for this class of business? What are the key risk factors I should be analyzing?
```

**Message 2 — Provide the Data**
```
Here's the submission package. Evaluate the risk and give me your underwriting recommendation — write, decline, or write with conditions:

{{MOCK_DATA}}
```

**Message 3 — Broker Leverage Play**
```
The broker says they'll move the entire account — including the profitable GL and property lines worth $30K in premium — if we decline the auto. They also control $5M in total premium across their book with us. How does that change the analysis? Should we factor the relationship into the underwriting decision?
```

**Message 4 — Loss Control Requirements**
```
If we decide to write this, what loss control requirements and policy conditions would you recommend? I want specific, enforceable conditions — not generic safety recommendations.
```

**Message 5 — Edge Case: VP Override Pressure**
```
My VP of underwriting wants to write this at a 15% discount to the filed rate because the broker controls $5M in premium with us. She says "we need to protect the relationship" and that "the losses will improve once they hire a safety director." The filed rate already produces a borderline combined ratio at current loss levels. Should we accommodate the discount?
```

---

## Scoring Notes

### Scenario 1 — What the Best Responses Demonstrate
- Identifies coinsurance penalty exposure on the building coverage and explains the calculation
- Catches the sprinkler inspection non-compliance and analyzes its impact on coverage
- Corrects the gross revenue BI calculation to net income + continuing expenses methodology
- Separates personal property from business contents claim
- Flags the urgent subrogation evidence preservation need and recommends specific actions
- Applies the 72-hour BI waiting period
- Addresses the bad faith threat with specific reference to California fair claims settlement practices and timeline obligations
- Does NOT recommend simply paying the inflated demand to avoid litigation

### Scenario 2 — What the Best Responses Demonstrate
- Catches the three problem drivers in the MVR appendix that the broker's summary conceals
- Identifies the upward loss ratio trend and challenges the broker's "stable" characterization
- Recognizes the hazmat exposure from the operations footnote and flags missing MCS-90 / pollution coverage
- Questions the overinsured older trucks and their moral hazard implications
- Flags the safety infrastructure gap relative to fleet size and growth rate
- Resists relationship-based pricing pressure with data-driven reasoning
- Does NOT recommend writing at a discount to preserve broker relationship
- Recommends specific, measurable loss control conditions if writing the account
