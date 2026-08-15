/**
 * Lunar Node Corrections: True Node vs Mean Node calculations
 * Periodic perturbations cause True Rahu/Ketu to wobble around Mean Rahu/Ketu.
 */

export function getTrueNodeOffsetDegrees(julianCenturies: number): number {
  const T = julianCenturies;
  // Principal lunar perturbation term (approx 1.5 degrees oscillation)
  const M = (134.9634 + 477198.8675 * T) * (Math.PI / 180);
  const offset = -1.4979 * Math.sin(2 * M) + 0.1500 * Math.sin(M);
  return offset;
}

export function calculateTrueRahuLongitude(meanRahuLongitude: number, julianCenturies: number): number {
  const offset = getTrueNodeOffsetDegrees(julianCenturies);
  return ((meanRahuLongitude + offset) % 360 + 360) % 360;
}
