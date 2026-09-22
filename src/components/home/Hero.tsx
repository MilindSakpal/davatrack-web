"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Truck, 
  Store, 
  Cpu, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Package, 
  Thermometer, 
  FileCheck, 
  Activity,
  Layers,
  ChevronRight,
  Sparkles,
  Building2,
  Stethoscope,
  Network
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { gsap } from "@/lib/gsap/animations";
import { cn } from "@/lib/utils";

type SectorKey = "hospitals" | "pharmacy" | "digital" | "staffing";

interface SectorData {
  id: SectorKey;
  label: string;
  tagline: string;
  detail: string;
  badge: string;
  solutionSlug: string;
  icon: React.ElementType;
  manifest: {
    sku: string;
    item: string;
    qty: string;
    status: string;
    statusColor: "emerald" | "blue";
  }[];
  metrics: {
    label: string;
    value: string;
    sub: string;
  }[];
  sla: {
    title: string;
    desc: string;
  };
}

const SECTORS_DATA: SectorData[] = [
  {
    id: "hospitals",
    label: "Hospitals & Clinics",
    tagline: "Ward & OT Supply Lines",
    detail: "Scheduled pharmaceutical restocking, surgical consumables, and zero-stockout delivery SLAs.",
    badge: "Hospital Supply & Logistics",
    solutionSlug: "medical-supply-delivery",
    icon: Truck,
    manifest: [
      { sku: "DT-MED-104", item: "Ceftriaxone 1g Injectable", qty: "450 Vials", status: "Cold Chain (4.2°C)", statusColor: "emerald" },
      { sku: "DT-SRG-882", item: "Sterile Surgical Drape Sets", qty: "120 Kits", status: "QC Verified", statusColor: "blue" },
      { sku: "DT-IVF-301", item: "Normal Saline 0.9% 500ml", qty: "800 Units", status: "Dispatched", statusColor: "emerald" },
    ],
    metrics: [
      { label: "Delivery Precision", value: "99.8%", sub: "Zero clinical stockouts" },
      { label: "Batch Compliance", value: "100%", sub: "WHO-GMP verified sources" },
    ],
    sla: {
      title: "Scheduled Ward & OT Restocking",
      desc: "Single-point PO management with direct manufacturer price contracts.",
    },
  },
  {
    id: "pharmacy",
    label: "Pharmacy Networks",
    tagline: "Complete Managed Operations",
    detail: "Inventory control, near-expiry auto-rotation, billing reconciliation, and licensed pharmacist staffing.",
    badge: "Managed Pharmacy Ecosystem",
    solutionSlug: "pharmacy-management",
    icon: Store,
    manifest: [
      { sku: "PH-INV-44", item: "Near-Expiry Auto Stock Rotation", qty: "94 SKUs", status: "Rebalanced", statusColor: "emerald" },
      { sku: "PH-POS-12", item: "Daily Multi-Branch Reconciliation", qty: "6 Outlets", status: "Audit Cleared", statusColor: "blue" },
      { sku: "PH-HOM-08", item: "Scheduled Patient Refill Dispatch", qty: "180 Orders", status: "En Route", statusColor: "emerald" },
    ],
    metrics: [
      { label: "Wastage Loss", value: "<0.4%", sub: "Down from 3.8% baseline" },
      { label: "Inventory Turnover", value: "2.6x", sub: "Optimized working capital" },
    ],
    sla: {
      title: "Complete Pharmacy SOP Adherence",
      desc: "Procurement, billing, expiry alerts, staff management, and MIS reporting.",
    },
  },
  {
    id: "digital",
    label: "HealthTech & Diagnostics",
    tagline: "Software & Digital Pipelines",
    detail: "Custom clinical portals, EHR-to-billing bridges, automated patient follow-ups, and executive MIS.",
    badge: "Digital Healthcare Systems",
    solutionSlug: "apps-and-software",
    icon: Cpu,
    manifest: [
      { sku: "SYS-API-01", item: "EHR to Billing Gateway Sync", qty: "Live Bridge", status: "0ms Latency", statusColor: "emerald" },
      { sku: "SYS-APP-04", item: "Patient Care Follow-up Automation", qty: "SMS/WhatsApp", status: "Automated", statusColor: "blue" },
      { sku: "SYS-REP-09", item: "Real-time Departmental MIS Dashboards", qty: "Executive View", status: "Synced", statusColor: "emerald" },
    ],
    metrics: [
      { label: "Data Entry Friction", value: "-90%", sub: "No duplicate paperwork" },
      { label: "System Uptime", value: "99.99%", sub: "Cloud resilient architecture" },
    ],
    sla: {
      title: "Built Around Your Exact Workflow",
      desc: "We engineer software that fits your clinical team, not the other way around.",
    },
  },
  {
    id: "staffing",
    label: "Healthcare Staffing & Admin",
    tagline: "Workforce & Governance",
    detail: "Council-vetted registered pharmacists, operational supervisors, and certified medical claims specialists.",
    badge: "Healthcare Staffing & MIS",
    solutionSlug: "hr-staffing",
    icon: Users,
    manifest: [
      { sku: "HR-REG-501", item: "Registered Pharmacists (B.Pharm)", qty: "4 Placed", status: "License Verified", statusColor: "emerald" },
      { sku: "HR-OPS-202", item: "Healthcare Inventory Supervisors", qty: "2 On-Duty", status: "SOP Trained", statusColor: "blue" },
      { sku: "HR-CLM-109", item: "Medical Insurance Claims Specialists", qty: "3 Active", status: "Certified", statusColor: "emerald" },
    ],
    metrics: [
      { label: "Shift Coverage", value: "100%", sub: "Zero understaffed shifts" },
      { label: "Vetting Rigor", value: "100%", sub: "State council verified" },
    ],
    sla: {
      title: "Full Credential & Payroll Governance",
      desc: "Fast-track onboarding with pre-deployment compliance and SOP training.",
    },
  },
];

