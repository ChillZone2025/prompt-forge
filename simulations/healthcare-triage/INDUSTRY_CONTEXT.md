# Industry Context: Healthcare — Triage

## What This Industry Does

Clinical triage is the process of assessing patients' symptoms and clinical presentation to determine the urgency and appropriate level of care. It occurs in emergency departments (ED triage), telephone nurse lines, urgent care clinics, primary care offices, and increasingly through telehealth and AI-assisted intake platforms. Triage is not diagnosis — it is the systematic evaluation of symptoms to determine how quickly the patient needs to be seen and where they should be routed.

Triage nurses and clinical staff apply standardized protocols (Schmitt-Thompson telephone triage guidelines, Emergency Severity Index, Manchester Triage System) to evaluate chief complaints, vital signs, symptom patterns, medical history, and medication profiles. They make time-sensitive decisions that directly impact patient outcomes: under-triaging a chest pain patient as "non-urgent" can result in a cardiac death in the waiting room; over-triaging a minor complaint to the ED wastes resources and increases wait times for truly sick patients.

The work requires broad clinical knowledge across all body systems, strong assessment skills, awareness of drug interactions and contraindications, understanding of red flag symptoms that indicate medical emergencies, and the judgment to know when a patient's subjective report doesn't match objective clinical indicators. Triage staff are often the first clinical contact a patient has — their assessment sets the trajectory of care. A missed drug interaction during triage can be just as fatal as a missed heart attack.

## Key Tools & Platforms

### Triage Protocol Systems
- **Schmitt-Thompson Clinical Content** — The gold standard telephone/telehealth triage protocols. Dr. Barton Schmitt (pediatric) and Dr. David Thompson (adult) protocols. Decision-tree format covering 500+ symptom-based guidelines. Used by 90%+ of nurse triage call centers in the US. Licensed through multiple software platforms.
- **ClearTriage** — Cloud-based triage software implementing Schmitt-Thompson protocols. Nurse-friendly interface, symptom search, protocol navigation, documentation, disposition tracking. Integrates with major EHRs.
- **Fonemed** — Telehealth triage services and software. 24/7 nurse triage outsourcing. Protocol-driven symptom assessment with documentation.
- **TriageLogic** — Nurse triage services and software platform. Implements Schmitt-Thompson protocols. Provides outsourced after-hours triage for practices.
- **MyNurse** — After-hours nurse triage service using standardized protocols with EHR documentation.

### Electronic Health Records (EHR)
- **Epic** — Market leader for large health systems. Epic MyChart for patient portal, Nurse Triage module, InBasket for provider communication, BestPractice Alerts for clinical decision support. Covers 45%+ of US hospital beds.
- **Cerner (now Oracle Health)** — Second-largest EHR. PowerChart for clinical documentation, FirstNet for ED. Strong in federal/VA systems.
- **MEDITECH** — EHR for community hospitals. Web-based Expanse platform. Emergency department and triage modules.
- **athenahealth** — Cloud-based EHR for ambulatory practices. Patient communication, telehealth, clinical workflows.

### Clinical Decision Support
- **UpToDate (Wolters Kluwer)** — Evidence-based clinical decision resource. Drug information, diagnostic algorithms, treatment recommendations. The most widely used clinical reference by physicians and nurses. 80+ specialties.
- **Isabel Healthcare DDx** — Differential diagnosis generator. Enter symptoms → get ranked differential diagnoses with associated red flags. Used as a clinical decision support tool, not for direct patient interaction.
- **VisualDx** — Clinical decision support with image-based diagnosis. Dermatology, infectious disease, emergency medicine. Photo comparison for rashes, lesions, presentations.
- **Lexicomp (Wolters Kluwer)** — Drug information database: dosing, interactions, IV compatibility, patient education. Integrated into many EHRs.
- **Epocrates** — Point-of-care drug reference: interaction checker, pill identifier, formulary information. Mobile-first. Free basic version widely used by clinicians.
- **Micromedex (IBM/Merative)** — Comprehensive drug information: evidence-based dosing, interactions, toxicology, IV compatibility. Hospital pharmacy standard.

