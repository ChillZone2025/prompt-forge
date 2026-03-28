# Multi-Agent Customer Service Architecture Review

**Client:** ShopStream Inc.
**Submitted by:** Platform Engineering Team
**Date:** 2026-03-15
**Version:** 1.2
**Status:** Pending Architecture Review

---

## Executive Summary

ShopStream Inc. is deploying a multi-agent customer service system to handle its growing support volume (~8,000 tickets/day). The system uses five specialized agents orchestrated via LangGraph, with model routing optimized for cost and latency. This document describes the architecture, current performance metrics, and deployment plan for production rollout.

---

## System Architecture

### Agent Topology

```
                    ┌──────────────┐
     User Query ──▶ │ Router Agent │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
        ┌──────────┐ ┌──────────┐ ┌──────────────┐
        │FAQ Agent │ │ Billing  │ │  Escalation  │
        │          │ │  Agent   │ │    Agent     │
        └──────────┘ └──────────┘ └──────┬───────┘
                                         │
                                    ┌────▼─────┐
                                    │ Feedback  │
                                    │  Agent    │
                                    └──────────┘
```

### Agent Responsibilities

| Agent | Model | Role |
|-------|-------|------|
| Router Agent | GPT-4o-mini | Classifies intent, routes to specialist agent |
| FAQ Agent | GPT-4o-mini + Pinecone RAG | Answers product/policy questions from knowledge base |
| Billing Agent | Claude 3.5 Sonnet | Handles billing inquiries, refund processing, payment disputes |
| Escalation Agent | Claude 3.5 Sonnet | Manages complex complaints, account modifications, refund approvals up to $1,000 |
| Feedback Agent | GPT-4o-mini | Collects post-interaction feedback, generates CSAT surveys |

### Tech Stack

- **Orchestration:** LangGraph 0.1.x
- **LLM Providers:** OpenAI (GPT-4o-mini), Anthropic (Claude 3.5 Sonnet)
- **Vector Store:** Pinecone (us-east-1, p1 pod, 1536 dimensions)
- **Embedding Model:** text-embedding-3-small
- **Framework:** LangChain 0.2.x, Python 3.11
- **Deployment:** Docker containers on AWS ECS (us-east-1)
- **Monitoring:** CloudWatch metrics, custom dashboard

---

## Agent Configuration

### Router Agent

```python
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, END
from typing import TypedDict, Literal

class CustomerState(TypedDict):
    query: str
    history: list[dict]
    intent: str
    response: str
    satisfaction: float

router_llm = ChatOpenAI(
    model="gpt-4o-mini",
    api_key="sk-proj-abc123def456ghi789jkl012mno345pqr678stu901vwx234",
    temperature=0.0,
    max_tokens=150
)

ROUTER_PROMPT = """You are a customer service router for ShopStream Inc.
Classify the customer's intent into one of these categories:
- FAQ: General product or policy questions
- BILLING: Payment, refund, subscription, or invoice issues
- ESCALATION: Complaints, account issues, or requests needing special handling

Respond with only the category name."""

def route_query(state: CustomerState) -> CustomerState:
    response = router_llm.invoke([
        {"role": "system", "content": ROUTER_PROMPT},
        {"role": "user", "content": state["query"]}
    ])
    state["intent"] = response.content.strip()
    return state
```

### FAQ Agent with RAG

```python
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_pinecone import PineconeVectorStore

embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small",
    api_key="sk-proj-abc123def456ghi789jkl012mno345pqr678stu901vwx234"
)

vectorstore = PineconeVectorStore(
    index_name="shopstream-faq",
    embedding=embeddings,
    pinecone_api_key="pcsk_2xK9m_HJd8sLpRq..."
)

faq_llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.1)

def faq_agent(state: CustomerState) -> CustomerState:
    # Retrieve relevant FAQ entries
    results = vectorstore.similarity_search_with_score(
        state["query"],
        k=3,
        score_threshold=0.5  # Return results with cosine similarity >= 0.5
    )

    context = "\n\n".join([doc.page_content for doc, score in results])

    response = faq_llm.invoke([
        {"role": "system", "content": f"""You are ShopStream's FAQ assistant.
Answer the customer's question using ONLY the following context.
If the context doesn't contain the answer, say so.

Context:
{context}"""},
        {"role": "user", "content": state["query"]}
    ])

    state["response"] = response.content
    return state
```

