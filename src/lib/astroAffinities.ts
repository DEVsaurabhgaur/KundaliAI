/**
 * Astro-Affinities: Lucky Colors, Numbers, Metals, and Directions
 */

export interface Affinities {
  ascendant: string;
  luckyColors: string[];
  luckyNumbers: number[];
  luckyMetal: string;
  favorableDirection: string;
}

const AFFINITIES_MAP: Record<string, Omit<Affinities, 'ascendant'>> = {
  Aries: { luckyColors: ['Crimson Red', 'Saffron'], luckyNumbers: [9, 1, 3], luckyMetal: 'Copper', favorableDirection: 'East' },
  Taurus: { luckyColors: ['Pearl White', 'Pale Pink'], luckyNumbers: [6, 5, 2], luckyMetal: 'Silver', favorableDirection: 'South-East' },
  Gemini: { luckyColors: ['Emerald Green', 'Pastel Yellow'], luckyNumbers: [5, 1, 6], luckyMetal: 'Bronze', favorableDirection: 'North' },
  Cancer: { luckyColors: ['Silver White', 'Sea Green'], luckyNumbers: [2, 7, 9], luckyMetal: 'Silver', favorableDirection: 'North-West' },
  Leo: { luckyColors: ['Golden Yellow', 'Royal Orange'], luckyNumbers: [1, 5, 9], luckyMetal: 'Gold', favorableDirection: 'East' },
  Virgo: { luckyColors: ['Dark Green', 'Olive'], luckyNumbers: [5, 2, 7], luckyMetal: 'Brass', favorableDirection: 'North' },
  Libra: { luckyColors: ['Sky Blue', 'White'], luckyNumbers: [6, 8, 4], luckyMetal: 'Platinum', favorableDirection: 'West' },
  Scorpio: { luckyColors: ['Blood Red', 'Maroon'], luckyNumbers: [9, 4, 3], luckyMetal: 'Iron / Copper', favorableDirection: 'North-East' },
  Sagittarius: { luckyColors: ['Canary Yellow', 'Gold'], luckyNumbers: [3, 9, 1], luckyMetal: 'Gold', favorableDirection: 'North-East' },
  Capricorn: { luckyColors: ['Navy Blue', 'Charcoal'], luckyNumbers: [8, 6, 5], luckyMetal: 'Lead / Iron', favorableDirection: 'South' },
  Aquarius: { luckyColors: ['Electric Blue', 'Cyan'], luckyNumbers: [8, 7, 3], luckyMetal: 'Iron', favorableDirection: 'West' },
  Pisces: { luckyColors: ['Turquoise', 'Sea Gold'], luckyNumbers: [3, 2, 7], luckyMetal: 'Gold', favorableDirection: 'North-East' }
};

export function getAscendantAffinities(ascendantSign: string): Affinities {
  const match = AFFINITIES_MAP[ascendantSign] || AFFINITIES_MAP['Aries'];
  return {
    ascendant: ascendantSign,
    ...match
  };
}
