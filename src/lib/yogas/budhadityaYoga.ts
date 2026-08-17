/**
 * Budhaditya Yoga (Sun + Mercury Conjunction)
 */

export function checkBudhadityaYoga(isSunWithMercury: boolean, separationDeg: number): boolean {
  return isSunWithMercury && separationDeg >= 3.0 && separationDeg <= 14.0;
}
