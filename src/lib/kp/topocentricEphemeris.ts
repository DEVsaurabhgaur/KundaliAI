/**
 * KP Topocentric Parallax Correction
 * Corrects geocentric Moon coordinates to the observer's exact surface location.
 */

export function applyTopocentricParallax(geocentricMoonLong: number, parallaxCorrectionDeg: number): number {
  return ((geocentricMoonLong + parallaxCorrectionDeg) % 360 + 360) % 360;
}
