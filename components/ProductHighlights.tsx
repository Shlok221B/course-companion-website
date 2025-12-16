import React from "react";
import Card from "./ui/Card";
import FadeIn from "./ui/FadeIn";

export default function ProductHighlights() {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      title: "Lives Inside Your LMS",
      description:
        "Seamlessly integrates with Canvas, Blackboard, Moodle, and other major learning management systems. No separate login required.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Course-Bounded AI",
      description:
        "No global training on your content. The AI only references your uploaded materials and can't leak information to other courses or external systems.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Academic Integrity Built-In",
      description:
        "Configurable guardrails ensure students learn your method. Citations required, exam-safe mode, and step-by-step verification prevent shortcuts.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Instructor Analytics",
      description:
        "Track common questions, identify knowledge gaps, and understand how students engage with your materials. Improve your course with data-driven insights.",
    },
  ];

  return (
    <section className="section-container" id="product">
      <div className="text-center mb-12">
        <p className="section-label">Key Features</p>
        <h2 className="section-title">
          Designed for Teaching, Not Just Chatting
        </h2>
        <p className="section-intro mx-auto">
          Every feature is built with instructors, departments, and publishers in mind
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {highlights.map((highlight, index) => (
          <FadeIn key={index} delay={index * 100}>
            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-accent-teal">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-primary/70">{highlight.description}</p>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

