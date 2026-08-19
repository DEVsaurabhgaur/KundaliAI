/**
 * Nadi Koota (8 Points) Cancellation Exceptions
 * 1. Same Rashi but different Nakshatras.
 * 2. Same Nakshatra but different Rashis.
 * 3. Same Nakshatra with different Padas.
 */

export function isNadiDoshaCancelled(isSameRashiDiffNak: boolean, isDiffPada: boolean): boolean {
  return isSameRashiDiffNak || isDiffPada;
}
