# Simulation Scenarios: Property Management

> Multi-turn conversation scripts for testing agents in the Property Management industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Multifamily Property Financial Review

### Agents Tested
`lease_manager`, `property_financials`, `maintenance_coord`

### Mock Data
`mock-data/scenario-1.md` (48-unit apartment complex financial and operational review)

### Messages

**Message 1 — Set the Stage**
```
I just took over management of a 48-unit apartment complex in Maplewood, NJ. The previous manager has been in place since 2021 and the owners feel like the property is underperforming. I need a full operational and financial assessment. What should I be looking at?
```

**Expected Response Elements:**
- Structured assessment framework covering: rent roll analysis (in-place rents vs. market, lease expiration schedule, month-to-month exposure), vacancy analysis (rate, days on market, make-ready timelines), financial review (NOI, expense ratio, revenue leakage), maintenance audit (spend per unit, PM program, deferred maintenance), delinquency review (aging, collection procedures), capital needs assessment (reserve fund adequacy, upcoming CapEx), insurance review, and compliance check
- Should prioritize by NOI impact — which issues are costing the most money right now
- Should ask for the rent roll, operating statement, maintenance records, and delinquency report

**Message 2 — Provide the Data**
```
Here's the complete data package for Ridgewood Terrace. Give me your assessment — what's broken and what's it costing us?

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of all 6 planted issues with financial quantification:
  1. Loss-to-lease on month-to-month tenants: $14,400-$19,800/year in NOI impact across 6+ units
  2. Maintenance spend at $2,800/unit (2x benchmark) with zero preventive maintenance — reactive pattern causing cascading failures
  3. Vacancy at 12.5% with 3 units vacant 90+ days — make-ready averaging 45 days (benchmark: 10-14 days) — vacancy loss quantified
  4. Insurance claim filed below deductible — will impact premium renewal
  5. Capital reserves at $18,200 vs. $48,000-$96,000 recommended — $292,000 in 5-year CapEx with no funding plan
  6. Unit 223 at 120 days delinquent ($6,200) with no formal legal action — in NJ, eviction takes 2-4 months from filing
- Operating expense ratio of 55.2% flagged as significantly above benchmark (35-45%)
- Prioritized action plan with timeline and expected financial impact

**Message 3 — Challenge on Rent Increases**
```
The owners don't want to raise rents on the long-term tenants. They say "good tenants are worth more than market rent." How do I make the case that we need to address the loss-to-lease?
```

**Expected Response Elements:**
- Acknowledge the owners' concern is valid in principle — good tenants do have value, and turnover is expensive
- But quantify the actual cost of their position: 6 units at $150-$275/month below market = $14,400-$19,800/year in lost NOI
- Over 5 years at current trajectory, that's $72,000-$99,000 in cumulative lost revenue — from just 6 units
- Turnover cost analysis: if raising rent causes one tenant to leave, the cost is approximately $3,000-$5,000 (make-ready + vacancy). But the annual revenue gain from bringing that unit to market is $1,800-$3,300/year. Breakeven in 1-2 years, then pure upside
- Month-to-month tenants can receive rent increases with proper notice (NJ requires 30 days for month-to-month). No lease renegotiation needed
- Recommend graduated approach: bring rents up in 2-3 annual increases rather than one large jump. $75/month increase now, another $75-$100 in 12 months
- The NOI impact also affects property valuation. At a 7% cap rate, $15,000 in additional NOI = ~$214,000 in property value
- Frame it as protecting the owners' investment, not punishing tenants

**Message 4 — Maintenance Crisis**
```
We just got three emergency calls in one day — burst pipe in Unit 309, HVAC failure in Unit 301, and a ceiling leak in Unit 206 that looks like it's coming from Unit 306. The owners are asking why maintenance costs are so high. What do I do right now, and how do I fix this systemically?
```

**Expected Response Elements:**
- Immediate triage: prioritize by severity and habitability impact
  - Burst pipe (309): highest priority — active water damage, shut off water supply to unit, emergency plumber, extract standing water, document for insurance
  - Ceiling leak (206/306): investigate source in 306 immediately — could be plumbing, could be structural. If active leak, emergency response. Notify both tenants
  - HVAC failure (301): urgent but not emergency in winter (NJ habitability requires heat). Provide space heaters as temporary measure if needed. Schedule HVAC tech within 24 hours
- Systemic diagnosis: these are symptoms of the no-PM-program problem
  - The burst pipe in 309 — was this unit's plumbing ever inspected? Were pipe insulation gaps identified?
  - HVAC failure in 301 — this is a month-to-month tenant since 2023 on original 1988 equipment. The HVAC is 37+ years old with no maintenance history
  - Ceiling leak pattern — need building-wide plumbing assessment
- Systemic fix: implement a preventive maintenance program
  - Quarterly HVAC filter changes and annual tune-ups
  - Annual water heater inspections (the water heater burst in Unit 221 earlier this year was 18 years old, never inspected)
  - Biannual plumbing inspections for units with original 1988 fixtures
  - Annual roof and gutter inspections
  - Cost of PM program: approximately $15,000-$20,000/year. Current reactive spend: $134,400. Even a 20% reduction pays for the PM program 4x over
- Owner communication: the maintenance costs are high BECAUSE there's no preventive program. You're paying emergency rates for problems that could have been prevented at 1/3 the cost

**Message 5 — Edge Case: Delinquent Tenant**
```
I just reviewed the file on Unit 223 — this tenant owes $6,200 and hasn't paid since August. The previous manager's notes say "seems like a nice guy" and there's been no pay-or-quit notice, no eviction filing, nothing. The owners want their money. What are my options and what should I have done differently?
```

**Expected Response Elements:**
- Current situation assessment: 120+ days delinquent, $6,200 in arrears, no formal legal action taken. This is a management failure — the previous manager let sympathy override professional obligation
- NJ-specific eviction process:
  - Step 1: Serve a Notice to Quit (NJ requires written notice for nonpayment — typically "Notice to Cease" or "Notice to Quit" depending on grounds)
  - Step 2: If not cured, file complaint with NJ Superior Court, Special Civil Part (Landlord-Tenant)
  - Step 3: Court hearing (typically scheduled within 10-30 days of filing)
  - Step 4: If judgment for landlord, Warrant of Removal issued (tenant gets additional time to vacate)
  - Step 5: If tenant doesn't vacate, request lockout by court officer
  - Total timeline from filing: typically 2-4 months in NJ (one of the slower states)
- What should have been done: formal delinquency protocol
  - Day 5: Late notice with late fee per lease terms
  - Day 15: Personal contact — assess tenant's situation, document in writing
  - Day 30: If no payment or payment plan: serve pay-or-quit notice
  - Day 45-60: If not cured: file for eviction
  - If this protocol had been followed, eviction filing would have happened in October. The unit could be recovered by January-February. Instead, filing now means recovery in April-June at earliest — 2 more months of lost rent (~$2,850)
- Recovery options: the $6,200 is likely uncollectable from a tenant who lost his job. Can pursue in small claims after eviction, but collection probability is low. The real cost is the ongoing vacancy loss
- The security deposit ($1,425) can be applied to unpaid rent per NJ law, but only after the tenant has vacated and proper procedures are followed
- Going forward: document everything, apply the delinquency protocol consistently to all tenants, and never let personal sympathy delay formal action. The property manager's job is to protect the owner's asset while treating tenants fairly — "fair" includes enforcing the lease terms the tenant agreed to

---

## Scenario 2 — Tenant Screening Decision Package

### Agents Tested
`tenant_screening`, `tenant_comms`, `lease_manager`

### Mock Data
`mock-data/scenario-2.md` (5 rental applications for a 2BR unit at $1,850/month)

### Messages

**Message 1 — Set the Stage**
```
We have 5 applications for a vacant 2BR unit at $1,850/month. I need to evaluate them and make a selection. Our goal is to fill the unit quickly but with a reliable tenant. What's your screening framework?
```

**Expected Response Elements:**
- Structured screening framework: credit/financial assessment, income verification, rental history verification, employment stability, criminal background (with HUD compliance), reference checks
- Emphasis on consistent, documented criteria applied equally to all applicants (Fair Housing compliance)
- Should ask whether the property has written screening criteria
- Should mention that screening criteria must be documented and applied consistently to avoid disparate impact claims
- Framework should include co-applicant evaluation methodology
- Should note that all screening must comply with Fair Housing Act, state fair housing laws, and HUD guidance on criminal background screening

**Message 2 — Provide the Data**
```
Here are all 5 applications with credit reports, income verification, rental history, and background checks. Evaluate each and give me your recommendation:

