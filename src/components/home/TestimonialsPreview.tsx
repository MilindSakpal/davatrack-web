"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { Building2, ChevronLeft, ChevronRight, ArrowRight, Quote } from "lucide-react";

export function TestimonialsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = TESTIMONIALS_DATA;
  const current = testimonials[currentIndex];
  const total = testimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="py-20 lg:py-28 bg-[#CAD7D0] text-[#122631] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            {/* Pill Badge */}
            <div className="inline-block">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#266573] bg-[#266573]/12 border border-[#266573]/25 px-3.5 py-1 rounded-full">
                CLIENT PERSPECTIVES &amp; IMPACT
              </span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#122631] tracking-tight leading-[1.2] mt-3.5 mb-2.5">
              Execution That Drives Clinical &amp; Operational Results.
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#4A6572] max-w-2xl font-normal leading-relaxed">
              Structured operational case frameworks across hospitals, pharmacy networks, and healthcare innovators.
            </p>
          </div>

          {/* Right Action Link */}
          <div className="shrink-0 pb-1">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#122631] hover:text-[#266573] transition-colors group"
            >
              <span>View Full Testimonials Page</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div 
          className="rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(18,38,49,0.10)] border border-white/60 transition-all duration-300 relative overflow-hidden"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Quote & Author (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                {/* Hospital / Org Badge */}
                <div className="inline-flex items-center gap-2 bg-[#122631] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 shadow-xs">
                  <Building2 className="w-3.5 h-3.5 text-[#6BB0BF]" />
                  <span>{current.organizationType}</span>
                </div>

                {/* Main Quote Text */}
                <blockquote className="text-[#122631] font-bold text-xl sm:text-2xl lg:text-[23px] leading-snug tracking-tight">
                  “{current.quote}”
                </blockquote>
              </div>

              {/* Author & Organization Details */}
              <div className="pt-4 border-t border-[#122631]/15">
                <div className="text-sm sm:text-base font-bold text-[#122631]">
                  {current.role}
                </div>
                <div className="text-xs sm:text-sm text-[#122631]/80 font-medium mt-0.5">
                  {current.organizationType} • {current.segment}
                </div>
              </div>
            </div>

            {/* Right Column: Verified Outcome & Metrics Card (5 cols) */}
            <div className="lg:col-span-5 bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-white/80 shadow-sm">
              
              {/* Subtle Decorative Background Quote Icon */}
              <Quote className="absolute top-3 right-4 w-20 h-20 text-[#6EBCBF]/30 select-none pointer-events-none -scale-x-100" />

              <div className="relative z-10">
                {/* Header Label */}
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#266573]">
                  VERIFIED OUTCOME
                </div>

                {/* Outcome Title */}
                <h4 className="text-sm sm:text-base font-bold text-[#122631] mt-2 mb-6 leading-snug">
                  {current.highlight}
                </h4>

                {/* Metric Tiles Grid */}
                {current.metrics && current.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {current.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-4 shadow-xs border border-[#CAD7D0]/60 flex flex-col justify-center min-h-[90px]"
                      >
                        <div className="text-2xl sm:text-[26px] font-extrabold text-[#266573] tracking-tight leading-none">
                          {metric.value}
                        </div>
                        <div className="text-[11px] font-medium text-[#4A6572] mt-2 leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation & Counter Footer */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#CAD7D0]/60 relative z-10">
                <div className="text-xs sm:text-sm font-semibold text-[#4A6572] tracking-wider font-mono">
                  {formatNumber(currentIndex + 1)} / {formatNumber(total)}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 rounded-lg bg-white border border-[#CBD9D2] flex items-center justify-center text-[#122631] hover:bg-slate-50 hover:text-[#266573] transition active:scale-95 shadow-sm cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="w-9 h-9 rounded-lg bg-[#122631] flex items-center justify-center text-white hover:bg-[#266573] transition active:scale-95 shadow-sm cursor-pointer"
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
