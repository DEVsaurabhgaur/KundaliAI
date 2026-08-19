/**
 * Stree Deergha (Stellar Distance from Girl to Boy)
 * Count from Girl's star to Boy's star:
 * > 15 stars = Full Auspiciousness (Ensures longevity and prosperity of marriage)
 * 9 - 15 stars = Moderate
 * < 9 stars = Inauspicious
 */

export function calculateStreeDeergha(girlNakshatra: number, boyNakshatra: number) {
  const count = ((boyNakshatra - girlNakshatra + 27) % 27) + 1;
  return {
    distanceCount: count,
    isExcellent: count > 15,
    isModerate: count >= 9 && count <= 15,
    isAdverse: count < 9
  };
}
