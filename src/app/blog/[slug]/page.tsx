import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsBySlug, news } from "@/lib/site-data";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return { title: "文章不存在" };
  }

  return {
    title: `${article.title} | 部落格`,
    description: article.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="space-y-6 rounded-2xl border bg-white p-7">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {article.date} / {article.category}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{article.title}</h1>
      </header>
      <p className="text-lg text-zinc-700">{article.excerpt}</p>
      <div className="prose prose-zinc max-w-none whitespace-pre-line text-zinc-700">
        {article.content}
      </div>
    </article>
  );
}
