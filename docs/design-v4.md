# V4 Design Direction — Amber Industrial Editorial

## Reference Inspiration

**Site analyzed:** topone-m.com  
**Industry:** CNC / Precision Machining Manufacturer (Taiwan, B2B)

### topone-m.com Key Observations

| Dimension | What topone-m does |
|-----------|-------------------|
| Color | Navy primary, white sections, teal accent |
| Hero | Full-width rotating carousel banners |
| Products | 4-tile category grid |
| Applications | Sector grid (Aerospace, Auto, Medical) |
| Stats | Year of exp, global reach, production volume |
| Tone | Professional / technical / conservative |
| Layout | Very standard: header → hero → grid → grid → footer |

---

## V4 Design Intent

Move away from the teal + dark-slate palette that v1–v3 all share.  
Push toward a **premium industrial editorial** aesthetic — closer to a high-end manufacturing brand than a typical product catalog.

### Color Palette

| Role | Token | Value |
|------|-------|-------|
| Page background | `--bg` | `#fafaf8` warm off-white |
| Hero / CTA bg | `--dark` | `#0c0a09` warm near-black |
| Primary accent | `--amber` | `#d97706` amber-600 |
| Amber muted | `--amber-light` | `#fef3c7` |
| Amber on dark | `--amber-bright` | `#fbbf24` amber-400 |
| Dark text | `--ink` | `#1c1917` |
| Body text | `--muted` | `#78716c` warm stone |
| Border | `--line` | `#e7e5e4` |
| Stats band bg | `--charcoal` | `#1c1917` |

**Why amber?** Amber reads as precision, warmth, premium — different from the cool teal used in v1–v3. It has industrial energy without feeling cold.

---

## Layout Structure (V4 Unique)

```
┌──────────────────────────────────────────────────────┐
│  HERO (dark #0c0a09)                                 │
│  Left: tag + huge headline + CTA buttons             │
│  Right: amber diagonal panel with 3 metrics          │
│  Left amber accent bar (6px vertical strip)          │
├──────────────────────────────────────────────────────┤
│  STATS BAND (charcoal #1c1917)                       │
│  Horizontal ticker: Precision • Capacity • Certified │
├──────────────────────────────────────────────────────┤
│  PRODUCTS (cream #fafaf8)                            │
│  Left col: featured card (image + specs)             │
│  Right col: numbered list rows (01 / 02 / 03)        │
├──────────────────────────────────────────────────────┤
│  APPLICATIONS (dark #0c0a09)                         │
│  2/3 width: primary app with gradient overlay        │
│  1/3 width: 2 secondary cards (glass style)          │
├──────────────────────────────────────────────────────┤
│  PROCESS (amber #d97706)                             │
│  Horizontal 3-step timeline on amber bg              │
│  Dark text on amber for contrast                     │
├──────────────────────────────────────────────────────┤
│  INSIGHTS (cream #fafaf8)                            │
│  2-col: article list + amber signal box (sticky)     │
├──────────────────────────────────────────────────────┤
│  CTA (dark #0c0a09)                                  │
│  Large heading + amber primary button                │
└──────────────────────────────────────────────────────┘
```

---

## What Makes V4 Different from V1–V3

| Feature | V1–V3 | V4 |
|---------|-------|----|
| Accent color | Teal (#0f766e) | Amber (#d97706) |
| Hero bg | Dark blue/gray | Warm black (#0c0a09) |
| Hero layout | 2-col metric rail | Split: copy / diagonal amber panel |
| Page bg | Slate (#f5f4ef) | Warm cream (#fafaf8) |
| Products layout | Feature card + scan cards | Feature card + numbered list rows |
| Applications bg | Same as page | Dark (#0c0a09) for contrast |
| Process bg | Dark navy | Amber (accent section) |
| CTA style | Border-top muted | Bold dark section |

---

## Typography

- Headings: 800 weight, tight letter-spacing (−0.02em)
- Display sizes: `clamp(2.5rem, 6vw, 5rem)` for hero, `clamp(2rem, 4vw, 3rem)` for sections
- Eyebrow labels: 0.65–0.7rem, 0.16em tracking, uppercase
- Body: 0.875rem, 1.7 line-height
- Spec tags: amber light bg (`#fef3c7`), dark amber text

---

## Responsive Breakpoints

| Breakpoint | Change |
|------------|--------|
| ≥1024px | Full 2-col hero, 2-col product grid, 2-col app grid |
| <1024px | Stack hero, product list below featured, app grid stacks, process steps stack vertically |
| <640px | Metrics stack to single column |
