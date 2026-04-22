import type { Metadata } from "next";
import { ProductMegaMenuVariants } from "@/components/custom/ProductMegaMenuVariants";

export const metadata: Metadata = {
  title: "Mega Menu 組合 | B2B Template",
  description: "查看不同產品 Mega Menu 結構組合",
};

export default function MenuCombosPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Navigation Lab</p>
        <h1 className="text-3xl font-semibold tracking-tight">產品 Mega Menu 組合</h1>
        <p className="max-w-3xl text-muted-foreground">
          這裡提供三種可直接套用的 Menu 組合。確認偏好後，可直接把對應 variant 套用到 Header。
        </p>
      </header>

      <ProductMegaMenuVariants />
    </div>
  );
}
