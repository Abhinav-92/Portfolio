import Link from "next/link";
import { siteConfig } from "@/data/site";

export function HeroSocials() {
  return (
    <div className="mt-10 flex items-center gap-6">
      <Link
        href={siteConfig.github}
        target="_blank"
        className="text-sm text-zinc-400 transition hover:text-white"
      >
        GitHub
      </Link>

      <Link
        href={siteConfig.linkedin}
        target="_blank"
        className="text-sm text-zinc-400 transition hover:text-white"
      >
        LinkedIn
      </Link>

      <Link
        href={`mailto:${siteConfig.email}`}
        className="text-sm text-zinc-400 transition hover:text-white"
      >
        Email
      </Link>
    </div>
  );
}