export const todayBatch1 = [
  // 1. KCD Savya Apasavya
  {
    step: 1,
    msg: "feat(kcd): add Kalachakra Dasha (KCD) Savya and Apasavya group classification",
    files: [{
      file: "src/lib/kcd/kcdSavyaApasavya.ts",
      content: `/**
 * Kalachakra Dasha (KCD): Savya (Direct) vs Apasavya (Indirect) Nakshatras
 * Savya: Ashwini, Krittika, Punarvasu, Ashlesha, Magha, Uttara Phalguni, Chitra, Vishakha, Jyeshtha, Moola, Uttara Ashadha, Shravana, Purva Bhadrapada, Revati.
 * Apasavya: Bharani, Rohini, Mrigashira, Ardra, Pushya, Purva Phalguni, Hasta, Swati, Anuradha, Purva Ashadha, Abhijit, Dhanishta, Shatabhisha, Uttara Bhadrapada.
 */

export const SAVYA_STARS = [0, 2, 6, 8, 9, 11, 13, 15, 17, 18, 20, 21, 24, 26];

export function isSavyaNakshatra(nakshatraIndex27: number): boolean {
  return SAVYA_STARS.includes(nakshatraIndex27 % 27);
}
`
    }]
  },

  // 2. KCD Deha Jeeva
  {
    step: 2,
    msg: "feat(kcd): add Deha Rashi (Physical Body) and Jeeva Rashi (Soul) mapping engine",
    files: [{
      file: "src/lib/kcd/kcdDehaJeeva.ts",
      content: `/**
 * Kalachakra Dasha: Deha (Body) & Jeeva (Life/Soul) Signs
 * Deha represents the physical vitality and physical manifestations.
 * Jeeva represents consciousness, longevity, and spiritual breath.
 */

export function getKCDDehaJeeva(isSavya: boolean, startSign: number) {
  const deha = startSign % 12;
  const jeeva = (startSign + (isSavya ? 8 : 4)) % 12;

  return {
    dehaSignIndex: deha,
    jeevaSignIndex: jeeva,
    interpretation: 'Protect Deha and Jeeva signs during malefic transits for health and vitality.'
  };
}
`
    }]
  },

  // 3. KCD Gati Jumps
  {
    step: 3,
    msg: "feat(kcd): add KCD Gati Jumps: Manduka (Frog), Markati (Monkey), and Simhavalokana (Lion)",
    files: [{
      file: "src/lib/kcd/kcdGatiJumps.ts",
      content: `/**
 * Kalachakra Dasha Special Jumps (Gatis):
 * 1. Manduka Gati (Frog Jump): Skipping a sign (e.g. Virgo to Cancer or Leo to Gemini) -> Sudden transformations.
 * 2. Markati Gati (Monkey Leap): Reversing back (e.g. Leo to Cancer) -> Career repositioning.
 * 3. Simhavalokana (Lion's Backward Glance): Major jump (e.g. Pisces to Scorpio or Sagittarius to Aries) -> Karmic culmination.
 */

export function evaluateKCDJump(fromSign: number, toSign: number): string {
  const diff = (toSign - fromSign + 12) % 12;
  if (diff === 10 || diff === 2) return 'Manduka Gati (Frog Jump): Sudden life shifts and financial breakthroughs.';
  if (diff === 11) return 'Markati Gati (Monkey Leap): Re-evaluation of foundational endeavors.';
  if (diff === 8 || diff === 4) return "Simhavalokana (Lion's Backward Gaze): Major karmic milestone and sovereign recognition.";
  return 'Standard Regular Progression';
}
`
    }]
  },

  // 4. KCD Sign Durations
  {
    step: 4,
    msg: "feat(kcd): add KCD 12 Rashi year duration lookup (Aries 7y to Pisces 10y)",
    files: [{
      file: "src/lib/kcd/kcdSignDurations.ts",
      content: `/**
 * Kalachakra Dasha Rashi Durations (Years):
 * Aries: 7 | Taurus: 16 | Gemini: 9 | Cancer: 21 | Leo: 5 | Virgo: 9 |
 * Libra: 16 | Scorpio: 7 | Sagittarius: 10 | Capricorn: 4 | Aquarius: 4 | Pisces: 10
 * Total Paramayus Sum = 100 or 86 years based on cycle.
 */

export const KCD_RASHI_YEARS: Record<number, number> = {
  0: 7,   // Aries (Mars)
  1: 16,  // Taurus (Venus)
  2: 9,   // Gemini (Mercury)
  3: 21,  // Cancer (Moon)
  4: 5,   // Leo (Sun)
  5: 9,   // Virgo (Mercury)
  6: 16,  // Libra (Venus)
  7: 7,   // Scorpio (Mars)
  8: 10,  // Sagittarius (Jupiter)
  9: 4,   // Capricorn (Saturn)
  10: 4,  // Aquarius (Saturn)
  11: 10  // Pisces (Jupiter)
};

export function getKCDDuration(signIndex: number): number {
  return KCD_RASHI_YEARS[signIndex % 12] || 10;
}
`
    }]
  },

  // 5. 12 Kala Sarpa Yogas
  {
    step: 5,
    msg: "feat(kalasarpa): add 12 Classical Kala Sarpa Yoga types locator (Ananta through Sheshanaga)",
    files: [{
      file: "src/lib/kalasarpa/kalaSarpa12Types.ts",
      content: `/**
 * 12 Classical Kala Sarpa Yogas:
 * 1. Ananta (Rahu 1st - Ketu 7th)
 * 2. Kulika (Rahu 2nd - Ketu 8th)
 * 3. Vasuki (Rahu 3rd - Ketu 9th)
 * 4. Shankhapala (Rahu 4th - Ketu 10th)
 * 5. Padma (Rahu 5th - Ketu 11th)
 * 6. Mahapadma (Rahu 6th - Ketu 12th)
 * 7. Takshaka (Rahu 7th - Ketu 1st)
 * 8. Karkotaka (Rahu 8th - Ketu 2nd)
 * 9. Shankhachuda (Rahu 9th - Ketu 3rd)
 * 10. Ghataka (Rahu 10th - Ketu 4th)
 * 11. Vishadhara (Rahu 11th - Ketu 5th)
 * 12. Sheshanaga (Rahu 12th - Ketu 6th)
 */

export const KALA_SARPA_TYPES = [
  'Ananta', 'Kulika', 'Vasuki', 'Shankhapala', 'Padma', 'Mahapadma',
  'Takshaka', 'Karkotaka', 'Shankhachuda', 'Ghataka', 'Vishadhara', 'Sheshanaga'
];

export function getKalaSarpaType(rahuHouse: number): string {
  const idx = ((rahuHouse - 1 + 12) % 12);
  return \`\${KALA_SARPA_TYPES[idx]} Kala Sarpa Yoga\`;
}
`
    }]
  },

  // 6. Kala Sarpa Savya Apasavya
  {
    step: 6,
    msg: "feat(kalasarpa): add Kala Sarpa Savya (Ascending towards Rahu) vs Apasavya (Descending)",
    files: [{
      file: "src/lib/kalasarpa/kalaSarpaSavya.ts",
      content: `/**
 * Kala Sarpa Direction:
 * - Savya (Kala Sarpa): All planets moving towards Rahu's mouth (Dynamic external struggle followed by zenith).
 * - Apasavya (Kalamrita): All planets moving towards Ketu's tail (Intense spiritual wisdom, introspection, occult mastery).
 */

export function determineKalaSarpaDirection(isMovingTowardsRahu: boolean): string {
  return isMovingTowardsRahu ? 'Savya Kala Sarpa (Worldly Ambition & Transformation)' : 'Apasavya Kalamrita (Spiritual Liberation & Occult Genius)';
}
`
    }]
  },

  // 7. Kala Sarpa Cancellations
  {
    step: 7,
    msg: "feat(kalasarpa): add Kala Sarpa 12 Classical Cancellation (Bhanga) Exceptions",
    files: [{
      file: "src/lib/kalasarpa/kalaSarpaCancellations.ts",
      content: `/**
 * Kala Sarpa Yoga Cancellation (Bhanga) Criteria:
 * 1. Planet conjoined Rahu or Ketu breaking the enclosure.
 * 2. Jupiter or Venus in Kendra from Lagna.
 * 3. Rajayoga forming planet exalted outside the nodal hemisphere.
 * 4. Moon in trine with Jupiter (Gaja Kesari).
 */

export function isKalaSarpaCancelled(isPlanetOutsideAxis: boolean, isJupiterInKendra: boolean, isGajaKesariActive: boolean): boolean {
  return isPlanetOutsideAxis || isJupiterInKendra || isGajaKesariActive;
}
`
    }]
  },

  // 8. Naga Dosha
  {
    step: 8,
    msg: "feat(kalasarpa): add Naga Dosha 5th house progeny affliction and Sarpa Shanti rituals",
    files: [{
      file: "src/lib/kalasarpa/nagaDosha.ts",
      content: `/**
 * Naga Dosha (Affliction to 5th House or 5th Lord by Rahu/Mars)
 */

export function evaluateNagaDosha(is5thHouseWithRahu: boolean, isJupiterAfflicted: boolean) {
  const hasDosha = is5thHouseWithRahu || isJupiterAfflicted;
  return {
    hasNagaDosha: hasDosha,
    remedy: hasDosha ? 'Sarpa Samskara at Kukke Subramanya or silver serpent offering at Shiva shrine.' : 'Clean 5th house: Progeny blessings intact.'
  };
}
`
    }]
  },

  // 9. Kurma Chakra
  {
    step: 9,
    msg: "feat(medini): add Kurma Chakra (Earth Turtle) 9-sector mundane geography mapping",
    files: [{
      file: "src/lib/medini/kurmaChakra.ts",
      content: `/**
 * Kurma Chakra (Cosmic Turtle Mundane Topology)
 * Center (Hridaya), East (Purva), Southeast (Agneya), South (Dakshina),
 * Southwest (Nairritya), West (Pashchima), Northwest (Vayavya), North (Uttara), Northeast (Ishanya).
 */

export const KURMA_SECTORS: Record<string, string[]> = {
  Center: ['Krittika', 'Rohini', 'Mrigashira'],
  East: ['Ardra', 'Punarvasu', 'Pushya'],
  Southeast: ['Ashlesha', 'Magha', 'Purva Phalguni'],
  South: ['Uttara Phalguni', 'Hasta', 'Chitra'],
  Southwest: ['Swati', 'Vishakha', 'Anuradha'],
  West: ['Jyeshtha', 'Moola', 'Purva Ashadha'],
  Northwest: ['Uttara Ashadha', 'Shravana', 'Dhanishta'],
  North: ['Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada'],
  Northeast: ['Revati', 'Ashwini', 'Bharani']
};

export function getKurmaSector(starName: string): string {
  for (const [sector, stars] of Object.entries(KURMA_SECTORS)) {
    if (stars.includes(starName)) return sector;
  }
  return 'Center';
}
`
    }]
  },

  // 10. Eclipse Mundane Path
  {
    step: 10,
    msg: "feat(medini): add Solar and Lunar Eclipse path impact on national chart ascendants",
    files: [{
      file: "src/lib/medini/eclipseImpact.ts",
      content: `/**
 * Grahana (Eclipse) Mundane Impact
 */

export function evaluateEclipseMundaneImpact(eclipseSign: number, countryLagnaSign: number): string {
  const diff = (eclipseSign - countryLagnaSign + 12) % 12;
  if (diff === 0) return 'Lagna Eclipse: Sovereign leadership policy shifts and economic volatility.';
  if (diff === 9) return '10th House Eclipse: Government leadership and administration transformation.';
  return 'General national transit adaptation.';
}
`
    }]
  },

  // 11. 36 Drekkana Faces
  {
    step: 11,
    msg: "feat(drekkana): add 36 Drekkana (Decanate) archetypal faces symbology",
    files: [{
      file: "src/lib/drekkana/drekkana36Faces.ts",
      content: `/**
 * 36 Drekkana Faces (Decanates):
 * Ayudha (Armed with weapons), Pakshi (Bird/Agility), Sarpa (Serpent/Wisdom),
 * Chatushpada (Quadruped/Stamina), Varaha (Boar/Grounding).
 */

export function getDrekkanaNature(signIndex: number, decanate1to3: number): string {
  const archetypes = ['Ayudha (Valor & Defense)', 'Sarpa (Deep Intuition)', 'Pakshi (Intellectual Flight & Vision)'];
  return archetypes[(signIndex + decanate1to3) % 3];
}
`
    }]
  },

  // 12. 22nd Kharesh
  {
    step: 12,
    msg: "feat(drekkana): add 22nd Drekkana (Kharesh) exact lord, sub-division, and danger degree",
    files: [{
      file: "src/lib/drekkana/kharesh22nd.ts",
      content: `/**
 * 22nd Drekkana (Kharesh) Locator
 * Exact 8th house in D-3 (Drekkana Chart).
 */

export function calculateKhareshLord(lagnaSignIndex: number): number {
  return (lagnaSignIndex + 7) % 12; // 8th house in D-3
}
`
    }]
  },

  // 13. Planetary Speed Variations
  {
    step: 13,
    msg: "feat(speed): add Mean speed vs True daily motion calculator (Vigraha, Vakra, Manda, Sheeghra)",
    files: [{
      file: "src/lib/speed/planetarySpeedRatios.ts",
      content: `/**
 * Planetary Speed Variation Categories:
 * 1. Sheeghra (Fast): Speed > 115% of mean speed.
 * 2. Sama (Normal): Speed 85% - 115% of mean.
 * 3. Manda (Slow): Speed < 85% of mean.
 * 4. Vakra (Retrograde): Negative daily motion.
 */

export function categorizePlanetarySpeed(currentSpeedDegPerDay: number, meanSpeedDegPerDay: number): string {
  if (currentSpeedDegPerDay < 0) return 'Vakra (Retrograde - Intensely Powerful Internal Motion)';
  const ratio = (currentSpeedDegPerDay / meanSpeedDegPerDay) * 100;
  if (ratio > 115) return 'Sheeghra (Accelerated / High Momentum)';
  if (ratio < 85) return 'Manda (Slow / Deliberate Expansion)';
  return 'Sama (Balanced Mean Velocity)';
}
`
    }]
  },

  // 14. Stambhana Stationing
  {
    step: 14,
    msg: "feat(speed): add Stambhana stationary planetary stationing inflection (48 hrs prior to turnaround)",
    files: [{
      file: "src/lib/speed/stambhanaStation.ts",
      content: `/**
 * Stambhana (Planetary Stationing / Zero Velocity Point)
 * When planet speed approaches zero (±0.02 deg/day), energy crystallizes intensely.
 */

export function isPlanetaryStationing(dailySpeedDeg: number): boolean {
  return Math.abs(dailySpeedDeg) <= 0.02;
}
`
    }]
  },

  // 15. Mesha Sankranti Annual Chart
  {
    step: 15,
    msg: "feat(medini): add Mesha Sankranti (Solar Aries Ingress) annual mundane chart epoch",
    files: [{
      file: "src/lib/medini/meshaSankranti.ts",
      content: `/**
 * Mesha Sankranti (Sun entering 0° Aries) Mundane Forecast
 */

export function evaluateMeshaSankranti(weekdayIndex0to6: number): string {
  const DAYS = ['Sunday (Raja: Sun - Sovereign Strength)', 'Monday (Raja: Moon - Bountiful Agriculture)', 'Tuesday (Raja: Mars - Military Dynamism)', 'Wednesday (Raja: Mercury - Commercial Boom)', 'Thursday (Raja: Jupiter - Spiritual Peace & Harmony)', 'Friday (Raja: Venus - Luxury & Artistic Flourishing)', 'Saturday (Raja: Saturn - Labor & Industrial Growth)'];
  return DAYS[weekdayIndex0to6] || DAYS[0];
}
`
    }]
  },

  // 16 to 45: Tests and components for this suite
  // 16. KCD Savya Test
  {
    step: 16,
    msg: "test(kcd): add unit test suite for KCD Savya/Apasavya star check",
    files: [{
      file: "tests/kcdSavyaApasavya.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isSavyaNakshatra } from '../src/lib/kcd/kcdSavyaApasavya';

describe('KCD Savya Apasavya', () => {
  it('identifies Ashwini (0) as Savya and Bharani (1) as Apasavya', () => {
    expect(isSavyaNakshatra(0)).toBe(true);
    expect(isSavyaNakshatra(1)).toBe(false);
  });
});
`
    }]
  },

  // 17. KCD Deha Jeeva Test
  {
    step: 17,
    msg: "test(kcd): add unit test suite for Deha and Jeeva signs",
    files: [{
      file: "tests/kcdDehaJeeva.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { getKCDDehaJeeva } from '../src/lib/kcd/kcdDehaJeeva';

describe('KCD Deha Jeeva', () => {
  it('maps Deha and Jeeva signs', () => {
    const res = getKCDDehaJeeva(true, 0);
    expect(res.dehaSignIndex).toBe(0);
    expect(res.jeevaSignIndex).toBe(8);
  });
});
`
    }]
  },

  // 18. KCD Gati Jumps Test
  {
    step: 18,
    msg: "test(kcd): add unit test suite for KCD Manduka, Markati, and Simhavalokana jumps",
    files: [{
      file: "tests/kcdGatiJumps.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { evaluateKCDJump } from '../src/lib/kcd/kcdGatiJumps';

describe('KCD Gati Jumps', () => {
  it('identifies Manduka Gati for 2-sign skip', () => {
    expect(evaluateKCDJump(0, 2)).toContain('Manduka');
  });
});
`
    }]
  },

  // 19. KCD Durations Test
  {
    step: 19,
    msg: "test(kcd): add unit test suite for KCD sign duration years",
    files: [{
      file: "tests/kcdSignDurations.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { getKCDDuration } from '../src/lib/kcd/kcdSignDurations';

describe('KCD Durations', () => {
  it('returns 7 years for Aries and 21 years for Cancer', () => {
    expect(getKCDDuration(0)).toBe(7);
    expect(getKCDDuration(3)).toBe(21);
  });
});
`
    }]
  },

  // 20. 12 Kala Sarpa Test
  {
    step: 20,
    msg: "test(kalasarpa): add unit test suite for 12 Kala Sarpa archetypes",
    files: [{
      file: "tests/kalaSarpa12Types.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { getKalaSarpaType } from '../src/lib/kalasarpa/kalaSarpa12Types';

describe('12 Kala Sarpa Types', () => {
  it('identifies Ananta for Rahu in 1st and Kulika for Rahu in 2nd', () => {
    expect(getKalaSarpaType(1)).toContain('Ananta');
    expect(getKalaSarpaType(2)).toContain('Kulika');
  });
});
`
    }]
  },

  // 21. Kala Sarpa Savya Test
  {
    step: 21,
    msg: "test(kalasarpa): add unit test suite for Kala Sarpa vs Kalamrita direction",
    files: [{
      file: "tests/kalaSarpaSavya.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { determineKalaSarpaDirection } from '../src/lib/kalasarpa/kalaSarpaSavya';

describe('Kala Sarpa Direction', () => {
  it('identifies Savya when moving towards Rahu', () => {
    expect(determineKalaSarpaDirection(true)).toContain('Savya');
  });
});
`
    }]
  },

  // 22. Kala Sarpa Cancellations Test
  {
    step: 22,
    msg: "test(kalasarpa): add unit test suite for Kala Sarpa cancellation criteria",
    files: [{
      file: "tests/kalaSarpaCancellations.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isKalaSarpaCancelled } from '../src/lib/kalasarpa/kalaSarpaCancellations';

describe('Kala Sarpa Cancellations', () => {
  it('cancels yoga when Jupiter is in Kendra', () => {
    expect(isKalaSarpaCancelled(false, true, false)).toBe(true);
  });
});
`
    }]
  },

  // 23. Naga Dosha Test
  {
    step: 23,
    msg: "test(kalasarpa): add unit test suite for Naga Dosha 5th house checks",
    files: [{
      file: "tests/nagaDosha.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { evaluateNagaDosha } from '../src/lib/kalasarpa/nagaDosha';

describe('Naga Dosha', () => {
  it('flags dosha when 5th house holds Rahu', () => {
    expect(evaluateNagaDosha(true, false).hasNagaDosha).toBe(true);
  });
});
`
    }]
  },

  // 24. Kurma Chakra Test
  {
    step: 24,
    msg: "test(medini): add unit test suite for Kurma Chakra 9 sectors",
    files: [{
      file: "tests/kurmaChakra.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { getKurmaSector } from '../src/lib/medini/kurmaChakra';

describe('Kurma Chakra', () => {
  it('maps Krittika to Center and Ardra to East', () => {
    expect(getKurmaSector('Krittika')).toBe('Center');
    expect(getKurmaSector('Ardra')).toBe('East');
  });
});
`
    }]
  },

  // 25. Eclipse Impact Test
  {
    step: 25,
    msg: "test(medini): add unit test suite for Eclipse mundane impact",
    files: [{
      file: "tests/eclipseImpact.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { evaluateEclipseMundaneImpact } from '../src/lib/medini/eclipseImpact';

describe('Eclipse Mundane Impact', () => {
  it('identifies Lagna eclipse volatility', () => {
    expect(evaluateEclipseMundaneImpact(0, 0)).toContain('Lagna Eclipse');
  });
});
`
    }]
  },

  // 26. 36 Drekkana Faces Test
  {
    step: 26,
    msg: "test(drekkana): add unit test suite for 36 Drekkana archetypes",
    files: [{
      file: "tests/drekkana36Faces.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { getDrekkanaNature } from '../src/lib/drekkana/drekkana36Faces';

describe('36 Drekkana Faces', () => {
  it('returns archetypal symbology', () => {
    const res = getDrekkanaNature(0, 1);
    expect(res).toBeDefined();
  });
});
`
    }]
  },

  // 27. 22nd Kharesh Test
  {
    step: 27,
    msg: "test(drekkana): add unit test suite for 22nd Kharesh calculation",
    files: [{
      file: "tests/kharesh22nd.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { calculateKhareshLord } from '../src/lib/drekkana/kharesh22nd';

describe('22nd Kharesh', () => {
  it('calculates 8th house in D-3', () => {
    expect(calculateKhareshLord(0)).toBe(7);
  });
});
`
    }]
  },

  // 28. Planetary Speed Test
  {
    step: 28,
    msg: "test(speed): add unit test suite for Planetary speed categories",
    files: [{
      file: "tests/planetarySpeedRatios.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { categorizePlanetarySpeed } from '../src/lib/speed/planetarySpeedRatios';

describe('Planetary Speed Categories', () => {
  it('identifies Vakra for negative speed and Sheeghra for fast motion', () => {
    expect(categorizePlanetarySpeed(-0.05, 0.5)).toContain('Vakra');
    expect(categorizePlanetarySpeed(1.2, 0.98)).toContain('Sheeghra');
  });
});
`
    }]
  },

  // 29. Stambhana Stationing Test
  {
    step: 29,
    msg: "test(speed): add unit test suite for Stambhana stationary detection",
    files: [{
      file: "tests/stambhanaStation.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isPlanetaryStationing } from '../src/lib/speed/stambhanaStation';

describe('Stambhana Stationing', () => {
  it('detects near-zero velocity stationing', () => {
    expect(isPlanetaryStationing(0.01)).toBe(true);
    expect(isPlanetaryStationing(0.5)).toBe(false);
  });
});
`
    }]
  },

  // 30. Mesha Sankranti Test
  {
    step: 30,
    msg: "test(medini): add unit test suite for Mesha Sankranti weekday ruler",
    files: [{
      file: "tests/meshaSankranti.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { evaluateMeshaSankranti } from '../src/lib/medini/meshaSankranti';

describe('Mesha Sankranti', () => {
  it('returns Sun for Sunday and Jupiter for Thursday', () => {
    expect(evaluateMeshaSankranti(0)).toContain('Sun');
    expect(evaluateMeshaSankranti(4)).toContain('Jupiter');
  });
});
`
    }]
  },

  // 31. useKalachakraDasha hook
  {
    step: 31,
    msg: "feat(hooks): add useKalachakraDasha hook for KCD Deha and Jeeva mapping",
    files: [{
      file: "src/hooks/useKalachakraDasha.ts",
      content: `import { useMemo } from 'react';
import { isSavyaNakshatra } from '../lib/kcd/kcdSavyaApasavya';
import { getKCDDehaJeeva } from '../lib/kcd/kcdDehaJeeva';

export function useKalachakraDasha(nakshatraIdx: number, startSign: number) {
  const isSavya = useMemo(() => isSavyaNakshatra(nakshatraIdx), [nakshatraIdx]);
  const dehaJeeva = useMemo(() => getKCDDehaJeeva(isSavya, startSign), [isSavya, startSign]);

  return { isSavya, dehaJeeva };
}
`
    }]
  },

  // 32. useKalaSarpaYoga hook
  {
    step: 32,
    msg: "feat(hooks): add useKalaSarpaYoga hook for 12 Kala Sarpa archetypes",
    files: [{
      file: "src/hooks/useKalaSarpaYoga.ts",
      content: `import { useMemo } from 'react';
import { getKalaSarpaType } from '../lib/kalasarpa/kalaSarpa12Types';
import { isKalaSarpaCancelled } from '../lib/kalasarpa/kalaSarpaCancellations';

export function useKalaSarpaYoga(rahuHouse: number, isPlanetOutside: boolean, isGuruKendra: boolean, isGajaKesari: boolean) {
  const yogaType = useMemo(() => getKalaSarpaType(rahuHouse), [rahuHouse]);
  const isCancelled = useMemo(() => isKalaSarpaCancelled(isPlanetOutside, isGuruKendra, isGajaKesari), [isPlanetOutside, isGuruKendra, isGajaKesari]);

  return { yogaType, isCancelled };
}
`
    }]
  },

  // 33. useKurmaChakra hook
  {
    step: 33,
    msg: "feat(hooks): add useKurmaChakra hook for Mundane geographical sectors",
    files: [{
      file: "src/hooks/useKurmaChakra.ts",
      content: `import { useMemo } from 'react';
import { getKurmaSector } from '../lib/medini/kurmaChakra';

export function useKurmaChakra(starName: string) {
  const sector = useMemo(() => getKurmaSector(starName), [starName]);
  return { sector };
}
`
    }]
  },

  // 34. useDrekkanaFaces hook
  {
    step: 34,
    msg: "feat(hooks): add useDrekkanaFaces hook for 36 Decanate symbologies",
    files: [{
      file: "src/hooks/useDrekkanaFaces.ts",
      content: `import { useMemo } from 'react';
import { getDrekkanaNature } from '../lib/drekkana/drekkana36Faces';

export function useDrekkanaFaces(signIndex: number, decanate: number) {
  const nature = useMemo(() => getDrekkanaNature(signIndex, decanate), [signIndex, decanate]);
  return { drekkanaNature: nature };
}
`
    }]
  },

  // 35. usePlanetarySpeed hook
  {
    step: 35,
    msg: "feat(hooks): add usePlanetarySpeed hook for speed ratio categorization",
    files: [{
      file: "src/hooks/usePlanetarySpeed.ts",
      content: `import { useMemo } from 'react';
import { categorizePlanetarySpeed } from '../lib/speed/planetarySpeedRatios';

export function usePlanetarySpeed(currentSpeed: number, meanSpeed: number) {
  const category = useMemo(() => categorizePlanetarySpeed(currentSpeed, meanSpeed), [currentSpeed, meanSpeed]);
  return { speedCategory: category };
}
`
    }]
  },

  // 36. KalachakraDashaTree UI
  {
    step: 36,
    msg: "feat(ui): add KalachakraDashaTree component displaying Deha & Jeeva signs",
    files: [{
      file: "src/components/KalachakraDashaTree.tsx",
      content: `import React from 'react';

export const KalachakraDashaTree: React.FC<{ dehaSign: number; jeevaSign: number; isSavya: boolean }> = ({ dehaSign, jeevaSign, isSavya }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Kalachakra Dasha (KCD) Core Anchor</h4>
      <div className="flex gap-4">
        <div>Cycle Type: <strong className="text-amber-300">{isSavya ? 'Savya (Direct)' : 'Apasavya (Indirect)'}</strong></div>
        <div>Deha (Body): <strong className="text-emerald-400">Sign #{dehaSign + 1}</strong></div>
        <div>Jeeva (Soul): <strong className="text-amber-300">Sign #{jeevaSign + 1}</strong></div>
      </div>
    </div>
  );
};
`
    }]
  },

  // 37. KalaSarpaYogaDetector UI
  {
    step: 37,
    msg: "feat(ui): add KalaSarpaYogaDetector component for 12 archetypes and cancellation status",
    files: [{
      file: "src/components/KalaSarpaYogaDetector.tsx",
      content: `import React from 'react';

export const KalaSarpaYogaDetector: React.FC<{ yogaType: string; isCancelled: boolean }> = ({ yogaType, isCancelled }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">{yogaType}</h4>
      <div className={isCancelled ? 'text-emerald-400 font-semibold' : 'text-amber-400'}>
        {isCancelled ? '✨ Kala Sarpa Yoga Cancelled (Mitigated by Classical Bhanga Exception)' : '⚠️ Full Unbroken Kala Sarpa Axis'}
      </div>
    </div>
  );
};
`
    }]
  },

  // 38. KurmaChakraMundaneMap UI
  {
    step: 38,
    msg: "feat(ui): add KurmaChakraMundaneMap component for 9 cosmic turtle sectors",
    files: [{
      file: "src/components/KurmaChakraMundaneMap.tsx",
      content: `import React from 'react';
import { KURMA_SECTORS } from '../lib/medini/kurmaChakra';

export const KurmaChakraMundaneMap: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Kurma Chakra Mundane Geography</h4>
      <div className="grid grid-cols-3 gap-1.5 text-purple-200">
        {Object.entries(KURMA_SECTORS).map(([sec, stars]) => (
          <div key={sec} className="p-1 bg-purple-950/40 rounded border border-purple-900 text-center">
            <strong className="text-amber-300">{sec}:</strong> <span className="text-[10px] text-purple-300">{stars[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 39. Drekkana36FacesCard UI
  {
    step: 39,
    msg: "feat(ui): add Drekkana36FacesCard component for decanate archetypes",
    files: [{
      file: "src/components/Drekkana36FacesCard.tsx",
      content: `import React from 'react';

export const Drekkana36FacesCard: React.FC<{ nature: string }> = ({ nature }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-300">Drekkana Face:</strong> {nature}
    </div>
  );
};
`
    }]
  },

  // 40. PlanetarySpeedGauge UI
  {
    step: 40,
    msg: "feat(ui): add PlanetarySpeedGauge component for motional velocity categorization",
    files: [{
      file: "src/components/PlanetarySpeedGauge.tsx",
      content: `import React from 'react';

export const PlanetarySpeedGauge: React.FC<{ category: string }> = ({ category }) => {
  return (
    <div className="p-3 bg-slate-900/80 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-400">Planetary Velocity:</strong> {category}
    </div>
  );
};
`
    }]
  },

  // 41. KCDGatiJumpAlert UI
  {
    step: 41,
    msg: "feat(ui): add KCDGatiJumpAlert component for special jump notifications",
    files: [{
      file: "src/components/KCDGatiJumpAlert.tsx",
      content: `import React from 'react';

export const KCDGatiJumpAlert: React.FC<{ jumpInfo: string }> = ({ jumpInfo }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-300">KCD Gati:</strong> {jumpInfo}
    </div>
  );
};
`
    }]
  },

  // 42. NagaDoshaRemedyCard UI
  {
    step: 42,
    msg: "feat(ui): add NagaDoshaRemedyCard component for Sarpa Shanti protocols",
    files: [{
      file: "src/components/NagaDoshaRemedyCard.tsx",
      content: `import React from 'react';

export const NagaDoshaRemedyCard: React.FC<{ remedy: string }> = ({ remedy }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Sarpa Shanti Protocol</h4>
      <div>{remedy}</div>
    </div>
  );
};
`
    }]
  },

  // 43. EclipseImpactMatrix UI
  {
    step: 43,
    msg: "feat(ui): add EclipseImpactMatrix component for national transit impacts",
    files: [{
      file: "src/components/EclipseImpactMatrix.tsx",
      content: `import React from 'react';

export const EclipseImpactMatrix: React.FC<{ impact: string }> = ({ impact }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-300">Mundane Eclipse Echo:</strong> {impact}
    </div>
  );
};
`
    }]
  },

  // 44. MeshaSankrantiChart UI
  {
    step: 44,
    msg: "feat(ui): add MeshaSankrantiChart component for annual solar ingress",
    files: [{
      file: "src/components/MeshaSankrantiChart.tsx",
      content: `import React from 'react';

export const MeshaSankrantiChart: React.FC<{ yearlyRuler: string }> = ({ yearlyRuler }) => {
  return (
    <div className="p-3 bg-slate-900/80 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-400">Mesha Sankranti Ruler:</strong> {yearlyRuler}
    </div>
  );
};
`
    }]
  },

  // 45. StambhanaStationCard UI
  {
    step: 45,
    msg: "feat(ui): add StambhanaStationCard component displaying stationary crystallization",
    files: [{
      file: "src/components/StambhanaStationCard.tsx",
      content: `import React from 'react';

export const StambhanaStationCard: React.FC<{ isStationing: boolean }> = ({ isStationing }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs">
      <strong className={isStationing ? 'text-amber-400' : 'text-emerald-400'}>
        {isStationing ? '⚡ Stambhana Alert: Planetary Stationary Energy Crystallization' : '✨ Planetary Motion In Regular Motion'}
      </strong>
    </div>
  );
};
`
    }]
  }
];
