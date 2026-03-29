# Domain Pitfalls: Takes a Village

**Domain:** Healthcare-adjacent, Web3-based substance abuse treatment transparency platform
**Researched:** 2026-03-28
**Confidence note:** WebSearch and WebFetch tools unavailable during this research session. All findings are from training data (cutoff August 2025). Legal claims in particular MUST be verified with current sources and qualified legal counsel before building.

---

## Critical Pitfalls

Mistakes that cause rewrites, legal liability, or project shutdown.

---

### Pitfall 1: Misreading HIPAA Coverage — Assuming You're Either Fully Covered or Fully Exempt

**What goes wrong:** Teams building healthcare-adjacent platforms either (a) assume they're outside HIPAA entirely because they don't provide treatment, then collect data that actually triggers coverage, or (b) over-engineer for full HIPAA compliance when the actual obligation is narrower.

**Why it happens:** HIPAA only applies to "covered entities" (healthcare providers, health plans, healthcare clearinghouses) and their "business associates." A directory/referral platform that never touches protected health information (PHI) in a treatment context is not a covered entity. However, the line is easy to cross.

**The specific triggers for Takes a Village:**

- **FUND-05 (on-platform funding applications):** If the platform collects a user's diagnosis, treatment history, or insurance information as part of a funding application, and transmits that to a covered entity (a facility), the platform may become a Business Associate and must execute a BAA (Business Associate Agreement).
- **REV-01 (treatment attendance verification):** Verifying that a user attended a specific facility on specific dates requires the facility to confirm attendance. If that confirmation constitutes disclosure of PHI from the facility to the platform, the facility is disclosing PHI to a business associate — requiring a BAA.
- **REV-05 (anonymous outcomes to DKG):** Publishing anonymized outcomes to DKG is safe *if and only if* de-identification meets HIPAA's Expert Determination or Safe Harbor standard. "Anonymous" by design is not enough — HIPAA has a specific 18-identifier removal list. Publishing to a public blockchain where linkage attacks are possible is an active research area; assume the Safe Harbor standard is more conservative than blockchain anonymization schemes.
- **AI-01 through AI-03 (agents interacting with users about their treatment situation):** If agents collect symptoms, treatment history, or facility-specific questions in a way that creates records — even logs — review whether that constitutes PHI handling.

**What does NOT trigger HIPAA for this platform:**
- Publishing facility information (names, addresses, licensing, treatment types) — this is public information
- Aggregated, properly de-identified outcomes data — safe under HIPAA Safe Harbor
- Funding directory (a list of available grants) — not PHI
- Blockchain-native data that was never PHI to begin with

**The 42 CFR Part 2 hazard (more restrictive than HIPAA):** Substance abuse treatment records are governed by 42 CFR Part 2, which is STRICTER than HIPAA. Part 2 prohibits disclosure of substance use disorder (SUD) patient records without specific written consent, even to other healthcare providers. This applies to federally assisted SUD treatment programs. If the platform ever handles patient-specific records from these programs (even indirectly), Part 2 compliance is required.

**Key difference:** Under HIPAA, treatment records can be disclosed for treatment purposes without patient consent. Under 42 CFR Part 2, they cannot. Any facility that is "federally assisted" (receives any federal funding, Medicare, Medicaid) for SUD treatment is covered. That is most US treatment facilities.

**Consequences:** HHS OCR fines start at $100/violation and scale to $1.9M per violation category per year. 42 CFR Part 2 violations carry criminal penalties.

**Prevention:**
1. Engage a healthcare privacy attorney before building any data collection flow involving treatment history.
2. Default to: platform never stores user-facility-date linkages. Let users hold their own verification tokens.
3. For REV-01, design the verification flow so the facility confirms a de-identified token, not a named patient record.
4. Publish a written de-identification methodology for REV-05 / DKG outcomes before launch.
5. Execute BAAs with any facility that transmits any PHI to the platform, even for verification.

**Detection (warning signs):** If a lawyer says "you're just a directory, HIPAA doesn't apply" — push back and specifically ask about 42 CFR Part 2 and BAA obligations for the verification flow.

**Confidence:** MEDIUM (training data). Verify with healthcare privacy attorney before any data collection design is finalized.

---

### Pitfall 2: Anti-Kickback Statute Exposure — Patient Referral Inducements

**What goes wrong:** The Federal Anti-Kickback Statute (AKS), 42 U.S.C. § 1320a-7b(b), prohibits offering, paying, soliciting, or receiving anything of value to induce or reward referrals of items or services covered by federal healthcare programs (Medicare, Medicaid). The substance abuse treatment industry has been specifically targeted by DOJ prosecutions under AKS.

