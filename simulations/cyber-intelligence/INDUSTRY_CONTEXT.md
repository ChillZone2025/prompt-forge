# Industry Context: Cyber Intelligence

## What This Industry Does

Cyber intelligence (also called cyber threat intelligence or CTI) is the practice of collecting, analyzing, and disseminating information about threats to an organization's digital assets, people, and operations. It sits at the intersection of cybersecurity, open-source intelligence (OSINT), and risk management.

Practitioners include threat intelligence analysts, OSINT investigators, SOC analysts, digital forensics specialists, corporate security teams, due diligence firms, journalists, and law enforcement.

## Key Tools & Platforms

### OSINT & Reconnaissance
- **Maltego** — Link analysis and visual intelligence mapping. Transforms connect entities (IPs, domains, people, organizations) into relationship graphs.
- **Shodan / Censys** — Internet-facing device and service search engines. Used for attack surface mapping and infrastructure reconnaissance.
- **SpiderFoot** — Automated OSINT collection across 200+ data sources. Generates target dossiers.
- **theHarvester** — Email, subdomain, and IP enumeration from public sources (Google, Bing, LinkedIn, DNS).
- **Recon-ng** — Modular reconnaissance framework with a Metasploit-like interface. Workspace-based investigation tracking.
- **OSINT Framework (osintframework.com)** — Curated directory of free OSINT tools organized by data type.

### Threat Intelligence Platforms
- **MISP (Malware Information Sharing Platform)** — Open-source threat intelligence sharing. Supports STIX/TAXII, correlations, and automated feeds.
- **OpenCTI** — Open-source cyber threat intelligence platform built on STIX2. Knowledge graph-based.
- **Recorded Future** — Commercial TI platform with predictive analytics and dark web monitoring.
- **Mandiant Advantage** — Threat intelligence from incident response engagements. Known for APT tracking.
- **ThreatConnect** — TI platform with orchestration and automation (SOAR) capabilities.
- **VirusTotal** — Multi-engine malware scanning. Hash, URL, domain, and IP reputation lookups.

### Dark Web & Underground Monitoring
- **Tor Browser** — Access to .onion services for dark web research.
- **Ahmia / Torch** — Dark web search engines.
- **DarkOwl / Flashpoint / Intel 471** — Commercial dark web monitoring platforms.
- **Paste site monitoring** — Pastebin, Ghostbin, PrivateBin for leaked credentials and data dumps.

### Geolocation & Imagery
- **Google Earth Pro / Sentinel Hub** — Satellite imagery analysis for GEOINT.
- **SunCalc** — Solar position calculator for verifying photo timestamps via shadow analysis.
- **EXIF tool** — Metadata extraction from images (GPS coordinates, camera model, timestamps).
- **Mapillary / KartaView** — Street-level imagery for ground-truth verification.

### Social Media Intelligence (SOCMINT)
- **Twint / snscrape** — Twitter/X scraping without API access.
- **Botometer** — Bot detection scoring for social media accounts.
- **CrowdTangle (Meta)** — Social media monitoring for Facebook/Instagram (limited access).
- **Social Bearing / TweetDeck** — Real-time social media monitoring and analytics.

## Key Frameworks & Methodologies

### Attribution & Analysis
- **MITRE ATT&CK** — Adversary tactics, techniques, and procedures (TTPs) knowledge base. 14 tactics, 200+ techniques. The standard for mapping threat actor behavior.
- **Diamond Model of Intrusion Analysis** — Four vertices: Adversary, Infrastructure, Capability, Victim. Used for structured threat analysis and pivoting between known and unknown elements.
- **Lockheed Martin Cyber Kill Chain** — 7 phases: Reconnaissance → Weaponization → Delivery → Exploitation → Installation → Command & Control → Actions on Objectives.
- **STIX/TAXII** — Structured Threat Information Expression (data format) and Trusted Automated eXchange of Indicator Information (transport protocol). The standard for sharing threat intelligence.

