"use client";

import React from "react";
import { 
  Package, 
  ShieldCheck, 
  Truck, 
  ThermometerSnowflake, 
  Search, 
  RefreshCw, 
  Boxes, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Sparkles
} from "lucide-react";

const SUPPLY_DELIVERABLES = [
  {
    title: "Direct Pharmaceutical Procurement",
    tag: "MANUFACTURER DIRECT",
    metric: "10,000+ SKUs",
    metricLabel: "Active Formulary",
    icon: Package,
    description: "Direct-from-plant procurement eliminating multi-tier wholesale markups, guaranteeing authentic batches with CDSCO-compliant QR traceability.",
    features: ["Zero counterfeit risk", "Batch expiry validation", "Transparent wholesale margins"],
  },
  {
    title: "Medical Consumables & Surgical Kits",
    tag: "STERILE & SURGICAL",
    metric: "100% Sterile",
    metricLabel: "Quality Assured",
    icon: ShieldCheck,
    description: "Standardized supply lines for operating theaters, ICUs, and wards — including sutures, surgical gloves, IV sets, and specialized disposables.",
    features: ["NABH-compliant quality", "Institutional bulk pricing", "Emergency surgical stock buffers"],
  },
  {
    title: "Validated Cold-Chain Logistics",
    tag: "2°C - 8°C CONTROLLED",
    metric: "4.2°C Avg",
    metricLabel: "Continuous Log",
    icon: ThermometerSnowflake,
    description: "End-to-end temperature-regulated transit equipped with digital data loggers for biologics, vaccines, insulin, and temperature-sensitive specialty medicines.",
    features: ["Digital temperature logger", "Insulated active containers", "Instant cold-breach alerts"],
  },
  {
    title: "Vendor Discovery & Rate Contracts",
    tag: "STRATEGIC SOURCING",
    metric: "15-22% Save",
    metricLabel: "Procurement Cost",
    icon: Search,
    description: "Aggregated institutional purchasing negotiations securing top-tier rate contracts and verified vendor governance for hospitals and pharmacy chains.",
    features: ["Verified manufacturer network", "Annual rate agreements", "Single billing reconciliation"],
  },
  {
    title: "Smart Route Dispatch & Live Telemetry",
    tag: "GPS ROUTE OPTIMIZED",
    metric: "< 45 Mins",
    metricLabel: "Urgent Corridor",
    icon: Truck,
    description: "Algorithmic route clustering and live dispatch telemetry giving facility administrators real-time ETA visibility from warehouse departure to counter delivery.",
    features: ["Real-time GPS tracking", "Multi-point drop scheduling", "Priority emergency dispatch"],
  },
  {
    title: "Automated Zero-Stockout Replenishment",
    tag: "CONTINUOUS REPLENISHMENT",
    metric: "99.8%",
    metricLabel: "Fulfillment Rate",
    icon: RefreshCw,
    description: "Predictive inventory trigger levels that automate restocking schedules based on hospital consumption velocity, preventing stockouts completely.",
    features: ["Automated buffer triggers", "Zero dead inventory", "Scheduled weekly replenishment"],
  },
];

export function SupplyChainDeliverables() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-semibold">
          <Boxes className="w-3.5 h-3.5 text-[#266573]" />
          <span>Comprehensive Supply Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122631] tracking-tight">
          What We Deliver in Medical Supply & Delivery
        </h2>
        <p className="text-sm sm:text-base text-[#122631]/75 leading-relaxed">
          From direct-from-manufacturer sourcing to active cold-chain fulfillment, here is how we power your healthcare inventory backbone.
        </p>
      </div>

      {/* 6-Card Rich Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUPPLY_DELIVERABLES.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="bg-white hover:bg-[#F9FBFA] rounded-3xl p-7 border border-[#CAD7D0] hover:border-[#266573]/40 shadow-[0_4px_20px_rgba(18,38,49,0.04)] hover:shadow-[0_16px_35px_rgba(18,38,49,0.09)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-[#6BB0BF]/10 rounded-full blur-2xl group-hover:bg-[#266573]/15 transition-all" />

              <div>
                {/* Header: Icon + Tag */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#122631] text-[#6BB0BF] flex items-center justify-center shadow-md border border-[#266573]/30 group-hover:bg-[#266573] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#266573] bg-[#EDF3F0] px-2.5 py-1 rounded-full border border-[#CAD7D0]">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#122631] mb-2 group-hover:text-[#266573] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#122631]/70 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 mb-5">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#122631]/80 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#266573] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric Bar */}
              <div className="pt-4 border-t border-[#CAD7D0]/60 flex items-center justify-between bg-[#EDF3F0]/60 -mx-7 -mb-7 px-7 py-3.5 rounded-b-3xl">
                <div>
                  <span className="text-[10px] font-mono text-[#266573]/70 uppercase block">
                    {item.metricLabel}
                  </span>
                  <span className="text-sm font-black font-mono text-[#122631]">
                    {item.metric}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#266573] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>DEPLOYED</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
