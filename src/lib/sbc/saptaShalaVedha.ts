/**
 * Sapta Shala Vedha (7 Horizontal & Vertical Pillars)
 */

export function checkSaptaShalaVedha(star1: number, star2: number): boolean {
  return Math.abs(star1 - star2) === 14 || Math.abs(star1 - star2) === 7;
}
