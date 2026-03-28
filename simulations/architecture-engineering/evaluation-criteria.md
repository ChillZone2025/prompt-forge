# Evaluation Criteria: Architecture & Engineering

## Overview

These criteria evaluate whether Architecture & Engineering agents demonstrate genuine construction industry knowledge — the kind that separates a licensed professional from someone who read a textbook. A practicing architect, PE, or construction manager should read the agent's output and think "this person has been through a set of CDs and survived CA."

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate

- **Code compliance awareness** — Reference specific code sections (IBC Chapter 10 for egress, Chapter 7 for fire resistance, ASHRAE 90.1 for energy) rather than generic statements about "meeting code." Know which edition applies and how local amendments modify the model code.
- **Interdisciplinary coordination** — Recognize that architectural, structural, and MEP systems share the same physical space. Flag conflicts between disciplines and recommend coordination methods (BIM clash detection, overlay reviews, joint RFI responses).
- **Documentation standards** — Know CSI MasterFormat division numbers, understand the relationship between drawings and specifications, reference AIA contract document provisions when discussing responsibilities and procedures.
- **Cost awareness** — Benchmark estimates against RSMeans or comparable data. Understand the relationship between design phase completion and appropriate contingency levels. Identify scope gaps and suspicious bid spreads.
- **Schedule management** — Connect design decisions and RFI response times to critical path impacts. Understand that delays compound and change orders have both cost and time dimensions.
- **Life safety priority** — Fire ratings, egress, accessibility, structural adequacy, and infection control (in healthcare) are non-negotiable. Never recommend cost savings that compromise life safety. Never approve substitutions without verifying code compliance.

### Must Never

- Approve material substitutions without engineering review when the substitution affects structural capacity, fire rating, or energy code compliance.
- Accept a contractor's claim that something is "equivalent" without independent verification against the specification and applicable codes.
- Recommend "approving everything" to avoid delay claims — this transfers liability and creates life-safety exposure.
- Respond to RFIs with "per plans and specs" when the plans and specs are ambiguous or contradictory (this is the whole reason the RFI was submitted).
- Ignore contingency adequacy based on a contractor's subjective confidence ("we've built 20 of these").
- Recommend fast-tracking construction before design is complete without clearly articulating the specific risks (not just generic "it could cost more").
- Dismiss code compliance concerns as "administrative" or "we can fix it later."
- Rubber-stamp submittals without verifying compliance with both the specification and the applicable building code.

## Agent-Specific Criteria

### Cost Estimator (`cost_est`)

- Identifies scope gaps by cross-referencing CSI divisions against project requirements (e.g., missing Division 31 earthwork on a project with below-grade construction).
- Benchmarks unit costs against RSMeans data with appropriate city cost index and escalation adjustments.
- Evaluates bid spread — flags when one bidder is significantly below others for a specific scope and investigates why (scope exclusion, not low efficiency).
- Assesses contingency adequacy relative to design phase completion: 15-20% at SD, 10-15% at DD, 5-7% at CD, 3-5% at GMP.
- Distinguishes between real value engineering (maintaining function at lower cost) and cost-cutting that will return as change orders.
- Identifies missing escalation factors on projects with construction durations exceeding 6 months.
- Evaluates allowances and confirms they are adequate for the undefined scope they represent.

**Scenario 1 Planted Issues This Agent Must Catch:**
- Issue 1: General conditions at 6% vs. industry 10-14%
- Issue 2: No escalation factor on 14-month schedule
- Issue 3: HVAC bid 30% below competitors (scope gap)
- Issue 4: 3% contingency at 60% DD
- Issue 5: No site work/earthwork line item despite below-grade construction with groundwater

### Specification Reviewer (`spec_review`)

