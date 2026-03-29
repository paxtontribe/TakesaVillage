# Feature Landscape: Substance Abuse Treatment Discovery Platform

**Domain:** Treatment facility discovery, funding navigation, and accountability for substance use disorder (SUD)
**Project:** Takes a Village
**Researched:** 2026-03-28
**Confidence note:** WebSearch and WebFetch were unavailable during this research session. All findings are drawn from training data (knowledge cutoff August 2025) covering SAMHSA, Psychology Today, Rehabs.com, AddictionCenter.com, Recovery.org, and industry investigative reporting. Confidence levels reflect this constraint.

---

## Competitor Landscape Overview

**Confidence: MEDIUM** — Training data covers these platforms through mid-2025; live feature verification was not possible.

### SAMHSA Behavioral Health Treatment Services Locator (findtreatment.gov / findtreatment.samhsa.gov)

The government baseline. Free, no commercial relationships with facilities.

**What it has:**
- Location-based search (zip, city, state)
- Filter by: substance type, treatment type (detox, residential, outpatient, MAT, opioid treatment programs), payment accepted (Medicaid, Medicare, sliding scale, self-pay), special populations (adolescents, veterans, LGBTQ+, pregnant women, criminal justice)
- SAMHSA-certified facility data pulled from N-SSATS (National Survey of Substance Abuse Treatment Services)
- Basic facility contact info, address, hours
- Map view

**What it lacks:**
- No reviews or user-submitted ratings
- No cost data (actual prices, not just payment types)
- No outcome or success rate data
- No real-time availability
- No bed availability
- No insurance network verification ("accepts Cigna" is self-reported, not verified)
- No quality differentiation between facilities — a facility with a 3% success rate looks identical to one with 70%
- No photos, staff credentials, or facility culture data
- No funding/grants search
- Severely outdated data — facilities frequently closed, moved, or changed services without SAMHSA updates
- No mechanism to flag or correct bad data beyond a feedback email
- No AI matching or personalization

**Why this matters for Takes a Village:** SAMHSA is the floor. Every user knows it exists. Takes a Village must be demonstrably better on the dimensions that matter most in a crisis decision: cost, quality, availability, and trustworthiness.

---

### Psychology Today Treatment Center Finder

Commercial directory with verified credentials. The mental health category leader.

**What it has:**
- Rich filter set: issues treated, insurance accepted, age groups, treatment setting, approach/modality
- Facility profiles with photos, staff bios, philosophy statements
- "Verified" badge for credentialed providers
- Map + list views
- Featured placements (paid)
- Mobile-responsive

**What it lacks:**
- Reviews are not enabled for treatment centers (liability concern — they disabled this)
- Featured placement is explicitly pay-to-rank
- No outcome data
- No cost transparency (facilities describe "sliding scale" with no actual numbers)
- No availability or waitlist information
- No cross-verification of claims — all self-reported
- No funding or grants finder
- Profiles are marketing copy, not accountability data

**Why this matters:** Psychology Today built the template for what a "professional" directory looks like. Their abandonment of reviews is a known gap the market wants filled — the absence of reviews is one of the top complaints from users researching treatment options.

---

### Rehabs.com / AddictionCenter.com / Recovery.org (American Addiction Centers network and affiliates)

These are the dominant commercial referral networks. They appear independent but often are not.

**What they have:**
- SEO-optimized content (massive article libraries that rank for every search term)
- Facility directory with filters similar to SAMHSA but prettier
- "Helpline" calls routed to paid referral partners
- "Sponsored" or "featured" listings (pay-to-rank)
- Some user reviews (often gamed or removed)
- Insurance verification tool (calls their partner facilities, not neutral)
- Blog/resource content on treatment types, how to talk to family, etc.
- Cost articles that are always vague ("costs vary")

