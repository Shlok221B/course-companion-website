"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { useCalendly } from "@/components/CalendlyProvider";

export default function AcademyPage() {
  const { openCalendly } = useCalendly();
  const workshops = [
    {
      title: "AI for Teaching 101",
      description:
        "Learn the fundamentals of integrating AI into your teaching practice. Understand how AI can support student learning without replacing critical thinking and problem-solving skills.",
      status: "Join Waitlist",
    },
    {
      title: "Protecting Your Course IP While Using AI",
      description:
        "Deep dive into intellectual property protection strategies when using AI tools. Learn how to safeguard your course materials, exam questions, and teaching methods.",
      status: "Join Waitlist",
    },
    {
      title: "Designing AI-Aware Assessments",
      description:
        "Create assessments that work with AI tools rather than against them. Learn to design questions that test understanding and application, not just recall.",
      status: "Join Waitlist",
    },
  ];

  const demoVideos = [
    {
      title: "Instructor Overview",
      duration: "5 min",
      description:
        "See how Course Companion works from an instructor's perspective. Learn how to set up your course, configure teaching modes, and monitor student engagement.",
    },
    {
      title: "Department Demo",
      duration: "8 min",
      description:
        "Explore the department console and see how to manage multiple courses, set policies, and track adoption across your institution.",
    },
    {
      title: "Publisher Demo",
      duration: "8–10 min",
      description:
        "Learn how publishers can create white-label AI companions for their titles, protect IP, and provide value to students and instructors.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-b from-white to-neutral-light">
        <FadeIn delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Academy
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary/80 mb-6 sm:mb-8 leading-relaxed">
              We teach you how to use AI in your course, then we show you our tool
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Overview Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <Card className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">
              Learn Before You Deploy
            </h2>
            <p className="text-base sm:text-lg text-primary/80 leading-relaxed mb-4">
              Before diving into Course Companion, we help you understand how AI can enhance your 
              teaching practice. Our workshops, demos, and office hours are designed to give you 
              the knowledge and confidence to use AI effectively in your courses.
            </p>
            <p className="text-lg text-primary/80 leading-relaxed">
              Whether you're an individual instructor, department chair, or publisher, we provide 
              the resources you need to make informed decisions about AI in education.
            </p>
          </Card>
          </FadeIn>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="section-container bg-neutral-light" id="workshops">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <div className="text-center mb-12">
              <p className="section-label">Workshops</p>
              <h2 className="section-title">Learn Best Practices</h2>
              <p className="section-intro mx-auto">
                Join our workshops to learn how to effectively integrate AI into your teaching
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {workshops.map((workshop, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                      {workshop.title}
                    </h3>
                    <p className="text-primary/80 leading-relaxed mb-6">
                      {workshop.description}
                    </p>
                  </div>
                  <Button variant="secondary" onClick={openCalendly} className="w-full">
                    {workshop.status}
                  </Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Videos Section */}
      <section className="section-container" id="demos">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <div className="text-center mb-12">
              <p className="section-label">Demo Videos</p>
              <h2 className="section-title">See Course Companion in Action</h2>
              <p className="section-intro mx-auto">
                Watch detailed walkthroughs tailored to your role
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {demoVideos.map((video, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="h-full flex flex-col group hover:shadow-xl transition-all duration-300">
                  <div className="mb-4 aspect-video bg-neutral-light rounded-lg flex items-center justify-center group-hover:bg-accent-teal/10 transition-colors">
                    <svg
                      className="w-16 h-16 text-accent-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-primary">
                        {video.title}
                      </h3>
                      <span className="text-sm text-primary/60 font-mono">
                        {video.duration}
                      </span>
                    </div>
                    <p className="text-primary/80 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button 
                      variant="secondary" 
                      onClick={() => {
                        // Placeholder: Scroll to demos section or could open Calendly for demo scheduling
                        const demosSection = document.getElementById('demos');
                        if (demosSection) {
                          demosSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full"
                    >
                      Watch Demo
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="section-container bg-neutral-light" id="office-hours">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Office Hours</p>
            <h2 className="section-title">Get Personal Support</h2>
            <p className="section-intro mx-auto">
              Join our office hours for one-on-one guidance and Q&A
            </p>
          </div>

          <Card>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Weekly Office Hours
              </h3>
              <p className="text-lg text-primary/80 mb-6">
                Every Thursday, 2:00 PM - 3:00 PM EST
              </p>
              <p className="text-primary/70 leading-relaxed mb-6">
                Drop in to ask questions, get help with setup, discuss best practices, or share 
                feedback. Our team is here to support you whether you're just getting started or 
                looking to optimize your Course Companion usage.
              </p>
              <p className="text-primary/70 leading-relaxed">
                No registration required. Join via the link below or contact us for a private 
                consultation if you prefer.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" onClick={openCalendly}>
                Join Office Hours
              </Button>
              <Button variant="secondary" onClick={openCalendly}>
                Schedule Private Consultation
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Join a workshop, watch a demo, or attend office hours to get started
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="#workshops">
              View Workshops
            </Button>
            <Button variant="secondary" href="#demos">
              Watch Demos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

