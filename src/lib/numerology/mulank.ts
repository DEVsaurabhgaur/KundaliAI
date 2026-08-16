/**
 * Mulank (Psychic / Root Number 1 to 9)
 * Sum of the day of birth reduced to a single digit.
 */

export function calculateMulank(dayOfMonth: number): number {
  let sum = dayOfMonth;
  while (sum > 9) {
    sum = String(sum).split('').reduce((a, b) => a + Number(b), 0);
  }
  return sum;
}
