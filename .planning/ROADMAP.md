# Roadmap: Takes a Village

## Overview

Takes a Village is built on a strict dependency chain that must not be violated: funding before building, identity before content, content before users, users before governance and funding, and every agent must wait for data worth querying and a validated crisis escalation path. Phase 0 is the fundraising package — a live website, social media presence, and pitch materials that demonstrate the vision and capture early interest. The creator is non-technical; Phase 0 must be achievable with minimal cost and no specialized engineering. Phases 1-5 execute the technical build post-funding. Phase 1 is infrastructure and identity — the trust primitive everything else depends on. Phase 2 is the facility registry and DKG flywheel — the data layer that makes the platform worth visiting. Phase 3 is the public-facing product: search, discovery, and the authenticated-anonymous review system that is the platform's primary competitive differentiator. Phase 4 is funding and DAO governance — structurally gated on FinCEN attorney review before any smart contract disbursement logic is written. Phase 5 is social AI agents — last because they require the DKG to be well-populated, the NeuroWeb SDK spike to have resolved, Meta's app review to have cleared, and crisis escalation to be validated with real-world testing before any agent goes public. Three legal gates are hard blockers, not risk items: AKS attorney review before Phase 2, 42 CFR Part 2 attorney review before Phase 2/3, and FinCEN/BSA attorney review before Phase 4.

---

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 0: Fundraising Package** — Live website on Vercel, waitlist signup, social media presence (Instagram, TikTok, X, LinkedIn), pitch deck, funder/partner materials — pre-funding phase, minimal cost, non-technical founder can maintain
- [ ] **Phase 1: Foundation and Identity** — Project infrastructure, Polkadot PoP auth with abstracted wallet onboarding, OriginTrail node setup, SAMHSA N-SSATS ETL pipeline, NeuroWeb SDK spike, Meta app review submission — GATED: requires funding from Phase 0
- [ ] **Phase 2: Facility Registry and DKG Flywheel** — Facility Knowledge Assets on DKG, SCAN supply chain provenance, W3C/GSI structured profiles, transparency scoring, cold-start seeding — GATED: AKS attorney review + 42 CFR Part 2 review must complete before this phase begins
- [ ] **Phase 3: Search, Discovery, and Reviews** — Facility search and filter UI, AI situational matching, authenticated-anonymous review system with nullifier scheme, SciGraph/Semantic Scholar integration, transparency scores in UI
- [ ] **Phase 4: Funding Finder and DAO Governance** — Grants directory, eligibility matching, facility scholarships, Snapshot DAO + Safe multisig, on-chain voting — GATED: FinCEN/BSA attorney review must complete before this phase begins; FUND-04 direct crypto disbursements to individuals deferred pending review outcome
- [ ] **Phase 5: AI Agents and Social Outreach** — NeuroWeb inference agents, Telegram first, Meta second, TikTok third, YouTube fourth — GATED: crisis escalation classifier must be validated with real-world testing before any agent goes public

---

## Phase Details

### Phase 0: Fundraising Package

**Goal**: A live, professional website captures waitlist signups and communicates the Takes a Village vision. Social media accounts on Instagram, TikTok, X (Twitter), and LinkedIn drive traffic and build community. Pitch materials (deck, one-pager, funder page on site) leverage the existing research and architecture documentation to demonstrate technical depth and market understanding. Early traction (signup count, social following) provides proof of demand for grant applications and investor conversations.

**Why now**: The technical platform (Phases 1-5) requires funding to build. The creator is non-technical — Phase 0 deliverables must be achievable with minimal cost and no specialized engineering. The research corpus, roadmap, and requirement documentation already exist and are the primary fundraising assets. Phase 0 packages these assets into a form that funders can evaluate.

**Depends on**: Nothing (first phase)

**Requirements**: None (pre-platform phase — no v1 requirements apply)

**Cost target**: Near zero — free Vercel hosting, free social accounts, domain registration (~$10-15/year), free email service tier

