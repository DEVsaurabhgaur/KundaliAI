/**
 * Vashya Koota Matrix (2 Points in Ashtakoota)
 * Evaluates magnetic attraction and subconscious dominance between Moon signs.
 */

const VASHYA_MAP: Record<number, number[]> = {
  0: [4, 7],       // Aries controls Leo, Scorpio
  1: [3, 6],       // Taurus controls Cancer, Libra
  2: [5],          // Gemini controls Virgo
  3: [7, 8],       // Cancer controls Scorpio, Sagittarius
  4: [6],          // Leo controls Libra
  5: [2, 11],      // Virgo controls Gemini, Pisces
  6: [9, 5],       // Libra controls Capricorn, Virgo
  7: [3],          // Scorpio controls Cancer
  8: [11],         // Sagittarius controls Pisces
  9: [0, 10],      // Capricorn controls Aries, Aquarius
  10: [0],         // Aquarius controls Aries
  11: [9]          // Pisces controls Capricorn
};

export function getVashyaScore(girlSign: number, boySign: number): number {
  if (girlSign === boySign) return 2.0;
  if ((VASHYA_MAP[girlSign] || []).includes(boySign)) return 2.0;
  if ((VASHYA_MAP[boySign] || []).includes(girlSign)) return 1.0;
  return 0.0;
}