### Escalation Agent

```python
from langchain_anthropic import ChatAnthropic
import json

escalation_llm = ChatAnthropic(
    model="claude-3-5-sonnet-20241022",
    api_key="sk-ant-api03-abc123...",
    max_tokens=1024,
    temperature=0.2
)

ESCALATION_TOOLS = [
    {
        "name": "approve_refund",
        "description": "Approve a refund for the customer. Can approve amounts up to $1,000.",
        "input_schema": {
            "type": "object",
            "properties": {
                "order_id": {"type": "string"},
                "amount": {"type": "number", "maximum": 1000},
                "reason": {"type": "string"}
            },
            "required": ["order_id", "amount", "reason"]
        }
    },
    {
        "name": "modify_account",
        "description": "Modify customer account settings including subscription tier, billing address, and notification preferences.",
        "input_schema": {
            "type": "object",
            "properties": {
                "customer_id": {"type": "string"},
                "modifications": {"type": "object"}
            },
            "required": ["customer_id", "modifications"]
        }
    }
]

def escalation_agent(state: CustomerState) -> CustomerState:
    response = escalation_llm.invoke(
        [
            {"role": "system", "content": """You are ShopStream's escalation specialist.
You handle complex customer complaints and account issues.
You have authority to approve refunds up to $1,000 and modify account settings.
Always be empathetic and aim for first-contact resolution."""},
            {"role": "user", "content": state["query"]}
        ],
        tools=ESCALATION_TOOLS
    )

    # Process tool calls if any
    if response.tool_calls:
        for tool_call in response.tool_calls:
            result = execute_tool(tool_call)
            state["response"] = f"Action taken: {tool_call['name']} — {result}"
    else:
        state["response"] = response.content

    return state
```

### LangGraph Workflow

```python
from langgraph.graph import StateGraph, END

workflow = StateGraph(CustomerState)

# Add nodes
workflow.add_node("router", route_query)
workflow.add_node("faq", faq_agent)
workflow.add_node("billing", billing_agent)
workflow.add_node("escalation", escalation_agent)
workflow.add_node("feedback", feedback_agent)

# Add edges
workflow.set_entry_point("router")

workflow.add_conditional_edges(
    "router",
    lambda state: state["intent"],
    {
        "FAQ": "faq",
        "BILLING": "billing",
        "ESCALATION": "escalation"
    }
)

# All agents route to feedback after response
workflow.add_edge("faq", "feedback")
workflow.add_edge("billing", "feedback")
workflow.add_edge("escalation", "feedback")
workflow.add_edge("feedback", END)

app = workflow.compile()
```

---

## Performance Metrics (30-Day Staging Environment)

| Metric | Value | Target |
|--------|-------|--------|
| Avg Response Time | 2.3s | < 3.0s |
| P95 Response Time | 4.8s | < 5.0s |
| Customer Satisfaction (CSAT) | 4.2 / 5.0 | > 4.0 |
| First Contact Resolution Rate | 78% | > 75% |
| Escalation Rate | 6.2% | < 8% |
| Daily Ticket Volume (staging) | 1,200 | — |
| Avg Cost per Interaction | $0.032 | < $0.05 |
| Agent Uptime | 99.7% | 99.5% |

### Routing Accuracy

| Route | Precision | Recall | F1 |
|-------|-----------|--------|----|
| FAQ | 94% | 91% | 92.5% |
| Billing | 89% | 87% | 88.0% |
| Escalation | 85% | 82% | 83.5% |

### Cost Breakdown (Monthly Projection at 8K tickets/day)

| Component | Monthly Cost |
|-----------|-------------|
| OpenAI (GPT-4o-mini) | $1,920 |
| Anthropic (Claude 3.5 Sonnet) | $4,800 |
| Pinecone (p1 pod) | $70 |
| AWS ECS (2 tasks, t3.medium) | $140 |
| **Total** | **$6,930** |

---

## SLA Commitments

| SLA | Target | Current |
|-----|--------|---------|
| System Uptime | 99.5% | 99.7% |
| Response Time | < 3.0s | 2.3s avg |
| Escalation Rate | < 5% | 6.2% |
| Data Retention | 90 days | 90 days |
| Incident Response | < 30 min | — |

---

## Deployment Plan

### Infrastructure

