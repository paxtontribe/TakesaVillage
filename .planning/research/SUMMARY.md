# Project Research Summary

**Project:** Takes a Village
**Domain:** Healthcare-adjacent, Web3-native substance abuse treatment transparency platform
**Researched:** 2026-03-28
**Synthesized:** 2026-03-28
**Confidence:** MEDIUM (core patterns well-established; several critical integrations require live verification before implementation)

---

## Executive Summary

Takes a Village is a nonprofit facility discovery and accountability platform for substance abuse treatment. It operates at the intersection of three domains rarely combined: healthcare (HIPAA-adjacent, 42 CFR Part 2, Anti-Kickback Statute), Web3 infrastructure (OriginTrail DKG, Polkadot identity, DAO governance, crypto funding pools), and social outreach (AI agents on TikTok, Facebook, Instagram, Telegram, and YouTube). The recommended approach is to build using Next.js 15 + tRPC for the web layer, Polkadot PoP for identity, OriginTrail DKG v8 for the trust and provenance layer, and deploy AI agents via a platform-agnostic Node.js worker architecture. Every other capability in the product depends on PoP identity and populated DKG facilities being live first — these are not just early features, they are the dependency backbone.

The platform's primary competitive advantage is the authenticated-anonymous review system: attendance-verified reviews that are publicly anonymous, structurally non-suppressible, and backed by Polkadot PoP. No existing competitor has this. Combined with a funding finder, AI situational matching grounded in DKG data, and a nonprofit no-pay-to-rank model, Takes a Village directly addresses the predatory design patterns documented in FTC investigations and the 2015–2020 Florida patient brokering crisis. The DKG cold-start problem is the most operationally critical risk: the platform cannot open to the public until a minimum viable dataset exists. The recommended mitigation is to pre-seed from SAMHSA's N-SSATS database (14,000+ facilities) as unverified stubs before public launch, then incentivize facility claim-and-upgrade during early access.

Two legal gates control the product roadmap and are non-negotiable: (1) AKS (Anti-Kickback Statute) attorney review must occur before Phase 2 begins, because token incentives for facility contributions carry referral-inducement exposure; (2) FinCEN/BSA attorney review must occur before Phase 4, because smart contract disbursements to individuals may constitute unregistered money transmission. Additionally, 42 CFR Part 2 — which is stricter than HIPAA and applies to virtually every US treatment facility — must be reviewed by a healthcare privacy attorney before the review verification flow and any DKG outcomes publishing is designed. These are hard blockers, not risk items that can be designed around later.

---

## Cross-Cutting Themes

The following themes were independently flagged by multiple researchers and represent the highest-confidence findings across the entire research corpus.

### 1. PoP Identity Is the Dependency Backbone

Every meaningful action in the platform requires Polkadot Proof of Personhood:
- Reviews require PoP Level 1 (attendance verification, nullifier scheme)
- DKG knowledge contributions require PoP Level 1
- Funding applications require PoP Level 1
- DAO voting requires PoP Level 2

PoP is not one module — it is the trust primitive that unlocks every other feature. Delay or failure in PoP implementation blocks reviews, blocks the DKG flywheel, blocks governance, and blocks funding. The onboarding friction risk is severe: the target demographic (people in crisis, often non-technical, often on mobile) must not experience a crypto wallet onboarding flow. The wallet must be abstracted — custodial or MPC provisioning behind an email/phone signup — with the blockchain invisible until advanced features require it.

### 2. DKG Cold-Start Must Be Solved Before Public Launch

The DKG's value is proportional to its populated facility data. Without pre-seeding, the product launches with no content, no search results, and no trust signal. SAMHSA's N-SSATS database (~14,000 US facilities) provides the baseline dataset. The recommended architecture is:

1. Import N-SSATS as unverified stub Knowledge Assets before launch
2. Open a facility claim-and-upgrade flow during controlled early access
3. Do not open public access until 50+ verified facilities are live across 5+ states and 10+ treatment types

This must be treated as infrastructure work in Phase 1/2, not as a post-launch growth strategy.

### 3. Legal Reviews Are Hard Blockers, Not Risk Items

Three legal reviews are required before specific phases proceed:

