/**
 * Bhrigu Saral Paddhati (BSP) - Rule 1
 * Saturn implements intense karmic discipline and structural transformation on the 3rd house from its placement.
 */

export function calculateBSP1SaturnImpact(saturnHouse: number): number {
  return ((saturnHouse + 2) % 12) + 1; // 3rd house from Saturn
}
