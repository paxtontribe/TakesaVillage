# Takes a Village - Pitch Deck Content

**Format:** Each slide section maps directly to one slide in Canva or Google Slides. "Content" is what appears on the slide. "Speaker Notes" is what the presenter says.

**Total slides:** 12

---

## Slide 1: Mission

**Title:** Takes a Village

**Content:**

Helping people find verified, trustworthy substance abuse treatment by making facility data radically transparent and community-accountable.

*"You deserve better information."*

**Website:** https://takesavillage.health
**GitHub:** https://github.com/paxtontribe/TakesaVillage

**Speaker Notes:**

Takes a Village is a nonprofit platform that connects people struggling with substance abuse -- and their families -- to verified treatment facilities, funding sources, and peer-reviewed research. We exist because the current system forces people in crisis to make life-or-death decisions with unreliable information. Our goal is to change that by building a radically transparent, community-accountable data layer for substance abuse treatment in the United States.

---

## Slide 2: The Problem

**Title:** A $42 Billion Industry With No Accountability

**Content:**

- **$42 billion** US substance abuse treatment industry
- **~17,000 treatment facilities** -- no verified review system for any of them
- FTC documented predatory **patient brokering practices** (2015-2020 Florida crisis)
- SAMHSA's national locator **lacks reviews, cost data, and outcome tracking**
- Commercial directories route patients based on **who pays the most**, not who provides the best care
- Facilities can **suppress negative reviews** on Google and Yelp -- and routinely do

**Speaker Notes:**

The substance abuse treatment system in the US is a $42 billion industry serving approximately 2 million treatment admissions per year across roughly 17,000 facilities. Despite these numbers, there is no verified review system for any of them. SAMHSA maintains a national locator -- findtreatment.gov -- but it contains no reviews, no cost information, and no outcome data. A facility with a 3% success rate looks identical to one with a 70% success rate.

The commercial alternatives are worse. Rehabs.com, AddictionCenter.com, and similar sites are lead generation machines disguised as directories. Their business model is referral fees -- $3,000 to $10,000 per patient admission routed to a paying facility. The FTC and state attorneys general have investigated these practices extensively, particularly during the 2015-2020 Florida patient brokering crisis, which led to federal prosecutions under the Eliminating Kickbacks in Recovery Act of 2018.

Meanwhile, on Google and Yelp, facilities with documented histories of patient harm maintain 4.8-star ratings because reviews are easily gamed, unverified, and suppressible. The people who need trustworthy information the most -- families in crisis -- have the least access to it.

---

## Slide 3: Who Is Hurt

**Title:** The Patient and Family Journey Today

**Content:**

**Today:**
1. Family member is in crisis -- searches Google
2. Finds marketing-heavy websites with no verified data
3. Calls a "helpline" that routes to whoever pays the highest referral fee
4. No way to verify facility claims, read trusted reviews, or compare costs
5. Cost surprises after admission. Readmission cycles. Broken trust.

**With Takes a Village:**
1. Search verified facility data -- transparency scores, real reviews, actual costs
2. Read authenticated-anonymous reviews from people who actually attended
3. Get AI-matched to appropriate care level based on their specific situation
4. Find funding they qualify for -- grants, scholarships, sliding-scale options
5. Every facility claim is traceable on a decentralized knowledge graph

**Speaker Notes:**

Imagine you get a call at 2 AM -- your brother, your daughter, your friend needs help. You open your phone and search. What you find is a wall of marketing. Beautiful websites, vague promises, no prices, no real reviews you can trust. You call a number that says "free help" and get routed to a facility that paid $5,000 for your referral. Nobody tells you there's a scholarship you qualify for at a better facility 20 miles away.

This is not a hypothetical. This is the experience of millions of American families every year. The information asymmetry in substance abuse treatment is among the worst in all of healthcare, and it disproportionately harms people who are already in the most vulnerable moments of their lives.

Takes a Village exists to close that gap. We don't provide treatment -- we make the information trustworthy so that people can make informed decisions during the hardest moments of their lives. Our tone is empathetic, not exploitative. We believe people in crisis deserve better information, not better marketing.

---

## Slide 4: The Solution

**Title:** Four Differentiators That Change the Equation

