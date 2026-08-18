/**
 * Ekargala Dosha (Obstruction on Yoga stars from Sun/Moon nakshatra cross-lines)
 */

export function isEkargalaActive(sunNakshatra: number, moonNakshatra: number): boolean {
  return (sunNakshatra + moonNakshatra) % 27 === 0;
}
