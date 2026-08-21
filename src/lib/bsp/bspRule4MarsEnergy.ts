/**
 * Bhrigu Saral Paddhati (BSP) - Rule 4
 * Mars creates sudden dynamic career and energetic surges in the 10th house from its placement during the 28th year.
 */

export function calculateBSP4MarsSurge(marsHouse: number): number {
  return ((marsHouse + 9) % 12) + 1;
}
