"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({
  href,
  children,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();

  const active =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative rounded-md px-3 py-2",
        "text-sm font-medium",
        "text-muted-foreground",
        "transition-colors duration-300",
        "hover:text-foreground",
        active && "text-foreground"
      )}
    >
      {children}
    </Link>
  );
}