**What they actually are:**
- Lead generation machines. The business model is: person calls helpline → routed to paying facility → facility pays $3,000–$10,000 per admission referral
- Rehabs.com was owned by American Addiction Centers, which ran its own chain of facilities — meaning the "directory" was often routing people to its own facilities
- AddictionCenter.com's helpline routes to a small network of paying partners, not to the best-fit facility
- Recovery.org uses "sponsored" placement with no clear disclosure
- Insurance verification tools route to partner facilities, not to genuinely unbiased matching

**Why this matters:** These platforms represent what Takes a Village must explicitly not be. Users have been harmed by this model. The FTC and state AGs have investigated these practices. The design decisions of Takes a Village (no pay-to-rank, nonprofit, on-chain transparency) are direct responses to this exact ecosystem.

---

### Sober.com / SoberRecovery (Community-Oriented)

Forum and directory hybrid. Older demographic, less polished.

**What it has:**
- Community forums with peer support
- Facility directory (less filtered than commercial competitors)
- Sobriety tracking tools
- Resource articles

**What it lacks:**
- No review authentication — anyone can post anything
- No outcome tracking
- No funding finder
- No AI or matching
- Technically dated

---

### Yelp / Google Maps (Non-Specialized)

Despite not being purpose-built, these are where most reviews of treatment facilities actually live.

**What they have:**
- Authentic-ish reviews with real Google/Yelp accounts attached
- Photos, hours, location
- Rating aggregates
- "Respond to review" for businesses

**The problem:**
- Reviews are easily gamed — facilities pay for review removal and suppression
- No verification that reviewer actually attended (anyone can review)
- Facilities with histories of patient harm often have 4.8-star ratings from staff and fake accounts
- No specialized filters for treatment type, insurance, etc.
- No crisis context — this is a pizza-finding UX applied to a life-or-death decision

---

## Table Stakes

Features users expect. Absence causes immediate abandonment. **Confidence: HIGH** (consistent across all competitor analysis and UX research in this domain).

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Location-based facility search | Primary use case — "find a place near me" | Low | Zip code, city, radius |
| Filter by treatment type | Detox vs. residential vs. outpatient vs. MAT are fundamentally different needs | Low | SAMHSA has this; all competitors have it |
| Filter by insurance accepted | Primary financial decision point for most users | Medium | Must distinguish "accepts" from "in-network" |
| Filter by substance/disorder type | Opioid programs differ structurally from alcohol programs from dual-diagnosis programs | Low | Standard filter across all platforms |
| Map view with results | Spatial intuition is part of decision-making | Low | Expected; absence feels broken |
| Facility contact information | User must be able to call or email | Trivial | Phone, address, website |
| Basic facility profile | What it is, who it serves, what it does | Low | Name, type, address, services |
| Mobile-responsive design | Most crisis searches happen on phone | Low | Table stakes for any web property |
| Filter by payment type | Medicaid/Medicare/self-pay/sliding scale | Low | SAMHSA has this; all competitors have it |
| Crisis escalation | Suicidal/overdose situations need immediate redirect | Low | 988/SAMHSA helpline links |
| Accurate, up-to-date data | Closed facilities showing as open is actively harmful | High (ops) | Data freshness is operationally hard |

---

## Differentiators

Features that set a platform apart. Users won't expect them but will choose Takes a Village over competitors because of them. **Confidence: HIGH** for the need; **MEDIUM** for specific implementation patterns.

### Reviews and Accountability

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Authenticated-anonymous reviews | Proves reviewer actually attended; anonymous so they'll write honestly | High | No competitor has this — the authentication pattern is novel in this space |
| Facility cannot suppress reviews | Removes the #1 trust destroyer on Yelp/Google for this category | Medium | Policy + enforcement mechanism required |
| Longitudinal outcome follow-up | 6-month/12-month review prompts capture what actually happened | Medium | No competitor does this at all |
| Outcome data published to DKG | Aggregated anonymized outcomes create a public record no single entity controls | High | Unique to Takes a Village |
| Facility response (not removal) | Gives facilities accountability voice without suppression power | Low | Standard pattern from Yelp but enforced here |

