/**
 * D45 Akshavedamsha (General Character, Moral Purity, and Integrity)
 * 45 parts of 40 arcminutes (0.6666 degrees) each.
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD45(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.min(44, Math.floor(deg / (30 / 45)));

  // Movable from Aries (0), Fixed from Leo (4), Dual from Sagittarius (8)
  const startOffsets = [0, 4, 8];
  const modality = sign % 3;
  const d45Sign = (startOffsets[modality] + part) % 12;

  return {
    planet,
    varga: 'D45',
    signIndex: d45Sign,
    signName: RASHIS[d45Sign]
  };
}
