"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { useCalendly } from "@/components/CalendlyProvider";

export default function AboutPage() {
  const { openCalendly } = useCalendly();
  const testimonials = [
    {
      context: "High School / Community College",
      quote:
        "My students kept sending the same questions—'What's going to be on the test?' 'What do you mean by X?' Now they ask Course Companion first. It cites the exact section in my slides and the section of the book. I still get emails, but far fewer, and they're deeper questions.",
    },
    {
      context: "Universities",
      quote:
        "I used it to generate new quiz questions from my existing exam bank and then tweak them. It flagged a few places where my wording was ambiguous or easily copy-pasted into ChatGPT. That's the kind of feedback I needed.",
    },
    {
      context: "Publishers",
      quote:
        "Our authors were nervous about AI tools scraping their content. With Course Companion, we can offer an official tool for each title, under our brand and terms to serve each student.",
    },
  ];

  const values = [
    {
      title: "Teacher-first",
      description:
        "We measure success in saved hours, clearer communication, and better learning—not just prompt volume.",
    },
    {
      title: "IP-respectful",
      description:
        "We treat publisher and instructor content as something to protect, not extract.",
    },
    {
      title: "Transparent",
      description:
        "We show you how the product works and what it's doing with your data.",
    },
    {
      title: "Practical",
      description:
        "We design for messy, real courses with reused slides, incomplete banks, and over-stretched instructors.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-b from-white to-neutral-light">
        <FadeIn delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              About Course Companion
            </h1>
          </div>
        </FadeIn>
      </section>

      {/* Our Story Section */}
      <section className="section-container" id="story">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <div className="text-center mb-12">
              <p className="section-label">Our Story</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">
                We're building AI for the people actually answering student emails
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <Card>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-primary/80 leading-relaxed mb-6">
                  Course Companion was founded by people who have lived office hours, exam weeks, and 
                  the weird mix of publisher content + homemade materials that most courses run on.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">We believe:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-accent-teal mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg text-primary/80">
                      Students will use AI no matter what we say.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-accent-teal mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg text-primary/80">
                      Professors and publishers deserve tools that <strong>support</strong> teaching, 
                      not undermine it.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-accent-teal mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg text-primary/80">
                      IP and integrity are not negotiable "nice-to-haves" in education.
                    </span>
                  </li>
                </ul>

                <p className="text-lg text-primary/80 leading-relaxed">
                  That's why we built a <strong>vertical AI copilot</strong> focused solely on 
                  teaching workflows—and a <strong>zero-log architecture</strong> that respects the 
                  content and constraints of higher ed.
                </p>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* How it feels Section */}
      <section className="section-container bg-neutral-light" id="how-it-feels">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">How it feels to use Course Companion</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              It's like a TA that has read the book, the syllabus, and all your emails
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="h-full flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-accent-teal/10 text-accent-teal 
                                   text-sm font-semibold rounded-full border border-accent-teal/20">
                      {testimonial.context}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="relative mb-6">
                      <div className="absolute -top-2 -left-2 text-6xl text-accent-teal/10 font-serif leading-none">
                        "
                      </div>
                      <p className="text-lg text-primary/90 leading-relaxed relative z-10 font-medium">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-container" id="values">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Our Values</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              What Guides Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="h-full text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-primary/80 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reach Out Section */}
      <section className="section-container bg-neutral-light" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Reach Out</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="section-intro mx-auto">
              Whether you're an instructor, department, publisher, or just curious—we're here to help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* For Instructors */}
            <Card className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                For Instructors
              </h3>
              <p className="text-primary/80 mb-6">
                No credit card required. We'll help you onboard one course.
              </p>
              <Button variant="primary" onClick={openCalendly} className="w-full">
                Start 14-Day Instructor Trial
              </Button>
            </Card>

            {/* For Departments */}
            <Card className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                For Departments & Institutions
              </h3>
              <p className="text-primary/80 mb-6">
                Book a demo to see how Course Companion works for your department.
              </p>
              <Button variant="secondary" onClick={openCalendly} className="w-full">
                Book a Department / Campus Demo
              </Button>
              <p className="text-sm text-primary/60 mt-4">
                Short form: Name, role, institution, LMS, # of courses/students
              </p>
            </Card>

            {/* For Publishers */}
            <Card className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                For Publishers
              </h3>
              <p className="text-primary/80 mb-6">
                Discuss partnership opportunities and pilot programs.
              </p>
              <Button variant="secondary" href="#publisher" className="w-full">
                Discuss a Publisher Pilot
              </Button>
              <p className="text-sm text-primary/60 mt-4">
                Short form: Name, role, list of candidate titles, region
              </p>
            </Card>
          </div>

          {/* General Contact */}
          <Card className="max-w-2xl mx-auto mt-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              General Contact
            </h3>
            <p className="text-primary/80 mb-6">
              For press, speaking, security & legal, or general partnerships
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@coursecompanion.ai"
                className="text-accent-teal hover:text-accent-teal/80 font-medium text-lg"
              >
                hello@coursecompanion.ai
              </a>
              <p className="text-sm text-primary/60">
                Optional contact form available for specific inquiries
              </p>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

