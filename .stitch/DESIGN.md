# B2B Industrial Design System (Stitch Source of Truth)

## Brand Intent

- Positioning: Industrial manufacturing partner for export buyers
- Tone: Technical, reliable, decisive, low-noise
- UX priority: Fast product discovery -> spec comparison -> qualified inquiry

## Visual Direction

- Overall mood: Industrial editorial contrast
- Layout strategy: Full-bleed section shells + controlled inner content width
- Composition: Asymmetric blocks, featured cards, data rail, process bands
- Avoid: Generic card grids, purple gradients, overly rounded consumer look

## Color Roles

- `bg-canvas`: `#f5f4ef`
- `bg-surface`: `#ffffff`
- `bg-hero-deep`: `#0f172a`
- `text-primary`: `#0b1220`
- `text-secondary`: `#43546d`
- `line-default`: `#d9e2ec`
- `brand-accent`: `#0f766e`
- `brand-accent-soft`: `#ccfbf1`
- `signal-warn`: `#b45309`

## Typography

- Display/heading: strong industrial sans style (high contrast, tight tracking)
- Body: editorial serif for long-form readability
- Hierarchy rules:
  - One `H1` per page
  - Section `H2` for each major conversion block
  - Card titles use `H3`

## Spacing and Shape

- Spacing base: 4px grid; primary rhythm 12/16/24/32/48/64
- Radius: 12-20px for surfaces, pill only for tags/CTA
- Shadows: subtle to medium, no heavy glossy effects

## Motion

- Keep transitions short (150-220ms)
- Use motion only for hierarchy cues (hover lift, reveal, CTA emphasis)
- No decorative loops or distracting parallax

## Component Rules

- Hero: strong claim + procurement proof signals + dual CTA
- Product layer: one featured product + smaller scan cards
- Process layer: 3-step dark band (discover, compare, request)
- Application layer: one large narrative block + supporting cards
- Insight layer: answer-first excerpt blocks + AI/search signal panel

## SEO/GEO Rules

- Every page must include metadata (title + description + OG)
- Add JSON-LD for relevant page type (`Product`, `Article`, `FAQPage`, `Organization`)
- Prefer concise answer-first paragraphs in insight sections
- Keep semantic landmarks explicit (`header`, `main`, `section`, `article`, `footer`)

## Mapping to This Repo

- Block contract remains source of truth: `block + variant + config + items`
- Data contract remains source of truth: JSON files in `data/zh` and `data/en`
- Stitch output is visual reference; final implementation must map back to existing block/data contracts
