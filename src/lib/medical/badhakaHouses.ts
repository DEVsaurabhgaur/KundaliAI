/**
 * Badhaka (Obstructing) House Locator
 * - Movable Ascendant (Aries, Cancer, Libra, Cap): 11th House
 * - Fixed Ascendant (Taurus, Leo, Scorpio, Aqua): 9th House
 * - Dual Ascendant (Gemini, Virgo, Sag, Pisces): 7th House
 */

export function getBadhakaHouse(lagnaSignIndex: number): number {
  const modality = lagnaSignIndex % 3;
  if (modality === 0) return 11;
  if (modality === 1) return 9;
  return 7;
}