**Success Criteria** (what must be TRUE):
  1. A live website at a custom domain communicates the mission, problem, solution, and includes a working email waitlist signup
  2. A "For Funders/Partners" section on the site surfaces the technical architecture depth, legal awareness, and market analysis without requiring visitors to read raw markdown files
  3. Social media accounts on Instagram, TikTok, X, and LinkedIn are active with initial content and link back to the website
  4. A pitch deck exists that can be sent cold to funders — backed by the research corpus
  5. The GitHub repo (paxtontribe/TakesaVillage) presents professionally with the planning docs visible to technical reviewers

**Plans**: 3 plans

Plans:
- [x] 00-01: Website — Next.js 15 site on Vercel free tier, brand identity (logo, colors, typography), hero + problem + solution + how it works + funders + waitlist sections, email capture via free service, responsive design, SEO basics
- [ ] 00-02: Social media setup + content — Create accounts on Instagram, TikTok, X, LinkedIn, initial content strategy and posts, link everything to website waitlist CTA
- [x] 00-03: Pitch materials — Pitch deck (10-15 slides), executive one-pager, grant target research (SAMHSA, Web3 ecosystem grants, Polkadot treasury, tech-for-good foundations), investor target list

**UI hint**: yes

---

### Phase 1: Foundation and Identity

**Goal**: The platform's trust primitive is live and tested. Developers can authenticate as real, unique humans via Polkadot PoP without knowing they are using a blockchain. The OriginTrail DKG gateway node is running and capable of publishing Knowledge Assets. The SAMHSA N-SSATS ETL pipeline has produced stub facility records ready for Phase 2. The NeuroWeb SDK has been spiked and a go/no-go decision is documented. Meta's Facebook and Instagram app review submission is in flight.

**Why now**: PoP identity is the dependency backbone of the entire product — reviews, DKG contributions, funding applications, and DAO voting all require it. The DKG gateway node must be running before any facility profile work begins. The N-SSATS ETL pipeline must produce stub records before the cold-start seeding strategy in Phase 2 can execute. The NeuroWeb SDK spike must resolve before Phase 5 architecture can be designed. Meta's app review must start now because health-content review at Meta takes multiple weeks — delay here directly delays Phase 5.

**Depends on**: Nothing (first phase)

**Requirements**: AUTH-01, AUTH-02, AUTH-03, AUTH-04, AUTH-05

**Legal / Compliance Gates**:
- No legal gate blocks Phase 1 from starting.
- AKS attorney review and 42 CFR Part 2 attorney review must be INITIATED during Phase 1 so that results are available before Phase 2 design begins. Engage attorneys before Phase 1 ends.

**Infrastructure Prerequisites**:
- OriginTrail DKG v8 gateway node deployed on Fly.io (required for all DKG writes in Phase 2+)
- TRAC treasury funded for estimated Phase 2 Knowledge Asset publishing volume (model cost scenarios at multiple TRAC price points)
- Takes a Village Paranet registered on NeuroWeb (scopes all facility KAs, research KAs, and outcome KAs into a bounded sub-graph; enables paranet-level AI inference for Phase 5)

**Success Criteria** (what must be TRUE):
  1. A non-technical test user can create an account, complete Polkadot PoP Level 1 verification, and use the platform without ever seeing the words "wallet," "seed phrase," or "blockchain"
  2. A PoP Level 2 credential can be verified on-chain and the backend issues a valid session JWT tied only to the anonymized credential hash — the wallet address is never stored in the application database
  3. The DKG gateway node on Fly.io can successfully publish a test Knowledge Asset and return a UAL; the UAL resolves correctly via direct lookup
  4. The SAMHSA N-SSATS ETL pipeline has produced a minimum of 5,000 stub facility records in the expected Knowledge Asset JSON-LD format, ready for Phase 2 batch publishing
  5. The NeuroWeb SDK spike produces a written go/no-go decision: either the NeuroWeb inference API is production-ready and the Phase 5 agent architecture is documented, or the SPARQL fallback via dkg.js is documented as the agent DKG retrieval path
  6. Meta developer app review submission is submitted and acknowledged for Facebook and Instagram Messenger bots

**Plans**: 4 plans

