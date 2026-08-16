/**
 * D4 Chaturthamsha (Turyamsha / Fixed Assets, Land, Home & Luck)
 * Each sign divided into 4 parts of 7° 30' (7.5 degrees).
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD4(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.floor(deg / 7.5); // 0, 1, 2, 3

  // D4 placement: Count from sign itself, 4th, 7th, 10th (Kendra progression)
  const d4Sign = (sign + part * 3) % 12;

  return {
    planet,
    varga: 'D4',
    signIndex: d4Sign,
    signName: RASHIS[d4Sign],
    portion: part + 1
  };
}
