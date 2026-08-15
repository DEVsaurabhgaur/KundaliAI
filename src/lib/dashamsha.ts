/**
 * D10 Dashamsha (Career & Professional Achievements Chart)
 * Each zodiac sign is divided into 10 equal parts of 3 degrees each.
 */

export interface DashamshaPosition {
  planet: string;
  dashamshaSignIndex: number;
  dashamshaSignName: string;
  portion: number;
}

const RASHIS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export function calculateDashamsha(planet: string, siderealLongitude: number): DashamshaPosition {
  const normDeg = ((siderealLongitude % 360) + 360) % 360;
  const signIndex = Math.floor(normDeg / 30);
  const degreeInSign = normDeg % 30;
  const portion = Math.floor(degreeInSign / 3) + 1; // 1 to 10

  // Odd signs: count from the sign itself
  // Even signs: count from the 9th sign from it
  let d10SignIndex = 0;
  if (signIndex % 2 === 0) {
    // Odd sign (0-indexed: 0=Aries, 2=Gemini, etc.)
    d10SignIndex = (signIndex + (portion - 1)) % 12;
  } else {
    // Even sign (1=Taurus, 3=Cancer, etc.)
    d10SignIndex = (signIndex + 8 + (portion - 1)) % 12;
  }

  return {
    planet,
    dashamshaSignIndex: d10SignIndex,
    dashamshaSignName: RASHIS[d10SignIndex],
    portion
  };
}
