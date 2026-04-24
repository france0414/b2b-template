import type { Metadata } from "next";
import { Chivo, Lora } from "next/font/google";
import Link from "next/link";
import { applications, company, news, products } from "@/lib/site-data";
import styles from "./design-v5.module.css";

const heading = Chivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-chivo",
});

const body = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Design V5 - Industrial Editorial Contrast",
  description:
    "A contrasting industrial B2B style using editorial typography, operational signal cards, and SEO/GEO-ready semantic content blocks.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is unique about this B2B design style?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This style mixes operational dashboards with editorial typography so technical credibility and readability coexist in one conversion path.",
      },
    },
  ],
};

export default function DesignV5Page() {
  const [featured, ...restProducts] = products.slice(0, 4);
  const topApps = applications.slice(0, 3);
  const topNews = news.slice(0, 3);

  return (
    <div className={`${styles.page} ${heading.variable} ${body.variable} py-10`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className={`${styles.hero} ${styles.bleed}`}>
        <div className={styles.heroLayout}>
          <div className={styles.heroMain}>
            <p className={styles.heroTag}>Design V5 / Editorial-Industrial</p>
            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-chivo)] text-4xl font-bold leading-[1.02] md:text-6xl">
              Not another generic B2B website.
              <span className="block text-cyan-200">This one is built for actual procurement behavior.</span>
            </h1>
            <p className="mt-5 max-w-2xl font-[family-name:var(--font-lora)] text-lg leading-8 text-slate-100/90">
              {company.name} is positioned through operational signals, technical clarity, and structured pathing from
              discovery to inquiry.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-cyan-200 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-100">
                Open Product Systems
              </Link>
              <Link href="/applications" className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-900/40">
                Follow Solution Paths
              </Link>
            </div>
            <p className={styles.heroGhost}>Decision-grade</p>
          </div>

          <aside className={styles.heroPanel}>
            <h2 className="text-xs uppercase tracking-[0.18em] text-slate-300">Operational Signals</h2>
            <div className="mt-3 grid gap-3">
              <article className="rounded-lg border border-slate-600 bg-slate-950/45 p-3">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Average response window</p>
                <p className="mt-1 text-2xl font-bold text-cyan-200">&lt; 24h</p>
              </article>
              <article className="rounded-lg border border-slate-600 bg-slate-950/45 p-3">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Export readiness index</p>
                <p className="mt-1 text-2xl font-bold text-cyan-200">96%</p>
              </article>
              <article className="rounded-lg border border-slate-600 bg-slate-950/45 p-3">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Active destination markets</p>
                <p className="mt-1 text-2xl font-bold text-cyan-200">30+</p>
              </article>
            </div>
          </aside>
        </div>

        <div className={styles.heroMedia}>
          <div className={styles.mediaA}>
            <span className={styles.mediaLabel}>Precision Turning</span>
          </div>
          <div className={styles.mediaB}>
            <span className={styles.mediaLabel}>Production Cell</span>
          </div>
          <div className={styles.mediaC}>
            <span className={styles.mediaLabel}>Export Packaging</span>
          </div>
        </div>
      </section>

      <section className={`${styles.bleed} mt-14 space-y-5`} aria-labelledby="v5-products">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Catalog Layer</p>
            <h2 id="v5-products" className="mt-1 text-3xl font-bold text-slate-900">
              Product story with one featured system and quick-scan lines
            </h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            Entire catalog
          </Link>
        </div>

        {featured ? (
          <article className={styles.featuredProduct}>
            <p className="text-xs uppercase tracking-[0.14em] text-teal-700">Featured line</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">{featured.name}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">{featured.description}</p>
            <Link href={`/products/${featured.slug}`} className={`${styles.lineLink} mt-4 text-slate-900`}>
              Go to technical page {"->"}
            </Link>
          </article>
        ) : null}

        <div className={styles.productGrid}>
          {restProducts.map((product) => (
            <article key={product.id} className={styles.miniProduct}>
              <p className="text-xs uppercase tracking-[0.13em] text-slate-500">{product.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
              <Link href={`/products/${product.slug}`} className={`${styles.lineLink} mt-3 text-slate-900`}>
                Specs {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.bleed} ${styles.process} mt-14`} aria-labelledby="v5-process">
        <div className={styles.sectionHead}>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Journey Architecture</p>
            <h2 id="v5-process" className="mt-1 text-3xl font-bold text-white">
              Clear path from first click to RFQ
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-300">The page flow intentionally follows discover {"->"} compare {"->"} request.</p>
        </div>

        <ol className={`${styles.processList} mt-6`}>
          <li className={styles.processStep}>
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Step 1</p>
            <h3 className="mt-1 text-lg font-semibold">Discover</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Browse by category and use-case context.</p>
          </li>
          <li className={styles.processStep}>
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Step 2</p>
            <h3 className="mt-1 text-lg font-semibold">Compare</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Scan specs with deterministic card hierarchy.</p>
          </li>
          <li className={styles.processStep}>
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Step 3</p>
            <h3 className="mt-1 text-lg font-semibold">Request</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Submit context-rich inquiry payload.</p>
          </li>
        </ol>
      </section>

      <section className={`${styles.bleed} mt-14 space-y-5`} aria-labelledby="v5-apps">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Application Layer</p>
            <h2 id="v5-apps" className="mt-1 text-3xl font-bold text-slate-900">
              Outcome entry blocks for cross-functional teams
            </h2>
          </div>
          <Link href="/applications" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            Full use case library
          </Link>
        </div>

        <div className={styles.apps}>
          {topApps[0] ? (
            <article className={styles.appLarge}>
              <p className={styles.kicker}>Primary use case</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{topApps[0].name}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{topApps[0].summary}</p>
              <Link href={`/applications/${topApps[0].slug}`} className={`${styles.lineLink} mt-4 text-slate-900`}>
                Map related products {"->"}
              </Link>
            </article>
          ) : null}

          {topApps.slice(1).map((application) => (
            <article key={application.id} className={styles.appSmall}>
              <h3 className="text-lg font-semibold text-slate-900">{application.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{application.summary}</p>
              <Link href={`/applications/${application.slug}`} className={`${styles.lineLink} mt-4 text-slate-900`}>
                Read mapping {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.bleed} mt-14 space-y-5`} aria-labelledby="v5-insights">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Knowledge Layer</p>
            <h2 id="v5-insights" className="mt-1 text-3xl font-bold text-slate-900">
              SEO + GEO blocks with answer-first excerpts
            </h2>
          </div>
          <p className={`text-sm ${styles.signal}`}>Optimized for indexing and AI citation extraction.</p>
        </div>

        <div className={styles.insights}>
          <article className={styles.insightStory}>
            <p className={styles.kicker}>Latest updates</p>
            <div className="mt-3 space-y-4">
              {topNews.slice(0, 2).map((article) => (
                <div key={article.id}>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{article.date}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{article.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`} className={`${styles.lineLink} mt-2 text-slate-900`}>
                    Continue reading {"->"}
                  </Link>
                </div>
              ))}
            </div>
          </article>

          <aside className={styles.insightRail}>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Search Signal Panel</p>
            <h3 className="mt-2 text-2xl font-semibold">Structured content wins visibility.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              This layout keeps one H1, clear H2 blocks, concise answer-first text, and schema support so both search
              engines and AI assistants can parse business value quickly.
            </p>
            {topNews[2] ? (
              <Link href={`/blog/${topNews[2].slug}`} className={`${styles.lineLink} mt-4 text-cyan-200`}>
                Read third article {"->"}
              </Link>
            ) : null}
          </aside>
        </div>

        <article className={`${styles.splitBand} mt-3`}>
          <div className={styles.splitNarrative}>
            <p className={styles.kicker}>Design Direction</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">This version intentionally uses full-bleed composition.</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
              The goal is to break out of the typical narrow B2B canvas and create a stronger visual identity while
              keeping the same data contracts, SEO hierarchy, and conversion structure.
            </p>
          </div>
          <div className={styles.splitVisual} />
        </article>
      </section>
    </div>
  );
}
