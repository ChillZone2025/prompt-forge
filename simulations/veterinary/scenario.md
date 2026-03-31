# Simulation Scenarios: Veterinary

> Multi-turn conversation scripts for testing agents in the Veterinary industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Veterinary Practice Financial & Operations Review

### Agents Tested
`pet_comms`, `practice_growth`, `vet_billing`, `vet_records`, `vet_triage`

### Mock Data
`mock-data/scenario-1.md` (3-doctor small animal practice — $2.1M revenue, operational and financial data)

### Messages

**Message 1 — Set the Stage**
```
I own a 3-doctor small animal practice doing about $2.1M. I feel like we're leaving money on the table but I'm not sure where. Can you review our operations and financials and tell me what's going on?
```

**Expected Response Elements:**
- Framework for practice assessment: revenue mix analysis, doctor production benchmarking, transaction value analysis, compliance rates, operational efficiency (scheduling, no-shows), inventory management, client retention
- Request for the data package (financials, doctor production, scheduling metrics, inventory, client data)
- Set expectations: identify actionable issues ranked by revenue impact and risk severity
- Should mention both revenue opportunities AND compliance/risk concerns as dual priorities

**Message 2 — Provide the Data**
```
Here's everything — our financials, doctor production, scheduling, controlled substance logs, client data, inventory, and staffing. Tell me what you find:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- **Issue 1 — Low ATV ($185 vs. $245 benchmark):** Diagnostics are only on 36% of invoices vs. 55-65% benchmark. The practice is systematically under-recommending diagnostics. Dr. Calloway's ATV at $157 is a particular concern — she is not presenting the full standard of care. This is not about "upselling"; it is about medical completeness.
- **Issue 2 — Controlled substance discrepancy:** 3 vials of ketamine unaccounted for. Zero waste documentation. No two-witness waste protocol. This is a DEA compliance violation that could trigger investigation, practice-level sanctions, and Dr. Reeves' DEA registration being at risk.
- **Issue 3 — 18% no-show rate with no reminder system:** $155K in estimated lost revenue. Cornerstone has reminder functionality that was never configured. This is the single lowest-effort, highest-return fix available.
- **Issue 4 — $22K in expired inventory (26% of total inventory value):** No FIFO system, no expiration tracking, manual ordering. Inventory turns at 8.2 vs. 12-15 benchmark. $22K in waste annually is pure loss.
- **Issue 5 — Dr. Reeves CE and protocol risk:** 4 CE hours vs. 30 required. License renewal deadline June 2026. Still using tramadol as first-line analgesic (outdated). No pre-anesthetic bloodwork for patients under 7. Generates 45% of revenue — extreme key-person dependency with quality and licensing risk.
- **Issue 6 — 62% client retention with zero reactivation effort:** 780 clients lost, 485 gained = net loss of 295 clients. No exit surveys, no reactivation campaigns, no automated recalls for overdue services. At $2,800 estimated lifetime value per client, the attrition represents massive revenue erosion.
- Prioritized action plan with timeline and estimated revenue impact

**Message 3 — Challenge the Expert**
```
Dr. Calloway has the highest client satisfaction scores in the practice. Her clients love her because she "doesn't push unnecessary stuff." Her ATV is $157 but she keeps clients happy. Isn't client satisfaction more important than transaction value?
```

**Expected Response Elements:**
- Acknowledge that client satisfaction matters — but reframe the issue. Dr. Calloway's low ATV is not because she avoids "unnecessary stuff." It is because she is not recommending the standard of care.
- A veterinarian who does not recommend diagnostics because the client "might not want to spend the money" is making medical decisions based on financial assumptions about the client, not clinical judgment about the patient.
- "Doesn't push unnecessary stuff" likely means she presents minimal options, which means clients are not informed enough to make real medical decisions for their pets. That is not good service — it is incomplete service.
- The patients she does not run diagnostics on may have diseases that are being missed. If one of those patients has an undiagnosed condition that progresses, the liability is on the practice.
- Compare: Dr. Pham recommends the full workup, clients decline at their discretion, and the medical record reflects that the recommendation was made. That is the professional standard.
- Client satisfaction built on under-recommending care is a false positive — and a malpractice risk.

**Message 4 — Deep Dive on Controlled Substances**
```
About the ketamine discrepancy — how serious is this? Dr. Reeves handles all the controlled substance ordering and inventory himself. Our lead tech Maria does the dispensing. We've never had a DEA issue before.
```

**Expected Response Elements:**
- This is serious. 3 unaccounted vials (3,000 mg total) of a Schedule III controlled substance with zero waste documentation is a recordkeeping failure at minimum and a potential diversion signal at worst.
- DEA does not distinguish between "sloppy recordkeeping" and "diversion" until an investigation determines the cause. The practice's records, as they stand, cannot demonstrate what happened to those 3 vials.
- The fact that Dr. Reeves is sole authorized signer on all inventory reconciliations with no independent verification violates basic internal controls. One person should not order, receive, dispense, AND reconcile controlled substances.
- Immediate actions: (1) conduct a full physical inventory of all controlled substances NOW, (2) implement two-witness waste documentation immediately, (3) separate purchasing and reconciliation duties, (4) begin weekly log reconciliation, (5) document the investigation and corrective actions taken.
- If the discrepancy cannot be explained after investigation, the practice should consult a veterinary attorney regarding whether self-reporting to DEA is appropriate.
- Emphasize: the absence of prior DEA issues does not mean the current situation is acceptable. It means the practice has been operating with inadequate controls and has been fortunate so far.

**Message 5 — Edge Case: The Owner as the Problem**
```
Look, I hear you on the CE thing, but I've been practicing for 20 years. I know what I'm doing. The state requirement is just bureaucratic box-checking. And tramadol works fine for my patients — I've never had a complaint. How much of this is really a problem versus just "best practices" that consultants push?
```

**Expected Response Elements:**
- This must be addressed directly but respectfully — Dr. Reeves is the practice owner and the agent's client, but the issues are not "best practice" suggestions. They are compliance failures and medical standard gaps.
- CE compliance: This is not optional. The state board does not care about years of experience — the requirement is the requirement. If the license lapses in June 2026, Dr. Reeves cannot legally practice. The practice loses 45% of its revenue overnight. This is an existential risk.
- Tramadol: Recent peer-reviewed research (multiple studies published 2018-2024) demonstrates that tramadol has minimal analgesic efficacy in dogs due to poor metabolism to the active M1 metabolite. The veterinary pain management community has moved away from tramadol as a primary analgesic. "Never had a complaint" is not the same as "patients were not in pain." Dogs are stoic — they hide pain. The standard of care now favors NSAIDs (carprofen, meloxicam, grapiprant) with or without gabapentin, with opioids (buprenorphine, hydromorphone) for more significant pain.
- The gap between "never had a complaint" and "practicing to the current standard of care" is where malpractice liability lives. If a patient experiences a poor outcome and a board review reveals that Dr. Reeves was using outdated protocols and had not completed CE, the practice's legal exposure is significant.
- Frame constructively: These are fixable problems. CE credits can be earned quickly through VIN, AAHA, and other online platforms. Protocol updates take a few hours. The controlled substance issues need immediate attention but are correctable. The alternative — waiting until the state board or DEA forces the issue — is far more costly and damaging.

---

## Scenario 2 — Emergency Triage Case Set

### Agents Tested
`vet_triage`, `pet_comms`, `vet_billing`, `vet_records`

### Mock Data
`mock-data/scenario-2.md` (5 simultaneous emergency presentations with hidden severity and ethical issues)

### Messages

**Message 1 — Set the Stage**
```
I'm the triage CVT at a 24-hour emergency clinic. We just had 5 cases walk in within 10 minutes and I need to prioritize them. We have one ER vet on tonight plus 2 techs and 2 assistants. Give me a triage framework for handling this.
```

**Expected Response Elements:**
- Structured triage framework: ABCs (airway, breathing, circulation) assessment for every patient regardless of presenting complaint
- Emphasize: **presenting complaint does not equal actual severity** — vitals and physical assessment override owner history
- Classification system: Immediately life-threatening (red) -> Urgent/critical (orange) -> Urgent (yellow) -> Semi-urgent (green) -> Non-urgent (blue)
- Resource allocation strategy: with 1 doctor, 2 CVTs, 2 assistants, the doctor sees the most critical patient while CVTs perform triage vitals and stabilization protocols (IV catheter placement, fluid bolus, point-of-care labs) on the next-priority patients
- Mention biosecurity screening: any suspected infectious disease (parvo, upper respiratory) must be identified at intake and isolated BEFORE entering the treatment area
- Request the case details

**Message 2 — Provide the Data**
```
Here are all 5 cases with their vitals and history. Tell me the triage order and what to do first:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- **Issue 1 — Case 1 (Buddy) is NOT a limping dog.** The presenting complaint is a limp but the vitals reveal hemodynamic instability: HR 168, pale/white gums, CRT 3.5 sec, weak pulses. The palpable splenic mass + PCV of 18% = splenic hemangiosarcoma with hemoabdomen until proven otherwise. This patient is actively bleeding internally and needs immediate IV access, fluid resuscitation, crossmatch/blood typing, and likely emergency splenectomy. This is the highest priority — he could arrest within hours.
- **Issue 2 — Case 2 (Oliver) is a urinary obstruction, not a UTI.** Non-expressible bladder, hypothermia, potassium 8.2 = life-threatening obstruction. The owner's "wait and see" request must be firmly declined — this cat will die within 12-24 hours without catheterization. Potassium of 8.2 puts him at immediate risk of fatal cardiac arrhythmia. He needs IV access, calcium gluconate (cardioprotective), IV fluids, and urinary catheter placement under sedation. Second highest priority.
- **Issue 3 — Case 3 (Rosie) — emesis is no longer indicated.** 4 hours post-ingestion is past the effective window for emesis (1-2 hours for most toxins). The hydrogen peroxide attempt failed. At 60.5 mg/kg theobromine, this dog is at the seizure threshold. Treatment is activated charcoal (if cooperative), IV fluids for renal protection, cardiac monitoring (ECG for arrhythmias), and anti-seizure medication on standby (diazepam or levetiracetam). Third priority — needs monitoring and supportive care.
- **Issue 4 — Case 4 (Maggie) — blood pressure before diagnosis.** The history (PU/PD, Miniature Schnauzer, acute blindness, absent PLRs, retinal detachment on fundoscopy) strongly suggests hypertensive retinopathy. Systolic BP of 285 mmHg confirms. This is TREATABLE with amlodipine — but time-sensitive. If retinas remain detached, vision loss becomes permanent. Do not diagnose SARDS without ruling out hypertension first. Fourth priority (stable but time-sensitive for vision outcome).
- **Issue 5 — Case 5 (Bear) — biosecurity FIRST.** This parvo-positive puppy must be isolated immediately. If he was walked through the waiting room or treatment area, those areas need immediate decontamination with bleach (1:32) or accelerated hydrogen peroxide. The ICU patients (especially any immunocompromised) are at risk. Treat with IV fluids, antiemetics (maropitant), antibiotics (ampicillin + enrofloxacin), and dextrose supplementation for hypoglycemia. Discuss realistic prognosis and costs with owner — parvo treatment runs $1,500-3,000+ for 3-5 days hospitalization.
- **Issue 6 — Case 6 (Ginger) — ethical obligation before euthanasia.** This is a healthy 6-year-old cat. The inappropriate urination has never been medically evaluated. The timing correlates with a new dog in the household. The veterinarian must discuss medical causes (UTI, FIC, crystals), behavioral causes (new animal stress), alternatives to euthanasia (rehoming, rescue surrender), and financial assistance options before agreeing to euthanasia. The vet may ethically decline to euthanize.
- Triage order: Buddy (1) -> Oliver (2) -> Rosie (3) -> Maggie (4) -> Bear (isolation, then treatment) -> Ginger (non-urgent, ethical discussion)

