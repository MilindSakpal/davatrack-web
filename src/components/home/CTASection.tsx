"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#EDF3F0] text-[#122631] relative overflow-hidden flex items-center justify-center border-t border-[#CBD9D2]/70">
      {/* Soft Nordic Mist / Sage Center Circle (Slightly Bigger) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[560px] lg:w-[660px] aspect-square rounded-full bg-gradient-to-tr from-[#6BB0BF]/25 via-[#CAD7D0]/40 to-[#EDF3F0] border border-[#6BB0BF]/20 shadow-[0_0_80px_rgba(107,176,191,0.20)]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5">
        
        {/* Editorial Headline with Serif Italic 'the future' */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#122631] tracking-tight leading-tight">
          Bring your healthcare operations
          <br />
          into <span className="font-serif italic font-normal text-[#122631]">the future</span>
        </h2>

        {/* Tailored Subtext */}
        <p className="text-xs sm:text-sm text-[#4A6572] max-w-lg mx-auto leading-relaxed font-normal">
          Partner with DavaTrack to unite medicine supply lines, hospital pharmacy SOPs, clinical talent, and custom digital software under single-partner accountability.
        </p>

        {/* Dual Action Buttons in Deep Palette */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/inquiry"
            className="bg-[#122631] hover:bg-[#266573] text-white font-medium text-xs sm:text-sm px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 min-w-[140px] cursor-pointer"
          >
            <span>Book a demo</span>
            <ArrowRight className="w-4 h-4 text-[#6BB0BF]" />
          </Link>
          
          <Link
            href="/solutions"
            className="bg-[#266573] hover:bg-[#122631] text-white font-medium text-xs sm:text-sm px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 min-w-[140px] cursor-pointer"
          >
            <span>Explore Solutions</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