### Patient Communication
- **Klara** — Patient communication platform: secure messaging, appointment reminders, intake forms, telehealth. HIPAA-compliant.
- **Luma Health** — Patient engagement: scheduling, reminders, referral management, waitlist, recall. Integrates with major EHRs.

## Key Frameworks & Standards

### Triage Systems
- **ESI (Emergency Severity Index) Version 4** — The standard US ED triage system. 5-level acuity scale:
  - ESI 1: Immediate (resuscitation) — life-threatening, requires immediate intervention
  - ESI 2: Emergent — high risk, confused/lethargic/disoriented, or severe pain/distress
  - ESI 3: Urgent — stable but needs multiple resources (labs, imaging, IV medications)
  - ESI 4: Less urgent — needs one resource (X-ray OR labs OR simple procedure)
  - ESI 5: Non-urgent — needs no resources (prescription refill, suture removal)
- **Manchester Triage System (MTS)** — UK/European 5-level triage system using flowchart-based discriminators for 52 presenting complaints. Color-coded: Red (immediate), Orange (very urgent), Yellow (urgent), Green (standard), Blue (non-urgent).
- **Canadian Triage and Acuity Scale (CTAS)** — 5-level scale used in Canadian EDs. Similar to ESI but with specific time-to-physician targets per level: CTAS 1 (immediate), CTAS 2 (<15 min), CTAS 3 (<30 min), CTAS 4 (<60 min), CTAS 5 (<120 min).
- **Schmitt-Thompson Dispositions** — Telephone/telehealth triage disposition levels: 911 Now, ED Now, ED/Urgent Care within hours, Office visit today, Office visit within 24-72 hours, Home care.

### Clinical Standards
- **EMTALA (Emergency Medical Treatment and Labor Act)** — Federal anti-dumping law. Any patient presenting to an ED must receive a medical screening examination (MSE) regardless of ability to pay. If an emergency medical condition exists, the hospital must stabilize the patient before transfer or discharge. EMTALA violations carry civil money penalties ($50K-$100K per violation) and potential Medicare exclusion.
- **Joint Commission Standards** — Accreditation standards for hospitals: patient safety goals, medication management, infection prevention, emergency management, patient rights. LD (Leadership), PC (Provision of Care), MM (Medication Management) chapters directly affect triage.
- **CMS Conditions of Participation (CoPs)** — Federal requirements for hospitals participating in Medicare/Medicaid: patient rights, medical records, pharmaceutical services, nursing services, emergency services. Non-compliance can lead to Medicare decertification.
- **AHRQ Patient Safety Indicators** — Agency for Healthcare Research and Quality measures for hospital safety: pressure ulcers, falls, wrong-site surgery, foreign body retained. Used for quality measurement and public reporting.

### Medication Safety
- **Beers Criteria (AGS)** — American Geriatrics Society list of potentially inappropriate medications for older adults (65+). Organized by condition-independent, condition-dependent, and drug-drug interactions to avoid. Updated every 3-4 years.
- **ISMP High-Alert Medications** — Institute for Safe Medication Practices list of medications that carry a heightened risk of significant harm when used in error: anticoagulants, insulin, opioids, chemotherapy, concentrated electrolytes.
- **FDA Black Box Warnings** — Strongest FDA warning for medications with serious or life-threatening risks. Required on labeling and prescribing information.

## Regulatory Landscape

