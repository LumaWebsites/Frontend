import { useState } from "react";
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
}

interface PortfolioCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
  className?: string;
}

function BrowserMockup({ project }: { project: Project }) {
  return (
    <div className="rounded-lg overflow-hidden border border-border/50 shadow-sm">
      {/* Browser chrome */}
      <div className="bg-muted/80 px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-background rounded-md px-3 py-1 text-[10px] text-muted-foreground truncate">
            www.{project.name.toLowerCase().replace(/\s+/g, "")}.com
          </div>
        </div>
      </div>
      {/* Page content mockup */}
      <div className={cn("aspect-[16/10] relative", project.color)}>
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className={cn("h-2.5 w-28 rounded-full", project.accent)} />
            <div className="h-5 w-3/4 rounded bg-white/20" />
            <div className="h-3 w-1/2 rounded bg-white/10" />
          </div>
          <div className="flex gap-3">
            <div className={cn("h-8 w-24 rounded-md", project.accent)} />
            <div className="h-8 w-20 rounded-md border border-white/20" />
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
        <BrowserMockup project={project} />
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
