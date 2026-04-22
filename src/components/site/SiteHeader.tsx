import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "首頁" },
  { href: "/applications", label: "產業應用" },
  { href: "/products", label: "產品" },
  { href: "/blog", label: "部落格" },
  { href: "/about", label: "關於我們" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          B2B Template
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
