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
    <div className="min-h-screen bg-[#EDF3F0] text-[#122631] pt-28 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/5 to-transparent rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 bg-[#CAD7D0]/30 rounded-full blur-[130px]" />

      {/* Subtle tech grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(38,101,115,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,101,115,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]" />

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
                    : "bg-white text-[#122631] hover:bg-[#EDF3F0] border border-[#CAD7D0] shadow-sm"
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
                className="bg-white hover:bg-[#F9FBFA] rounded-3xl p-8 sm:p-10 border border-[#CAD7D0] hover:border-[#266573]/40 transition-all duration-300 flex flex-col justify-between relative group shadow-[0_4px_20px_rgba(18,38,49,0.04)] hover:shadow-[0_12px_30px_rgba(18,38,49,0.08)]"
              >
                <Quote className="absolute top-6 right-8 w-16 h-16 text-[#CAD7D0]/30 pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-bold">
                      {item.segment}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-[#266573] bg-[#EDF3F0] px-2.5 py-1 rounded-full border border-[#CAD7D0]">
                      Case Highlight
                    </span>
                  </div>

                  <blockquote className="text-base sm:text-lg font-bold text-[#122631] leading-relaxed">
                    “{item.quote}”
                  </blockquote>

                  {item.metrics && (
                    <div className="grid grid-cols-2 gap-3 pt-3">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="bg-[#EDF3F0] p-3 rounded-xl border border-[#CAD7D0]">
                          <div className="text-xl font-black font-mono text-[#122631]">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-[#266573] font-medium">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-[#CAD7D0]/60 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#122631]">
                      {item.role}
                    </div>
                    <div className="text-xs text-[#122631]/60">
                      {item.organizationType}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#266573] font-bold uppercase tracking-wider">
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
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-[#EDF3F0] text-[#122631] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
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
