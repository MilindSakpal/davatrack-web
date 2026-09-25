"use client";

import React from "react";
import { 
  Activity, 
  Search, 
  FileSpreadsheet, 
  Truck, 
  Navigation, 
  ShieldCheck, 
  ArrowRight, 
  ArrowDown, 
  CornerDownRight, 
  CornerDownLeft,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const WORKFLOW_STEPS = [
  {
    number: "01",
    phase: "PHASE 01 • INTAKE",
    title: "Demand Assessment & Consumption Diagnostic",
    icon: Search,
    description: "We audit your hospital/pharmacy's historical consumption velocity, stockout frequency, and identify high-leakage categories.",
    highlight: "Comprehensive Inventory Audit",
    position: "left", // Staggered layout
  },
  {
    number: "02",
    phase: "PHASE 02 • MAPPING",
    title: "Catalog & SKU Standardization",
    icon: FileSpreadsheet,
    description: "Standardizing your complete hospital formulary across branded molecules, surgical consumables, and private-label alternatives.",
    highlight: "100% SKU QR Coding",
    position: "right",
  },
  {
    number: "03",
    phase: "PHASE 03 • SOURCING",
    title: "Direct Manufacturer Sourcing & Route Setup",
    icon: Truck,
    description: "Establishing primary manufacturer supply contracts and configuring dedicated regional delivery corridors for your facilities.",
    highlight: "Manufacturer Direct Rate Contract",
    position: "left",
  },
  {
    number: "04",
    phase: "PHASE 04 • TELEMETRY",
    title: "Live GPS & Cold-Chain Telemetry Integration",
    icon: Navigation,
    description: "Deploying temperature-validated refrigerated transit with live tracking dashboards accessible to your procurement desk.",
    highlight: "2°C - 8°C Digital Logging",
    position: "right",
  },
  {
    number: "05",
    phase: "PHASE 05 • SCALE",
    title: "Continuous Automated Replenishment & SLA Governance",
    icon: ShieldCheck,
    description: "Continuous automated buffer replenishment, monthly price-reduction audits, and single-point execution accountability.",
    highlight: "Zero Stockouts Guaranteed",
    position: "center",
  },
];

export function SupplyChainImplementationWorkflow() {
  return (
    <div className="space-y-12 relative">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-semibold">
          <Activity className="w-3.5 h-3.5 text-[#266573]" />
          <span>Execution Blueprint</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122631] tracking-tight">
          How We Implement This Solution
        </h2>
        <p className="text-sm sm:text-base text-[#122631]/75 leading-relaxed">
          A structured 5-stage sequential roadmap connecting assessment, catalog alignment, route dispatch, telemetry, and continuous replenishment.
        </p>
      </div>

      {/* ============================================================
          CONNECTED SERPENTINE ARROW WORKFLOW CANVAS
          ============================================================ */}
      <div className="relative pt-6 pb-6">
        
        {/* Step 01 & Step 02 Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative">
          
          {/* Card 01 (Top Left) */}
          <div className="lg:col-span-5 bg-[#6EBCBF] rounded-3xl p-7 border-2 border-white/60 shadow-[0_8px_30px_rgba(18,38,49,0.06)] hover:shadow-[0_16px_40px_rgba(18,38,49,0.12)] transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#122631] text-[#6EBCBF] flex items-center justify-center shadow-md border border-[#122631]/20">
                <Search className="w-6 h-6" />
              </div>
              <span className="font-mono text-3xl font-black text-[#122631]/30 group-hover:text-[#122631] transition-colors">
                #01
              </span>
            </div>

            <span className="text-[10px] font-mono text-[#122631] font-extrabold uppercase tracking-wider block mb-1">
              PHASE 01 • INTAKE
            </span>
            <h3 className="text-lg font-extrabold text-[#122631] mb-2 leading-snug">
              Demand Assessment & Consumption Diagnostic
            </h3>
            <p className="text-xs text-[#122631]/85 font-medium leading-relaxed mb-4">
              We audit your hospital/pharmacy&apos;s historical consumption velocity, stockout frequency, and identify high-leakage categories.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-[11px] font-mono font-bold text-[#122631] border border-white/90 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#266573]" />
              <span>Comprehensive Inventory Audit</span>
            </div>
          </div>

          {/* Connecting Arrow from 01 -> 02 (Desktop Horizontal Arrow) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center space-y-1">
            <div className="text-[10px] font-mono font-bold text-[#266573] uppercase tracking-wider">
              ALIGNMENT
            </div>
            <div className="flex items-center w-full">
              <div className="h-0.5 w-full bg-gradient-to-r from-[#266573] to-[#6EBCBF]" />
              <div className="w-3 h-3 border-t-2 border-r-2 border-[#266573] rotate-45 -ml-2" />
            </div>
          </div>

          {/* Card 02 (Top Right) */}
          <div className="lg:col-span-5 bg-[#6EBCBF] rounded-3xl p-7 border-2 border-white/60 shadow-[0_8px_30px_rgba(18,38,49,0.06)] hover:shadow-[0_16px_40px_rgba(18,38,49,0.12)] transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#122631] text-[#6EBCBF] flex items-center justify-center shadow-md border border-[#122631]/20">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <span className="font-mono text-3xl font-black text-[#122631]/30 group-hover:text-[#122631] transition-colors">
                #02
              </span>
            </div>

            <span className="text-[10px] font-mono text-[#122631] font-extrabold uppercase tracking-wider block mb-1">
              PHASE 02 • MAPPING
            </span>
            <h3 className="text-lg font-extrabold text-[#122631] mb-2 leading-snug">
              Catalog & SKU Standardization
            </h3>
            <p className="text-xs text-[#122631]/85 font-medium leading-relaxed mb-4">
              Standardizing your complete hospital formulary across branded molecules, surgical consumables, and private-label alternatives.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-[11px] font-mono font-bold text-[#122631] border border-white/90 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#266573]" />
              <span>100% SKU QR Coding</span>
            </div>
          </div>

        </div>

        {/* Diagonal / Serpentine Transition from Step 02 -> Step 03 */}
        <div className="hidden lg:flex justify-end pr-28 py-4">
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#266573] font-bold">
            <span className="bg-[#EDEDE5] px-3 py-1 rounded-full border border-[#CAD7D0]">
              Stage Transition 02 ➔ 03
            </span>
            <div className="w-8 h-8 rounded-full bg-[#122631] text-white flex items-center justify-center">
              <ArrowDown className="w-4 h-4 text-[#6EBCBF]" />
            </div>
          </div>
        </div>

        {/* Step 03 & Step 04 Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative mt-4">
          
          {/* Card 03 (Middle Left) */}
          <div className="lg:col-span-5 bg-[#6EBCBF] rounded-3xl p-7 border-2 border-white/60 shadow-[0_8px_30px_rgba(18,38,49,0.06)] hover:shadow-[0_16px_40px_rgba(18,38,49,0.12)] transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#122631] text-[#6EBCBF] flex items-center justify-center shadow-md border border-[#122631]/20">
                <Truck className="w-6 h-6" />
              </div>
              <span className="font-mono text-3xl font-black text-[#122631]/30 group-hover:text-[#122631] transition-colors">
                #03
              </span>
            </div>

            <span className="text-[10px] font-mono text-[#122631] font-extrabold uppercase tracking-wider block mb-1">
              PHASE 03 • SOURCING
            </span>
            <h3 className="text-lg font-extrabold text-[#122631] mb-2 leading-snug">
              Direct Manufacturer Sourcing & Route Setup
            </h3>
            <p className="text-xs text-[#122631]/85 font-medium leading-relaxed mb-4">
              Establishing primary manufacturer supply contracts and configuring dedicated regional delivery corridors for your facilities.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-[11px] font-mono font-bold text-[#122631] border border-white/90 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#266573]" />
              <span>Manufacturer Direct Rate Contract</span>
            </div>
          </div>

          {/* Connecting Arrow from 03 -> 04 */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center space-y-1">
            <div className="text-[10px] font-mono font-bold text-[#266573] uppercase tracking-wider">
              DISPATCH
            </div>
            <div className="flex items-center w-full">
              <div className="h-0.5 w-full bg-gradient-to-r from-[#266573] to-[#6EBCBF]" />
              <div className="w-3 h-3 border-t-2 border-r-2 border-[#266573] rotate-45 -ml-2" />
            </div>
          </div>

          {/* Card 04 (Middle Right) */}
          <div className="lg:col-span-5 bg-[#6EBCBF] rounded-3xl p-7 border-2 border-white/60 shadow-[0_8px_30px_rgba(18,38,49,0.06)] hover:shadow-[0_16px_40px_rgba(18,38,49,0.12)] transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#122631] text-[#6EBCBF] flex items-center justify-center shadow-md border border-[#122631]/20">
                <Navigation className="w-6 h-6" />
              </div>
              <span className="font-mono text-3xl font-black text-[#122631]/30 group-hover:text-[#122631] transition-colors">
                #04
              </span>
            </div>

            <span className="text-[10px] font-mono text-[#122631] font-extrabold uppercase tracking-wider block mb-1">
              PHASE 04 • TELEMETRY
            </span>
            <h3 className="text-lg font-extrabold text-[#122631] mb-2 leading-snug">
              Live GPS & Cold-Chain Telemetry Integration
            </h3>
            <p className="text-xs text-[#122631]/85 font-medium leading-relaxed mb-4">
              Deploying temperature-validated refrigerated transit with live tracking dashboards accessible to your procurement desk.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-[11px] font-mono font-bold text-[#122631] border border-white/90 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#266573]" />
              <span>2°C - 8°C Digital Logging</span>
            </div>
          </div>

        </div>

        {/* Transition down to Step 05 */}
        <div className="hidden lg:flex justify-center py-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono font-bold text-[#266573] uppercase tracking-wider">
              Continuous Governance
            </span>
            <div className="w-8 h-8 rounded-full bg-[#122631] text-white flex items-center justify-center shadow-md">
              <ArrowDown className="w-4 h-4 text-[#6EBCBF]" />
            </div>
          </div>
        </div>

        {/* Step 05 Showcase Card (Bottom Center) */}
        <div className="mt-4 max-w-3xl mx-auto">
          <div className="bg-[#6EBCBF] rounded-3xl p-8 text-[#122631] shadow-[0_20px_50px_rgba(18,38,49,0.12)] border-2 border-white/70 relative overflow-hidden text-center space-y-4">
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/30 rounded-full blur-[80px]" />
            
            <div className="relative z-10 flex items-center justify-center gap-2 mb-1">
              <span className="px-3.5 py-1 rounded-full bg-[#122631] text-white text-xs font-mono uppercase tracking-wider font-extrabold shadow-sm">
                FINAL MILESTONE • #05
              </span>
            </div>

            <h3 className="relative z-10 text-2xl sm:text-3xl font-black text-[#122631]">
              Continuous Automated Replenishment & SLA Governance
            </h3>

            <p className="relative z-10 text-xs sm:text-sm text-[#122631]/85 max-w-xl mx-auto font-medium leading-relaxed">
              Automated threshold ordering, weekly SLA audits, and continuous margin reviews ensuring your hospital pharmacy operates with zero stockout friction.
            </p>

            <div className="relative z-10 pt-2 flex flex-wrap justify-center gap-3 text-xs font-mono">
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-white text-[#122631] font-extrabold flex items-center gap-1.5 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#266573]" />
                Zero Stockout Guarantee
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-white text-[#122631] font-extrabold flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#266573]" />
                24/7 Priority Emergency Lines
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
