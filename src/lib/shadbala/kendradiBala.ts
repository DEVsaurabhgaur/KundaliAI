/**
 * Kendradi Bala
 * Kendra (1, 4, 7, 10): 60 Virupas
 * Panaphara (2, 5, 8, 11): 30 Virupas
 * Apoklima (3, 6, 9, 12): 15 Virupas
 */

export function calculateKendradiBala(houseNumber: number): number {
  if ([1, 4, 7, 10].includes(houseNumber)) return 60;
  if ([2, 5, 8, 11].includes(houseNumber)) return 30;
  return 15;
}
