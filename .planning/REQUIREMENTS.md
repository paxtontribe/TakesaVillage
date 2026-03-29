# Requirements: Takes a Village

**Defined:** 2026-03-29
**Core Value:** Radical transparency at every touchpoint — facilities cannot hide, funding is findable, reviews are real, and all data lives on a decentralized knowledge graph no single party controls.

## v1 Requirements

### Identity & Authentication

- [ ] **AUTH-01**: User authenticates via Polkadot Proof of Personhood (PoP) Level 1
- [ ] **AUTH-02**: User can upgrade to PoP Level 2 for enhanced trust actions (posting outcomes to DKG, voting in DAO)
- [ ] **AUTH-03**: Authenticated identity is never exposed publicly — all public interactions are anonymous
- [ ] **AUTH-04**: Facility administrators authenticate with role-gated credentials tied to DKG profile ownership
- [ ] **AUTH-05**: Umanitek.ai Guardian integration detects and blocks fraudulent identity creation

### Facility Registry

- [ ] **FAC-01**: Facility can create a profile published as a Knowledge Asset on the OriginTrail DKG
- [ ] **FAC-02**: Facility profile includes: name, location, type (detox/residential/sober living/outpatient/MAT), capacity, accepted insurance, cost structure, treatment methods, staff credentials, KPIs/OKRs
- [ ] **FAC-03**: Platform verifies facility licensing against official state/federal databases before publishing
- [ ] **FAC-04**: Facility claims are structured per W3C and GSI standards for interoperability
- [ ] **FAC-05**: SCAN supply chain model applied — facility, personnel, and funding provenance are traceable on DKG
- [ ] **FAC-06**: Community can flag inaccurate facility claims — flags trigger platform review within 72 hours
- [ ] **FAC-07**: Facilities cannot pay to suppress reviews or improve ranking position
- [ ] **FAC-08**: Facility profile displays a transparency score derived from: verification completeness, KPI availability, review volume, flag history

### Search & Discovery

- [ ] **SRCH-01**: User can search facilities by location (city, state, zip radius)
- [ ] **SRCH-02**: User can filter by: insurance accepted, treatment type, specialty, cost range, availability, success rate
- [ ] **SRCH-03**: AI matching tool — user describes their situation and is matched to appropriate care level, environment, and facility options
- [ ] **SRCH-04**: Search results display transparency score, aggregate review rating, and funding options at a glance
- [ ] **SRCH-05**: SciGraph integration surfaces relevant research abstracts alongside facility results for specific substance types

### Reviews

- [ ] **REV-01**: User must verify treatment attendance (facility + date range) before submitting a review
- [ ] **REV-02**: Verified identity is stored platform-side only; review is displayed with zero personally identifiable information
- [ ] **REV-03**: Review captures: overall experience, method effectiveness, staff quality, environment match, would recommend (Y/N)
- [ ] **REV-04**: Optional long-term outcome follow-up: platform prompts reviewer at 6-month and 12-month marks
- [ ] **REV-05**: Anonymized individual outcomes can be published to DKG as Knowledge Assets (with user consent)
- [ ] **REV-06**: Facility can respond to reviews publicly but cannot edit, remove, or suppress them
- [ ] **REV-07**: Community can flag reviews for moderation — platform reviews flagged content within 48 hours

### Funding Finder

- [ ] **FUND-01**: Searchable directory of public grants and scholarships for substance abuse treatment (federal, state, nonprofit)
- [ ] **FUND-02**: Eligibility matching: user inputs demographics, insurance status, substance type, and location — system returns funding options they qualify for
- [ ] **FUND-03**: Facility profiles include facility-specific scholarships and sliding-scale options
- [ ] **FUND-04**: Platform-managed funding pools (USDC, USDT, BTC, ETH, DOT) available to verified individuals via smart contract disbursement
- [ ] **FUND-05**: Users can apply for select funding directly through the platform with identity-verified, anonymous applications

### DKG Flywheel & Incentives

