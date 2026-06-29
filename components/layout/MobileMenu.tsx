"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileMenuProps {
  resumeUrl?: string;
}

export function MobileMenu({
  resumeUrl = "/resume.pdf",
}: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-white/10 bg-background/95 backdrop-blur-xl"
      >
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <nav className="mt-10 flex flex-col gap-3">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base transition-colors hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}

          <Button
            asChild
            className="mt-6 rounded-full"
          >
            <Link
              href={resumeUrl}
              target="_blank"
            >
              Resume
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}