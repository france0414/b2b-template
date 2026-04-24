export const industrialUiKitV1 = {
  id: "industrial-v1",
  name: "Industrial Manufacturing Stable",
  intent: {
    tone: ["reliable", "technical", "export-ready"],
    useCase: "B2B manufacturing websites with spec-heavy product content",
  },
  color: {
    background: "oklch(0.98 0.004 240)",
    surface: "oklch(1 0 0)",
    surfaceDark: "oklch(0.2 0.02 250)",
    textPrimary: "oklch(0.22 0.01 250)",
    textSecondary: "oklch(0.46 0.02 250)",
    border: "oklch(0.9 0.01 250)",
    primary: "oklch(0.56 0.09 222)",
    primaryDark: "oklch(0.48 0.09 222)",
    accent: "oklch(0.78 0.09 195)",
    success: "oklch(0.68 0.12 155)",
    warning: "oklch(0.82 0.12 85)",
    danger: "oklch(0.62 0.2 28)",
  },
  typography: {
    headingFamily: "IBM Plex Sans",
    bodyFamily: "IBM Plex Sans",
    emphasisFamily: "IBM Plex Serif",
    scale: {
      h1: "3rem",
      h2: "2rem",
      h3: "1.5rem",
      h4: "1.25rem",
      body: "1rem",
      caption: "0.875rem",
      overline: "0.75rem",
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.6,
    },
  },
  spacing: {
    baseUnit: 4,
    scale: [4, 8, 12, 16, 24, 32, 48, 64],
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    pill: "9999px",
  },
  shadow: {
    card: "0 4px 16px rgba(15, 23, 42, 0.08)",
    panel: "0 10px 30px rgba(15, 23, 42, 0.18)",
  },
  motion: {
    durationFast: "150ms",
    durationBase: "220ms",
    easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
  },
  componentRules: {
    button: {
      primary: "filled high-contrast",
      secondary: "outlined with stable border",
      text: "low-noise inline action",
    },
    card: {
      product: "title + short spec summary + deterministic CTA",
      article: "date + heading + excerpt + read action",
    },
    nav: {
      style: "structured and hierarchical",
      mobile: "drawer with accordion categories",
    },
  },
  seoGeoRules: {
    headingHierarchy: "single H1, sectioned H2/H3",
    contentPattern: "answer-first paragraph + bullets/tables when needed",
    schemaPreference: ["Organization", "Product", "Article", "FAQPage"],
    metadata: "each page requires title, description, and open graph fields",
  },
} as const;

export type IndustrialUiKitV1 = typeof industrialUiKitV1;
