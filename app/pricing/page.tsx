"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { useCalendly } from "@/components/CalendlyProvider";

export default function PricingPage() {
  const { openCalendly } = useCalendly();
  const soloTiers = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      courses: "1 course",
      students: "50 students",
      features: [
        "5-min setup",
        "Unlimited problems and generation",
        "Hints-only mode",
        "Step-by-step guidance mode",
      ],
      cta: "Start Trial",
      highlighted: false,
    },
    {
      name: "Plus",
      price: "$49",
      period: "month",
      courses: "3 courses",
      students: "150 students",
      features: [
        "Everything in Starter",
        "Dedicated private vector index",
        "All teaching modes",
        "Basic analytics",
      ],
      cta: "Start Trial",
      highlighted: true,
    },
    {
      name: "Pro",
      price: "$99",
      period: "month",
      courses: "Unlimited courses",
      students: "Unlimited students",
      features: [
        "Everything in Plus",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
      ],
      cta: "Start Trial",
      highlighted: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-b from-white to-neutral-light">
        <FadeIn delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Simple Plans for Every Teaching Context
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary/80 mb-6 sm:mb-8 leading-relaxed">
              We offer simple plans for individual instructors, departments/campuses, and publishers
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Solo Instructor Section */}
      <section className="section-container" id="solo">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <div className="text-center mb-12">
            <p className="section-label">Solo Instructor</p>
            <h2 className="section-title">Plans for Individual Instructors</h2>
            <p className="section-intro mx-auto">
              Start with one course and scale as needed.               All plans include zero-log processing and IP protection.
            </p>
          </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {soloTiers.map((tier, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card
                  className={`h-full flex flex-col transition-all duration-300 ${
                    tier.highlighted
                      ? "border-2 border-accent-gold shadow-2xl bg-white relative overflow-hidden"
                      : "hover:shadow-xl hover:-translate-y-1 hover:border-accent-teal/30"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-accent-gold text-white 
                                      px-5 py-2 rounded-full text-sm font-bold shadow-lg 
                                      border-2 border-white">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {tier.highlighted && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold" />
                  )}

                  <div className="flex-1 flex flex-col">
                    <div className="text-center mb-8 pb-6 border-b border-neutral-border">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4">
                        {tier.name}
                      </h3>
                      <div className="mb-3">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-gold leading-tight">
                          {tier.price}
                        </p>
                        <p className="text-xs sm:text-sm text-primary/60 mt-1">per {tier.period}</p>
                      </div>
                    </div>

                    <div className="mb-6 space-y-4 flex-1">
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-border">
                        <span className="text-primary/70">Courses</span>
                        <span className="font-semibold text-primary">{tier.courses}</span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-border">
                        <span className="text-primary/70">Students</span>
                        <span className="font-semibold text-primary">{tier.students}</span>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-primary mb-3">Features:</p>
                        <ul className="space-y-2">
                          {tier.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm text-primary/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto pt-4">
                      <Button
                        variant={tier.highlighted ? "primary" : "secondary"}
                        onClick={openCalendly}
                        className="w-full"
                      >
                        {tier.cta}
                      </Button>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Department / Campus Section */}
      <section className="section-container bg-neutral-light" id="department">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <div className="text-center mb-12">
            <p className="section-label">Department / Campus</p>
            <h2 className="section-title">For Multi-Section Courses</h2>
            <p className="section-intro mx-auto">
              For departments and institutions with multiple instructors
            </p>
          </div>
          </FadeIn>

          <Card className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-teal mb-2">
                From $2,000/year
              </p>
              <p className="text-base sm:text-lg text-primary/70 mb-6">
                Or $8,000/year for multi-section departments (up to 10 instructors, 2000 students)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-primary mb-3">Includes:</h3>
                <ul className="space-y-2">
                  {[
                    "Everything in Solo plans",
                    "Department console & analytics",
                    "Default AI policies & guardrails",
                    "LMS & SSO integration support",
                    "Faculty training sessions (live + recorded)",
                    "Dedicated customer success contact",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-primary/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Campus Pricing:</h3>
                <p className="text-primary/80 mb-4">
                  For institutions standardizing on safe AI support across programs:
                </p>
                <p className="text-2xl font-bold text-accent-teal mb-4">
                  From $30,000/year
                </p>
                <p className="text-sm text-primary/70">
                  Scaled to size. Includes everything in Department plan plus campus-wide adoption 
                  map, cross-department policy management, quarterly impact reviews, and optional 
                  publisher joint pilots.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button variant="primary" onClick={openCalendly}>
                Schedule a Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Publisher Platform Section */}
      <section className="section-container" id="publisher">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <div className="text-center mb-12">
            <p className="section-label">Publisher Platform</p>
            <h2 className="section-title">White-Label AI Companions</h2>
            <p className="section-intro mx-auto">
              Turn your titles into official AI companion products
            </p>
          </div>
          </FadeIn>

          <Card className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-teal mb-2">
                Platform Fee + Per-Student
              </p>
              <p className="text-base sm:text-lg text-primary/70 mb-6">
                Per-title platform fee or minimum, plus per-student activation fee (e.g., $10–$15) with revenue share
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-primary mb-4">Includes:</h3>
              <ul className="space-y-3">
                {[
                  "White-label companions per title",
                  "Publisher console & analytics",
                  "Author & editorial onboarding",
                  "Co-marketing with adopting institutions",
                  "IP-safe content processing",
                  "Revenue share model",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Button variant="primary" onClick={openCalendly}>
                Discuss Partnerships
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="section-container bg-neutral-light">
        <FadeIn delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
              All Plans Include
            </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Zero-log processing",
              "Instructor IP protection",
              "Dedicated support",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent-teal mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-primary/80 font-medium">{item}</span>
              </div>
            ))}
          </div>
            <p className="text-primary/70 mt-6">
              Course-aligned AI tutor is ready after uploading course content (5-30 mins)
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