export function Hero() {
  const [activeSector, setActiveSector] = useState<SectorKey>("hospitals");
  
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const currentSector = SECTORS_DATA.find((s) => s.id === activeSector) || SECTORS_DATA[0];
  const IconComponent = currentSector.icon;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-status-tag", {
        opacity: 0,
        y: -10,
        duration: 0.5,
      })
      .from(".hero-main-title", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, "-=0.3")
      .from(".hero-subtext-block", {
        opacity: 0,
        y: 16,
        duration: 0.7,
      }, "-=0.4")
      .from(".hero-sector-picker", {
        opacity: 0,
        y: 14,
        duration: 0.6,
      }, "-=0.4")
      .from(".hero-action-group", {
        opacity: 0,
        y: 14,
        duration: 0.6,
      }, "-=0.4")
      .from(boardRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.85,
      }, "-=0.5");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] pt-32 pb-20 lg:pt-36 lg:pb-28 bg-[#FAFCFF] border-b border-border/80 flex items-center overflow-hidden"
    >
      {/* Editorial Hairline Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06366F0A_1px,transparent_1px),linear-gradient(to_bottom,#06366F0A_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ============================================================
              LEFT COLUMN: BESPOKE EDITORIAL ARCHITECTURE & SELECTOR
              ============================================================ */}
          <div ref={leftColRef} className="lg:col-span-6 space-y-7">
            
            {/* Top Status Header */}
            <div className="hero-status-tag flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-2xs text-[11px] font-bold text-navy-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>DavaTrack Digital LLP</span>
              </div>
              <div className="text-xs font-semibold text-muted">
                Healthcare Solutions & Execution Partner
              </div>
            </div>

            {/* Editorial Command Headline */}
            <div className="space-y-3">
              <h1 className="hero-main-title text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-ink leading-[1.08]">
                Healthcare Solutions.
                <br />
                <span className="text-navy">From Supply to Execution.</span>
              </h1>

              <p className="hero-subtext-block text-base sm:text-lg text-navy-800 font-medium leading-snug">
                Your Healthcare Requirement. Our Complete Solution.
              </p>

              <p className="hero-subtext-block text-sm sm:text-base text-muted leading-relaxed max-w-xl">
                We manage the physical and digital infrastructure behind healthcare units — bringing together medicine supply, pharmacy management, clinical manpower, and bespoke software under one accountable partner.
              </p>
            </div>

            {/* Interactive Sector Tailoring Matrix (Primary Controls) */}
            <div className="hero-sector-picker space-y-2.5 pt-1">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-muted flex items-center justify-between">
                <span>Select Your Healthcare Sector:</span>
                <span className="text-[10px] text-blue-accent font-semibold">Click to view live execution manifest →</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {SECTORS_DATA.map((sector) => {
                  const isSelected = activeSector === sector.id;
                  const SectorIcon = sector.icon;
                  return (
                    <button
                      key={sector.id}
                      onClick={() => setActiveSector(sector.id)}
                      className={cn(
                        "p-3 rounded-2xl text-xs font-bold transition-all duration-200 border text-left flex items-center gap-2.5",
                        isSelected
                          ? "bg-navy text-white border-navy shadow-md ring-2 ring-blue-accent/20"
                          : "bg-white text-navy-800 hover:bg-navy-50/80 border-border shadow-2xs"
                      )}
                    >
                      <SectorIcon className={cn("w-4 h-4 flex-shrink-0", isSelected ? "text-cyan-accent" : "text-blue-accent")} />
                      <span className="truncate">{sector.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Sector Insight Pill */}
              <div className="p-3.5 rounded-2xl bg-white border border-border text-xs text-navy-800 flex items-start gap-3 shadow-2xs">
                <div className="p-1 rounded-lg bg-navy-50 text-blue-accent mt-0.5 flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-bold text-navy block mb-0.5">
                    {currentSector.tagline}:
                  </span>
                  <span className="text-muted leading-relaxed">
                    {currentSector.detail}
                  </span>
                </div>
              </div>
            </div>

            {/* Tactile Action Button Group */}
            <div className="hero-action-group space-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-3.5">
                <Button
                  href="/inquiry"
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  className="rounded-xl shadow-md px-6 text-sm"
                >
                  Discuss Your Requirement
                </Button>
                <Button
                  href="/solutions"
                  variant="outline"
                  size="lg"
                  className="rounded-xl px-6 bg-white text-sm"
                >
                  Explore 4 Solution Domains
                </Button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Single-partner execution • Non-binding operational assessment</span>
              </div>
            </div>

            {/* Core Pillars Bottom Ticker */}
            <div className="pt-4 border-t border-border/70 flex flex-wrap items-center gap-6 text-xs text-muted font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Supply Chain & Cold Chain</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Managed Pharmacy SOPs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Custom Software</span>
              </div>
            </div>

          </div>

          {/* ============================================================
              RIGHT COLUMN: DEDICATED LIVE OPERATIONS EXECUTION CONSOLE
              (Zero duplicate tabs - dynamically driven by left selector)
              ============================================================ */}
          <div ref={boardRef} className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-border shadow-[0_20px_50px_rgba(6,54,111,0.08)] overflow-hidden">
              
              {/* Console Header Bar */}
              <div className="px-6 py-4 bg-surface-soft border-b border-border flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-navy text-cyan-accent shadow-xs">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted font-bold block">
                      OPERATIONAL LEDGER
                    </span>
                    <span className="text-sm font-extrabold text-navy">
                      {currentSector.badge}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE WORKFLOW
                </span>
              </div>

              {/* Console Body: Live Healthcare Manifest & Execution State */}
              <div className="p-6 sm:p-7 space-y-6">
                
                {/* Active Sub-headline */}
                <div className="pb-3 border-b border-border/80 flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-extrabold text-navy">
                    {currentSector.tagline}
                  </h3>
                  <span className="text-[11px] font-semibold text-muted bg-white px-2.5 py-1 rounded-md border border-border">
                    Real-time Telemetry
                  </span>
                </div>

                {/* Live Manifest Items Table */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-muted px-2">
                    <span>Operational SKU / Stream</span>
                    <span>Volume / SLA</span>
                  </div>

                  <div className="space-y-2">
                    {currentSector.manifest.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-surface-soft/80 hover:bg-surface-soft p-3 rounded-2xl border border-border/70 flex items-center justify-between gap-3 text-xs transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="font-mono text-[10px] font-bold text-muted bg-white px-2 py-0.5 rounded border border-border flex-shrink-0">
                            {item.sku}
                          </span>
                          <span className="font-bold text-navy truncate">
                            {item.item}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-muted font-semibold text-[11px]">
                            {item.qty}
                          </span>
                          <span
                            className={cn(
                              "px-2.5 py-0.5 rounded-full text-[10px] font-bold",
                              item.statusColor === "emerald"
                                ? "bg-emerald-100/80 text-emerald-800"
                                : "bg-blue-100/80 text-blue-800"
                            )}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real Metrics Dual Cards */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {currentSector.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-white to-surface-soft p-3.5 rounded-2xl border border-border"
                    >
                      <div className="text-xl sm:text-2xl font-black text-navy">
                        {metric.value}
                      </div>
                      <div className="text-xs font-bold text-navy-800">
                        {metric.label}
                      </div>
                      <div className="text-[10px] text-muted mt-0.5">
                        {metric.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom SLA Assurance & Quick Action */}
                <div className="p-4 rounded-2xl bg-navy-50/70 border border-border flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="text-xs font-extrabold text-navy">
                      {currentSector.sla.title}
                    </div>
                    <div className="text-[11px] text-muted">
                      {currentSector.sla.desc}
                    </div>
                  </div>
                  <Link
                    href={`/solutions/${currentSector.solutionSlug}`}
                    className="p-2 rounded-xl bg-white text-navy hover:text-blue-accent border border-border shadow-2xs transition-colors flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-bold px-3"
                    title="View Solution"
                  >
                    <span>View Solution</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
