/**
 * Pancha Shala Vedha (5-Line Obstruction in SBC)
 */

export function isPanchaShalaVedha(starA: number, starB: number): boolean {
  return (starA + starB) % 5 === 0;
}
