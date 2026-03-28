# Simulation Scenarios: Executive & Leadership

> Multi-turn conversation scripts for testing all 5 agents in the Executive & Leadership industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 -- Board Meeting Preparation (tests `board_prep`, `exec_brief`)

### Mock Data
`mock-data/scenario-1.md` (Board meeting preparation package -- Q1 2026 strategic review)

### Messages

**Message 1 -- Set the Stage**
```
I'm preparing for our Q1 board meeting. We're a pre-IPO SaaS company at $80M ARR, Series D, targeting S-1 filing later this year. What should a professional board package look like? What are the must-have sections, and what separates a great board package from one that just checks the boxes?
```

**Message 2 -- Provide the Data**
```
Here's what our team prepared for the April board meeting. Review it thoroughly and tell me what needs to change before I send it to the board. I want this to be IPO-ready governance quality.

{{MOCK_DATA}}
```

**Expected Agent Behavior (Message 2):**
- Flag all 6 planted issues (misleading OKR status, adjusted EBITDA presentation, stale risk register, APAC resolution lacking criteria, buried negative news in CEO letter, missing executive session)
- Prioritize the issues by governance risk severity
- Provide specific recommendations for each fix
- Reference relevant frameworks (Minto Pyramid for CEO letter, stage-gating for resolution, GAAP reconciliation for financials)

**Message 3 -- Challenge on Financials**
```
The CFO says the adjusted EBITDA presentation is "standard practice for pre-IPO companies" and the board "expects it this way." She says adding GAAP prominently would "confuse the narrative" and that every SaaS company presents adjusted metrics to their board. Should I push back, or is she right?
```

**Expected Agent Behavior (Message 3):**
- Acknowledge that adjusted EBITDA is indeed commonly used in SaaS
- Explain the critical distinction: using adjusted metrics is fine, but GAAP must have equal prominence (not a footnote)
- Reference SEC rules on non-GAAP reconciliation that will apply at S-1 filing
- Flag that the board needs to see both views to fulfill fiduciary duty of care
- Note the specific concern: SBC growing from $2.9M to $4.2M/quarter is a trend the board must understand
- Suggest a side-by-side presentation format rather than removing adjusted metrics

**Message 4 -- Follow-Up on CEO Letter**
```
How should I restructure the CEO letter to properly communicate the customer losses while maintaining board confidence? I don't want to lead with bad news and set a negative tone for the entire meeting, but I also don't want to bury it. What's the right balance?
```

**Expected Agent Behavior (Message 4):**
- Reference Minto Pyramid Principle: lead with the synthesis, not the details
- Recommend a structure: strategic context first (where we are on IPO path), then honest assessment of Q1 (wins and losses together with net impact), then forward-looking actions
- Explain that board confidence comes from candor and control, not from hiding problems
- Provide a specific rewrite suggestion or structure template
- Note that experienced board directors detect buried bad news and it erodes trust more than the bad news itself

**Message 5 -- Edge Case (Investor Pressure)**
```
Our lead investor called and wants me to remove the risk register entirely from the board package because "it'll spook the newer board members" who joined at Series D. He says we should handle risk discussions in a separate "strategy session" instead of the formal board meeting. What do I do?
```

**Expected Agent Behavior (Message 5):**
- Flag this as a governance red flag -- removing risk information from board materials undermines fiduciary duty
- Explain that all directors (new and old) have equal fiduciary responsibility and equal right to material information
- Note that segregating risk discussions from the board meeting could constitute selective disclosure among directors
- Reference D&O liability: if a risk materializes that was known but not shared with the full board, directors who were kept uninformed could face personal liability
- Suggest alternatives: improve the risk register presentation (better formatting, context, mitigation plans) rather than removing it; offer to brief newer board members separately on how to read the risk register
- Acknowledge the investor's concern (new directors may overreact) but frame the solution as education, not information suppression

---

## Scenario 2 -- Executive Decision Making (tests `decision_frame`, `okr_agent`, `exec_comms`)

### Mock Data
`mock-data/scenario-2.md` (Executive decision brief -- build vs. buy analysis for AI integration)

### Messages

**Message 1 -- Set the Stage**
```
I need to make a build vs. buy decision for AI capability at my company. We're a $120M ARR enterprise software company in logistics, and customers are demanding AI features. What decision framework should I use, and how do I structure the analysis so the board can make an informed call?
```

