import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import { applications, company, news, products } from "@/lib/site-data";
import styles from "./design-v4.module.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Design V4 - Industrial B2B System Demo",
  description:
    "A high-contrast industrial B2B web style demo with specification-forward structure and SEO/GEO-ready content architecture.",
  keywords: [
    "industrial B2B website",
    "manufacturing web design",
    "SEO GEO website architecture",
    "B2B catalog UX",
  ],
  openGraph: {
    title: "Design V4 - Industrial B2B System Demo",
    description:
      "A professional B2B concept page focused on procurement trust signals, technical clarity, and scalable template architecture.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does this design improve B2B lead quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It reduces ambiguity by pairing category-first discovery with structure-first specifications, then directs users to application and inquiry pathways with clear decision cues.",
      },
    },
    {
      "@type": "Question",
      name: "Why is this page optimized for SEO and GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The layout uses semantic sections, concise answer-first copy blocks, visible hierarchy, and schema markup to support indexing and AI citation extraction.",
      },
    },
  ],
};

export default function DesignV4Page() {
  const topProducts = products.slice(0, 4);
  const topApps = applications.slice(0, 3);
  const topNews = news.slice(0, 2);

  return (
    <div className={`${styles.page} ${archivo.variable} ${sourceSerif.variable} space-y-16 font-[family-name:var(--font-archivo)]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className={`${styles.hero} px-7 py-12 md:px-10 md:py-14`}>
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className={styles.badge}>Industrial Layout / V4</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-white md:text-6xl">
              Engineered for procurement,
              <span className="block font-[family-name:var(--font-source-serif)] text-cyan-300">
                designed to remove decision friction.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
              {company.name} combines technical trust signals, application-led discovery, and structured specifications so
              B2B buyers can shortlist faster and send higher-quality inquiries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-cyan-300 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
                Start with Product Systems
              </Link>
              <Link
                href="/applications"
                className="rounded-full border border-slate-400 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-800"
              >
                Navigate by Application
              </Link>
            </div>
          </div>

          <aside className={`${styles.heroRail} p-5`}> 
            <h2 className="text-xs uppercase tracking-[0.18em] text-slate-300">Signal Panel</h2>
            <div className="mt-4 grid gap-3">
              <article className="rounded-xl border border-slate-700 bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">RFQ response speed</p>
                <p className="mt-1 text-2xl font-bold text-cyan-300">&lt; 24h</p>
              </article>
              <article className="rounded-xl border border-slate-700 bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Shipment consistency</p>
                <p className="mt-1 text-2xl font-bold text-cyan-300">96%</p>
              </article>
              <article className="rounded-xl border border-slate-700 bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Active export markets</p>
                <p className="mt-1 text-2xl font-bold text-cyan-300">30+</p>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="v4-matrix" className="space-y-5">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Capability Matrix</p>
            <h2 id="v4-matrix" className="mt-1 text-3xl font-semibold text-slate-900">
              A Layout That Speaks in Operations, Not Marketing Noise
            </h2>
          </div>
          <Link href="/about" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            Company Quality Profile
          </Link>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <article className={styles.dataCell}>
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Documentation readiness</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Spec-first product narratives</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Every product card starts with category, model logic, and concise technical context.</p>
          </article>
          <article className={styles.dataCell}>
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Sales handoff quality</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Inquiry inputs are decision-ready</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Application routing narrows scope before RFQ, reducing back-and-forth clarification loops.</p>
          </article>
          <article className={styles.dataCell}>
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Search visibility layer</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">SEO + GEO structure built-in</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Semantic hierarchy and schema blocks support indexing and AI citation extraction.</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="v4-products" className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Product Topline</p>
          <h2 id="v4-products" className="mt-1 text-3xl font-semibold text-slate-900">
            Catalog Section with Clear Model Scanning Rhythm
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {topProducts.map((product) => (
            <article key={product.id} className={`${styles.dataCell} h-full`}>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{product.category}</p>
              <h3 className="mt-2 min-h-14 text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
              <Link href={`/products/${product.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                Technical page {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.narrative} p-6 md:p-8`} aria-labelledby="v4-flow">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Buyer Narrative</p>
            <h2 id="v4-flow" className="mt-1 text-3xl font-semibold text-slate-900">
              Three-Step Journey from Discovery to Qualified Inquiry
            </h2>
          </div>
        </div>

        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          <li className={styles.narrativeStep}>
            <h3 className="text-lg font-semibold text-slate-900">Discover by scenario</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Use case entry points guide both technical and non-technical users to relevant systems.</p>
          </li>
          <li className={styles.narrativeStep}>
            <h3 className="text-lg font-semibold text-slate-900">Compare by specs</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Consistent structure improves side-by-side model evaluation and speeds shortlist decisions.</p>
          </li>
          <li className={styles.narrativeStep}>
            <h3 className="text-lg font-semibold text-slate-900">Request with confidence</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">The final CTA positions inquiry as a clear operational next step, not a generic contact form.</p>
          </li>
        </ol>
      </section>

      <section aria-labelledby="v4-apps" className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Applications</p>
            <h2 id="v4-apps" className="mt-1 text-3xl font-semibold text-slate-900">
              Outcome-Oriented Entry Blocks
            </h2>
          </div>
          <Link href="/applications" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            Full use case library
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {topApps.map((application) => (
            <article key={application.id} className={styles.dataCell}>
              <h3 className="text-lg font-semibold text-slate-900">{application.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{application.summary}</p>
              <Link href={`/applications/${application.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                Explore matched products {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="v4-news" className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Knowledge Layer</p>
          <h2 id="v4-news" className="mt-1 text-3xl font-semibold text-slate-900">
            Insight Content for Search + AI Discovery
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {topNews.map((article) => (
            <article key={article.id} className={styles.dataCell}>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{article.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{article.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                Read more {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.ctaBand} px-7 py-9 text-slate-100 md:px-10`}>
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Conversion-ready closing</p>
            <h2 className="mt-2 text-3xl font-semibold">
              This is the level of systemized design we can productize into your template pipeline.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Choose this direction and I will convert it into reusable UI tokens, component rules, and homepage blueprints for multi-site rollout.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/design-v3" className="rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-800">
              Compare V3
            </Link>
            <Link href="/products" className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
              Use this style
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
