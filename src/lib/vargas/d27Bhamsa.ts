/**
 * D27 Saptavimshamsha (Bhamsa / Nakshatramsha - Subconscious Strengths & Vulnerabilities)
 * 27 parts of 1° 06' 40" (1.1111 degrees) each.
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD27(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.min(26, Math.floor(deg / (30 / 27)));

  // Fire from Aries (0), Earth from Cancer (3), Air from Libra (6), Water from Capricorn (9)
  const elementGroup = sign % 4;
  const startOffsets = [0, 3, 6, 9];
  const d27Sign = (startOffsets[elementGroup] + part) % 12;

  return {
    planet,
    varga: 'D27',
    signIndex: d27Sign,
    signName: RASHIS[d27Sign]
  };
}