**Expected Agent Behavior (Message 1):**
- Recommend a specific decision framework (RAPID for role clarity, weighted decision matrix for option evaluation)
- Outline the key dimensions to evaluate: time-to-market, total cost of ownership, strategic control, execution risk, talent, IP ownership
- Emphasize the need for quantified options, comparable transactions (for buy), and scenario analysis
- Suggest including a "do nothing" baseline and kill criteria for whichever option is chosen
- Reference pre-mortem analysis as a tool before finalizing the recommendation

**Message 2 -- Provide the Data**
```
Here's the analysis my team put together. Is this decision-ready? Does the board have enough information to make a responsible call?

{{MOCK_DATA}}
```

**Expected Agent Behavior (Message 2):**
- Flag all 5 planted issues (unrealistic build timeline, extreme valuation without comparables, dismissed partnership option, no cultural integration assessment, 100% retention assumption)
- Identify the structural bias toward acquisition in the analysis
- Note specific gaps that prevent the board from making an informed decision
- Provide a checklist of what needs to be added before this is decision-ready
- Recommend the board NOT vote on this brief as-is

**Message 3 -- Internal Politics**
```
My VP of Engineering is pushing hard for the build option -- she says her team can do it and she doesn't want "acqui-hired engineers who don't understand our codebase." My Corp Dev lead is pushing hard for the acquisition -- he's been cultivating the NeuralEdge relationship for 6 months and has a strong relationship with their CEO. How do I cut through the internal politics and make a clean decision?
```

**Expected Agent Behavior (Message 3):**
- Identify the incentive structures at play (VP Eng protects territory; Corp Dev gets deal credit)
- Recommend separating the "who decides" from "who recommends" (RAPID framework)
- Suggest a structured evaluation process: define criteria first, weight them, then score each option independently
- Recommend bringing in an external voice (board member with M&A experience, outside advisor) to break the tie
- Flag that the Corp Dev lead's 6-month relationship with NeuralEdge CEO may create sunk cost bias
- Suggest a Red Team exercise: have VP Eng present the best case for acquisition, and Corp Dev present the best case for build -- forcing each to argue the other's position reveals blind spots

**Message 4 -- Valuation Deep Dive**
```
What would a proper comparable transactions analysis look like for the NeuralEdge acquisition? I want to walk into the board meeting with market context for the 22.5x multiple. If it's defensible, I'll defend it. If it's not, I need to know before the board asks.
```

**Expected Agent Behavior (Message 4):**
- Explain comparable transaction methodology: select 10-15 recent AI/ML acquisitions in the $20M-$100M range
- Provide the framework: revenue multiple, growth rate, domain specificity premium, strategic premium, control premium
- Note that 22.5x is above the 90th percentile for SaaS acquisitions and would need exceptional justification
- Identify what could justify a premium: proprietary training data, domain-specific IP, team quality, competitive threat removal
- Suggest requesting a formal third-party valuation (investment bank fairness opinion) before board vote
- Reference that board approval of an acquisition without market context exposes directors to shareholder challenges

**Message 5 -- Edge Case (Artificial Urgency)**
```
The NeuralEdge CEO just told me they have another offer from a competitor and I need to sign the LOI by Friday or lose the deal. My Corp Dev lead says we should move immediately -- "deals like this don't wait." Should I accelerate the decision?
```

**Expected Agent Behavior (Message 5):**
- Flag artificial urgency as a classic negotiation tactic -- the "exploding offer" is designed to prevent proper diligence
- Note that legitimate competing offers can usually be verified (ask for proof of competing term sheet, or at minimum the identity of the other bidder)
- Explain the risks of accelerating: skipping board approval process, foregoing fairness opinion, not completing cultural assessment, making a $50M decision under pressure
- Recommend a counter-move: express serious intent, request a 2-week exclusivity period in exchange for a breakup fee or deposit, explain that board approval is required and cannot be shortcut
- Reference that any CEO who pressures you to skip governance process is either desperate (red flag about their company) or negotiating (which means you have leverage)
- Note that if the deal is truly the right strategic move, losing it is painful but survivable -- making a bad $50M acquisition is not

---
