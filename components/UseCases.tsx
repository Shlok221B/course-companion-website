import React from "react";
import Card from "./ui/Card";
import FadeIn from "./ui/FadeIn";

export default function UseCases() {
  const useCases = [
    {
      role: "Community College Instructor",
      course: "Introduction to Chemistry",
      quote:
        "My students kept sending the same questions—'What's going to be on the test?' 'What do you mean by X?' Now they ask Course Companion first. It cites the exact section in my slides and the textbook. I still get emails, but far fewer, and they're deeper questions.",
      name: "Dr. Sarah Martinez",
      institution: "Riverside Community College",
    },
    {
      role: "University Department Chair",
      course: "Multi-section Calculus",
      quote:
        "We deployed Course Companion across 8 sections with different instructors. The department console lets us see which topics students struggle with most, and we can adjust our curriculum accordingly. Faculty love the time savings.",
      name: "Prof. James Chen",
      institution: "State University",
    },
    {
      role: "Publisher Partnership",
      course: "Organic Chemistry Textbook",
      quote:
        "Our authors were nervous about AI tools scraping their content. With Course Companion, we can offer an official tool for each title, under our brand and terms. Students get better support, and we protect our IP.",
      name: "Emily Rodriguez",
      institution: "Academic Press",
    },
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <p className="section-label">Proof & Use Cases</p>
        <h2 className="section-title">
          Real Results from Real Instructors
        </h2>
        <p className="section-intro mx-auto">
          See how Course Companion is transforming teaching across different contexts
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <FadeIn key={index} delay={index * 100}>
            <Card className="flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent-teal/10 text-accent-teal text-sm font-semibold rounded">
                  {useCase.role}
                </span>
              </div>

              <p className="text-primary/80 italic mb-4 flex-grow">
                "{useCase.quote}"
              </p>

              <div className="border-t border-neutral-border pt-4">
                <p className="font-semibold text-primary">{useCase.name}</p>
                <p className="text-sm text-primary/60">{useCase.course}</p>
                <p className="text-sm text-primary/60">{useCase.institution}</p>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

