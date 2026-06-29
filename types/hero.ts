export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroData {
  badge: string;
  title: string;
  description: string;

  primaryButton: {
    text: string;
    href: string;
  };

  secondaryButton: {
    text: string;
    href: string;
  };

  stats: HeroStat[];
}