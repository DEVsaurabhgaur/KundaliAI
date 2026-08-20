/**
 * Namank (Pythagorean 1-9 System)
 */

export function calculatePythagoreanNamank(name: string): number {
  const clean = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const char of clean) {
    const val = ((char.charCodeAt(0) - 65) % 9) + 1;
    sum += val;
  }
  while (sum > 9) {
    sum = Math.floor(sum / 10) + (sum % 10);
  }
  return sum;
}
