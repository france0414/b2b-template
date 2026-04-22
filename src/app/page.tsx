import Link from "next/link";
import { ApplicationEntrySection } from "@/components/custom/ApplicationEntrySection";
import { ProductCard } from "@/components/fixed/ProductCard";
import { applications, company, news, products } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-700 px-8 py-14 text-zinc-50">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-200">B2B Prototype</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">{company.name}</h1>
        <p className="mt-4 max-w-2xl text-zinc-100">{company.description}</p>
        <div className="mt-6 grid max-w-3xl gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-500/40 bg-zinc-800/40 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">Export Focus</p>
            <p className="mt-2 text-sm font-semibold">外銷導向供應</p>
          </div>
          <div className="rounded-xl border border-zinc-500/40 bg-zinc-800/40 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">Stable Quality</p>
            <p className="mt-2 text-sm font-semibold">品質體系一致</p>
          </div>
          <div className="rounded-xl border border-zinc-500/40 bg-zinc-800/40 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">Technical Delivery</p>
            <p className="mt-2 text-sm font-semibold">技術交付可追溯</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/applications" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-900">
            從應用找產品
          </Link>
          <Link href="/products" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-900">
            查看產品
          </Link>
          <Link href="/about" className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-100">
            認識品牌
          </Link>
        </div>
      </section>

      <ApplicationEntrySection applications={applications} />

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">精選產品</h2>
          <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
            查看全部
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">最新部落格</h2>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            前往部落格
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {news.slice(0, 2).map((article) => (
            <article key={article.id} className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{article.date}</p>
              <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="mt-4 inline-block text-sm font-semibold">
                閱讀全文
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
