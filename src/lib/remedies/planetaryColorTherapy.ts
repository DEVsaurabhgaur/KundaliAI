/**
 * Planetary Color Therapy (Chromotherapy)
 */

export const PLANET_COLORS: Record<string, string> = {
  Sun: 'Crimson Red / Orange / Gold',
  Moon: 'White / Pearl / Silver',
  Mars: 'Scarlet / Bright Red',
  Mercury: 'Emerald Green / Forest Green',
  Jupiter: 'Yellow / Saffron / Golden Amber',
  Venus: 'White / Iridescent Pink / Pastel Shades',
  Saturn: 'Navy Blue / Charcoal / Black',
  Rahu: 'Smoky Grey / Electric Blue',
  Ketu: 'Spotted / Ochre / Earth Brown'
};

export function getAuspiciousColor(planet: string): string {
  return PLANET_COLORS[planet] || 'Pure White';
}