- **EMTALA (42 USC §1395dd)** — Emergency Medical Treatment and Labor Act. Requires hospitals with emergency departments to screen all patients and stabilize emergency conditions regardless of payment. "Anti-dumping" law. Violations: $50K-$100K CMP per violation, physician CMP up to $50K, potential exclusion from Medicare.
- **HIPAA (Health Insurance Portability and Accountability Act)** — Privacy Rule: limits use/disclosure of PHI without patient authorization. Security Rule: administrative, physical, and technical safeguards for ePHI. Breach Notification Rule: notify affected individuals within 60 days. Applies to all triage interactions — phone calls, EMR documentation, telehealth.
- **State Nurse Practice Acts** — Each state defines the scope of practice for RNs, LPNs/LVNs, and advanced practice nurses. Triage falls within RN scope in most states but requirements vary: some states require specific telephonic triage training, some require physician-approved protocols, some have specific documentation requirements.
- **Informed Consent & Refusal** — Patients have the right to refuse treatment and leave against medical advice (AMA). Triage staff must document: the risks explained, the patient's understanding, the recommendation given, and the patient's decision. AMA documentation is critical for liability protection.
- **Mandatory Reporting** — Most states require healthcare workers to report: suspected child abuse/neglect, suspected elder abuse, certain communicable diseases (TB, HIV, hepatitis, STIs), gunshot wounds, domestic violence (varies by state). Failure to report carries professional licensure consequences and potential criminal liability.
- **Telehealth Regulations** — Interstate practice: nurses may need licensure in the patient's state (Nurse Licensure Compact covers 40+ states). Documentation requirements for telephone triage. Informed consent for telehealth. State-specific regulations on prescribing via telehealth.

## Essential Terminology

| Term | Definition |
|------|-----------|
| **Chief Complaint** | The patient's primary reason for seeking care, documented in the patient's own words |
| **Acuity Level** | Severity classification determining urgency of care needed (ESI 1-5, CTAS 1-5, MTS color) |
| **Disposition** | Triage outcome: where the patient should go and how quickly (911, ED, urgent care, office visit, home care) |
| **Red Flag Symptoms** | Warning signs of potentially life-threatening conditions requiring immediate evaluation (chest pain, sudden severe headache, neurological deficits, signs of sepsis) |
| **Vital Signs** | Core physiological measurements: blood pressure, heart rate, respiratory rate, temperature, SpO2 (oxygen saturation), pain level (sometimes included) |
| **Differential Diagnosis (DDx)** | List of possible diagnoses that could explain the patient's symptoms, ranked by likelihood and severity |
| **Drug Interaction** | Adverse effect when two or more drugs are taken together. Major interactions can be life-threatening (serotonin syndrome, QT prolongation, bleeding risk) |
| **Contraindication** | Condition or factor that makes a particular treatment or procedure inadvisable (e.g., aspirin contraindicated in active GI bleed) |
| **Over-the-Counter (OTC)** | Medications available without prescription. NOT harmless — OTC medications have interactions, contraindications, and maximum safe doses |
| **Polypharmacy** | Patient taking 5+ medications simultaneously. Increases risk of drug interactions, adverse events, and medication errors. Common in elderly patients |
| **Serotonin Syndrome** | Potentially life-threatening drug reaction from serotonergic medications. Symptoms: agitation, confusion, rapid heart rate, dilated pupils, muscle rigidity, hyperthermia. SSRIs + MAOIs, SSRIs + tramadol, SSRIs + St. John's Wort |
| **QT Prolongation** | Cardiac electrical abnormality that can cause fatal arrhythmias (Torsades de Pointes). Many common drugs prolong QT: azithromycin, fluoroquinolones, antipsychotics, methadone |
| **Anaphylaxis** | Severe allergic reaction with rapid onset. Signs: airway swelling, hypotension, urticaria, respiratory distress. Requires immediate epinephrine. |
| **Sepsis** | Life-threatening organ dysfunction from dysregulated infection response. qSOFA criteria: altered mentation, RR ≥22, systolic BP ≤100. Requires emergent treatment (antibiotics, fluids, monitoring) |
| **AMA (Against Medical Advice)** | Patient's decision to leave or refuse recommended care. Requires documentation of risks explained and patient's decision-making capacity |
| **PRN (Pro Re Nata)** | "As needed" — medication to be taken when symptoms occur, not on a schedule |
| **NSAID** | Non-Steroidal Anti-Inflammatory Drug (ibuprofen, naproxen, aspirin). GI bleed risk, kidney risk, cardiovascular risk at high doses or chronic use |
| **SSRI** | Selective Serotonin Reuptake Inhibitor (sertraline, fluoxetine, escitalopram). First-line antidepressants. Interaction risks with MAOIs, tramadol, St. John's Wort, triptans |
| **Suicidal Ideation** | Thoughts about or plans for self-harm or suicide. Always requires direct assessment: passive ideation, active ideation, plan, intent, means, prior attempts |
| **Triage Protocol** | Standardized decision tree or algorithm for assessing specific symptoms and determining disposition |