### Transparency Scoring

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Composite transparency score | Surfaces how honest/complete a facility's published information is | Medium | Derived from: verification completeness, KPI availability, review volume, flag history |
| Licensing verification against official records | Distinguishes verified from self-reported credentials | High | Requires integration with state licensing databases |
| KPI/outcome disclosure (facility-reported) | Facilities that publish success metrics are ranked higher — incentivizes honesty | Medium | No competitor mandates or rewards this |
| SCAN provenance chain | Facility, staff credentials, and funding traceable on DKG | High | Unique; applies OriginTrail supply chain model |
| Flag and dispute system | Community-driven correction of inaccurate claims | Medium | SAMHSA has no correction mechanism; Takes a Village does |

### Funding Navigation

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Grants/scholarships directory | Most people don't know public SUD funding exists | Medium | No major competitor has this |
| Eligibility matching for funding | Narrows from "list of grants" to "grants you qualify for" | Medium | Significant UX lift over a flat directory |
| Facility-specific scholarships on profile | Facilities post their own sliding-scale/scholarship options | Low | No competitor surfaces this |
| Crypto-native funding pools | USDC/USDT/ETH/DOT disbursable via smart contract | High | No competitor in this space has this |
| Direct application pathway | Apply for funding through the platform, not externally | Medium | Reduces drop-off on funding discovery |

### Search Quality

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| AI situational matching | User describes situation in natural language; system returns matched care level + facility options | High | No competitor has contextual AI matching |
| SciGraph research integration | Surfaces evidence base alongside facility options for specific substances | Medium | No competitor integrates research literature |
| Availability / waitlist visibility | Knowing a 30-day waitlist vs. same-day availability changes the decision | High (ops) | Requires facility-side data updates; hard to get right |
| Sober living (unregulated) inclusion | Sober homes are largely absent from SAMHSA/competitors despite heavy community use | Medium | Requires community-flagging since no official registry |
| Real-time bed availability | Highest-value feature; currently impossible to get reliably | Very High | Phase 2+ |

### Governance and Trust Infrastructure

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| DAO dispute resolution | Contested reviews go to community vote, not facility or platform fiat | High | No competitor in this space uses decentralized governance |
| On-chain data immutability | Facility claims, outcomes, and reviews cannot be quietly edited or deleted | High | Core differentiator; the DKG makes this possible |
| Nonprofit model (no pay-to-rank) | Removes the commercial incentive that corrupts all major competitors | Structural | Not a feature — a policy. But it enables trust that features alone can't create |

### Outreach and Accessibility

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Social AI agents (TikTok, Instagram, etc.) | Meets people where they are in crisis — not just searchers | High | No competitor has social-deployed AI agents |
| DKG-grounded agent answers | Every agent answer is traceable to a verified source | High | Prevents AI hallucination in a high-stakes context |
| Crisis escalation in AI agents | Agent recognizes crisis language and routes to 988/SAMHSA before platform resources | Medium | Safety-critical; relatively low technical complexity |

---

## Anti-Features

Things Takes a Village deliberately must not build. This section exists because the addiction treatment industry has a documented history of predatory design that actively harms vulnerable people.

**Confidence: HIGH** — These practices are documented by FTC investigations, state AG actions, investigative journalism (The Daily Beast, ProPublica, STAT News), and the Eliminating Kickbacks in Recovery Act (EKRA) of 2018.

### Pay-to-Rank / Sponsored Placements

| Anti-Feature | Why It's Harmful | What Happens Instead |
|--------------|-----------------|---------------------|
| Facilities paying to appear at the top of search results | Systematically routes people to facilities with marketing budgets, not best outcomes — in addiction, this can cost lives | All ranking is merit/transparency-based: verification completeness, review scores, KPI disclosure, flag history |
| "Sponsored" or "featured" badges | Even disclosed pay-to-play corrupts trust signals — users in crisis don't have time to parse advertising | No commercial relationships between Takes a Village and individual facilities |
| Helpline routing to paid partners | "Call our helpline for free help" → $5,000 referral fee to the facility that answers | No referral fee model; AI agents and search results are not commercially influenced |

