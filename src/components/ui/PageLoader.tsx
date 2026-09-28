"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function PageLoader() {
  const [mounted, setMounted] = useState(true);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Show for 1.6s, then start smooth fade-out
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 1600);

    // Completely unmount after fade transition (total ~2.1s)
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 2100);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden={isDone}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#EEF4F3] select-none transition-opacity duration-500 ease-out ${
        isDone ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        
        {/* Crisp, Clear DavaTrack Logo */}
        <div className="relative animate-pulse duration-1000">
          <Image
            src="/logo.png"
            alt="DavaTrack Digital LLP"
            width={240}
            height={55}
            priority
            className="h-11 sm:h-12 w-auto object-contain"
          />
        </div>

        {/* Minimal Slender Loading Line */}
        <div className="w-36 sm:w-44 h-1 bg-[#CAD7D0]/60 rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-[#266573] rounded-full w-full animate-[shimmer_1.4s_infinite]" />
        </div>

        {/* Simple Minimal Subtitle */}
        <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#266573]/75">
          Healthcare Solutions &amp; Execution
        </p>

      </div>
    </div>
  );
}
