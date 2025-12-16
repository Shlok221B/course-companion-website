import React from "react";
import TrustTag from "./ui/TrustTag";
import Button from "./ui/Button";
import Divider from "./ui/Divider";

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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent-teal uppercase tracking-wider mb-3">
            Trust & Security
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Built for the People Who Protect Student Data
          </h2>
          <p className="text-lg text-white/80 mb-6">
            We don't just claim to protect your content—we measure it
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {trustFeatures.map((feature, index) => (
            <div key={index}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-accent-teal"
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
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{feature.label}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </div>
              {index < trustFeatures.length - 1 && (
                <Divider className="my-6 border-white/10" />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-card-lg p-6 backdrop-blur-sm">
          <div className="flex flex-wrap gap-3 mb-6">
            <TrustTag>Per-course isolation</TrustTag>
            <TrustTag>Citation-required</TrustTag>
            <TrustTag>No training on IP</TrustTag>
            <TrustTag>Configurable retention</TrustTag>
          </div>

          <div className="text-center">
            <p className="text-white/80 mb-4">
              Learn more about our security architecture and compliance
            </p>
            <Button variant="secondary" href="#trust-center">
              Visit Trust Center →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