### Fake or Suppressible Reviews

| Anti-Feature | Why It's Harmful | What Happens Instead |
|--------------|-----------------|---------------------|
| Unverified reviews (anyone can post) | Facilities with serious patient harm problems maintain 4.8-star ratings via staff/friend reviews | All reviews require attendance verification via Polkadot PoP identity |
| Facility-removable reviews | Gives facilities veto power over the only accountability mechanism users have | Facilities can respond but cannot remove; only platform moderation (community-flagged) can remove |
| Review gating | Directing satisfied patients to review platforms while intercepting negative reviewers | Not applicable — Takes a Village owns the review system with no gating mechanism |
| Review buying | Paying patients (or staff posing as patients) for positive reviews | Fraud detection via Umanitek Guardian; PoP identity prevents Sybil attacks |

### Patient Brokering

| Anti-Feature | Why It's Harmful | What Happens Instead |
|--------------|-----------------|---------------------|
| Referral fee arrangements with facilities | Illegal under EKRA; routes patients based on who pays, not who fits | Takes a Village is nonprofit; zero referral fee model is structural, not just policy |
| Insurance-maximizing routing | Referring patients to facilities that maximize insurance billing rather than fit | Eligibility matching is based on clinical fit + user-stated needs, not billing optimization |
| "Insurance verification" that routes to partner facilities | Appears neutral; actually pre-filters results to commercial partners | Insurance verification is factual data (accepted/not accepted); no commercial routing |

### Data Opacity

| Anti-Feature | Why It's Harmful | What Happens Instead |
|--------------|-----------------|---------------------|
| Self-reported claims with no verification | "We have a 90% success rate" — defined how? Over what period? For which substance? | All facility claims are platform-verified against official databases; unverifiable claims are labeled as self-reported |
| Outcome claims without methodology disclosure | Meaningless statistics used as marketing | KPI disclosure requires methodology — what metric, how measured, what period, what denominator |
| Closed or moved facilities staying in results | Person in crisis drives to a closed facility | Continuous monitoring via official licensing database integration; community flag → 72h review |

### Exploitation of Vulnerability

| Anti-Feature | Why It's Harmful | What Happens Instead |
|--------------|-----------------|---------------------|
| Dark patterns in "apply now" flows | Urgency language, pre-checked insurance consent, immediate personal data collection before trust is established | No personal data required for search; authentication is pseudonymous (PoP, not email/SSN) |
| HIPAA-washing | Appearing to protect health data while actually selling leads | Individual data is never sold; anonymous in public-facing outputs; HIPAA-adjacent design |
| Fabricated scarcity ("Only 2 beds left!") | Pressures desperate people into hasty decisions | Availability data, where shown, is sourced from facility profiles on DKG — not marketing copy |
| Intake form as lead gen | "Check your insurance" forms that capture personal data for resale | No personal data collection in search flows; PoP authentication is the only identity touchpoint |

---

## Authenticated-Anonymous Review System: Patterns in Practice

**Confidence: MEDIUM** — Based on patterns from healthcare review platforms (Healthgrades, Zocdoc), general purpose platforms (Glassdoor, Indeed), and research on pseudonymous review systems. No direct precedent exists for this exact model.

### The Core Problem in This Domain

Standard review systems fail for addiction treatment for three reasons:
1. **Stigma** — People will not identify themselves as having attended a rehab facility publicly
2. **Recurrence** — Patients in early recovery are in a vulnerable state; their identity being attached to a review carries real-world consequences (employment, family, legal)
3. **Power imbalance** — Facilities know who their patients were; an identified negative reviewer can be targeted

The result: reviews either don't exist (SAMHSA) or are not trusted (Yelp/Google, where facilities game results).

