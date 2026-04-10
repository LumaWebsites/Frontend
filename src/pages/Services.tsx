import { Link } from "react-router-dom";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter Site",
    price: "$299–499",
    desc: "Everything your business needs to get online and get found. Clean, fast, and professional — built and ready in days.",
    features: [
      "Up to 5 pages (Home, About, Services, Contact + 1 custom)",
      "Mobile responsive design",
      "Contact form that sends directly to your email",
      "Google Maps embed",
      "Basic SEO setup",
      "Fast load time optimized",
      "100% satisfaction guarantee",
    ],
    highlighted: false,
  },
  {
    name: "Business Site",
    price: "$599–899",
    desc: "Everything in Starter, plus the ability to take payments online. Perfect for businesses that take reservations, deposits, or sell products directly from their site.",
    features: [
      "Everything in Starter",
      "Stripe payment integration",
      "Online ordering or reservation system",
      "Guest checkout — no account required",
      "Automatic email confirmation to customer",
      "Instant notification to you when payment received",
      "Photo gallery",
      "Blog setup",
    ],
    highlighted: true,
  },
];

const carePlans = [
  {
    name: "Basic Care",
    price: "$49",
    period: "/month",
    tagline: "Set it and forget it.",
    desc: "Your website stays live, secure, and fast — without you lifting a finger. We handle every technical detail so you can focus on running your business.",
    features: [
      "Hosting & domain management",
      "SSL security certificate",
      "Software & security updates",
      "24/7 uptime monitoring",
      "Email support",
      "Annual site backup",
    ],
    highlighted: false,
  },
  {
    name: "Standard Care",
    price: "$79",
    period: "/month",
    tagline: "Your site, always fresh.",
    desc: "Everything in Basic, plus a real human making updates when you need them. Need to change your hours, add a new menu item, or update a photo? Just send us a message.",
    features: [
      "Everything in Basic Care",
      "1 hour of content changes per month",
      "Priority email support",
      "Same-week turnaround on changes",
      "Quarterly homepage review",
    ],
    highlighted: false,
  },
  {
    name: "Growth Care",
    price: "$99",
    period: "/month",
    tagline: "Know exactly how your site is performing.",
    desc: "Everything in Standard, plus real data on how customers are finding you online. Every month we send you a plain-English report showing exactly how your website is working for your business — no technical jargon, just the numbers that matter.",
    features: [
      "Everything in Standard Care",
      "Google Analytics setup and management",
      "Monthly performance report delivered to your inbox",
      "Traffic sources, top pages, and visitor behavior",
      "Where your customers are coming from",
      "2 hours of content changes per month",
      "24-hour priority support response",
    ],
    highlighted: true,
  },
];

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most Starter sites are live within 3-5 business days. Business sites with payment integration typically take 5-7 days.",
  },
  {
    q: "Do I own my website?",
    a: "Yes — completely. You own the domain, the code, and all the content. If you ever want to leave, we'll hand everything over with no hassle.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Small changes are covered under your care plan. Larger redesigns or new features are quoted separately.",
  },
  {
    q: "Do you set up payments for my business?",
    a: "Yes — Business Site tier includes full Stripe integration. We handle the setup, testing, and make sure everything works before launch.",
  },
  {
    q: "What happens if I cancel my care plan?",
    a: "Your site stays live — you just take over managing hosting yourself. We'll walk you through everything you need.",
  },
  {
    q: "Can you work with my existing domain?",
    a: "Absolutely. If you already have a domain we'll connect it to your new site at no extra charge.",
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
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
                    "mt-3 text-sm leading-relaxed",
                    tier.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"
                  )}>
                    {tier.desc}
                  </p>
                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="mt-0.5 flex-shrink-0 text-amber" />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-amber text-center mb-4">
              Trusted by local businesses across Ohio
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
              Your website. Zero headaches.
            </h2>
            <p className="text-muted-foreground text-center mt-3 max-w-2xl mx-auto leading-relaxed">
              Most small business owners don't have time to deal with hosting, security updates, or technical problems. That's what we're here for. Pick a plan and never think about your website again.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="grid md:grid-cols-3 gap-6">
              {carePlans.map((plan, i) => (
                <div key={i} className={cn(
                  "stagger-child rounded-2xl p-8 flex flex-col hover:-translate-y-1 transition-all duration-300",
                  plan.highlighted
                    ? "bg-navy text-primary-foreground shadow-xl ring-2 ring-amber"
                    : "bg-card border border-border shadow-sm"
                )}>
                  {plan.highlighted && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className={cn("font-display text-xl font-bold", plan.highlighted ? "text-primary-foreground" : "text-foreground")}>{plan.name}</h3>
                  <div className="mt-2">
                    <span className={cn("font-display text-3xl font-bold", plan.highlighted ? "text-primary-foreground" : "text-foreground")}>{plan.price}</span>
                    <span className={cn("text-sm", plan.highlighted ? "text-primary-foreground/50" : "text-muted-foreground")}>{plan.period}</span>
                  </div>
                  <p className="text-amber text-xs font-semibold mt-3 italic">{plan.tagline}</p>
                  <p className={cn(
                    "mt-2 text-sm leading-relaxed",
                    plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"
                  )}>
                    {plan.desc}
                  </p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="mt-0.5 text-amber flex-shrink-0" />
                        <span className={plan.highlighted ? "text-primary-foreground/80" : "text-foreground/70"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.highlighted ? "amber" : "amber-outline"} size="lg" className="mt-8 w-full" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-8">
              All plans include free setup and migration from your current host. No contracts. No setup fees. Cancel anytime.
            </p>
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
