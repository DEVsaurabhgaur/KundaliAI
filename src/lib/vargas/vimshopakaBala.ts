/**
 * Vimshopaka Bala (20-Point Aggregate Strength across Shodashavarga)
 * Weights: D1 (3.5), D2 (1.0), D3 (1.0), D9 (3.0), D10 (0.5), D60 (4.0), etc.
 */

export interface VimshopakaScore {
  planet: string;
  totalVimshopakaPoints: number; // Max 20
  percentage: number;
}

export function calculateVimshopakaScore(
  planet: string,
  dignityByVarga: Record<string, 'Exalted' | 'Own' | 'Friend' | 'Neutral' | 'Enemy' | 'Debilitated'>
): VimshopakaScore {
  const weights: Record<string, number> = {
    D1: 3.5, D2: 1.0, D3: 1.0, D7: 0.5, D9: 3.0, D10: 0.5,
    D12: 0.5, D16: 1.0, D20: 0.5, D24: 0.5, D27: 0.5, D30: 1.0,
    D40: 0.5, D45: 0.5, D60: 5.0
  };

  const dignityMultiplier: Record<string, number> = {
    Exalted: 1.0, Own: 0.9, Friend: 0.75, Neutral: 0.5, Enemy: 0.25, Debilitated: 0.1
  };

  let totalPoints = 0;
  for (const [varga, weight] of Object.entries(weights)) {
    const dignity = dignityByVarga[varga] || 'Neutral';
    totalPoints += weight * dignityMultiplier[dignity];
  }

  return {
    planet,
    totalVimshopakaPoints: Number(totalPoints.toFixed(2)),
    percentage: Math.round((totalPoints / 20) * 100)
  };
}
