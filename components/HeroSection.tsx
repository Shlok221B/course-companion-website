"use client";

import React from "react";
import Button from "./ui/Button";
import TrustTag from "./ui/TrustTag";
import HeroInteractiveMockup from "./HeroInteractiveMockup";
import FadeIn from "./ui/FadeIn";
import { useCalendly } from "./CalendlyProvider";

export default function HeroSection() {
  const { openCalendly } = useCalendly();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 pb-16 lg:pb-24 bg-gradient-to-b from-white to-neutral-light">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <FadeIn delay={0}>
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                AI for teaching that lives in your LMS
              </h1>
              <p className="text-xl lg:text-2xl text-primary/70">
                Your course companion for professors, departments, and publishers
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={openCalendly}>
                Start Instructor Trial
              </Button>
              <Button variant="secondary" onClick={openCalendly}>
                Book a Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <TrustTag>Zero-log by design</TrustTag>
              <TrustTag>Course-bounded AI</TrustTag>
              <TrustTag>IP protected</TrustTag>
            </div>
          </div>
        </FadeIn>

        {/* Right Column - Simplified Mockup */}
        <FadeIn delay={200}>
          <div className="relative w-full lg:max-w-[520px] lg:justify-self-end lg:scale-[0.94] lg:origin-top-right lg:-mt-6">
            <HeroInteractiveMockup />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

