/**
 * BSP Rule 6: Venus activates wealth accretion and relationship fruition in 2nd and 7th from itself in the 25th year.
 */

export function calculateBSP6VenusAbundance(venusHouse: number) {
  return {
    wealth2nd: ((venusHouse) % 12) + 1,
    partnership7th: ((venusHouse + 6) % 12) + 1
  };
}
