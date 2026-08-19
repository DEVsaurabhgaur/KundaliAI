/**
 * Ashtakavarga Graha Pinda (Planetary Multipliers)
 * Sun=5, Moon=5, Mars=8, Mercury=5, Jupiter=10, Venus=7, Saturn=5
 */

export const GRAHA_PINDA_MULTIPLIERS: Record<string, number> = {
  Sun: 5, Moon: 5, Mars: 8, Mercury: 5, Jupiter: 10, Venus: 7, Saturn: 5
};

export function calculateGrahaPinda(planetOccupiedSignBindus: Record<string, number>): number {
  let sum = 0;
  for (const [p, bindus] of Object.entries(planetOccupiedSignBindus)) {
    sum += bindus * (GRAHA_PINDA_MULTIPLIERS[p] || 5);
  }
  return sum;
}
