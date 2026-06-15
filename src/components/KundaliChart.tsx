// North Indian style Kundali chart — diamond with 12 houses
// Decorative for the landing hero; numbers are sample data.

const SAMPLE = [
  { house: 1, sign: "Ari", planets: ["Su", "Ma"] },
  { house: 2, sign: "Tau", planets: [] },
  { house: 3, sign: "Gem", planets: ["Me"] },
  { house: 4, sign: "Can", planets: ["Mo"] },
  { house: 5, sign: "Leo", planets: [] },
  { house: 6, sign: "Vir", planets: ["Ra"] },
  { house: 7, sign: "Lib", planets: ["Ve"] },
  { house: 8, sign: "Sco", planets: [] },
  { house: 9, sign: "Sag", planets: ["Ju"] },
  { house: 10, sign: "Cap", planets: ["Sa"] },
  { house: 11, sign: "Aqu", planets: [] },
  { house: 12, sign: "Pis", planets: ["Ke"] },
];

// Label position per house (x, y) on a 400x400 viewbox
const HOUSE_POS: Record<number, { x: number; y: number }> = {
  1: { x: 200, y: 130 },
  2: { x: 110, y: 75 },
  3: { x: 70, y: 110 },
  4: { x: 130, y: 200 },
  5: { x: 70, y: 290 },
  6: { x: 110, y: 325 },
  7: { x: 200, y: 270 },
  8: { x: 290, y: 325 },
  9: { x: 330, y: 290 },
  10: { x: 270, y: 200 },
  11: { x: 330, y: 110 },
  12: { x: 290, y: 75 },
};

export function KundaliChart({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Halo */}
      <div className="absolute inset-0 -m-10 rounded-full bg-gradient-to-br from-cosmic/30 via-nebula/20 to-transparent blur-3xl" />

      {/* Outer rotating zodiac ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.7 0.2 40)" />
              <stop offset="100%" stopColor="oklch(0.55 0.22 290)" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="195" fill="none" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="2 6" opacity="0.6" />
          <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ringGrad)" strokeWidth="0.5" opacity="0.4" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            const x1 = 200 + Math.cos(a) * 180;
            const y1 = 200 + Math.sin(a) * 180;
            const x2 = 200 + Math.cos(a) * 195;
            const y2 = 200 + Math.sin(a) * 195;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#ringGrad)" strokeWidth="1" opacity="0.7" />;
          })}
        </svg>
      </div>

      {/* North Indian diamond chart */}
      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.83 0.15 75)" />
            <stop offset="100%" stopColor="oklch(0.7 0.2 40)" />
          </linearGradient>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.23 0.11 290 / 0.7)" />
            <stop offset="100%" stopColor="oklch(0.18 0.08 290 / 0.4)" />
          </linearGradient>
        </defs>

        {/* Outer square */}
        <rect x="40" y="40" width="320" height="320" fill="url(#bgGrad)" stroke="url(#lineGrad)" strokeWidth="1.5" rx="6" />
        {/* Diagonals */}
        <line x1="40" y1="40" x2="360" y2="360" stroke="url(#lineGrad)" strokeWidth="1.2" />
        <line x1="360" y1="40" x2="40" y2="360" stroke="url(#lineGrad)" strokeWidth="1.2" />
        {/* Inner diamond */}
        <polygon
          points="200,40 360,200 200,360 40,200"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
        />

        {/* House labels & planets */}
        {SAMPLE.map((h) => {
          const p = HOUSE_POS[h.house];
          return (
            <g key={h.house}>
              <text
                x={p.x}
                y={p.y}
                textAnchor="middle"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9"
                fill="oklch(0.65 0.06 290)"
              >
                {h.house}
              </text>
              {h.planets.length > 0 && (
                <text
                  x={p.x}
                  y={p.y + 14}
                  textAnchor="middle"
                  fontFamily="Cinzel, serif"
                  fontSize="11"
                  fontWeight="600"
                  fill="oklch(0.88 0.16 90)"
                >
                  {h.planets.join(" ")}
                </text>
              )}
            </g>
          );
        })}

        {/* Center sigil */}
        <circle cx="200" cy="200" r="22" fill="oklch(0.12 0.05 290)" stroke="url(#lineGrad)" strokeWidth="1" />
        <text x="200" y="206" textAnchor="middle" fontSize="20" fill="oklch(0.88 0.16 90)" fontFamily="Cinzel, serif">
          ॐ
        </text>
      </svg>
    </div>
  );
}
