/**
 * Mulank (Root / Psychic Number)
 * Calculated by reducing birth day (1-31) to a single digit (1-9).
 */

export function calculateMulank(day: number): number {
  let num = day;
  while (num > 9) {
    num = Math.floor(num / 10) + (num % 10);
  }
  return num;
}
