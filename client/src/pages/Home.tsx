/**
 * RatePanda Home Page - PMS-Focused
 * Design: Playful Minimalism with Organic Curves
 * Audience: Property Management System (PMS) providers
 * Positioning: White-label pricing automation platform for bundling
 */

import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, Smile } from "lucide-react";

export default function Home() {
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

      {/* Hero Section with Organic Background */}
      <section className="relative overflow-hidden">
        {/* Organic background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/nvQi6OSDUbYduKRWmoSNba/sandbox/s87R1PwXmZroVNcjNn9N1y-img-1_1770535164000_na1fn_cmF0ZXBhbmRhLWhlcm8tYmctdjI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbnZRaTZPU0RVYllkdUtSV21vU05iYS9zYW5kYm94L3M4N1IxUHdYbVpyb1ZOY2pObjlOMXktaW1nLTFfMTc3MDUzNTE2NDAwMF9uYTFmbl9jbUYwWlhCaGJtUmhMV2hsY204dFltY3RkakkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=O7n7LX0YOYBImBac-EEpsvEloJFUo7HiAPVgzGwBVwtK5m6GPQbe92BhxV41qjOtV91QPc6qmX7wo0zDM-QmwtLAzP026C9HUxep68a7OwPEobaKBb3n6sO6CcTi1gu9zXh6TDKfum2LgYFMOxbQ3XrDrRQ1MyNPMhseAjXBii3nMT1gqDWJOsWdoN8JQkURCvxtNKM2w0uN8EES4T0wZUpzhqDPfxx8G-7x3tRBwbgosKXVdBURx3zAcLWWWRQQktbZlrjPx6WV2MdcP2kV7PMNf-7P5Dmf3CXVZEC6i36H9a9L4bnSR7YnPAeHP2EBadXqsEKw~PGrutjOSvBUUg__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/70 z-1" />

        {/* Hero Content */}
        <div className="relative z-10 container py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-display text-foreground leading-tight">
                  Pricing Automation for <span className="text-primary">Your PMS</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  White-label pricing automation your hotel customers will love. Bundle it with your platform and let RatePanda handle the complexity.
                </p>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                RatePanda is a pricing automation platform designed specifically for PMS providers. Give your customers automatic, sensible pricing without the headaches of building it yourself.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
                  Schedule a Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  View Integration Docs
                </Button>
              </div>

              {/* Trust Badge */}
              <div className="pt-4 text-sm text-muted-foreground">
                ✓ Easy API integration • ✓ White-label ready • ✓ Proven pricing logic
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="hidden md:flex justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/nvQi6OSDUbYduKRWmoSNba/sandbox/s87R1PwXmZroVNcjNn9N1y-img-2_1770535148000_na1fn_cmF0ZXBhbmRhLWZlYXR1cmUtYXV0b21hdGlvbi12Mg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbnZRaTZPU0RVYllkdUtSV21vU05iYS9zYW5kYm94L3M4N1IxUHdYbVpyb1ZOY2pObjlOMXktaW1nLTJfMTc3MDUzNTE0ODAwMF9uYTFmbl9jbUYwWlhCaGJtUmhMV1psWVhSMWNtVXRZWFYwYjIxaGRHbHZiaTEyTWcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kiCq5t11PyU6~yG1OenH1XcX-nofxbOFTKsyx1TMv4kUdJ6sptU2PytwuPGzGuuyC9KplAwjl8o0L1eER5IIi4zVvI0ryVOFhw9Ln4xEGIjJCwoHhV5P~X4bB3xybPt~Fl1pBIu7WDLAwkryGcykyv0aDfDKoKvLs72igXVx1S6SW0e7Juj8vvUpWJFK9a3yFBdMvi3aSDK6fttrfIchG2dxe9wwWPevOO0kl6qUB85w3kJsJ-v1R~yHnSkexeQZLzaBZQRLWf0P86ezOLsfCYazG5yb-veL52eMerwWzZrxhKNW1bF25cDoy0jJFq8hWeUxZSJKQN4ytZI6ZuTRLg__"
                  alt="Pricing Automation"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-white to-accent/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Why PMS Providers Choose RatePanda
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop building pricing features from scratch. Let your customers benefit from proven, simple pricing automation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Easy Integration */}
            <div className="group rounded-2xl bg-white p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663274380395/edlnikdskQonFkyB.png"
                  alt="Easy Integration"
                  className="max-w-full h-auto" style={{maxHeight: '160px'}}
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
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663274380395/FHyDSNjGHTCjYend.png"
                  alt="White-Label"
                  className="max-w-full h-auto" style={{maxHeight: '160px'}}
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
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663274380395/YTfIocbxhPEkBPvt.png"
                  alt="Reliability"
                  className="max-w-full h-auto" style={{maxHeight: '160px'}}
                />
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3 text-center">
                Proven & Reliable
              </h3>
              <p className="text-muted-foreground text-center">
                Battle-tested pricing logic that works. No complex configuration—just sensible automation that your customers will appreciate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Integration Made Simple
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to add pricing automation to your platform
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-heading text-2xl mb-6">
                1
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3">
                Review API Docs
              </h3>
              <p className="text-muted-foreground">
                Our clean REST API and webhook system make integration straightforward. Full documentation and SDKs available.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-heading text-2xl mb-6">
                2
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3">
                Integrate & Test
              </h3>
              <p className="text-muted-foreground">
                Connect your hotel data, configure pricing rules, and test in our sandbox environment. Our team is here to help.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-heading text-2xl mb-6">
                3
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3">
                Launch & Scale
              </h3>
              <p className="text-muted-foreground">
                Roll out to your customers. Offer it as a bundled feature or premium add-on. We handle the pricing logic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/10 border-y border-border">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
            What Makes RatePanda Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-heading text-primary mb-4">✓ Built for PMS Providers:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• White-label ready</li>
                <li>• Simple, proven pricing logic</li>
                <li>• Easy to integrate and maintain</li>
                <li>• No complex configuration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-primary mb-4">✗ Not an RMS:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Not advanced revenue optimization</li>
                <li>• Not a full RMS replacement</li>
                <li>• Not enterprise-focused</li>
                <li>• Not a competitive differentiator</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-foreground/80 mt-8 leading-relaxed">
            <strong>RatePanda is Pricing Automation</strong> — a straightforward feature that solves the 80% of hotels that just need sensible, automatic pricing. Perfect for bundling with your PMS platform.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Ready to Add Pricing Automation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's talk about how RatePanda can enhance your platform and delight your hotel customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
              Schedule a Partnership Demo
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              View Technical Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="RatePanda" className="h-8 w-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                Pricing automation platform for PMS providers.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integration</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-foreground mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SDKs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 RatePanda. All rights reserved. Pricing automation for PMS platforms.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
