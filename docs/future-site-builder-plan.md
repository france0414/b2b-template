# Future Builder Launch Plan (Deferred)

## Purpose

This file records a future implementation track for:

- Template-shared architecture
- Fast fork workflow for new sites
- Theme and blueprint selection by designers
- Controlled visual editing with schema-safe JSON output

Current status: deferred. Do not start implementation in the current delivery phase.

## Why Deferred

This builder layer should start only after core delivery goals are stable. It is intentionally staged to avoid introducing complexity before baseline product capability is complete.

## Current Agreed Direction

- Architecture mode: B+ (Template + Theme Pack + Blueprint Pack + Controlled editing)
- Not pure freeform C-mode editor
- Prefer value/schema expansion before creating new components
- AI can propose JSON drafts, but all writes must pass schema validation

## Activation Gates (Reminder Triggers)

Start this track only when all gates below are met:

1. Core site is complete and stable for delivery.
2. Product filtering and document/download filtering are complete.
3. Decision is finalized on private site API integration and product variant strategy.
4. Two consecutive releases have no major regression on core pages.

## Suggested Start Timing

- Phase now: finish complete B2B website delivery and core product capabilities.
- Phase next: finalize filter/search/download logic and confirm data model decisions.
- Phase after: open Builder MVP kickoff.

## Builder MVP Scope (When Triggered)

Include only controlled features:

- Theme selection (Design MD / MDL mapped to tokens)
- Homepage block ordering (sortable)
- Add/remove blocks from allowed registry
- Structured block config editing (typed fields)
- Semi-custom block editing (whitelisted rich text tags)
- AI-guided block proposal -> schema validation -> preview -> commit

Exclude for MVP:

- Arbitrary CSS editing
- Arbitrary DOM-level layout hacking
- Direct code generation into template runtime
- Full backend CMS integration details (plan separately)

## Packaging and Deployment Rule

- Template and MDL libraries stay in dedicated source areas.
- Site instance stores only selected references (theme + blueprint + block config).
- Build output includes only selected and applied assets.
- Unselected themes/packs are not included in final deploy artifacts.

## Governance Rules

- Component contract stability first (schema is API).
- Visual differences should prefer theme tokens and layout recipes.
- New fields should be optional with defaults for backward compatibility.
- Truly new semantics should become private packs first, then promoted to shared template only after review.

## Implementation Readiness Checklist

Before kickoff:

- [ ] Confirm owner for schema governance.
- [ ] Confirm owner for design token governance.
- [ ] Define blueprint slot constraints and allowed reorder zones.
- [ ] Define AI output safety contract (allowed blocks/fields only).
- [ ] Define migration strategy from old site configs.

## Next Review Point

Review this file immediately after completing:

- full core site delivery
- filtering/download milestones
- private API + product variant decision

At that review, decide whether to start Builder MVP planning.
