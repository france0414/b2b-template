import type { Metadata } from "next";
import { company } from "@/lib/site-data";

const HISTORY = [
  { year: "2008", title: "公司成立", detail: "建立精密零件加工產線，聚焦 OEM 與機械產業需求。" },
  { year: "2014", title: "海外市場拓展", detail: "導入歐洲與東南亞通路合作，建立多國交付經驗。" },
  { year: "2020", title: "品質體系升級", detail: "完成製程優化與標準化管理，縮短交期並提升穩定度。" },
  { year: "2026", title: "數位展示升級", detail: "啟動 B2B 官網與內容系統，強化國際客戶溝通效率。" },
];

export const metadata: Metadata = {
  title: "關於我們 | B2B Template",
  description: "公司簡介、核心能力與歷史沿革",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">About</p>
        <h1 className="text-3xl font-semibold tracking-tight">關於我們</h1>
        <p className="max-w-3xl text-muted-foreground">{company.description}</p>
      </header>

      <section className="rounded-2xl border bg-white p-7">
        <h2 className="text-xl font-semibold">品牌定位</h2>
        <p className="mt-3 text-sm leading-7 text-zinc-700">
          我們專注於 B2B 製造與設備供應，提供從產品規劃、打樣、量產到售後服務的完整流程。以可追溯流程、穩定品質與準時交付作為對外承諾。
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border bg-zinc-50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Global Sales</p>
            <p className="mt-2 text-sm font-semibold">外銷市場穩定拓展</p>
          </div>
          <div className="rounded-xl border bg-zinc-50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Quality System</p>
            <p className="mt-2 text-sm font-semibold">品質流程一致化管理</p>
          </div>
          <div className="rounded-xl border bg-zinc-50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Delivery</p>
            <p className="mt-2 text-sm font-semibold">跨區交付與專案支援</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border bg-white p-7">
        <h2 className="text-xl font-semibold">歷史沿革</h2>
        <ol className="mt-5 space-y-4">
          {HISTORY.map((item) => (
            <li key={item.year} className="grid gap-2 border-l-2 border-zinc-200 pl-4 md:grid-cols-[100px_1fr] md:gap-6">
              <p className="text-sm font-semibold text-zinc-700">{item.year}</p>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
