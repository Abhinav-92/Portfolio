import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function Heading({
  title,
  subtitle,
  className,
  centered = false,
  children,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}