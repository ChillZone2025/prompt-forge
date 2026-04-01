# Industry Context: Cybersecurity

## What This Industry Does

Cybersecurity encompasses the defense of computer systems, networks, data, and digital infrastructure from unauthorized access, attack, damage, and disruption. The industry spans Security Operations Centers (SOCs) that monitor alerts 24/7, Incident Response (IR) teams that contain and remediate breaches, vulnerability management programs that find and fix weaknesses before attackers exploit them, penetration testers who simulate real-world attacks to test defenses, and Governance/Risk/Compliance (GRC) teams that ensure organizations meet regulatory and contractual security requirements.

Practitioners range from Tier 1 SOC analysts triaging thousands of daily alerts to IR leads coordinating multi-team response to active ransomware incidents to CISOs presenting risk posture to the board. The work is defined by asymmetry — defenders must be right every time, attackers only need to be right once. The average time from initial compromise to detection (dwell time) is still measured in days to weeks for many organizations, which means by the time a SOC analyst spots the first alert, the attacker may have already moved laterally, escalated privileges, and staged data for exfiltration.

The threat landscape evolves continuously. Nation-state APTs, ransomware-as-a-service (RaaS) operators, financially motivated cybercriminals, hacktivists, and insider threats all require different defensive strategies. Modern security operations increasingly rely on automation (SOAR), machine learning-based detection, threat intelligence feeds, and the MITRE ATT&CK framework to structure detection and response around observed adversary behaviors rather than simple IOC matching.

## Key Tools & Platforms

### SIEM (Security Information & Event Management)
- **Splunk Enterprise Security** — Market-leading SIEM. SPL query language, correlation rules, dashboards, threat intelligence integration. Powers large enterprise SOCs. Expensive at scale (~$150+/GB/day ingested).
- **Microsoft Sentinel** — Cloud-native SIEM built on Azure. KQL query language, Fusion ML detection, Logic Apps for SOAR. Growing rapidly due to M365/Azure integration. Consumption-based pricing.
- **IBM QRadar** — Enterprise SIEM with offense management, flow analysis, and asset/vulnerability correlation. Strong in regulated industries (finance, healthcare).
- **Elastic Security (ELK)** — Open-source foundation (Elasticsearch, Logstash, Kibana) with security-specific detection rules, timeline investigation, and case management. Cost-effective at scale.
- **Google Chronicle (SecOps)** — Cloud-native SIEM backed by Google infrastructure. YARA-L detection language. Flat-rate pricing model (no per-GB cost). Integrates with VirusTotal and Mandiant threat intel.
- **LogRhythm** — SIEM + SOAR platform. NextGen SIEM with embedded case management, playbooks, and compliance reporting.

### EDR / XDR (Endpoint Detection & Response)
- **CrowdStrike Falcon** — Cloud-native EDR leader. Lightweight agent, real-time process monitoring, threat hunting (Falcon OverWatch), threat intelligence. Falcon X for automated IOC enrichment.
- **Microsoft Defender for Endpoint** — EDR integrated with M365 security stack. Attack surface reduction rules, automated investigation and response, threat analytics.
- **SentinelOne Singularity** — Autonomous EDR with AI-driven detection, automated remediation, and rollback capability. ActiveEDR technology for storyline-based investigation.
- **Carbon Black (VMware)** — EDR with process-level visibility, threat hunting, and application control. Strong in enterprise environments.
- **Palo Alto Cortex XDR** — Extended detection and response across endpoint, network, cloud. Integrates with Palo Alto firewall telemetry.

### Vulnerability Management
- **Tenable Nessus / Tenable.io** — Industry-standard vulnerability scanner. 180K+ plugin checks. Nessus for on-prem scanning, Tenable.io for cloud-managed. Tenable.sc for enterprise dashboards and compliance.
- **Qualys VMDR** — Cloud-based vulnerability management, detection, and response. Asset inventory, vulnerability scanning, patch management, and compliance in one platform.
- **Rapid7 InsightVM** — Vulnerability management with live dashboards, risk scoring (Real Risk), remediation projects, and integration with InsightIDR (SIEM) and InsightConnect (SOAR).
- **Wiz** — Cloud security posture management (CSPM). Agentless scanning of cloud workloads, IaC, secrets, vulnerabilities, and misconfigurations. Graph-based risk visualization.
- **Orca Security** — Agentless cloud security. Vulnerability scanning, malware detection, lateral movement risk, and compliance for AWS/Azure/GCP.

