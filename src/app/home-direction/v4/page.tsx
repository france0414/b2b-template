import type { Metadata } from "next";
import { applications, company, news, products } from "@/lib/site-data";
import { HomeV4Client } from "./HomeV4Client";

export const metadata: Metadata = {
  title: "Home Direction V4 | Amber Industrial Editorial",
  description:
    "Full-viewport photo hero, scroll-reveal sections, large application images — amber industrial editorial direction.",
};

export default function HomeDirectionV4Page() {
  return (
    <HomeV4Client
      products={products}
      applications={applications}
      news={news}
      company={company}
    />
  );
}
