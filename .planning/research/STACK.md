# Technology Stack

**Project:** Takes a Village
**Researched:** 2026-03-28
**Research mode:** Ecosystem (Greenfield stack selection)
**Confidence note:** WebSearch and WebFetch were unavailable during this research session. All findings are from training data (cutoff August 2025). Version numbers marked [VERIFY] must be confirmed against official docs before use.

---

## Recommended Stack

### Core Framework: Web Frontend

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js | 15.x [VERIFY] | Web app framework | App Router with React Server Components enables fast server-side rendering for SEO on public facility pages; edge functions for low-latency API routes; strong accessibility ecosystem; TypeScript-first. Crisis users on slow connections need fast page loads. |
| TypeScript | 5.x | Language | Type safety across DKG schema, smart contract ABIs, and API payloads. Errors at compile time, not at 3am for a user in crisis. |
| React | 19.x [VERIFY] | UI component model | Ships with Next.js 15; concurrent rendering for smooth facility search UX. |
| Tailwind CSS | 4.x [VERIFY] | Styling | Utility-first; pairs with shadcn/ui component library; accessible defaults; no runtime CSS-in-JS overhead. |
| shadcn/ui | latest | Component library | Radix UI primitives under the hood (accessibility built in); unstyled base means full design control; copy-paste components avoid bundle bloat. |

**Why Next.js over alternatives:**
- Remix: Good but smaller ecosystem; less mature server component story as of 2025.
- Vite + React SPA: No SSR by default — facility profiles need to be crawlable and load fast on first visit.
- SvelteKit: Smaller talent pool; less web3 library support.

### OriginTrail DKG Layer

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| dkg.js (OriginTrail DKG JS Client) | v8.x [VERIFY] | Create, read, update knowledge assets on DKG | Official SDK from Trace Labs; supports v8 DKG node API; handles asset creation, querying via SPARQL, and paranet interactions. |
| OriginTrail DKG v8 Node | v8.x [VERIFY] | DKG node (gateway) | Each major integration needs a gateway node. For production: run own node or use a hosted gateway. |
| SPARQL | W3C standard | Querying DKG knowledge assets | DKG is an RDF-based knowledge graph; SPARQL is the native query language. Used to query facility profiles, research papers, outcome data. |
| JSON-LD / W3C VC | W3C standards | Knowledge Asset format | All knowledge assets must be W3C-compliant JSON-LD. Verifiable Credentials for facility certifications and individual treatment outcomes. |
| GS1 EPCIS | v2.0 | Supply chain events | OriginTrail SCAN model uses GS1 EPCIS for provenance events — applies to facility licensing history, staff credential events, and funding disbursement events. |

**Integration pattern:**
```
Next.js API Route (server-side)
  → dkg.js client
    → DKG Gateway Node (OriginTrail v8)
      → NeuroWebchain / PolkaDOT
```

All DKG writes happen server-side (API routes) — never expose private keys to the browser.

**DKG knowledge asset structure (facility profile):**
```json
{
  "@context": "https://schema.org/",
  "@type": "MedicalOrganization",
  "name": "Facility Name",
  "medicalSpecialty": ["Addiction Medicine"],
  "accreditation": { ... },
  "identifier": { "@type": "PropertyValue", "name": "SAMHSA ID", "value": "..." }
}
```

**Why not a custom graph database:** The DKG is non-negotiable per project requirements. However, a local PostgreSQL cache of frequently queried data (facility names, locations) will be needed for search performance — SPARQL queries on the full DKG are too slow for real-time search.

### NeuroWeb / AI Inference Layer

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| NeuroWeb Parachain | current [VERIFY] | AI inference connected to DKG knowledge assets | NeuroWeb is OriginTrail's dedicated AI + knowledge graph parachain on Polkadot. Enables AI agents to query DKG assets as grounded knowledge, reducing hallucination. |
| NeuroWeb AI Agent SDK | latest [VERIFY] | Deploy AI agents that read DKG | Official tooling for building agents whose answers are sourced from verified knowledge assets. |
| OpenAI API (GPT-4o) or Anthropic API (Claude 3.5+) | current | LLM backbone for agents | Use for natural language generation. NeuroWeb grounds the retrieval; the LLM generates the response. Specific choice TBD based on rate limits and cost — recommend Anthropic Claude for HIPAA-adjacent use (Anthropic has enterprise BAA options). |
| LangChain.js or LlamaIndex.TS | latest [VERIFY] | Agent orchestration | Provides tool-use, memory, and RAG pipeline plumbing. Connect NeuroWeb DKG retrieval as a tool within a LangChain agent. LangChain.js recommended for JS/TS monorepo consistency. |

