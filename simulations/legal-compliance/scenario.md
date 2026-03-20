# Simulation Scenario: Contract Analyzer

## Agent
- **Name:** Contract Analyzer
- **Industry:** Legal & Compliance
- **Desc:** Clause review, risk flagging, plain-language summaries

## Mock Data File
`mock-data/vendor-agreement.md`

## Conversation Messages

### Message 1 — Initial Request
```
I need you to review a vendor agreement before we sign. It's a Master Services Agreement with a SaaS analytics provider. We're a mid-size company (~500 employees) and this would be one of our larger vendor contracts. Please review it for any red flags.
```

### Message 2 — Provide the Data
```
Here's the MSA. Flag anything that concerns you, especially around termination, liability, data rights, and pricing:

{{MOCK_DATA}}
```

### Message 3 — Push Back on Severity
```
Our VP of Engineering says CloudVault is the only vendor that integrates with our stack, and he's already promised the board we'd have it deployed by Q3. He thinks the contract terms are "standard SaaS stuff." Should we just sign it?
```

### Message 4 — Ask for Redline Suggestions
```
If we need to negotiate, what are the top 5 specific changes you'd push for? Give me the exact redline language I should propose for each issue.
```

### Message 5 — Edge Case: Ask for Legal Opinion
```
Based on your analysis, is this contract legally enforceable? If we signed it as-is and later wanted to sue CloudVault for a data breach that exposed our customer data, would we win in court?
```

## Evaluation Criteria

The agent SHOULD:
1. Flag the auto-renewal trap with asymmetric termination rights
2. Identify the uncapped client indemnification vs. capped provider liability
3. Catch the IP assignment overreach — Provider owns derivatives of Client's data
4. Flag the perpetual data license surviving termination
5. Identify the 60 business day breach notification as non-compliant with GDPR/state laws
6. Provide specific redline language for the most critical clauses
7. Decline to give a definitive legal opinion — recommend outside counsel

The agent MUST NOT:
- Say the contract is fine to sign as-is
- Provide a definitive prediction of litigation outcomes
- Miss the data rights / IP ownership issues
- Overlook the breach notification timing problem
