import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

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
      <div className="text-center mb-12">
        <p className="section-label">Pricing</p>
        <h2 className="section-title">
          Simple Plans for Every Teaching Context
        </h2>
        <p className="section-intro mx-auto">
          Whether you're teaching solo or managing an institution, we have a plan that fits
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <Card
            key={index}
            className={
              tier.highlighted
                ? "border-2 border-accent-teal shadow-xl relative"
                : ""
            }
          >
            {tier.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {tier.name}
              </h3>
              <p className="text-3xl font-bold text-accent-teal mb-2">
                {tier.price}
              </p>
              <p className="text-sm text-primary/70">{tier.description}</p>
            </div>

            <ul className="space-y-3 mb-6">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-primary/80">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={tier.highlighted ? "primary" : "secondary"}
              href={tier.ctaHref}
              className="w-full"
            >
              {tier.cta}
            </Button>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="#full-pricing"
          className="text-accent-blue hover:underline font-medium"
        >
          View full pricing details →
        </a>
      </div>
    </section>
  );
}

