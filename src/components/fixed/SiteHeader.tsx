"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductMegaMenu } from "./ProductMegaMenu";
import { Container } from "./Container";

const NAV_ITEMS = [
  { href: "/applications", label: "產業應用" },
  { href: "/blog", label: "部落格" },
  { href: "/about", label: "關於我們" },
  { href: "/menu-combos", label: "Menu 組合" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[60] w-full border-b border-slate-200 bg-white/90 text-slate-900 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container variant="wide" className="flex h-20 items-center">
        <Link href="/" className="mr-8 flex items-center gap-3">
          <span className="text-xl font-black uppercase tracking-tight text-slate-900">INDUS_CORE</span>
          <span className="hidden rounded-full border border-slate-300 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-500 md:inline">
            b2b template
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ProductMegaMenu variant="balanced" />

          <nav className="flex items-center gap-6 text-sm text-slate-500">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="font-medium tracking-tight transition-colors hover:text-blue-600">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Button variant="default" size="sm" className="hidden items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 sm:flex">
            <ShoppingCart className="h-4 w-4" />
            <span>詢價清單</span>
          </Button>
        </div>
      </Container>
    </header>
  );
}
