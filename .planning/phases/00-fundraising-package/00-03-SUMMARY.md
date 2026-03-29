---
phase: 00-fundraising-package
plan: 03
subsystem: docs
tags: [pitch-deck, fundraising, grants, polkadot-treasury, one-pager, nonprofit]

# Dependency graph
requires:
  - phase: 00-fundraising-package
    provides: "Research corpus (SUMMARY.md, FEATURES.md, ARCHITECTURE.md, PITFALLS.md, STACK.md)"
provides:
  - "12-slide pitch deck content in markdown ready for Canva/Google Slides"
  - "Executive one-pager for cold outreach"
  - "Prioritized grant target list with 9 targets and immediate action items"
  - "Investor target list with 4 categories and outreach strategy"
  - "Polkadot Treasury proposal draft ready for Polkassembly submission"
affects: [fundraising-execution, polkadot-treasury, grant-applications]

# Tech tracking
tech-stack:
  added: []
  patterns: [audience-specific-pitch-customization, research-corpus-to-pitch-materials-pipeline]

key-files:
  created:
    - .planning/phases/00-fundraising-package/pitch-materials/pitch-deck-content.md
    - .planning/phases/00-fundraising-package/pitch-materials/one-pager.md
    - .planning/phases/00-fundraising-package/pitch-materials/grant-targets.md
    - .planning/phases/00-fundraising-package/pitch-materials/investor-targets.md
    - .planning/phases/00-fundraising-package/pitch-materials/polkadot-treasury-proposal-draft.md
  modified: []

key-decisions:
  - "Pitch deck uses markdown format for easy Canva/Google Slides conversion"
  - "Grant targets prioritize Polkadot Treasury as fastest path (4-6 weeks)"
  - "All investor materials lead with nonprofit disclaimer"
  - "Polkadot Treasury proposal targets Small Spender track (5,000-10,000 DOT)"

patterns-established:
  - "Audience-specific emphasis: same deck, different slide weighting per funder type"
  - "Research-backed pitch: all statistics sourced from existing research corpus, not invented"

requirements-completed: []

# Metrics
duration: 6min
completed: 2026-03-29
---

# Phase 0 Plan 3: Pitch Materials Summary

**12-slide pitch deck, executive one-pager, 9-target grant list, investor outreach strategy, and Polkadot Treasury proposal draft -- all derived from existing research corpus**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-29T20:32:48Z
- **Completed:** 2026-03-29T20:38:48Z
- **Tasks:** 2
- **Files created:** 5

## Accomplishments
- 12-slide pitch deck with content and speaker notes derived entirely from research corpus (SUMMARY.md, FEATURES.md, ARCHITECTURE.md, PITFALLS.md)
- Executive one-pager at 439 words for cold outreach with clear nonprofit positioning
- Prioritized grant target list with 9 targets, fit assessments, realistic timelines, and 6 immediate action items with URLs
- Investor target list with 4 categories, specific fund names, and phased outreach strategy
- Polkadot Treasury proposal draft with milestones, FAQ, and ecosystem value argument

## Task Commits

Each task was committed atomically:

1. **Task 1: Create pitch deck content and executive one-pager** - `44a11e4` (feat)
2. **Task 2: Create grant targets, investor targets, and Polkadot Treasury proposal** - `5246bfd` (feat)

## Files Created
- `.planning/phases/00-fundraising-package/pitch-materials/pitch-deck-content.md` - 12-slide pitch deck with speaker notes and audience-specific emphasis guide
- `.planning/phases/00-fundraising-package/pitch-materials/one-pager.md` - 439-word executive one-pager for cold outreach
- `.planning/phases/00-fundraising-package/pitch-materials/grant-targets.md` - 9 prioritized grant targets with action items and URLs
- `.planning/phases/00-fundraising-package/pitch-materials/investor-targets.md` - 4 investor categories with outreach strategy and nonprofit disclaimer
- `.planning/phases/00-fundraising-package/pitch-materials/polkadot-treasury-proposal-draft.md` - Complete Polkadot Treasury proposal draft for Polkassembly

## Decisions Made
- Pitch deck uses markdown format (not PowerPoint) for easy conversion to Canva or Google Slides by non-technical founder
- Polkadot Treasury proposal targets Small Spender track at 5,000-10,000 DOT, with submission gated on website being live
- Grant priority order: Polkadot Treasury (fastest, 4-6 weeks), OriginTrail relationship (no formal program), SAMHSA NOFOs (highest dollar, 3-6 months), RWJF (next cycle, 6-12 months)
- All investor materials lead with explicit nonprofit disclaimer -- no equity, no token sale, no investor return

## Deviations from Plan

None -- plan executed exactly as written.

## Known Stubs

The following placeholders exist in the pitch materials and require the founder to fill in:

| File | Placeholder | What's Needed |
|------|------------|---------------|
| pitch-deck-content.md | `[X] waitlist signups` (Slide 7) | Live Kit subscriber count |
| pitch-deck-content.md | `[Name]`, `[Background]` (Slide 8) | Founder bio |
| pitch-deck-content.md | `$[amount]` (Slides 11, 12) | Specific funding ask amount |
| pitch-deck-content.md | `[email address]` (Slide 12) | Contact email |
| one-pager.md | `[X] waitlist signups` | Live Kit subscriber count |
| one-pager.md | `[contact email]` | Contact email |
| polkadot-treasury-proposal-draft.md | `[Name]` | Founder bio |

These stubs are intentional -- they require founder-specific information that cannot be generated. The documents are otherwise complete and ready for use once these placeholders are filled.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required. All files are markdown documents ready for review and customization.

## Next Phase Readiness
- Pitch materials are complete and ready for funder outreach once founder fills in personal placeholders
- Polkadot Treasury proposal should be submitted after website is confirmed live
- Grant action items (Grants.gov registration, SAMHSA alerts, OriginTrail Discord) can begin immediately
- All materials reference takesavillage.health as the live website URL

---
*Phase: 00-fundraising-package*
*Completed: 2026-03-29*
