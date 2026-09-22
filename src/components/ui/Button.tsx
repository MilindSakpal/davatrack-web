import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: "arrow" | "up-right" | "none";
  className?: string;
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
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-250 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent/50 disabled:opacity-50 disabled:pointer-events-none group";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 shadow-sm",
  };

  const variantStyles = {
    primary:
      "bg-navy text-white hover:bg-navy-700 shadow-md hover:shadow-lg shadow-navy/15 hover:shadow-navy/25 border border-navy/10",
    secondary:
      "bg-blue-accent text-white hover:bg-blue-hover shadow-md hover:shadow-lg shadow-blue-accent/20 hover:shadow-blue-accent/30",
    outline:
      "bg-white/90 text-navy-700 border border-border hover:border-navy-400 hover:bg-navy-50/60 shadow-sm",
    ghost:
      "bg-transparent text-navy-700 hover:bg-navy-50 hover:text-blue-accent",
    cyan:
      "bg-cyan-accent text-ink-dark font-bold hover:bg-sky-400 shadow-md hover:shadow-glow",
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
