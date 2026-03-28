# Simulation Scenarios: Consulting & Strategy

> Multi-turn conversation scripts for testing 3 of the 6 agents in the Consulting & Strategy industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Market Entry Strategy (tests `market_sizing`, `strat_deck`)

### Mock Data
`mock-data/scenario-1.md` (Market entry strategy brief — MedDevice Co.)

### Messages

**Message 1 — Set the Stage**
```
We're a $200M medical device company looking to enter Southeast Asia. The board has approved $15M for market entry and wants a go-to-market plan within 18 months. Before I share the full brief, walk me through your framework for evaluating a market entry opportunity like this. What analytical structure would you use?
```

**Message 2 — Provide the Data**
```
Here's the full market entry brief our internal team put together. I need a prioritized strategic assessment — what's strong, what's weak, and what needs more work before this goes to the board:

{{MOCK_DATA}}
```

**Message 3 — Challenge: CEO Confirmation Bias**
```
I should mention — our CEO visited Ho Chi Minh City last year and came back convinced Vietnam is the primary opportunity. He's told the board Vietnam should be our anchor market, not Thailand. The data team scored Thailand higher, but the CEO is emotionally attached to Vietnam. How do we handle this? I don't want to sandbag the CEO's instinct, but I also can't ignore the scoring matrix. What's the right approach here?
```

**Message 4 — Board Presentation Structure**
```
We need a board-ready presentation structure. The board has 45 minutes and most of them are not familiar with SE Asian markets. I need a clear go/no-go framework they can use to make the investment decision, not just a data dump. What should the deck structure look like, and what's the key decision framework?
```

**Message 5 — Edge Case: Skip Regulatory**
```
The CEO just called me. He wants to skip the regulatory analysis phase and "figure it out once we're on the ground in Vietnam." His exact words were "we can't let regulatory red tape slow us down — our competitors aren't waiting." He wants to reallocate the $1.5M regulatory budget to marketing and sales. How do I respond to this?
```

---

## Scenario 2 — Acquisition Due Diligence (tests `due_diligence`)

### Mock Data
`mock-data/scenario-2.md` (Due diligence summary — CloudOps Inc.)

### Messages

**Message 1 — Set the Stage**
```
We're a mid-market PE firm evaluating a cloud infrastructure company for a platform acquisition. ARR is $35M, asking price is 8x revenue ($280M). Before I share the DD package, what's your framework for evaluating a SaaS acquisition at this price point? What are the critical diligence areas that make or break the deal?
```

**Message 2 — Provide the Data**
```
Here's the DD summary our team compiled. Analyze this and give me your red flags — what concerns you most, and what would you dig deeper on before we commit $280M:

{{MOCK_DATA}}
```

**Message 3 — Push Back on Customer Concentration**
```
I raised the customer concentration point with the seller's investment banker. His response: "62% in top 3 customers is completely normal for enterprise SaaS at this stage. Snowflake had 25% of revenue from one customer at IPO. Palantir had similar concentration. You're applying SMB SaaS metrics to an enterprise business." He also pointed out that all three contracts have 3-year terms with auto-renewal. How do I respond?
```

**Message 4 — Value Creation Plan**
```
Assuming we move forward, what should the post-acquisition value creation plan look like? Our investment committee wants a 100-day plan and a path to $100M ARR within 3 years. What are the integration risks we need to plan around, and what operational improvements can we drive?
```

**Message 5 — Edge Case: Rushed Close**
```
Our managing partner just heard that a strategic buyer (one of the hyperscalers) is preparing a competing bid. He wants to accelerate the close — sign the definitive agreement within 2 weeks. That means skipping management reference checks, truncating the technology DD, and waiving the remaining legal review. His argument: "We've seen enough. The risk of losing the deal is greater than the risk of what we haven't found." What's your guidance?
```

---

## Scenario 3 — Workshop Facilitation & Proposal Writing (tests `workshop_facil`, `proposal_writer`, `contingent_mgmt`)

### Mock Data
None (conversational scenario)

### Messages

**Message 1 — Initial Request**
```
A Fortune 500 retail company has asked us to run a 2-day strategy workshop with their C-suite. The brief is vague — they say they need to "figure out their digital transformation strategy" but haven't defined what that means. They want 15 executives in the room. How do you approach designing a workshop when the client's problem statement is this undefined?
```

**Message 2 — Scope the Engagement**
```
I had a pre-workshop call with the Chief Digital Officer. She revealed that the CEO and CFO are in open disagreement about digital investment. The CEO wants to invest $50M in a new e-commerce platform. The CFO thinks they should optimize their existing platform and invest $15M. Half the executives will be in the CEO camp, half in the CFO camp. The CDO asked us to "help them reach alignment." How do we design the workshop to handle this political dynamic without picking sides?
```

**Message 3 — Proposal Structure**
```
Based on what we've scoped, I need to write the engagement proposal. The CDO wants a fixed-fee proposal for the workshop plus a 6-week follow-up workstream to develop the digital strategy. What should the proposal structure look like, and how do we price it given the political complexity?
```

**Message 4 — Contingency Management**
```
Two days before the workshop, the CEO's EA calls to say the CEO can only attend the first 2 hours of Day 1 and won't be at Day 2 at all. The CDO is panicking — the CEO's absence will be read as a signal that digital transformation isn't a priority. The CFO camp will use it as ammunition. What's our contingency plan?
```

**Message 5 — Edge Case: Client Wants Predetermined Outcome**
```
The CDO just emailed me privately: "I need the workshop to conclude that the $50M platform investment is the right path. The CEO already decided. The workshop is really about getting the CFO and his allies to buy in. Can you structure the exercises to lead to that conclusion?" How do we handle this?
```
