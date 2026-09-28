import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-[#EEF4F3] py-24 select-none">
      <div className="flex flex-col items-center space-y-6">
        
        {/* Crisp DavaTrack Logo */}
        <div className="relative animate-pulse duration-1000">
          <Image
            src="/logo.png"
            alt="DavaTrack Digital LLP"
            width={240}
            height={55}
            priority
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </div>

        {/* Minimal Slender Loading Line */}
        <div className="w-36 sm:w-44 h-1 bg-[#CAD7D0]/60 rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-[#266573] rounded-full w-full animate-[shimmer_1.4s_infinite]" />
        </div>

        {/* Simple Subtitle */}
        <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#266573]/75">
          Loading Platform...
        </p>

      </div>
    </div>
  );
}
