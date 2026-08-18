/**
 * Tajika Dwadashavargiya Bala (12-Varga Strength)
 * Allocates points across 12 divisional charts (Max = 20 Biswas / Points).
 */

export function calculateDwadashavargiyaScore(ownSignsCount: number, exaltationCount: number): number {
  const score = ownSignsCount * 1.5 + exaltationCount * 2.0;
  return Math.min(20, Math.max(0, Number(score.toFixed(2))));
}
