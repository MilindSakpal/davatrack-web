import React from "react";
import { Hero } from "@/components/home/Hero";
import { DavaTrackExperience } from "@/components/home/DavaTrackExperience";
import { StickyImageCurtain } from "@/components/home/StickyImageCurtain";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. DavaTrack Hero Section */}
      <Hero />

      {/* 2. Solutions: 4-Card Bento Mosaic Architecture */}
      <DavaTrackExperience />

      {/* 3. Sticky Plain Parallax Image + About Us Curtain Roll-Over */}
      <StickyImageCurtain />

      {/* 4. Testimonials & Verified Outcome Card */}
      <TestimonialsPreview />

      {/* 5. Bring your benefits into the future CTA Section */}
      <CTASection />
    </>
  );
}