**Why it's an existential risk for Takes a Village:**

The "Patient Brokering" crisis of 2015–2020 in the Florida addiction treatment industry was largely prosecuted under AKS and state equivalents. Platforms that received fees per patient placed at facilities, or that directed patients based on which facility paid the highest "marketing fees," faced federal charges.

**The specific Takes a Village exposure points:**

- **DKG-01 / token rewards for knowledge contributions:** If facilities earn tokens for publishing their profiles, and those profiles result in patient referrals, the token reward could be characterized as remuneration for inducing referrals. Intent matters, but structure matters more. The token must be for the information contribution, not tied to patient outcomes.
- **FUND-04 / smart contract disbursements to verified individuals:** Disbursing funds to users who then use them at specific facilities creates a financial flow the platform partially controls. If the platform directed those users to that facility AND controls the funds, this is close to the prohibited pattern.
- **Transparency scores and ranking:** If the ranking methodology contains any element that could be influenced by payment (even indirectly), it violates the nonprofit/non-commercial commitment and risks AKS characterization.
- **Affiliate or partnership agreements with facilities:** Any arrangement where a facility provides anything of value (data, promotion, co-marketing) in exchange for favorable placement is a potential AKS violation if Medicare/Medicaid patients are involved.

**Safe harbor note:** AKS has statutory and regulatory safe harbors. The platform should be structured to fit the "personal services" safe harbor or the newer "care coordination" safe harbors added by the 21st Century Cures Act. These require fixed compensation (not per-referral), written agreements, and fair market value.

**State equivalents:** Every US state has its own patient brokering laws, many of which are broader than federal AKS and apply without the federal program connection. Florida's patient brokering statute (§ 817.505) is one of the broadest and has teeth. California, Texas, and New York have active enforcement.

**Consequences:** Federal AKS is a felony. Civil penalties under the False Claims Act can be three times the amount at issue. State violations add criminal and civil exposure.

**Prevention:**
1. Zero per-referral compensation to the platform from facilities — ever.
2. Token rewards must be for data quality, not patient volume. Structure this clearly in smart contract logic and legal agreements.
3. Engage an AKS-specific healthcare attorney (not a general corporate attorney) before the incentive mechanism is designed.
4. Never allow facilities to pay for any feature that would affect their ranking or discoverability.
5. Review all facility partnership agreements with AKS counsel before signing.

**Confidence:** MEDIUM-HIGH (well-established federal law, industry precedent from Florida prosecutions). Verify specific structural decisions with healthcare attorney.

---

### Pitfall 3: FTC Regulations — Endorsement Guidelines and Review Integrity

**What goes wrong:** The FTC's Endorsement Guides (16 CFR Part 255) require that material connections between reviewers and the reviewed party be disclosed. In healthcare, the FTC has taken additional action under Section 5 of the FTC Act against deceptive health claims.

**The specific Takes a Village exposure points:**

- **Fake reviews in healthcare/addiction treatment are a known FTC enforcement area.** The FTC has brought cases against companies that suppressed negative reviews, paid for positive reviews, or failed to disclose reviewer incentives.
- **Token incentives for reviews:** If users receive tokens for submitting reviews (even as part of the DKG incentive system), the FTC requires disclosure that the reviewer received compensation. "Verified anonymous reviews" + "token rewards for participation" creates a disclosure obligation even if the tokens are not cash.
- **Facility self-reported KPIs:** Facilities publishing their own "success metrics" to DKG constitutes advertising claims subject to FTC substantiation requirements. A facility claiming "85% 12-month sobriety rate" must have competent and reliable scientific evidence for that claim if the platform surfaces it.
- **AI agent claims:** AI agents that make factual health claims (even sourced from DKG) are subject to FTC's truth-in-advertising standards. The FTC issued guidance in 2023 on AI-generated content and endorsements.

**Prevention:**
1. Separate the review incentive from the review content. Reward for submitting (verified) outcomes data, not for positive reviews.
2. Disclose in the UI that contributors may earn tokens for verified data contributions.
3. Flag facility-reported KPIs as self-reported in the UI — do not present them as platform-verified unless they have been independently verified.
4. AI agent disclosure: agents must identify themselves as AI and not make specific treatment efficacy claims.

**Confidence:** MEDIUM (FTC enforcement patterns well-documented, specific AI guidance from training data). Check FTC.gov for current AI endorsement guidance before agent deployment.

---

### Pitfall 4: State Licensing Requirements for Behavioral Health Referral Services

**What goes wrong:** Some states require that entities making behavioral health referrals be licensed as "patient referral services" or that individuals making referrals hold clinical licenses. California, Florida, Texas, and New York have the most active regulatory frameworks.

**The specific exposure:**