**NeuroWeb integration pattern (AI agent to DKG):**
```
User query (social platform)
  → NeuroWeb AI Agent
    → DKG SPARQL query via dkg.js (retrieve relevant knowledge assets)
    → LLM generates grounded response citing knowledge asset UALs
  → Response posted to social platform
```

**Confidence note (LOW):** NeuroWeb's specific SDK API surface, versioning, and parachain deployment process require verification against current NeuroWeb docs (https://docs.neuroweb.ai). The integration pattern above is inferred from OriginTrail's published architecture descriptions as of mid-2025.

### Polkadot Identity Layer

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Polkadot.js API | 10.x [VERIFY] | Connect to Polkadot relay chain and parachains | Standard Polkadot JavaScript API; used for reading PoP credential state, signing transactions, querying on-chain identity. |
| @polkadot/extension-dapp | latest [VERIFY] | Browser wallet connection | Enables users to connect Polkadot wallet (Talisman, SubWallet, Polkadot.js extension) to the web app for PoP authentication. |
| Polkadot Proof of Personhood (PoP) Pallet | current [VERIFY] | Sybil-resistant, anonymous authentication | PoP on Polkadot provides two levels: Level 1 (basic uniqueness) and Level 2 (enhanced verification). Credential is on-chain; identity remains pseudonymous. Used for review authentication and DAO voting eligibility. |
| Talisman Wallet | latest | Recommended user wallet | Best UX for PoP credential management on Polkadot ecosystem; supports NeuroWeb parachain assets. Also supports Ethereum-compatible chains for multi-chain funding pools. |
| KILT Protocol (optional) | latest [VERIFY] | Verifiable credentials layer | KILT is a Polkadot parachain purpose-built for DIDs and VCs. Can issue facility credential attestations on-chain. Consider for facility licensing VCs if PoP alone is insufficient for facility identity. |

**Anonymous-but-authenticated review pattern:**
```
User connects wallet → PoP credential verified on-chain
  → Backend issues short-lived JWT tied to anonymized PoP credential hash
  → Review stored linked to credential hash (not wallet address)
  → Public display: no wallet address, no name; only verified=true badge
```

This pattern requires the backend to hold the mapping between credential hash and review — never exposed publicly.

**Confidence note (MEDIUM):** Polkadot PoP was in active development through 2025 on the People Chain parachain. The specific pallet name, extrinsic signatures, and Level 1/Level 2 credential schema must be verified against current Polkadot docs before implementation.

### Fraud Detection

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Umanitek.ai Guardian | current [VERIFY] | Detect fake reviews, fake facilities, Sybil attacks | Umanitek specializes in Web3 identity fraud. Guardian analyzes behavioral patterns, wallet histories, and on-chain signals to flag suspicious activity. Non-negotiable per project requirements. |

**Integration pattern:**
```
Before publishing review to DKG:
  → POST to Guardian API with: anonymized credential hash, review content, behavioral signals
  → Guardian returns: fraud_score (0-1), flags[]
  → If fraud_score > threshold: hold for manual review
  → If passes: publish to DKG
```

**Confidence note (LOW):** Umanitek Guardian's specific API shape, authentication method, and pricing are not in my training data with high confidence. Their site (umanitek.ai) must be consulted before integration planning.

### DAO Governance Layer

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| OpenGov (Polkadot native governance) | current | On-chain governance | Polkadot's OpenGov pallet provides referendum-based governance natively. Most aligned with the project since the stack is already Polkadot-based. Proposals, voting, and delegation happen on the same chain as identity and DKG. |
| Substrate Governance Pallet | current [VERIFY] | If deploying custom parachain | If Takes a Village eventually deploys its own parachain (future phase), Substrate's governance pallet can be customized. Overkill for v1. |
| Snapshot (off-chain signaling) | latest | Low-friction voting UI | Snapshot allows gasless off-chain votes signed with wallets. Use for non-binding community signaling in early phases before full on-chain DAO is live. Bridge to on-chain execution via Safe + multisig. |
| Safe (Gnosis Safe) | latest [VERIFY] | DAO treasury multisig | The DAO treasury holding USDC/USDT/ETH should live in a Safe multisig with guardian signers elected by DAO vote. Standard for nonprofit/DAO treasury management. |

