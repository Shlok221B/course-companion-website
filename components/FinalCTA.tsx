import React from "react";
import Button from "./ui/Button";

export default function FinalCTA() {
  return (
    <section className="section-container bg-gradient-to-br from-accent-teal to-accent-blue text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
          Ready to Transform Your Teaching?
        </h2>
        <p className="text-xl lg:text-2xl text-white/90 mb-8">
          Join instructors, departments, and publishers who are using AI to
          enhance learning—not replace teaching
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            variant="secondary"
            href="#trial"
            className="bg-white text-primary hover:bg-white/90 border-0"
          >
            Start 14-Day Instructor Trial
          </Button>
          <Button
            variant="secondary"
            href="#demo"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Book a Department/Publisher Demo
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
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
              className="w-5 h-5 mr-2"
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
              className="w-5 h-5 mr-2"
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

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#features" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#integrations" className="hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#academy" className="hover:text-white">
                    Academy
                  </a>
                </li>
                <li>
                  <a href="#docs" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#trust" className="hover:text-white">
                    Trust Center
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#privacy" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#security" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
            <p>
              © 2024 Course Companion. All rights reserved. Built for the people
              actually answering student emails.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

