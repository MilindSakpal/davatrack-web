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
          border-white/30
          shadow-[0_12px_32px_rgba(6,54,111,0.20)]
          transition-transform
          duration-300
          ease-out
          hover:-translate-y-1.5
          hover:shadow-[0_20px_45px_rgba(6,54,111,0.30)]
        "
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(255,255,255,0.24) 0%,
              rgba(255,255,255,0.08) 40%,
              rgba(0,0,0,0.18) 100%
            ),
            ${solution.color}
          `,
        }}
      >
        {/* Hardware-accelerated glossy top reflection */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.22)_0%,transparent_60%)]" />

        {/* Ambient bottom glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.25)_0%,transparent_65%)]" />

        {/* Diagonal shine on hover */}
        <div className="pointer-events-none absolute -left-[100%] top-[-30%] h-[180%] w-[60%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.22] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[350%]" />

        {/* Inner glass border */}
        <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/[0.18]" />

        {/* Top highlight */}
        <div className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px bg-white/40" />

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
        border-white/30
        shadow-[0_12px_32px_rgba(6,54,111,0.16)]
        transition-transform
        duration-300
        ease-out
        hover:-translate-y-1.5
        hover:shadow-[0_20px_45px_rgba(6,54,111,0.26)]
      "
      style={{
        background: `
          linear-gradient(
            135deg,
            rgba(255,255,255,0.22) 0%,
            rgba(255,255,255,0.06) 40%,
            rgba(0,0,0,0.15) 100%
          ),
          ${solution.color}
        `,
      }}
    >
      {/* Hardware-accelerated glossy top reflection */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.20)_0%,transparent_60%)]" />

      {/* Subtle depth */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/[0.20] to-transparent" />

      {/* Diagonal shine sweep */}
      <div className="pointer-events-none absolute -left-[100%] top-[-30%] h-[180%] w-[60%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.18] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[350%]" />

      {/* Inner glass edge */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/[0.15]" />

      {/* Top highlight */}
      <div className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px bg-white/35" />

      {/* Normal Card Content */}
      <div
        className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 min-h-[220px]"
        style={{ color: textColor }}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex h-7 min-w-7 items-center justify-center rounded-full border border-white/20 bg-white/[0.15] px-2 font-mono text-[9px] tracking-[0.15em]">
            {solution.no}
          </div>

          <div className="rounded-full border border-white/15 bg-black/[0.1] px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.25em] opacity-80">
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
   (Ultra-Smooth Hardware-Accelerated Animation)
   ============================================================ */

export function DavaTrackExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Dramatic, expressive scatter-and-assemble animation with spring physics (60-120fps GPU accelerated)
  const playAssembleAnimation = () => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    cards.forEach((card, idx) => {
      const entry = ENTRY_VECTORS[idx % ENTRY_VECTORS.length];
      gsap.fromTo(
        card,
        {
          x: entry.x * 1.15,
          y: entry.y * 1.15,
          rotation: entry.rotate * 1.3,
          scale: 0.76,
          opacity: 0,
          force3D: true,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 0.95,
          delay: idx * 0.055,
          ease: "back.out(1.5)",
          force3D: true,
          clearProps: "transform",
        }
      );
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length || !sectionRef.current) return;

    // Trigger assemble animation once cleanly when entering viewport
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 78%",
      onEnter: () => {
        playAssembleAnimation();
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="glossy-architecture"
      className="py-20 lg:py-28 bg-[#F4F8FC] text-navy border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Replay & Scatter Control */}
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

        {/* Mosaic Grid Container */}
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

        {/* Bottom Interactive Hint */}
        <div className="mt-12 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            Cards assemble dynamically on view • Click "Replay Assembly" to re-trigger • Hover for glossy reflections
          </p>
        </div>

      </div>
    </section>
  );
}
