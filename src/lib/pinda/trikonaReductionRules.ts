/**
 * Trikona Shodhana (Trinal Reduction) in Ashtakavarga
 * Group 1: 1, 5, 9 (Aries, Leo, Sagittarius)
 * Group 2: 2, 6, 10 (Taurus, Virgo, Capricorn)
 * Group 3: 3, 7, 11 (Gemini, Libra, Aquarius)
 * Group 4: 4, 8, 12 (Cancer, Scorpio, Pisces)
 * Rule: Subtract minimum bindu in the trine from all three signs.
 */

export function reduceTrikonaGroup(b1: number, b2: number, b3: number): [number, number, number] {
  const min = Math.min(b1, b2, b3);
  return [b1 - min, b2 - min, b3 - min];
}
