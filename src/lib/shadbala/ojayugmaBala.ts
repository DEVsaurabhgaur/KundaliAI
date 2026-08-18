/**
 * Ojayugma Bala (Odd/Even Sign and Navamsha Strength)
 * Male planets (Sun, Mars, Jupiter) prefer odd signs/navamshas (15 Virupas each, max 30).
 * Female planets (Moon, Venus) prefer even signs/navamshas (15 Virupas each, max 30).
 */

export function calculateOjayugmaBala(isMalePlanet: boolean, isOddRashi: boolean, isOddNavamsha: boolean): number {
  let score = 0;
  if (isMalePlanet === isOddRashi) score += 15;
  if (isMalePlanet === isOddNavamsha) score += 15;
  return score;
}
