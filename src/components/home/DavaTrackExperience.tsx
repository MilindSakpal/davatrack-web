"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight, RefreshCw } from "lucide-react";
import { 
  MOSAIC_SOLUTIONS, 
  ENTRY_VECTORS, 
  MosaicSolution 
} from "@/data/mosaicSolutions";
import { gsap, ScrollTrigger } from "@/lib/gsap/animations";
import { cn } from "@/lib/utils";

/* ============================================================
   GLOSSY GLASS CARD COMPONENT
   ============================================================ */

function GlossyCard({ 
  solution,
  className 
}: { 
  solution: MosaicSolution;
  className?: string;
}) {
  const isLight = solution.onLight;
  const textColor = isLight ? "#15332B" : "#ffffff";
  const subColor = isLight ? "rgba(21, 51, 43, 0.75)" : "rgba(255, 255, 255, 0.78)";
  const tagColor = isLight ? "rgba(21, 51, 43, 0.65)" : "rgba(255, 255, 255, 0.65)";
  const borderColor = isLight ? "border-black/10" : "border-white/25";
  const badgeBg = isLight ? "bg-black/[0.08]" : "bg-white/[0.14]";

  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className={cn(
        "group relative block h-full w-full overflow-hidden rounded-[28px] border shadow-[0_12px_32px_rgba(6,54,111,0.16)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(6,54,111,0.26)]",
        borderColor,
        className
      )}
      style={{
        background: isLight
          ? `
            linear-gradient(
              145deg,
              rgba(255,255,255,0.40) 0%,
              rgba(255,255,255,0.15) 45%,
              rgba(0,0,0,0.08) 100%
            ),
            ${solution.color}
          `
          : `
            linear-gradient(
              145deg,
              rgba(255,255,255,0.22) 0%,
              rgba(255,255,255,0.05) 45%,
              rgba(0,0,0,0.22) 100%
            ),
            ${solution.color}
          `,
      }}
    >
      {/* Hardware-accelerated glossy top reflection */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.22)_0%,transparent_60%)]" />

      {/* Subtle depth */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/[0.18] to-transparent" />

      {/* Diagonal shine sweep on hover */}
      <div className="pointer-events-none absolute -left-[100%] top-[-30%] h-[180%] w-[60%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.20] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[350%]" />

      {/* Inner glass edge */}
      <div className={cn("pointer-events-none absolute inset-[1px] rounded-[27px] border", isLight ? "border-white/40" : "border-white/15")} />

      {/* Top highlight */}
      <div className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px bg-white/40" />

      {/* Card Content */}
      <div
        className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6"
        style={{ color: textColor }}
      >
        {/* Header (Number badge & DAVATRACK) */}
        <div className="flex items-start justify-between">
          <div className={cn("flex h-7 min-w-7 items-center justify-center rounded-full border px-2 font-mono text-[9px] font-bold tracking-[0.15em]", borderColor, badgeBg)}>
            #{solution.no}
          </div>

          <div className={cn("rounded-full border px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.25em] font-semibold", borderColor, badgeBg)}>
            DAVATRACK
          </div>
        </div>

        {/* Main Title & Objective */}
        <div className="my-auto py-2">
          <div className={cn("mb-2 h-px w-8", isLight ? "bg-black/20" : "bg-white/30")} />

          <h3 className="font-display text-[17px] sm:text-[19px] lg:text-[20px] font-bold leading-[1.12] tracking-tight group-hover:text-cyan-200 transition-colors">
            {solution.tileTitle}
          </h3>

          <p className="mt-1.5 text-[10px] sm:text-[11px] leading-[1.45] line-clamp-2" style={{ color: subColor }}>
            {solution.objective}
          </p>
        </div>

        {/* Bottom Metadata */}
        <div className="flex items-end justify-between pt-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.22em]" style={{ color: tagColor }}>
            HEALTHCARE
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.22em] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5" style={{ color: textColor }}>
            {solution.tag}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ============================================================
   MAIN DAVATRACK INTERACTIVE MOSAIC EXPERIENCE
   (Exact Bento Box Layout + Satisfying Middle Bump Animation)
   ============================================================ */

