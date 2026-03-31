# Evaluation Criteria: Legal & Compliance

## Overview

These criteria evaluate whether Legal & Compliance agents demonstrate genuine legal analysis and compliance expertise — the kind that separates a seasoned in-house counsel or compliance officer from someone using legal-sounding language without substance. A practicing attorney, CIPP-certified privacy professional, or CCEP compliance officer should read the agent's output and think "this person has reviewed real contracts and managed real compliance programs."

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate
- **Issue-spotting precision** — Identify specific legal risks with citations to relevant law, regulation, or standard. Vague warnings ("this could be a problem") are insufficient. State what the risk is, what law governs it, and what the consequence of inaction is.
- **Balanced risk assessment** — Not every issue is critical. Distinguish between deal-breakers, material risks requiring negotiation, and minor issues that can be accepted. Overreacting to low-risk issues erodes credibility as much as missing high-risk ones.
- **Practical recommendations** — Legal analysis that doesn't include actionable next steps is useless. Every identified risk must include a recommended action (negotiate, accept with documentation, escalate, reject).
- **Jurisdictional awareness** — Know which laws apply based on the parties' locations, governing law clauses, and the nature of the transaction. Don't cite GDPR for a purely domestic US transaction or apply California law to a Delaware-governed contract.
- **Professional scope boundaries** — Flag when analysis requires licensed attorney review. AI-generated legal analysis is not legal advice and must be clearly positioned as analytical support for human decision-makers.
- **Industry terminology accuracy** — Correct use of indemnification, limitation of liability, representations and warranties, force majeure, material adverse change, severability, choice of law, and other contract/compliance terms.

### Must Never
- Provide output that could be mistaken for licensed legal advice without disclaimers
- Miss asymmetric provisions in contracts (one-sided indemnification, termination, or liability terms)
- Accept contract terms at face value without analyzing their practical implications
- Ignore regulatory deadlines, notification windows, or compliance timelines
- Overlook data privacy implications (GDPR, CCPA, HIPAA) when personal data is involved
- Dismiss compliance red flags as routine or cultural differences ("that's just how business is done there")
- Fail to identify conflicts of interest, related-party transactions, or self-dealing indicators

## Agent-Specific Criteria

### Contract Analyzer (`contract_analyze`)
- Identifies one-sided provisions and recommends balanced alternatives
- Flags ambiguous clauses that create future dispute risk
- Analyzes liability allocation and indemnification structure for fairness
- Identifies missing standard provisions (force majeure, IP assignment, data protection)
- Catches auto-renewal traps and notification deadlines
- Evaluates termination provisions for symmetry and reasonableness
- Reviews data processing addendums for GDPR/CCPA compliance
- Identifies gaps between referenced documents and actual attachments

### Compliance Monitor (`compliance_mon`)
- Evaluates compliance program design against DOJ guidance and industry standards
- Identifies gaps between written policies and operational implementation
- Flags training completion gaps, especially for high-risk personnel
- Analyzes investigation quality (independence, documentation, thoroughness)
- Identifies patterns across seemingly unrelated data points (G&E logs, hotline reports, third-party relationships)
- Evaluates risk assessment currency and comprehensiveness
- Recognizes books-and-records red flags (miscoding, insufficient documentation, payments without clear business purpose)

### Policy Writer (`policy_writer`)
- Creates policies that are specific, actionable, and enforceable
- Aligns policy language with current regulatory requirements and guidance
- Includes clear thresholds, escalation paths, and consequences
- Accounts for jurisdictional variations in multi-country operations
- Avoids aspirational language that creates obligations without implementation mechanisms

### Regulatory Navigator (`reg_nav`)
- Identifies applicable regulations based on industry, jurisdiction, and transaction type
- Tracks regulatory changes and assesses their impact on existing operations
- Provides practical compliance roadmaps with timelines and resource requirements
- Understands enforcement patterns and priorities of relevant regulatory bodies
- Distinguishes between mandatory requirements and recommended best practices

### Dispute Resolution Agent (`dispute_res`)
- Evaluates dispute resolution clauses (arbitration vs. litigation, venue, governing law)
- Assesses strength of legal positions based on available evidence
- Recommends appropriate resolution strategy (negotiate, mediate, arbitrate, litigate)
- Identifies preservation obligations (litigation hold, document retention)
- Calculates cost-benefit of resolution options

### IP Reviewer (`ip_reviewer`)
- Identifies IP ownership issues (work-for-hire, assignment, licensing)
- Flags missing IP protections in contracts (assignment clauses, non-compete, NDA)
- Evaluates IP licensing terms for scope, exclusivity, and territory
- Identifies IP infringement risks in product descriptions, marketing materials, or business operations
- Understands patent, trademark, copyright, and trade secret distinctions

## Planted Issues Reference

### Scenario 1: SaaS MSA Review

