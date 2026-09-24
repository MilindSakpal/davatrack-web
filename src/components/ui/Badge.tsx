import React from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the unified Badge tag component.
 */
export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode;
  /** Visual variant style */
  variant?: "brand" | "teal" | "cyan" | "soft" | "outline" | "radar" | "blue" | "navy";
  /** Additional Tailwind classes */
  className?: string;
  /** Whether to render an animated pulsing status dot */
  dot?: boolean;
}

export function Badge({
  children,
  variant = "brand",
  className,
  dot = false,
}: BadgeProps) {
  const variants = {
    brand: "bg-[#266573]/10 text-[#266573] border border-[#266573]/25",
    teal: "bg-[#266573]/15 text-[#266573] border border-[#266573]/30",
    cyan: "bg-[#6BB0BF]/20 text-[#122631] border border-[#6BB0BF]/40",
    blue: "bg-[#266573]/10 text-[#266573] border border-[#266573]/20",
    navy: "bg-[#122631] text-white border border-[#266573]/40",
    soft: "bg-[#EDF3F0] text-[#266573] border border-[#CAD7D0]",
    outline: "bg-transparent text-[#122631] border border-[#CAD7D0]",
    radar: "bg-white/80 backdrop-blur-md text-[#122631] border border-[#6BB0BF]/40 shadow-sm",
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
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6BB0BF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#266573]"></span>
        </span>
      )}
      {children}
    </span>
  );
}
