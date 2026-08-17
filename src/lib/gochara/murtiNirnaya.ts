/**
 * Gochara Murti Nirnaya (Transit Manifestation Metal)
 * Moon in 1, 6, 11 from transit planet -> Swarna (Gold - Supreme)
 * Moon in 2, 5, 9 -> Rajata (Silver - Very Auspicious)
 * Moon in 3, 7, 10 -> Tamra (Copper - Moderate)
 * Moon in 4, 8, 12 -> Loha (Iron - Challenging)
 */

export function evaluateMurtiNirnaya(houseOfMoonFromTransitEntry: number) {
  if ([1, 6, 11].includes(houseOfMoonFromTransitEntry)) {
    return { murti: 'Swarna (Gold)', quality: 'Supreme Fruits & Joy' };
  }
  if ([2, 5, 9].includes(houseOfMoonFromTransitEntry)) {
    return { murti: 'Rajata (Silver)', quality: 'Very Favorable & Gains' };
  }
  if ([3, 7, 10].includes(houseOfMoonFromTransitEntry)) {
    return { murti: 'Tamra (Copper)', quality: 'Moderate / Mixed Results' };
  }
  return { murti: 'Loha (Iron)', quality: 'Challenging / Requires Patience' };
}
