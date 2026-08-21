/**
 * BSP Rule 8: Ketu sparks spiritual awakening, moksha, and detachment in 12th from itself in the 48th year.
 */

export function calculateBSP8KetuLiberation(ketuHouse: number): number {
  return ((ketuHouse + 11) % 12) + 1;
}