Plans:
- [ ] 01-01: Project scaffolding — TypeScript monorepo, Next.js 15 + tRPC, Prisma + PostgreSQL on Supabase, GitHub Actions CI/CD, Vercel hosting, Cloudflare CDN, Sentry error monitoring
- [ ] 01-02: Polkadot PoP identity layer — custodial/MPC wallet abstraction, Auth.js v5 custom PoP provider, Level 1 + Level 2 credential verification, session JWT tied to anonymized credential hash, Umanitek Guardian fraud detection integration
- [ ] 01-03: OriginTrail infrastructure — DKG v8 gateway node on Fly.io, Takes a Village Paranet registration on NeuroWeb, TRAC treasury setup, SAMHSA N-SSATS ETL pipeline producing stub Knowledge Assets in W3C JSON-LD format
- [ ] 01-04: NeuroWeb SDK spike + Meta app review — verify NeuroWeb inference API surface at docs.neuroweb.ai, document go/no-go + fallback path, submit Meta developer app review for Facebook/Instagram Messenger bots, prototype crisis classifier architecture

**UI hint**: yes

---

### Phase 2: Facility Registry and DKG Flywheel

**Goal**: The DKG contains a meaningful, growing body of verified facility Knowledge Assets. Facility administrators can create and manage profiles structured to W3C/GSI standards with SCAN provenance chains. The N-SSATS stub records from Phase 1 are live as labeled unverified stubs. A facility claim-and-upgrade flow lets real facilities verify and enrich their profiles. Transparency scores are calculated and stored. The DKG flywheel incentive mechanism rewards verified contributions. Public access does not open until the minimum viable dataset threshold is met: 50+ verified facilities across 5+ states and 10+ treatment types.

**Why now**: Facility data is the other half of the value foundation alongside identity. Search results, AI matching, reviews, and AI agents all depend on verified facility Knowledge Assets being live. The cold-start problem must be solved here before any public-facing product is built in Phase 3. Legal reviews for AKS and 42 CFR Part 2 must be complete before any engineering on this phase begins — the token incentive structure (DKG-01) has direct AKS exposure, and the review verification flow design (REV-01) has 42 CFR Part 2 exposure that must be resolved before the data model is locked.

**Depends on**: Phase 1

**Requirements**: FAC-01, FAC-02, FAC-03, FAC-04, FAC-05, FAC-06, FAC-07, FAC-08, DKG-01, DKG-02, DKG-03, DKG-04, DKG-05

**Legal / Compliance Gates** — HARD BLOCKERS (phase cannot begin until all three are resolved):
- **AKS attorney review of DKG-01 token incentive structure**: Token rewards for facility Knowledge Asset contributions must be structured for data quality, not patient volume. Zero per-referral compensation must be enforced structurally in contract logic. Attorney must confirm the token design fits an AKS safe harbor before any incentive smart contract is written.
- **42 CFR Part 2 attorney review of REV-01 verification flow design**: Facility confirming a patient's attendance dates may constitute a 42 CFR Part 2 disclosure. The verification flow must be designed so the facility confirms a de-identified token, not a named patient record. Attorney must approve the design before the review verification flow is built in Phase 3.
- **42 CFR Part 2 attorney review of REV-05 / DKG outcomes data model**: The DKG must hold zero patient-linkable data, ever. "Anonymous" must meet the HIPAA Safe Harbor standard at minimum. Blockchain immutability creates a specific conflict with Part 2 amendment rights — the data model must resolve this before any outcomes are published to the DKG.

**Cold-Start Gate**: Do not open public access until 50+ verified facilities are live across 5+ states and 10+ treatment types.

**Open Questions to Resolve During Phase 2**:
- Token design decision: TRAC (existing), new platform token, or non-transferable reputation score? This affects AKS exposure and FTC disclosure requirements. Must be decided before DKG-01 contract is written.
- Facility onboarding team: internal editorial staff, contracted team, or partner organization? Cold-start requires staff to build initial profiles on behalf of early adopters.
- TRAC per-asset cost modeling: what TRAC price scenarios does the foundation's runway cover?

