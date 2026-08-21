/**
 * BSP Rule 5: Sun illuminates sovereign authority and creative progeny in 5th from itself in the 22nd year.
 */

export function calculateBSP5SunIllumination(sunHouse: number): number {
  return ((sunHouse + 4) % 12) + 1;
}
