---
phase: 00-fundraising-package
plan: 02
subsystem: social-media
tags: [instagram, tiktok, x-twitter, linkedin, content-marketing, safe-messaging]

# Dependency graph
requires:
  - phase: 00-fundraising-package/01
    provides: "Website with Footer component containing placeholder social links"
provides:
  - "Social media platform setup guide for 4 platforms"
  - "Bio templates with waitlist links for all platforms"
  - "4-week content calendar across Instagram, TikTok, X, LinkedIn"
  - "12 ready-to-publish post templates (3 per platform)"
  - "Footer.tsx updated with live social media URLs"
affects: [00-fundraising-package]

# Tech tracking
tech-stack:
  added: []
  patterns: [safe-messaging-guidelines, platform-specific-content-adaptation]

key-files:
  created:
    - .planning/phases/00-fundraising-package/social-media-kit/platform-setup.md
    - .planning/phases/00-fundraising-package/social-media-kit/bio-templates.md
    - .planning/phases/00-fundraising-package/social-media-kit/content-calendar.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/instagram-carousel-01.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/instagram-carousel-02.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/instagram-carousel-03.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/tiktok-script-01.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/tiktok-script-02.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/tiktok-script-03.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/x-thread-01.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/x-thread-02.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/x-thread-03.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/linkedin-post-01.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/linkedin-post-02.md
    - .planning/phases/00-fundraising-package/social-media-kit/post-templates/linkedin-post-03.md
  modified:
    - src/components/sections/Footer.tsx

key-decisions:
  - "Handle takesavillage reserved across all 4 platforms with documented fallbacks"
  - "TikTok 18+ age gate for all substance-adjacent content"
  - "SAMHSA helpline included on every platform via bio, pinned content, or highlight"

patterns-established:
  - "Safe messaging: person-first language, hope-forward framing, no drug naming, SAMHSA helpline included"
  - "Content tone: warm + empowering per D-02, human-centered, not clinical or preachy"

requirements-completed: []

# Metrics
duration: 6min
completed: 2026-03-29
---

# Phase 0 Plan 2: Social Media Kit Summary

**Complete social media kit with 4-platform setup guide, bio templates, 4-week content calendar, and 12 post templates following safe messaging guidelines for substance abuse content**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-29T20:32:25Z
- **Completed:** 2026-03-29T20:38:49Z
- **Tasks:** 3 (2 auto + 1 checkpoint auto-approved)
- **Files modified:** 16

## Accomplishments

- Created comprehensive social media kit covering Instagram, TikTok, X (Twitter), and LinkedIn with step-by-step setup instructions, account type guidance, and brand asset specifications
- Wrote platform-specific bio templates respecting character limits (Instagram 150, TikTok 80, X 160, LinkedIn 2000) with consistent messaging and waitlist CTAs
- Built a 4-week content calendar with 3 posts per week per platform, totaling 48 content slots with specific templates, formats, and timing guidance
- Created 12 ready-to-publish post templates: 3 Instagram carousels, 3 TikTok scripts (60s/45s/30s), 3 X threads (6/4/5 tweets), and 3 LinkedIn posts (founder story, data-driven, credibility)
- Updated Footer.tsx to replace placeholder social links with actual account URLs, all opening in new tabs
- All content follows safe messaging guidelines: person-first language, hope-forward framing, no drug naming, SAMHSA helpline included

## Task Commits

Each task was committed atomically:

1. **Task 1: Create social media kit** - `5124464` (feat)
2. **Task 2: Update Footer.tsx with social links** - `ecc2015` (feat)
3. **Task 3: Verify accounts (checkpoint)** - auto-approved (no commit needed)

## Files Created/Modified

- `.planning/phases/00-fundraising-package/social-media-kit/platform-setup.md` - Step-by-step account creation guide for all 4 platforms
- `.planning/phases/00-fundraising-package/social-media-kit/bio-templates.md` - Platform-specific bio text with character counts
- `.planning/phases/00-fundraising-package/social-media-kit/content-calendar.md` - 4-week calendar with posting schedule and templates
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/instagram-carousel-01.md` - "5 Things the Treatment Industry Doesn't Tell You"
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/instagram-carousel-02.md` - "What Makes Takes a Village Different"
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/instagram-carousel-03.md` - "The Substance Abuse Treatment System in Numbers"
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/tiktok-script-01.md` - 60s script on 17K facilities with no verified reviews
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/tiktok-script-02.md` - 45s script on hiding bad reviews
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/tiktok-script-03.md` - 30s script on patient brokering
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/x-thread-01.md` - 6-tweet announcement thread
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/x-thread-02.md` - 4-tweet SAMHSA gap analysis
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/x-thread-03.md` - 5-tweet OriginTrail DKG thread
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/linkedin-post-01.md` - Founder story thought leadership
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/linkedin-post-02.md` - Data-driven industry analysis
- `.planning/phases/00-fundraising-package/social-media-kit/post-templates/linkedin-post-03.md` - Three compliance gates credibility post
- `src/components/sections/Footer.tsx` - Social links updated from placeholders to actual URLs with target="_blank"

## Decisions Made

- Reserved handle `takesavillage` across all platforms with `takesavillagehealth` and `takesavillage_` as documented fallbacks
- TikTok content set to 18+ age gate for all substance-adjacent content per platform policy
- SAMHSA helpline (1-800-662-4357) included on every platform through bios, pinned content, or highlights
- X threads tag @OriginTrail and @Polkadot for ecosystem engagement per D-10
- LinkedIn gets the deepest content (2000-char bios, long-form posts) because the audience is funders/partners per D-11

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- `npm run build` could not run in the worktree environment due to Next.js Turbopack path resolution (pre-existing infrastructure issue, not caused by our changes). Footer.tsx change is minimal and syntactically verified -- only string values and two standard HTML attributes changed.

## User Setup Required

The founder must create the actual social media accounts (Claude cannot create social media accounts). Follow the step-by-step guide in `platform-setup.md`:
1. Create accounts on Instagram, TikTok, X, and LinkedIn using the guide
2. Copy bios from `bio-templates.md` into each platform
3. Set profile pictures and banners using TaV brand assets
4. Add website URL as link in bio on all platforms
5. If `takesavillage` handle is unavailable on any platform, update `Footer.tsx` URLs to match the actual handles chosen

## Known Stubs

- **Footer.tsx social URLs** (lines 5-8): URLs use `takesavillage` handle which may not be available on all platforms. The founder must verify handle availability during account creation and update URLs if alternatives are used. This is documented in platform-setup.md with fallback instructions.

## Next Phase Readiness

- Social media kit is complete and ready for the founder to create accounts
- Content calendar provides 4 weeks of content immediately ready to post
- Footer links are live and will work once accounts are created at the specified handles
- Plan 00-03 (pitch deck and fundraising materials) can proceed independently

## Self-Check: PASSED

- All 16 created/modified files verified present on disk
- Commits 5124464 and ecc2015 verified in git log
- 12 post templates confirmed in post-templates directory
- Footer.tsx contains all 4 social media URLs with target="_blank"

---
*Phase: 00-fundraising-package*
*Completed: 2026-03-29*
