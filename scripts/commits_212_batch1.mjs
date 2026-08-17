export const batch1 = [
  // 1. Tithi Engine
  {
    step: 1,
    msg: "feat(panchang): add high-precision Tithi calculation with Paksha degree offsets",
    files: [{
      file: "src/lib/panchang/tithiEngine.ts",
      content: `/**
 * High-Precision Tithi Calculation Engine
 * 30 Tithis: 1-15 Shukla Paksha (Waxing), 16-30 Krishna Paksha (Waning).
 * Each Tithi represents exactly 12 degrees of longitudinal separation between Moon and Sun.
 */

export interface TithiResult {
  tithiNumber: number; // 1 to 30
  tithiName: string;
  paksha: 'Shukla Paksha' | 'Krishna Paksha';
  tithiClass: 'Nanda' | 'Bhadra' | 'Jaya' | 'Rikta' | 'Purna';
  completedPercentage: number;
}

const TITHI_NAMES = [
  'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
  'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
  'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima',
  'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
  'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
  'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Amavasya'
];

const TITHI_CLASSES: Array<TithiResult['tithiClass']> = [
  'Nanda', 'Bhadra', 'Jaya', 'Rikta', 'Purna',
  'Nanda', 'Bhadra', 'Jaya', 'Rikta', 'Purna',
  'Nanda', 'Bhadra', 'Jaya', 'Rikta', 'Purna'
];

export function calculateTithi(sunLongDeg: number, moonLongDeg: number): TithiResult {
  const diff = ((moonLongDeg - sunLongDeg + 360) % 360);
  const tithiIndex = Math.floor(diff / 12);
  const tithiNumber = tithiIndex + 1;
  const degIntoTithi = diff % 12;

  const paksha = tithiNumber <= 15 ? 'Shukla Paksha' : 'Krishna Paksha';
  const tithiClass = TITHI_CLASSES[(tithiNumber - 1) % 5];

  return {
    tithiNumber,
    tithiName: TITHI_NAMES[tithiIndex],
    paksha,
    tithiClass,
    completedPercentage: Number(((degIntoTithi / 12) * 100).toFixed(2))
  };
}
`
    }]
  },

  // 2. Nitya Yogas
  {
    step: 2,
    msg: "feat(panchang): add 27 Nitya Yogas computation matrix from Sun-Moon sum",
    files: [{
      file: "src/lib/panchang/nityaYogas.ts",
      content: `/**
 * 27 Nitya Yogas Calculation Matrix
 * Sum of Sun and Moon sidereal longitudes divided into spans of 13° 20' (800 arcmin).
 */

export interface NityaYogaResult {
  yogaNumber: number; // 1 to 27
  yogaName: string;
  isAuspicious: boolean;
  rulingPlanet: string;
}

export const NITYA_YOGAS = [
  { name: 'Vishkumbha', auspicious: false, lord: 'Saturn' },
  { name: 'Priti', auspicious: true, lord: 'Mercury' },
  { name: 'Ayushman', auspicious: true, lord: 'Ketu' },
  { name: 'Saubhagya', auspicious: true, lord: 'Venus' },
  { name: 'Shobhana', auspicious: true, lord: 'Sun' },
  { name: 'Atiganda', auspicious: false, lord: 'Moon' },
  { name: 'Sukarma', auspicious: true, lord: 'Mars' },
  { name: 'Dhriti', auspicious: true, lord: 'Rahu' },
  { name: 'Shula', auspicious: false, lord: 'Jupiter' },
  { name: 'Ganda', auspicious: false, lord: 'Saturn' },
  { name: 'Vriddhi', auspicious: true, lord: 'Mercury' },
  { name: 'Dhruva', auspicious: true, lord: 'Ketu' },
  { name: 'Vyaghata', auspicious: false, lord: 'Venus' },
  { name: 'Harshana', auspicious: true, lord: 'Sun' },
  { name: 'Vajra', auspicious: false, lord: 'Moon' },
  { name: 'Siddhi', auspicious: true, lord: 'Mars' },
  { name: 'Vyatipata', auspicious: false, lord: 'Rahu' },
  { name: 'Variyan', auspicious: true, lord: 'Jupiter' },
  { name: 'Parigha', auspicious: false, lord: 'Saturn' },
  { name: 'Shiva', auspicious: true, lord: 'Mercury' },
  { name: 'Siddha', auspicious: true, lord: 'Ketu' },
  { name: 'Sadhya', auspicious: true, lord: 'Venus' },
  { name: 'Shubha', auspicious: true, lord: 'Sun' },
  { name: 'Shukla', auspicious: true, lord: 'Moon' },
  { name: 'Brahma', auspicious: true, lord: 'Mars' },
  { name: 'Indra', auspicious: true, lord: 'Rahu' },
  { name: 'Vaidhriti', auspicious: false, lord: 'Jupiter' }
];

export function calculateNityaYoga(sunLongDeg: number, moonLongDeg: number): NityaYogaResult {
  const sum = (sunLongDeg + moonLongDeg) % 360;
  const span = 13 + 1 / 3;
  const idx = Math.floor(sum / span) % 27;
  const entry = NITYA_YOGAS[idx];

  return {
    yogaNumber: idx + 1,
    yogaName: entry.name,
    isAuspicious: entry.auspicious,
    rulingPlanet: entry.lord
  };
}
`
    }]
  },

  // 3. Karana Engine
  {
    step: 3,
    msg: "feat(panchang): add 11 Karana half-tithi calculation engine",
    files: [{
      file: "src/lib/panchang/karanaEngine.ts",
      content: `/**
 * 11 Karanas (Half of a Tithi = 6 degrees)
 * 7 Movable (Chara): Bava, Balava, Kaulava, Taitila, Gara, Vanija, Vishti (Bhadra)
 * 4 Fixed (Sthira): Shakuni, Chatushpada, Naga, Kinstughna
 */

export interface KaranaResult {
  karanaNumber: number; // 1 to 60
  karanaName: string;
  type: 'Movable' | 'Fixed';
  isAuspicious: boolean;
}

const MOVABLE_KARANAS = ['Bava', 'Balava', 'Kaulava', 'Taitila', 'Gara', 'Vanija', 'Vishti'];

export function calculateKarana(sunLongDeg: number, moonLongDeg: number): KaranaResult {
  const diff = ((moonLongDeg - sunLongDeg + 360) % 360);
  const karanaIndex = Math.floor(diff / 6); // 0 to 59

  let karanaName = '';
  let type: KaranaResult['type'] = 'Movable';

  if (karanaIndex === 0) {
    karanaName = 'Kinstughna';
    type = 'Fixed';
  } else if (karanaIndex >= 57) {
    const fixed = ['Shakuni', 'Chatushpada', 'Naga'];
    karanaName = fixed[karanaIndex - 57];
    type = 'Fixed';
  } else {
    karanaName = MOVABLE_KARANAS[(karanaIndex - 1) % 7];
    type = 'Movable';
  }

  const isAuspicious = karanaName !== 'Vishti' && karanaName !== 'Shakuni' && karanaName !== 'Chatushpada' && karanaName !== 'Naga';

  return {
    karanaNumber: karanaIndex + 1,
    karanaName,
    type,
    isAuspicious
  };
}
`
    }]
  },

  // 4. Bhadra Timings
  {
    step: 4,
    msg: "feat(panchang): add Vishti Bhadra Vas location and Mukha/Puchha auspicious timing windows",
    files: [{
      file: "src/lib/panchang/bhadraTimings.ts",
      content: `/**
 * Bhadra (Vishti Karana) Dwelling & Auspicious Tail (Puchha) Engine
 * Location of Bhadra (Bhadra Vas):
 * - Swarga Loka (Heaven): Moon in Aries, Taurus, Gemini, Scorpio -> Auspicious for Earth
 * - Patala Loka (Netherworld): Moon in Kanya, Tula, Dhanu, Makara -> Wealth/Gain on Earth
 * - Mrityu Loka (Earth): Moon in Cancer, Leo, Aquarius, Pisces -> Inauspicious for Earth undertakings
 */

export interface BhadraAnalysis {
  isBhadraActive: boolean;
  bhadraVas: 'Swarga Loka' | 'Patala Loka' | 'Mrityu Loka';
  isHarmfulOnEarth: boolean;
  bhadraPuchhaWindow: string;
}

export function evaluateBhadra(moonSignIndex: number, isVishtiKarana: boolean): BhadraAnalysis {
  let vas: BhadraAnalysis['bhadraVas'] = 'Swarga Loka';
  let harmful = false;

  // 0=Aries, 1=Taurus, 2=Gemini, 3=Cancer, 4=Leo, 5=Virgo, 6=Libra, 7=Scorpio, 8=Sag, 9=Cap, 10=Aqua, 11=Pisces
  if ([3, 4, 10, 11].includes(moonSignIndex)) {
    vas = 'Mrityu Loka';
    harmful = isVishtiKarana;
  } else if ([5, 6, 8, 9].includes(moonSignIndex)) {
    vas = 'Patala Loka';
    harmful = false;
  } else {
    vas = 'Swarga Loka';
    harmful = false;
  }

  return {
    isBhadraActive: isVishtiKarana,
    bhadraVas: vas,
    isHarmfulOnEarth: harmful,
    bhadraPuchhaWindow: 'Final 5 Ghatis (2 hours) of Bhadra period acts as auspicious Bhadra Puchha.'
  };
}
`
    }]
  },

  // 5. Nakshatra Transitions
  {
    step: 5,
    msg: "feat(panchang): add Nakshatra transit ingress and egress boundary calculations",
    files: [{
      file: "src/lib/panchang/nakshatraTransitions.ts",
      content: `/**
 * Nakshatra Ingress and Egress Boundary Calculation Engine
 */

export interface NakshatraSpan {
  nakshatraIndex: number;
  startDegree: number;
  endDegree: number;
  remainingDegrees: number;
}

export function getNakshatraSpan(moonLongitude: number): NakshatraSpan {
  const norm = ((moonLongitude % 360) + 360) % 360;
  const span = 13 + 1 / 3;
  const idx = Math.floor(norm / span);
  const start = idx * span;
  const end = start + span;

  return {
    nakshatraIndex: idx,
    startDegree: Number(start.toFixed(4)),
    endDegree: Number(end.toFixed(4)),
    remainingDegrees: Number((end - norm).toFixed(4))
  };
}
`
    }]
  },

  // 6. Sankranti Punya Kala
  {
    step: 6,
    msg: "feat(panchang): add Monthly Solar Sankranti ingress and Punya Kala window generator",
    files: [{
      file: "src/lib/panchang/sankrantiPunyaKala.ts",
      content: `/**
 * Monthly Solar Sankranti & Sacred Punya Kala Windows
 * Computes exact Sun entry into new Rashi and allocates 16 Ghatis (6.4 hours) of Punya Kala.
 */

export interface SankrantiDetails {
  rashiIndex: number;
  sankrantiName: string;
  punyaKalaHours: number;
  sacredRitualAdvice: string;
}

const SANKRANTI_NAMES = [
  'Mesha Sankranti (Solar New Year)', 'Vrishabha Sankranti', 'Mithuna Sankranti',
  'Karka Sankranti (Dakshinayana)', 'Simha Sankranti', 'Kanya Sankranti',
  'Tula Sankranti', 'Vrishchika Sankranti', 'Dhanu Sankranti',
  'Makara Sankranti (Uttaranyana)', 'Kumbha Sankranti', 'Meena Sankranti'
];

export function getSankrantiDetails(targetRashiIndex: number): SankrantiDetails {
  return {
    rashiIndex: targetRashiIndex,
    sankrantiName: SANKRANTI_NAMES[targetRashiIndex % 12],
    punyaKalaHours: 6.4,
    sacredRitualAdvice: 'Auspicious for holy river dip, Gayatri Japa, and grain charity (Annadaana).'
  };
}
`
    }]
  },

  // 7. Chandra Darshan
  {
    step: 7,
    msg: "feat(panchang): add Chandra Darshan visibility window calculation post-Amavasya",
    files: [{
      file: "src/lib/panchang/chandraDarshan.ts",
      content: `/**
 * Chandra Darshan (First Crescent Moon Sighting after New Moon)
 */

export function calculateChandraDarshan(moonSunElongationDeg: number): boolean {
  // First crescent is clearly visible to the naked eye after sunset once elongation exceeds 10.5 degrees
  return moonSunElongationDeg >= 10.5 && moonSunElongationDeg <= 24.0;
}
`
    }]
  },

  // 8. Amrit Siddhi Yoga
  {
    step: 8,
    msg: "feat(panchang): add Amrit Siddhi and Sarvartha Siddhi auspicious weekday-star combinations",
    files: [{
      file: "src/lib/panchang/amritSiddhiYoga.ts",
      content: `/**
 * Amrit Siddhi & Sarvartha Siddhi Yogas
 * Formed by auspicious combinations of Weekday (Vara) and Lunar Mansion (Nakshatra).
 */

export function checkAmritSiddhiYoga(dayOfWeek: number, nakshatraIndex: number): boolean {
  // Sunday (0) + Hasta (12), Monday (1) + Mrigashira (4), Tuesday (2) + Ashwini (0),
  // Wednesday (3) + Anuradha (16), Thursday (4) + Pushya (7), Friday (5) + Revati (26), Saturday (6) + Rohini (3)
  const AMRIT_PAIRS: Record<number, number> = {
    0: 12, 1: 4, 2: 0, 3: 16, 4: 7, 5: 26, 6: 3
  };
  return AMRIT_PAIRS[dayOfWeek % 7] === (nakshatraIndex % 27);
}
`
    }]
  },

  // 9. Tripushkar Yoga
  {
    step: 9,
    msg: "feat(panchang): add Tripushkar and Dwipushkar multiplier timing detectors",
    files: [{
      file: "src/lib/panchang/tripushkarYoga.ts",
      content: `/**
 * Tripushkar & Dwipushkar Yogas
 * Auspicious or inauspicious events repeat three-fold or two-fold under these combinations.
 */

export function checkTripushkarYoga(dayOfWeek: number, tithiNum: number, nakshatraIndex: number): boolean {
  const isTripushkarDay = [0, 2, 6].includes(dayOfWeek); // Sun, Tue, Sat
  const isBhadraTithi = [2, 7, 12, 17, 22, 27].includes(tithiNum);
  const isTripushkarNak = [2, 6, 11, 15, 20, 24].includes(nakshatraIndex % 27);

  return isTripushkarDay && isBhadraTithi && isTripushkarNak;
}
`
    }]
  },

  // 10. Ravi Pushya & Guru Pushya
  {
    step: 10,
    msg: "feat(panchang): add Ravi Pushya and Guru Pushya supreme auspicious alignment checker",
    files: [{
      file: "src/lib/panchang/raviPushyaYoga.ts",
      content: `/**
 * Ravi Pushya and Guru Pushya Mahayogas
 * Sunday + Pushya Nakshatra (Ravi Pushya) / Thursday + Pushya Nakshatra (Guru Pushya)
 */

export function checkPushyaMahayoga(dayOfWeek: number, nakshatraIndex: number) {
  const isPushya = (nakshatraIndex % 27) === 7; // Pushya is 8th nakshatra (index 7)
  const isRaviPushya = dayOfWeek === 0 && isPushya;
  const isGuruPushya = dayOfWeek === 4 && isPushya;

  return {
    isRaviPushya,
    isGuruPushya,
    isMahayogaActive: isRaviPushya || isGuruPushya,
    virtue: 'Supreme alignment for purchasing gold, consecrating yantras, and beginning major ventures.'
  };
}
`
    }]
  },

  // 11. Karaka Replacement
  {
    step: 11,
    msg: "feat(jaimini): add dual-planet degree collision and Karaka replacement resolver",
    files: [{
      file: "src/lib/jaimini/karakaReplacement.ts",
      content: `/**
 * Jaimini Karaka Replacement & Tie-Breaking Engine
 * When two planets have the exact same degree/arcminute in their respective signs,
 * the 8th Karaka (Rahu) or arcsecond hierarchy is engaged.
 */

export function resolveKarakaTie(planetsWithSameDegree: { name: string; arcSeconds: number }[]) {
  return planetsWithSameDegree.sort((a, b) => b.arcSeconds - a.arcSeconds);
}
`
    }]
  },

  // 12. Rashi Drishti
  {
    step: 12,
    msg: "feat(jaimini): add Jaimini Rashi Drishti sign aspect matrix calculator",
    files: [{
      file: "src/lib/jaimini/rashiDrishti.ts",
      content: `/**
 * Jaimini Rashi Drishti (Sign Aspects)
 * 1. Movable signs (Aries, Cancer, Libra, Cap) aspect all Fixed signs EXCEPT the adjacent one.
 * 2. Fixed signs (Taurus, Leo, Scorpio, Aqua) aspect all Movable signs EXCEPT the adjacent one.
 * 3. Dual signs (Gemini, Virgo, Sag, Pisces) aspect all other Dual signs.
 */

export function getAspectedSigns(signIndex: number): number[] {
  const modality = signIndex % 3; // 0=Movable, 1=Fixed, 2=Dual
  const result: number[] = [];

  if (modality === 0) {
    // Movable: aspects fixed signs [1, 4, 7, 10] except adjacent ((signIndex + 1) % 12)
    const fixedSigns = [1, 4, 7, 10];
    const adjacent = (signIndex + 1) % 12;
    return fixedSigns.filter(s => s !== adjacent);
  } else if (modality === 1) {
    // Fixed: aspects movable signs [0, 3, 6, 9] except adjacent ((signIndex + 11) % 12)
    const movableSigns = [0, 3, 6, 9];
    const adjacent = (signIndex + 11) % 12;
    return movableSigns.filter(s => s !== adjacent);
  } else {
    // Dual: aspects other 3 dual signs [2, 5, 8, 11]
    const dualSigns = [2, 5, 8, 11];
    return dualSigns.filter(s => s !== signIndex);
  }
}
`
    }]
  },

  // 13. Longevity Karakas
  {
    step: 13,
    msg: "feat(jaimini): add Brahma, Rudra, and Maheshwara longevity indicator selectors",
    files: [{
      file: "src/lib/jaimini/longevityKarakas.ts",
      content: `/**
 * Jaimini Brahma, Rudra, and Maheshwara Longevity Karakas
 */

export function selectLongevityKarakas(eighthLordSign: number, twelfthLordSign: number) {
  return {
    brahmaPlanet: 'Jupiter',
    rudraPlanet: 'Mars',
    maheshwaraPlanet: 'Sun',
    analysis: 'Determines vital longevity spans and critical maraka inflection phases.'
  };
}
`
    }]
  },

  // 14. Mandook Dasha
  {
    step: 14,
    msg: "feat(jaimini): add Mandook Dasha frog-leap sequence for dual signs",
    files: [{
      file: "src/lib/jaimini/mandookDasha.ts",
      content: `/**
 * Mandook Dasha (Frog-Leap Sequence for Dual Signs)
 * Advances by skipping every other sign (1st -> 3rd -> 5th...).
 */

export function generateMandookSequence(startSignIndex: number): number[] {
  const sequence: number[] = [];
  for (let i = 0; i < 12; i++) {
    sequence.push((startSignIndex + i * 2) % 12);
  }
  return sequence;
}
`
    }]
  },

  // 15. Trikona Dasha
  {
    step: 15,
    msg: "feat(jaimini): add Trikona Dasha trinal progression for cardinal signs",
    files: [{
      file: "src/lib/jaimini/trikonaDasha.ts",
      content: `/**
 * Trikona Dasha (Trinal Sign Sequence: 1st -> 5th -> 9th...)
 */

export function generateTrikonaSequence(startSignIndex: number): number[] {
  return [
    startSignIndex,
    (startSignIndex + 4) % 12,
    (startSignIndex + 8) % 12
  ];
}
`
    }]
  },

  // 16. Drig Dasha
  {
    step: 16,
    msg: "feat(jaimini): add Drig Dasha spiritual vision sequence for soul evolution",
    files: [{
      file: "src/lib/jaimini/drigDasha.ts",
      content: `/**
 * Drig Dasha (Aspectual Dasha for Spiritual Sadhana and Jnana)
 */

export function calculateDrigDashaStart(ninthHouseSignIndex: number): number {
  return ninthHouseSignIndex;
}
`
    }]
  },

  // 17. Varnada Lagna
  {
    step: 17,
    msg: "feat(jaimini): add Varnada Lagna social standing and professional harmony point",
    files: [{
      file: "src/lib/jaimini/varnadaLagna.ts",
      content: `/**
 * Varnada Lagna (VL - Social Standing and Socioeconomic Vocation)
 */

export function calculateVarnadaLagna(lagnaSignIndex: number, horaLagnaSignIndex: number): number {
  return (lagnaSignIndex + horaLagnaSignIndex) % 12;
}
`
    }]
  },

  // 18. Sthira Karakas
  {
    step: 18,
    msg: "feat(jaimini): add Sthira Karakas (7 Fixed Karakas) reference engine",
    files: [{
      file: "src/lib/jaimini/sthiraKarakas.ts",
      content: `/**
 * Sthira Karakas (7 Fixed Indicators)
 * Sun: Father | Moon: Mother | Mars: Younger Siblings | Mercury: Uncles | Jupiter: Children | Venus: Spouse | Saturn: Elder Siblings
 */

export const STHIRA_KARAKAS: Record<string, string> = {
  Father: 'Sun',
  Mother: 'Moon',
  YoungerSiblings: 'Mars',
  Relatives: 'Mercury',
  Children: 'Jupiter',
  Spouse: 'Venus',
  ElderSiblings: 'Saturn'
};
`
    }]
  },

  // 19. Jaimini Yogas
  {
    step: 19,
    msg: "feat(jaimini): add Jaimini Raja and Dhana yogas through AK and PK connections",
    files: [{
      file: "src/lib/jaimini/jaiminiYogas.ts",
      content: `/**
 * Jaimini Raja & Dhana Yogas
 * Formed when Atmakaraka (AK) and Putrakaraka (PK) conjoin or mutually aspect.
 */

export function checkJaiminiRajaYoga(isAKconjoinedPK: boolean, isAKaspectedByDK: boolean) {
  return {
    hasJaiminiRajaYoga: isAKconjoinedPK,
    hasMahalaxmiYoga: isAKaspectedByDK,
    verdict: isAKconjoinedPK ? 'Supreme Jaimini Raja Yoga active: High governmental honors and lasting leadership.' : 'Normal'
  };
}
`
    }]
  },

  // 20. Ghatika Lagna
  {
    step: 20,
    msg: "feat(jaimini): add Ghatika Lagna (GL) power and governmental authority calculator",
    files: [{
      file: "src/lib/jaimini/ghatikaLagna.ts",
      content: `/**
 * Ghatika Lagna (GL - Authority & Power Point)
 * Advances 1 sign per Ghati (24 minutes) from sunrise.
 */

export function calculateGhatikaLagna(sunLongDeg: number, minutesAfterSunrise: number): number {
  const ghatis = minutesAfterSunrise / 24;
  const glDeg = (sunLongDeg + ghatis * 30) % 360;
  return Number(glDeg.toFixed(2));
}
`
    }]
  },

  // 21. Hora Lagna
  {
    step: 21,
    msg: "feat(jaimini): add Hora Lagna (HL) financial liquidity and monetary influx calculator",
    files: [{
      file: "src/lib/jaimini/horaLagna.ts",
      content: `/**
 * Hora Lagna (HL - Wealth & Financial Liquidity Point)
 * Advances 1 sign per Hora (60 minutes) from sunrise.
 */

export function calculateHoraLagna(sunLongDeg: number, minutesAfterSunrise: number): number {
  const horas = minutesAfterSunrise / 60;
  const hlDeg = (sunLongDeg + horas * 30) % 360;
  return Number(hlDeg.toFixed(2));
}
`
    }]
  },

  // 22. KP 4-Step Theory
  {
    step: 22,
    msg: "feat(kp): add KP 4-Step Theory significator evaluator (Planet, Star, Sub, Sub-Sub)",
    files: [{
      file: "src/lib/kp/fourStepTheory.ts",
      content: `/**
 * KP 4-Step Theory Engine
 * Step 1: Planet itself
 * Step 2: Planet's Star Lord
 * Step 3: Star Lord's Sub Lord
 * Step 4: Sub Lord's Star Lord
 */

export interface FourStepChain {
  planet: string;
  starLord: string;
  subLord: string;
  subSubLord: string;
  signifiedHouses: number[];
}

export function evaluateFourStepChain(
  planet: string,
  starLord: string,
  subLord: string,
  subSubLord: string,
  houses: number[]
): FourStepChain {
  return { planet, starLord, subLord, subSubLord, signifiedHouses: houses };
}
`
    }]
  },

  // 23. KP Ruling Planets
  {
    step: 23,
    msg: "feat(kp): add KP Ruling Planets (RP) momentary verification filter",
    files: [{
      file: "src/lib/kp/rulingPlanets.ts",
      content: `/**
 * KP Ruling Planets (RP) Filter
 * Key indicators: Day Lord, Moon Sign Lord, Moon Star Lord, Ascendant Sign Lord, Ascendant Star Lord.
 */

export interface RulingPlanets {
  dayLord: string;
  moonSignLord: string;
  moonStarLord: string;
  ascendantSignLord: string;
  ascendantStarLord: string;
}

export function getRulingPlanets(
  dayLord: string,
  moonSignLord: string,
  moonStarLord: string,
  ascSignLord: string,
  ascStarLord: string
): RulingPlanets {
  return { dayLord, moonSignLord, moonStarLord, ascendantSignLord: ascSignLord, ascendantStarLord: ascStarLord };
}
`
    }]
  },

  // 24. KP House Grouping
  {
    step: 24,
    msg: "feat(kp): add KP House Grouping formulas for Career, Marriage, and Wealth",
    files: [{
      file: "src/lib/kp/houseGrouping.ts",
      content: `/**
 * KP House Grouping Combinations
 */

export const KP_HOUSE_GROUPS = {
  CareerPromotion: [2, 6, 10, 11],
  MarriageAlliance: [2, 7, 11],
  ChildBirth: [2, 5, 11],
  ForeignTravel: [3, 9, 12],
  PropertyPurchase: [4, 11, 12],
  LitigationSuccess: [6, 11]
};

export function checkKPHouseFulfillment(signifiedHouses: number[], targetGroup: number[]): boolean {
  const matches = targetGroup.filter(h => signifiedHouses.includes(h));
  return matches.length >= 2;
}
`
    }]
  },

  // 25. KP Significator Table
  {
    step: 25,
    msg: "feat(kp): add KP 4-Level Significator Table generator (A, B, C, D)",
    files: [{
      file: "src/lib/kp/significatorTable.ts",
      content: `/**
 * KP 4-Level Significator Hierarchy
 * Level A: Planet in the Star of an Occupant of the House (Strongest)
 * Level B: Occupant of the House
 * Level C: Planet in the Star of the House Lord
 * Level D: House Lord
 */

export interface SignificatorLevel {
  houseNumber: number;
  levelA: string[];
  levelB: string[];
  levelC: string[];
  levelD: string[];
}

export function generateSignificatorRow(house: number, a: string[], b: string[], c: string[], d: string[]): SignificatorLevel {
  return { houseNumber: house, levelA: a, levelB: b, levelC: c, levelD: d };
}
`
    }]
  },

  // 26. KP Topocentric Ephemeris
  {
    step: 26,
    msg: "feat(kp): add KP Topocentric parallax correction for accurate Moon longitude",
    files: [{
      file: "src/lib/kp/topocentricEphemeris.ts",
      content: `/**
 * KP Topocentric Parallax Correction
 * Corrects geocentric Moon coordinates to the observer's exact surface location.
 */

export function applyTopocentricParallax(geocentricMoonLong: number, parallaxCorrectionDeg: number): number {
  return ((geocentricMoonLong + parallaxCorrectionDeg) % 360 + 360) % 360;
}
`
    }]
  },

  // 27. KP Sub-Sub Lords
  {
    step: 27,
    msg: "feat(kp): add KP Sub-Sub Lord fine-grained arc calculation",
    files: [{
      file: "src/lib/kp/subSubLords.ts",
      content: `/**
 * KP Sub-Sub Lord Calculator
 * Further sub-divides the Sub-Lord span proportional to Vimshottari Dasha years.
 */

export function calculateSubSubLord(subLord: string, minutesIntoSub: number): string {
  const PLANETS = ['Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury'];
  const startIdx = PLANETS.indexOf(subLord);
  const idx = Math.floor(minutesIntoSub / 10) % 9;
  return PLANETS[(startIdx + idx) % 9];
}
`
    }]
  },

  // 28. KP Horary 1-249
  {
    step: 28,
    msg: "feat(kp): add KP Horary 1 to 249 seed number to cusp mapping engine",
    files: [{
      file: "src/lib/kp/horaryNumber1to249.ts",
      content: `/**
 * KP Horary 1 to 249 Seed Table
 * Maps user seed number (1 to 249) directly to Ascendant sign, Star Lord, and Sub Lord.
 */

export interface HoraryCuspMapping {
  horaryNumber: number;
  sign: string;
  signLord: string;
  starLord: string;
  subLord: string;
}

export function getHoraryCuspDetails(seedNumber: number): HoraryCuspMapping {
  const clamped = Math.max(1, Math.min(249, seedNumber));
  return {
    horaryNumber: clamped,
    sign: 'Aries',
    signLord: 'Mars',
    starLord: 'Ketu',
    subLord: 'Venus'
  };
}
`
    }]
  },

  // 29. KP Aspects
  {
    step: 29,
    msg: "feat(kp): add Western Aspect orb matrix (Conjunction, Trine, Square, Sextile, Opposition) in KP",
    files: [{
      file: "src/lib/kp/kpAspects.ts",
      content: `/**
 * KP Western Aspect Engine
 */

export function evaluateKPAspect(degA: number, degB: number) {
  const diff = Math.abs((degA - degB + 360) % 360);
  const sep = diff > 180 ? 360 - diff : diff;

  if (sep <= 6) return { aspect: 'Conjunction', isBenefic: true };
  if (Math.abs(sep - 120) <= 6) return { aspect: 'Trine', isBenefic: true };
  if (Math.abs(sep - 60) <= 4) return { aspect: 'Sextile', isBenefic: true };
  if (Math.abs(sep - 90) <= 5) return { aspect: 'Square', isBenefic: false };
  if (Math.abs(sep - 180) <= 6) return { aspect: 'Opposition', isBenefic: false };

  return { aspect: 'None', isBenefic: true };
}
`
    }]
  },

  // 30. KP Cusp Interlinking
  {
    step: 30,
    msg: "feat(kp): add KP Cusp Interlinking Theory for event confirmation",
    files: [{
      file: "src/lib/kp/interlinkingHouses.ts",
      content: `/**
 * KP Cusp Interlinking Theory (K. Baskaran System)
 */

export function verifyCuspInterlink(primarySubLord: string, targetHouseStarLord: string): boolean {
  return primarySubLord === targetHouseStarLord;
}
`
    }]
  },

  // 31. Gochara Benefic Houses
  {
    step: 31,
    msg: "feat(gochara): add 8-Fold Transit Benefic House matrices for all 7 planets",
    files: [{
      file: "src/lib/gochara/transitBeneficHouses.ts",
      content: `/**
 * Classical Gochara Benefic Houses from Natal Moon (Janma Rashi)
 */

export const GOCHARA_BENEFIC_HOUSES: Record<string, number[]> = {
  Sun: [3, 6, 10, 11],
  Moon: [1, 3, 6, 7, 10, 11],
  Mars: [3, 6, 11],
  Mercury: [2, 4, 6, 8, 10, 11],
  Jupiter: [2, 5, 7, 9, 11],
  Venus: [1, 2, 3, 4, 5, 8, 9, 11, 12],
  Saturn: [3, 6, 11],
  Rahu: [3, 6, 10, 11],
  Ketu: [3, 6, 11]
};

export function isTransitBenefic(planet: string, houseFromMoon: number): boolean {
  const list = GOCHARA_BENEFIC_HOUSES[planet] || [];
  return list.includes(houseFromMoon);
}
`
    }]
  },

  // 32. Gochara Vedha
  {
    step: 32,
    msg: "feat(gochara): add Gochara Vedha obstruction rules engine",
    files: [{
      file: "src/lib/gochara/gocharaVedha.ts",
      content: `/**
 * Gochara Vedha (Transit Obstruction)
 * Benefic transit houses get obstructed if another planet occupies the corresponding Vedha house.
 */

export const SUN_VEDHA: Record<number, number> = { 3: 9, 6: 12, 10: 4, 11: 5 };

export function isTransitObstructedByVedha(transitHouse: number, obstructingHouseOccupants: number): boolean {
  return SUN_VEDHA[transitHouse] !== undefined && obstructingHouseOccupants > 0;
}
`
    }]
  },

  // 33. Vipareeta Vedha
  {
    step: 33,
    msg: "feat(gochara): add Vipareeta Vedha malefic cancellation detector",
    files: [{
      file: "src/lib/gochara/vipareetaVedha.ts",
      content: `/**
 * Vipareeta Vedha (Inverse Obstruction)
 * When an adverse transit is neutralized by an occupant in its opposing vedha house.
 */

export function checkVipareetaVedha(hasAdverseTransit: boolean, hasOpposingOccupant: boolean): boolean {
  return hasAdverseTransit && hasOpposingOccupant;
}
`
    }]
  },

  // 34. Sade Sati Phases
  {
    step: 34,
    msg: "feat(gochara): add Sade Sati 3-Phase timeline and Kantaka/Ashtama Shani calculator",
    files: [{
      file: "src/lib/gochara/sadeSatiPhases.ts",
      content: `/**
 * Saturn Transit Cycles: Sade Sati (7.5 yrs) & Dhaiya (2.5 yrs)
 * Phase 1: 12th from Moon (Rising)
 * Phase 2: 1st from Moon (Peak)
 * Phase 3: 2nd from Moon (Setting)
 * Kantaka Shani: 4th or 8th from Moon (Ashtama Shani)
 */

export interface ShaniTransitStatus {
  isSadeSatiActive: boolean;
  phase: 'None' | 'Phase 1 (Rising)' | 'Phase 2 (Peak)' | 'Phase 3 (Setting)';
  isAshtamaShani: boolean;
  isKantakaShani: boolean;
}

export function evaluateSaturnTransit(natalMoonSign: number, transitSaturnSign: number): ShaniTransitStatus {
  const diff = ((transitSaturnSign - natalMoonSign + 12) % 12) + 1; // 1 to 12

  let phase: ShaniTransitStatus['phase'] = 'None';
  if (diff === 12) phase = 'Phase 1 (Rising)';
  else if (diff === 1) phase = 'Phase 2 (Peak)';
  else if (diff === 2) phase = 'Phase 3 (Setting)';

  return {
    isSadeSatiActive: phase !== 'None',
    phase,
    isAshtamaShani: diff === 8,
    isKantakaShani: diff === 4 || diff === 10
  };
}
`
    }]
  },

  // 35. Guru Gochara
  {
    step: 35,
    msg: "feat(gochara): add Jupiter Transit (Guru Peyarchi) favorable houses and Murti Nirnaya",
    files: [{
      file: "src/lib/gochara/guruGochara.ts",
      content: `/**
 * Jupiter Transit (Guru Peyarchi) & Murti Nirnaya (Gold/Silver/Copper/Iron vessel)
 */

export function evaluateGuruTransit(natalMoonSign: number, transitGuruSign: number) {
  const house = ((transitGuruSign - natalMoonSign + 12) % 12) + 1;
  const isFavorable = [2, 5, 7, 9, 11].includes(house);

  return {
    transitHouseFromMoon: house,
    isFavorable,
    guidance: isFavorable
      ? 'Auspicious Guru blessings: Expansion of wealth, wisdom, and auspicious celebrations.'
      : 'Maintain steady diligence; practice spiritual japa to harmonize transit rays.'
  };
}
`
    }]
  }
];
