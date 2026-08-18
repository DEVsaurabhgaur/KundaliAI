/**
 * Nadi 4-Directional Blending (Trinal Harmony)
 * East: Aries (1), Leo (5), Sagittarius (9)
 * South: Taurus (2), Virgo (6), Capricorn (10)
 * West: Gemini (3), Libra (7), Aquarius (11)
 * North: Cancer (4), Scorpio (8), Pisces (12)
 */

export const NADI_DIRECTIONS: Record<string, number[]> = {
  East: [0, 4, 8],
  South: [1, 5, 9],
  West: [2, 6, 10],
  North: [3, 7, 11]
};

export function getNadiDirection(signIndex: number): string {
  const mod = signIndex % 4;
  if (mod === 0) return 'East';
  if (mod === 1) return 'South';
  if (mod === 2) return 'West';
  return 'North';
}
