/**
 * Chara Dasha Sandhi (Transition Vulnerability)
 * Final 6 months of a major sign dasha act as Sandhi transition.
 */

export function isCharaDashaInSandhi(monthsRemainingInDasha: number): boolean {
  return monthsRemainingInDasha <= 6;
}
