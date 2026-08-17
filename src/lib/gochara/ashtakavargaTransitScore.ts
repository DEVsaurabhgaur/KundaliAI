/**
 * Ashtakavarga SAV Point-Weighted Transit Rating
 * 28+ points in SAV house indicates positive transit manifestation.
 */

export function getSAVTransitRating(savPointsInHouse: number): string {
  if (savPointsInHouse >= 30) return 'Highly Auspicious (30+ Bindus)';
  if (savPointsInHouse >= 28) return 'Favorable (28-29 Bindus)';
  if (savPointsInHouse >= 25) return 'Average / Moderate (25-27 Bindus)';
  return 'Challenging / Low Prastara (<25 Bindus)';
}
