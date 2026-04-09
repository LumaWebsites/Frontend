import { Zap, DollarSign, Target, HeartHandshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { icon: Zap, title: "Fast turnaround", desc: "Sites delivered in days, not weeks. We respect your time and move quickly." },
  { icon: DollarSign, title: "Affordable pricing", desc: "No surprise fees. No bloated agency pricing. Honest rates from the start." },
  { icon: Target, title: "Built to convert", desc: "Designed to turn visitors into customers. Every page has a purpose." },
  { icon: HeartHandshake, title: "Ongoing support", desc: "We don't disappear after launch. Your site stays fast, secure, and current." },
];

function DesignIllustration() {
  return (
    <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
      {/* Browser window frame */}
      <div className="absolute inset-4 rounded-2xl overflow-hidden border border-border/60 shadow-lg bg-card">
        {/* Browser chrome */}
        <div className="bg-muted px-4 py-2.5 flex items-center gap-2 border-b border-border/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
            <div className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
            <div className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-background rounded px-3 py-1 text-[10px] text-muted-foreground">
              www.yourbusiness.com
            </div>
          </div>
        </div>

        {/* Website layout mockup */}
        <div className="p-4 bg-background space-y-3">
          {/* Nav */}
          <div className="flex items-center justify-between pb-2 border-b border-border/30">
            <div className="h-2 w-16 rounded-full bg-amber/40" />
            <div className="flex gap-2">
              <div className="h-1.5 w-6 rounded-full bg-muted-foreground/20" />
              <div className="h-1.5 w-6 rounded-full bg-muted-foreground/20" />
              <div className="h-1.5 w-6 rounded-full bg-muted-foreground/20" />
            </div>
          </div>

          {/* Hero block */}
          <div className="bg-navy rounded-lg p-4 space-y-2">
            <div className="h-2.5 w-3/4 rounded bg-primary-foreground/25" />
            <div className="h-2 w-1/2 rounded bg-primary-foreground/15" />
            <div className="h-1.5 w-2/3 rounded-full bg-primary-foreground/8 mt-2" />
            <div className="flex gap-1.5 mt-2">
              <div className="h-4 w-12 rounded bg-amber/70" />
              <div className="h-4 w-10 rounded border border-primary-foreground/15" />
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-muted/60 rounded p-2 space-y-1.5">
                <div className="h-5 rounded bg-muted-foreground/8" />
                <div className="h-1 w-3/4 rounded-full bg-muted-foreground/12" />
                <div className="h-1 w-1/2 rounded-full bg-muted-foreground/8" />
              </div>
            ))}
          </div>

          {/* Footer area */}
          <div className="pt-2 border-t border-border/30 flex justify-between items-center">
            <div className="h-1.5 w-12 rounded-full bg-muted-foreground/15" />
            <div className="flex gap-1.5">
              <div className="h-1 w-4 rounded-full bg-muted-foreground/12" />
              <div className="h-1 w-4 rounded-full bg-muted-foreground/12" />
              <div className="h-1 w-4 rounded-full bg-muted-foreground/12" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accents behind the browser */}
      <div className="absolute top-0 left-0 w-20 h-20 rounded-xl border-2 border-amber/15 -rotate-12" />
      <div className="absolute bottom-2 right-0 w-16 h-16 rounded-full border-2 border-navy/10" />
      <div className="absolute bottom-8 left-0 w-10 h-10 rounded bg-amber/8 rotate-12" />
    </div>
  );
}

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
              <DesignIllustration />

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
