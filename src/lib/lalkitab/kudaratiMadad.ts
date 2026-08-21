/**
 * Lal Kitab: Kudarati Madad (Nature's Divine Assistance)
 * Trines (1-5-9) support each other automatically.
 * 2nd and 10th houses assist the 6th house.
 */

export function hasKudaratiMadad(sourceHouse: number, targetHouse: number): boolean {
  const diff = (targetHouse - sourceHouse + 12) % 12;
  return [0, 4, 8].includes(diff);
}