- California AB 1316 (signed 2021) addressed addiction treatment referral practices. California's DHCS licenses SUD programs and has enforcement authority over referral practices.
- Florida's patient brokering and referral laws are among the strictest in the country following the 2015-2020 enforcement surge.
- Many states' attorney general offices have issued guidance or enforcement actions against online addiction treatment directories that directed users based on payment.

**What matters for Takes a Village:** Operating as a "passive directory" (like SAMHSA's locator) with merit-based ranking and no referral fees is the safest structural position. The moment the platform provides personalized matching (AI-03, SRCH-03), it moves closer to "referral service" territory in some state regulatory frameworks.

**Prevention:**
1. Legal review of referral service licensing requirements in launch states before the AI matching feature is built.
2. The AI matching output should be structured as "here are options based on your criteria" not "we recommend you go to X facility." The distinction matters legally.
3. Monitor California, Florida, Texas, New York regulatory guidance annually.

**Confidence:** MEDIUM (based on state-level regulatory patterns through 2025). Verify current state requirements with licensed healthcare attorneys in each launch state.

---

### Pitfall 5: Polkadot PoP Onboarding — Wallet Friction as a Mission-Critical Failure Mode

**What goes wrong:** The platform's entire trust model depends on users completing Polkadot Proof of Personhood onboarding. If that onboarding has significant friction, the platform's core user — someone in crisis, possibly not tech-savvy, possibly on a phone with limited bandwidth — will abandon before getting value.

**The PoP-specific friction points:**

- **Polkadot.js wallet installation:** Requires browser extension, which means desktop-only without additional effort. On mobile, Subwallet or Nova Wallet must be downloaded from an app store. This is a multi-step process before the user can even begin.
- **Seed phrase management:** Crypto-naive users who lose their seed phrase lose their identity on the platform. For a population dealing with substance abuse (cognitive impairment, unstable housing, phone loss), seed phrase security is a real-world failure mode.
- **PoP verification process:** Polkadot's PoP system (via Encointer or similar) requires either in-person attendance at a "key signing party" or video verification. As of mid-2025, PoP Level 2 verification was still maturing in terms of global coverage and UX. Requiring Level 2 for voting (DAO-02) may severely limit governance participation.
- **Gas/transaction fees:** Even if transaction fees are subsidized by the platform, users must understand they're interacting with a blockchain. The cognitive overhead is non-trivial for the target demographic.

**What killed similar projects:** BrightID, a proof-of-personhood protocol, struggled with cold-start network effects — verification requires social graphs or in-person events that don't exist for new users in new geographies. Humanode and Proof of Humanity both faced low adoption outside crypto-native communities.

**Crypto-curious vs. crypto-native gap:**
- Crypto-native users: understand wallets, seed phrases, gas, signing. ~5% of population.
- Crypto-curious: have heard of crypto, might have an exchange account, don't understand self-custody. ~20%.
- Everyone else: the most important users for this platform. They need to not know they're using a blockchain.

**Prevention — the "no crypto required" UX imperative:**
1. Abstract the wallet entirely. Use a custodial or MPC wallet provisioned automatically during onboarding. The user creates an account with email or phone; the wallet is created behind the scenes.
2. Use Polkadot's account abstraction patterns (EIP-4337 equivalent exists in the Substrate ecosystem via account abstraction pallets) to sponsor transactions.
3. PoP verification should happen after the user has gotten value from the platform, not before. Gate advanced features (DAO voting, DKG publishing) behind PoP Level 2, not basic search and reviews.
4. Provide a "key recovery" option via social recovery (Substrate-native social recovery pallet) so seed phrase loss doesn't mean account loss.
5. Test onboarding with non-technical users specifically, not with the development team.

**Detection:** If the onboarding requires the user to understand what a "wallet" is, it will fail with the target demographic.

**Confidence:** HIGH (well-documented pattern in Web3 consumer adoption literature through 2025).

---

### Pitfall 6: DAO Governance Failures — Plutocracy, Apathy, and Attack Vectors

**What goes wrong:** DAOs fail in predictable ways. The specific design choices in Takes a Village (one-person-one-vote via PoP, Foundation veto) mitigate some failures but introduce others.

**Pattern 1 — Voter apathy:** Most DAOs see participation rates of 5-15% on most proposals. For facility dispute resolution (DAO-05), low participation means a small, motivated group (e.g., a facility's supporters or detractors) can swing outcomes. This is the "motivated minority" failure mode.

**Pattern 2 — Sybil attacks even with PoP:** PoP systems reduce but do not eliminate Sybil risk. If the PoP Level 2 process has any gap in verification quality, determined bad actors (facilities trying to suppress negative outcomes, competitors trying to tank rivals) can acquire multiple identities. In the addiction treatment space, facilities have historically invested heavily in reputation management — this threat is real.

**Pattern 3 — Foundation veto capture:** The Foundation retains veto power when DAO action violates "legal, ethical, or mission constraints." This is necessary but creates a centralization vector. If the Foundation becomes captured (key personnel change, funding pressure, legal threat), the veto can be used against community interests. This is not hypothetical — it is the failure mode of most "DAO with training wheels" projects.

**Pattern 4 — Governance plutocracy via token concentration:** DAO-02 specifies one-person-one-vote (not token-weighted). This is correct for this domain. However, if DKG contribution tokens can be accumulated by facilities (who have professional resources to contribute at scale), those facilities may develop disproportionate social influence even without formal voting power.

**Pattern 5 — Proposal spam and governance exhaustion:** Without a meaningful cost to propose, DAOs get flooded with low-quality proposals. This exhausts serious voters and drives down participation.

**Polkadot-specific DAO notes:**
- OpenGov (Polkadot's governance system) uses approval voting, conviction voting, and track-based permissions. These are more sophisticated than most DAO systems but require user education.
- The NeuroWeb / OriginTrail ecosystem has not had a long history of contested DAO governance at the time of this research. Governance attacks on Polkadot parachains have been rare but the ecosystem is small enough that they are plausible.

**Prevention:**
1. Implement conviction voting or time-locked voting to reduce low-effort Sybil participation.
2. Require PoP Level 2 with a minimum platform tenure (e.g., 3 months) before voting on facility disputes.
3. For facility dispute resolution specifically, use a jury model: randomly select N verified voters rather than whole-community vote, to prevent coordinated attacks.
4. Publish the Foundation veto criteria in a legal charter that requires multi-sig to modify. Make "Foundation capture" resistant by design.
5. Implement proposal deposits (refundable if proposal passes a quality threshold) to reduce spam.
6. Design governance quorum requirements specifically for dispute resolution — a dispute with 5 votes should not be binding on a facility.

**Confidence:** HIGH (DAO failure modes are extensively documented from 2020-2025 DAO ecosystem).

---

### Pitfall 7: DKG Cold Start — The Knowledge Graph Chicken-and-Egg Problem

**What goes wrong:** The platform's core value proposition — "verified data on the DKG" — requires populated DKG. Users won't come to an empty DKG. Facilities won't publish to a DKG with no users. Researchers won't publish to a DKG nobody reads. This is a pure cold-start problem.

**How similar projects have failed:**

- **General knowledge graph projects:** Google Knowledge Graph, Wikidata, Freebase — all succeeded only with massive institutional investment in seeding or by leveraging existing structured data (DBpedia importing Wikipedia). Projects that relied on organic contribution without seeding failed to reach critical mass.
- **Healthcare-specific data commons:** Many have launched with fanfare and died because voluntary contribution from healthcare institutions has structural barriers: legal review, IT integration requirements, de-identification processes, and institutional inertia.
- **OriginTrail ecosystem history:** OriginTrail's DKG has had meaningful adoption in supply chain (pharma track-and-trace, food provenance) but consumer-facing healthcare knowledge graphs built on it are newer territory. The SCAN supply chain model works well when supply chain participants have contractual reasons to publish. Treatment facilities don't have that contractual compulsion.

**The specific Takes a Village cold-start dynamics:**

- Facilities will not invest in creating a DKG profile until there are users checking profiles.
- Users will not trust or use the platform until there are populated, verified profiles.
- Researchers will not publish papers as Knowledge Assets until the platform demonstrates scientific credibility.
- The token incentive (DKG-01) helps but does not solve the problem alone — facilities won't do administrative work for token rewards unless the tokens have near-term value.

**The "data quality vs. data quantity" cold-start sub-problem:** Seeding with low-quality data to achieve coverage will backfire. If the first 100 facilities have sparse, unverified profiles, the platform looks unreliable at launch. Better to launch with 20 deeply verified facilities than 200 shallow ones.

**Prevention:**
1. Pre-seed phase (before public launch): Hire a dedicated "facility onboarding" team. Pay staff to build initial profiles on behalf of early facilities, getting explicit permission. This is not user-generated content — this is editorial content with a clear provenance chain.
2. Prioritize SAMHSA-listed facilities: SAMHSA's National Survey of Substance Abuse Treatment Services (N-SSATS) publishes structured data on ~17,000 US treatment facilities. Import this as the baseline skeleton. Each SAMHSA listing becomes a stub Knowledge Asset that facilities can claim and enrich.
3. Offer facilities a concrete "early adopter" benefit: a verified badge, free analytics, or priority support — not just tokens.
4. Partner with 1-2 state SUD agencies or behavioral health associations to get batch endorsement and referrals for facility onboarding.
5. Research paper bootstrapping: Partner with a university SUD research center to publish 10-20 papers as Knowledge Assets at launch. NIDA (National Institute on Drug Abuse) has extensive published research that could be structured as initial assets.
6. Do not open public access until minimum viable DKG density is achieved: suggested threshold is 50+ verified facilities across 5+ states covering 10+ treatment types.

**Confidence:** HIGH (cold-start problem is well-documented; OriginTrail SCAN seeding approach based on public documentation through 2025).

---

### Pitfall 8: AI Agent Crisis Intervention — When "Answer Questions" Meets Suicidality

**What goes wrong:** AI agents deployed on social platforms (TikTok, Instagram, Telegram) interacting with people struggling with addiction will encounter crisis situations. Some percentage of users will express suicidal ideation, describe overdoses in progress, or request information that could enable self-harm. The platform's agents must handle this correctly — a failure here is not a UX bug, it is a life-threatening and legally significant failure.

**The regulatory and liability dimension:**

- The FCC and FTC have both expressed positions on AI-mediated mental health crisis interactions. No specific federal AI crisis intervention law exists as of 2025, but case law on digital platform liability for self-harm is evolving rapidly.
- If an agent fails to escalate a genuine crisis (e.g., a user expresses suicidal intent and the agent continues providing facility listings), and a harm results, the platform has significant tort exposure. The "Section 230 immunity" defense is increasingly contested for AI-generated responses.
- 988 Suicide and Crisis Lifeline integration (AI-04) is necessary but not sufficient. The agent must correctly identify crisis signals in natural language, which is a hard ML problem.

**The specific failure modes:**

- **Missed crisis signals:** Users in crisis often don't use explicit language ("I want to die"). They use indirect language ("I don't think I can do this anymore," "nothing matters," "I've been using so much I just don't care"). A keyword-based escalation system will miss most of these.
- **False positive escalation:** Overly sensitive escalation frustrates users who are discussing their situation candidly but are not in crisis. This erodes trust in the agent.
- **Platform-specific context loss:** Each social platform (TikTok, Telegram, Instagram) has different message formats, character limits, and API constraints. Crisis detection must work across all of them consistently.
- **The "3am problem":** Crisis is most likely to occur outside business hours. The 988 escalation must work asynchronously — the agent cannot say "call this number" and consider the job done. It needs to provide immediate stabilizing resources, not just a referral.
- **Multilingual crisis detection:** Spanish-language crisis detection is particularly important for the US SUD population.

**Prevention:**
1. Use an ML model trained specifically on crisis language, not a general-purpose sentiment classifier. Crisis NLP is an active research area — models like Detect (crisis detection) or clinically validated NLP tools exist.
2. Implement multi-turn conversation analysis — a single message is often insufficient; the context of the conversation matters.
3. Immediate response protocol: when crisis is detected, the agent provides immediate stabilizing language AND the 988 number AND text-to-988 (text "HELLO" to 741741 is the Crisis Text Line) before offering any other resources.
4. Log all crisis escalations (not the content — the fact that escalation occurred) for quality monitoring. Review missed escalations retroactively.
5. Human in the loop for confirmed crisis: route confirmed crisis interactions to a trained crisis counselor within the org, not just to an external helpline.
6. Do not deploy agents on any platform until crisis escalation has been validated with real-world testing, not just unit tests.
7. AI-04 (the escalation requirement) must be the first agent capability built and the last to be relaxed — it is not a feature, it is a safety requirement.

**Confidence:** HIGH (crisis intervention in AI is well-documented from 2022-2025 research and platform incidents).

---

### Pitfall 9: Fake Reviews in Substance Abuse Treatment — The Industry-Specific Severity

**What goes wrong:** The addiction treatment industry has a documented history of fake review manipulation. Unlike restaurant reviews, fake reviews in this domain can directly result in people seeking care at dangerous or ineffective facilities.

**The documented pattern:**

- Treatment facilities have used reputation management firms to post fake positive reviews on Yelp, Google, and Healthgrades.
- Competing facilities have used fake negative reviews to damage rivals.
- "Patient brokers" (the 2015-2020 Florida crisis) created fake review ecosystems to drive patient referrals.
- SAMHSA has published guidance on recognizing fake reviews in addiction treatment specifically.

**The Umanitek Guardian dependency:** The platform plans to use Umanitek Guardian for fraud detection (AUTH-05). This is appropriate. However, Umanitek Guardian must be evaluated specifically against the attack patterns known in addiction treatment:
- Review farms (multiple reviews from similar device fingerprints or IP ranges)
- Coordinated review timing (10 five-star reviews posted in one week after a negative review)
- Identity spoofing (creating PoP identities specifically to post reviews)
- Facility-side manipulation (staff posting reviews posing as former patients)

**The verification gap in REV-01:** Verifying treatment attendance requires the facility to confirm the user attended. This creates a collusion vector: facilities confirm attendance for employees or friends posting fake positive reviews. The verification system must be resistant to this.

**Prevention:**
1. Treatment attendance verification should cross-reference multiple signals: facility confirmation, insurance claim records (where available and consented), date-of-service patterns, behavioral signals.
2. Implement velocity limits: no more than N reviews per facility per time window from newly-created accounts.
3. Require a minimum account age (e.g., 60 days) before posting a review.
4. Flag anomalous review patterns automatically: sudden influx of positive reviews after a negative one, geographically clustered reviewers, reviews with similar language.
5. Publish the review integrity methodology publicly — transparency about how fake reviews are detected is itself a trust signal.
6. For the PoP system specifically: a PoP identity that is only used to post one review is a red flag. Weight reviews from accounts with platform history.

**Confidence:** HIGH (industry pattern well-documented through 2025, SAMHSA and investigative journalism sources).

---

### Pitfall 10: Crypto Funding Disbursement — KYC/AML Requirements

**What goes wrong:** FUND-04 describes platform-managed funding pools disbursed via smart contracts to verified individuals. This is potentially the most legally complex feature in the entire product.

**The regulatory framework:**

- **FinCEN (Financial Crimes Enforcement Network):** Any entity that qualifies as a "money services business" (MSB) under 31 CFR 1022 must register with FinCEN, implement a BSA compliance program, and file Suspicious Activity Reports (SARs). The threshold for individual crypto transfers that require reporting is $10,000 (same as cash).
- **Money transmitter licenses (MTL):** Entities transmitting value (including crypto) to individuals may require money transmitter licenses in each state where recipients reside. 49 states have money transmitter license requirements. This is expensive ($25,000-$100,000+ per state) and operationally complex.
- **FinCEN's 2019 guidance on convertible virtual currency** explicitly stated that exchanges of virtual currency for real currency (or services) are subject to BSA/AML requirements.
- **OFAC sanctions compliance:** Any crypto disbursement system must screen recipients against OFAC's Specially Designated Nationals list. Disbursing to a sanctioned individual is a strict-liability violation.

**The specific FUND-04 exposure:**

- Disbursing USDC, USDT, ETH, BTC, or DOT to individuals requires KYC on those individuals unless the amounts are de minimis and structured to avoid MSB status.
- "Verified individuals" via Polkadot PoP is not equivalent to KYC for BSA purposes. FinCEN KYC requires name, address, date of birth, and ID verification — PoP is a Sybil-resistance mechanism, not a financial KYC process.
- If the platform is receiving donated funds and disbursing them to individuals, it may be operating as a money transmitter regardless of the crypto-native framing.
- Nonprofit status does not exempt an organization from FinCEN/MSB requirements.

**The charitable giving exception:** If the platform structures funding disbursements as grants (not transfers of value to the individual, but direct payments to facilities on behalf of individuals), the regulatory exposure may be reduced. This is the model used by nonprofit tuition payment organizations — they pay the institution, not the student.

**Prevention:**
1. Do not build FUND-04 (direct smart contract disbursements to individuals) without a FinCEN/BSA attorney review first. This is the feature most likely to make the platform an unregistered money transmitter.
2. Explore the "pay the facility, not the individual" model — platform receives charitable donations, issues grants to facilities on behalf of patients. This is legally cleaner.
3. If direct disbursement is essential, research the FinCEN de minimis thresholds and structure the program to stay clearly below MSB thresholds, or register as an MSB and build the compliance program.
4. Do not launch FUND-04 in v1. Build it after legal structure is established. It should be v2 at earliest.
5. OFAC screening must be implemented for any disbursement flow, regardless of amount.

**Confidence:** MEDIUM-HIGH (FinCEN MSB requirements well-established; specific application to smart-contract-mediated nonprofit disbursements is an evolving area). Verify with FinCEN-specialized attorney before any design work on FUND-04.

---

## Moderate Pitfalls

---

### Pitfall 11: OriginTrail DKG Knowledge Asset Cost Volatility

**What goes wrong:** Publishing Knowledge Assets to the OriginTrail DKG requires TRAC tokens. If TRAC price increases significantly, the cost to maintain or publish Knowledge Assets becomes unpredictable for a nonprofit.

**Prevention:**
1. Model the cost of maintaining the entire facility registry at various TRAC price points ($0.05, $0.50, $5.00) and ensure grant/donation runway covers the worst case.
2. Explore whether OriginTrail offers institutional pricing or partnerships for nonprofits.
3. Design Knowledge Assets for efficiency — don't publish redundant data; structure assets so updates are incremental.

**Confidence:** MEDIUM (TRAC token economics based on OriginTrail documentation through 2025; token price is inherently unpredictable).

---

### Pitfall 12: Social Platform API Dependency for AI Agents

**What goes wrong:** AI agents deployed on TikTok, Facebook, Instagram, Telegram, YouTube, and Snapchat (AI-02) are entirely dependent on those platforms' API policies, which change frequently and unpredictably.

- TikTok's API access for third-party agents has been restricted multiple times.
- Meta (Facebook/Instagram) has altered its API access repeatedly (the Cambridge Analytica fallout being the most dramatic example).
- Telegram is generally more permissive but has its own compliance requirements.
- Any platform ban or policy change can take down a deployment channel with no notice.

**Prevention:**
1. Treat social platform agent deployments as inherently ephemeral. The core product must be valuable without them.
2. Prioritize Telegram (most stable API, largest crypto-native community overlap) and Facebook (largest SUD support group presence) first.
3. Build platform-agnostic agent logic — the agent's reasoning and DKG query logic should be decoupled from the platform integration layer.
4. Maintain direct web/app channels as primary, social agents as supplementary acquisition.

**Confidence:** HIGH (social platform API instability is well-documented across the industry).

---

### Pitfall 13: W3C/GSI Standard Fragmentation

**What goes wrong:** The platform intends to use W3C standards (likely Verifiable Credentials, DID) and GS1 standards for Knowledge Asset structure. These standards overlap in healthcare and can be interpreted inconsistently.

- W3C DID (Decentralized Identifiers) has multiple method specifications — choosing the wrong one creates migration debt.
- GS1 healthcare identifiers and W3C VC structures don't always map cleanly.
- HL7 FHIR (the dominant healthcare data standard) is not mentioned in the project requirements but may be necessary for interoperability with real health systems.

**Prevention:**
1. Use W3C VC for credential structures and GS1 for physical/organizational identifiers where GS1 is the industry standard.
2. Consult OriginTrail's life sciences team — they have done the W3C/GS1 integration work for pharma supply chain and have reference implementations.
3. Add HL7 FHIR compatibility to v2 requirements — insurance companies and EHR systems speak FHIR, not GS1/VC.

**Confidence:** MEDIUM (standards landscape based on documentation through 2025).

---

### Pitfall 14: 42 CFR Part 2 and Blockchain Immutability Conflict

**What goes wrong:** 42 CFR Part 2 grants patients the right to have their records amended or removed from SUD treatment records under specific circumstances. Blockchain-based systems are architecturally immutable — you cannot delete data from a public chain.

**The specific conflict:**
- If any data on the OriginTrail DKG is linkable to a specific patient's SUD treatment history, that patient may have a legal right to have it removed under 42 CFR Part 2 or GDPR (for future international expansion).
- "Knowledge Asset unpublishing" on OriginTrail DKG marks assets as inactive but does not delete them from the underlying data layer.

**Prevention:**
1. Design the data model so that the DKG contains zero patient-linkable data. All patient-linked data stays off-chain in platform databases.
2. DKG Knowledge Assets should contain: facility information, research papers, aggregate outcomes data — never individual treatment records.
3. The "anonymized individual outcomes" (REV-05) that go to DKG must be aggregated at the cohort level, not individual submissions that could be de-anonymized.
4. Document this design decision in the technical architecture and have it reviewed by a healthcare privacy attorney.

**Confidence:** HIGH (42 CFR Part 2 and blockchain immutability conflict is a known design tension as of 2025).

---

## Minor Pitfalls

---

### Pitfall 15: Polkadot PoP Level 2 Geographic Coverage Gaps

**What goes wrong:** PoP Level 2 verification for DAO voting (DAO-02) may have poor coverage in certain US regions at launch. Rural areas, which have high SUD rates, may be underserved by the PoP verification infrastructure.

**Prevention:** Track PoP Level 2 coverage geographically. If rural coverage is insufficient at launch, allow Level 2 verification via an alternative method (video KYC) as a temporary bridge while the PoP network matures.

---

### Pitfall 16: Token Reward Hyperinflation and Contribution Gaming

**What goes wrong:** If the DKG contribution reward mechanism (DKG-01, DKG-02) is too generous relative to token supply, early contributors can accumulate tokens in ways that distort governance or create a dump-and-exit dynamic that undermines the token's utility.

**Prevention:**
1. Model token emission schedule against expected contribution volume before launch.
2. Implement contribution quality gates — automated checks that low-quality Knowledge Assets (sparse data, unverified claims) earn minimal or no rewards.
3. Design token utility to outweigh speculative value — tokens should be primarily useful for platform governance and DKG query credits, not for speculation.

---

### Pitfall 17: Facility Verification Lag and Profile Staleness

**What goes wrong:** Facility licensing status, accepted insurance, and capacity change frequently. A facility that loses its license but retains a high transparency score on the platform becomes an active hazard.

**Prevention:**
1. Build automated continuous verification into Phase 2 — pull from SAMHSA, state licensing databases via APIs on a weekly or monthly schedule.
2. Implement a "verification freshness" signal in the transparency score — a profile not updated in 6 months degrades its score.
3. License revocation events (when detectable via API) should trigger immediate profile suppression pending review.

---

## Phase-Specific Warnings

| Phase | Likely Pitfall | Mitigation |
|-------|---------------|------------|
| Phase 1 (Auth) | PoP onboarding friction kills user acquisition before product is validated | Abstract wallet, custodial or MPC provisioning, gate PoP Level 2 behind advanced features only |
| Phase 2 (DKG/Facilities) | Cold-start: no facilities = no value | Pre-seed from SAMHSA N-SSATS data; hire onboarding staff; do not open to public until 50+ verified facilities |
| Phase 2 (DKG/Facilities) | AKS exposure in facility partnership design | No per-referral anything; AKS attorney review before any facility agreement is signed |
| Phase 2 (DKG/Facilities) | 42 CFR Part 2 / blockchain immutability | Design data model with zero patient-linkable data on DKG from day one |
| Phase 3 (Reviews) | Fake review attack from facilities | Multi-signal verification; velocity limits; require account age |
| Phase 3 (Reviews) | HIPAA BAA obligation from verification flow | Design verification so facility confirms token, not patient record; BAA may still be required |
| Phase 4 (Funding) | FUND-04 = potential unregistered money transmitter | Do not build until FinCEN attorney review; structure as facility grants, not individual disbursements |
| Phase 4 (DAO) | Voter apathy + motivated minority attacks on facility disputes | Jury model for disputes; conviction voting; minimum tenure requirement for voting |
| Phase 5 (AI Agents) | Missed crisis escalation on social platforms | Crisis NLP must be built and validated before any public agent deployment |
| Phase 5 (AI Agents) | Social platform API changes kill agent channels | Decouple agent logic from platform integration; treat channels as ephemeral |
| All Phases | FTC review fake/incentivized reviews | Disclose token incentives; label self-reported KPIs as self-reported |

---

## Legal Review Requirements Before Building

The following design decisions require qualified legal review BEFORE engineering work begins:

| Decision | Legal Domain | Urgency |
|----------|-------------|---------|
| REV-01 treatment attendance verification design | Healthcare privacy (HIPAA + 42 CFR Part 2) | Phase 2, before design |
| DKG-01 token rewards for facility contributions | Federal anti-kickback statute | Phase 2, before design |
| FUND-04 smart contract disbursements to individuals | FinCEN/BSA, money transmitter licensing | Phase 4, before design |
| AI-01 through AI-03 agent data logging | HIPAA business associate status | Phase 5, before design |
| SRCH-03 AI matching / AI-03 personalized recommendations | State referral service licensing | Phase 3, before public launch |
| REV-05 outcomes on DKG | HIPAA de-identification + 42 CFR Part 2 | Phase 2, before design |

---

## Sources

**Note:** Web research tools were unavailable during this research session. All findings are based on training data through August 2025 and should be verified against current sources.

**High-confidence sources to verify against:**
- HHS OCR: https://www.hhs.gov/hipaa/for-professionals/index.html (HIPAA covered entity definitions)
- SAMHSA 42 CFR Part 2 guidance: https://www.samhsa.gov/about-us/who-we-are/laws-regulations/confidentiality-regulations-faqs
- OIG Anti-Kickback Statute: https://oig.hhs.gov/compliance/anti-kickback-statute/index.asp
- FinCEN MSB guidance: https://www.fincen.gov/resources/statutes-and-regulations/bank-secrecy-act (virtual currency section)
- FTC Endorsement Guides: https://www.ftc.gov/legal-library/browse/rules/endorsement-guides (16 CFR Part 255)
- OriginTrail DKG documentation: https://docs.origintrail.io
- Polkadot PoP documentation: https://wiki.polkadot.network/docs/learn-identity
- NIDA research publications for DKG seeding: https://nida.nih.gov/research
- 988 Suicide and Crisis Lifeline integration specs: https://988lifeline.org/partners/
- Crisis Text Line integration: https://www.crisistextline.org/text-us/
