/**
 * Disease Timing Engine (Roga Dasha)
 * Highlights periods ruled by 6th (Diseases), 8th (Chronic afflictions), or 12th (Hospitalization) lords.
 */

export function checkHealthRiskPeriod(activeDashaLord: string, dusthanaLords: string[]): boolean {
  return dusthanaLords.includes(activeDashaLord);
}