**Success Criteria** (what must be TRUE):
  1. A facility administrator can authenticate via PoP, create a facility profile with the full FAC-02 field set, and have that profile published as a Knowledge Asset on the TaV paranet with a valid UAL returned
  2. The platform verifies a facility's licensing status against at least one state licensing database before marking the profile as "verified" — unverified profiles are displayed as stubs with a clear label
  3. A community member can flag an inaccurate facility claim and the flag triggers a platform review workflow that resolves within 72 hours
  4. A facility profile displays a transparency score derived from verification completeness, KPI availability, review volume, and flag history
  5. The seeding dashboard shows at least 50 verified facility profiles across 5+ states and 10+ treatment types before Phase 3 public launch proceeds
  6. A research institution can publish a paper as a Knowledge Asset on the TaV paranet with persistent UAL and SCAN provenance chain

**Plans**: 4 plans

Plans:
- [ ] 02-01: Facility profile system — profile creation and management UI, FAC-02 field set, W3C/GSI JSON-LD schema, SCAN provenance chain for facility and staff, facility admin role-gated auth tied to DKG profile ownership
- [ ] 02-02: DKG publishing pipeline — batch publish N-SSATS stubs as unverified Knowledge Assets to TaV paranet, facility claim-and-upgrade flow, platform verification against state licensing databases (FAC-03), continuous licensing monitoring
- [ ] 02-03: Transparency scoring and community governance — transparency score calculation engine (FAC-08), community flag-and-review workflow (FAC-06, FAC-07), 72-hour review SLA enforcement, flag history on profiles
- [ ] 02-04: DKG flywheel and incentive mechanism — contribution quality scoring (DKG-02), token reward smart contract (DKG-01, AKS-reviewed structure), research institution KA onboarding (DKG-03), seeding dashboard with coverage metrics (DKG-04), partner onboarding flow (DKG-05)

**UI hint**: yes

---

### Phase 3: Search, Discovery, and Reviews

**Goal**: The core public-facing product is live. Users can find facilities by location and filter criteria at SAMHSA parity and beyond. The AI situational matching tool surfaces facility options from natural language descriptions of a user's situation. Every facility in search results shows a transparency score and aggregate review rating. The authenticated-anonymous review system is live — users with verified PoP identity can submit reviews only after attendance verification, and those reviews are displayed with zero personally identifiable information. Facilities can respond but cannot remove reviews.

**Why now**: Search and reviews are sequenced together because they share the same infrastructure dependencies: verified facility Knowledge Assets from Phase 2, PoP identity from Phase 1, and the 42 CFR Part 2-reviewed attendance verification flow. These features constitute the complete user-facing loop — a user arrives, finds a facility, reads verified reviews, and can assess transparency scores. Without both search and reviews, the platform is not yet differentiated from SAMHSA's locator.

**Depends on**: Phase 2 (cold-start gate must be met: 50+ verified facilities before public access opens)

**Requirements**: SRCH-01, SRCH-02, SRCH-03, SRCH-04, SRCH-05, REV-01, REV-02, REV-03, REV-04, REV-05, REV-06, REV-07

**Legal / Compliance Gates** — must resolve before Phase 3 public launch:
- **State referral service licensing review (CA, FL, TX, NY)**: SRCH-03 AI matching output must be structured as "here are options based on your criteria" — not "we recommend X facility." Obtain legal review of the matching UX in priority launch states before public launch.
- **BAA execution**: A Business Associate Agreement must be executed with any facility that transmits attendance confirmation data to the platform for review verification (REV-01). Confirms the facility's disclosure of a de-identified attendance token to the platform is legally structured.
- **42 CFR Part 2 design approval**: The REV-01 verification flow approved in Phase 2 legal review must be implemented exactly as designed. No implementation shortcuts.

**Success Criteria** (what must be TRUE):
  1. A user can search facilities by location (city, state, zip radius), treatment type, insurance accepted, specialty, and cost range — without creating an account
  2. A user can describe their situation in natural language (e.g., "I need residential opioid treatment that accepts Medicaid in Texas") and receive matched facility options with transparency scores, sourced from verified DKG Knowledge Assets
  3. A user with PoP Level 1 can submit a review for a facility they attended after the platform verifies their attendance date range — the review is displayed publicly with zero PII, only a "verified attendance" badge and treatment type/time period
  4. A facility can respond publicly to a review but cannot edit, remove, or suppress it — only community flags can trigger platform moderation
  5. Search results for a given facility display the transparency score, aggregate review rating, and available funding options at a glance
  6. SciGraph or Semantic Scholar research abstracts relevant to a specific substance type surface alongside facility results for that substance

