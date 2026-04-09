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
  subtext?: string;
  ctaText?: string;
  ctaSecondary?: string;
  contentBlocks?: { title: string; desc: string }[];
  heroDecor?: string;
}

interface PortfolioCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
  className?: string;
}

function HeroDecor({ type, compact }: { type?: string; compact?: boolean }) {
  const size = compact ? "scale-75" : "";
  switch (type) {
    case "bakery":
      return (
        <div className={cn("absolute right-2 top-1/2 -translate-y-1/2 opacity-20", size)}>
          {/* Bread/croissant silhouette */}
          <div className="w-10 h-6 rounded-[50%] bg-[hsl(30,60%,50%)] mb-1" />
          <div className="w-8 h-5 rounded-[50%] bg-[hsl(25,50%,45%)] ml-1" />
          <div className="w-6 h-4 rounded-full bg-[hsl(350,40%,60%)] ml-2 mt-1" />
        </div>
      );
    case "roofing":
      return (
        <div className={cn("absolute right-1 bottom-1 opacity-15", size)}>
          {/* Rooftop/house silhouette */}
          <svg viewBox="0 0 60 40" className="w-16 h-10" fill="white">
            <polygon points="30,2 58,22 50,22 50,38 10,38 10,22 2,22" />
            <rect x="22" y="24" width="8" height="14" fill="hsl(200,70%,50%)" opacity="0.5" />
            <rect x="36" y="26" width="8" height="6" fill="hsl(200,70%,50%)" opacity="0.3" />
          </svg>
        </div>
      );
    case "dental":
      return (
        <div className={cn("absolute right-3 top-1/2 -translate-y-1/2 opacity-15", size)}>
          {/* Tooth icon */}
          <svg viewBox="0 0 40 50" className="w-8 h-10" fill="hsl(175,55%,45%)">
            <path d="M20,2 C28,2 34,8 34,16 C34,22 32,26 30,32 C28,40 26,48 24,48 C22,48 22,40 20,36 C18,40 18,48 16,48 C14,48 12,40 10,32 C8,26 6,22 6,16 C6,8 12,2 20,2Z" />
          </svg>
        </div>
      );
    case "gym":
      return (
        <div className={cn("absolute right-2 top-1/2 -translate-y-1/2 opacity-15", size)}>
          {/* Dumbbell */}
          <svg viewBox="0 0 60 30" className="w-14 h-7" fill="hsl(45,100%,50%)">
            <rect x="20" y="12" width="20" height="6" rx="1" />
            <rect x="6" y="6" width="10" height="18" rx="2" />
            <rect x="44" y="6" width="10" height="18" rx="2" />
            <rect x="2" y="9" width="6" height="12" rx="1.5" />
            <rect x="52" y="9" width="6" height="12" rx="1.5" />
          </svg>
        </div>
      );
    case "photography":
      return (
        <div className={cn("absolute right-2 top-1/2 -translate-y-1/2 opacity-12", size)}>
          {/* Camera */}
          <svg viewBox="0 0 50 40" className="w-12 h-9" fill="hsl(35,70%,55%)">
            <rect x="4" y="12" width="42" height="26" rx="4" />
            <rect x="16" y="6" width="18" height="8" rx="2" />
            <circle cx="25" cy="26" r="8" fill="none" stroke="hsl(35,70%,55%)" strokeWidth="2" />
            <circle cx="25" cy="26" r="4" />
          </svg>
        </div>
      );
    case "landscaping":
      return (
        <div className={cn("absolute right-1 bottom-1 opacity-15", size)}>
          {/* Tree silhouettes */}
          <svg viewBox="0 0 60 40" className="w-14 h-9" fill="hsl(90,50%,45%)">
            <ellipse cx="15" cy="16" rx="12" ry="14" />
            <rect x="13" y="28" width="4" height="10" fill="hsl(30,40%,35%)" />
            <ellipse cx="40" cy="12" rx="10" ry="11" />
            <rect x="38" y="22" width="4" height="16" fill="hsl(30,40%,35%)" />
            <ellipse cx="28" cy="20" rx="8" ry="9" />
            <rect x="26" y="28" width="4" height="10" fill="hsl(30,40%,35%)" />
          </svg>
        </div>
      );
    default:
      return null;
  }
}

function BrowserMockup({ project, compact = false }: { project: Project; compact?: boolean }) {
  const isLight = project.heroColor === "bg-white" || project.heroColor === "bg-[hsl(30,40%,92%)]";
  
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

      {/* Website content */}
      <div className={cn("aspect-[16/10] relative overflow-hidden", project.heroColor)}>
        <div className="absolute inset-0 flex flex-col">
          {/* Navbar */}
          <div className={cn(
            "flex items-center justify-between px-4 py-2 border-b",
            isLight ? "border-[hsl(0,0%,90%)]" : "border-white/10"
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

          {/* Hero section with decor */}
          <div className="flex-1 flex flex-col justify-center px-4 pb-1 relative">
            <HeroDecor type={project.heroDecor} compact={compact} />
            <div className={cn(
              compact ? "text-[10px]" : "text-[11px]",
              "font-bold leading-tight mb-1",
              project.heroDecor === "photography" ? "italic" : "",
              project.textColor
            )}>
              {project.headline}
            </div>
            <div className={cn("text-[6.5px] leading-relaxed mb-2 max-w-[65%]", project.subtextColor)}>
              {project.subtext || "Serving our community with quality and care."}
            </div>
            <div className="flex gap-1.5 items-center">
              <div className={cn("h-4 px-2 rounded-sm text-[6px] flex items-center justify-center font-semibold text-white whitespace-nowrap", project.heroAccent)}>
                {project.ctaText || "Learn More"}
              </div>
              <div className={cn(
                "h-4 px-2 rounded-sm text-[6px] flex items-center justify-center border whitespace-nowrap",
                isLight
                  ? "border-[hsl(0,0%,75%)] text-[hsl(0,0%,45%)]"
                  : "border-white/30 text-white/60"
              )}>
                {project.ctaSecondary || "Contact"}
              </div>
            </div>
          </div>

          {/* Content blocks — unique per business */}
          <div className="px-4 pb-3 grid grid-cols-3 gap-1.5">
            {(project.contentBlocks || [{ title: "Service 1", desc: "Details" }, { title: "Service 2", desc: "Details" }, { title: "Service 3", desc: "Details" }]).map((block, i) => (
              <div key={i} className={cn(
                "rounded-sm p-1.5",
                isLight ? "bg-[hsl(0,0%,96%)]" : "bg-white/5"
              )}>
                <div className={cn("text-[6px] font-bold mb-0.5 truncate", project.textColor)}>
                  {block.title}
                </div>
                <div className={cn("text-[5.5px] truncate", project.subtextColor)}>
                  {block.desc}
                </div>
                <div className={cn(
                  "h-3 rounded-sm mt-1",
                  isLight ? "bg-[hsl(0,0%,90%)]" : "bg-white/8"
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
