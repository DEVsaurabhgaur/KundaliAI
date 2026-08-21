/**
 * Lal Kitab: Pakka Ghar (Permanent Abode) of Planets
 */

export const PAKKA_GHAR: Record<string, number[]> = {
  Sun: [1, 5],
  Moon: [4],
  Mars: [3, 8],
  Mercury: [6, 7],
  Jupiter: [2, 5, 9, 11, 12],
  Venus: [7],
  Saturn: [8, 10, 11],
  Rahu: [12],
  Ketu: [6]
};

export function isPlanetInPakkaGhar(planet: string, houseNumber: number): boolean {
  return (PAKKA_GHAR[planet] || []).includes(houseNumber);
}
