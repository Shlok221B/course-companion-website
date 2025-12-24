import React from "react";
import Card from "@/components/ui/Card";
import TrustTag from "@/components/ui/TrustTag";
import FadeIn from "@/components/ui/FadeIn";

export default function TrustPage() {
  const securityFeatures = [
    {
      title: "Zero-Log Data Handling",
      description:
        "Your course materials are processed in a temporary, zero-retention environment. Once processing is complete, original files are deleted. No long-term storage, no training on your content.",
      checked: true,
    },
    {
      title: "Instructor-Aligned Reasoning",
      description:
        "The AI follows your teaching method and terminology, ensuring students learn your approach rather than shortcuts from generic AI tools.",
      checked: true,
    },
    {
      title: "Original Files Deleted After Processing",
      description:
        "Files are processed into a temporary index and then permanently deleted. The system only retains the processed index for active courses, which is also deleted when you remove the course.",
      checked: true,
    },
    {
      title: "No Training of External AI Systems",
      description:
        "Your content never trains external AI models. Course Companion operates in isolation, ensuring your intellectual property stays protected and never leaks into public AI systems.",
      checked: true,
    },
    {
      title: "Built for College Courses, Not Generic Chatbots",
      description:
        "Designed specifically for higher education with FERPA-aligned practices and academic integrity built-in from the ground up.",
      checked: true,
    },
  ];

  const complianceFeatures = [
    {
      title: "FERPA-Aligned Practices",
      description:
        "We follow Family Educational Rights and Privacy Act (FERPA) guidelines for handling student data. Student workspace data is never used to train external models, and we maintain strict data handling protocols.",
    },
    {
      title: "SOC 2 Type II Roadmap",
      description:
        "We are designed to grow into SOC 2 Type II compliance as the platform scales. Our architecture and processes are built with enterprise security standards in mind.",
    },
    {
      title: "Content Leakage Protection",
      description:
        "Advanced monitoring and testing ensure your content never leaks into external systems. We track content leakage and exposure risk, targeting <0.1% in internal testing.",
    },
  ];

  const testFormats = [
    "PDFs",
    "DOCX",
    "LaTeX",
    "Spreadsheets",
    "Annotated documents",
    "Problem-set images",
    "Structured and unstructured text uploads",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-b from-panel-dark to-panel-darker text-white">
        <FadeIn delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Trust and Privacy
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-8">
              We don't just claim to protect your content—we measure it
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Trust Overview */}
      <section className="section-container bg-gradient-to-b from-panel-darker to-panel-dark text-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Measured. Tested. Proven to Protect Your Course Materials.
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Most AI tools claim to protect your content. We actually measure it.
                </p>
                <p className="text-white/70 leading-relaxed">
                  In internal testing, we track <strong>content leakage</strong> and{" "}
                  <strong>exposure risk</strong>, which are both scored regularly and targeted at 
                  &lt;0.1%.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent-teal mb-2">
                    Similarity Matching
                  </p>
                  <p className="text-sm text-white/70">
                    Between generated text and source materials
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent-teal mb-2">
                    Structural Copying Score
                  </p>
                  <p className="text-sm text-white/70">
                    Tracks verbatim instructor material in responses
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent-teal mb-2">
                    &lt;0.1% Target
                  </p>
                  <p className="text-sm text-white/70">
                    Content leakage and exposure risk
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-container bg-panel-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-teal uppercase tracking-wider mb-4">
              Security Features
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How We Protect Your Content
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {feature.checked ? (
                        <div className="w-8 h-8 rounded-full bg-accent-teal/20 border border-accent-teal/40 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-accent-teal"
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
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-container bg-panel-darker text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-teal uppercase tracking-wider mb-4">
              Compliance & Standards
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Built for Higher Education Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leak-Penetration Testing */}
      <section className="section-container bg-panel-dark text-white">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Regular Leak-Penetration Tests
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                We regularly run leak-penetration tests on all major data formats to ensure your 
                content stays protected.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {testFormats.map((format, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                >
                  <p className="text-white font-medium">{format}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/80 leading-relaxed mb-4">
                We prompt leakage tests to protect your particular phrasings, reasoning steps, and 
                exam questions. We actively defend against your content leaking into external AI 
                systems.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <TrustTag>Per-course isolation</TrustTag>
                <TrustTag>Citation-required</TrustTag>
                <TrustTag>No training on IP</TrustTag>
                <TrustTag>Configurable retention</TrustTag>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-panel-darker text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Questions About Security?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contact our security team for detailed documentation and compliance information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:security@coursecompanion.ai"
              className="px-6 py-3 bg-accent-gold text-white font-semibold rounded-lg 
                       hover:bg-opacity-90 transition-all duration-200 inline-block"
            >
              Contact Security Team
            </a>
            <a
              href="/about#contact"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg 
                       border-2 border-white/20 hover:bg-white/20 transition-all duration-200 inline-block"
            >
              General Contact
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