**Plans**: 3 plans

Plans:
- [ ] 03-01: Facility search and discovery — location + filter search (SRCH-01, SRCH-02), PostgreSQL full-text search cache with DKG SPARQL overlay, map view, search results with transparency scores and funding options (SRCH-04), SciGraph/Semantic Scholar integration (SRCH-05)
- [ ] 03-02: AI situational matching — natural language matching tool (SRCH-03), LangChain.js agent with DKG retrieval tool, care level + facility matching output structured as "options based on criteria" (not recommendations, per state referral licensing review), matching result display
- [ ] 03-03: Authenticated-anonymous review system — attendance verification flow with 42 CFR Part 2-compliant de-identified token scheme (REV-01, REV-02), nullifier = hash(PoP_credential_id + facility_id + epoch) for duplicate prevention, review capture form (REV-03), 6/12-month follow-up prompts (REV-04), consent-gated anonymized outcomes to DKG (REV-05), facility response (REV-06), community flagging + 48-hour moderation (REV-07), Umanitek Guardian fraud check before DKG publish

**UI hint**: yes

---

### Phase 4: Funding Finder and DAO Governance

**Goal**: Users can find and apply for funding with eligibility matching that surfaces options they actually qualify for. Facilities post their own scholarships and sliding-scale options on their DKG profiles. The DAO is live: PoP Level 2 users vote on platform policy, funding allocation, and facility disputes via Snapshot with Safe multisig execution. All governance is publicly viewable on-chain. FUND-04 direct crypto disbursements to individuals are deferred unless the FinCEN attorney review concludes the "pay the facility, not the individual" model is legally viable — no disbursement contract is written before that determination.

**Why now**: Funding finder and DAO governance are grouped here because both require legal structure that must be resolved before engineering. The FinCEN review for FUND-04 is the critical path item for this phase. DAO governance in v1 uses Snapshot with foundation multisig (lighter complexity) — migration to full on-chain Polkadot OpenGov is a v2 milestone.

**Depends on**: Phase 3

**Requirements**: FUND-01, FUND-02, FUND-03, FUND-04, FUND-05, DAO-01, DAO-02, DAO-03, DAO-04, DAO-05

**Legal / Compliance Gates** — HARD BLOCKERS (phase cannot begin until resolved):
- **FinCEN/BSA attorney review of FUND-04 smart contract disbursement structure**: Smart contract disbursements to individuals may constitute unregistered money transmission requiring MSB registration and money transmitter licenses in 49 states. The "pay the facility, not the individual" model may be the legally safer path — the attorney review determines which model is built. No disbursement contract is written before this review concludes.
- **OFAC screening mechanism**: An OFAC screening check must be designed into any disbursement flow before any smart contract is written. This is not optional.
- **AKS confirmation for facility grants**: Confirm that the chosen FUND-04 structure (facility grants vs. individual disbursements) does not constitute indirect patient brokering under AKS. This is a follow-on confirmation from the Phase 2 AKS review.

**Note on FUND-04**: Direct crypto disbursements to individuals (USDC, USDT, BTC, ETH, DOT) are deferred pending FinCEN attorney review. Phase 4 will build the grants directory (FUND-01), eligibility matching (FUND-02), facility scholarships (FUND-03), and the application pathway (FUND-05). Smart contract funding pools are built only after FinCEN review, and structured per attorney guidance.

**Success Criteria** (what must be TRUE):
  1. A user can search a directory of federal, state, and nonprofit grants and scholarships for substance abuse treatment and receive results with eligibility requirements displayed
  2. A user can input their location, insurance status, substance type, and optional demographic fields and receive a filtered list of funding options they are likely to qualify for — without providing a name or contact information to the platform
  3. A facility profile displays facility-specific scholarships and sliding-scale options posted by the facility administrator
  4. A PoP Level 2 user can vote on a DAO proposal via Snapshot — the vote is signed with their wallet, the result is recorded, and the outcome is publicly viewable
  5. The Foundation Canceller veto is on-chain with a transparent timelock and publicly visible in governance history
  6. A contested facility review dispute can be escalated to a DAO vote when platform review is insufficient

