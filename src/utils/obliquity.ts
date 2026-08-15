/**
 * Obliquity of the Ecliptic (Epsilon) according to Laskar formula
 */

import { julianCenturiesSinceJ2000 } from './julianDay';

export function calculateTrueObliquity(jd: number): number {
  const T = julianCenturiesSinceJ2000(jd);

  // Mean obliquity in arcseconds
  const eps0 = 84381.448 - 46.8150 * T - 0.00059 * T * T + 0.001813 * T * T * T;
  return eps0 / 3600.0; // Convert to degrees
}
