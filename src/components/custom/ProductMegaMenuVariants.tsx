"use client";

import { ProductMegaMenu, type ProductMegaMenuVariant } from "@/components/fixed/ProductMegaMenu";

const VARIANTS: Array<{ id: ProductMegaMenuVariant; title: string; note: string }> = [
  {
    id: "balanced",
    title: "Balanced",
    note: "分類、應用與快速連結平均分配，適合一般企業官網。",
  },
  {
    id: "catalog-first",
    title: "Catalog First",
    note: "先強調產品分類與熱門型號，適合產品型錄密集型網站。",
  },
  {
    id: "solution-first",
    title: "Solution First",
    note: "先強調產業應用，再回導到產品，適合顧問式銷售流程。",
  },
];

export function ProductMegaMenuVariants() {
  return (
    <div className="space-y-6">
      {VARIANTS.map((variant) => (
        <section key={variant.id} className="rounded-2xl border bg-white p-6">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{variant.id}</p>
            <h2 className="mt-1 text-xl font-semibold">{variant.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{variant.note}</p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="flex items-center gap-6">
              <ProductMegaMenu variant={variant.id} />
            </div>
            <p className="mt-3 text-xs text-zinc-500">點擊「產品」即可查看此組合的 Mega Menu。</p>
          </div>
        </section>
      ))}
    </div>
  );
}
