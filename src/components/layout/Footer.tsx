import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { FOOTER_LINKS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden pt-16 lg:pt-20 pb-12 border-t border-navy-800">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Consultation Callout */}
        <div className="bg-gradient-to-r from-navy-800/90 to-navy-700/80 rounded-2xl p-8 lg:p-10 border border-navy-600/40 shadow-xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-accent">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Have an Active Healthcare Requirement?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tell us the problem. We’ll build the execution model.
            </h3>
            <p className="text-sm text-navy-200 max-w-xl">
              From single-hospital pharmaceutical procurement to turnkey multi-facility operational management.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button
              href="/inquiry"
              variant="cyan"
              size="lg"
              icon="arrow"
              className="rounded-xl shadow-lg"
            >
              Discuss Your Requirement
            </Button>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-navy-800/80">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 inline-flex">
              <div className="w-8 h-8 rounded-xl bg-blue-accent flex items-center justify-center text-white font-black text-base shadow-sm">
                <span>D</span>
                <span className="text-cyan-accent text-xs -ml-0.5">T</span>
              </div>
              <div className="flex flex-col">
                <div className="font-extrabold text-xl tracking-tight text-white leading-none">
                  Dava<span className="text-cyan-accent">Track</span>
                </div>
                <div className="text-[8px] font-bold tracking-[0.25em] text-navy-300 uppercase mt-0.5">
                  DIGITAL LLP
                </div>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-navy-200 leading-relaxed max-w-sm">
              Healthcare Solutions & Execution Partner. We bring together{" "}
              <b className="text-white font-semibold">
                Supply, Technology, People, Process, Management and Execution
              </b>{" "}
              to build dependable healthcare operations.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-cyan-accent">
              <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700">Supply</span>
              <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700">Technology</span>
              <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700">People</span>
              <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700">Process</span>
              <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700">Execution</span>
            </div>
          </div>

          {/* Solution Domains */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              Solutions Hub
            </div>
            <ul className="space-y-2 text-xs text-navy-200">
              <li>
                <Link href="/solutions/medical-supply-delivery" className="hover:text-cyan-accent transition-colors">
                  Medical Supply & Delivery
                </Link>
              </li>
              <li>
                <Link href="/solutions/vendor-discovery" className="hover:text-cyan-accent transition-colors">
                  Vendor Discovery & Procurement
                </Link>
              </li>
              <li>
                <Link href="/solutions/pharmacy-management" className="hover:text-cyan-accent transition-colors">
                  Pharmacy Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/manufacturing" className="hover:text-cyan-accent transition-colors">
                  Medicine Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/solutions/custom-healthcare-solutions" className="hover:text-cyan-accent transition-colors font-semibold text-white">
                  Custom Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Healthcare Admin & Care */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              Operations & Tech
            </div>
            <ul className="space-y-2 text-xs text-navy-200">
              <li>
                <Link href="/solutions/apps-and-software" className="hover:text-cyan-accent transition-colors">
                  Apps & Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/solutions/digital-workflows" className="hover:text-cyan-accent transition-colors">
                  Digital Workflows
                </Link>
              </li>
              <li>
                <Link href="/solutions/accounting-mis" className="hover:text-cyan-accent transition-colors">
                  Accounting, MIS & Reporting
                </Link>
              </li>
              <li>
                <Link href="/solutions/hr-staffing" className="hover:text-cyan-accent transition-colors">
                  HR & Healthcare Staffing
                </Link>
              </li>
              <li>
                <Link href="/solutions/claims-support" className="hover:text-cyan-accent transition-colors">
                  Claims & Insurance Support
                </Link>
              </li>
              <li>
                <Link href="/solutions/patient-engagement" className="hover:text-cyan-accent transition-colors">
                  Patient Engagement
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Connect */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-navy-200">
              <li>
                <Link href="/" className="hover:text-cyan-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-accent transition-colors">
                  About Us & Vision
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-cyan-accent transition-colors">
                  All Solutions
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-cyan-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/inquiry" className="hover:text-cyan-accent transition-colors">
                  Discuss Requirement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-navy-300">
          <div>
            © 2026 DavaTrack Digital LLP. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>DavaTrack is the brand name of DavaTrack Digital LLP.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
