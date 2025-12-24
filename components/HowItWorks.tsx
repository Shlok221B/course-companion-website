"use client";

import React, { useMemo, useState } from "react";
import FadeIn from "./ui/FadeIn";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Course Materials",
      description:
        "Add your syllabus, slides, practice problems, and course notes. We process them in a private, temporary index.",
    },
    {
      number: "02",
      title: "Set Your Rules",
      description:
        "Choose your teaching mode: hints-only, Socratic questions, step-by-step guidance, or full solutions. Configure guardrails to match your approach.",
    },
    {
      number: "03",
      title: "Activate and Get Insights",
      description:
        "Share the AI tutor with your students. Monitor usage, track common questions, and get analytics on learning patterns—all while protecting your IP.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  const progressPct = useMemo(() => {
    if (steps.length <= 1) return 0;
    return (activeIndex / (steps.length - 1)) * 100;
  }, [activeIndex, steps.length]);

  return (
    <section className="section-container bg-neutral-light">
      <FadeIn delay={0}>
        <div className="text-center mb-12">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">Get Started in Minutes</h2>
          <p className="section-intro mx-auto">
            From upload to activation, Course Companion is designed for speed and simplicity
          </p>
        </div>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Stepper */}
          <FadeIn delay={100}>
            <div>
            <div
              className="relative"
              role="tablist"
              aria-label="How It Works steps"
              onKeyDown={(e) => {
                if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
                e.preventDefault();
                setActiveIndex((cur) => {
                  const next =
                    e.key === "ArrowRight"
                      ? Math.min(cur + 1, steps.length - 1)
                      : Math.max(cur - 1, 0);
                  return next;
                });
              }}
            >
              {/* Connection line + progress */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-accent-teal opacity-15" />
              <div className="hidden md:block absolute top-8 left-0 h-0.5 bg-accent-teal opacity-40 transition-all duration-500 ease-out"
                   style={{ width: `${progressPct}%` }}
              />

              <div className="grid md:grid-cols-3 gap-6 relative">
                {steps.map((step, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      role="tab"
                      id={`howitworks-tab-${index}`}
                      aria-selected={isActive}
                      aria-controls={`howitworks-panel`}
                      onClick={() => setActiveIndex(index)}
                      className={`text-left rounded-card-lg p-4 md:p-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-teal/40 ${
                        isActive
                          ? "bg-white border border-neutral-border shadow-lg"
                          : "bg-white/60 border border-transparent hover:bg-white hover:border-neutral-border"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm relative z-10 transition-all ${
                            isActive
                              ? "bg-accent-teal shadow-lg"
                              : "bg-white border border-neutral-border"
                          }`}
                        >
                          <span
                            className={`font-bold ${
                              isActive ? "text-white" : "text-primary"
                            }`}
                          >
                            {step.number}
                          </span>
                        </div>

                        <span
                          className={`text-xs font-mono uppercase tracking-wider ${
                            isActive ? "text-accent-teal" : "text-primary/40"
                          }`}
                        >
                          Step
                        </span>
                      </div>

                      <div className="mt-4">
                        <h3
                          className={`text-base md:text-lg font-bold leading-snug ${
                            isActive ? "text-primary" : "text-primary/80"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm text-primary/60 mt-2 line-clamp-2">
                          {step.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          </FadeIn>

          {/* Details panel */}
          <FadeIn delay={200}>
          <div
            id="howitworks-panel"
            role="tabpanel"
            aria-labelledby={`howitworks-tab-${activeIndex}`}
            className="bg-white border border-neutral-border rounded-card-lg p-6 shadow-lg cc-bubbleIn min-h-[190px]"
            key={active.number}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-teal flex items-center justify-center shadow-md">
                  <span className="text-white font-bold">{active.number}</span>
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-primary/50">
                  Active step
                </p>
              </div>

              <p className="text-xs font-mono text-primary/40">
                Use ← → keys
              </p>
            </div>

            <h3 className="text-xl font-bold text-primary mb-3">
              {active.title}
            </h3>
            <p className="text-primary/70 leading-relaxed">{active.description}</p>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

