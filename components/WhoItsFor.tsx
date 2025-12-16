import React from "react";
import Card from "./ui/Card";
import FadeIn from "./ui/FadeIn";

export default function WhoItsFor() {
  const audiences = [
    {
      title: "Instructors",
      description:
        "Give your students a course-aligned AI tutor that reinforces your teaching approach",
      benefits: [
        "Reduce repetitive questions while maintaining your teaching voice",
        "Set guardrails: hints-only, step-by-step, or full solutions",
        "Protect your course materials with zero-log processing",
      ],
    },
    {
      title: "Departments & Institutions",
      description:
        "Deploy safe AI support across courses with centralized governance",
      benefits: [
        "Department console for policy management and analytics",
        "LMS and SSO integration for seamless adoption",
        "Faculty training and dedicated support included",
      ],
    },
    {
      title: "Publishers",
      description:
        "Turn your titles into AI companion products with IP protection",
      benefits: [
        "White-label companions for each title under your brand",
        "Title analytics and adoption insights",
        "Revenue share model with content safety controls",
      ],
    },
  ];

  return (
    <section className="section-container" id="who-its-for">
      <div className="text-center mb-12">
        <p className="section-label">Who It's For</p>
        <h2 className="section-title">Built for Everyone in Higher Education</h2>
        <p className="section-intro mx-auto">
          Whether you're teaching one course or managing an entire department,
          Course Companion adapts to your needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {audiences.map((audience, index) => (
          <FadeIn key={index} delay={index * 100}>
            <Card>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {audience.title}
              </h3>
              <p className="text-primary/70 mb-4">{audience.description}</p>
              <ul className="space-y-2">
                {audience.benefits.map((benefit, idx) => (
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
                    <span className="text-sm text-primary/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

