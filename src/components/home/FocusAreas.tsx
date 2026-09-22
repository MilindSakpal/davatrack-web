"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Truck, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap/animations";

export function FocusAreas() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.fromTo(
        ".focus-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy text-xs font-extrabold uppercase tracking-wider">
            <span>Two Core Focus Areas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Supply Chain + Healthcare Management
          </h2>
          <p className="text-sm sm:text-base text-muted">
            The dual pillars powering connected, modern, and reliable healthcare delivery.
          </p>
        </div>

        {/* Dual Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Medical Supply Chain */}
          <div className="focus-card bg-gradient-to-br from-surface-soft to-white rounded-3xl p-8 sm:p-10 border border-border shadow-soft flex flex-col justify-between hover:shadow-cardHover transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold tracking-widest text-blue-accent uppercase">
                  01 — MEDICAL SUPPLY CHAIN
                </span>
                <div className="p-3 rounded-2xl bg-blue-accent/10 text-blue-accent">
                  <Truck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-navy mb-3">
                Reliable Supply. Structured Delivery. Better Visibility.
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-6">
                We help healthcare organizations create dependable medicine and healthcare-product supply systems — from vendor discovery and procurement to delivery management and supply tracking.
              </p>

              {/* Tag List */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Medicine Supply",
                  "Vendor Discovery",
                  "Procurement",
                  "Delivery",
                  "Distribution",
                  "Tracking",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-bold bg-white border border-border text-navy-600 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-border/70 flex items-center justify-between">
              <span className="text-xs font-semibold text-muted">Core Logistic Pillar</span>
              <Link
                href="/solutions#supply-chain"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-blue-accent transition-colors"
              >
                <span>Explore Supply Chain</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Healthcare Management & Tech */}
          <div className="focus-card bg-gradient-to-br from-navy-50/50 to-white rounded-3xl p-8 sm:p-10 border border-border shadow-soft flex flex-col justify-between hover:shadow-cardHover transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold tracking-widest text-cyan-accent-dark text-blue-accent uppercase">
                  02 — HEALTHCARE MANAGEMENT & TECH
                </span>
                <div className="p-3 rounded-2xl bg-navy text-cyan-accent">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-navy mb-3">
                The Right People. Process. Technology.
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-6">
                We support healthcare units with pharmacy management, technology, manpower, accounting, HR, manufacturing coordination, claims support, SOPs and patient engagement.
              </p>

              {/* Tag List */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Pharmacy Management",
                  "Apps & Software",
                  "HR & Staffing",
                  "Accounting & MIS",
                  "Claims Support",
                  "Patient Engagement",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-bold bg-white border border-border text-navy-600 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-border/70 flex items-center justify-between">
              <span className="text-xs font-semibold text-muted">Operations & Systems Pillar</span>
              <Link
                href="/solutions#pharmacy-care"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-blue-accent transition-colors"
              >
                <span>Explore Operations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
