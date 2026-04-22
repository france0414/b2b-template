import Link from "next/link";
import type { Product } from "@/lib/site-data";

interface ProductCardProps {
  product: Product;
  href?: string;
  compact?: boolean;
}

export function ProductCard({ product, href, compact = false }: ProductCardProps) {
  const targetHref = href ?? `/products/${product.slug}`;

  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{product.category}</p>
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>
      {!compact && (
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(product.specs)
            .slice(0, 2)
            .map(([key, value]) => (
              <span key={key} className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700">
                {key}: {value}
              </span>
            ))}
        </div>
      )}
      <Link href={targetHref} className="mt-5 inline-block text-sm font-semibold">
        {compact ? "查看詳情" : "查看完整規格"}
      </Link>
    </article>
  );
}
