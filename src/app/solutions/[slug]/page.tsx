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
  Boxes
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { SOLUTIONS_DATA, ALL_SOLUTIONS_LIST } from "@/data/solutions";

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
      title: "Solution Not Found",
    };
  }

  return {
    title: `${solution.title} | ${solution.categoryTitle} Solutions`,
    description: solution.shortDescription,
    openGraph: {
      title: `${solution.title} | DavaTrack Digital LLP`,
      description: solution.shortDescription,
    },
  };
}

export default function SolutionDetailPage({ params }: PageProps) {
  const solution = SOLUTIONS_DATA[params.slug];

  if (!solution) {
    notFound();
  }

  const relatedSolutions = solution.relatedSlugs
    .map((slug) => SOLUTIONS_DATA[slug])
    .filter(Boolean);

  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Solution Hero */}
      <section className="bg-hero-gradient bg-tech-grid py-16 lg:py-24 border-b border-border/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: solution.title },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-wider">
                  {solution.categoryTitle}
                </span>
                <span className="text-xs font-black text-blue-accent">
                  SOLUTION {solution.number}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-[1.12]">
                {solution.title}
              </h1>

              <p className="text-lg sm:text-xl text-navy-700 font-semibold leading-snug">
                {solution.headline}
              </p>

              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                {solution.fullDescription}
              </p>

              {/* Objective Banner if present */}
              {solution.objective && (
                <div className="p-4 rounded-2xl bg-white border border-blue-accent/30 shadow-soft flex items-center gap-3 max-w-xl">
                  <div className="p-2 rounded-xl bg-blue-accent/10 text-blue-accent">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-muted">
                      Core Strategic Objective
                    </div>
                    <div className="text-sm font-extrabold text-navy">
                      “{solution.objective}”
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  href="/inquiry"
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  className="rounded-xl shadow-md"
                >
                  Discuss This Requirement
                </Button>
                <Button
                  href="/solutions"
                  variant="outline"
                  size="lg"
                  className="rounded-xl"
                >
                  Explore All Solutions
                </Button>
              </div>
            </div>

            {/* Right Card: Capability Overview Visual */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-card space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="p-3 rounded-2xl bg-navy-50 text-blue-accent">
                    <DynamicIcon name={solution.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted uppercase">
                      Domain Focus
                    </div>
                    <div className="text-base font-extrabold text-navy">
                      {solution.title}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted">
                    Execution Highlights
                  </div>
                  {solution.keyOutcomes.slice(0, 3).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-navy font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-surface-soft border border-border text-xs text-muted">
                  <span className="font-bold text-navy">DavaTrack Model:</span> We provide direct operational accountability and single-partner coordination.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Solution Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* We Can Support Grid */}
          <div className="space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy text-xs font-bold uppercase tracking-wider">
                <span>Scope of Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                What We Can Support in {solution.title}
              </h2>
              <p className="text-sm sm:text-base text-muted">
                Engage us for modular components or end-to-end management across these operational areas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {solution.weCanSupport.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-surface-soft/80 rounded-2xl p-5 border border-border/80 flex items-start gap-3 hover:border-blue-accent/30 hover:bg-white hover:shadow-soft transition-all duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-accent mt-2 flex-shrink-0"></div>
                  <div className="text-sm font-bold text-navy leading-snug">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Note if present */}
            {solution.complianceNote && (
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><b>Regulatory & Compliance Note:</b> {solution.complianceNote}</span>
              </div>
            )}
          </div>

          {/* Workflow & Process Steps */}
          {solution.processSteps && solution.processSteps.length > 0 && (
            <div className="space-y-8 pt-8 border-t border-border/80">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-accent/10 text-blue-accent text-xs font-bold uppercase tracking-wider">
                  <span>Structured Delivery</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                  How the Execution Model Works
                </h2>
                <p className="text-sm sm:text-base text-muted">
                  A standardized, multi-stage operational workflow ensuring smooth implementation and SLA adherence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {solution.processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="bg-white rounded-2xl p-5 border border-border shadow-soft flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <span className="text-xs font-black text-blue-accent block mb-1">
                        STEP {step.number}
                      </span>
                      <h3 className="text-base font-extrabold text-navy">
                        {step.title}
                      </h3>
                    </div>
                    {step.description && (
                      <p className="text-xs text-muted leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits / Measurable Outcomes */}
          <div className="space-y-8 pt-8 border-t border-border/80">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <span>Value & Impact</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Key Benefits & Organizational Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.keyOutcomes.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-surface-soft to-white rounded-2xl p-6 border border-border flex items-start gap-4"
                >
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-navy mb-1">
                      Outcome 0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Banner */}
          <div className="bg-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Require {solution.title}?
              </h3>
              <p className="text-xs sm:text-sm text-navy-200 max-w-xl">
                Tell us your institutional specifications and volume requirements. We will engineer the right execution framework.
              </p>
            </div>
            <Button
              href="/inquiry"
              variant="cyan"
              size="lg"
              icon="arrow"
              className="flex-shrink-0 font-bold"
            >
              Submit Requirement
            </Button>
          </div>

          {/* Related Solutions */}
          {relatedSolutions.length > 0 && (
            <div className="space-y-8 pt-8 border-t border-border/80">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-navy">
                  Complementary Solutions
                </h3>
                <Link
                  href="/solutions"
                  className="text-xs font-bold text-navy hover:text-blue-accent"
                >
                  View All Solutions →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedSolutions.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/solutions/${rel.slug}`}
                    className="group bg-surface-soft/60 hover:bg-white rounded-2xl p-6 border border-border hover:border-blue-accent/30 hover:shadow-soft transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[10px] font-bold text-blue-accent uppercase tracking-wider mb-2">
                        {rel.categoryTitle}
                      </div>
                      <h4 className="text-base font-extrabold text-navy group-hover:text-blue-accent transition-colors mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-muted line-clamp-2">
                        {rel.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-bold text-navy group-hover:text-blue-accent">
                      <span>View Solution</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
