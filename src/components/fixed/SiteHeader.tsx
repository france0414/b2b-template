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
    <header className="sticky top-0 z-[60] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container variant="wide" className="flex h-16 items-center">
        <Link href="/" className="mr-8 text-xl font-bold tracking-tight text-zinc-900">
          B2B Template
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ProductMegaMenu variant="balanced" />

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            <span>詢價清單</span>
          </Button>
        </div>
      </Container>
    </header>
  );
}
