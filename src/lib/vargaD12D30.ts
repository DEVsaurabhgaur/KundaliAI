/**
 * D12 Dwadashamsha (Parents & Ancestry) and D30 Trimsamsha (Misfortunes & Arishta) Charts
 */

const RASHIS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

/**
 * D12 Dwadashamsha:
 * Each sign divided into 12 parts of 2.5 degrees.
 * Starts from the sign itself and proceeds continuously.
 */
export function calculateD12(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const degInSign = norm % 30;
  const part = Math.floor(degInSign / 2.5);
  const targetSign = (sign + part) % 12;

  return {
    planet,
    varga: 'D12',
    signIndex: targetSign,
    signName: RASHIS[targetSign]
  };
}

/**
 * D30 Trimsamsha:
 * Odd signs: Mars (5°), Saturn (5°), Jupiter (8°), Mercury (7°), Venus (5°)
 * Even signs: Venus (5°), Mercury (7°), Jupiter (8°), Saturn (5°), Mars (5°)
 */
export function calculateD30(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const isOdd = sign % 2 === 0;

  let assignedPlanet = 'Mars';
  if (isOdd) {
    if (deg < 5) assignedPlanet = 'Mars';
    else if (deg < 10) assignedPlanet = 'Saturn';
    else if (deg < 18) assignedPlanet = 'Jupiter';
    else if (deg < 25) assignedPlanet = 'Mercury';
    else assignedPlanet = 'Venus';
  } else {
    if (deg < 5) assignedPlanet = 'Venus';
    else if (deg < 12) assignedPlanet = 'Mercury';
    else if (deg < 20) assignedPlanet = 'Jupiter';
    else if (deg < 25) assignedPlanet = 'Saturn';
    else assignedPlanet = 'Mars';
  }

  return {
    planet,
    varga: 'D30',
    assignedRuler: assignedPlanet,
    originalSign: RASHIS[sign]
  };
}
