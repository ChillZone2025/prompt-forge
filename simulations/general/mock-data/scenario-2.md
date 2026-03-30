# Mock Data: Cross-Functional Project Status Report

## Project Overview
**Project Name:** CRM Migration — Salesforce to HubSpot
**Project Code:** CRM-2025-001
**Sponsor:** VP of Revenue Operations, Angela Torres
**Project Manager:** David Chen
**Start Date:** July 1, 2025
**Original Go-Live Date:** January 15, 2026
**Current Go-Live Date:** January 15, 2026 (unchanged)
**Overall Status:** 🟡 Yellow (was Green in November)

**Business Case:** CloudSync Solutions has outgrown its Salesforce implementation. The current instance has 47 custom objects, 312 workflow rules, and significant technical debt from 3 years of ad-hoc customization. HubSpot's integrated marketing and sales hub will reduce tool costs by $180,000/year and consolidate 4 separate tools (Salesforce, Pardot, Outreach, Drift) into one platform.

---

## 1. Project Timeline & Milestones

| Milestone | Planned Date | Actual Date | Status |
|-----------|-------------|-------------|--------|
| Project Kickoff | Jul 1, 2025 | Jul 1, 2025 | ✅ Complete |
| Requirements Gathering | Jul 15, 2025 | Jul 22, 2025 | ✅ Complete (1 week late) |
| Vendor Selection & Contract | Aug 1, 2025 | Aug 1, 2025 | ✅ Complete |
| Data Mapping & Architecture | Aug 15, 2025 | Sep 5, 2025 | ✅ Complete (3 weeks late) |
| HubSpot Instance Configuration | Sep 15, 2025 | Oct 10, 2025 | ✅ Complete (4 weeks late) |
| Custom Integration Development | Oct 1, 2025 | In Progress | 🟡 65% complete |
| Data Migration — Phase 1 (Historical) | Oct 15, 2025 | Nov 20, 2025 | ✅ Complete |
| Data Migration — Phase 2 (Live Cutover) | Dec 15, 2025 | Not started | 🔴 Blocked |
| User Acceptance Testing (UAT) | Dec 1, 2025 | In Progress | 🟡 40% complete |
| Training — Sales Team | Dec 15, 2025 | In Progress | 🟢 On track |
| Training — Marketing Team | Jan 1, 2026 | Not started | 🟢 On track |
| Training — Customer Success | Jan 5, 2026 | Not started | 🟢 On track |
| Go-Live Readiness Review | Jan 10, 2026 | Not scheduled | ⬜ Pending |
| **Go-Live** | **Jan 15, 2026** | — | **🟡 At Risk** |
| Hypercare Period (30 days) | Jan 15 - Feb 14 | — | ⬜ Pending |
| Salesforce Decommission | Mar 1, 2026 | — | ⬜ Pending |

### Critical Path Analysis
The critical path runs through: Custom Integration Development → Data Migration Phase 2 → UAT Sign-off → Go-Live.

