/**
 * Tarabala Daily Transit Overlay
 */

export function checkDailyTarabala(natalNakshatra: number, transitNakshatra: number): boolean {
  const diff = ((transitNakshatra - natalNakshatra + 27) % 27) + 1;
  const taraNum = ((diff - 1) % 9) + 1;
  return [2, 4, 6, 8, 9].includes(taraNum);
}
