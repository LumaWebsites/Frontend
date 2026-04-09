import { Zap, DollarSign, Target, HeartHandshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { icon: Zap, title: "Fast turnaround", desc: "Sites delivered in days, not weeks. We respect your time and move quickly." },
  { icon: DollarSign, title: "Affordable pricing", desc: "No surprise fees. No bloated agency pricing. Honest rates from the start." },
  { icon: Target, title: "Built to convert", desc: "Designed to turn visitors into customers. Every page has a purpose." },
  { icon: HeartHandshake, title: "Ongoing support", desc: "We don't disappear after launch. Your site stays fast, secure, and current." },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            About <span className="text-amber">Luma Sites</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding-lg bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Abstract graphic */}
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-3xl bg-navy/5" />
                <div className="absolute top-8 left-8 w-40 h-40 rounded-2xl bg-amber/15 rotate-12" />
                <div className="absolute bottom-12 right-8 w-32 h-32 rounded-full bg-navy/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-3xl border-2 border-amber/30 -rotate-6" />
                <div className="absolute top-16 right-16 w-24 h-24 rounded-xl bg-amber/20 rotate-45" />
                <div className="absolute bottom-20 left-16 w-20 h-20 rounded-full border-2 border-navy/15" />
                {/* Center text mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl font-bold text-navy/10">LS</span>
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-display font-bold">Luma Sites was built for the businesses that get overlooked.</span>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The local restaurant without a website. The contractor relying on word of mouth. The salon with a Facebook page from 2015.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We exist to close that gap — building fast, clean, affordable websites that actually get small businesses found online.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  No bloated agency pricing. No six-week timelines. Just real work, done right.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding-lg bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
              Why choose us
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {values.map((v, i) => (
                <div key={i} className="stagger-child flex gap-5 p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-amber">
                    <v.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{v.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
