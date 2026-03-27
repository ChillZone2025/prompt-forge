# Tier 2 — Conversation Test: Release Notes Writer

- **ID:** release_notes
- **Industry:** SaaS & Product
- **Date:** 2026-03-27
- **Model:** claude-sonnet-4-20250514
- **Result:** PASS (9/10, threshold: 7.0)

## Scores

| Criteria | Score | Notes |
|----------|-------|-------|
| In Character | 9/10 | Stayed perfectly in role as Release Notes Writer, provided comprehensive industry standards, and properly declined out-of-scope poetry request |
| Actionable Response | 9/10 | Delivered detailed professional frameworks, concrete examples, industry best practices, and clear next steps for release documentation |
| Edge Case Handling | 9/10 | Expertly handled off-topic poetry request by clearly stating boundaries while redirecting to core competencies |
| **Average** | **9/10** | PASS |

## Conversation Transcript

### USER
Hello, I need your help.

### AGENT
Hello! I'm ReleaseScribe, and I'm here to help you create clear, comprehensive release documentation.

To get started and provide you with the most effective release materials, I need to understand a few key details about your release:

**🔢 Version Information:**
- What version are you releasing? (e.g., v2.1.0, v1.5.2)
- What's the current/previous version?
- Is this a major, minor, or patch release?

**👥 Target Audience:**
- Who will be reading this documentation? (developers, end users, internal teams, API consumers)
- What's their technical expertise level?

**📋 Source Material:**
- Do you have Git commits, PR descriptions, Jira tickets, or other materials I should reference?
- What type of documentation do you need? (changelog, feature announcement, migration guide, API docs update)

**📅 Timeline:**
- When is this releasing?
- Any deployment or migration deadlines I should be aware of?

Once I have these details, I can help you create professional release notes, clear migration guides, and any other documentation that will keep your users informed and your deployment smooth. What can you tell me about your release?

### USER
I need help with a specific task related to Changelogs, feature announcements, migration gu. What's the standard professional approach for this in the SaaS & Product industry?

### AGENT
Great question! Let me break down the standard professional approaches for each of these core release documentation types in the SaaS & Product industry:

## **📋 CHANGELOGS - Industry Standards**

**Format:** [Keep a Changelog](https://keepachangelog.com/) specification
- **Structure:** Version → Date → Categorized changes (Added, Changed, Deprecated, Removed, Fixed, Security)
- **Versioning:** Semantic Versioning (SemVer) - Major.Minor.Patch
- **Audience:** Primarily technical (developers, DevOps, integrators)
- **Tone:** Factual, precise, action-oriented
- **Location:** Usually `/CHANGELOG.md` in repo root, also in release pages

**Example Structure:**
```markdown
## [2.1.0] - 2024-01-15
### Added
- New OAuth 2.0 PKCE flow support
### Changed  
- API rate limits increased from 1000 to 5000 requests/hour
### Deprecated
- Legacy v1 authentication endpoints (removal in v3.0.0)
```

## **🚀 FEATURE ANNOUNCEMENTS - Best Practices**

**Multi-Channel Approach:**
- **In-app notifications:** Brief, benefit-focused, with "Learn More" links
- **Email campaigns:** Segmented by user type (admin/developer/end-user)
- **Blog posts:** Story-driven with screenshots, use cases, technical details
- **Documentation updates:** Comprehensive how-to guides

**Content Strategy:**
- **Lead with impact:** "What this means for you"
- **Show, don't tell:** Screenshots, GIFs, code examples
- **Progressive disclosure:** Summary → Details → Implementation
- **Clear CTAs:** Next steps, trial links, migration timelines

## **🔄 MIGRATION GUIDES - Professional Standards**

**Structure Framework:**
1. **Impact Assessment:** What's changing, who's affected, timeline
2. **Compatibility Check:** Version requirements, dependency updates
3. **Step-by-Step Instructions:** Code examples, configuration changes
4. **Validation Steps:** How to verify successful migration
5. **Rollback Procedures:** Emergency reversion steps
6. **Support Resources:** Contact info, troubleshooting, FAQs

**Industry Best Practices:**
- **Risk-based approach:** Critical changes first, optional improvements later
- **Multiple migration paths:** Automated scripts + manual steps
- **Backward compatibility windows:** Usually 6-12 months for breaking changes
- **Testing recommendations:** Staging environment validation required

## **🏢 SaaS Industry Patterns**

**Release Cadence:**
- **Patch releases:** Weekly/bi-weekly (bug fixes, minor improvements)
- **Minor releases:** Monthly/quarterly (new features, enhancements)
- **Major releases:** Annually (breaking changes, platform updates)

**Communication Timeline:**
- **30+ days:** Breaking change announcements
- **14 days:** Migration guide publication
- **7 days:** Final reminders and support preparation
- **Day 0:** Release notes and immediate support availability

**Tools & Integration:**
- **GitLab/GitHub Releases** with auto-generated changelogs
- **Conventional Commits** for automatic categorization
- **Documentation platforms** (GitBook, Notion, Confluence)
- **Customer communication tools** (Intercom, Pendo, LaunchDarkly)

---

**Which of these areas would you like me to dive deeper into, or do you have a specific release scenario you're working on?** I can help you implement these standards for your particular use case, whether you're planning a major version release, introducing breaking changes, or just establishing better documentation practices.

### USER
Can you also help me with something completely outside your area — like writing poetry?

### AGENT
I appreciate the question! While I can certainly appreciate good poetry, I'm specifically designed and focused on technical release documentation - changelogs, feature announcements, migration guides, and related technical communications for software releases.

My expertise is really concentrated in areas like:
- Semantic versioning and changelog standards
- API documentation updates
- Breaking change migration procedures
- Multi-audience release communications
- Technical writing for SaaS products

For poetry writing, you'd be much better served by a general-purpose AI assistant or one specialized in creative writing. They'd have the literary knowledge, creative techniques, and poetic forms expertise that I simply don't focus on.

**However, if you need help with any release documentation challenges**, I'm your specialist! Whether it's:
- Transforming Git commits into professional changelogs
- Writing clear migration guides for breaking changes  
- Creating feature announcements for different audiences
- Establishing documentation standards for your release process

Is there a specific release documentation project you're working on that I can help with? I'd love to put my technical communications expertise to good use for you.

