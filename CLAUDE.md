# Takes a Village — Claude Instructions

## Project

Nonprofit decentralized platform connecting people to substance abuse treatment via OriginTrail DKG, Polkadot PoP identity, NeuroWeb AI agents, and DAO governance. US-first, global roadmap.

See `.planning/PROJECT.md` for full context.

## GitHub is Ground Truth

**GitHub (paxtontribe/TakesaVillage) is the official source of truth for this project.**

Repository: https://github.com/paxtontribe/TakesaVillage

### Session End Protocol

At the end of every GSD session, commit and push all changes to GitHub:
1. Commit all new/modified `.planning/` files
2. Push to `origin main`
3. Confirm push succeeded before ending session

**Rule: if GSD created or modified it this session, commit and push to GitHub.**

## Technology Stack (Non-Negotiable)

- **DKG**: OriginTrail DKG v8 + dkg.js — all data is a Knowledge Asset
- **Identity**: Polkadot Proof of Personhood (PoP) Level 1 + Level 2 — wallet must be abstracted for end users
- **AI Inference**: NeuroWeb — connects agents to DKG (spike required in Phase 1)
- **Fraud Detection**: Umanitek.ai Guardian
- **Research**: SciGraph / Semantic Scholar fallback
- **Governance**: DAO (Snapshot + Safe multisig for v1, OpenGov v2)
- **Funding Pools**: USDC, USDT, BTC, ETH, DOT on Base L2

## Legal Gates (Must Not Skip)

These are hard blockers — do not design or build the gated features until the review is complete:

- **Before Phase 2**: Anti-Kickback Statute (AKS) attorney review for token incentive mechanism
- **Before Phase 2/3**: 42 CFR Part 2 + healthcare privacy review for review verification flow
- **Before Phase 4**: FinCEN/BSA attorney review for crypto disbursement structure (FUND-04)
- **Before Phase 5**: Meta app review approval for health/substance abuse use case

## Key Design Decisions

- Reviews are **authenticated-anonymous**: identity verified platform-side, zero PII in public layer
- Facilities **cannot pay to rank** or suppress reviews — transparency score is merit-based
- **SAMHSA N-SSATS data** (~17,000 US facilities) must be imported as DKG baseline before public launch
- AI agents must have **crisis escalation** built and validated before any public deployment
- **Telegram first** for AI agent deployment (most permissive API), Meta second, TikTok/Snapchat stretch
