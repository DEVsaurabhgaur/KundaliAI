/**
 * Samudaya Ashtakavarga (SAV) House Ingress Evaluator
 */

export function evaluateSAVHouse(binduCount: number): string {
  if (binduCount >= 32) return 'Supreme Fortune (32+ Bindus)';
  if (binduCount >= 28) return 'Auspicious Progress (28-31 Bindus)';
  if (binduCount >= 25) return 'Moderate Equilibrium (25-27 Bindus)';
  return 'Karmic Friction (<25 Bindus)';
}
