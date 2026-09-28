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
  MessageSquare
} from "lucide-react";
import { InquiryForm } from "@/components/inquiry/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us & Discuss Your Requirement | DavaTrack Digital LLP",
  description:
    "Tell us your healthcare operational requirement. DavaTrack Digital LLP engineers and executes end-to-end solutions across supply, pharmacy, technology, staffing, and administration.",
};

export default function InquiryPage() {
  return (
    <div className="pt-28 pb-20 bg-[#EEF4F3] min-h-screen relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/5 to-transparent rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-96 h-96 bg-[#6BB0BF]/10 rounded-full blur-[130px]" />

      <section className="py-6 sm:py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Tell Us What You Need + Approach + Direct Touchpoints */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#266573]" />
                <span>Let’s Build Better Healthcare Together</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#122631] leading-[1.1]">
                Tell Us What
                <br />
                <span className="text-[#266573]">You Need.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#122631]/80 leading-relaxed font-normal">
                You don’t have to know whether the solution requires software, manpower, procurement, supply chain, accounting, HR, manufacturing, pharmacy management or something completely different.
              </p>

              {/* The DavaTrack Approach Mandate Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#CAD7D0] shadow-sm space-y-2">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#266573]">
                  The DavaTrack Approach
                </div>
                <div className="text-sm sm:text-base font-extrabold text-[#122631] leading-snug">
                  “Start with the problem. We’ll work with you to understand it and explore the right solution.”
                </div>
              </div>

              {/* Quick Contact & Institutional Guarantee Pill Card */}
              <div className="bg-[#266573] rounded-2xl p-5 sm:p-6 text-white border border-white/20 shadow-md space-y-4 relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -bottom-10 w-32 h-32 bg-[#6EBCBF]/20 rounded-full blur-2xl" />
                
                <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#6EBCBF]">
                  Direct Healthcare Consultation
                </div>

                <div className="space-y-3 text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-3 text-white/95">
                    <Clock className="w-4 h-4 text-[#6EBCBF] flex-shrink-0" />
                    <span>Rapid Response within 24 Hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/95">
                    <ShieldCheck className="w-4 h-4 text-[#6EBCBF] flex-shrink-0" />
                    <span>Non-Disclosure & Data Confidentiality Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/95">
                    <CheckCircle2 className="w-4 h-4 text-[#6EBCBF] flex-shrink-0" />
                    <span>Single-Partner Turnkey Operational Support</span>
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
