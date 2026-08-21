/**
 * Lal Kitab: Soya Grah (Sleeping Planet)
 * A planet is asleep if its complementary partner house is vacant.
 */

export function isPlanetSleeping(planetHouse: number, targetHouseOccupied: boolean): boolean {
  return !targetHouseOccupied;
}
