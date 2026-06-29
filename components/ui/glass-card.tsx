import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        "border border-white/10",
        "bg-white/4",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:border-white/20",
        "hover:bg-white/6",
        className
      )}
    >
      {children}
    </div>
  );
}