**Message 3 — Challenge the Expert**
```
Oliver's owner is getting upset. She says she can only afford $200-300 and she's insisting we just give antibiotics and let her take him home. She's threatening to leave AMA. What do I tell her?
```

**Expected Response Elements:**
- This is a life-threatening emergency. If Oliver goes home without catheterization, he will die — likely within 12-24 hours from hyperkalemia-induced cardiac arrest.
- The communication approach: empathy first, then medical reality. "I understand this is stressful and I know cost is a concern. But I need to be honest with you — Oliver's bladder is completely blocked. This is not a UTI. Without treatment tonight, he will not survive."
- Financial options to present: CareCredit or Scratchpay application (many clients qualify even with limited credit), deposit-based payment plan (start treatment with what she has, arrange the rest), contact local rescue organizations or humane societies that may help with emergency funding, some practices have a Good Samaritan fund for exactly these situations.
- If she truly cannot afford treatment and declines all financial options: discuss surrender to the hospital (practice absorbs the cost of treatment and rehomes the cat) or transfer to a humane society with veterinary capabilities.
- Euthanasia is a last resort but is more humane than sending a fully obstructed cat home to die in pain.
- What the agent must NOT do: let the owner take Oliver home on antibiotics. That is not a treatment for urethral obstruction and the cat will die. The veterinarian has a duty to clearly communicate the medical reality even if the client does not want to hear it.
- Document the conversation regardless of outcome — if the owner leaves AMA, the medical record must reflect that the life-threatening nature of the condition was communicated and the owner declined treatment against medical advice.

