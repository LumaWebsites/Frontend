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
    <div className="relative max-w-lg mx-auto lg:mx-0" style={{ minHeight: 420 }}>
      {/* Back layer — Clarity Dental */}
      <div className="absolute top-0 right-0 w-[85%] rounded-xl overflow-hidden border border-border/40 shadow-lg rotate-2 origin-bottom-left z-0">
        <div className="bg-[hsl(216,40%,22%)] px-3 py-2 flex items-center gap-2 border-b border-primary-foreground/10">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[hsl(0,70%,65%)]" />
            <div className="w-2 h-2 rounded-full bg-[hsl(45,80%,60%)]" />
            <div className="w-2 h-2 rounded-full bg-[hsl(130,50%,55%)]" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-primary-foreground/8 rounded px-2 py-0.5 text-[8px] text-primary-foreground/35">
              www.claritydentalstudio.com
            </div>
          </div>
        </div>
        <div className="relative h-[160px] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/6627519/pexels-photo-6627519.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(175,50%,20%)/0.4]" />
          <div className="relative z-10 flex flex-col justify-center h-full px-4 py-3">
            <div className="text-[11px] font-bold text-white leading-tight mb-1 drop-shadow-md">
              Your Smile Deserves the Best Care
            </div>
            <div className="mt-2">
              <div className="h-4 w-20 rounded-sm bg-[hsl(175,60%,40%)] text-[6px] flex items-center justify-center font-semibold text-white">
                Book Appointment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Front layer — Peak Line Roofing */}
      <div className="relative z-10 mt-12 w-[92%] rounded-xl overflow-hidden border border-border/60 shadow-2xl">
        <div className="bg-[hsl(216,40%,22%)] px-3 py-2 flex items-center gap-2 border-b border-primary-foreground/10">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,70%,65%)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[hsl(45,80%,60%)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[hsl(130,50%,55%)]" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-primary-foreground/8 rounded px-2 py-0.5 text-[9px] text-primary-foreground/40">
              www.peaklineroofing.com
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="bg-[hsl(215,35%,18%)] px-3 py-1.5 flex items-center justify-between border-b border-primary-foreground/6">
          <span className="text-[8px] font-bold text-primary-foreground/70 tracking-wide">Peak Line Roofing</span>
          <div className="flex gap-2">
            <span className="text-[6px] text-primary-foreground/30">Services</span>
            <span className="text-[6px] text-primary-foreground/30">Projects</span>
            <span className="text-[6px] text-primary-foreground/30">About</span>
            <span className="text-[6px] text-primary-foreground/30">Contact</span>
          </div>
        </div>

        {/* Hero with image */}
        <div className="relative h-[180px] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(215,40%,18%)/0.45]" />
          <div className="relative z-10 flex flex-col justify-center h-full px-4 py-3">
            <div className="text-[13px] font-bold text-white leading-tight mb-1.5 drop-shadow-md">
              Free Estimates. Trusted Work.
            </div>
            <div className="text-[7px] text-white/65 mb-3 max-w-[80%] leading-relaxed drop-shadow">
              Protecting Ohio homes since 2008. Licensed, insured, and guaranteed.
            </div>
            <div className="flex gap-1.5">
              <div className="h-4 px-2.5 rounded-sm bg-[hsl(175,60%,40%)] text-[6px] flex items-center justify-center font-semibold text-white">
                Get Free Estimate
              </div>
            </div>
          </div>
        </div>
      </div>
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
            About <span className="text-amber">Luma Websites</span>
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
                  <span className="font-display font-bold">Luma Websites was built for the businesses that get overlooked.</span>
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
