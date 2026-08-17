/**
 * Tripushkar & Dwipushkar Yogas
 * Auspicious or inauspicious events repeat three-fold or two-fold under these combinations.
 */

export function checkTripushkarYoga(dayOfWeek: number, tithiNum: number, nakshatraIndex: number): boolean {
  const isTripushkarDay = [0, 2, 6].includes(dayOfWeek); // Sun, Tue, Sat
  const isBhadraTithi = [2, 7, 12, 17, 22, 27].includes(tithiNum);
  const isTripushkarNak = [2, 6, 11, 15, 20, 24].includes(nakshatraIndex % 27);

  return isTripushkarDay && isBhadraTithi && isTripushkarNak;
}
