export function calculateBSP11SaturnEnemies(saturnHouse: number): number {
  return ((saturnHouse + 5) % 12) + 1;
}
