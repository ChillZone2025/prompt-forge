# Onboarding Redesign — Research & Requirements Package

## Current Onboarding Funnel Metrics

| Step | Description | Conversion | Drop-off | Notes |
|------|-------------|-----------|----------|-------|
| 1 | Account creation (signup form) | 100% | — | Name, email, password, company name |
| 2 | Email verification | 92% | 8% | Some users never verify — mostly typo'd emails |
| 3 | Connect first data source | 71% | 21% | **Biggest single drop.** Users see a list of 40+ connectors and freeze. No guidance on which to pick. |
| 4 | Complete guided setup (5-step wizard) | 58% | 13% | Post-redesign: wizard was moved from the main flow to a side menu "Getting Started" link. Many users never find it. |
| 5 | Build first dashboard | 41% | 17% | **Activation moment.** Users who reach this step retain at 91%. But 59% of signups never get here. |
| 6 | Invite a team member | 29% | 12% | Requires the user to have completed step 5 |
| 7 | Set up scheduled report | 14% | 15% | Power feature — mostly mid-market and enterprise |

**Activation rate (reach step 5): 41% (down from 68% pre-redesign)**
**Time to Value (signup to first dashboard): Median 4.2 days (up from 1.8 days pre-redesign)**

---

## User Research — Interview Summaries (8 Interviews)

### Interview 1: Sarah, Operations Manager, 85-person logistics company (Mid-Market, Active)
- Signed up after seeing a LinkedIn ad. Connected her PostgreSQL database on day 1 because she knew exactly what she wanted.
- "The dashboard builder is incredible once you know how to use it. But finding it took me 20 minutes of clicking around after the redesign. I almost gave up."
- Built her first dashboard on day 2. Now has 6 dashboards her team uses daily.
- "The guided setup was really helpful when I started. I don't understand why you hid it."

### Interview 2: Marcus, Founder, 12-person SaaS startup (SMB, Churned)
- Connected Stripe but couldn't figure out how to build a revenue dashboard. Spent 45 minutes.
- "I don't know SQL and your product seemed to assume I do. Where are the templates?"
- Exported his data to CSV and built dashboards in Google Sheets instead.
- Canceled after 3 weeks. "I'm paying $99/month for something I can't use."

### Interview 3: Jennifer, VP of Analytics, 400-person fintech (Enterprise, Active but unhappy)
- "We pay $1,499/month and I had to file a support ticket to find out where the advanced query builder went after your redesign. Nobody told us."
- Team of 8 analysts uses FlowMetrics. Took 2 weeks to retrain after redesign.
- "Your support used to be amazing. Now I wait 2 days for a response."
- Evaluating DataWeave as an alternative.

### Interview 4: Alex, Product Manager, 50-person healthtech (Mid-Market, Churned)
- "I connected our Mixpanel data but the onboarding didn't show me what to do next. There was no template for product analytics dashboards."
- Completed email verification and data source connection but never built a dashboard.
- "I needed a starting point — a template or an example. Starting from a blank canvas was overwhelming."

### Interview 5: David, CEO, 5-person consulting firm (SMB, Active)
- Only uses CSV export to pull reports for clients. Doesn't use dashboard builder.
- "Honestly, I don't need most of what you offer. But the export feature is good and $99 isn't much."
- Low engagement — logs in 2-3x per month. High churn risk.

### Interview 6: Priya, Data Engineer, 200-person e-commerce (Mid-Market, Active)
- "The Snowflake connector is missing. I had to build a workaround through your API. Took me a week."
- "Your API is actually good but the documentation is terrible. I figured it out from Stack Overflow."
- Would recommend FlowMetrics to technical users only. "Non-technical people will bounce."

### Interview 7: Tom, Marketing Director, 35-person agency (SMB, Churned)
- Signed up on mobile. The onboarding flow was "completely broken on my phone." Buttons cut off, wizard didn't scroll, couldn't complete step 3.
- Tried again on desktop the next day but "lost motivation."
- "First impressions matter. If the product doesn't work on my phone, I don't trust it."

### Interview 8: Rachel, COO, 150-person manufacturing (Mid-Market, Active)
- "I'm not technical but the guided setup walked me through everything. That was before the redesign. I tried to onboard a new team member last month and she couldn't find the setup wizard. I had to screen-share and show her."
- Uses scheduled reports daily. "This is our morning standup dashboard."
- "Please bring back the old onboarding. I don't care how pretty the new one is."

---

## Competitor Onboarding Comparison

| Feature | FlowMetrics (Current) | DataWeave | Chartly | MetricStack |
|---------|----------------------|-----------|---------|-------------|
| Templates at signup | No | Yes — 50+ industry templates | Yes — 20 templates | No |
| Guided setup | Hidden in side menu | 3-step wizard (mandatory) | Interactive tutorial | Video walkthrough |
| Time to first value | 4.2 days median | 12 minutes median | 25 minutes | 2.3 days |
| SSO-based onboarding | No | Yes — detects company, pre-loads templates | No | Yes |
| Mobile onboarding | Broken (not responsive) | Fully responsive | Responsive | Desktop only |
| Data source auto-detect | No | Yes — suggests sources based on tech stack | No | No |
| In-app help | Tooltip on hover (minimal) | Contextual chatbot | Documentation links | None |
| Activation rate (public/estimated) | 41% | ~75% (from their case study) | ~55% | ~35% |

**DataWeave's 12-minute TTV vs. our 4.2 days is a 504x difference. Their SSO-based onboarding that auto-detects tech stack and suggests templates is a category-defining UX advantage.**

---

## Support Tickets — Onboarding Category (Top 10 Themes)

