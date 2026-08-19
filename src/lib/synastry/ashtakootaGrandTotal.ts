/**
 * Ashtakoota 36-Guna Grand Total & Verdict
 * Varna (1), Vashya (2), Tara (3), Yoni (4), Graha Maitri (5), Gana (6), Bhakoot (7), Nadi (8)
 */

export function calculate36GunaVerdict(points: number) {
  return {
    totalPoints: points,
    isApproved: points >= 18,
    verdict: points >= 28 ? 'Outstanding Match (Uttama)' : points >= 18 ? 'Acceptable Match (Madhyama)' : 'Not Recommended (Varjya)'
  };
}
