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
import { InquiryForm } from "@/components/inquiry/InquiryForm";

export const metadata: Metadata = {
  title: "Discuss Your Requirement | Healthcare Solutions Intake",
  description:
    "Tell us your healthcare operational requirement. DavaTrack Digital LLP engineers and executes end-to-end solutions across supply, pharmacy, technology, staffing, and administration.",
};

export default function InquiryPage() {
  return (
    <div className="pt-28 pb-24 bg-[#EDEDE5]">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 border-b border-[#CAD7D0] relative overflow-hidden bg-[#EDEDE5]">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/5 to-transparent rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-bold uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#266573]" />
              <span>Let’s Build Better Healthcare Together</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#122631] leading-[1.08]">
              Tell Us What
              <br />
              <span className="text-[#266573]">You Need.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#122631]/80 leading-relaxed">
              You don’t have to know whether the solution requires software, manpower, procurement, supply chain, accounting, HR, manufacturing, pharmacy management or something completely different.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-[#CAD7D0] shadow-sm max-w-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-[#266573] mb-1">
                The DavaTrack Approach
              </div>
              <div className="text-sm font-extrabold text-[#122631]">
                “Start with the problem. We’ll work with you to understand it and explore the right solution.”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Intake Section: 2 Columns */}
      <section className="py-16 lg:py-24 bg-[#EDEDE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Context, Capabilities, Trust Pillars */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Pillar Badges Card */}
              <div className="bg-[#6EBCBF] rounded-3xl p-8 text-[#122631] shadow-xl space-y-6 border-2 border-white/60 relative overflow-hidden">
                <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-white/30 rounded-full blur-2xl" />
                
                <div className="space-y-2 relative z-10">
                  <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#122631]">
                    Multi-Disciplinary Execution
                  </div>
                  <h2 className="text-2xl font-black text-[#122631]">
                    One Partner. Total Accountability.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#122631]/85 font-medium leading-relaxed">
                    We combine all five core operational layers into an executable roadmap for your facility:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2.5 text-xs font-bold relative z-10">
                  <div className="p-3 rounded-xl bg-white/80 border border-white/90 flex items-center justify-between text-[#122631] shadow-xs">
                    <span>01 • Physical Supply & Logistics</span>
                    <span className="bg-[#122631] text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold">Sourcing & Delivery</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 border border-white/90 flex items-center justify-between text-[#122631] shadow-xs">
                    <span>02 • Technology & Portals</span>
                    <span className="bg-[#122631] text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold">Bespoke Software</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 border border-white/90 flex items-center justify-between text-[#122631] shadow-xs">
                    <span>03 • Healthcare Staffing</span>
                    <span className="bg-[#122631] text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold">Verified Manpower</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 border border-white/90 flex items-center justify-between text-[#122631] shadow-xs">
                    <span>04 • Process & SOPs</span>
                    <span className="bg-[#122631] text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold">Standardization</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 border border-white/90 flex items-center justify-between text-[#122631] shadow-xs">
                    <span>05 • Management & Reporting</span>
                    <span className="bg-[#122631] text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold">MIS & Dashboards</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold relative z-10">
                  <span className="px-2.5 py-1 rounded-md bg-[#122631] text-white">Supply</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#122631] text-white">Technology</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#122631] text-white">People</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#122631] text-white">Process</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#122631] text-white">Execution</span>
                </div>
              </div>

              {/* Consultation Process Expectations */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CAD7D0] shadow-[0_4px_20px_rgba(18,38,49,0.04)] space-y-4">
                <h3 className="text-base font-extrabold text-[#122631]">
                  What Happens After You Submit:
                </h3>
                <div className="space-y-3 text-xs text-[#122631]/70">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#266573]/10 text-[#266573] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <b className="text-[#122631] font-semibold">Initial Intake Review:</b> Our healthcare operations team evaluates your institutional parameters.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#266573]/10 text-[#266573] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <b className="text-[#122631] font-semibold">Discovery Session:</b> A technical and operational consultation to map scope, licensing, and timelines.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#266573]/10 text-[#266573] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <b className="text-[#122631] font-semibold">Custom Blueprint:</b> Structured proposal detailing supply lines, software architecture, or managed staffing.
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
