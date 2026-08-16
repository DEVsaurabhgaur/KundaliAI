/**
 * Shri Lagna (SL - Prosperity & Fortune Point)
 */

export function calculateShriLagna(ascendantDeg: number, moonDeg: number): number {
  return ((ascendantDeg + moonDeg) % 360 + 360) % 360;
}
