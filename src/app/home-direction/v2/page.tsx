import type { Metadata } from "next";
import { HomeDirectionPage } from "@/components/home-direction/HomeDirectionPage";
import type { HomeDirectionStyles } from "@/components/home-direction/HomeDirectionPage";
import styles from "./home-v2.module.css";

export const metadata: Metadata = {
  title: "Home Direction V2 | Conservative Industrial",
  description: "Graphite-led industrial style with controlled red accents and fixed data structure.",
};

export default function HomeDirectionV2Page() {
  return <HomeDirectionPage styles={styles as unknown as HomeDirectionStyles} layout="v2" />;
}
