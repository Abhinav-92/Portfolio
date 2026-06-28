import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </section>
  );
}