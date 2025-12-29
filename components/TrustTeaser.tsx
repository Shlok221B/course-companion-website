import React from "react";
import TrustTag from "./ui/TrustTag";
import Button from "./ui/Button";
import FadeIn from "./ui/FadeIn";

export default function TrustTeaser() {
  const trustFeatures = [
    {
      label: "Zero-Log by Design",
      description:
        "Your course materials are never stored long-term or used to train external AI models.",
    },
    {
      label: "Per-Course Isolation",
      description:
        "Each course operates in its own secure environment. No data sharing between courses.",
    },
    {
      label: "Publisher & IT-Friendly",
      description:
        "FERPA-aligned practices, SOC 2 Type II roadmap, and transparent data handling.",
    },
  ];

  return (
    <section className="section-container bg-gradient-to-b from-panel-dark to-panel-darker text-white" id="trust">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header with Better Spacing */}
        <FadeIn delay={0}>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-accent-teal uppercase tracking-wider mb-3 sm:mb-4">
              Trust & Security
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Built for the People Who Protect Student Data
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              We don't just claim to protect your content—we measure it
            </p>
          </div>
        </FadeIn>

        {/* Enhanced Feature Cards in Grid Layout */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {trustFeatures.map((feature, index) => (
            <FadeIn key={index} delay={index * 100}>
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-card-lg p-8 backdrop-blur-sm 
                         transition-all duration-300 hover:bg-white/8 hover:border-accent-teal/30 
                         hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Enhanced Icon with Circular Background */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-teal/10 
                            border border-accent-teal/20 mb-6 group-hover:bg-accent-teal/20 
                            group-hover:border-accent-teal/40 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-accent-teal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              
              {/* Enhanced Typography */}
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-accent-teal transition-colors duration-300">
                {feature.label}
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
            </FadeIn>
          ))}
        </div>

        {/* Enhanced Bottom CTA Card */}
        <FadeIn delay={300}>
        <div className="bg-white/5 border border-white/10 rounded-card-lg p-8 lg:p-10 backdrop-blur-sm 
                      shadow-2xl relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }} />
          </div>
          
          <div className="relative z-10">
            {/* Enhanced Trust Tags Section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-accent-teal uppercase tracking-wider mb-4 text-center">
                Security Guarantees
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <TrustTag>Per-course isolation</TrustTag>
                <TrustTag>Citation-required</TrustTag>
                <TrustTag>No training on IP</TrustTag>
                <TrustTag>Configurable retention</TrustTag>
              </div>
            </div>

            {/* Visual Separator */}
            <div className="border-t border-white/10 my-8" />

            {/* Enhanced CTA Section */}
            <div className="text-center">
              <p className="text-lg text-white/90 mb-6 font-medium">
                Learn more about our security architecture and compliance
              </p>
              <Button 
                variant="secondary" 
                href="#trust-center"
                className="!bg-accent-teal/10 !border-accent-teal/30 !text-accent-teal 
                         hover:!bg-accent-teal/20 hover:!border-accent-teal/50 hover:!text-white
                         !shadow-lg hover:!shadow-xl hover:!scale-105 !border-2"
              >
                Visit Trust Center →
              </Button>
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

