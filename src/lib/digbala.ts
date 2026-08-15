/**
 * Digbala (Directional Strength)
 * Jupiter & Mercury are powerful in 1st House (East)
 * Sun & Mars are powerful in 10th House (South)
 * Saturn is powerful in 7th House (West)
 * Moon & Venus are powerful in 4th House (North)
 */

export function calculateDigbala(planet: string, houseNumber: number): number {
  const POWER_HOUSES: Record<string, number> = {
    Jupiter: 1, Mercury: 1,
    Sun: 10, Mars: 10,
    Saturn: 7,
    Moon: 4, Venus: 4
  };

  const peakHouse = POWER_HOUSES[planet];
  if (!peakHouse) return 30; // neutral

  const distance = Math.min(
    Math.abs(houseNumber - peakHouse),
    12 - Math.abs(houseNumber - peakHouse)
  );

  // Maximum 60 Virupas at peak house, decreasing linearly to 0 at opposite house
  const virupas = Math.round(60 * (1 - distance / 6));
  return Math.max(0, virupas);
}
