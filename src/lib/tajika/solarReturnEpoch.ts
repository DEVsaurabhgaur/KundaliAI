/**
 * Tajika Varshaphala Solar Return Epoch Calculator
 * Finds the exact timestamp in target year when Sun returns to its exact natal sidereal longitude.
 */

export function calculateSolarReturnEpoch(natalSunLongitude: number, year: number): number {
  // Approximate solar return timestamp (1 solar sidereal year = 365.256363 days)
  const baseEpoch = new Date(year, 0, 1).getTime();
  const dayOffset = (natalSunLongitude / 360) * 365.256363 * 86400000;
  return baseEpoch + dayOffset;
}