{{MOCK_DATA}}
```

**Expected Response Elements:**
- Identification of all 6 planted issues:
  1. Whitfield (top pick by credit) has only 2 weeks at new job, in probation, no prior employer disclosed — high employment instability risk
  2. Whitfield's "landlord" reference is a fake — the phone number is registered to the applicant himself. This is fraud and should disqualify the application
  3. Screening criteria are not documented in writing — major Fair Housing liability
  4. Mehta's service animal is being treated as a pet policy violation — this is a Fair Housing violation. Service/assistance animals are not pets under FHA
  5. Thompson's automatic denial for criminal background violates HUD guidance — must do individualized assessment. A 12-year-old marijuana conviction (now legal in NJ) with no subsequent history cannot support denial
  6. Castillos being evaluated on individual income instead of combined — incorrect methodology for co-applicants. Combined income of $10,000/month (5.41x) clearly qualifies
- Recommended ranking (after corrections):
  1. Priya Mehta — strong credit, verified stable income, excellent rental history, service animal must be accommodated
  2. David & Maria Castillo — combined income qualifies easily, excellent rental references, stable employment
  3. Marcus Thompson — passes individualized criminal assessment, stable 8-year employment, good rental history, solid income
  4. Rachel Foster — legitimate financial distress from divorce, but current credit deterioration and high DTI are real risk factors. Could approve with conditions (larger deposit if state allows, guarantor)
  5. James Whitfield — DISQUALIFY. Fake landlord reference is application fraud. Employment instability is a secondary concern, but the fraud alone is disqualifying

**Message 3 — Challenge on the Service Animal**
```
The property manager says we should deny Mehta or at least charge the pet deposit because "everyone claims their dog is a service animal these days." Can we require proof of training or AKC certification?
```

**Expected Response Elements:**
- Firmly correct the property manager — this approach violates the Fair Housing Act
- Under FHA, a person with a disability is entitled to a reasonable accommodation for an assistance animal (service animal OR emotional support animal)
- The property HAS received adequate documentation: a letter from a licensed therapist confirming disability-related need. This is sufficient under HUD/DOJ guidance
- You CANNOT require: AKC certification, professional training documentation, special licensing, demonstration of tasks, breed or size verification, or any documentation beyond verification of disability and disability-related need for the animal
- You CANNOT charge: pet deposit, pet rent, pet fee, or any additional financial charge for an assistance animal. These are not pets under FHA
- Breed and weight restrictions in the pet policy do NOT apply to assistance animals
- The phrase "everyone claims service animal" reflects a discriminatory attitude that, if documented in a Fair Housing complaint, would be extremely damaging
- The correct process: accept the therapist letter, approve the accommodation, waive all pet-related charges, and document the interactive process
- Risk: if Mehta is denied or charged pet fees and files a HUD complaint, the property faces investigation, potential penalties ($16,000+ first offense), and reputational damage
- Recommend: approve the accommodation immediately and train all leasing staff on FHA assistance animal rules

**Message 4 — Challenge on Criminal Background**
```
I get that we can't have a blanket "no felony" policy, but what about liability? If we approve Thompson and something happens, aren't we exposed? The owners are nervous about this.
```

**Expected Response Elements:**
- Acknowledge the concern — liability is real and owners have a right to be cautious
- But explain the legal framework:
  - HUD 2016 guidance (reaffirmed): blanket criminal disqualification policies have a disparate impact on Black and Hispanic applicants. This is established law, not opinion
  - The property must conduct an individualized assessment considering: (1) nature and severity of the offense, (2) time elapsed since the offense, (3) evidence of rehabilitation, and (4) nexus between the offense and safety/property risk
  - Thompson's assessment: marijuana possession in 2014 (12 years ago), completed probation in 2016, no subsequent arrests or convictions in 10 years, marijuana is now legal in NJ, 8 years of stable employment at NJ Transit, strong rental history
  - Under any reasonable individualized assessment, this conviction does not justify denial
- Liability comparison: the risk of a Fair Housing complaint from denying Thompson based solely on a 12-year-old marijuana conviction is FAR greater than the theoretical liability of approving him
  - Fair Housing violations: $16,000-$37,500 in penalties, plus actual damages, plus attorney's fees
  - The offense has no nexus to property safety or financial reliability
- NJ-specific: NJ has some of the strongest fair housing protections in the country. The NJ Law Against Discrimination adds additional protections. NJ legalized marijuana in 2021 — denying housing for a pre-legalization marijuana conviction is particularly untenable
- Recommendation: approve Thompson, document the individualized assessment, and update the screening policy to reflect HUD guidance. This actually reduces liability compared to the current blanket policy

**Message 5 — Edge Case: The Written Policy Problem**
```
You mentioned that our screening criteria need to be in writing. We've been doing this verbally for years and never had a complaint. What's the actual risk, and what should the written policy include?
```

**Expected Response Elements:**
- "Never had a complaint" is not the same as "fully compliant." The lack of complaints means you've been lucky, not that the practice is safe
- The actual risk:
  - If ANY denied applicant files a Fair Housing complaint (HUD or NJ Division on Civil Rights), the first thing the investigator will ask for is the written screening criteria
  - Without written criteria, you cannot prove that the same standards were applied to every applicant
  - The investigator will compare outcomes across protected classes. If denied applicants are disproportionately members of a protected class, the burden shifts to the property to prove the criteria were applied consistently — which is impossible without documentation
  - Even a single complaint can trigger a broader pattern-and-practice investigation
  - This data package alone demonstrates the risk: the Castillos (Hispanic surname) are being denied while Whitfield (who committed application fraud) is being approved. Without written criteria documenting why, this pattern is indefensible
- What the written policy must include:
  - Minimum credit score threshold (and how it's applied — individual vs. co-applicant)
  - Income-to-rent ratio requirement (and co-applicant methodology — combined vs. individual)
  - Rental history requirements (number of years, eviction lookback period)
  - Employment verification requirements (what constitutes "stable" employment)
  - Criminal background policy (individualized assessment per HUD guidance, not blanket disqualification)
  - How self-employment income is evaluated
  - How alimony/child support income is counted
  - How Section 8 vouchers are handled (NJ is a source-of-income-protected state)
  - Assistance animal policy (separate from pet policy, FHA compliant)
  - Appeal/dispute process
- The policy must be provided to every applicant, applied identically to every applicant, and every decision must be documented with reference to specific criteria
- Recommend: draft the policy immediately, have it reviewed by a fair housing attorney, train all leasing staff, and implement before processing any more applications
