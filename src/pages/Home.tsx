import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Paintbrush, Search, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PortfolioCard from "@/components/PortfolioCard";
import { projects } from "@/data/projects";

const steps = [
  { icon: MessageSquare, title: "We learn about your business", desc: "A quick conversation to understand your goals, customers, and what makes you different." },
  { icon: Paintbrush, title: "We build your site in days", desc: "No six-week timelines. We design and develop your site fast — without cutting corners." },
  { icon: Search, title: "You get found by more customers", desc: "Your site goes live, optimized for search, and starts working for your business 24/7." },
];

const testimonials = [
  { name: "Maria Gonzalez", business: "Rosewood Bakery", text: "I put off getting a website for years because I thought it would be too expensive and complicated. Luma Sites made it so easy — and now customers find us on Google every day.", rating: 5 },
  { name: "James Whitfield", business: "Peak Line Roofing", text: "Within two weeks of launching our site, we started getting quote requests online. Best investment I've made for my business.", rating: 5 },
  { name: "Dr. Sarah Chen", business: "Clarity Dental Studio", text: "Our old website looked like it was from 2010. Luma Sites gave us something we're genuinely proud to share with patients.", rating: 5 },
];

export default function Home() {
  const previewProjects = projects.slice(0, 3);

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
          {/* Grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground) / 0.03) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
              Your business deserves <br className="hidden md:block" />
              <span className="text-amber">to be found.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/60 max-w-xl leading-relaxed">
              We build fast, beautiful websites for small businesses — starting at $500.
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
        </div>
      </section>

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
                <PortfolioCard key={project.name} project={project} />
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

      {/* Testimonials */}
      <section className="section-padding-lg bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
              What our clients say
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="stagger-child bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
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
              Let's build a website that works as hard as you do.
            </p>
            <Button variant="amber" size="xl" className="mt-8" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
