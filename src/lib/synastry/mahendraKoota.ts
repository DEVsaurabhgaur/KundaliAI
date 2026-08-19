/**
 * Mahendra Koota (Lineage Welfare, Progeny Prosperity, Long-Term Bonding)
 * Count from Girl's Nakshatra to Boy's Nakshatra:
 * Favorable: 4, 7, 10, 13, 16, 19, 22, 25
 */

export function checkMahendraKoota(girlNakshatra: number, boyNakshatra: number): boolean {
  const count = ((boyNakshatra - girlNakshatra + 27) % 27) + 1;
  return [4, 7, 10, 13, 16, 19, 22, 25].includes(count);
}
