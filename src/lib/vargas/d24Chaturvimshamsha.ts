/**
 * D24 Chaturvimshamsha (Siddhamsa - Intellectual Capacity, Higher Education & Skills)
 * 24 parts of 1° 15' (1.25 degrees) each.
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD24(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.min(23, Math.floor(deg / 1.25));

  // Odd signs start from Leo (4), Even signs start from Cancer (3)
  const startSign = (sign % 2 === 0) ? 4 : 3;
  const d24Sign = (startSign + part) % 12;

  return {
    planet,
    varga: 'D24',
    signIndex: d24Sign,
    signName: RASHIS[d24Sign]
  };
}
