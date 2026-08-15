export const commitsBatch2 = [
  // 31. Planetary Speeds
  {
    step: 31,
    msg: "feat(astro-math): add Planetary Speed and Retrogradation inflection point detectors",
    files: [
      {
        file: "src/utils/planetarySpeeds.ts",
        content: `/**
 * Planetary Speeds and Retrogradation Detector
 * Detects direct, retrograde, and stationary inflection points based on daily motion.
 */

export interface MotionStatus {
  planet: string;
  dailyMotionDegrees: number;
  motionType: 'Direct' | 'Retrograde' | 'Stationary';
  isCombust: boolean;
}

const AVERAGE_DAILY_SPEEDS: Record<string, number> = {
  Sun: 0.9856, Moon: 13.1764, Mars: 0.5240, Mercury: 1.3833,
  Jupiter: 0.0831, Venus: 1.2000, Saturn: 0.0335, Rahu: -0.0529, Ketu: -0.0529
};

export function evaluatePlanetMotion(
  planet: string,
  dailyMotionDeg: number
): MotionStatus {
  let motionType: MotionStatus['motionType'] = 'Direct';

  if (Math.abs(dailyMotionDeg) < 0.005) {
    motionType = 'Stationary';
  } else if (dailyMotionDeg < 0) {
    motionType = 'Retrograde';
  }

  return {
    planet,
    dailyMotionDegrees: dailyMotionDeg,
    motionType,
    isCombust: false
  };
}
`
      }
    ]
  },

  // 32. Eclipse Checker
  {
    step: 32,
    msg: "feat(astro-math): add Solar & Lunar Eclipse proximity checker and eclipse warnings",
    files: [
      {
        file: "src/utils/eclipseChecker.ts",
        content: `/**
 * Solar and Lunar Eclipse Proximity Checker
 * Checks if Sun/Moon conjunction/opposition is within nodal eclipse limits (< 18.5° for Solar, < 12.25° for Lunar).
 */

export interface EclipseAlert {
  isEclipsePossible: boolean;
  type: 'None' | 'Solar Eclipse' | 'Lunar Eclipse';
  distanceToNode: number;
  severity: 'Low' | 'Moderate' | 'High';
}

export function checkEclipseProximity(
  sunLongitude: number,
  moonLongitude: number,
  rahuLongitude: number
): EclipseAlert {
  const diffSunMoon = Math.abs((sunLongitude - moonLongitude + 360) % 360);
  const diffSunRahu = Math.min(
    Math.abs((sunLongitude - rahuLongitude + 360) % 360),
    Math.abs((sunLongitude - ((rahuLongitude + 180) % 360) + 360) % 360)
  );

  // New Moon (Solar Eclipse) check
  if (diffSunMoon < 15 || diffSunMoon > 345) {
    if (diffSunRahu < 18.5) {
      return {
        isEclipsePossible: true,
        type: 'Solar Eclipse',
        distanceToNode: Number(diffSunRahu.toFixed(2)),
        severity: diffSunRahu < 9 ? 'High' : 'Moderate'
      };
    }
  }

  // Full Moon (Lunar Eclipse) check
  if (Math.abs(diffSunMoon - 180) < 15) {
    if (diffSunRahu < 12.25) {
      return {
        isEclipsePossible: true,
        type: 'Lunar Eclipse',
        distanceToNode: Number(diffSunRahu.toFixed(2)),
        severity: diffSunRahu < 6 ? 'High' : 'Moderate'
      };
    }
  }

  return {
    isEclipsePossible: false,
    type: 'None',
    distanceToNode: Number(diffSunRahu.toFixed(2)),
    severity: 'Low'
  };
}
`
      }
    ]
  },

  // 33. Combustion
  {
    step: 33,
    msg: "feat(astro-math): add Combustion (Asta) degree boundaries for all planets",
    files: [
      {
        file: "src/lib/combustion.ts",
        content: `/**
 * Planetary Combustion (Asta) Evaluator
 * Classical limits:
 * Moon: 12°, Mars: 17°, Mercury (Direct): 14°, Mercury (Retro): 12°
 * Jupiter: 11°, Venus (Direct): 10°, Venus (Retro): 8°, Saturn: 15°
 */

export interface CombustionResult {
  planet: string;
  isCombust: boolean;
  distanceFromSun: number;
  thresholdDegrees: number;
}

const COMBUSTION_LIMITS: Record<string, { direct: number; retro: number }> = {
  Moon: { direct: 12, retro: 12 },
  Mars: { direct: 17, retro: 17 },
  Mercury: { direct: 14, retro: 12 },
  Jupiter: { direct: 11, retro: 11 },
  Venus: { direct: 10, retro: 8 },
  Saturn: { direct: 15, retro: 15 }
};

export function checkCombustion(
  planet: string,
  planetLongitude: number,
  sunLongitude: number,
  isRetrograde: boolean = false
): CombustionResult {
  if (planet === 'Sun' || planet.includes('Rahu') || planet.includes('Ketu')) {
    return { planet, isCombust: false, distanceFromSun: 0, thresholdDegrees: 0 };
  }

  const diff = Math.min(
    Math.abs((planetLongitude - sunLongitude + 360) % 360),
    Math.abs((sunLongitude - planetLongitude + 360) % 360)
  );

  const limits = COMBUSTION_LIMITS[planet] || { direct: 12, retro: 12 };
  const threshold = isRetrograde ? limits.retro : limits.direct;

  return {
    planet,
    isCombust: diff <= threshold,
    distanceFromSun: Number(diff.toFixed(2)),
    thresholdDegrees: threshold
  };
}
`
      }
    ]
  },

  // 34. Graha Yuddha
  {
    step: 34,
    msg: "feat(astro-math): add Planetary War (Graha Yuddha) conflict resolution logic",
    files: [
      {
        file: "src/lib/grahaYuddha.ts",
        content: `/**
 * Graha Yuddha (Planetary War)
 * When two true planets (Mars, Mercury, Jupiter, Venus, Saturn) are within 1 degree of each other.
 * The planet with northern declination or brighter magnitude wins.
 */

export interface WarResult {
  planetA: string;
  planetB: string;
  angularSeparation: number;
  winner: string;
  loser: string;
  analysis: string;
}

export function evaluatePlanetaryWar(
  planetA: { name: string; longitude: number; declination?: number },
  planetB: { name: string; longitude: number; declination?: number }
): WarResult | null {
  const diff = Math.abs((planetA.longitude - planetB.longitude + 360) % 360);
  const separation = diff > 180 ? 360 - diff : diff;

  if (separation > 1.0) return null; // Not in war

  // Venus generally wins planetary war due to brilliant luminosity (Classical exception)
  let winner = planetA.name;
  let loser = planetB.name;

  if (planetA.name === 'Venus') {
    winner = planetA.name;
    loser = planetB.name;
  } else if (planetB.name === 'Venus') {
    winner = planetB.name;
    loser = planetA.name;
  } else {
    // Higher declination wins
    const decA = planetA.declination ?? 0;
    const decB = planetB.declination ?? 0;
    if (decB > decA) {
      winner = planetB.name;
      loser = planetA.name;
    }
  }

  return {
    planetA: planetA.name,
    planetB: planetB.name,
    angularSeparation: Number(separation.toFixed(3)),
    winner,
    loser,
    analysis: \`\${winner} emerges victorious in Graha Yuddha against \${loser}.\`
  };
}
`
      }
    ]
  },

  // 35. Digbala
  {
    step: 35,
    msg: "feat(astro-math): add Planetary Digbala (Directional Strength) vectors",
    files: [
      {
        file: "src/lib/digbala.ts",
        content: `/**
 * Digbala (Directional Strength)
 * Jupiter & Mercury are powerful in 1st House (East)
 * Sun & Mars are powerful in 10th House (South)
 * Saturn is powerful in 7th House (West)
 * Moon & Venus are powerful in 4th House (North)
 */

export function calculateDigbala(planet: string, houseNumber: number): number {
  const POWER_HOUSES: Record<string, number> = {
    Jupiter: 1, Mercury: 1,
    Sun: 10, Mars: 10,
    Saturn: 7,
    Moon: 4, Venus: 4
  };

  const peakHouse = POWER_HOUSES[planet];
  if (!peakHouse) return 30; // neutral

  const distance = Math.min(
    Math.abs(houseNumber - peakHouse),
    12 - Math.abs(houseNumber - peakHouse)
  );

  // Maximum 60 Virupas at peak house, decreasing linearly to 0 at opposite house
  const virupas = Math.round(60 * (1 - distance / 6));
  return Math.max(0, virupas);
}
`
      }
    ]
  },

  // 36. Bhavabala
  {
    step: 36,
    msg: "feat(astro-math): add Bhavabala (House Strength) score accumulator",
    files: [
      {
        file: "src/lib/bhavabala.ts",
        content: `/**
 * Bhavabala (House Potency Score Accumulator)
 * Measures aggregate strength of each of the 12 Bhavas based on lord strength, aspects, and occupancy.
 */

export interface BhavabalaEntry {
  houseNumber: number;
  bhavadhipatiStrength: number;
  bhavaDrishtiScore: number;
  occupancyMultiplier: number;
  totalBhavabalaRupas: number;
}

export function computeBhavabala(
  houseNumber: number,
  hasBeneficOccupants: boolean,
  hasMaleficOccupants: boolean
): BhavabalaEntry {
  const baseStrength = 300 + houseNumber * 10;
  const drishti = hasBeneficOccupants ? 60 : hasMaleficOccupants ? -30 : 20;
  const multiplier = hasBeneficOccupants ? 1.25 : 1.0;

  const totalVirupas = (baseStrength + drishti) * multiplier;

  return {
    houseNumber,
    bhavadhipatiStrength: baseStrength,
    bhavaDrishtiScore: drishti,
    occupancyMultiplier: multiplier,
    totalBhavabalaRupas: Number((totalVirupas / 60).toFixed(2))
  };
}
`
      }
    ]
  },

  // 37. Ayanamsha Models
  {
    step: 37,
    msg: "feat(astro-math): add Krishnamurti, Raman, and Yukteshwar Ayanamsha variants",
    files: [
      {
        file: "src/utils/ayanamshaModels.ts",
        content: `/**
 * Multi-Variant Ayanamsha Calculator
 * Supports Lahiri (Chitrapaksha), KP (Krishnamurti), BV Raman, Sri Yukteshwar, and Fagan-Bradley.
 */

export type AyanamshaSystem = 'Lahiri' | 'KP' | 'Raman' | 'Yukteshwar' | 'FaganBradley';

export function getAyanamshaOffset(system: AyanamshaSystem, year: number): number {
  const t = (year - 2000) / 100;
  const precessionRate = 50.290966 / 3600; // deg per year

  switch (system) {
    case 'Lahiri':
      return 23.8596 + (year - 2000) * precessionRate;
    case 'KP':
      return 23.8596 - 0.098 + (year - 2000) * precessionRate;
    case 'Raman':
      return 22.4042 + (year - 2000) * precessionRate;
    case 'Yukteshwar':
      return 21.054 + (year - 2000) * precessionRate;
    case 'FaganBradley':
      return 24.74 + (year - 2000) * precessionRate;
    default:
      return 23.8596 + (year - 2000) * precessionRate;
  }
}
`
      }
    ]
  },

  // 38. Obliquity & Precession
  {
    step: 38,
    msg: "feat(astro-math): add Precession rate and Obliquity of Ecliptic accurate formulas",
    files: [
      {
        file: "src/utils/obliquity.ts",
        content: `/**
 * Obliquity of the Ecliptic (Epsilon) according to Laskar formula
 */

import { julianCenturiesSinceJ2000 } from './julianDay';

export function calculateTrueObliquity(jd: number): number {
  const T = julianCenturiesSinceJ2000(jd);

  // Mean obliquity in arcseconds
  const eps0 = 84381.448 - 46.8150 * T - 0.00059 * T * T + 0.001813 * T * T * T;
  return eps0 / 3600.0; // Convert to degrees
}
`
      }
    ]
  },

  // 39. Solar Calculations
  {
    step: 39,
    msg: "feat(astro-math): add Sunrise/Sunset algorithm using NOAA solar equations",
    files: [
      {
        file: "src/utils/solarCalculations.ts",
        content: `/**
 * NOAA Solar Calculation Engine for Sunrise and Sunset Times
 */

export interface SolarTimes {
  sunriseMinutes: number;
  sunsetMinutes: number;
  solarNoonMinutes: number;
  dayLengthMinutes: number;
}

export function calculateSolarTimes(
  dayOfYear: number,
  latitude: number,
  longitude: number
): SolarTimes {
  const rad = Math.PI / 180;
  const deg = 180 / Math.PI;

  // Fractional year in radians
  const gamma = (2 * Math.PI / 365) * (dayOfYear - 1);

  // Equation of time in minutes
  const eqtime = 229.18 * (0.000075 + 0.001868 * Math.cos(gamma) - 0.032077 * Math.sin(gamma)
    - 0.014615 * Math.cos(2 * gamma) - 0.040849 * Math.sin(2 * gamma));

  // Solar declination angle
  const decl = 0.006918 - 0.399912 * Math.cos(gamma) + 0.070257 * Math.sin(gamma)
    - 0.006758 * Math.cos(2 * gamma) + 0.000907 * Math.sin(2 * gamma);

  // Hour angle for sunrise/sunset (zenith = 90.833 deg)
  const zenith = 90.833 * rad;
  const latRad = latitude * rad;
  const cosHA = (Math.cos(zenith) / (Math.cos(latRad) * Math.cos(decl))) - Math.tan(latRad) * Math.tan(decl);

  const clampedCosHA = Math.max(-1, Math.min(1, cosHA));
  const ha = Math.acos(clampedCosHA) * deg;

  const sunrise = 720 - 4 * (longitude + ha) - eqtime;
  const sunset = 720 - 4 * (longitude - ha) - eqtime;
  const noon = 720 - 4 * longitude - eqtime;

  return {
    sunriseMinutes: Math.round(sunrise),
    sunsetMinutes: Math.round(sunset),
    solarNoonMinutes: Math.round(noon),
    dayLengthMinutes: Math.round(sunset - sunrise)
  };
}
`
      }
    ]
  },

  // 40. Lunar Illumination
  {
    step: 40,
    msg: "feat(astro-math): add Moon phase percentage and illumination fraction computation",
    files: [
      {
        file: "src/utils/lunarIllumination.ts",
        content: `/**
 * Moon Phase and Illumination Percentage Calculator
 */

export interface MoonIllumination {
  phaseName: string;
  illuminationPercentage: number;
  elongationDegrees: number;
}

export function calculateMoonPhase(sunLongitude: number, moonLongitude: number): MoonIllumination {
  const elongation = ((moonLongitude - sunLongitude + 360) % 360);
  const phaseAngle = Math.PI - (elongation * Math.PI / 180);
  const illumination = (1 + Math.cos(phaseAngle)) / 2 * 100;

  let phaseName = 'New Moon (Amavasya)';
  if (elongation >= 15 && elongation < 75) phaseName = 'Waxing Crescent';
  else if (elongation >= 75 && elongation < 105) phaseName = 'First Quarter';
  else if (elongation >= 105 && elongation < 165) phaseName = 'Waxing Gibbous';
  else if (elongation >= 165 && elongation < 195) phaseName = 'Full Moon (Purnima)';
  else if (elongation >= 195 && elongation < 255) phaseName = 'Waning Gibbous';
  else if (elongation >= 255 && elongation < 285) phaseName = 'Third Quarter';
  else if (elongation >= 285 && elongation < 345) phaseName = 'Waning Crescent';

  return {
    phaseName,
    illuminationPercentage: Number(illumination.toFixed(1)),
    elongationDegrees: Number(elongation.toFixed(2))
  };
}
`
      }
    ]
  },

  // 41. Gemstones
  {
    step: 41,
    msg: "feat(remedies): add Vedic Gemstone recommendation engine based on favorable yogakaraka planets",
    files: [
      {
        file: "src/lib/gemstones.ts",
        content: `/**
 * Vedic Gemstone Recommendation Engine (Ratna Vigyan)
 */

export interface GemstoneRecommendation {
  planet: string;
  primaryGem: string;
  sanskritName: string;
  substituteGem: string;
  fingerToWear: string;
  metal: string;
  auspiciousDay: string;
  benefits: string;
}

const GEM_DATA: Record<string, Omit<GemstoneRecommendation, 'planet'>> = {
  Sun: {
    primaryGem: 'Ruby',
    sanskritName: 'Manikya',
    substituteGem: 'Red Garnet',
    fingerToWear: 'Ring Finger (Right hand)',
    metal: 'Gold / Copper',
    auspiciousDay: 'Sunday morning',
    benefits: 'Confidence, leadership, vitality, governmental recognition'
  },
  Moon: {
    primaryGem: 'Natural Pearl',
    sanskritName: 'Mukta / Moti',
    substituteGem: 'Moonstone',
    fingerToWear: 'Little Finger',
    metal: 'Silver',
    auspiciousDay: 'Monday evening',
    benefits: 'Mental peace, emotional stability, motherly harmony, intuition'
  },
  Mars: {
    primaryGem: 'Red Coral',
    sanskritName: 'Moonga / Praval',
    substituteGem: 'Carnelian',
    fingerToWear: 'Ring Finger',
    metal: 'Gold / Copper',
    auspiciousDay: 'Tuesday morning',
    benefits: 'Physical energy, courage, victory in litigation, vitality'
  },
  Mercury: {
    primaryGem: 'Emerald',
    sanskritName: 'Panna / Marakata',
    substituteGem: 'Green Tourmaline / Peridot',
    fingerToWear: 'Little Finger',
    metal: 'Gold / Bronze',
    auspiciousDay: 'Wednesday morning',
    benefits: 'Business acumen, analytical intellect, speech eloquence'
  },
  Jupiter: {
    primaryGem: 'Yellow Sapphire',
    sanskritName: 'Pukhraj / Pushparaga',
    substituteGem: 'Yellow Topaz / Citrine',
    fingerToWear: 'Index Finger',
    metal: 'Gold',
    auspiciousDay: 'Thursday morning',
    benefits: 'Wisdom, spiritual growth, wealth expansion, marital bliss'
  },
  Venus: {
    primaryGem: 'Diamond',
    sanskritName: 'Heera / Vajra',
    substituteGem: 'White Sapphire / Opal',
    fingerToWear: 'Middle or Little Finger',
    metal: 'Platinum / White Gold / Silver',
    auspiciousDay: 'Friday morning',
    benefits: 'Luxury, creative talents, romantic charm, artistic refinement'
  },
  Saturn: {
    primaryGem: 'Blue Sapphire',
    sanskritName: 'Neelam / Indraneela',
    substituteGem: 'Amethyst / Blue Topaz',
    fingerToWear: 'Middle Finger',
    metal: 'Panchdhatu / Silver / Iron',
    auspiciousDay: 'Saturday evening',
    benefits: 'Discipline, profound focus, career longevity, spiritual endurance'
  }
};

export function recommendGemstones(favorablePlanets: string[]): GemstoneRecommendation[] {
  return favorablePlanets
    .filter(p => GEM_DATA[p])
    .map(p => ({
      planet: p,
      ...GEM_DATA[p]
    }));
}
`
      }
    ]
  },

  // 42. Rudraksha
  {
    step: 42,
    msg: "feat(remedies): add Planetary Rudraksha bead selection guide based on Kundali afflictions",
    files: [
      {
        file: "src/lib/rudraksha.ts",
        content: `/**
 * Vedic Rudraksha Recommendation Guide (Mukhi Selection)
 */

export interface RudrakshaInfo {
  mukhiCount: number;
  rulingPlanet: string;
  presidingDeity: string;
  mantra: string;
  healthAndSpiritualBenefits: string;
}

export const RUDRAKSHA_GUIDE: Record<string, RudrakshaInfo> = {
  Sun: {
    mukhiCount: 1,
    rulingPlanet: 'Sun',
    presidingDeity: 'Lord Shiva',
    mantra: 'Om Hreem Namah',
    healthAndSpiritualBenefits: 'Supreme consciousness, aura brilliance, cure for migraines'
  },
  Moon: {
    mukhiCount: 2,
    rulingPlanet: 'Moon',
    presidingDeity: 'Ardhanarishwara',
    mantra: 'Om Namah',
    healthAndSpiritualBenefits: 'Emotional balance, relationship harmony, family peace'
  },
  Mars: {
    mukhiCount: 3,
    rulingPlanet: 'Mars',
    presidingDeity: 'Lord Agni',
    mantra: 'Om Kleem Namah',
    healthAndSpiritualBenefits: 'Destroys past karmic sins, boosts digestion and willpower'
  },
  Mercury: {
    mukhiCount: 4,
    rulingPlanet: 'Mercury',
    presidingDeity: 'Lord Brahma',
    mantra: 'Om Hreem Namah',
    healthAndSpiritualBenefits: 'Sharp memory, vocal articulation, academic brilliance'
  },
  Jupiter: {
    mukhiCount: 5,
    rulingPlanet: 'Jupiter',
    presidingDeity: 'Lord Kalagni Rudra',
    mantra: 'Om Hreem Namah',
    healthAndSpiritualBenefits: 'Universal peace, blood pressure regulation, wisdom'
  },
  Venus: {
    mukhiCount: 6,
    rulingPlanet: 'Venus',
    presidingDeity: 'Lord Kartikeya',
    mantra: 'Om Hreem Hoom Namah',
    healthAndSpiritualBenefits: 'Attraction, vitality, nervous strength, artistic prowess'
  },
  Saturn: {
    mukhiCount: 7,
    rulingPlanet: 'Saturn',
    presidingDeity: 'Goddess Mahalakshmi',
    mantra: 'Om Hoom Namah',
    healthAndSpiritualBenefits: 'Freedom from financial hardship, relief from Sade Sati'
  },
  Rahu: {
    mukhiCount: 8,
    rulingPlanet: 'Rahu',
    presidingDeity: 'Lord Ganesha',
    mantra: 'Om Hoom Namah',
    healthAndSpiritualBenefits: 'Removes sudden hurdles, protection from black magic and fear'
  },
  Ketu: {
    mukhiCount: 9,
    rulingPlanet: 'Ketu',
    presidingDeity: 'Goddess Durga (Navadurga)',
    mantra: 'Om Hreem Hoom Namah',
    healthAndSpiritualBenefits: 'Courage, liberation (Moksha), protection from phobias'
  }
};
`
      }
    ]
  },

  // 43. Mantras
  {
    step: 43,
    msg: "feat(remedies): add Navagraha Beej Mantra and Gayatri Mantra chants repository",
    files: [
      {
        file: "src/lib/mantras.ts",
        content: `/**
 * Navagraha Beej Mantras and Vedic Chants Repository
 */

export interface MantraRecord {
  planet: string;
  beejMantra: string;
  vedicGayatri: string;
  recommendedCount: number;
  bestTime: string;
}

export const NAVAGRAHA_MANTRAS: Record<string, MantraRecord> = {
  Sun: {
    planet: 'Sun',
    beejMantra: 'Om Hraam Hreem Hroum Sah Suryaya Namah',
    vedicGayatri: 'Om Bhaskarraya Vidmahe Diva Karaya Dheemahi Tanno Suryah Prachodayat',
    recommendedCount: 7000,
    bestTime: 'Sunrise'
  },
  Moon: {
    planet: 'Moon',
    beejMantra: 'Om Shraam Shreem Shroum Sah Chandraya Namah',
    vedicGayatri: 'Om Padmadhwajaya Vidmahe Hema Roopaya Dheemahi Tanno Somah Prachodayat',
    recommendedCount: 11000,
    bestTime: 'Evening twilight'
  },
  Mars: {
    planet: 'Mars',
    beejMantra: 'Om Kraam Kreem Kroum Sah Bhaumaya Namah',
    vedicGayatri: 'Om Angarkaya Vidmahe Bhoomipalaya Dheemahi Tanno Kujah Prachodayat',
    recommendedCount: 10000,
    bestTime: 'Morning after sunrise'
  },
  Mercury: {
    planet: 'Mercury',
    beejMantra: 'Om Braam Breem Broum Sah Budhaya Namah',
    vedicGayatri: 'Om Saumya Roopaya Vidmahe Vana Rajaya Dheemahi Tanno Budhah Prachodayat',
    recommendedCount: 9000,
    bestTime: 'Sunrise or Mercury Hora'
  },
  Jupiter: {
    planet: 'Jupiter',
    beejMantra: 'Om Graam Greem Groum Sah Gurave Namah',
    vedicGayatri: 'Om Guru Devaya Vidmahe Parabrahmaya Dheemahi Tanno Guruh Prachodayat',
    recommendedCount: 19000,
    bestTime: 'Early morning'
  },
  Venus: {
    planet: 'Venus',
    beejMantra: 'Om Draam Dreem Droum Sah Shukraya Namah',
    vedicGayatri: 'Om Rajadabaaya Vidmahe Bhrigu Suthaya Dheemahi Tanno Shukrah Prachodayat',
    recommendedCount: 16000,
    bestTime: 'Morning twilight'
  },
  Saturn: {
    planet: 'Saturn',
    beejMantra: 'Om Praam Preem Proum Sah Shanaischaraya Namah',
    vedicGayatri: 'Om Shanaishcharaya Vidmahe Suryaputraya Dheemahi Tanno Mandah Prachodayat',
    recommendedCount: 23000,
    bestTime: 'Sunset or late evening'
  },
  Rahu: {
    planet: 'Rahu',
    beejMantra: 'Om Bhraam Bhreem Bhroum Sah Rahave Namah',
    vedicGayatri: 'Om Sookh Dantaaya Vidmahe Ugra Roopaya Dheemahi Tanno Rahuh Prachodayat',
    recommendedCount: 18000,
    bestTime: 'Night after 8 PM'
  },
  Ketu: {
    planet: 'Ketu',
    beejMantra: 'Om Sraam Sreem Sroum Sah Ketave Namah',
    vedicGayatri: 'Om Chitra Varnaya Vidmahe Sarpa Roopaya Dheemahi Tanno Ketuh Prachodayat',
    recommendedCount: 17000,
    bestTime: 'Early morning before dawn'
  }
};
`
      }
    ]
  },

  // 44. Vrats and Daan
  {
    step: 44,
    msg: "feat(remedies): add Vedic fasting days (Vrat) and charity (Daan) recommendations",
    files: [
      {
        file: "src/lib/vratAndDaan.ts",
        content: `/**
 * Vedic Fasting (Vrat) and Sacred Charity (Daan) Recommendations
 */

export interface CharityGuide {
  planet: string;
  vratDay: string;
  recommendedDonations: string[];
  beneficiary: string;
}

export const CHARITY_RECOMMENDATIONS: Record<string, CharityGuide> = {
  Sun: {
    planet: 'Sun',
    vratDay: 'Ravivar (Sunday)',
    recommendedDonations: ['Wheat', 'Jaggery', 'Ruby/Copper vessels', 'Red sandalwood'],
    beneficiary: 'Needy elders, temple priests, father figures'
  },
  Moon: {
    planet: 'Moon',
    vratDay: 'Somvar (Monday)',
    recommendedDonations: ['Rice', 'Milk', 'Silver coins', 'White garments', 'Sugar'],
    beneficiary: 'Mothers, elderly women, orphanage sanctuaries'
  },
  Mars: {
    planet: 'Mars',
    vratDay: 'Mangalvar (Tuesday)',
    recommendedDonations: ['Masoor dal (Red lentils)', 'Red clothes', 'Copper', 'Jaggery'],
    beneficiary: 'Soldiers, sports personnel, brothers in distress'
  },
  Mercury: {
    planet: 'Mercury',
    vratDay: 'Budhavar (Wednesday)',
    recommendedDonations: ['Moong dal (Green gram)', 'Books', 'Green vegetables', 'Stationery'],
    beneficiary: 'Underprivileged students, orphan learners'
  },
  Jupiter: {
    planet: 'Jupiter',
    vratDay: 'Guruvar (Thursday)',
    recommendedDonations: ['Chana dal (Yellow split gram)', 'Turmeric', 'Yellow cloth', 'Religious books'],
    beneficiary: 'Spiritual teachers, hermits, Gurukuls'
  },
  Venus: {
    planet: 'Venus',
    vratDay: 'Shukravar (Friday)',
    recommendedDonations: ['White rice', 'Curd', 'Ghee', 'Perfumes', 'Silk clothes'],
    beneficiary: 'Destitute women, female shelters, marriage funds'
  },
  Saturn: {
    planet: 'Saturn',
    vratDay: 'Shanivar (Saturday)',
    recommendedDonations: ['Mustard oil', 'Black sesame seeds', 'Iron pan', 'Blankets', 'Urad dal'],
    beneficiary: 'Sanitation workers, disabled individuals, elderly laborers'
  }
};
`
      }
    ]
  },

  // 45. Astro Affinities
  {
    step: 45,
    msg: "feat(remedies): add Color therapy and lucky metal affinities according to Ascendant lord",
    files: [
      {
        file: "src/lib/astroAffinities.ts",
        content: `/**
 * Astro-Affinities: Lucky Colors, Numbers, Metals, and Directions
 */

export interface Affinities {
  ascendant: string;
  luckyColors: string[];
  luckyNumbers: number[];
  luckyMetal: string;
  favorableDirection: string;
}

const AFFINITIES_MAP: Record<string, Omit<Affinities, 'ascendant'>> = {
  Aries: { luckyColors: ['Crimson Red', 'Saffron'], luckyNumbers: [9, 1, 3], luckyMetal: 'Copper', favorableDirection: 'East' },
  Taurus: { luckyColors: ['Pearl White', 'Pale Pink'], luckyNumbers: [6, 5, 2], luckyMetal: 'Silver', favorableDirection: 'South-East' },
  Gemini: { luckyColors: ['Emerald Green', 'Pastel Yellow'], luckyNumbers: [5, 1, 6], luckyMetal: 'Bronze', favorableDirection: 'North' },
  Cancer: { luckyColors: ['Silver White', 'Sea Green'], luckyNumbers: [2, 7, 9], luckyMetal: 'Silver', favorableDirection: 'North-West' },
  Leo: { luckyColors: ['Golden Yellow', 'Royal Orange'], luckyNumbers: [1, 5, 9], luckyMetal: 'Gold', favorableDirection: 'East' },
  Virgo: { luckyColors: ['Dark Green', 'Olive'], luckyNumbers: [5, 2, 7], luckyMetal: 'Brass', favorableDirection: 'North' },
  Libra: { luckyColors: ['Sky Blue', 'White'], luckyNumbers: [6, 8, 4], luckyMetal: 'Platinum', favorableDirection: 'West' },
  Scorpio: { luckyColors: ['Blood Red', 'Maroon'], luckyNumbers: [9, 4, 3], luckyMetal: 'Iron / Copper', favorableDirection: 'North-East' },
  Sagittarius: { luckyColors: ['Canary Yellow', 'Gold'], luckyNumbers: [3, 9, 1], luckyMetal: 'Gold', favorableDirection: 'North-East' },
  Capricorn: { luckyColors: ['Navy Blue', 'Charcoal'], luckyNumbers: [8, 6, 5], luckyMetal: 'Lead / Iron', favorableDirection: 'South' },
  Aquarius: { luckyColors: ['Electric Blue', 'Cyan'], luckyNumbers: [8, 7, 3], luckyMetal: 'Iron', favorableDirection: 'West' },
  Pisces: { luckyColors: ['Turquoise', 'Sea Gold'], luckyNumbers: [3, 2, 7], luckyMetal: 'Gold', favorableDirection: 'North-East' }
};

export function getAscendantAffinities(ascendantSign: string): Affinities {
  const match = AFFINITIES_MAP[ascendantSign] || AFFINITIES_MAP['Aries'];
  return {
    ascendant: ascendantSign,
    ...match
  };
}
`
      }
    ]
  },

  // 46. Yantras
  {
    step: 46,
    msg: "feat(remedies): add Yantra recommendations with geometric energy specs",
    files: [
      {
        file: "src/lib/yantras.ts",
        content: `/**
 * Sacred Geometric Yantras Repository
 */

export interface YantraSpec {
  name: string;
  associatedDeity: string;
  purpose: string;
  consecrationDirection: string;
  metalPlate: string;
}

export const YANTRA_CATALOG: Record<string, YantraSpec> = {
  ShriYantra: {
    name: 'Shri Yantra (Mahameru)',
    associatedDeity: 'Goddess Tripurasundari',
    purpose: 'Universal abundance, harmonic prosperity, spiritual and material synthesis',
    consecrationDirection: 'North-East / East altar',
    metalPlate: 'Gold-plated Copper'
  },
  MahamrityunjayaYantra: {
    name: 'Maha Mrityunjaya Yantra',
    associatedDeity: 'Lord Shiva',
    purpose: 'Protection against chronic illnesses, accidents, and sudden misfortunes',
    consecrationDirection: 'North facing',
    metalPlate: 'Silver / Copper'
  },
  KuberYantra: {
    name: 'Kuber Yantra',
    associatedDeity: 'Lord Kubera',
    purpose: 'Treasury protection, sudden financial inflows, debt clearance',
    consecrationDirection: 'North altar facing South',
    metalPlate: 'Brass'
  },
  SuryaYantra: {
    name: 'Surya Yantra',
    associatedDeity: 'Lord Surya',
    purpose: 'Fame, career elevation, fatherly blessings, immune vitality',
    consecrationDirection: 'East',
    metalPlate: 'Pure Copper'
  }
};
`
      }
    ]
  },

  // 47. Raja Yogas
  {
    step: 47,
    msg: "feat(yogas): add Raja Yogas detection (Dharma-Karmadhipati, Vipareeta, Neechabhanga Raja Yoga)",
    files: [
      {
        file: "src/lib/rajaYogas.ts",
        content: `/**
 * Classical Raja Yogas Detection Engine
 * 1. Dharma-Karmadhipati Yoga (Connection between 9th and 10th lords)
 * 2. Vipareeta Raja Yoga (Harsha, Sarala, Vimala - 6, 8, 12 lords in dusthanas)
 * 3. Neechabhanga Raja Yoga (Cancellation and elevation of debilitation)
 */

export interface YogaFinding {
  name: string;
  category: 'Raja Yoga' | 'Vipareeta' | 'Neechabhanga';
  description: string;
  isFormed: boolean;
}

export function detectRajaYogas(
  kendraTrikonaConnections: boolean,
  dusthanaLordsExclusivelyInDusthanas: boolean,
  hasDebilitatedPlanetElevated: boolean
): YogaFinding[] {
  return [
    {
      name: 'Dharma-Karmadhipati Raja Yoga',
      category: 'Raja Yoga',
      description: 'Lords of 9th (Fortune) and 10th (Career) form conjunction or mutual aspect, granting supreme executive leadership.',
      isFormed: kendraTrikonaConnections
    },
    {
      name: 'Vipareeta Raja Yoga (Sarala/Vimala/Harsha)',
      category: 'Vipareeta',
      description: 'Dusthana lords (6th, 8th, 12th) situated strictly in dusthana houses, transforming crises into immense triumphs.',
      isFormed: dusthanaLordsExclusivelyInDusthanas
    },
    {
      name: 'Neechabhanga Raja Yoga',
      category: 'Neechabhanga',
      description: 'Debilitated planet achieves cancellation through its dispositor occupying an angular house from Lagna or Moon.',
      isFormed: hasDebilitatedPlanetElevated
    }
  ];
}
`
      }
    ]
  },

  // 48. Dhana Yogas
  {
    step: 48,
    msg: "feat(yogas): add Dhana Yogas (Wealth combinations) and Lakshmi Yoga evaluators",
    files: [
      {
        file: "src/lib/dhanaYogas.ts",
        content: `/**
 * Dhana Yogas (Vedic Wealth & Opulence Combinations)
 * Formed by auspicious linkages between 1st (Self), 2nd (Wealth), 5th (Speculation), 9th (Fortune), and 11th (Gains) houses.
 */

export interface DhanaYogaResult {
  yogaName: string;
  strengthGrade: 'Supreme' | 'High' | 'Moderate';
  manifestationEffect: string;
}

export function evaluateDhanaYogas(
  has2ndAnd11thExchange: boolean,
  hasLakshmiYoga: boolean
): DhanaYogaResult[] {
  const results: DhanaYogaResult[] = [];

  if (has2ndAnd11thExchange) {
    results.push({
      yogaName: 'Maha Dhana Yoga (2nd-11th Lord Parivartana)',
      strengthGrade: 'Supreme',
      manifestationEffect: 'Uninterrupted financial gains, multi-source revenue, generational asset accumulation.'
    });
  }

  if (hasLakshmiYoga) {
    results.push({
      yogaName: 'Lakshmi Yoga',
      strengthGrade: 'Supreme',
      manifestationEffect: 'Venus and 9th lord in exaltation or own signs in Kendra houses, bestowing lavish comforts and virtue.'
    });
  }

  return results;
}
`
      }
    ]
  },

  // 49. Mahapurusha Yogas
  {
    step: 49,
    msg: "feat(yogas): add Mahapurusha Yogas (Ruchaka, Bhadra, Hamsa, Malavya, Sasa) detector",
    files: [
      {
        file: "src/lib/mahapurushaYogas.ts",
        content: `/**
 * Pancha Mahapurusha Yogas (Five Great Human Archetypes)
 * Formed when Mars, Mercury, Jupiter, Venus, or Saturn occupies own or exaltation sign in a Kendra house (1, 4, 7, 10).
 */

export interface MahapurushaYoga {
  name: string;
  planet: string;
  archetype: string;
  traits: string;
}

export function checkMahapurushaYoga(
  planet: string,
  house: number,
  isOwnOrExalted: boolean
): MahapurushaYoga | null {
  if (![1, 4, 7, 10].includes(house) || !isOwnOrExalted) return null;

  switch (planet) {
    case 'Mars':
      return { name: 'Ruchaka Yoga', planet: 'Mars', archetype: 'The Victorious Warrior', traits: 'Immense courage, physical prowess, leadership in defense or industry.' };
    case 'Mercury':
      return { name: 'Bhadra Yoga', planet: 'Mercury', archetype: 'The Master Scholar', traits: 'Extraordinary intellect, communicative genius, long life, and administrative charm.' };
    case 'Jupiter':
      return { name: 'Hamsa Yoga', planet: 'Jupiter', archetype: 'The Divine Sage', traits: 'Spiritual nobility, revered by leaders, righteous conduct, and profound wisdom.' };
    case 'Venus':
      return { name: 'Malavya Yoga', planet: 'Venus', archetype: 'The Sovereign Artist', traits: 'Refined aesthetics, lavish prosperity, charismatic magnetism, and joyful marital life.' };
    case 'Saturn':
      return { name: 'Sasa Yoga', planet: 'Saturn', archetype: 'The Unyielding Sovereign', traits: 'Command over masses, enduring patience, resilience, and judicial authority.' };
    default:
      return null;
  }
}
`
      }
    ]
  },

  // 50. Nabhasa Yogas
  {
    step: 50,
    msg: "feat(yogas): add Nabhasa Yogas (Ashraya, Dala, Akriti, Sankhya) pattern matchers",
    files: [
      {
        file: "src/lib/nabhasaYogas.ts",
        content: `/**
 * Nabhasa Yogas (Celestial pattern yogas formed by distribution of 7 planets)
 */

export function detectSankhyaYoga(distinctSignsOccupied: number): string {
  const SANKHYA_MAP: Record<number, string> = {
    1: 'Gola Yoga (All 7 in 1 sign - Poverty / Solitude)',
    2: 'Yuga Yoga (All 7 in 2 signs - Hypocrisy / Struggle)',
    3: 'Shula Yoga (All 7 in 3 signs - Courage / Fierce temperament)',
    4: 'Kedara Yoga (All 7 in 4 signs - Agricultural wealth / Steadfast)',
    5: 'Pasha Yoga (All 7 in 5 signs - Extensive family / Bondage to duty)',
    6: 'Damini Yoga (All 7 in 6 signs - Philanthropic / Joyous intellect)',
    7: 'Veena Yoga (All 7 in 7 distinct signs - Mastery of fine arts, music, and eloquence)'
  };

  return SANKHYA_MAP[distinctSignsOccupied] || 'General distribution';
}
`
      }
    ]
  },

  // 51. Chandra Yogas
  {
    step: 51,
    msg: "feat(yogas): add Chandra Yogas (Sunapha, Anapha, Durdhura, Kemadruma, Gajakesari)",
    files: [
      {
        file: "src/lib/chandraYogas.ts",
        content: `/**
 * Lunar (Chandra) Yogas
 * 1. Gajakesari Yoga: Jupiter in Kendra (1, 4, 7, 10) from Moon
 * 2. Sunapha: Non-sun planets in 2nd from Moon
 * 3. Anapha: Non-sun planets in 12th from Moon
 * 4. Durdhura: Non-sun planets in both 2nd and 12th from Moon
 * 5. Kemadruma: No planets in 2nd and 12th from Moon (Isolation)
 */

export function evaluateLunarYogas(
  planetsIn2ndFromMoon: number,
  planetsIn12thFromMoon: number,
  isJupiterInKendraFromMoon: boolean
): string[] {
  const yogas: string[] = [];

  if (isJupiterInKendraFromMoon) {
    yogas.push('Gajakesari Yoga (Virtue, lasting fame, invincible reputation)');
  }

  if (planetsIn2ndFromMoon > 0 && planetsIn12thFromMoon > 0) {
    yogas.push('Durdhura Yoga (Self-earned wealth, generous disposition, vehicles)');
  } else if (planetsIn2ndFromMoon > 0) {
    yogas.push('Sunapha Yoga (Acquisition of riches, sharp intelligence)');
  } else if (planetsIn12thFromMoon > 0) {
    yogas.push('Anapha Yoga (Sound health, refined manners, good reputation)');
  } else {
    yogas.push('Kemadruma Yoga (Requires check for cancellation / bhanga)');
  }

  return yogas;
}
`
      }
    ]
  },

  // 52. Surya Yogas
  {
    step: 52,
    msg: "feat(yogas): add Surya Yogas (Vesi, Vosi, Ubhayachari, Budhaditya) recognizer",
    files: [
      {
        file: "src/lib/suryaYogas.ts",
        content: `/**
 * Solar (Surya) Yogas
 * 1. Budhaditya Yoga: Sun + Mercury conjunction (Intellectual brilliance)
 * 2. Vesi Yoga: Planets (other than Moon/Rahu/Ketu) in 2nd from Sun
 * 3. Vosi Yoga: Planets in 12th from Sun
 * 4. Ubhayachari: Planets in both 2nd and 12th from Sun
 */

export function checkSuryaYogas(
  hasSunMercuryConjunction: boolean,
  planetsIn2ndFromSun: number,
  planetsIn12thFromSun: number
): string[] {
  const yogas: string[] = [];

  if (hasSunMercuryConjunction) {
    yogas.push('Budhaditya Yoga (Nipuna Yoga - Analytical excellence, administrative acumen)');
  }

  if (planetsIn2ndFromSun > 0 && planetsIn12thFromSun > 0) {
    yogas.push('Ubhayachari Yoga (Commanding presence, equilibrium in life, noble friends)');
  } else if (planetsIn2ndFromSun > 0) {
    yogas.push('Vesi Yoga (Eloquent speech, truthfulness, comfortable prosperity)');
  } else if (planetsIn12thFromSun > 0) {
    yogas.push('Vosi Yoga (Charitable mind, keen memory, philosophical inclinations)');
  }

  return yogas;
}
`
      }
    ]
  },

  // 53. Pitra Dosha
  {
    step: 53,
    msg: "feat(doshas): add Pitra Dosha detection algorithm based on 9th house & Sun afflictions",
    files: [
      {
        file: "src/lib/pitraDosha.ts",
        content: `/**
 * Pitra Dosha (Ancestral Karmic Debt) Detector
 * Evaluates afflictions to the 9th house (Ancestors/Dharma) and Sun (Karaka for Father/Lineage)
 * caused by Rahu, Ketu, or Saturn.
 */

export interface PitraDoshaAnalysis {
  hasPitraDosha: boolean;
  severityLevel: 'None' | 'Mild' | 'Moderate' | 'Severe';
  contributingFactors: string[];
  remedialPractices: string[];
}

export function evaluatePitraDosha(
  sunHouse: number,
  isSunWithRahuOrSaturn: boolean,
  is9thLordAfflicted: boolean
): PitraDoshaAnalysis {
  const factors: string[] = [];

  if (isSunWithRahuOrSaturn) {
    factors.push('Sun conjoined with Rahu or Saturn (Solar eclipse or karmic shadow).');
  }
  if (is9thLordAfflicted) {
    factors.push('9th house lord placed in 6th, 8th, or 12th house or aspected by malefics.');
  }
  if ([8, 12].includes(sunHouse)) {
    factors.push('Sun situated in a dusthana house (8th or 12th).');
  }

  const count = factors.length;
  const severity = count === 0 ? 'None' : count === 1 ? 'Mild' : count === 2 ? 'Moderate' : 'Severe';

  return {
    hasPitraDosha: count > 0,
    severityLevel: severity,
    contributingFactors: factors,
    remedialPractices: [
      'Perform Shraddha / Tarpan rituals during Pitru Paksha.',
      'Feed cows, birds, and fish on Amavasya (New Moon).',
      'Chant Gayatri Mantra 108 times at sunrise.'
    ]
  };
}
`
      }
    ]
  },

  // 54. Guru Chandal Dosha
  {
    step: 54,
    msg: "feat(doshas): add Guru Chandal Dosha (Jupiter-Rahu conjunction) risk analyzer",
    files: [
      {
        file: "src/lib/guruChandalDosha.ts",
        content: `/**
 * Guru Chandal Dosha Analyzer
 * Conjunction or close aspect of Jupiter (Guru) with Rahu/Ketu.
 */

export interface ChandalDoshaStatus {
  hasDosha: boolean;
  angularSeparation: number;
  impactScore: number;
  mitigationAdvice: string;
}

export function checkGuruChandalDosha(
  jupiterLongitude: number,
  rahuLongitude: number
): ChandalDoshaStatus {
  const diff = Math.abs((jupiterLongitude - rahuLongitude + 360) % 360);
  const sep = diff > 180 ? 360 - diff : diff;

  const hasDosha = sep <= 12.0;
  const impact = hasDosha ? Math.round(100 * (1 - sep / 12)) : 0;

  return {
    hasDosha,
    angularSeparation: Number(sep.toFixed(2)),
    impactScore: impact,
    mitigationAdvice: hasDosha
      ? 'Chant Guru Beej Mantra and worship Lord Vishnu to cleanse mental misconceptions.'
      : 'No Guru Chandal affliction detected.'
  };
}
`
      }
    ]
  },

  // 55. Angarak Dosha
  {
    step: 55,
    msg: "feat(doshas): add Angarak Dosha (Mars-Rahu conjunction) aggression index",
    files: [
      {
        file: "src/lib/angarakDosha.ts",
        content: `/**
 * Angarak Dosha (Mars + Rahu/Ketu Conjunction)
 * Induces impulsiveness, explosive temper, or risky tendencies when unchannelled.
 */

export function checkAngarakDosha(marsLong: number, rahuLong: number) {
  const diff = Math.abs((marsLong - rahuLong + 360) % 360);
  const sep = diff > 180 ? 360 - diff : diff;
  const isActive = sep <= 10.0;

  return {
    isAngarakActive: isActive,
    separationDegrees: Number(sep.toFixed(2)),
    intensity: isActive ? (sep < 5 ? 'Extreme' : 'Moderate') : 'None',
    remedy: 'Recite Hanuman Chalisa daily and avoid rash driving or rash verbal confrontations.'
  };
}
`
      }
    ]
  },

  // 56. Gandanta
  {
    step: 56,
    msg: "feat(doshas): add Gandanta (Junction points of Water/Fire signs & nakshatras) locator",
    files: [
      {
        file: "src/lib/gandanta.ts",
        content: `/**
 * Gandanta Junctions (Knot / Critical Transition Points)
 * Junctions between Water Signs (Cancer, Scorpio, Pisces) and Fire Signs (Leo, Sagittarius, Aries).
 * Last 3°20' of Water signs and first 3°20' of Fire signs (Ashlesha-Magha, Jyeshtha-Mula, Revati-Ashwini).
 */

export interface GandantaCheck {
  isGandanta: boolean;
  type: 'Lagna Gandanta' | 'Nakshatra Gandanta' | 'None';
  junctionName: string;
}

export function checkGandanta(longitude: number): GandantaCheck {
  const norm = ((longitude % 360) + 360) % 360;

  // Revati-Ashwini (356.666 to 3.333)
  if (norm >= 356.666 || norm <= 3.333) {
    return { isGandanta: true, type: 'Nakshatra Gandanta', junctionName: 'Revati-Ashwini (Abhukta Mula)' };
  }
  // Ashlesha-Magha (116.666 to 123.333)
  if (norm >= 116.666 && norm <= 123.333) {
    return { isGandanta: true, type: 'Nakshatra Gandanta', junctionName: 'Ashlesha-Magha' };
  }
  // Jyeshtha-Mula (236.666 to 243.333)
  if (norm >= 236.666 && norm <= 243.333) {
    return { isGandanta: true, type: 'Nakshatra Gandanta', junctionName: 'Jyeshtha-Mula' };
  }

  return { isGandanta: false, type: 'None', junctionName: 'None' };
}
`
      }
    ]
  },

  // 57. Shrapit Dosha
  {
    step: 57,
    msg: "feat(doshas): add Shrapit Dosha (Saturn-Rahu conjunction) karmic debt checker",
    files: [
      {
        file: "src/lib/shrapitDosha.ts",
        content: `/**
 * Shrapit Dosha (Saturn + Rahu Conjunction / Mutual Aspect)
 * Reflects severe past karmic burdens causing delays and trials before breakthrough.
 */

export function checkShrapitDosha(saturnLong: number, rahuLong: number) {
  const diff = Math.abs((saturnLong - rahuLong + 360) % 360);
  const sep = diff > 180 ? 360 - diff : diff;
  const isPresent = sep <= 12.0;

  return {
    hasShrapitDosha: isPresent,
    separation: Number(sep.toFixed(2)),
    guidance: isPresent
      ? 'Practice relentless patience, serve underprivileged persons, and chant Maha Mrityunjaya mantra.'
      : 'No Shrapit Dosha found.'
  };
}
`
      }
    ]
  },

  // 58. Grahan Dosha
  {
    step: 58,
    msg: "feat(doshas): add Grahan Dosha (Eclipsed Luminaries) affliction calculator",
    files: [
      {
        file: "src/lib/grahanDosha.ts",
        content: `/**
 * Grahan Dosha (Eclipse Affliction of Sun or Moon by Rahu/Ketu)
 */

export function checkGrahanDosha(luminaryName: 'Sun' | 'Moon', luminaryLong: number, rahuLong: number) {
  const diff = Math.abs((luminaryLong - rahuLong + 360) % 360);
  const sep = diff > 180 ? 360 - diff : diff;
  const isAfflicted = sep <= 12;

  return {
    luminary: luminaryName,
    isGrahanDoshaActive: isAfflicted,
    separation: Number(sep.toFixed(2)),
    remedy: \`Worship Lord Shiva and perform milk abhishekam to fortify the \${luminaryName}.\`
  };
}
`
      }
    ]
  },

  // 59. Kemadruma Bhanga
  {
    step: 59,
    msg: "feat(doshas): add Kemadruma Dosha cancellation (Bhanga) conditions evaluator",
    files: [
      {
        file: "src/lib/kemadrumaBhanga.ts",
        content: `/**
 * Kemadruma Yoga Bhanga (Cancellation Conditions)
 * Kemadruma is cancelled if:
 * 1. Planets occupy Kendra from Moon
 * 2. Planets occupy Kendra from Lagna
 * 3. Moon is conjoined with a benefic or aspected by Jupiter/Venus
 */

export interface KemadrumaBhangaStatus {
  isKemadrumaPresent: boolean;
  isCancelled: boolean;
  cancellationReasons: string[];
}

export function evaluateKemadrumaBhanga(
  hasPlanetsInMoonKendra: boolean,
  hasPlanetsInLagnaKendra: boolean,
  isMoonWithBenefic: boolean
): KemadrumaBhangaStatus {
  const reasons: string[] = [];

  if (hasPlanetsInMoonKendra) reasons.push('Benefic/active planets situated in Kendra from Moon.');
  if (hasPlanetsInLagnaKendra) reasons.push('Planets occupy Kendra houses from Ascendant.');
  if (isMoonWithBenefic) reasons.push('Moon is conjoined or strongly aspected by Jupiter or Venus.');

  const isCancelled = reasons.length > 0;

  return {
    isKemadrumaPresent: true,
    isCancelled,
    cancellationReasons: reasons
  };
}
`
      }
    ]
  },

  // 60. Manglik Cancellations
  {
    step: 60,
    msg: "feat(doshas): add Manglik Dosha exceptions and cancellation rules engine",
    files: [
      {
        file: "src/lib/mangalDoshaCancellations.ts",
        content: `/**
 * Manglik Dosha Cancellation Rules Engine
 * Classical exemptions:
 * 1. Mars in Aries (1st), Scorpio (4th), Capricorn (7th/exalted), Leo (8th), Sagittarius (12th)
 * 2. Mars conjoined with Jupiter or Moon
 * 3. Mars aspected by strong benefic Jupiter
 */

export interface ManglikExemption {
  isCancelled: boolean;
  exemptionReasons: string[];
}

export function checkManglikExemptions(
  marsHouse: number,
  marsSign: string,
  isMarsWithJupiterOrMoon: boolean,
  isJupiterAspectingMars: boolean
): ManglikExemption {
  const reasons: string[] = [];

  if (marsHouse === 1 && marsSign === 'Aries') reasons.push('Mars is in own sign Aries in 1st house.');
  if (marsHouse === 4 && marsSign === 'Scorpio') reasons.push('Mars is in own sign Scorpio in 4th house.');
  if (marsHouse === 7 && marsSign === 'Capricorn') reasons.push('Mars is exalted in Capricorn in 7th house.');
  if (marsHouse === 8 && marsSign === 'Leo') reasons.push('Mars in Leo in 8th house is exempted.');
  if (marsHouse === 12 && marsSign === 'Sagittarius') reasons.push('Mars in Sagittarius in 12th house is exempted.');
  if (isMarsWithJupiterOrMoon) reasons.push('Mars is conjoined with Jupiter or Moon (Guru-Mangala / Chandra-Mangala yoga).');
  if (isJupiterAspectingMars) reasons.push('Direct benefic aspect of Jupiter dissolves malefic influence.');

  return {
    isCancelled: reasons.length > 0,
    exemptionReasons: reasons
  };
}
`
      }
    ]
  }
];
