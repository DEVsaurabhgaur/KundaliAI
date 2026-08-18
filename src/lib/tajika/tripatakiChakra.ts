/**
 * Tripataki Chakra (3-Flagged Line Network for Annual Transits)
 */

export function checkTripatakiVedha(natalMoonLongDeg: number, transitMaleficDeg: number): boolean {
  const diff = Math.abs((natalMoonLongDeg - transitMaleficDeg + 360) % 360);
  return diff <= 5.0 || Math.abs(diff - 120) <= 5.0;
}