### Investigation Methodology
- **Intelligence Cycle** — Direction → Collection → Processing → Analysis → Dissemination → Feedback.
- **Analysis of Competing Hypotheses (ACH)** — Structured analytic technique to evaluate multiple explanations against evidence. Reduces confirmation bias.
- **OPSEC (Operational Security)** — Protecting investigation methods, sources, and analyst identity during research. Critical for dark web and adversary-facing work.
- **Chain of Custody** — Evidence handling procedures ensuring admissibility. Digital evidence must be hashed, timestamped, and stored with access logs.

## Regulations & Legal Frameworks

- **CFAA (Computer Fraud and Abuse Act)** — US federal law governing unauthorized computer access. OSINT must stay within legal boundaries (no active exploitation).
- **GDPR** — European data protection regulation. Affects how PII found during investigations can be stored, processed, and shared.
- **CISA / CIRCIA** — Cyber Incident Reporting for Critical Infrastructure Act. Mandatory reporting for critical infrastructure entities.
- **Budapest Convention** — International treaty on cybercrime cooperation. Framework for cross-border evidence sharing.
- **Executive Order 14028** — US federal cybersecurity executive order mandating zero trust, SBOM, and incident reporting improvements.

## Common Terminology

| Term | Meaning |
|------|---------|
| **TTP** | Tactics, Techniques, and Procedures — how threat actors operate |
| **IOC** | Indicator of Compromise — artifact (hash, IP, domain) associated with malicious activity |
| **IOA** | Indicator of Attack — behavioral pattern suggesting an attack in progress |
| **APT** | Advanced Persistent Threat — sophisticated, state-sponsored or organized threat group |
| **C2 / C&C** | Command and Control — infrastructure used by attackers to communicate with compromised systems |
| **Pivot** | Using one piece of intelligence to discover related infrastructure or activity |
| **Attribution** | Determining who is responsible for a cyber attack (notoriously difficult) |
| **HUMINT** | Human Intelligence — information from human sources |
| **SIGINT** | Signals Intelligence — information from intercepted communications |
| **GEOINT** | Geospatial Intelligence — information from imagery and location data |
| **SOCMINT** | Social Media Intelligence — information from social media platforms |
| **Dork / Dorking** | Using advanced search operators (Google, GitHub, Shodan) to find exposed data |
| **Exfiltration** | Unauthorized removal of data from a network |
| **Lateral movement** | Attacker moving through a network after initial compromise |
| **Living off the land (LOtL)** | Using legitimate tools already present on a system for malicious purposes |

## Common Mistakes in This Field

1. **IP-based attribution** — Geolocating an IP address and assuming it identifies the threat actor's nationality. Tor exit nodes, VPNs, and bulletproof hosting make IP attribution nearly worthless alone.
2. **Single-source analysis** — Drawing conclusions from one data point. Good intelligence requires corroboration across multiple independent sources.
3. **Confirmation bias in attribution** — Seeing evidence that fits a preferred narrative (e.g., "it must be APT28") and ignoring contradictory data. ACH exists specifically to counter this.
4. **OPSEC failures during investigation** — Accessing adversary infrastructure without protection, clicking live C2 links, or revealing investigation details in public forums.
5. **Accepting IOCs at face value** — Not validating hashes, domains, or IPs against known databases. Test hashes, sinkholed domains, and recycled infrastructure create false positives.
6. **Premature public disclosure** — Publishing threat intelligence during active containment tips off adversaries and can compromise ongoing law enforcement operations.
7. **Ignoring legal boundaries** — Crossing from passive OSINT into active exploitation (port scanning, accessing systems without authorization) violates CFAA and equivalent laws.
8. **Conflating correlation with causation** — Seeing similar TTPs across incidents doesn't mean the same actor is responsible. Shared tools and leaked playbooks are common.
9. **Neglecting the intelligence cycle** — Jumping to analysis without proper collection planning leads to incomplete and biased assessments.
10. **Stale intelligence** — Using outdated IOCs or threat reports without checking if infrastructure has been sinkholed, domains re-registered, or actors have shifted tactics.
