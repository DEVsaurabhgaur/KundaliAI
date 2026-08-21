/**
 * Lal Kitab: Soya Ghar (Sleeping Houses)
 * A house is considered 'Soya' (Dormant) if no planet occupies it and no planet aspects it.
 * Awakening occurs when an active planet transits or through complementary remedies.
 */

export function isHouseSleeping(houseNumber: number, occupiedHouses: number[]): boolean {
  return !occupiedHouses.includes(houseNumber);
}
