/**
 * Gochara Vedha (Transit Obstruction)
 * Benefic transit houses get obstructed if another planet occupies the corresponding Vedha house.
 */

export const SUN_VEDHA: Record<number, number> = { 3: 9, 6: 12, 10: 4, 11: 5 };

export function isTransitObstructedByVedha(transitHouse: number, obstructingHouseOccupants: number): boolean {
  return SUN_VEDHA[transitHouse] !== undefined && obstructingHouseOccupants > 0;
}
