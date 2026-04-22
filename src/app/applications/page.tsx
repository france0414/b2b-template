import type { Metadata } from "next";
import { ApplicationCard } from "@/components/fixed/ApplicationCard";
import { applications, getProductsForApplication } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "產業應用 | B2B Template",
  description: "從產業應用情境快速找到對應產品與解決方案",
};

export default function ApplicationsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Applications</p>
        <h1 className="text-3xl font-semibold tracking-tight">產業應用</h1>
        <p className="max-w-3xl text-muted-foreground">
          依據應用場景快速導覽，協助客戶先從實際需求找到可落地的產品方案。
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-2">
        {applications.map((useCase) => {
          const relatedProducts = getProductsForApplication(useCase.slug);

          return (
            <ApplicationCard
              key={useCase.id}
              application={useCase}
              label="查看應用詳情"
              showTitlePrefix={false}
              footer={
                <>
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-zinc-500">推薦產品</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {relatedProducts.map((product) => (
                      <span key={product.id} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                        {product.name}
                      </span>
                    ))}
                  </div>
                </>
              }
            />
          );
        })}
      </section>
    </div>
  );
}
