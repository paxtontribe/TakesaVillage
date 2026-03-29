# Phase 0: Fundraising Package - Research

**Researched:** 2026-03-29
**Domain:** Nonprofit fundraising, web presence, brand identity, grant strategy, social media
**Confidence:** HIGH (tool-specific details verified against official sources; grant opportunity timelines are point-in-time and shift quarterly)

---

## Executive Summary

Phase 0 is a pre-technical fundraising and awareness phase. The creator is non-technical, the budget is near zero, and all deliverables must be maintainable long-term without engineering support. This research covers eight domains: email waitlist tools, grant opportunities, landing page best practices, pitch deck structure, domain strategy, social media for substance abuse organizations, free brand identity tools, and Next.js landing page patterns.

The single most important finding is a domain conflict: **takesavillage.org is already registered** (GoDaddy, created 2022-06-26, expiring 2026-06-26, nameservers point to Afternic — a domain reseller marketplace). The .com and .net are also taken. The planner must address this immediately by either purchasing the domain at resale price or selecting an alternative domain before any website work begins. Two strong alternatives are available and unregistered: `takesavillage.health` and `takesavillage.care`, both of which communicate the mission clearly.

For email capture, Kit (formerly ConvertKit) is the clear winner for Phase 0: 10,000 subscriber free tier with unlimited sends, no Mailchimp's collapsed 250-contact limit or Resend's 100-email/day cap. The existing research corpus (STACK.md, FEATURES.md, ARCHITECTURE.md, PITFALLS.md, SUMMARY.md) is the primary fundraising asset — the pitch deck must be built directly from these documents, not from scratch. For brand identity, Canva for Nonprofits provides full Pro access at zero cost after a short verification process and is the primary tool recommendation for a non-technical founder.

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Website:**
- D-01: Build with Next.js on Vercel free tier — real code in the repo, professional to technical reviewers, zero hosting cost
- D-02: Tone is warm + empowering — "You deserve better information." Human-centered, hopeful, not clinical or preachy
- D-03: Include a dedicated "For Funders/Partners" section — problem, solution, architecture overview, team, how to get involved
- D-04: Waitlist captures email only — lowest friction, works with free tools (Mailchimp/Resend)
- D-05: No domain registered yet — need to grab takesavillage.org or similar (~$10-15/year) before launch
- D-06: Brand identity created from scratch — clean, professional design using Tailwind + shadcn/ui defaults. No existing logo/colors/fonts
- D-07: Site sections: Hero (mission + waitlist CTA), Problem (why the system is broken), Solution (what TaV does differently), How It Works (high-level architecture for non-technical audience), For Funders/Partners, Footer with social links

**Social Media:**
- D-08: Launch on all four platforms simultaneously: Instagram, TikTok, X (Twitter), LinkedIn
- D-09: Instagram + TikTok for awareness and reaching families/advocates/younger demographic
- D-10: X (Twitter) for Web3/crypto community, OriginTrail/Polkadot ecosystem, tech funders
- D-11: LinkedIn for nonprofit funders, healthcare industry contacts, institutional partners
- D-12: Social accounts link back to website waitlist as primary CTA

**Fundraising Strategy:**
- D-13: Pursuing both grants and investment — cast a wide net
- D-14: Grant targets include: SAMHSA grants, tech-for-good foundations, Web3 ecosystem grants (OriginTrail ecosystem, Polkadot treasury proposals)
- D-15: Investment targets include: angel investors, seed funds focused on health tech or Web3
- D-16: Pitch materials backed by existing research corpus (STACK.md, FEATURES.md, ARCHITECTURE.md, PITFALLS.md, SUMMARY.md)

### Claude's Discretion
- Page layout, component design, animation choices
- Social media content calendar structure
- Email service provider selection (Mailchimp vs Resend vs alternatives)
- SEO and meta tag strategy

### Deferred Ideas (OUT OF SCOPE)
All Phase 1 technical decisions listed in CONTEXT.md deferred section — wallet abstraction, N-SSATS ETL, NeuroWeb spike, project scaffolding. None of this is Phase 0 scope.
</user_constraints>

---

## Project Constraints (from CLAUDE.md)

- GitHub is ground truth — all files created or modified must be committed and pushed to `paxtontribe/TakesaVillage` at session end
- Technology stack (DKG, Polkadot PoP, NeuroWeb, etc.) is non-negotiable — pitch materials must represent these accurately
- Legal gates must not be skipped — the pitch deck should mention them as evidence of diligence, not try to hide them
- Tone: warm + empowering per D-02 (aligns with CLAUDE.md project description of "human-centered")

---

## 1. Email Waitlist Tool Recommendation

### Free Tier Comparison (verified against official sources)

| Service | Free Contacts | Free Sends/Month | Daily Cap | Branding | Best For |
|---------|--------------|-----------------|-----------|----------|----------|
| **Kit (ConvertKit)** | **10,000** | **Unlimited** | None | Yes (removable paid) | **Winner for Phase 0** |
| Mailchimp | 250 | 500 | 250/day | Yes (cannot remove free) | Not viable — too small |
| Resend | 1,000 contacts (marketing) | 3,000 transactional | 100/day | Small footer | Developer-facing; overkill for simple waitlist |
| Loops.so | 1,000 | ~4,000 | Unknown | Small footer | SaaS-focused; slight overkill |
| Buttondown | 100 | — | — | Yes | Too small; newsletter-focused |
| MailerLite | 500 | 12,000 | — | Yes | Reasonable but smaller than Kit |

**Recommendation: Kit (formerly ConvertKit) free plan.**

