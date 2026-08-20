/**
 * Tripataki & SBC Intersection Cross-Lines
 */

export function checkSBCIntersection(starA: number, starB: number): boolean {
  return starA === starB || Math.abs(starA - starB) === 14;
}