**Plans**: 3 plans

Plans:
- [ ] 04-01: Funding finder — searchable grants and scholarships directory (FUND-01), eligibility matching tool with progressive disclosure UX (FUND-02), facility scholarship fields on DKG profiles (FUND-03), on-platform application pathway with PoP-verified anonymous applications (FUND-05)
- [ ] 04-02: Funding pools (post-FinCEN review) — USDC/USDT/ETH pools on Base L2 via Solidity (structure per attorney guidance), DOT pool on Polkadot Asset Hub, OFAC screening at disbursement, DAO multisig approval required for disbursements (FUND-04)
- [ ] 04-03: DAO governance — Snapshot voting UI with PoP Level 2 gate (DAO-01, DAO-02), Safe multisig treasury (DAO-01), Foundation Canceller role with on-chain timelock (DAO-03), proposal and voting history public on-chain (DAO-04), facility dispute resolution tiered workflow: platform review → community panel → full DAO vote (DAO-05)

**UI hint**: yes

---

### Phase 5: AI Agents and Social Outreach

**Goal**: NeuroWeb inference agents are live on social platforms, answering questions and surfacing verified DKG resources. Telegram deploys first (most permissive API, no app review). Facebook and Instagram Messenger deploy second (pending Meta app review initiated in Phase 1). TikTok deploys third (TikTok for Business API access required). YouTube deploys fourth (comment-response only). Every agent runs the crisis escalation classifier synchronously before any DKG query executes — missed crisis signals carry tort liability. All agent answers cite source Knowledge Asset UALs. Snapchat is deferred to v2 due to bot API maturity.

**Why now**: Agents require the DKG to be well-populated (Phase 2), search and reviews to be live (Phase 3), the NeuroWeb SDK spike to be resolved (Phase 1), and Meta's app review to have cleared (initiated Phase 1). Deploying agents to a thin DKG produces hallucination risk and undermines the platform's trust model. Crisis escalation must be validated with real-world testing — not unit tests — before any agent goes public. This is a safety gate, not a feature flag.

**Depends on**: Phase 4 (agents query funding resources as well as facility data; full DKG depth required)

**Requirements**: AI-01, AI-02, AI-03, AI-04, AI-05

**Safety Gate** — HARD BLOCKER (no agent goes public without this):
- **Crisis escalation classifier validated with real-world testing**: The crisis NLP classifier must be ML-based (not keyword-based), run synchronously and pre-query (<100ms), be consistent across all platforms, and be tested against real-world indirect crisis language patterns before any agent is publicly deployed. A missed crisis signal on a social platform carries tort liability. This validation is a launch gate, not a v2 improvement.

**Platform Deployment Notes**:
- Telegram: deploy first — most developer-friendly API, no app review, webhook or long-polling supported via Telegraf
- Facebook + Instagram: deploy second — requires Meta app review (submitted Phase 1) to be approved for health-related Messenger bots
- TikTok: deploy third — requires TikTok for Business API access; US regulatory uncertainty (ban risk) means engineering investment should be bounded
- YouTube: deploy fourth — comment-response only; verify comment-bot ToS scope before deployment
- Snapchat: deferred to v2 — bot API maturity is low; API capabilities are not reliably documented

**Success Criteria** (what must be TRUE):
  1. The Telegram agent answers a natural language substance abuse resource question with a response that cites at least one verified Knowledge Asset UAL from the TaV paranet — not a generic LLM answer
  2. The crisis escalation classifier correctly routes a test set of indirect crisis-language inputs (not keyword-match patterns) to 988 / SAMHSA helpline resources synchronously, before any DKG query executes, across all deployed platforms
  3. A Facebook Messenger user can ask "what treatment centers in Austin accept Medicaid?" and receive a response sourced from the TaV DKG with facility names, transparency scores, and a link to the full profile
  4. All agent responses are auditable — each answer links to the source Knowledge Asset UALs used to generate it, viewable in a transparency log
  5. No agent goes live on any platform without the crisis classifier having passed real-world validation testing

