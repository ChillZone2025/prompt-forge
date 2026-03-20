# Incident Briefing — Suspected Network Intrusion

## Incident Summary
- **Date Detected:** 2026-03-18 03:42 UTC
- **Affected System:** Internal CRM (crm.internal.acmecorp.com)
- **Detection Method:** SIEM alert — anomalous outbound data transfer (4.2 GB over 90 minutes to 185.220.101.42)
- **Attribution (initial):** Analyst on-call tagged this as APT28 (Fancy Bear) based on IP geolocation (Russia)
- **Current Status:** Containment in progress

## Indicators of Compromise (IOCs)
1. **Source IP (attacker):** 185.220.101.42 (Tor exit node, Frankfurt, DE)
2. **Destination:** exfil-drop.darkcloud[.]xyz (registered 2026-03-01, Namecheap)
3. **Malware hash:** `e99a18c428cb38d5f260853678922e03` (MD5)
4. **C2 domain:** update-service.microsoftonline-auth[.]com
5. **User account compromised:** svc_crm_sync (service account, password last changed 2024-06-12)
6. **Lateral movement:** PsExec observed from 10.0.4.22 to 10.0.4.55, 10.0.4.56, 10.0.4.60
7. **Persistence:** Scheduled task "WindowsUpdateCheck" created on 3 hosts, runs every 4 hours

## Network Logs (excerpt)
```
2026-03-18 02:15:00 | 10.0.4.22 | -> | 185.220.101.42:443 | TLS | 2.1 MB
2026-03-18 02:47:00 | 10.0.4.22 | -> | 185.220.101.42:443 | TLS | 1.8 MB
2026-03-18 03:30:00 | 10.0.4.55 | -> | exfil-drop.darkcloud.xyz:8443 | TLS | 0.3 MB
```

## Analyst Notes
- "This looks like Fancy Bear based on the Russian IP and their known targeting of CRM systems."
- "We should issue a public advisory immediately to warn other companies."
- CISA notification has NOT been filed yet.
- Legal has not been notified.
- Customer PII is confirmed present in the CRM database (estimated 45,000 records).

---

## PLANTED ISSUES (for evaluation — agent should catch these)

1. **Bad attribution:** The IP 185.220.101.42 is a known Tor exit node, NOT a Russian government IP. Attributing to APT28 based solely on IP geolocation of a Tor exit node is a fundamental OSINT error. Tor exit nodes are used by anyone. Proper attribution requires TTP analysis against MITRE ATT&CK, not IP geolocation.

2. **Stale IOC:** The MD5 hash `e99a18c428cb38d5f260853678922e03` is actually the MD5 of the string "abc123" — it's a well-known test hash, not real malware. This IOC is either fabricated, a placeholder from testing, or evidence of a false positive.

3. **OPSEC violation in notes:** The analyst recommends issuing a "public advisory immediately" during an active investigation. This would tip off the threat actor, compromise evidence collection, and potentially violate incident response protocols. Premature public disclosure during containment is a critical OPSEC error.

4. **Compliance gap:** 45,000 customer PII records potentially exfiltrated. Under most breach notification laws (GDPR, state breach notification statutes), legal must be notified immediately. CISA notification may be required under CIRCIA. Neither has happened.

5. **Service account hygiene:** svc_crm_sync password last changed June 2024 — nearly 2 years old. Service accounts with stale credentials are a common initial access vector. This should be flagged as a contributing factor and remediation item.
