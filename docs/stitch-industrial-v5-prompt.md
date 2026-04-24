# Stitch Prompt Pack - Industrial V5

Use this prompt in Stitch to generate a homepage style aligned with this repo.

## Prompt

Design a high-fidelity desktop-first B2B industrial manufacturing homepage.

The page should feel like a premium engineering supplier site, not a generic startup landing page. Visual mood: industrial editorial contrast, technical authority, export-ready confidence.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, responsive desktop-first
- Colors:
  - Canvas: #f5f4ef
  - Surface: #ffffff
  - Hero deep: #0f172a
  - Primary text: #0b1220
  - Secondary text: #43546d
  - Border: #d9e2ec
  - Accent: #0f766e
  - Accent soft: #ccfbf1
  - Signal: #b45309
- Typography:
  - Display: condensed/strong industrial sans
  - Body: editorial serif for long-form copy
- Styles:
  - Full-bleed section shells with controlled content width
  - Radius 12-20px
  - Subtle to medium shadow depth

**PAGE STRUCTURE:**
1. Header/navigation
   - Logo left
   - Product / Applications / About / News / Contact
   - Utility CTA for inquiry
2. Hero (full-bleed)
   - Hard-hitting H1 for procurement buyers
   - Subtext about technical clarity and inquiry quality
   - Two CTAs: product-first and solution-first
   - Side signal panel with 3 metrics (<24h, 96%, 30+)
   - Add visual media strip with 3 industrial mood tiles
3. Product section
   - One featured product story card
   - Three smaller scan cards for quick model comparison
4. Process section (dark band)
   - 3 steps: discover -> compare -> request
5. Application section
   - One large primary use-case card + two supporting cards
6. Insight section
   - Answer-first content cards for SEO/GEO
   - Side signal panel explaining discoverability value
7. Final CTA strip
   - Conversion-focused closure for RFQ

**CONTENT TONE:**
- Avoid fluffy marketing language
- Use operational and measurable language
- Prioritize trust, precision, and speed of decision

## Implementation Note

After Stitch generation, map output back to:

- `Block` contract: `block + variant + config + items`
- JSON data source contracts in `data/zh` and `data/en`
- SEO/GEO requirements (metadata + schema)

Do not ship raw generated layout without mapping to the existing template contracts.
