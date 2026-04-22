import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "部落格 | B2B Template",
  description: "品牌消息、產業趨勢與技術文章",
};

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Blog</p>
        <h1 className="text-3xl font-semibold tracking-tight">部落格</h1>
        <p className="max-w-3xl text-muted-foreground">提供品牌動態、技術趨勢與市場觀察，作為對外內容窗口。</p>
      </header>

      <section className="space-y-4">
        {news.map((article) => (
          <article key={article.id} className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {article.date} / {article.category}
            </p>
            <h2 className="mt-2 text-xl font-semibold">{article.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{article.excerpt}</p>
            <Link href={`/blog/${article.slug}`} className="mt-4 inline-block text-sm font-semibold">
              閱讀全文
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
