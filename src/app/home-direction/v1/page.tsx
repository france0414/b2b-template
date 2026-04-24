import type { Metadata } from "next";
import { HomeDirectionPage } from "@/components/home-direction/HomeDirectionPage";
import type { HomeDirectionStyles } from "@/components/home-direction/HomeDirectionPage";
import styles from "../../design-stitch/design-stitch.module.css";

export const metadata: Metadata = {
  title: "Home Direction V1 | Baseline",
  description: "Baseline homepage layout using the latest stitch-based implementation.",
};

export default function HomeDirectionV1Page() {
  return <HomeDirectionPage styles={styles as unknown as HomeDirectionStyles} />;
}