Current bottleneck: Custom Integration Development is at 65% completion. The remaining 35% includes the bi-directional sync with the product database (CloudSync's proprietary API), which requires an API endpoint that the engineering team has not yet built.

---

## 2. Budget Tracking

### Budget Summary
| Category | Original Budget | Current Spend | Forecast | Variance |
|----------|----------------|---------------|----------|----------|
| HubSpot License (Year 1) | $86,000 | $86,000 | $86,000 | $0 |
| Implementation Partner (Aptitude 8) | $120,000 | $108,000 | $145,000 | +$25,000 |
| Data Migration Services | $35,000 | $35,000 | $52,000 | +$17,000 |
| Internal Engineering Time | $0 | $0 | $0 | $0 |
| Training & Change Management | $15,000 | $8,500 | $15,000 | $0 |
| Contingency (10%) | $25,600 | $0 | $0 | — |
| **Total** | **$281,600** | **$237,500** | **$298,000** | **+$16,400** |

### Budget Notes
- Implementation partner overage due to additional custom object migration complexity (47 objects vs. estimated 25)
- Data migration cost increase for deduplication services — discovered 18,000 duplicate contact records
- Internal engineering time tracked under Engineering department budget, not project budget
- Training costs on track — leveraging HubSpot Academy (free) for basic training modules

---

## 3. Risk Register

| ID | Risk | Probability | Impact | Score | Owner | Mitigation | Status | Date Added |
|----|------|-------------|--------|-------|-------|------------|--------|------------|
| R01 | Data loss during migration | Medium | Critical | 12 | David C. | Full backup before each migration run; validation scripts | Active — backup procedures tested | Jul 15 |
| R02 | Custom integration delays | High | High | 16 | Engineering Lead | Weekly check-ins with eng team; fallback to manual process | Active — integration 65% complete | Aug 1 |
| R03 | User adoption resistance | Medium | Medium | 8 | Angela T. | Change management communications; early champion program | Active — 12 champions identified | Jul 15 |
| R04 | Historical data integrity issues | High | Medium | 12 | Data Lead | Data quality audit completed; cleansing in progress | Active — 18K duplicates found | Aug 15 |
| R05 | Salesforce contract overlap costs | Low | Medium | 4 | Finance | Negotiated early termination clause | Mitigated | Jul 1 |
| R06 | Reporting parity — executive dashboards | Medium | High | 12 | RevOps | Map all 23 Salesforce reports to HubSpot equivalents | Open — no action taken | Sep 10 |
| R07 | Third-party app compatibility | Medium | Medium | 8 | IT Lead | Audit all Salesforce-connected apps (identified 14) | Active — 9 of 14 evaluated | Oct 1 |
| R08 | GDPR/CCPA compliance during migration | Medium | Critical | 12 | Legal | Legal review of data handling procedures | Open — no action taken | Oct 15 |

---

## 4. Stakeholder Communication Log

| Date | Stakeholder | Channel | Topic | Action Items |
|------|------------|---------|-------|-------------|
| Jul 1 | All hands | Town hall | Project kickoff announcement | None |
| Jul 15 | Sales team | Slack #crm-migration | Timeline and impact overview | Sales reps to document custom Salesforce workflows |
| Aug 1 | Executive team | Email | Vendor selection complete — Aptitude 8 | Budget approval for implementation partner |
| Aug 15 | Marketing team | Meeting | Pardot migration plan | Marketing to export all active campaigns and automations |
| Sep 10 | RevOps | Meeting | Reporting requirements gathered | David to map Salesforce reports to HubSpot |
| Oct 1 | IT/Security | Slack | Third-party app audit kickoff | IT to evaluate each connected application |
| Oct 15 | Sales team | Email | Training schedule announced | Sales team to enroll in HubSpot Academy by Nov 1 |
| Nov 1 | Executive team | Meeting | Status update — Yellow status | Angela to escalate engineering API dependency |
| Nov 15 | Customer Success | — | — | — |
| Dec 1 | Finance | Email | Budget variance notification (+$16K) | Finance to approve contingency draw |
| Dec 15 | Sales team | Meeting | UAT kickoff — sales scenarios | Sales to complete 5 test scenarios each by Jan 3 |

---

## 5. Data Migration Status

### Phase 1: Historical Data (Complete)
| Object | Source Records | Migrated | Validated | Status |
|--------|--------------|----------|-----------|--------|
| Contacts | 142,000 | 124,000 | Sample tested (2,000) | ✅ Complete |
| Companies | 28,500 | 28,500 | Sample tested (500) | ✅ Complete |
| Deals/Opportunities | 18,200 | 18,200 | Sample tested (300) | ✅ Complete |
| Activities (Emails, Calls, Notes) | 890,000 | 734,000 | Sample tested (1,000) | ✅ Complete |
| Custom Objects (47) | 2.1M records | 1.8M records | Sample tested (5,000) | ✅ Complete |
| Attachments/Files | 45,000 | 38,200 | Sample tested (200) | ✅ Complete |

### Migration Notes
- 18,000 contact records identified as duplicates — deduplicated during migration (142K → 124K)
- 156,000 activity records excluded (system-generated, no business value)
- 6,800 attachment records excluded (orphaned files, no parent record)
- Custom object migration required field mapping for 312 custom fields across 47 objects
- **Validation approach:** Random sample testing at 1-2% of total records per object type. Spot-checked field mapping accuracy, relationship integrity, and picklist value mapping.

### Phase 2: Live Cutover (Not Started)
- Requires: Custom integration API endpoint (not yet built by engineering)
- Scope: All data created between Phase 1 freeze date (Nov 15) and go-live
- Estimated delta: ~4,500 new contacts, ~2,200 new deals, ~45,000 new activities
- Planned approach: Automated sync script with manual reconciliation
- **Test status:** Script developed but not tested at production volume

---

## 6. Training Completion Metrics

### Training Program Overview
| Module | Target Audience | Format | Duration | Enrollment | Completion |
|--------|----------------|--------|----------|------------|------------|
| HubSpot Sales Hub Fundamentals | Sales (14 people) | HubSpot Academy (online) | 4 hours | 14 | 9 |
| HubSpot CRM Basics | All users (85 people) | HubSpot Academy (online) | 2 hours | 62 | 18 |
| Custom Workflow Training | RevOps, Sales Ops (6 people) | Live workshop | 3 hours | 6 | 0 (scheduled Jan 8) |
| Data Entry & Hygiene Standards | Sales, CS (22 people) | Live workshop | 1 hour | 22 | 0 (scheduled Jan 6) |
| Reporting & Dashboards | Managers (12 people) | Live workshop | 2 hours | 10 | 0 (scheduled Jan 9) |
| Admin & Configuration | IT, RevOps (4 people) | Vendor-led (Aptitude 8) | 8 hours | 4 | 4 |

### Training Summary Dashboard (as reported)
- **Total training enrollment:** 118 enrollments across 6 modules
- **Training completion rate:** 26% (31 of 118 enrollments completed)
- **On track for go-live:** 🟢 Yes — remaining sessions scheduled before Jan 15

---

## 7. Integration Dependency Map

### System Integrations Required
| System | Integration Type | Owner | Status | Go-Live Required? |
|--------|-----------------|-------|--------|-------------------|
| CloudSync Product API | Bi-directional sync | Engineering | 🔴 Not started | Yes — Critical |
| Stripe (Billing) | One-way (HubSpot → Stripe) | RevOps | 🟢 Complete | Yes |
| Slack | Notifications | IT | 🟢 Complete | No |
| Zapier (misc. automations) | Multiple workflows | RevOps | 🟡 In Progress (8 of 14 rebuilt) | Yes |
| Google Workspace | Calendar, email tracking | IT | 🟢 Complete (native HubSpot) | Yes |
| Intercom (Support) | Contact sync | CS Team | 🟡 In Progress | Yes |
| Tableau (Reporting) | Data connector | Data Team | 🔴 Not started | No (post-launch) |
| DocuSign | E-signature integration | Legal | 🟢 Complete | Yes |
| Outreach.io | Decommission (replaced by HubSpot Sequences) | Sales Ops | 🟡 Migration in progress | Yes |

### Dependency Notes
- **CloudSync Product API:** Engineering team has not started building the API endpoint required for the bi-directional sync. This was flagged in November. Current engineering sprint priorities are focused on the product roadmap (AI-powered workflow suggestions and Salesforce bi-directional sync for the product — separate from the CRM migration). The API endpoint is not on any sprint backlog as of Dec 20.
- **Zapier automations:** 14 active Zapier workflows connect Salesforce to various tools. 8 have been rebuilt for HubSpot. Remaining 6 require the custom API endpoint to function.

---

## 8. Change Requests

| CR# | Description | Requested By | Date | Impact | Status |
|-----|------------|-------------|------|--------|--------|
| CR-001 | Add custom lead scoring model | Sarah K. (Sales) | Aug 20 | +$8,000, +2 weeks | Approved |
| CR-002 | Migrate Pardot email templates (120 templates) | Marketing | Sep 5 | +$12,000, +1 week | Approved |
| CR-003 | Custom deal stage automation | Marcus D. (Sales) | Oct 1 | +$5,000, +1 week | Approved |
| CR-004 | Integration with new proposal tool (PandaDoc) | Sales Ops | Nov 10 | +$4,000, +2 weeks | Approved |
| CR-005 | Historical email open/click data migration | Marketing | Nov 25 | +$7,000, +1 week | Under Review |

---

## PLANTED ISSUES

### Issue 1: Critical Dependency Marked Green That Blocks Go-Live
**Location:** Section 7, Integration Dependency Map — CloudSync Product API
**The problem:** The CloudSync Product API integration is marked as 🔴 in the dependency map but the overall project status is 🟡 Yellow, not 🔴 Red. More critically, the Dependency Notes reveal that the engineering team hasn't even started building the required API endpoint, it's not on any sprint backlog, and engineering is focused on separate product roadmap items. This is a hard blocker for go-live — without this API, the bi-directional sync cannot work, Phase 2 data migration cannot complete, and 6 of 14 Zapier automations cannot be rebuilt. The Jan 15 go-live date is not achievable unless this dependency is resolved immediately.
**What catching it looks like:** Agent identifies the API dependency as a project-killing blocker, notes that it's not just delayed but entirely unplanned, calculates the minimum time needed (sprint planning + development + testing + integration), and recommends an immediate escalation to the engineering VP or CTO with a revised timeline.

### Issue 2: Risk Sitting Open for 3+ Months With No Mitigation
**Location:** Section 3, Risk Register — R06 (Reporting parity) and R08 (GDPR/CCPA compliance)
**The problem:** R06 (Reporting parity for executive dashboards) was added September 10 and has status "Open — no action taken" after 3+ months. Executive dashboard availability at go-live is critical — if leadership can't run their reports, they'll block the migration or demand a rollback. R08 (GDPR/CCPA compliance during migration) was added October 15 and also shows "Open — no action taken." Compliance risk during data migration is not optional — it's a legal requirement. Both risks have Medium+ probability and High/Critical impact, yet zero mitigation work has been done.
**What catching it looks like:** Agent flags both open risks, notes the elapsed time without action, emphasizes the compliance risk as non-negotiable (GDPR violations carry penalties up to 4% of global revenue), and recommends immediate assignment and action plans for both.

### Issue 3: Budget Hides Scope Creep by Excluding Internal Costs
**Location:** Section 2, Budget Tracking — "Internal Engineering Time" line
**The problem:** Internal engineering time is listed at $0 across all columns — original budget, current spend, and forecast. But the project requires engineering to build a custom API endpoint (Section 7), and the engineering team is already involved in integration work. By tracking engineering time under the department budget instead of the project budget, the true cost of the CRM migration is understated. The 5 approved change requests (CR-001 through CR-004 approved = +$29,000 in external costs) don't account for the internal engineering and RevOps hours to implement them. Real project cost is likely $50,000-$80,000 higher than reported.
**What catching it looks like:** Agent identifies that internal engineering time should be allocated to the project budget, notes the change requests that add scope without tracking internal effort, and recommends a time-tracking exercise to capture the true total cost of ownership for this migration.

### Issue 4: Training "Completion" Counts Enrollment, Not Actual Completion
**Location:** Section 6, Training Completion Metrics — Training Summary Dashboard
**The problem:** The training summary reports "26% completion" and status "🟢 On track." But examining the detail table reveals that only 31 out of 118 enrollments are actually completed. The two self-paced modules that are already available (HubSpot Sales Hub Fundamentals and CRM Basics) show only 9 out of 14 sales staff and 18 out of 62 total users have completed them — despite being available for months. The remaining 4 modules are all live workshops that haven't happened yet. Marking training as "🟢 On track" when 74% of users haven't completed available training, with go-live 4 weeks away, is misleading. There's no accountability mechanism for completion, and the remaining live sessions are packed into a 3-day window (Jan 6-9) right before go-live.
**What catching it looks like:** Agent distinguishes between enrollment and completion, flags the low completion rates on already-available modules, questions whether 3 days of compressed live training before go-live is adequate, and recommends a mandatory completion deadline with consequences for non-completion.

### Issue 5: Missing Stakeholder — Customer Success Not Consulted
**Location:** Section 4, Stakeholder Communication Log — Nov 15 entry for Customer Success
**The problem:** The Customer Success team (8 people) has a blank entry on November 15 — no channel, no topic, no action items. Looking at the full communication log, Customer Success has never been directly consulted or briefed since the project kickoff. Yet CS owns the customer-facing relationship, uses the CRM daily, and is a target audience for training. They also own the Intercom integration (Section 7), which is still in progress. The go-live readiness review requires CS sign-off, but they haven't been engaged in requirements, UAT, or change management. If CS discovers at go-live that their workflows don't work, the customer experience will be directly impacted.
**What catching it looks like:** Agent identifies the gap in CS engagement, notes the blank communication log entry, connects it to the Intercom integration status and training enrollment, and recommends an immediate CS stakeholder workshop to capture their requirements before UAT concludes.

### Issue 6: Data Migration Validated on Sample Only — Not at Scale
**Location:** Section 5, Data Migration Status — Phase 1 validation
**The problem:** All Phase 1 data migration objects show "Sample tested" with small sample sizes: 2,000 out of 142,000 contacts (1.4%), 500 out of 28,500 companies (1.8%), 300 out of 18,200 deals (1.6%), 1,000 out of 890,000 activities (0.1%), 5,000 out of 2.1M custom object records (0.2%), and 200 out of 45,000 attachments (0.4%). With 47 custom objects and 312 custom fields, the probability that a 0.2% sample caught all field mapping errors, relationship integrity issues, and edge cases is extremely low. Particularly concerning: the custom objects and activities have the lowest sample rates but the highest complexity. The migration also dropped 18,000 duplicate contacts, 156,000 activities, and 6,800 attachments — these exclusions should be validated to ensure legitimate records weren't incorrectly purged.
**What catching it looks like:** Agent calculates the sample rates, flags them as statistically insufficient for the data complexity involved, recommends automated validation scripts that check 100% of records for key integrity rules (required fields populated, relationship IDs valid, picklist values mapped correctly), and specifically flags the need to validate the deduplication and exclusion logic to prevent data loss.
