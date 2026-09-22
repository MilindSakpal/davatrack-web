"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Quote, Building, Sparkles, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS_DATA, TestimonialItem } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const SEGMENTS = ["All", "Hospital", "Pharmacy Chain", "Diagnostic Network", "Healthcare Startup"] as const;

export default function TestimonialsPage() {
  const [activeSegment, setActiveSegment] = useState<string>("All");

  const filtered = activeSegment === "All"
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.segment === activeSegment);

  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Hero */}
      <section className="bg-hero-gradient bg-tech-grid py-16 lg:py-24 border-b border-border/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: "Testimonials" }]}
            className="mb-8"
          />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/20 text-blue-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Operational Impact & Perspectives</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.08]">
              Healthcare Execution
              <br />
              <span className="text-blue-accent">In Practice.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Explore how DavaTrack’s integrated models in supply, pharmacy operations, technology, and staffing solve tangible operational bottlenecks.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Directory */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Segment Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SEGMENTS.map((seg) => (
              <button
                key={seg}
                onClick={() => setActiveSegment(seg)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex-shrink-0",
                  activeSegment === seg
                    ? "bg-navy text-white shadow-md"
                    : "bg-surface-soft text-navy hover:bg-navy-50 border border-border"
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
                className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between relative group"
              >
                <Quote className="absolute top-6 right-8 w-16 h-16 text-navy-50/80 -z-0 pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-navy-50 text-navy text-xs font-extrabold uppercase tracking-wider">
                      {item.segment}
                    </span>
                    <span className="text-[11px] font-semibold text-muted bg-surface-soft px-2.5 py-1 rounded-md border border-border">
                      Case Highlight
                    </span>
                  </div>

                  <blockquote className="text-base sm:text-lg font-bold text-navy leading-relaxed">
                    “{item.quote}”
                  </blockquote>

                  {item.metrics && (
                    <div className="grid grid-cols-2 gap-3 pt-3">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="bg-surface-soft p-3 rounded-xl border border-border-subtle">
                          <div className="text-lg font-black text-blue-accent">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-semibold text-muted">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-border/70 flex items-center justify-between relative z-10">
                  <div>
                    <div className="text-sm font-extrabold text-navy">
                      {item.role}
                    </div>
                    <div className="text-xs text-muted">
                      {item.organizationType}
                    </div>
                  </div>
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Consultation Banner */}
          <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Want to achieve similar operational reliability?
              </h3>
              <p className="text-xs sm:text-sm text-navy-200 max-w-xl">
                Consult with our healthcare execution team to design a workflow suited specifically to your facility.
              </p>
            </div>
            <Button
              href="/inquiry"
              variant="cyan"
              size="lg"
              icon="arrow"
              className="flex-shrink-0 font-bold"
            >
              Discuss Your Requirement
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
