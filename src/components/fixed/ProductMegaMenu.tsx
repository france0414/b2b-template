"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { applications, getCategories, products } from "@/lib/site-data";

export type ProductMegaMenuVariant = "balanced" | "catalog-first" | "solution-first";

interface SubCategory {
  id: string;
  name: string;
  description: string;
  productSlugs: string[];
}

interface CategoryNode {
  id: string;
  name: string;
  description: string;
  subCategories: SubCategory[];
}

const PRODUCT_TAXONOMY: CategoryNode[] = [
  {
    id: "cnc-lathe",
    name: "CNC Lathe",
    description: "車削主力系列",
    subCategories: [
      {
        id: "high-precision-turning",
        name: "高精度車削",
        description: "重視尺寸一致性與穩定公差",
        productSlugs: ["cnc-lathe-vl-25"],
      },
      {
        id: "mass-production-turning",
        name: "量產車削",
        description: "中高批量持續生產導向",
        productSlugs: ["cnc-lathe-vl-25", "auto-bar-feeder-abf-12"],
      },
    ],
  },
  {
    id: "machining-center",
    name: "Machining Center",
    description: "銑削與多面加工",
    subCategories: [
      {
        id: "general-milling",
        name: "通用銑削",
        description: "兼顧效率與加工穩定",
        productSlugs: ["vertical-machining-center-vm-850"],
      },
      {
        id: "fixture-ready",
        name: "治具整合加工",
        description: "適合夾治具與自動化配套",
        productSlugs: ["vertical-machining-center-vm-850", "hydraulic-chuck-hc-10"],
      },
    ],
  },
  {
    id: "workholding",
    name: "Workholding",
    description: "夾持與定位系統",
    subCategories: [
      {
        id: "hydraulic-holding",
        name: "液壓夾持",
        description: "高轉速夾持與重複定位",
        productSlugs: ["hydraulic-chuck-hc-10"],
      },
      {
        id: "precision-clamping",
        name: "精密定位夾持",
        description: "對接高精度工件需求",
        productSlugs: ["hydraulic-chuck-hc-10", "cnc-lathe-vl-25"],
      },
    ],
  },
  {
    id: "automation",
    name: "Automation",
    description: "送料與產線輔助模組",
    subCategories: [
      {
        id: "bar-feeding",
        name: "自動送料",
        description: "降低人工介入並強化連續加工",
        productSlugs: ["auto-bar-feeder-abf-12"],
      },
      {
        id: "line-integration",
        name: "產線整合",
        description: "對接機台與工單節拍管理",
        productSlugs: ["auto-bar-feeder-abf-12", "vertical-machining-center-vm-850"],
      },
    ],
  },
];

function formatCategoryName(category: string) {
  return category
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

function BalancedLayout() {
  const [activeCategory, setActiveCategory] = useState(PRODUCT_TAXONOMY[0]?.id ?? "");
  const [activeSubCategory, setActiveSubCategory] = useState(
    PRODUCT_TAXONOMY[0]?.subCategories[0]?.id ?? "",
  );

  const currentCategory =
    PRODUCT_TAXONOMY.find((node) => node.id === activeCategory) ?? PRODUCT_TAXONOMY[0];

  const currentSubCategory =
    currentCategory?.subCategories.find((sub) => sub.id === activeSubCategory) ??
    currentCategory?.subCategories[0];

  const linkedProducts = currentSubCategory
    ? products.filter((product) => currentSubCategory.productSlugs.includes(product.slug))
    : [];

  return (
    <div className="grid gap-4 md:grid-cols-[180px_180px_1fr_180px]">
      <section className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">產品大類</p>
        <ul className="space-y-2">
          {PRODUCT_TAXONOMY.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                onMouseEnter={() => {
                  setActiveCategory(category.id);
                  setActiveSubCategory(category.subCategories[0]?.id ?? "");
                }}
                className={`w-full rounded-lg px-2 py-1.5 text-left text-sm transition ${
                  category.id === currentCategory?.id
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">次分類</p>
        <ul className="space-y-2">
          {currentCategory?.subCategories.map((subCategory) => (
            <li key={subCategory.id}>
              <button
                type="button"
                onMouseEnter={() => setActiveSubCategory(subCategory.id)}
                className={`w-full rounded-lg border px-3 py-2.5 text-left transition ${
                  subCategory.id === currentSubCategory?.id
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                <p className="text-sm font-semibold">{subCategory.name}</p>
                <p className="mt-1 text-xs opacity-80">{subCategory.description}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">推薦產品</p>
        <div className="mt-3 space-y-2">
          {linkedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="block rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
            >
              <p className="font-semibold text-zinc-900">{product.name}</p>
              <p className="mt-1 text-xs text-zinc-600">{product.category}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">快速連結</p>
        <div className="mt-3 space-y-2 text-sm">
          <Link href="/products" className="block font-semibold text-zinc-900 hover:text-zinc-600">
            查看全部產品
          </Link>
          <Link href="/products" className="block font-semibold text-zinc-900 hover:text-zinc-600">
            產品技術索引
          </Link>
          <Link href="/applications" className="block font-semibold text-zinc-900 hover:text-zinc-600">
            從應用找產品
          </Link>
          <Link href="/about" className="block font-semibold text-zinc-900 hover:text-zinc-600">
            詢問外銷專案合作
          </Link>
        </div>
      </section>
    </div>
  );
}

function CatalogFirstLayout() {
  const categories = getCategories();

  return (
    <div className="grid gap-4 md:grid-cols-[260px_1fr]">
      <section className="rounded-xl border border-zinc-200 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Catalog Structure</p>
        <ul className="mt-3 space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link href="/products" className="block rounded-lg bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
                {formatCategoryName(category)}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-zinc-500">進入分類後可再切次分類與系列型號。</p>
      </section>

      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">熱門產品與快速入口</p>
        <div className="grid gap-3 md:grid-cols-2">
          {products.slice(0, 4).map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="rounded-xl border border-zinc-200 p-3 transition hover:border-zinc-300 hover:bg-zinc-50">
              <p className="text-xs uppercase tracking-widest text-zinc-500">{product.category}</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">{product.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function SolutionFirstLayout() {
  return (
    <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
      <section className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">依產業需求導覽</p>
        <div className="grid gap-2">
          {applications.map((useCase) => (
            <Link
              key={useCase.id}
              href={`/applications/${useCase.slug}`}
              className="rounded-lg border border-zinc-200 p-3 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              <p className="text-sm font-semibold text-zinc-900">{useCase.name}</p>
              <p className="mt-1 text-xs text-zinc-600">{useCase.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">產品快速匹配</p>
        <div className="mt-3 space-y-2">
          {products.slice(0, 3).map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="block rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
              {product.name}
            </Link>
          ))}
        </div>
        <Link href="/products" className="mt-4 inline-block text-sm font-semibold text-zinc-900 hover:text-zinc-600">
          查看完整產品地圖
        </Link>
      </section>
    </div>
  );
}

function VariantLayout({ variant }: { variant: ProductMegaMenuVariant }) {
  if (variant === "catalog-first") {
    return <CatalogFirstLayout />;
  }

  if (variant === "solution-first") {
    return <SolutionFirstLayout />;
  }

  return <BalancedLayout />;
}

export function ProductMegaMenu({ variant = "balanced" }: { variant?: ProductMegaMenuVariant }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm text-muted-foreground hover:text-foreground">
            產品
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-[780px] p-5">
            <VariantLayout variant={variant} />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
