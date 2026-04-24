import type { Metadata } from "next";
import { HomeDirectionPage } from "@/components/home-direction/HomeDirectionPage";
import type { HomeDirectionStyles } from "@/components/home-direction/HomeDirectionPage";
import styles from "./design-stitch.module.css";

export const metadata: Metadata = {
  title: "Industrial Procurement Homepage | B2B Template",
  description:
    "Stitch-derived industrial B2B homepage converted to Next.js with structured data contracts, semantic sections, and SEO/GEO-ready content flow.",
  openGraph: {
    title: "Industrial Procurement Homepage",
    description:
      "Engineering-grade B2B homepage with procurement lifecycle structure and conversion-focused content blocks.",
    type: "website",
  },
};

export default function DesignStitchPage() {
  return <HomeDirectionPage styles={styles as unknown as HomeDirectionStyles} />;
}
