/**
 * BSP Rule 9: Moon triggers mental tranquility or residence relocation in 4th from itself in the 24th year.
 */

export function calculateBSP9MoonRelocation(moonHouse: number): number {
  return ((moonHouse + 3) % 12) + 1;
}
