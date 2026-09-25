"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Quote, Building, Sparkles, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { TESTIMONIALS_DATA, TestimonialItem } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const SEGMENTS = ["All", "Hospital", "Pharmacy Chain", "Diagnostic Network", "Healthcare Startup"] as const;

export default function TestimonialsPage() {
  const [activeSegment, setActiveSegment] = useState<string>("All");

  const filtered = activeSegment === "All"
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.segment === activeSegment);

  return (
    <div className="min-h-screen bg-[#EDEDE5] text-[#122631] pt-28 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/5 to-transparent rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 bg-[#CAD7D0]/30 rounded-full blur-[130px]" />

      {/* ============================================================
          PAGE HERO
          ============================================================ */}
      <section className="relative z-10 pt-10 pb-16 border-b border-[#CAD7D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider shadow-sm font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#266573]" />
              <span>Operational Impact & Perspectives</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#122631] leading-[1.08]">
              Healthcare Execution
              <br />
              <span className="bg-gradient-to-r from-[#122631] via-[#266573] to-[#6BB0BF] bg-clip-text text-transparent">
                In Practice.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#122631]/75 leading-relaxed">
              Explore how DavaTrack’s integrated models across medicine supply, managed pharmacy operations, technology, and clinical staffing eliminate operational bottlenecks for hospitals and pharmacy chains.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS DIRECTORY
          ============================================================ */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Segment Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SEGMENTS.map((seg) => (
              <button
                key={seg}
                onClick={() => setActiveSegment(seg)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex-shrink-0 font-mono",
                  activeSegment === seg
                    ? "bg-[#122631] text-white shadow-md"
                    : "bg-white text-[#122631] hover:bg-[#EDEDE5] border border-[#CAD7D0] shadow-sm"
                )}
              >
                {seg === "All" ? "All Healthcare Sectors" : seg}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl p-8 sm:p-10 border border-white/60 shadow-[0_16px_40px_rgba(18,38,49,0.10)] hover:shadow-[0_26px_56px_rgba(18,38,49,0.20)] transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
                style={{
                  background: `
                    linear-gradient(
                      145deg,
                      rgba(255,255,255,0.45) 0%,
                      rgba(255,255,255,0.15) 45%,
                      rgba(18,38,49,0.06) 100%
                    ),
                    #6EBCBF
                  `,
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45)_0%,transparent_60%)]" />
                <Quote className="absolute top-6 right-8 w-16 h-16 text-white/30 pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#122631] text-white text-xs font-mono uppercase tracking-wider font-bold shadow-xs">
                      {item.segment}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#122631] bg-white/80 px-2.5 py-1 rounded-full border border-white/70 shadow-xs">
                      Case Highlight
                    </span>
                  </div>

                  <blockquote className="text-base sm:text-lg font-bold text-[#122631] leading-relaxed">
                    “{item.quote}”
                  </blockquote>

                  {item.metrics && (
                    <div className="grid grid-cols-2 gap-3 pt-3">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="bg-white/80 p-3 rounded-xl border border-white/80 shadow-xs backdrop-blur-sm">
                          <div className="text-xl font-black font-mono text-[#122631]">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-[#266573] font-bold mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-[#122631]/15 flex items-center justify-between relative z-10">
                  <div>
                    <div className="text-sm font-bold text-[#122631]">
                      {item.role}
                    </div>
                    <div className="text-xs text-[#122631]/80 font-medium">
                      {item.organizationType}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#122631] font-bold uppercase tracking-wider">
                    VERIFIED PARTNER
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="bg-[#122631] rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-[0_20px_50px_rgba(18,38,49,0.3)] mt-12 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#266573]/30 rounded-full blur-[100px]" />
            <div className="relative z-10 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to create your operational success story?
              </h3>
              <p className="text-sm sm:text-base text-[#CAD7D0]/80 max-w-xl mx-auto">
                Connect with our solutions team to discuss hospital procurement, managed pharmacy operations, or healthcare technology.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/inquiry"
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-[#EDEDE5] text-[#122631] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
                >
                  Discuss Your Requirement
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
