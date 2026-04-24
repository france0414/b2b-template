import type { Metadata } from "next";
import { Manrope, Noto_Serif_TC } from "next/font/google";
import Link from "next/link";
import { applications, company, news, products } from "@/lib/site-data";
import styles from "./design-v6.module.css";

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-v6-sans",
});

const serif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-v6-serif",
});

export const metadata: Metadata = {
  title: "Design V6 - Precision Minimal Industrial",
  description:
    "Minimal but premium industrial B2B homepage concept focused on hierarchy, readability, and conversion clarity for procurement users.",
  openGraph: {
    title: "Design V6 - Precision Minimal Industrial",
    description:
      "A premium minimal B2B style with full-width composition and SEO/GEO-ready information architecture.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is this layout optimized for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This layout is optimized for industrial B2B buyers who need fast model scanning, clear technical context, and confidence before sending inquiries.",
      },
    },
  ],
};

export default function DesignV6Page() {
  const [featured, ...restProducts] = products.slice(0, 4);
  const topApps = applications.slice(0, 3);
  const topNews = news.slice(0, 3);

  return (
    <div className={`${styles.page} ${sans.variable} ${serif.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className={`${styles.hero} ${styles.bleed}`}>
        <div className={styles.heroTop}>
          <div>
            <p className={styles.eyebrow}>Design V6 / Precision Minimal</p>
            <h1 className={styles.heroTitle}>Industrial clarity without visual noise.</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
              {company.name} presents products and applications in a decisive structure designed for procurement speed,
              technical trust, and cleaner handoff to RFQ workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                Browse Products
              </Link>
              <Link href="/applications" className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                Browse Applications
              </Link>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <p className={styles.eyebrow}>Procurement Indicators</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Built for shortlist decisions, not decorative browsing.</p>
            <div className={styles.heroMeta}>
              <article className={styles.metaCard}>
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">RFQ Window</p>
                <p className="mt-1 text-xl font-bold text-slate-900">&lt; 24h</p>
              </article>
              <article className={styles.metaCard}>
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Export Consistency</p>
                <p className="mt-1 text-xl font-bold text-slate-900">96%</p>
              </article>
              <article className={styles.metaCard}>
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Markets</p>
                <p className="mt-1 text-xl font-bold text-slate-900">30+</p>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bleed}`} aria-labelledby="v6-products">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>Catalog</p>
            <h2 id="v6-products" className={styles.sectionTitle}>
              One featured line, then fast model scan.
            </h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            All products
          </Link>
        </div>

        <div className={styles.productLayout}>
          {featured ? (
            <article className={styles.productFeatured}>
              <p className={styles.eyebrow}>Featured Product</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">{featured.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{featured.description}</p>
              <Link href={`/products/${featured.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                Open technical page {"->"}
              </Link>
            </article>
          ) : null}

          {restProducts.map((product) => (
            <article key={product.id} className={styles.productCard}>
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">{product.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
              <Link href={`/products/${product.slug}`} className="mt-3 inline-flex text-sm font-semibold text-slate-900">
                Compare specs {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.bleed}`} aria-labelledby="v6-process">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>Flow</p>
            <h2 id="v6-process" className={styles.sectionTitle}>
              Discover {"->"} compare {"->"} request.
            </h2>
          </div>
        </div>

        <div className={styles.processBand}>
          <ol className={styles.processGrid}>
            <li className={styles.processStep}>
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Step 1</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Discover</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Entry through category and use-case blocks.</p>
            </li>
            <li className={styles.processStep}>
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Step 2</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Compare</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Specification-first cards reduce confusion.</p>
            </li>
            <li className={styles.processStep}>
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Step 3</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Request</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Inquiry path captures context clearly.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bleed}`} aria-labelledby="v6-apps">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>Applications</p>
            <h2 id="v6-apps" className={styles.sectionTitle}>
              Use-case routing for technical and non-technical teams.
            </h2>
          </div>
          <Link href="/applications" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            All use cases
          </Link>
        </div>

        <div className={styles.applicationLayout}>
          {topApps.map((application) => (
            <article key={application.id} className={styles.appCard}>
              <h3 className="text-xl font-semibold text-slate-900">{application.name}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{application.summary}</p>
              <Link href={`/applications/${application.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                Related products {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.bleed}`} aria-labelledby="v6-insights">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>Insights</p>
            <h2 id="v6-insights" className={styles.sectionTitle}>
              Answer-first content blocks for SEO and GEO.
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            All articles
          </Link>
        </div>

        <div className={styles.insightLayout}>
          {topNews.map((article) => (
            <article key={article.id} className={styles.newsCard}>
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">{article.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{article.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="mt-3 inline-flex text-sm font-semibold text-slate-900">
                Read article {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.finalBand} ${styles.bleed}`}>
        <p className={styles.eyebrow}>Final CTA</p>
        <h2 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight text-slate-900">
          If this direction feels closer to a real premium B2B website, I can make this the new homepage and align all
          secondary pages to the same visual system.
        </h2>
      </section>
    </div>
  );
}
