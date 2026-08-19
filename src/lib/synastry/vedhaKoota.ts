/**
 * Vedha Koota (Mutual Repulsion between Constellations)
 */

export const VEDHA_PAIRS: [number, number][] = [
  [0, 17], // Ashwini - Jyeshtha
  [1, 16], // Bharani - Anuradha
  [2, 15], // Krittika - Vishakha
  [3, 14], // Rohini - Swati
  [4, 13], // Mrigashira - Chitra
  [5, 12], // Ardra - Hasta
  [6, 11], // Punarvasu - Uttara Phalguni
  [7, 10], // Pushya - Purva Phalguni
  [8, 9]   // Ashlesha - Magha
];

export function hasVedhaAffliction(girlNakshatra: number, boyNakshatra: number): boolean {
  const g = girlNakshatra % 27;
  const b = boyNakshatra % 27;
  return VEDHA_PAIRS.some(([x, y]) => (g === x && b === y) || (g === y && b === x));
}
