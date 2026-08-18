/**
 * Nakshatra Visha Ghati (4 Ghatis = 96 minutes of toxic time within each Nakshatra)
 */

export function isVishaGhatiActive(ghatiIntoNakshatra: number, startGhati: number): boolean {
  return ghatiIntoNakshatra >= startGhati && ghatiIntoNakshatra <= startGhati + 4;
}
