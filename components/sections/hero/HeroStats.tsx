import type { HeroStat } from "@/types/hero";

import { GlassCard } from "@/components/ui/glass-card";

interface HeroStatsProps {
  stats: readonly HeroStat[];
}

export function HeroStats({
  stats,
}: HeroStatsProps) {
  return (
    <div className="mt-20 flex flex-wrap gap-5">
      {stats.map((item) => (
        <GlassCard
          key={item.label}
          className="w-[180px] p-5"
        >
          <h3 className="text-3xl font-semibold tracking-tight">
            {item.value}
          </h3>

          <p className="mt-3 text-sm text-zinc-400">
            {item.label}
          </p>
        </GlassCard>
      ))}
    </div>
  );
}