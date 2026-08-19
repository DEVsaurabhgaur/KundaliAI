/**
 * Jaimini Shool Dasha Engine (Fixed 7 Years per Sign)
 */

export function generateShoolSequence(eighthHouseSignIndex: number) {
  return Array.from({ length: 12 }, (_, i) => ({
    signIndex: (eighthHouseSignIndex + i) % 12,
    durationYears: 7
  }));
}