**Content:**

**Verified Reviews**
Authenticated-anonymous: identity verified platform-side, displayed fully anonymously. Attendance confirmed. No one has this.

**Radical Transparency**
Merit-based transparency scores. No facility pays to rank -- ever. Verification completeness, KPI disclosure, review history, and flag history are all visible.

**Decentralized Data**
All facility data published to a knowledge graph no single party controls. Claims are traceable. Data cannot be quietly edited or deleted.

**AI-Powered Discovery**
Natural language matching: describe your situation, get matched to appropriate care level and facilities. Answers sourced from verified data, not marketing copy.

**Speaker Notes:**

What makes Takes a Village different from SAMHSA, Google, or Rehabs.com? Four things.

First, verified reviews. Our reviews are authenticated-anonymous. That means the reviewer's identity is verified by the platform -- we confirm they actually attended the facility -- but their review is displayed with zero identifying information. No name, no persistent username, no way to trace. This matters in substance abuse because stigma is real, recurrence is expected, and people will not write honest reviews if their identity is attached. No competitor in this space has an authenticated-anonymous review system.

Second, radical transparency. We compute a transparency score for every facility based on how complete and verified their published information is. Facilities that disclose more -- costs, outcomes, staff credentials -- score higher. No facility can pay to improve their ranking. This is structural, not just policy: we are a nonprofit with no commercial relationships with facilities.

Third, decentralized data. All facility profiles, reviews, and outcomes live on the OriginTrail Decentralized Knowledge Graph -- a peer-to-peer network where no single company controls the data. Every claim is traceable and every change is auditable.

Fourth, AI-powered discovery. Instead of navigating filters, a user can describe their situation in natural language and get matched to appropriate care. The AI answers are sourced from verified data on the knowledge graph, not from marketing copy or hallucinated content.

---

## Slide 5: How It Works

**Title:** Architecture Overview

**Content:**

**Layer 1 -- Data Foundation**
SAMHSA baseline (~17,000 US facilities) + facility-submitted profiles published to the OriginTrail Decentralized Knowledge Graph

**Layer 2 -- Verified Identity**
Polkadot Proof of Personhood -- every user action is tied to a verified unique human identity, with zero personal information exposed publicly

**Layer 3 -- Application**
Search, reviews, funding finder, transparency scores -- a web platform that makes the data useful

**Layer 4 -- Outreach**
AI agents on social platforms (Telegram, Instagram, TikTok) citing verified data to meet people where they are

*"A decentralized database where no single company controls the data and every claim is traceable."*

**Speaker Notes:**

For non-technical audiences: Think of this as four layers working together. At the bottom, we have the data -- starting with the SAMHSA national dataset of roughly 17,000 US facilities, enhanced by facility-submitted profiles. This data lives on a decentralized knowledge graph, which is essentially a shared database that no single company owns or controls.

On top of that sits a verified identity layer. We use Polkadot's Proof of Personhood technology to confirm that every reviewer, every voter, every contributor is a real, unique human -- without requiring them to share their name, email, or any personal information. The wallet and blockchain are completely invisible to the end user. They sign up with an email and phone number; the verification happens behind the scenes.

The application layer is the website -- where people search, read reviews, find funding, and see transparency scores. And the outreach layer is a set of AI agents deployed on social platforms like Telegram, Instagram, and TikTok that can answer questions in real time, citing verified data from the knowledge graph rather than making things up.

For technical audiences: The DKG is OriginTrail v8, the identity layer is Polkadot PoP on the People Chain parachain, the AI inference runs through NeuroWeb (also a Polkadot parachain), and the application is a Next.js web app with a PostgreSQL cache for search performance. All DKG writes are server-side; private keys never touch the browser.

---

## Slide 6: Why Now

**Title:** The Building Blocks Now Exist

**Content:**

- **SAMHSA N-SSATS dataset** provides ~17,000 facility baseline -- free, public, and ready for import
- **Polkadot Proof of Personhood** is production-ready -- the identity primitive we need exists today
- **OriginTrail DKG v8** provides the decentralized data layer with proven supply chain provenance (pharma, food, BSI partnership)
- **AI agent deployment** is now accessible and affordable -- LangChain, OpenAI/Anthropic APIs, Telegram Bot API
- **Treatment transparency is a growing policy priority** -- Pew Charitable Trusts published a 2026 brief on measuring recovery outcomes
- **EKRA (2018) and FTC enforcement** have exposed the predatory referral model -- the market is ready for a trustworthy alternative

