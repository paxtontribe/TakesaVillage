# Polkadot Treasury Proposal Draft

**Title:** Takes a Village: Verified Substance Abuse Treatment Transparency on Polkadot
**Track:** Small Spender (10K-100K DOT range)
**Status:** DRAFT -- submit after website is live at takesavillage.health
**Platform:** Submit via [Polkassembly](https://polkadot.polkassembly.io/treasury-proposals)

---

## Summary

Takes a Village is a nonprofit transparency platform for substance abuse treatment in the United States. The US treatment industry represents $42 billion in annual spending across approximately 17,000 facilities, yet no verified review system exists for any of them. Patients and families navigate a system plagued by predatory referral practices, suppressed reviews, and marketing-driven directories that route people based on who pays the most -- not who provides the best care.

Takes a Village addresses this by building a radically transparent, community-accountable data layer using Polkadot infrastructure as its backbone. Every user action -- reviews, data contributions, governance votes, funding applications -- is tied to a verified unique human identity through Polkadot Proof of Personhood, without exposing any personal information publicly. Facility data lives on the OriginTrail Decentralized Knowledge Graph, a Polkadot parachain-anchored knowledge network. AI agents use NeuroWeb inference to answer treatment questions grounded in verified data rather than hallucinated content.

This is not a token project or a DeFi protocol. It is a healthcare transparency platform that puts Polkadot's identity, data, and AI infrastructure to genuine real-world use -- serving people in crisis.

---

## Problem

The substance abuse treatment system in the US is a $42 billion industry with historically low transparency:

- **~17,000 treatment facilities** with no verified review system. SAMHSA's national locator (findtreatment.gov) provides basic contact information but no reviews, no cost data, and no outcome tracking.
- **Predatory referral practices** documented by the FTC and prosecuted under EKRA (Eliminating Kickbacks in Recovery Act, 2018). Commercial directories like Rehabs.com and AddictionCenter.com operate as lead generation machines, routing patients to facilities that pay $3,000-$10,000 per referral.
- **Suppressible reviews** on Google and Yelp. Facilities with documented histories of patient harm maintain high ratings because reviews are easily gamed and unverified.
- **No outcome tracking.** No platform in this space collects follow-up data on whether treatment actually worked 6 or 12 months later.

People in crisis -- and the families supporting them -- deserve trustworthy information. The current system does not provide it.

---

## Solution

Takes a Village builds a nonprofit transparency platform using three core Polkadot ecosystem technologies:

### Polkadot Proof of Personhood (Core Identity Layer)

Every user action on Takes a Village requires Polkadot PoP verification:

- **Reviews** require PoP Level 1 -- confirming the reviewer is a unique, real human who actually attended the facility. The review is displayed fully anonymously; the identity verification happens platform-side only.
- **DAO governance votes** require PoP Level 2 -- one-person-one-vote for platform policy, funding allocation, and facility dispute resolution.
- **DKG data contributions** require PoP Level 1 -- ensuring that knowledge published to the decentralized graph comes from verified humans.
- **Funding applications** require PoP Level 1 -- preventing Sybil attacks on treatment funding pools.

The wallet is completely abstracted. Users sign up with email and phone number; the Polkadot wallet is provisioned behind the scenes (custodial or MPC). The target demographic -- people in crisis, often non-technical, often on mobile -- must never encounter crypto wallet onboarding UX.

### OriginTrail DKG (Decentralized Data Layer)

All facility data, reviews, and outcomes are published as Knowledge Assets on the OriginTrail Decentralized Knowledge Graph (DKG v8), which is anchored on NeuroWeb -- a Polkadot parachain.

- **SAMHSA N-SSATS baseline:** ~17,000 US facility records imported as initial Knowledge Assets
- **Facility profiles:** Structured as W3C-compliant JSON-LD (schema.org/MedicalOrganization), including treatment methods, costs, insurance, staff credentials, and licensing verification
- **SCAN provenance model:** OriginTrail's supply chain provenance model applied to facility licensing, staff credentials, and funding flows
- **Community accountability:** Claims are traceable on the DKG and cannot be quietly edited or deleted. Community can flag inaccurate data; flags escalate to platform review within 72 hours.

### NeuroWeb AI Inference

AI agents deployed on social platforms (Telegram, Instagram, TikTok) use NeuroWeb inference to query the DKG and generate responses grounded in verified data. Every agent answer cites source Knowledge Asset UALs (Universal Asset Locators), ensuring traceability and preventing hallucination on treatment facts.

---

## Why Polkadot

Takes a Village is a real-world social good application that demonstrates Polkadot's infrastructure serving people in genuine crisis. Specific Polkadot ecosystem technologies used:

| Technology | Role in Takes a Village | Ecosystem Value |
|-----------|------------------------|-----------------|
| **Polkadot Proof of Personhood** (Level 1 + Level 2) | Core identity layer for all user actions | Demonstrates PoP in a healthcare use case with real users who are non-technical |
| **OriginTrail DKG** (NeuroWeb parachain) | Decentralized data layer for facility profiles, reviews, outcomes | Demonstrates DKG applied to healthcare transparency and social accountability |
| **NeuroWeb** (Polkadot parachain) | AI inference layer connecting agents to verified knowledge | Demonstrates NeuroWeb AI grounding in a high-stakes, real-world context |
| **Polkadot OpenGov** (v2 roadmap) | DAO governance for platform policy and dispute resolution | Demonstrates OpenGov applied to healthcare community governance |

This is not a generic "we use Polkadot" claim. PoP is the identity backbone that makes authenticated-anonymous reviews possible. Without Polkadot's identity primitive, this platform cannot exist as designed.

---

## Requested Amount

**[5,000-10,000 DOT]** *(adjust based on current DOT price; target approximately $20,000-$40,000 USD equivalent)*

### Use of Funds

| Category | Allocation | Description |
|----------|-----------|-------------|
| **Engineering** | 60% | Contract developer for PoP identity integration, DKG gateway node deployment, SAMHSA N-SSATS ETL pipeline |
| **Legal** | 25% | Attorney consultations: Anti-Kickback Statute review, 42 CFR Part 2 healthcare privacy review, FinCEN money transmitter review |
| **Infrastructure** | 15% | DKG gateway node hosting (Fly.io), cloud services, domain and tooling |

### Why These Specific Items

- **PoP integration** is the dependency backbone -- reviews, governance, funding applications, and DKG contributions all require it
- **Legal reviews** are hard blockers mapped to phase boundaries; cutting them cuts the project's viability
- **DKG gateway node** is required for publishing and querying Knowledge Assets in production

---

## Milestones

| Milestone | Deliverable | Verification |
|-----------|------------|-------------|
| **Milestone 1** | Website live with waitlist | **Completed** -- https://takesavillage.health |
| **Milestone 2** | PoP Level 1 + Level 2 authentication working in staging | Staging URL + video demo of signup-to-first-action flow with abstracted wallet |
| **Milestone 3** | DKG gateway node publishing test Knowledge Assets | Gateway node URL + published test facility KA with UAL |
| **Milestone 4** | SAMHSA N-SSATS ETL pipeline producing stub facility records | GitHub PR with ETL code + sample output of 100 facility JSON-LD records |

### Timeline

- **Milestone 1:** Complete (pre-proposal)
- **Milestone 2:** 6-8 weeks after funding
- **Milestone 3:** 4-6 weeks after funding (parallel with Milestone 2)
- **Milestone 4:** 8-10 weeks after funding

---

## Team

**Founder:** *[Name -- insert founder bio: background, domain connection, why this mission]*

The founder has completed pre-funding research and planning that includes:
- 5 research documents covering technical architecture, competitive analysis, legal compliance, and technology stack
- 42 v1 requirements mapped across 8 subsystems
- 6-phase roadmap with legal compliance gates mapped to specific phase boundaries
- 3 federal compliance gates identified and treated as hard blockers (not risk items)
- All planning documentation published on GitHub

**Seeking:** Technical co-founder / CTO with Polkadot + healthcare experience.

---

## Links

- **Website:** https://takesavillage.health
- **GitHub:** https://github.com/paxtontribe/TakesaVillage
- **Planning documentation:** https://github.com/paxtontribe/TakesaVillage/tree/main/.planning
- **Research corpus:** https://github.com/paxtontribe/TakesaVillage/tree/main/.planning/research

---

## Note on Submission Timing

This proposal will be submitted after the website is live at takesavillage.health. A live URL provides credibility evidence that the project is actively executing, not solely a proposal-stage concept. Milestone 1 (website with waitlist) serves as pre-proposal evidence of execution capacity.

---

## FAQ for Reviewers

**Q: Is this a token project?**
A: No. Takes a Village is a nonprofit. There is no token sale, no equity, and no investor return. We use TRAC tokens to pay DKG storage fees (infrastructure cost) and Polkadot PoP for identity verification. The platform does not issue its own token.

**Q: Why does a healthcare platform need blockchain?**
A: Two specific reasons. First, the authenticated-anonymous review system requires Polkadot Proof of Personhood -- a verified-unique-human identity primitive that does not exist in traditional web infrastructure. Second, facility data on a decentralized knowledge graph cannot be quietly edited or deleted by any single party, including us. In an industry where data suppression is the primary mechanism of harm, this matters.

**Q: What happens if the PoP integration is harder than expected?**
A: The roadmap includes a NeuroWeb SDK spike in Phase 1 to verify API surfaces before committing to full implementation. If PoP onboarding friction is too high for the target demographic, the fallback is a custodial wallet with SMS/email recovery that abstracts the blockchain entirely. The user experience comes first; the verification primitive adapts.

**Q: How do you handle the legal compliance gates?**
A: We treat them as hard blockers, not risk items. No engineering begins on token incentive mechanisms (AKS), review verification flows (42 CFR Part 2), or crypto disbursements (FinCEN) until the relevant attorney review is complete. This is built into the phase structure of the roadmap. The requested funds include budget for these legal consultations.
