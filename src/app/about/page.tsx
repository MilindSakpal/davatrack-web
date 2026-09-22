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
  BarChart, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Building The Infrastructure Behind Better Healthcare",
  description:
    "DavaTrack Digital LLP is a healthcare solutions and execution partner combining supply chain, technology, people, processes and operational management.",
};

const PILLARS = [
  {
    number: "01",
    title: "Supply",
    icon: Truck,
    description: "Dependable pharmaceutical procurement, medical consumables, surgical lines, and scheduled multi-facility logistics.",
  },
  {
    number: "02",
    title: "Technology",
    icon: Cpu,
    description: "Custom healthcare portals, automated inventory pipelines, real-time tracking, and clinical workflow software.",
  },
  {
    number: "03",
    title: "People",
    icon: Users,
    description: "Vetted healthcare professionals, certified pharmacists, operational supervisors, and administrative personnel.",
  },
  {
    number: "04",
    title: "Process",
    icon: Workflow,
    description: "Standard Operating Procedures (SOPs), statutory regulatory compliance, error-minimizing clinical workflows.",
  },
  {
    number: "05",
    title: "Management & Execution",
    icon: BarChart,
    description: "Single-point governance, MIS telemetry, executive KPI dashboards, and daily operational accountability.",
  },
];

const WORKING_STEPS = [
  {
    step: "01",
    title: "Think",
    subtitle: "Understand the problem",
    desc: "Diagnostic assessment of operational gaps, supply bottlenecks, and organizational priorities.",
  },
  {
    step: "02",
    title: "Build",
    subtitle: "Design the solution",
    desc: "Engineering custom software, rate contracts, SOPs, and delivery architecture.",
  },
  {
    step: "03",
    title: "Deploy",
    subtitle: "People & systems",
    desc: "Hands-on rollout of physical supply lines, software integrations, and trained personnel.",
  },
  {
    step: "04",
    title: "Manage",
    subtitle: "Support operations",
    desc: "Daily operational execution, vendor governance, pharmacy management, and SLA tracking.",
  },
  {
    step: "05",
    title: "Improve",
    subtitle: "Measure & optimize",
    desc: "Continuous financial MIS reviews, wastage minimization, and iterative enhancements.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Page Hero */}
      <section className="bg-hero-gradient bg-tech-grid py-16 lg:py-24 border-b border-border/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: "About Us" }]}
            className="mb-8"
          />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/20 text-blue-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About DavaTrack Digital LLP</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.08]">
              Building the Infrastructure
              <br />
              <span className="text-blue-accent">Behind Better Healthcare.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              <b className="text-navy font-bold">DavaTrack Digital LLP</b> is building a new kind of healthcare solutions company — combining supply chain, technology, people, processes and operational execution.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-surface-soft to-white rounded-3xl p-8 sm:p-10 border border-border shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-accent/10 text-blue-accent text-xs font-extrabold uppercase tracking-wider mb-4">
                  <Target className="w-3.5 h-3.5" />
                  <span>Our Vision</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-4">
                  To Become a Trusted Healthcare Solutions & Execution Partner.
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  We envision a healthcare ecosystem where organizations can approach one partner with a requirement and receive a practical, end-to-end solution.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/80">
                <div className="text-xs font-extrabold text-navy uppercase tracking-wider mb-3">
                  5 Core Strategic Anchors:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-bold text-navy-700">
                  <div className="bg-white p-2.5 rounded-xl border border-border flex items-center gap-2">
                    <span className="text-blue-accent font-black">01</span> Supply
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-border flex items-center gap-2">
                    <span className="text-blue-accent font-black">02</span> Technology
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-border flex items-center gap-2">
                    <span className="text-blue-accent font-black">03</span> People
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-border flex items-center gap-2">
                    <span className="text-blue-accent font-black">04</span> Process
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-border flex items-center gap-2 col-span-2 sm:col-span-1">
                    <span className="text-blue-accent font-black">05</span> Execution
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-navy-50/70 to-white rounded-3xl p-8 sm:p-10 border border-border shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy text-white text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
                  <Building2 className="w-3.5 h-3.5 text-cyan-accent" />
                  <span>Our Mission</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-4">
                  Make Healthcare Operations More Connected, Reliable & Efficient.
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  We aim to help healthcare organizations improve operational efficiency, strengthen supply chains, reduce fragmentation, improve visibility, standardize workflows, build better digital systems, access the right resources and create better patient experiences.
                </p>
              </div>

              {/* What Makes Us Different Box */}
              <div className="mt-8 p-6 rounded-2xl bg-navy text-white shadow-md border border-navy-700">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-accent mb-1">
                  What Makes Us Different?
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  “We Don’t Stop at Digital.”
                </h3>
                <p className="text-xs text-navy-200 leading-relaxed">
                  We look at the complete requirement — not just one component. If the solution needs software, people, supply, SOPs or operational support, we build the appropriate combination.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 5 Pillars Architectural Visual System */}
      <section className="py-20 lg:py-28 bg-surface-soft border-y border-border/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-accent/10 text-blue-accent text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Interconnected Healthcare Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              The 5 Pillars of DavaTrack Execution
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Every healthcare engagement harmonizes these five foundational layers to ensure total operational integrity.
            </p>
          </div>

          {/* 5 Pillars Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="bg-white rounded-3xl p-6 border border-border shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-navy-200 group-hover:text-blue-accent transition-colors">
                        {pillar.number}
                      </span>
                      <div className="p-3 rounded-2xl bg-navy-50 text-blue-accent group-hover:bg-navy group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-navy mb-2.5">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-bold text-blue-accent">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Active Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Working Model: Think -> Build -> Deploy -> Manage -> Improve */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy text-xs font-bold uppercase tracking-wider">
              <span>Operational Execution Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Think → Build → Deploy → Manage → Improve
            </h2>
            <p className="text-sm sm:text-base text-muted">
              We start with the problem, build the right solution, arrange the required resources, support execution and continuously improve the outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WORKING_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-surface-soft rounded-2xl p-6 border border-border flex flex-col justify-between hover:border-blue-accent/30 transition-colors"
              >
                <div>
                  <span className="text-xs font-black text-blue-accent block mb-1">
                    STEP {step.step}
                  </span>
                  <h3 className="text-xl font-extrabold text-navy">
                    {step.title}
                  </h3>
                  <div className="text-xs font-bold text-navy-600 mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Box */}
          <div className="mt-16 text-center bg-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1">
              <h3 className="text-2xl font-bold">Ready to discuss your healthcare operations?</h3>
              <p className="text-sm text-navy-200">Our solution team will analyze your requirements and provide a structured operational plan.</p>
            </div>
            <Button
              href="/inquiry"
              variant="cyan"
              size="lg"
              icon="arrow"
              className="flex-shrink-0 font-bold"
            >
              Discuss Your Requirement
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
