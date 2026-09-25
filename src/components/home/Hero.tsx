"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap/animations";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Background Grid & Ambient Glow Reveal
      tl.fromTo(
        ".hero-grid-bg",
        { opacity: 0 },
        { opacity: 1, duration: 1.0, ease: "power2.out" }
      )
      .fromTo(
        ".hero-ambient-glow",
        { opacity: 0, scale: 0.75 },
        { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
        "-=0.8"
      )

      // 2. Main Hero Card Smooth Rise & Scale-in with subtle blur clear
      .fromTo(
        ".hero-main-card",
        { 
          opacity: 0, 
          y: 45, 
          scale: 0.96,
          filter: "blur(6px)"
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          filter: "blur(0px)",
          duration: 1.1, 
          ease: "power4.out" 
        },
        "-=1.1"
      )

      // 3. Specular Light Shimmer Sweep across the glossy card
      .fromTo(
        ".hero-shimmer-sheen",
        { xPercent: -130, opacity: 0 },
        { xPercent: 230, opacity: 0.6, duration: 1.5, ease: "power2.inOut" },
        "-=0.9"
      )

      // 4. Eyebrow Tag / Pill Badge
      .fromTo(
        ".clean-hero-tag",
        { opacity: 0, y: -16, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "back.out(1.5)" },
        "-=1.2"
      )

      // 5. Title Line 1 & Line 2 Smooth Cascade
      .fromTo(
        ".hero-title-line-1",
        { opacity: 0, y: 28, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75, ease: "power3.out" },
        "-=0.9"
      )
      .fromTo(
        ".hero-title-line-2",
        { opacity: 0, y: 28, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75, ease: "power3.out" },
        "-=0.6"
      )

      // 6. Subtext Fade & Float up
      .fromTo(
        ".clean-hero-subtext",
        { opacity: 0, y: 20, filter: "blur(3px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75, ease: "power3.out" },
        "-=0.5"
      )

      // 7. Dual CTA Buttons Pop in with stagger
      .fromTo(
        ".hero-btn-primary",
        { opacity: 0, y: 16, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.6)" },
        "-=0.4"
      )
      .fromTo(
        ".hero-btn-secondary",
        { opacity: 0, y: 16, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.6)" },
        "-=0.45"
      );

      // Subtle background floating ambient breath
      gsap.to(".hero-ambient-glow", {
        y: "-=12",
        scale: 1.05,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSolutions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("glossy-architecture");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="pt-28 sm:pt-32 pb-8 sm:pb-12 bg-[#EEF4F3] relative overflow-hidden"
    >
      {/* Geometric Grid Pattern with smooth bottom fade mask */}
      <div className="hero-grid-bg pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(38,101,115,0.13)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(38,101,115,0.13)_1.5px,transparent_1.5px)] bg-[size:3.5rem_3.5rem] [mask-image:linear-gradient(to_bottom,black_50%,transparent_98%)]" />

      {/* Subtle ambient glow behind card */}
      <div className="hero-ambient-glow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6BB0BF]/[0.16] rounded-full blur-[140px]" />

      {/* Soft feather gradient & subtle shadow blend at bottom to transition seamlessly into Architecture */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#EEF4F3] via-[#EEF4F3]/80 to-transparent z-0" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#122631]/[0.03] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Card colored in matching Architecture Card palette (#234E48 Forest Teal) with rich drop shadow */}
        <div 
          className="hero-main-card rounded-[32px] sm:rounded-[40px] border border-white/20 shadow-[0_24px_70px_rgba(35,78,72,0.26),0_10px_30px_rgba(11,30,59,0.10)] relative overflow-hidden py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-16 text-center text-white will-change-transform"
          style={{
            background: `
              linear-gradient(
                145deg,
                rgba(255,255,255,0.18) 0%,
                rgba(255,255,255,0.04) 45%,
                rgba(0,0,0,0.20) 100%
              ),
              ${"#234E48"}
            `,
          }}
        >
          {/* Subtle glossy top specular reflection */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.20)_0%,transparent_60%)]" />

          {/* Shimmer Light Beam that sweeps across on load */}
          <div className="hero-shimmer-sheen pointer-events-none absolute -inset-y-10 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-25 blur-sm" />

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto space-y-8 sm:space-y-10">
            
            {/* Tag / Eyebrow Badge */}
            <div className="clean-hero-tag inline-block">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/90 bg-white/[0.12] border border-white/25 px-4 py-1.5 rounded-full shadow-inner backdrop-blur-sm">
                THE OPERATIONAL LAYER FOR HEALTHCARE
              </span>
            </div>

            {/* Big Headline */}
            <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.08]">
                <span className="hero-title-line-1 block">
                  Healthcare Visibility.
                </span>
                <span className="hero-title-line-2 block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                  Operational Intelligence.
                </span>
              </h1>

              {/* Subtext */}
              <p className="clean-hero-subtext text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-normal">
                DavaTrack unifies medicine supply lines, pharmacy management, clinical staffing, and custom software under single-partner accountability.
              </p>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <div className="hero-btn-primary">
                <Link
                  href="/inquiry"
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-white/90 text-[#234E48] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Book a demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="hero-btn-secondary">
                <a
                  href="#glossy-architecture"
                  onClick={scrollToSolutions}
                  className="px-8 py-3.5 rounded-full bg-white/[0.12] hover:bg-white/[0.20] text-white border border-white/25 font-bold text-sm sm:text-base backdrop-blur-md shadow-sm transition-all active:scale-95 cursor-pointer block"
                >
                  See How It Works
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
