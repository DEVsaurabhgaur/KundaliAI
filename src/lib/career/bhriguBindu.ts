/**
 * Bhrigu Bindu (Midpoint of Rahu and Moon)
 * Highly sensitive karmic inflection point for major life destiny triggers.
 */

export function calculateBhriguBindu(moonLong: number, rahuLong: number): number {
  let mid = (moonLong + rahuLong) / 2;
  if (Math.abs(moonLong - rahuLong) > 180) {
    mid = (mid + 180) % 360;
  }
  return Number(mid.toFixed(2));
}