**Why not Aragon or DAOhaus:** Both are EVM-native and add complexity bridging to Polkadot governance. Start with Polkadot OpenGov + Snapshot for signaling + Safe for treasury. Add Aragon only if EVM execution is the primary governance environment (not the case here).

**Why not a purely on-chain DAO from day one:** Polkadot OpenGov requires token holders, and token distribution takes time. In Phase 1, use Snapshot with a foundation multisig override. Progressively decentralize as token distribution matures.

### Crypto Funding Pools

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Solidity (EVM) + Hardhat | Solidity ^0.8.24 [VERIFY] | Smart contracts for USDC/USDT/ETH pools | USDC and USDT (ERC-20) live natively on EVM chains. Write smart contracts for: pool deposits, eligibility gating (PoP credential check via oracle), disbursement. |
| Polkadot Asset Hub | current | DOT funding pools | DOT transfers and asset management on Polkadot's Asset Hub parachain. DOT pool disbursements happen here, not on EVM. |
| Chainlink CCIP or Wormhole | latest [VERIFY] | Cross-chain bridging | Moving funds between EVM chains (USDC on Ethereum/Base) and Polkadot Asset Hub requires a bridge. Chainlink CCIP preferred for USDC given Circle's CCTP integration. |
| Circle CCTP (Cross-Chain Transfer Protocol) | v2 [VERIFY] | Native USDC bridging | Circle's official USDC bridge — more trust-minimized than third-party bridges for stablecoin transfers. |
| Base (L2) or Polygon | current | EVM execution layer for contracts | Deploy funding pool contracts on Base (Coinbase L2) for low gas costs and regulatory clarity in US market. Not on Ethereum mainnet — gas is too expensive for small treatment funding disbursements. |
| BTC on-ramp | N/A | Accept BTC donations | BTC does not support smart contracts natively. Accept via BTC → Lightning → stablecoin conversion (Strike/River API) or custodial receipt with immediate conversion. Do not build a BTC smart contract layer. |

**Funding pool disbursement flow:**
```
Donor sends USDC to pool contract on Base
  → Contract holds funds
  → DAO votes on recipient eligibility criteria
  → User with verified PoP credential applies
  → Umanitek Guardian fraud check passes
  → DAO vote or automated criteria check triggers disbursement
  → USDC sent to user-controlled wallet
```

**Why Base over Polygon:** Base has better USDC liquidity, Coinbase integration for US users, and clearer US regulatory standing. Polygon is fine but Base is the preferred EVM chain for US-facing nonprofit/payments use cases in 2025-2026.

### Social Platform AI Agent Deployment

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Meta Developer API | current [VERIFY] | Facebook + Instagram Messenger bots | Official API for deploying chatbots to Facebook Messenger and Instagram DMs. Requires Meta Business verification. |
| TikTok for Developers (TikTok API) | current [VERIFY] | TikTok chatbot / comment AI | TikTok's developer platform is more limited than Meta's for bot deployment. Direct messaging bots require TikTok for Business API access. Limited automation capability — verify current policy before building. |
| Telegram Bot API | current | Telegram bot deployment | Telegram has the most developer-friendly bot API. Deploy via BotFather; long-polling or webhook. Most mature bot ecosystem. |
| YouTube Data API v3 | current | YouTube comment monitoring | Can read comments and post responses. Not a real-time chat; agents monitor for keywords and respond to comments. |
| Snapchat Snapkit (Bitmoji/Story Kit) | current [VERIFY] | Snapchat integration | Snapchat's developer capabilities for chatbot-style interactions are limited compared to Meta/Telegram. May only support story integrations, not DM bots. Requires verification of current capabilities. |
| Node.js worker services | 20.x LTS | Agent runtime | Each social platform agent runs as a separate Node.js service (worker). Common DKG query layer shared via internal API. Do not run agents in Next.js — separate deployment. |
| Bull (BullMQ) | 5.x [VERIFY] | Message queue for agent tasks | Redis-backed queue for handling social platform message processing at scale. Prevents rate limit breaches. |
| Redis | 7.x | Queue backend + response caching | BullMQ queue store; also cache frequent DKG query results for agent response speed. |

**Agent architecture:**
```
Social Platform Webhook
  → Platform-specific adapter (Node.js worker)
    → Shared message classifier (is this a substance abuse help request?)
    → If yes: DKG query via dkg.js (retrieve relevant facility data)
              LLM generates response (Claude/GPT-4o)
              Response sent back via platform API
    → If no: Default response or ignore
```

