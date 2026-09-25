"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

export function PageLoader() {
  const [mounted, setMounted] = useState(true);
  const [progress, setProgress] = useState(12);
  const [statusText, setStatusText] = useState("Initializing Clinical Infrastructure...");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Stage 1: Initial ramp (0.45s)
    const t1 = setTimeout(() => {
      setProgress(45);
      setStatusText("Connecting Cold-Chain & Batch Telemetry...");
    }, 450);

    // Stage 2: Second ramp (0.95s)
    const t2 = setTimeout(() => {
      setProgress(75);
      setStatusText("Synchronizing Healthcare Delivery Matrix...");
    }, 950);

    // Stage 3: Third ramp (1.4s)
    const t3 = setTimeout(() => {
      setProgress(92);
      setStatusText("Validating CDSCO Regulatory Compliance...");
    }, 1400);

    // Stage 4: 100% completion at 1.8s
    const t4 = setTimeout(() => {
      setProgress(100);
      setStatusText("DavaTrack Platform Ready");
      setIsDone(true);
    }, 1800);

    // Stage 5: Unmount from DOM after smooth 600ms fade out (total ~2.4s)
    const t5 = setTimeout(() => {
      setMounted(false);
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden={isDone}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#EEF4F3] select-none transition-all duration-500 ease-out ${
        isDone ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient background glow orbs matching 4-color palette */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#266573]/15 via-[#6EBCBF]/20 to-[#6BB0BF]/25 rounded-full blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#6BB0BF]/15 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-[#266573]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center space-y-7">
        
        {/* Central Logo with Animated Orbital Rings */}
        <div className="relative flex items-center justify-center">
          
          {/* Outer Rotating Conic Ring */}
          <div className="absolute w-36 h-36 rounded-full border border-dashed border-[#266573]/30 animate-[spin_10s_linear_infinite]" />
          
          {/* Counter-rotating accent ring */}
          <div className="absolute w-32 h-32 rounded-full border-2 border-t-[#266573] border-r-[#6EBCBF] border-b-transparent border-l-[#6BB0BF] animate-[spin_3s_linear_infinite]" />
          
          {/* Pulsing satellite beacon dot */}
          <div className="absolute w-32 h-32 animate-[spin_3s_linear_infinite]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#266573] shadow-[0_0_12px_#6EBCBF] absolute -top-1 left-1/2 -translate-x-1/2" />
          </div>

          {/* Frosted Logo Capsule Box */}
          <div className="relative w-24 h-24 rounded-3xl bg-white/90 border border-white p-3.5 shadow-[0_20px_50px_rgba(18,38,49,0.12)] backdrop-blur-xl flex items-center justify-center group">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#6EBCBF]/10 via-transparent to-white/40 rounded-3xl" />
            <Image
              src="/logo-navbar.png"
              alt="DavaTrack Digital LLP"
              width={140}
              height={32}
              priority
              className="w-full h-auto object-contain filter drop-shadow-[0_2px_10px_rgba(38,101,115,0.25)]"
            />
          </div>

        </div>

        {/* Brand Badge & Status Typography */}
        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#CAD7D0] shadow-xs backdrop-blur-md">
            <Activity className="w-3.5 h-3.5 text-[#266573] animate-pulse" />
            <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.18em] text-[#266573]">
              DAVATRACK EXECUTION
            </span>
          </div>

          <div className="h-5 flex items-center justify-center">
            <p className="text-xs font-semibold text-[#122631]/80 tracking-tight transition-all duration-300">
              {statusText}
            </p>
          </div>
        </div>

        {/* Precision Progress Bar Container */}
        <div className="w-64 space-y-2">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[#CAD7D0]/50 p-[1px]">
            {/* Active filled gradient bar */}
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#173246] via-[#266573] to-[#6EBCBF] shadow-[0_0_12px_#6EBCBF] transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Traveling light spark */}
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/80 blur-[2px]" />
            </div>
          </div>

          {/* Micro Progress Percentage */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#122631]/60 font-bold px-0.5">
            <span>HEALTHCARE OS</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* 5 Core Pillars Micro Footer */}
        <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono font-bold text-[#266573]/75 pt-1">
          <span>SUPPLY</span>
          <span>•</span>
          <span>TECH</span>
          <span>•</span>
          <span>PEOPLE</span>
          <span>•</span>
          <span>PROCESS</span>
          <span>•</span>
          <span>EXECUTION</span>
        </div>

      </div>
    </div>
  );
}
