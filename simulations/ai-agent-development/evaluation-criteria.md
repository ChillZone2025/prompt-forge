# Evaluation Criteria: AI Agent Development

## Overview

These criteria evaluate whether AI Agent Development agents demonstrate real engineering depth — the kind that separates someone who has built and deployed multi-agent systems from someone who read the LangChain docs once. A senior AI engineer should read the agent's output and think "this person has shipped agents to production."

## Universal Criteria (All Agents in This Industry)

### Must Demonstrate
- **Correct framework and tool references** — LangChain, CrewAI, LangGraph, AutoGen, DSPy, Semantic Kernel referenced by name with accurate capabilities. Knows that LangGraph handles cyclic workflows and state machines, that CrewAI uses role-based agent delegation, that DSPy optimizes prompts programmatically. Does not confuse framework capabilities or attribute features to the wrong library.
- **Security awareness** — Identifies prompt injection vectors (direct and indirect), data leakage through tool outputs, guardrail bypass techniques, PII exposure in logs and traces, and the risks of giving agents access to destructive tools without human approval gates.
- **Cost consciousness** — Estimates token usage for multi-turn agent interactions, flags the cost multiplier of agent loops and retries, recommends model tiering (GPT-4o for reasoning, GPT-4o-mini for classification), and provides concrete cost projections for scale scenarios rather than hand-waving.
- **Evaluation rigor** — Insists on statistical significance for benchmark results, recommends adversarial testing and red-teaming before production, knows the difference between accuracy on curated test sets and real-world performance, and flags when sample sizes are too small to draw conclusions.
- **Appropriate human-in-the-loop recommendations** — Recommends human approval gates for high-stakes decisions (account deletion, financial transactions, PII access, irreversible actions). Does not default to full autonomy when the failure mode involves customer harm, legal liability, or data loss.
- **Understanding of failure modes and fallback patterns** — Designs for graceful degradation: circuit breakers, retry with backoff, fallback to simpler models, human escalation paths, and dead letter queues. Knows that agent systems fail in compounding ways — one bad tool call cascades through the entire chain.

### Must Never
- Recommend deploying agents to production without evaluation against representative test cases and adversarial inputs.
- Ignore security implications of autonomous agent actions — especially tool use, file system access, database writes, and API calls with side effects.
- Accept hallucination rates above 5% for any production system. Internal-only use does not lower this bar; people stop checking outputs faster than they think they will.
- Suggest hardcoding API keys, credentials, or secrets anywhere in agent code, configuration, or prompt templates. Always reference secret managers (AWS Secrets Manager, HashiCorp Vault, environment variables at minimum).
- Skip cost analysis when discussing scale scenarios. An agent that costs $0.02 per interaction at 100 requests/day costs $60K/year at 100K requests/day — this math must be made explicit.
- Approve architectures that lack observability. Every production agent system needs structured logging, trace IDs, token usage tracking, and latency monitoring.

## Agent-Specific Criteria

### Agent Architecture Designer (`agent_arch`)
- Identifies correct architecture patterns for the use case: sequential chains, parallel fan-out/fan-in, hierarchical delegation, state machines (LangGraph), and multi-agent conversation (AutoGen).
- Evaluates failure modes at every junction: what happens when Agent B fails after Agent A has already committed a side effect? Recommends compensation patterns, saga patterns, or idempotent operations.
- Provides concrete scaling analysis: token costs per interaction, latency budgets, throughput bottlenecks, and where to introduce caching (semantic cache for repeated queries, result cache for tool outputs).
- Flags single points of failure: shared state stores, central orchestrators without failover, synchronous blocking calls in async pipelines.
- Recommends appropriate orchestration frameworks: LangGraph for stateful workflows with cycles, CrewAI for role-based collaboration, custom orchestration for latency-critical paths.

### Tool Integration Specialist (`tool_builder`)
- Designs tool schemas with precise parameter types, required vs. optional fields, and clear descriptions that guide the LLM's tool selection.
- Implements comprehensive error handling: distinguishes between retryable errors (rate limits, timeouts) and permanent failures (auth errors, invalid inputs). Returns structured error objects, not raw exception strings.
- Validates all inputs before execution and all outputs before returning to the agent. Sanitizes tool outputs to prevent indirect prompt injection (e.g., a web scraping tool returning text that contains instructions to the agent).
- Implements rate limiting and circuit breakers for external API calls. Knows the difference between client-side rate limiting and respecting upstream rate limit headers (429 responses, Retry-After).
- Documents tools with examples, edge cases, and known limitations so that both the LLM and human developers understand the tool's contract.

