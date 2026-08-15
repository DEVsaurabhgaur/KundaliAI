/**
 * D2 Hora (Wealth & Prosperity) and D3 Drekkana (Siblings & Courage) Divisional Charts
 */

export interface VargaResult {
  vargaType: string;
  planet: string;
  signIndex: number;
  signName: string;
}

const RASHI_NAMES = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

/**
 * D2 Hora:
 * In odd signs: first 15° Sun (Leo - index 4), second 15° Moon (Cancer - index 3)
 * In even signs: first 15° Moon (Cancer - index 3), second 15° Sun (Leo - index 4)
 */
export function calculateD2Hora(planet: string, siderealLongitude: number): VargaResult {
  const normDeg = ((siderealLongitude % 360) + 360) % 360;
  const signIndex = Math.floor(normDeg / 30);
  const degInSign = normDeg % 30;
  const isFirstHalf = degInSign < 15;
  const isOddSign = signIndex % 2 === 0;

  let d2Sign = 0;
  if (isOddSign) {
    d2Sign = isFirstHalf ? 4 : 3; // Leo or Cancer
  } else {
    d2Sign = isFirstHalf ? 3 : 4; // Cancer or Leo
  }

  return {
    vargaType: 'D2-Hora',
    planet,
    signIndex: d2Sign,
    signName: RASHI_NAMES[d2Sign]
  };
}

/**
 * D3 Drekkana (Decanate):
 * 1st Decan (0-10°): Same sign (1st house)
 * 2nd Decan (10-20°): 5th sign from it
 * 3rd Decan (20-30°): 9th sign from it
 */
export function calculateD3Drekkana(planet: string, siderealLongitude: number): VargaResult {
  const normDeg = ((siderealLongitude % 360) + 360) % 360;
  const signIndex = Math.floor(normDeg / 30);
  const degInSign = normDeg % 30;
  const decan = Math.floor(degInSign / 10); // 0, 1, 2

  const d3Sign = (signIndex + decan * 4) % 12;

  return {
    vargaType: 'D3-Drekkana',
    planet,
    signIndex: d3Sign,
    signName: RASHI_NAMES[d3Sign]
  };
}
