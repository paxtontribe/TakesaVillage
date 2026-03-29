# Architecture Patterns: Takes a Village

**Domain:** Decentralized Knowledge Graph + DAO + AI Social Agents (Healthcare Transparency)
**Researched:** 2026-03-28
**Knowledge cutoff:** August 2025 — web access restricted during this session
**Overall confidence:** MEDIUM (core DKG/Polkadot patterns are well-established; specific v8 API surface and NeuroWeb inference API details need live verification against current docs)

---

## IMPORTANT: Verification Required

Web access was unavailable during this research session. All findings below are drawn from training data (cutoff August 2025). Before implementing any phase:

- [ ] Verify OriginTrail DKG v8 SDK API surface at https://docs.origintrail.io
- [ ] Verify NeuroWeb inference API at https://neuroweb.ai/docs
- [ ] Verify Polkadot PoP (Proof of Personhood) current pallet status
- [ ] Verify Umanitek Guardian API availability
- [ ] Verify each social platform's current bot/agent policy (TikTok, Meta, Snapchat)

---

## 1. OriginTrail DKG Architecture

### What the DKG Is

The OriginTrail Decentralized Knowledge Graph is a **two-layer system**:

- **Layer 1 (blockchain):** Smart contracts on NeuroWeb (Polkadot parachain) or Gnosis Chain handle ownership, TRAC token staking/incentives, and Knowledge Asset (KA) registration. As of DKG v6/v8, NeuroWeb is the primary L1.
- **Layer 2 (network):** A peer-to-peer network of DKG nodes run by node operators. Nodes store the actual RDF/JSON-LD graph data, serve SPARQL queries, and replicate knowledge assets.

### Knowledge Asset Structure

A Knowledge Asset (KA) is the fundamental unit of the DKG. Each KA:

1. **Has a UAL (Universal Asset Locator)** — a persistent, globally resolvable identifier analogous to a URL but blockchain-anchored. Format: `did:dkg:{blockchain}:{contract_address}/{token_id}`
2. **Contains two graphs:**
   - **Public assertion:** RDF triples serialized as JSON-LD. This is indexed and queryable by the network. Structured using W3C standards (Schema.org, GSI GS1 vocabulary, VC/DID specs).
   - **Private assertion:** Encrypted RDF triples. Only readable by parties holding the decryption key. Hash is published on-chain for integrity proof.
3. **Is content-addressed:** The Merkle root of the assertion is published on-chain. Tampering with stored data is detectable.
4. **Has an epoch-based lifetime:** TRAC tokens are locked by the publisher to pay node operators for storage over a defined number of epochs (typically 1 epoch = 3 months). If not renewed, nodes can drop the asset.

**Confidence: MEDIUM** — This is the DKG v6 model. DKG v8 (released 2024) refined the storage model and SDK; verify epoch/renewal mechanics against current v8 docs.

### Publishing a Knowledge Asset

```
Publisher → DKG SDK (dkg.js / dkg.py) → HTTP request to a DKG gateway node
  → Node broadcasts to network
  → Winning nodes (selected via random verifiable lottery weighted by stake) store the assertion
  → On-chain: UAL minted, TRAC tokens locked for storage fees
  → Publisher receives UAL back
```

**Key constraint:** Publishing requires TRAC tokens. The publisher pays storage fees upfront for a fixed epoch count. For a healthcare platform publishing hundreds of facility profiles, budget TRAC acquisition into the infrastructure cost model. Amounts are small per asset but non-zero.

**Gateway node option:** OriginTrail operates public gateway nodes. For production, running a private gateway node (or using a trusted hosted node) gives more control over publishing reliability.

### Querying the DKG

Two query patterns exist:

**1. SPARQL over the DKG (federated graph query)**
```sparql
SELECT ?facility ?name ?licenseNumber
WHERE {
  ?facility a schema:MedicalOrganization ;
            schema:name ?name ;
            schema:license ?licenseNumber .
  ?facility takesavillage:verificationStatus "verified" .
}
```
- Sent to any DKG node via the `/query` endpoint
- Node federates across its local store and peer nodes
- Returns RDF results; application layer maps to domain objects
- Latency: variable (50ms–several seconds depending on graph size and federation depth)

**2. Direct UAL resolution**
```
GET /resolve?UAL=did:dkg:neuroweb:0xabc.../42
→ Returns the full JSON-LD assertion for that Knowledge Asset
```
- Fast single-asset lookup
- Used when you know the exact UAL (e.g., loading a facility profile page)

**Recommendation for Takes a Village:** Use UAL resolution for facility profile pages (fast, deterministic) and SPARQL for search/discovery (flexible, filter-capable). Cache SPARQL results server-side with a short TTL (5–30 minutes) to avoid hammering the DKG network.

