/**
 * Auxiliary Kootas: Mahendra Koota & Stree Deergha Koota
 * Mahendra: Endows attachment and longevity of family lineage.
 * Stree Deergha: Enhances general health and prosperity for the wife.
 */

export function calculateMahendraAndStreeDeergha(boyNak: number, girlNak: number) {
  const count = ((boyNak - girlNak + 27) % 27) + 1;

  // Mahendra: 4th, 7th, 10th, 13th, 16th, 19th, 22nd, 25th from bride's nakshatra
  const hasMahendra = [4, 7, 10, 13, 16, 19, 22, 25].includes(count);

  // Stree Deergha: Groom's nakshatra is more than 9 or 15 nakshatras away from bride's
  const hasStreeDeergha = count > 9;

  return {
    hasMahendra,
    hasStreeDeergha,
    distanceCount: count
  };
}
