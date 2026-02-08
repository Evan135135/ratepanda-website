/*
 * RatePanda Home Page - PMS-Focused
 * Design: Playful Minimalism with Organic Curves
 * Audience: Property Management System (PMS) providers
 * Positioning: White-label pricing automation platform for bundling
 */

import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, Smile, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How long does it take to integrate RatePanda?",
      answer: "Typical integration takes 3-5 business days. Our process includes: API review (1 day), development & testing (2-3 days), and final deployment. We provide dedicated technical support throughout to ensure a smooth rollout."
    },
    {
      question: "Can I white-label RatePanda for my customers?",
      answer: "Yes! RatePanda is designed as a white-label solution. You can customize the UI, branding, messaging, and pricing to match your platform and business model. Your customers will see your branding, not ours."
    },
    {
      question: "What pricing models do you offer?",
      answer: "We offer flexible partnership models including flat monthly fees, revenue share arrangements, and tiered pricing based on hotel properties. We'll work with you to find a model that aligns with your business goals and customer base."
    },
    {
      question: "What's your API documentation like?",
      answer: "We provide comprehensive REST API documentation with code examples in multiple languages (JavaScript, Python, PHP, etc.). Our API includes endpoints for pricing rules, rate management, webhooks, and analytics. Full SDK support is available."
    },
    {
      question: "Do you offer technical support during integration?",
      answer: "Absolutely. We assign a dedicated technical partner to your team during integration. We offer email support, video calls, and access to our developer community. We're committed to your success."
    },
    {
      question: "What happens if there's an issue with pricing calculations?",
      answer: "Our pricing engine is battle-tested and handles complex scenarios automatically. If issues arise, our support team responds within 2 hours for critical issues. We also provide detailed logging and analytics to help you monitor pricing accuracy."
    },
    {
      question: "Can RatePanda integrate with our existing PMS database?",
      answer: "Yes. RatePanda integrates via REST API and webhooks, making it compatible with any PMS system. We can also work with your team on custom integration points if needed."
    },
    {
      question: "What about data security and compliance?",
      answer: "RatePanda meets enterprise security standards including SSL/TLS encryption, PCI compliance, and GDPR compliance. We conduct regular security audits and provide detailed security documentation for your compliance team."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="RatePanda" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              Integration
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Partner With Us
          </Button>
        </div>
      </nav>

      {/* Hero Section - Clean White Background with Panda at Top Right */}
      <section className="relative bg-white overflow-hidden">
        {/* Panda background for mobile/tablet - faded */}
        <div className="absolute -top-32 -right-20 md:hidden w-96 h-auto opacity-20 pointer-events-none">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663274380395/nMRAWAXxtAyPdhXx.png"
            alt="RatePanda Mascot Background"
            className="w-full h-auto"
          />
        </div>

        <div className="relative z-10 container py-20 md:py-32">
          <div className="relative">
            {/* Panda at top right - visible on desktop only */}
            <div className="hidden md:block absolute -top-32 right-0 lg:-top-40 lg:right-0 w-96 lg:w-[500px] h-auto">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663274380395/nMRAWAXxtAyPdhXx.png"
                alt="RatePanda Mascot"
                className="w-full h-auto"
              />
            </div>

            {/* Left: Text Content */}
            <div className="space-y-8 max-w-2xl pr-0 md:pr-32">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-display text-foreground leading-tight">
                  Automatic pricing for
                  <br />
                  <span className="text-primary">hotels</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  White-label pricing automation hotels will love. Bundle it with your platform and let RatePanda handle the complexity.
                </p>
              </div>

              <p className="text-base text-foreground/80 leading-relaxed">
                RatePanda is a pricing automation platform designed specifically for PMS providers. Give your customers automatic, sensible pricing without the headaches of building it yourself.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
                  Schedule a Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  View Integration Docs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-16 text-center">
            Why PMS Providers Choose RatePanda
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Simple Integration */}
            <div className="group rounded-2xl bg-white p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663274380395/hkWJIZLUDIFfluYX.png"
                  alt="Simple Integration"
                  className="w-auto" style={{height: '150px'}}
                />
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3 text-center">
                Simple Integration
              </h3>
              <p className="text-muted-foreground text-center">
                Clean API and webhooks make it easy to integrate RatePanda into your platform. Get up and running in days, not months.
              </p>
            </div>

            {/* Feature 2: White-Label Ready */}
            <div className="group rounded-2xl bg-white p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663274380395/wIIUcyhdkcEXPCwu.png"
                  alt="White-Label Ready"
                  className="w-auto" style={{height: '150px'}}
                />
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3 text-center">
                White-Label Ready
              </h3>
              <p className="text-muted-foreground text-center">
                Brand it as your own. Customize the UI, messaging, and pricing to match your platform and business model.
              </p>
            </div>

            {/* Feature 3: Proven & Reliable */}
            <div className="group rounded-2xl bg-white p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663274380395/AMZwbNEPDWvfjidB.png"
                  alt="Proven & Reliable"
                  className="w-auto" style={{height: '150px'}}
                />
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3 text-center">
                Proven & Reliable
              </h3>
              <p className="text-muted-foreground text-center">
                Battle-tested pricing logic that works for hotels of all sizes. Backed by years of hospitality expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What RatePanda Is (and Isn't) Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-12 text-center">
            What RatePanda Is (and Isn't)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* What It Is */}
            <div>
              <h3 className="text-2xl font-heading text-primary mb-6">What It Is</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">Intelligent pricing automation for hotels</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">A white-label feature you can bundle with your PMS</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">Easy to integrate via REST API</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">Fully customizable for your brand and business model</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">Enterprise-grade security and compliance</span>
                </li>
              </ul>
            </div>

            {/* What It Isn't */}
            <div>
              <h3 className="text-2xl font-heading text-foreground/50 mb-6">What It Isn't</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-foreground/50 font-bold">✗</span>
                  <span className="text-foreground/70">A replacement for your PMS</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/50 font-bold">✗</span>
                  <span className="text-foreground/70">A booking engine or reservation system</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/50 font-bold">✗</span>
                  <span className="text-foreground/70">A complex, hard-to-integrate solution</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/50 font-bold">✗</span>
                  <span className="text-foreground/70">A direct-to-hotel sales product</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-white to-background/5">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-16 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-heading text-foreground mb-3">
                Review API Docs
              </h3>
              <p className="text-muted-foreground">
                Explore our clean REST API and webhook documentation. Everything you need to integrate pricing automation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-heading text-foreground mb-3">
                Integrate & Test
              </h3>
              <p className="text-muted-foreground">
                Connect RatePanda to your platform. Our team provides technical support throughout the integration process.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-heading text-foreground mb-3">
                Launch & Grow
              </h3>
              <p className="text-muted-foreground">
                Roll out to your customers. Offer pricing automation as a premium feature and unlock new revenue streams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-background/5">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            Everything you need to know about integrating RatePanda with your PMS platform.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-white overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background/5 transition-colors"
                >
                  <h3 className="text-lg font-heading text-foreground pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 border-t border-border bg-white/50">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Ready to Add Pricing Automation to Your PMS?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Schedule a partnership demo to see how RatePanda can help your hotel customers succeed with intelligent pricing.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
            Schedule a Partnership Demo
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-heading text-lg mb-4">RatePanda</h4>
              <p className="text-white/70 text-sm">
                Pricing automation for PMS platforms. Built for partnership.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 RatePanda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
