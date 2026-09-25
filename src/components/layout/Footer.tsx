import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Mail, Phone, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#122631] text-white relative overflow-hidden pt-20 pb-12 border-t border-[#266573]/30">
      {/* Soft glowing ambient reflections */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#266573]/25 via-[#6BB0BF]/10 to-transparent rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-96 h-96 bg-[#6BB0BF]/5 rounded-full blur-[130px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================
            5-COLUMN DIRECTORY GRID
            ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group focus-visible:outline-none">
              <Image
                src="/logo-navbar.png"
                alt="DavaTrack Digital LLP"
                width={180}
                height={40}
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(107,176,191,0.20)]"
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#CAD7D0]/80 leading-relaxed max-w-sm">
              The Healthcare Solutions & Operational Execution Partner. We unite{" "}
              <b className="text-white font-semibold">
                Supply, Technology, People, Processes, Management and Execution
              </b>{" "}
              into one dependable operational backbone.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-[#6BB0BF]">
              <span className="px-2.5 py-1 rounded-full bg-[#266573]/25 border border-[#6BB0BF]/20">Supply</span>
              <span className="px-2.5 py-1 rounded-full bg-[#266573]/25 border border-[#6BB0BF]/20">Technology</span>
              <span className="px-2.5 py-1 rounded-full bg-[#266573]/25 border border-[#6BB0BF]/20">People</span>
              <span className="px-2.5 py-1 rounded-full bg-[#266573]/25 border border-[#6BB0BF]/20">Process</span>
              <span className="px-2.5 py-1 rounded-full bg-[#266573]/25 border border-[#6BB0BF]/20">Execution</span>
            </div>
          </div>

          {/* Solutions Hub */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#6BB0BF] font-bold">
              Solutions
            </div>
            <ul className="space-y-2.5 text-xs text-[#CAD7D0]/70">
              <li>
                <Link href="/solutions/medical-supply-delivery" className="hover:text-[#6BB0BF] transition-colors">
                  Supply & Delivery (#01)
                </Link>
              </li>
              <li>
                <Link href="/solutions/pharmacy-management" className="hover:text-[#6BB0BF] transition-colors">
                  Pharmacy Management (#02)
                </Link>
              </li>
              <li>
                <Link href="/solutions/apps-and-software" className="hover:text-[#6BB0BF] transition-colors">
                  Apps & Software (#03)
                </Link>
              </li>
              <li>
                <Link href="/solutions/accounting-mis" className="hover:text-[#6BB0BF] transition-colors">
                  Accounting & MIS (#04)
                </Link>
              </li>
              <li>
                <Link href="/solutions/patient-engagement" className="hover:text-[#6BB0BF] transition-colors">
                  Patient Engagement (#05)
                </Link>
              </li>
              <li>
                <Link href="/solutions/vendor-discovery" className="hover:text-[#6BB0BF] transition-colors">
                  Vendor Discovery (#06)
                </Link>
              </li>
              <li>
                <Link href="/solutions/manufacturing" className="hover:text-[#6BB0BF] transition-colors">
                  Manufacturing (#07)
                </Link>
              </li>
            </ul>
          </div>

          {/* Operations & Governance */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#6BB0BF] font-bold">
              Operations & Tech
            </div>
            <ul className="space-y-2.5 text-xs text-[#CAD7D0]/70">
              <li>
                <Link href="/solutions/hr-staffing" className="hover:text-[#6BB0BF] transition-colors">
                  HR & Clinical Staffing (#08)
                </Link>
              </li>
              <li>
                <Link href="/solutions/claims-support" className="hover:text-[#6BB0BF] transition-colors">
                  Claims & Insurance Support (#09)
                </Link>
              </li>
              <li>
                <Link href="/solutions/custom-healthcare-solutions" className="hover:text-[#6BB0BF] transition-colors">
                  Custom Healthcare Solutions (#10)
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#6BB0BF] transition-colors text-white font-semibold flex items-center gap-1.5">
                  Partner Operations Portal <ArrowRight className="w-3.5 h-3.5 text-[#6BB0BF]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#6BB0BF] font-bold">
              Company
            </div>
            <ul className="space-y-2.5 text-xs text-[#CAD7D0]/70">
              <li>
                <Link href="/about" className="hover:text-[#6BB0BF] transition-colors">
                  About DavaTrack
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#6BB0BF] transition-colors">
                  Customer Stories & Impact
                </Link>
              </li>
              <li>
                <Link href="/inquiry" className="hover:text-[#6BB0BF] transition-colors">
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#6BB0BF] transition-colors">
                  Hospital & Vendor Login
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ============================================================
            BOTTOM BAR: COPYRIGHT & COMPLIANCE
            ============================================================ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CAD7D0]/60 pt-8">
          <div>
            © {new Date().getFullYear()} DavaTrack Digital LLP. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#CAD7D0]/50">ABDM Compliant</span>
            <span className="text-[#CAD7D0]/50">NABH Aligned</span>
            <span className="text-[#CAD7D0]/50">CDSCO Verified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