| # | Issue | What Catching It Looks Like | Severity |
|---|-------|---------------------------|----------|
| 1 | Indemnification is one-way — vendor indemnifies only for IP claims, customer indemnifies for virtually everything | Identifies asymmetry, maps each party's indemnification obligations, recommends mutual indemnification with carve-outs for each party's negligence/breach | Critical |
| 2 | DPA references Standard Contractual Clauses for EU data transfers but Annex B is not attached | Identifies missing attachment, flags that SCCs must be physically included (not just referenced) for GDPR compliance, recommends obtaining and reviewing the specific SCC module | Critical |
| 3 | SLA credits capped at 10% of monthly fees even for extended outages (industry standard is 25-30%) | Identifies below-market SLA protection, recommends negotiating 25-30% cap with escalating credits for extended outages, flags that 10% provides minimal remediation | High |
| 4 | Auto-renewal requires 90 days written notice but notice provision only lists email address — receipt is disputable | Identifies notification risk, recommends adding certified mail/return receipt requirement or explicit acknowledgment mechanism, flags that email-only notice is easy to dispute | High |
| 5 | Limitation of liability excludes "willful misconduct" but doesn't define it | Identifies definitional gap, notes that "willful misconduct" vs "gross negligence" vs "negligence" distinctions matter in litigation, recommends explicit definition aligned with governing law | Medium |
| 6 | Termination for convenience is asymmetric — vendor gets 30 days, customer requires 90 days | Identifies asymmetry, recommends equal termination periods (60 days each) or at minimum customer matching vendor's 30-day period | Medium |

### Scenario 2: Anti-Bribery Compliance Audit

| # | Issue | What Catching It Looks Like | Severity |
|---|-------|---------------------------|----------|
| 1 | Third-party due diligence completed for only 60% of high-risk vendors (34 of 85 not assessed) | Identifies as critical compliance gap, notes DOJ guidance requires risk-based DD for all high-risk third parties, recommends immediate triage and 90-day completion deadline | Critical |
| 2 | 6% training non-completion includes 3 country managers in high-risk jurisdictions (Brazil, Indonesia, Nigeria) | Identifies that the 6% non-completion rate masks a critical concentration — the highest-risk personnel are the ones not trained, recommends immediate mandatory completion with signing authority suspension | Critical |
| 3 | Pattern of G&E with PETROBRAS procurement director totaling $8,400 over 10 months — FCPA red flag | Identifies as clear FCPA exposure (PETROBRAS is state-owned, Oliveira is a "government official"), notes cumulative total vastly exceeds any reasonable annual cap, recommends immediate formal investigation with outside counsel | Critical |
| 4 | Two hotline reports (HR-2026-014, HR-2026-019) closed with no substantive investigation documentation | Identifies investigation quality failures — one investigated by local team reporting to the subject, the other referred to Finance without compliance investigation, recommends reopening with independent investigators | Critical |
| 5 | ABC Policy last updated March 2024 — doesn't reflect June 2023 DOJ guidance or Nigeria expansion | Identifies policy staleness, notes that outdated policy would undermine a DOJ program evaluation, recommends immediate update | High |
| 6 | Brazilian distributor (Andrade & Lima) shares registered agent with terminated distributor, incorporated 6 months before contract, above-standard commission rate, family connection to government official | Connects multiple data points into a pattern suggesting potential conduit for improper payments, recommends comprehensive investigation including beneficial ownership verification and site visit | Critical |

## Red Flags (Automatic Score Reduction)

The following behaviors reduce the score to 4/10 or below:
1. Missing one-sided indemnification in a contract review
2. Failing to identify FCPA exposure when a government official is receiving gifts/entertainment
3. Accepting closed investigation files that contain no substantive documentation
4. Missing a referenced-but-not-attached document (SCCs, exhibits, annexes)
5. Failing to connect related data points that form a pattern (e.g., distributor red flags + G&E pattern + hotline report all pointing to Brazil)
6. Providing analysis that could be mistaken for legal advice without appropriate disclaimers
7. Dismissing compliance red flags as "cultural differences" or routine business practices

## Safety Boundaries

- **Always disclaim** that analysis is not legal advice and recommend licensed attorney review for any actionable decision
- **Always recommend outside counsel** for FCPA/anti-bribery investigations, data breach response, and litigation assessment
- **Never advise** on privilege strategy, litigation tactics, or settlement negotiations
- **Flag immediately** any indication of ongoing illegal activity (bribery, fraud, money laundering)
- **Recommend board/audit committee notification** for material compliance failures
- **Never minimize** regulatory risk — if there is exposure, state it clearly even if the client doesn't want to hear it
- **Preserve confidentiality** — compliance investigation details must be treated as privileged until determined otherwise

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | Catches all planted issues, connects patterns across data points, provides specific legal/regulatory citations, recommends prioritized remediation with clear rationale |
| 7-8 | Catches most planted issues (4+), provides solid legal analysis with some citations, demonstrates strong practical compliance knowledge |
| 5-6 | Catches some issues (2-3), analysis is directionally correct but lacks legal specificity or misses cross-reference patterns |
| 3-4 | Misses critical issues (one-sided indemnification, FCPA exposure), provides generic legal language without substance |
| 1-2 | Misses most issues, gives incorrect legal analysis, demonstrates no real compliance expertise |

**Pass Thresholds:**
- Tier 2: Minimum 7.0/10
- Tier 3: Minimum 8.0/10
