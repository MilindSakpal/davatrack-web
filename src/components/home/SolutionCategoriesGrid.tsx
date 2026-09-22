"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DynamicIcon } from "@/components/ui/Icons";
import { SOLUTION_CATEGORIES } from "@/data/solutions";
import { gsap } from "@/lib/gsap/animations";

export function SolutionCategoriesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.fromTo(
        ".solution-category-card",
        {
          opacity: 0,
          y: 45,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions-overview"
      className="py-24 lg:py-32 bg-surface-soft relative overflow-hidden"
    >
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-accent" />
              <span>Core Operational Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-[1.12]">
              Complete Healthcare Solutions.
              <br />
              <span className="text-blue-accent">Organized in 4 Specialized Domains.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted">
              Whether you need targeted sourcing, complete pharmacy management, custom digital software, or healthcare staffing — explore our integrated capabilities.
            </p>
          </div>

          <div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-navy font-bold text-sm border border-border hover:border-blue-accent hover:bg-navy-50 shadow-soft transition-all group"
            >
              <span>View Detailed Solutions Hub</span>
              <ArrowRight className="w-4 h-4 text-blue-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 2x2 Desktop Editorial Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SOLUTION_CATEGORIES.map((category) => (
            <div
              key={category.key}
              className="solution-category-card group relative bg-white rounded-3xl p-8 sm:p-10 border border-border/90 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Top Border Accent that draws on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-accent via-cyan-accent to-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Card Top Row: Number & Icon */}
              <div>
                <div className="flex items-start justify-between mb-6">
                  {/* Large Numerals with subtle hover shift */}
                  <span className="text-4xl sm:text-5xl font-black text-navy-100 group-hover:text-blue-accent/25 transition-colors duration-300 tracking-tighter">
                    {category.number}
                  </span>

                  {/* Icon with micro-movement */}
                  <div className="p-3.5 rounded-2xl bg-navy-50 text-blue-accent group-hover:bg-navy group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                    <DynamicIcon name={category.iconName} className="w-6 h-6" />
                  </div>
                </div>

                {/* Category Title & Subtitle */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-blue-accent">
                    {category.subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight group-hover:text-navy-700 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Category Description */}
                <p className="text-sm sm:text-base text-muted leading-relaxed mb-8">
                  {category.description}
                </p>

                {/* Structured Solution Sub-links List */}
                <div className="space-y-2.5 pt-4 border-t border-border/80">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-muted-dark mb-2">
                    Key Execution Solutions:
                  </div>

                  {category.solutions.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/solutions/${item.slug}`}
                      className="group/item flex items-center justify-between p-3 rounded-xl bg-surface-soft/80 hover:bg-navy-50/90 border border-border-subtle hover:border-blue-accent/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <div className="p-1.5 rounded-lg bg-white text-navy group-hover/item:text-blue-accent shadow-xs flex-shrink-0">
                          <DynamicIcon name={item.iconName} className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-navy group-hover/item:text-blue-accent transition-colors truncate">
                          {item.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-semibold text-blue-accent opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all flex-shrink-0">
                        <span className="hidden sm:inline text-[11px]">Explore</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs text-muted font-medium">
                  {category.solutions.length} Specialized Capabilities
                </span>
                <Link
                  href={`/solutions#${category.key}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-navy group-hover:text-blue-accent transition-colors"
                >
                  <span>Explore All in {category.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Solution Callout Card */}
        <div className="mt-12 bg-gradient-to-r from-navy via-navy-800 to-navy-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-navy-700">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-accent">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Have a Unique Healthcare Challenge?</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Custom Healthcare Solutions & Bespoke Engineering
            </h3>
            <p className="text-xs sm:text-sm text-navy-200 max-w-xl">
              If standard templates don’t solve your operational challenge, we combine technology, physical supply, people, and processes around your exact problem.
            </p>
          </div>
          <Link
            href="/solutions/custom-healthcare-solutions"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-accent text-ink-dark font-extrabold text-sm hover:bg-sky-400 shadow-md transition-all flex-shrink-0"
          >
            <span>Explore Custom Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