### The Authenticated-Anonymous Pattern

The pattern solves this by separating the verification layer from the display layer:

```
[User verifies attendance] → [Platform confirms identity + dates] → [Review stored with identity hash]
                                                                    ↓
                                              [Public display: anonymous, no PII, no linkable info]
```

**Verification signals that do NOT require PII:**
- Facility confirms date range of attendance (facility-side verification, not patient-reported)
- PoP Level 1 confirms "this is a real human who has not reviewed this facility before"
- Date range plausibility check (a review claiming 2-year residency in a 30-day program fails)

**What gets stored (private, platform-side only):**
- PoP nullifier (prevents duplicate reviews; cannot be reversed to identity)
- Facility ID + date range (for dispute resolution)
- Review submission timestamp

**What gets displayed publicly:**
- Review text
- Ratings (experience, method effectiveness, staff quality, environment match)
- Treatment type and date range (e.g., "Residential, Q1 2024") — no specific dates
- "Verified attendance" badge

**What never gets displayed:**
- Name, username, or any persistent pseudonym that could be tracked across reviews
- Specific admission/discharge dates
- Geographic origin of reviewer
- Any linkage to other reviews by same person

### Analogous Systems in the Wild

| Platform | How They Do Anonymous-but-Verified | Relevance |
|----------|------------------------------------|-----------|
| Glassdoor | Requires email verification (not strong) + employer confirmation; reviews anonymous | Demonstrates model; lacks strong identity verification |
| Healthgrades | Patient reviews with no verification — anyone can post | Shows the gap; unverified reviews are gamed |
| Zocdoc | Verified appointment reviews — only patients with confirmed appointments can review | Closest analog; verified by appointment, displayed anonymously |
| Doximity | Physician-verified identity with pseudonymous public presence | Identity-verified, anonymous display pattern |
| ProPublica Nursing Home Compare | Aggregates government data + complaints; no individual reviews | Shows demand for accountability data even without reviews |

**Zocdoc is the closest analog:** verified appointment → anonymous review. Takes a Village needs to replicate this at the facility level rather than the individual appointment level, and with stronger identity verification (PoP vs. email).

### Long-Term Outcome Follow-Up

No competitor does this. The pattern to follow:
- At review submission, user opts into follow-up (explicit consent, not default-on)
- Platform sends anonymous prompt at 6 months: "Are you still in recovery? How effective was the treatment long-term?"
- At 12 months: same prompt with additional detail options
- Longitudinal outcome linked to original review (same PoP nullifier) but published separately
- Aggregate outcomes (not individual) published to DKG as Knowledge Assets

This is the data that would genuinely change how people choose treatment — not "was the staff friendly" but "was I still sober a year later." No platform in this space has it.

---

## Funding Finder: What Needs to Surface

**Confidence: HIGH** — The funding landscape for SUD treatment is well-mapped in policy literature through mid-2025.

### Funding Categories That Must Be Discoverable

**Federal Programs:**
- SAMHSA State Opioid Response (SOR) grants — state-distributed, often routed through county health departments
- SAMHSA Substance Abuse Prevention and Treatment (SAPT) Block Grant — funds state-level treatment slots
- SAMHSA-funded Certified Community Behavioral Health Clinics (CCBHCs) — sliding-scale by income
- Ryan White HIV/AIDS Program (for individuals with co-occurring SUD + HIV)
- Veterans Affairs (VA) substance use disorder treatment — Veterans only
- Indian Health Service (IHS) — for American Indian/Alaska Native individuals
- HRSA Health Center Fund — Federally Qualified Health Centers with SUD services

**State Programs (variable by state):**
- State-funded treatment programs (often administered through county behavioral health)
- Medicaid SUD benefit (varies dramatically by state — expansion states cover more)
- State-specific opioid treatment programs
- Criminal justice diversion programs with treatment slots

