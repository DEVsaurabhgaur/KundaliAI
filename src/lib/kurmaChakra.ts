/**
 * Kurma Chakra (Celestial Tortoise Earth Projections)
 * Directional alignment of Nakshatras across 8 cardinal directions and center.
 */

export function getKurmaDirection(nakshatraIndex: number): string {
  const DIRECTIONS = ['East', 'South-East', 'South', 'South-West', 'West', 'North-West', 'North', 'North-East', 'Center'];
  return DIRECTIONS[nakshatraIndex % 9];
}
