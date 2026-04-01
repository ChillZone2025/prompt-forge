# Vulnerability Assessment — CustomerHub Portal Pre-Launch Review

## Application Overview
- **Application:** CustomerHub — B2B customer portal for document management, billing, and support
- **Company:** Nexus Cloud Solutions (B2B SaaS, ~500 customers, SOC 2 Type II certified)
- **Launch Target:** April 12, 2026 (3 weeks from assessment)
- **Architecture:** React frontend → Node.js API (Express) → PostgreSQL database
- **Hosting:** AWS (us-east-1) — ECS Fargate containers, RDS PostgreSQL, CloudFront CDN, S3 for document storage
- **Authentication:** Auth0 (SSO/SAML for enterprise, email/password for SMB)
- **Data Classification:** Customer PII (names, emails, phone), financial data (invoices, payment history), uploaded documents (contracts, SOWs, NDAs)
- **Compliance Requirements:** SOC 2 Type II, GDPR (EU customers), CCPA

---

## Vulnerability Scan Results — Infrastructure + Application

### Scanner: Tenable.io (infrastructure) + Burp Suite Pro (application)
### Scan Date: March 20, 2026

### Critical Findings

| ID | CVSS | Category | Finding | Location | Details |
|----|------|----------|---------|----------|---------|
| V-001 | 9.8 | Application | SQL Injection — Boolean-based blind | POST /api/v2/documents/search (parameter: `filter`) | Authenticated endpoint. Input concatenated into SQL query without parameterization. Full database read confirmed via Burp exploitation. Attacker with any valid user session can extract all customer data across all tenants. |
| V-002 | 9.1 | Application | Broken Access Control — IDOR | GET /api/v2/customers/{id}/documents | Changing the customer ID parameter returns documents for OTHER customers. No tenant isolation check on the API. Any authenticated user can access any customer's documents by enumerating IDs. |
| V-003 | 9.0 | Infrastructure | Default Admin Credentials | https://admin.customerhub.nexuscloud.com/login | Admin panel accessible at /admin. Username: admin, Password: admin123. Full application management access: user management, configuration, data export. Panel is on the same domain, behind a path (not a separate network). |

### High Findings

| ID | CVSS | Category | Finding | Location | Details |
|----|------|----------|---------|----------|---------|
| V-004 | 8.6 | Infrastructure | TLS 1.0/1.1 Enabled | api.customerhub.nexuscloud.com:443 | Server accepts TLS 1.0 and 1.1 connections. Vulnerable to POODLE (CVE-2014-3566), BEAST (CVE-2011-3389). PCI DSS 4.0 prohibits TLS 1.0. |
| V-005 | 8.2 | Application | Missing MFA on Admin Panel | admin.customerhub.nexuscloud.com | No multi-factor authentication required for admin access. Combined with V-003 (default credentials), any attacker can gain full admin access with no additional verification. |
| V-006 | 7.8 | Infrastructure | Database Accessible from DMZ | RDS instance sg-0a1b2c3d | Security group allows inbound PostgreSQL (5432) from the web application's security group AND from the NAT gateway's public subnet. Database is not isolated — any compromised host in the VPC can reach it directly. |
| V-007 | 7.5 | Application | Insecure Direct Object Reference — Invoice Download | GET /api/v2/invoices/{invoice_id}/download | Invoice PDFs downloadable by any authenticated user regardless of tenant. Contains customer names, addresses, payment amounts, and partial payment card numbers. |
| V-008 | 7.4 | Infrastructure | S3 Bucket with Overly Permissive Policy | s3://nexus-customerhub-documents | Bucket policy allows `s3:GetObject` for any authenticated AWS principal (not limited to application role). If an attacker obtains any AWS credentials (even from an unrelated account), they could download customer documents. |

### Medium Findings

| ID | CVSS | Category | Finding | Location | Details |
|----|------|----------|---------|----------|---------|
| V-009 | 6.5 | Application | Verbose Error Messages | Various API endpoints | Stack traces returned in 500 responses. Exposes framework version (Express 4.18.2), database type (PostgreSQL 15.3), file paths, and query structures. Information disclosure aids further attacks. |
| V-010 | 6.1 | Application | Missing Rate Limiting on Login | POST /api/v2/auth/login | No rate limiting or account lockout. Brute force attacks against email/password login are unrestricted. No CAPTCHA after failed attempts. |
| V-011 | 5.8 | Application | Cross-Site Scripting (Stored XSS) | Document title field (displayed on dashboard) | User-supplied document titles rendered without sanitization. Attacker can inject JavaScript that executes in the context of other users viewing the document list. |
| V-012 | 5.5 | Infrastructure | Missing CloudWatch Alarms | AWS infrastructure | No alarms configured for: failed login attempts, unusual API call patterns, S3 access from unexpected sources, security group changes. Limited detection capability for ongoing attacks. |
| V-013 | 5.3 | Application | Session Tokens Don't Expire on Password Change | Auth flow | When a user changes their password, existing session tokens remain valid. Compromised sessions cannot be invalidated by password reset. |
| V-014 | 5.0 | Infrastructure | Outdated Node.js Runtime | ECS container image | Node.js 18.12.0 (EOL: April 2025). Missing security patches for multiple CVEs including CVE-2023-44487 (HTTP/2 Rapid Reset). |

### Low Findings

