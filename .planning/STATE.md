# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-03-29)

**Core value:** Radical transparency at every touchpoint — facilities cannot hide behind marketing, funding is findable, reviews are real, and all data lives on a decentralized knowledge graph no single party controls.
**Current focus:** Phase 1 — Foundation and Identity

## Current Position

Phase: 1 of 5 (Foundation and Identity)
Plan: 0 of 4 in current phase
Status: Ready to plan
Last activity: 2026-03-28 — Roadmap created from PROJECT.md, REQUIREMENTS.md, and research corpus

Progress: [░░░░░░░░░░] 0%

## Performance Metrics

**Velocity:**
- Total plans completed: 0
- Average duration: —
- Total execution time: 0 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1. Foundation and Identity | 0/4 | - | - |
| 2. Facility Registry and DKG Flywheel | 0/4 | - | - |
| 3. Search, Discovery, and Reviews | 0/3 | - | - |
| 4. Funding Finder and DAO Governance | 0/3 | - | - |
| 5. AI Agents and Social Outreach | 0/3 | - | - |

**Recent Trend:**
- Last 5 plans: none yet
- Trend: —

*Updated after each plan completion*

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- Roadmap: 5 coarse phases derived from dependency chain — PoP identity → DKG data → public product → funding/governance → agents
- Legal: Three hard-blocker legal reviews identified — AKS (before Phase 2), 42 CFR Part 2 (before Phase 2/3), FinCEN (before Phase 4). Must engage attorneys during Phase 1.
- FUND-04: Direct crypto disbursements to individuals deferred pending FinCEN attorney review. Phase 4 builds grants directory and application pathway; disbursement smart contracts wait on legal guidance.
- NeuroWeb SDK: LOW confidence on current API surface. Phase 1 spike is required — result determines Phase 5 agent architecture (NeuroWeb inference vs. SPARQL fallback via dkg.js).
- Meta app review: Must be submitted during Phase 1 — health-content approval lead time at Meta is multiple weeks. Delay here directly delays Phase 5.
- Cold-start gate: Public access does not open until 50+ verified facilities across 5+ states and 10+ treatment types are live in the DKG.
- Token design: Undecided between TRAC, new platform token, and non-transferable reputation score. Must resolve before Phase 2 DKG-01 smart contract is written. AKS attorney review shapes this decision.

### Pending Todos

- Engage AKS attorney before Phase 2 (token incentive structure for DKG-01)
- Engage 42 CFR Part 2 + HIPAA attorney before Phase 2/3 (REV-01 verification flow + REV-05 outcomes data model)
- Engage FinCEN/BSA attorney before Phase 4 (FUND-04 disbursement structure)
- Verify NeuroWeb SDK at https://docs.neuroweb.ai (Phase 1 spike)
- Verify Polkadot PoP pallet name, credential schema, People Chain status at https://docs.polkadot.network
- Verify Umanitek Guardian API availability and shape at https://umanitek.ai
- Verify SciGraph deprecation status — confirm whether Semantic Scholar API (Allen AI) is the correct SRCH-05 data source
- Verify TikTok Chatbot API access requirements before committing Phase 5 engineering to TikTok agent
- Verify dkg.js package name and v8 API surface at https://docs.origintrail.io
- Model TRAC per-asset cost scenarios against expected facility count before Phase 2 budget is fixed
- Determine facility onboarding team (internal, contracted, or partner org) before Phase 2 begins
- Submit Meta developer app review for Facebook/Instagram Messenger bots (Phase 1 deliverable)
- Decide token design (TRAC vs. new token vs. non-transferable score) — must complete before Phase 2

### Blockers/Concerns

- **AKS exposure (DKG-01):** Token rewards for facility contributions carry referral-inducement risk under 42 U.S.C. § 1320a-7b(b). Must be attorney-reviewed before Phase 2 begins. No engineering on incentive smart contracts until this is resolved.
- **42 CFR Part 2 conflict (REV-01, REV-05):** Facility confirming patient attendance may constitute a prohibited 42 CFR Part 2 disclosure. The verification flow must use a de-identified token scheme approved by a healthcare privacy attorney. The DKG must hold zero patient-linkable data, ever.
- **FinCEN exposure (FUND-04):** Smart contract disbursements to individuals may require MSB registration and money transmitter licenses in 49 states. FUND-04 is deferred until FinCEN attorney review completes.
- **PoP onboarding friction:** Crypto wallet UX will kill adoption with the target demographic (people in crisis, non-technical, often on mobile). Custodial or MPC wallet abstraction is mandatory — not optional.
- **DKG cold start:** Platform has zero value without populated facility data. N-SSATS ETL pipeline and Phase 2 cold-start seeding must produce minimum viable density before Phase 3 public launch proceeds.
- **NeuroWeb SDK confidence (LOW):** Phase 5 agent architecture depends on a go/no-go decision from the Phase 1 NeuroWeb SDK spike. If the inference API is not production-ready, the fallback is direct SPARQL via dkg.js (higher latency, less native AI grounding).
- **Crisis escalation gate (Phase 5):** No agent goes public without the crisis NLP classifier being validated with real-world testing. Missed crisis signals on social platforms carry tort liability.

## Session Continuity

Last session: 2026-03-28
Stopped at: ROADMAP.md and STATE.md created. Roadmap covers all 42 v1 requirements across 5 phases. No plans created yet — ready for /gsd:plan-phase 1.
Resume file: None