**Speaker Notes:**

The timing argument for Takes a Village is simple: the infrastructure building blocks now exist that did not exist two years ago.

Polkadot's Proof of Personhood identity primitive gives us anonymous-but-authenticated verification natively. OriginTrail's DKG v8 gives us a decentralized data layer with a proven track record in pharmaceutical and food supply chain provenance. AI agent deployment has become accessible and affordable thanks to LangChain and commercial LLM APIs. And the SAMHSA N-SSATS dataset gives us a baseline of roughly 17,000 facility records to start with -- for free.

On the policy side, treatment transparency is gaining momentum. The Pew Charitable Trusts published a brief in March 2026 specifically on measuring recovery outcomes. EKRA in 2018 and subsequent FTC enforcement actions have exposed the predatory referral model that dominated the industry. The market is not just ready for a trustworthy alternative -- the regulatory environment is actively pushing toward one.

---

## Slide 7: Traction

**Title:** Pre-Funding Execution

**Content:**

- **[X] waitlist signups** *(update with live Kit subscriber count)*
- **4 social media channels active** -- Instagram, TikTok, X, LinkedIn
- **42 v1 requirements defined and mapped** across 8 subsystems
- **5 research documents completed pre-funding** -- stack, features, architecture, pitfalls, synthesis
- **Full technical architecture, legal analysis, and 6-phase roadmap published** on GitHub
- **3 legal compliance gates identified and mapped** to specific phase boundaries -- not hidden, not deferred
- **Live website** at takesavillage.health

**Speaker Notes:**

For a pre-funding project, the traction signal here is not user numbers -- it is the depth of preparation. Most pre-seed projects come to funders with a pitch deck and an idea. We come with five completed research documents, 42 mapped requirements across 8 subsystems, a full technical architecture, a competitor analysis, a legal compliance analysis, and a 6-phase roadmap. All of it is published on GitHub.

This matters because it demonstrates that the founder has done the homework. The legal compliance gates -- Anti-Kickback Statute, 42 CFR Part 2, and FinCEN -- are not listed as risks on a slide. They are mapped to specific phase boundaries in the roadmap as hard blockers that must be resolved with attorneys before engineering begins. Grant reviewers who have seen projects fail because they ignored compliance will recognize this as a positive signal.

The waitlist count and social media presence are early indicators. The research corpus is the real credibility asset.

---

## Slide 8: Team

**Title:** Team

**Content:**

**Founder**
*[Name]* -- *[Background, relevant experience, why this mission matters personally]*

*[Insert founder bio: 2-3 sentences on background, domain connection, and what drives the mission]*

**Seeking:**
- Technical co-founder / CTO with Web3 + healthcare experience
- Advisory board members with healthcare policy, Web3 governance, or nonprofit operations expertise

**Advisory Board:**
*[List advisors if any, or note "Building advisory board -- interested parties welcome"]*

**Speaker Notes:**

For a solo non-technical founder, the research corpus is the credibility signal. The five research documents, the mapped requirements, and the legal analysis demonstrate execution capacity that is unusual for a pre-funding stage.

The honest framing: this is a solo founder with a clear vision and unusually deep preparation, seeking a technical co-founder and advisors to build the platform. The founder's connection to the mission -- why this matters personally -- is the story to tell here. Authenticity matters more than pedigree in the nonprofit space.

For Web3 funders in particular: the architecture choices (OriginTrail DKG, Polkadot PoP, NeuroWeb) demonstrate that the founder has done ecosystem-level research, not just picked "blockchain" as a buzzword.

---

## Slide 9: Market and Impact

**Title:** Scale of Impact

**Content:**

**US Market:**
- $42 billion substance abuse treatment industry
- ~17,000 treatment facilities
- ~2 million annual treatment admissions

