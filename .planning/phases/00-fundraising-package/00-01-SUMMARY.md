---
phase: 00-fundraising-package
plan: 01
subsystem: ui
tags: [nextjs, tailwind, shadcn, motion, kit, landing-page, seo]

# Dependency graph
requires: []
provides:
  - Complete landing page at takesavillage.health
  - Kit (ConvertKit) waitlist email capture via API route
  - Brand identity with teal/amber color scheme
  - SEO metadata and Open Graph tags for social sharing
  - Six content sections communicating TaV mission to visitors and funders
affects: [00-02-social-media, 00-03-pitch-materials]

# Tech tracking
tech-stack:
  added: [next@16.2.1, react@19.2.4, tailwindcss@4, shadcn/ui, motion, lucide-react, class-variance-authority]
  patterns: [app-router, server-components, css-theme-variables, scroll-reveal-animation]

key-files:
  created:
    - src/app/layout.tsx
    - src/app/page.tsx
    - src/app/api/waitlist/route.ts
    - src/app/robots.ts
    - src/app/sitemap.ts
    - src/app/globals.css
    - src/components/WaitlistForm.tsx
    - src/components/sections/Hero.tsx
    - src/components/sections/Problem.tsx
    - src/components/sections/Solution.tsx
    - src/components/sections/HowItWorks.tsx
    - src/components/sections/ForFunders.tsx
    - src/components/sections/Footer.tsx
    - src/lib/kit.ts
    - src/lib/utils.ts
    - .env.example
    - public/og-image.png
  modified: []

key-decisions:
  - "Used Tailwind v4 CSS @theme syntax instead of tailwind.config.ts (v4 convention)"
  - "Kit V3 API at api.convertkit.com for waitlist capture"
  - "Inter font as primary typography via next/font/google"
  - "Brand: teal #2D7D6F primary, amber #F4A261 accent, navy #1A1A2E text"

patterns-established:
  - "Section components in src/components/sections/ with co-located content"
  - "WaitlistForm as reusable client component embedded in multiple sections"
  - "LazyMotion + domAnimation scroll-reveal pattern for section entrances"
  - "Tailwind v4 @theme inline block for design tokens"

requirements-completed: []

# Metrics
duration: 10min
completed: 2026-03-29
---

# Phase 0 Plan 1: Landing Page Website Summary

**Next.js 16 landing page with six content sections, Kit waitlist capture, teal/amber brand identity, and SEO metadata for the TaV fundraising package.**

## Performance

- **Duration:** 10 minutes
- **Started:** 2026-03-29T20:19:07Z
- **Completed:** 2026-03-29T20:29:17Z
- **Tasks:** 2 (1 auto + 1 auto-approved checkpoint)
- **Files modified:** 30

## Accomplishments
- Built complete deployable landing page with all six sections per D-07: Hero, Problem, Solution, How It Works, For Funders, Footer
- Integrated Kit (ConvertKit) V3 API for waitlist email capture with email validation and error handling
- Established brand identity: teal #2D7D6F primary, amber #F4A261 accent, Inter typography
- Created SEO metadata with Open Graph and Twitter card tags for social sharing
- For Funders section communicates technical depth, legal diligence (AKS, 42 CFR Part 2, FinCEN), and links to GitHub planning docs
- SAMHSA helpline (1-800-662-4357) prominently displayed in footer

## Task Commits

Each task was committed atomically:

1. **Task 1: Scaffold Next.js project with brand identity and all page sections** - `f882efa` (feat)
2. **Task 2: Verify website locally and deploy to Vercel** - auto-approved checkpoint

**Plan metadata:** (pending)

## Files Created/Modified
- `src/app/layout.tsx` - Root layout with Inter font, SEO metadata, Open Graph tags
- `src/app/page.tsx` - Main page composing all sections with motion scroll-reveal
- `src/app/api/waitlist/route.ts` - POST endpoint forwarding to Kit API with email validation
- `src/app/globals.css` - Brand colors and Tailwind v4 @theme configuration
- `src/app/robots.ts` - Allow all crawlers, reference sitemap
- `src/app/sitemap.ts` - Single entry for homepage
- `src/components/WaitlistForm.tsx` - Reusable email capture form with loading/success/error states
- `src/components/sections/Hero.tsx` - Mission statement with waitlist CTA
- `src/components/sections/Problem.tsx` - Four statistics about the broken treatment system
- `src/components/sections/Solution.tsx` - Four differentiators (Verified Reviews, Radical Transparency, Decentralized Data, AI Discovery)
- `src/components/sections/HowItWorks.tsx` - Three-step flow (Search, Verify, Connect)
- `src/components/sections/ForFunders.tsx` - Funder-facing section with legal awareness and GitHub link
- `src/components/sections/Footer.tsx` - Social links, SAMHSA helpline, waitlist form
- `src/lib/kit.ts` - Kit API integration (subscribeToWaitlist function)
- `src/lib/utils.ts` - cn() utility for Tailwind class merging
- `.env.example` - Template for KIT_API_KEY and KIT_FORM_ID
- `public/og-image.png` - Placeholder teal OG image (to be replaced with Canva design)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Fixed broken npm/npx shims on Node.js v24**
- **Found during:** Task 1 scaffolding
- **Issue:** npm and npx shims in ~/.local/bin/ used relative require paths that failed with Node.js v24
- **Fix:** Rewrote shims with absolute paths to npm lib directory
- **Files modified:** ~/.local/bin/npm, ~/.local/bin/npx (system files, not committed)

**2. [Rule 3 - Blocking] Adapted from Tailwind v3 config to Tailwind v4 CSS syntax**
- **Found during:** Task 1
- **Issue:** Plan specified tailwind.config.ts but create-next-app@latest scaffolds Tailwind v4 which uses CSS @theme blocks instead
- **Fix:** Put all brand colors and design tokens in src/app/globals.css @theme inline block
- **Files modified:** src/app/globals.css

**3. [Rule 1 - Bug] Fixed missing Github icon in lucide-react**
- **Found during:** Task 1 build
- **Issue:** `Github` icon was removed from lucide-react; build failed with "Export Github doesn't exist"
- **Fix:** Replaced with `ExternalLink` icon
- **Files modified:** src/components/sections/Footer.tsx

## Verification Results

- `npm run build` exits 0 (Turbopack, 11.1s compilation)
- ESLint passes with no errors
- All 30+ acceptance criteria verified programmatically (all PASS)
- TypeScript compilation clean

## Known Stubs

- **Social media links** in Footer.tsx (lines 4-8): href="#" placeholder URLs for Instagram, TikTok, X, LinkedIn. Will be updated in Plan 00-02 (social media setup).
- **OG image** at public/og-image.png: Simple teal rectangle placeholder. To be replaced with Canva-designed image.
- **Waitlist counter** in Hero: Not implemented (plan marked as optional). Can be added via Kit API subscriber count endpoint.

## Self-Check: PASSED

All 17 key files verified present. Commit f882efa verified in git log.
