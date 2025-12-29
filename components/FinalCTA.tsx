"use client";

import React from "react";
import Button from "./ui/Button";
import FadeIn from "./ui/FadeIn";
import { useCalendly } from "./CalendlyProvider";

export default function FinalCTA() {
  const { openCalendly } = useCalendly();

  return (
    <>
      {/* CTA Section */}
      <section className="section-container bg-neutral-light">
        <FadeIn delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
              Ready to Transform Your Teaching?
            </h2>
            <p className="text-xl lg:text-2xl text-primary/80 mb-8">
              Join instructors, departments, and publishers who are using AI to
              enhance learning—not replace teaching
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="primary"
              onClick={openCalendly}
            >
              Start 14-Day Instructor Trial
            </Button>
            <Button
              variant="secondary"
              onClick={openCalendly}
            >
              Book a Department/Publisher Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary/70">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-accent-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-accent-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Setup in 5-10 minutes
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-accent-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Cancel anytime
            </div>
          </div>
          </div>
        </FadeIn>
      </section>

      {/* Professional Footer */}
      <footer className="bg-panel-dark text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div>
              <h4 className="font-semibold text-white mb-4 text-base">Product</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition-colors duration-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors duration-200">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#integrations" className="hover:text-white transition-colors duration-200">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-base">Resources</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>
                  <a href="#academy" className="hover:text-white transition-colors duration-200">
                    Academy
                  </a>
                </li>
                <li>
                  <a href="#docs" className="hover:text-white transition-colors duration-200">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:text-white transition-colors duration-200">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-base">Company</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>
                  <a href="#about" className="hover:text-white transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#trust" className="hover:text-white transition-colors duration-200">
                    Trust Center
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-base">Legal</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>
                  <a href="#privacy" className="hover:text-white transition-colors duration-200">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-white transition-colors duration-200">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#security" className="hover:text-white transition-colors duration-200">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col items-center gap-6">
              <img 
                src="/logo.png" 
                alt="Course Companion" 
                className="h-20 w-auto"
              />
              <p className="text-white/60 text-sm text-center max-w-2xl">
                © 2024. All rights reserved. Built for the people
                actually answering student emails.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