## Top 10 Common Mistakes

1. **Under-triage: assigning lower acuity than warranted** — The most dangerous triage error. A patient with atypical chest pain triaged as ESI 4 instead of ESI 2 can deteriorate in the waiting room. Atypical presentations (women, elderly, diabetics presenting with jaw pain or fatigue instead of classic chest pain) are the most commonly under-triaged. Always err on the side of higher acuity when uncertain.

2. **Ignoring drug interactions with OTC medications and supplements** — Patients frequently don't mention OTC medications and supplements because they don't consider them "real" medications. St. John's Wort interacts with SSRIs (serotonin syndrome), oral contraceptives (reduced efficacy), warfarin (reduced anticoagulation), and cyclosporine (transplant rejection). Ibuprofen interacts with blood thinners, lithium, and ACE inhibitors. Always ask about ALL medications including OTC and supplements.

3. **Anchoring bias — fixating on the first symptom and not asking comprehensive questions** — A patient calls about a headache, and the nurse triages based on "headache" without asking about the worst headache of their life (subarachnoid hemorrhage), fever + stiff neck (meningitis), visual changes (stroke, temporal arteritis), or recent head trauma. The first symptom mentioned is often not the most important one.

4. **Not asking about suicidal ideation when mood symptoms are present** — A patient mentions feeling "down" or "hopeless" or "not sleeping" and the triage nurse focuses only on the physical symptoms without directly asking about self-harm thoughts. Suicidal ideation screening should be triggered by any mention of depression, hopelessness, anxiety with distress, substance use, or chronic pain. Ask directly: "Are you having thoughts of hurting yourself or ending your life?"

5. **Failing to recognize sepsis early** — Sepsis kills approximately 270,000 Americans per year. Early signs can be subtle: slightly altered mental status, tachycardia, mild hypotension, warm skin (early sepsis), fever or hypothermia. qSOFA screening (altered mentation + RR ≥22 + SBP ≤100) should be applied to any patient with suspected infection. Two of three positive = high risk. Delay in antibiotics increases mortality 8% per hour.

6. **Dismissing patient-reported pain severity** — Pain is subjective. A triage nurse who downplrades a patient's reported 8/10 pain to "the patient appears comfortable" without documenting objective findings (VS, facial expression, guarding, mobility) creates both a clinical risk (missing acute pathology) and a documentation risk. Document the patient's reported score AND your objective assessment.

7. **Not verifying medication doses, especially in pediatric and geriatric patients** — Pediatric medication errors are 3x more common than adult errors because dosing is weight-based. A parent saying "I gave the children's Tylenol" doesn't tell you the dose — children's acetaminophen comes in multiple concentrations. Geriatric patients may be on incorrect doses for renal function. Always verify: drug name, dose, frequency, and duration.

8. **Providing a diagnosis instead of triaging** — Triage determines urgency and routing, not diagnosis. A triage nurse who tells a patient "it's probably just anxiety" when the patient has chest pain has both provided a diagnosis outside their scope and potentially dissuaded the patient from seeking emergency care. The correct triage response is: "Based on your symptoms, you need to be evaluated in the emergency department today."

9. **Incomplete documentation of triage assessment** — If it wasn't documented, it wasn't done. Telephone triage calls must document: chief complaint, relevant history, medications, allergies, symptoms assessed, protocol used, disposition given, home care instructions provided, and follow-up plan. Inadequate documentation is the primary driver of malpractice exposure in telephone triage.

