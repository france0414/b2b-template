import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import Link from "next/link";
import { applications, company, news, products } from "@/lib/site-data";

const uiSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui-sans",
});

const uiSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ui-serif",
});

export const metadata: Metadata = {
  title: "Industrial Manufacturing Web Design V2 | B2B Template",
  description:
    "Industrial-style B2B website demo focused on export reliability, technical delivery, and SEO-ready content architecture.",
  keywords: [
    "industrial website design",
    "B2B manufacturing website",
    "SEO B2B template",
    "export supplier website",
  ],
  openGraph: {
    title: "Industrial Manufacturing Web Design V2",
    description:
      "A professional B2B layout concept combining industrial visual language with SEO and GEO-friendly content structure.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is this layout suitable for industrial B2B websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It emphasizes technical credibility, export readiness, and structured product discovery, which are key decision factors for B2B buyers.",
      },
    },
    {
      "@type": "Question",
      name: "How does this design support SEO and AI search visibility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The page uses semantic sections, clear heading hierarchy, answer-first blocks, and schema markup to improve both traditional search indexing and AI citation potential.",
      },
    },
  ],
};

export default function DesignV2Page() {
  const featuredProducts = products.slice(0, 3);
  const featuredApplications = applications.slice(0, 3);
  const featuredNews = news.slice(0, 2);

  return (
    <div className={`${uiSans.variable} ${uiSerif.variable} space-y-14 font-[family-name:var(--font-ui-sans)]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 px-8 py-14 text-slate-100">
        <div className="absolute -left-32 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="inline-flex items-center rounded-full border border-slate-400/40 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
              Industrial B2B Style Demo
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
              Reliable Export Manufacturing Website,
              <span className="font-[family-name:var(--font-ui-serif)] text-cyan-300"> engineered for trust and lead clarity.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
              {company.name} demonstrates a professional B2B interface system that highlights technical capability,
              shortens decision cycles, and keeps content SEO/GEO-ready for both search engines and AI assistants.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-cyan-300 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
                Explore Product Lines
              </Link>
              <Link
                href="/applications"
                className="rounded-full border border-slate-300/50 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-800"
              >
                View Use Cases
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 backdrop-blur">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Decision Snapshot</h2>
            <dl className="mt-5 space-y-4">
              <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">On-time export execution</dt>
                <dd className="mt-1 text-2xl font-semibold text-cyan-300">96%</dd>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">Average RFQ response</dt>
                <dd className="mt-1 text-2xl font-semibold text-cyan-300">&lt; 24h</dd>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">Markets served</dt>
                <dd className="mt-1 text-2xl font-semibold text-cyan-300">30+ countries</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section aria-labelledby="v2-products" className="space-y-5">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Core Offerings</p>
            <h2 id="v2-products" className="mt-1 text-3xl font-semibold text-slate-900">
              Structured Product Presentation
            </h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            All Products
          </Link>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{product.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
              <Link href={`/products/${product.slug}`} className="mt-4 inline-block text-sm font-semibold text-slate-900">
                View Specs {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="v2-flow" className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Execution Process</p>
        <h2 id="v2-flow" className="mt-2 text-2xl font-semibold text-slate-900">
          Buyer Journey Designed for B2B Conversion
        </h2>
        <ol className="mt-5 grid gap-4 md:grid-cols-3">
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Step 1</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">Discover</h3>
            <p className="mt-2 text-sm text-slate-600">Use application and category entry points to narrow options quickly.</p>
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Step 2</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">Compare</h3>
            <p className="mt-2 text-sm text-slate-600">Review technical specs and fit-for-use details with consistent structure.</p>
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Step 3</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">Request</h3>
            <p className="mt-2 text-sm text-slate-600">Submit inquiry-ready requirements and accelerate internal handoff.</p>
          </li>
        </ol>
      </section>

      <section aria-labelledby="v2-apps" className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Application-Led Entry</p>
          <h2 id="v2-apps" className="mt-1 text-3xl font-semibold text-slate-900">
            Use Cases Framed by Outcomes
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredApplications.map((application) => (
            <article key={application.id} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{application.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{application.summary}</p>
              <Link href={`/applications/${application.slug}`} className="mt-4 inline-block text-sm font-semibold text-slate-900">
                See Related Products {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="v2-insights" className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Knowledge Signal</p>
          <h2 id="v2-insights" className="mt-1 text-3xl font-semibold text-slate-900">
            Content Blocks Built for SEO + GEO
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featuredNews.map((article) => (
            <article key={article.id} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{article.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="mt-4 inline-block text-sm font-semibold text-slate-900">
                Read Article {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