- [ ] **DKG-01**: Incentive mechanism rewards verified knowledge contributions to the DKG (facilities publishing profiles, researchers publishing papers, individuals publishing outcomes)
- [ ] **DKG-02**: Contribution quality scoring — higher-quality, more-verified assets earn greater rewards
- [ ] **DKG-03**: Research institutions can publish papers as Knowledge Assets to the DKG with persistent provenance
- [ ] **DKG-04**: Seeding dashboard tracks DKG population metrics — facility coverage, geographic distribution, research depth
- [ ] **DKG-05**: Partner onboarding flow for early-adopter facilities and research institutions

### AI Agents

- [ ] **AI-01**: NeuroWeb inference layer connects AI agents to live DKG knowledge assets
- [ ] **AI-02**: Agents deployed on TikTok, Facebook, Instagram, Telegram, YouTube, Snapchat (US-first)
- [ ] **AI-03**: Agents can answer natural language questions and surface facility/funding/research results from the DKG in real time
- [ ] **AI-04**: Agents escalate crisis-level interactions to human support resources (SAMHSA helpline, 988)
- [ ] **AI-05**: Agent response quality is auditable — all answers traceable to source Knowledge Assets on DKG

### DAO Governance

- [ ] **DAO-01**: Platform governance operates via a DAO — community members vote on policy, disputes, and funding allocation
- [ ] **DAO-02**: PoP Level 2 users are eligible to vote — one-person-one-vote (not token-weighted)
- [ ] **DAO-03**: Foundation retains veto power when DAO action would violate legal, ethical, or mission constraints
- [ ] **DAO-04**: All DAO proposals, votes, and outcomes are public and on-chain
- [ ] **DAO-05**: Facility dispute resolution (contested reviews, flag outcomes) goes to DAO vote when platform review is insufficient

---

## v2 Requirements

### Internationalization

- **INTL-01**: Platform supports non-English languages (Spanish first)
- **INTL-02**: International facility registry (Canada, UK, Australia)
- **INTL-03**: Cross-border funding and insurance mapping

### Mobile App

- **MOB-01**: Native iOS app
- **MOB-02**: Native Android app
- **MOB-03**: Push notifications for funding matches and DAO votes

### Advanced Analytics

- **ANLT-01**: Population-level outcome dashboards (anonymized, aggregated)
- **ANLT-02**: Facility benchmarking against regional and national averages
- **ANLT-03**: Research trend feeds from SciGraph

### Enhanced AI

- **AI-EXT-01**: Personalized recovery resource plans generated by AI from DKG data
- **AI-EXT-02**: Real-time facility availability updates via AI-monitored facility data

---

## Out of Scope

| Feature | Reason |
|---------|--------|
| Providing treatment or medical advice | Legal liability; platform is a connector, not a provider |
| Building a custom blockchain | OriginTrail DKG + Polkadot is the stack; no proprietary chain |
| Token speculation / exchange | DKG incentive tokens are utility-only; no trading platform |
| Pay-to-rank facility placement | Nonprofit mission; ranking is merit/transparency-based only |
| International launch (v1) | US market first; architecture supports global but v1 scope is US |
| Native mobile app (v1) | Web-first; mobile is v2 |
| Therapist/counselor marketplace | Out of scope for v1 — facilities only |
| Peer-to-peer chat | High moderation complexity; not core to v1 mission |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| AUTH-01 to AUTH-05 | Phase 1 | Pending |
| FAC-01 to FAC-08 | Phase 2 | Pending |
| SRCH-01 to SRCH-05 | Phase 3 | Pending |
| REV-01 to REV-07 | Phase 3 | Pending |
| FUND-01 to FUND-05 | Phase 4 | Pending |
| DKG-01 to DKG-05 | Phase 2 | Pending |
| AI-01 to AI-05 | Phase 5 | Pending |
| DAO-01 to DAO-05 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 42 total
- Mapped to phases: 42
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-29*
*Last updated: 2026-03-29 after initial definition*
