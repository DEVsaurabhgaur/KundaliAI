/**
 * Ashtakavarga Ayurdaya (Longevity Span from Shodhya Pinda Sums)
 */

export function estimateAyurdayaYears(totalShodhyaPindaSum: number): number {
  const years = (totalShodhyaPindaSum * 7) / 100;
  return Number(Math.min(100, Math.max(32, years)).toFixed(1));
}