10. **Not reassessing patients in the waiting room** — ED triage is not a one-time assessment. Patients can deteriorate while waiting. Reassessment protocols (at minimum for ESI 3+ patients: every 30-60 minutes for ESI 3, every 2 hours for ESI 4) catch patients whose condition has changed. The patient triaged as ESI 3 abdominal pain who is now diaphoretic and hypotensive needs immediate re-triage.

## Excellent vs. Dangerous Work

### What Excellent Triage Work Looks Like
- Systematic symptom assessment that goes beyond the chief complaint — asking about associated symptoms, red flags, medication history (including OTC/supplements), allergies, and relevant medical/surgical history
- Correct application of standardized triage protocols (Schmitt-Thompson, ESI) with clinical judgment layered on top — the protocol is the floor, not the ceiling
- Direct and specific patient communication: "Based on your symptoms, I need you to go to the emergency department within the next hour. Here's why this is important..."
- Thorough medication review that identifies interactions — not just listing medications but actively checking for dangerous combinations
- Documentation that tells a complete story: what was asked, what was answered, what protocol was applied, what disposition was given, and what instructions were provided
- Appropriate escalation when assessment findings don't fit neatly into a protocol — "something doesn't feel right" is a valid clinical concern that warrants higher-acuity disposition

### What Dangerous Triage Work Looks Like
- Providing a diagnosis ("it's just a migraine") instead of triaging to appropriate care — diagnosing is outside the triage nurse's scope and can delay evaluation of serious conditions
- Dismissing symptoms because of the patient's demographics — young patients can have heart attacks, anxious patients can have PEs, frequent callers can have new emergencies
- Not asking about suicidal ideation when mood symptoms are present — "I didn't want to put the idea in their head" is a myth. Direct questioning about SI does not increase risk.
- Skipping the medication review because "the patient says they're not on anything important" — patients routinely forget to mention OTC medications, supplements, and recently changed prescriptions
- Clearing a patient with chest pain, shortness of breath, or sudden severe headache for home care without physician review — these are always high-acuity until proven otherwise
- Letting schedule pressure drive triage decisions — triaging patients to lower acuity to reduce ED volume is never acceptable

## Professional Certifications

| Certification | Issuing Body | Scope |
|--------------|-------------|-------|
| **RN (Registered Nurse)** | State Boards of Nursing | Required for triage nursing. NCLEX-RN exam. State licensure. Nurse Licensure Compact allows practice in 40+ states. |
| **CEN (Certified Emergency Nurse)** | BCEN (Board of Certification for Emergency Nursing) | Emergency nursing specialty certification. Covers triage, resuscitation, trauma, medical emergencies, pediatric emergencies. Requires RN license + ED experience. |
| **CTRN (Certified Transport Registered Nurse)** | BCEN | Transport and flight nursing. Triage and stabilization for inter-facility transport. Advanced assessment skills. |
| **TCRN (Trauma Certified Registered Nurse)** | BCEN | Trauma nursing certification. Injury assessment, resuscitation, trauma care. Relevant for ED triage of trauma patients. |
| **Telephone Triage Nursing Certification** | Various (AAACN, training programs) | Specific training in telephone/telehealth triage: communication techniques, protocol application, documentation standards, liability management. Not a formal national certification but training programs are widely required. |
| **BLS (Basic Life Support)** | AHA (American Heart Association) | CPR, AED use, foreign body airway obstruction. Required for all clinical staff. Renewal every 2 years. |
| **ACLS (Advanced Cardiovascular Life Support)** | AHA | Advanced cardiac arrest algorithms, arrhythmia recognition, medication administration. Required for ED nurses and many triage roles. |
| **PALS (Pediatric Advanced Life Support)** | AHA | Pediatric resuscitation, recognition of respiratory distress/failure, shock management, arrhythmias. Required for pediatric triage. |
| **TNCC (Trauma Nursing Core Course)** | ENA (Emergency Nurses Association) | Systematic approach to trauma assessment and management. Initial assessment, interventions, triage decisions. Widely required for ED nurses. |