- **Container Runtime:** Docker 24.x
- **Orchestration:** AWS ECS Fargate
- **Region:** us-east-1 (single region)
- **Instances:** 2 ECS tasks (primary + warm standby)
- **Load Balancer:** ALB with health check on `/health`
- **Secrets:** Passed via environment variables in ECS task definition

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to ECS
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build Docker image
        run: docker build -t shopstream-agents .
      - name: Push to ECR
        run: |
          aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_URI
          docker tag shopstream-agents:latest $ECR_URI/shopstream-agents:latest
          docker push $ECR_URI/shopstream-agents:latest
      - name: Update ECS service
        run: aws ecs update-service --cluster prod --service agents --force-new-deployment
```

### Rollback Plan

- ECS maintains previous task definition revision
- Rollback via: `aws ecs update-service --task-definition agents:PREVIOUS_REVISION`
- Database migrations are backward-compatible

---

## Security Considerations

- All API calls use HTTPS/TLS 1.3
- Customer data encrypted at rest (AES-256) and in transit
- Conversation logs retained for 90 days, then purged
- IAM roles scoped to minimum required permissions

---

## Open Questions

1. Should we add a Spanish-language routing path?
2. Timeline for multi-region failover setup?
3. Integration with existing Zendesk instance — parallel run or full cutover?

---

## Approval

| Role | Name | Status |
|------|------|--------|
| Engineering Lead | Sarah Chen | Pending |
| Security Review | Marcus Liu | Pending |
| VP Customer Experience | David Park | Pending |

---
---

## PLANTED ISSUES (for evaluation — agent should catch these)

The following issues are intentionally embedded in the architecture document above. A competent AI agent architect reviewing this system should identify all six:

1. **No content filtering or guardrails** — None of the five agents implement input validation, output filtering, or PII detection. The system prompts contain no instructions to refuse harmful requests, detect prompt injection attempts, or redact sensitive customer data (SSNs, credit card numbers) from responses. A malicious user could craft inputs to extract system prompts, bypass routing logic, or cause the agents to output harmful content. Every user-facing LLM agent needs a content safety layer.

2. **Single point of failure in Router Agent** — The entire system depends on the Router Agent to classify and forward every request. If the router process crashes, enters a bad state, or experiences elevated latency, all customer requests fail with no fallback. There is no circuit breaker pattern, no health-check-triggered failover, and no default routing behavior. The architecture should include a fallback routing mechanism (e.g., keyword-based rules engine) and circuit breaker logic that routes to a general-purpose agent when the router is degraded.

3. **Hardcoded API keys in code snippets** — The Router Agent configuration contains `api_key="sk-proj-abc123def456ghi789jkl012mno345pqr678stu901vwx234"` directly in the Python source code. The FAQ Agent and Escalation Agent configurations similarly embed API keys inline. This is a critical security violation — API keys must be loaded from environment variables or a secrets manager (AWS Secrets Manager, HashiCorp Vault, etc.), never committed to source code. Even in documentation, example keys should use placeholders like `os.environ["OPENAI_API_KEY"]`.

4. **No rate limiting or cost controls** — There is no per-user rate limiting, no maximum token budget per request, no daily or monthly spend cap, and no abuse detection. At the projected volume of 8,000 tickets/day, a single abusive user or a bot attack could generate thousands of dollars in API costs within hours. The system needs: per-user rate limits (e.g., 10 requests/minute), per-request token caps, a global daily spend ceiling with alerting, and anomaly detection for unusual usage patterns.

5. **RAG similarity threshold too low (0.5)** — The FAQ Agent's `score_threshold=0.5` for cosine similarity is far below industry best practice of 0.75–0.85. At 0.5, the system will return marginally related FAQ entries as confident answers, leading to incorrect responses that sound authoritative. This directly undermines customer trust. The threshold should be raised to at least 0.75, with a fallback message ("I'm not sure about that — let me connect you with a specialist") when no results meet the threshold.

6. **No human-in-the-loop for high-value decisions** — The Escalation Agent can autonomously approve refunds up to $1,000 and modify account settings (subscription tier, billing address, notification preferences) without any human review or approval step. This creates financial risk (fraudulent refund requests) and compliance risk (unauthorized account modifications). High-value actions should require human approval above a configurable threshold (e.g., refunds > $100), and account modifications affecting billing or subscription should trigger a confirmation workflow with the account holder.
