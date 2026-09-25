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
    <div className="min-h-screen bg-[#EDEDE5] text-[#122631] pt-28 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/5 to-transparent rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 bg-[#CAD7D0]/30 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-96 h-96 bg-[#6BB0BF]/10 rounded-full blur-[130px]" />
      
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
              </div>
            </div>

            {/* Right Card: Quick Spec Sheet */}
            <div className="lg:col-span-4">
              <div className="bg-[#6EBCBF] rounded-3xl p-6 sm:p-7 border-2 border-white/60 shadow-[0_12px_40px_rgba(18,38,49,0.08)] space-y-6 relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 w-32 h-32 bg-white/30 rounded-full blur-2xl" />

                <div className="flex items-center gap-3 pb-4 border-b border-white/60">
                  <div className="w-12 h-12 rounded-2xl bg-[#122631] text-[#6EBCBF] flex items-center justify-center shadow-md border border-[#122631]/20">
                    <DynamicIcon name={solution.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#122631] font-extrabold">
                      EXECUTION SPEC
                    </div>
                    <div className="text-base font-black text-[#122631]">
                      {solution.title}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#122631] font-extrabold">
                    Guaranteed Operational Deliverables
                  </div>
                  {solution.keyOutcomes.slice(0, 4).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#122631] font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#266573] flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-white/80 border border-white/90 text-xs text-[#122631] font-medium shadow-xs">
                  <span className="font-extrabold text-[#122631]">Single-Point SLA:</span> Managed end-to-end under DavaTrack Digital LLP&apos;s integrated governance.
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
                  <p className="text-sm sm:text-base text-[#122631]/75 leading-relaxed">
                    Engage us for modular components or turnkey operational execution across these key areas:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {solution.weCanSupport.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#6EBCBF] rounded-2xl p-5 border-2 border-white/60 shadow-[0_4px_16px_rgba(18,38,49,0.05)] transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#122631] mt-1.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-[#122631] font-bold leading-snug">
                          {item}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/50 flex items-center justify-between text-[10px] font-mono text-[#122631]">
                        <span className="font-semibold">STATUS</span>
                        <span className="bg-[#122631] text-white px-2 py-0.5 rounded-full font-extrabold">MANAGED</span>
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
                    <p className="text-sm sm:text-base text-[#122631]/75 leading-relaxed">
                      A structured, 5-phase delivery model ensuring seamless transition and zero operational downtime.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {solution.processSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-[#6EBCBF] rounded-2xl p-6 border-2 border-white/60 shadow-[0_4px_16px_rgba(18,38,49,0.05)] relative overflow-hidden flex flex-col justify-between"
                      >
                        <div>
                          <div className="font-mono text-2xl font-black text-[#122631]/40 mb-3">
                            #{step.number}
                          </div>
                          <h3 className="text-base font-extrabold text-[#122631] mb-2 leading-snug">
                            {step.title}
                          </h3>
                          {step.description && (
                            <p className="text-xs text-[#122631]/85 font-medium leading-relaxed">
                              {step.description}
                            </p>
                          )}
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/50 flex items-center justify-between text-[10px] font-mono text-[#122631]">
                          <span className="font-bold">PHASE #{step.number}</span>
                          <span className="bg-[#122631] text-white px-2 py-0.5 rounded-full font-extrabold">VERIFIED</span>
                        </div>
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

              {/* Glossy Homepage-Style Solution Cards with Small Details Right on This Page */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {relatedSolutions.map((related, idx) => {
                  return (
                    <div
                      key={idx}
                      className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[32px] border border-white/60 p-6 sm:p-7 shadow-[0_16px_40px_rgba(18,38,49,0.10)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(18,38,49,0.20)]"
                      style={{
                        background: `
                          linear-gradient(
                            145deg,
                            rgba(255,255,255,0.45) 0%,
                            rgba(255,255,255,0.15) 45%,
                            rgba(18,38,49,0.06) 100%
                          ),
                          #6EBCBF
                        `,
                      }}
                    >
                      {/* Glossy top-left specular reflection */}
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45)_0%,transparent_60%)]" />

                      {/* Deep subtle bottom shadow gradient */}
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#122631]/[0.08] to-transparent" />

                      {/* Diagonal shine sweep on hover */}
                      <div className="pointer-events-none absolute -left-[100%] top-[-30%] h-[180%] w-[60%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.35] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[350%]" />

                      {/* Inner glass bezel ring */}
                      <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/40" />

                      {/* Crisp top edge highlight line */}
                      <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-white/70" />

                      {/* Card Content */}
                      <div className="relative z-10 flex h-full flex-col justify-between space-y-5 text-[#122631]">
                        {/* Top Header: Badge + Title + Icon */}
                        <div className="space-y-3.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white bg-[#122631] border border-[#122631]/20 px-3 py-1 rounded-full shadow-sm">
                              #{related.number || `0${idx + 1}`} • {related.categoryTitle || "CAPABILITY"}
                            </span>
                            <div className="w-9 h-9 rounded-xl bg-white/80 text-[#122631] flex items-center justify-center border border-white/70 shadow-xs">
                              <DynamicIcon name={related.iconName} className="w-4 h-4" />
                            </div>
                          </div>

                          <h3 className="font-display font-extrabold tracking-tight text-[#122631] text-xl sm:text-2xl leading-[1.2]">
                            {related.title}
                          </h3>

                          <p className="text-xs text-[#122631]/85 leading-relaxed font-medium">
                            {related.headline || related.shortDescription}
                          </p>
                        </div>

                        {/* Operational Scope & Capabilities (Small details on this page) */}
                        <div className="pt-2 border-t border-[#122631]/15 space-y-2.5">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-[#266573] font-bold">
                            Operational Scope &amp; Deliverables:
                          </div>
                          <div className="space-y-2">
                            {related.weCanSupport.slice(0, 3).map((item, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-2 text-xs text-[#122631] leading-snug font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#266573] flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Measurable Outcomes Badges */}
                        <div className="pt-2 border-t border-[#122631]/10 space-y-1.5">
                          {related.keyOutcomes.slice(0, 2).map((outcome, oIdx) => (
                            <div
                              key={oIdx}
                              className="flex items-center gap-2 p-2.5 rounded-xl border border-white/80 bg-white/80 text-xs font-bold text-[#122631] shadow-xs backdrop-blur-md"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#266573] flex-shrink-0" />
                              <span className="line-clamp-1 text-[11px] sm:text-xs text-[#122631]">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
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
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-[#EDEDE5] text-[#122631] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
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
