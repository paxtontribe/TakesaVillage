# Phase 0: Fundraising Package - Context

**Gathered:** 2026-03-29
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 0 delivers a live website, social media presence, and fundraising materials that demonstrate the Takes a Village vision, capture early interest (waitlist signups), and provide a polished package for grant applications and investor pitches. This is a pre-funding phase — no heavy technical infrastructure, no blockchain integration, no backend services beyond what's needed for a waitlist.

The creator is non-technical. All deliverables must be maintainable by a non-technical founder with minimal cost.

</domain>

<decisions>
## Implementation Decisions

### Website
- **D-01:** Build with Next.js on Vercel free tier — real code in the repo, professional to technical reviewers, zero hosting cost
- **D-02:** Tone is warm + empowering — "You deserve better information." Human-centered, hopeful, not clinical or preachy
- **D-03:** Include a dedicated "For Funders/Partners" section — problem, solution, architecture overview, team, how to get involved
- **D-04:** Waitlist captures email only — lowest friction, works with free tools (Mailchimp/Resend)
- **D-05:** No domain registered yet — need to grab takesavillage.org or similar (~$10-15/year) before launch
- **D-06:** Brand identity created from scratch — clean, professional design using Tailwind + shadcn/ui defaults. No existing logo/colors/fonts
- **D-07:** Site sections: Hero (mission + waitlist CTA), Problem (why the system is broken), Solution (what TaV does differently), How It Works (high-level architecture for non-technical audience), For Funders/Partners, Footer with social links

### Social Media
- **D-08:** Launch on all four platforms simultaneously: Instagram, TikTok, X (Twitter), LinkedIn
- **D-09:** Instagram + TikTok for awareness and reaching families/advocates/younger demographic
- **D-10:** X (Twitter) for Web3/crypto community, OriginTrail/Polkadot ecosystem, tech funders
- **D-11:** LinkedIn for nonprofit funders, healthcare industry contacts, institutional partners
- **D-12:** Social accounts link back to website waitlist as primary CTA

### Fundraising Strategy
- **D-13:** Pursuing both grants and investment — cast a wide net
- **D-14:** Grant targets include: SAMHSA grants, tech-for-good foundations, Web3 ecosystem grants (OriginTrail ecosystem, Polkadot treasury proposals)
- **D-15:** Investment targets include: angel investors, seed funds focused on health tech or Web3
- **D-16:** Pitch materials backed by existing research corpus (STACK.md, FEATURES.md, ARCHITECTURE.md, PITFALLS.md, SUMMARY.md) — these demonstrate technical depth and market understanding

### Claude's Discretion
- Page layout, component design, animation choices
- Social media content calendar structure
- Email service provider selection (Mailchimp vs Resend vs alternatives)
- SEO and meta tag strategy

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Context
- `.planning/PROJECT.md` — Full project definition, requirements, constraints, key decisions
- `.planning/REQUIREMENTS.md` — All 42 v1 requirements with traceability
- `.planning/ROADMAP.md` — Phase structure and dependency chain

### Research (pitch material source)
- `.planning/research/SUMMARY.md` — Executive summary of all research findings
- `.planning/research/FEATURES.md` — Competitor analysis, anti-features, differentiators
- `.planning/research/ARCHITECTURE.md` — System architecture and component design
- `.planning/research/STACK.md` — Technology stack decisions and rationale
- `.planning/research/PITFALLS.md` — Legal gates, risk analysis, compliance requirements

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — greenfield project, no code exists yet

### Established Patterns
- None — this phase establishes the codebase

### Integration Points
- Vercel deployment from GitHub repo (paxtontribe/TakesaVillage)
- Email service for waitlist (TBD — Mailchimp free tier or Resend)

</code_context>

<specifics>
## Specific Ideas

- Website must work as a standalone pitch piece — if a funder lands on it cold, they should understand what TaV is and want to learn more
- The "For Funders" section should surface the technical depth (architecture, legal awareness, requirement coverage) without overwhelming non-technical visitors
- Social media should emphasize the *problem* (broken treatment system, predatory practices, lack of transparency) as much as the solution
- Waitlist signup count is a key traction metric for fundraising conversations

</specifics>

<deferred>
## Deferred Ideas

### Phase 1 Technical Decisions (captured, waiting for funding)
The following decisions were made during this session and apply to the technical Phase 1 build:

**Wallet Abstraction:**
- Custodial wallet, platform manages keys server-side
- Email + SMS verification for signup
- PoP Level 1 immediate at signup, Level 2 gated behind later action
- SMS backup recovery for lost email access
- Optional key export path for power users (later)
- Identity only at signup, no demographic data collection
- Under 2 minutes signup-to-first-value target
- Public browse without auth, auth required for actions (reviews, funding apps, DAO)
- Umanitek Guardian fraud check at signup + at publish
- Simple checkmark badge for verified users

**N-SSATS ETL:**
- Full dataset import (~14K-17K facilities)
- N-SSATS fields only, no enrichment in Phase 1
- One-time idempotent script, re-run manually
- PostgreSQL + JSON-LD files for intermediate storage
- All records that pass basic validation (minimum: name + address + treatment type)
- schema.org/MedicalOrganization as JSON-LD base
- Basic validation + quality flags for suspicious records
- Track and expose data freshness (SAMHSA survey year)
- Generate basic coverage stats for seeding dashboard
- Research SAMHSA data source format during phase research

**NeuroWeb Spike:**
- Timeboxed to 2-3 days
- Go criteria: can query DKG + return structured results with UAL citations, under 5 seconds
- Accept SPARQL fallback via dkg.js if no-go
- Register TaV Paranet during spike
- DKG gateway node deployment is separate task (not part of spike)
- Formal ADR as output format
- No direct OriginTrail/NeuroWeb contacts — rely on public docs + community
- Meta app review submission runs in parallel, not bundled with spike

**Project Scaffolding:**
- pnpm workspaces
- apps/ + packages/ monorepo structure
- dev + staging + prod environments
- Standard CI checks + JSON-LD schema validation
- Node 20 LTS via .nvmrc
- Vitest for testing
- Tailwind + shadcn/ui initialized
- ESLint + Prettier with strict TypeScript
- No Docker in Phase 1

</deferred>

---

*Phase: 00-fundraising-package*
*Context gathered: 2026-03-29*