**Confidence: MEDIUM** — SPARQL is the documented query interface; verify v8 query endpoint details and federation behavior with current docs.

### TRAC Token Economics

- **TRAC** is the utility token of the OriginTrail ecosystem, running on NeuroWeb (Polkadot parachain).
- **Node operators** stake TRAC to participate in the storage network. Higher stake = higher probability of winning storage jobs.
- **Publishers** pay TRAC to store knowledge assets. Payment goes to storing nodes over the asset's lifetime.
- **Paranets** (see below) introduce a second incentive layer on top of base storage.

**For Takes a Village specifically:** The platform will need a TRAC treasury to fund:
  1. Publishing facility profiles as KAs
  2. Publishing research papers as KAs
  3. Publishing anonymized patient outcomes as KAs
  4. Renewing epoch-expired assets

Token acquisition strategy: Foundation holds a TRAC treasury funded from grants. Facilities may also be required to stake minimal TRAC as part of profile creation (skin in the game for accuracy).

**Confidence: MEDIUM** — Core TRAC mechanics are stable; exact per-asset costs require current pricing checks.

### Paranets

Paranets are **permission-scoped sub-networks** of the DKG introduced in 2024. A paranet:

1. Has an operator (an entity that defines the paranet's rules)
2. Scopes which Knowledge Assets belong to it
3. Has its own incentive pool — publishing assets into a paranet can earn the publisher additional rewards from the paranet's pool
4. Enables AI inference at the paranet level (NeuroWeb uses paranets as the unit of AI indexing)

**Takes a Village should operate its own Paranet.** Rationale:
- All facility profiles, research papers, and outcomes published within the TaV paranet form a coherent, queryable sub-graph
- The paranet operator (Takes a Village Foundation) can define contribution standards (W3C/GSI schemas enforced at ingestion)
- Paranet-level rewards can be funded by the foundation's TRAC treasury to incentivize early facility onboarding (the flywheel mechanism)
- AI agents (NeuroWeb inference) query the paranet as a bounded context rather than the entire DKG

**Paranet setup flow:**
```
Foundation deploys paranet contract on NeuroWeb
  → Defines: allowed asset schemas, incentive rate, operator address
  → Contributors publish KAs and tag them to the paranet UAL
  → Paranet pool distributes TRAC rewards to contributors proportional to contribution quality score
```

**Confidence: MEDIUM** — Paranets were introduced in DKG v6/v7; verify current paranet API and incentive mechanics in v8.

---

## 2. NeuroWeb Inference — AI Agents Querying the DKG

### What NeuroWeb Inference Is

NeuroWeb is OriginTrail's Polkadot parachain. Beyond being the L1 for DKG token mechanics, it operates an **AI inference layer** that allows AI models to query paranets as structured context sources.

The inference pattern:
```
AI Agent → NeuroWeb Inference API
  → Inference layer translates natural language query to SPARQL
  → Executes against the paranet's knowledge graph
  → Returns structured JSON-LD results + source UALs
  → Agent constructs grounded response citing source KAs
```

This is the key architectural property: **agent responses are grounded in verifiable DKG assertions, not hallucinated training data.** Each answer cites a specific UAL that can be independently resolved. This is the "auditable response" requirement in AI-05.

### Integration Architecture for TaV AI Agents

```
Social Platform (TikTok/FB/etc.)
  ↓ user message (webhook/API)
Agent Backend (Node.js service)
  ↓ structured query
NeuroWeb Inference API
  ↓ SPARQL result + source UALs
Agent Backend
  ↓ LLM call (OpenAI/Anthropic) with DKG context injected
  ↓ response text + cited UALs
Social Platform → User
  + "Source: [facility name], verified on DKG [UAL link]"
```

**The agent does not use LLM knowledge for facility/outcome facts.** It uses LLM only for natural language generation over DKG-sourced structured data. This prevents hallucination on the domain facts that matter most (treatment methods, costs, availability, outcomes).

### Crisis Escalation Pattern (AI-04)

Crisis detection must be synchronous and pre-DKG-lookup:

```
User message received
  ↓ Crisis keyword/sentiment classifier (runs first, <100ms)
  ↓ if crisis: immediately return SAMHSA/988 response, log event, skip DKG query
  ↓ if not crisis: proceed to DKG query + normal response
```

Use a dedicated crisis classifier (fine-tuned small model or rules-based keyword list) — do not rely on the main LLM for this classification. Latency and reliability matter more than sophistication here.

**Confidence: MEDIUM** — NeuroWeb inference direction is documented in OriginTrail's 2024 roadmap; verify current API availability and exact query interface at neuroweb.ai/docs.

---

## 3. DAO Architecture (Polkadot Ecosystem)

### Governance Model for Takes a Village

The requirement is one-person-one-vote (DAO-02), not token-weighted voting. This is a significant constraint that rules out most standard DeFi governance contracts (Compound Governor, OpenZeppelin Governor — these are token-weighted by default).

### Recommended Pattern: Polkadot OpenGov + Custom Conviction Override

**Option A: Native Substrate/OpenGov on NeuroWeb (HIGH preference)**

NeuroWeb inherits Polkadot's OpenGov governance framework as a parachain. OpenGov provides:
- On-chain referendum system
- Configurable tracks (different vote thresholds for different proposal types)
- Delegation support
- Foundation veto via a "technical committee" or "fellowship" track

The identity link to PoP Level 2 enables one-person-one-vote: each governance participant must hold a verified PoP credential. The voting pallet can be configured to weight votes by identity-verified accounts (1 verified identity = 1 vote) rather than token balance.

**Implementation approach:**
```
Substrate Identity Pallet (links PoP credential to on-chain identity)
  → Governance Pallet (OpenGov track configured for TaV)
  → Proposals submitted on-chain (IPFS-linked full text)
  → Voting period (configurable: 7–14 days)
  → Execution via Treasury Pallet (funding disbursement)
             or Dispatch call (platform policy changes)
```

**Option B: Snapshot + on-chain execution bridge (MEDIUM preference, lower complexity)**

Snapshot is off-chain voting (gasless, IPFS-stored votes) with on-chain execution via a Safe multisig or custom bridge contract. This is widely used by DAOs that want low friction but need on-chain execution for treasury actions.

- Pro: No gas costs for voters, easier UX, battle-tested
- Con: Voting is off-chain (less trustless), requires bridge for execution
- The PoP identity link is harder to enforce in Snapshot's standard strategies

**Recommendation: Start with Snapshot + NeuroWeb Safe multisig for v1, migrate to full on-chain OpenGov for v2.** Rationale: full OpenGov requires significant Substrate expertise and custom runtime configuration; Snapshot gets DAO governance live faster while the platform proves traction. The foundation veto (DAO-03) is cleanly modeled as a Safe multisig guardian.

**Confidence: MEDIUM** — Snapshot is well-documented; NeuroWeb's OpenGov configuration is less documented publicly as of my training cutoff. Verify with current NeuroWeb governance docs.

### Foundation Veto Pattern (DAO-03)

Use a **Canceller role** pattern:

```
DAO proposal passes vote
  → Execution is time-locked (24–72 hours)
  → During timelock: Foundation multisig can cancel
  → After timelock: execution proceeds automatically
  → Foundation cancellation is itself logged on-chain (transparent)
```

The timelock means the Foundation cannot silently veto — all cancellations are publicly visible with the canceller's address and timestamp. This preserves the accountability requirement.

### Dispute Resolution Flow (DAO-05)

Facility disputes escalate through three tiers:

```
Tier 1: Platform moderator review (48–72 hours)
  → Automated: platform team reviews flagged claim
  → Resolution: confirm/reject flag, update DKG asset

Tier 2: Community arbitration panel (7 days)
  → Randomly selected panel of PoP Level 2 verified users
  → Panel votes Y/N on flag validity
  → Simple majority carries

Tier 3: Full DAO vote (14 days)
  → If Tier 2 is contested or panel fails quorum
  → All PoP Level 2 holders eligible to vote
  → Result written back to DKG (dispute outcome as KA)
```

**Confidence: MEDIUM** — Dispute tiering is a standard DAO pattern; the PoP-gated voter eligibility is the custom element requiring verification.

---

## 4. AI Agent Deployment Patterns (Social Platforms)

### Platform Capability Matrix

| Platform | Bot/Agent API | Webhook Support | Rate Limits (approx.) | Key Constraint |
|----------|---------------|-----------------|----------------------|----------------|
| Telegram | Bot API (official, mature) | Yes (long-polling or webhook) | 30 msg/sec per bot; 1 msg/sec per chat | None significant; most permissive |
| Facebook Messenger | Meta Platform API (Messenger) | Yes (webhooks) | 200 msg/sec (Tier 1); 2000+ with approval | App review required; HIPAA sensitivity |
| Instagram | Instagram Messaging API (via Meta) | Yes (webhooks, same as Messenger) | Tied to Meta Graph API limits | Must apply for messaging permissions |
| TikTok | TikTok Chatbot API (limited, evolving) | Partial (webhook for events) | Not publicly documented as of mid-2025 | Most restrictive; beta access required |
| YouTube | YouTube Data API v3 | Comment webhooks (limited) | 10,000 units/day (default quota) | No direct messaging; comment-only |
| Snapchat | Snapchat Business API / Bitmoji bots | Limited (Snap Kit) | Not publicly documented | Consumer-facing; minimal bot support |

**Confidence: LOW for TikTok, Snapchat, YouTube bot specifics** — these APIs were evolving rapidly as of mid-2025. Verify current developer portal status before committing to these platforms.

### Recommended Deployment Architecture

**Agent Backend Service (centralized, acceptable)**

A centralized agent orchestration service is the correct architecture here. The DKG provides the trust guarantee for the content; the agent backend is just a router. Centralizing it is acceptable because:
1. Social platform webhooks require a public HTTPS endpoint
2. Rate limiting, queue management, and session state are easier centralized
3. The agent's answers are auditable via DKG source UALs regardless of who runs the backend

```
[Platform Webhook] → [API Gateway / Load Balancer]
                       ↓
                   [Agent Orchestrator] (Node.js / Python)
                       ↓              ↓
              [Crisis Classifier]  [NeuroWeb Inference API]
                       ↓              ↓
                   [LLM Provider] (OpenAI / Anthropic)
                       ↓
                   [Response formatter]
                       ↓
                   [Platform API → User]
                       ↓
                   [Audit log] → [DKG: interaction record KA]
```

### Platform-Specific Notes

**Telegram (deploy first):**
- Telegram Bot API is the most mature, permissive, and developer-friendly
- No app review, no special permissions required for basic messaging
- Supports inline keyboard buttons for structured navigation (facility list, funding options)
- Deploy Telegram first as the MVP agent platform

**Facebook / Instagram (deploy second):**
- Requires Facebook App creation + Messenger API access approval
- Sensitive use cases (health, substance abuse) will trigger additional review by Meta
- Apply early — review can take weeks
- HIPAA-adjacent: do not store user messages on platform servers; process and discard
- Instagram DMs are the same API as Messenger as of Meta's platform unification

**TikTok (deploy third, research carefully):**
- TikTok's bot/chatbot API was in beta/limited access as of mid-2025
- TikTok's primary moderation focus is on content, not bots — policy may be friendlier than expected
- Likely requires TikTok for Business account + developer application
- If Chatbot API is unavailable: comment-response bot is the fallback (less conversational but functional)

**YouTube (deploy fourth):**
- No direct messaging to users; YouTube agent can only respond to comments
- Comment-response bot requires YouTube Data API v3 and OAuth
- Use case: monitoring substance abuse-related video comments and surfacing resources
- Rate limit: 10K units/day is restrictive — prioritize high-signal comment detection

**Snapchat (defer to v2):**
- Snap Kit's bot capabilities are minimal as of mid-2025
- Consumer-facing, younger demographic — could be high-impact but API maturity is low
- Recommend deferring until API stabilizes

### Rate Limit Management Pattern

```
[Incoming webhook] → [Message queue (Redis/BullMQ)]
  → [Worker pool] (rate-limited per platform)
  → [Platform API]
```

Never call platform APIs synchronously from webhook handlers. Always queue and drain at the platform's allowed rate. This prevents webhook timeouts and rate limit errors from cascading.

**Confidence: MEDIUM for Telegram/Facebook; LOW for TikTok/Snapchat/YouTube specifics**

---

## 5. DKG Flywheel Seeding Architecture

### The Cold Start Problem

A knowledge graph with 10 facilities is not useful. The platform needs critical mass before it's worth recommending to users. The flywheel has a chicken-and-egg structure:

```
More facilities → better search results → more users
More users → more reviews → more pressure on facilities to join
More facilities → more reviews → more value
```

Seeding breaks this by injecting initial value before organic flywheel activates.

### Seeding Strategy Architecture

**Phase 1: Synthetic Bootstrap (pre-launch)**
1. Import SAMHSA's Treatment Locator database (publicly available, 14,000+ facilities)
2. Structure each facility as a draft Knowledge Asset (public but marked "unverified")
3. Publish to DKG as platform-authored stubs with low provenance score
4. This gives the search index immediate coverage

```
SAMHSA FHIR/CSV export
  → ETL pipeline (Python)
  → JSON-LD Knowledge Assets (Schema.org MedicalOrganization + TaV extension)
  → Batch publish to DKG via SDK
  → Mark all as: verificationStatus = "stub"
```

**Phase 2: Facility Claim & Upgrade**
When a facility finds its stub profile, they claim it, add rich data, and verification status upgrades. Unclaimed stubs remain as low-confidence entries, giving users a baseline even for unparticipating facilities.

**Phase 3: Incentivized Early Adoption**
- First 100 facilities to complete full verification get elevated placement for 6 months
- Research institutions get TRAC rewards for publishing papers as KAs
- Individual outcome submissions earn token rewards (funded from foundation TRAC treasury)

**DKG Contribution Quality Scoring (DKG-02)**

```
Score = (verification_tier * 0.4)
      + (data_completeness * 0.3)
      + (citation_count * 0.2)
      + (community_validation * 0.1)
```

- verification_tier: 0 (stub) → 1 (self-reported) → 2 (platform-verified) → 3 (official source linked)
- data_completeness: % of required fields populated
- citation_count: how many other KAs link to this one
- community_validation: ratio of upvotes to flags

**Confidence: MEDIUM** — SAMHSA data is publicly available; ETL-to-DKG pattern is standard. The TRAC incentive rates need to be calibrated against actual token cost per asset.

---

## 6. Anonymous-but-Authenticated Review System

### The Core Pattern: Identity-Commitment Scheme

The requirement is: verify the person is real and attended the facility, but publish zero PII. This is achievable with a **commitment scheme** combined with Polkadot PoP.

### Architecture

```
Step 1: Identity Verification (private, platform-side)
  User authenticates via PoP Level 2
  User submits: facility name + date range attended
  Platform cross-checks with facility (facility confirms dates)
  Platform issues an "attendance credential" — a signed, off-chain VC
  → Stored platform-side; never published

Step 2: Review Submission
  User submits review text + ratings
  Platform signs the review with a platform attestation key
  Review record = { review_content, platform_attestation, nullifier_hash }
  nullifier_hash = hash(PoP_credential_id + facility_id + epoch)
  → Nullifier prevents the same PoP identity from submitting multiple reviews
    for the same facility in the same time window
  → Nullifier does NOT reveal the PoP identity

Step 3: DKG Publication (optional, with user consent)
  Anonymized outcome data stripped to: substance_type, treatment_type,
    duration, outcome_rating, facility_region (not city)
  Published as Knowledge Asset to DKG
  → No PoP ID, no name, no dates, no demographics beyond substance/treatment type
```

### Why This Works

- Facilities cannot identify who wrote a review (no PII in published record)
- Sybil attacks are blocked (one review per PoP identity per facility per epoch via nullifier)
- Platform can verify authenticity if legally challenged (holds attendance credential internally)
- HIPAA-adjacent: no medical records, only self-reported experiential data

### Implementation Components

1. **Attendance Credential Issuance:** Platform backend issues W3C VC to user after facility confirmation
2. **Nullifier Registry:** On-chain or platform-side list of used nullifier hashes (prevents double-review)
3. **Review Store:** Platform database (NOT the DKG) holds full reviews with attestation
4. **DKG Outcomes Publishing:** Separate consent-gated flow for anonymized outcome KA publication
5. **Umanitek Guardian:** Runs at review submission to detect bot/synthetic submissions before nullifier is consumed

### Fraud Vectors and Mitigations

| Vector | Mitigation |
|--------|------------|
| Fake PoP identity | PoP Level 2 requires real-world liveness check; Umanitek Guardian secondary screen |
| Facility collusion (confirming non-patients) | Flag pattern: facility with unusually high confirmation rate gets audited |
| Review bombing (negative) | Nullifier prevents >1 review per identity per facility per epoch |
| Review padding (positive, facility-coordinated) | Same nullifier protection; transparency score tracks review velocity anomalies |
| AI-generated review text | Umanitek Guardian + text classifier at submission time |

**Confidence: HIGH for pattern; MEDIUM for PoP Level 2 liveness specifics** — W3C VCs and nullifier patterns are well-established cryptographic primitives. Verify PoP Level 2 credential structure with current Polkadot identity docs.

---

## 7. Smart Contract Funding Disbursement

### Multi-Asset Funding Pool Architecture

The requirement covers USDC, USDT, ETH, DOT, and BTC disbursements. These live on different chains, requiring a multi-chain architecture.

### Chain Mapping

| Asset | Native Chain | Bridge Option | Recommended Approach |
|-------|-------------|---------------|---------------------|
| USDC | Ethereum, Base, Solana, etc. | — | Deploy on Ethereum mainnet (highest liquidity); or Base (lower gas) |
| USDT | Ethereum, Tron, etc. | — | Ethereum mainnet for institutional credibility |
| ETH | Ethereum | — | Native Ethereum |
| DOT | Polkadot relay chain | XCM to NeuroWeb | NeuroWeb-native via XCM message |
| BTC | Bitcoin | WBTC on Ethereum, or Lightning | WBTC on Ethereum (custodial risk); Lightning (non-custodial but complex) |

**Recommendation:** Run USDC/USDT/ETH/WBTC on Ethereum (single contract, multi-asset), DOT via NeuroWeb's pallet system. BTC-native is complex; use WBTC for v1 and label it clearly.

### Disbursement Contract Pattern

```solidity
// Conceptual — do not implement without security audit
contract TaVFundingPool {
    mapping(bytes32 => bool) public disbursed;  // prevent double-disbursement

    function disburse(
        address recipient,
        address token,       // USDC/USDT/WBTC address or address(0) for ETH
        uint256 amount,
        bytes32 identityCommitment,  // PoP commitment, NOT address
        bytes calldata daoApproval   // DAO multisig signature
    ) external onlyAuthorized {
        require(!disbursed[identityCommitment], "Already disbursed");
        require(verifyDaoApproval(daoApproval), "No DAO approval");
        disbursed[identityCommitment] = true;
        // transfer logic
    }
}
```

**Key design decisions:**
1. **Identity commitment not address:** Recipient is identified by their PoP commitment hash. They provide a fresh Ethereum address at disbursement time. This prevents the on-chain disbursement record from revealing the recipient's identity.
2. **DAO approval required:** All disbursements >threshold require a DAO multisig signature (the Safe multisig from the governance section)
3. **Double-disbursement guard:** The identity commitment is marked used after first disbursement for a given grant cycle
4. **Timelock:** Large disbursements (>$10K equivalent) have a 48-hour timelock during which the Foundation can cancel

### DOT Disbursement on NeuroWeb

DOT lives on Polkadot and flows to NeuroWeb via XCM (Cross-Consensus Messaging). The NeuroWeb pallet can hold a DOT treasury funded via XCM transfer from the relay chain. Disbursement uses a Substrate pallet call:

```
DAO vote passes on-chain
  → Treasury pallet executes XCM transfer to recipient's Polkadot address
  → Recipient gets DOT on relay chain or NeuroWeb
```

**Confidence: MEDIUM** — Multi-asset Ethereum contracts are well-understood; XCM-based DOT disbursement is more complex and requires Substrate expertise. WBTC approach is simpler but introduces custodial risk at the WBTC issuer level.

---

## Full System Data Flow

### Flow 1: Facility Profile → DKG → Frontend

```
1. Facility Admin authenticates (PoP Level 1 + role check)
2. Admin submits profile data via web form
3. Platform backend:
   a. Validates against W3C/GSI schema
   b. Cross-checks licensing claims against SAMHSA/state databases
   c. Calculates initial transparency score
4. Platform backend publishes Knowledge Asset to DKG:
   a. JSON-LD assertion constructed (public graph)
   b. DKG SDK call → gateway node → network
   c. TRAC tokens deducted from platform treasury
   d. UAL returned and stored in platform database
5. Platform database record: { facility_id, ual, verification_status, transparency_score }

Query path (user searches):
6. User submits search (location, filters)
7. Frontend → Platform API
8. Platform API → SPARQL query to DKG (or cache)
9. DKG returns matching KA summaries
10. Platform API enriches with review aggregates from platform database
11. Frontend renders results

Profile page path:
6. User clicks facility
7. Frontend → Platform API (facility_id)
8. Platform API → DKG resolve(UAL)  [if not cached]
9. DKG returns full JSON-LD assertion
10. Platform API combines with: reviews, dispute history, funding options
11. Frontend renders full profile
```

**Where centralized components are acceptable and why:**

| Component | Centralized? | Rationale |
|-----------|-------------|-----------|
| Review storage (full content) | Yes | PII-adjacent; DKG is public; private credential linkage must stay off DKG |
| Platform database (UAL index, facility IDs) | Yes | Performance; DKG queries are slow for high-frequency reads |
| Agent backend | Yes | Social platform webhooks require a centralized endpoint |
| Crisis response routing | Yes | Latency-critical; cannot wait for DKG round-trip |
| Identity verification linkage (PoP ↔ review) | Yes | Must never be on-chain; stays platform-side, encrypted at rest |
| Facility profile (canonical facts) | No (DKG) | This is the core trust guarantee — facts live on DKG |
| Dispute outcomes | No (DKG) | Must be tamper-evident and public |
| DAO votes | No (chain) | Transparency requirement |
| Anonymized patient outcomes | No (DKG, with consent) | Research value requires persistence and public access |

### Flow 2: User → Review → DKG Outcome

```
1. User (PoP Level 1) requests to submit review
2. Platform prompts PoP Level 2 upgrade if not already done
3. User submits: facility_id + date range + review content
4. Platform backend:
   a. Requests facility attendance confirmation (async, 48-hour window)
   b. Facility admin confirms or denies attendance
5. If confirmed:
   a. Platform issues attendance VC (stored internally, encrypted)
   b. Compute nullifier_hash = hash(pop_credential_id + facility_id + epoch)
   c. Check nullifier not already used
   d. Store review: { content, ratings, platform_attestation, nullifier_hash }
   e. Mark nullifier used
6. Review appears on facility profile (anonymous)
7. If user consents to outcome publication:
   a. Strip to: substance_type, treatment_type, duration, outcome_rating, region
   b. Publish as Knowledge Asset to DKG under TaV paranet
   c. UAL stored; user receives TRAC reward
```

### Flow 3: User Query → AI Agent → DKG → Response

```
1. User sends message on Telegram/FB/etc.
2. Platform webhook receives message
3. Crisis classifier runs (<100ms):
   - If crisis: return 988/SAMHSA response immediately, log, stop
4. Query intent classifier: what is user asking? (facility/funding/research/general)
5. NeuroWeb Inference API call:
   - Query: natural language → structured SPARQL over TaV paranet
   - Returns: relevant KA summaries + UALs
6. LLM call (with DKG context injected):
   - System prompt: "Answer only from provided context. Cite source UALs."
   - User message + DKG results as context
   - Returns: natural language response + citations
7. Format response for platform (character limits, inline links)
8. Send response via platform API
9. Log interaction: { platform, intent, query_summary, cited_uals } → audit store
   (No user-identifiable data logged)
```

### Flow 4: DAO Vote → Funding Disbursement

```
1. Funding application received (user, PoP Level 2 verified)
2. Platform review: eligibility check
3. If approved by platform: proposal submitted to DAO (on-chain/Snapshot)
   - Proposal includes: anonymized case summary, requested amount, token type
   - No PII in proposal — referenced by identity_commitment only
4. DAO vote period (7 days)
5. If vote passes:
   - Timelock initiated (48 hours)
   - Foundation review window (can cancel if mission-violating)
6. After timelock: smart contract executes disbursement
   - Recipient provides fresh receiving address at this step
   - Contract executes transfer
   - Disbursement recorded as KA on DKG (amount, token, date — no recipient identity)
```

---

## Known OriginTrail DKG Limitations and Gotchas

### 1. DKG Nodes Are Not Always Reliable
- Node operators are independent; a node can go offline
- Knowledge assets are replicated across N nodes (typically 3+), but if all storing nodes go offline, the asset is temporarily unavailable
- **Mitigation:** Always cache resolved KA content in the platform database. Treat DKG as the source of truth but not the performance tier.

### 2. SPARQL Query Performance Is Slow for Large Graphs
- SPARQL federation across the DKG network has high latency (seconds, not milliseconds)
- Do not run SPARQL queries on every user search request
- **Mitigation:** Run a periodic sync job (every 5–15 minutes) that pulls updated KA data into a platform-side search index (Elasticsearch / Meilisearch). Frontend searches hit the index; DKG is the authoritative source but not the query path.

### 3. TRAC Token Costs Are Real and Ongoing
- Epoch-based storage fees must be renewed. An asset with an expired epoch will be dropped by nodes.
- For a platform with thousands of facilities and outcomes, this is a non-trivial ongoing cost.
- **Mitigation:** Automate epoch renewal. Monitor TRAC treasury levels. Budget TRAC as an infrastructure line item (like cloud hosting costs).

### 4. Private Assertions Are Not Truly Private From Node Operators
- Node operators store the encrypted private assertion. The encryption is strong, but the existence and metadata of the private assertion are visible.
- For truly sensitive data: do not put it in a DKG private assertion. Store it platform-side, encrypted.
- **Impact on TaV:** All individual health-adjacent data should stay platform-side. Only aggregated, anonymized outcomes go to DKG.

### 5. UAL Mutability: Updates Create New Assertions, Not True Edits
- Updating a Knowledge Asset creates a new assertion version. The UAL persists but the assertion history grows.
- For frequently-updated data (facility capacity, availability), the DKG is not the right real-time store.
- **Mitigation:** Separate "slow-changing facts" (licensing, methods, certifications) → DKG from "fast-changing state" (bed availability, current wait times) → platform database.

### 6. NeuroWeb Parachain Dependency
- NeuroWeb is a Polkadot parachain with its own liveness. If Polkadot relay chain or NeuroWeb has an outage, DKG publishing and on-chain operations are halted.
- This is a low-probability but non-zero risk.
- **Mitigation:** Maintain a publish queue with retry logic. Design the platform so read operations (searching, viewing profiles) remain functional during write outages (new publishing paused but cache is fresh).

### 7. KYC/AML Constraints on Token Disbursements
- Disbursing USDC/USDT/ETH to individuals (even anonymously) may trigger regulatory obligations (US MSB/FinCEN reporting, OFAC compliance)
- The anonymous-identity design adds complexity to compliance
- **Mitigation:** Consult legal counsel before activating on-chain disbursement. v1 funding finder can be informational only (external links to grants). Smart contract disbursement is v2 after legal framework is established.

**Confidence: HIGH** — These limitations are inherent to the DKG's architectural design and are well-documented in OriginTrail developer resources.

---

## Architecture Diagram (Text)

```
┌─────────────────────────────────────────────────────────────────────┐
│                         FRONTEND (Next.js)                          │
│   Search | Facility Profile | Reviews | Funding | DAO | Agent Chat  │
└────────────────────────────┬────────────────────────────────────────┘
                             │ HTTPS
┌────────────────────────────▼────────────────────────────────────────┐
│                      PLATFORM API (Node.js)                         │
│  Auth | Facility Mgmt | Review Engine | Funding | Search | DAO API  │
│                                                                     │
│  Platform Database (Postgres)                                       │
│  Search Index (Meilisearch/Elasticsearch)                           │
│  Session/Queue (Redis)                                              │
└──┬──────────────┬──────────────┬──────────────┬────────────────────┘
   │              │              │              │
   ▼              ▼              ▼              ▼
┌──────┐    ┌──────────┐  ┌──────────┐  ┌──────────────┐
│PoP   │    │OriginTrail│  │NeuroWeb  │  │  Ethereum    │
│Level │    │   DKG    │  │Inference │  │ Smart Contracts│
│1 & 2 │    │(Paranets)│  │   API    │  │(Funding Pool)│
└──────┘    └──────────┘  └──────────┘  └──────────────┘
                │                              │
        ┌───────┘                       ┌──────┘
        │ Facility KAs                  │ USDC/USDT/ETH/WBTC
        │ Outcome KAs                   │
        │ Research KAs                  │ NeuroWeb Treasury
        │ Dispute KAs                   │ DOT via XCM
        │
┌───────▼──────────────────────────────────┐
│           SOCIAL AGENT BACKEND            │
│  Crisis → DKG Query → LLM → Response     │
│  Telegram | FB | IG | TikTok | YT | Snap │
└──────────────────────────────────────────┘
```

---

## Quality Gate Checklist

- [x] DKG data flow clearly described (Flows 1–4 above)
- [x] DAO + DKG integration pattern specified (OpenGov + dispute resolution KAs)
- [x] Social platform agent deployment constraints identified (matrix + platform notes)
- [x] Known OriginTrail DKG limitations/gotchas documented (7 critical gotchas)

---

## Phase Implications

| Phase | Key Architecture Decision |
|-------|--------------------------|
| Phase 1 (Auth) | PoP Level 1+2 integration; nullifier registry setup; Umanitek Guardian hook |
| Phase 2 (Facility Registry) | DKG SDK integration; SAMHSA ETL pipeline; W3C/GSI schema definition; TaV paranet deployment |
| Phase 3 (Search + Reviews) | Search index sync from DKG; anonymous review engine; attendance credential issuance |
| Phase 4 (Funding + DAO) | Snapshot DAO setup; Safe multisig; funding smart contract (informational v1, disbursement v2) |
| Phase 5 (AI Agents) | Agent orchestrator service; NeuroWeb inference integration; platform webhook registration |
| Post-launch | DKG sync automation; TRAC treasury management; epoch renewal automation |

---

## Sources

- Training data (OriginTrail DKG v6/v7 architecture, NeuroWeb documentation) — MEDIUM confidence, cutoff August 2025
- W3C Verifiable Credentials Data Model — HIGH confidence (stable specification)
- Polkadot OpenGov specification — HIGH confidence (stable since 2023)
- Substrate pallet documentation — HIGH confidence
- Snapshot governance protocol — HIGH confidence (stable, widely deployed)
- Social platform API policies — LOW confidence for TikTok/Snapchat (rapidly evolving)
- Ethereum smart contract patterns (nullifier, timelock, multi-asset pool) — HIGH confidence (battle-tested patterns)
- XCM (Cross-Consensus Messaging) — MEDIUM confidence (specification is stable; NeuroWeb-specific integration details need verification)

**Verification required before Phase 2 begins:**
1. https://docs.origintrail.io — DKG v8 SDK, paranet API, epoch costs
2. https://neuroweb.ai/docs — Current inference API endpoints
3. Polkadot PoP Level 2 liveness/credential structure — check current parachain status
4. TikTok, Snapchat developer portals — current bot/agent API availability
5. Legal counsel: FinCEN/OFAC implications of anonymous on-chain disbursements
