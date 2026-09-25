import React from "react";
import Image from "next/image";
import { Activity } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-[#EEF4F3] relative overflow-hidden py-24 select-none">
      {/* Soft atmospheric ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#266573]/15 via-[#6EBCBF]/20 to-[#6BB0BF]/20 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center space-y-6">
        
        {/* Central Spinning Rings with Logo */}
        <div className="relative flex items-center justify-center">
          
          {/* Outer Dashed Ring */}
          <div className="absolute w-32 h-32 rounded-full border border-dashed border-[#266573]/30 animate-[spin_8s_linear_infinite]" />
          
          {/* Inner Accent Ring */}
          <div className="absolute w-28 h-28 rounded-full border-2 border-t-[#266573] border-r-[#6EBCBF] border-b-transparent border-l-[#6BB0BF] animate-[spin_2.5s_linear_infinite]" />
          
          {/* Satellite Beacon Dot */}
          <div className="absolute w-28 h-28 animate-[spin_2.5s_linear_infinite]">
            <div className="w-2 h-2 rounded-full bg-[#266573] shadow-[0_0_10px_#6EBCBF] absolute -top-1 left-1/2 -translate-x-1/2" />
          </div>

          {/* Logo Capsule */}
          <div className="relative w-20 h-20 rounded-2xl bg-white/90 border border-white p-3 shadow-[0_15px_40px_rgba(18,38,49,0.10)] backdrop-blur-md flex items-center justify-center">
            <Image
              src="/logo-navbar.png"
              alt="DavaTrack Digital LLP"
              width={120}
              height={28}
              priority
              className="w-full h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(38,101,115,0.20)]"
            />
          </div>

        </div>

        {/* Status Pill Badge */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#CAD7D0] shadow-xs">
            <Activity className="w-3.5 h-3.5 text-[#266573] animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[#266573]">
              LOADING DAVATRACK
            </span>
          </div>
          <p className="text-xs font-semibold text-[#122631]/75">
            Synchronizing operational pipeline...
          </p>
        </div>

        {/* Infinite Wave Loading Line */}
        <div className="w-48 h-1 overflow-hidden rounded-full bg-[#CAD7D0]/60 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#266573] to-[#6EBCBF] rounded-full animate-[shimmer_1.5s_infinite]" />
        </div>

      </div>
    </div>
  );
}
