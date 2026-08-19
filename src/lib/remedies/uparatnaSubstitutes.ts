/**
 * Uparatna (Semi-Precious Gemstone Substitutes)
 */

export const UPARATNA_MAP: Record<string, string[]> = {
  Ruby: ['Red Garnet', 'Star Ruby', 'Red Spinel'],
  Pearl: ['Moonstone', 'White Agate'],
  'Red Coral': ['Carnelian', 'Red Jasper'],
  Emerald: ['Peridot', 'Green Tourmaline', 'Green Onyx'],
  'Yellow Sapphire': ['Topaz', 'Citrine', 'Yellow Zircon'],
  Diamond: ['White Zircon', 'Opal', 'White Sapphire'],
  'Blue Sapphire': ['Amethyst', 'Blue Topaz', 'Iolite', 'Lapis Lazuli'],
  Hessonite: ['Spessartite Garnet', 'Brown Tourmaline'],
  "Cat's Eye": ['Tiger Eye', 'Chrysoberyl']
};

export function getUparatnas(primaryGem: string): string[] {
  return UPARATNA_MAP[primaryGem] || ['Spiritual Yantra'];
}