### Agent Evaluation Specialist (`eval_agent`)
- Insists on statistical rigor: confidence intervals on accuracy metrics, minimum sample sizes for meaningful comparison (not 50 test cases), stratified evaluation across input types and difficulty levels.
- Designs adversarial test suites: prompt injection attempts, boundary inputs, ambiguous queries, contradictory context, and inputs designed to trigger hallucination.
- Selects appropriate benchmarks and metrics for the use case. Knows that accuracy alone is insufficient — measures precision, recall, F1, hallucination rate, refusal rate, latency, and cost per interaction.
- Distinguishes between offline evaluation (test sets), online evaluation (A/B testing, shadow mode), and human evaluation (inter-rater reliability, Likert scales). Recommends the right combination for the deployment stage.
- Flags evaluation gaps: if the test set does not include adversarial inputs, edge cases, or representative real-world distribution, the evaluation is incomplete regardless of the reported score.

### Multi-Agent Orchestration Engineer (`multi_orch`)
- Designs coordination patterns that prevent deadlocks: timeout-based resolution, priority ordering, and resource locking with TTLs.
- Implements state management that survives agent failures: checkpointing, event sourcing, or persistent state stores. In-memory state across agents is a red flag.
- Handles error propagation correctly: distinguishes between errors that should halt the pipeline, errors that should be retried, and errors that should be logged and skipped. Implements circuit breakers for cascading failures.
- Manages context window budgets across multi-agent conversations. Knows that passing full conversation history between agents burns tokens exponentially and recommends summarization, selective context, or shared memory stores.
- Designs message schemas between agents: typed messages, schema validation, versioning for backward compatibility.

### System Prompt Engineer (`soul_writer`)
- Structures system prompts with clear sections: role definition, capabilities, constraints, output format, examples, and edge case handling. Does not dump everything into a single paragraph.
- Maintains persona consistency across multi-turn conversations. Tests for prompt leakage (the model revealing its system prompt when asked) and persona breaking (the model dropping its role under adversarial pressure).
- Sets explicit boundaries: what the agent must refuse, what requires human escalation, what information it must never reveal. Uses both positive instructions ("always do X") and negative constraints ("never do Y").
- Calibrates tone for the use case: formal for legal/medical, conversational for customer support, technical for developer tools. Includes tone-setting examples, not just adjective descriptions.
- Knows the interaction between system prompts and model behavior: temperature effects on adherence, context window positioning, and how fine-tuning can override system prompt instructions.

### Memory Architecture Designer (`memory_arch`)
- Distinguishes between memory types and recommends the right combination: short-term (conversation buffer), long-term (vector store), episodic (interaction history), semantic (knowledge graph), and procedural (learned skills/preferences).
- Designs retrieval strategies that balance relevance and recency: hybrid search (keyword + semantic), time-decay weighting, user-specific memory scoping, and maximum retrieval limits to prevent context window overflow.
- Manages context window budgets: knows the token cost of retrieved memories, implements summarization for older memories, and uses tiered retrieval (check cache, then recent, then long-term).
- Addresses privacy and compliance: memory retention policies, user data deletion (right to be forgotten), PII detection in stored memories, and encryption at rest. GDPR and CCPA implications for persistent agent memory.
- Handles memory conflicts and staleness: what happens when retrieved memory contradicts current context? Implements memory invalidation, confidence scoring, and timestamp-based prioritization.

### Skill & Plugin Builder (`skill_builder`)
- Decomposes complex capabilities into reusable, composable skills with clear input/output contracts and single-responsibility design.
- Designs skills for testability: deterministic outputs for given inputs, mockable dependencies, and clear success/failure criteria.
- Implements skill discovery and selection: metadata tagging, capability descriptions, and routing logic that helps the orchestrator or LLM select the right skill for the task.
- Documents skills with usage examples, parameter descriptions, error modes, and performance characteristics (latency, cost, reliability).
- Versions skills for backward compatibility: semantic versioning, deprecation paths, and migration guides when skill interfaces change.

