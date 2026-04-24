"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ApplicationUseCase, CompanyProfile, NewsArticle, Product } from "@/lib/site-data";
import styles from "./home-v4.module.css";

/* ── scroll reveal hook ─────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── animated counter hook ──────────────────────────── */
function useCounter(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

/* ── stat item ──────────────────────────────────────── */
function StatItem({ value, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(value, active);
  return (
    <div className={styles.statItem}>
      <span className={styles.statVal}>{count}</span>
      <span className={styles.statLbl}>{label}</span>
    </div>
  );
}

/* ── main component ─────────────────────────────────── */
export function HomeV4Client({
  products,
  applications,
  news,
  company,
}: {
  products: Product[];
  applications: ApplicationUseCase[];
  news: NewsArticle[];
  company: CompanyProfile;
}) {
  const [featuredProduct, ...scanProducts] = products.slice(0, 4);
  const [primaryApp, secondApp, thirdApp] = applications.slice(0, 3);
  const topNews = news.slice(0, 3);

  const heroStats = useReveal(0.1);
  const statsActive = heroStats.visible;

  const productsReveal = useReveal(0.1);
  const appsReveal = useReveal(0.1);
  const processReveal = useReveal(0.15);
  const insightsReveal = useReveal(0.1);

  return (
    <main className={styles.page}>

      {/* ── HERO ────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.heroEye}>Industrial Precision Supplier</span>
            <h1 className={styles.heroTitle}>
              Precision Parts.<br />
              Global Scale.<br />
              <em className={styles.heroAccent}>Zero Compromise.</em>
            </h1>
            <p className={styles.heroLead}>
              {company.name} delivers machined components with technical clarity —
              from specification to delivery, every step structured.
            </p>
            <div className={styles.heroActions}>
              <Link href="/products" className={styles.heroCta}>Browse Catalog</Link>
              <Link href="/about" className={styles.heroGhost}>Request Quote</Link>
            </div>
          </div>

          <div ref={heroStats.ref} className={styles.heroStats}>
            <StatItem value={24} suffix="h" label="Avg Response Time" active={statsActive} />
            <div className={styles.statDivider} />
            <StatItem value={96} suffix="%" label="On-time Delivery" active={statsActive} />
            <div className={styles.statDivider} />
            <StatItem value={30} suffix="+" label="Export Markets" active={statsActive} />
          </div>
        </div>

        <div className={styles.heroScrollHint} aria-hidden>
          <span className={styles.heroScrollLine} />
          <span className={styles.heroScrollLabel}>Scroll</span>
        </div>
      </section>

      {/* ── MEDIA STRIP ─────────────────────────────── */}
      <div className={styles.mediaStrip}>
        <div className={styles.mediaCard} style={{ backgroundImage: "url(/images/industrial/photo-gear.png)" }}>
          <span className={styles.mediaLabel}>Precision Components</span>
        </div>
        <div className={styles.mediaCard} style={{ backgroundImage: "url(/images/industrial/photo-blueprint.png)" }}>
          <span className={styles.mediaLabel}>Technical Engineering</span>
        </div>
        <div className={styles.mediaCard} style={{ backgroundImage: "url(/images/industrial/photo-factory.png)" }}>
          <span className={styles.mediaLabel}>Factory Automation</span>
        </div>
      </div>

      {/* ── PRODUCTS ────────────────────────────────── */}
      <section
        className={`${styles.productsSection} ${productsReveal.visible ? styles.revealed : styles.hidden}`}
        aria-labelledby="v4-products-title"
      >
        <div ref={productsReveal.ref} className={styles.container}>
          <div className={styles.sectionBar}>
            <div>
              <p className={styles.eyebrow}>Product Catalog</p>
              <h2 id="v4-products-title" className={styles.sectionTitle}>
                Engineered for Performance
              </h2>
            </div>
            <Link href="/products" className={styles.viewAll}>View All &rarr;</Link>
          </div>

          {/* featured */}
          {featuredProduct ? (
            <article className={styles.productFeatured}>
              <div
                className={styles.productFeaturedPhoto}
                style={{ backgroundImage: "url(/images/industrial/photo-impeller.png)" }}
              />
              <div className={styles.productFeaturedBody}>
                <span className={styles.productEye}>Featured Product</span>
                <p className={styles.productCat}>{featuredProduct.category}</p>
                <h3 className={styles.productName}>{featuredProduct.name}</h3>
                <p className={styles.productDesc}>{featuredProduct.description}</p>
                <div className={styles.specTags}>
                  {Object.entries(featuredProduct.specs).slice(0, 3).map(([k, v]) => (
                    <span key={k} className={styles.specTag}>{k}: {v}</span>
                  ))}
                </div>
                <Link href={`/products/${featuredProduct.slug}`} className={styles.productCta}>
                  View Full Specs &rarr;
                </Link>
              </div>
            </article>
          ) : null}

          {/* product grid */}
          <div className={styles.productGrid}>
            {scanProducts.map((p, i) => {
              const photos = [
                "/images/industrial/photo-control-unit.png",
                "/images/industrial/photo-gear.png",
                "/images/industrial/photo-hero-robots.png",
              ];
              return (
                <article key={p.id} className={styles.productCard}>
                  <div
                    className={styles.productCardPhoto}
                    style={{ backgroundImage: `url(${photos[i] ?? photos[0]})` }}
                  >
                    <span className={styles.productCardIndex}>0{i + 2}</span>
                  </div>
                  <div className={styles.productCardBody}>
                    <p className={styles.productCat}>{p.category}</p>
                    <h3 className={styles.productCardName}>{p.name}</h3>
                    <p className={styles.productCardDesc}>{p.description}</p>
                    <Link href={`/products/${p.slug}`} className={styles.productCardLink}>
                      Compare Specs &rarr;
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ────────────────────────────── */}
      <section
        ref={appsReveal.ref}
        className={`${styles.appsSection} ${appsReveal.visible ? styles.revealed : styles.hidden}`}
        aria-labelledby="v4-apps-title"
      >
        {/* primary — full bleed large */}
        {primaryApp ? (
          <div
            className={styles.appPrimary}
            style={{ backgroundImage: "url(/images/industrial/photo-datacenter.png)" }}
          >
            <div className={styles.appPrimaryOverlay}>
              <div className={styles.container}>
                <p className={styles.appEye}>Primary Sector</p>
                <h2 id="v4-apps-title" className={styles.appPrimaryTitle}>{primaryApp.name}</h2>
                <p className={styles.appPrimarySummary}>{primaryApp.summary}</p>
                <Link href={`/applications/${primaryApp.slug}`} className={styles.appPrimaryCta}>
                  Explore Sector &rarr;
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        {/* secondary row */}
        <div className={styles.appSecondaryRow}>
          {secondApp ? (
            <article
              className={styles.appSecCard}
              style={{ backgroundImage: "url(/images/industrial/photo-factory.png)" }}
            >
              <div className={styles.appSecOverlay}>
                <span className={styles.appSecNum}>02</span>
                <h3 className={styles.appSecName}>{secondApp.name}</h3>
                <p className={styles.appSecSummary}>{secondApp.summary}</p>
                <Link href={`/applications/${secondApp.slug}`} className={styles.appSecLink}>
                  Explore &rarr;
                </Link>
              </div>
            </article>
          ) : null}
          {thirdApp ? (
            <article
              className={styles.appSecCard}
              style={{ backgroundImage: "url(/images/industrial/photo-hero-robots.png)" }}
            >
              <div className={styles.appSecOverlay}>
                <span className={styles.appSecNum}>03</span>
                <h3 className={styles.appSecName}>{thirdApp.name}</h3>
                <p className={styles.appSecSummary}>{thirdApp.summary}</p>
                <Link href={`/applications/${thirdApp.slug}`} className={styles.appSecLink}>
                  Explore &rarr;
                </Link>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────── */}
      <section
        ref={processReveal.ref}
        className={`${styles.processSection} ${processReveal.visible ? styles.revealed : styles.hidden}`}
        aria-labelledby="v4-process-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionBar}>
            <div>
              <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>How It Works</p>
              <h2 id="v4-process-title" className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                Procurement Lifecycle
              </h2>
            </div>
          </div>
          <div className={styles.processSteps}>
            {[
              { n: "01", head: "Discover", body: "Browse structured catalog with full technical documentation and category-guided navigation." },
              { n: "02", head: "Compare", body: "Evaluate specs, tolerance, and delivery capability with side-by-side structured content." },
              { n: "03", head: "Request", body: "Submit RFQ with clear requirements for faster, precise quoting and shorter lead times." },
            ].map((s, i) => (
              <div key={s.n} className={styles.step} style={{ animationDelay: `${i * 0.12}s` }}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3 className={styles.stepHead}>{s.head}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ────────────────────────────────── */}
      <section
        ref={insightsReveal.ref}
        className={`${styles.insightsSection} ${insightsReveal.visible ? styles.revealed : styles.hidden}`}
        aria-labelledby="v4-insights-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionBar}>
            <div>
              <p className={styles.eyebrow}>Technical Insights</p>
              <h2 id="v4-insights-title" className={styles.sectionTitle}>Industry Updates</h2>
            </div>
          </div>
          <div className={styles.insightsGrid}>
            <div className={styles.articleList}>
              {topNews.map((article) => (
                <article key={article.id} className={styles.articleRow}>
                  <p className={styles.articleLabel}>Update — {article.category}</p>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`} className={styles.articleLink}>Read More &rarr;</Link>
                </article>
              ))}
            </div>
            <aside className={styles.insightsPhoto}>
              <div
                className={styles.insightsPhotoImg}
                style={{ backgroundImage: "url(/images/industrial/photo-engineer.png)" }}
              />
              <div className={styles.insightsPhotoCaption}>
                <p className={styles.eyebrow}>Team Expertise</p>
                <p className={styles.insightsPhotoText}>
                  Our engineering team supports every procurement decision with technical documentation and on-site consultation.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className={styles.ctaSection} aria-labelledby="v4-cta-title">
        <div
          className={styles.ctaBg}
          style={{ backgroundImage: "url(/images/industrial/photo-blueprint.png)" }}
        />
        <div className={styles.ctaOverlay} />
        <div className={`${styles.container} ${styles.ctaContent}`}>
          <h2 id="v4-cta-title" className={styles.ctaTitle}>
            Ready to start your precision sourcing?
          </h2>
          <p className={styles.ctaBody}>
            Connect with our engineering team for a structured, no-ambiguity quote process.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/about" className={styles.ctaPrimary}>Contact Us Now</Link>
            <Link href="/products" className={styles.ctaSecondary}>View Product Catalog</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
