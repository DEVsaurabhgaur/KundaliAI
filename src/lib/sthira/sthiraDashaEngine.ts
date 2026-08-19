/**
 * Jaimini Sthira Dasha Engine
 * Fixed durations:
 * - Movable signs (Chara: Aries, Cancer, Libra, Capricorn): 7 Years
 * - Fixed signs (Sthira: Taurus, Leo, Scorpio, Aquarius): 8 Years
 * - Dual signs (Dwisvabhava: Gemini, Virgo, Sagittarius, Pisces): 9 Years
 * Total Cycle = 4*7 + 4*8 + 4*9 = 28 + 32 + 36 = 96 Years.
 */

export function getSthiraDashaYears(signIndex: number): number {
  const modality = signIndex % 3;
  if (modality === 0) return 7; // Movable
  if (modality === 1) return 8; // Fixed
  return 9; // Dual
}

export function generateSthiraDashaSequence(brahmaSignIndex: number) {
  const sequence = [];
  for (let i = 0; i < 12; i++) {
    const sign = (brahmaSignIndex + i) % 12;
    sequence.push({
      signIndex: sign,
      durationYears: getSthiraDashaYears(sign)
    });
  }
  return sequence;
}
