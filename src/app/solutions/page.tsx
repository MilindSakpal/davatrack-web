import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  Boxes, 
  CheckCircle2, 
  ShieldCheck, 
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { SOLUTION_CATEGORIES, ALL_SOLUTIONS_LIST } from "@/data/solutions";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Healthcare Solutions | Comprehensive Supply, Tech & Management Ecosystem",
  description:
    "Explore DavaTrack's comprehensive healthcare capabilities across Medical Supply Chain, Pharmacy Management, Digital Transformation, Healthcare Administration, and Custom Engineering.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#EEF4F3]">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 border-b border-[#CAD7D0] relative overflow-hidden bg-[#EEF4F3]">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/5 to-transparent rounded-full blur-[140px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#266573]" />
              <span>Execution & Solutions Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#122631] leading-[1.08]">
              Complete Healthcare
              <br />
              <span className="text-[#266573]">Solutions.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#122631]/80 leading-relaxed">
              <b className="text-[#122631] font-bold">Supply. Management. Technology. People. Execution.</b>
              <br />
              Engage us for one specific operational requirement or combine capabilities to create a complete healthcare support ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation Bar */}
      <section className="sticky top-20 z-30 bg-[#EEF4F3]/95 backdrop-blur-md border-b border-[#CAD7D0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-4 scrollbar-none">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#266573] flex-shrink-0">
            Quick Jump:
          </span>
          <div className="flex items-center gap-2 flex-shrink-0">
            {SOLUTION_CATEGORIES.map((cat) => (
              <a
                key={cat.key}
                href={`#${cat.key}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#122631] hover:bg-[#122631] hover:text-white transition-colors border border-[#CAD7D0] shadow-sm"
              >
                {cat.title}
              </a>
            ))}
            <a
              href="#custom-solutions"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#266573] text-white hover:bg-[#122631] transition-colors border border-[#266573]"
            >
              Custom Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {SOLUTION_CATEGORIES.map((category) => (
          <section
            key={category.key}
            id={category.key}
            className="scroll-mt-36 space-y-8"
          >
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#CAD7D0]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-black text-[#266573]">
                    {category.number}
                  </span>
                  <div className="h-6 w-px bg-[#CAD7D0]"></div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#266573]/80">
                    {category.subtitle}
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold text-[#122631]">
                  {category.title}
                </h2>
                <p className="text-sm text-[#122631]/70 max-w-2xl mt-1">
                  {category.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <span className="text-xs font-bold text-[#266573] bg-white px-3 py-1.5 rounded-lg border border-[#CAD7D0] shadow-sm">
                  {category.solutions.length} Specialized Capabilities
                </span>
              </div>
            </div>

            {/* Individual Solutions Grid for this category */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.solutions.map((item, idx) => {
                const CARD_PALETTE = ["#266573", "#6EBCBF", "#6BB0BF"] as const;
                const cardColor = CARD_PALETTE[idx % CARD_PALETTE.length];
                const isDark = cardColor === "#266573";

                return (
                  <div
                    key={item.slug}
                    className={cn(
                      "rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden",
                      isDark 
                        ? "border border-white/20 hover:border-white/40 shadow-[0_20px_50px_rgba(18,38,49,0.25)] hover:shadow-[0_28px_65px_rgba(18,38,49,0.35)] text-white" 
                        : "border border-white/60 hover:border-white shadow-[0_16px_40px_rgba(18,38,49,0.10)] hover:shadow-[0_26px_56px_rgba(18,38,49,0.20)] text-[#122631]"
                    )}
                    style={{
                      background: isDark
                        ? `
                          linear-gradient(
                            145deg,
                            rgba(255,255,255,0.16) 0%,
                            rgba(255,255,255,0.04) 40%,
                            rgba(0,0,0,0.28) 100%
                          ),
                          ${cardColor}
                        `
                        : `
                          linear-gradient(
                            145deg,
                            rgba(255,255,255,0.45) 0%,
                            rgba(255,255,255,0.15) 45%,
                            rgba(18,38,49,0.06) 100%
                          ),
                          ${cardColor}
                        `,
                    }}
                  >
                    <div 
                      className={cn(
                        "pointer-events-none absolute inset-0",
                        isDark 
                          ? "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.22)_0%,transparent_60%)]" 
                          : "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45)_0%,transparent_60%)]"
                      )} 
                    />
                    <div 
                      className={cn(
                        "pointer-events-none absolute left-[8%] right-[8%] top-0 h-px",
                        isDark ? "bg-white/30" : "bg-white/70"
                      )} 
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div 
                          className={cn(
                            "p-3 rounded-2xl transition-colors shadow-xs",
                            isDark 
                              ? "bg-white/15 text-[#6BB0BF] group-hover:bg-white group-hover:text-[#122631]" 
                              : "bg-white/80 text-[#122631] group-hover:bg-[#122631] group-hover:text-[#6BB0BF]"
                          )}
                        >
                          <DynamicIcon name={item.iconName} className="w-5 h-5" />
                        </div>
                        <span 
                          className={cn(
                            "text-[11px] font-mono font-bold px-2.5 py-1 rounded-full uppercase",
                            isDark 
                              ? "text-white bg-white/15 border border-white/25" 
                              : "text-white bg-[#122631]"
                          )}
                        >
                          {category.title}
                        </span>
                      </div>

                      <h3 
                        className={cn(
                          "text-xl font-extrabold mb-3 leading-snug",
                          isDark ? "text-white" : "text-[#122631]"
                        )}
                      >
                        {item.title}
                      </h3>

                      <p 
                        className={cn(
                          "text-xs sm:text-sm leading-relaxed mb-6",
                          isDark ? "text-[#CAD7D0]/90 font-normal" : "text-[#122631]/85 font-medium"
                        )}
                      >
                        {item.description}
                      </p>
                    </div>

                    <div 
                      className={cn(
                        "pt-4 border-t flex items-center justify-between relative z-10",
                        isDark ? "border-white/15" : "border-[#122631]/15"
                      )}
                    >
                      <span 
                        className={cn(
                          "text-[11px] font-semibold",
                          isDark ? "text-white/75" : "text-[#122631]/70"
                        )}
                      >
                        Full Workflow Ready
                      </span>
                      <Link
                        href={`/solutions/${item.slug}`}
                        className={cn(
                          "inline-flex items-center gap-1.5 text-xs font-extrabold transition-all py-1.5 px-3 rounded-full shadow-xs active:scale-95",
                          isDark 
                            ? "bg-white text-[#122631] hover:bg-[#6BB0BF] hover:text-[#122631]" 
                            : "bg-white/80 hover:bg-white text-[#122631] hover:text-[#266573]"
                        )}
                      >
                        <span>Explore Solution</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#266573]" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Custom Solutions Section */}
        <section id="custom-solutions" className="scroll-mt-36">
          <div className="bg-[#122631] rounded-3xl p-8 sm:p-12 text-white border border-[#266573]/30 shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 right-10 w-96 h-96 bg-[#266573]/30 rounded-full blur-[100px]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#266573]/30 text-[#6BB0BF] text-xs font-extrabold uppercase tracking-wider border border-[#6BB0BF]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#6BB0BF]" />
                  <span>Category 05 • Bespoke Operations</span>
                </div>
                <h2 className="text-3xl font-extrabold text-white">
                  Custom Healthcare Solutions
                </h2>
                <p className="text-sm sm:text-base text-[#CAD7D0]/85 leading-relaxed max-w-2xl">
                  If your operational requirements don’t fit predefined categories, we engineer custom solutions spanning physical supply, technology infrastructure, specialized healthcare manpower, and regulatory processes.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/solutions/custom-healthcare-solutions"
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-[#EEF4F3] text-[#122631] font-bold text-sm shadow-lg transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Explore Custom Solutions</span>
                  <ArrowRight className="w-4 h-4 text-[#266573]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
