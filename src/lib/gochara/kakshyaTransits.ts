/**
 * Ashtakavarga Kakshya Transits
 * Each sign divided into 8 Kakshyas of 3° 45' ruled in order:
 * Saturn, Jupiter, Mars, Sun, Venus, Mercury, Moon, Ascendant.
 */

const KAKSHYA_LORDS = ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Ascendant'];

export function getKakshyaLord(degreeInSign: number): string {
  const span = 3.75; // 3° 45'
  const idx = Math.min(7, Math.floor(degreeInSign / span));
  return KAKSHYA_LORDS[idx];
}
