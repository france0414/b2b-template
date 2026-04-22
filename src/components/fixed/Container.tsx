import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerVariant = "wide" | "standard" | "compact";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  variant?: ContainerVariant;
  fullWidth?: boolean;
  noPadding?: boolean;
}

const VARIANT_MAP: Record<ContainerVariant, string> = {
  wide: "max-w-[1500px]",
  standard: "max-w-[1200px]",
  compact: "max-w-[900px]",
};

export function Container({
  children,
  className,
  variant = "wide",
  fullWidth = false,
  noPadding = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto relative",
        fullWidth ? "w-full max-w-none" : VARIANT_MAP[variant],
        noPadding ? "px-0" : "px-6 sm:px-10 2xl:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
