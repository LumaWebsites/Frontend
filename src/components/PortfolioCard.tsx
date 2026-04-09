import { ExternalLink, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Project {
  name: string;
  type: string;
  location?: string;
  description: string;
  challenge?: string;
  solution?: string;
  result?: string;
  color: string;
  accent: string;
  headline: string;
  navLinks: string[];
  heroColor: string;
  heroAccent: string;
  textColor: string;
  subtextColor: string;
}

interface PortfolioCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
  className?: string;
}

function BrowserMockup({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className="rounded-lg overflow-hidden border border-border/50 shadow-sm">
      {/* Browser chrome */}
      <div className="bg-[hsl(0,0%,95%)] px-3 py-2 flex items-center gap-2 border-b border-border/30">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[hsl(0,70%,65%)]" />
          <div className="w-2 h-2 rounded-full bg-[hsl(45,80%,60%)]" />
          <div className="w-2 h-2 rounded-full bg-[hsl(130,50%,55%)]" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-white rounded px-2.5 py-0.5 text-[9px] text-[hsl(0,0%,50%)] truncate border border-border/20">
            www.{project.name.toLowerCase().replace(/\s+/g, "")}.com
          </div>
        </div>
      </div>

      {/* Website content mockup */}
      <div className={cn("aspect-[16/10] relative", project.heroColor)}>
        <div className="absolute inset-0 flex flex-col">
          {/* Fake navbar */}
          <div className={cn(
            "flex items-center justify-between px-4 py-2 border-b",
            project.heroColor === "bg-white" ? "border-[hsl(0,0%,90%)]" : "border-white/10"
          )}>
            <span className={cn("text-[9px] font-bold tracking-wide", project.textColor)}>
              {project.name}
            </span>
            <div className="flex gap-3">
              {project.navLinks.map((link) => (
                <span key={link} className={cn("text-[7px]", project.subtextColor)}>
                  {link}
                </span>
              ))}
            </div>
          </div>

          {/* Hero area */}
          <div className="flex-1 flex flex-col justify-center px-4 pb-2">
            <div className={cn(
              compact ? "text-[10px]" : "text-[11px]",
              "font-bold leading-tight mb-1.5",
              project.textColor
            )}>
              {project.headline}
            </div>
            <div className={cn("text-[7px] leading-relaxed mb-2.5 max-w-[70%]", project.subtextColor)}>
              Serving our community with quality and care.
            </div>
            <div className="flex gap-1.5">
              <div className={cn("h-4 w-14 rounded-sm text-[6px] flex items-center justify-center font-medium text-white", project.heroAccent)}>
                Learn More
              </div>
              <div className={cn(
                "h-4 w-12 rounded-sm text-[6px] flex items-center justify-center border",
                project.heroColor === "bg-white" || project.heroColor === "bg-[hsl(30,40%,92%)]"
                  ? "border-[hsl(0,0%,75%)] text-[hsl(0,0%,45%)]"
                  : "border-white/30 text-white/60"
              )}>
                Contact
              </div>
            </div>
          </div>

          {/* Content blocks below hero */}
          <div className={cn(
            "px-4 pb-3 grid grid-cols-3 gap-2",
          )}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={cn(
                "rounded-sm p-1.5",
                project.heroColor === "bg-white" || project.heroColor === "bg-[hsl(30,40%,92%)]"
                  ? "bg-[hsl(0,0%,96%)]"
                  : "bg-white/5"
              )}>
                <div className={cn(
                  "h-4 rounded-sm mb-1",
                  project.heroColor === "bg-white" || project.heroColor === "bg-[hsl(30,40%,92%)]"
                    ? "bg-[hsl(0,0%,90%)]"
                    : "bg-white/8"
                )} />
                <div className={cn(
                  "h-1 w-3/4 rounded-full mb-0.5",
                  project.heroColor === "bg-white" || project.heroColor === "bg-[hsl(30,40%,92%)]"
                    ? "bg-[hsl(0,0%,85%)]"
                    : "bg-white/10"
                )} />
                <div className={cn(
                  "h-1 w-1/2 rounded-full",
                  project.heroColor === "bg-white" || project.heroColor === "bg-[hsl(30,40%,92%)]"
                    ? "bg-[hsl(0,0%,88%)]"
                    : "bg-white/7"
                )} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioCard({ project, onSelect, className }: PortfolioCardProps) {
  return (
    <div
      onClick={() => onSelect?.(project)}
      className={cn(
        "group cursor-pointer stagger-child",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <BrowserMockup project={project} compact />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
          <div className="flex items-center gap-2 text-primary-foreground font-medium">
            <ExternalLink size={18} />
            View Project
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-display font-semibold text-foreground">{project.name}</h3>
        <p className="text-sm text-muted-foreground">{project.type}{project.location ? ` · ${project.location}` : ""}</p>
      </div>
    </div>
  );
}

export function CaseStudyPanel({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>
        <BrowserMockup project={project} />
        <div className="mt-6 space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">{project.name}</h2>
            <p className="text-sm text-amber font-medium mt-1">{project.type}{project.location ? ` · ${project.location}` : ""}</p>
          </div>
          <p className="text-muted-foreground">{project.description}</p>
          {project.challenge && (
            <div>
              <h4 className="font-display font-semibold text-foreground mb-1">The Challenge</h4>
              <p className="text-muted-foreground text-sm">{project.challenge}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <h4 className="font-display font-semibold text-foreground mb-1">What We Built</h4>
              <p className="text-muted-foreground text-sm">{project.solution}</p>
            </div>
          )}
          {project.result && (
            <div>
              <h4 className="font-display font-semibold text-foreground mb-1">The Result</h4>
              <p className="text-muted-foreground text-sm">{project.result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
