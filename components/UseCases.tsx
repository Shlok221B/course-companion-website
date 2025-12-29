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
      {/* Enhanced Header with Better Spacing */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <p className="section-label">Proof & Use Cases</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
          Real Results from Real Instructors
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-primary/80 max-w-2xl mx-auto leading-relaxed">
          See how Course Companion is transforming teaching across different contexts
        </p>
      </div>

      {/* Enhanced Grid with Better Spacing */}
      <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {useCases.map((useCase, index) => (
          <FadeIn key={index} delay={index * 100}>
            <Card className="flex flex-col h-full transition-all duration-300 
                           hover:shadow-xl hover:-translate-y-1 hover:border-accent-teal/30 group">
              <div className="flex-1 flex flex-col">
                {/* Enhanced Role Badge */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-accent-teal/10 text-accent-teal 
                                 text-sm font-semibold rounded-full border border-accent-teal/20
                                 group-hover:bg-accent-teal/15 group-hover:border-accent-teal/30 
                                 transition-all duration-300">
                    {useCase.role}
                  </span>
                </div>

                {/* Enhanced Quote Presentation */}
                <div className="mb-8 flex-grow">
                  <div className="relative">
                    {/* Decorative quote mark */}
                    <div className="absolute -top-2 -left-2 text-6xl text-accent-teal/10 font-serif leading-none">
                      "
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-primary/90 leading-relaxed relative z-10 
                                 font-medium not-italic">
                      {useCase.quote}
                    </p>
                  </div>
                </div>

                {/* Enhanced Author Information */}
                <div className="border-t border-neutral-border pt-6 mt-auto">
                  <p className="text-base sm:text-lg font-bold text-primary mb-1">
                    {useCase.name}
                  </p>
                  <p className="text-sm font-medium text-primary/70 mb-1">
                    {useCase.course}
                  </p>
                  <p className="text-sm text-primary/60">
                    {useCase.institution}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