| Legal Review | Required Before | Domain |
|-------------|-----------------|--------|
| AKS attorney — token incentive structure | Phase 2 design begins | Federal Anti-Kickback Statute |
| 42 CFR Part 2 attorney — review verification and DKG outcomes design | Phase 2/3 design begins | Healthcare privacy (stricter than HIPAA) |
| FinCEN/BSA attorney — crypto disbursement design | Phase 4 design begins | Money transmitter licensing |

None of these can be deferred until after engineering has started on the relevant features. The AKS exposure in particular applies to facility token rewards (DKG-01) — the fundamental DKG flywheel incentive — and must be structured correctly from the first line of contract code.

### 4. Meta App Review Must Start in Phase 1

Facebook and Instagram Messenger bot approvals for health-related content take multiple weeks. Meta's review process flags substance abuse content for additional scrutiny. If app review isn't initiated during Phase 1 while the AI agent architecture is being built, Phase 5 will be blocked by approval timelines regardless of engineering readiness.

### 5. Crisis Escalation Is a Safety Gate, Not a Feature

AI agents (AI-04) must detect and escalate crisis-level interactions before any DKG query happens. Crisis detection must be:
- Synchronous and pre-query (the DKG lookup never runs when crisis is detected)
- ML-based, not keyword-based (indirect crisis language is common)
- Multi-platform consistent (same classifier across TikTok, Telegram, Instagram, etc.)
- Validated with real-world testing before any agent is publicly deployed

No social platform agent should go live without validated crisis escalation. This is a launch gate for Phase 5, not a v2 improvement.

### 6. 42 CFR Part 2 Is Stricter Than HIPAA and Applies Broadly

42 CFR Part 2 governs substance abuse treatment records at federally-assisted programs — which includes virtually all US treatment facilities that accept Medicare or Medicaid. Unlike HIPAA, Part 2 prohibits even treatment-purpose disclosures without specific written patient consent. This creates a direct conflict with:
- REV-01: Facility confirming patient attendance may constitute a Part 2 disclosure
- REV-05: "Anonymized" outcomes on DKG must meet a higher de-identification bar than HIPAA Safe Harbor
- Blockchain immutability: DKG Knowledge Assets cannot be deleted if a patient exercises their Part 2 amendment rights

The data model must be designed so the DKG holds zero patient-linkable data, ever. This is a constraint that must be in the architecture specification before any DKG schema work begins.

### 7. NeuroWeb SDK Confidence Is LOW — Spike Required in Phase 1

The NeuroWeb AI Agent SDK (used to ground AI agent answers in DKG knowledge assets) was documented from OriginTrail's published roadmap and architecture descriptions as of mid-2025. The specific SDK API surface, versioning, parachain deployment process, and inference query interface require live verification at https://docs.neuroweb.ai before any Phase 5 architecture is finalized. If the NeuroWeb inference API is not production-ready, the fallback is direct SPARQL queries via dkg.js for agent context retrieval (higher latency, less native AI grounding). A technical spike in Phase 1 must determine which path is viable.

---

## Key Findings

### Recommended Stack

The recommended stack is a TypeScript monorepo centered on Next.js 15 (web app + API routes via tRPC), Polkadot.js + PoP pallet (identity), dkg.js v8 (DKG integration), and Node.js worker services (social platform AI agents). The EVM layer (Solidity on Base L2) handles USDC/USDT/ETH funding pools; Polkadot Asset Hub handles DOT. Prisma + PostgreSQL on Supabase provides the application database — a cache layer required because DKG SPARQL queries are too slow for real-time search. Vercel hosts the Next.js app; Fly.io hosts the DKG gateway node; Railway hosts agent workers.

**Core technologies:**
- **Next.js 15 + tRPC**: Web app + type-safe API — SSR for facility search SEO; edge performance for crisis users on slow connections
- **Polkadot.js + PoP pallet**: Identity backbone — anonymous-but-authenticated pattern natively supported
- **dkg.js v8 + OriginTrail DKG**: Trust and provenance layer — facility profiles, outcomes, research as Knowledge Assets
- **NeuroWeb inference API** [LOW CONFIDENCE — spike required]: AI-to-DKG grounding — prevents agent hallucination on treatment facts
- **Umanitek Guardian** [LOW CONFIDENCE — API shape unverified]: Fraud detection — fake reviews, Sybil attacks, fake facilities
- **Solidity on Base L2**: Funding pool smart contracts — low gas for small treatment fund disbursements
- **LangChain.js**: AI agent orchestration — tool-use, memory, DKG retrieval integration
- **BullMQ + Redis**: Message queue for social platform agent workers — rate limit management
- **Auth.js v5 + custom PoP provider**: Session management after PoP verification
- **Prisma + PostgreSQL (Supabase)**: Application database — DKG cache, review staging, session state

