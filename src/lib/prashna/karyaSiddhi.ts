/**
 * Karya Siddhi (Query Fruitful Manifestation)
 * Evaluates Ithasala or Mutual Aspect between Lagnesha (Querent) and Karyesha (Subject Matter Lord).
 */

export function evaluateKaryaSiddhi(isIthasalaPresent: boolean, isMoonFavorable: boolean, isLordBenefic: boolean): string {
  if (isIthasalaPresent && isMoonFavorable) return 'Purna Karya Siddhi: Guaranteed immediate success.';
  if (isIthasalaPresent || (isMoonFavorable && isLordBenefic)) return 'Madhyama Siddhi: Success achievable after minor delay.';
  return 'Asiddhi: Obstacles present; postponement recommended.';
}