### Penetration Testing
- **Burp Suite Professional (PortSwigger)** — Web application security testing. Proxy, scanner, intruder, repeater. Industry standard for web app pentesting.
- **Metasploit Framework / Pro (Rapid7)** — Exploitation framework. 2,000+ exploits, payload generation, post-exploitation modules. Used for infrastructure pentesting.
- **Nmap** — Network discovery and security auditing. Port scanning, service detection, OS fingerprinting, NSE scripts.
- **BloodHound** — Active Directory attack path visualization. Maps relationships between AD objects to find privilege escalation paths. Essential for AD security assessments.
- **Cobalt Strike** — Adversary simulation and red team operations. Beacon payload, malleable C2 profiles, post-exploitation. Widely used by both red teams and threat actors.
- **Kali Linux** — Penetration testing distribution with 600+ pre-installed security tools.

### Threat Intelligence
- **MISP (Malware Information Sharing Platform)** — Open-source threat intelligence platform. IOC sharing, correlation, STIX/TAXII feeds, community collaboration.
- **Recorded Future** — AI-powered threat intelligence. Real-time threat data from open, dark, and technical sources. Risk scoring, vulnerability intelligence, brand monitoring.
- **Mandiant Threat Intelligence (Google)** — Actor profiles, campaign tracking, vulnerability analysis. Backed by Mandiant's IR expertise and incident data.
- **VirusTotal** — Multi-engine file/URL analysis. Malware detection, behavioral analysis, relationship graphs. Owned by Google.
- **AlienVault OTX (AT&T)** — Open threat intelligence community. Free IOC sharing, pulse subscriptions, integration with USM Anywhere.

### Network Security
- **Wireshark** — Open-source packet analyzer. Deep inspection of hundreds of protocols. Essential for network forensics and troubleshooting.
- **Zeek (formerly Bro)** — Network security monitor. Generates detailed connection logs, protocol analysis, file extraction. Foundation of network security monitoring.
- **Suricata** — Open-source IDS/IPS and network security monitoring engine. Rule-based detection (compatible with Snort rules), protocol analysis, file extraction.
- **Palo Alto Networks (NGFW)** — Next-generation firewall with App-ID, User-ID, Content-ID. Threat prevention, URL filtering, WildFire sandboxing.

## Key Frameworks & Standards

### Detection & Response Frameworks
- **MITRE ATT&CK** — Knowledge base of adversary tactics, techniques, and procedures (TTPs) based on real-world observations. 14 tactics (Reconnaissance through Impact), 200+ techniques, 600+ sub-techniques. The lingua franca of modern threat detection. Detection rules should map to ATT&CK technique IDs (e.g., T1059.001 — PowerShell, T1003.001 — LSASS Memory, T1071.001 — Web Protocols for C2).
- **NIST SP 800-61 Rev. 2 (Computer Security Incident Handling Guide)** — The standard IR lifecycle: Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident Activity (lessons learned). Defines incident severity levels and escalation criteria.
- **PICERL** — Mnemonic for IR phases: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned. Commonly taught and referenced in IR training (SANS).
- **Diamond Model of Intrusion Analysis** — Framework for analyzing cyber intrusions: Adversary, Infrastructure, Capability, Victim. Each intrusion event connects these four vertices.
- **Cyber Kill Chain (Lockheed Martin)** — 7-phase model of cyber attacks: Reconnaissance → Weaponization → Delivery → Exploitation → Installation → Command & Control → Actions on Objectives. Useful for understanding attack progression; criticized for not covering post-compromise lateral movement as well as ATT&CK.

