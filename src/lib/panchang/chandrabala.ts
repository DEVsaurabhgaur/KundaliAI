/**
 * Chandrabala (Lunar Strength on Day of Muhurta)
 * Favorable transit houses from natal Moon: 1, 3, 6, 7, 10, 11
 */

export function calculateChandrabala(natalMoonSign: number, transitMoonSign: number): boolean {
  const house = ((transitMoonSign - natalMoonSign + 12) % 12) + 1;
  return [1, 3, 6, 7, 10, 11].includes(house);
}
