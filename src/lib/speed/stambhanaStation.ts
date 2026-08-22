/**
 * Stambhana (Planetary Stationing / Zero Velocity Point)
 * When planet speed approaches zero (±0.02 deg/day), energy crystallizes intensely.
 */

export function isPlanetaryStationing(dailySpeedDeg: number): boolean {
  return Math.abs(dailySpeedDeg) <= 0.02;
}