**Platform deployment risk flags:**
- TikTok: US regulatory uncertainty (ban risk); build but do not over-invest.
- Snapchat: Bot API capabilities are not well-documented; treat as low-confidence until verified.
- YouTube: Comment-response bots may violate ToS if not carefully scoped — verify policy.

### Backend API Layer

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js API Routes (or tRPC) | 15.x | Primary API layer | For simple request/response, Next.js API routes are sufficient. For type-safe end-to-end API (frontend + backend in same TS project), add tRPC. Recommend tRPC for this project given complexity of shared types between DKG schema and UI. |
| tRPC | 11.x [VERIFY] | Type-safe API between Next.js frontend and backend | Eliminates REST endpoint drift; TypeScript types shared end-to-end. Especially valuable for DKG knowledge asset types. |
| Prisma | 5.x [VERIFY] | ORM for PostgreSQL | Manages the local PostgreSQL cache of facility metadata, user sessions, review staging, and fraud check state. Not the source of truth — DKG is — but needed for query performance. |
| PostgreSQL | 16.x | Relational database | Cache of DKG data, user session state, review staging, application data that doesn't need to be on-chain. Hosted on Railway or Supabase. |
| Supabase | current | PostgreSQL host + auth utilities | Managed PostgreSQL + Row Level Security; also provides Realtime (for live facility availability updates). Auth utilities NOT used — Polkadot PoP replaces email/password auth. |
| NextAuth.js (Auth.js) | 5.x [VERIFY] | Session management post-PoP | After PoP credential verification, issue a server-side session. Auth.js v5 supports custom credential providers — use to wrap the PoP verification flow. Do NOT use email/password providers. |

### SciGraph Research Integration

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| SciGraph API | current [VERIFY] | Retrieve peer-reviewed research on substance use disorders | SciGraph (Springer Nature) provides structured access to scientific literature as a knowledge graph. Query for substance-specific treatment research to surface alongside facility profiles. |
| PubMed E-utilities API | current | Supplement SciGraph with MEDLINE data | Free NCBI API for PubMed research. Broader coverage than SciGraph alone; SciGraph has richer graph structure. Use both. |

**Confidence note (MEDIUM):** SciGraph from Springer Nature was deprecated in its original form. Verify whether the project is referring to the Springer Nature SciGraph graph API or another service. PubMed E-utilities remain active and reliable. If SciGraph is unavailable, semantic scholar API (Semantic Scholar from Allen AI) is a strong alternative with free API access and graph-structured data.

### Infrastructure & DevOps

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Vercel | current | Next.js hosting | First-class Next.js support; edge functions in 90+ regions for fast global load; one-click preview deployments. Free tier for nonprofit MVP. |
| Railway | current | PostgreSQL + Node.js worker hosting | Simple deployment for the agent worker services and PostgreSQL. Better than AWS for a small team — no IAM complexity. |
| Docker | 25.x [VERIFY] | Containerize DKG gateway node + workers | DKG gateway node and social platform agent workers run in Docker containers. Railway and Fly.io both support Docker-based deployment. |
| Fly.io | current | DKG gateway node hosting | Better for long-running persistent nodes than Vercel (which is serverless). Deploy DKG gateway node on Fly.io. |
| Cloudflare | current | CDN + DDoS protection | Crisis platform must be available 24/7. Cloudflare in front of Vercel for DDoS mitigation and edge caching. |
| GitHub Actions | current | CI/CD | Automated tests, type checks, and deployments on merge to main. Standard choice. |
| Sentry | current | Error monitoring | Catch frontend and backend errors before users in crisis encounter them. |

---

## What NOT to Use and Why

