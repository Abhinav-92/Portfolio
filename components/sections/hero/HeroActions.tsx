import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeroActionsProps {
  primary: {
    text: string;
    href: string;
  };
  secondary: {
    text: string;
    href: string;
  };
}

export function HeroActions({
  primary,
  secondary,
}: HeroActionsProps) {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
      <Button
        asChild
        size="lg"
        className="h-12 rounded-full px-8"
      >
        <Link href={primary.href}>
          {primary.text}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-full px-8"
      >
        <Link
          href={secondary.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {secondary.text}
        </Link>
      </Button>
    </div>
  );
}