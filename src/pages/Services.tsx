import { Link } from "react-router-dom";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter Site",
    price: "$500",
    desc: "Perfect for businesses that need to get online fast.",
    features: ["5 pages", "Mobile responsive", "Contact form", "Google Maps embed", "Basic SEO setup"],
    highlighted: false,
  },
  {
    name: "Growth Site",
    price: "$900",
    desc: "For businesses ready to grow their online presence.",
    features: ["Everything in Starter", "Blog setup", "Photo gallery", "Booking integration", "Social media links"],
    highlighted: true,
  },
  {
    name: "Custom Build",
    price: "From $1,500",
    desc: "Built around exactly what your business needs.",
    features: ["Everything in Growth", "Custom features", "E-commerce", "Advanced SEO", "Priority support"],
    highlighted: false,
  },
];

const carePlans = [
  {
    name: "Basic Care",
    price: "$149",
    period: "/month",
    features: ["Hosting & domain management", "Security monitoring", "Software updates", "1 hour of content changes"],
  },
  {
    name: "Growth Care",
    price: "$199",
    period: "/month",
    features: ["Everything in Basic", "Priority support", "Monthly analytics report", "3 hours of content changes"],
  },
];

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most projects are completed in 5–10 business days. Our Starter Sites can often be done in under a week. Custom builds may take 2–3 weeks depending on complexity.",
  },
  {
    q: "Do I own my website?",
    a: "Absolutely. You own everything — the design, the content, the domain. It's your website. We just build it for you.",
  },
  {
    q: "What if I need changes after launch?",
    a: "We offer monthly care plans that include content updates. You can also request one-off changes at any time at our hourly rate. We don't disappear after launch.",
  },
  {
    q: "Do you build e-commerce websites?",
    a: "Yes! Our Custom Build tier includes e-commerce functionality. Whether you need a simple shop or a full product catalog, we can build it.",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Header */}
      <section className="bg-navy pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Simple <span className="text-amber">pricing</span>
          </h1>
          <p className="mt-4 text-primary-foreground/50 max-w-lg text-lg">
            No hidden fees. No surprise invoices. Just honest pricing for great websites.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={cn(
                    "stagger-child rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1",
                    tier.highlighted
                      ? "bg-navy text-primary-foreground shadow-xl ring-2 ring-amber"
                      : "bg-card border border-border shadow-sm"
                  )}
                >
                  {tier.highlighted && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                  <div className="mt-3">
                    <span className="font-display text-4xl font-bold">{tier.price}</span>
                  </div>
                  <p className={cn(
                    "mt-3 text-sm",
                    tier.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"
                  )}>
                    {tier.desc}
                  </p>
                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <Check size={16} className={cn("mt-0.5 flex-shrink-0", tier.highlighted ? "text-amber" : "text-amber")} />
                        <span className={tier.highlighted ? "text-primary-foreground/80" : "text-foreground/70"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.highlighted ? "amber" : "amber-outline"}
                    size="lg"
                    className="mt-8 w-full"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="bg-navy py-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-full bg-amber/15 flex items-center justify-center">
                <Check size={28} className="text-amber" />
              </div>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
              100% Satisfaction Guaranteed
            </h2>
            <p className="mt-4 text-primary-foreground/50 max-w-lg mx-auto leading-relaxed">
              If you're not completely happy with your new website, we'll make it right — or give you a full refund. No questions asked.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Care Plans */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
              Keep your site fast, secure, and up to date
            </h2>
            <p className="text-muted-foreground text-center mt-3 max-w-lg mx-auto">
              Monthly care plans so you never have to worry about your website again.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {carePlans.map((plan, i) => (
                <div key={i} className="stagger-child bg-card rounded-2xl p-8 border border-border shadow-sm hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="font-display text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="mt-0.5 text-amber flex-shrink-0" />
                        <span className="text-foreground/70">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="amber-outline" size="lg" className="mt-8 w-full" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
              Frequently asked questions
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="stagger-child border border-border rounded-xl overflow-hidden bg-card">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-display font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "flex-shrink-0 text-muted-foreground transition-transform duration-200",
                        openFaq === i && "rotate-180"
                      )}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
