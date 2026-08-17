/**
 * Ghatika Lagna (GL - Authority & Power Point)
 * Advances 1 sign per Ghati (24 minutes) from sunrise.
 */

export function calculateGhatikaLagna(sunLongDeg: number, minutesAfterSunrise: number): number {
  const ghatis = minutesAfterSunrise / 24;
  const glDeg = (sunLongDeg + ghatis * 30) % 360;
  return Number(glDeg.toFixed(2));
}