**Insurance (not grants, but routinely unknown to users):**
- Mental Health Parity and Addiction Equity Act (MHPAEA) — requires parity with medical benefits
- ACA Section 1557 — SUD coverage in marketplace plans
- Medicaid MAT coverage — most expansion states cover buprenorphine, methadone
- Medicare Part B SUD coverage (outpatient only)

**Private / Nonprofit Grants:**
- Partnership to End Addiction scholarships
- Salvation Army rehabilitation programs (no cost, residential)
- Oxford House — low-cost sober living, no grants but self-sustaining model
- Local community foundation grants (highly variable, geographic)
- Faith-based recovery programs (Teen Challenge, etc.)
- SMART Recovery (free, no-cost mutual aid)

**Facility-Specific:**
- Sliding-scale fees (income-based)
- Internal scholarship funds (some facilities have endowed scholarship programs)
- Promissory note programs (pay when able)
- Pro-bono treatment slots (rare but exist, especially at teaching hospitals)

### Eligibility Matching Data Points Required

To match a user to funding, the system needs:

| Data Point | Why Needed | Sensitivity |
|------------|-----------|------------|
| State / county of residence | Most funding is geographically restricted | Medium |
| Insurance status (none / Medicaid / Medicare / private) | Primary eligibility filter | Medium |
| Income range (rough) | Sliding scale, Medicaid eligibility | Medium |
| Substance type | Some funding is opioid-specific (SOR grants), some is broader | Low |
| Veteran status | VA benefits | Low |
| Criminal justice involvement | Diversion program eligibility | High (sensitive) |
| Pregnancy status | Priority access in many programs | High (sensitive) |
| American Indian / Alaska Native identity | IHS eligibility | Medium |
| Age (under 18 vs. adult) | Separate funding streams for adolescents | Low |
| HIV/co-occurring status | Ryan White eligibility | High (sensitive) |

**Critical UX note:** These are sensitive data points. The system must be designed so users can get useful matching with minimal disclosure — not require all fields. Progressive disclosure: get a useful-if-imperfect match from location + insurance status alone; refine with optional fields.

### Key Data Points About a Facility That Drive Decisions

**Confidence: HIGH** — Derived from research on what factors predict treatment engagement and patient satisfaction in SUD literature, and from gap analysis of what competitors don't show.

| Data Point | Why Critical | Currently Available? |
|------------|-------------|---------------------|
| Accepted insurance (specific plans, not just type) | Primary financial gating factor | Self-reported only; unverified |
| Actual cost range | Second primary factor after insurance | Almost never disclosed |
| Sliding scale availability + income thresholds | Determines access for uninsured | Rarely disclosed |
| Treatment modality (12-step vs. SMART vs. evidence-based vs. faith-based) | Fit to personal philosophy and clinical evidence | Listed but rarely verified |
| MAT availability (buprenorphine, methadone, naltrexone) | Critical for opioid use disorder; stigma causes it to be hidden | Often hidden even when available |
| Dual diagnosis capability | Co-occurring mental health treated vs. referred out | Self-reported; variable quality |
| Detox on-site vs. referral | Determines whether someone with active physical dependence can start there | Usually disclosed |
| Capacity and current availability | Whether they can admit now vs. waitlist | Almost never disclosed in real time |
| Staff credentials (LCDC, LCSW, MD/DO, peer support) | Quality signal | Rarely disclosed in full |
| Staff-to-patient ratio | Quality signal | Never disclosed publicly |
| Average length of stay (actual, not marketed) | Evidence quality — facilities stretching stays for billing vs. clinical need | Never disclosed |
| Success rate (defined + methodology disclosed) | The decision-driving metric; meaningless without definition | Virtually never disclosed honestly |
| Accreditation (CARF, Joint Commission, state license) | Baseline quality signal | License status publicly available; CARF/JC self-reported |
| Facility-specific reviews with verified attendance | Trustworthy quality signal | Does not exist anywhere in this space |
| Recidivism policy (can you return after relapse?) | Critical — relapse is expected; facilities that discharge on relapse may harm patients | Never disclosed |
| Family involvement program | Evidence-based families support improves outcomes | Sometimes disclosed |
| Aftercare / continuing care program | Post-treatment support predicts long-term sobriety | Sometimes disclosed |
| Community setting (urban vs. rural, proximity to triggering environments) | Fit to individual circumstances | Sometimes disclosed |
| Trauma-informed care certification | Relevant for patients with co-occurring trauma | Self-reported |

