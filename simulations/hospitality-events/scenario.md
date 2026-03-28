# Simulation Scenarios: Hospitality & Events

> Multi-turn conversation scripts for testing all 5 agents in the Hospitality & Events industry. Each scenario uses a mock-data file and escalates complexity across 5 messages.

---

## Scenario 1 — Revenue Optimization (tests `rev_mgmt`)

### Mock Data
`mock-data/scenario-1.md` (Boutique hotel portfolio revenue data)

### Messages

**Message 1 — Set the Stage**
```
I manage revenue for a 3-property boutique hotel group in Oregon. We're underperforming our comp sets across all three properties and ownership is getting frustrated. I need a full strategy overhaul. What framework do you use to diagnose and fix revenue management problems across a multi-property portfolio?
```

**Message 2 — Provide the Data**
```
Here's our complete revenue data package — trailing 12 months of performance, channel mix, rate strategy, group business data, and guest retention metrics for all three properties. Diagnose the problems and prioritize the fixes:

{{MOCK_DATA}}
```

**Message 3 — Challenge a Finding**
```
My GM at the coastal property says OTA commissions are "the cost of doing business" and doesn't want to invest in direct booking. She says Expedia and Booking.com bring us guests we'd never reach on our own and the 20% commission is worth it for the volume. How do I make the business case for shifting channel mix?
```

**Message 4 — Technology Decision**
```
What revenue management technology should we implement across the portfolio? We have no RMS currently — the mountain property GM literally sets rates based on "feel." I need a realistic implementation plan with ROI timeline that I can present to ownership.
```

**Message 5 — Edge Case**
```
Our ownership group just told me they want to cut rates 20% across all three properties to "fill rooms" during a soft Q1. They say our competitors are offering deals and we need to match them. The board meeting is tomorrow and they want my recommendation. What's wrong with that strategy, and what should I recommend instead?
```

### Expected Agent Behavior
- **Message 1:** Establish a structured diagnostic framework (STR benchmarking, channel cost analysis, rate strategy audit, demand forecasting, guest retention review). Should reference RevPAR, RPI, and GOPPAR as key metrics.
- **Message 2:** Must catch all 6 planted issues. Priority order should emphasize immediate revenue recovery (attrition enforcement, rate optimization) before longer-term initiatives (loyalty, RMS implementation). Must flag gross vs. net revenue reporting.
- **Message 3:** Build a quantified business case showing net revenue per booking by channel. Should calculate that a $300 OTA booking at 22% commission nets $234, while a $285 direct booking at 4% nets $273.60 — direct is more profitable even at a lower rate. Should recommend a phased direct booking investment strategy, not an OTA elimination strategy.
- **Message 4:** Recommend appropriate RMS technology (IDeaS or Duetto for the urban property, potentially RMS Cloud for the mountain/coastal). Should outline implementation timeline (3-6 months), training requirements, data integration needs, and realistic ROI (typically 5-12% RevPAR lift within 12 months). Should flag that the mountain property needs basic demand forecasting before an RMS can be effective.
- **Message 5:** Must firmly push back on blanket rate cuts. Should explain rate integrity, comp set positioning risks (race to the bottom), and the long-term damage of training guests to wait for discounts. Recommend targeted strategies instead: value-added packages (same rate, added amenities), closed-user-group offers, length-of-stay incentives, shoulder-night promotions — anything that protects published rates while stimulating demand.

---

## Scenario 2 — Gala Event Planning (tests `event_plan`, `guest_exp`, `menu_eng`, `staff_sched`)

### Mock Data
`mock-data/scenario-2.md` (Corporate gala event plan)

### Messages

**Message 1 — Set the Stage**
```
I'm planning a 400-person black-tie fundraising gala at a hotel ballroom for a corporate foundation. We have 6 months until the event and a $200K budget. Ticket price is $500 per plate with a fundraising target of $450K. What's the planning framework I should be using, and what are the critical-path items I need to lock down first?
```

**Message 2 — Provide the Data**
```
Here's our current event plan — venue details, menu, entertainment, A/V, budget, staffing, and vendor contracts. Review everything and tell me what needs to change before we commit deposits and finalize contracts:

{{MOCK_DATA}}
```

**Message 3 — Challenge on Dietary Restrictions**
```
The client's event chair says they don't need to collect dietary restrictions in advance. Her exact words: "We'll just have a few extra vegetarian plates available and the chef can handle any allergies night-of. We've done this for years and it's never been a problem." Is that an acceptable approach for this event?
```

**Message 4 — Budget Pressure**
```
We just got the revised A/V quote and it came in $8,000 higher than budgeted because we need early venue access (starts at 2 PM, AV needs to be in by 11 AM — that's a $3,000 early access fee from the hotel plus additional AV crew time). Combined with the valet overflow parking and a few other overruns, we're now $30K over the $200K budget. The client doesn't want to increase the budget. What do we cut without compromising the guest experience at a $500/plate gala?
```

**Message 5 — Edge Case**
```
The client just called and wants to add 50 more guests (total 450). She says they can "just add tables — there's plenty of room." I pulled up the venue contract and the fire marshal max occupancy for banquet configuration is 380 including staff. We're already over at 400 guests plus 46 staff. What do I tell her, and what are the options?
```

### Expected Agent Behavior
- **Message 1:** Establish a structured event planning framework with critical-path items: venue contract (signed), budget with contingency (10-15%), menu tasting and allergen protocol, AV production timeline, entertainment contracts, and staffing plan. Should identify guarantee count deadlines, BEO process, and insurance requirements.
- **Message 2:** Must catch all 5 planted issues. The fire code violation should be the first and most urgent flag. Allergen protocol should be second (liability). Budget contingency, AV timeline conflict, and staffing ratio should follow. Should present findings as a prioritized action list with severity levels.
- **Message 3:** Must firmly reject this approach. Should explain: shellfish allergies affect 2-3% of adults (8-12 people at this event), anaphylaxis risk is real, "handling it night-of" means 400 plates are already plated or plating when an allergy is reported, the kitchen cannot pivot fast enough for a plated dinner at scale, and the event planner carries liability. Must recommend: mandatory dietary restriction collection on RSVP card, pre-prepared allergen-free alternatives for all courses, allergen-flagged place cards, server briefing on allergen tables, and EpiPen/first aid on-site.
- **Message 4:** Should prioritize cuts that don't affect the guest's direct experience at the table. Potential cuts: simplify florals/centerpieces (save $5-8K), reduce band from 6-piece to 4-piece or use DJ for dance portion (save $3-5K), eliminate livestream if audience is small (save $3-5K), reduce printed materials (digital program, save $2-3K), negotiate vendor payment terms, review valet numbers. Should flag that cutting food quality, server count, or A/V reliability at a $500/plate event is unacceptable.
- **Message 5:** Must be direct: the venue physically and legally cannot accommodate 450 guests. The current plan for 400 guests plus 46 staff already exceeds the 380-person fire marshal limit. Adding 50 more guests makes a bad situation worse. Options: (1) reduce guest count to 330-335 to leave room for 45-50 staff/vendors within the 380 limit, (2) move to a larger venue (major logistics change at this stage), (3) host a second event/overflow space for additional guests with a live feed, or (4) raise ticket price to $600+ and keep the smaller guest list to hit the same revenue target.
