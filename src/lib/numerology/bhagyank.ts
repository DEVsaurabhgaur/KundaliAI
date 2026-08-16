/**
 * Bhagyank (Destiny Number / Life Path Number)
 * Sum of full birth date (DD + MM + YYYY) reduced to a single digit (or master numbers).
 */

export function calculateBhagyank(day: number, month: number, year: number): number {
  const digits = `${day}${month}${year}`.split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = String(sum).split('').reduce((a, b) => a + Number(b), 0);
  }
  return sum;
}
