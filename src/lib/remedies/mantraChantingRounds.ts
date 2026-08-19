/**
 * Navagraha Japa Mantra Counts (Classical Japa Sankhya)
 */

export const JAPA_COUNTS: Record<string, { count: number; rosary: string }> = {
  Sun: { count: 7000, rosary: 'Ruby / Sandalwood (Rakta Chandan)' },
  Moon: { count: 11000, rosary: 'Pearl / White Sandalwood / Crystal' },
  Mars: { count: 10000, rosary: 'Red Coral / Rudraksha' },
  Mercury: { count: 9000, rosary: 'Tulsi / Emerald' },
  Jupiter: { count: 19000, rosary: 'Turmeric (Haldi) / Yellow Topaz' },
  Venus: { count: 16000, rosary: 'Crystal (Sphatik) / White Lotus' },
  Saturn: { count: 23000, rosary: 'Black Agate / Blue Sapphire / Rudraksha' },
  Rahu: { count: 18000, rosary: 'Black Agate / Gomed' },
  Ketu: { count: 17000, rosary: 'Cat’s Eye / Rudraksha' }
};

export function getJapaDetails(planet: string) {
  return JAPA_COUNTS[planet] || JAPA_COUNTS['Jupiter'];
}
