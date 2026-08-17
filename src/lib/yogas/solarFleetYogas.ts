/**
 * Solar Fleet Combinations
 */

export function evaluateSolarFleet(has2ndFromSun: boolean, has12thFromSun: boolean): string {
  if (has2ndFromSun && has12thFromSun) return 'Ubhayachari Yoga';
  if (has2ndFromSun) return 'Vesi Yoga';
  if (has12thFromSun) return 'Vosi Yoga';
  return 'None';
}