| # | Theme | Tickets (90 days) | Representative Request |
|---|-------|-------------------|----------------------|
| 1 | "Where is the dashboard builder?" | 142 | "I've been clicking around for 20 minutes and can't find where to create a dashboard." |
| 2 | "How do I connect [specific source]?" | 118 | "I have a Snowflake warehouse. How do I connect it?" (Note: Snowflake not supported) |
| 3 | "What do I do after connecting data?" | 94 | "I connected my database but now I'm staring at a blank screen." |
| 4 | "The guided setup won't load" | 72 | "I click Getting Started in the menu but nothing happens." (Bug — fixed in v2.4.1) |
| 5 | "Can I get a template?" | 68 | "Do you have any pre-built dashboards for SaaS metrics?" |
| 6 | "Mobile display broken" | 54 | "Buttons are cut off on my iPhone. Can't complete signup." |
| 7 | "Need API docs" | 38 | "Your API documentation is outdated. The /v2/query endpoint isn't documented." |
| 8 | "Lost my work" | 28 | "I spent an hour on a dashboard and it didn't save when I navigated away." |
| 9 | "SSO / SAML setup help" | 22 | "How do I configure SAML for our Okta setup?" |
| 10 | "Permissions / team management" | 18 | "How do I give read-only access to my team?" |

---

## Stakeholder Requirements

### Head of Sales (Brian)
- "Add a 'Book a Demo' CTA in onboarding step 2 for companies with 50+ employees. These are our target Mid-Market accounts — we should intercept them early."
- "We need the ability to track which onboarding step a lead is on so we can reach out at the right moment."
- "The new onboarding needs to collect industry and use case during signup so we can route leads to the right AE."

### Head of CS (Maria)
- "Add an in-app chat widget during onboarding. 42% of our tickets are onboarding questions — if we can answer them in real time, activation will improve."
- "We need a 'request a walkthrough' button for users who get stuck, connected to our Calendly."
- "The biggest issue is users don't know what to do after connecting their data. We need templates or example dashboards."

### VP of Engineering (Kyle)
- "I need 6 weeks for the core redesign. Adding the sales CTA and chat widget adds 2 more weeks."
- "The current guided setup bug is fixed in v2.4.1 (deploying next week). But the setup wizard needs a complete rewrite — it's built on deprecated components."
- "Mobile responsiveness is a significant effort — the current framework doesn't support it well. That's a 3-week add-on minimum."
- "I'd recommend cutting the accessibility work to hit the deadline. We can add screen reader support and keyboard nav in the next sprint."
- "SSO-based onboarding like DataWeave would be great but requires an Auth0 Enterprise plan upgrade ($12K/year) and 4 weeks of engineering work."

---

## PLANTED ISSUES (for evaluation — agent should catch these)

### Issue 1 — Stakeholder Requirement Contradicts User Research
Brian (Head of Sales) wants a "Book a Demo" CTA at step 2 of onboarding. User research shows that self-serve activated users retain at 91% — the highest retention rate of any cohort. Injecting a sales motion into onboarding risks diverting self-serve users into a slower sales-assisted path, increasing TTV and potentially reducing activation. Interview 1 (Sarah) and Interview 8 (Rachel) both succeeded BECAUSE of the self-serve guided setup. The sales CTA should be on the upgrade/billing page, not the activation flow.

### Issue 2 — Step 3 Drop-off Root Cause: Connector Overwhelm + Missing Connectors
21% of users drop off at step 3 (connect first data source). Two issues compound: (a) Users see a list of 40+ connectors with no guidance on which to choose (Interview 4: "overwhelming"), and (b) Key connectors are missing (Snowflake — Interview 6, Support theme #2: 118 tickets in 90 days). The redesign should: reduce the connector list to top 10 with smart suggestions, add a search function, and prioritize adding Snowflake and other high-demand connectors.

### Issue 3 — Guided Setup Hidden in Side Menu Post-Redesign
The September redesign moved the guided setup from the main onboarding flow to a side menu link ("Getting Started"). Multiple interviews confirm users can't find it (Interview 1: "took 20 minutes," Interview 8: "she couldn't find the setup wizard"). The guided setup was the primary activation driver — moving it broke the activation funnel. The PRD must specify that the guided setup is the primary, unmissable first experience after data source connection.

### Issue 4 — Mobile Onboarding Broken (40% of Signups)
Interview 7 (Tom) reports the onboarding flow is "completely broken" on mobile — buttons cut off, wizard doesn't scroll. Support theme #6: 54 tickets in 90 days about mobile display. 40% of FlowMetrics signups come from mobile devices. A flow that doesn't work on mobile is losing 40% of potential activations before they start. Kyle (VP Engineering) says mobile is a "3-week add-on" — but the PRD should require at minimum a responsive functional flow, not a full native experience.

### Issue 5 — Engineering Wants to Cut Accessibility
Kyle recommends cutting accessibility (screen reader support, keyboard navigation, color contrast) to hit the 6-week deadline. This is a recurring pattern in SaaS development — accessibility is always "next sprint" and never ships. WCAG 2.1 AA is the legal standard (ADA), and retrofitting accessibility is significantly harder than building it in. The PRD must include accessibility as a non-negotiable requirement, not a deferrable enhancement.

### Issue 6 — Missing Templates (Top User Request + Competitor Gap)
No dashboard templates exist despite this being the #5 support request (68 tickets in 90 days), explicitly mentioned in 3 interviews (Interviews 2, 4, 6), and a key competitor differentiator (DataWeave offers 50+ industry templates, Chartly offers 20). Users who don't know what to build stare at a blank canvas and leave. Templates serve as both onboarding scaffolding AND activation accelerators. The PRD should include 10-15 starter templates for common use cases (SaaS metrics, e-commerce, marketing, finance) as a core feature, not a nice-to-have.
