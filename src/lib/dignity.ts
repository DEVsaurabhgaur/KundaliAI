/** Planetary dignity tables for Vedic astrology */

export type DignityStatus = 'Exalted' | 'Own Sign' | 'Debilitated' | 'Neutral' | 'Friendly' | 'Enemy';

export interface PlanetDignity {
  exaltation: string;
  debilitation: string;
  ownSigns: string[];
  friendlySigns?: string[];
}

export const PLANET_DIGNITIES: Record<string, PlanetDignity> = {
  Sun: {
    exaltation: 'Aries',
    debilitation: 'Libra',
    ownSigns: ['Leo'],
  },
  Moon: {
    exaltation: 'Taurus',
    debilitation: 'Scorpio',
    ownSigns: ['Cancer'],
  },
  Mars: {
    exaltation: 'Capricorn',
    debilitation: 'Cancer',
    ownSigns: ['Aries', 'Scorpio'],
  },
  Mercury: {
    exaltation: 'Virgo',
    debilitation: 'Pisces',
    ownSigns: ['Gemini', 'Virgo'],
  },
  Jupiter: {
    exaltation: 'Cancer',
    debilitation: 'Capricorn',
    ownSigns: ['Sagittarius', 'Pisces'],
  },
  Venus: {
    exaltation: 'Pisces',
    debilitation: 'Virgo',
    ownSigns: ['Taurus', 'Libra'],
  },
  Saturn: {
    exaltation: 'Libra',
    debilitation: 'Aries',
    ownSigns: ['Capricorn', 'Aquarius'],
  },
};

/**
 * Determine a planet's dignity status given its current sign placement.
 */
export function getPlanetDignity(planet: string, sign: string): DignityStatus {
  const dignity = PLANET_DIGNITIES[planet];
  if (!dignity) return 'Neutral';
  if (dignity.exaltation === sign) return 'Exalted';
  if (dignity.debilitation === sign) return 'Debilitated';
  if (dignity.ownSigns.includes(sign)) return 'Own Sign';
  return 'Neutral';
}
