import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Paintbrush, Search, Wheat, Cake, Croissant } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PortfolioCard, { CaseStudyPanel, type Project } from "@/components/PortfolioCard";
import { projects } from "@/data/projects";

const steps = [
  { icon: MessageSquare, title: "We learn about your business", desc: "A quick conversation to understand your goals, customers, and what makes you different." },
  { icon: Paintbrush, title: "We build your site in days", desc: "No six-week timelines. We design and develop your site fast — without cutting corners." },
  { icon: Search, title: "You get found by more customers", desc: "Your site goes live, optimized for search, and starts working for your business 24/7." },
];

const featureCards = [
  { icon: Wheat, label: "Artisan Breads" },
  { icon: Cake, label: "Custom Cakes" },
  { icon: Croissant, label: "Daily Pastries" },
];

function HeroBrowserMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-primary-foreground/20 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)] ring-1 ring-white/10">
      {/* Browser chrome */}
      <div className="bg-[hsl(216,40%,22%)] px-4 py-2.5 flex items-center gap-2 border-b border-primary-foreground/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,70%,65%)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(45,80%,60%)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(130,50%,55%)]" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-primary-foreground/8 rounded-md px-3 py-1 text-[10px] text-primary-foreground/40">
            www.rosewoodbakery.com
          </div>
        </div>
      </div>

      {/* Website mockup content */}
      <div className="bg-[hsl(30,20%,15%)] relative flex flex-col">
        {/* Nav bar */}
        <div className="relative z-10 flex items-center justify-between px-4 py-2.5 border-b border-primary-foreground/8">
          <span className="text-[9px] font-bold text-[hsl(30,60%,85%)] tracking-wide">Rosewood Bakery</span>
          <div className="flex gap-3">
            <span className="text-[7px] text-primary-foreground/40">Menu</span>
            <span className="text-[7px] text-primary-foreground/40">About</span>
            <span className="text-[7px] text-primary-foreground/40">Order</span>
            <span className="text-[7px] text-primary-foreground/40">Visit</span>
          </div>
        </div>

        {/* Hero section with background image */}
        <div className="relative h-[180px] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/35250923/pexels-photo-35250923.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(30,30%,15%)/0.4]" />
          <div className="relative z-10 flex flex-col justify-center h-full px-5 py-4">
            <div className="text-[14px] font-bold text-white leading-tight mb-1.5 drop-shadow-md">
              Freshly Baked Every Morning
            </div>
            <div className="text-[8px] text-white/75 mb-3 max-w-[80%] leading-relaxed drop-shadow">
              Fresh pastries, artisan breads & custom cakes made daily with love.
            </div>
            <div className="flex gap-1.5">
              <div className="h-5 px-3 rounded-sm bg-amber text-[6px] flex items-center justify-center font-semibold text-[hsl(30,30%,15%)]">
                Order Online
              </div>
              <div className="h-5 px-3 rounded-sm border border-white/40 text-[6px] flex items-center justify-center text-white/80">
                View Menu
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-2 p-3">
          {featureCards.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-primary-foreground/6 rounded p-2.5 text-center">
              <Icon size={14} className="mx-auto mb-1.5 text-amber/70" />
              <div className="text-[7px] font-semibold text-primary-foreground/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { value: "50+", label: "Local Businesses Served" },
    { value: "5 Day", label: "Average Delivery" },
    { value: "100%", label: "Satisfaction Guaranteed" },
  ];

  return (
    <section className="bg-[hsl(210,20%,95%)] py-10 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-border">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center px-10 py-4 md:py-0">
            <span className="font-display text-2xl font-bold text-amber">{stat.value}</span>
            <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const previewProjects = projects.slice(0, 3);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-amber/3 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full border border-primary-foreground/5 animate-float" />
          <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full border border-amber/10 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground) / 0.03) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
                Your business deserves <br className="hidden md:block" />
                <span className="text-amber">to be found.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/60 max-w-xl leading-relaxed">
                We build fast, beautiful websites for small businesses — starting at $299.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="amber" size="xl" asChild>
                  <Link to="/work">See Our Work</Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>

            {/* Right: Browser mockup */}
            <div className="hidden lg:block">
              <HeroBrowserMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* How It Works */}
      <section className="section-padding-lg bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
              How it works
            </h2>
            <p className="text-muted-foreground text-center mt-3 max-w-lg mx-auto">
              Three simple steps from "I need a website" to "customers are finding me online."
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-16">
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {steps.map((step, i) => (
                <div key={i} className="stagger-child text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy text-amber mb-5">
                    <step.icon size={24} />
                  </div>
                  <div className="text-xs font-semibold text-amber uppercase tracking-wider mb-2">
                    Step {i + 1}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding-lg bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
              Recent projects
            </h2>
            <p className="text-muted-foreground text-center mt-3 max-w-lg mx-auto">
              Real websites we've built for real small businesses.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="grid md:grid-cols-3 gap-8">
              {previewProjects.map((project) => (
                <PortfolioCard key={project.name} project={project} onSelect={setSelected} />
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-12 text-center">
            <Button variant="amber-outline" size="lg" asChild>
              <Link to="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy section-padding-lg">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to get online?
            </h2>
            <p className="mt-4 text-primary-foreground/50 max-w-md mx-auto">
              Let's build something you're proud of.
            </p>
            <Button variant="amber" size="xl" className="mt-8" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {selected && (
        <CaseStudyPanel project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
