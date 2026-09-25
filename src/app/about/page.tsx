import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Users, 
  Cpu, 
  Truck, 
  Workflow, 
  BarChart3, 
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Award,
  Globe2,
  Activity,
  HeartPulse
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | DavaTrack Digital LLP",
  description:
    "DavaTrack Digital LLP is a healthcare solutions and execution partner combining supply chain, technology, people, processes, and operational management.",
};

const PILLARS = [
  {
    number: "01",
    title: "Medicine & Consumable Supply",
    icon: Truck,
    color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400",
    description: "Direct pharmaceutical procurement, surgical consumables, cold-chain temperature validation, and scheduled replenishment for hospitals and retail chains.",
  },
  {
    number: "02",
    title: "Healthcare Technology Infrastructure",
    icon: Cpu,
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400",
    description: "Custom hospital inventory ERPs, real-time batch telemetry, patient engagement applications, and automated insurance claims reconciliation systems.",
  },
  {
    number: "03",
    title: "Vetted Clinical & Operations Talent",
    icon: Users,
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    description: "Certified registered pharmacists, healthcare inventory supervisors, clinical support staff, and on-ground operational managers trained in hospital SOPs.",
  },
  {
    number: "04",
    title: "Standard Operating Procedures (SOPs)",
    icon: Workflow,
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400",
    description: "Standardized hospital pharmacy protocols, NABH-aligned quality audits, expiry & wastage minimization, and rigorous statutory regulatory adherence.",
  },
  {
    number: "05",
    title: "Management & Single-Point Execution",
    icon: BarChart3,
    color: "from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-400",
    description: "Single-point governance, real-time executive MIS dashboards, daily operational accountability, and continuous unit economics optimization.",
  },
];

const WORKING_STEPS = [
  {
    step: "01",
    title: "Think & Diagnose",
    subtitle: "Understand the Root Problem",
    desc: "We perform a thorough operational diagnostic of inventory leakage, supply bottlenecks, staffing gaps, and IT silos.",
  },
  {
    step: "02",
    title: "Design & Blueprint",
    subtitle: "Formulate Solution Architecture",
    desc: "We architect an integrated blueprint combining physical supply lines, software integrations, SOP manuals, and personnel requirements.",
  },
  {
    step: "03",
    title: "Deploy & Implement",
    subtitle: "Mobilize Ground Infrastructure",
    desc: "Hands-on rollout of pharmaceutical supply chains, software deployment, staff onboarding, and statutory verification.",
  },
  {
    step: "04",
    title: "Manage & Govern",
    subtitle: "Daily Execution Accountability",
    desc: "Daily operational execution, vendor governance, pharmacy management, SLA tracking, and uninterrupted 24/7 support.",
  },
  {
    step: "05",
    title: "Optimize & Scale",
    subtitle: "Continuous Performance MIS",
    desc: "Continuous financial MIS reviews, wastage minimization, predictive demand forecasting, and iterative capability expansion.",
  },
];

