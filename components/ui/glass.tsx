import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type GlassProps = HTMLAttributes<HTMLDivElement>;

export function Glass({
  className,
  children,
  ...props
}: GlassProps) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        "border border-white/10",
        "bg-white/[0.04]",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}