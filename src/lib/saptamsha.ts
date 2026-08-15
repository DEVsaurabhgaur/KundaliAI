/**
 * D7 Saptamsha (Children, Progeny and Creative Fruitfulness)
 * Each sign divided into 7 equal parts (4° 17' 8.57" each = 4.285714 degrees).
 */

export interface SaptamshaPosition {
  planet: string;
  saptamshaSignIndex: number;
  saptamshaSignName: string;
  segment: number;
}

const RASHIS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export function calculateSaptamsha(planet: string, siderealLongitude: number): SaptamshaPosition {
  const normDeg = ((siderealLongitude % 360) + 360) % 360;
  const signIndex = Math.floor(normDeg / 30);
  const degInSign = normDeg % 30;
  const segment = Math.min(Math.floor(degInSign / (30 / 7)) + 1, 7);

  let d7Index = 0;
  if (signIndex % 2 === 0) {
    // Odd sign: count from same sign
    d7Index = (signIndex + (segment - 1)) % 12;
  } else {
    // Even sign: count from 7th sign (opposite)
    d7Index = (signIndex + 6 + (segment - 1)) % 12;
  }

  return {
    planet,
    saptamshaSignIndex: d7Index,
    saptamshaSignName: RASHIS[d7Index],
    segment
  };
}
