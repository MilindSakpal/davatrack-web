import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * Props for the unified Button component.
 * Supports standard HTML button attributes or Next.js Link behavior when `href` is provided.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant style */
  variant?: "primary" | "secondary" | "brand" | "brandOutline" | "outline" | "ghost" | "cyan";
  /** Button sizing scale */
  size?: "sm" | "md" | "lg";
  /** Optional link destination (renders Next.js Link when provided) */
  href?: string;
  /** Optional icon to display on the trailing side */
  icon?: "arrow" | "up-right" | "none";
  /** Additional Tailwind classes */
  className?: string;
  /** Button label or nested elements */
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon = "none",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-250 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#266573]/50 disabled:opacity-50 disabled:pointer-events-none group";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 shadow-sm",
  };

  const variantStyles = {
    primary:
      "bg-[#122631] text-white hover:bg-[#266573] shadow-md hover:shadow-lg shadow-[#122631]/15 hover:shadow-[#122631]/25 border border-white/10",
    secondary:
      "bg-[#266573] text-white hover:bg-[#122631] shadow-md hover:shadow-lg shadow-[#266573]/20 hover:shadow-[#266573]/30 border border-[#266573]/20",
    brand:
      "bg-[#266573] text-white hover:bg-[#122631] shadow-md hover:shadow-lg shadow-[#266573]/20 hover:shadow-[#266573]/30 border border-[#266573]/30",
    brandOutline:
      "bg-white text-[#122631] border border-[#CAD7D0] hover:border-[#266573] hover:bg-[#EDF3F0] shadow-sm",
    outline:
      "bg-white/90 text-[#122631] border border-[#CAD7D0] hover:border-[#266573] hover:bg-[#EDF3F0] shadow-sm",
    ghost:
      "bg-transparent text-[#122631] hover:bg-[#EDF3F0] hover:text-[#266573]",
    cyan:
      "bg-[#6BB0BF] text-[#122631] font-bold hover:bg-[#85C4D1] shadow-md",
  };

  const iconElement =
    icon === "arrow" ? (
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    ) : icon === "up-right" ? (
      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    ) : null;

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
      >
        <span>{children}</span>
        {iconElement}
      </Link>
    );
  }

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {iconElement}
    </button>
  );
}
