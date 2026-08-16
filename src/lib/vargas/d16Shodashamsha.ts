/**
 * D16 Shodashamsha (Kalamsa - Conveyances, Vehicles, Pleasure & General Happiness)
 * 16 parts of 1° 52' 30" (1.875 degrees) each.
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD16(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.min(15, Math.floor(deg / 1.875));

  // Movable signs from Aries (0), Fixed from Leo (4), Dual from Sagittarius (8)
  const startOffsets = [0, 4, 8];
  const modality = sign % 3;
  const d16Sign = (startOffsets[modality] + part) % 12;

  return {
    planet,
    varga: 'D16',
    signIndex: d16Sign,
    signName: RASHIS[d16Sign]
  };
}
