/**
 * Lal Kitab Annual Varshaphala Rotating House Mapping
 */

export function calculateLalKitabVarshaphalHouse(natalHouse: number, runningAge: number): number {
  return ((natalHouse + runningAge - 2) % 12) + 1;
}