const VALUES = [
  {
    title: "Single-Partner Accountability",
    desc: "No finger-pointing between software agencies and pharma traders. DavaTrack takes full ownership of execution from end to end.",
  },
  {
    title: "100% Traceability & Integrity",
    desc: "Zero tolerance for counterfeit drugs or expired stock. Every batch is cataloged, monitored, and compliant with national regulatory standards.",
  },
  {
    title: "Operational Pragmatism",
    desc: "We don't deliver slide decks — we build real supply lines, write production software, and staff real pharmacy counters on the hospital floor.",
  },
  {
    title: "Data-Driven Transparency",
    desc: "Real-time MIS telemetry giving hospital leadership complete visibility into procurement prices, billing margins, and operational SLAs.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#EEF4F3] text-[#122631] pt-28 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/5 to-transparent rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 bg-[#CAD7D0]/30 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-96 h-96 bg-[#6BB0BF]/10 rounded-full blur-[130px]" />

      {/* ============================================================
          PAGE HERO
          ============================================================ */}
      <section className="relative z-10 pt-10 pb-20 border-b border-[#266573]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider shadow-sm font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#266573]" />
              <span>About DavaTrack Digital LLP</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#122631] leading-[1.08]">
              Building the Infrastructure
              <br />
              <span className="bg-gradient-to-r from-[#122631] via-[#266573] to-[#6BB0BF] bg-clip-text text-transparent">
                Behind Better Healthcare.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#122631]/80 leading-relaxed max-w-3xl">
              <b className="text-[#122631] font-bold">DavaTrack Digital LLP</b> is building a new class of healthcare operations company — combining supply chain, technology, people, processes, and continuous operational management under a single accountable partner.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/inquiry"
                className="px-8 py-3.5 rounded-full bg-[#122631] hover:bg-[#266573] text-white font-bold text-sm shadow-[0_10px_25px_rgba(18,38,49,0.25)] transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Speak With Our Leadership</span>
                <ArrowRight className="w-4 h-4 text-[#6BB0BF]" />
              </Link>
              <Link
                href="/solutions"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-[#EEF4F3] text-[#122631] font-bold text-sm border border-[#266573]/20 shadow-sm transition-all"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          VISION & MISSION CARDS
          ============================================================ */}
      <section className="py-20 relative z-10 border-b border-[#266573]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CAD7D0] shadow-[0_12px_40px_rgba(18,38,49,0.06)] flex flex-col justify-between relative overflow-hidden">
              <div className="pointer-events-none absolute -right-12 -top-12 w-44 h-44 bg-[#6BB0BF]/10 rounded-full blur-2xl" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#266573]/10 text-[#266573] text-xs font-mono uppercase tracking-wider mb-4 border border-[#266573]/20 font-semibold">
                  <Target className="w-3.5 h-3.5 text-[#266573]" />
                  <span>Our Vision</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122631] tracking-tight mb-4">
                  To Become India&apos;s Most Trusted Healthcare Operations Partner.
                </h2>
                <p className="text-sm sm:text-base text-[#122631]/75 leading-relaxed">
                  We envision a healthcare ecosystem where hospitals, clinic chains, and medical institutions no longer struggle with operational fragmentation. A single partner takes complete accountability for medicines, technology, staff, and governance.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#CAD7D0]/60">
                <div className="text-xs font-mono uppercase tracking-wider text-[#266573] font-bold mb-3">
                  5 Core Strategic Anchors:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-bold text-[#122631]">
                  <div className="bg-[#EEF4F3] p-2.5 rounded-xl border border-[#CAD7D0] flex items-center gap-2">
                    <span className="text-[#266573] font-mono">01</span> Supply
                  </div>
                  <div className="bg-[#EEF4F3] p-2.5 rounded-xl border border-[#CAD7D0] flex items-center gap-2">
                    <span className="text-[#266573] font-mono">02</span> Tech
                  </div>
                  <div className="bg-[#EEF4F3] p-2.5 rounded-xl border border-[#CAD7D0] flex items-center gap-2">
                    <span className="text-[#266573] font-mono">03</span> People
                  </div>
                  <div className="bg-[#EEF4F3] p-2.5 rounded-xl border border-[#CAD7D0] flex items-center gap-2">
                    <span className="text-[#266573] font-mono">04</span> Process
                  </div>
                  <div className="bg-[#EEF4F3] p-2.5 rounded-xl border border-[#CAD7D0] flex items-center gap-2 col-span-2 sm:col-span-2">
                    <span className="text-[#266573] font-mono">05</span> Execution Management
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Problem Statement */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CAD7D0] shadow-[0_12px_40px_rgba(18,38,49,0.06)] flex flex-col justify-between relative overflow-hidden">
              <div className="pointer-events-none absolute -right-12 -top-12 w-44 h-44 bg-[#266573]/10 rounded-full blur-2xl" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#266573]/10 text-[#266573] text-xs font-mono uppercase tracking-wider mb-4 border border-[#266573]/20 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#266573]" />
                  <span>Why DavaTrack Exists</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122631] tracking-tight mb-4">
                  Ending the Multi-Vendor Healthcare Chaos.
                </h2>
                <p className="text-sm sm:text-base text-[#122631]/75 leading-relaxed mb-4">
                  The healthcare industry in India has suffered from severe fragmentation: medicine distributors who don&apos;t understand software, software vendors who have never managed a hospital pharmacy, and staffing agencies with no clinical SOP training.
                </p>
                <p className="text-sm sm:text-base text-[#122631]/75 leading-relaxed">
                  DavaTrack brings these disparate verticals into one integrated operational engine with single-SLA accountability.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#CAD7D0]/60">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#EEF4F3] border border-[#CAD7D0]">
                    <div className="text-lg font-mono font-bold text-[#122631]">100%</div>
                    <div className="text-[11px] text-[#266573] font-medium">Batch Traceability</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#EEF4F3] border border-[#CAD7D0]">
                    <div className="text-lg font-mono font-bold text-[#266573]">Zero</div>
                    <div className="text-[11px] text-[#266573] font-medium">Stockout Guarantee</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          5 CORE PILLARS
          ============================================================ */}
      <section className="py-20 relative z-10 border-b border-[#266573]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#266573]" />
              <span>Operational Foundations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122631] tracking-tight">
              Our 5 Integrated Operating Pillars
            </h2>
            <p className="text-sm sm:text-base text-[#122631]/70">
              Each pillar operates as a specialized center of excellence, fully interconnected into our unified delivery matrix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white hover:bg-[#F9FBFA] rounded-3xl p-7 border border-[#CAD7D0] hover:border-[#266573]/40 transition-all duration-300 shadow-[0_4px_20px_rgba(18,38,49,0.04)] hover:shadow-[0_12px_30px_rgba(18,38,49,0.08)] flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#122631] text-[#6BB0BF] flex items-center justify-center border border-[#266573]/30 shadow-md group-hover:bg-[#266573] group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-sm font-bold text-[#266573]/50">
                        #{pillar.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#122631] mb-2 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#122631]/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CAD7D0]/60 flex items-center justify-between text-[11px] font-mono text-[#266573]/70">
                    <span>GOVERNANCE</span>
                    <span className="text-[#266573] font-bold">MANAGED</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================
          5-STEP OPERATIONAL LIFECYCLE
          ============================================================ */}
      <section className="py-20 relative z-10 border-b border-[#266573]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-semibold">
              <Activity className="w-3.5 h-3.5 text-[#266573]" />
              <span>How DavaTrack Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122631] tracking-tight">
              The 5-Step Delivery Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-[#122631]/70">
              From diagnostic assessment to continuous optimization, here is how we manage and scale healthcare operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {WORKING_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#CAD7D0] shadow-[0_4px_16px_rgba(18,38,49,0.04)] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="font-mono text-2xl font-black text-[#266573]/40 mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#122631] leading-snug">
                    {step.title}
                  </h3>
                  <div className="text-[11px] text-[#266573] font-semibold mb-2">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-[#122631]/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          FOUNDING PRINCIPLES / VALUES
          ============================================================ */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-semibold">
              <Award className="w-3.5 h-3.5 text-[#266573]" />
              <span>Our Operating Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122631] tracking-tight">
              The Standards We Live By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#CAD7D0] shadow-[0_4px_20px_rgba(18,38,49,0.04)] space-y-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#266573] flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-[#122631]">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#122631]/70 leading-relaxed pl-8">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Pre-Footer CTA */}
          <div className="bg-[#122631] rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-[0_20px_50px_rgba(18,38,49,0.3)] mt-12 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#266573]/30 rounded-full blur-[100px]" />
            <div className="relative z-10 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Partner With DavaTrack Digital LLP
              </h3>
              <p className="text-sm sm:text-base text-[#CAD7D0]/80 max-w-xl mx-auto">
                Transform your hospital or pharmacy&apos;s operational backbone with India&apos;s dedicated execution partner.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/inquiry"
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-[#EEF4F3] text-[#122631] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/testimonials"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 transition-all"
                >
                  Read Customer Stories
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
