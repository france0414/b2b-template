import type { Metadata } from "next";
import { ProductCard } from "@/components/fixed/ProductCard";
import { notFound } from "next/navigation";
import { applications, getApplicationBySlug, getProductsForApplication } from "@/lib/site-data";

interface ApplicationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return applications.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({ params }: ApplicationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getApplicationBySlug(slug);

  if (!useCase) {
    return { title: "應用頁不存在" };
  }

  return {
    title: `${useCase.name} | 產業應用`,
    description: useCase.summary,
  };
}

export default async function ApplicationDetailPage({ params }: ApplicationDetailPageProps) {
  const { slug } = await params;
  const useCase = getApplicationBySlug(slug);

  if (!useCase) {
    notFound();
  }

  const relatedProducts = getProductsForApplication(useCase.slug);

  return (
    <div className="space-y-8">
      <article className="rounded-2xl border bg-white p-7">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Application Detail</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{useCase.name}</h1>
        <p className="mt-4 text-sm leading-7 text-zinc-700">{useCase.description}</p>
      </article>

      <section className="rounded-2xl border bg-white p-7">
        <h2 className="text-xl font-semibold">對應產品</h2>
        <p className="mt-2 text-sm text-muted-foreground">從應用回到產品，快速比較規格與導入可行性。</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
