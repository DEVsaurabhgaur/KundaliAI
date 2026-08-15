/**
 * Nadi Dosha Cancellations
 * Cancelled if:
 * 1. Both have same Moon sign but different Nakshatras
 * 2. Both have same Nakshatra but different Moon signs (border nakshatra)
 * 3. Both have same Nakshatra with different padas (quarters)
 */

export function checkNadiDoshaCancellation(
  boySign: number,
  girlSign: number,
  boyNak: number,
  girlNak: number,
  boyPada: number,
  girlPada: number
) {
  const reasons: string[] = [];

  if (boySign === girlSign && boyNak !== girlNak) {
    reasons.push('Same Moon sign but distinct Nakshatras dissolves Nadi Dosha.');
  }
  if (boyNak === girlNak && boySign !== girlSign) {
    reasons.push('Same Nakshatra spanning across distinct Rashi signs.');
  }
  if (boyNak === girlNak && boyPada !== girlPada) {
    reasons.push('Distinct Nakshatra Padas (quarters) mitigate physiological disharmony.');
  }

  return {
    isCancelled: reasons.length > 0,
    reasons
  };
}
