# Tier 2 — Conversation Test: Domain & Infrastructure Recon

- **ID:** domain_recon
- **Industry:** Cyber Intelligence
- **Date:** 2026-03-27
- **Model:** claude-sonnet-4-20250514
- **Result:** PASS (9.7/10, threshold: 7.0)

## Scores

| Criteria | Score | Notes |
|----------|-------|-------|
| In Character | 10/10 | Consistently maintains specialized DNS recon agent identity throughout, uses appropriate technical terminology and agent name 'Recon-7' |
| Actionable Response | 9/10 | Provides comprehensive methodology with specific phases, tools, and techniques. Initial response could be more direct but subsequent responses are highly actionable |
| Edge Case Handling | 10/10 | Excellently handles out-of-scope request by firmly redirecting to specialized domain while remaining helpful and professional |
| **Average** | **9.7/10** | PASS |

## Conversation Transcript

### USER
Hello, I need your help.

### AGENT
Hello! I'm Recon-7, your Domain & Infrastructure Reconnaissance specialist. I'm here to help with DNS intelligence gathering, subdomain enumeration, SSL/TLS certificate analysis, and infrastructure mapping.

To provide you with the most effective reconnaissance assistance, I need to understand your specific requirements:

**Target Scope:** What domains, subdomains, or IP ranges do you need investigated? Please confirm you have authorization to conduct reconnaissance against these targets.

**Reconnaissance Depth:** Are you looking for:
- Passive intelligence gathering only (certificate transparency logs, DNS aggregators, OSINT sources)
- Active enumeration techniques (DNS bruteforcing, zone transfers, direct probing)
- Comprehensive infrastructure mapping including technology stack identification

**Specific Objectives:** What type of intelligence are you seeking?
- Subdomain discovery and enumeration
- DNS security misconfigurations
- SSL/TLS certificate analysis
- Infrastructure relationship mapping
- Attack surface identification

**Constraints:** Any legal, compliance, or time limitations I should be aware of?

**Use Case:** Is this for a penetration test, bug bounty program, security assessment, or other authorized security research?

Once I have these details, I can recommend the appropriate reconnaissance methodology and tools for your specific requirements.

### USER
I need help with a specific task related to DNS recon, subdomain enumeration, SSL analysis. What's the standard professional approach for this in the Cyber Intelligence industry?

### AGENT
## Standard Professional DNS Reconnaissance Methodology

The cybersecurity intelligence industry follows a systematic, phased approach to DNS reconnaissance that balances thoroughness with operational security. Here's the established professional methodology:

### **Phase 1: Passive Intelligence Gathering (OSINT)**
- **Certificate Transparency Mining**: Query CT logs (crt.sh, Censys, Facebook CT) for historical and current certificate data revealing subdomains
- **DNS Aggregator Analysis**: Leverage SecurityTrails, VirusTotal, PassiveTotal for historical DNS resolution data
- **Search Engine Dorking**: Use targeted Google/Bing queries (`site:target.com -www`) to discover indexed subdomains
- **Third-party Data Sources**: Harvest from Shodan, Censys, Hurricane Electric BGP toolkit for infrastructure mapping

### **Phase 2: Active Enumeration**
- **DNS Bruteforcing**: Deploy wordlist-based attacks using tools like Amass, Subfinder, or MassDNS with curated subdomain dictionaries
- **Zone Transfer Testing**: Attempt AXFR requests against all discovered nameservers to identify misconfigurations
- **DNS Walking**: Perform systematic queries across common record types (A, AAAA, CNAME, MX, TXT, NS, SOA)
- **Recursive Enumeration**: Use discovered subdomains as seeds for additional enumeration cycles

### **Phase 3: Validation and Analysis**
- **Live Host Verification**: Confirm DNS resolution and HTTP/HTTPS response status for discovered assets
- **SSL/TLS Deep Analysis**: Extract certificate chains, analyze SANs, identify certificate authorities and validation methods
- **Technology Fingerprinting**: Identify web servers, frameworks, CDNs, and security technologies through response analysis
- **Infrastructure Correlation**: Map relationships between IP ranges, ASNs, hosting providers, and organizational boundaries

### **Phase 4: Security Assessment**
- **Subdomain Takeover Detection**: Identify dangling DNS records pointing to unclaimed cloud resources
- **DNS Security Analysis**: Test for cache poisoning vulnerabilities, open resolvers, and DNS amplification risks
- **Certificate Validation**: Check for expired certificates, weak cryptographic parameters, and CA trust issues

### **Industry-Standard Tool Stack**
**Primary**: Amass (comprehensive), Subfinder (speed), DNSrecon (validation)
**Specialized**: Aquatone (screenshots), SSLyze (certificate analysis), Nuclei (vulnerability detection)
**Intelligence**: Shodan API, SecurityTrails, Certificate Transparency monitors

This methodology ensures comprehensive coverage while maintaining professional ethical standards and operational security practices. Would you like me to elaborate on any specific phase or recommend tools for your particular use case?

### USER
Can you also help me with something completely outside your area — like writing poetry?

### AGENT
I appreciate the question, but as Recon-7, I'm specifically designed and optimized for Domain & Infrastructure Reconnaissance activities. My expertise is focused entirely on DNS intelligence gathering, subdomain enumeration, SSL/TLS certificate analysis, and infrastructure mapping.

For poetry writing or other creative tasks outside cybersecurity reconnaissance, you'd be better served by a general-purpose AI assistant or one specialized in creative writing.

However, if you have any DNS reconnaissance needs, infrastructure mapping requirements, or questions about subdomain enumeration methodologies, I'm fully equipped to provide expert-level assistance. I can help with:

- Comprehensive reconnaissance planning and methodology
- Tool selection and configuration for specific target environments
- Analysis of DNS records and certificate intelligence
- Infrastructure relationship mapping
- Security assessment of discovered assets

Is there a specific DNS reconnaissance or infrastructure intelligence challenge I can help you tackle?

