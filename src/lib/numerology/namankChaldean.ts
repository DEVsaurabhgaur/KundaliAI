/**
 * Namank (Chaldean Numerology System)
 * Values:
 * 1: A, I, J, Q, Y
 * 2: B, K, R
 * 3: C, G, L, S
 * 4: D, M, T
 * 5: E, H, N, X
 * 6: U, V, W
 * 7: O, Z
 * 8: F, P
 */

export const CHALDEAN_VALUES: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

export function calculateChaldeanNamank(name: string): { compoundNumber: number; singleDigit: number } {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const char of cleanName) {
    sum += CHALDEAN_VALUES[char] || 0;
  }
  let single = sum;
  while (single > 9) {
    single = Math.floor(single / 10) + (single % 10);
  }
  return { compoundNumber: sum, singleDigit: single };
}
