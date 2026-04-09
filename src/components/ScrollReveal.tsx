import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={cn("scroll-reveal", className)}>
      {children}
    </div>
  );
}
