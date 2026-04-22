import type { Metadata } from "next";
import { ProductCard } from "@/components/fixed/ProductCard";
import { getCategories, products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "產品中心 | B2B Template",
  description: "查看完整產品與核心規格",
};

export default function ProductsPage() {
  const categories = getCategories();

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Products</p>
        <h1 className="text-3xl font-semibold tracking-tight">產品中心</h1>
        <p className="max-w-3xl text-muted-foreground">
          以下內容來自 JSON 資料，先提供展示導覽與產品細節，這版先不做篩選。
        </p>
      </header>

      <section className="rounded-2xl border bg-white p-5">
        <h2 className="text-sm font-semibold">產品大類</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
