/**
 * Ekadhipatya Shodhana Dual Ownership Reduction
 */

export function applyEkadhipatyaReduction(bindusA: number, bindusB: number, isPlanetInA: boolean, isPlanetInB: boolean) {
  if (isPlanetInA && isPlanetInB) return { a: bindusA, b: bindusB };
  if (!isPlanetInA && !isPlanetInB) {
    const min = Math.min(bindusA, bindusB);
    return { a: min, b: min };
  }
  return { a: bindusA, b: bindusB };
}
