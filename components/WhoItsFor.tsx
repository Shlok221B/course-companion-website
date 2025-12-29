import React from "react";
import Card from "./ui/Card";
import FadeIn from "./ui/FadeIn";
import BadgePill from "./ui/BadgePill";

function Icon({
  kind,
  className = "",
}: {
  kind: "instructors" | "departments" | "publishers";
  className?: string;
}) {
  const common =
    "w-6 h-6 flex-shrink-0 " + className;

  if (kind === "instructors") {
    // Graduation cap
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path
          d="M3 8.5L12 4l9 4.5-9 4.5L3 8.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M7 10.5v6c0 1.5 2.5 3 5 3s5-1.5 5-3v-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "departments") {
    // Building
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path
          d="M4 20V7l8-3 8 3v13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 20v-8h8v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 9h.01M12 9h.01M15 9h.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Book
  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path
        d="M6 4h10a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 7h8M8 10h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WhoItsFor() {
  const audiences = [
    {
      title: "Instructors",
      tag: "Teaching support",
      kind: "instructors" as const,
      accentBar: "bg-accent-teal",
      iconTone: "text-accent-teal",
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
      tag: "Governed rollout",
      kind: "departments" as const,
      accentBar: "bg-accent-teal",
      iconTone: "text-accent-teal",
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
      tag: "IP-protected AI",
      kind: "publishers" as const,
      accentBar: "bg-accent-teal",
      iconTone: "text-accent-teal",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {audiences.map((audience, index) => (
          <FadeIn key={index} delay={index * 100}>
            <Card className="p-0 overflow-hidden group">
              {/* Accent bar */}
              <div className={`h-1.5 w-full ${audience.accentBar}`} />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 p-2 rounded-lg bg-neutral-light border border-neutral-border group-hover:border-accent-teal/30 transition-colors ${audience.iconTone}`}
                    >
                      <Icon kind={audience.kind} className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary leading-snug">
                        {audience.title}
                      </h3>
                      <div className="mt-2">
                        <BadgePill className="text-primary/80">
                          {audience.tag}
                        </BadgePill>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-primary/70 mb-5">{audience.description}</p>

                <ul className="space-y-3">
                {audience.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span
                      className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 rounded-full border border-neutral-border bg-neutral-light flex items-center justify-center ${audience.iconTone}`}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-primary/80 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
                </ul>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

