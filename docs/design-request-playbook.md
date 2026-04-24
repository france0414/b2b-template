# Design Request Playbook

Use this template when asking for homepage design work to get higher-quality output consistently.

## 1) Outcome first

State business goal in one line:

- "This homepage must improve qualified RFQ conversion for industrial buyers."

## 2) Visual direction (choose one)

- `Industrial Dashboard` (high contrast, operational panels)
- `Precision Minimal` (clean, premium, restrained)
- `Editorial Industrial` (strong typography + technical storytelling)

## 3) Hard constraints (must include)

- Full-bleed section shells with controlled content width
- Keep existing data contracts (`products`, `applications`, `news`, `company`)
- Keep route and block structure maintainable
- SEO/GEO required (metadata + JSON-LD + semantic headings)

## 4) Required sections

List exact section order:

1. Hero
2. Product section (1 featured + 3 scan cards)
3. Process (discover -> compare -> request)
4. Application matrix
5. Insights
6. Final CTA

## 5) Quality bar

Ask for explicit quality threshold:

- "No template-looking card wall"
- "Need clear rhythm changes between sections"
- "Need at least one asymmetric composition"

## 6) Deliverable format

Request these outputs every time:

- New page path (e.g. `/design-vX`)
- Files changed list
- Lint/build verification

---

## Copy/Paste Prompt Template

"Build a [Visual direction] homepage for our B2B industrial site.

Goal: improve qualified RFQ conversion.

Must keep existing data contracts and be production-ready in Next.js.

Required sections in order:
1) Hero
2) Product (featured + 3 scan cards)
3) Process band
4) Applications
5) Insights
6) Final CTA

Quality bar:
- No generic template look
- Strong section rhythm and at least one asymmetric layout
- SEO/GEO complete (metadata + FAQ/Product/Article schema where relevant)

Deliver as new route first, then report changed files and lint/build status."