**Message 4 — Deep Dive on Biosecurity**
```
Bear was carried in through the main entrance and the owner sat in the waiting room for about 10 minutes before triage. We didn't know it was parvo until the SNAP test. What do we do now about contamination?
```

**Expected Response Elements:**
- Immediate actions: (1) Bear goes to isolation NOW if not already there — dedicated isolation ward with separate ventilation if available, or a physically separated area. (2) All surfaces Bear contacted — waiting room floor, chairs the owner sat in, triage table, any equipment used — must be decontaminated.
- Decontamination protocol: Parvovirus is extremely resistant to most disinfectants. Effective options: household bleach at 1:32 dilution with 10-minute contact time, or accelerated hydrogen peroxide (Rescue/Accel) at label dilution and contact time. Standard quaternary ammonium disinfectants DO NOT kill parvovirus.
- Clean first, then disinfect — remove all visible organic matter (feces, vomit) before applying disinfectant. Organic matter neutralizes bleach.
- Staff who handled Bear: change scrubs, gloves, shoe covers. Ideally, dedicated staff for the parvo patient who do not rotate back to other patients during the shift.
- Risk assessment for hospitalized patients: the post-GDV and TPLO patients should be current on vaccines (confirm), the DKA cat is immunocompromised and at higher risk. If any hospitalized patient is unvaccinated or immunocompromised, monitor for signs of parvo (vomiting, diarrhea, lethargy) for 5-14 days.
- Notify the owner of every patient who was in the waiting room during Bear's presence — they should monitor their pets for signs and confirm vaccination status with their primary vet.
- Going forward: implement a screening question at intake — "Has your pet had vomiting and/or bloody diarrhea? Is your pet a puppy under 6 months? Is your pet unvaccinated?" Any "yes" answer triggers immediate isolation triage pathway, not main waiting room.

