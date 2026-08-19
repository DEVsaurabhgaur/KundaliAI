/**
 * Navagraha Dana (Charity) Matrix
 */

export const NAVAGRAHA_DANA: Record<string, { items: string[]; weekday: string; idealTime: string }> = {
  Sun: { items: ['Wheat', 'Ruby', 'Jaggery', 'Copper vessel', 'Red cloth'], weekday: 'Sunday', idealTime: 'Sunrise' },
  Moon: { items: ['Rice', 'White sandalwood', 'Silver', 'Milk', 'White cloth'], weekday: 'Monday', idealTime: 'Evening' },
  Mars: { items: ['Red lentils (Masoor)', 'Copper', 'Jaggery', 'Red flowers'], weekday: 'Tuesday', idealTime: 'Noon' },
  Mercury: { items: ['Mung beans', 'Green cloth', 'Emerald', 'Brass vessel', 'Books'], weekday: 'Wednesday', idealTime: 'Morning' },
  Jupiter: { items: ['Yellow chana dal', 'Turmeric', 'Gold', 'Yellow cloth', 'Saffron'], weekday: 'Thursday', idealTime: 'Morning' },
  Venus: { items: ['Sugar', 'Ghee', 'White silk', 'Curd', 'Silver'], weekday: 'Friday', idealTime: 'Dawn / Dusk' },
  Saturn: { items: ['Black sesame', 'Mustard oil', 'Iron pan', 'Black blanket', 'Footwear'], weekday: 'Saturday', idealTime: 'Sunset' }
};

export function getDanaGuidelines(planet: string) {
  return NAVAGRAHA_DANA[planet] || NAVAGRAHA_DANA['Jupiter'];
}
