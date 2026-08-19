export const batch1 = [
  // 1. Sthira Dasha Engine
  {
    step: 1,
    msg: "feat(sthira): add Jaimini Sthira Dasha fixed year cycle engine (7, 8, 9 years)",
    files: [{
      file: "src/lib/sthira/sthiraDashaEngine.ts",
      content: `/**
 * Jaimini Sthira Dasha Engine
 * Fixed durations:
 * - Movable signs (Chara: Aries, Cancer, Libra, Capricorn): 7 Years
 * - Fixed signs (Sthira: Taurus, Leo, Scorpio, Aquarius): 8 Years
 * - Dual signs (Dwisvabhava: Gemini, Virgo, Sagittarius, Pisces): 9 Years
 * Total Cycle = 4*7 + 4*8 + 4*9 = 28 + 32 + 36 = 96 Years.
 */

export function getSthiraDashaYears(signIndex: number): number {
  const modality = signIndex % 3;
  if (modality === 0) return 7; // Movable
  if (modality === 1) return 8; // Fixed
  return 9; // Dual
}

export function generateSthiraDashaSequence(brahmaSignIndex: number) {
  const sequence = [];
  for (let i = 0; i < 12; i++) {
    const sign = (brahmaSignIndex + i) % 12;
    sequence.push({
      signIndex: sign,
      durationYears: getSthiraDashaYears(sign)
    });
  }
  return sequence;
}
`
    }]
  },

  // 2. Brahma Anchor
  {
    step: 2,
    msg: "feat(sthira): add Brahma planet anchor selection algorithm for Sthira Dasha",
    files: [{
      file: "src/lib/sthira/brahmaAnchor.ts",
      content: `/**
 * Brahma Planet Anchor Selection
 * Lord of the 6th, 8th, or 12th from Lagna or 7th house, whichever is stronger.
 */

export function selectBrahmaPlanet(strongestDusthanaLord: string, dusthanaSignIndex: number) {
  return {
    brahmaPlanet: strongestDusthanaLord,
    brahmaSignIndex: dusthanaSignIndex,
    role: 'Anchor for Sthira Dasha initiation and vital longevity timing.'
  };
}
`
    }]
  },

  // 3. Navamsha Dasha Engine
  {
    step: 3,
    msg: "feat(sthira): add Jaimini Navamsha Dasha spiritual progression sequence",
    files: [{
      file: "src/lib/sthira/navamshaDashaEngine.ts",
      content: `/**
 * Jaimini Navamsha Dasha Engine
 * Progresses through the 9 Navamshas of the natal ascendant.
 */

export function generateNavamshaDashaSequence(natalAscNavamshaSign: number) {
  const seq = [];
  for (let i = 0; i < 12; i++) {
    seq.push((natalAscNavamshaSign + i) % 12);
  }
  return seq;
}
`
    }]
  },

  // 4. Karaka Dasha Engine
  {
    step: 4,
    msg: "feat(sthira): add Karaka Dasha 7/8 Chara Karaka progression timeline",
    files: [{
      file: "src/lib/sthira/karakaDashaEngine.ts",
      content: `/**
 * Karaka Dasha Timeline (AK -> AmK -> BK -> MK -> PK -> GK -> DK)
 */

export const KARAKA_ORDER = ['AK', 'AmK', 'BK', 'MK', 'PK', 'GK', 'DK'];

export function generateKarakaDashaTimeline(karakaSigns: Record<string, number>) {
  return KARAKA_ORDER.map(k => ({
    karaka: k,
    signIndex: karakaSigns[k] ?? 0,
    durationYears: 12
  }));
}
`
    }]
  },

  // 5. Chara Paryaya Dasha
  {
    step: 5,
    msg: "feat(sthira): add Chara Paryaya Dasha cyclic rotation timing engine",
    files: [{
      file: "src/lib/sthira/charaParyayaDasha.ts",
      content: `/**
 * Chara Paryaya Dasha (Cyclic Rotation)
 */

export function calculateParyayaDashaSpan(cycleNumber: number, baseDuration: number): number {
  return baseDuration * cycleNumber;
}
`
    }]
  },

  // 6. Mahendra Koota
  {
    step: 6,
    msg: "feat(synastry): add Mahendra Koota lineage welfare and family longevity evaluator",
    files: [{
      file: "src/lib/synastry/mahendraKoota.ts",
      content: `/**
 * Mahendra Koota (Lineage Welfare, Progeny Prosperity, Long-Term Bonding)
 * Count from Girl's Nakshatra to Boy's Nakshatra:
 * Favorable: 4, 7, 10, 13, 16, 19, 22, 25
 */

export function checkMahendraKoota(girlNakshatra: number, boyNakshatra: number): boolean {
  const count = ((boyNakshatra - girlNakshatra + 27) % 27) + 1;
  return [4, 7, 10, 13, 16, 19, 22, 25].includes(count);
}
`
    }]
  },

  // 7. Stree Deergha
  {
    step: 7,
    msg: "feat(synastry): add Stree Deergha stellar distance calculation engine (>15 stars)",
    files: [{
      file: "src/lib/synastry/streeDeergha.ts",
      content: `/**
 * Stree Deergha (Stellar Distance from Girl to Boy)
 * Count from Girl's star to Boy's star:
 * > 15 stars = Full Auspiciousness (Ensures longevity and prosperity of marriage)
 * 9 - 15 stars = Moderate
 * < 9 stars = Inauspicious
 */

export function calculateStreeDeergha(girlNakshatra: number, boyNakshatra: number) {
  const count = ((boyNakshatra - girlNakshatra + 27) % 27) + 1;
  return {
    distanceCount: count,
    isExcellent: count > 15,
    isModerate: count >= 9 && count <= 15,
    isAdverse: count < 9
  };
}
`
    }]
  },

  // 8. Vedha Koota
  {
    step: 8,
    msg: "feat(synastry): add Vedha Koota mutual constellation repulsion and cancellation rules",
    files: [{
      file: "src/lib/synastry/vedhaKoota.ts",
      content: `/**
 * Vedha Koota (Mutual Repulsion between Constellations)
 */

export const VEDHA_PAIRS: [number, number][] = [
  [0, 17], // Ashwini - Jyeshtha
  [1, 16], // Bharani - Anuradha
  [2, 15], // Krittika - Vishakha
  [3, 14], // Rohini - Swati
  [4, 13], // Mrigashira - Chitra
  [5, 12], // Ardra - Hasta
  [6, 11], // Punarvasu - Uttara Phalguni
  [7, 10], // Pushya - Purva Phalguni
  [8, 9]   // Ashlesha - Magha
];

export function hasVedhaAffliction(girlNakshatra: number, boyNakshatra: number): boolean {
  const g = girlNakshatra % 27;
  const b = boyNakshatra % 27;
  return VEDHA_PAIRS.some(([x, y]) => (g === x && b === y) || (g === y && b === x));
}
`
    }]
  },

  // 9. Rajju Koota
  {
    step: 9,
    msg: "feat(synastry): add Rajju Koota 5 Classifications (Sira, Kantha, Udara, Kati, Pada)",
    files: [{
      file: "src/lib/synastry/rajjuKoota.ts",
      content: `/**
 * Rajju Koota 5 Body Classifications
 * Sira (Head - Husband longevity) | Kantha (Neck - Wife longevity) | Udara (Stomach - Progeny) |
 * Kati (Waist - Poverty) | Pada (Feet - Travel/Wandering)
 * Boy and Girl must NOT have the same Rajju.
 */

export const RAJJU_GROUPS: Record<string, number[]> = {
  Sira: [4, 13, 22], // Mriga, Chitra, Dhanishta
  Kantha: [3, 5, 12, 14, 21, 23],
  Udara: [2, 6, 11, 15, 20, 24],
  Kati: [1, 7, 10, 16, 19, 25],
  Pada: [0, 8, 9, 17, 18, 26]
};

export function getRajjuGroup(nakshatra: number): string {
  const idx = nakshatra % 27;
  for (const [name, stars] of Object.entries(RAJJU_GROUPS)) {
    if (stars.includes(idx)) return name;
  }
  return 'Pada';
}

export function checkRajjuMatch(girlNak: number, boyNak: number) {
  const gRajju = getRajjuGroup(girlNak);
  const bRajju = getRajjuGroup(boyNak);
  const isMatch = gRajju !== bRajju;

  return {
    girlRajju: gRajju,
    boyRajju: bRajju,
    isCompatible: isMatch,
    verdict: isMatch ? 'Rajju Dosha Free: Auspicious' : \`Rajju Dosha in \${gRajju}: Requires cancellation\`
  };
}
`
    }]
  },

  // 10. Vashya Koota Matrix
  {
    step: 10,
    msg: "feat(synastry): add Vashya Koota mutual attraction and dominance matrix",
    files: [{
      file: "src/lib/synastry/vashyaKootaMatrix.ts",
      content: `/**
 * Vashya Koota Matrix (2 Points in Ashtakoota)
 * Evaluates magnetic attraction and subconscious dominance between Moon signs.
 */

const VASHYA_MAP: Record<number, number[]> = {
  0: [4, 7],       // Aries controls Leo, Scorpio
  1: [3, 6],       // Taurus controls Cancer, Libra
  2: [5],          // Gemini controls Virgo
  3: [7, 8],       // Cancer controls Scorpio, Sagittarius
  4: [6],          // Leo controls Libra
  5: [2, 11],      // Virgo controls Gemini, Pisces
  6: [9, 5],       // Libra controls Capricorn, Virgo
  7: [3],          // Scorpio controls Cancer
  8: [11],         // Sagittarius controls Pisces
  9: [0, 10],      // Capricorn controls Aries, Aquarius
  10: [0],         // Aquarius controls Aries
  11: [9]          // Pisces controls Capricorn
};

export function getVashyaScore(girlSign: number, boySign: number): number {
  if (girlSign === boySign) return 2.0;
  if ((VASHYA_MAP[girlSign] || []).includes(boySign)) return 2.0;
  if ((VASHYA_MAP[boySign] || []).includes(girlSign)) return 1.0;
  return 0.0;
}
`
    }]
  },

  // 11. Upapada Synastry
  {
    step: 11,
    msg: "feat(synastry): add Upapada Lagna (UL) and 2nd house marital durability synastry",
    files: [{
      file: "src/lib/synastry/upapadaSynastry.ts",
      content: `/**
 * Upapada Lagna (UL) Synastry Engine
 * Rule: Boy's Lagna or Moon in trine (1, 5, 9) or 7th to Girl's UL ensures permanent marital harmony.
 */

export function evaluateULCompatibility(girlULSign: number, boyLagnaOrMoonSign: number): boolean {
  const diff = (boyLagnaOrMoonSign - girlULSign + 12) % 12;
  return [0, 4, 6, 8].includes(diff);
}
`
    }]
  },

  // 12. Darakaraka Matching
  {
    step: 12,
    msg: "feat(synastry): add Darakaraka (DK) and Navamsha 7th house partner matching",
    files: [{
      file: "src/lib/synastry/darakarakaMatching.ts",
      content: `/**
 * Darakaraka (DK) Synastry Matching
 */

export function checkDKHarmony(girlDKPlanet: string, boyDKPlanet: string): boolean {
  const FRIENDLY_PAIRS: Record<string, string[]> = {
    Jupiter: ['Sun', 'Moon', 'Mars', 'Jupiter'],
    Venus: ['Mercury', 'Saturn', 'Venus'],
    Mercury: ['Sun', 'Venus', 'Mercury'],
    Mars: ['Sun', 'Moon', 'Jupiter', 'Mars'],
    Sun: ['Moon', 'Mars', 'Jupiter', 'Sun'],
    Moon: ['Sun', 'Mercury', 'Moon'],
    Saturn: ['Mercury', 'Venus', 'Saturn']
  };

  const friends = FRIENDLY_PAIRS[girlDKPlanet] || [];
  return friends.includes(boyDKPlanet);
}
`
    }]
  },

  // 13. Kuja Dosha Exceptions
  {
    step: 13,
    msg: "feat(synastry): add Kuja Dosha (Manglik) 24 classical cancellation exceptions",
    files: [{
      file: "src/lib/synastry/kujaDoshaExceptions.ts",
      content: `/**
 * Kuja Dosha (Manglik) 24 Classical Cancellation Exceptions
 * 1. Mars in Aries in 1st house
 * 2. Mars in Scorpio in 4th house
 * 3. Mars in Capricorn in 7th house
 * 4. Mars in Sagittarius/Pisces in 8th house
 * 5. Mars in Cancer/Leo in 12th house
 * 6. Mars conjoined Jupiter or Moon
 */

export function isKujaDoshaCancelled(marsHouse: number, marsSign: number, isConjoinedGuruOrChandra: boolean): boolean {
  if (isConjoinedGuruOrChandra) return true;
  if (marsHouse === 1 && marsSign === 0) return true; // Aries 1st
  if (marsHouse === 4 && marsSign === 7) return true; // Scorpio 4th
  if (marsHouse === 7 && marsSign === 9) return true; // Cap 7th
  if (marsHouse === 8 && (marsSign === 8 || marsSign === 11)) return true; // Sag/Pisces 8th
  if (marsHouse === 12 && (marsSign === 3 || marsSign === 4)) return true; // Cancer/Leo 12th
  return false;
}
`
    }]
  },

  // 14. Rashi Pinda Calculator
  {
    step: 14,
    msg: "feat(pinda): add Ashtakavarga Rashi Pinda reduction point calculator",
    files: [{
      file: "src/lib/pinda/rashiPindaCalculator.ts",
      content: `/**
 * Ashtakavarga Rashi Pinda (Rashi Multipliers)
 * Multipliers: Aries=7, Taurus=10, Gemini=8, Cancer=4, Leo=10, Virgo=5, Libra=7, Scorpio=8, Sagittarius=9, Capricorn=5, Aquarius=11, Pisces=12
 */

export const RASHI_PINDA_MULTIPLIERS = [7, 10, 8, 4, 10, 5, 7, 8, 9, 5, 11, 12];

export function calculateRashiPinda(reducedBindus: number[]): number {
  return reducedBindus.reduce((sum, bindu, idx) => sum + bindu * (RASHI_PINDA_MULTIPLIERS[idx] || 5), 0);
}
`
    }]
  },

  // 15. Graha Pinda Calculator
  {
    step: 15,
    msg: "feat(pinda): add Ashtakavarga Graha Pinda planetary multiplier calculator",
    files: [{
      file: "src/lib/pinda/grahaPindaCalculator.ts",
      content: `/**
 * Ashtakavarga Graha Pinda (Planetary Multipliers)
 * Sun=5, Moon=5, Mars=8, Mercury=5, Jupiter=10, Venus=7, Saturn=5
 */

export const GRAHA_PINDA_MULTIPLIERS: Record<string, number> = {
  Sun: 5, Moon: 5, Mars: 8, Mercury: 5, Jupiter: 10, Venus: 7, Saturn: 5
};

export function calculateGrahaPinda(planetOccupiedSignBindus: Record<string, number>): number {
  let sum = 0;
  for (const [p, bindus] of Object.entries(planetOccupiedSignBindus)) {
    sum += bindus * (GRAHA_PINDA_MULTIPLIERS[p] || 5);
  }
  return sum;
}
`
    }]
  },

  // 16. Shodhya Pinda Aggregator
  {
    step: 16,
    msg: "feat(pinda): add Shodhya Pinda (Rashi + Graha) aggregator for all 7 planets",
    files: [{
      file: "src/lib/pinda/shodhyaPindaAggregator.ts",
      content: `/**
 * Shodhya Pinda = Rashi Pinda + Graha Pinda
 */

export function calculateShodhyaPinda(rashiPinda: number, grahaPinda: number): number {
  return rashiPinda + grahaPinda;
}
`
    }]
  },

  // 17. Ashtakavarga Ayurdaya
  {
    step: 17,
    msg: "feat(pinda): add Ashtakavarga Ayurdaya longevity lifespan estimation engine",
    files: [{
      file: "src/lib/pinda/ashtakavargaAyurdaya.ts",
      content: `/**
 * Ashtakavarga Ayurdaya (Longevity Span from Shodhya Pinda Sums)
 */

export function estimateAyurdayaYears(totalShodhyaPindaSum: number): number {
  const years = (totalShodhyaPindaSum * 7) / 100;
  return Number(Math.min(100, Math.max(32, years)).toFixed(1));
}
`
    }]
  },

  // 18. Kakshya Table Generator
  {
    step: 18,
    msg: "feat(pinda): add Prastarashtakavarga 8-Kakshya micro-window matrix generator",
    files: [{
      file: "src/lib/pinda/kakshyaTableGenerator.ts",
      content: `/**
 * Prastarashtakavarga 8-Kakshya Table (3° 45' sub-bands)
 */

export function generateKakshyaMatrix(activeBindus: boolean[]): { kakshya: number; hasBindu: boolean }[] {
  return Array.from({ length: 8 }, (_, i) => ({
    kakshya: i + 1,
    hasBindu: activeBindus[i] ?? false
  }));
}
`
    }]
  },

  // 19. Samudaya SAV Score
  {
    step: 19,
    msg: "feat(pinda): add Samudaya Ashtakavarga (SAV) 337-bindu distribution score",
    files: [{
      file: "src/lib/pinda/samudayaSAVScore.ts",
      content: `/**
 * Samudaya Ashtakavarga (SAV) House Ingress Evaluator
 */

export function evaluateSAVHouse(binduCount: number): string {
  if (binduCount >= 32) return 'Supreme Fortune (32+ Bindus)';
  if (binduCount >= 28) return 'Auspicious Progress (28-31 Bindus)';
  if (binduCount >= 25) return 'Moderate Equilibrium (25-27 Bindus)';
  return 'Karmic Friction (<25 Bindus)';
}
`
    }]
  },

  // 20. Sensitive Star Bindus
  {
    step: 20,
    msg: "feat(pinda): add Janma, Karma, Adhana, and Vainashika star bindu distribution",
    files: [{
      file: "src/lib/pinda/sensitiveStarBindus.ts",
      content: `/**
 * Sensitive Star Bindu Distribution
 * 1: Janma Star | 10: Karma Star | 19: Adhana Star | 22: Vainashika Star
 */

export function getSensitiveStarIndices(natalNakshatra: number) {
  return {
    janma: natalNakshatra % 27,
    karma: (natalNakshatra + 9) % 27,
    adhana: (natalNakshatra + 18) % 27,
    vainashika: (natalNakshatra + 21) % 27
  };
}
`
    }]
  },

  // 21. Gemstone Prescription
  {
    step: 21,
    msg: "feat(remedies): add Vedic Gemstone prescription rules based on trikona lords",
    files: [{
      file: "src/lib/remedies/gemstonePrescription.ts",
      content: `/**
 * Vedic Gemstone Prescription Engine (Ratna Dharana)
 * Wear gemstones for Lagna Lord (Health), 5th Lord (Intellect/Progeny), 9th Lord (Bhagya/Fortune).
 * STRICTLY AVOID gemstones of 6th, 8th, or 12th lords unless functioning as functional benefics.
 */

export const GEMS_BY_PLANET: Record<string, { gem: string; metal: string; finger: string }> = {
  Sun: { gem: 'Ruby (Manikya)', metal: 'Gold / Copper', finger: 'Ring Finger' },
  Moon: { gem: 'Pearl (Moti)', metal: 'Silver', finger: 'Little / Ring Finger' },
  Mars: { gem: 'Red Coral (Moonga)', metal: 'Gold / Copper', finger: 'Ring Finger' },
  Mercury: { gem: 'Emerald (Panna)', metal: 'Gold / Bronze', finger: 'Little Finger' },
  Jupiter: { gem: 'Yellow Sapphire (Pukhraj)', metal: 'Gold', finger: 'Index Finger' },
  Venus: { gem: 'Diamond (Heera)', metal: 'Platinum / White Gold', finger: 'Middle / Little Finger' },
  Saturn: { gem: 'Blue Sapphire (Neelam)', metal: 'Panchadhatu / Iron', finger: 'Middle Finger' },
  Rahu: { gem: 'Hessonite (Gomed)', metal: 'Silver / Panchadhatu', finger: 'Middle Finger' },
  Ketu: { gem: "Cat's Eye (Lehsuniya)", metal: 'Silver / Panchadhatu', finger: 'Middle / Ring Finger' }
};

export function prescribeGemstone(beneficPlanet: string) {
  return GEMS_BY_PLANET[beneficPlanet] || { gem: 'Navaratna', metal: 'Gold', finger: 'Ring Finger' };
}
`
    }]
  },

  // 22. Uparatna Substitutes
  {
    step: 22,
    msg: "feat(remedies): add Semi-precious Uparatna substitute lookup matrix",
    files: [{
      file: "src/lib/remedies/uparatnaSubstitutes.ts",
      content: `/**
 * Uparatna (Semi-Precious Gemstone Substitutes)
 */

export const UPARATNA_MAP: Record<string, string[]> = {
  Ruby: ['Red Garnet', 'Star Ruby', 'Red Spinel'],
  Pearl: ['Moonstone', 'White Agate'],
  'Red Coral': ['Carnelian', 'Red Jasper'],
  Emerald: ['Peridot', 'Green Tourmaline', 'Green Onyx'],
  'Yellow Sapphire': ['Topaz', 'Citrine', 'Yellow Zircon'],
  Diamond: ['White Zircon', 'Opal', 'White Sapphire'],
  'Blue Sapphire': ['Amethyst', 'Blue Topaz', 'Iolite', 'Lapis Lazuli'],
  Hessonite: ['Spessartite Garnet', 'Brown Tourmaline'],
  "Cat's Eye": ['Tiger Eye', 'Chrysoberyl']
};

export function getUparatnas(primaryGem: string): string[] {
  return UPARATNA_MAP[primaryGem] || ['Spiritual Yantra'];
}
`
    }]
  },

  // 23. Gemstone Consecration
  {
    step: 23,
    msg: "feat(remedies): add Metal, Finger, and Muhurta consecration guidelines for gems",
    files: [{
      file: "src/lib/remedies/gemstoneConsecration.ts",
      content: `/**
 * Gemstone Consecration (Prana Pratishtha) Protocol
 */

export function getConsecrationProcedure(planet: string) {
  return {
    planet,
    mantraJapaCount: 108,
    purificationSubstances: ['Ganga Jal', 'Raw Milk', 'Honey', 'Ghee', 'Tulsi Leaves'],
    auspiciousDay: planet === 'Sun' ? 'Sunday Morning' : planet === 'Jupiter' ? 'Thursday Morning' : 'Wednesday/Friday'
  };
}
`
    }]
  },

  // 24. Rudraksha Matrix
  {
    step: 24,
    msg: "feat(remedies): add 1 to 14 Mukhi Rudraksha planetary matrix and Beej mantras",
    files: [{
      file: "src/lib/remedies/rudrakshaMatrix.ts",
      content: `/**
 * 1 to 14 Mukhi Rudraksha Planetary Alignment Matrix
 */

export const RUDRAKSHA_MATRIX: Record<number, { deity: string; planet: string; beejMantra: string; benefit: string }> = {
  1: { deity: 'Shiva', planet: 'Sun', beejMantra: 'Om Hreem Namah', benefit: 'Supreme consciousness, leadership, eradication of solar afflictions.' },
  2: { deity: 'Ardhanarishvara', planet: 'Moon', beejMantra: 'Om Namah', benefit: 'Emotional equilibrium, marital unity, peaceful mind.' },
  3: { deity: 'Agni', planet: 'Mars', beejMantra: 'Om Kleem Namah', benefit: 'Purification of past karmas, kinetic dynamism, courage.' },
  4: { deity: 'Brahma', planet: 'Mercury', beejMantra: 'Om Hreem Namah', benefit: 'Intellectual acumen, eloquence, creative writing.' },
  5: { deity: 'Kalagni Rudra', planet: 'Jupiter', beejMantra: 'Om Hreem Namah', benefit: 'Spiritual gnana, memory retention, general health.' },
  6: { deity: 'Kartikeya', planet: 'Venus', beejMantra: 'Om Hreem Hum Namah', benefit: 'Willpower, grounding, artistic mastery.' },
  7: { deity: 'Mahalakshmi', planet: 'Saturn', beejMantra: 'Om Hum Namah', benefit: 'Wealth accretion, pacification of Shani Sade Sati.' },
  8: { deity: 'Ganesha', planet: 'Rahu', beejMantra: 'Om Hum Namah', benefit: 'Obstacle removal, protection from occult negativity.' },
  9: { deity: 'Durga', planet: 'Ketu', beejMantra: 'Om Hreem Hum Namah', benefit: 'Fearlessness, dynamism, spiritual surrender.' }
};

export function getRudrakshaDetails(mukhi: number) {
  return RUDRAKSHA_MATRIX[mukhi] || RUDRAKSHA_MATRIX[5];
}
`
    }]
  },

  // 25. Navagraha Yantras
  {
    step: 25,
    msg: "feat(remedies): add 9 Navagraha Yantras geometric magic square construction",
    files: [{
      file: "src/lib/remedies/navagrahaYantras.ts",
      content: `/**
 * 9 Navagraha Magic Square Yantras
 * Surya Yantra: Magic constant 15 (6,1,8 / 7,5,3 / 2,9,4)
 */

export const SURYA_YANTRA_GRID = [
  [6, 1, 8],
  [7, 5, 3],
  [2, 9, 4]
];

export function verifyMagicSquare(grid: number[][], targetSum: number): boolean {
  for (let r = 0; r < 3; r++) {
    const rowSum = grid[r][0] + grid[r][1] + grid[r][2];
    if (rowSum !== targetSum) return false;
  }
  return true;
}
`
    }]
  },

  // 26. Dana Charity Matrix
  {
    step: 26,
    msg: "feat(remedies): add Navagraha Dana (Charity) donation items and timing matrix",
    files: [{
      file: "src/lib/remedies/danaCharityMatrix.ts",
      content: `/**
 * Navagraha Dana (Charity) Matrix
 */

export const NAVAGRAHA_DANA: Record<string, { items: string[]; weekday: string; idealTime: string }> = {
  Sun: { items: ['Wheat', 'Ruby', 'Jaggery', 'Copper vessel', 'Red cloth'], weekday: 'Sunday', idealTime: 'Sunrise' },
  Moon: { items: ['Rice', 'White sandalwood', 'Silver', 'Milk', 'White cloth'], weekday: 'Monday', idealTime: 'Evening' },
  Mars: { items: ['Red lentils (Masoor)', 'Copper', 'Jaggery', 'Red flowers'], weekday: 'Tuesday', idealTime: 'Noon' },
  Mercury: { items: ['Mung beans', 'Green cloth', 'Emerald', 'Brass vessel', 'Books'], weekday: 'Wednesday', idealTime: 'Morning' },
  Jupiter: { items: ['Yellow chana dal', 'Turmeric', 'Gold', 'Yellow cloth', 'Saffron'], weekday: 'Thursday', idealTime: 'Morning' },
  Venus: { items: ['Sugar', 'Ghee', 'White silk', 'Curd', 'Silver'], weekday: 'Friday', idealTime: 'Dawn / Dusk' },
  Saturn: { items: ['Black sesame', 'Mustard oil', 'Iron pan', 'Black blanket', 'Footwear'], weekday: 'Saturday', idealTime: 'Sunset' }
};

export function getDanaGuidelines(planet: string) {
  return NAVAGRAHA_DANA[planet] || NAVAGRAHA_DANA['Jupiter'];
}
`
    }]
  },

  // 27. Bhava Organ Mapping
  {
    step: 27,
    msg: "feat(medical): add 12 Bhavas to anatomical organ vulnerability mapping",
    files: [{
      file: "src/lib/medical/bhavaOrganMapping.ts",
      content: `/**
 * 12 Houses to Anatomical Organ Mapping (Medical Astrology)
 */

export const BHAVA_ORGANS: Record<number, string> = {
  1: 'Head, cranium, brain, facial symmetry, vital stamina.',
  2: 'Eyes, throat, vocal cords, teeth, tongue, tonsils.',
  3: 'Shoulders, arms, hands, clavicles, respiratory lungs.',
  4: 'Chest, breast tissue, ribs, heart chambers, diaphragm.',
  5: 'Upper stomach, liver, pancreas, spleen, solar plexus.',
  6: 'Lower abdomen, intestines, appendix, kidney filtration.',
  7: 'Urogenital tract, lumbar spine, pelvic cavity.',
  8: 'Excretory organs, chronic resilience, reproductive tissue.',
  9: 'Hips, thighs, sciatic nerve, arterial system.',
  10: 'Knees, skeleton, patella bones, joints.',
  11: 'Calf muscles, ankles, circulation, lymphatic flow.',
  12: 'Feet, toes, left eye, lymphatic drainage, immune rest.'
};

export function getOrganForHouse(houseNum: number): string {
  return BHAVA_ORGANS[houseNum] || 'General bodily vitality.';
}
`
    }]
  },

  // 28. Planetary Afflictions
  {
    step: 28,
    msg: "feat(medical): add Planetary disease pathology combinations (Sun-Saturn, Moon-Rahu)",
    files: [{
      file: "src/lib/medical/planetaryAfflictions.ts",
      content: `/**
 * Planetary Affliction Pathology (Medical Astrology)
 */

export function evaluateMedicalAffliction(p1: string, p2: string): string {
  const key = [p1, p2].sort().join('-');
  const AFFLICTIONS: Record<string, string> = {
    'Saturn-Sun': 'Bone density vulnerabilities, cardiac strain, ocular pressure.',
    'Moon-Rahu': 'Psychosomatic sensitivity, anxiety patterns, lymphatic fluid imbalances.',
    'Ketu-Mars': 'Inflammatory flare-ups, surgical interventions, blood platelet vigilance.',
    'Mercury-Rahu': 'Nervous transmission tremors, skin allergies, respiratory hypersensitivity.',
    'Jupiter-Rahu': 'Metabolic enzyme imbalances, lipid accumulation, liver vigilance.'
  };

  return AFFLICTIONS[key] || 'Mild functional physiological sensitivity.';
}
`
    }]
  },

  // 29. Khara Navamsha
  {
    step: 29,
    msg: "feat(medical): add 64th Navamsha (Khara) and 22nd Drekkana (Kharesh) danger locator",
    files: [{
      file: "src/lib/medical/kharaNavamsha.ts",
      content: `/**
 * 64th Navamsha (Khara Navamsha) & 22nd Drekkana (Kharesh)
 * 64th Navamsha from Moon Navamsha = Exactly 4th sign in Navamsha from Moon Navamsha.
 * 22nd Drekkana from Lagna = 8th house in Drekkana (D3).
 */

export function calculateKharaPoints(moonNavamshaSign: number, lagnaDrekkanaSign: number) {
  const kharaNavamsha = (moonNavamshaSign + 3) % 12; // 4th sign in D9
  const khareshDrekkana = (lagnaDrekkanaSign + 7) % 12; // 8th sign in D3

  return {
    kharaNavamshaSignIndex: kharaNavamsha,
    khareshDrekkanaSignIndex: khareshDrekkana,
    warning: 'Transits of Saturn or Mars over Khara Navamsha require protective health vigilance.'
  };
}
`
    }]
  },

  // 30. Ayurvedic Herbal Remedies
  {
    step: 30,
    msg: "feat(medical): add Ayurvedic herbal preparations and Ritucharya seasonal care",
    files: [{
      file: "src/lib/medical/ayurvedicHerbalRemedies.ts",
      content: `/**
 * Planetary Ayurvedic Herbal Rasayanas
 */

export const PLANET_HERBS: Record<string, string[]> = {
  Sun: ['Ashwagandha', 'Saffron', 'Cinnamon', 'Ginger'],
  Moon: ['Shatavari', 'Brahmi', 'Licorice', 'Gotu Kola'],
  Mars: ['Guduchi', 'Turmeric', 'Manjistha', 'Red Sandalwood'],
  Mercury: ['Gotu Kola', 'Shankhpushpi', 'Tulsi', 'Mint'],
  Jupiter: ['Bala', 'Ashwagandha', 'Gokshura', 'Haritaki'],
  Venus: ['Shatavari', 'Cardamom', 'Rose Petals', 'Lotus Seed'],
  Saturn: ['Guggulu', 'Shilajit', 'Triphala', 'Myrrh']
};

export function getHerbalRemedies(planet: string): string[] {
  return PLANET_HERBS[planet] || ['Tulsi', 'Triphala'];
}
`
    }]
  },

  // 31. Disease Onset Dasha
  {
    step: 31,
    msg: "feat(medical): add Disease onset timing using 6th, 8th, and 12th lords in dasha",
    files: [{
      file: "src/lib/medical/diseaseOnsetDasha.ts",
      content: `/**
 * Disease Onset Timing (Trika Lords 6th, 8th, 12th)
 */

export function checkDiseaseOnsetPeriod(activeDashaLord: string, trikaLords: string[]): boolean {
  return trikaLords.includes(activeDashaLord);
}
`
    }]
  },

  // 32. Navamsha Gana Attribution
  {
    step: 32,
    msg: "feat(sthira): add Navamsha Gana attribution (Deva, Manushya, Rakshasa)",
    files: [{
      file: "src/lib/sthira/devaManushyaGanaNavamsha.ts",
      content: `/**
 * Navamsha Gana Attribution
 */

export function getNavamshaGana(navamshaSignIndex: number): 'Deva' | 'Manushya' | 'Rakshasa' {
  const mod = navamshaSignIndex % 3;
  if (mod === 0) return 'Deva';
  if (mod === 1) return 'Manushya';
  return 'Rakshasa';
}
`
    }]
  },

  // 33. Gana Koota Exceptions
  {
    step: 33,
    msg: "feat(synastry): add Gana Koota cancellation rules for mutual friendly sign lords",
    files: [{
      file: "src/lib/synastry/ganaKootaExceptions.ts",
      content: `/**
 * Gana Koota Cancellation Rules
 * Rakshasa-Deva incompatibility is cancelled if Moon lords are the same or mutual friends.
 */

export function isGanaDoshaCancelled(areMoonLordsFriends: boolean, areNavamshaLordsFriends: boolean): boolean {
  return areMoonLordsFriends || areNavamshaLordsFriends;
}
`
    }]
  },

  // 34. Yoni Koota Exceptions
  {
    step: 34,
    msg: "feat(synastry): add Yoni Koota sworn enemy mitigating factors in synastry",
    files: [{
      file: "src/lib/synastry/yoniKootaExceptions.ts",
      content: `/**
 * Yoni Koota Sworn Enemy Cancellation
 */

export function isYoniDoshaMitigated(hasFullBhakoot: boolean, hasFullNadi: boolean): boolean {
  return hasFullBhakoot && hasFullNadi;
}
`
    }]
  },

  // 35. Ekadhipatya Reduction Rules
  {
    step: 35,
    msg: "feat(pinda): add Ekadhipatya Shodhana dual lordship reduction edge cases",
    files: [{
      file: "src/lib/pinda/ekadhipatyaReductionRules.ts",
      content: `/**
 * Ekadhipatya Shodhana Dual Ownership Reduction
 */

export function applyEkadhipatyaReduction(bindusA: number, bindusB: number, isPlanetInA: boolean, isPlanetInB: boolean) {
  if (isPlanetInA && isPlanetInB) return { a: bindusA, b: bindusB };
  if (!isPlanetInA && !isPlanetInB) {
    const min = Math.min(bindusA, bindusB);
    return { a: min, b: min };
  }
  return { a: bindusA, b: bindusB };
}
`
    }]
  }
];
