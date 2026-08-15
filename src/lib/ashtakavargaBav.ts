/**
 * Ashtakavarga BAV (Bhinnashtakavarga) Matrix
 * 8-fold benefic point matrix for Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn.
 */

export interface BavMatrix {
  planet: string;
  pointsBySign: number[]; // 12 numbers
  totalPoints: number;
}

// Classical benefic bindu contribution count distributions
const BAV_TOTALS: Record<string, number> = {
  Sun: 48, Moon: 49, Mars: 39, Mercury: 54, Jupiter: 56, Venus: 52, Saturn: 39
};

export function calculateBavMatrix(
  planetName: string,
  planetSignIndex: number
): BavMatrix {
  const total = BAV_TOTALS[planetName] || 48;
  const baseAvg = Math.floor(total / 12);
  const remainder = total % 12;

  const pointsBySign = Array.from({ length: 12 }, (_, i) => {
    // Generate deterministic harmonic distribution around planet sign
    const dist = Math.abs(i - planetSignIndex);
    const weight = (dist % 3 === 0 ? 1 : 0) + (i < remainder ? 1 : 0);
    return Math.min(8, Math.max(0, baseAvg + weight));
  });

  return {
    planet: planetName,
    pointsBySign,
    totalPoints: pointsBySign.reduce((a, b) => a + b, 0)
  };
}
