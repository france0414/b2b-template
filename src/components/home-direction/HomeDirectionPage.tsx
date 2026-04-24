import Link from "next/link";
import { applications, company, news, products } from "@/lib/site-data";

export interface HomeDirectionStyles {
  page: string;
  bleed: string;
  shell: string;
  hero: string;
  heroTitle: string;
  heroLead: string;
  heroActions: string;
  metricGrid: string;
  metric: string;
  metricValue: string;
  metricLabel: string;
  mediaStrip: string;
  mediaCard: string;
  mediaLabel: string;
  section: string;
  sectionHead: string;
  kicker: string;
  title: string;
  products: string;
  featured: string;
  featuredVisual: string;
  featuredBody: string;
  scanCol: string;
  scanCard: string;
  process: string;
  processLead: string;
  processGrid: string;
  processStep: string;
  apps: string;
  primaryApp: string;
  primaryOverlay: string;
  appStack: string;
  appCard: string;
  appVisual: string;
  appBody: string;
  insights: string;
  article: string;
  signalPanel: string;
  cta: string;
  linkArrow: string;
  primaryAction: string;
  secondaryAction: string;
  processIndex: string;
  processText: string;
  appTitle: string;
  articleLabel: string;
  articleTitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  heroGrid: string;
  heroMain: string;
  heroRail: string;
  sectionStack: string;
  primarySummary: string;
  primaryExplore: string;
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does this homepage help industrial procurement teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It uses a structured path from discovery to comparison to inquiry, reducing ambiguity and shortening buyer evaluation cycles.",
      },
    },
    {
      "@type": "Question",
      name: "Is this page optimized for SEO and AI citation workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The page uses semantic sections, heading hierarchy, metadata, and FAQ schema to improve search indexing and AI extraction clarity.",
      },
    },
  ],
};

type HomeDirectionLayout = "baseline" | "v2" | "v3";

