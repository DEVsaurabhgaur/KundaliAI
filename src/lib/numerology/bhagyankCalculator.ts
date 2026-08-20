/**
 * Bhagyank (Destiny / Life Path Number)
 * Sum of DD + MM + YYYY reduced to a single digit (1-9).
 */

export function calculateBhagyank(day: number, month: number, year: number): number {
  const digits = `${day}${month}${year}`.split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9) {
    sum = Math.floor(sum / 10) + (sum % 10);
  }
  return sum;
}
