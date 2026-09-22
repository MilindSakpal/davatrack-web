import React from "react";
import { Hero } from "@/components/home/Hero";
import { DavaTrackExperience } from "@/components/home/DavaTrackExperience";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { FocusAreas } from "@/components/home/FocusAreas";
import { SolutionCategoriesGrid } from "@/components/home/SolutionCategoriesGrid";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DavaTrackExperience />
      <ProcessTimeline />
      <FocusAreas />
      <SolutionCategoriesGrid />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
