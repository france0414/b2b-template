# UI Kit - Industrial V1

Status: active baseline for the current design direction.

## Scope

This UI kit defines a stable visual and content system for B2B manufacturing pages.

- Visual tone: reliable, technical, export-ready
- Product context: spec-heavy catalog and application mapping
- Delivery context: reusable for template and forked child sites

## Token Baseline

Implementation source: `src/lib/ui-kit/industrial-v1.ts`

- `color`: neutral steel base + controlled cyan accent
- `typography`: IBM Plex Sans (+ serif emphasis)
- `spacing`: fixed 4-based scale
- `radius`: low to medium rounding for industrial feel
- `shadow`: restrained depth, no decorative glow
- `motion`: short, purposeful transitions only

## Component Standards

- Header/nav: structured hierarchy, category-first clarity
- Hero: value statement + trust metrics + dual CTA
- Product card: category -> product name -> short summary -> deterministic CTA
- Application card: outcome-focused summary + related product link
- Article card: date + heading + excerpt + read action
- CTA: primary filled, secondary outlined

## SEO + GEO Standards

- One H1 per page, then H2/H3 by topic depth
- Answer-first content blocks for AI citation friendliness
- Required metadata on each page:
  - title
  - description
  - open graph fields
- Preferred schema types by page type:
  - Organization
  - Product
  - Article
  - FAQPage

## Governance

- New visual needs should prefer token adjustments first.
- New data needs should prefer value/schema extension first.
- New components are only created when semantics are truly different.
- Child-site customization must not break core contracts.

## Current Usage

- Demo implementation page: `src/app/design-v2/page.tsx`
- Runtime baseline styles: `src/app/globals.css`
