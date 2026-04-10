import { ExternalLink, X, Wheat, Wrench, ClipboardCheck, Hammer, HardHat, SearchCheck, Stethoscope, Sparkles, SmilePlus, Dumbbell, Flame, UserCheck, Camera, Heart, PartyPopper, TreePine, Fence, Leaf } from "lucide-react";
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
  heroImage?: string;
  heroOverlay?: string;
}

interface PortfolioCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
  className?: string;
}

const blockIcons: Record<string, Record<string, React.ElementType>> = {
  bakery: { "Artisan Breads": Wheat, "Custom Cakes": Sparkles, "Daily Pastries": Wrench },
  roofing: { "Roof Repairs": Hammer, "New Installation": HardHat, "Inspections": SearchCheck },
  dental: { "General Dentistry": Stethoscope, "Cosmetic": Sparkles, "Orthodontics": SmilePlus },
  gym: { "Strength": Dumbbell, "HIIT Classes": Flame, "Personal Training": UserCheck },
  photography: { "Weddings": Heart, "Portraits": Camera, "Events": PartyPopper },
  landscaping: { "Landscaping": TreePine, "Hardscaping": Fence, "Lawn Care": Leaf },
};

function BrowserMockup({ project, compact = false }: { project: Project; compact?: boolean }) {
  const hasImage = !!project.heroImage;

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
      <div className="relative overflow-hidden">
        <div className="flex flex-col">
          {/* Navbar */}
          <div className={cn(
            "flex items-center justify-between px-4 py-2 border-b relative z-10",
            hasImage ? "border-white/10 bg-black/30" : "border-white/10"
          )}>
            <span className="text-[9px] font-bold tracking-wide text-white">
              {project.name}
            </span>
            <div className="flex gap-3">
              {project.navLinks.map((link) => (
                <span key={link} className="text-[7px] text-white/60">
                  {link}
                </span>
              ))}
            </div>
          </div>

          {/* Hero section with background image */}
          <div className="relative" style={{ minHeight: compact ? "140px" : "180px" }}>
            {hasImage && (
              <>
                <img
                  src={project.heroImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ backgroundColor: project.heroOverlay }} />
              </>
            )}
            {!hasImage && <div className={cn("absolute inset-0", project.heroColor)} />}
            <div className="relative z-10 flex flex-col justify-center px-4 py-6">
              <div className={cn(
                compact ? "text-[12px]" : "text-[14px]",
                "font-bold leading-tight mb-1.5",
                project.heroDecor === "photography" ? "italic" : "",
                "text-white"
              )}>
                {project.headline}
              </div>
              <div className="text-[7px] leading-relaxed mb-3 max-w-[75%] text-white/70">
                {project.subtext || "Serving our community with quality and care."}
              </div>
              <div className="flex gap-1.5 items-center">
                <div className={cn("h-4 px-2.5 rounded-sm text-[6px] flex items-center justify-center font-semibold text-white whitespace-nowrap", project.heroAccent)}>
                  {project.ctaText || "Learn More"}
                </div>
                <div className="h-4 px-2.5 rounded-sm text-[6px] flex items-center justify-center border border-white/30 text-white/70 whitespace-nowrap">
                  {project.ctaSecondary || "Contact"}
                </div>
              </div>
            </div>
          </div>

          {/* Content blocks — detailed service cards */}
          <div className={cn("px-3 py-3 grid grid-cols-3 gap-2", hasImage ? "bg-[hsl(0,0%,97%)]" : "bg-white/5")}>
            {(project.contentBlocks || []).map((block, i) => {
              const icons = blockIcons[project.heroDecor || ""] || {};
              const IconComp = icons[block.title];
              return (
                <div key={i} className={cn(
                  "rounded p-2",
                  hasImage ? "bg-white border border-[hsl(0,0%,92%)]" : "bg-white/10"
                )}>
                  {IconComp && (
                    <div className={cn("mb-1", hasImage ? "text-[hsl(0,0%,40%)]" : "text-white/40")}>
                      <IconComp size={10} />
                    </div>
                  )}
                  <div className={cn("text-[6.5px] font-bold mb-0.5", hasImage ? "text-[hsl(0,0%,20%)]" : "text-white/80")}>
                    {block.title}
                  </div>
                  <div className={cn("text-[5.5px] leading-relaxed", hasImage ? "text-[hsl(0,0%,50%)]" : "text-white/40")} style={{ display: "-webkit-box", WebkitLineClamp: compact ? 2 : 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {block.desc}
                  </div>
                </div>
              );
            })}
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