| ID | CVSS | Category | Finding | Location | Details |
|----|------|----------|---------|----------|---------|
| V-015 | 3.7 | Infrastructure | Missing Security Headers | All responses | Missing: Content-Security-Policy, X-Content-Type-Options, Strict-Transport-Security (HSTS), X-Frame-Options, Permissions-Policy. |
| V-016 | 3.1 | Application | User Enumeration via Login Response | POST /api/v2/auth/login | Different error messages for "user not found" vs "incorrect password." Allows enumeration of valid email addresses. |
| V-017 | 2.6 | Infrastructure | DNS Zone Transfer Enabled | ns1.nexuscloud.com | AXFR allowed to any source. Exposes internal hostnames and IP addresses. |

---

## Existing Security Controls

| Control | Status | Details |
|---------|--------|---------|
| WAF | Active | AWS WAF on CloudFront. OWASP Core Rule Set enabled. Custom rules for rate limiting on some endpoints. |
| Encryption at Rest | Active | RDS encrypted (AES-256). S3 SSE-S3 encryption. |
| Encryption in Transit | Partial | TLS on all endpoints, but TLS 1.0/1.1 still accepted (V-004). |
| Authentication | Active | Auth0 integration. SSO/SAML for enterprise. Email/password for SMB (no MFA requirement). |
| Authorization | Broken | Tenant isolation not enforced at API layer (V-002, V-007). |
| Logging | Partial | CloudTrail enabled. Application logs to CloudWatch. No centralized SIEM. No alerting (V-012). |
| Network Segmentation | Weak | Single VPC, no private subnets for database. Database accessible from web tier and NAT subnet (V-006). |
| Vulnerability Scanning | Ad-hoc | This is the first full scan. No continuous scanning program. No dependency scanning (SCA). |
| Penetration Testing | Never | No penetration test has been conducted on this application. |
| Incident Response Plan | Documented | IR plan exists but has never been tested (no tabletop exercise). |
| Backup & Recovery | Active | RDS automated backups (7-day retention). S3 versioning enabled. RTO: 4 hours, RPO: 1 hour. |
| Code Review | Partial | PR reviews by engineering team, but no dedicated security review. No SAST/DAST in CI/CD pipeline. |

---

## WCAG Accessibility Status

| Criterion | Status |
|-----------|--------|
| WCAG 2.1 Level A | 14 of 30 criteria fail (per automated scan) |
| WCAG 2.1 Level AA | Not assessed — Level A failures must be resolved first |
| Key Failures | Missing alt text on all images, form labels missing, keyboard navigation broken on 3 major flows, color contrast failures on 8 components, no skip navigation |

---

## PLANTED ISSUES (for evaluation — agent should catch these)

### Issue 1 — SQL Injection Behind Authentication (V-001, CVSS 9.8)
The SQL injection in /api/v2/documents/search is the most critical finding. It's on an authenticated endpoint, which means the VP of Engineering might deprioritize it ("requires authentication = lower risk"). This is wrong — any customer with a valid account can exploit this to read the entire database across all tenants, including other customers' PII, financial data, and documents. The WAF provides some protection but WAFs are bypassable (encoding, case variation, nested queries). The code must be fixed (parameterized queries / prepared statements). This is a must-fix-before-launch item. A single exploitation would constitute a data breach affecting all 500 customers.

### Issue 2 — Default Admin Credentials on Admin Panel (V-003 + V-005)
The admin panel at /admin has default credentials (admin:admin123) and no MFA. The VP of Engineering claims it's "only accessible from the internal network" — but the scan results show it's on the same domain (admin.customerhub.nexuscloud.com), accessible via the public internet (Burp Suite reached it). Even if it were internal-only, internal networks are regularly compromised. Default credentials + no MFA + full admin access = trivial full application takeover. Must change credentials AND implement MFA AND restrict to VPN/internal network before launch.

### Issue 3 — Broken Access Control / Multi-Tenant Isolation Failure (V-002, V-007)
Two separate IDOR findings show that the API does not enforce tenant isolation. Any authenticated user can access documents and invoices belonging to other customers by changing the ID parameter. In a multi-tenant B2B SaaS application, this is a fundamental architecture flaw, not a simple bug. It means every customer's data is accessible to every other customer. This is a SOC 2 failure (CC6.1 — Logical Access), a GDPR violation (unauthorized access to personal data), and a breach-in-waiting. Must-fix before launch — requires implementing tenant-scoped authorization checks at the API layer.

### Issue 4 — TLS 1.0 Enabled (V-004, CVSS 8.6)
TLS 1.0 and 1.1 are deprecated and vulnerable. PCI DSS 4.0 explicitly prohibits TLS 1.0. The VP of Engineering says disabling it will "break integration with 3 legacy customers." The correct response is NOT to leave a known vulnerability in production — it's to work with those 3 customers on upgrading to TLS 1.2+. Maintaining TLS 1.0 for backward compatibility exposes all 500 customers to downgrade attacks. Offer the legacy customers a 30-day migration timeline with support, and disable TLS 1.0/1.1 before or at launch.

### Issue 5 — Database Accessible from DMZ (V-006)
The PostgreSQL RDS instance is accessible from the web application security group AND from the NAT gateway's public subnet. This means a compromised web server can directly query the database (expected), but so can any host in the public subnet. Proper architecture: database in a private subnet with security groups allowing only the application tier. This is a network segmentation failure that dramatically increases the blast radius of any infrastructure compromise.

### Issue 6 — WCAG Accessibility Failures
14 of 30 WCAG 2.1 Level A criteria fail. This isn't a "nice to have" — Level A is the minimum accessibility standard. Missing form labels, broken keyboard navigation, and missing alt text make the application unusable for users with disabilities. ADA litigation against SaaS products is increasing, and WCAG 2.1 AA is the accepted standard. The VP may push to defer accessibility to post-launch, but this creates legal risk and excludes approximately 15-20% of potential users. At minimum, keyboard navigation and form labels must be fixed before launch — these affect basic usability, not just compliance.
