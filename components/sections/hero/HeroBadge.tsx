import Badge from "@/components/ui/badge";

interface HeroBadgeProps {
  text: string;
}

export function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <Badge className="mb-8">
      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />

      {text}
    </Badge>
  );
}