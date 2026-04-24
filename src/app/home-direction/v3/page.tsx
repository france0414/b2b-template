import type { Metadata } from "next";
import { HomeDirectionPage } from "@/components/home-direction/HomeDirectionPage";
import type { HomeDirectionStyles } from "@/components/home-direction/HomeDirectionPage";
import styles from "./home-v3.module.css";

export const metadata: Metadata = {
  title: "Home Direction V3 | Brand-Forward Red",
  description: "Red-forward homepage direction for stronger visual recognition using the same data contracts.",
};

export default function HomeDirectionV3Page() {
  return <HomeDirectionPage styles={styles as unknown as HomeDirectionStyles} layout="v3" />;
}
