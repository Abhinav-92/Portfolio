import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className={[
        "inline-flex items-center gap-2 font-semibold tracking-tight",
        "transition-opacity duration-300 hover:opacity-80",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <span className="text-sm font-bold">AG</span>
      </div>

      <span className="hidden text-base md:block">
        Abhinav Goyal
      </span>
    </Link>
  );
}