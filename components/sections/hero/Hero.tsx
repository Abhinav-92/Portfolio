import { heroData } from "@/data/hero";

import { HeroActions } from "./HeroActions";
import { HeroBadge } from "./HeroBadge";
import { HeroContent } from "./HeroContent";
import { HeroSocials } from "./HeroSocials";
import { HeroStats } from "./HeroStats";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-28 pb-20 md:px-10 lg:px-16">
        <div className="w-full max-w-4xl">
          <HeroBadge text={heroData.badge} />

          <HeroContent
            title={heroData.title}
            description={heroData.description}
          />

          <HeroActions
            primary={heroData.primaryButton}
            secondary={heroData.secondaryButton}
          />

          <HeroSocials />

          <HeroStats stats={heroData.stats} />
        </div>
      </div>
    </section>
  );
}