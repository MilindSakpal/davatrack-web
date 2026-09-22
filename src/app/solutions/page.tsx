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
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { SOLUTION_CATEGORIES, ALL_SOLUTIONS_LIST } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Healthcare Solutions | Comprehensive Supply, Tech & Management Ecosystem",
  description:
    "Explore DavaTrack's comprehensive healthcare capabilities across Medical Supply Chain, Pharmacy Management, Digital Transformation, Healthcare Administration, and Custom Engineering.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Page Hero */}
      <section className="bg-hero-gradient bg-tech-grid py-16 lg:py-24 border-b border-border/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: "Solutions" }]}
            className="mb-8"
          />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/20 text-blue-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Execution & Solutions Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.08]">
              Complete Healthcare
              <br />
              <span className="text-blue-accent">Solutions.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              <b className="text-navy font-bold">Supply. Management. Technology. People. Execution.</b>
              <br />
              Engage us for one specific operational requirement or combine capabilities to create a complete healthcare support ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-4 scrollbar-none">
          <span className="text-xs font-extrabold uppercase tracking-wider text-muted flex-shrink-0">
            Quick Jump:
          </span>
          <div className="flex items-center gap-2 flex-shrink-0">
            {SOLUTION_CATEGORIES.map((cat) => (
              <a
                key={cat.key}
                href={`#${cat.key}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-navy-50 text-navy hover:bg-navy hover:text-white transition-colors border border-border"
              >
                {cat.title}
              </a>
            ))}
            <a
              href="#custom-solutions"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-accent/20 text-navy hover:bg-cyan-accent transition-colors border border-cyan-accent/40"
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-border">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-black text-blue-accent">
                    {category.number}
                  </span>
                  <div className="h-6 w-px bg-border"></div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-muted">
                    {category.subtitle}
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold text-navy">
                  {category.title}
                </h2>
                <p className="text-sm text-muted max-w-2xl mt-1">
                  {category.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <span className="text-xs font-bold text-navy-600 bg-navy-50 px-3 py-1.5 rounded-lg border border-border">
                  {category.solutions.length} Specialized Capabilities
                </span>
              </div>
            </div>

            {/* Individual Solutions Grid for this category */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.solutions.map((item) => (
                <div
                  key={item.slug}
                  className="bg-white rounded-3xl p-7 border border-border shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-2xl bg-navy-50 text-blue-accent group-hover:bg-navy group-hover:text-white transition-colors">
                        <DynamicIcon name={item.iconName} className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-muted uppercase">
                        {category.title}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-navy mb-3 group-hover:text-blue-accent transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-muted">
                      Full Workflow Ready
                    </span>
                    <Link
                      href={`/solutions/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-navy group-hover:text-blue-accent transition-colors"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Custom Solutions Section */}
        <section id="custom-solutions" className="scroll-mt-36">
          <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white border border-navy-700 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 text-cyan-accent text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Category 05 • Bespoke Operations</span>
                </div>
                <h2 className="text-3xl font-extrabold text-white">
                  Custom Healthcare Solutions
                </h2>
                <p className="text-sm sm:text-base text-navy-200 leading-relaxed max-w-2xl">
                  If your operational requirements don’t fit predefined categories, we engineer custom solutions spanning physical supply, technology infrastructure, specialized healthcare manpower, and regulatory processes.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Button
                  href="/solutions/custom-healthcare-solutions"
                  variant="cyan"
                  size="lg"
                  icon="arrow"
                  className="font-bold"
                >
                  Explore Custom Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
