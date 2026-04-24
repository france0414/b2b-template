---
name: Industrial Manufacturing Design System
colors:
  surface: '#faf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#faf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ef'
  surface-container: '#efeee9'
  surface-container-high: '#e9e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1b1c19'
  on-surface-variant: '#45464d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006a63'
  on-secondary: '#ffffff'
  secondary-container: '#99efe5'
  on-secondary-container: '#006f67'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#331200'
  on-tertiary-container: '#cf6721'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#9cf2e8'
  secondary-fixed-dim: '#80d5cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#00504a'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68e'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#763300'
  background: '#faf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e3e3de'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Newsreader
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.08em
  technical-data:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-padding: 80px
  content-max-width: 1280px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system establishes a visual language of **Technical Authority**. It bridges the gap between raw industrial power and the sophisticated precision of modern engineering. The aesthetic is defined by "Industrial Editorial Contrast"—a mix of utilitarian structural elements and high-end typographic layouts found in premium technical journals.

The style is primarily **Corporate Modern** with a lean toward **Minimalism**, utilizing heavy whitespace and structural grid systems to convey organization and reliability. The goal is to evoke a sense of durability, precision, and legacy in a digital environment, making complex manufacturing data feel both accessible and prestigious.

## Colors

The palette is rooted in architectural and industrial materials. The **Canvas (#f5f4ef)** acts as a warm, concrete-like base that softens the starkness of digital screens, while **Surface (#ffffff)** is used to elevate interactive containers. 

**Hero Deep (#0f172a)** provides the "technical weight" used for primary navigation and high-impact headers. The **Accent (#0f766e)** and its **Soft (#ccfbf1)** counterpart represent precision and modern technology, used to draw focus to primary actions and active states. **Signal (#b45309)** is reserved for alerts, warnings, and mechanical status indicators, ensuring high visibility without breaking the sophisticated tone.

## Typography

The typography creates a deliberate tension between the industrial and the editorial. 

**Space Grotesk** serves as the display face. Its geometric, technical construction mimics the precision of CNC machining and blueprints. For body copy, **Newsreader** provides an authoritative, literary feel that suggests deep expertise and long-form technical documentation. **Inter** is utilized for functional UI elements—labels, data tables, and button text—where maximum legibility and a neutral, utilitarian tone are required. Always use uppercase for labels to emphasize the structural, blueprint-like quality of the design.

## Layout & Spacing

The design system employs a **Fixed Grid** model within **Full-Bleed Sections**. While background colors and images stretch to the viewport edges, content is strictly contained within a 1280px central column to maintain readability and focus.

A 12-column grid is used with a 24px gutter. Spacing follows a strict 8px rhythmic scale. Use generous vertical padding (80px+) between major sections to achieve the "editorial" look, ensuring that data-heavy components have sufficient "breathing room" to prevent cognitive overload.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Subtle Shadows**. Elements do not "float" high above the canvas; instead, they appear as precisely machined components resting on a surface.

- **Level 0 (Canvas):** #f5f4ef. The base layout.
- **Level 1 (Surface):** #ffffff. Used for cards and main content areas.
- **Shadows:** Use a medium-soft shadow (Y: 4px, Blur: 12px, Opacity: 6% of #0b1220) for standard cards.
- **Active State:** Use a deeper shadow (Y: 8px, Blur: 20px, Opacity: 10%) when an element is hovered or interacted with.
- **Borders:** A 1px solid border (#d9e2ec) should be used on all surface elements to provide definition against the canvas.

## Shapes

The shape language balances industrial rigidity with modern ergonomics. A **base radius of 12px** is applied to standard components like buttons and input fields. Larger containers, such as cards and modals, scale up to **20px radius**. 

This "Rounded" approach (Level 2) prevents the UI from feeling too "sharp" or aggressive, aligning it with the high-end, finished quality of modern industrial machinery. Full-bleed sections should have 0px radius at the viewport edges but may contain rounded nested elements.

## Components

- **Buttons:** Primary buttons use the Hero Deep (#0f172a) background with Inter Bold Uppercase text. Secondary buttons use a Border (#d9e2ec) with Primary Text.
- **Inputs:** Fields are Surface (#ffffff) with a 1px Border (#d9e2ec). On focus, the border shifts to Accent (#0f766e) with a subtle outer glow using Accent Soft.
- **Cards:** White surfaces with a 1px border and 20px corner radius. Use the Editorial Serif (Newsreader) for card titles to maintain the high-end feel.
- **Chips/Badges:** Use a pill shape (fully rounded) with Accent Soft (#ccfbf1) backgrounds and Accent (#0f766e) text for "In Production" or "Active" statuses.
- **Data Tables:** High-density layouts using Inter. Headers should be Hero Deep background with white uppercase text to act as a strong structural anchor.
- **Information Panels:** Use full-bleed background shifts to Hero Deep with light text to denote a transition in content or a "Technical Specs" section.