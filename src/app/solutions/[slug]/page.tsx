import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  Layers, 
  ArrowUpRight,
  TrendingUp,
  Boxes,
  ShieldCheck,
  Cpu,
  Clock,
  Activity,
  FileCheck,
  ChevronRight,
  Zap
} from "lucide-react";
import { DynamicIcon } from "@/components/ui/Icons";
import { SOLUTIONS_DATA, ALL_SOLUTIONS_LIST } from "@/data/solutions";
import { AgencyToRetailerJourney } from "@/components/solutions/AgencyToRetailerJourney";
import { cn } from "@/lib/utils";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ALL_SOLUTIONS_LIST.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const solution = SOLUTIONS_DATA[params.slug];
  if (!solution) {
    return {
      title: "Solution Not Found | DavaTrack Digital LLP",
    };
  }

  return {
    title: `${solution.title} | DavaTrack Digital LLP`,
    description: solution.shortDescription,
    openGraph: {
      title: `${solution.title} | Healthcare Operations Layer`,
      description: solution.shortDescription,
    },
  };
}

export default function SolutionDetailPage({ params }: PageProps) {
  const solution = SOLUTIONS_DATA[params.slug];

  if (!solution) {
    notFound();
  }

  const isMedicalSupply = solution.slug === "medical-supply-delivery";

  const relatedSolutions = solution.relatedSlugs
    .map((slug) => SOLUTIONS_DATA[slug])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#EDF3F0] text-[#122631] pt-28 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/5 to-transparent rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 bg-[#CAD7D0]/30 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-96 h-96 bg-[#6BB0BF]/10 rounded-full blur-[130px]" />
      
      {/* Subtle tech grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(38,101,115,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,101,115,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]" />

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative z-10 pt-8 pb-16 lg:pb-24 border-b border-[#CAD7D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Hero Details */}
            <div className="lg:col-span-8 space-y-6">
              {/* <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-bold">
                  {solution.categoryTitle}
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#CAD7D0] text-[#266573] text-xs font-mono font-bold shadow-sm">
                  CAPABILITY #{solution.number}
                </span>
              </div> */}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#122631] leading-[1.14]">
                {solution.title}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#266573] font-semibold leading-snug">
                {solution.headline}
              </p>

              <p className="text-sm sm:text-base text-[#122631]/75 leading-relaxed max-w-3xl">
                {solution.fullDescription}
              </p>

              {/* Objective Banner */}
              {solution.objective && (
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#CAD7D0] shadow-sm flex items-center gap-4 max-w-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#122631] text-[#6BB0BF] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#266573]/20">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#266573]">
                      Core Operational Mandate
                    </div>
                    <div className="text-sm font-bold text-[#122631] mt-0.5">
                      “{solution.objective}”
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/inquiry"
                  className="px-7 py-3 rounded-full bg-[#122631] hover:bg-[#266573] text-white font-bold text-sm shadow-[0_10px_25px_rgba(18,38,49,0.25)] transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Deploy This Capability</span>
                  <ArrowRight className="w-4 h-4 text-[#6BB0BF]" />
                </Link>

                <Link
                  href="/solutions"
                  className="px-6 py-3 rounded-full bg-white hover:bg-[#EDF3F0] text-[#122631] font-bold text-sm border border-[#CAD7D0] shadow-sm transition-all"
                >
                  View Solutions Matrix
                </Link>
              </div>
            </div>

            {/* Right Card: Quick Spec Sheet */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#CAD7D0] shadow-[0_12px_40px_rgba(18,38,49,0.06)] space-y-6 relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 w-32 h-32 bg-[#6BB0BF]/10 rounded-full blur-2xl" />

                <div className="flex items-center gap-3 pb-4 border-b border-[#CAD7D0]/60">
                  <div className="w-12 h-12 rounded-2xl bg-[#122631] text-[#6BB0BF] flex items-center justify-center shadow-md border border-[#266573]/20">
                    <DynamicIcon name={solution.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#266573] font-bold">
                      EXECUTION SPEC
                    </div>
                    <div className="text-base font-extrabold text-[#122631]">
                      {solution.title}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#266573] font-bold">
                    Guaranteed Operational Deliverables
                  </div>
                  {solution.keyOutcomes.slice(0, 4).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#122631]/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#266573] flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#EDF3F0] border border-[#CAD7D0] text-xs text-[#122631]/70">
                  <span className="font-bold text-[#122631]">Single-Point SLA:</span> Managed end-to-end under DavaTrack Digital LLP&apos;s integrated governance.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          MAIN BODY: GRAPHIC SUPPLY JOURNEY (or SCOPE & BLUEPRINT FOR OTHERS)
          ============================================================ */}
      <section className="py-8 sm:py-14 relative z-10">
        <div className={cn("mx-auto px-4 sm:px-6 lg:px-8 space-y-16", isMedicalSupply ? "max-w-[1440px]" : "max-w-7xl")}>
          
          {/* If Medical Supply Delivery: Render the Long Graphical Visual Pipeline */}
          {isMedicalSupply ? (
            <AgencyToRetailerJourney />
          ) : (
            <>
              {/* What We Deliver Section (For other solutions) */}
              <div className="space-y-8">
                <div className="max-w-3xl space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-semibold">
                    <Boxes className="w-3.5 h-3.5 text-[#266573]" />
                    <span>Scope of Services</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122631] tracking-tight">
                    What We Deliver in {solution.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#122631]/70">
                    Engage us for modular components or turnkey operational execution across these key areas:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {solution.weCanSupport.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white hover:bg-[#F9FBFA] rounded-2xl p-5 border border-[#CAD7D0] hover:border-[#266573]/40 shadow-[0_4px_16px_rgba(18,38,49,0.04)] transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#266573] mt-2 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-[#122631] font-semibold leading-snug">
                          {item}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#CAD7D0]/60 flex items-center justify-between text-[10px] font-mono text-[#266573]/70">
                        <span>STATUS</span>
                        <span className="text-[#266573] font-bold">MANAGED</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Blueprint / How We Implement Section (For other solutions) */}
              {solution.processSteps && solution.processSteps.length > 0 && (
                <div className="space-y-8 pt-8 border-t border-[#CAD7D0]">
                  <div className="max-w-3xl space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-mono uppercase tracking-wider font-semibold">
                      <Activity className="w-3.5 h-3.5 text-[#266573]" />
                      <span>Execution Blueprint</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122631] tracking-tight">
                      How We Implement This Solution
                    </h2>
                    <p className="text-sm sm:text-base text-[#122631]/70">
                      A structured, 5-phase delivery model ensuring seamless transition and zero operational downtime.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {solution.processSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 border border-[#CAD7D0] shadow-[0_4px_16px_rgba(18,38,49,0.04)] relative overflow-hidden"
                      >
                        <div className="font-mono text-2xl font-black text-[#266573]/30 mb-3">
                          #{step.number}
                        </div>
                        <h3 className="text-base font-bold text-[#122631] mb-2 leading-snug">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="text-xs text-[#122631]/70 leading-relaxed">
                            {step.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Compliance & Governance Callout */}
          {solution.complianceNote && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#122631] text-white border border-[#266573]/30 shadow-xl flex flex-col sm:flex-row items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#266573]/40 border border-[#6BB0BF]/30 flex items-center justify-center text-[#6BB0BF] flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-mono uppercase tracking-widest text-[#6BB0BF] font-bold">
                  Statutory & Quality Compliance
                </div>
                <div className="text-sm sm:text-base text-[#CAD7D0]/90">
                  {solution.complianceNote}
                </div>
              </div>
            </div>
          )}

          {/* Related Interconnected Capabilities (Centered Heading, Big Graphics, Minimal Punchy Copy) */}
          {relatedSolutions.length > 0 && (
            <div className="space-y-10 pt-14 border-t-2 border-[#CAD7D0]">
              {/* Centered Section Header */}
              <div className="max-w-3xl mx-auto text-center space-y-3">
                {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#CAD7D0] text-[#266573] text-xs font-mono font-bold shadow-xs mx-auto">
                  <Sparkles className="w-3.5 h-3.5 text-[#266573]" />
                  <span>Unified Operational Architecture</span>
                </div> */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#122631] tracking-tight leading-tight">
                  Related Interconnected Capabilities
                </h2>
                <p className="text-xs sm:text-base text-[#122631]/75 max-w-2xl mx-auto leading-relaxed">
                  Synchronized operational modules engineered to integrate directly with {solution.title} for continuous governance.
                </p>
              </div>

              {/* Sober, Clean Healthcare Graphic Showcase Cards (Brand Palette, No Dark Techy boxes) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedSolutions.map((related, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-[#CAD7D0] hover:border-[#266573]/50 shadow-[0_8px_30px_rgba(18,38,49,0.05)] transition-all duration-200 flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-4">
                      {/* Badge and Tag Row */}
                      {/* <div className="flex items-center justify-between gap-2 pb-1">
                        <span className="px-3 py-1 rounded-full bg-[#EDF3F0] border border-[#CAD7D0] text-[#266573] text-[11px] font-mono font-bold shadow-xs">
                          CAPABILITY #{related.number}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#266573]/10 text-[#266573] text-[10px] font-mono font-bold uppercase tracking-wider">
                          {related.categoryTitle}
                        </span>
                      </div> */}

                      {/* ============================================================
                          SOBER & CLEAN HEALTHCARE GRAPHIC CONTAINER
                          ============================================================ */}
                      {related.slug === "vendor-discovery" ? (
                        <div className="w-full h-44 rounded-2xl bg-[#EDF3F0] p-4 border border-[#CAD7D0] flex flex-col justify-between shadow-xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#266573]" />
                              <span className="text-[11px] font-mono text-[#266573] font-bold">VERIFIED SOURCING NETWORK</span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#CAD7D0] text-[#122631] text-[10px] font-mono font-bold">
                              500+ AUDITED
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 py-1 text-center">
                            <div className="p-2 rounded-xl bg-white border border-[#CAD7D0] shadow-xs">
                              <div className="text-[10px] font-mono text-[#266573] font-bold">CDSCO Hub</div>
                              <div className="text-[9px] text-[#122631]/70">Direct OEM</div>
                            </div>
                            <div className="p-2 rounded-xl bg-white border-2 border-[#266573] shadow-xs">
                              <div className="text-[10px] font-mono text-[#266573] font-bold">Sourcing Hub</div>
                              <div className="text-[9px] text-[#122631] font-semibold">Rate Contract</div>
                            </div>
                            <div className="p-2 rounded-xl bg-white border border-[#CAD7D0] shadow-xs">
                              <div className="text-[10px] font-mono text-[#266573] font-bold">Consumables</div>
                              <div className="text-[9px] text-[#122631]/70">Bulk Rates</div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-[#CAD7D0] flex items-center justify-between text-[10px] font-mono text-[#122631]">
                            <span>NETWORK: <strong className="text-[#266573]">PAN-INDIA</strong></span>
                            <span className="text-[#266573] font-bold">DIRECT CONTRACTS ✓</span>
                          </div>
                        </div>
                      ) : related.slug === "pharmacy-management" ? (
                        <div className="w-full h-44 rounded-2xl bg-[#EDF3F0] p-4 border border-[#CAD7D0] flex flex-col justify-between shadow-xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#266573]" />
                              <span className="text-[11px] font-mono text-[#266573] font-bold">SMART DISPENSARY CONSOLE</span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#CAD7D0] text-[#122631] text-[10px] font-mono font-bold">
                              POS SYNCED
                            </span>
                          </div>

                          <div className="space-y-2 py-1">
                            <div>
                              <div className="flex justify-between text-[10px] font-mono text-[#122631] mb-1">
                                <span>Stock Optimization Level</span>
                                <span className="text-[#266573] font-bold">98.4%</span>
                              </div>
                              <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-[#CAD7D0]">
                                <div className="h-full bg-[#266573] rounded-full w-[98%]" />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-[10px] font-mono text-[#122631] mb-1">
                                <span>Near-Expiry Auto-Rotation</span>
                                <span className="text-[#6BB0BF] font-bold font-mono">ACTIVE</span>
                              </div>
                              <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-[#CAD7D0]">
                                <div className="h-full bg-[#6BB0BF] rounded-full w-[88%]" />
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-[#CAD7D0] flex items-center justify-between text-[10px] font-mono text-[#122631]">
                            <span>INVENTORY: <strong className="text-[#266573]">REAL-TIME</strong></span>
                            <span className="text-[#266573] font-bold">ZERO STOCKOUTS ✓</span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-44 rounded-2xl bg-[#EDF3F0] p-4 border border-[#CAD7D0] flex flex-col justify-between shadow-xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#266573]" />
                              <span className="text-[11px] font-mono text-[#266573] font-bold">GMP PRODUCTION MATRIX</span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#CAD7D0] text-[#122631] text-[10px] font-mono font-bold">
                              WHO-GMP
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 py-1">
                            <div className="p-2.5 rounded-xl bg-white border border-[#CAD7D0] shadow-xs flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#266573]/15 text-[#266573] flex items-center justify-center text-xs font-bold flex-shrink-0">
                                ✓
                              </div>
                              <div>
                                <div className="text-[10px] font-mono font-bold text-[#122631]">Private Label</div>
                                <div className="text-[9px] text-[#122631]/70">Formulations</div>
                              </div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white border border-[#CAD7D0] shadow-xs flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#6BB0BF]/20 text-[#266573] flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0">
                                COA
                              </div>
                              <div>
                                <div className="text-[10px] font-mono font-bold text-[#122631]">Batch Certified</div>
                                <div className="text-[9px] text-[#122631]/70">100% Sealed</div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-[#CAD7D0] flex items-center justify-between text-[10px] font-mono text-[#122631]">
                            <span>QUALITY: <strong className="text-[#266573]">CLINICAL GRADE</strong></span>
                            <span className="text-[#266573] font-bold">STANDARDIZED ✓</span>
                          </div>
                        </div>
                      )}

                      {/* Icon & Title */}
                      <div className="flex items-center gap-3 pt-1">
                        <div className="w-11 h-11 rounded-2xl bg-[#122631] text-[#6BB0BF] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#266573]/20">
                          <DynamicIcon name={related.iconName} className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-extrabold text-[#122631] leading-snug">
                            {related.title}
                          </h3>
                        </div>
                      </div>

                      {/* Short, Punchy 1-Line Copy */}
                      <p className="text-xs text-[#122631]/75 leading-relaxed">
                        {related.headline || related.shortDescription}
                      </p>

                      {/* Key Feature Badges */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {related.keyOutcomes.slice(0, 2).map((outcome, oIdx) => (
                          <span 
                            key={oIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#EDF3F0] border border-[#CAD7D0] text-[11px] text-[#122631] font-semibold"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#266573]" />
                            <span>{outcome}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Pre-Footer CTA */}
          <div className="bg-[#122631] rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-[0_20px_50px_rgba(18,38,49,0.3)] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#266573]/30 rounded-full blur-[100px]" />
            <div className="relative z-10 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to implement {solution.title}?
              </h3>
              <p className="text-sm sm:text-base text-[#CAD7D0]/80 max-w-xl mx-auto">
                Our healthcare solutions architect team will assess your current bottlenecks and formulate a tailored deployment timeline.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/inquiry"
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-[#EDF3F0] text-[#122631] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
                >
                  Discuss Your Requirement
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 transition-all"
                >
                  Learn About DavaTrack
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
