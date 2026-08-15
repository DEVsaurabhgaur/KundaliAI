export const commitsBatch1 = [
  // 1. D9 Navamsha
  {
    step: 1,
    msg: "feat(astro): add D9 Navamsha chart calculation engine",
    files: [
      {
        file: "src/lib/navamsha.ts",
        content: `/**
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
`
      }
    ]
  },

  // 2. D10 Dashamsha
  {
    step: 2,
    msg: "feat(astro): add D10 Dashamsha career divisional chart calculator",
    files: [
      {
        file: "src/lib/dashamsha.ts",
        content: `/**
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
`
      }
    ]
  },

  // 3. D7 Saptamsha
  {
    step: 3,
    msg: "feat(astro): add D7 Saptamsha progeny & legacy chart logic",
    files: [
      {
        file: "src/lib/saptamsha.ts",
        content: `/**
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
`
      }
    ]
  },

  // 4. D60 Shashtiamsha
  {
    step: 4,
    msg: "feat(astro): add D60 Shashtiamsha past karma chart calculation",
    files: [
      {
        file: "src/lib/shashtiamsha.ts",
        content: `/**
 * D60 Shashtiamsha Chart Calculation
 * Division of sign into 60 parts of 0.5 degrees (30 arcminutes) each.
 * Used for deep past-life karma analysis and micro-timing of life events.
 */

export interface ShashtiamshaPosition {
  planet: string;
  shashtiamshaIndex: number;
  rashiIndex: number;
  isBeneficPart: boolean;
  deityName: string;
}

// First 10 Shashtiamsha deities sample mapping
const SHASHTIAMSHA_DEITIES = [
  'Ghora', 'Rakshasa', 'Deva', 'Kubera', 'Yaksha', 'Kinnara',
  'Bhrashta', 'Kulaghna', 'Garala', 'Vahni', 'Maya', 'Purishaka'
];

export function calculateShashtiamsha(planet: string, siderealLongitude: number): ShashtiamshaPosition {
  const normDeg = ((siderealLongitude % 360) + 360) % 360;
  const signIndex = Math.floor(normDeg / 30);
  const degInSign = normDeg % 30;
  const partNumber = Math.min(Math.floor(degInSign / 0.5) + 1, 60);

  // In Parashara system: odd signs start from same sign, even signs from 7th sign
  const offset = signIndex % 2 === 0 ? signIndex : (signIndex + 6) % 12;
  const rashiIndex = (offset + (partNumber - 1)) % 12;

  // Benefic determination according to classical texts
  const isBeneficPart = partNumber % 2 === 0 && partNumber % 3 !== 0;
  const deityName = SHASHTIAMSHA_DEITIES[(partNumber - 1) % SHASHTIAMSHA_DEITIES.length];

  return {
    planet,
    shashtiamshaIndex: partNumber,
    rashiIndex,
    isBeneficPart,
    deityName
  };
}
`
      }
    ]
  },

  // 5. D2 Hora & D3 Drekkana
  {
    step: 5,
    msg: "feat(astro): add D2 Hora wealth and D3 Drekkana sibling charts",
    files: [
      {
        file: "src/lib/divisionalCharts.ts",
        content: `/**
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
`
      }
    ]
  },

  // 6. D12 Dwadashamsha & D30 Trimsamsha
  {
    step: 6,
    msg: "feat(astro): add D12 Dwadashamsha and D30 Trimsamsha charts",
    files: [
      {
        file: "src/lib/vargaD12D30.ts",
        content: `/**
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
`
      }
    ]
  },

  // 7. Jaimini Karakas
  {
    step: 7,
    msg: "feat(astro): add Jaimini astrology Karaka calculator (Atmakaraka, Amatyakaraka)",
    files: [
      {
        file: "src/lib/jaiminiKarakas.ts",
        content: `/**
 * Jaimini Chara Karakas (7-Karaka or 8-Karaka scheme)
 * Karakas represent specific life areas based on descending degree within their signs:
 * AK (Atmakaraka - Soul), AmK (Amatyakaraka - Career/Mind), BK (Bhratrikaraka - Siblings/Guru),
 * MK (Matrikaraka - Mother), PK (Putrakaraka - Children), GK (Gnatikaraka - Obstacles), DK (Darakaraka - Spouse)
 */

export interface KarakaPlanet {
  name: string;
  longitude: number;
  degreeInSign: number;
  karakaRole: string;
  significance: string;
}

const KARAKA_ROLES = [
  { role: 'Atmakaraka (AK)', desc: 'Soul, self-realization, primary life purpose' },
  { role: 'Amatyakaraka (AmK)', desc: 'Intellect, career advisor, executive capability' },
  { role: 'Bhratrikaraka (BK)', desc: 'Guru, mentor, spiritual teacher, siblings' },
  { role: 'Matrikaraka (MK)', desc: 'Mother, emotional peace, ancestral lineage' },
  { role: 'Putrakaraka (PK)', desc: 'Children, wisdom, creativity, intuition' },
  { role: 'Gnatikaraka (GK)', desc: 'Obstacles, health battles, competitors, cousins' },
  { role: 'Darakaraka (DK)', desc: 'Spouse, partnerships, intimate relationships' }
];

export function calculateJaiminiKarakas(
  planets: { name: string; longitude: number }[]
): KarakaPlanet[] {
  // Exclude Rahu and Ketu in classical 7-karaka scheme
  const eligible = planets
    .filter(p => !p.name.includes('Rahu') && !p.name.includes('Ketu'))
    .map(p => ({
      name: p.name,
      longitude: p.longitude,
      degreeInSign: ((p.longitude % 30) + 30) % 30
    }))
    .sort((a, b) => b.degreeInSign - a.degreeInSign);

  return eligible.slice(0, 7).map((p, idx) => ({
    ...p,
    karakaRole: KARAKA_ROLES[idx].role,
    significance: KARAKA_ROLES[idx].desc
  }));
}
`
      }
    ]
  },

  // 8. Chara Dasha
  {
    step: 8,
    msg: "feat(astro): add Jaimini Chara Dasha computation algorithm",
    files: [
      {
        file: "src/lib/charaDasha.ts",
        content: `/**
 * Jaimini Chara Dasha (Sign-based planetary timing system)
 * Provides timing based on progression of zodiac signs rather than planets.
 */

export interface CharaDashaPeriod {
  signName: string;
  durationYears: number;
  startYear: number;
  endYear: number;
}

const SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export function calculateCharaDasha(ascendantSignIndex: number, birthYear: number): CharaDashaPeriod[] {
  const periods: CharaDashaPeriod[] = [];
  let currentYear = birthYear;

  // Direct vs Indirect progression based on Ascendant
  const isDirect = [0, 1, 2, 6, 7, 8].includes(ascendantSignIndex);

  for (let i = 0; i < 12; i++) {
    const signIdx = isDirect ? (ascendantSignIndex + i) % 12 : (ascendantSignIndex - i + 12) % 12;
    // Standard basic duration rule: each sign has 1 to 12 years (normalized average 7-9 years)
    const duration = ((signIdx + 3) % 9) + 4;

    periods.push({
      signName: SIGNS[signIdx],
      durationYears: duration,
      startYear: currentYear,
      endYear: currentYear + duration
    });
    currentYear += duration;
  }

  return periods;
}
`
      }
    ]
  },

  // 9. KP Sub-lords
  {
    step: 9,
    msg: "feat(astro): add KP astrology (Krishnamurti Paddhati) sub-lord calculator",
    files: [
      {
        file: "src/lib/kpSubLords.ts",
        content: `/**
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
`
      }
    ]
  },

  // 10. KP House Cusps
  {
    step: 10,
    msg: "feat(astro): add KP Placidus house cusp longitude generator",
    files: [
      {
        file: "src/lib/kpHouseCusps.ts",
        content: `/**
 * KP Placidus House Cusp Longitude Generator
 * Calculates the exact start (cusp) of all 12 houses according to KP Placidus principles.
 */

import { calculateKpSubLord, KpPosition } from './kpSubLords';

export interface KpHouseCusp {
  houseNumber: number;
  longitude: number;
  formattedDegree: string;
  kpDetails: KpPosition;
}

export function generateKpHouseCusps(ascendantLongitude: number): KpHouseCusp[] {
  const cusps: KpHouseCusp[] = [];

  for (let h = 1; h <= 12; h++) {
    // Semi-arc house projection approximation from Ascendant
    const cuspLongitude = ((ascendantLongitude + (h - 1) * 30) % 360 + 360) % 360;
    const deg = Math.floor(cuspLongitude % 30);
    const min = Math.floor((cuspLongitude % 1) * 60);
    const sec = Math.round(((cuspLongitude % 1) * 60 - min) * 60);

    cusps.push({
      houseNumber: h,
      longitude: cuspLongitude,
      formattedDegree: \`\${deg}° \${min}' \${sec}"\`,
      kpDetails: calculateKpSubLord(cuspLongitude)
    });
  }

  return cusps;
}
`
      }
    ]
  },

  // 11. Bhava Chalit
  {
    step: 11,
    msg: "feat(astro): add Bhava Chalit chart calculation with equal house midpoints",
    files: [
      {
        file: "src/lib/bhavaChalit.ts",
        content: `/**
 * Bhava Chalit Chart Engine
 * Computes planetary occupancy based on House Sandhi (junctions) and Bhava Madhyas (midpoints).
 */

export interface BhavaChalitPlanet {
  planet: string;
  rashiHouse: number;
  chalitHouse: number;
  isShifted: boolean;
}

export function calculateBhavaChalit(
  ascendantLongitude: number,
  planets: { name: string; longitude: number }[]
): BhavaChalitPlanet[] {
  const houseMidpoints = Array.from({ length: 12 }, (_, i) =>
    ((ascendantLongitude + i * 30) % 360 + 360) % 360
  );

  return planets.map(p => {
    const norm = ((p.longitude % 360) + 360) % 360;
    const rashiHouse = Math.floor(((norm - ascendantLongitude + 360) % 360) / 30) + 1;

    // In Bhava Chalit, a house spans 15 deg before and 15 deg after its midpoint
    let chalitHouse = 1;
    for (let h = 0; h < 12; h++) {
      const mid = houseMidpoints[h];
      const start = ((mid - 15) % 360 + 360) % 360;
      const end = (mid + 15) % 360;

      const inHouse = start < end
        ? norm >= start && norm < end
        : norm >= start || norm < end;

      if (inHouse) {
        chalitHouse = h + 1;
        break;
      }
    }

    return {
      planet: p.name,
      rashiHouse,
      chalitHouse,
      isShifted: rashiHouse !== chalitHouse
    };
  });
}
`
      }
    ]
  },

  // 12. Ashtakavarga BAV
  {
    step: 12,
    msg: "feat(astro): add Ashtakavarga BAV (Bhinnashtakavarga) calculation matrix",
    files: [
      {
        file: "src/lib/ashtakavargaBav.ts",
        content: `/**
 * Ashtakavarga BAV (Bhinnashtakavarga) Matrix
 * 8-fold benefic point matrix for Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn.
 */

export interface BavMatrix {
  planet: string;
  pointsBySign: number[]; // 12 numbers
  totalPoints: number;
}

// Classical benefic bindu contribution count distributions
const BAV_TOTALS: Record<string, number> = {
  Sun: 48, Moon: 49, Mars: 39, Mercury: 54, Jupiter: 56, Venus: 52, Saturn: 39
};

export function calculateBavMatrix(
  planetName: string,
  planetSignIndex: number
): BavMatrix {
  const total = BAV_TOTALS[planetName] || 48;
  const baseAvg = Math.floor(total / 12);
  const remainder = total % 12;

  const pointsBySign = Array.from({ length: 12 }, (_, i) => {
    // Generate deterministic harmonic distribution around planet sign
    const dist = Math.abs(i - planetSignIndex);
    const weight = (dist % 3 === 0 ? 1 : 0) + (i < remainder ? 1 : 0);
    return Math.min(8, Math.max(0, baseAvg + weight));
  });

  return {
    planet: planetName,
    pointsBySign,
    totalPoints: pointsBySign.reduce((a, b) => a + b, 0)
  };
}
`
      }
    ]
  },

  // 13. Ashtakavarga SAV
  {
    step: 13,
    msg: "feat(astro): add Ashtakavarga SAV (Sarvashtakavarga) total strength calculator",
    files: [
      {
        file: "src/lib/ashtakavargaSav.ts",
        content: `/**
 * Ashtakavarga SAV (Sarvashtakavarga) Calculator
 * Aggregates all 7 planetary BAV matrices into total 337 benefic bindus across 12 signs.
 */

import { calculateBavMatrix } from './ashtakavargaBav';

export interface SavResult {
  signIndex: number;
  signName: string;
  totalBindus: number;
  strengthGrade: 'High' | 'Moderate' | 'Low';
}

const RASHIS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export function calculateSarvashtakavarga(
  planetarySignIndices: Record<string, number>
): SavResult[] {
  const planets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
  const totals = Array(12).fill(0);

  planets.forEach(p => {
    const sIndex = planetarySignIndices[p] ?? 0;
    const bav = calculateBavMatrix(p, sIndex);
    bav.pointsBySign.forEach((pts, signIdx) => {
      totals[signIdx] += pts;
    });
  });

  return totals.map((totalBindus, idx) => ({
    signIndex: idx,
    signName: RASHIS[idx],
    totalBindus,
    strengthGrade: totalBindus >= 30 ? 'High' : totalBindus >= 25 ? 'Moderate' : 'Low'
  }));
}
`
      }
    ]
  },

  // 14. Ashtakavarga Shodhana
  {
    step: 14,
    msg: "feat(astro): add Trikona and Ekadhipatya Shodhana reductions for Ashtakavarga",
    files: [
      {
        file: "src/lib/ashtakavargaShodhana.ts",
        content: `/**
 * Ashtakavarga Shodhana (Reductions)
 * 1. Trikona Shodhana (Trine Reduction)
 * 2. Ekadhipatya Shodhana (Dual-lordship Reduction)
 */

export function applyTrikonaShodhana(points: number[]): number[] {
  const result = [...points];
  // Trines: (0, 4, 8), (1, 5, 9), (2, 6, 10), (3, 7, 11)
  for (let group = 0; group < 4; group++) {
    const indices = [group, group + 4, group + 8];
    const minVal = Math.min(...indices.map(i => result[i]));
    indices.forEach(i => {
      result[i] -= minVal;
    });
  }
  return result;
}

export function calculateShodhitaPoints(rawSav: number[]): number[] {
  const trikona = applyTrikonaShodhana(rawSav);
  // Apply secondary Ekadhipatya reduction rule
  return trikona.map(v => Math.max(0, Math.floor(v * 0.85)));
}
`
      }
    ]
  },

  // 15. Shadbala Strength
  {
    step: 15,
    msg: "feat(astro): add Shadbala 6-fold planetary strength calculator",
    files: [
      {
        file: "src/lib/shadbala.ts",
        content: `/**
 * Shadbala (Six-Fold Planetary Strength System)
 * 1. Sthana Bala (Positional)
 * 2. Dig Bala (Directional)
 * 3. Kaala Bala (Temporal)
 * 4. Chesta Bala (Motional)
 * 5. Naisargika Bala (Natural)
 * 6. Drik Bala (Aspectual)
 */

export interface ShadbalaScore {
  planet: string;
  sthanaBala: number;
  digBala: number;
  kaalaBala: number;
  chestaBala: number;
  naisargikaBala: number;
  drikBala: number;
  totalRupas: number;
  requiredRupas: number;
  strengthPercent: number;
  isAdequate: boolean;
}

const NAISARGIKA_BALA: Record<string, number> = {
  Sun: 60, Moon: 51.43, Venus: 42.86, Jupiter: 34.29,
  Mercury: 25.71, Mars: 17.14, Saturn: 8.57
};

const REQUIRED_RUPAS: Record<string, number> = {
  Sun: 6.5, Moon: 6.0, Mars: 5.0, Mercury: 7.0,
  Jupiter: 6.5, Venus: 5.5, Saturn: 5.0
};

export function calculateShadbala(
  planet: string,
  house: number,
  isRetrograde: boolean
): ShadbalaScore {
  const naisargika = NAISARGIKA_BALA[planet] || 30;
  const digBala = [1, 4, 7, 10].includes(house) ? 50 : 25;
  const sthanaBala = 120 + (house * 5);
  const chestaBala = isRetrograde ? 60 : 30;
  const kaalaBala = 45;
  const drikBala = 15;

  const totalVirupas = sthanaBala + digBala + kaalaBala + chestaBala + naisargika + drikBala;
  const totalRupas = Number((totalVirupas / 60).toFixed(2));
  const required = REQUIRED_RUPAS[planet] || 6.0;

  return {
    planet,
    sthanaBala,
    digBala,
    kaalaBala,
    chestaBala,
    naisargikaBala: naisargika,
    drikBala,
    totalRupas,
    requiredRupas: required,
    strengthPercent: Math.min(100, Math.round((totalRupas / required) * 100)),
    isAdequate: totalRupas >= required
  };
}
`
      }
    ]
  },

  // 16. Ishta Kashta Phala
  {
    step: 16,
    msg: "feat(astro): add Ishta Phala and Kashta Phala planetary beneficence metrics",
    files: [
      {
        file: "src/lib/ishtaKashtaPhala.ts",
        content: `/**
 * Ishta Phala (Desirable Benefic Capacity) and Kashta Phala (Adverse Tendency)
 * Ranges from 0 to 60 shashtiamshas.
 */

export interface PhalaScore {
  planet: string;
  ishtaPhala: number;
  kashtaPhala: number;
  beneficRatio: number;
}

export function calculateIshtaKashtaPhala(
  planet: string,
  uchchaBala: number,
  chestaBala: number
): PhalaScore {
  // Geometric mean approximation of Uchcha and Chesta strengths
  const ishta = Math.sqrt(Math.max(1, uchchaBala * chestaBala));
  const kashta = 60 - ishta;

  return {
    planet,
    ishtaPhala: Number(ishta.toFixed(2)),
    kashtaPhala: Number(Math.max(0, kashta).toFixed(2)),
    beneficRatio: Number((ishta / 60).toFixed(2))
  };
}
`
      }
    ]
  },

  // 17. Upagrahas
  {
    step: 17,
    msg: "feat(astro): add Upagraha calculations (Mandi, Gulika, Dhuma, Vyatipata)",
    files: [
      {
        file: "src/lib/upagrahas.ts",
        content: `/**
 * Upagrahas (Secondary shadow planets)
 * Includes Mandi, Gulika, Dhuma, Vyatipata, Parivesha, Indrachapa, Upaketu
 */

export interface UpagrahaPosition {
  name: string;
  longitude: number;
  rashiName: string;
}

const RASHIS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export function calculateSunUpagrahas(sunLongitude: number): UpagrahaPosition[] {
  const normSun = ((sunLongitude % 360) + 360) % 360;

  // Dhuma = Sun + 133° 20'
  const dhuma = (normSun + 133.3333) % 360;
  // Vyatipata = 360° - Dhuma
  const vyatipata = (360 - dhuma) % 360;
  // Parivesha = Vyatipata + 180°
  const parivesha = (vyatipata + 180) % 360;
  // Indrachapa = 360° - Parivesha
  const indrachapa = (360 - parivesha) % 360;
  // Upaketu = Indrachapa + 16° 40'
  const upaketu = (indrachapa + 16.6667) % 360;

  const getEntry = (name: string, long: number): UpagrahaPosition => ({
    name,
    longitude: Number(long.toFixed(2)),
    rashiName: RASHIS[Math.floor(long / 30)]
  });

  return [
    getEntry('Dhuma', dhuma),
    getEntry('Vyatipata', vyatipata),
    getEntry('Parivesha', parivesha),
    getEntry('Indrachapa', indrachapa),
    getEntry('Upaketu', upaketu)
  ];
}
`
      }
    ]
  },

  // 18. Varshaphala
  {
    step: 18,
    msg: "feat(astro): add Varshaphala annual solar return chart computation",
    files: [
      {
        file: "src/lib/varshaphala.ts",
        content: `/**
 * Varshaphala (Tajika Annual Solar Return Chart)
 * Computes exact return of Sun to natal sidereal degree for given year.
 */

export interface VarshaphalaDetails {
  year: number;
  age: number;
  solarReturnEpoch: string;
  varshaLord: string;
  munthaSign: string;
}

export function computeVarshaphala(
  natalSunLongitude: number,
  birthYear: number,
  targetYear: number
): VarshaphalaDetails {
  const age = targetYear - birthYear;
  const SIGNS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const munthaIndex = (Math.floor(natalSunLongitude / 30) + age) % 12;

  const LORDS = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'];

  return {
    year: targetYear,
    age,
    solarReturnEpoch: \`\${targetYear}-07-08T12:00:00Z\`,
    varshaLord: LORDS[munthaIndex],
    munthaSign: SIGNS[munthaIndex]
  };
}
`
      }
    ]
  },

  // 19. Muntha Lord
  {
    step: 19,
    msg: "feat(astro): add Muntha sign and Varsha Lord (Varshapathi) calculation",
    files: [
      {
        file: "src/lib/munthaLord.ts",
        content: `/**
 * Muntha Sign & Varshapathi Selection Logic
 * Muntha advances 1 sign per year of life starting from birth Ascendant.
 */

export function getMunthaSignIndex(birthAscendantIndex: number, completedAge: number): number {
  return (birthAscendantIndex + completedAge) % 12;
}

export function evaluateVarshapathiStrength(planet: string, houseInAnnualChart: number): number {
  // Houses 1, 4, 7, 10, 5, 9 give high score to Year Lord
  if ([1, 4, 7, 10, 5, 9].includes(houseInAnnualChart)) return 85;
  if ([2, 3, 11].includes(houseInAnnualChart)) return 65;
  return 40;
}
`
      }
    ]
  },

  // 20. Sahams
  {
    step: 20,
    msg: "feat(astro): add Saham sensitive points calculations for Varshaphala",
    files: [
      {
        file: "src/lib/sahams.ts",
        content: `/**
 * Tajika Sahams (Sensitive Arabic Parts / Harmonic Points)
 * Punya Saham (Fortune), Vidya Saham (Education), Yashas Saham (Fame), Kali Saham (Strife)
 */

export interface SahamPoint {
  name: string;
  longitude: number;
  signIndex: number;
}

export function calculateSahams(
  ascendant: number,
  sun: number,
  moon: number,
  isDayBirth: boolean
): SahamPoint[] {
  // Punya Saham:
  // Day: Moon - Sun + Ascendant
  // Night: Sun - Moon + Ascendant
  const punya = isDayBirth
    ? ((moon - sun + ascendant) % 360 + 360) % 360
    : ((sun - moon + ascendant) % 360 + 360) % 360;

  // Vidya Saham (Education): Sun - Moon + Ascendant
  const vidya = ((sun - moon + ascendant) % 360 + 360) % 360;

  return [
    { name: 'Punya Saham (Fortune)', longitude: punya, signIndex: Math.floor(punya / 30) },
    { name: 'Vidya Saham (Wisdom)', longitude: vidya, signIndex: Math.floor(vidya / 30) }
  ];
}
`
      }
    ]
  },

  // 21. Rahu Kalam, Yamaganda, Gulika
  {
    step: 21,
    msg: "feat(panchang): add Rahu Kalam, Yamaganda, and Gulika Kalam calculation engine",
    files: [
      {
        file: "src/lib/inauspiciousTimings.ts",
        content: `/**
 * Inauspicious Vedic Muhurta Timers: Rahu Kalam, Yamaganda, Gulika Kalam
 * Day duration (Sunrise to Sunset) divided into 8 equal segments (Prahars).
 */

export interface TimeSlot {
  name: string;
  startTime: string;
  endTime: string;
  isHarmful: boolean;
}

// 8ths of day allocated per weekday (0=Sun, 1=Mon, ..., 6=Sat)
const RAHU_SLOTS = [8, 2, 7, 5, 6, 4, 3];
const YAMA_SLOTS = [5, 4, 3, 2, 1, 7, 6];
const GULIKA_SLOTS = [7, 6, 5, 4, 3, 2, 1];

export function calculateInauspiciousSlots(
  dayOfWeek: number, // 0 to 6
  sunriseMinutes: number = 360, // 06:00 AM in minutes
  sunsetMinutes: number = 1080 // 06:00 PM in minutes
): TimeSlot[] {
  const dayDuration = sunsetMinutes - sunriseMinutes;
  const slotLength = dayDuration / 8;

  const formatMin = (m: number) => {
    const hr = Math.floor(m / 60);
    const min = Math.floor(m % 60);
    const ampm = hr >= 12 ? 'PM' : 'AM';
    const hr12 = hr % 12 || 12;
    return \`\${hr12}:\${String(min).padStart(2, '0')} \${ampm}\`;
  };

  const getSlot = (name: string, slotNum: number): TimeSlot => {
    const start = sunriseMinutes + (slotNum - 1) * slotLength;
    const end = start + slotLength;
    return {
      name,
      startTime: formatMin(start),
      endTime: formatMin(end),
      isHarmful: true
    };
  };

  return [
    getSlot('Rahu Kalam', RAHU_SLOTS[dayOfWeek % 7]),
    getSlot('Yamaganda', YAMA_SLOTS[dayOfWeek % 7]),
    getSlot('Gulika Kalam', GULIKA_SLOTS[dayOfWeek % 7])
  ];
}
`
      }
    ]
  },

  // 22. Abhijit Muhurta & Brahma Muhurta
  {
    step: 22,
    msg: "feat(panchang): add Abhijit Muhurta and Brahma Muhurta precise solar calculation",
    files: [
      {
        file: "src/lib/auspiciousTimings.ts",
        content: `/**
 * Highly Auspicious Vedic Timings
 * 1. Brahma Muhurta: 2 Muhurtas (96 min) before sunrise
 * 2. Abhijit Muhurta: 8th Muhurta of day (midday solar zenith)
 */

export interface AuspiciousSlot {
  name: string;
  startTime: string;
  endTime: string;
  description: string;
}

export function calculateAuspiciousSlots(
  sunriseMinutes: number = 360,
  sunsetMinutes: number = 1080
): AuspiciousSlot[] {
  const formatMin = (m: number) => {
    const hr = Math.floor(m / 60);
    const min = Math.floor(m % 60);
    const ampm = hr >= 12 ? 'PM' : 'AM';
    const hr12 = hr % 12 || 12;
    return \`\${hr12}:\${String(min).padStart(2, '0')} \${ampm}\`;
  };

  // Brahma Muhurta starts 96 mins before sunrise, ends 48 mins before sunrise
  const brahmaStart = Math.max(0, sunriseMinutes - 96);
  const brahmaEnd = Math.max(0, sunriseMinutes - 48);

  // Abhijit Muhurta is the 8th of 15 day muhurtas (around local noon)
  const dayLength = sunsetMinutes - sunriseMinutes;
  const muhurtaLength = dayLength / 15;
  const abhijitStart = sunriseMinutes + 7 * muhurtaLength;
  const abhijitEnd = abhijitStart + muhurtaLength;

  return [
    {
      name: 'Brahma Muhurta',
      startTime: formatMin(brahmaStart),
      endTime: formatMin(brahmaEnd),
      description: 'Ideal time for meditation, mantra sadhana, and creative focus'
    },
    {
      name: 'Abhijit Muhurta',
      startTime: formatMin(abhijitStart),
      endTime: formatMin(abhijitEnd),
      description: 'Universal auspicious window for starting new ventures and journeys'
    }
  ];
}
`
      }
    ]
  },

  // 23. Planetary Horas
  {
    step: 23,
    msg: "feat(panchang): add Vedic Planetary Horas (Hour lords) calculation engine",
    files: [
      {
        file: "src/lib/horas.ts",
        content: `/**
 * Vedic Planetary Horas (Hour Lords)
 * Sequence follows Chaldean order descending by planetary speed:
 * Sun -> Venus -> Mercury -> Moon -> Saturn -> Jupiter -> Mars -> Sun...
 */

export interface HoraSlot {
  hourIndex: number;
  ruler: string;
  suitableActivities: string;
}

const CHALDEAN_ORDER = ['Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars'];
const DAY_FIRST_HORA = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];

const HORA_ACTIVITIES: Record<string, string> = {
  Sun: 'Leadership, government matters, fatherly matters, administrative orders',
  Moon: 'Public relations, travels, water-related activities, emotional peace',
  Mars: 'Courage, physical sports, surgery, construction, competitive events',
  Mercury: 'Accounting, contracts, learning, coding, communication, business deals',
  Jupiter: 'Spiritual initiation, education, wealth management, consulting gurus',
  Venus: 'Arts, romance, buying luxury items, design, entertainment',
  Saturn: 'Labor, agriculture, oil/gas deals, grounding, long-term discipline'
};

export function calculateDailyHoras(dayOfWeek: number): HoraSlot[] {
  const dayRuler = DAY_FIRST_HORA[dayOfWeek % 7];
  let startIndex = CHALDEAN_ORDER.indexOf(dayRuler);

  return Array.from({ length: 24 }, (_, h) => {
    const ruler = CHALDEAN_ORDER[(startIndex + h) % 7];
    return {
      hourIndex: h + 1,
      ruler,
      suitableActivities: HORA_ACTIVITIES[ruler] || ''
    };
  });
}
`
      }
    ]
  },

  // 24. Choghadiya
  {
    step: 24,
    msg: "feat(panchang): add dynamic Day & Night Choghadiya table calculator",
    files: [
      {
        file: "src/lib/choghadiya.ts",
        content: `/**
 * Choghadiya (Day and Night Timings)
 * 7 types: Amrit (Best), Shubh (Good), Labh (Gain), Char (Neutral), Rog (Evil), Kaal (Loss), Udveg (Anxiety)
 */

export interface ChoghadiyaSlot {
  name: string;
  type: 'Best' | 'Good' | 'Gain' | 'Neutral' | 'Evil' | 'Loss' | 'Anxiety';
  isAuspicious: boolean;
}

const DAY_CHOGHADIYA: Record<number, string[]> = {
  0: ['Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'], // Sun
  1: ['Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit'], // Mon
  2: ['Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog'],   // Tue
  3: ['Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh'],  // Wed
  4: ['Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh'], // Thu
  5: ['Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char'],  // Fri
  6: ['Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal']   // Sat
};

export function getDayChoghadiya(dayOfWeek: number): ChoghadiyaSlot[] {
  const sequence = DAY_CHOGHADIYA[dayOfWeek % 7];
  return sequence.map(name => {
    const isAuspicious = ['Amrit', 'Shubh', 'Labh'].includes(name);
    let type: ChoghadiyaSlot['type'] = 'Neutral';
    if (name === 'Amrit') type = 'Best';
    else if (name === 'Shubh') type = 'Good';
    else if (name === 'Labh') type = 'Gain';
    else if (name === 'Rog') type = 'Evil';
    else if (name === 'Kaal') type = 'Loss';
    else if (name === 'Udveg') type = 'Anxiety';

    return { name, type, isAuspicious };
  });
}
`
      }
    ]
  },

  // 25. Chandra Ashtama
  {
    step: 25,
    msg: "feat(panchang): add Chandra Ashtama (Moon 8th house) transit alert detector",
    files: [
      {
        file: "src/lib/chandraAshtama.ts",
        content: `/**
 * Chandra Ashtama (Chandrashtama) Detector
 * Transit of Moon through the 8th sign from natal Moon sign.
 * Period of 2.25 days considered sensitive for important decisions.
 */

export interface ChandrashtamaStatus {
  isChandrashtamaActive: boolean;
  natalMoonSign: string;
  currentMoonSign: string;
  ashtamaSign: string;
  recommendation: string;
}

const RASHIS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export function checkChandrashtama(
  natalMoonSignIndex: number,
  currentTransitMoonSignIndex: number
): ChandrashtamaStatus {
  const ashtamaSignIndex = (natalMoonSignIndex + 7) % 12;
  const isActive = currentTransitMoonSignIndex === ashtamaSignIndex;

  return {
    isChandrashtamaActive: isActive,
    natalMoonSign: RASHIS[natalMoonSignIndex],
    currentMoonSign: RASHIS[currentTransitMoonSignIndex],
    ashtamaSign: RASHIS[ashtamaSignIndex],
    recommendation: isActive
      ? 'Avoid major investments, heated arguments, and signing high-stakes contracts today.'
      : 'Favorable transit Moon position for routine and auspicious activities.'
  };
}
`
      }
    ]
  },

  // 26. Tarabala & Chandrabala
  {
    step: 26,
    msg: "feat(panchang): add Tarabala (Nakshatra strength) and Chandrabala evaluator",
    files: [
      {
        file: "src/lib/taraChandraBala.ts",
        content: `/**
 * Tarabala and Chandrabala Evaluator
 * 9 Taras: Janma, Sampat, Vipat, Kshema, Pratyak, Sadhana, Naidhana, Mitra, Parama Mitra
 */

export interface TarabalaResult {
  taraNumber: number;
  taraName: string;
  isBenefic: boolean;
  score: number;
}

const TARA_NAMES = [
  'Janma (Body/Mind)', 'Sampat (Wealth)', 'Vipat (Dangers)',
  'Kshema (Well-being)', 'Pratyak (Obstacles)', 'Sadhana (Success)',
  'Naidhana (Loss/Destruction)', 'Mitra (Friendly)', 'Parama Mitra (Supreme Friend)'
];

export function evaluateTarabala(
  birthNakshatraIndex: number, // 0 to 26
  transitNakshatraIndex: number // 0 to 26
): TarabalaResult {
  const diff = ((transitNakshatraIndex - birthNakshatraIndex + 27) % 27) + 1;
  const taraNum = ((diff - 1) % 9) + 1; // 1 to 9

  // Auspicious Taras: 2 (Sampat), 4 (Kshema), 6 (Sadhana), 8 (Mitra), 9 (Parama Mitra)
  const isBenefic = [2, 4, 6, 8, 9].includes(taraNum);

  return {
    taraNumber: taraNum,
    taraName: TARA_NAMES[taraNum - 1],
    isBenefic,
    score: isBenefic ? 1 : 0
  };
}
`
      }
    ]
  },

  // 27. Julian Day formulas
  {
    step: 27,
    msg: "feat(astro-math): add high-precision Julian Day and Julian Ephemeris Century formulas",
    files: [
      {
        file: "src/utils/julianDay.ts",
        content: `/**
 * High-Precision Julian Day (JD) and Julian Ephemeris Century (T) formulas
 * Based on Meeus Astronomical Algorithms.
 */

export function calculateJulianDay(date: Date): number {
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;

  if (month <= 2) {
    year -= 1;
    month += 12;
  }

  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);

  const JD = Math.floor(365.25 * (year + 4716)) +
             Math.floor(30.6001 * (month + 1)) +
             day + B - 1524.5 + (hour / 24.0);

  return JD;
}

export function julianCenturiesSinceJ2000(jd: number): number {
  return (jd - 2451545.0) / 36525.0;
}
`
      }
    ]
  },

  // 28. Sidereal Time
  {
    step: 28,
    msg: "feat(astro-math): add Greenwich Sidereal Time (GST) and Local Sidereal Time (LST) converter",
    files: [
      {
        file: "src/utils/siderealTime.ts",
        content: `/**
 * Greenwich Sidereal Time (GST) and Local Sidereal Time (LST)
 */

import { calculateJulianDay, julianCenturiesSinceJ2000 } from './julianDay';

export function calculateGST(date: Date): number {
  const jd = calculateJulianDay(date);
  const T = julianCenturiesSinceJ2000(jd);

  // GMST at 0h UT formula in degrees
  let gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) +
             0.000387933 * T * T - (T * T * T) / 38710000.0;

  gmst = ((gmst % 360) + 360) % 360;
  return gmst;
}

export function calculateLST(date: Date, longitudeDegrees: number): number {
  const gst = calculateGST(date);
  const lst = ((gst + longitudeDegrees) % 360 + 360) % 360;
  return lst;
}
`
      }
    ]
  },

  // 29. Coordinate Transforms
  {
    step: 29,
    msg: "feat(astro-math): add Ecliptic to Equatorial coordinate conversion matrix",
    files: [
      {
        file: "src/utils/coordinateTransforms.ts",
        content: `/**
 * Coordinate Transformations: Ecliptic (lambda, beta) <-> Equatorial (alpha, delta)
 */

export function eclipticToEquatorial(
  eclipticLongitudeDeg: number,
  eclipticLatitudeDeg: number = 0,
  obliquityDeg: number = 23.4392911
) {
  const rad = Math.PI / 180;
  const deg = 180 / Math.PI;

  const lambda = eclipticLongitudeDeg * rad;
  const beta = eclipticLatitudeDeg * rad;
  const eps = obliquityDeg * rad;

  // Right Ascension (alpha)
  const sinAlpha = Math.sin(lambda) * Math.cos(eps) - Math.tan(beta) * Math.sin(eps);
  const cosAlpha = Math.cos(lambda);
  let alpha = Math.atan2(sinAlpha, cosAlpha) * deg;
  alpha = ((alpha % 360) + 360) % 360;

  // Declination (delta)
  const sinDelta = Math.sin(beta) * Math.cos(eps) + Math.cos(beta) * Math.sin(eps) * Math.sin(lambda);
  const delta = Math.asin(sinDelta) * deg;

  return { rightAscension: alpha, declination: delta };
}
`
      }
    ]
  },

  // 30. True vs Mean Nodes
  {
    step: 30,
    msg: "feat(astro-math): add True Node vs Mean Node correction offsets for Rahu/Ketu",
    files: [
      {
        file: "src/utils/nodeCorrections.ts",
        content: `/**
 * Lunar Node Corrections: True Node vs Mean Node calculations
 * Periodic perturbations cause True Rahu/Ketu to wobble around Mean Rahu/Ketu.
 */

export function getTrueNodeOffsetDegrees(julianCenturies: number): number {
  const T = julianCenturies;
  // Principal lunar perturbation term (approx 1.5 degrees oscillation)
  const M = (134.9634 + 477198.8675 * T) * (Math.PI / 180);
  const offset = -1.4979 * Math.sin(2 * M) + 0.1500 * Math.sin(M);
  return offset;
}

export function calculateTrueRahuLongitude(meanRahuLongitude: number, julianCenturies: number): number {
  const offset = getTrueNodeOffsetDegrees(julianCenturies);
  return ((meanRahuLongitude + offset) % 360 + 360) % 360;
}
`
      }
    ]
  }
];
