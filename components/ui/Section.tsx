import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28 lg:py-36",
        className
      )}
    >
      {children}
    </section>
  );
}