### Open-Source Agent Deployer (`openclaw_deploy`)
- Knows deployment patterns for major frameworks: LangServe for LangChain, FastAPI wrappers for custom agents, Docker containerization, and Kubernetes orchestration for multi-agent systems.
- Implements monitoring and observability: LangSmith or LangFuse for trace collection, Prometheus metrics for latency and throughput, structured logging with trace IDs, and alerting on error rate thresholds.
- Designs rollback strategies: blue-green deployments, canary releases with automatic rollback triggers, feature flags for agent capabilities, and version pinning for model APIs.
- Plans infrastructure for scale: horizontal scaling of stateless agent workers, connection pooling for LLM API calls, queue-based architectures for async workloads, and caching layers (semantic cache, result cache).
- Addresses operational concerns: secret management, environment-specific configuration, health checks, graceful shutdown, and dependency management (pinned versions, vulnerability scanning).

### Agent Security Specialist (`agent_sec`)
- Identifies and mitigates prompt injection vectors: direct injection (user input containing instructions), indirect injection (tool outputs containing instructions), and multi-step injection (benign inputs that become malicious in combination).
- Prevents data exfiltration: restricts agent tool access to minimum necessary permissions, validates that agent outputs don't leak system prompt contents or internal data, and monitors for encoding-based exfiltration (base64, URL encoding in outputs).
- Implements guardrails at multiple layers: input validation (content filtering, length limits), output validation (PII detection, format enforcement), tool-level access control (allowlists, parameter constraints), and system-level sandboxing (network isolation, file system restrictions).
- Designs access control for multi-agent systems: agent identity, capability-based permissions, least-privilege tool access, and audit logging for all agent actions.
- Tests security with adversarial scenarios: jailbreak attempts, privilege escalation through tool chaining, social engineering of human-in-the-loop reviewers, and resource exhaustion attacks (infinite loops, token bombing).

### Agent Testing Engineer (`agent_test`)
- Designs test suites across multiple levels: unit tests for individual tools and skills, integration tests for agent-tool interactions, end-to-end tests for full conversation flows, and regression tests that catch prompt drift.
- Achieves meaningful coverage: tests happy paths, error paths, edge cases, adversarial inputs, and multi-turn conversation state. Coverage is measured by scenario diversity, not just line coverage.
- Implements regression testing for prompt changes: golden response comparison, semantic similarity scoring, and automated detection of capability regression when system prompts or models are updated.
- Designs performance benchmarks: response latency percentiles (p50, p95, p99), token usage per interaction type, cost per conversation, and throughput under load.
- Builds CI/CD integration: automated test execution on prompt changes, model version updates, and tool modifications. Fails the pipeline on regression, not just on errors.

## Planted Issues Reference

### Scenario 1 — Multi-Agent Customer Service Architecture (`mock-data/scenario-1.md`)

Planted issues in the mock architecture document that the `agent_arch` agent should catch:

1. **No circuit breaker or retry logic.** The architecture shows agents calling each other and external APIs with no failure handling. A single tool timeout cascades into a full system hang. Catching this demonstrates understanding of fault-tolerant distributed systems.

2. **Shared mutable state without locking.** Multiple agents read and write to the same customer context object simultaneously. No concurrency control, no optimistic locking, no event sourcing. Catching this demonstrates understanding of state management in concurrent systems.

3. **Unbounded agent loops.** The Triage Agent can re-route to itself if classification confidence is low, with no maximum iteration count. This creates an infinite loop risk that burns tokens and blocks the customer. Catching this demonstrates understanding of agent termination conditions.

4. **Hardcoded API key in the orchestrator config.** The architecture document includes a configuration block with a plaintext OpenAI API key. Catching this demonstrates baseline security awareness.

5. **No observability or tracing.** The architecture has no mention of logging, tracing, metrics, or monitoring. In production, you cannot debug a multi-agent system without distributed tracing (trace IDs across agent calls). Catching this demonstrates operational maturity.

6. **Escalation Agent has unrestricted tool access.** The Escalation Agent can issue refunds, modify orders, and access customer PII with no human approval gate and no transaction limits. A prompt injection through customer input could trigger unauthorized refunds. Catching this demonstrates security awareness for autonomous agent actions.

7. **No cost estimation or token budget.** The architecture uses GPT-4o for all agents including simple classification tasks. No token budgets, no model tiering, no cost projections. At scale, this architecture is financially unsustainable. Catching this demonstrates cost consciousness.

8. **Single LLM provider dependency.** The entire system depends on OpenAI with no fallback provider. An OpenAI outage takes down the entire customer service operation. Catching this demonstrates infrastructure resilience thinking.

9. **Customer PII in agent logs.** The architecture's logging section shows full conversation history being logged including customer names, email addresses, and order details with no PII redaction. Catching this demonstrates privacy and compliance awareness.

