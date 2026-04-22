import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ApplicationUseCase } from "@/lib/site-data";

interface ApplicationCardProps {
  application: ApplicationUseCase;
  label?: string;
  showTitlePrefix?: boolean;
  className?: string;
  footer?: ReactNode;
}

export function ApplicationCard({
  application,
  label = "探索解決方案",
  showTitlePrefix = true,
  className,
  footer,
}: ApplicationCardProps) {
  return (
    <article className={cn("rounded-2xl border bg-white p-5 shadow-sm", className)}>
      {showTitlePrefix && <p className="text-xs uppercase tracking-widest text-muted-foreground">Application</p>}
      <h3 className="mt-2 text-lg font-semibold">{application.name}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{application.summary}</p>
      <Link href={`/applications/${application.slug}`} className="mt-4 inline-block text-sm font-semibold">
        {label}
      </Link>
      {footer}
    </article>
  );
}
