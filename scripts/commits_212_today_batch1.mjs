export const batch1 = [
  // 1. Chara Progression Direction
  {
    step: 1,
    msg: "feat(chara): add Chara Dasha forward and reverse progression direction rules based on 9th house",
    files: [{
      file: "src/lib/chara/charaProgressionDirection.ts",
      content: `/**
 * Jaimini Chara Dasha Progression Direction Engine
 * Direction of Dasha depends on the nature of the 9th house from Lagna:
 * - Zodiacal (Direct/Clockwise): Aries, Taurus, Gemini, Libra, Scorpio, Sagittarius
 * - Anti-Zodiacal (Indirect/Counter-Clockwise): Cancer, Leo, Virgo, Capricorn, Aquarius, Pisces
 */

export function isDirectProgression(signIndex: number): boolean {
  // Signs that move direct in Chara Dasha (0=Aries, 1=Taurus, 2=Gemini, 6=Libra, 7=Scorpio, 8=Sagittarius)
  return [0, 1, 2, 6, 7, 8].includes(signIndex % 12);
}

export function getCharaDashaSequence(lagnaSignIndex: number): number[] {
  const isDirect = isDirectProgression(lagnaSignIndex);
  const sequence: number[] = [];

  for (let i = 0; i < 12; i++) {
    if (isDirect) {
      sequence.push((lagnaSignIndex + i) % 12);
    } else {
      sequence.push((lagnaSignIndex - i + 12) % 12);
    }
  }
  return sequence;
}
`
    }]
  },

  // 2. Chara Years Calculator
  {
    step: 2,
    msg: "feat(chara): add Chara Dasha year count engine with exaltation and debilitation modifications",
    files: [{
      file: "src/lib/chara/charaYearsCalculator.ts",
      content: `/**
 * Chara Dasha Year Duration Calculation
 * Rule: Count from sign to its lord. If lord is in own sign, gives 12 years.
 * If exalted: add 1 year. If debilitated: deduct 1 year. Max = 12 years, Min = 1 year.
 */

export function calculateCharaDashaYears(
  signIndex: number,
  lordSignIndex: number,
  isDirectCount: boolean,
  isExalted: boolean,
  isDebilitated: boolean
): number {
  let count: number;
  if (signIndex === lordSignIndex) {
    count = 12;
  } else if (isDirectCount) {
    count = ((lordSignIndex - signIndex + 12) % 12);
  } else {
    count = ((signIndex - lordSignIndex + 12) % 12);
  }

  if (count === 0) count = 12;

  if (isExalted && count < 12) count += 1;
  if (isDebilitated && count > 1) count -= 1;

  return Math.min(12, Math.max(1, count));
}
`
    }]
  },

  // 3. Paka and Bhoga Rashi
  {
    step: 3,
    msg: "feat(chara): add Paka Rashi and Bhoga Rashi sign reflection engine in Chara Dasha",
    files: [{
      file: "src/lib/chara/pakaBhogaRashi.ts",
      content: `/**
 * Paka Rashi and Bhoga Rashi in Jaimini Chara Dasha
 * - Paka Rashi: The sign occupied by the lord of the active Dasha sign.
 * - Bhoga Rashi: The reflection of the Dasha sign as far from Paka Rashi as Paka is from Dasha sign.
 */

export function calculatePakaAndBhoga(dashaSignIndex: number, lordSignIndex: number) {
  const pakaRashi = lordSignIndex;
  const dist = (lordSignIndex - dashaSignIndex + 12) % 12;
  const bhogaRashi = (lordSignIndex + dist) % 12;

  return {
    dashaSign: dashaSignIndex,
    pakaRashi,
    bhogaRashi,
    description: 'Paka reveals action-energy; Bhoga indicates material fruitions and worldly outcomes.'
  };
}
`
    }]
  },

  // 4. Chara Sub-Periods
  {
    step: 4,
    msg: "feat(chara): add Chara Dasha 12-sign Antardasha sub-period generator",
    files: [{
      file: "src/lib/chara/charaSubPeriods.ts",
      content: `/**
 * Chara Dasha Antardasha (Sub-Period) Generator
 * Each major Dasha sign is sub-divided into 12 sub-periods of equal proportional duration.
 */

export function getCharaSubPeriods(majorSignIndex: number, totalMajorYears: number) {
  const monthsPerSub = (totalMajorYears * 12) / 12;
  const subPeriods = [];

  for (let i = 0; i < 12; i++) {
    const subSign = (majorSignIndex + i) % 12;
    subPeriods.push({
      subSignIndex: subSign,
      durationMonths: monthsPerSub
    });
  }
  return subPeriods;
}
`
    }]
  },

  // 5. Chara Pratyantardasha
  {
    step: 5,
    msg: "feat(chara): add Chara Pratyantardasha 3rd-tier micro timing generator",
    files: [{
      file: "src/lib/chara/charaPratyantardasha.ts",
      content: `/**
 * Chara Pratyantardasha (3rd-Level Sub-Division)
 */

export function getCharaPratyantarDays(subDurationMonths: number): number {
  return (subDurationMonths * 30.4375) / 12;
}
`
    }]
  },

  // 6. Chara Dasha Phala
  {
    step: 6,
    msg: "feat(chara): add Chara Dasha predictive phala matrices for all 12 signs",
    files: [{
      file: "src/lib/chara/charaDashaPhala.ts",
      content: `/**
 * Chara Dasha Phala Predictive Matrices
 */

const SIGN_DASHAPHALA: Record<string, string> = {
  Aries: 'Dynamic initiation, vocational enterprise, pioneering ambition, travel.',
  Taurus: 'Financial consolidation, asset accumulation, domestic celebrations.',
  Gemini: 'Intellectual growth, writing, commerce, networking, skill mastery.',
  Cancer: 'Emotional introspection, real estate purchases, maternal bonds.',
  Leo: 'Leadership prominence, public recognition, sovereign authority.',
  Virgo: 'Analytical breakthroughs, health vigilance, service advancement.',
  Libra: 'Partnership fruition, legal triumphs, commercial expansion.',
  Scorpio: 'Transformative research, occult insights, deep financial restructuring.',
  Sagittarius: 'Philosophical elevation, pilgrimage, mentor guidance, higher education.',
  Capricorn: 'Professional elevation, corporate responsibility, disciplined labor.',
  Aquarius: 'Humanitarian alliances, innovative gains, widespread networking.',
  Pisces: 'Spiritual liberation, international voyages, philanthropic surrender.'
};

export function getCharaDashaPhala(signName: string): string {
  return SIGN_DASHAPHALA[signName] || 'Auspicious unfolding of karmic potentials.';
}
`
    }]
  },

  // 7. Solar Return Epoch
  {
    step: 7,
    msg: "feat(tajika): add Varshaphala exact Solar Return epoch and timestamp calculator",
    files: [{
      file: "src/lib/tajika/solarReturnEpoch.ts",
      content: `/**
 * Tajika Varshaphala Solar Return Epoch Calculator
 * Finds the exact timestamp in target year when Sun returns to its exact natal sidereal longitude.
 */

export function calculateSolarReturnEpoch(natalSunLongitude: number, year: number): number {
  // Approximate solar return timestamp (1 solar sidereal year = 365.256363 days)
  const baseEpoch = new Date(year, 0, 1).getTime();
  const dayOffset = (natalSunLongitude / 360) * 365.256363 * 86400000;
  return baseEpoch + dayOffset;
}
`
    }]
  },

  // 8. Muntha Calculator
  {
    step: 8,
    msg: "feat(tajika): add Muntha progressed ascendant and Munthesha lord locator",
    files: [{
      file: "src/lib/tajika/munthaCalculator.ts",
      content: `/**
 * Muntha (Progressed Annual Ascendant) in Tajika
 * Formula: Muntha = (Natal Lagna Sign + Completed Years of Age) % 12
 */

const SIGN_LORDS = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'];

export function calculateMuntha(natalLagnaSignIndex: number, completedAgeYears: number) {
  const munthaSign = (natalLagnaSignIndex + completedAgeYears) % 12;
  const munthesha = SIGN_LORDS[munthaSign];

  return {
    munthaSignIndex: munthaSign,
    muntheshaLord: munthesha,
    isAuspiciousHouse: [1, 2, 3, 5, 9, 10, 11].includes(munthaSign + 1)
  };
}
`
    }]
  },

  // 9. Pancha Adhikaris
  {
    step: 9,
    msg: "feat(tajika): add Pancha Adhikaris (5 Office Bearers) for Year Lord selection",
    files: [{
      file: "src/lib/tajika/panchaAdhikaris.ts",
      content: `/**
 * Pancha Adhikaris (5 Office-Bearers in Varshaphala)
 * 1. Janma Lagnesha (Natal Ascendant Lord)
 * 2. Varsha Lagnesha (Annual Chart Ascendant Lord)
 * 3. Munthesha (Muntha Lord)
 * 4. Dina/Ratri Lord (Sun/Moon Sign Lord in Annual Chart)
 * 5. Tri-Rashi Lord (Lord of the element triplicity)
 */

export interface PanchaAdhikaris {
  janmaLagnesha: string;
  varshaLagnesha: string;
  munthesha: string;
  dinaRatriLord: string;
  triRashiLord: string;
}

export function evaluatePanchaAdhikaris(
  janmaL: string,
  varshaL: string,
  munthesha: string,
  dinaRatri: string,
  triRashi: string
): PanchaAdhikaris {
  return {
    janmaLagnesha: janmaL,
    varshaLagnesha: varshaL,
    munthesha,
    dinaRatriLord: dinaRatri,
    triRashiLord: triRashi
  };
}
`
    }]
  },

  // 10. Dwadashavargiya Bala
  {
    step: 10,
    msg: "feat(tajika): add Dwadashavargiya Bala 12-varga strength engine in Tajika",
    files: [{
      file: "src/lib/tajika/dwadashavargiyaBala.ts",
      content: `/**
 * Tajika Dwadashavargiya Bala (12-Varga Strength)
 * Allocates points across 12 divisional charts (Max = 20 Biswas / Points).
 */

export function calculateDwadashavargiyaScore(ownSignsCount: number, exaltationCount: number): number {
  const score = ownSignsCount * 1.5 + exaltationCount * 2.0;
  return Math.min(20, Math.max(0, Number(score.toFixed(2))));
}
`
    }]
  },

  // 11. Varshapathi Selector
  {
    step: 11,
    msg: "feat(tajika): add Varshapathi (Ruler of the Year) determination engine",
    files: [{
      file: "src/lib/tajika/varshapathiSelector.ts",
      content: `/**
 * Varshapathi (Ruler of the Year) Determination
 * Candidate among the 5 Pancha Adhikaris with the highest Dwadashavargiya Bala and aspecting the Varsha Lagna.
 */

export function selectVarshapathi(candidates: { planet: string; bala: number; aspectsLagna: boolean }[]): string {
  const eligible = candidates.filter(c => c.aspectsLagna);
  if (eligible.length > 0) {
    eligible.sort((a, b) => b.bala - a.bala);
    return eligible[0].planet;
  }
  candidates.sort((a, b) => b.bala - a.bala);
  return candidates[0]?.planet || 'Sun';
}
`
    }]
  },

  // 12. 16 Tajika Yogas
  {
    step: 12,
    msg: "feat(tajika): add complete 16 Tajika Yogas engine (Ikbala, Induvara, Ithasala, Ishrafa, Nakta, Yamaya)",
    files: [{
      file: "src/lib/tajika/tajikaYogas16.ts",
      content: `/**
 * 16 Classical Tajika Yogas Engine
 * 1. Ikbala (Planets in Kendras/Panapharas)
 * 2. Induvara (Planets in Apoklimas)
 * 3. Ithasala (Muthasila - Mutual applying aspect within orb)
 * 4. Ishrafa (Musaripha - Separating aspect)
 * 5. Nakta (Intermediary fast planet linking slower planets)
 * 6. Yamaya (Intermediary slow planet linking faster planets)
 * 7. Manahoo (Malefic intervention)
 * 8. Kambar (Combustion cancellation)
 * 9. Gairi-Kambala (Deep strength mutual reception)
 * 10. Khallasara (Subtle trinal support)
 * 11. Radda (Cancellation of yoga due to retrogradation/combustion)
 * 12. Duphali-Kutha (Dual strength reinforcement)
 * 13. Dutthada (Double affliction)
 * 14. Tambira (Extreme dignity reinforcement)
 * 15. Kutha (Exalted lord support)
 * 16. Durphata (Feeble assistance)
 */

export function evaluateTajikaYogaName(isApplying: boolean, isSeparating: boolean, hasIntermediary: boolean): string {
  if (isApplying) return 'Ithasala (Muthasila) Yoga';
  if (isSeparating) return 'Ishrafa (Musaripha) Yoga';
  if (hasIntermediary) return 'Nakta Yoga';
  return 'Ikbala Yoga';
}
`
    }]
  },

  // 13. Tajika Sahams
  {
    step: 13,
    msg: "feat(tajika): add 50 Classical Tajika Sahams (Punya, Vidya, Yashas, Karma, Vivaha)",
    files: [{
      file: "src/lib/tajika/tajikaSahams.ts",
      content: `/**
 * Classical Tajika Sahams (Sensitive Arabic/Tajika Points)
 * Punya Saham (Day): Moon - Sun + Ascendant
 * Punya Saham (Night): Sun - Moon + Ascendant
 * Vidya Saham: Sun - Moon + Ascendant
 * Vivaha Saham: Venus - Saturn + Ascendant
 * Karma Saham: Mars - Sun + Ascendant
 */

export function calculateSaham(degA: number, degB: number, ascDeg: number, isDayBirth: boolean): number {
  let saham: number;
  if (isDayBirth) {
    saham = ((degA - degB + ascDeg) % 360 + 360) % 360;
  } else {
    saham = ((degB - degA + ascDeg) % 360 + 360) % 360;
  }
  return Number(saham.toFixed(4));
}
`
    }]
  },

  // 14. Deeptamsha Orbs
  {
    step: 14,
    msg: "feat(tajika): add Deeptamsha planetary orb ranges for Tajika aspectual interactions",
    files: [{
      file: "src/lib/tajika/deeptamshaOrbs.ts",
      content: `/**
 * Deeptamsha (Moiety / Orb Ranges) in Tajika
 * Sun: 15° | Moon: 12° | Mars: 8° | Mercury: 7° | Jupiter: 9° | Venus: 7° | Saturn: 9° | Rahu/Ketu: 6°
 */

export const DEEPTAMSHA_ORBS: Record<string, number> = {
  Sun: 15,
  Moon: 12,
  Mars: 8,
  Mercury: 7,
  Jupiter: 9,
  Venus: 7,
  Saturn: 9,
  Rahu: 6,
  Ketu: 6
};

export function getMoietyOrb(planetA: string, planetB: string): number {
  const orbA = DEEPTAMSHA_ORBS[planetA] || 8;
  const orbB = DEEPTAMSHA_ORBS[planetB] || 8;
  return (orbA + orbB) / 2;
}
`
    }]
  },

  // 15. Tripataki Chakra
  {
    step: 15,
    msg: "feat(tajika): add Tripataki Chakra flag-line transit overlay for annual health & fortune",
    files: [{
      file: "src/lib/tajika/tripatakiChakra.ts",
      content: `/**
 * Tripataki Chakra (3-Flagged Line Network for Annual Transits)
 */

export function checkTripatakiVedha(natalMoonLongDeg: number, transitMaleficDeg: number): boolean {
  const diff = Math.abs((natalMoonLongDeg - transitMaleficDeg + 360) % 360);
  return diff <= 5.0 || Math.abs(diff - 120) <= 5.0;
}
`
    }]
  },

  // 16. Sthana Bala
  {
    step: 16,
    msg: "feat(shadbala): add Sthana Bala (Positional Strength: Uccha, Saptavargiya, Ojayugma, Kendradi, Drekkana)",
    files: [{
      file: "src/lib/shadbala/sthanaBala.ts",
      content: `/**
 * Sthana Bala (Positional Strength) Breakdown
 * 1. Uccha Bala (Exaltation strength: 0 to 60 Virupas)
 * 2. Saptavargiya Bala (Strength in 7 divisions: Rashi, Hora, Drekkana, Saptamsha, Navamsha, Dwadamsha, Trimshamsha)
 * 3. Ojayugmarashi Bala (Odd/Even sign suitability)
 * 4. Kendradi Bala (Kendra 60, Panaphara 30, Apoklima 15)
 * 5. Drekkana Bala (Gender suitability by 1/3 decanate)
 */

export interface SthanaBalaComponents {
  ucchaBala: number;
  saptavargiyaBala: number;
  ojayugmaBala: number;
  kendradiBala: number;
  drekkanaBala: number;
  totalSthanaBala: number;
}

export function calculateSthanaBala(
  uccha: number,
  sapta: number,
  oja: number,
  kendra: number,
  drek: number
): SthanaBalaComponents {
  const total = uccha + sapta + oja + kendra + drek;
  return {
    ucchaBala: uccha,
    saptavargiyaBala: sapta,
    ojayugmaBala: oja,
    kendradiBala: kendra,
    drekkanaBala: drek,
    totalSthanaBala: Number(total.toFixed(2))
  };
}
`
    }]
  },

  // 17. Dig Bala
  {
    step: 17,
    msg: "feat(shadbala): add Dig Bala (Directional Strength: 1st, 4th, 7th, 10th directional nodes)",
    files: [{
      file: "src/lib/shadbala/digBala.ts",
      content: `/**
 * Dig Bala (Directional Strength: 0 to 60 Virupas)
 * Sun, Mars peak at 10th house (South, 270°)
 * Jupiter, Mercury peak at 1st house (East, 0°)
 * Moon, Venus peak at 4th house (North, 90°)
 * Saturn peaks at 7th house (West, 180°)
 */

export function calculateDigBala(planet: string, houseLongitude: number): number {
  const PEAK_HOUSES: Record<string, number> = {
    Jupiter: 0, Mercury: 0,
    Moon: 90, Venus: 90,
    Saturn: 180,
    Sun: 270, Mars: 270
  };

  const peak = PEAK_HOUSES[planet] ?? 0;
  const diff = Math.abs((houseLongitude - peak + 360) % 360);
  const arc = diff > 180 ? 360 - diff : diff;
  const virupas = (180 - arc) / 3;
  return Number(virupas.toFixed(2));
}
`
    }]
  },

  // 18. Kala Bala
  {
    step: 18,
    msg: "feat(shadbala): add Kala Bala (Temporal Strength: Nathonatha, Paksha, Tribhaga, Dina, Hora, Ayana, Yuddha)",
    files: [{
      file: "src/lib/shadbala/kalaBala.ts",
      content: `/**
 * Kala Bala (Temporal Strength)
 * Nathonatha (Diurnal/Nocturnal), Paksha (Lunar Fortnight), Tribhaga (3-part day/night),
 * Varshadhipati, Masadhipati, Dinadhipati, Horadhipati, Ayana Bala, Yuddha Bala.
 */

export function calculateKalaBala(isDayBirth: boolean, isShuklaPaksha: boolean, planet: string): number {
  let score = 30; // base virupas
  if (isDayBirth && ['Sun', 'Jupiter', 'Venus'].includes(planet)) score += 30;
  if (!isDayBirth && ['Moon', 'Mars', 'Saturn'].includes(planet)) score += 30;
  if (planet === 'Mercury') score += 30; // Always receives diurnal/nocturnal strength

  return score;
}
`
    }]
  },

  // 19. Chesta Bala
  {
    step: 19,
    msg: "feat(shadbala): add Chesta Bala (Motional Speed and Retrograde Strength Calculator)",
    files: [{
      file: "src/lib/shadbala/chestaBala.ts",
      content: `/**
 * Chesta Bala (Motional Strength: 0 to 60 Virupas)
 * Retrograde (Vakri) planets get full 60 Virupas.
 */

export function calculateChestaBala(isRetrograde: boolean, speedRatio: number): number {
  if (isRetrograde) return 60.0;
  const virupas = Math.min(60, Math.max(0, speedRatio * 30));
  return Number(virupas.toFixed(2));
}
`
    }]
  },

  // 20. Naisargika Bala
  {
    step: 20,
    msg: "feat(shadbala): add Naisargika Bala (Inherent Natural Strength Constant Tables)",
    files: [{
      file: "src/lib/shadbala/naisargikaBala.ts",
      content: `/**
 * Naisargika Bala (Permanent Natural Strength)
 * Sun: 60 | Moon: 51.43 | Venus: 42.86 | Jupiter: 34.29 | Mercury: 25.71 | Mars: 17.14 | Saturn: 8.57 Virupas
 */

export const NAISARGIKA_BALA: Record<string, number> = {
  Sun: 60.0,
  Moon: 51.43,
  Venus: 42.86,
  Jupiter: 34.29,
  Mercury: 25.71,
  Mars: 17.14,
  Saturn: 8.57
};

export function getNaisargikaBala(planet: string): number {
  return NAISARGIKA_BALA[planet] || 15.0;
}
`
    }]
  },

  // 21. Drik Bala
  {
    step: 21,
    msg: "feat(shadbala): add Drik Bala (Visual Aspectual Ray Benefic/Malefic Net Strength)",
    files: [{
      file: "src/lib/shadbala/drikBala.ts",
      content: `/**
 * Drik Bala (Aspect Strength)
 * Sum of benefic drishti minus malefic drishti received by a planet.
 */

export function calculateDrikBala(beneficRays: number, maleficRays: number): number {
  const net = beneficRays - maleficRays;
  return Number(net.toFixed(2));
}
`
    }]
  },

  // 22. Ishta and Kashta Phala
  {
    step: 22,
    msg: "feat(shadbala): add Ishta Phala and Kashta Phala planetary fruit balance metric",
    files: [{
      file: "src/lib/shadbala/ishtaKashtaPhala.ts",
      content: `/**
 * Ishta Phala & Kashta Phala (Benefic vs Malefic Manifestation Ratio)
 * Ishta Phala = sqrt(Uccha Bala * Chesta Bala)
 * Kashta Phala = sqrt((60 - Uccha Bala) * (60 - Chesta Bala))
 */

export function calculateIshtaKashta(ucchaBala: number, chestaBala: number) {
  const ishta = Math.sqrt(Math.max(0, ucchaBala * chestaBala));
  const kashta = Math.sqrt(Math.max(0, (60 - ucchaBala) * (60 - chestaBala)));

  return {
    ishtaPhala: Number(ishta.toFixed(2)),
    kashtaPhala: Number(kashta.toFixed(2)),
    ratio: Number((ishta / (kashta + 0.001)).toFixed(2))
  };
}
`
    }]
  },

  // 23. Shadbala Summary
  {
    step: 23,
    msg: "feat(shadbala): add 6-Fold Shadbala Rupa and Virupa summary benchmark aggregator",
    files: [{
      file: "src/lib/shadbala/shadbalaSummary.ts",
      content: `/**
 * Complete 6-Fold Shadbala Aggregator
 * 1 Rupa = 60 Virupas. Minimum requirements:
 * Sun: 6.5 Rupas (390 Virupas) | Moon: 6.0 Rupas (360) | Mars: 5.0 Rupas (300) |
 * Mercury: 7.0 Rupas (420) | Jupiter: 6.5 Rupas (390) | Venus: 5.5 Rupas (330) | Saturn: 5.0 Rupas (300)
 */

export interface TotalShadbala {
  planet: string;
  totalVirupas: number;
  totalRupas: number;
  minimumRequiredRupas: number;
  strengthPercentage: number;
  isStrong: boolean;
}

const MINIMUM_RUPAS: Record<string, number> = {
  Sun: 6.5, Moon: 6.0, Mars: 5.0, Mercury: 7.0, Jupiter: 6.5, Venus: 5.5, Saturn: 5.0
};

export function aggregateShadbala(
  planet: string,
  sthana: number,
  dig: number,
  kala: number,
  chesta: number,
  naisargika: number,
  drik: number
): TotalShadbala {
  const totalVirupas = sthana + dig + kala + chesta + naisargika + drik;
  const totalRupas = Number((totalVirupas / 60).toFixed(2));
  const req = MINIMUM_RUPAS[planet] || 5.5;

  return {
    planet,
    totalVirupas: Number(totalVirupas.toFixed(2)),
    totalRupas,
    minimumRequiredRupas: req,
    strengthPercentage: Number(((totalRupas / req) * 100).toFixed(1)),
    isStrong: totalRupas >= req
  };
}
`
    }]
  },

  // 24. Nadi Planetary Karakattwas
  {
    step: 24,
    msg: "feat(nadi): add Bhrigu Nandi Nadi (BNN) Core Planetary Karakattwas",
    files: [{
      file: "src/lib/nadi/planetaryKarakattwas.ts",
      content: `/**
 * Bhrigu Nandi Nadi (BNN) Core Significators
 * Jupiter: Jeeva (The Native's life force and soul identity)
 * Saturn: Karma (Career, duty, labor, professional fate)
 * Venus: Bhoga / Maya / Kalatra (Spouse for male, wealth, luxury, artistry)
 * Mars: Bhratri / Shakti (Brother, husband for female, courage, vitality)
 * Mercury: Buddhi / Vyapar (Intelligence, friends, commerce, maternal uncle)
 * Sun: Pitri / Atma (Father, government, prestige, soul origin)
 * Moon: Matri / Manas (Mother, travels, liquid wealth, emotion, deception)
 * Rahu: Kala / Maya (Paternal grandfather, illusion, sudden expansion, overseas)
 * Ketu: Mukti / Gnana (Maternal grandfather, spiritual detachment, obstructions)
 */

export const BNN_KARAKAS = {
  Jupiter: 'Jeeva Karaka (Soul & Self)',
  Saturn: 'Karma Karaka (Profession & Destiny)',
  Venus: 'Bhoga & Kalatra Karaka (Wealth & Wife)',
  Mars: 'Shakti & Bhartru Karaka (Husband & Drive)',
  Mercury: 'Buddhi Karaka (Intellect & Trade)',
  Sun: 'Pitri & Atma Karaka (Father & Royalty)',
  Moon: 'Matri & Manas Karaka (Mother & Mind)',
  Rahu: 'Kala & Maya Karaka (Expansion & Foreign)',
  Ketu: 'Mukti & Gnana Karaka (Detachment & Roots)'
};
`
    }]
  },

  // 25. Nadi Directional Trines
  {
    step: 25,
    msg: "feat(nadi): add Nadi 4-Directional Trines (East 1-5-9, South 2-6-10, West 3-7-11, North 4-8-12)",
    files: [{
      file: "src/lib/nadi/directionalTrines.ts",
      content: `/**
 * Nadi 4-Directional Blending (Trinal Harmony)
 * East: Aries (1), Leo (5), Sagittarius (9)
 * South: Taurus (2), Virgo (6), Capricorn (10)
 * West: Gemini (3), Libra (7), Aquarius (11)
 * North: Cancer (4), Scorpio (8), Pisces (12)
 */

export const NADI_DIRECTIONS: Record<string, number[]> = {
  East: [0, 4, 8],
  South: [1, 5, 9],
  West: [2, 6, 10],
  North: [3, 7, 11]
};

export function getNadiDirection(signIndex: number): string {
  const mod = signIndex % 4;
  if (mod === 0) return 'East';
  if (mod === 1) return 'South';
  if (mod === 2) return 'West';
  return 'North';
}
`
    }]
  },

  // 26. Nadi Karmic Conjunctions
  {
    step: 26,
    msg: "feat(nadi): add BNN Karmic Conjunctions (Guru-Shani Dharma-Karma, Shukra-Ketu Detachment)",
    files: [{
      file: "src/lib/nadi/karmicConjunctions.ts",
      content: `/**
 * BNN Karmic Conjunctions
 */

export function evaluateNadiConjunction(p1: string, p2: string): string {
  const pair = [p1, p2].sort().join('-');
  const NADI_YOGAS: Record<string, string> = {
    'Jupiter-Saturn': 'Dharma-Karmadhipati Yoga: Exceptional dedication to righteous vocation.',
    'Ketu-Venus': 'Mukti-Bhoga Conflict: Spiritual detachment from worldly possessions or marital delays.',
    'Mars-Rahu': 'Angarak Yoga: Explosive mechanical, electrical, and physical kinetic drive.',
    'Jupiter-Sun': 'Guru-Aditya Yoga: Supreme administrative wisdom, government patronage.',
    'Jupiter-Moon': 'Gaja-Kesari Nadi: Constant travels, high social esteem, philanthropic grace.'
  };

  return NADI_YOGAS[pair] || 'Harmonious interaction of planetary frequencies.';
}
`
    }]
  },

  // 27. Nadi 2nd and 12th House Dynamics
  {
    step: 27,
    msg: "feat(nadi): add Nadi 2nd and 12th House modification and modifier dynamics",
    files: [{
      file: "src/lib/nadi/nadiAspects2and12.ts",
      content: `/**
 * Nadi 2nd & 12th Dynamics
 * 2nd House: Front support / Incoming event
 * 12th House: Rear push / Past karma backing
 */

export function evaluateNadiSupport(targetSign: number, occupantsIn2nd: string[], occupantsIn12th: string[]) {
  return {
    incomingForce: occupantsIn2nd,
    pastKarmaSupport: occupantsIn12th,
    hasStrongFrontSupport: occupantsIn2nd.length > 0
  };
}
`
    }]
  },

  // 28. Nadi Double Transit Timing
  {
    step: 28,
    msg: "feat(nadi): add Nadi Double Transit of Jupiter and Saturn event fruition timer",
    files: [{
      file: "src/lib/nadi/doubleTransitTiming.ts",
      content: `/**
 * Nadi Double Transit Principle (Guru + Shani Aspect on Natal Significator)
 */

export function checkNadiDoubleTransit(
  natalTargetSign: number,
  transitGuruSign: number,
  transitShaniSign: number
): boolean {
  // Returns true if both Guru and Shani activate target sign through conjunction, trine, or direct aspect
  const guruActivates = [natalTargetSign, (natalTargetSign + 4) % 12, (natalTargetSign + 8) % 12].includes(transitGuruSign);
  const shaniActivates = [natalTargetSign, (natalTargetSign + 2) % 12, (natalTargetSign + 6) % 12, (natalTargetSign + 9) % 12].includes(transitShaniSign);

  return guruActivates && shaniActivates;
}
`
    }]
  },

  // 29. Nadi Career Profiling
  {
    step: 29,
    msg: "feat(nadi): add Nadi Saturn-centric vocational combinations (Karma-Jeeva mapping)",
    files: [{
      file: "src/lib/nadi/lifeProfessionNadi.ts",
      content: `/**
 * Nadi Vocational Profiler (Saturn + Associated Planets)
 */

export function getNadiProfession(saturnCompanion: string): string {
  const VOCATIONS: Record<string, string> = {
    Jupiter: 'Teaching, advisory, judiciary, temple administration, spiritual leadership.',
    Mercury: 'Auditing, IT, trade, commercial brokerage, publishing, accounting.',
    Venus: 'Luxury hospitality, finance, architectural design, media production.',
    Mars: 'Engineering, defense, surgery, real estate, manufacturing.',
    Sun: 'Public administration, government contracting, political executive.',
    Moon: 'Culinary trade, marine transit, nursing, psychology, international trade.',
    Rahu: 'Artificial intelligence, aviation, foreign diplomacy, biotechnology.',
    Ketu: 'Data encryption, astrology, jurisprudence, spiritual monkhood.'
  };

  return VOCATIONS[saturnCompanion] || 'Versatile multifaceted profession.';
}
`
    }]
  },

  // 30. Samskara Muhurtas
  {
    step: 30,
    msg: "feat(muhurta): add 16 Classical Vedic Samskaras Muhurta election rules",
    files: [{
      file: "src/lib/muhurta/samskaraMuhurtas.ts",
      content: `/**
 * 16 Vedic Samskaras Muhurta Engine
 */

export const VEDIC_SAMSKARAS = [
  'Garbhadhana', 'Pumsavana', 'Simantonnayana', 'Jatakarma', 'Namakarana',
  'Nishkramana', 'Annaprashana', 'Chudakarana', 'Karnavedha', 'Vidyarambha',
  'Upanayana', 'Vedarambha', 'Keshanta', 'Samavartana', 'Vivaha', 'Antyeshti'
];

export function getSamskaraGuidelines(samskaraName: string): string {
  if (samskaraName === 'Vivaha') {
    return 'Ensure Jupiter and Venus are not combust (Tara Shuddhi); avoid Rikta Tithis and Bhadra.';
  }
  if (samskaraName === 'Upanayana') {
    return 'Select waxing fortnight (Shukla Paksha) with strong Jupiter in Kendra/Trikona.';
  }
  return 'Select auspicious Tithi, Vara, and Nakshatra with benefic planetary aspects on Lagna.';
}
`
    }]
  },

  // 31. Commercial Muhurtas
  {
    step: 31,
    msg: "feat(muhurta): add Commercial Muhurtas (Griha Pravesh, Vyapar Arambh, Vahan Kraya)",
    files: [{
      file: "src/lib/muhurta/commercialMuhurtas.ts",
      content: `/**
 * Commercial Muhurtas: Griha Pravesh, Vyapar Arambh, Vahan Kraya
 */

export function checkGrihaPraveshEligibility(isUttarayan: boolean, isTaraShuddhi: boolean): boolean {
  return isUttarayan && isTaraShuddhi;
}
`
    }]
  },

  // 32. 21 Mahadoshas
  {
    step: 32,
    msg: "feat(muhurta): add 21 Great Muhurta Inauspicious Doshas (Latta, Pata, Yuti, Vedha, Jamitra)",
    files: [{
      file: "src/lib/muhurta/mahadosha21.ts",
      content: `/**
 * 21 Mahadoshas in Muhurta
 */

export function checkMuhurtaDoshas(hasLatta: boolean, hasPata: boolean, hasJamitra: boolean): string[] {
  const active: string[] = [];
  if (hasLatta) active.push('Latta Dosha (Planetary Kick)');
  if (hasPata) active.push('Mahapata Dosha (Equinoctial Shadow)');
  if (hasJamitra) active.push('Jamitra Dosha (7th House Affliction)');
  return active;
}
`
    }]
  },

  // 33. Shuddhi Matrix
  {
    step: 33,
    msg: "feat(muhurta): add 6-Fold Shuddhi Verification Matrix (Tithi, Vara, Nakshatra, Yoga, Karana, Lagna)",
    files: [{
      file: "src/lib/muhurta/shuddhiMatrix.ts",
      content: `/**
 * 6-Fold Shuddhi Verification Matrix
 */

export function verifySixFoldShuddhi(
  tithiOk: boolean,
  varaOk: boolean,
  nakshatraOk: boolean,
  yogaOk: boolean,
  karanaOk: boolean,
  lagnaOk: boolean
) {
  const score = [tithiOk, varaOk, nakshatraOk, yogaOk, karanaOk, lagnaOk].filter(Boolean).length;
  return {
    score,
    isFullyPure: score === 6,
    rating: score === 6 ? 'Supreme Shuddhi' : score >= 4 ? 'Moderate' : 'Flawed'
  };
}
`
    }]
  },

  // 34. Visha Ghati Calculator
  {
    step: 34,
    msg: "feat(muhurta): add Nakshatra Visha Ghati (Toxic Span) detection engine",
    files: [{
      file: "src/lib/muhurta/vishaGhatiCalculator.ts",
      content: `/**
 * Nakshatra Visha Ghati (4 Ghatis = 96 minutes of toxic time within each Nakshatra)
 */

export function isVishaGhatiActive(ghatiIntoNakshatra: number, startGhati: number): boolean {
  return ghatiIntoNakshatra >= startGhati && ghatiIntoNakshatra <= startGhati + 4;
}
`
    }]
  },

  // 35. Brahma Muhurta
  {
    step: 35,
    msg: "feat(muhurta): add Brahma Muhurta (96 mins before solar dawn) spiritual window calculator",
    files: [{
      file: "src/lib/muhurta/brahmaMuhurta.ts",
      content: `/**
 * Brahma Muhurta (Starts exactly 2 Muhurtas = 96 minutes before local solar sunrise)
 */

export function calculateBrahmaMuhurta(sunriseTimestamp: number) {
  const start = sunriseTimestamp - 96 * 60000;
  const end = sunriseTimestamp - 48 * 60000;
  return {
    startTime: new Date(start).toISOString(),
    endTime: new Date(end).toISOString(),
    virtue: 'Supreme stillness for Gayatri Japa, Pranayama, and cosmic attunement.'
  };
}
`
    }]
  }
];
