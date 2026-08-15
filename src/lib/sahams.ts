/**
 * Tajika Sahams (Sensitive Arabic Parts / Harmonic Points)
 * Punya Saham (Fortune), Vidya Saham (Education), Yashas Saham (Fame), Kali Saham (Strife)
 */

export interface SahamPoint {
  name: string;
  longitude: number;
  signIndex: number;
}

export function calculateSahams(
  ascendant: number,
  sun: number,
  moon: number,
  isDayBirth: boolean
): SahamPoint[] {
  // Punya Saham:
  // Day: Moon - Sun + Ascendant
  // Night: Sun - Moon + Ascendant
  const punya = isDayBirth
    ? ((moon - sun + ascendant) % 360 + 360) % 360
    : ((sun - moon + ascendant) % 360 + 360) % 360;

  // Vidya Saham (Education): Sun - Moon + Ascendant
  const vidya = ((sun - moon + ascendant) % 360 + 360) % 360;

  return [
    { name: 'Punya Saham (Fortune)', longitude: punya, signIndex: Math.floor(punya / 30) },
    { name: 'Vidya Saham (Wisdom)', longitude: vidya, signIndex: Math.floor(vidya / 30) }
  ];
}
