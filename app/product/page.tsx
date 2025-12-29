"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { useCalendly } from "@/components/CalendlyProvider";

export default function ProductPage() {
  const { openCalendly } = useCalendly();
  return (
    <>
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-b from-white to-neutral-light">
        <FadeIn delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Course Companion is a vertical AI copilot for higher ed teaching
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary/80 mb-6 sm:mb-8 leading-relaxed">
              Here's what each group gets
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Section 1 - For Instructors */}
      <section className="section-container" id="instructors">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <div className="text-center mb-12">
            <p className="section-label">For Instructors</p>
            <h2 className="section-title">Built for Individual Teaching</h2>
            <p className="section-intro mx-auto">
              Everything you need to create a course-aligned AI tutor that supports your teaching method
            </p>
          </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <FadeIn delay={0}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Student Companion: Ask Your Course Companion
                </h3>
                <p className="text-primary/80 mb-4 leading-relaxed">
                  Students get instant, course-specific help that cites your exact materials. 
                  The AI tutor references your slides, textbook sections, and course notes to provide 
                  answers that align with your teaching approach.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  No more repetitive questions about test dates or assignment details. Students get 
                  immediate clarification while you focus on deeper teaching moments.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={100}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Guardrails & Integrity
                </h3>
                <p className="text-primary/80 mb-4 leading-relaxed">
                  Configure teaching modes that match your philosophy: hints-only, Socratic questions, 
                  step-by-step guidance, or full solutions. Set exam-safe modes that prevent revealing 
                  test content.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  The AI follows your method and terminology, ensuring students learn your approach 
                  rather than shortcuts from generic AI tools.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Instructor Workspace
                </h3>
                <p className="text-primary/80 mb-4 leading-relaxed">
                  Upload your course materials in minutes. The system processes your syllabus, slides, 
                  practice problems, and notes into a private, temporary index. You control what 
                  students can access and how the AI responds.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  Customize the AI's voice to match your terminology and teaching style. Set up 
                  multiple courses, each with its own isolated environment.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Class Insights
                </h3>
                <p className="text-primary/80 mb-4 leading-relaxed">
                  Track common questions, identify knowledge gaps, and understand how students engage 
                  with your materials. See which topics generate the most confusion and adjust your 
                  teaching accordingly.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  Get analytics on student usage patterns, question types, and learning outcomes. 
                  Use data-driven insights to improve your course design and teaching effectiveness.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 2 - For Departments & Institutions */}
      <section className="section-container bg-neutral-light" id="departments">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <div className="text-center mb-12">
            <p className="section-label">For Departments & Institutions</p>
            <h2 className="section-title">Department Console & Analytics</h2>
            <p className="section-intro mx-auto">
              Manage multiple courses, standardize policies, and track adoption across your department
            </p>
          </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Adoption Map
                </h3>
                <p className="text-primary/80 leading-relaxed">
                  Visualize which courses and instructors are using Course Companion across your 
                  department. Track adoption rates, usage patterns, and identify opportunities for 
                  expansion.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={100}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Policy Configuration
                </h3>
                <p className="text-primary/80 leading-relaxed">
                  Set department-wide default policies for AI guardrails, teaching modes, and integrity 
                  settings. Individual instructors can customize within these boundaries.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Integrity & Training Insights
                </h3>
                <p className="text-primary/80 leading-relaxed">
                  Monitor academic integrity metrics across courses. Identify patterns, provide 
                  training resources, and ensure consistent standards department-wide.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  LMS & SSO Integration
                </h3>
                <p className="text-primary/80 leading-relaxed">
                  Seamless integration with Canvas, Blackboard, Moodle, and other major LMS platforms. 
                  Single sign-on (SSO) support for easy access. No separate login required for 
                  students or faculty.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={400}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Rollout Strategy
                </h3>
                <p className="text-primary/80 leading-relaxed">
                  Start with a pilot program in select courses, then expand based on success metrics. 
                  We provide training, support, and best practices to ensure smooth adoption across 
                  your department.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3 - For Publishers */}
      <section className="section-container" id="publishers">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <div className="text-center mb-12">
            <p className="section-label">For Publishers</p>
            <h2 className="section-title">White-Label AI Companions</h2>
            <p className="section-intro mx-auto">
              Turn your titles into official AI companion products under your brand
            </p>
          </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <FadeIn delay={0}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  White-Label Companions Per Title
                </h3>
                <p className="text-primary/80 mb-4 leading-relaxed">
                  Create official AI companions for each of your textbook titles. Students get 
                  course-specific support that's branded as your product, not a generic AI tool.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  Each title gets its own isolated environment, ensuring content from one book never 
                  leaks into another. Your authors maintain control over their intellectual property.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={100}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Title Analytics
                </h3>
                <p className="text-primary/80 mb-4 leading-relaxed">
                  Publisher console provides insights into how students use your titles. See which 
                  chapters generate the most questions, identify areas where students struggle, and 
                  understand engagement patterns.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  Use data to improve future editions, create supplementary materials, and better 
                  support instructors using your content.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Content Safety Controls
                </h3>
                <p className="text-primary/80 mb-4 leading-relaxed">
                  Advanced IP protection ensures your content never trains external AI models. 
                  Zero-log processing means materials are processed temporarily and then deleted.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  Configure guardrails that prevent students from extracting full solutions or 
                  exam content. Your intellectual property stays protected.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  Revenue Share Model
                </h3>
                <p className="text-primary/80 mb-4 leading-relaxed">
                  Flexible pricing models that work for your business. Platform fees plus per-student 
                  activation, with revenue sharing options. Co-marketing support helps drive adoption 
                  at institutions.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  <a href="/about#contact" className="text-accent-teal hover:text-accent-teal/80 font-medium">
                    Contact us
                  </a> to discuss partnership models tailored to your titles and market.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-neutral-light">
        <FadeIn delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Ready to Get Started?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={openCalendly}>
              Start Instructor Trial
            </Button>
            <Button variant="secondary" href="/pricing">
              View Pricing
            </Button>
          </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

