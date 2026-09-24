"use client";

import React from "react";
import Image from "next/image";
import { AboutSection } from "./AboutSection";

export function StickyImageCurtain() {
  return (
    <div className="relative w-full bg-[#122631] transform-gpu">
      {/* 1. Plain Sticky Image: stays completely fixed/stationary at top:0 while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 will-change-transform transform-gpu">
        <div className="relative w-full h-full">
          <Image
            src="/images/healthcare_operations_parallax.jpg"
            alt="Healthcare Operations"
            fill
            priority
            className="object-cover object-center transform-gpu pointer-events-none"
            sizes="100vw"
          />
        </div>
      </div>

      {/* 2. Scroll Distance: User sees the clean, plain image locked in the viewport */}
      <div className="h-[40vh] sm:h-[60vh] pointer-events-none" />

      {/* 3. Next Section (About Section): rolls UP and directly OVER the stationary image like a curtain */}
      <div className="relative z-10 will-change-transform transform-gpu">
        <AboutSection />
      </div>
    </div>
  );
}