**Plans**: 3 plans

Plans:
- [ ] 05-01: Agent infrastructure — Node.js worker services per platform, BullMQ + Redis message queue for rate limit management, crisis classifier (ML-based, synchronous, pre-query), NeuroWeb inference layer or SPARQL fallback via dkg.js (based on Phase 1 spike decision), LangChain.js agent orchestration with DKG retrieval tool, source UAL citation in all responses (AI-01, AI-03, AI-05)
- [ ] 05-02: Platform agent deployment — Telegram agent (AI-02, deploy first), Facebook + Instagram Messenger agents (deploy second, pending Meta approval), crisis escalation integration across all platforms: 988 + Crisis Text Line (AI-04), real-world crisis classifier validation gate before any public launch
- [ ] 05-03: Expanded platform agents + monitoring — TikTok agent (deploy after TikTok API access confirmed, bounded engineering investment), YouTube comment-response agent (ToS scope verified), agent response quality monitoring and DKG source auditing, agent performance dashboard

**UI hint**: yes

---

## Progress Table

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 0. Fundraising Package | 1/3 | In Progress|  |
| 1. Foundation and Identity | 0/4 | Not started (awaiting funding) | - |
| 2. Facility Registry and DKG Flywheel | 0/4 | Not started | - |
| 3. Search, Discovery, and Reviews | 0/3 | Not started | - |
| 4. Funding Finder and DAO Governance | 0/3 | Not started | - |
| 5. AI Agents and Social Outreach | 0/3 | Not started | - |

---

## Requirement Traceability

All 42 v1 requirements are mapped to exactly one phase. No orphans.

| Requirement | Phase | Description | Status |
|-------------|-------|-------------|--------|
| AUTH-01 | Phase 1 | PoP Level 1 authentication | Pending |
| AUTH-02 | Phase 1 | PoP Level 2 upgrade | Pending |
| AUTH-03 | Phase 1 | Anonymous public identity | Pending |
| AUTH-04 | Phase 1 | Facility admin role-gated auth | Pending |
| AUTH-05 | Phase 1 | Umanitek Guardian fraud detection | Pending |
| FAC-01 | Phase 2 | Facility profile as DKG Knowledge Asset | Pending |
| FAC-02 | Phase 2 | Facility profile field set | Pending |
| FAC-03 | Phase 2 | Platform verification against licensing databases | Pending |
| FAC-04 | Phase 2 | W3C/GSI Knowledge Asset structure | Pending |
| FAC-05 | Phase 2 | SCAN supply chain provenance | Pending |
| FAC-06 | Phase 2 | Community flagging with 72-hour review | Pending |
| FAC-07 | Phase 2 | No pay-to-suppress reviews | Pending |
| FAC-08 | Phase 2 | Transparency score | Pending |
| DKG-01 | Phase 2 | Incentive mechanism for DKG contributions | Pending |
| DKG-02 | Phase 2 | Contribution quality scoring | Pending |
| DKG-03 | Phase 2 | Research institution Knowledge Asset publishing | Pending |
| DKG-04 | Phase 2 | Seeding dashboard with coverage metrics | Pending |
| DKG-05 | Phase 2 | Partner onboarding flow | Pending |
| SRCH-01 | Phase 3 | Location-based facility search | Pending |
| SRCH-02 | Phase 3 | Filter by insurance, treatment type, specialty, cost | Pending |
| SRCH-03 | Phase 3 | AI situational matching tool | Pending |
| SRCH-04 | Phase 3 | Search results with transparency scores and funding | Pending |
| SRCH-05 | Phase 3 | SciGraph/Semantic Scholar research integration | Pending |
| REV-01 | Phase 3 | Attendance verification before review | Pending |
| REV-02 | Phase 3 | Verified identity, anonymous display | Pending |
| REV-03 | Phase 3 | Review capture: experience, method, staff, environment | Pending |
| REV-04 | Phase 3 | 6/12-month outcome follow-up prompts | Pending |
| REV-05 | Phase 3 | Anonymized outcomes published to DKG | Pending |
| REV-06 | Phase 3 | Facility response (no removal) | Pending |
| REV-07 | Phase 3 | Community review flagging + 48-hour moderation | Pending |
| FUND-01 | Phase 4 | Searchable grants and scholarships directory | Pending |
| FUND-02 | Phase 4 | Eligibility matching tool | Pending |
| FUND-03 | Phase 4 | Facility scholarships on DKG profiles | Pending |
| FUND-04 | Phase 4 | Platform-managed funding pools via smart contracts (deferred pending FinCEN review) | Pending |
| FUND-05 | Phase 4 | On-platform funding application pathway | Pending |
| DAO-01 | Phase 4 | DAO governance via Snapshot + Safe multisig | Pending |
| DAO-02 | Phase 4 | PoP Level 2 one-person-one-vote | Pending |
| DAO-03 | Phase 4 | Foundation Canceller role with on-chain timelock | Pending |
| DAO-04 | Phase 4 | All DAO proposals and votes public on-chain | Pending |
| DAO-05 | Phase 4 | Facility dispute resolution escalation to DAO | Pending |
| AI-01 | Phase 5 | NeuroWeb inference layer connecting agents to DKG | Pending |
| AI-02 | Phase 5 | Agents on TikTok, Facebook, Instagram, Telegram, YouTube | Pending |
| AI-03 | Phase 5 | Natural language DKG query via agents | Pending |
| AI-04 | Phase 5 | Crisis escalation to 988 / SAMHSA helpline | Pending |
| AI-05 | Phase 5 | Auditable agent responses with source UAL citation | Pending |

