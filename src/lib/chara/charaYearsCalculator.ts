/**
 * Chara Dasha Year Duration Calculation
 * Rule: Count from sign to its lord. If lord is in own sign, gives 12 years.
 * If exalted: add 1 year. If debilitated: deduct 1 year. Max = 12 years, Min = 1 year.
 */

export function calculateCharaDashaYears(
  signIndex: number,
  lordSignIndex: number,
  isDirectCount: boolean,
  isExalted: boolean,
  isDebilitated: boolean
): number {
  let count: number;
  if (signIndex === lordSignIndex) {
    count = 12;
  } else if (isDirectCount) {
    count = ((lordSignIndex - signIndex + 12) % 12);
  } else {
    count = ((signIndex - lordSignIndex + 12) % 12);
  }

  if (count === 0) count = 12;

  if (isExalted && count < 12) count += 1;
  if (isDebilitated && count > 1) count -= 1;

  return Math.min(12, Math.max(1, count));
}