export function DavaTrackExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Elastic assemble animation with tactile middle bump (back.out(1.8))
  const playAssembleAnimation = () => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    cards.forEach((card, idx) => {
      const entry = ENTRY_VECTORS[idx % ENTRY_VECTORS.length];
      gsap.fromTo(
        card,
        {
          x: entry.x * 1.3,
          y: entry.y * 1.3,
          rotation: entry.rotate * 1.3,
          scale: 0.65,
          opacity: 0,
          force3D: true,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1.35,
          delay: idx * 0.075,
          ease: "back.out(1.8)", // Tactile middle overshoot bump when locking in!
          force3D: true,
          clearProps: "transform",
        }
      );
    });
  };

  // Reset cards back to scattered state when leaving to the top
  const resetCards = () => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    cards.forEach((card, idx) => {
      const entry = ENTRY_VECTORS[idx % ENTRY_VECTORS.length];
      gsap.set(card, {
        x: entry.x * 1.3,
        y: entry.y * 1.3,
        rotation: entry.rotate * 1.3,
        scale: 0.65,
        opacity: 0,
        force3D: true,
      });
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const cards = cardsRef.current.filter(Boolean);
    const targetElement = gridRef.current || sectionRef.current;
    if (!cards.length || !targetElement) return;

    // Initialize cards in scattered state on page load
    resetCards();

    // Trigger assemble animation when the cards grid enters viewport (top 72% of screen)
    // Reset on scrolling back to top so it restarts every time you come back down
    const trigger = ScrollTrigger.create({
      trigger: targetElement,
      start: "top 72%",
      onEnter: () => {
        playAssembleAnimation();
      },
      onLeaveBack: () => {
        // When user scrolls back up to the top (hero), reset cards to scatter state
        resetCards();
      },
      onEnterBack: () => {
        // When user scrolls back up into the section from below
        playAssembleAnimation();
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  // Map solution data by key for explicit bento placement
  const supplySolution = MOSAIC_SOLUTIONS.find((s) => s.key === "supply")!;
  const vendorSolution = MOSAIC_SOLUTIONS.find((s) => s.key === "vendor")!;
  const pharmacySolution = MOSAIC_SOLUTIONS.find((s) => s.key === "pharmacy")!;
  const mfgSolution = MOSAIC_SOLUTIONS.find((s) => s.key === "manufacturing")!;
  const staffingSolution = MOSAIC_SOLUTIONS.find((s) => s.key === "staffing")!;
  const appsSolution = MOSAIC_SOLUTIONS.find((s) => s.key === "apps")!;
  const claimsSolution = MOSAIC_SOLUTIONS.find((s) => s.key === "claims")!;
  const accountingSolution = MOSAIC_SOLUTIONS.find((s) => s.key === "accounting")!;
  const patientSolution = MOSAIC_SOLUTIONS.find((s) => s.key === "patient")!;

  return (
    <section
      ref={sectionRef}
      id="glossy-architecture"
      className="py-20 lg:py-28 bg-[#F5F8FA] text-navy border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Replay Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-accent" />
              <span>Interactive Solutions Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              The DavaTrack Glossy Architecture
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Explore our interconnected healthcare solutions. Watch the capabilities scatter and assemble into our unified operational matrix.
            </p>
          </div>

          {/* Interactive Replay Control */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={playAssembleAnimation}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-navy text-white shadow-soft font-bold text-xs hover:bg-navy-700 transition-all active:scale-95"
              title="Replay Assemble Animation"
            >
              <RefreshCw className="w-3.5 h-3.5 text-cyan-accent" />
              <span>Replay Assembly</span>
            </button>
          </div>
        </div>

        {/* Bento Box Mosaic Container (Matching Screenshot Exactly) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 w-full max-w-7xl mx-auto items-stretch"
        >
          {/* ============================================================
              COLUMN 1 (Left): Supply & Delivery + Vendor Discovery (lg:col-span-3)
              ============================================================ */}
          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-5">
            {/* 01 Supply & Delivery */}
            <div
              ref={(el) => { cardsRef.current[0] = el; }}
              className="h-[200px] will-change-transform"
            >
              <GlossyCard solution={supplySolution} />
            </div>

            {/* 06 Vendor Discovery */}
            <div
              ref={(el) => { cardsRef.current[1] = el; }}
              className="flex-1 min-h-[310px] will-change-transform"
            >
              <GlossyCard solution={vendorSolution} />
            </div>
          </div>

          {/* ============================================================
              COLUMN 2 (Center-Left): Pharmacy + Mfg + Center Pill + HR Staffing (lg:col-span-4)
              ============================================================ */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
            {/* 02 Pharmacy Management */}
            <div
              ref={(el) => { cardsRef.current[2] = el; }}
              className="h-[235px] will-change-transform"
            >
              <GlossyCard solution={pharmacySolution} />
            </div>

            {/* Sub-row: Manufacturing on left, Center Pill + HR on right */}
            <div className="flex gap-4 sm:gap-5 items-stretch flex-1 min-h-[275px]">
              {/* 07 Manufacturing */}
              <div
                ref={(el) => { cardsRef.current[3] = el; }}
                className="w-1/2 flex-1 will-change-transform"
              >
                <GlossyCard solution={mfgSolution} />
              </div>

              {/* Right Stack: Center Pill Badge + 08 HR & Staffing */}
              <div className="w-1/2 flex-1 flex flex-col gap-4 sm:gap-5">
                {/* Center Pill Badge: Dava Track */}
                <div
                  ref={(el) => { cardsRef.current[4] = el; }}
                  className="h-[72px] will-change-transform flex items-center justify-center"
                >
                  <Link
                    href="/solutions"
                    className="
                      group
                      relative
                      h-full
                      w-full
                      rounded-[24px] sm:rounded-full
                      bg-gradient-to-b from-white via-[#F9FBFA] to-[#EAEFEB]
                      border border-white/90
                      shadow-[0_12px_28px_rgba(6,54,111,0.12),inset_0_1px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.06)]
                      flex items-center justify-center px-4
                      transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(6,54,111,0.18)]
                    "
                  >
                    <div className="flex items-center gap-1 font-display text-lg sm:text-xl font-black text-navy tracking-tight">
                      <span>Dava</span>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mx-0.5 animate-pulse" />
                      <span>Track</span>
                    </div>
                  </Link>
                </div>

                {/* 08 HR & Staffing */}
                <div
                  ref={(el) => { cardsRef.current[5] = el; }}
                  className="flex-1 min-h-[188px] will-change-transform"
                >
                  <GlossyCard solution={staffingSolution} />
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
              COLUMN 3 (Center-Right): Apps & Software + Claims Support (lg:col-span-3)
              ============================================================ */}
          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-5">
            {/* 03 Apps & Software */}
            <div
              ref={(el) => { cardsRef.current[6] = el; }}
              className="flex-1 min-h-[325px] will-change-transform"
            >
              <GlossyCard solution={appsSolution} />
            </div>

            {/* 09 Claims Support */}
            <div
              ref={(el) => { cardsRef.current[7] = el; }}
              className="h-[185px] will-change-transform"
            >
              <GlossyCard solution={claimsSolution} />
            </div>
          </div>

          {/* ============================================================
              COLUMN 4 (Right): Accounting & MIS + Patient Engagement (lg:col-span-2)
              ============================================================ */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">
            {/* 04 Accounting & MIS */}
            <div
              ref={(el) => { cardsRef.current[8] = el; }}
              className="h-[185px] will-change-transform"
            >
              <GlossyCard solution={accountingSolution} />
            </div>

            {/* 05 Patient Engagement */}
            <div
              ref={(el) => { cardsRef.current[9] = el; }}
              className="flex-1 min-h-[325px] will-change-transform"
            >
              <GlossyCard solution={patientSolution} />
            </div>
          </div>

        </div>

        {/* Bottom Interactive Hint */}
        <div className="mt-12 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            Cards assemble dynamically into the operational matrix • Click "Replay Assembly" to re-trigger • Hover for glossy reflections
          </p>
        </div>

      </div>
    </section>
  );
}
