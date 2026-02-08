/**
 * RatePanda Home Page
 * Design: Playful Minimalism with Organic Curves
 * - Warm forest green (#4B9B6F) as primary color
 * - Soft sage green (#A8D5BA) for accents
 * - Poppins for headings, Inter for body
 * - Organic curves and generous whitespace
 * - Panda mascot appears naturally throughout
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
              How It Works
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Get Started
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
                  Making Pricing <span className="text-primary">Boring</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Automatic pricing that keeps hotel rates sensible and up to date — without complexity.
                </p>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                RatePanda is Pricing Automation for your hotel PMS. We handle the boring stuff so you can focus on what matters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
                  Start Free Trial
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Learn More
                </Button>
              </div>

              {/* Trust Badge */}
              <div className="pt-4 text-sm text-muted-foreground">
                ✓ No credit card required • ✓ 14-day free trial • ✓ Easy setup
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

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-white to-accent/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Why Hotels Choose RatePanda
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, predictable pricing automation designed for hotels that want to focus on their guests, not spreadsheets.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Automation */}
            <div className="group rounded-2xl bg-white p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/nvQi6OSDUbYduKRWmoSNba/sandbox/s87R1PwXmZroVNcjNn9N1y-img-2_1770535148000_na1fn_cmF0ZXBhbmRhLWZlYXR1cmUtYXV0b21hdGlvbi12Mg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbnZRaTZPU0RVYllkdUtSV21vU05iYS9zYW5kYm94L3M4N1IxUHdYbVpyb1ZOY2pObjlOMXktaW1nLTJfMTc3MDUzNTE0ODAwMF9uYTFmbl9jbUYwWlhCaGJtUmhMV1psWVhSMWNtVXRZWFYwYjIxaGRHbHZiaTEyTWcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kiCq5t11PyU6~yG1OenH1XcX-nofxbOFTKsyx1TMv4kUdJ6sptU2PytwuPGzGuuyC9KplAwjl8o0L1eER5IIi4zVvI0ryVOFhw9Ln4xEGIjJCwoHhV5P~X4bB3xybPt~Fl1pBIu7WDLAwkryGcykyv0aDfDKoKvLs72igXVx1S6SW0e7Juj8vvUpWJFK9a3yFBdMvi3aSDK6fttrfIchG2dxe9wwWPevOO0kl6qUB85w3kJsJ-v1R~yHnSkexeQZLzaBZQRLWf0P86ezOLsfCYazG5yb-veL52eMerwWzZrxhKNW1bF25cDoy0jJFq8hWeUxZSJKQN4ytZI6ZuTRLg__"
                  alt="Automation"
                  className="h-32 w-32"
                />
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3 text-center">
                Automatic Pricing
              </h3>
              <p className="text-muted-foreground text-center">
                Set it and forget it. RatePanda automatically adjusts your rates based on demand signals, keeping prices sensible without daily manual work.
              </p>
            </div>

            {/* Feature 2: Simplicity */}
            <div className="group rounded-2xl bg-white p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/nvQi6OSDUbYduKRWmoSNba/sandbox/s87R1PwXmZroVNcjNn9N1y-img-3_1770535161000_na1fn_cmF0ZXBhbmRhLWZlYXR1cmUtc2ltcGxlLXYy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbnZRaTZPU0RVYllkdUtSV21vU05iYS9zYW5kYm94L3M4N1IxUHdYbVpyb1ZOY2pObjlOMXktaW1nLTNfMTc3MDUzNTE2MTAwMF9uYTFmbl9jbUYwWlhCaGJtUmhMV1psWVhSMWNtVXRjMmx0Y0d4bExYWXkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=u30sepbvXq-HsQXMmyL20Bwh-~q9xlQf0iZUlXRlGKip59JoWdmzr8qKzkzhMcXCdqESOt6MPqMGaXYUSuv1YDDhXKKh7pHq5t7C7ynA9FYBXmAX7XM9K0WmSIb4YQkSVzM1bS-9DMcbyYblmQsZ8yt-yqN0TQUZyeBp2n41UYF1XmhhsLMIWdQ~Pu1LHvPFOCGjBETGvLA0YoM1fgHhpepKzV60~dzG4W7nu3Y8Qn3DnvP9N6khmMdpJBViApqVa617quKVvXJD45ySIjQJ-G-HOjOOdJ0hyu39O6EF5zftMp9PbWHLfTiLwlMyBZ~xfP1BwUmZQjFlLM6lXjEfyQ__"
                  alt="Simplicity"
                  className="h-32 w-32"
                />
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3 text-center">
                Delightfully Simple
              </h3>
              <p className="text-muted-foreground text-center">
                No complex configurations or advanced revenue management. Just simple, proven pricing logic that works for 80% of properties.
              </p>
            </div>

            {/* Feature 3: Reliability */}
            <div className="group rounded-2xl bg-white p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/nvQi6OSDUbYduKRWmoSNba/sandbox/s87R1PwXmZroVNcjNn9N1y-img-4_1770535157000_na1fn_cmF0ZXBhbmRhLWZlYXR1cmUtcmVsaWFibGUtdjI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbnZRaTZPU0RVYllkdUtSV21vU05iYS9zYW5kYm94L3M4N1IxUHdYbVpyb1ZOY2pObjlOMXktaW1nLTRfMTc3MDUzNTE1NzAwMF9uYTFmbl9jbUYwWlhCaGJtUmhMV1psWVhSMWNtVXRjbVZzYVdGaWJHVXRkakkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oTR5Yew1AMeStARhAtoS3-rSaYf9VD6R3OCJemum5kAMMfSIbajU8E4xni3kkkFXQs22EMeTHBI3uECtnVNAbUTtDjTvYXJQNOZlRkyTJ01oUil2ia2hluoCFxiombWTcEyxep8xlEKeKi7TSD-40Yy16SrVm9Z~eCzFYgygB3QSk4OW3zPJnEPHgsL5aV0t-ZolgVVtHI0xXdWQQM5a7U9BapA28ZUeYBOmp1wwpKThW~VksOyjV1c8SVJB1IBtYbxpb8THSOGMIU4EniIIWrMv-7PEuFZ878DEaCMAmMxzzy~8HbYI9mW2yxWJJg9h8KnDi6JqhdsmK3zozB7Vag__"
                  alt="Reliability"
                  className="h-32 w-32"
                />
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3 text-center">
                Built to Trust
              </h3>
              <p className="text-muted-foreground text-center">
                Predictable, reliable pricing that avoids obviously wrong rates. Your guests get fair prices, your revenue stays healthy.
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
              How RatePanda Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to automatic pricing
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
                Connect Your PMS
              </h3>
              <p className="text-muted-foreground">
                Link RatePanda to your property management system in minutes. We support all major PMS platforms.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-heading text-2xl mb-6">
                2
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3">
                Set Your Preferences
              </h3>
              <p className="text-muted-foreground">
                Choose your minimum rate, maximum rate, and let RatePanda handle the rest. No complex configuration needed.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-heading text-2xl mb-6">
                3
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-3">
                Sit Back & Relax
              </h3>
              <p className="text-muted-foreground">
                Your rates update automatically based on demand. Watch your revenue stabilize while you focus on guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Message Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/10 border-y border-border">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
            What RatePanda Is (and Isn't)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-heading text-primary mb-4">✓ RatePanda Is:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pricing Automation</li>
                <li>• Simple and predictable</li>
                <li>• Built for independent hotels</li>
                <li>• Easy to understand and use</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-primary mb-4">✗ RatePanda Is Not:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• A full Revenue Management System</li>
                <li>• Advanced optimization software</li>
                <li>• For enterprise revenue teams</li>
                <li>• Promising revenue uplift</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Ready to Make Pricing Boring?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hotels that have automated their pricing and freed up time for what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
              Start Your Free Trial
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Schedule a Demo
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
                Pricing automation for hotels that want to keep things simple.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
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
            <p>&copy; 2026 RatePanda. All rights reserved. Making pricing boring, one hotel at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
