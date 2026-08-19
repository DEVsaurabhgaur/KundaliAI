/**
 * Disease Onset Timing (Trika Lords 6th, 8th, 12th)
 */

export function checkDiseaseOnsetPeriod(activeDashaLord: string, trikaLords: string[]): boolean {
  return trikaLords.includes(activeDashaLord);
}
