/**
 * D40 Khavedamsha (Chatvarimshamsha - Auspicious and Inauspicious Karmic Heritage)
 * 40 parts of 45 arcminutes (0.75 degrees) each.
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD40(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.min(39, Math.floor(deg / 0.75));

  // Odd signs from Aries (0), Even signs from Libra (6)
  const startSign = (sign % 2 === 0) ? 0 : 6;
  const d40Sign = (startSign + part) % 12;

  return {
    planet,
    varga: 'D40',
    signIndex: d40Sign,
    signName: RASHIS[d40Sign]
  };
}
