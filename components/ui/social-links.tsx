"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

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
      icon: Github,
      label: "GitHub",
    },
    {
      href: linkedin,
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: `mailto:${email}`,
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          aria-label={label}
          className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
        >
          <Icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}