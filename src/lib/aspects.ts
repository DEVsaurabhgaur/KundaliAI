/** Vedic planetary aspects (Drishti) calculator */

export interface Aspect {
  fromPlanet: string;
  toPlanet: string;
  fromHouse: number;
  toHouse: number;
  aspectType: string;
  strength: 'full' | 'three-quarter' | 'half' | 'quarter';
}

/**
 * Vedic aspects â€” planets cast aspects on specific houses from their position.
 * All planets have full aspect on 7th house from themselves.
 * Special aspects:
 *   Mars: 4th and 8th
 *   Jupiter: 5th and 9th
 *   Saturn: 3rd and 10th
 */
const SPECIAL_ASPECTS: Record<string, number[]> = {
  Mars:    [4, 8],
  Jupiter: [5, 9],
  Saturn:  [3, 10],
  Rahu:    [5, 9],  // Vedic tradition gives Rahu Jupiter-like aspects
  Ketu:    [5, 9],
};

/**
 * Check if planet A aspects planet B given their house positions.
 */
export function hasAspect(planetA: string, houseA: number, houseB: number): boolean {
  // All planets aspect the 7th house from themselves
  if (((houseB - houseA + 12 - 1) % 12) + 1 === 7) return true;

  const specials = SPECIAL_ASPECTS[planetA] ?? [];
  for (const offset of specials) {
    const aspectedHouse = ((houseA + offset - 2) % 12) + 1;
    if (aspectedHouse === houseB) return true;
  }
  return false;
}

/**
 * Calculate all aspects in a chart from a list of planet house placements.
 */
export function calculateAspects(
  planets: Array<{ planet: string; house: number }>
): Aspect[] {
  const aspects: Aspect[] = [];

  for (let i = 0; i < planets.length; i++) {
    for (let j = 0; j < planets.length; j++) {
      if (i === j) continue;
      const { planet: pA, house: hA } = planets[i];
      const { planet: pB, house: hB } = planets[j];

      if (hasAspect(pA, hA, hB)) {
        const offset = ((hB - hA + 12 - 1) % 12) + 1;
        const isSpecial = (SPECIAL_ASPECTS[pA] ?? []).includes(offset);
        aspects.push({
          fromPlanet: pA,
          toPlanet: pB,
          fromHouse: hA,
          toHouse: hB,
          aspectType: offset === 7 ? '7th' : `${offset}th`,
          strength: isSpecial ? 'three-quarter' : 'full',
        });
      }
    }
  }

  return aspects;
}
