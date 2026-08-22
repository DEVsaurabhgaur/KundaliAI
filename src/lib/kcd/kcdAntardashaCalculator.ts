export function calculateKCDAntardasha(majorDurationYears: number, subDurationYears: number, totalCycleYears: number): number {
  return Number(((majorDurationYears * subDurationYears) / (totalCycleYears || 100)).toFixed(2));
}
