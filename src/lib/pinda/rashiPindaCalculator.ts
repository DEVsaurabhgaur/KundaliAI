/**
 * Ashtakavarga Rashi Pinda (Rashi Multipliers)
 * Multipliers: Aries=7, Taurus=10, Gemini=8, Cancer=4, Leo=10, Virgo=5, Libra=7, Scorpio=8, Sagittarius=9, Capricorn=5, Aquarius=11, Pisces=12
 */

export const RASHI_PINDA_MULTIPLIERS = [7, 10, 8, 4, 10, 5, 7, 8, 9, 5, 11, 12];

export function calculateRashiPinda(reducedBindus: number[]): number {
  return reducedBindus.reduce((sum, bindu, idx) => sum + bindu * (RASHI_PINDA_MULTIPLIERS[idx] || 5), 0);
}
