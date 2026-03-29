# Takes a Village

## What This Is

A nonprofit, blockchain-powered global platform that connects people struggling with substance abuse — and their families — to verified treatment facilities, funding sources, and peer-reviewed research. Built on the OriginTrail Decentralized Knowledge Graph (DKG), governed by a DAO, and designed to radically remove trust from the equation: every facility's claims, methods, costs, outcomes, and credentials are published on-chain and verified by both the platform and the community.

US-first launch, designed for global expansion.

## Core Value

**Radical transparency at every touchpoint** — facilities cannot hide behind marketing, funding is findable, reviews are real, and the data that drives decisions lives on a decentralized knowledge graph that no single party controls.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

(None yet — ship to validate)

### Active

#### Identity & Authentication
- [ ] Users authenticate via Polkadot Proof of Personhood (PoP) — Level 1 (basic) and Level 2 (enhanced)
- [ ] Identity is verified for accountability but display is fully anonymous
- [ ] Facility administrators have separate, role-gated authentication
- [ ] Fraud detection via Umanitek.ai Guardian integration

#### Facility Registry (DKG)
- [ ] Facilities can create and manage a profile published as a Knowledge Asset on the OriginTrail DKG
- [ ] Profile claims (licensing, certifications, methods, costs, KPIs) are platform-verified against official records
- [ ] Community can flag inaccurate claims — flags escalate to platform review
- [ ] Facility profiles expose: treatment methods, standard of practice, accepted insurance, cost structure, capacity, success metrics (KPIs/OKRs), and staff credentials
- [ ] SCAN supply chain model applied to facility/funding/personnel provenance
- [ ] W3C and GSI standards used for interoperable knowledge asset structure
- [ ] Facilities are linked to official licensing databases for continuous verification

#### Search & Discovery
- [ ] Users can search facilities by: location, treatment type, insurance accepted, cost, availability, specialty (detox, residential, sober living, outpatient, MAT, dual diagnosis, etc.)
- [ ] AI-powered matching: user inputs their situation and gets matched to appropriate care level and environment
- [ ] Results display facility profiles with transparency scores and community ratings
- [ ] SciGraph integration surfaces latest research relevant to specific substance use disorders

#### Reviews (Authenticated-Anonymous)
- [ ] Users can leave reviews only after verifying treatment attendance (date range, facility confirmation)
- [ ] Identity verified by platform; displayed fully anonymously to public
- [ ] Reviews include: experience rating, method effectiveness, staff quality, environment match, long-term outcome (follow-up prompts)
- [ ] Facility cannot remove or suppress reviews — only flag for platform moderation
- [ ] Anonymous patient outcomes published to DKG to help other patients (W3C/GSI compliant)

#### Funding Finder
- [ ] Curated, searchable directory of public grants and scholarships for substance abuse treatment
- [ ] Eligibility matching tool: user inputs situation and is matched to funding they qualify for
- [ ] Facilities post their own scholarship/sliding-scale options on their DKG profile
- [ ] Funding pools in USDC, USDT, BTC, ETH, and DOT — disbursable to verified individuals via smart contracts
- [ ] On-platform application pathway for select funding sources

#### DKG Flywheel & Incentives
- [ ] Incentive mechanism for stakeholders to publish verified facts to the DKG: facilities, researchers, individuals, funders
- [ ] Token-based rewards for high-quality, verified knowledge contributions
- [ ] Seeding strategy: onboard initial facilities and institutions to populate DKG at launch
- [ ] Institutions can publish research papers as Knowledge Assets to the DKG
- [ ] Individuals can publish anonymized treatment outcomes to the DKG

#### AI Agents (NeuroWeb / Social Outreach)
- [ ] NeuroWeb inference platform connects AI agents to the DKG
- [ ] Agents deployed on: TikTok, Facebook, Instagram, Telegram, YouTube, Snapchat (US-first, expand per market)
- [ ] Agents answer questions, surface resources, and guide people to the platform in real time
- [ ] Agents trained on DKG knowledge assets — answers are sourced from verified data

#### DAO Governance
- [ ] Platform governed by a Decentralized Autonomous Organization (DAO)
- [ ] Community members can vote on platform policy, funding allocation, and facility dispute outcomes
- [ ] Foundation retains governance override when DAO action would violate legal/ethical constraints
- [ ] DAO proposals and voting history are transparent and on-chain

### Out of Scope

- **Building a treatment platform** — Takes a Village connects people to facilities; it does not provide treatment
- **Legal/medical advice** — Platform surfaces information; users consult professionals for personal decisions
- **International launch (v1)** — US market first; global architecture designed from day one but not launched
- **Native mobile app (v1)** — Web-first; mobile app is a future milestone
- **Custom blockchain** — Uses OriginTrail DKG + Polkadot; no proprietary chain

## Context

### Technology Stack
- **Decentralized Knowledge Graph**: OriginTrail DKG (NeuroWeb inference layer)
- **Supply Chain / Provenance Model**: OriginTrail SCAN (facilities, personnel, funding)
- **Healthcare Data Standards**: OriginTrail Life Sciences (W3C, GSI, knowledge assets) — co-developed by Trace Labs and BSI
- **Identity / Authentication**: Polkadot Proof of Personhood (PoP) — Level 1 & Level 2
- **Fraud Detection**: Umanitek.ai Guardian
- **Research Integration**: SciGraph (substance use disorder + mental health literature)
- **AI Outreach**: NeuroWeb + social platform agents
- **Governance**: DAO (Decentralized Autonomous Organization)
- **Funding Pools**: USDC, USDT, BTC, ETH, DOT
- **Project Management**: GSD + Notion MCP (Paxton Tribe workspace)

### Domain Context
- Substance abuse treatment is a $42B industry in the US with historically low transparency
- SAMHSA treatment locator exists but lacks reviews, cost data, and outcome tracking
- Insurance coverage for addiction treatment is complex and opaque — most people don't know what they qualify for
- Sober living industry is largely unregulated — community accountability is the primary check
- OriginTrail SCAN has proven supply chain provenance in pharma/food — same model applies to treatment provenance

### The Flywheel
The DKG only becomes valuable when populated. Seeding strategy:
1. Onboard 50–100 facilities at launch (voluntary early adopters + outreach)
2. Partner with 2–3 research institutions to publish papers as Knowledge Assets
3. Incentivize individual outcome submissions via token rewards
4. AI agents drive inbound traffic → more reviews → more facility accountability → more facilities join

## Constraints

- **Blockchain**: OriginTrail DKG + Polkadot — no alternative chains in v1
- **Identity**: Polkadot PoP is the authentication standard — no email/password auth
- **Privacy**: All individual data must be anonymous in public-facing outputs; HIPAA-adjacent design principles
- **Governance**: DAO structure is non-negotiable — community ownership is core to the mission
- **Nonprofit**: Revenue model is grant/donation-funded; no facility pay-to-rank mechanics
- **Accountability**: Facilities cannot pay to suppress reviews or boost rankings

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| OriginTrail DKG as trust layer | Removes single point of trust; established healthcare/supply chain track record | — Pending |
| Polkadot PoP for identity | Enables anonymous-but-authenticated pattern natively; aligns with Web3 governance | — Pending |
| DAO governance | Community ownership creates self-reinforcing accountability | — Pending |
| Nonprofit model | Removes commercial incentive to favor paying facilities over honest results | — Pending |
| US-first launch | Largest single market, most developed insurance/grants infrastructure to map | — Pending |
| Umanitek Guardian for fraud | Specialized in Web3 identity fraud — prevents fake reviews and fake facilities | — Pending |

---
*Last updated: 2026-03-29 after initial project definition*
