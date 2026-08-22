/**
 * Kala Sarpa Yoga Cancellation (Bhanga) Criteria:
 * 1. Planet conjoined Rahu or Ketu breaking the enclosure.
 * 2. Jupiter or Venus in Kendra from Lagna.
 * 3. Rajayoga forming planet exalted outside the nodal hemisphere.
 * 4. Moon in trine with Jupiter (Gaja Kesari).
 */

export function isKalaSarpaCancelled(isPlanetOutsideAxis: boolean, isJupiterInKendra: boolean, isGajaKesariActive: boolean): boolean {
  return isPlanetOutsideAxis || isJupiterInKendra || isGajaKesariActive;
}
