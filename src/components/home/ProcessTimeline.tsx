"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap, ScrollTrigger } from "@/lib/gsap/animations";

interface Step {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Understand",
    tagline: "Diagnose Healthcare Requirements",
    description: "We analyze the operational bottleneck — whether medical supply, pharmacy workflows, staffing gaps, software needs, or claims friction.",
  },
  {
    number: "02",
    title: "Design",
    tagline: "Architect Practical Solution",
    description: "We formulate an integrated blueprint combining physical supply, technology infrastructure, standard operating procedures, and personnel.",
  },
  {
    number: "03",
    title: "Build & Arrange",
    tagline: "Mobilize Required Resources",
    description: "We configure custom software, secure verified manufacturers, align pharmaceutical supply lines, and recruit vetted healthcare manpower.",
  },
  {
    number: "04",
    title: "Deploy & Execute",
    tagline: "Hands-On Operations",
    description: "We deploy on-ground and digital systems with complete workflow execution, staff onboarding, delivery routing, and statutory adherence.",
  },
  {
    number: "05",
    title: "Measure & Improve",
    tagline: "Continuous Optimization",
    description: "We track clinical SLA compliance, financial MIS dashboards, patient satisfaction metrics, and continuously optimize unit economics.",
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      // Draw horizontal line on scroll
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 80%",
              scrub: 0.8,
            },
          }
        );
      }

      // Stagger animate steps
      gsap.fromTo(
        ".timeline-step-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Motifs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/20 text-blue-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Working Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-[1.12]">
            We Don’t Just Provide Services.
            <br />
            <span className="text-blue-accent">We Build Solutions Around Your Requirement.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Healthcare organizations may need medicines, reliable delivery, vendors, people, software, accounting, pharmacy management, manufacturing support or better patient engagement. DavaTrack brings these capabilities together under one healthcare-focused partner.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Process */}
        <div className="hidden lg:block relative pb-8">
          
          {/* Connecting Line Track & Active Progress Bar */}
          <div className="absolute top-[38px] left-8 right-8 h-1 bg-border rounded-full -z-0">
            <div
              ref={lineRef}
              className="h-full bg-gradient-to-r from-navy via-blue-accent to-cyan-accent rounded-full"
            ></div>
          </div>

          {/* 5 Process Steps Grid */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {STEPS.map((step, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="timeline-step-card flex flex-col group cursor-pointer"
                >
                  {/* Step Node Indicator */}
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 font-extrabold shadow-md border",
                        isCurrent
                          ? "bg-navy text-white border-navy-400 scale-110 shadow-navy/30 ring-4 ring-blue-accent/20"
                          : "bg-white text-navy border-border group-hover:border-blue-accent/40 group-hover:bg-navy-50"
                      )}
                    >
                      <span className={cn("text-xs font-bold", isCurrent ? "text-cyan-accent" : "text-blue-accent")}>
                        STEP
                      </span>
                      <span className="text-lg leading-none">{step.number}</span>
                    </div>
                  </div>

                  {/* Step Card Content */}
                  <div
                    className={cn(
                      "p-5 rounded-2xl border transition-all duration-300 flex-1 flex flex-col",
                      isCurrent
                        ? "bg-surface-soft border-blue-accent/30 shadow-card -translate-y-1"
                        : "bg-white border-border/80 group-hover:border-border group-hover:shadow-soft"
                    )}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-accent mb-1">
                      {step.tagline}
                    </div>
                    <h3 className="text-lg font-extrabold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-blue-accent/30 ml-4 sm:ml-6">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="timeline-step-card relative space-y-2">
              {/* Bullet Node */}
              <div className="absolute -left-[33px] top-1 w-8 h-8 rounded-xl bg-navy text-white flex items-center justify-center text-xs font-bold shadow-md border border-navy-400">
                {step.number}
              </div>

              {/* Card */}
              <div className="bg-surface-soft rounded-2xl p-5 border border-border">
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-accent">
                  {step.tagline}
                </div>
                <h3 className="text-lg font-extrabold text-navy">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1.5 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