### Security Management Frameworks
- **NIST Cybersecurity Framework (CSF) 2.0** — Core functions: Govern, Identify, Protect, Detect, Respond, Recover. Widely adopted framework for organizing cybersecurity programs. CSF 2.0 (2024) added Govern function and expanded supply chain risk management.
- **NIST SP 800-53 Rev. 5** — Catalog of security and privacy controls for federal information systems. 20 control families, 1,000+ controls. Basis for FedRAMP, FISMA compliance.
- **CIS Controls v8** — 18 prioritized security controls (formerly SANS Top 20). Implementation Groups (IG1-IG3) provide maturity-based prioritization. IG1 = essential cyber hygiene.
- **ISO 27001:2022 / ISO 27002:2022** — International standard for information security management systems (ISMS). 27001 = requirements for certification; 27002 = implementation guidance for 93 controls organized in 4 themes.
- **Zero Trust Architecture (NIST SP 800-207)** — "Never trust, always verify." Principles: explicit verification, least privilege access, assume breach. ZTA is an architecture, not a product — requires identity-centric security, micro-segmentation, and continuous monitoring.

### Compliance Standards
- **SOC 2 Type II** — AICPA Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, Privacy. Type II = audited over a period (6-12 months). The standard compliance framework for SaaS and cloud service providers.
- **PCI DSS 4.0** — Payment Card Industry Data Security Standard. 12 requirements, 250+ sub-requirements for protecting cardholder data. Version 4.0 (March 2024 enforcement) introduces customized approach and expanded MFA requirements.
- **HIPAA Security Rule (45 CFR Part 164)** — Protects electronic protected health information (ePHI). Administrative, physical, and technical safeguards. Breach notification required within 60 days of discovery.
- **CMMC 2.0 (Cybersecurity Maturity Model Certification)** — DoD contractor cybersecurity requirements. 3 levels: Foundational (self-assessment), Advanced (third-party), Expert (government). Maps to NIST 800-171 controls.

## Regulatory Landscape

- **SEC Cybersecurity Disclosure Rules (2023)** — Public companies must disclose material cybersecurity incidents within 4 business days of determining materiality (Form 8-K, Item 1.05). Annual disclosure of cybersecurity risk management, strategy, and governance (Form 10-K).
- **CIRCIA (Cyber Incident Reporting for Critical Infrastructure Act, 2022)** — Requires critical infrastructure entities to report significant cyber incidents to CISA within 72 hours and ransomware payments within 24 hours. Final rule implementation ongoing.
- **State Breach Notification Laws** — All 50 states have breach notification requirements. Timelines vary (24 hours to 60 days). Most require notification to affected individuals and state AG. California (CCPA/CPRA) and New York (SHIELD Act) have additional requirements.
- **NY DFS 23 NYCRR 500** — New York Department of Financial Services cybersecurity regulation for financial services companies. Requires CISO appointment, risk assessment, MFA, encryption, incident response, third-party risk management. 72-hour breach notification to DFS.
- **GDPR (Articles 32-34)** — Security of processing, data breach notification to supervisory authority within 72 hours, communication to data subjects for high-risk breaches.
- **FTC Safeguards Rule (16 CFR Part 314)** — Requires non-bank financial institutions to implement comprehensive security programs. Updated 2022: designated qualified individual, access controls, encryption, MFA, incident response, annual penetration testing.

## Essential Terminology

