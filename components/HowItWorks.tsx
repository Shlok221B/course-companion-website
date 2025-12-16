import React from "react";

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

  return (
    <section className="section-container bg-neutral-light">
      <div className="text-center mb-12">
        <p className="section-label">How It Works</p>
        <h2 className="section-title">Get Started in Minutes</h2>
        <p className="section-intro mx-auto">
          From upload to activation, Course Companion is designed for speed and simplicity
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-teal via-accent-blue to-accent-teal opacity-20"></div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center shadow-lg relative z-10">
                    <span className="text-white font-bold text-xl">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

