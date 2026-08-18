/**
 * Patyayini Dasha (Calculated by stripping integer cycles and taking proportional degrees)
 */

export function calculatePatyayiniDays(planetDegInSign: number, totalDegreeSum: number): number {
  const fraction = planetDegInSign / (totalDegreeSum || 1);
  return Number((fraction * 365.25).toFixed(2));
}
