import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className }: LogoProps) {
  return (
    <span className={cn("font-display text-2xl font-bold tracking-tight", className)}>
      <span className="text-amber">Luma</span>
      <span className={variant === "light" ? "text-primary-foreground" : "text-foreground"}>
        Sites
      </span>
    </span>
  );
}