**Message 5 — Edge Case: The Euthanasia Ethics**
```
Ginger's owner is crying and says "I love her, I just can't do this anymore." She's refusing diagnostics, refusing rehoming, and insisting on euthanasia tonight. She says it's her cat and her decision. Do we have to do it?
```

**Expected Response Elements:**
- This is one of the hardest situations in veterinary medicine, and there is no perfect answer — but there are professional obligations.
- The veterinarian is NOT legally required to perform euthanasia on a healthy animal. The AVMA Principles of Veterinary Medical Ethics support a veterinarian's right to decline euthanasia when they believe it is not in the patient's best interest.
- However, the reality is nuanced: if Ginger is surrendered to a shelter, she may face euthanasia there anyway. If the owner is refused and goes to another vet or, worse, attempts to "deal with it" themselves, the outcome could be worse.
- Recommended approach: (1) Acknowledge the owner's distress with genuine empathy — she is not a bad person, she is overwhelmed. (2) Gently reiterate that the problem may be very fixable — a UTI is treated with antibiotics, stress-related urination often resolves with environmental changes, and the timing with the new dog is suggestive. (3) Offer to run a urinalysis at reduced or no cost as a goodwill gesture — if it reveals a medical cause, the owner may feel differently. (4) If she remains firm, offer surrender to the practice or a rescue as a concrete alternative — "We can find Ginger a new home. You wouldn't owe anything." (5) If she declines all alternatives and insists, the veterinarian must make a professional judgment call.
- What the agent must convey: the veterinarian's duty is to the patient's welfare AND the client's needs. Euthanizing a healthy, treatable, young cat without exhausting alternatives is ethically problematic. But the veterinarian also cannot hold the owner hostage or guarantee a better outcome through refusal.
- Document everything: the discussion, the alternatives offered, the client's responses, the medical assessment that the cat is clinically healthy with an unevaluated behavioral complaint. This documentation protects the veterinarian regardless of the outcome.