| Category | Avoid | Why |
|----------|-------|-----|
| Auth | Email/password, OAuth social login | Project constraint: Polkadot PoP is the only auth method. Social login breaks anonymous-but-authenticated model. |
| Database (primary) | MongoDB, DynamoDB | PostgreSQL with JSON columns handles the semi-structured data well. Not worth the operational overhead of NoSQL for this use case. |
| Smart contracts | Ethereum mainnet for small disbursements | Gas costs make small treatment fund disbursements ($500–$5k) impractical on L1. Use Base L2. |
| Blockchain | Custom chain, Ethereum-only | Project constraint: OriginTrail DKG + Polkadot. No alternatives in v1. |
| Frontend framework | Angular, Vue | React/Next.js has strongest Web3 library ecosystem (wagmi, polkadot.js). Angular has no meaningful web3 tooling. |
| Smart contract language | Vyper | Solidity has far larger audit tooling ecosystem. Vyper fine for experts; Solidity better for a team that may hire contractors. |
| DAO tooling | Aragon, Colony | Both EVM-native; add bridge complexity to Polkadot governance. Polkadot OpenGov + Snapshot is cleaner for this stack. |
| BTC smart contracts | Rootstock (RSK), Stacks | Unnecessary complexity. Accept BTC as donation-input, convert immediately. Don't build BTC contract layer. |
| AI agent hosting | AWS Lambda alone | Cold starts cause unacceptable response latency for social platform bots. Use persistent Node.js workers on Railway/Fly.io. |
| CSS | styled-components, Emotion | Runtime CSS-in-JS adds JS bundle weight; Tailwind CSS generates static classes at build time. |

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Frontend | Next.js 15 | SvelteKit | Smaller web3 library ecosystem; polkadot.js and wagmi have better React integrations |
| Backend API | tRPC | REST (OpenAPI) | REST requires manual type synchronization; tRPC gives end-to-end types without code generation overhead |
| EVM L2 | Base | Polygon, Arbitrum | Base: better US regulatory standing, stronger USDC liquidity, Coinbase integration for US donors |
| USDC bridge | Circle CCTP | Wormhole, LayerZero | CCTP is Circle's native bridge — no third-party custodian risk on USDC |
| PostgreSQL host | Supabase | PlanetScale, Neon | Supabase adds Realtime and RLS out of box; PlanetScale dropped free tier; Neon is fine alternative |
| Agent orchestration | LangChain.js | LlamaIndex.TS | LangChain.js has broader JS/TS ecosystem adoption and more social platform tool integrations |

---

## Installation (Core Packages)

```bash
# Frontend + API
npm install next@latest react@latest react-dom@latest typescript@latest
npm install @trpc/server @trpc/client @trpc/next @tanstack/react-query
npm install next-auth@beta
npm install tailwindcss @tailwindcss/forms
npx shadcn@latest init

# Polkadot
npm install @polkadot/api @polkadot/extension-dapp @polkadot/util-crypto

# Web3 / EVM (for funding pools)
npm install wagmi viem @rainbow-me/rainbowkit

# OriginTrail DKG
npm install dkg.js  # [VERIFY: confirm package name on npm]

# Database
npm install prisma @prisma/client
npm install -D prisma

# Social agent workers
npm install bullmq ioredis telegraf  # telegraf = Telegram bot framework
npm install openai  # or @anthropic-ai/sdk

# Monitoring
npm install @sentry/nextjs
```

---

## Versions Requiring Pre-Implementation Verification

The following must be confirmed against official docs before locking in, as they are either in active development or my training data may be stale:

| Item | Where to Verify | Risk if Wrong |
|------|----------------|---------------|
| dkg.js package name and v8 API | https://docs.origintrail.io | Entire DKG integration layer |
| NeuroWeb AI Agent SDK existence + API | https://docs.neuroweb.ai | AI-to-DKG grounding architecture |
| Polkadot PoP pallet name + credential schema | https://docs.polkadot.network | Entire auth system |
| Umanitek Guardian API shape | https://umanitek.ai | Fraud detection integration |
| SciGraph availability | Springer Nature SciGraph docs | Research data source |
| TikTok bot/DM API capability | https://developers.tiktok.com | Platform agent scope |
| Snapchat bot API capability | https://kit.snapchat.com | Platform agent scope |
| Circle CCTP v2 on Base | https://developers.circle.com | USDC bridge for funding pools |
| Auth.js v5 custom PoP provider | https://authjs.dev | Session management architecture |
| Next.js 15 + React 19 stability | https://nextjs.org/docs | Core frontend framework |

---

## Sources

All findings from training data (knowledge cutoff August 2025). No external verification was possible in this session due to tool restrictions.

**Known authoritative sources to consult during implementation:**
- OriginTrail DKG docs: https://docs.origintrail.io
- NeuroWeb docs: https://docs.neuroweb.ai
- Polkadot developer docs: https://docs.polkadot.network
- Polkadot People Chain (PoP): https://wiki.polkadot.network/docs/learn-identity
- Umanitek Guardian: https://umanitek.ai
- Circle CCTP: https://developers.circle.com/stablecoins/cctp
- LangChain.js: https://js.langchain.com/docs
- Auth.js (NextAuth v5): https://authjs.dev
- SciGraph: https://scigraph.springernature.com
- Base L2: https://docs.base.org
- Wagmi + viem: https://wagmi.sh
