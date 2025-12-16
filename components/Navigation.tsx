"use client";

import React, { useState } from "react";
import Button from "./ui/Button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Product", href: "#product" },
    { label: "Pricing", href: "#pricing" },
    { label: "Academy", href: "#academy" },
    { label: "Trust", href: "#trust" },
  ];

  return (
    <nav className="bg-white border-b border-neutral-border sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <span className="text-xl font-bold text-primary">
                Course Companion
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary hover:text-accent-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" href="#trial">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue rounded p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-primary hover:text-accent-blue transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button variant="primary" href="#trial" className="w-full">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