**Coverage: 42/42 v1 requirements mapped. No orphans.**

---

## Legal Gate Summary

Three legal reviews are hard blockers at specific phase boundaries. These are not risk items to be parallelized with engineering — they are gates.

| Legal Review | Required Before | Domain | Status |
|-------------|-----------------|--------|--------|
| AKS attorney review of DKG-01 token incentive structure | Phase 2 design begins | Federal Anti-Kickback Statute | Not started — engage during Phase 1 |
| 42 CFR Part 2 attorney review of REV-01 verification flow and REV-05 outcomes data model | Phase 2/3 design begins | Healthcare privacy (stricter than HIPAA) | Not started — engage during Phase 1 |
| FinCEN/BSA attorney review of FUND-04 disbursement structure + OFAC screening design | Phase 4 design begins | Money transmitter licensing | Not started — engage during Phase 3 |

---

## Open Questions

The following questions must be resolved before or during the phases that depend on them.

| Question | Blocks | Resolution Needed By |
|----------|--------|---------------------|
| PoP verification UX approach: custodial wallet, MPC wallet, or social recovery? | Phase 1 engineering scope | Phase 1 start |
| Token design: TRAC, new platform token, or non-transferable reputation score? | Phase 2 DKG-01 smart contract | Before Phase 2 begins |
| FUND-04 structure: "pay the facility" vs. direct individual disbursement? | Phase 4 smart contract design | FinCEN review (before Phase 4) |
| SciGraph deprecation: is the Springer Nature SciGraph API the intended service, or Semantic Scholar (Allen AI)? | Phase 3 SRCH-05 design | Phase 3 plan-phase |
| PoP Level 2 geographic coverage in US target launch states? | Phase 4 DAO-02 voting eligibility | Phase 3 end |
| Paranet TRAC incentive rate calibration: what TRAC price scenarios does the foundation's runway cover? | Phase 2 DKG publishing budget | Before Phase 2 begins |
| Facility onboarding team: internal, contracted, or partner org? | Phase 2 cold-start seeding quality | Before Phase 2 begins |
| DAO v1 governance scope: does DAO-05 facility dispute resolution go live in Phase 4 or wait for v2? | Phase 4 DAO-05 scope | Phase 4 plan-phase |

---

*Roadmap version: 1.0*
*Created: 2026-03-28*
*Based on: PROJECT.md, REQUIREMENTS.md, research/SUMMARY.md, research/STACK.md, research/FEATURES.md, research/ARCHITECTURE.md, research/PITFALLS.md*
