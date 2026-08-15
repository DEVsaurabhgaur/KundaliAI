/**
 * Krishnamurti Paddhati (KP) Sub-Lord Calculator
 * In KP astrology, each Nakshatra is sub-divided into 9 unequal parts proportional to Vimshottari Dasha years.
 */

export interface KpPosition {
  longitude: number;
  signLord: string;
  starLord: string;
  subLord: string;
  subSubLord: string;
}

const DASHA_YEARS: Record<string, number> = {
  Ketu: 7, Venus: 20, Sun: 6, Moon: 10, Mars: 7,
  Rahu: 18, Jupiter: 16, Saturn: 19, Mercury: 17
};

const PLANET_ORDER = ['Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury'];

export function calculateKpSubLord(longitude: number): KpPosition {
  const norm = ((longitude % 360) + 360) % 360;
  const signIndex = Math.floor(norm / 30);
  const SIGN_LORDS = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'];
  const signLord = SIGN_LORDS[signIndex];

  // Nakshatra (13°20' = 800 arcminutes)
  const arcMinutes = norm * 60;
  const nakshatraIndex = Math.floor(arcMinutes / 800);
  const starLord = PLANET_ORDER[nakshatraIndex % 9];

  // Sub-lord in 800 arcminutes
  const nakshatraOffsetMinutes = arcMinutes % 800;
  const starLordStartIndex = PLANET_ORDER.indexOf(starLord);

  let accumulated = 0;
  let subLord = starLord;
  for (let i = 0; i < 9; i++) {
    const currentPlanet = PLANET_ORDER[(starLordStartIndex + i) % 9];
    const subSpanMinutes = (DASHA_YEARS[currentPlanet] / 120) * 800;
    accumulated += subSpanMinutes;
    if (nakshatraOffsetMinutes <= accumulated) {
      subLord = currentPlanet;
      break;
    }
  }

  return {
    longitude: norm,
    signLord,
    starLord,
    subLord,
    subSubLord: starLord // sub-sub proxy
  };
}
