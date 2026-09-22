"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Quote, ArrowRight, Star, Building, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-surface-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-accent/10 text-blue-accent text-xs font-extrabold uppercase tracking-wider">
              <span>Client Perspectives & Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Execution That Drives Clinical & Operational Results.
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Structured operational case frameworks across hospitals, pharmacy networks, and healthcare innovators.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/testimonials"
              className="text-xs font-bold text-navy hover:text-blue-accent transition-colors underline-offset-4 hover:underline"
            >
              View Full Testimonials Page →
            </Link>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-card relative overflow-hidden">
          <Quote className="absolute top-6 right-8 w-24 h-24 text-navy-50/70 -z-0 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Quote & Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-50 text-navy text-xs font-bold">
                <Building className="w-3.5 h-3.5 text-blue-accent" />
                <span>{current.organizationType}</span>
              </div>

              <blockquote className="text-lg sm:text-2xl font-bold text-navy leading-snug">
                “{current.quote}”
              </blockquote>

              <div className="pt-2">
                <div className="text-sm font-extrabold text-navy-800">
                  {current.role}
                </div>
                <div className="text-xs text-muted">
                  {current.organizationType} • {current.segment}
                </div>
              </div>
            </div>

            {/* Impact Metrics & Navigation */}
            <div className="lg:col-span-4 bg-surface-soft rounded-2xl p-6 border border-border/80 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-muted mb-3">
                  Verified Outcome
                </div>
                <div className="text-sm font-bold text-navy mb-4">
                  {current.highlight}
                </div>

                {current.metrics && (
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/60">
                    {current.metrics.map((m, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-border-subtle">
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

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between pt-2 border-t border-border/60">
                <span className="text-xs font-bold text-muted">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-white border border-border text-navy hover:bg-navy-50 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-navy text-white hover:bg-navy-700 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
