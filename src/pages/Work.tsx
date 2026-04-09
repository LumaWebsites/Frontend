import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PortfolioCard, { CaseStudyPanel, type Project } from "@/components/PortfolioCard";
import { projects } from "@/data/projects";

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div>
      {/* Header */}
      <section className="bg-navy pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Our <span className="text-amber">work</span>
          </h1>
          <p className="mt-4 text-primary-foreground/50 max-w-lg text-lg">
            Real websites we've built for real small businesses. Click any project to see the full story.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <PortfolioCard
                  key={project.name}
                  project={project}
                  onSelect={setSelected}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {selected && (
        <CaseStudyPanel project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
