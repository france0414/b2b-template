import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Direction Lab | B2B Template",
  description: "Compare homepage style directions with shared content and data contracts.",
};

const VERSION_CARDS = [
  {
    href: "/home-direction/v1",
    title: "V1 Baseline (Stitch)",
    description: "Current finalized baseline used as control version.",
    badge: "Baseline",
  },
  {
    href: "/home-direction/v2",
    title: "V2 Conservative Industrial",
    description: "Graphite-heavy industrial tone with red action accents.",
    badge: "Candidate",
  },
  {
    href: "/home-direction/v3",
    title: "V3 Brand-Forward Red",
    description: "High-impact red-led visual hierarchy for stronger brand recall.",
    badge: "Candidate",
  },
];

export default function HomeDirectionIndexPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Homepage Direction Lab</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Version Comparison Workspace</h1>
        <p className="max-w-3xl text-base text-slate-600">
          V1, V2, and V3 share the same site data contracts. This workspace is for style and layout direction only, then one version
          is selected and promoted to the real homepage.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {VERSION_CARDS.map((card) => (
          <article key={card.href} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">{card.badge}</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
            <Link
              href={card.href}
              className="mt-4 inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Open Version
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
