"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { 
  MOSAIC_SOLUTIONS, 
  ENTRY_VECTORS, 
  MosaicSolution 
} from "@/data/mosaicSolutions";
import { gsap } from "@/lib/gsap/animations";
import { cn } from "@/lib/utils";

/* ============================================================
   GLOSSY GLASS CARD COMPONENT
   ============================================================ */

function GlossyCard({ solution }: { solution: MosaicSolution }) {
  const textColor = solution.onLight ? "#10233F" : "#ffffff";

  // ------------------------------------------------------------
  // CUSTOM / MIDDLE CARD (Logo & Core Brand Identity)
  // ------------------------------------------------------------
  if (solution.key === "custom") {
    return (
      <Link
        href={`/solutions/${solution.slug}`}
        className="
          group
          relative
          block
          h-full
          w-full
          min-h-[220px]
          overflow-hidden
          rounded-[28px]
          border
          border-white/35
          shadow-[0_16px_45px_rgba(6,54,111,0.20)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-1.5
          hover:shadow-[0_25px_65px_rgba(6,54,111,0.32)]
        "
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(255,255,255,0.28) 0%,
              rgba(255,255,255,0.10) 35%,
              rgba(255,255,255,0.04) 65%,
              rgba(0,0,0,0.15) 100%
            ),
            ${solution.color}
          `,
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        {/* Soft glass reflection */}
        <div className="pointer-events-none absolute -top-[45%] -left-[15%] h-[90%] w-[130%] rotate-[-8deg] rounded-[50%] bg-white/[0.16] blur-[35px]" />

        {/* Diagonal shine */}
        <div className="pointer-events-none absolute -left-[80%] top-[-30%] h-[180%] w-[65%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.22] to-transparent blur-[12px] transition-transform duration-[1200ms] ease-out group-hover:translate-x-[260%]" />

        {/* Inner glass edge */}
        <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/[0.18]" />

        {/* Top highlight */}
        <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-white/40" />

        {/* Bottom depth */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/[0.25] via-black/[0.08] to-transparent" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -bottom-[35%] -right-[20%] h-[65%] w-[65%] rounded-full bg-cyan-accent/[0.18] blur-[50px]" />

        {/* Logo Card Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center text-white min-h-[220px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-navy font-black text-xl shadow-lg border border-white/40 group-hover:scale-105 transition-transform">
              <span>D</span>
              <span className="text-cyan-accent text-sm -ml-0.5">T</span>
            </div>
          </div>
          <div className="font-extrabold text-xl sm:text-2xl tracking-tight text-white leading-none">
            Dava<span className="text-cyan-accent">Track</span>
          </div>
          <div className="text-[8px] font-mono uppercase tracking-[0.25em] text-cyan-200 mt-1">
            DIGITAL LLP
          </div>
          <div className="mt-3 text-[10px] text-white/85 font-medium max-w-[190px] leading-tight">
            Healthcare Solutions & Execution Partner
          </div>
          <span className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold text-cyan-accent uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20">
            <span>Explore Custom</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
    );
  }

  // ------------------------------------------------------------
  // NORMAL GLOSSY SOLUTION CARDS
  // ------------------------------------------------------------
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="
        group
        relative
        block
        h-full
        w-full
        min-h-[220px]
        overflow-hidden
        rounded-[28px]
        border
        border-white/35
        shadow-[0_16px_45px_rgba(6,54,111,0.18)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1.5
        hover:shadow-[0_25px_65px_rgba(6,54,111,0.30)]
      "
      style={{
        background: `
          linear-gradient(
            135deg,
            rgba(255,255,255,0.26) 0%,
            rgba(255,255,255,0.08) 35%,
            rgba(255,255,255,0.04) 65%,
            rgba(0,0,0,0.12) 100%
          ),
          ${solution.color}
        `,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {/* Soft top reflection */}
      <div className="pointer-events-none absolute -top-[45%] -left-[15%] h-[90%] w-[130%] rotate-[-8deg] rounded-[50%] bg-white/[0.16] blur-[35px]" />

      {/* Diagonal glossy reflection */}
      <div className="pointer-events-none absolute -left-[80%] top-[-30%] h-[180%] w-[65%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.18] to-transparent blur-[12px] transition-transform duration-[1200ms] ease-out group-hover:translate-x-[260%]" />

      {/* Inner glass edge */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/[0.16]" />

      {/* Top edge highlight */}
      <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-white/40" />

      {/* Bottom depth */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/[0.20] via-black/[0.06] to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-[35%] -right-[20%] h-[65%] w-[65%] rounded-full bg-white/[0.07] blur-[50px]" />

      {/* Normal Card Content */}
      <div
        className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 min-h-[220px]"
        style={{ color: textColor }}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex h-7 min-w-7 items-center justify-center rounded-full border border-white/20 bg-white/[0.1] px-2 font-mono text-[9px] tracking-[0.15em] backdrop-blur-md">
            {solution.no}
          </div>

          <div className="rounded-full border border-white/15 bg-black/[0.08] px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.25em] opacity-80">
            DavaTrack
          </div>
        </div>

        {/* Main Content */}
        <div className="my-auto py-2">
          <div className="mb-2 h-px w-8 bg-white/30" />

          <h3 className="font-display text-[17px] sm:text-[19px] font-bold leading-[1.1] tracking-tight group-hover:text-cyan-200 transition-colors">
            {solution.tileTitle}
          </h3>

          <p className="mt-1.5 text-[10px] sm:text-[11px] leading-[1.45] opacity-80 line-clamp-2">
            {solution.objective}
          </p>
        </div>

        {/* Bottom Metadata */}
        <div className="flex items-end justify-between pt-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.22em] opacity-60">
            Healthcare
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.22em] opacity-85 text-cyan-200 group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
            {solution.key} →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ============================================================
   MAIN DAVATRACK INTERACTIVE MOSAIC EXPERIENCE
   (Cards visible in-place, smoothly arrange on scroll)
   ============================================================ */

export function DavaTrackExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length || !sectionRef.current) return;

      // ScrollTrigger timeline that gently arranges cards from scattered state into grid as user scrolls in
      cards.forEach((card, idx) => {
        const entry = ENTRY_VECTORS[idx % ENTRY_VECTORS.length];
        gsap.fromTo(
          card,
          {
            x: entry.x * 0.45,
            y: entry.y * 0.45,
            rotation: entry.rotate * 0.6,
            scale: 0.92,
            opacity: 0.6,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "top 35%",
              scrub: 1.2,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="glossy-architecture"
      className="py-20 lg:py-28 bg-[#F4F8FC] text-navy border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-accent" />
            <span>Interactive Solutions Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            The DavaTrack Glossy Architecture
          </h2>
          <p className="text-sm sm:text-base text-muted">
            Explore our interconnected healthcare solutions. Scroll to see the capabilities arrange into an operational matrix.
          </p>
        </div>

        {/* Mosaic Grid Container (Always 100% visible & structured) */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            w-full
            max-w-6xl
            mx-auto
          "
        >
          {MOSAIC_SOLUTIONS.map((solution, index) => (
            <div
              key={solution.key}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="h-full w-full min-h-[220px] will-change-transform"
            >
              <GlossyCard solution={solution} />
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
