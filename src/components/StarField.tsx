import { useMemo } from "react";

// SSR-safe StarField using a seeded pseudo-random to avoid hydration mismatch
function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function StarField({ density = 80 }: { density?: number }) {
  const stars = useMemo(() => {
    const rand = seededRand(density * 13 + 7);
    return Array.from({ length: density }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: rand() * 1.8 + 0.4,
      delay: rand() * 5,
      duration: 2.5 + rand() * 4,
      opacity: 0.2 + rand() * 0.6,
    }));
  }, [density]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
