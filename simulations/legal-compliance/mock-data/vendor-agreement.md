# Master Services Agreement — CloudVault Analytics, Inc.

**Effective Date:** April 1, 2026
**Parties:** Acme Corp ("Client") and CloudVault Analytics, Inc. ("Provider")
**Term:** 36 months, auto-renewing

---

## Section 2: Term and Termination

2.1 This Agreement shall commence on the Effective Date and continue for an initial term of thirty-six (36) months ("Initial Term").

2.2 Upon expiration of the Initial Term, this Agreement shall automatically renew for successive twelve (12) month periods ("Renewal Terms") unless either party provides written notice of non-renewal at least ninety (90) days prior to the end of the then-current term.

2.3 Provider may terminate this Agreement for convenience upon thirty (30) days written notice. Client may terminate only for cause, subject to a sixty (60) day cure period.

## Section 5: Fees and Payment

5.1 Client shall pay Provider a monthly fee of $14,500 for the services described in Exhibit A.

5.2 Provider reserves the right to increase fees by up to 15% upon each Renewal Term, with notice provided no less than thirty (30) days prior to the renewal date.

5.3 All fees are non-refundable. Upon early termination by Client, Client shall pay all fees remaining in the then-current term as a termination fee.

## Section 7: Intellectual Property

7.1 All data, reports, models, algorithms, and derivative works created by Provider using Client's data during the term of this Agreement shall be the sole property of Provider.

7.2 Client grants Provider a perpetual, irrevocable, worldwide license to use Client's data for product improvement, benchmarking, and training of Provider's AI/ML models, including after termination.

7.3 Provider retains all intellectual property rights in any custom configurations, integrations, or workflows developed for Client, even if developed at Client's direction and expense.

## Section 9: Limitation of Liability

9.1 IN NO EVENT SHALL PROVIDER'S TOTAL LIABILITY EXCEED THE FEES PAID BY CLIENT IN THE THREE (3) MONTHS PRECEDING THE CLAIM.

9.2 PROVIDER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF REVENUE, OR BUSINESS INTERRUPTION, REGARDLESS OF THE CAUSE OF ACTION.

9.3 Client agrees to indemnify and hold harmless Provider from any third-party claims arising from Client's use of the services, including claims related to data privacy, regulatory compliance, or intellectual property infringement.

## Section 11: Data Privacy

11.1 Provider shall implement commercially reasonable security measures to protect Client data.

11.2 Provider is not responsible for data breaches caused by third-party integrations authorized by Client.

11.3 In the event of a data breach affecting Client data, Provider shall notify Client within sixty (60) business days of discovering the breach.

---

## PLANTED ISSUES (for evaluation — agent should catch these)

1. **Auto-renewal trap with asymmetric termination:** Client needs 90 days notice to cancel, but Provider can terminate for convenience with only 30 days notice. Combined with auto-renewal, this locks Client in unless they calendar the opt-out window precisely. The 15% fee increase on renewal with only 30 days notice compounds this — Client can be hit with a price hike and have only 30 days to decide before being locked in for another year.

2. **Uncapped liability exposure for Client:** Provider's liability is capped at 3 months of fees ($43,500), but Client's indemnification obligation in 9.3 is completely uncapped. Client could face unlimited third-party claims while Provider walks away with a $43,500 max exposure. This is severely one-sided.

3. **IP assignment overreach (Section 7):** Provider owns ALL derivative works created from Client's data, including reports and models. Provider also gets a perpetual, irrevocable license to Client's data for AI/ML training — even after termination. Client is effectively giving away its data permanently and losing ownership of insights derived from its own data.

4. **Non-refundable fees + early termination penalty:** If Client terminates early, they owe the full remaining contract value (Section 5.3). Combined with the non-refundable clause, there's no exit without paying the entire contract. This is a liquidated damages clause that may be unenforceable in some jurisdictions.

5. **60 business day breach notification:** Section 11.3 says Provider notifies Client within 60 BUSINESS DAYS (roughly 12 calendar weeks). GDPR requires 72 hours. Most US state laws require 30-60 calendar days. This clause would put Client in regulatory non-compliance through no fault of their own.
