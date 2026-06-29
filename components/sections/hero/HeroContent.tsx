interface HeroContentProps {
  title: string;
  description: string;
}

export function HeroContent({
  title,
  description,
}: HeroContentProps) {
  return (
    <div className="mt-8">
      <h1 className="max-w-5xl text-5xl font-semibold leading-none tracking-tighter text-white md:text-7xl xl:text-7xl">
        {title}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        {description}
      </p>
    </div>
  );
}