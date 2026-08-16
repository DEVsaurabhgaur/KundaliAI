/**
 * Personal Vibrational Cycles (Year, Month, Day)
 */

export function calculatePersonalYear(day: number, month: number, currentYear: number): number {
  let sum = day + month + currentYear;
  while (sum > 9) {
    sum = String(sum).split('').reduce((a, b) => a + Number(b), 0);
  }
  return sum;
}
