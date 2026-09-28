import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  Clock,
  Award,
  Globe2,
  Activity,
  HeartHandshake,
  Quote,
  Lightbulb,
  Compass,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | DavaTrack Digital LLP",
  description:
    "Learn about DavaTrack Digital LLP — India's integrated healthcare operations and execution partner uniting medicine supply, pharmacy management, technology, and clinical staffing.",
};

const PILLARS = [
  {
    number: "01",
    title: "Medicine & Consumables Supply",
    icon: Truck,
    description: "Direct pharmaceutical sourcing, surgical consumables, verified cold-chain logistics, and zero-stockout delivery systems for hospitals and retail dispensaries.",
  },
  {
    number: "02",
    title: "Healthcare Technology & Portals",
    icon: Cpu,
    description: "Purpose-built inventory ERPs, real-time batch telemetry, digital POS billing, and hospital workflow applications that simplify daily operations.",
  },
  {
    number: "03",
    title: "Vetted Clinical & Operations Staff",
    icon: Users,
    description: "Registered pharmacists, inventory supervisors, billing specialists, and on-ground hospital operational staff trained in clinical SOPs.",
  },
  {
    number: "04",
    title: "Standard Operating Procedures (SOPs)",
    icon: Workflow,
    description: "Standardized hospital pharmacy protocols, near-expiry elimination, statutory regulatory adherence, and NABH-aligned operational rigor.",
  },
  {
    number: "05",
    title: "Management, MIS & Governance",
    icon: BarChart3,
    description: "Single-point leadership accountability, margin tracking, audit-ready bookkeeping, and daily executive dashboards for leadership visibility.",
  },
];

const WORKING_STEPS = [
  {
    step: "01",
    title: "Assess & Baseline",
    subtitle: "Understanding Root Bottlenecks",
    desc: "We analyze current inventory leakage, vendor delivery lag, billing gaps, and staffing turnover across your facility.",
  },
  {
    step: "02",
    title: "Formulate Blueprint",
    subtitle: "Custom Solution Architecture",
    desc: "We design a turnkey operational blueprint combining scheduled supply lines, software integrations, and SOP guidelines.",
  },
  {
    step: "03",
    title: "Mobilize Infrastructure",
    subtitle: "Hands-On Ground Rollout",
    desc: "We deploy verified supply channels, configure point-of-sale software, onboard trained staff, and establish quality checks.",
  },
  {
    step: "04",
    title: "Daily Execution",
    subtitle: "Active Operational Ownership",
    desc: "Our operations team manages daily restocking, vendor coordination, SLA enforcement, and uninterrupted support.",
  },
  {
    step: "05",
    title: "Continuous Governance",
    subtitle: "MIS & Margin Optimization",
    desc: "Weekly margin reviews, predictive inventory demand, expiry minimization, and iterative capability scaling.",
  },
];

