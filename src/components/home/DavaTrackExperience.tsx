"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { 
  FOUR_CORE_SOLUTIONS, 
  PINWHEEL_ENTRY_VECTORS, 
  CoreSolutionDomain 
} from "@/data/mosaicSolutions";
import { gsap, ScrollTrigger } from "@/lib/gsap/animations";
import { cn } from "@/lib/utils";

/* ============================================================
   GLOSSY SYMMETRICAL PINWHEEL CARD COMPONENT
   - Cards 1 & 3: Identical Vertical Dimensions (5 cols x 2 rows)
   - Cards 2 & 4: Identical Horizontal Dimensions (7 cols x 1 row)
   ============================================================ */

function GlossyPinwheelCard({ 
  domain,
  layout = "vertical",
  className 
}: { 
  domain: CoreSolutionDomain;
  layout?: "vertical" | "horizontal";
  className?: string;
}) {
  const isHorizontal = layout === "horizontal";
  const isDark = domain.color === "#173246" || domain.color === "#266573";

  return (
    <div
      className={cn(
        "group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[32px] p-6 sm:p-8 lg:p-9 transition-all duration-300 ease-out hover:-translate-y-1",
        isDark 
          ? "border border-white/20 hover:border-white/40 shadow-[0_20px_50px_rgba(18,38,49,0.25)] hover:shadow-[0_28px_65px_rgba(18,38,49,0.35)]" 
          : "border border-white/60 hover:border-white shadow-[0_16px_40px_rgba(18,38,49,0.10)] hover:shadow-[0_26px_56px_rgba(18,38,49,0.20)]",
        className
      )}
      style={{
        background: isDark
          ? `
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.16) 0%,
              rgba(255, 255, 255, 0.04) 40%,
              rgba(0, 0, 0, 0.28) 100%
            ),
            ${domain.color}
          `
          : `
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.45) 0%,
              rgba(255, 255, 255, 0.15) 45%,
              rgba(18, 38, 49, 0.06) 100%
            ),
            ${domain.color}
          `,
      }}
    >
      {/* Hardware-accelerated glossy top-left specular reflection */}
      <div 
        className={cn(
          "pointer-events-none absolute inset-0",
          isDark 
            ? "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.22)_0%,transparent_60%)]" 
            : "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45)_0%,transparent_60%)]"
        )} 
      />

      {/* Deep subtle bottom shadow gradient */}
      <div 
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 right-0 h-[35%]",
          isDark 
            ? "bg-gradient-to-t from-black/25 to-transparent" 
            : "bg-gradient-to-t from-[#122631]/[0.08] to-transparent"
        )} 
      />

      {/* Diagonal shine sweep on hover */}
      <div 
        className={cn(
          "pointer-events-none absolute -left-[100%] top-[-30%] h-[180%] w-[60%] rotate-[25deg] transition-transform duration-1000 ease-out group-hover:translate-x-[350%]",
          isDark 
            ? "bg-gradient-to-r from-transparent via-white/[0.22] to-transparent" 
            : "bg-gradient-to-r from-transparent via-white/[0.35] to-transparent"
        )} 
      />

      {/* Inner glass bezel ring */}
      <div 
        className={cn(
          "pointer-events-none absolute inset-[1px] rounded-[31px]",
          isDark ? "border border-white/15" : "border border-white/40"
        )} 
      />

      {/* Crisp top edge highlight line */}
      <div 
        className={cn(
          "pointer-events-none absolute left-[8%] right-[8%] top-0 h-px",
          isDark ? "bg-white/30" : "bg-white/70"
        )} 
      />

      {/* ============================================================
          CARD CONTENT
          ============================================================ */}
      <div className={cn("relative z-10 flex h-full flex-col justify-between space-y-6", isDark ? "text-white" : "text-[#122631]")}>
        
        {/* Top Header: Badge + Title */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <span 
              className={cn(
                "text-xs font-mono font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-sm",
                isDark 
                  ? "text-white bg-white/15 border border-white/25 backdrop-blur-md" 
                  : "text-white bg-[#122631] border border-[#122631]/20"
              )}
            >
              #{domain.number}
            </span>
          </div>

          <h3 className={cn(
            "font-display font-black tracking-tight leading-[1.1]",
            isDark ? "text-white" : "text-[#122631]",
            isHorizontal ? "text-2xl sm:text-3xl" : "text-2xl sm:text-3xl lg:text-[34px]"
          )}>
            {domain.title}
          </h3>
        </div>

        {/* Sub-Execution Solutions (Clickable Glass Tiles) */}
        <div className="pt-2">
          <div className={cn(
            "grid gap-2.5 sm:gap-3",
            isHorizontal 
              ? domain.subSolutions.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3"
              : "grid-cols-1"
          )}>
            {domain.subSolutions.map((sub, idx) => (
              <Link
                key={idx}
                href={`/solutions/${sub.slug}`}
                className={cn(
                  "group/pill flex items-center justify-between rounded-xl font-bold shadow-xs transition-all duration-200 active:scale-[0.98] backdrop-blur-md hover:shadow-md",
                  isDark
                    ? "border border-white/15 bg-white/[0.10] hover:bg-white text-white hover:text-[#122631] hover:border-white"
                    : "border border-white/70 bg-white/80 hover:bg-white text-[#122631] hover:border-white",
                  isHorizontal 
                    ? "px-3.5 py-2.5 sm:py-3 text-xs sm:text-[13px] leading-snug" 
                    : "px-4 py-3 sm:py-3.5 text-xs sm:text-sm leading-snug"
                )}
              >
                <span className={cn(isHorizontal ? "line-clamp-2" : "line-clamp-1")}>{sub.title}</span>
                <span 
                  className={cn(
                    "font-mono group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 transition-all flex items-center ml-2 flex-shrink-0",
                    isDark 
                      ? "text-[#6BB0BF] group-hover/pill:text-[#122631]" 
                      : "text-[#266573] group-hover/pill:text-[#122631]"
                  )}
                >
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ============================================================
   MAIN SYMMETRICAL PINWHEEL MOSAIC EXPERIENCE
   - Symmetrical 1 & 3: 5 cols wide x 2 rows tall
   - Symmetrical 2 & 4: 7 cols wide x 1 row tall
   - Centerpiece: 2 cols wide in exact center
   ============================================================ */

export function DavaTrackExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const supplyDomain = FOUR_CORE_SOLUTIONS.find((s) => s.key === "supply-chain")!;
  const pharmacyDomain = FOUR_CORE_SOLUTIONS.find((s) => s.key === "pharmacy-care")!;
  const digitalDomain = FOUR_CORE_SOLUTIONS.find((s) => s.key === "digital-health")!;
  const adminDomain = FOUR_CORE_SOLUTIONS.find((s) => s.key === "healthcare-admin")!;

  // Elastic assemble animation with tactile middle bump (back.out(1.8))
  const playAssembleAnimation = () => {
    const items = elementsRef.current.filter(Boolean);
    if (!items.length) return;

    items.forEach((item, idx) => {
      const entry = PINWHEEL_ENTRY_VECTORS[idx % PINWHEEL_ENTRY_VECTORS.length];
      gsap.fromTo(
        item,
        {
          x: entry.x * 1.25,
          y: entry.y * 1.25,
          rotation: entry.rotate * 1.25,
          scale: entry.scale || 0.7,
          opacity: 0,
          force3D: true,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1.3,
          delay: idx * 0.08,
          ease: "back.out(1.8)",
          force3D: true,
          clearProps: "transform",
        }
      );
    });
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Trigger assemble animation when grid enters view
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 75%",
        onEnter: () => {
          playAssembleAnimation();
        },
        onLeaveBack: () => {
          // Reset cards cleanly when scrolling back to top
          const items = elementsRef.current.filter(Boolean);
          items.forEach((item, idx) => {
            const entry = PINWHEEL_ENTRY_VECTORS[idx % PINWHEEL_ENTRY_VECTORS.length];
            gsap.set(item, {
              x: entry.x * 1.25,
              y: entry.y * 1.25,
              rotation: entry.rotate * 1.25,
              scale: entry.scale || 0.7,
              opacity: 0,
              force3D: true,
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="glossy-architecture"
      className="py-20 lg:py-28 bg-[#EEF4F3] text-[#122631] border-b border-[#CBD9D2]/70 relative overflow-hidden"
    >
      {/* Soft top gradient blend from Hero section */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#122631]/[0.025] to-transparent z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#122631] tracking-tight">
            The DavaTrack Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#4A6572] max-w-xl">
            Interconnected operational pillars combining medical supply, pharmacy operations, custom software, and governance.
          </p>
        </div>

        {/* ============================================================
            SYMMETRICAL INTERLOCKING PINWHEEL GRID
            - Card 1 & Card 3: Exact same size (5 cols wide x 2 rows tall)
            - Card 2 & Card 4: Exact same size (7 cols wide x 1 row tall)
            - Centerpiece: 2 cols wide in exact center
            ============================================================ */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 max-w-7xl mx-auto items-stretch"
        >
          {/* 1. LEFT CARD: #01 Supply Chain (Vertical - Cols 1 to 5, Rows 1 & 2) */}
          <div
            ref={(el) => { elementsRef.current[0] = el; }}
            className="lg:col-span-5 lg:row-span-2 will-change-transform flex flex-col"
          >
            <GlossyPinwheelCard domain={supplyDomain} layout="vertical" />
          </div>

          {/* 2. TOP CARD: #02 Pharmacy & Care (Horizontal - Cols 6 to 12, Row 1) */}
          <div
            ref={(el) => { elementsRef.current[1] = el; }}
            className="lg:col-span-7 will-change-transform flex flex-col"
          >
            <GlossyPinwheelCard domain={pharmacyDomain} layout="horizontal" />
          </div>

          {/* 3. CENTER BOX: DavaTrack Logo (Centerpiece - Cols 6 to 7, Row 2) */}
          <div
            ref={(el) => { elementsRef.current[2] = el; }}
            className="lg:col-span-2 flex items-center justify-center will-change-transform self-center py-1.5"
          >
            <div className="group relative flex items-center justify-center rounded-[20px] bg-white px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_10px_30px_rgba(18,38,49,0.12)] border border-[#CAD7D0] hover:shadow-[0_16px_40px_rgba(18,38,49,0.22)] hover:scale-105 transition-all duration-300 w-full">
              {/* Glossy top edge highlight */}
              <div className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-px bg-[#CAD7D0]/60" />
              
              <Image
                src="/logo-transparent.png"
                alt="DavaTrack"
                width={140}
                height={32}
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>
          </div>

          {/* 4. RIGHT CARD: #03 Digital Health (Vertical - Cols 8 to 12, Rows 2 & 3) */}
          <div
            ref={(el) => { elementsRef.current[3] = el; }}
            className="lg:col-span-5 lg:row-span-2 will-change-transform flex flex-col"
          >
            <GlossyPinwheelCard domain={digitalDomain} layout="vertical" />
          </div>

          {/* 5. BOTTOM CARD: #04 Healthcare Admin (Horizontal - Cols 1 to 7, Row 3) */}
          <div
            ref={(el) => { elementsRef.current[4] = el; }}
            className="lg:col-span-7 will-change-transform flex flex-col"
          >
            <GlossyPinwheelCard domain={adminDomain} layout="horizontal" />
          </div>

        </div>

      </div>
    </section>
  );
}
