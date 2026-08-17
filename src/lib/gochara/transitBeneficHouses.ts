/**
 * Classical Gochara Benefic Houses from Natal Moon (Janma Rashi)
 */

export const GOCHARA_BENEFIC_HOUSES: Record<string, number[]> = {
  Sun: [3, 6, 10, 11],
  Moon: [1, 3, 6, 7, 10, 11],
  Mars: [3, 6, 11],
  Mercury: [2, 4, 6, 8, 10, 11],
  Jupiter: [2, 5, 7, 9, 11],
  Venus: [1, 2, 3, 4, 5, 8, 9, 11, 12],
  Saturn: [3, 6, 11],
  Rahu: [3, 6, 10, 11],
  Ketu: [3, 6, 11]
};

export function isTransitBenefic(planet: string, houseFromMoon: number): boolean {
  const list = GOCHARA_BENEFIC_HOUSES[planet] || [];
  return list.includes(houseFromMoon);
}
