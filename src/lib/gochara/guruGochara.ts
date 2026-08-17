/**
 * Jupiter Transit (Guru Peyarchi) & Murti Nirnaya (Gold/Silver/Copper/Iron vessel)
 */

export function evaluateGuruTransit(natalMoonSign: number, transitGuruSign: number) {
  const house = ((transitGuruSign - natalMoonSign + 12) % 12) + 1;
  const isFavorable = [2, 5, 7, 9, 11].includes(house);

  return {
    transitHouseFromMoon: house,
    isFavorable,
    guidance: isFavorable
      ? 'Auspicious Guru blessings: Expansion of wealth, wisdom, and auspicious celebrations.'
      : 'Maintain steady diligence; practice spiritual japa to harmonize transit rays.'
  };
}
