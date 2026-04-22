# Component Migration Checklist

> Goal: Import existing template components safely, then split into fixed and customizable zones without breaking current pages.

## Phase 0 - Preflight

- [ ] Confirm template source location (repo path or zip path)
- [ ] Confirm import scope for this round (Home / Products / Blog / About / Applications)
- [ ] Create backup checkpoint commit before migration

## Phase 1 - Clear and Validate

- [ ] Remove temporary page-level UI logic only (keep routing and data contracts)
- [ ] Keep JSON data adapters and page routes intact
- [ ] Run verification after cleanup:
  - [ ] `npm run lint`
  - [ ] `npm run build`
  - [ ] Check routes: `/`, `/applications`, `/products`, `/blog`, `/about`

## Phase 2 - Import Template Components

- [ ] Import base template components into `src/components/template/`
- [ ] Do not bind template components directly to page data yet
- [ ] Validate each imported component can render with mock props

## Phase 3 - Component Planning and Split

## Fixed Components Zone

Place shared, reusable components in `src/components/fixed/`:

- [ ] Header / Footer
- [ ] Section wrappers
- [ ] Product card
- [ ] Article card
- [ ] CTA blocks
- [ ] Core form shells

## Custom Components Zone

Place client-specific visual blocks in `src/components/custom/`:

- [ ] Hero variants
- [ ] Application showcase blocks
- [ ] Brand storytelling sections
- [ ] Export/marketing highlight blocks

## Phase 4 - Integration Gate

- [ ] Build adapter layer between JSON and UI props
- [ ] Keep fixed/custom components independent from each other
- [ ] Add stable integration points (typed props, no hidden global dependency)
- [ ] Resolve coupling immediately when discovered (do not defer)

## Phase 5 - Final Verification

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Visual sanity pass on all core pages
- [ ] Confirm no component import breaks other features

## Rollback Rule

If Phase 2 or Phase 4 fails validation, revert to last checkpoint and re-import in smaller batches.
