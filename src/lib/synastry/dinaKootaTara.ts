/**
 * Dina Koota (3 Points in Ashtakoota)
 * Count from Girl's star to Boy's star mod 9:
 * Favorable: 2 (Sampat), 4 (Kshema), 6 (Sadhana), 8 (Mitra), 9 (Parama Mitra) -> 3 Points.
 */

export function calculateDinaKoota(girlNak: number, boyNak: number): number {
  const count = ((boyNak - girlNak + 27) % 27) + 1;
  const rem = ((count - 1) % 9) + 1;
  return [2, 4, 6, 8, 9].includes(rem) ? 3.0 : 0.0;
}