Several technologies require live verification before implementation can begin: dkg.js package name on npm, NeuroWeb SDK API surface, Polkadot PoP pallet current status, Umanitek Guardian API, TikTok and Snapchat bot API capabilities, Circle CCTP v2 on Base, and SciGraph availability (may have been deprecated; Semantic Scholar API is the recommended alternative if so).

### Expected Features

**Must have (table stakes) — users will abandon without these:**
- Location-based facility search with SAMHSA-equivalent filters (treatment type, insurance, substance type, payment type)
- Facility profiles with contact information and basic data
- Mobile-responsive design (most crisis searches happen on phones)
- Map view for spatial facility browsing
- Crisis escalation (988 / SAMHSA helpline) visible at all times
- Accurate, non-stale data (closed facilities in results is actively harmful)

**Should have (competitive differentiators — the reason Takes a Village wins):**
- Authenticated-anonymous reviews (no competitor has this; fills the #1 trust gap in the market)
- Transparency scoring (verification completeness, KPI availability, review history visible at a glance)
- Funding finder with eligibility matching (federal + state grants, facility scholarships, sliding scale — no competitor surfaces this comprehensively)
- AI situational matching (user describes situation, gets matched to appropriate care level and facilities)
- DKG-grounded AI agents on social platforms (answers traceable to verified sources, no hallucination)
- Outcome data published to DKG (longitudinal follow-up reviews at 6 and 12 months)

**Defer to v2:**
- Real-time bed availability (requires deep facility-side integration; operationally hard)
- Longitudinal outcome follow-up (requires user base to be worth building)
- Full DAO dispute resolution on-chain (requires review volume)
- Snapchat agent (API maturity is low as of mid-2025)
- International facility registry and Spanish language support
- Native iOS/Android apps

**Anti-features (must never build):**
- Pay-to-rank or sponsored placements
- Helpline routing to paid partners
- Suppressible reviews (facilities can respond, never remove)
- "Insurance verification" tools that route to partner facilities
- Dark patterns in funding/intake flows that capture personal data before trust is established

### Architecture Approach

The platform is a multi-layer system with four major subsystems that must interoperate: the DKG layer (OriginTrail v8 paranet on NeuroWeb), the identity layer (Polkadot PoP on People Chain), the application layer (Next.js + PostgreSQL cache), and the AI agent layer (social platform workers + NeuroWeb inference). The key architectural principle is that the DKG is the source of truth for all public-facing data, while PostgreSQL handles the application-layer state (search indexing, review staging, session management) that is too latency-sensitive for live DKG queries. All DKG writes happen server-side — private keys are never exposed to the browser.

**Major components:**

1. **Takes a Village Paranet** — The platform operates its own DKG paranet, scoping all facility profiles, research papers, and outcomes into a bounded, queryable sub-graph with foundation-defined contribution standards
2. **PoP Identity + Auth.js session** — PoP credential verified on-chain; backend issues short-lived JWT tied to anonymized credential hash; public display shows only `verified=true`, never wallet address or name
3. **Facility Knowledge Asset pipeline** — SAMHSA N-SSATS ETL → stub KAs → facility claim-and-upgrade flow → platform verification against state licensing APIs → SCAN provenance chain
4. **Anonymous review commitment scheme** — Nullifier = hash(PoP_credential_id + facility_id + epoch); prevents duplicate reviews without revealing identity; attendance credential held platform-side only, never on DKG
5. **Agent orchestration service** — Centralized Node.js worker with BullMQ queuing; crisis classifier runs first (<100ms, synchronous); NeuroWeb inference provides DKG context; LLM generates grounded response; all answers cite source UALs
6. **Funding pool contracts** — USDC/USDT/ETH/WBTC on Base L2 via Solidity; DOT via NeuroWeb XCM; DAO multisig approval required for disbursement; OFAC screening at disbursement
7. **DAO governance (v1)** — Snapshot + NeuroWeb Safe multisig for Phase 1; migrate to Polkadot OpenGov on NeuroWeb for v2; one-person-one-vote gated by PoP Level 2; foundation Canceller role with on-chain visible timelock

### Critical Pitfalls

1. **42 CFR Part 2 + blockchain immutability conflict** — Requires healthcare privacy attorney review before any review verification flow or DKG outcomes publishing is designed; data model must store zero patient-linkable data on DKG; "anonymized" means more than removing names
2. **AKS exposure in token incentive design** — DKG-01 facility token rewards must be structured for data quality, not patient volume; AKS attorney review required before Phase 2 begins; zero per-referral compensation model must be structurally enforced in contract logic
3. **PoP onboarding friction** — Crypto wallet UX will kill adoption with the target demographic; wallet must be abstracted (custodial/MPC provisioning); PoP Level 2 gated behind advanced features only; never require users to understand what a "wallet" is
4. **DKG cold start** — Platform has no value without populated data; must pre-seed from SAMHSA N-SSATS before public launch; do not open to public until 50+ verified facilities across 5+ states are live
5. **FUND-04 money transmitter exposure** — Smart contract disbursements to individuals may require FinCEN MSB registration and money transmitter licenses in 49 states; do not design or build before FinCEN attorney review; "pay the facility, not the individual" model may be the legally safer path
6. **Crisis escalation failure** — Missed crisis signals on social platform agents carry tort liability; crisis NLP must be ML-based (not keyword-based), validated before any agent goes public, and must run synchronously before any DKG query

---

## Implications for Roadmap

Based on dependency analysis across all four research files, the following phase structure is recommended. The traceability table in REQUIREMENTS.md maps requirements to phases; this section adds rationale and hard constraints.

---

### Phase 1: Foundation and Identity

**Rationale:** PoP identity gates everything else in the product. Nothing ships that is differentiated from SAMHSA without it. This phase also covers all infrastructure setup, the NeuroWeb SDK spike, Meta app review initiation, and crisis classifier foundation so that no later phase is blocked on these.

**Delivers:**
- Polkadot PoP integration (Level 1 + Level 2) with abstracted wallet onboarding (custodial/MPC)
- Auth.js v5 session management post-PoP
- Umanitek Guardian integration for fraud detection
- Next.js 15 + tRPC scaffolding with PostgreSQL/Prisma
- DKG gateway node running on Fly.io
- SAMHSA N-SSATS ETL pipeline (produces stub Knowledge Assets, not yet public)
- NeuroWeb SDK spike — confirm API surface, determine fallback path
- Meta developer app review submitted (Facebook/Instagram agents)
- Crisis classifier prototype (to be validated in Phase 5)

**Requirements:** AUTH-01 through AUTH-05
**Hard gates:**
- PoP wallet onboarding must be tested with non-technical users before Phase 2
- NeuroWeb SDK spike must produce a go/no-go decision before Phase 5 architecture is finalized
- Meta app review submission cannot slip — delay here delays Phase 5

**Pitfalls to avoid:** PoP onboarding friction (Pitfall 5); custodial wallet is mandatory, not optional

**Research flag:** NeuroWeb SDK spike is required — LOW confidence on current API surface

---

### Phase 2: Facility Registry and DKG Flywheel

**Rationale:** Facility data is the other half of the value foundation. Reviews, search, and AI matching all depend on verified facility Knowledge Assets. The DKG cold-start must be resolved here, before users arrive. Legal reviews for AKS and 42 CFR Part 2 must be completed before any engineering on this phase begins.

**Delivers:**
- Facility profile creation and management (FAC-01, FAC-02)
- Platform verification pipeline against state/federal licensing databases (FAC-03)
- W3C/GSI structured Knowledge Asset publication to DKG within TaV paranet (FAC-04, FAC-05)
- SCAN provenance chain for facility, staff, and funding (FAC-05)
- Community flagging and 72-hour review workflow (FAC-06, FAC-07)
- Transparency score calculation and display (FAC-08)
- DKG contribution quality scoring and incentive mechanism (DKG-01, DKG-02)
- Research institution Knowledge Asset onboarding (DKG-03)
- Seeding dashboard with coverage metrics (DKG-04)
- Partner onboarding flow for early-adopter facilities (DKG-05)
- SAMHSA stub profiles from Phase 1 ETL pipeline made live (unverified, labeled as stubs)

**Requirements:** FAC-01 through FAC-08, DKG-01 through DKG-05

**Hard blockers before Phase 2 design begins:**
- AKS attorney review of DKG-01 token incentive structure
- 42 CFR Part 2 + HIPAA attorney review of REV-01 verification flow design (attendance confirmation by facility)
- 42 CFR Part 2 attorney review of REV-05 / DKG outcomes publishing data model

**Launch gate:** Do not open public access until 50+ verified facilities across 5+ states and 10+ treatment types

**Pitfalls to avoid:** DKG cold start (Pitfall 7); AKS token incentive exposure (Pitfall 2); 42 CFR Part 2 / blockchain immutability conflict (Pitfall 14); TRAC token cost volatility (Pitfall 11)

**Research flag:** Needs research on current Polkadot PoP pallet state + KILT Protocol (optional facility VC layer)

---

### Phase 3: Search, Discovery, and Reviews

**Rationale:** With facility data in the DKG and identity working, the core user-facing loop can be built. Search is table stakes; reviews are the primary differentiator. These are sequenced together because reviews require the same attendance verification infrastructure as facility profile verification, and both depend on Phase 2 outputs.

**Delivers:**
- Location + filter search at SAMHSA parity (SRCH-01, SRCH-02)
- AI situational matching tool — user describes situation, gets matched to care level + facilities (SRCH-03)
- Search results with transparency scores and funding options (SRCH-04)
- SciGraph / Semantic Scholar research surfacing alongside results (SRCH-05)
- Authenticated-anonymous review system with nullifier scheme (REV-01, REV-02, REV-03)
- Long-term outcome follow-up prompts at 6 and 12 months (REV-04)
- Consent-gated anonymized outcome publication to DKG (REV-05)
- Facility response capability (REV-06)
- Community review flagging and 48-hour moderation (REV-07)

**Requirements:** SRCH-01 through SRCH-05, REV-01 through REV-07

**Hard blockers before Phase 3 design begins:**
- State referral service licensing review for SRCH-03 AI matching (California, Florida, Texas, New York specifically)
- Final 42 CFR Part 2 + HIPAA design approval for REV-01 verification flow
- BAA executed with any facility that transmits attendance confirmation to the platform

**Pitfalls to avoid:** Fake review attacks (Pitfall 9); HIPAA BAA obligation from verification flow (Pitfall 1); FTC endorsement disclosure for token-rewarded reviews (Pitfall 3); state referral service licensing (Pitfall 4)

**Research flag:** Needs research on current Umanitek Guardian API shape and fraud detection capabilities specific to healthcare review patterns

---

### Phase 4: Funding and DAO Governance

**Rationale:** Funding finder and DAO governance are grouped here because both require legal structure that must be resolved before engineering. The FinCEN review for FUND-04 is the critical path item. DAO governance in v1 uses Snapshot (lighter complexity) with migration to on-chain OpenGov in v2.

**Delivers:**
- Searchable grants and scholarships directory (FUND-01)
- Eligibility matching tool for funding (FUND-02)
- Facility-specific scholarships on profiles (FUND-03)
- Platform-managed funding pools in USDC/USDT/ETH/DOT via smart contracts (FUND-04) — structured as facility grants, not individual disbursements, pending FinCEN review
- On-platform funding application pathway with anonymous identity-verified applications (FUND-05)
- DAO governance via Snapshot + NeuroWeb Safe multisig (DAO-01 through DAO-05)
- One-person-one-vote gated by PoP Level 2
- Foundation Canceller role with transparent on-chain timelock
- Dispute resolution tiered workflow (platform review → community panel → full DAO vote)

**Requirements:** FUND-01 through FUND-05, DAO-01 through DAO-05

**Hard blockers before Phase 4 design begins:**
- FinCEN/BSA attorney review of FUND-04 smart contract disbursement structure
- OFAC screening mechanism must be designed before any disbursement contract is written
- AKS review must confirm that funding-to-facility grants do not constitute indirect patient brokering

**Pitfalls to avoid:** FinCEN money transmitter exposure (Pitfall 10); DAO voter apathy and motivated minority attacks on disputes (Pitfall 6); token hyperinflation (Pitfall 16)

**Research flag:** Needs research on current Base L2 contract deployment patterns, Circle CCTP v2 status, and Polkadot OpenGov configuration on NeuroWeb

---

### Phase 5: AI Agents (Social Platform Outreach)

**Rationale:** AI agents require the DKG to be well-populated (Phase 2), the NeuroWeb SDK spike to be resolved (Phase 1), Meta app review to be approved (initiated Phase 1), and crisis escalation to be validated. Telegram deploys first (most permissive API, no app review). Facebook/Instagram deploy second (pending Meta approval). TikTok deploys third (most restricted API, highest-impact audience). YouTube deploys fourth (comment-response only). Snapchat deferred to v2.

**Delivers:**
- NeuroWeb inference layer connecting AI agents to live DKG paranet (AI-01)
- Telegram agent (deploy first: no app review required)
- Facebook + Instagram Messenger agents (deploy second: pending Meta app review from Phase 1)
- TikTok agent (deploy third: requires TikTok for Business API access)
- YouTube comment-response agent (deploy fourth: limited to comment monitoring)
- Crisis escalation integration — 988 + Crisis Text Line, validated crisis NLP classifier (AI-04)
- Auditable agent responses with source UAL citation (AI-05)
- Natural language DKG query capability for facility/funding/research (AI-03)

**Requirements:** AI-01 through AI-05

**Hard gates for Phase 5:**
- Crisis escalation classifier must be validated with real-world testing before any agent is publicly deployed
- NeuroWeb SDK go/no-go from Phase 1 spike must drive architecture decisions
- Meta app review must be approved before Facebook/Instagram agent launches

**Pitfalls to avoid:** Crisis escalation failure (Pitfall 8); social platform API dependency (Pitfall 12); TikTok ban risk (Pitfall 12 — build but do not over-invest); HIPAA business associate status for agent interaction logs (Pitfall 1)

**Research flag:** Needs research on current TikTok Chatbot API access requirements, Snapchat Bot API capabilities, and YouTube comment-bot ToS status

---

### Phase Ordering Rationale

- **Identity before everything:** PoP is the dependency backbone. No review system, no DAO, no funding application, no DKG contribution without it.
- **Data before users:** The DKG cold-start problem means the platform cannot serve users until data exists. Phase 1 ETL pipeline and Phase 2 facility registry must produce minimum viable density before the Phase 3 public-facing product launches.
- **Legal gates are not parallelizable:** AKS review (before Phase 2), 42 CFR Part 2 review (before Phase 2/3), and FinCEN review (before Phase 4) must complete before engineering begins on each phase. These cannot be run concurrently with development.
- **AI agents last:** Agents require the DKG to be populated, the NeuroWeb SDK to be verified, and crisis escalation to be validated. Deploying agents to a thin DKG produces hallucination risk and undermines the platform's trust model.
- **Meta app review is Phase 1 work, not Phase 5 work:** The lead time for health-content approval from Meta means this must start immediately, even though agents ship in Phase 5.

---

### Research Flags

**Phases requiring deeper research before planning:**

- **Phase 1 (NeuroWeb SDK spike):** LOW confidence on current NeuroWeb AI Agent SDK API. Must spike before Phase 5 architecture decisions are made. Determine: SDK package name, inference query interface, parachain deployment requirements, fallback to direct SPARQL if inference layer is not production-ready.
- **Phase 2 (Umanitek Guardian):** LOW confidence on API shape, authentication method, and pricing. Must verify at umanitek.ai before integration planning. If Guardian is unavailable or cost-prohibitive, an alternative fraud detection approach must be identified.
- **Phase 2 (Polkadot PoP pallet):** MEDIUM confidence. PoP was in active development through 2025 on People Chain. Verify current pallet name, extrinsic signatures, Level 1/Level 2 credential schema, and geographic coverage before wallet abstraction design.
- **Phase 4 (Base L2 + Circle CCTP v2):** MEDIUM confidence. Verify CCTP v2 deployment status on Base, contract gas estimates, and USDC liquidity depth before funding pool architecture is finalized.
- **Phase 5 (TikTok Chatbot API):** LOW confidence. TikTok's chatbot/DM API was in limited beta as of mid-2025. Verify current access requirements, policy status, and US regulatory situation before investing in TikTok agent development.

**Phases with standard patterns (research-phase optional):**

- **Phase 3 (Search + reviews):** The search and review patterns are well-documented. The core challenge is the legal review (42 CFR Part 2, BAA), not the engineering. Next.js + PostgreSQL full-text search with DKG SPARQL overlay is a known pattern.
- **Phase 4 (Funding directory):** The funding landscape is well-mapped. This is primarily a content/data problem, not an architecture problem. The FUND-04 smart contract disbursement is the only technically novel element, and it is gated on the FinCEN review.

---

## Hard Blockers Summary

The following items must be resolved before specific phases can proceed. These are not risks to mitigate — they are gates.

| Blocker | Must Resolve Before | Owner |
|---------|---------------------|-------|
| AKS attorney review of DKG-01 token incentive structure | Phase 2 design begins | Legal |
| 42 CFR Part 2 + HIPAA review of REV-01 verification flow design | Phase 2 design begins | Legal |
| 42 CFR Part 2 review of REV-05 / DKG outcomes data model | Phase 2 design begins | Legal |
| NeuroWeb SDK spike — API surface verification, go/no-go | Phase 5 architecture decisions | Engineering |
| Meta (Facebook/Instagram) app review submission | Phase 1 end | Product/Ops |
| FinCEN/BSA attorney review of FUND-04 disbursement structure | Phase 4 design begins | Legal |
| OFAC screening mechanism design | Phase 4 design begins | Legal + Engineering |
| Crisis classifier validation (real-world testing, not unit tests) | Phase 5 public launch | Engineering + Safety |
| State referral licensing review (CA, FL, TX, NY) for SRCH-03 | Phase 3 public launch | Legal |
| SAMHSA N-SSATS ETL pipeline produces 50+ verified facilities | Phase 3 public launch | Data/Ops |

---

## Open Questions for Roadmap Execution

The following questions are unresolved and need answers before or during roadmap planning. These are flagged here so the roadmapper and stakeholders can assign owners.

1. **PoP verification UX approach:** Will the platform use custodial wallet provisioning, MPC wallet, or social recovery from day one? This determines the Phase 1 onboarding architecture. The answer affects engineering scope significantly.

2. **FUND-04 structure — grants vs. individual disbursements:** The "pay the facility, not the individual" model is legally cleaner but changes the user experience significantly (user cannot receive crypto directly). Which model will the FinCEN attorney recommend? This determines Phase 4 smart contract design.

3. **Token design:** What is the DKG contribution token? Is it TRAC (existing OriginTrail token), a new platform token, or a non-transferable reputation score? Token design affects AKS exposure, FTC disclosure requirements, and DKG-01 incentive mechanics. This needs a decision before Phase 2 begins.

4. **SciGraph status:** SciGraph from Springer Nature may be deprecated. Is the platform referring to a different SciGraph service, or is Semantic Scholar API (Allen AI) the intended data source? This affects SRCH-05 and DKG research asset architecture.

5. **PoP Level 2 coverage in target launch states:** What is the current geographic coverage of Polkadot PoP Level 2 verification in the US? If rural coverage is insufficient, what is the fallback verification method for DAO voting eligibility?

6. **Paranet incentive rate calibration:** TRAC token economics for the TaV paranet need to be modeled before Phase 2 launches. What TRAC price scenarios does the foundation's runway cover? At what TRAC price does the DKG publishing program become cost-prohibitive?

7. **Facility onboarding team:** The cold-start strategy requires staff to build initial profiles on behalf of early facilities. Is this an internal team, a contracted editorial team, or a partner organization? This is an operational dependency for Phase 2 launch quality.

8. **DAO v1 governance scope:** Should DAO-05 (facility dispute resolution) go live in Phase 4, or is the review volume too low at launch to make disputes meaningful? Should DAO governance in v1 be limited to funding allocation votes while dispute resolution waits for v2?

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM | Core Next.js/Polkadot/DKG patterns are well-established; NeuroWeb SDK, Umanitek Guardian, and Polkadot PoP pallet specifics require live verification before implementation |
| Features | HIGH | Competitor analysis, SAMHSA gap analysis, and anti-feature catalog are strongly supported by public record (FTC investigations, EKRA, industry reporting) |
| Architecture | MEDIUM | DKG v6/v8 patterns, review commitment scheme, DAO tiering, and agent orchestration are sound; NeuroWeb inference API and OpenGov parachain configuration need live verification |
| Pitfalls | HIGH | Legal pitfalls (AKS, 42 CFR Part 2, FinCEN) are well-established federal law with documented industry precedents; DAO failure modes and cold-start problem are extensively documented |

**Overall confidence:** MEDIUM

The research corpus is internally consistent and draws on high-quality domain knowledge (SAMHSA policy, federal healthcare law, OriginTrail architecture documentation, DAO ecosystem history). The MEDIUM rating reflects three LOW-confidence integration dependencies that are blockers for specific phases: NeuroWeb SDK API surface, Umanitek Guardian API, and TikTok Chatbot API. The legal analysis should be treated as a map to find the right attorney questions, not as legal advice.

### Gaps to Address

- **NeuroWeb SDK:** Verify at https://docs.neuroweb.ai before Phase 5 architecture. Fallback = direct SPARQL via dkg.js for agent DKG queries.
- **Umanitek Guardian API:** Verify at https://umanitek.ai before Phase 2 integration planning. Fallback = behavioral heuristics + PoP nullifier rate limits.
- **SciGraph deprecation:** Verify Springer Nature SciGraph status before SRCH-05 is designed. Fallback = Semantic Scholar API (Allen AI) — free, graph-structured, well-documented.
- **Polkadot PoP pallet current state:** Verify PoP Level 1/Level 2 credential schema, People Chain pallet name, and US geographic coverage before wallet abstraction design.
- **TikTok Chatbot API access:** Verify current developer access requirements before committing Phase 5 engineering resources to TikTok agent.
- **TRAC per-asset costs:** Model current TRAC price scenarios against expected facility count and KA update frequency before Phase 2 DKG budget is fixed.

---

## Sources

All research findings are from training data (knowledge cutoff August 2025). WebSearch and WebFetch were unavailable during the research sessions. Version numbers marked [VERIFY] in individual research files must be confirmed before implementation.

### Primary (HIGH confidence)
- SAMHSA documentation and N-SSATS data — facility landscape, funding categories, federal program structure
- Federal legal record — AKS (42 U.S.C. § 1320a-7b(b)), 42 CFR Part 2, HIPAA, EKRA, FinCEN 31 CFR 1022
- FTC enforcement record — endorsement guides, healthcare review integrity, patient brokering investigations
- OriginTrail DKG architecture documentation — Knowledge Asset structure, TRAC economics, SPARQL query patterns, Paranet design
- DAO ecosystem literature (2020–2025) — failure modes, governance patterns, voter apathy documentation

### Secondary (MEDIUM confidence)
- Polkadot developer documentation — PoP pallet, People Chain, OpenGov governance framework
- OriginTrail DKG v8 SDK — API patterns inferred from published v6/v7 documentation and 2024 roadmap
- Competitor feature analysis — SAMHSA locator, Psychology Today, Rehabs.com/AddictionCenter.com (live verification recommended before roadmap finalization)
- Web3 consumer adoption literature — wallet abstraction, MPC provisioning, social recovery patterns
- Social platform bot API documentation — Telegram Bot API (HIGH), Meta Messenger API (MEDIUM), TikTok Chatbot API (LOW)

### Tertiary (LOW confidence — verify before implementation)
- NeuroWeb AI Agent SDK — https://docs.neuroweb.ai
- Umanitek Guardian API — https://umanitek.ai
- TikTok Chatbot/DM API — https://developers.tiktok.com
- Snapchat Kit bot capabilities — https://kit.snapchat.com
- SciGraph current availability — https://scigraph.springernature.com (possible deprecation)
- Circle CCTP v2 on Base — https://developers.circle.com/stablecoins/cctp

### Key authoritative sources to consult before implementation
- OriginTrail DKG docs: https://docs.origintrail.io
- NeuroWeb docs: https://docs.neuroweb.ai
- Polkadot developer docs: https://docs.polkadot.network / https://wiki.polkadot.network/docs/learn-identity
- Umanitek Guardian: https://umanitek.ai
- Circle CCTP: https://developers.circle.com/stablecoins/cctp
- Auth.js (NextAuth v5): https://authjs.dev
- Base L2: https://docs.base.org
- Wagmi + viem: https://wagmi.sh
- LangChain.js: https://js.langchain.com/docs

---

*Research completed: 2026-03-28*
*Synthesized: 2026-03-28*
*Ready for roadmap: yes*
