import React from "react";
import type { Metadata } from "next";
import { 
  Sparkles, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MessageSquare,
  Layers
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InquiryForm } from "@/components/inquiry/InquiryForm";

export const metadata: Metadata = {
  title: "Discuss Your Requirement | Healthcare Solutions Intake",
  description:
    "Tell us your healthcare operational requirement. DavaTrack Digital LLP engineers and executes end-to-end solutions across supply, pharmacy, technology, staffing, and administration.",
};

export default function InquiryPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Page Hero */}
      <section className="bg-hero-gradient bg-tech-grid py-16 lg:py-24 border-b border-border/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: "Discuss Your Requirement" }]}
            className="mb-8"
          />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/20 text-blue-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let’s Build Better Healthcare Together</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.08]">
              Tell Us What
              <br />
              <span className="text-blue-accent">You Need.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              You don’t have to know whether the solution requires software, manpower, procurement, supply chain, accounting, HR, manufacturing, pharmacy management or something completely different.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-blue-accent/30 shadow-soft max-w-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-accent mb-1">
                The DavaTrack Approach
              </div>
              <div className="text-sm font-extrabold text-navy">
                “Start with the problem. We’ll work with you to understand it and explore the right solution.”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Intake Section: 2 Columns */}
      <section className="py-16 lg:py-24 bg-surface-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Context, Capabilities, Trust Pillars */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Pillar Badges Card */}
              <div className="bg-navy rounded-3xl p-8 text-white shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-cyan-accent">
                    Multi-Disciplinary Execution
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">
                    One Partner. Total Accountability.
                  </h2>
                  <p className="text-xs sm:text-sm text-navy-200 leading-relaxed">
                    We combine all five core operational layers into an executable roadmap for your facility:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2.5 text-xs font-bold">
                  <div className="p-3 rounded-xl bg-navy-800/90 border border-navy-700 flex items-center justify-between">
                    <span>01 • Physical Supply & Logistics</span>
                    <span className="text-cyan-accent font-normal">Sourcing & Delivery</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-800/90 border border-navy-700 flex items-center justify-between">
                    <span>02 • Technology & Portals</span>
                    <span className="text-cyan-accent font-normal">Bespoke Software</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-800/90 border border-navy-700 flex items-center justify-between">
                    <span>03 • Healthcare Staffing</span>
                    <span className="text-cyan-accent font-normal">Verified Manpower</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-800/90 border border-navy-700 flex items-center justify-between">
                    <span>04 • Process & SOPs</span>
                    <span className="text-cyan-accent font-normal">Standardization</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-800/90 border border-navy-700 flex items-center justify-between">
                    <span>05 • Management & Reporting</span>
                    <span className="text-cyan-accent font-normal">MIS & Dashboards</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-cyan-accent">
                  <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700">Supply</span>
                  <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700">Technology</span>
                  <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700">People</span>
                  <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700">Process</span>
                  <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700">Execution</span>
                </div>
              </div>

              {/* Consultation Process Expectations */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-soft space-y-4">
                <h3 className="text-base font-extrabold text-navy">
                  What Happens After You Submit:
                </h3>
                <div className="space-y-3 text-xs text-muted">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-accent/10 text-blue-accent flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <b className="text-navy font-semibold">Initial Intake Review:</b> Our healthcare operations team evaluates your institutional parameters.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-accent/10 text-blue-accent flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <b className="text-navy font-semibold">Discovery Session:</b> A technical and operational consultation to map scope, licensing, and timelines.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-accent/10 text-blue-accent flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <b className="text-navy font-semibold">Custom Blueprint:</b> Structured proposal detailing supply lines, software architecture, or managed staffing.
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
