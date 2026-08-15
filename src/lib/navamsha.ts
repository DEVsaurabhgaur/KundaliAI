/**
 * D9 Navamsha (Ninth Divisional Chart) Calculation Engine
 * In Vedic astrology, Navamsha reveals the soul's path, marriage, and spiritual strength.
 */

export interface NavamshaPosition {
  planet: string;
  originalLongitude: number;
  navamshaSignIndex: number;
  navamshaSignName: string;
  pada: number;
  isVargottama: boolean;
}

const RASHI_NAMES = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

/**
 * Calculates the D9 Navamsha sign for a given sidereal longitude in degrees (0-360).
 * Each sign (30 deg) is divided into 9 padas of 3 deg 20 min (3.333333 deg).
 */
export function calculateNavamsha(planet: string, siderealLongitude: number): NavamshaPosition {
  const normDeg = ((siderealLongitude % 360) + 360) % 360;
  const signIndex = Math.floor(normDeg / 30);
  const degreeInSign = normDeg % 30;
  const pada = Math.floor(degreeInSign / (30 / 9)) + 1; // 1 to 9

  // Element base starting index:
  // Fire signs (Aries, Leo, Sag): starts at Aries (0)
  // Earth signs (Taurus, Virgo, Cap): starts at Capricorn (9)
  // Air signs (Gemini, Libra, Aqua): starts at Libra (6)
  // Water signs (Cancer, Scorpio, Pisces): starts at Cancer (3)
  const elementGroup = signIndex % 4;
  const startOffsets = [0, 9, 6, 3]; // Fire, Earth, Air, Water
  const navamshaSignIndex = (startOffsets[elementGroup] + (pada - 1)) % 12;

  const isVargottama = signIndex === navamshaSignIndex;

  return {
    planet,
    originalLongitude: normDeg,
    navamshaSignIndex,
    navamshaSignName: RASHI_NAMES[navamshaSignIndex],
    pada,
    isVargottama,
  };
}

export function calculateAllNavamsha(planets: { name: string; longitude: number }[]): NavamshaPosition[] {
  return planets.map(p => calculateNavamsha(p.name, p.longitude));
}
