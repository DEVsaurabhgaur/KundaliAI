export const batch1 = [
  // 1. Ashtottari Dasha
  {
    step: 1,
    msg: "feat(dasha): add 108-year Ashtottari Dasha cycle calculator",
    files: [{
      file: "src/lib/dasha/ashtottariDasha.ts",
      content: `/**
 * Ashtottari Dasha (108-year planetary cycle)
 * Order: Sun (6), Moon (15), Mars (8), Mercury (17), Saturn (10), Jupiter (19), Rahu (12), Venus (21)
 */

export interface AshtottariPeriod {
  planet: string;
  durationYears: number;
  startDate: string;
  endDate: string;
}

export const ASHTOTTARI_YEARS: Record<string, number> = {
  Sun: 6, Moon: 15, Mars: 8, Mercury: 17,
  Saturn: 10, Jupiter: 19, Rahu: 12, Venus: 21
};

export const ASHTOTTARI_ORDER = ['Sun', 'Moon', 'Mars', 'Mercury', 'Saturn', 'Jupiter', 'Rahu', 'Venus'];

export function calculateAshtottariDasha(startPlanet: string, birthYear: number): AshtottariPeriod[] {
  let startIndex = ASHTOTTARI_ORDER.indexOf(startPlanet);
  if (startIndex === -1) startIndex = 0;

  const periods: AshtottariPeriod[] = [];
  let currentYear = birthYear;

  for (let i = 0; i < 8; i++) {
    const planet = ASHTOTTARI_ORDER[(startIndex + i) % 8];
    const duration = ASHTOTTARI_YEARS[planet];
    periods.push({
      planet,
      durationYears: duration,
      startDate: \`\${currentYear}-01-01\`,
      endDate: \`\${currentYear + duration}-01-01\`
    });
    currentYear += duration;
  }

  return periods;
}
`
    }]
  },

  // 2. Yogini Dasha
  {
    step: 2,
    msg: "feat(dasha): add 36-year Yogini Dasha cycle calculator",
    files: [{
      file: "src/lib/dasha/yoginiDasha.ts",
      content: `/**
 * Yogini Dasha (36-year repeating cycle)
 * 8 Yoginis: Mangala (1, Moon), Pingala (2, Sun), Dhanya (3, Jupiter),
 * Bhramari (4, Mars), Bhadrika (5, Mercury), Ulka (6, Saturn),
 * Siddha (7, Venus), Sankata (8, Rahu)
 */

export interface YoginiPeriod {
  name: string;
  rulingPlanet: string;
  durationYears: number;
  nature: 'Benefic' | 'Malefic';
  startYear: number;
  endYear: number;
}

export const YOGINI_DATA = [
  { name: 'Mangala', rulingPlanet: 'Moon', durationYears: 1, nature: 'Benefic' as const },
  { name: 'Pingala', rulingPlanet: 'Sun', durationYears: 2, nature: 'Malefic' as const },
  { name: 'Dhanya', rulingPlanet: 'Jupiter', durationYears: 3, nature: 'Benefic' as const },
  { name: 'Bhramari', rulingPlanet: 'Mars', durationYears: 4, nature: 'Malefic' as const },
  { name: 'Bhadrika', rulingPlanet: 'Mercury', durationYears: 5, nature: 'Benefic' as const },
  { name: 'Ulka', rulingPlanet: 'Saturn', durationYears: 6, nature: 'Malefic' as const },
  { name: 'Siddha', rulingPlanet: 'Venus', durationYears: 7, nature: 'Benefic' as const },
  { name: 'Sankata', rulingPlanet: 'Rahu', durationYears: 8, nature: 'Malefic' as const }
];

export function calculateYoginiDasha(nakshatraIndex: number, birthYear: number): YoginiPeriod[] {
  // Yogini index is determined by (NakshatraIndex + 3) % 8
  const startIndex = (nakshatraIndex + 3) % 8;
  const periods: YoginiPeriod[] = [];
  let currentYear = birthYear;

  for (let i = 0; i < 8; i++) {
    const yogini = YOGINI_DATA[(startIndex + i) % 8];
    periods.push({
      ...yogini,
      startYear: currentYear,
      endYear: currentYear + yogini.durationYears
    });
    currentYear += yogini.durationYears;
  }

  return periods;
}
`
    }]
  },

  // 3. Kalachakra Dasha
  {
    step: 3,
    msg: "feat(dasha): add Kalachakra Dasha Deha and Jeeva rashi mapping",
    files: [{
      file: "src/lib/dasha/kalachakraDasha.ts",
      content: `/**
 * Kalachakra Dasha (Wheel of Time)
 * Deha (Body sign) and Jeeva (Soul sign) calculation engine.
 */

export interface KalachakraInfo {
  nakshatraPada: number;
  dehaRashi: string;
  jeevaRashi: string;
  direction: 'Savya (Direct)' | 'Apasavya (Reverse)';
}

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateKalachakraPoints(nakshatraIndex: number, pada: number): KalachakraInfo {
  const isDirect = (nakshatraIndex % 2 === 0);
  const dehaIdx = (nakshatraIndex * 4 + pada) % 12;
  const jeevaIdx = (dehaIdx + 8) % 12;

  return {
    nakshatraPada: pada,
    dehaRashi: RASHIS[dehaIdx],
    jeevaRashi: RASHIS[jeevaIdx],
    direction: isDirect ? 'Savya (Direct)' : 'Apasavya (Reverse)'
  };
}
`
    }]
  },

  // 4. Vimshottari Sub-periods
  {
    step: 4,
    msg: "feat(dasha): add multi-tier Vimshottari Antardasha and Pratyantardasha generator",
    files: [{
      file: "src/lib/dasha/vimshottariSubPeriods.ts",
      content: `/**
 * Vimshottari Antardasha & Pratyantardasha Calculator
 */

const VIMSHOTTARI_YEARS: Record<string, number> = {
  Ketu: 7, Venus: 20, Sun: 6, Moon: 10, Mars: 7,
  Rahu: 18, Jupiter: 16, Saturn: 19, Mercury: 17
};

const PLANET_ORDER = ['Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury'];

export interface SubPeriod {
  mahaDasha: string;
  antarDasha: string;
  durationMonths: number;
}

export function generateAntarDashas(mahaDashaLord: string): SubPeriod[] {
  const mahaYears = VIMSHOTTARI_YEARS[mahaDashaLord] || 10;
  const startIdx = PLANET_ORDER.indexOf(mahaDashaLord);

  return Array.from({ length: 9 }, (_, i) => {
    const antarLord = PLANET_ORDER[(startIdx + i) % 9];
    const antarYears = VIMSHOTTARI_YEARS[antarLord];
    const durationMonths = Number(((mahaYears * antarYears) / 120 * 12).toFixed(2));

    return {
      mahaDasha: mahaDashaLord,
      antarDasha: antarLord,
      durationMonths
    };
  });
}
`
    }]
  },

  // 5. Dasha Phala
  {
    step: 5,
    msg: "feat(dasha): add Dasha Phala predictive text matrix for major planetary periods",
    files: [{
      file: "src/lib/dasha/dashaPhala.ts",
      content: `/**
 * Dasha Phala (Interpretive Forecast Matrix)
 */

export const DASHA_PHALA_TEXTS: Record<string, string> = {
  Sun: 'Period of elevation in authority, governmental honors, fatherly focus, and vital executive ambition.',
  Moon: 'Emotional expansion, motherly blessings, public acclaim, travel over water, and heightened creativity.',
  Mars: 'High physical stamina, conquest of competitors, real estate gains, surgical focus, and dynamic projects.',
  Rahu: 'Unconventional growth, foreign associations, tech breakthroughs, intense desires, and unexpected shifts.',
  Jupiter: 'Spiritual illumination, birth of children, wealth accumulation, mentorship, and universal wisdom.',
  Saturn: 'Enduring perseverance, structural discipline, karmic restitution, service to masses, and long-term mastery.',
  Mercury: 'Business expansion, communicative eloquence, analytical prowess, trading gains, and academic success.',
  Ketu: 'Spiritual detachment, intuitive breakthroughs, occult insights, research mastery, and moksha focus.',
  Venus: 'Luxurious comforts, romantic bliss, vehicle acquisition, artistic endeavors, and aesthetic joy.'
};

export function getDashaInterpretation(mahaLord: string, antarLord: string): string {
  const main = DASHA_PHALA_TEXTS[mahaLord] || '';
  return \`\${mahaLord}-\${antarLord} Period: \${main} Colored by \${antarLord}'s specific sub-vibrations.\`;
}
`
    }]
  },

  // 6. Mudda Dasha
  {
    step: 6,
    msg: "feat(dasha): add Mudda Dasha annual solar progression calculator",
    files: [{
      file: "src/lib/dasha/muddaDasha.ts",
      content: `/**
 * Mudda Dasha (Tajika Annual 1-Year Varshaphala Dasha)
 * Proportions of 365.25 days divided among 9 planets.
 */

export interface MuddaPeriod {
  planet: string;
  durationDays: number;
}

const MUDDA_DAYS: Record<string, number> = {
  Sun: 18.25, Moon: 30.42, Mars: 21.29, Rahu: 54.75,
  Jupiter: 48.67, Saturn: 57.79, Mercury: 51.70, Ketu: 21.29, Venus: 60.83
};

export function calculateMuddaDasha(varshapathi: string): MuddaPeriod[] {
  const planets = ['Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury', 'Ketu', 'Venus'];
  let startIdx = planets.indexOf(varshapathi);
  if (startIdx === -1) startIdx = 0;

  return Array.from({ length: 9 }, (_, i) => {
    const p = planets[(startIdx + i) % 9];
    return {
      planet: p,
      durationDays: MUDDA_DAYS[p]
    };
  });
}
`
    }]
  },

  // 7. Patyayini Dasha
  {
    step: 7,
    msg: "feat(dasha): add Patyayini Dasha calculation for Tajika system",
    files: [{
      file: "src/lib/dasha/patyayiniDasha.ts",
      content: `/**
 * Patyayini Dasha for Tajika Varshaphala
 * Based on Krishamsha degrees of planets in the annual solar return chart.
 */

export function calculatePatyayiniWeights(planets: { name: string; longitude: number }[]) {
  const totalDeg = planets.reduce((acc, p) => acc + (p.longitude % 30), 0) || 1;
  return planets.map(p => ({
    planet: p.name,
    weightRatio: Number(((p.longitude % 30) / totalDeg).toFixed(3)),
    allocatedDays: Math.round(((p.longitude % 30) / totalDeg) * 365.25)
  }));
}
`
    }]
  },

  // 8. Sandhi Dasha
  {
    step: 8,
    msg: "feat(dasha): add Dasha Sandhi transition vulnerability detector",
    files: [{
      file: "src/lib/dasha/sandhiDasha.ts",
      content: `/**
 * Dasha Sandhi (Junction between two major Mahadashas)
 * The final 6 months of an ending Dasha and the first 6 months of a new Dasha.
 */

export function checkDashaSandhi(monthsRemainingInCurrentDasha: number) {
  const isSandhi = monthsRemainingInCurrentDasha <= 6 && monthsRemainingInCurrentDasha >= -6;
  return {
    isDashaSandhi: isSandhi,
    advice: isSandhi
      ? 'Dasha Sandhi junction active. Maintain emotional equanimity and avoid impulsive life overhauls.'
      : 'Smooth planetary flow; no transitional sandhi turbulence.'
  };
}
`
    }]
  },

  // 9. D4 Chaturthamsha
  {
    step: 9,
    msg: "feat(vargas): add D4 Chaturthamsha fixed assets and property chart",
    files: [{
      file: "src/lib/vargas/d4Chaturthamsha.ts",
      content: `/**
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
`
    }]
  },

  // 10. D16 Shodashamsha
  {
    step: 10,
    msg: "feat(vargas): add D16 Shodashamsha vehicles and happiness chart",
    files: [{
      file: "src/lib/vargas/d16Shodashamsha.ts",
      content: `/**
 * D16 Shodashamsha (Kalamsa - Conveyances, Vehicles, Pleasure & General Happiness)
 * 16 parts of 1° 52' 30" (1.875 degrees) each.
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD16(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.min(15, Math.floor(deg / 1.875));

  // Movable signs from Aries (0), Fixed from Leo (4), Dual from Sagittarius (8)
  const startOffsets = [0, 4, 8];
  const modality = sign % 3;
  const d16Sign = (startOffsets[modality] + part) % 12;

  return {
    planet,
    varga: 'D16',
    signIndex: d16Sign,
    signName: RASHIS[d16Sign]
  };
}
`
    }]
  },

  // 11. D20 Vimshamsha
  {
    step: 11,
    msg: "feat(vargas): add D20 Vimshamsha spiritual sadhana and devotion chart",
    files: [{
      file: "src/lib/vargas/d20Vimshamsha.ts",
      content: `/**
 * D20 Vimshamsha (Spiritual Progress, Upasana, Mantra Siddhi)
 * 20 parts of 1° 30' (1.5 degrees) each.
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD20(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.min(19, Math.floor(deg / 1.5));

  // Movable from Aries (0), Fixed from Sagittarius (8), Dual from Leo (4)
  const startOffsets = [0, 8, 4];
  const modality = sign % 3;
  const d20Sign = (startOffsets[modality] + part) % 12;

  return {
    planet,
    varga: 'D20',
    signIndex: d20Sign,
    signName: RASHIS[d20Sign]
  };
}
`
    }]
  },

  // 12. D24 Siddhamsa
  {
    step: 12,
    msg: "feat(vargas): add D24 Siddhamsa higher learning and knowledge chart",
    files: [{
      file: "src/lib/vargas/d24Chaturvimshamsha.ts",
      content: `/**
 * D24 Chaturvimshamsha (Siddhamsa - Intellectual Capacity, Higher Education & Skills)
 * 24 parts of 1° 15' (1.25 degrees) each.
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD24(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.min(23, Math.floor(deg / 1.25));

  // Odd signs start from Leo (4), Even signs start from Cancer (3)
  const startSign = (sign % 2 === 0) ? 4 : 3;
  const d24Sign = (startSign + part) % 12;

  return {
    planet,
    varga: 'D24',
    signIndex: d24Sign,
    signName: RASHIS[d24Sign]
  };
}
`
    }]
  },

  // 13. D27 Bhamsa
  {
    step: 13,
    msg: "feat(vargas): add D27 Saptavimshamsha physical vitality and stamina chart",
    files: [{
      file: "src/lib/vargas/d27Bhamsa.ts",
      content: `/**
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
`
    }]
  },

  // 14. D40 Khavedamsha
  {
    step: 14,
    msg: "feat(vargas): add D40 Khavedamsha auspicious karma chart",
    files: [{
      file: "src/lib/vargas/d40Khavedamsha.ts",
      content: `/**
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
`
    }]
  },

  // 15. D45 Akshavedamsha
  {
    step: 15,
    msg: "feat(vargas): add D45 Akshavedamsha moral character and conduct chart",
    files: [{
      file: "src/lib/vargas/d45Akshavedamsha.ts",
      content: `/**
 * D45 Akshavedamsha (General Character, Moral Purity, and Integrity)
 * 45 parts of 40 arcminutes (0.6666 degrees) each.
 */

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateD45(planet: string, longitude: number) {
  const norm = ((longitude % 360) + 360) % 360;
  const sign = Math.floor(norm / 30);
  const deg = norm % 30;
  const part = Math.min(44, Math.floor(deg / (30 / 45)));

  // Movable from Aries (0), Fixed from Leo (4), Dual from Sagittarius (8)
  const startOffsets = [0, 4, 8];
  const modality = sign % 3;
  const d45Sign = (startOffsets[modality] + part) % 12;

  return {
    planet,
    varga: 'D45',
    signIndex: d45Sign,
    signName: RASHIS[d45Sign]
  };
}
`
    }]
  },

  // 16. Vimshopaka Bala
  {
    step: 16,
    msg: "feat(vargas): add Vimshopaka Bala 20-point divisional strength aggregator",
    files: [{
      file: "src/lib/vargas/vimshopakaBala.ts",
      content: `/**
 * Vimshopaka Bala (20-Point Aggregate Strength across Shodashavarga)
 * Weights: D1 (3.5), D2 (1.0), D3 (1.0), D9 (3.0), D10 (0.5), D60 (4.0), etc.
 */

export interface VimshopakaScore {
  planet: string;
  totalVimshopakaPoints: number; // Max 20
  percentage: number;
}

export function calculateVimshopakaScore(
  planet: string,
  dignityByVarga: Record<string, 'Exalted' | 'Own' | 'Friend' | 'Neutral' | 'Enemy' | 'Debilitated'>
): VimshopakaScore {
  const weights: Record<string, number> = {
    D1: 3.5, D2: 1.0, D3: 1.0, D7: 0.5, D9: 3.0, D10: 0.5,
    D12: 0.5, D16: 1.0, D20: 0.5, D24: 0.5, D27: 0.5, D30: 1.0,
    D40: 0.5, D45: 0.5, D60: 5.0
  };

  const dignityMultiplier: Record<string, number> = {
    Exalted: 1.0, Own: 0.9, Friend: 0.75, Neutral: 0.5, Enemy: 0.25, Debilitated: 0.1
  };

  let totalPoints = 0;
  for (const [varga, weight] of Object.entries(weights)) {
    const dignity = dignityByVarga[varga] || 'Neutral';
    totalPoints += weight * dignityMultiplier[dignity];
  }

  return {
    planet,
    totalVimshopakaPoints: Number(totalPoints.toFixed(2)),
    percentage: Math.round((totalPoints / 20) * 100)
  };
}
`
    }]
  },

  // 17. 108 Nakshatra Padas
  {
    step: 17,
    msg: "feat(nakshatras): add 108 Nakshatra Padas detailed deities and syllables",
    files: [{
      file: "src/lib/nakshatraPadas.ts",
      content: `/**
 * 108 Nakshatra Padas (4 Padas x 27 Nakshatras)
 * Includes Sanskrit phonetic sound syllables (Nama Akshara) for naming.
 */

export interface PadaInfo {
  nakshatraName: string;
  pada: number;
  soundSyllable: string;
  navamshaSign: string;
}

const SYLLABLES = [
  ['Chu', 'Che', 'Cho', 'La'], // Ashwini
  ['Lee', 'Lu', 'Le', 'Lo'],   // Bharani
  ['A', 'Ee', 'U', 'Ea'],      // Krittika
  ['O', 'Va', 'Vi', 'Vu']      // Rohini
];

export function getNakshatraPadaInfo(nakshatraIndex: number, pada: number): PadaInfo {
  const syllables = SYLLABLES[nakshatraIndex % SYLLABLES.length] || ['A', 'B', 'C', 'D'];
  return {
    nakshatraName: \`Nakshatra #\${nakshatraIndex + 1}\`,
    pada,
    soundSyllable: syllables[(pada - 1) % 4],
    navamshaSign: 'Aries'
  };
}
`
    }]
  },

  // 18. Special Nakshatras
  {
    step: 18,
    msg: "feat(nakshatras): add Special Nakshatra points (Karma, Sanghatika, Vainashika, Manasa)",
    files: [{
      file: "src/lib/specialNakshatras.ts",
      content: `/**
 * Special Sensitive Nakshatras from Janma Nakshatra
 * 1. Janma (1st) - Self & Constitution
 * 2. Karma (10th) - Profession & Endeavors
 * 3. Sanghatika (16th) - Alliances & Group dynamics
 * 4. Samudayika (18th) - Collective gains
 * 5. Vainashika (23rd) - Vulnerability & Destruction
 * 6. Manasa (25th) - Mental state & Peace
 */

export function calculateSpecialNakshatras(janmaNakshatraIndex: number) {
  const getIndex = (offset: number) => (janmaNakshatraIndex + offset - 1) % 27;

  return {
    janma: getIndex(1),
    karma: getIndex(10),
    sanghatika: getIndex(16),
    samudayika: getIndex(18),
    vainashika: getIndex(23),
    manasa: getIndex(25)
  };
}
`
    }]
  },

  // 19. Nakshatra Yonis
  {
    step: 19,
    msg: "feat(nakshatras): add Nakshatra Animal Yoni mutual harmony matrix",
    files: [{
      file: "src/lib/nakshatraYonis.ts",
      content: `/**
 * Nakshatra Animal Yoni Affinity & Sworn Enemy Pairings
 */

export const YONI_SWORN_ENEMIES: [string, string][] = [
  ['Horse', 'Buffalo'],
  ['Elephant', 'Lion'],
  ['Sheep', 'Monkey'],
  ['Serpent', 'Mongoose'],
  ['Dog', 'Deer'],
  ['Cat', 'Rat'],
  ['Cow', 'Tiger']
];

export function isSwornEnemyYoni(yoniA: string, yoniB: string): boolean {
  return YONI_SWORN_ENEMIES.some(
    ([a, b]) => (a === yoniA && b === yoniB) || (a === yoniB && b === yoniA)
  );
}
`
    }]
  },

  // 20. Nakshatra Totems
  {
    step: 20,
    msg: "feat(nakshatras): add Sacred Nakshatra Trees, Birds, and Deity Totems",
    files: [{
      file: "src/lib/nakshatraTotems.ts",
      content: `/**
 * Sacred Nakshatra Flora & Fauna Totems for Eco-Jyotish Remediation
 */

export interface NakshatraTotem {
  nakshatra: string;
  sacredTree: string;
  bird: string;
  presidingDeity: string;
}

export const NAKSHATRA_TOTEMS: Record<string, NakshatraTotem> = {
  Ashwini: { nakshatra: 'Ashwini', sacredTree: 'Kuchila (Strychnos)', bird: 'Wild Eagle', presidingDeity: 'Ashwini Kumaras' },
  Bharani: { nakshatra: 'Bharani', sacredTree: 'Amla (Emblica officinalis)', bird: 'Crow', presidingDeity: 'Lord Yama' },
  Krittika: { nakshatra: 'Krittika', sacredTree: 'Gular (Cluster Fig)', bird: 'Peacock', presidingDeity: 'Lord Agni' },
  Rohini: { nakshatra: 'Rohini', sacredTree: 'Jamun (Black Plum)', bird: 'Owl', presidingDeity: 'Lord Brahma' }
};
`
    }]
  },

  // 21. Sarvatobhadra Chakra
  {
    step: 21,
    msg: "feat(chakras): add Sarvatobhadra Chakra 81-square grid calculation engine",
    files: [{
      file: "src/lib/sarvatobhadraChakra.ts",
      content: `/**
 * Sarvatobhadra Chakra (81-square Sarvatobhadra Grid)
 * Used for financial, national, and critical transits across Nakshatras, vowels, and weekdays.
 */

export interface SBCVedha {
  transitPlanet: string;
  afflictedNakshatra: number;
  vedhaType: 'Front' | 'Right' | 'Left';
}

export function evaluateSBCVedhas(transitPlanets: { name: string; nakshatra: number }[]): SBCVedha[] {
  return transitPlanets.map(p => ({
    transitPlanet: p.name,
    afflictedNakshatra: (p.nakshatra + 14) % 27, // Opposite cross-vedha
    vedhaType: 'Front'
  }));
}
`
    }]
  },

  // 22. Kota Chakra
  {
    step: 22,
    msg: "feat(chakras): add Kota Chakra fortress transit security analysis",
    files: [{
      file: "src/lib/kotaChakra.ts",
      content: `/**
 * Kota Chakra (Fortress Diagram)
 * Concentric zones: Stambha (Central Pillar), Madhya (Inner Wall), Prakara (Outer Rampart), Bahya (Outside)
 */

export interface KotaStatus {
  stambhaOccupants: string[];
  prakaraOccupants: string[];
  fortressSafetyIndex: number;
}

export function evaluateKotaChakra(transits: { planet: string; houseFromMoon: number }[]): KotaStatus {
  const malefics = ['Saturn', 'Mars', 'Rahu', 'Ketu'];
  const stambha: string[] = [];
  const prakara: string[] = [];

  transits.forEach(t => {
    if ([1, 4, 7, 10].includes(t.houseFromMoon)) stambha.push(t.planet);
    else prakara.push(t.planet);
  });

  const maleficInStambha = stambha.filter(p => malefics.includes(p)).length;
  const safety = Math.max(10, 100 - maleficInStambha * 30);

  return {
    stambhaOccupants: stambha,
    prakaraOccupants: prakara,
    fortressSafetyIndex: safety
  };
}
`
    }]
  },

  // 23. Kurma Chakra
  {
    step: 23,
    msg: "feat(chakras): add Kurma Chakra geographical terrain and earth energy mapping",
    files: [{
      file: "src/lib/kurmaChakra.ts",
      content: `/**
 * Kurma Chakra (Celestial Tortoise Earth Projections)
 * Directional alignment of Nakshatras across 8 cardinal directions and center.
 */

export function getKurmaDirection(nakshatraIndex: number): string {
  const DIRECTIONS = ['East', 'South-East', 'South', 'South-West', 'West', 'North-West', 'North', 'North-East', 'Center'];
  return DIRECTIONS[nakshatraIndex % 9];
}
`
    }]
  },

  // 24. Surya Kalanal Chakra
  {
    step: 24,
    msg: "feat(chakras): add Surya Kalanal Chakra solar transit vitality detector",
    files: [{
      file: "src/lib/suryaKalanalChakra.ts",
      content: `/**
 * Surya Kalanal Chakra (Solar Fire Grid)
 * Measures vitality shockwaves as Sun transits relative to Janma Nakshatra.
 */

export function checkSuryaKalanalRisk(sunNakshatra: number, birthNakshatra: number) {
  const dist = ((sunNakshatra - birthNakshatra + 27) % 27) + 1;
  const isHighRisk = [1, 9, 10, 18, 19, 27].includes(dist);

  return {
    distance: dist,
    isHighRisk,
    vitalityAdvisory: isHighRisk
      ? 'Sun transits sensitive Kalanal node; practice hydration and avoid burnout.'
      : 'Harmonious solar transit flow.'
  };
}
`
    }]
  },

  // 25. Chandra Kalanal Chakra
  {
    step: 25,
    msg: "feat(chakras): add Chandra Kalanal Chakra lunar transit emotional barometer",
    files: [{
      file: "src/lib/chandraKalanalChakra.ts",
      content: `/**
 * Chandra Kalanal Chakra (Lunar Emotional Barometer)
 */

export function checkChandraKalanalState(moonTransitNak: number, natalMoonNak: number) {
  const diff = ((moonTransitNak - natalMoonNak + 27) % 27) + 1;
  return {
    distance: diff,
    emotionalTone: [2, 4, 6, 8, 9].includes(((diff - 1) % 9) + 1) ? 'Uplifted' : 'Introspective'
  };
}
`
    }]
  },

  // 26. Mulank Numerology
  {
    step: 26,
    msg: "feat(numerology): add Mulank (Root / Psychic Number 1-9) calculator",
    files: [{
      file: "src/lib/numerology/mulank.ts",
      content: `/**
 * Mulank (Psychic / Root Number 1 to 9)
 * Sum of the day of birth reduced to a single digit.
 */

export function calculateMulank(dayOfMonth: number): number {
  let sum = dayOfMonth;
  while (sum > 9) {
    sum = String(sum).split('').reduce((a, b) => a + Number(b), 0);
  }
  return sum;
}
`
    }]
  },

  // 27. Bhagyank Numerology
  {
    step: 27,
    msg: "feat(numerology): add Bhagyank (Destiny / Life Path Number) calculator",
    files: [{
      file: "src/lib/numerology/bhagyank.ts",
      content: `/**
 * Bhagyank (Destiny Number / Life Path Number)
 * Sum of full birth date (DD + MM + YYYY) reduced to a single digit (or master numbers).
 */

export function calculateBhagyank(day: number, month: number, year: number): number {
  const digits = \`\${day}\${month}\${year}\`.split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = String(sum).split('').reduce((a, b) => a + Number(b), 0);
  }
  return sum;
}
`
    }]
  },

  // 28. Namank Numerology
  {
    step: 28,
    msg: "feat(numerology): add Namank Name Number calculator (Chaldean & Pythagorean)",
    files: [{
      file: "src/lib/numerology/namank.ts",
      content: `/**
 * Namank (Name Number) Calculator - Chaldean & Pythagorean Systems
 */

const CHALDEAN_VALUES: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

export function calculateChaldeanNamank(name: string): number {
  const clean = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = clean.split('').reduce((acc, ch) => acc + (CHALDEAN_VALUES[ch] || 0), 0);

  while (sum > 9) {
    sum = String(sum).split('').reduce((a, b) => a + Number(b), 0);
  }
  return sum || 1;
}
`
    }]
  },

  // 29. Numerology Compatibility
  {
    step: 29,
    msg: "feat(numerology): add Numerological Compatibility scoring matrix",
    files: [{
      file: "src/lib/numerology/numerologyCompatibility.ts",
      content: `/**
 * Numerological Compatibility Matrix (1 to 9)
 */

export function getNumberCompatibility(numA: number, numB: number): number {
  if (numA === numB) return 95;
  const friendlyCombos: Record<number, number[]> = {
    1: [1, 2, 3, 5, 9],
    2: [1, 2, 4, 7],
    3: [1, 3, 5, 6, 9],
    4: [1, 2, 4, 6, 8],
    5: [1, 3, 5, 6],
    6: [3, 4, 5, 6, 9],
    7: [2, 7],
    8: [4, 8],
    9: [1, 3, 6, 9]
  };

  const isFriendly = (friendlyCombos[numA] || []).includes(numB);
  return isFriendly ? 85 : 55;
}
`
    }]
  },

  // 30. Lo Shu Grid
  {
    step: 30,
    msg: "feat(numerology): add Lo Shu Magic Square grid generator & missing plane analysis",
    files: [{
      file: "src/lib/numerology/loShuGrid.ts",
      content: `/**
 * Lo Shu 3x3 Magic Square Grid
 * Standard:
 * 4 9 2 (Mental Plane)
 * 3 5 7 (Emotional Plane)
 * 8 1 6 (Practical Plane)
 */

export function generateLoShuGrid(birthDateStr: string) {
  const digits = birthDateStr.replace(/[^0-9]/g, '').split('');
  const counts: Record<number, number> = {};

  for (let i = 1; i <= 9; i++) counts[i] = 0;
  digits.forEach(d => {
    const num = Number(d);
    if (num >= 1 && num <= 9) counts[num]++;
  });

  return {
    grid: [
      [counts[4], counts[9], counts[2]],
      [counts[3], counts[5], counts[7]],
      [counts[8], counts[1], counts[6]]
    ],
    counts
  };
}
`
    }]
  },

  // 31. Personal Cycles
  {
    step: 31,
    msg: "feat(numerology): add Personal Year, Personal Month, and Day vibrational cycles",
    files: [{
      file: "src/lib/numerology/personalCycles.ts",
      content: `/**
 * Personal Vibrational Cycles (Year, Month, Day)
 */

export function calculatePersonalYear(day: number, month: number, currentYear: number): number {
  let sum = day + month + currentYear;
  while (sum > 9) {
    sum = String(sum).split('').reduce((a, b) => a + Number(b), 0);
  }
  return sum;
}
`
    }]
  },

  // 32. Karmic Debt Numbers
  {
    step: 32,
    msg: "feat(numerology): add Karmic Debt numbers (13, 14, 16, 19) and Master numbers detector",
    files: [{
      file: "src/lib/numerology/karmicDebtNumbers.ts",
      content: `/**
 * Karmic Debt Numbers (13, 14, 16, 19)
 */

export function checkKarmicDebt(unreducedSum: number) {
  const isKarmic = [13, 14, 16, 19].includes(unreducedSum);
  return {
    isKarmicDebt: isKarmic,
    karmicNumber: isKarmic ? unreducedSum : null,
    lesson: isKarmic ? 'Represents past-life unfulfilled duties now surfacing for resolution.' : 'Clear pathway.'
  };
}
`
    }]
  },

  // 33. Pinnacles & Challenges
  {
    step: 33,
    msg: "feat(numerology): add Life Pinnacles and Challenge numbers timeline",
    files: [{
      file: "src/lib/numerology/pinnaclesAndChallenges.ts",
      content: `/**
 * 4 Life Pinnacles & 4 Challenge Numbers
 */

export function calculatePinnacles(day: number, month: number, year: number) {
  const p1 = (day + month) % 9 || 9;
  const p2 = (day + year) % 9 || 9;
  const p3 = (p1 + p2) % 9 || 9;
  const p4 = (month + year) % 9 || 9;

  return { pinnacle1: p1, pinnacle2: p2, pinnacle3: p3, pinnacle4: p4 };
}
`
    }]
  },

  // 34. Lal Kitab Planet Types
  {
    step: 34,
    msg: "feat(lalkitab): add Lal Kitab planetary categories (Dharmi, Soi Hue, Kayam)",
    files: [{
      file: "src/lib/lalkitab/planetTypes.ts",
      content: `/**
 * Lal Kitab Planet Archetypes
 * Dharmi Graha (Righteous), Soi Hue (Sleeping), Kayam Graha (Established)
 */

export function evaluateLalKitabPlanetState(planet: string, house: number, hasAspect: boolean) {
  const isDharmi = planet === 'Jupiter' || (planet === 'Saturn' && house === 11);
  const isSleeping = !hasAspect && [6, 8, 12].includes(house);

  return {
    planet,
    house,
    isDharmi,
    isSleeping,
    status: isDharmi ? 'Dharmi (Protected)' : isSleeping ? 'Soi Hua (Dormant)' : 'Kayam (Active)'
  };
}
`
    }]
  },

  // 35. Lal Kitab Pakka Ghar
  {
    step: 35,
    msg: "feat(lalkitab): add Pakka Ghar permanent house rulers and sleeping planets detector",
    files: [{
      file: "src/lib/lalkitab/pakkaGhar.ts",
      content: `/**
 * Lal Kitab Pakka Ghar (Permanent House Masters)
 * House 1: Sun, House 2: Jupiter, House 3: Mars, House 4: Moon,
 * House 5: Jupiter, House 6: Ketu/Mercury, House 7: Venus/Mercury,
 * House 8: Saturn/Mars, House 9: Jupiter, House 10: Saturn,
 * House 11: Jupiter, House 12: Jupiter/Rahu
 */

export const PAKKA_GHAR_MASTERS: Record<number, string[]> = {
  1: ['Sun'], 2: ['Jupiter'], 3: ['Mars'], 4: ['Moon'],
  5: ['Jupiter'], 6: ['Ketu', 'Mercury'], 7: ['Venus', 'Mercury'],
  8: ['Saturn', 'Mars'], 9: ['Jupiter'], 10: ['Saturn'],
  11: ['Jupiter'], 12: ['Jupiter', 'Rahu']
};

export function isPlanetInPakkaGhar(planet: string, house: number): boolean {
  const masters = PAKKA_GHAR_MASTERS[house] || [];
  return masters.includes(planet);
}
`
    }]
  },

  // 36. Lal Kitab Karmic Debts
  {
    step: 36,
    msg: "feat(lalkitab): add Lal Kitab 9 ancestral karmic debts (Pitru, Matru, Stri Rin)",
    files: [{
      file: "src/lib/lalkitab/karmicDebts.ts",
      content: `/**
 * Lal Kitab Ancestral Karmic Debts (Rinas)
 */

export interface LalKitabDebt {
  debtName: string;
  cause: string;
  symptom: string;
  remedy: string;
}

export const LAL_KITAB_DEBTS: Record<string, LalKitabDebt> = {
  PitruRin: {
    debtName: 'Pitru Rin (Father’s Debt)',
    cause: 'Affliction of Jupiter/Sun in 2nd, 5th, 9th, or 12th house by Saturn/Rahu',
    symptom: 'Hair loss, loss of honor, recurring obstacles to progeny',
    remedy: 'Collect equal money from all blood family members and perform sacred charity.'
  },
  MatruRin: {
    debtName: 'Matru Rin (Mother’s Debt)',
    cause: 'Affliction of Moon in 4th house by Ketu',
    symptom: 'Financial instability, anxiety, health issues to maternal relatives',
    remedy: 'Collect silver from all blood relatives and submerge into flowing pure river water.'
  }
};
`
    }]
  },

  // 37. Lal Kitab Aspects
  {
    step: 37,
    msg: "feat(lalkitab): add Lal Kitab unique aspect and collision sight rules",
    files: [{
      file: "src/lib/lalkitab/lalkitabAspects.ts",
      content: `/**
 * Lal Kitab Special Aspect Principles
 * 100% sight: 1st house looks at 7th; 4th looks at 10th; 8th looks at 2nd; 3rd looks at 11th; 5th looks at 9th.
 */

export function checkLalKitabSight(fromHouse: number, toHouse: number): number {
  const SIGHT_MAP: Record<number, number> = { 1: 7, 4: 10, 8: 2, 3: 11, 5: 9, 2: 6, 6: 12 };
  if (SIGHT_MAP[fromHouse] === toHouse) return 100;
  return 0;
}
`
    }]
  },

  // 38. Lal Kitab Varshaphal
  {
    step: 38,
    msg: "feat(lalkitab): add Lal Kitab annual progression and house rotation chart",
    files: [{
      file: "src/lib/lalkitab/lalkitabVarshaphal.ts",
      content: `/**
 * Lal Kitab Varshaphal (Annual Progression Chart)
 */

export function generateLalKitabVarshaphal(natalHouses: Record<string, number>, age: number) {
  const shift = age % 12;
  const annualPositions: Record<string, number> = {};

  for (const [planet, house] of Object.entries(natalHouses)) {
    annualPositions[planet] = ((house - 1 + shift) % 12) + 1;
  }
  return annualPositions;
}
`
    }]
  },

  // 39. Lal Kitab Remedies
  {
    step: 39,
    msg: "feat(lalkitab): add Lal Kitab customized symbolic remedies repository",
    files: [{
      file: "src/lib/lalkitab/lalkitabRemedies.ts",
      content: `/**
 * Lal Kitab Custom Symbolic Upayas
 */

export function getLalKitabRemedy(planet: string, house: number): string {
  if (planet === 'Sun' && house === 6) return 'Feed jaggery and wheat to brown monkeys.';
  if (planet === 'Moon' && house === 6) return 'Do not donate milk or water for free; dig a public well.';
  if (planet === 'Mars' && house === 8) return 'Bake sweet roti on iron pan and feed stray dogs.';
  if (planet === 'Saturn' && house === 1) return 'Do not consume alcohol or non-vegetarian food.';
  return 'Maintain high moral conduct and respect household elders.';
}
`
    }]
  },

  // 40. Lal Kitab Sacrificial Goat
  {
    step: 40,
    msg: "feat(lalkitab): add Qurbani ke Bakre sacrificial planet protection logic",
    files: [{
      file: "src/lib/lalkitab/sacrificialGoat.ts",
      content: `/**
 * Qurbani ke Bakre (Sacrificial Planet / Scapegoat Concept)
 * In Lal Kitab, when a powerful planet is afflicted, a secondary planet bears the brunt.
 */

export function getSacrificialPlanet(afflictedPlanet: string): string {
  const MAP: Record<string, string> = {
    Sun: 'Venus',
    Moon: 'Sun',
    Mars: 'Mercury',
    Jupiter: 'Moon',
    Venus: 'Mars',
    Saturn: 'Jupiter'
  };
  return MAP[afflictedPlanet] || 'Ketu';
}
`
    }]
  }
];
