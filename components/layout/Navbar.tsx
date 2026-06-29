"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled && "py-3"
      )}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={cn(
            "flex h-16 items-center justify-between rounded-2xl transition-all duration-300",
            scrolled
              ? "border border-white/10 bg-background/70 shadow-lg backdrop-blur-xl"
              : "bg-transparent"
          )}
        >
          {/* Logo */}
          <div className="px-4">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3 px-4">
            <Button
              asChild
              className="hidden rounded-full md:inline-flex"
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Button>

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}