---

## MVP Recommendation

Based on competitor gap analysis, the features that most directly differentiate Takes a Village and are achievable for a first version:

**Prioritize:**
1. Location + filter search that is at least as capable as SAMHSA (table stakes — without this, nothing else matters)
2. Facility profiles with transparency scoring (verification completeness is visible immediately — this is the core UX differentiation)
3. Authenticated-anonymous reviews (the #1 gap in the market — no competitor has this)
4. Funding finder with eligibility matching (no competitor has this — high user need, relatively bounded scope)
5. AI situational matching (differentiates from all competitors; requires DKG to be populated but can work with thin data)

**Defer to v2:**
- Real-time availability / bed count (requires deep facility-side integration; hard operational problem)
- Longitudinal outcome follow-up (requires a user base to be worth building; v2)
- Social AI agents (requires platform to have data worth querying; v2 after DKG is seeded)
- DAO dispute resolution (requires review volume to generate disputes worth governing; v2)

---

## Feature Dependencies

```
PoP identity (AUTH) → Reviews (REV)
PoP identity (AUTH) → DKG contributions (DKG)
PoP identity (AUTH) → Funding applications (FUND)
PoP identity (AUTH) → DAO voting (DAO)

Facility profiles on DKG (FAC) → Search results (SRCH)
Facility profiles on DKG (FAC) → AI matching (SRCH-03)
Facility profiles on DKG (FAC) → Reviews (REV) [need a facility to review]
Facility profiles on DKG (FAC) → Transparency scoring (FAC-08)

Reviews (REV) → DAO dispute resolution (DAO-05)
Reviews (REV) → Longitudinal outcomes (REV-04)

Funding directory (FUND-01) → Eligibility matching (FUND-02)
Eligibility matching (FUND-02) → Direct application (FUND-05)

DKG populated (DKG) → AI agents (AI) [agents need data to query]
DKG populated (DKG) → SciGraph integration (SRCH-05)
```

**Implication for phasing:** Facility profiles and PoP identity must be in the earliest phases. Everything else depends on them.

---

## Sources and Confidence Notes

All findings based on training data through August 2025. WebSearch and WebFetch were unavailable during research.

**HIGH confidence (consistent with policy record, multiple prior sources in training data):**
- SAMHSA feature set (SAMHSA's locator is well-documented in policy literature)
- Anti-feature catalog (EKRA, FTC investigations, and investigative journalism extensively document predatory practices)
- Federal funding landscape (SAMHSA block grant structure is stable and well-documented)
- Core data points users need (SUD treatment research literature)

**MEDIUM confidence (known patterns, live verification would strengthen):**
- Psychology Today, Rehabs.com, AddictionCenter.com specific feature details (may have changed since mid-2025)
- Zocdoc as closest analog for review system (pattern is valid; specific implementation details unverified)
- State-by-state funding variability (accurate as of training but changes with budget cycles)

**LOW confidence (recommend live verification):**
- Current state of any competitor's AI features (fast-moving in 2025-2026)
- Specific pricing or commercial arrangements of any competitor platform
- Whether any competitor has launched authenticated reviews since mid-2025

**Recommended live verification before roadmap finalization:**
- Audit current findtreatment.gov feature set
- Audit AddictionCenter.com and Rehabs.com for any 2025-2026 product changes
- Review FTC's current enforcement actions against patient brokering networks
- Check SAMHSA's 2025 N-SSATS data fields (what data they collect vs. display)
