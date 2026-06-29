"use client";

import Link from "next/link";

interface SocialLinksProps {
  github: string;
  linkedin: string;
  email: string;
}

export function SocialLinks({
  github,
  linkedin,
  email,
}: SocialLinksProps) {
  const links = [
    {
      href: github,
      label: "GitHub",
    },
    {
      href: linkedin,
      label: "LinkedIn",
    },
    {
      href: `mailto:${email}`,
      label: "Email",
    },
  ];

  return (
    <div className="flex items-center gap-5">
      {links.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 transition-colors hover:text-white"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}