**Impact Metrics (what success looks like):**
- Verified facilities on the platform
- Authenticated reviews submitted
- People connected to appropriate treatment
- Funding distributed through the platform
- Longitudinal outcome data published (6-month and 12-month follow-ups)

**Global Roadmap:**
- v1: United States
- v2: Canada, United Kingdom, Australia
- v3: EU, broader international

**Speaker Notes:**

This is a nonprofit. The "market" framing here is about impact scale, not revenue. The US substance abuse treatment industry represents $42 billion in annual spending across approximately 17,000 facilities and 2 million treatment admissions per year. That is the addressable universe.

Our impact metrics are not financial returns. Success looks like: more facilities with verified, transparent profiles; more real reviews from people who actually attended treatment; more people matched to appropriate care instead of whoever paid for the top search result; more funding distributed to people who need help paying for treatment; and -- uniquely -- longitudinal outcome data that shows whether treatment actually worked 6 and 12 months later. No platform in this space collects follow-up outcome data.

The global roadmap is US-first by design. The US has the largest single market, the most developed insurance and grants infrastructure to map, and the most acute transparency problem. Canada, the UK, and Australia share English-language regulatory frameworks and are natural v2 markets.

---

## Slide 10: Legal Awareness

**Title:** Three Compliance Gates -- Mapped Pre-Funding

**Content:**

**1. Anti-Kickback Statute (42 U.S.C. Section 1320a-7b(b))**
Token incentives for facility data contributions must be structured as compensation for data quality, not patient volume. Attorney review required before Phase 2.

**2. 42 CFR Part 2 -- Healthcare Privacy**
Stricter than HIPAA for substance abuse records. The review verification flow must use a de-identified token scheme. The knowledge graph must hold zero patient-linkable data -- ever. Attorney review required before Phase 2/3.

**3. FinCEN/BSA -- Money Transmission**
Smart contract disbursements to individuals may require MSB registration and money transmitter licenses. Attorney review required before Phase 4.

*"These are hard blockers at specific phase boundaries -- not risk items to parallelize with engineering."*

**Speaker Notes:**

This slide exists to demonstrate maturity, not to raise alarms. Most early-stage projects ignore compliance until it becomes a crisis. We have mapped three federal compliance gates to specific phase boundaries in our roadmap, and we treat them as hard blockers -- no engineering begins on the gated features until the relevant attorney review is complete.

The Anti-Kickback Statute applies because our token incentive mechanism for facility data contributions could be characterized as inducing referrals if structured incorrectly. The 2015-2020 Florida patient brokering crisis was prosecuted largely under AKS and state equivalents. We will engage an AKS-specific healthcare attorney before designing the incentive mechanism.

42 CFR Part 2 is stricter than HIPAA and governs substance abuse treatment records at virtually every US treatment facility that accepts Medicare or Medicaid. Our review verification flow -- where a facility confirms a patient attended -- must be designed so that confirmation uses a de-identified token, not a named patient record. Our knowledge graph must hold zero patient-linkable data, ever.

FinCEN applies because our funding pool feature involves smart contract disbursements in cryptocurrency. Depending on structure, this could constitute unregistered money transmission. We will not design or build the disbursement contracts until a FinCEN attorney has reviewed the structure.

Grant reviewers should read this slide as: this founder has done the legal homework. Investors should read it as: the compliance risk is mapped and managed, not ignored.

---

## Slide 11: Financials and Use of Funds

**Title:** Lean Start, Specific Needs

**Content:**

**Phase 0 (completed):** ~$100/year
- Domain registration + hosting (Vercel free tier) = near-zero cost
- Social media setup = free
- Research and planning = founder time

**Phase 1 needs (Foundation and Identity):**
- **Engineering:** Contract developer or technical co-founder for PoP identity integration, DKG gateway node deployment, SAMHSA ETL pipeline
- **Legal:** 3 attorney consultations (AKS, 42 CFR Part 2, FinCEN) -- estimated $5,000-$15,000
- **Infrastructure:** DKG gateway node hosting, cloud services -- estimated $100-$300/month
- **Operations:** Nonprofit incorporation, Grants.gov registration

**Seeking: $[amount] to fund Phase 1 (Foundation and Identity) through Phase 2 (Facility Registry)**

**Speaker Notes:**

