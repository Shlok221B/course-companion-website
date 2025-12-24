import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import FadeIn from "./ui/FadeIn";

export default function PricingPreview() {
  const pricingTiers = [
    {
      name: "Solo Instructor",
      price: "Starting at $29/month",
      description: "Perfect for individual instructors teaching one or more courses",
      features: [
        "Up to 3 courses",
        "Up to 150 students",
        "All teaching modes",
        "Basic analytics",
        "Email support",
      ],
      cta: "Start Free Trial",
      ctaHref: "#trial",
      highlighted: true,
    },
    {
      name: "Department / Campus",
      price: "From $2,000/year",
      description: "For departments and institutions with multiple instructors",
      features: [
        "Unlimited courses",
        "Unlimited students",
        "Department console",
        "LMS & SSO integration",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      ctaHref: "#contact",
      highlighted: false,
    },
    {
      name: "Publisher Platform",
      price: "Custom pricing",
      description: "White-label AI companions for your titles",
      features: [
        "Per-title companions",
        "Publisher analytics",
        "Content safety controls",
        "Revenue share model",
        "Co-marketing support",
      ],
      cta: "Discuss Partnership",
      ctaHref: "#partnership",
      highlighted: false,
    },
  ];

  return (
    <section className="section-container bg-neutral-light" id="pricing">
      {/* Enhanced Header with Better Spacing */}
      <FadeIn delay={0}>
        <div className="text-center mb-16">
          <p className="section-label">Pricing</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Simple Plans for Every Teaching Context
          </h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            Whether you're teaching solo or managing an institution, we have a plan that fits
          </p>
        </div>
      </FadeIn>

      {/* Enhanced Grid with Better Spacing */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <FadeIn key={index} delay={index * 100}>
          <div
            key={index}
            className={`relative transition-all duration-300 ${
              tier.highlighted
                ? "md:-mt-2 md:mb-2"
                : ""
            }`}
          >
            {/* Enhanced Most Popular Badge */}
            {tier.highlighted && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-accent-gold text-white 
                                px-5 py-2 rounded-full text-sm font-bold shadow-lg 
                                border-2 border-white">
                  Most Popular
                </span>
              </div>
            )}

            {/* Enhanced Card with Better Styling */}
            <Card
              className={`h-full flex flex-col transition-all duration-300 
                        ${tier.highlighted
                          ? "border-2 border-accent-gold shadow-2xl bg-white relative overflow-hidden"
                          : "hover:shadow-xl hover:-translate-y-1 hover:border-accent-teal/30"
                        }`}
            >
              {/* Subtle accent background for highlighted tier */}
              {tier.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold" />
              )}

              <div className="flex-1 flex flex-col">
                {/* Enhanced Header Section */}
                <div className="text-center mb-8 pb-6 border-b border-neutral-border">
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {tier.name}
                  </h3>
                  {/* Enhanced Price Display */}
                  <div className="mb-3">
                    <p className="text-4xl lg:text-5xl font-bold text-accent-gold leading-tight">
                      {tier.price}
                    </p>
                  </div>
                  <p className="text-base text-primary/70 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Enhanced Feature List */}
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5 mr-3">
                        <div className="w-6 h-6 rounded-full bg-accent-teal/10 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-accent-teal"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-base text-primary/80 leading-relaxed pt-0.5">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Enhanced CTA Button */}
                <div className="mt-auto pt-4">
                  <Button
                    variant={tier.highlighted ? "primary" : "secondary"}
                    href={tier.ctaHref}
                    className={`w-full transition-all duration-300 ${
                      tier.highlighted
                        ? "shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        : "hover:shadow-md"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          </FadeIn>
        ))}
      </div>

      {/* Enhanced Footer Link */}
      <FadeIn delay={300}>
      <div className="text-center mt-12">
        <a
          href="#full-pricing"
          className="text-accent-teal hover:text-accent-teal/80 font-medium 
                   transition-colors duration-200 inline-flex items-center gap-2 
                   hover:underline"
        >
          View full pricing details
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
      </FadeIn>
    </section>
  );
}

