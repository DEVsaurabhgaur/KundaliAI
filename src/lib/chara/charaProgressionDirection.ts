/**
 * Jaimini Chara Dasha Progression Direction Engine
 * Direction of Dasha depends on the nature of the 9th house from Lagna:
 * - Zodiacal (Direct/Clockwise): Aries, Taurus, Gemini, Libra, Scorpio, Sagittarius
 * - Anti-Zodiacal (Indirect/Counter-Clockwise): Cancer, Leo, Virgo, Capricorn, Aquarius, Pisces
 */

export function isDirectProgression(signIndex: number): boolean {
  // Signs that move direct in Chara Dasha (0=Aries, 1=Taurus, 2=Gemini, 6=Libra, 7=Scorpio, 8=Sagittarius)
  return [0, 1, 2, 6, 7, 8].includes(signIndex % 12);
}

export function getCharaDashaSequence(lagnaSignIndex: number): number[] {
  const isDirect = isDirectProgression(lagnaSignIndex);
  const sequence: number[] = [];

  for (let i = 0; i < 12; i++) {
    if (isDirect) {
      sequence.push((lagnaSignIndex + i) % 12);
    } else {
      sequence.push((lagnaSignIndex - i + 12) % 12);
    }
  }
  return sequence;
}