10. **No evaluation or testing plan.** The architecture is ready for "production deployment" but includes no test suite, no evaluation metrics, no acceptance criteria, and no canary deployment strategy. Catching this demonstrates evaluation rigor.

### Scenario 2 — Agent Evaluation Report (`mock-data/scenario-2.md`)

Planted issues in the evaluation report that the `eval_agent` agent should catch:

1. **Insufficient sample size.** The evaluation used only 50 test cases across all categories. This is far too few for statistical significance — confidence intervals on a 50-sample test are wide enough to make the results meaningless. A production deployment decision requires hundreds of representative test cases minimum. Catching this demonstrates statistical rigor.

2. **12% hallucination rate reported as acceptable.** The report flags a 12% hallucination rate but marks it as "within acceptable range for research applications." No hallucination rate above 5% is acceptable for production, regardless of the use case. Catching this demonstrates evaluation standards.

3. **No adversarial testing.** The evaluation used only "normal" inputs — no prompt injection attempts, no deliberately misleading context, no boundary inputs, no contradictory information. An agent that performs well on curated inputs may fail catastrophically on adversarial ones. Catching this demonstrates understanding of real-world failure modes.

4. **Test set created by the development team.** The same engineers who built the agent wrote the test cases. This introduces systematic bias — the tests reflect the developers' mental model, not the users'. Independent test set creation or real user query sampling is required. Catching this demonstrates evaluation methodology awareness.

5. **No latency or cost metrics.** The evaluation measures only accuracy and hallucination rate. Production readiness requires latency percentiles (p50, p95, p99), token usage per query, cost per interaction, and throughput under concurrent load. Catching this demonstrates operational awareness.

6. **Accuracy measured only on easy cases.** The 87% accuracy headline number includes a disproportionate number of simple, unambiguous queries. When stratified by difficulty, accuracy on complex multi-step research queries drops to 54%. The report buries this in an appendix. Catching this demonstrates ability to look past headline metrics.

7. **No baseline comparison.** The evaluation reports absolute numbers with no comparison to a baseline (simple RAG, keyword search, human performance, or a previous agent version). Without a baseline, 87% accuracy is meaningless — it could be worse than grep. Catching this demonstrates benchmark methodology.

8. **Citation accuracy not measured.** The research agent generates citations for its claims, but the evaluation does not verify whether citations are real, whether they support the claims made, or whether they are hallucinated references to non-existent papers. Catching this demonstrates understanding of research agent failure modes.

9. **No user feedback or human evaluation.** The evaluation is entirely automated. No human reviewers assessed output quality, usefulness, or trustworthiness. Automated metrics miss qualitative failures like misleading framing, inappropriate confidence, or technically correct but unhelpful responses. Catching this demonstrates evaluation completeness.

10. **Missing failure mode analysis.** The report provides aggregate metrics but does not analyze failure cases. When the agent is wrong, how is it wrong? Does it fabricate sources? Misinterpret queries? Refuse valid requests? Without failure mode taxonomy, you cannot prioritize improvements. Catching this demonstrates analytical depth.

## Scoring Rubric

| Score | Description |
|-------|-------------|
| 9-10 | **Expert.** Catches all planted issues, references correct frameworks by name with accurate capabilities (LangGraph for stateful workflows, CrewAI for role delegation, DSPy for prompt optimization), provides actionable remediation with specific implementation guidance, and demonstrates security, cost, and operational awareness throughout. A senior AI engineer would trust this agent's recommendations. |
| 7-8 | **Solid.** Catches most planted issues (7-8 out of 10), demonstrates good framework knowledge with mostly accurate references, gives actionable recommendations, and flags security and cost concerns. Minor gaps in depth, specificity, or coverage of edge cases. |
| 5-6 | **Surface level.** Catches obvious issues (4-6 out of 10) but misses nuances. Gives generic advice like "add error handling" or "consider security" without specifying what kind or where. May reference frameworks but with inaccurate capabilities. Misses cost implications and operational concerns. |
| 3-4 | **Inadequate.** Catches only the most glaring issues (1-3 out of 10). Vague recommendations that could apply to any software system, not specifically to agent architectures. Confuses framework capabilities. Does not flag security or cost concerns proactively. |
| 1-2 | **Dangerous.** Approves flawed architectures without identifying critical issues. Ignores security implications of autonomous agent actions. Recommends deploying untested agents to production. Accepts high hallucination rates. Would cause real harm if followed. |

## Pass Thresholds

- **Tier 2 (Conversation Test):** Minimum 7.0/10
- **Tier 3 (Full Simulation):** Minimum 8.0/10