const VALUES = [
  {
    title: "Single-Partner Accountability",
    desc: "No finger-pointing between software vendors and medicine traders. DavaTrack takes full ownership of execution from end to end.",
  },
  {
    title: "100% Traceability & Integrity",
    desc: "Zero tolerance for counterfeit drugs or unverified stock. Every batch is cataloged, monitored, and compliant with CDSCO regulations.",
  },
  {
    title: "On-the-Ground Pragmatism",
    desc: "We don't deliver theoretical advice — we manage real supply lines, configure live software, and operate real pharmacy counters.",
  },
  {
    title: "Transparent Unit Economics",
    desc: "Complete visibility into procurement rates, dispensing margins, and operational performance without hidden markups.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#EEF4F3] text-[#122631] pt-28 pb-20 relative overflow-hidden">
      {/* Background subtle ambient warmth (No grids) */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/5 to-transparent rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 bg-[#CAD7D0]/30 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-96 h-96 bg-[#6BB0BF]/10 rounded-full blur-[130px]" />

      {/* ============================================================
          1. HERO SECTION: CLEAN, WARM, INSPIRING
          ============================================================ */}
      <section className="relative z-10 pt-4 sm:pt-6 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Intro Card */}
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 border border-[#CAD7D0] shadow-[0_16px_50px_rgba(18,38,49,0.06)] space-y-8 relative overflow-hidden">
            <div className="max-w-4xl space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#266573]" />
                <span>About DavaTrack Digital LLP</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#122631] leading-[1.12]">
                Building the Operational Backbone
                <br />
                <span className="text-[#266573]">
                  Behind Better Healthcare in India.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#122631]/80 leading-relaxed max-w-3xl font-normal">
                <b className="text-[#122631] font-bold">DavaTrack Digital LLP</b> was founded to bring order, accountability, and unified execution to healthcare operations. We integrate medicine supply lines, pharmacy management, digital systems, and clinical staffing under one trusted partner.
              </p>

              {/* Core Pillars Quick Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/inquiry"
                  className="px-7 py-3.5 rounded-full bg-[#122631] hover:bg-[#266573] text-white font-bold text-sm shadow-[0_10px_25px_rgba(18,38,49,0.25)] transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4 text-[#6BB0BF]" />
                </Link>
                <Link
                  href="/solutions"
                  className="px-7 py-3.5 rounded-full bg-[#EEF4F3] hover:bg-white text-[#122631] font-bold text-sm border border-[#CAD7D0] shadow-xs transition-all"
                >
                  Explore Capabilities
                </Link>
              </div>

            </div>

            {/* Quick Strategic Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#CAD7D0]/60">
              <div className="p-3.5 rounded-2xl bg-[#EEF4F3] border border-[#CAD7D0]/70">
                <div className="text-lg sm:text-xl font-bold text-[#266573]">Single SLA</div>
                <div className="text-xs text-[#122631]/75 font-medium mt-0.5">End-to-End Governance</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#EEF4F3] border border-[#CAD7D0]/70">
                <div className="text-lg sm:text-xl font-bold text-[#266573]">100%</div>
                <div className="text-xs text-[#122631]/75 font-medium mt-0.5">CDSCO Batch Verified</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#EEF4F3] border border-[#CAD7D0]/70">
                <div className="text-lg sm:text-xl font-bold text-[#266573]">Zero Gap</div>
                <div className="text-xs text-[#122631]/75 font-medium mt-0.5">Prescription Availability</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#EEF4F3] border border-[#CAD7D0]/70">
                <div className="text-lg sm:text-xl font-bold text-[#266573]">5 Layers</div>
                <div className="text-xs text-[#122631]/75 font-medium mt-0.5">Supply • Tech • People • SOPs</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          2. FOUNDER & LEADERSHIP SPOTLIGHT: THOUGHTS & COMPANY VISION
          ============================================================ */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[32px] sm:rounded-[40px] border border-[#CAD7D0] shadow-[0_20px_60px_rgba(18,38,49,0.06)] overflow-hidden p-6 sm:p-10 lg:p-14 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left: Founder Portrait Card */}
              <div className="lg:col-span-5 space-y-4 text-center sm:text-left">
                <div className="relative mx-auto lg:mx-0 max-w-sm rounded-[28px] overflow-hidden border-2 border-[#CAD7D0] shadow-[0_16px_40px_rgba(18,38,49,0.10)] bg-[#266573]">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/images/founder.jpg"
                      alt="Leadership - DavaTrack Digital LLP"
                      fill
                      priority
                      className="object-cover object-top hover:scale-102 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  
                  {/* Bottom Portrait Caption Overlay */}
                  <div className="p-4 sm:p-5 bg-[#122631] text-white border-t border-white/15 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-base font-extrabold text-white">
                          Executive Leadership
                        </div>
                        <div className="text-xs text-[#6EBCBF] font-mono font-medium">
                          Founder &amp; Managing Partner • DavaTrack
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#6EBCBF] border border-white/20">
                        <HeartHandshake className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Founder Quote Capsule */}
                <div className="p-4 rounded-2xl bg-[#EEF4F3] border border-[#CAD7D0] text-xs sm:text-sm text-[#122631] font-medium leading-relaxed italic flex items-start gap-3">
                  <Quote className="w-4 h-4 text-[#266573] flex-shrink-0 mt-1" />
                  <span>
                    “Healthcare doesn&apos;t just need software or vendors — it needs accountable partners executing on the ground every single day.”
                  </span>
                </div>
              </div>

              {/* Right: Founder Thoughts, Problem Statement & Future Planning */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6EBCBF]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-bold">
                    <Lightbulb className="w-3.5 h-3.5 text-[#266573]" />
                    <span>Founder&apos;s Perspective &amp; Planning</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#122631] tracking-tight leading-snug">
                    Why We Founded DavaTrack:
                    <br />
                    <span className="text-[#266573]">Ending Operational Chaos in Healthcare.</span>
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#122631]/80 leading-relaxed font-normal">
                  <p>
                    When evaluating the Indian healthcare ecosystem, we observed that clinical founders, hospital owners, and dispensary administrators were spending immense energy dealing with <b>fragmented vendors</b> — medicine traders who don&apos;t understand software, IT companies that have never staffed a hospital pharmacy, and staffing agencies with no clinical SOP training.
                  </p>
                  
                  <p>
                    <b>Our Strategic Plan for DavaTrack:</b> We set out to build India&apos;s most dependable healthcare operations engine. Instead of handing you multiple disconnected vendor contracts, DavaTrack takes total single-partner ownership of your physical supply, inventory software, pharmacy counters, and compliance.
                  </p>
                </div>

                {/* 3 Strategic Commitments */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#266573] font-extrabold">
                    Our 3 Long-Term Planning Commitments:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-[#EEF4F3] border border-[#CAD7D0]">
                      <div className="font-bold text-[#122631] flex items-center gap-1.5 mb-1">
                        <Check className="w-3.5 h-3.5 text-[#266573]" />
                        <span>Reliability First</span>
                      </div>
                      <p className="text-[#122631]/75 leading-snug">
                        Guaranteed cold-chain delivery and automated replenishment to prevent zero stockouts.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#EEF4F3] border border-[#CAD7D0]">
                      <div className="font-bold text-[#122631] flex items-center gap-1.5 mb-1">
                        <Check className="w-3.5 h-3.5 text-[#266573]" />
                        <span>Fair Economics</span>
                      </div>
                      <p className="text-[#122631]/75 leading-snug">
                        Direct procurement pricing with zero hidden distributor margins or unverified markups.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#EEF4F3] border border-[#CAD7D0]">
                      <div className="font-bold text-[#122631] flex items-center gap-1.5 mb-1">
                        <Check className="w-3.5 h-3.5 text-[#266573]" />
                        <span>Turnkey Execution</span>
                      </div>
                      <p className="text-[#122631]/75 leading-snug">
                        SOP manuals, trained staff, and custom portals deployed under one single agreement.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          3. VISION & MISSION CARDS (CLEAN WHITE SURFACES)
          ============================================================ */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#CAD7D0] shadow-[0_12px_40px_rgba(18,38,49,0.06)] flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 text-[#266573] text-xs font-mono uppercase tracking-wider border border-[#266573]/20 font-bold">
                  <Target className="w-3.5 h-3.5 text-[#266573]" />
                  <span>Our Vision</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#122631] tracking-tight">
                  To Become India&apos;s Most Trusted Healthcare Operations Partner.
                </h3>
                
                <p className="text-xs sm:text-sm text-[#122631]/80 leading-relaxed font-normal">
                  We envision an ecosystem where hospitals, clinics, and pharmacies operate without supply disruptions, inventory leakage, or technical bottlenecks — supported by a partner that takes complete ownership of daily execution.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CAD7D0]/60 flex items-center justify-between text-xs font-mono font-bold text-[#266573]">
                <span>GOAL: SEAMLESS HEALTHCARE</span>
                <span>ESTABLISHED 2026</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#CAD7D0] shadow-[0_12px_40px_rgba(18,38,49,0.06)] flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6EBCBF]/20 text-[#266573] text-xs font-mono uppercase tracking-wider border border-[#6EBCBF]/40 font-bold">
                  <Compass className="w-3.5 h-3.5 text-[#266573]" />
                  <span>Our Mission</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#122631] tracking-tight">
                  Unifying Healthcare Operations Under Single Accountability.
                </h3>
                
                <p className="text-xs sm:text-sm text-[#122631]/80 leading-relaxed font-normal">
                  Our mission is to deliver dependable medicine supply, intuitive software, trained pharmacists, and standardized clinical SOPs as modular or turnkey operational solutions for healthcare facilities nationwide.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CAD7D0]/60 flex items-center justify-between text-xs font-mono font-bold text-[#266573]">
                <span>FOCUS: TOTAL EXECUTION</span>
                <span>ZERO COMPROMISE</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          4. 5 INTEGRATED OPERATING PILLARS
          ============================================================ */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-bold">
              <Layers className="w-3.5 h-3.5 text-[#266573]" />
              <span>Operational Foundations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#122631] tracking-tight">
              Our 5 Core Operating Pillars
            </h2>
            <p className="text-xs sm:text-base text-[#122631]/75 leading-relaxed font-normal">
              Each vertical operates as a dedicated capability center, synchronized into our unified delivery platform:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isDark = idx === 0 || idx === 3;
              const cardBg = isDark ? "#266573" : "#6EBCBF";

              return (
                <div
                  key={idx}
                  className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 shadow-md flex flex-col justify-between ${
                    isDark 
                      ? "border-white/20 text-white" 
                      : "border-white/60 text-[#122631]"
                  }`}
                  style={{
                    background: isDark
                      ? `
                        linear-gradient(
                          145deg,
                          rgba(255,255,255,0.18) 0%,
                          rgba(255,255,255,0.05) 45%,
                          rgba(0,0,0,0.22) 100%
                        ),
                        ${cardBg}
                      `
                      : `
                        linear-gradient(
                          145deg,
                          rgba(255,255,255,0.45) 0%,
                          rgba(255,255,255,0.15) 45%,
                          rgba(18,38,49,0.06) 100%
                        ),
                        ${cardBg}
                      `,
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs ${
                        isDark ? "bg-white/15 text-white border border-white/20" : "bg-white/80 text-[#122631] border border-white/70"
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className={`font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isDark ? "bg-white/15 text-white" : "bg-[#122631] text-white"
                      }`}>
                        #{pillar.number}
                      </span>
                    </div>

                    <h3 className={`text-lg sm:text-xl font-extrabold leading-snug ${
                      isDark ? "text-white" : "text-[#122631]"
                    }`}>
                      {pillar.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed font-medium ${
                      isDark ? "text-white/85" : "text-[#122631]/85"
                    }`}>
                      {pillar.description}
                    </p>
                  </div>

                  <div className={`mt-6 pt-3.5 border-t flex items-center justify-between text-[11px] font-mono font-bold ${
                    isDark ? "border-white/20 text-[#CAD7D0]" : "border-[#122631]/20 text-[#122631]"
                  }`}>
                    <span>STATUS</span>
                    <span>MANAGED &amp; GOVERNED</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================
          5. 5-STEP DELIVERY LIFECYCLE (HOW WE WORK)
          ============================================================ */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-bold">
              <Activity className="w-3.5 h-3.5 text-[#266573]" />
              <span>How DavaTrack Works</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#122631] tracking-tight">
              The 5-Step Delivery Lifecycle
            </h2>
            <p className="text-xs sm:text-base text-[#122631]/75 leading-relaxed font-normal">
              A structured roadmap ensuring zero operational downtime from initial intake to scaling:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {WORKING_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#CAD7D0] shadow-xs flex flex-col justify-between space-y-3 transition-all hover:shadow-md"
              >
                <div>
                  <div className="font-mono text-2xl font-black text-[#266573] mb-1.5">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#122631] leading-snug">
                    {step.title}
                  </h3>
                  <div className="text-[11px] text-[#266573] font-bold mb-2">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-[#122631]/75 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          6. CORE OPERATING PRINCIPLES (HONEST VALUES)
          ============================================================ */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-bold">
              <Award className="w-3.5 h-3.5 text-[#266573]" />
              <span>Our Operating Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#122631] tracking-tight">
              The Standards We Live By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#CAD7D0] shadow-xs space-y-2.5 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#266573] flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-[#122631]">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#122631]/75 leading-relaxed pl-8 font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Pre-Footer CTA */}
          <div className="bg-[#266573] rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-[0_20px_50px_rgba(18,38,49,0.25)] border border-white/20 mt-8 sm:mt-10 relative overflow-hidden text-white">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/15 rounded-full blur-[100px]" />
            <div className="relative z-10 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Partner With DavaTrack Digital LLP
              </h3>
              <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto font-normal">
                Let&apos;s build a dependable, transparent, and scalable operational backbone for your healthcare facility.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/inquiry"
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-white/90 text-[#266573] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
                >
                  Discuss Your Requirement
                </Link>
                <Link
                  href="/solutions"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/25 transition-all"
                >
                  Explore All Capabilities
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
