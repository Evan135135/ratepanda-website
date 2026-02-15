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
      answer: "Most integrations take a few days. RatePanda is API-first, with optional quick-start iframes for faster rollout. Our documentation is clear and designed for straightforward implementation."
    },
    {
      question: "Can I white-label RatePanda for my customers?",
      answer: "Yes. RatePanda runs in the background via API and is designed to be bundled under your brand. You can build your own interface, or use our ready-made iframes for quick setup. The pricing logic itself remains fixed and consistent."
    },
    {
      question: "What pricing models do you offer?",
      answer: "RatePanda uses simple, flat pricing designed to be easy to bundle and easy to explain. There are no revenue-share fees, booking-based charges, or feature tiers."
    },
    {
      question: "What's your API documentation like?",
      answer: "We provide clear REST API documentation with practical examples and webhook support. The API covers configuration, limits, status, and pricing updates. It's designed to be straightforward and predictable — not overly complex."
    },
    {
      question: "Do you offer technical support during integration?",
      answer: "Yes. We support integrations directly with your technical team and provide guidance throughout rollout. RatePanda is designed to be simple to implement and maintain."
    },
    {
      question: "What happens if there's an issue with pricing calculations?",
      answer: "All pricing changes are logged and transparent. Automation can be paused or disabled at any time. RatePanda is a baseline tool, not a revenue decision-maker."
    },
    {
      question: "Can RatePanda integrate with our existing PMS database?",
      answer: "Yes. RatePanda integrates via API and webhooks, making it compatible with modern PMS platforms. It is designed as a clean automation layer rather than a deeply embedded system."
    },
    {
      question: "What about data security and compliance?",
      answer: "RatePanda uses standard industry security practices including encrypted connections and controlled access. We provide security documentation suitable for technical review."
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
                  Automatic pricing for hotels, built to be bundled by platforms.
                </p>
              </div>

              <p className="text-base text-foreground/80 leading-relaxed">
                Give your customers sensible, automatic pricing — without building or maintaining a full revenue management system.
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
                  <span className="text-foreground/80">Pricing automation for everyday hotels</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">Designed to be bundled by PMS platforms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">API-first, with optional quick-start iframes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">Opinionated and predictable by design</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">Simple, flat pricing with no revenue share</span>
                </li>
              </ul>
            </div>

            {/* What It Isn't */}
            <div>
              <h3 className="text-2xl font-heading text-foreground/50 mb-6">What It Isn't</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-foreground/50 font-bold">✗</span>
                  <span className="text-foreground/70">A full revenue management system (RMS)</span>
                </li>
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
                  <span className="text-foreground/70">Custom pricing logic per hotel</span>
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
