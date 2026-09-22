import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-950 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-accent/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-700/80 border border-navy-600 text-cyan-accent text-xs font-extrabold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start With Your Problem</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Have a Healthcare Requirement?
          <br />
          <span className="text-cyan-accent">We’ll Explore The Right Solution.</span>
        </h2>

        <p className="text-base sm:text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed">
          You don’t have to know whether the solution requires software, manpower, procurement, supply chain, accounting, HR, manufacturing, pharmacy management or something completely different.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/inquiry"
            variant="cyan"
            size="lg"
            icon="arrow"
            className="rounded-xl shadow-xl font-bold"
          >
            Discuss Your Requirement
          </Button>
          <Button
            href="/solutions"
            variant="outline"
            size="lg"
            className="rounded-xl bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            Explore All Solutions
          </Button>
        </div>

        <div className="pt-8 flex flex-wrap justify-center gap-3 text-xs font-bold text-cyan-accent/90">
          <span className="px-3 py-1.5 rounded-lg bg-navy-800/80 border border-navy-700">✓ Supply Chain</span>
          <span className="px-3 py-1.5 rounded-lg bg-navy-800/80 border border-navy-700">✓ Pharmacy Operations</span>
          <span className="px-3 py-1.5 rounded-lg bg-navy-800/80 border border-navy-700">✓ Apps & Software</span>
          <span className="px-3 py-1.5 rounded-lg bg-navy-800/80 border border-navy-700">✓ Healthcare Staffing</span>
          <span className="px-3 py-1.5 rounded-lg bg-navy-800/80 border border-navy-700">✓ Claims & MIS</span>
        </div>
      </div>
    </section>
  );
}
