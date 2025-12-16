import React from "react";
import Button from "./ui/Button";
import TrustTag from "./ui/TrustTag";

export default function HeroSection() {
  return (
    <section className="section-container bg-gradient-to-b from-white to-neutral-light">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
              AI for teaching that lives in your LMS
            </h1>
            <p className="text-xl lg:text-2xl text-primary/70">
              Your course companion for professors, departments, and publishers
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="#trial">
              Start Instructor Trial
            </Button>
            <Button variant="secondary" href="#demo">
              Book a Demo
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <TrustTag>Zero-log by design</TrustTag>
            <TrustTag>Course-bounded AI</TrustTag>
            <TrustTag>IP protected</TrustTag>
          </div>
        </div>

        {/* Right Column - Simplified Mockup */}
        <div className="relative">
          <div className="bg-white border-2 border-neutral-border rounded-card-lg shadow-2xl overflow-hidden">
            {/* Chat Panel */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-border pb-3">
                <h3 className="font-semibold text-primary">
                  Course Companion Chat
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                  <span className="text-xs font-mono text-primary/60">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Sample Messages */}
              <div className="space-y-3">
                <div className="bg-neutral-light rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-primary">
                    Can you explain the concept of equilibrium in Chapter 3?
                  </p>
                </div>
                <div className="bg-accent-teal/10 rounded-lg p-3 max-w-[80%] ml-auto border border-accent-teal/20">
                  <p className="text-sm text-primary mb-2">
                    Equilibrium occurs when the forward and reverse reaction
                    rates are equal...
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs bg-white border border-accent-blue/30 text-accent-blue px-2 py-1 rounded">
                      Lecture 4, slide 12
                    </span>
                    <span className="text-xs bg-white border border-accent-blue/30 text-accent-blue px-2 py-1 rounded">
                      Ch. 3, pp. 61-64
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Panel */}
            <div className="bg-panel-dark text-white p-6 space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-accent-teal">
                Governance Status
              </h4>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Scope Lock:</span>
                  <span className="text-accent-teal font-semibold">ON</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Outside Sources:</span>
                  <span className="text-white/60">OFF</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Citation Required:</span>
                  <span className="text-accent-teal font-semibold">ON</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Leakage Risk:</span>
                  <span className="text-accent-teal font-semibold">LOW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

