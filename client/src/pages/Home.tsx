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
            backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/nvQi6OSDUbYduKRWmoSNba/sandbox/XagYohboXkGRIy1kTkl12O-img-1_1770534427000_na1fn_cmF0ZXBhbmRhLWhlcm8tYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbnZRaTZPU0RVYllkdUtSV21vU05iYS9zYW5kYm94L1hhZ1lvaGJvWGtHUkl5MWtUa2wxMk8taW1nLTFfMTc3MDUzNDQyNzAwMF9uYTFmbl9jbUYwWlhCaGJtUmhMV2hsY204dFltYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TCn5e~BeSkTnj8RKfCOQjqKcYzYn4Dy9Ck2bJad~fVK6fx0KBjXKmrtL2RRwIgJ3kDiBzHef3mgEK5O6PrxoOdZmYUbcrmLqBOHOtgNmaLDTp9LmQQX4kNTemyHAk32C4Tt7ju6InEDfJmGZadlyTVf2TueF1sLpuY2zITCyhnorRQQJfRgjV2oCci59V7ZXNtfU5MWWjeZwUsxznlaKrnCXrseLGQiDlhSiPr0yrMocsGqleAByy6RyqTC57BU5M~lcD2q3oEqJVm0n3fO1bBCvsMGWsZFnwtlhHfM8woh0K8~huzL85QNOwDYTDCFrSFBb3SkAnkTep2bDERn8xA__')",
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
                  src="https://private-us-east-1.manuscdn.com/sessionFile/nvQi6OSDUbYduKRWmoSNba/sandbox/XagYohboXkGRIy1kTkl12O-img-2_1770534417000_na1fn_cmF0ZXBhbmRhLWZlYXR1cmUtYXV0b21hdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbnZRaTZPU0RVYllkdUtSV21vU05iYS9zYW5kYm94L1hhZ1lvaGJvWGtHUkl5MWtUa2wxMk8taW1nLTJfMTc3MDUzNDQxNzAwMF9uYTFmbl9jbUYwWlhCaGJtUmhMV1psWVhSMWNtVXRZWFYwYjIxaGRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ISvUSilTFxFaihziefDj7AtJ~GTc8sMLbq-1aPTwXTpRFAhMtWwiVI8303Jm-0ix0CKYjhJC8rY7KwO6bH49BIUV9ISs21UHu4s9xcacvKfvghj7AUv5KkQ15TIER5E4eu1S8b0woEGT6Sy6bAlvVxhwHJ3KqVsFmbYcGZVkTGfvx8Z4FecOrDmpX6hqWWypu~jtHuBzzNp6tvanc3GZpDSfTP9FqK4fUWvI2Fv2pejF5oHovEqL~le0lUgaRC9DQtLWZLdlv8YrJDPHd5Z4co8ia7pw0FiM9D7CIota2W1C5xDPwYJON5odgexvk6yoIAcfdbfWlv3tIg~wB7I-5g__"
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
                  src="https://private-us-east-1.manuscdn.com/sessionFile/nvQi6OSDUbYduKRWmoSNba/sandbox/XagYohboXkGRIy1kTkl12O-img-2_1770534417000_na1fn_cmF0ZXBhbmRhLWZlYXR1cmUtYXV0b21hdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbnZRaTZPU0RVYllkdUtSV21vU05iYS9zYW5kYm94L1hhZ1lvaGJvWGtHUkl5MWtUa2wxMk8taW1nLTJfMTc3MDUzNDQxNzAwMF9uYTFmbl9jbUYwWlhCaGJtUmhMV1psWVhSMWNtVXRZWFYwYjIxaGRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ISvUSilTFxFaihziefDj7AtJ~GTc8sMLbq-1aPTwXTpRFAhMtWwiVI8303Jm-0ix0CKYjhJC8rY7KwO6bH49BIUV9ISs21UHu4s9xcacvKfvghj7AUv5KkQ15TIER5E4eu1S8b0woEGT6Sy6bAlvVxhwHJ3KqVsFmbYcGZVkTGfvx8Z4FecOrDmpX6hqWWypu~jtHuBzzNp6tvanc3GZpDSfTP9FqK4fUWvI2Fv2pejF5oHovEqL~le0lUgaRC9DQtLWZLdlv8YrJDPHd5Z4co8ia7pw0FiM9D7CIota2W1C5xDPwYJON5odgexvk6yoIAcfdbfWlv3tIg~wB7I-5g__"
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
                  src="https://private-us-east-1.manuscdn.com/sessionFile/nvQi6OSDUbYduKRWmoSNba/sandbox/XagYohboXkGRIy1kTkl12O-img-3_1770534414000_na1fn_cmF0ZXBhbmRhLWZlYXR1cmUtc2ltcGxl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbnZRaTZPU0RVYllkdUtSV21vU05iYS9zYW5kYm94L1hhZ1lvaGJvWGtHUkl5MWtUa2wxMk8taW1nLTNfMTc3MDUzNDQxNDAwMF9uYTFmbl9jbUYwWlhCaGJtUmhMV1psWVhSMWNtVXRjMmx0Y0d4bC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jvFLUvkRbkK61xL73ShPbyh~QvzuuWxhyBCLMQ52RbewOOdQuX5ai4kXqKQ89gqL3a9CLsbIEZsER7ESZabUo50dDhATJNz5GHKNaPu4Vr4bpqx71vOp-6m03jjmI5q6zcIDCvxNIdleaug-6mfzxYo~uD5NVKai12oaxAoFZm-zNeKCL0O4-fEKpjDrKyQ6qNZOUARRLD3b8~0YsDf8oNGg9fIuOV6ZOJQ1euU5OwcvgGzE5AXoST6iMznAfjgDcSYhkcD1S6um~4-mZxgEqKUqB3Ze7TlSX3TL~GM4yv3CgR9Id6Twbx82xoN0HefJL~AeEeOE4~BlksIBAwoKjg__"
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
                  src="https://private-us-east-1.manuscdn.com/sessionFile/nvQi6OSDUbYduKRWmoSNba/sandbox/XagYohboXkGRIy1kTkl12O-img-4_1770534412000_na1fn_cmF0ZXBhbmRhLWZlYXR1cmUtcmVsaWFibGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbnZRaTZPU0RVYllkdUtSV21vU05iYS9zYW5kYm94L1hhZ1lvaGJvWGtHUkl5MWtUa2wxMk8taW1nLTRfMTc3MDUzNDQxMjAwMF9uYTFmbl9jbUYwWlhCaGJtUmhMV1psWVhSMWNtVXRjbVZzYVdGaWJHVS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oBDmclIbhI~sPcES~KpE~1rAEnKmWYkoifyouZIwS1t3AQNEWFEEFcI1z3euNTAExjeuUDg9wTGlFfC1j~3Uyb9hQmjP~-hWEWav5eWMXsl~aJo2ooinofeevpRdzHkRUhskxE8l9Ex~PJX9Wqs3LlZ~70PWShncd0RzNwz0HInDiHcgLqByODMsvFj6s1u~8h5C8uK~u-6kUSWMG1tkxwJqFPgL98WVbXlf3hzEL5-Wsj4tGpAvLNPBHAwT3FZkV9ZqvkCC8RzQ2gm5skrkQl1mL7eLsgsp3Z3w-htqpTzQ9u5pfOebrYdqEwp3EU-OAYn2yQMROnYkiDSEWkL8A__"
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