Be specific about what the money funds. Funders want line items, not vague "building the platform."

Phase 0 cost near-zero -- domain registration, Vercel free tier hosting, and free social media tools. The research and planning that produced the five research documents, 42 requirements, and the 6-phase roadmap was founder time investment.

Phase 1 needs are concrete. The primary costs are engineering (either a contract developer or a technical co-founder to build the Polkadot PoP identity integration, deploy a DKG gateway node, and build the SAMHSA data pipeline), legal consultations with three specialized attorneys (healthcare kickback law, healthcare privacy law, and financial services law), and modest infrastructure costs for hosting.

The legal line item is non-negotiable -- those three attorney reviews are hard blockers in the roadmap. Cutting them cuts the project's viability.

---

## Slide 12: The Ask

**Title:** How to Get Involved

**Content:**

**We are seeking $[amount] in grant funding and early partnerships to build the technical platform.**

**Funding Pathways:**
- SAMHSA grants (behavioral health equity, technology innovation)
- Polkadot Treasury proposal (ecosystem value of PoP identity in social good)
- Tech-for-good foundations (RWJF, Omidyar Network, Mozilla Foundation)
- Impact investors and grant co-funders

**How to Get Involved:**
- **Fund us:** Grant applications, treasury proposals, and impact investment opportunities are open
- **Partner with us:** Data partnerships, facility onboarding, research institution collaboration
- **Join the waitlist:** https://takesavillage.health
- **Review our work:** https://github.com/paxtontribe/TakesaVillage

**Contact:** *[email address]*

**Speaker Notes:**

Tailor the ask per audience:

For grant reviewers (SAMHSA, RWJF): Emphasize the impact metrics -- verified facilities, people connected to treatment, funding distributed. Lead with the problem and the legal awareness slides. These reviewers want to see that funds will be used responsibly and that the project addresses a real, documented need.

For angel investors (health tech): Emphasize the market size ($42 billion), the competitive gap (no verified reviews exist), and the team's execution depth. Be upfront that this is a nonprofit -- there is no equity return. The investment case is impact investing or grant co-funding.

For Web3/crypto funders (Polkadot, OriginTrail): Emphasize the architecture -- PoP identity, DKG data layer, NeuroWeb AI inference. This is a real-world social good application that puts Polkadot infrastructure to genuine use, not a token project or DeFi protocol. The ecosystem value argument is strong.

For all audiences: the research corpus is available on GitHub. Invite reviewers to examine the technical architecture, legal analysis, and requirement mapping. Transparency is the product -- and it starts with how we present ourselves.

---

## Audience-Specific Emphasis Guide

Use this guide to customize the pitch for different funder audiences. The same 12 slides work for all audiences; adjust which slides you spend the most time on.

### Grant Reviewers (SAMHSA, RWJF, Pew)
- **Lead with:** Slides 2 (Problem), 3 (Who Is Hurt), 10 (Legal Awareness), 11 (Financials)
- **Emphasize:** Impact metrics, population served, compliance maturity, specific use of funds
- **De-emphasize:** Blockchain terminology, token economics, technical architecture details
- **Frame as:** "A data infrastructure and transparency initiative for substance abuse treatment"

### Angel Investors (Health Tech)
- **Lead with:** Slides 9 (Market), 8 (Team), 4 (Solution)
- **Emphasize:** Market size ($42B), competitive gap (no verified reviews), execution depth
- **Be upfront:** This is a nonprofit -- no equity, no token sale, no investor return in the traditional sense
- **Frame as:** "Impact investing in healthcare transparency infrastructure"

### Web3/Crypto Funders (Polkadot, OriginTrail, DAOs)
- **Lead with:** Slides 5 (How It Works), 6 (Why Now), 10 (Legal Awareness)
- **Emphasize:** Polkadot PoP as core identity, DKG as data layer, NeuroWeb for AI inference, ecosystem value
- **Frame as:** "A real-world social good application that demonstrates Polkadot identity infrastructure serving people in crisis"

### Important Note
Takes a Village is a nonprofit. There is no equity, no token sale, and no investor return in the traditional sense. Be clear about this with every audience. The investment case is impact investing, grant co-funding, or ecosystem value -- not financial returns.
