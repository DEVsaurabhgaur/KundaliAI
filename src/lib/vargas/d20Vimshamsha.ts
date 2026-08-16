/**
 * D20 Vimshamsha (Spiritual Progress, Upasana, Mantra Siddhi)
 * 20 parts of 1° 30' (1.5 degrees) each.
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD20(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.min(19, Math.floor(deg / 1.5));

  // Movable from Aries (0), Fixed from Sagittarius (8), Dual from Leo (4)
  const startOffsets = [0, 8, 4];
  const modality = sign % 3;
  const d20Sign = (startOffsets[modality] + part) % 12;

  return {
    planet,
    varga: 'D20',
    signIndex: d20Sign,
    signName: RASHIS[d20Sign]
  };
}
