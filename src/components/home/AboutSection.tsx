"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap/animations";

interface StatItem {
  id: string;
  targetNumber: number;
  suffix: string;
  prefix?: string;
  progressPercent: number;
  gradient: {
    start: string;
    end: string;
  };
  headline: string;
  boldPhrase: string;
  afterPhrase?: string;
}

const STATS_ITEMS: StatItem[] = [
  {
    id: "stat-1",
    targetNumber: 45,
    prefix: "-",
    suffix: "%",
    progressPercent: 45,
    gradient: {
      start: "#266573",
      end: "#6EBCBF",
    },
    headline: "Up to",
    boldPhrase: "45% lower procurement lead time",
    afterPhrase: "across surgical and clinical consumables",
  },
  {
    id: "stat-2",
    targetNumber: 82,
    prefix: "-",
    suffix: "%",
    progressPercent: 82,
    gradient: {
      start: "#173246",
      end: "#6BB0BF",
    },
    headline: "Achieve up to",
    boldPhrase: "82% reduction in pharmacy expiry",
    afterPhrase: "through active batch rotation SOPs",
  },
  {
    id: "stat-3",
    targetNumber: 97,
    suffix: "%",
    progressPercent: 97,
    gradient: {
      start: "#266573",
      end: "#6BB0BF",
    },
    headline: "Eliminate up to",
    boldPhrase: "97% of billing & procurement leakage",
    afterPhrase: "with unified vendor coordination",
  },
  {
    id: "stat-4",
    targetNumber: 100,
    suffix: "%",
    progressPercent: 100,
    gradient: {
      start: "#173246",
      end: "#6EBCBF",
    },
    headline: "Guarantee",
    boldPhrase: "100% batch-traceable audit compliance",
    afterPhrase: "under single-SLA governance",
  },
];

function StatCardItem({
  stat,
  idx,
  isAnimated,
  radius,
  circumference,
}: {
  stat: StatItem;
  idx: number;
  isAnimated: boolean;
  radius: number;
  circumference: number;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const targetOffset = circumference - (circumference * stat.progressPercent) / 100;

  React.useEffect(() => {
    if (!isAnimated) {
      if (numberRef.current) {
        numberRef.current.textContent = `${stat.prefix || ""}0${stat.suffix}`;
      }
      return;
    }

    let startTime: number | null = null;
    const duration = 1100; // 1.1s snappy count-up
    const target = stat.targetNumber;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(ease * target);

      if (numberRef.current) {
        numberRef.current.textContent = `${stat.prefix || ""}${val}${stat.suffix}`;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [isAnimated, stat.prefix, stat.suffix, stat.targetNumber]);

  return (
    <div
      className="group flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-white border border-white/90 shadow-[0_16px_36px_rgba(18,38,49,0.14)] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(18,38,49,0.22)] transition-all duration-300 text-[#122631] transform-gpu will-change-transform"
    >
      {/* Radial Progress SVG Container */}
      <div className="relative w-36 h-36 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 transform-gpu">
        <svg
          className="w-full h-full -rotate-90 transform-gpu"
          viewBox="0 0 140 140"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`stat-grad-${idx}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={stat.gradient.start} />
              <stop offset="100%" stopColor={stat.gradient.end} />
            </linearGradient>
          </defs>

          {/* Background Track Circle */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke="#EEF4F3"
            strokeWidth="8"
          />

          {/* Animated Foreground Progress Circle - Pure GPU Hardware Acceleration */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke={`url(#stat-grad-${idx})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isAnimated ? targetOffset : circumference}
            style={{
              transition: isAnimated
                ? "stroke-dashoffset 1.3s cubic-bezier(0.16, 1, 0.3, 1)"
                : "stroke-dashoffset 0.3s ease-out",
              willChange: "stroke-dashoffset",
            }}
          />
        </svg>

        {/* Stat Counter in Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            ref={numberRef}
            className="text-2xl sm:text-3xl font-black text-[#122631] tracking-tight font-mono"
          >
            {stat.prefix || ""}0{stat.suffix}
          </span>
        </div>
      </div>

      {/* Description Headline & Content */}
      <div className="text-sm text-[#122631]/75 leading-snug space-y-1">
        <p>
          {stat.headline}{" "}
          <strong className="font-bold text-[#122631]">
            {stat.boldPhrase}
          </strong>{" "}
          {stat.afterPhrase}
        </p>
      </div>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = React.useState(false);
  const RADIUS = 54;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
          } else {
            // Reset when leaving the viewport so animation repeats when returning
            setIsAnimated(false);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-davatrack"
      className="py-12 sm:py-16 text-[#122631] relative z-20 overflow-hidden rounded-t-[36px] sm:rounded-t-[48px] shadow-[0_-30px_60px_-15px_rgba(18,38,49,0.12),0_-10px_20px_-8px_rgba(18,38,49,0.08)] border-t border-white/60"
      style={{
        background: `
          linear-gradient(
            145deg,
            rgba(255,255,255,0.40) 0%,
            rgba(255,255,255,0.15) 45%,
            rgba(18,38,49,0.06) 100%
          ),
          #6EBCBF
        `,
      }}
    >
      {/* Hardware-accelerated glossy top-left specular reflection */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45)_0%,transparent_60%)]" />

      {/* Ambient soft glow highlights */}
      <div className="pointer-events-none absolute -top-24 right-1/4 w-[500px] h-[500px] bg-white/20 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 w-[500px] h-[500px] bg-[#266573]/10 rounded-full blur-[140px]" />

      {/* Crisp top edge highlight line */}
      <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-white/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-block">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white bg-[#122631] border border-[#122631]/20 px-3.5 py-1 rounded-full shadow-xs">
              OPERATIONAL IMPACT &amp; SAVINGS
            </span>
          </div>

          {/* Headline with 'improving execution' in full black */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#122631] tracking-tight leading-[1.18]">
            Lowering costs by{" "}
            <span className="text-black font-black">
              improving execution
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#122631]/85 max-w-2xl mx-auto font-medium leading-relaxed">
            By guiding healthcare providers through unified supply chains, managed pharmacy SOPs, and clinical workflows, we eliminate operational leakage and accelerate results.
          </p>
        </div>

        {/* 4 Radial Circular Progress Stats Grid (Solid White Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-4">
          {STATS_ITEMS.map((stat, idx) => (
            <StatCardItem
              key={stat.id}
              stat={stat}
              idx={idx}
              isAnimated={isAnimated}
              radius={RADIUS}
              circumference={CIRCUMFERENCE}
            />
          ))}
        </div>

        {/* Action Link */}
        <div className="text-center pt-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#122631] hover:text-[#266573] transition-colors group bg-white/80 hover:bg-white px-5 py-2.5 rounded-full border border-white/90 shadow-xs"
          >
            <span>Read more about our operational model</span>
            <ArrowRight className="w-4 h-4 text-[#122631] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