| Term | Definition |
|------|-----------|
| **IOC (Indicator of Compromise)** | Observable artifact (IP address, domain, file hash, registry key) indicating a system may have been compromised |
| **TTP (Tactics, Techniques, and Procedures)** | Behavioral patterns of threat actors — what they do (tactic), how they do it (technique), and their specific implementation (procedure) |
| **C2 / C&C (Command and Control)** | Infrastructure and protocols used by attackers to communicate with compromised systems. Common channels: HTTP/S, DNS, cloud services |
| **Lateral Movement** | Post-compromise technique of moving through a network from the initially compromised system to other systems. ATT&CK Tactic TA0008 |
| **Privilege Escalation** | Gaining higher-level permissions than initially obtained. Local (user→admin) or domain (user→domain admin). ATT&CK Tactic TA0004 |
| **Persistence** | Techniques to maintain access to a compromised system across reboots and credential changes. Scheduled tasks, registry run keys, DLL hijacking. ATT&CK Tactic TA0003 |
| **Exfiltration** | Unauthorized transfer of data from a compromised environment. Methods: HTTP/S upload, DNS tunneling, cloud storage, encrypted archives. ATT&CK Tactic TA0010 |
| **Living Off the Land (LOLBins)** | Using legitimate system tools (PowerShell, WMI, certutil, bitsadmin) for malicious purposes to avoid detection by security tools |
| **Dwell Time** | Duration between initial compromise and detection. Median ~10 days (2024 Mandiant M-Trends). Shorter = better detection capability |
| **CVSS (Common Vulnerability Scoring System)** | Standardized scoring for vulnerability severity. Base scores 0-10: Critical (9.0-10.0), High (7.0-8.9), Medium (4.0-6.9), Low (0.1-3.9) |
| **CVE (Common Vulnerabilities and Exposures)** | Unique identifier for publicly known security vulnerabilities. Format: CVE-YYYY-NNNNN |
| **Zero-Day** | Vulnerability unknown to the vendor and without a patch. Zero-day exploit = active exploitation of an unpatched vulnerability |
| **SOAR (Security Orchestration, Automation, and Response)** | Platform for automating security operations workflows: alert enrichment, triage, containment actions, ticket creation |
| **Threat Hunting** | Proactive search for threats that evade existing detection. Hypothesis-driven, uses ATT&CK-based queries, anomaly detection, and threat intelligence |
| **False Positive** | Security alert triggered by benign activity. High false positive rates cause alert fatigue and missed true positives |
| **Tabletop Exercise (TTX)** | Simulated scenario discussion for testing incident response plans. No live systems affected. Evaluates decision-making, communication, and plan gaps |
| **Ransomware** | Malware that encrypts victim data and demands payment for decryption. Modern variants also exfiltrate data (double extortion) |
| **Supply Chain Attack** | Compromising a target through a trusted third party — software vendor, MSP, open-source dependency. SolarWinds (2020), Kaseya (2021) |
| **EDR Telemetry** | Data collected by endpoint detection agents: process creation, file writes, registry changes, network connections, module loads |
| **Sigma Rules** | Generic and open signature format for SIEM detection rules. Vendor-agnostic, converts to Splunk SPL, Sentinel KQL, Elastic queries |
| **YARA Rules** | Pattern-matching tool for malware identification. Defines rules based on strings, hex patterns, file characteristics |
| **MFA (Multi-Factor Authentication)** | Authentication requiring two or more factors: knowledge (password), possession (token/phone), inherence (biometric) |
| **Phishing** | Social engineering attack using deceptive emails/messages to steal credentials or deliver malware. Spear phishing = targeted at specific individuals |

## Top 10 Common Mistakes

1. **Alert fatigue leading to missed true positives** — SOC analysts processing 500+ alerts/day develop tunnel vision. When 95% of alerts are false positives, the natural response is to close alerts faster with less investigation. This is exactly how real compromises get lost in the noise. Tuning detection rules to reduce false positives (not just suppressing alerts) is essential.

2. **Incomplete incident containment** — Isolating the first compromised endpoint but not hunting for lateral movement. If an attacker has been in the environment for days, they've likely moved to multiple systems, created persistence mechanisms, and potentially compromised credentials. Containing one system while the attacker is on twelve gives a false sense of security.

3. **Treating vulnerabilities by CVSS score alone** — A Critical (9.8) vulnerability on an isolated test server with no data may be lower priority than a Medium (5.5) SQL injection on a public-facing application processing customer PII. Context matters: exploitability, exposure, data sensitivity, compensating controls. Vulnerability prioritization without business context leads to patching the wrong things.

4. **Not preserving forensic evidence during IR** — In the rush to contain and recover, responders reimage systems, restart services, or clear logs — destroying the evidence needed to understand the full scope of compromise, identify the attack vector, and determine data exposure. Forensic preservation (disk images, memory dumps, log exports) must happen before or during containment, not after.

5. **Scoping penetration tests too narrowly** — Testing only the web application while ignoring the API, the admin panel, the cloud infrastructure, the social engineering vector, and the internal network means you're testing a fraction of the attack surface. Attackers don't respect scope boundaries. Tests should match realistic attack scenarios.

6. **Ignoring identity-based attacks** — Focusing on malware detection while credential-based attacks (pass-the-hash, Kerberoasting, golden ticket, token theft) go unmonitored. Identity compromise is the primary vector for modern attacks — if you're not monitoring authentication logs, service account usage, and privilege changes, you're blind to the most common attack techniques.

7. **Delaying breach notification for business reasons** — "We need to understand the full scope before notifying" becomes a weeks-long delay that violates notification timelines (72 hours under GDPR, 4 business days under SEC rules, state-specific timelines). Regulatory penalties for late notification are often more severe than for the breach itself.

