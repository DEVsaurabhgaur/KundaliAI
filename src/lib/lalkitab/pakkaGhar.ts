/**
 * Lal Kitab Pakka Ghar (Permanent House Masters)
 * House 1: Sun, House 2: Jupiter, House 3: Mars, House 4: Moon,
 * House 5: Jupiter, House 6: Ketu/Mercury, House 7: Venus/Mercury,
 * House 8: Saturn/Mars, House 9: Jupiter, House 10: Saturn,
 * House 11: Jupiter, House 12: Jupiter/Rahu
 */

export const PAKKA_GHAR_MASTERS: Record<number, string[]> = {
  1: ['Sun'], 2: ['Jupiter'], 3: ['Mars'], 4: ['Moon'],
  5: ['Jupiter'], 6: ['Ketu', 'Mercury'], 7: ['Venus', 'Mercury'],
  8: ['Saturn', 'Mars'], 9: ['Jupiter'], 10: ['Saturn'],
  11: ['Jupiter'], 12: ['Jupiter', 'Rahu']
};

export function isPlanetInPakkaGhar(planet: string, house: number): boolean {
  const masters = PAKKA_GHAR_MASTERS[house] || [];
  return masters.includes(planet);
}
