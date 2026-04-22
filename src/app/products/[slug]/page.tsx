import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApplicationsForProduct, getProductBySlug, products } from "@/lib/site-data";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "產品不存在" };
  }

  return {
    title: `${product.name} | 產品詳情`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedApplications = getApplicationsForProduct(product.slug);

  return (
    <article className="space-y-8">
      <header className="rounded-2xl border bg-white p-7">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{product.category}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{product.name}</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">{product.description}</p>
      </header>

      <section className="rounded-2xl border bg-white p-7">
        <h2 className="text-xl font-semibold">產品規格</h2>
        <dl className="mt-4 divide-y">
          {Object.entries(product.specs).map(([name, value]) => (
            <div key={name} className="grid grid-cols-2 gap-4 py-3 text-sm">
              <dt className="font-medium text-zinc-700">{name}</dt>
              <dd className="text-zinc-600">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-2xl border bg-white p-7">
        <h2 className="text-xl font-semibold">適用產業應用</h2>
        <p className="mt-2 text-sm text-muted-foreground">從產品回看應用場景，方便評估導入與擴充方向。</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {relatedApplications.map((useCase) => (
            <article key={useCase.id} className="rounded-xl border bg-zinc-50 p-4">
              <h3 className="text-lg font-semibold">{useCase.name}</h3>
              <p className="mt-2 text-sm text-zinc-600">{useCase.summary}</p>
              <Link href={`/applications/${useCase.slug}`} className="mt-3 inline-block text-sm font-semibold">
                前往應用頁
              </Link>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
