import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "navy" | "soft" | "outline" | "radar";
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "soft",
  className,
  dot = false,
}: BadgeProps) {
  const variants = {
    blue: "bg-blue-accent/10 text-blue-accent border border-blue-accent/20",
    navy: "bg-navy text-white border border-navy/20",
    soft: "bg-navy-50 text-navy-600 border border-border-subtle",
    outline: "bg-transparent text-muted-dark border border-border",
    radar: "bg-white/80 backdrop-blur-md text-navy-800 border border-blue-accent/30 shadow-soft",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-accent"></span>
        </span>
      )}
      {children}
    </span>
  );
}