- Cross-references spec sections against drawings for consistency (e.g., spec calls for one product, drawings detail another).
- Verifies applicable code editions — knows that the code in effect at time of permit application governs, not the code at design start.
- Identifies accessibility compliance requirements — knows when Fair Housing Act, ADA, or ICC/ANSI A117.1 apply based on occupancy type and building configuration.
- Checks that spec sections reference current standards (ASTM, NFPA, ASHRAE) and not superseded editions.
- Flags coordination gaps between divisions (e.g., Division 08 hardware requiring Division 26 power that isn't shown on electrical drawings).
- Verifies fire-rated assembly compliance — references UL assembly numbers, understands through-penetration firestopping requirements.

**Scenario 1 Planted Issues This Agent Must Catch:**
- Issue 6: ADA/Fair Housing accessibility costs not itemized (all 40 units must be Type B accessible because building has elevator)

### RFI Drafter (`rfi_drafter`)

- Prioritizes RFIs by schedule impact — identifies which open RFIs are blocking critical path work versus which can wait.
- Tracks RFI response timelines against contractual requirements and flags overdue responses as delay claim exposure.
- Drafts RFI responses that reference specific drawing sheets, spec sections, and code provisions — not vague directives.
- Recognizes when an RFI reveals a coordination failure requiring multiple disciplines to resolve (structural + MEP for beam/duct conflicts).
- Understands that "proceed as proposed" responses carry liability — the responder is endorsing the contractor's interpretation.
- Flags RFIs that are actually substitution requests or change order requests disguised as information requests.

**Scenario 2 Planted Issues This Agent Must Catch:**
- Issue 1: RFI-007 open 23 days (contract requires 7-day response) — delay claim exposure

### Site Reporter (`site_report`)

- Documents field conditions with specificity — references drawing numbers, spec sections, room numbers, and compass directions rather than vague descriptions.
- Understands ICRA (Infection Control Risk Assessment) classification for healthcare construction — Class IV requires sealed barriers, negative pressure, HEPA filtration, and anteroom.
- Identifies life-safety risks in phased construction within occupied buildings — fire barrier integrity, egress path maintenance, smoke compartment compliance.
- Flags newly discovered existing conditions (asbestos, structural deficiencies, concealed utilities) and recommends appropriate investigation/remediation procedures.
- Distinguishes between conditions requiring immediate work stoppage (life safety) and conditions requiring documentation and design response (coordination issues).

**Scenario 2 Planted Issues This Agent Must Catch:**
- Overlap of Phase 1/Phase 2 in occupied hospital creates ICRA and life safety risks
- Asbestos discovery (RFI-012) requires licensed abatement contractor and regulatory notification

### Project Coordinator (`proj_coord`)

- Manages submittal review workflow — knows the sequence (contractor submits → architect logs → routes to appropriate consultant → returns with action).
- Identifies which submittals require EOR or specialty consultant review versus which can be reviewed by the architect directly.
- Tracks schedule impacts of submittal review cycles — a rejected submittal with 8-week material lead time has different urgency than a rejected paint color.
- Coordinates between disciplines when an issue spans multiple trades (structural beam conflict with MEP ductwork requires structural engineer AND MEP engineer).
- Communicates risks to stakeholders in plain language without either minimizing or catastrophizing.
- Understands contractual implications of submittal actions — "Approved" means the reviewer has verified compliance; stamping "Approved" on a non-compliant submittal transfers liability.

**Scenario 2 Planted Issues This Agent Must Catch:**
- Issue 2: A36 vs A992 steel — must go to EOR, cannot be approved by architect
- Issue 3: NFPA 13-2016 vs 2022 edition — wrong code year
- Issue 4: Elevator VFD substitution fails energy code
- Issue 5: Wall covering fails Class A flame spread requirement

## Planted Issues Cross-Reference

### Scenario 1 — Cost Estimate (mock-data/scenario-1.md)

| Issue # | Description | Which Agent Should Catch | Severity |
|---------|-------------|--------------------------|----------|
| 1 | General conditions at 6% — industry standard 10-14% | `cost_est` | High — budget will overrun |
| 2 | No escalation factor on 14-month schedule | `cost_est` | High — $200K+ exposure |
| 3 | HVAC bid 30% below competitors — scope gap in ductwork insulation and controls | `cost_est` | High — $200K+ change order |
| 4 | 3% contingency at 60% DD — should be 10-15% | `cost_est` | Critical — budget will overrun |
| 5 | No site work/earthwork despite below-grade construction with groundwater at 12' | `cost_est` | Critical — $400K-$700K gap |
| 6 | ADA/Fair Housing accessibility costs not itemized — all 40 units must be Type B | `spec_review` | High — failed inspections, retrofit costs |

### Scenario 2 — RFI & Submittal Review (mock-data/scenario-2.md)

| Issue # | Description | Which Agent Should Catch | Severity |
|---------|-------------|--------------------------|----------|
| 1 | RFI-007 open 23 days — contract requires 7-day response, delay claim exposure | `rfi_drafter`, `proj_coord` | Critical — legal/contractual |
| 2 | Structural steel A36 vs specified A992 — 28% lower yield strength | `proj_coord`, `spec_review` | Critical — structural safety |
| 3 | Fire protection designed per NFPA 13-2016, project requires 2022 | `proj_coord`, `spec_review` | High — code violation, HCAI rejection |
| 4 | Elevator VFD substitution fails ASHRAE 90.1 energy code | `proj_coord`, `cost_est` | Medium-High — code compliance |
| 5 | Wall covering FSI of 45 fails Class A requirement (FSI ≤ 25) — hospital occupancy | `proj_coord`, `spec_review` | Critical — fire code violation in hospital |

## Red Flags in Agent Responses

The following responses should result in automatic score reduction:

- **Approving A36 steel without EOR review** — This is a structural safety issue. The architect does not have authority to approve structural substitutions. Recommending approval without engineering review is professionally negligent.
- **Accepting 3% contingency at 60% DD** — Any response that validates a 3% contingency at this design stage demonstrates fundamental misunderstanding of construction cost management.
- **Dismissing the NFPA edition discrepancy** — "The requirements haven't changed much" is the contractor's argument, not an independent assessment. The agent must verify against the actual code editions.
- **Approving submittals to avoid delay claims** — This is the "approve everything" trap. Approving non-compliant submittals to avoid a delay claim creates far larger liability — the reviewer is now responsible for every non-compliant item they stamped.
- **Recommending fast-track without risk disclosure** — Fast-tracking with incomplete design is a legitimate strategy but requires clear risk communication. An agent that says "sure, just start" without discussing scope gaps, change order exposure, and redesign risk is dangerous.
- **Ignoring life safety in schedule acceleration** — Overlapping construction phases in an occupied hospital without addressing ICRA, ILSM, fire barriers, egress, and infection control is a patient safety issue.
- **Treating the elevator substitution as purely a cost decision** — The energy code compliance issue makes this a code question, not a cost question. Missing the regulatory dimension is a significant gap.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | Licensed-professional caliber. Catches all planted issues, references specific codes and standards by section number, provides actionable recommendations with clear rationale, maintains appropriate professional boundaries (routes structural questions to EOR, fire questions to fire protection engineer). A PE or RA would trust this output. |
| 7-8 | Solid practitioner. Catches most planted issues (4-5 of 6 in Scenario 1, 4 of 5 in Scenario 2). Correct code awareness and procedural knowledge. Recommendations are sound but may lack specificity in code references or cost quantification. |
| 5-6 | Junior-level knowledge. Gets the direction right on major issues but misses subtleties. May catch the obvious scope gap (HVAC bid spread) but miss the regulatory issue (Fair Housing Act). Uses generic language instead of specific code references. |
| 3-4 | Generic project management advice. Could apply to any industry. Doesn't reference specific codes, CSI divisions, or AIA contract provisions. Misses half or more of the planted issues. |
| 1-2 | Wrong or dangerous advice. Approves non-compliant substitutions, validates inadequate contingency, recommends rubber-stamping submittals, or ignores life safety concerns. Would create liability for any firm that followed this advice. |

## Pass Thresholds

- **Tier 2 (Conversation Test):** Minimum 7.0/10
- **Tier 3 (Full Simulation):** Minimum 8.0/10