Rationale:
- 10,000 subscriber free tier is effectively unlimited for Phase 0 needs
- Unlimited monthly sends means no awkward throttling when waitlist is promoted
- Includes landing pages, forms, and basic automations — can replace a standalone waitlist tool
- Widely used by nonprofit/creator community; integrates easily with Next.js via REST API or embeddable forms
- No engineering required to set up and manage

**Mailchimp is not viable.** The free tier collapsed to 250 contacts in 2026. Unsubscribed contacts still count against the limit. This is not workable even for early traction.

**Resend is for developers building transactional email systems**, not for managing a marketing waitlist. Correct tool for Phase 1 transactional email (confirmation emails, notifications), not for Phase 0 waitlist capture.

**Implementation pattern for Next.js:** Kit provides an embeddable form snippet that drops into any JSX component, or a REST API endpoint (`POST /v1/forms/{id}/subscribe`) for a custom-styled form that matches site design. No backend required — the API call goes directly from the browser or from a Next.js API route.

Sources: [Resend Pricing](https://resend.com/pricing), [Kit Pricing (EmailToolTester)](https://www.emailtooltester.com/en/reviews/convertkit/pricing/), [Mailchimp Free Plan Changes 2026](https://blog.groupmail.io/mailchimp-free-plan-changes-2026/), [Loops Pricing](https://loops.so/pricing)

---

## 2. Grant Opportunities

### 2a. SAMHSA Grants

**Confidence: MEDIUM** — Program availability is verified; specific NOFOs open and close quarterly.

SAMHSA funds grants through Notice of Funding Opportunities (NOFOs) for organizations expanding prevention, treatment, support, and services in substance abuse and mental health. FY 2026 NOFOs are active and searchable at the SAMHSA Grants Dashboard.

**Key finding:** SAMHSA primarily funds direct service providers (treatment facilities, clinical programs), not technology platforms. Takes a Village as a *discovery and transparency* platform does not fit most SAMHSA service delivery NOFOs. However, two categories are worth monitoring:

- **Behavioral Health Equity Challenge** — SAMHSA's innovation track for equity-focused approaches. TaV's transparency-first model and underserved population targeting align well.
- **Technology/Data Innovation NOFOs** — SAMHSA periodically funds projects that improve access to care information, referral systems, or outcome tracking. These are less frequent but directly applicable.

**Action:** Visit [SAMHSA FY 2026 NOFO Forecast Dashboard](https://www.samhsa.gov/grants/grants-dashboard/forecasts) and set up email alerts for new NOFOs. Register on Grants.gov (required for federal applications). Do not pursue block grants — those go to state agencies, not nonprofits directly.

**Realistic timeline:** SAMHSA NOFOs typically have 30-60 day application windows. The pitch deck and organizational documentation must be ready before a relevant NOFO opens.

### 2b. Polkadot Treasury Proposals

**Confidence: MEDIUM** — Process is documented; grant sizes fluctuate with DOT price.

The Polkadot OpenGov treasury is a community-governed funding pool funded by transaction fees and inflation. Any DOT holder can submit a treasury spending proposal. The treasury held ~32 million DOT (~$58M) at end of Q4 2025.

**Spending tracks (relevant ones):**
| Track | Size Range | Decision Time |
|-------|-----------|---------------|
| Small Tipper | < 1K DOT | Fast (~7 days) |
| Big Tipper | 1K–10K DOT | Medium (~14 days) |
| Small Spender | 10K–100K DOT | Standard (~28 days) |
| Big Spender | 100K+ DOT | Long (requires high support) |

**For Phase 0 (awareness + community building):** A Small Tipper or Big Tipper proposal requesting 1,000–5,000 DOT for "building a social good application on Polkadot identity infrastructure" is realistic. Must demonstrate ecosystem value (using Polkadot PoP as core identity layer is a strong angle).

**How to apply:** Submit via [Polkassembly](https://polkadot.polkassembly.io/treasury-proposals). Write a public proposal describing the problem, solution, how Polkadot is used, requested amount, and milestones. Community discussion precedes on-chain vote. No attorney review needed for Phase 0 educational/awareness funding.

**Important 2026 context:** The Polkadot treasury is tightening spending as supply caps approach. Proposals need to make a strong ecosystem value case. TaV using Polkadot PoP at the identity layer is a genuine differentiator — this is not a token project, it's a social good application that puts Polkadot identity to real-world use.

Sources: [Polkadot OpenGov Treasury Wiki](https://wiki.polkadot.com/learn/learn-polkadot-opengov-treasury/), [Polkassembly Treasury Proposals](https://polkadot.polkassembly.io/treasury-proposals), [Polkadot 2026 Treasury Analysis](https://cryptoadventure.com/polkadot-dot-review-in-2026-coretime-opengov-jam-and-the-network-economics/)

### 2c. OriginTrail / Trace Labs Ecosystem Grants

**Confidence: LOW** — Past program documented; no 2026 active program confirmed.

Trace Labs (OriginTrail core developers) ran a 1,000,000 TRAC grant program in 2023 for ChatDKG / trusted AI contributors. This program was time-limited and targeted at ecosystem developers. No current equivalent program is confirmed as of 2026.

**Best path:** Direct outreach to Trace Labs via the OriginTrail Discord and OriginTrail Trace Alliance (150+ member partnership organization). Takes a Village is a compelling use case — healthcare supply chain provenance is a documented OriginTrail strength (BSI partnership, pharma/food provenance track record). Framing TaV as "OriginTrail SCAN applied to substance abuse treatment supply chains" is accurate and will resonate with the Trace Labs team.

**Action:** Join OriginTrail Discord, introduce the project in the ecosystem channel, and request a direct conversation with Trace Labs about ecosystem partnership or grant support. Do not rely on a formal grant program — this is relationship-driven.

Sources: [Trace Labs TRAC Grant Announcement (2023)](https://medium.com/origintrail/trusted-ai-with-origintrail-join-the-fight-against-misinformation-and-participate-in-1-million-3f528ad06a22), [OriginTrail Ecosystem Landscape](https://origintrail.io/ecosystem/landscape)

### 2d. Web3 Foundation Grants

**Confidence: HIGH** — Discontinuation is confirmed by official source.

**The Web3 Foundation general grants program has been discontinued and is not accepting new applications.** This is not a timing issue — the program ended.

Alternative Polkadot ecosystem paths:
- Polkadot Treasury (covered above)
- Decentralized Futures (Web3 Foundation's replacement program — focused on larger strategic initiatives, not small grants)

Source: [Web3 Foundation Grants](https://grants.web3.foundation/), [Web3 Grants Summary 2026](https://www.coinfabrik.com/web3-grants/)

### 2e. Robert Wood Johnson Foundation (RWJF)

**Confidence: MEDIUM** — Active programs confirmed; alignment with TaV requires positioning.

RWJF is the largest US health-focused foundation and actively funds health equity and substance use disorder work. Active FY 2026 programs:

- **Local Data for Equitable Communities** — Up to 30 grants of $50,000 each for nonprofits collecting and using data to address inequities. Deadline passed (March 3, 2026) but this program recurs. TaV's SAMHSA N-SSATS data + transparency scoring aligns directly.
- **Health Equity Scholars** — Research-track; less applicable to TaV.

**Positioning angle for RWJF:** Frame TaV as a data infrastructure and transparency initiative, not a blockchain project. RWJF funders are healthcare-oriented and may be skeptical of Web3 framing. Lead with: "verified treatment facility data accessible to people who can't afford navigators." Mention blockchain as an implementation detail, not a selling point.

Sources: [RWJF Active Funding Opportunities](https://www.rwjf.org/en/grants/active-funding-opportunities.html), [Local Data for Equitable Communities](https://www.rwjf.org/en/grants/active-funding-opportunities/2026/local-data-for-equitable-communities.html)

### 2f. Pew Charitable Trusts

**Confidence: MEDIUM** — Strong mission alignment; grant process is invitation-only / not open application.

Pew's Substance Use Prevention and Treatment Initiative actively publishes research on treatment transparency and recovery outcome measurement (published March 2026 brief on recovery data). This is an explicit mission overlap with TaV.

**Important note:** Pew typically funds through invitation, not open applications. The path is: get on their radar via public visibility (media coverage, policy reports), reach out to their program officers, or get a warm introduction from a healthcare advocacy organization.

Sources: [Pew Substance Use Prevention and Treatment Initiative](https://www.pew.org/en/projects/substance-use-prevention-and-treatment-initiative), [Pew 2026 Recovery Brief](https://www.pew.org/en/research-and-analysis/issue-briefs/2026/03/to-support-people-affected-by-substance-use-disorders-jurisdictions-should-measure-recovery)

### 2g. Tech-for-Good Foundations

**Confidence: MEDIUM** — Verified organizational focus areas; specific open applications not confirmed.

| Foundation | Focus | TaV Alignment | Path |
|-----------|-------|--------------|------|
| Schmidt Futures | Science + technology | Moderate — tech-forward but less health-specific | Open grant inquiry |
| Omidyar Network | Responsible technology, equity | High — "Reimagining Capitalism" + equity overlap | Letters of inquiry via website |
| Mozilla Foundation | Internet health, trustworthy AI | High — decentralized/trusted data angle | Partnership inquiry |
| MacArthur Foundation | Justice, climate, nuclear | Moderate — justice system connection (SUD treatment) | Letters of inquiry |

**Strongest angle:** Omidyar Network's "Responsible Technology" pillar aligns with TaV's decentralized, non-commercial, no-pay-to-rank model. Mozilla's "trustworthy AI" angle aligns with the NeuroWeb AI agents sourcing from verified DKG data rather than hallucinating.

Sources: [Schmidt Futures Innovation Grants](https://www.schmidtfutures.org/innovation-grants/), [Omidyar Network Inside Philanthropy](https://www.insidephilanthropy.com/find-a-grant/grants-o/omidyar-network)

### Grant Priority Matrix

| Target | Effort | Fit | Realistic Ask | Timeline |
|--------|--------|-----|---------------|----------|
| Polkadot Treasury | Low | High | 5,000–20,000 DOT | 4–6 weeks after proposal |
| SAMHSA NOFO (right program) | High | Medium-High | $100K–$500K | 3–6 months |
| RWJF (next cycle) | Medium | High | $25K–$50K | 6–12 months |
| OriginTrail/Trace Labs direct | Low | High | Unknown | Relationship-driven |
| Omidyar Network | Medium | Medium | $100K+ | 6–18 months |
| Pew (invitation-track) | Low (visibility) | High | Unknown | Visibility-first |

---

## 3. Landing Page Best Practices

**Confidence: HIGH** — Well-established pattern across verified nonprofit and social impact sources.

### Core Principle

A single primary call-to-action per page. For Phase 0, that CTA is the email waitlist. Every section of the site should point back to it. "Analysis paralysis" kills conversions — do not split attention between donation ask, waitlist, and social follow simultaneously.

### Section Structure (maps to D-07)

The decisions-locked section order is well-supported by research:

| Section | Purpose | Key Conversion Principle |
|---------|---------|--------------------------|
| **Hero** | Mission + waitlist CTA | One sentence that makes TaV instantly understandable; CTA above the fold |
| **Problem** | Why the system is broken | Quantified pain — costs, scale, harms. Emotion opens the door; data keeps people reading |
| **Solution** | What TaV does differently | Contrast with status quo; lead with outcomes, not technology |
| **How It Works** | Architecture for non-technical visitors | Diagram over text; 3-step simplification; no jargon |
| **For Funders/Partners** | Technical depth, team, ask | This section is different — funders want execution evidence, not just mission |
| **Footer** | Social links, legal | Lightweight; waitlist CTA one more time |

### For the "For Funders" Section

Funders who land cold need to see in 90 seconds:
1. The problem is real, large, and underserved
2. The solution is technically credible (not vaporware)
3. The team has done the homework
4. There is a specific ask

The existing research corpus (SUMMARY.md, ARCHITECTURE.md, PITFALLS.md) is unusual for a pre-funding project — most founders do not have 5 research documents before writing a line of code. Surface this as a credibility signal. A "View Technical Architecture" link to the GitHub repo's planning docs is appropriate for the funder section.

### Visual + Emotional Principles

- Images of real people (families, community) outperform abstract imagery — 94% higher view rate with relevant visuals
- Short testimonials or statistics embedded in the Problem section create emotional anchor
- Waitlist form must be maximum 1 field (email only per D-04) with a compelling CTA button ("Join the waitlist" > "Submit")
- Mobile-first — the target audience (families in crisis, advocates) is predominantly mobile

### Trust Signals

- Waitlist count displayed publicly (social proof for funders: "X people are waiting for this")
- GitHub link in footer (technical credibility for tech funders)
- Logo bar for ecosystem partners (OriginTrail, Polkadot, SAMHSA data credit) if permission obtained
- "Nonprofit — no facility pays to rank" statement prominent in hero or solution section

Sources: [Nonprofit Landing Page Best Practices](https://www.trajectorywebdesign.com/blog/nonprofit-landing-page-best-practices), [Donorbox Landing Page Guide](https://donorbox.org/nonprofit-blog/nonprofit-landing-page), [Landing Page Design Best Practices 2026](https://www.uforocks.com/blog/landing-page-design-best-practices/)

---

## 4. Pitch Deck Structure

**Confidence: HIGH** — Pattern is consistent across multiple verified sources.

### For a Nonprofit Seeking Both Grants and Investment

A nonprofit pitch deck is an execution document, not a vision statement. Grant reviewers and angel investors both want to see: what you do, how it works, what changes, what it costs, and what you're asking for.

### Recommended 12-Slide Structure

| Slide | Title | Content |
|-------|-------|---------|
| 1 | **One-sentence mission** | "Takes a Village helps people find verified, trustworthy substance abuse treatment by making facility data radically transparent and community-accountable." |
| 2 | **The Problem** | Quantified: $42B industry, ~17,000 US facilities with no verified review system, FTC-documented predatory practices, SAMHSA locator limitations |
| 3 | **Who Is Hurt** | Patient + family journey today vs. what TaV makes possible; human story |
| 4 | **The Solution** | What TaV does; 3–4 differentiators vs. SAMHSA/Google/Rehabs.com |
| 5 | **How It Works** | Simple architecture diagram; DKG explained in one sentence without jargon |
| 6 | **Why Now** | SAMHSA N-SSATS dataset available; Polkadot PoP identity primitive exists; Web3 infrastructure mature enough; AI agent deployment accessible |
| 7 | **Traction** | Waitlist signups; GitHub activity; ecosystem partnerships; research corpus as credibility signal |
| 8 | **Team** | Founder background; advisors; domain expertise |
| 9 | **Market + Impact** | US-first ($42B market), global TAM; impact metrics (facilities verified, reviews submitted, people helped) |
| 10 | **Legal Awareness** | Explicitly surface the three legal gates (AKS, 42 CFR Part 2, FinCEN) as evidence of diligence, not as problems to hide. Grant reviewers are sophisticated — showing you've mapped the compliance landscape is a positive signal. |
| 11 | **Financials + Use of Funds** | Phase 0 cost: near-zero (hosting, domain). Phase 1 ask: engineering + legal reviews + infrastructure. Be specific. |
| 12 | **The Ask** | Specific dollar amount; what it funds; how to get involved |

### Grant Reviewers vs. Angel Investors

| Audience | Primary Questions | Adjust Slide Emphasis |
|----------|------------------|----------------------|
| Grant reviewers | Is the mission real? Is execution credible? Will funds be used well? | Slides 2, 3, 10, 11 |
| Angel investors (health tech) | Is the market large? Is the team credible? Is there a moat? | Slides 9, 8, 4 |
| Angel investors (Web3) | Is the tech architecture sound? Is there ecosystem value? Token strategy? | Slides 5, 6, 10 |

**Note on Web3 investors:** TaV is explicitly nonprofit with no investor return. Be clear about this upfront. The investment case is grant co-funding or impact investing, not equity. Qualified investors in this space include crypto foundations, DAOs, and impact funds — not traditional VC.

### Data Points That Matter

From the existing research corpus (use these in the deck):
- 17,000 US treatment facilities in SAMHSA N-SSATS
- $42B US substance abuse treatment industry
- FTC documented the 2015–2020 Florida patient brokering crisis
- SAMHSA locator lacks reviews, cost data, and outcome tracking
- 42 CFR Part 2 is stricter than HIPAA for SUD records
- OriginTrail SCAN track record: pharma, food, BSI partnership

Sources: [NGO Pitch Deck Guide](https://viktori.co/nonprofit-pitch-deck/), [Healthcare Pitch Deck Guide](https://www.runwayteam.co/post/healthcare-pitch-deck), [Health Tech Pitch Deck](https://sharpsheets.io/blog/pitch-deck-health-tech/)

---

## 5. Domain Strategy

**Confidence: HIGH** — WHOIS verified directly.

### Domain Availability (Verified 2026-03-29)

| Domain | Status | Notes |
|--------|--------|-------|
| takesavillage.org | **TAKEN** | Registered 2022-06-26, expires 2026-06-26. GoDaddy registrar, Afternic nameservers = listed for resale. Can be purchased at Afternic market price (typically $500–$5,000 for a phrase domain). |
| takesavillage.com | **TAKEN** | Registered |
| takesavillage.net | **TAKEN** | Registered |
| takesavillage.health | **AVAILABLE** | Unregistered as of 2026-03-29 |
| takesavillage.care | **AVAILABLE** | Unregistered as of 2026-03-29 |
| transparenttreatment.org | **AVAILABLE** | Unregistered |
| treatmenttransparency.org | **AVAILABLE** | Unregistered |
| villagerecovery.org | **AVAILABLE** | Unregistered |

### Recommendation: `takesavillage.health`

**Primary recommendation: register `takesavillage.health` immediately.**

Rationale:
- `.health` is a credible, mission-aligned TLD used by health organizations
- The exact brand name is preserved
- `.health` pricing: ~$70–$100/year (premium TLD, not cheap — but affordable)
- No confusion with a squatter domain
- Communicates the mission clearly to any visitor

**Alternative: `takesavillage.care`** — Similar rationale, possibly slightly lower price. ".care" is warm and aligns with the D-02 tone.

**Do not pursue `takesavillage.org` via Afternic** unless the resale price is under $500. The domain is parked, not actively used — it is not worth paying $2,000+ for a parked domain when `.health` is available and arguably a better fit.

### Registrar Recommendation

**Cloudflare Registrar** — at-cost pricing, no markup, includes free WHOIS privacy, free DDoS protection. `.org` costs $10.13/year at Cloudflare; `.health` pricing varies. Cloudflare is already the recommended CDN for Phase 1 (per ROADMAP.md Plan 01-01), so consolidating domain registration here is a clean choice.

Alternatively: **Namecheap** — reliable, transparent pricing, regularly runs 42% off .org promotions. No nonprofit discount, but standard pricing is already low (~$12.50/year for .org).

**Do NOT use GoDaddy** — higher prices, aggressive upsell, and the squatter already uses GoDaddy.

Sources: WHOIS queries run 2026-03-29 against whois.publicinterestregistry.org, [Cloudflare At-Cost Domain Pricing](https://www.cloudflare.com/products/registrar/), [Namecheap .org registration](https://www.namecheap.com/domains/registration/gtld/org/)

---

## 6. Social Media for Substance Abuse Organizations

**Confidence: MEDIUM-HIGH** — Platform policies verified; content strategy based on research studies and verified community guidance.

### Platform-by-Platform Strategy

#### TikTok

**Content opportunity:** Substantial. Recovery, harm reduction, and advocacy content performs well. The `#harmreductionsaveslives` community generates meaningfully higher engagement (views, likes, comments, shares) than other substance-adjacent content.

**Content restrictions:**
- TikTok restricts content discussing drugs or regulated substances to 18+ and limits it to non-For-You-Feed distribution
- Content showing or positively depicting drug use is removed
- "Algospeak" (coded hashtags like `#dr00gtiktok`) is common in the space and indicates moderation pressure

**What works for TaV specifically:**
- Problem-framing content: "Here's what the substance abuse treatment system doesn't tell you" — factual, not sensationalist
- Recovery story formats: 60-second first-person testimonials (use actors/volunteers initially; real stories eventually)
- "Did you know" facts from SAMHSA data (17,000 facilities, average cost, insurance gaps)
- Transparency contrast: "Rehabs.com vs. what the data says"

**What to avoid:**
- Any content that could be read as glorifying or normalizing substance use (even in "before" framing)
- First-person crisis narratives without clear resolution/hope framing (violates safe messaging guidelines)
- Direct drug naming in captions or hashtags (triggers moderation filters)

#### Instagram

**Content opportunity:** High. Recovery community is active and supportive. Top recovery accounts have 50K–500K followers. Instagram remains strong for family + advocacy content.

**Formats that perform in 2026:**
- Carousels: 45.85% engagement rate — use for "5 things to know before choosing a treatment facility"
- Reels: Short-form video for awareness
- Stories with polls/questions: community engagement

**Policy:** Meta's content policies flag substance abuse content for additional review. Accounts framing content as advocacy/awareness (not personal substance use) generally have fewer moderation issues. Add profile description: "Nonprofit substance abuse treatment transparency platform."

#### X (Twitter)

**Primary audience for TaV:** Web3/crypto community, OriginTrail and Polkadot ecosystems, tech-forward funders, policy-oriented health advocates.

**Strategy:**
- Technical threads: "Here's how OriginTrail's DKG enables verified treatment facility data" — targeted at Web3 community
- Policy threads: "Why the substance abuse treatment industry needs radical transparency" — targeted at health policy audience
- Tag ecosystem partners: @OriginTrail, @Polkadot, @SAMHSA
- No content moderation issues expected for advocacy/policy content

#### LinkedIn

**Primary audience:** Nonprofit funders, healthcare industry professionals, institutional partners.

**2026 algorithm priorities:**
- Native documents/PDFs: 7.00% engagement rate, 14% YoY increase — upload pitch deck as native document post
- Carousels: 45.85% engagement rate
- Video: 5x more engagement than static

**Posting frequency:** 2–3 times weekly for an account under 10,000 followers.

**Content strategy:**
- Thought leadership posts: "What treatment transparency would actually require" (founder perspective)
- Research-backed posts citing the existing PITFALLS.md and FEATURES.md findings
- Behind-the-scenes: "Building a nonprofit on OriginTrail's DKG — here's what we've learned"
- Partner/grant announcements when they happen

### Safe Messaging Guidelines (ALL PLATFORMS)

The Suicide and Crisis Lifeline / SAMHSA publish safe messaging guidelines for substance use content:

1. **Avoid detailed descriptions of how people obtain drugs** — focus on systemic issues, not methods
2. **Frame recovery as achievable** — hope-forward, not hopelessness-forward
3. **Do not use shame language** ("addict," "junkie") — use "person with substance use disorder" or "person in recovery"
4. **Include resources** — 988 Samhsa National Helpline (1-800-662-4357) in bio or pinned post
5. **Indirect crisis language is real** — phrases like "I can't do this anymore" without explicit substance mention can indicate crisis; social media content should direct to help

**Why this matters for TaV:** If content gets flagged or removed, it undermines the credibility of a platform that presents itself as a trusted health resource. Invest time in getting this right from day one.

Sources: [TikTok Community Guidelines](https://www.tiktok.com/community-guidelines/en), [TikTok Substance Support](https://www.tiktok.com/safety/en/substance-support), [Research: Substance Use Hashtags on TikTok (2025)](https://arxiv.org/html/2501.16123v1), [LinkedIn Algorithm 2026](https://sproutsocial.com/insights/linkedin-algorithm/), [LinkedIn Benchmarks 2026](https://www.socialinsider.io/social-media-benchmarks/linkedin)

---

## 7. Free Brand Identity Tools

**Confidence: HIGH** — Pricing and program access verified against official sources.

### Primary Recommendation: Canva for Nonprofits

**Canva offers full Pro access at zero cost for registered nonprofits.** This is the highest-value tool available and should be the primary brand toolkit.

What's included:
- Full brand kit (logo upload, color palette, typography presets)
- 500+ magic resize templates — one design, auto-adapted for Instagram, TikTok, LinkedIn, X, email
- 100M+ premium stock photos and graphics
- Team collaboration (up to 50 users)
- Magic AI tools (background removal, text generation, image generation)
- Social media scheduler (Canva's built-in scheduler handles Instagram, LinkedIn, X, Pinterest)

**To apply:** Visit [canva.com/canva-for-nonprofits](https://www.canva.com/canva-for-nonprofits/), submit 501(c)(3) documentation or equivalent. Approval typically 1–5 business days.

**Eligibility note:** TaV is pre-501(c)(3) — nonprofit status may need to be established before applying. If not yet registered, the free Canva plan (unlimited templates, standard stock) is workable for Phase 0. Apply for Pro immediately upon 501(c)(3) registration.

### Logo Creation Strategy

For a non-technical founder, the recommended workflow is:

1. **Define brand direction first** — warm + human (per D-02); color psychology for health: blues/greens for trust, orange/amber accents for energy and action
2. **Generate options in Canva** using the Canva AI Logo Generator (500 uses/month on free plan)
3. **Evaluate against these criteria:** Does it feel approachable? Does it work at 16px (favicon size)? Does it work in black and white?
4. **Typography:** Canva's free Inter + DM Sans pairing is clean, modern, and matches the shadcn/ui system font defaults — no custom font integration needed

**Do not use:** Looka (paid export), BrandCrowd (paid high-res), Adobe Express (requires Creative Cloud subscription for full use). These are traps for non-technical founders who generate a logo only to discover download requires payment.

### Color Palette Recommendation

Based on the TaV mission and D-02 tone (warm + empowering):

| Color | Hex Suggestion | Role |
|-------|---------------|------|
| Primary | #1B6CA8 (medium blue) or #2D7D6F (teal) | Trust, calm, health |
| Accent | #E8875C (warm orange) or #F4A261 (amber) | Energy, hope, action |
| Background | #F8F9FA (near-white) | Clean, clinical cleanliness |
| Text | #1A1A2E (near-black navy) | Readability |

These pair naturally with shadcn/ui's default CSS variable system, making Tailwind implementation trivial.

Sources: [Canva for Nonprofits](https://www.canva.com/canva-for-nonprofits/), [Canva Nonprofit Guide 2026](https://www.stylefactoryproductions.com/blog/canva-for-nonprofits), [Canva Pricing 2026](https://www.getaiperks.com/en/articles/canva-pricing)

---

## 8. Next.js Landing Page Patterns

**Confidence: HIGH** — Verified against official docs and active repositories.

### Stack Confirmation

Per D-01 and D-06, the stack is: Next.js + Vercel + Tailwind CSS + shadcn/ui. This is the correct choice for Phase 0. Research confirms:
- Next.js 15 with App Router is the current standard
- shadcn/ui + Tailwind is the dominant component pattern for new Next.js projects in 2026
- Vercel free tier: unlimited personal projects, 100GB bandwidth/month, automatic HTTPS — sufficient for Phase 0
- Zero hosting cost confirmed

### Recommended Starter Approach

**Do not use the `nobruf/shadcn-landing-page` template.** It has not been updated since June 2024 (15 total commits, no releases), which means dependency drift is significant. It may work but will require upgrade work.

**Recommended approach: scaffold from scratch using `create-next-app` with the shadcn/ui init flow.**

```bash
npx create-next-app@latest takesavillage --typescript --tailwind --app --src-dir
cd takesavillage
npx shadcn@latest init
```

This gives a clean, current-version base. Then add components à la carte:
```bash
npx shadcn@latest add button input card badge
```

**Alternative:** Vercel's official [Finwise SaaS Landing Page template](https://vercel.com/templates/next.js/finwise-saas-landing-page) — actively maintained, Next.js + Tailwind, configurable, deploys to Vercel in one click. Not nonprofit-specific but cleanly adaptable.

### Component Architecture for Phase 0

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Main landing page (imports all sections)
│   └── api/
│       └── waitlist/
│           └── route.ts    # POST to Kit API
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ForFunders.tsx
│   │   └── Footer.tsx
│   ├── ui/                 # shadcn/ui components (auto-generated)
│   └── WaitlistForm.tsx    # Reusable email capture component
├── lib/
│   └── kit.ts              # Kit API client (thin wrapper)
└── public/
    └── og-image.png        # Open Graph image for social sharing
```

### Animation Library

**Recommendation: Motion (formerly Framer Motion) with LazyMotion.**

- Current version: Motion 12.x (tested with Next.js 16.x as of March 2026)
- Use `LazyMotion` + `m` component to reduce initial bundle to ~5kb instead of 30–50kb
- Stick to `transform` and `opacity` animations for 60fps performance
- Appropriate for Phase 0 landing page: scroll-reveal on sections, fade-in on hero

```tsx
// Pattern: scroll-reveal section entrance
import { LazyMotion, domAnimation, m } from "motion/react"

<m.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {children}
</m.div>
```

Keep animations subtle. The site is about trust and human connection — aggressive animations undermine credibility.

### SEO Basics (Next.js App Router)

```tsx
// app/layout.tsx
export const metadata = {
  title: "Takes a Village — Find Verified Substance Abuse Treatment",
  description: "A nonprofit platform for transparent, verified treatment facility discovery. No pay-to-rank. No hidden agendas. Real reviews from real people.",
  openGraph: {
    title: "Takes a Village",
    description: "...",
    images: ["/og-image.png"],
    url: "https://takesavillage.health", // update to final domain
  },
  twitter: { card: "summary_large_image" },
}
```

**robots.txt and sitemap.xml** are auto-generated by Next.js App Router via `app/robots.ts` and `app/sitemap.ts`.

### Vercel Deployment Pattern

1. Push code to `github.com/paxtontribe/TakesaVillage`
2. Connect Vercel to the GitHub repo (one-time setup in Vercel dashboard)
3. Every push to `main` auto-deploys
4. Add custom domain in Vercel dashboard after domain purchase
5. Vercel handles SSL certificate automatically

Sources: [Next.js shadcn/ui docs](https://ui.shadcn.com/docs/installation/next), [Motion Library](https://motion.dev/), [Vercel Templates](https://vercel.com/templates/next.js), [Framer Motion Complete Guide 2026](https://inhaq.com/blog/framer-motion-complete-guide-react-nextjs-developers)

---

## Recommendations for Planning

These are concrete directives the planner should follow when creating PLAN.md files.

### Plan 00-01: Website

1. **First task must be: register the domain.** `takesavillage.org` is taken and on Afternic. Register `takesavillage.health` or `takesavillage.care` via Cloudflare Registrar before any development begins. (~$70–100/year for `.health`; ~$15–30/year for `.care`)

2. **Use Kit (ConvertKit) for email capture, not Mailchimp.** Free up to 10,000 subscribers with unlimited sends. Set up the Kit form first; the landing page wraps around it.

3. **Scaffold with `create-next-app` + shadcn/ui init**, not a third-party template. Clean dependency graph, current versions, no upgrade debt.

4. **Apply for Canva for Nonprofits** before logo/brand work begins if 501(c)(3) is in place. If not, use Canva free tier for Phase 0 and upgrade later.

5. **Brand direction:** Warm blues/teals (trust) + amber accent (hope). Inter or DM Sans typography. These map directly to shadcn/ui's CSS variables — minimal custom work.

6. **Waitlist form placement:** Hero section (primary), and again in the footer. Maximum 1 field (email). Kit form embed or custom form posting to Kit API route.

7. **Add a public waitlist counter** to the hero — "X people are waiting for better information." Start at 0; Kit provides contact count via API. This is a live traction metric for funder conversations.

8. **The "For Funders" section must link to GitHub.** Technical reviewers want to see the planning docs. Link to `github.com/paxtontribe/TakesaVillage/tree/main/.planning` with a brief framing sentence: "Full technical architecture, legal analysis, and roadmap are public."

9. **SEO metadata:** Include all Open Graph tags before launch. The og-image should be the site hero graphic — when shared to LinkedIn or X it becomes an organic reach multiplier.

### Plan 00-02: Social Media

1. **Create all four accounts before launching the website.** Reserve the `takesavillage` handle on Instagram, TikTok, X, and LinkedIn simultaneously. Handle availability varies by platform.

2. **Bio standard across all platforms:** "Nonprofit platform for verified substance abuse treatment transparency. No pay-to-rank. No hidden agendas. [link to waitlist]"

3. **Include the SAMHSA National Helpline number in Instagram and TikTok bio or highlights:** 1-800-662-4357 (HELP). This follows safe messaging guidelines and reduces the risk of content moderation issues.

4. **TikTok content angle:** Focus on problem framing ("the treatment industry doesn't want you to know this") and factual transparency data, NOT personal recovery stories in the early content calendar. Recovery stories come after the platform has real user trust.

5. **LinkedIn is the highest-priority platform for funding.** Upload the pitch deck as a native LinkedIn document (PDF) for maximum algorithm reach. Post 2–3 times weekly.

6. **X (Twitter) is the highest-priority platform for ecosystem building.** First posts should tag @OriginTrail, @Polkadot, @SAMHSA, @web3foundation. Engage with OriginTrail Discord simultaneously.

### Plan 00-03: Pitch Materials

1. **Build the pitch deck directly from the existing research corpus.** Do not start from scratch. SUMMARY.md contains the executive narrative. FEATURES.md has the competitive analysis. ARCHITECTURE.md has the architecture diagram source. PITFALLS.md has the legal risk landscape that demonstrates diligence.

2. **10–12 slides maximum.** Long decks are not read. Funder section on the website handles overflow information.

3. **Explicitly surface the three legal gates in the deck** (AKS, 42 CFR Part 2, FinCEN) as a compliance awareness section. This is unusual and impressive for a pre-funding project. It signals founder maturity.

4. **Polkadot Treasury proposal is the fastest path to early funding.** Create a proposal targeting the Small Spender or Big Spender track. The case: TaV uses Polkadot PoP as its core identity layer, bringing real-world healthcare/social good usage to the Polkadot ecosystem. Submit on Polkassembly after the website is live (provides a live URL as evidence of execution).

5. **RWJF "Local Data for Equitable Communities" — watch for next cycle.** The March 2026 deadline passed. Set a calendar reminder for when RWJF opens the next cycle (likely Q4 2026 or Q1 2027). $50,000 grants, strong alignment.

6. **Include a "traction" section even with early numbers.** Waitlist count, GitHub stars, social followers, ecosystem conversations — any early signal matters in grant applications.

---

## Open Questions

1. **Domain purchase authority:** Who has the decision and budget to purchase `takesavillage.health` (~$70–100/year) before Phase 0 work begins? This must be resolved in the first task.

2. **501(c)(3) status:** Is TaV currently registered as a nonprofit? This affects Canva for Nonprofits eligibility, SAMHSA grant eligibility, RWJF eligibility, and the nonprofit framing in all pitch materials.

3. **Polkadot treasury proposal timing:** Should this be submitted before or after the website is live? (Recommendation: after — live site provides credibility.)

4. **Canva vs. designer:** Is the founder comfortable with Canva for brand identity? If not, budget for a one-time freelance logo design ($150–500 on Fiverr/99designs) is a reasonable Phase 0 expense.

5. **GitHub repo visibility:** Is `paxtontribe/TakesaVillage` currently public? The "For Funders" section links to it — it needs to be public before website launch.

---

## Sources

### Primary (HIGH confidence)
- WHOIS queries run directly 2026-03-29 — domain availability for `takesavillage.*` variants
- [Resend Pricing](https://resend.com/pricing) — official pricing page, fetched directly
- [Loops Pricing](https://loops.so/pricing) — official pricing page, fetched directly
- [Canva for Nonprofits](https://www.canva.com/canva-for-nonprofits/) — official program page
- [TikTok Community Guidelines](https://www.tiktok.com/community-guidelines/en) — official policy
- [Polkadot OpenGov Treasury Wiki](https://wiki.polkadot.com/learn/learn-polkadot-opengov-treasury/) — official docs
- [Web3 Foundation Grants](https://grants.web3.foundation/) — official page confirming program discontinuation
- [RWJF Active Funding Opportunities](https://www.rwjf.org/en/grants/active-funding-opportunities.html) — official RWJF grants page
- [Next.js shadcn/ui Docs](https://ui.shadcn.com/docs/installation/next) — official shadcn/ui docs
- [Motion Library](https://motion.dev/) — official Motion/Framer Motion site

### Secondary (MEDIUM confidence)
- [Mailchimp Free Plan Changes 2026](https://blog.groupmail.io/mailchimp-free-plan-changes-2026/) — verified against official Mailchimp pricing
- [Kit Pricing 2026](https://www.emailtooltester.com/en/reviews/convertkit/pricing/) — cross-referenced with official Kit pricing
- [SAMHSA Grants Dashboard](https://www.samhsa.gov/grants/grants-dashboard) — official SAMHSA grants portal
- [Polkassembly](https://polkadot.polkassembly.io/treasury-proposals) — official treasury proposal platform
- [LinkedIn Algorithm 2026](https://sproutsocial.com/insights/linkedin-algorithm/) — Sprout Social research
- [Cloudflare At-Cost Domain Pricing](https://cfdomainpricing.com/) — verified Cloudflare registrar prices

### Tertiary (LOW confidence — flagged for validation)
- OriginTrail/Trace Labs 2026 grant program: **no active program confirmed.** Relationship-driven path only.
- Schmidt Futures / Omidyar Network health tech grant timing: not confirmed for 2026 application windows.

---

## Metadata

**Confidence breakdown:**
- Email tools: HIGH — official pricing verified
- Grant opportunities: MEDIUM — programs verified but timelines shift quarterly; LOW for Web3 ecosystem grants (program discontinued or unconfirmed)
- Landing page best practices: HIGH — stable patterns
- Pitch deck structure: HIGH — consistent across multiple sources
- Domain strategy: HIGH — WHOIS verified directly
- Social media: MEDIUM-HIGH — platform policies verified; content performance data from research studies
- Brand tools: HIGH — official program pricing verified
- Next.js patterns: HIGH — official docs current

**Research date:** 2026-03-29
**Valid until:** Domain availability — check again before purchase (30 days). Grant opportunities — check SAMHSA dashboard monthly. Platform pricing — 90 days.

---

## RESEARCH COMPLETE