export function HomeDirectionPage({
  styles,
  layout = "baseline",
}: {
  styles: HomeDirectionStyles;
  layout?: HomeDirectionLayout;
}) {
  const [featuredProduct, ...scanProducts] = products.slice(0, 4);
  const [primaryApplication, ...supportApplications] = applications.slice(0, 3);
  const topNews = news.slice(0, 3);
  const mediaImages = [
    "/images/industrial/hero-precision.svg",
    "/images/industrial/hero-automation.svg",
    "/images/industrial/hero-blueprint.svg",
  ];
  const appImages = ["/images/industrial/app-aerospace.svg", "/images/industrial/app-logistics.svg"];
  const heroTitle =
    layout === "v3" ? "Industrial Motion Platform" : "Streamlined Procurement for Critical Infrastructure.";
  const heroLead =
    layout === "v3"
      ? `${company.name} brings precision components from engineering to delivery with a minimal-friction sourcing flow.`
      : `Technical clarity in every component. ${company.name} bridges precision engineering and reliable industrial distribution at scale.`;

  const renderMedia =
    layout === "v3" ? (
      <section className={`${styles.bleed}`} aria-label="Industrial media strip">
        <div className={styles.shell}>
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <div
              className={`${styles.mediaCard} min-h-[22rem]`}
              style={{
                backgroundImage:
                  "linear-gradient(rgba(15, 23, 42, 0.18), rgba(15, 23, 42, 0.58)), url('/images/stitch/factory-premium.png')",
                backgroundPosition: "center",
              }}
            >
              <span className={styles.mediaLabel}>Factory Narrative</span>
            </div>
            <div className="grid gap-4">
              <div
                className={styles.mediaCard}
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.6)), url('/images/stitch/data-center.png')",
                  backgroundPosition: "center",
                }}
              >
                <span className={styles.mediaLabel}>Control Systems</span>
              </div>
              <div
                className={styles.mediaCard}
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.58)), url('/images/stitch/gear-closeup.png')",
                  backgroundPosition: "center",
                }}
              >
                <span className={styles.mediaLabel}>Precision Assembly</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <section className={`${styles.bleed}`} aria-label="Industrial media strip">
        <div className={styles.mediaStrip}>
          <div
            className={styles.mediaCard}
            style={layout === "baseline" ? { backgroundImage: `url(${mediaImages[0]})` } : undefined}
          >
            <span className={styles.mediaLabel}>Precision Turning</span>
          </div>
          <div
            className={styles.mediaCard}
            style={layout === "baseline" ? { backgroundImage: `url(${mediaImages[1]})` } : undefined}
          >
            <span className={styles.mediaLabel}>Factory Automation</span>
          </div>
          <div
            className={styles.mediaCard}
            style={layout === "baseline" ? { backgroundImage: `url(${mediaImages[2]})` } : undefined}
          >
            <span className={styles.mediaLabel}>Technical Blueprinting</span>
          </div>
        </div>
      </section>
    );

  const renderProducts = (() => {
    if (layout === "v2") {
      return (
        <section className={`${styles.section} ${styles.bleed}`} aria-labelledby="products-title">
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.kicker}>Featured Components</p>
                <h2 id="products-title" className={styles.title}>
                  Engineered Specification Systems
                </h2>
              </div>
              <Link href="/products" className={styles.linkArrow}>
                View All Products {"->"}
              </Link>
            </div>

            {featuredProduct ? (
              <article className={`${styles.featured} grid gap-6 lg:grid-cols-[1.3fr_1fr]`}>
                <div className={styles.featuredVisual} />
                <div className={styles.featuredBody}>
                  <p className={styles.kicker}>Lead Product</p>
                  <h3 className="mt-2 text-3xl font-semibold">{featuredProduct.name}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{featuredProduct.description}</p>
                  <dl className="mt-5 grid grid-cols-1 gap-3 text-sm text-slate-600">
                    <div className="rounded-lg border border-slate-200 p-3">
                      <dt className="text-xs uppercase tracking-[0.08em] text-slate-500">Category</dt>
                      <dd className="mt-1 font-semibold text-slate-900">{featuredProduct.category}</dd>
                    </div>
                    <div className="rounded-lg border border-slate-200 p-3">
                      <dt className="text-xs uppercase tracking-[0.08em] text-slate-500">MOQ</dt>
                      <dd className="mt-1 font-semibold text-slate-900">{featuredProduct.minOrderQuantity} unit</dd>
                    </div>
                  </dl>
                  <Link href={`/products/${featuredProduct.slug}`} className={`${styles.linkArrow} mt-5`}>
                    Details {"->"}
                  </Link>
                </div>
              </article>
            ) : null}

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {scanProducts.map((product, index) => (
                <article key={product.id} className={styles.scanCard}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-slate-500">Option 0{index + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
                  <Link href={`/products/${product.slug}`} className={`${styles.linkArrow} mt-3`}>
                    Compare Specs {"->"}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      );
    }

    if (layout === "v3") {
      return (
        <section className={`${styles.section} ${styles.bleed}`} aria-labelledby="products-title">
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.kicker}>Featured Components</p>
                <h2 id="products-title" className={styles.title}>
                  Engineered Specification Systems
                </h2>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
              <div className="space-y-3">
                {scanProducts.map((product) => (
                  <article key={product.id} className={styles.scanCard}>
                    <p className="text-xs uppercase tracking-[0.09em] text-slate-500">{product.category}</p>
                    <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
                    <Link href={`/products/${product.slug}`} className={`${styles.linkArrow} mt-2`}>
                      Quick View {"->"}
                    </Link>
                  </article>
                ))}
              </div>

              {featuredProduct ? (
                <article className={styles.featured}>
                  <div className={styles.featuredVisual} />
                  <div className={styles.featuredBody}>
                    <h3 className="text-3xl font-semibold">{featuredProduct.name}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{featuredProduct.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2 text-xs">
                      {Object.entries(featuredProduct.specs)
                        .slice(0, 3)
                        .map(([label, value]) => (
                          <span key={label} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-slate-700">
                            {label}: {value}
                          </span>
                        ))}
                    </div>
                    <Link href="/products" className={`${styles.linkArrow} mt-5`}>
                      View Full Catalog {"->"}
                    </Link>
                  </div>
                </article>
              ) : null}
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className={`${styles.section} ${styles.bleed}`} aria-labelledby="products-title">
        <div className={`${styles.shell}`}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>Featured Components</p>
              <h2 id="products-title" className={styles.title}>
                Engineered Specification Systems
              </h2>
            </div>
            <Link href="/products" className={styles.linkArrow}>
              View All Products {"->"}
            </Link>
          </div>

          <div className={styles.products}>
            {featuredProduct ? (
              <article className={styles.featured}>
                <div className={styles.featuredVisual} />
                <div className={styles.featuredBody}>
                  <h3 className="text-2xl font-semibold">{featuredProduct.name}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{featuredProduct.description}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <p className="text-xs uppercase tracking-[0.09em] text-slate-500">Specs: Structured Technical View</p>
                    <Link href={`/products/${featuredProduct.slug}`} className={styles.linkArrow}>
                      Details {"->"}
                    </Link>
                  </div>
                </div>
              </article>
            ) : null}

            <div className={styles.scanCol}>
              {scanProducts.map((product) => (
                <article key={product.id} className={styles.scanCard}>
                  <p className="text-xs uppercase tracking-[0.09em] text-slate-500">{product.category}</p>
                  <h3 className="mt-1 text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
                  <Link href={`/products/${product.slug}`} className={`${styles.linkArrow} mt-3`}>
                    Compare Specs {"->"}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  })();

  const renderProcess =
    layout === "v3" ? (
      <section className={`${styles.process} ${styles.bleed}`} aria-labelledby="process-title">
        <div className={`${styles.shell} grid gap-6 lg:grid-cols-[0.9fr_1.3fr]`}>
          <div>
            <p className={styles.kicker}>Operating Framework</p>
            <h2 id="process-title" className="mt-2 text-4xl font-semibold tracking-tight">
              Precision Procurement Lifecycle
            </h2>
            <p className="mt-4 text-base leading-7">
              A procurement-first sequence designed for complex industrial orders, with fewer feedback loops and faster quoting.
            </p>
          </div>

          <ol className="space-y-4">
            <li className={styles.processStep}>
              <p className={styles.processIndex}>01 / Discover</p>
              <p className={`${styles.processText} mt-1`}>Scan inventory with technical documentation and category-guided navigation.</p>
            </li>
            <li className={styles.processStep}>
              <p className={styles.processIndex}>02 / Compare</p>
              <p className={`${styles.processText} mt-1`}>Analyze performance metrics and production suitability with structured content.</p>
            </li>
            <li className={styles.processStep}>
              <p className={styles.processIndex}>03 / Request</p>
              <p className={`${styles.processText} mt-1`}>Send inquiry-ready requirements with clearer context for faster quoting.</p>
            </li>
          </ol>
        </div>
      </section>
    ) : (
      <section className={`${styles.process} ${styles.bleed}`} aria-labelledby="process-title">
        <div className={styles.shell}>
          <h2 id="process-title" className="text-center text-4xl font-semibold tracking-tight">
            Precision Procurement Lifecycle
          </h2>
          <p className={styles.processLead}>A standardized framework designed to eliminate variance and accelerate lead times.</p>

          <ol className={styles.processGrid}>
            <li className={styles.processStep}>
              <p className={styles.processIndex}>01</p>
              <h3 className="mt-2 text-2xl font-semibold">Discover</h3>
              <p className={styles.processText}>Scan inventory with technical documentation and category-guided navigation.</p>
            </li>
            <li className={styles.processStep}>
              <p className={styles.processIndex}>02</p>
              <h3 className="mt-2 text-2xl font-semibold">Compare</h3>
              <p className={styles.processText}>Analyze performance metrics and production suitability with structured content.</p>
            </li>
            <li className={styles.processStep}>
              <p className={styles.processIndex}>03</p>
              <h3 className="mt-2 text-2xl font-semibold">Request</h3>
              <p className={styles.processText}>Send inquiry-ready requirements with clearer context for faster quoting.</p>
            </li>
          </ol>
        </div>
      </section>
    );

  const renderApps = (
    <section className={`${styles.section} ${styles.bleed}`} aria-labelledby="applications-title">
      <div className={styles.shell}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Operational Domains</p>
            <h2 id="applications-title" className={styles.title}>
              Industrial Application Matrix
            </h2>
          </div>
        </div>

        {layout === "v2" ? (
          <div className="grid gap-4 md:grid-cols-3">
            {[primaryApplication, ...supportApplications].map((application, index) => {
              if (!application) {
                return null;
              }

              return (
                <article key={application.id} className={styles.appCard}>
                  <div
                    className={styles.appVisual}
                    style={{ backgroundImage: `url(${appImages[index] ?? appImages[0]})` }}
                  />
                  <div className={styles.appBody}>
                    <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Industry Domain</p>
                    <h3 className={`${styles.appTitle} mt-1`}>{application.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{application.summary}</p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className={styles.apps}>
            {primaryApplication ? (
              <article className={styles.primaryApp}>
                <div className={styles.primaryOverlay}>
                  <div>
                    <h3 className="text-4xl font-semibold">{primaryApplication.name}</h3>
                    <p className={styles.primarySummary}>{primaryApplication.summary}</p>
                    <Link href={`/applications/${primaryApplication.slug}`} className={styles.primaryExplore}>
                      Explore Sector
                    </Link>
                  </div>
                </div>
              </article>
            ) : null}

            <div className={styles.appStack}>
              {supportApplications.map((application, index) => (
                <article key={application.id} className={styles.appCard}>
                  <div
                    className={styles.appVisual}
                    style={{ backgroundImage: `url(${appImages[index] ?? appImages[0]})` }}
                  />
                  <div className={styles.appBody}>
                    <h3 className={styles.appTitle}>{application.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{application.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );

  const renderInsights = (
    <section className={`${styles.section} ${styles.bleed}`} aria-labelledby="insights-title">
      <div className={styles.shell}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.kicker}>Technical Insights</p>
            <h2 id="insights-title" className={styles.title}>
              Knowledge-First Operations
            </h2>
          </div>
        </div>

        <div className={`${styles.insights} ${layout === "v3" ? "lg:grid-cols-[1fr_2fr]" : ""}`}>
          {layout === "v3" ? (
            <aside className={styles.signalPanel}>
              <p className={styles.kicker}>Reference Brief</p>
              <h3 className="mt-2 text-2xl font-semibold">From insights to decisions</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Use this panel as a quick brief to align product messaging, geo pages, and sales follow-up context.
              </p>
            </aside>
          ) : null}

          <div className="space-y-8">
            {topNews.map((article) => (
              <article key={article.id} className={styles.article}>
                <p className={styles.articleLabel}>Article / Industrial Update</p>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className="mt-3 max-w-3xl text-base text-slate-600">{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className={`${styles.linkArrow} mt-4`}>
                  Read Detail {"->"}
                </Link>
              </article>
            ))}
          </div>

          {layout !== "v3" ? (
            <aside className={styles.signalPanel}>
              <p className={styles.kicker}>AI Visibility Signal</p>
              <h3 className="mt-2 text-2xl font-semibold">Structured pages get cited faster.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                This section uses answer-first summaries, semantic headings, and linked supporting content to improve both
                search ranking and generative engine citation rates.
              </p>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );

  const sectionOrder =
    layout === "v2"
      ? [renderProducts, renderProcess, renderMedia, renderApps, renderInsights]
      : layout === "v3"
        ? [renderApps, renderMedia, renderProducts, renderInsights, renderProcess]
        : [renderMedia, renderProducts, renderProcess, renderApps, renderInsights];

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className={`${styles.hero} ${styles.bleed}`}>
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroMain}>
            <h1 className={styles.heroTitle}>{heroTitle}</h1>
            <p className={styles.heroLead}>{heroLead}</p>

            <div className={styles.heroActions}>
              <Link href="/products" className={styles.primaryAction}>
                {layout === "v3" ? "Order Profile" : "Start Configuration"}
              </Link>
              <Link href="/about" className={styles.secondaryAction}>
                {layout === "v3" ? "View Inventory" : "Technical Documentation"}
              </Link>
            </div>
          </div>
          {layout !== "v3" ? (
            <div className={styles.heroRail}>
              <div className={styles.metricGrid}>
                <article className={styles.metric}>
                  <p className={styles.metricValue}>&lt;24h</p>
                  <p className={styles.metricLabel}>Average Response Time</p>
                </article>
                <article className={styles.metric}>
                  <p className={styles.metricValue}>96%</p>
                  <p className={styles.metricLabel}>On-time Delivery Rate</p>
                </article>
                <article className={styles.metric}>
                  <p className={styles.metricValue}>30+</p>
                  <p className={styles.metricLabel}>Global Export Markets</p>
                </article>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <div className={styles.sectionStack}>{sectionOrder.map((section, index) => <div key={index}>{section}</div>)}</div>

      <section className={`${styles.cta} ${styles.bleed}`}>
        <div className={styles.shell}>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight">
            Ready to enhance your machining efficiency? Turn structured technical context into faster, higher-quality RFQs.
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/about" className={styles.ctaPrimary}>
              Reach Out Now
            </Link>
            <Link href="/products" className={styles.ctaSecondary}>
              Browse Product Systems
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
