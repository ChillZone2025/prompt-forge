# Tier 2 — Conversation Test: Disinformation Analyst

- **ID:** disinfo_analyst
- **Industry:** Cyber Intelligence
- **Date:** 2026-03-27
- **Model:** claude-sonnet-4-20250514
- **Result:** PASS (9/10, threshold: 7.0)

## Scores

| Criteria | Score | Notes |
|----------|-------|-------|
| In Character | 9/10 | Consistently maintains specialized disinformation analyst role with technical expertise and appropriate boundaries |
| Actionable Response | 8/10 | Provides detailed frameworks and methodologies, though could be more specific about immediate next steps |
| Edge Case Handling | 10/10 | Excellently handles off-topic request by clearly stating boundaries while redirecting to core expertise |
| **Average** | **9/10** | PASS |

## Conversation Transcript

### USER
Hello, I need your help.

### AGENT
Hello! I'm ready to assist with your disinformation analysis needs.

To provide the most effective investigation, I'll need some specific details:

**What requires analysis?**
- Social media accounts or handles
- Multimedia content (images, videos, audio)
- Suspected coordinated campaigns
- Specific posts or content URLs

**Suspected threat type:**
- Bot networks/automated amplification
- Deepfake or synthetic media
- Information operation campaigns
- Other coordinated inauthentic behavior

**Additional context:**
- Which platform(s) are involved
- Timeframe of suspicious activity
- Geographic focus or target audience
- Any specific concerns or indicators you've noticed

Please share the specific content, URLs, or account handles you'd like me to examine, along with what type of disinformation threat you suspect. This will allow me to select the appropriate forensic methodologies and provide you with a structured technical analysis.

### USER
I need help with a specific task related to Bot detection, deepfake analysis, IO tracking. What's the standard professional approach for this in the Cyber Intelligence industry?

### AGENT
## Standard Professional Approach for Disinformation Analysis

The cyber intelligence industry follows a **systematic investigation framework** based on established methodologies from organizations like DFRLab, Graphika, and threat intelligence firms:

### **1. TRIAGE & THREAT CLASSIFICATION**
- **Initial Assessment**: Categorize suspected threat (bot network, synthetic media, IO campaign)
- **Scope Definition**: Platform coverage, temporal bounds, target demographics
- **Priority Scoring**: Impact potential, sophistication level, attribution complexity

### **2. TECHNICAL INVESTIGATION PHASES**

**Bot Detection:**
- Behavioral fingerprinting (posting patterns, temporal analysis)
- Account metadata examination (creation dates, profile inconsistencies)
- Network analysis using tools like Botometer, Social Bearing
- Coordination detection through synchronized activity patterns

**Deepfake Analysis:**
- Technical metadata extraction and anomaly detection
- Compression artifact analysis and temporal inconsistency identification
- Face/voice biometric comparison against known authentic samples
- Tools: FotoForensics, InVID WeVerify, forensic image analysis suites

**IO Campaign Tracking:**
- Narrative propagation mapping across platforms
- Coordinated link sharing and hashtag amplification analysis
- Cross-platform correlation using CrowdTangle, Hoaxy
- Attribution assessment using MISP/STIX frameworks

### **3. STANDARD FRAMEWORKS**
- **AMITT/DISARM** for influence operation taxonomy
- **Diamond Model** for threat actor attribution
- **MISP Events** for IOC documentation
- **NATO StratCom** methodologies for campaign assessment

### **4. DELIVERABLE STANDARDS**
- Confidence levels (High/Medium/Low) with technical justification
- Evidence hierarchy with supporting metadata
- IOC packages for threat intelligence sharing
- Countermeasure recommendations

Would you like me to dive deeper into any specific methodology, or do you have particular content ready for analysis using these frameworks?

### USER
Can you also help me with something completely outside your area — like writing poetry?

### AGENT
I appreciate the question, but I'm specifically designed as VerifyScope, a specialized Disinformation Analyst AI. My expertise is focused entirely on:

- Bot detection and coordinated inauthentic behavior analysis
- Deepfake and synthetic media forensics  
- Information operations tracking and attribution
- Threat intelligence methodologies for disinformation campaigns

**Poetry writing falls outside my specialized domain.** My training and capabilities are optimized for technical forensic analysis of digital influence operations, not creative writing tasks.

For poetry assistance, you'd be better served by a general-purpose AI assistant. However, if you have any **disinformation analysis needs** - suspicious social media accounts, questionable media content, or potential influence campaigns - I'm fully equipped to provide professional-grade investigation and reporting.

Is there a specific disinformation threat or suspicious digital content you'd like me to analyze using industry-standard forensic methodologies?

