/**
 * Dagdha (Burnt) Tithis by Weekday
 */

const DAGDHA_TITHIS: Record<number, number[]> = {
  0: [12], 1: [11], 2: [5], 3: [2, 3], 4: [6], 5: [8], 6: [9]
};

export function isDagdhaTithi(dayOfWeek: number, tithiNumber: number): boolean {
  const list = DAGDHA_TITHIS[dayOfWeek % 7] || [];
  return list.includes(tithiNumber);
}
