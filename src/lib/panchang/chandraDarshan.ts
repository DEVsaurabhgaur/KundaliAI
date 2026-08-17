/**
 * Chandra Darshan (First Crescent Moon Sighting after New Moon)
 */

export function calculateChandraDarshan(moonSunElongationDeg: number): boolean {
  // First crescent is clearly visible to the naked eye after sunset once elongation exceeds 10.5 degrees
  return moonSunElongationDeg >= 10.5 && moonSunElongationDeg <= 24.0;
}
