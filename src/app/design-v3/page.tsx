import type { Metadata } from "next";
import { Barlow, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import { applications, company, news, products } from "@/lib/site-data";

const displaySans = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display-sans",
});

const editorialSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-editorial-serif",
});

export const metadata: Metadata = {
  title: "Design V3 | Industrial B2B Conversion Layout",
  description:
    "A premium industrial B2B web style combining technical clarity, export trust signals, and SEO/GEO-first content architecture.",
  keywords: [
    "industrial website",
    "B2B manufacturing web design",
    "SEO GEO B2B layout",
    "export supplier website design",
  ],
  openGraph: {
    title: "Industrial B2B Conversion Layout - Design V3",
    description:
      "Professional B2B page concept focused on specification clarity, trust signals, and structured content for search and AI engines.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes this layout suitable for industrial buyers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The layout prioritizes technical specification visibility, clear decision pathways, and evidence-based trust sections, which align with industrial B2B buying behavior.",
      },
    },
    {
      "@type": "Question",
      name: "How does this page support SEO and GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The page uses semantic landmarks, heading hierarchy, answer-first copy blocks, and JSON-LD schema so both search engines and AI assistants can parse and cite content efficiently.",
      },
    },
  ],
};

export default function DesignV3Page() {
  const topProducts = products.slice(0, 4);
  const topApplications = applications.slice(0, 3);
  const topArticles = news.slice(0, 3);

  return (
    <div
      className={`${displaySans.variable} ${editorialSerif.variable} space-y-16 font-[family-name:var(--font-display-sans)] text-slate-900`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950 px-8 py-14 text-slate-100 md:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="inline-flex rounded-full border border-slate-500/70 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
              Design V3 · Industrial Conversion System
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Built for procurement confidence,
              <span className="block font-[family-name:var(--font-editorial-serif)] text-cyan-300">
                not just visual impression.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
              {company.name} combines industrial credibility, product discoverability, and response-speed messaging so
              buyers can move from first visit to qualified inquiry in fewer steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-cyan-300 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
                Explore Systems
              </Link>
              <Link
                href="/applications"
                className="rounded-full border border-slate-400 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-800"
              >
                Solution Pathways
              </Link>
            </div>
          </div>

          <aside className="space-y-4 rounded-2xl border border-slate-700 bg-slate-900/85 p-5 backdrop-blur">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Trust Metrics</h2>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <article className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">RFQ response target</p>
                <p className="mt-2 text-2xl font-bold text-cyan-300">&lt; 24h</p>
              </article>
              <article className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Repeat order ratio</p>
                <p className="mt-2 text-2xl font-bold text-cyan-300">68%</p>
              </article>
              <article className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Export destinations</p>
                <p className="mt-2 text-2xl font-bold text-cyan-300">30+</p>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="v3-capability" className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Capability Matrix</p>
            <h2 id="v3-capability" className="mt-1 text-3xl font-semibold text-slate-900">
              Technical Positioning That Supports Buying Decisions
            </h2>
          </div>
          <Link href="/about" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            Quality and Company Profile
          </Link>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="min-w-full border-collapse text-sm">
            <caption className="sr-only">Manufacturing capability comparison table</caption>
            <thead className="bg-slate-900 text-left text-slate-100">
              <tr>
                <th className="px-4 py-3 font-semibold">Capability</th>
                <th className="px-4 py-3 font-semibold">Standard</th>
                <th className="px-4 py-3 font-semibold">Buyer Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-200">
                <td className="px-4 py-3">Process consistency</td>
                <td className="px-4 py-3">SOP-driven quality checkpoints</td>
                <td className="px-4 py-3">Lower variance in delivered batches</td>
              </tr>
              <tr className="border-t border-slate-200 bg-slate-50">
                <td className="px-4 py-3">Specification clarity</td>
                <td className="px-4 py-3">Structured specs and category taxonomy</td>
                <td className="px-4 py-3">Faster model comparison and shortlisting</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="px-4 py-3">Export communication</td>
                <td className="px-4 py-3">Inquiry-ready response templates</td>
                <td className="px-4 py-3">Reduced clarification loops with suppliers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="v3-products" className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Product Systems</p>
          <h2 id="v3-products" className="mt-1 text-3xl font-semibold text-slate-900">
            Catalog Blocks with Conversion-Grade Clarity
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {topProducts.map((product) => (
            <article key={product.id} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-cyan-500/50 hover:shadow-lg">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{product.category}</p>
              <h3 className="mt-2 min-h-14 text-lg font-semibold leading-6 text-slate-900">{product.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
              <Link href={`/products/${product.slug}`} className="mt-5 inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-cyan-700">
                Specification Page {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="v3-applications" className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Application Navigation</p>
            <h2 id="v3-applications" className="mt-1 text-3xl font-semibold text-slate-900">
              Outcome-Driven Entry for Non-Technical Buyers
            </h2>
          </div>
          <Link href="/applications" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            Full Application List
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {topApplications.map((application, index) => (
            <article key={application.id} className="relative rounded-xl border border-slate-200 bg-white p-5">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-slate-100">
                {index + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{application.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{application.summary}</p>
              <Link href={`/applications/${application.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                Related Product Mapping {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="v3-insights" className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">SEO + GEO Content Layer</p>
          <h2 id="v3-insights" className="mt-1 text-3xl font-semibold text-slate-900">
            Expert Content That Improves Search and AI Citation Potential
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {topArticles.map((article) => (
            <article key={article.id} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{article.date}</p>
              <h3 className="mt-2 text-lg font-semibold leading-6 text-slate-900">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                Read Insight {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-900 bg-slate-900 px-8 py-10 text-slate-100">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Final CTA</p>
            <h2 className="mt-2 text-3xl font-semibold">Need a quote-ready page architecture for your manufacturing site?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              This concept is designed for template-based rollout, fast localization, and SEO-safe content operations across multiple B2B child sites.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/products" className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
              View Product Catalog
            </Link>
            <Link href="/about" className="rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-800">
              Company Capability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