8. **Security theater — checkbox compliance without real security** — Having a pentest report from 2 years ago, a vulnerability scanner that runs quarterly, and an incident response plan that's never been tested. Compliance ≠ security. Auditors verify controls exist; attackers verify they work.

9. **No network segmentation between critical and non-critical systems** — A flat network means an attacker who compromises a receptionist's workstation via phishing can reach the database server, the domain controller, and the financial systems. Network segmentation (VLANs, firewalls, zero trust) limits blast radius.

10. **Failing to test the incident response plan** — An IR plan that's been written but never exercised through tabletop exercises or simulated incidents will fail when a real incident occurs. People won't know their roles, communication channels won't work, and escalation procedures will be unclear. Annual TTX at minimum; full-scale simulation annually for mature programs.

## Excellent vs. Dangerous Work

### What Excellent Cybersecurity Work Looks Like
- SOC analysts who investigate alerts beyond the initial trigger — checking related telemetry, hunting for lateral movement indicators, and documenting their analysis even when the alert is a false positive
- IR teams that preserve evidence first, contain methodically, and produce post-incident reports with root cause analysis and actionable recommendations
- Vulnerability management programs that prioritize based on risk (exploitability + exposure + business context), track remediation SLAs, and escalate when deadlines are missed
- Penetration test reports that provide clear evidence, realistic risk ratings, and specific remediation guidance — not just automated scanner output with a cover page
- Threat models that identify realistic attack scenarios based on the organization's actual threat landscape, not generic templates
- Security programs that measure meaningful metrics: mean time to detect (MTTD), mean time to respond (MTTR), patch SLA compliance, phishing click rates, percentage of assets with EDR coverage

### What Dangerous Cybersecurity Work Looks Like
- Auto-closing alerts without investigation because "it's probably a false positive"
- Reimaging compromised systems immediately without forensic preservation — destroying evidence of how the attacker got in and what they accessed
- Recommending "monitor only" for active command and control traffic — if C2 is confirmed, containment is immediate, not optional
- Suppressing or delaying breach notification because leadership wants to "manage the messaging first"
- Running vulnerability scans without acting on findings — scanning is not a security control, remediation is
- Penetration tests that avoid testing critical systems because "they're too important to risk" — those are exactly the systems attackers will target
- Ignoring insider threat indicators because "we trust our employees"

## Professional Certifications

| Certification | Issuing Body | Scope |
|--------------|-------------|-------|
| **CISSP (Certified Information Systems Security Professional)** | (ISC)² | Broad security management: 8 domains covering security operations, risk management, architecture, engineering, IAM, assessment, software security, network security. Gold standard for security leadership. |
| **OSCP (Offensive Security Certified Professional)** | Offensive Security | Hands-on penetration testing. 24-hour practical exam. Proves ability to identify vulnerabilities and exploit systems. The standard for pentest credibility. |
| **GCIH (GIAC Certified Incident Handler)** | SANS/GIAC | Incident handling, hacker techniques, tools. Covers the IR process, common attack methods, and defensive strategies. |
| **GPEN (GIAC Penetration Tester)** | SANS/GIAC | Penetration testing methodology, reconnaissance, exploitation, post-exploitation, and reporting. |
| **GCFA (GIAC Certified Forensic Analyst)** | SANS/GIAC | Digital forensics: disk forensics, memory forensics, timeline analysis, evidence handling, and reporting. |
| **CEH (Certified Ethical Hacker)** | EC-Council | Ethical hacking methodology, tools, and techniques. Broad coverage, less depth than OSCP. Common entry-level pentesting cert. |
| **CompTIA Security+** | CompTIA | Entry-level security certification. Network security, compliance, threats, cryptography, identity management. Baseline for security careers. DoD 8570 approved. |
| **CompTIA CySA+** | CompTIA | Security analytics and threat detection. SOC operations, vulnerability management, incident response. Intermediate level. |
| **CISM (Certified Information Security Manager)** | ISACA | Information security management, governance, risk management, incident management. Management-focused. |
| **CISA (Certified Information Systems Auditor)** | ISACA | IS audit, control, and security. 5 domains covering audit process, governance, IS acquisition, operations, and asset protection. |
