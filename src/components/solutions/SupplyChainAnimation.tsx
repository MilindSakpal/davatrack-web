"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Store, 
  Truck, 
  CheckCircle2, 
  ThermometerSnowflake, 
  Navigation, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Package, 
  Clock, 
  Activity,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

export function SupplyChainAnimation() {
  const [activeMode, setActiveMode] = useState<"standard" | "coldchain" | "emergency">("standard");

  return (
    <div className="w-full bg-[#122631] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#266573]/40 shadow-[0_20px_50px_rgba(18,38,49,0.35)] relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-20 left-1/4 w-96 h-96 bg-[#266573]/30 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-[#6BB0BF]/20 rounded-full blur-[100px]" />

      {/* Top Header & Simulation Controls */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#266573]/40 border border-[#6BB0BF]/30 text-[#6BB0BF] text-xs font-mono uppercase tracking-wider font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#6BB0BF]" />
            <span>Interactive Supply Telemetry</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Agency to Retailer Supply Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-[#CAD7D0]/80">
            Real-time visualization of medicines dispatched from central agency hub directly to hospital & retail pharmacy counters.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-2 bg-white/[0.06] p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setActiveMode("standard")}
            className={cn(
              "px-3 py-1.5 rounded-xl text-xs font-bold transition-all",
              activeMode === "standard"
                ? "bg-[#266573] text-white shadow-sm"
                : "text-[#CAD7D0]/70 hover:text-white"
            )}
          >
            Scheduled Replenishment
          </button>
          <button
            onClick={() => setActiveMode("coldchain")}
            className={cn(
              "px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5",
              activeMode === "coldchain"
                ? "bg-[#6BB0BF] text-[#122631] shadow-sm font-extrabold"
                : "text-[#CAD7D0]/70 hover:text-white"
            )}
          >
            <ThermometerSnowflake className="w-3 h-3" />
            Cold-Chain (2-8°C)
          </button>
          <button
            onClick={() => setActiveMode("emergency")}
            className={cn(
              "px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5",
              activeMode === "emergency"
                ? "bg-rose-600 text-white shadow-sm"
                : "text-[#CAD7D0]/70 hover:text-white"
            )}
          >
            <Zap className="w-3 h-3 text-amber-300" />
            Express Emergency
          </button>
        </div>
      </div>

      {/* ============================================================
          GRAPHICAL ROAD ANIMATION CANVAS
          ============================================================ */}
      <div className="relative z-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* 1. LEFT NODE: Central Agency / Sourcing Hub */}
          <div className="lg:col-span-3 bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-4 shadow-lg transition-all group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#266573] border border-[#6BB0BF]/40 flex items-center justify-center text-white shadow-[0_0_15px_rgba(38,101,115,0.5)]">
                <Building2 className="w-6 h-6 text-[#6BB0BF]" />
              </div>
              <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DISPATCH ACTIVE
              </span>
            </div>

            <div>
              <div className="text-[10px] font-mono text-[#6BB0BF] uppercase tracking-wider font-bold">
                Origin Point (01)
              </div>
              <h4 className="text-base font-bold text-white">
                DavaTrack C&F Agency Hub
              </h4>
              <p className="text-xs text-[#CAD7D0]/70 mt-1">
                Central pharmaceutical warehouse & manufacturer stock repository.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs font-mono">
              <div className="flex justify-between text-[#CAD7D0]/80">
                <span>SKU Stocked:</span>
                <span className="text-white font-bold">12,500+ Items</span>
              </div>
              <div className="flex justify-between text-[#CAD7D0]/80">
                <span>Batch Verification:</span>
                <span className="text-emerald-400 font-bold">100% CDSCO QR</span>
              </div>
            </div>
          </div>

          {/* 2. CENTER NODE: Animated Road & Delivery Rider Animation */}
          <div className="lg:col-span-6 relative py-6">
            
            {/* Road Canvas */}
            <div className="relative h-44 sm:h-48 w-full bg-[#0d1c24] rounded-2xl border border-[#266573]/50 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
              
              {/* Road Asphalt Top Line */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#6BB0BF] border-b border-[#266573]/40 pb-2">
                <span className="flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-[#6BB0BF]" />
                  ACTIVE GPS TRANSIT CORRIDOR
                </span>
                <span className="text-amber-400 font-bold">
                  {activeMode === "emergency" ? "PRIORITY: 15-MIN EXPRESS" : activeMode === "coldchain" ? "COLD-CHAIN: 4.1°C MONITORED" : "SCHEDULED ROUTE 09"}
                </span>
              </div>

              {/* Road Surface with Moving Dashed Center Line */}
              <div className="relative h-20 w-full bg-[#152a35] rounded-xl flex items-center justify-center overflow-hidden border-y-2 border-amber-400/40">
                {/* Moving Highway Dashes */}
                <div className="absolute inset-0 flex items-center justify-around pointer-events-none opacity-40">
                  <div className="w-12 h-1 bg-amber-400 rounded-full animate-[pulse_1s_infinite]" />
                  <div className="w-12 h-1 bg-amber-400 rounded-full animate-[pulse_1s_infinite_200ms]" />
                  <div className="w-12 h-1 bg-amber-400 rounded-full animate-[pulse_1s_infinite_400ms]" />
                  <div className="w-12 h-1 bg-amber-400 rounded-full animate-[pulse_1s_infinite_600ms]" />
                </div>

                {/* Animated Delivery Rider / Express Vehicle Simulation */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 flex items-center gap-2 will-change-transform z-20 pointer-events-none select-none flex-shrink-0"
                  style={{
                    animation: "deliveryTransitForward 5.5s linear infinite"
                  }}
                >
                  {/* Delivery Vehicle Graphic with Fixed Proportions */}
                  <div className="relative flex items-center flex-shrink-0 w-[170px]">
                    {/* Forward Headlight Beam */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-8 bg-gradient-to-r from-amber-300/40 via-amber-300/15 to-transparent rounded-r-full blur-sm pointer-events-none" />

                    {/* Glowing Vehicle Aura */}
                    <div className="absolute -inset-1.5 bg-[#6BB0BF]/30 rounded-2xl blur-md" />
                    
                    <div className="relative w-full bg-[#122631] border-2 border-[#6BB0BF] text-white p-2 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#266573] border border-[#6BB0BF]/40 flex items-center justify-center flex-shrink-0 shadow-inner">
                        <Truck className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0 pr-1 text-left">
                        <div className="text-[10px] font-black font-mono text-[#6BB0BF] tracking-tight leading-none truncate">
                          DavaTrack Express
                        </div>
                        <div className="text-[9px] text-[#CAD7D0] font-bold mt-1 flex items-center gap-1 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                          <span>{activeMode === "coldchain" ? "❄️ 4.1°C Active" : activeMode === "emergency" ? "⚡ Priority" : "📦 Batch #4892"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Road Telemetry Status Nodes */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#266573]/40 text-[10px] font-mono">
                <div className="bg-[#122631]/80 px-2 py-1 rounded-lg border border-[#266573]/40 text-center">
                  <span className="text-[#CAD7D0]/60 block text-[9px]">SPEED</span>
                  <span className="text-white font-bold">45 km/h Opt</span>
                </div>
                <div className="bg-[#122631]/80 px-2 py-1 rounded-lg border border-[#266573]/40 text-center">
                  <span className="text-[#CAD7D0]/60 block text-[9px]">TEMP LOG</span>
                  <span className="text-[#6BB0BF] font-bold">3.8°C Steady</span>
                </div>
                <div className="bg-[#122631]/80 px-2 py-1 rounded-lg border border-[#266573]/40 text-center">
                  <span className="text-[#CAD7D0]/60 block text-[9px]">ETA TO STORE</span>
                  <span className="text-emerald-400 font-bold">14 Mins</span>
                </div>
              </div>

            </div>

            {/* Direction Indicator */}
            <div className="flex items-center justify-between px-2 pt-2 text-[10px] font-mono text-[#6BB0BF]/80">
              <span className="flex items-center gap-1">← Agency Hub Dispatch</span>
              <span className="flex items-center gap-1">Hospital & Retail Bay →</span>
            </div>
          </div>

          {/* 3. RIGHT NODE: Hospital & Retail Pharmacy Destination */}
          <div className="lg:col-span-3 bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-4 shadow-lg transition-all group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#122631] border border-emerald-400/40 flex items-center justify-center text-white shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                <Store className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                STOCK REPLENISHED
              </span>
            </div>

            <div>
              <div className="text-[10px] font-mono text-[#6BB0BF] uppercase tracking-wider font-bold">
                Destination (02)
              </div>
              <h4 className="text-base font-bold text-white">
                Retail Chemist / Hospital
              </h4>
              <p className="text-xs text-[#CAD7D0]/70 mt-1">
                Direct-to-shelf delivery with automated invoice & batch barcode scan.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs font-mono">
              <div className="flex justify-between text-[#CAD7D0]/80">
                <span>Stockout Risk:</span>
                <span className="text-emerald-400 font-bold">0.0% Guaranteed</span>
              </div>
              <div className="flex justify-between text-[#CAD7D0]/80">
                <span>Billing Margin:</span>
                <span className="text-white font-bold">Maximised Direct</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Global CSS Animation definition for smooth, uncompressed 60fps forward transit */}
      <style jsx>{`
        @keyframes deliveryTransitForward {
          0% {
            left: -10px;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          94% {
            left: calc(100% - 175px);
            opacity: 1;
          }
          98% {
            left: calc(100% - 170px);
            opacity: 0.3;
          }
          100% {
            left: calc(100% - 165px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
