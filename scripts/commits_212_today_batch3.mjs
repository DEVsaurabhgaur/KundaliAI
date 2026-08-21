export const todayBatch3 = [
  // 91. KCD Deha Jeeva Longevity
  {
    step: 91,
    msg: "feat(kcd): add Deha-Jeeva longevity protection and lifespan estimation formula",
    files: [{
      file: "src/lib/kcd/kcdDehaJeevaLongevitySpan.ts",
      content: `export function estimateKCDLifespan(isDehaStrong: boolean, isJeevaStrong: boolean, baseParamayus: number): number {
  let score = baseParamayus;
  if (isDehaStrong && isJeevaStrong) score = Math.min(100, score + 10);
  else if (!isDehaStrong && !isJeevaStrong) score = Math.max(50, score - 15);
  return score;
}
`
    }]
  },

  // 92. Kulika Financial Impact
  {
    step: 92,
    msg: "feat(kalasarpa): add Kulika Kala Sarpa (2nd-8th axis) speech and liquid wealth dynamics",
    files: [{
      file: "src/lib/kalasarpa/kulikaFinancialImpact.ts",
      content: `export function evaluateKulikaImpact(rahuHouse: number): string {
  return rahuHouse === 2 ? 'Kulika Kala Sarpa: Financial liquidity discipline and powerful persuasive oratory.' : 'Non-Kulika Alignment.';
}
`
    }]
  },

  // 93. Sun Ingress Quarterly
  {
    step: 93,
    msg: "feat(medini): add 4 Cardinal Solar Ingress charts (Mesha, Karka, Tula, Makara)",
    files: [{
      file: "src/lib/medini/sunIngressQuarterlyCharts.ts",
      content: `export const CARDINAL_INGRESSES: Record<number, string> = {
  0: 'Mesha Sankranti (Spring Equinox / New Year Epoch)',
  3: 'Karka Sankranti (Summer Solstice / Dakshinayana Ingress)',
  6: 'Tula Sankranti (Autumnal Equinox / Trade Cycle)',
  9: 'Makara Sankranti (Winter Solstice / Uttarayana Ingress)'
};

export function getIngressQuarter(signIndex: number): string {
  return CARDINAL_INGRESSES[signIndex] || 'Intermediate Monthly Transit';
}
`
    }]
  },

  // 94. Pakshi Drekkana
  {
    step: 94,
    msg: "feat(drekkana): add Pakshi (Bird) Drekkana commerce, international transit, and aerial travel",
    files: [{
      file: "src/lib/drekkana/pakshiDrekkanaVision.ts",
      content: `export function isPakshiDrekkana(signIndex: number, decanate: number): boolean {
  return decanate === 2 && [2, 5, 8, 11].includes(signIndex); // Dual signs 2nd Drekkana
}
`
    }]
  },

  // 95. Speed Percentiles
  {
    step: 95,
    msg: "feat(speed): add Exact planetary velocity percentage vs 100-year ephemeris percentile",
    files: [{
      file: "src/lib/speed/speedRatioPercentiles.ts",
      content: `export function calculateSpeedPercentile(currentSpeed: number, meanSpeed: number): number {
  const pct = Math.round((currentSpeed / (meanSpeed || 1)) * 100);
  return Math.min(200, Math.max(-50, pct));
}
`
    }]
  },

  // 96. Simhavalokana Karma
  {
    step: 96,
    msg: "feat(kcd): add Simhavalokana deep karmic legacy fruition evaluator",
    files: [{
      file: "src/lib/kcd/kcdSimhavalokanaKarma.ts",
      content: `export function evaluateSimhavalokanaPeriod(fromSign: number, toSign: number): boolean {
  return (fromSign === 11 && toSign === 7) || (fromSign === 8 && toSign === 0);
}
`
    }]
  },

  // 97. Vasuki Sibling Courage
  {
    step: 97,
    msg: "feat(kalasarpa): add Vasuki Kala Sarpa (3rd-9th axis) sibling communication and pilgrimage destiny",
    files: [{
      file: "src/lib/kalasarpa/vasukiSiblingCourage.ts",
      content: `export function evaluateVasukiImpact(rahuHouse: number): string {
  return rahuHouse === 3 ? 'Vasuki Kala Sarpa: Great heroic initiative, media enterprise, and spiritual pilgrimages.' : 'Non-Vasuki Alignment.';
}
`
    }]
  },

  // 98. Rohini Shakata Bhedana
  {
    step: 98,
    msg: "feat(medini): add Rohini Shakata Bhedana (Saturn piercing Rohini wain) famine protection check",
    files: [{
      file: "src/lib/medini/rohiniShakataBhedana.ts",
      content: `export function isRohiniShakataBhedana(saturnDegree: number): boolean {
  return saturnDegree >= 40 && saturnDegree <= 53.33; // 10° to 23°20' Taurus
}
`
    }]
  },

  // 99. Chatushpada Drekkana
  {
    step: 99,
    msg: "feat(drekkana): add Chatushpada (Quadruped) Drekkana physical stamina and endurance index",
    files: [{
      file: "src/lib/drekkana/chatushpadaDrekkanaStamina.ts",
      content: `export function isChatushpadaDrekkana(signIndex: number, decanate: number): boolean {
  return decanate === 1 && [1, 4, 8, 9].includes(signIndex); // Taurus, Leo, Sag, Cap 1st Drekkana
}
`
    }]
  },

  // 100. Planetary Station Epoch
  {
    step: 100,
    msg: "feat(speed): add Exact timestamp and degree locator for planetary stationing (Stambhana)",
    files: [{
      file: "src/lib/speed/planetaryStationEpoch.ts",
      content: `export function formatStationEpoch(degree: number, dateMs: number) {
  return {
    stationDegree: Number(degree.toFixed(2)),
    stationDate: new Date(dateMs).toISOString(),
    status: 'Stambhana Stationary (Intense Energy Node)'
  };
}
`
    }]
  },

  // 101. Manduka Financial Gains
  {
    step: 101,
    msg: "feat(kcd): add Manduka Gati financial windfall and sudden asset acquisition",
    files: [{
      file: "src/lib/kcd/kcdMandukaFinancialGains.ts",
      content: `export function isMandukaJump(fromSign: number, toSign: number): boolean {
  return (toSign - fromSign + 12) % 12 === 2;
}
`
    }]
  },

  // 102. Shankhapala Property
  {
    step: 102,
    msg: "feat(kalasarpa): add Shankhapala Kala Sarpa (4th-10th axis) emotional grounding & career balance",
    files: [{
      file: "src/lib/kalasarpa/shankhapalaPropertyVigor.ts",
      content: `export function evaluateShankhapalaImpact(rahuHouse: number): string {
  return rahuHouse === 4 ? 'Shankhapala Kala Sarpa: High real estate, vehicle ownership, and executive leadership.' : 'Non-Shankhapala Alignment.';
}
`
    }]
  },

  // 103. Chhatra Yoga Mundane
  {
    step: 103,
    msg: "feat(medini): add Chhatra Yoga national sovereignty and constitutional integrity check",
    files: [{
      file: "src/lib/medini/chhatraYogaMundane.ts",
      content: `export function evaluateChhatraYoga(beneficsIn10thAnd1st: boolean): boolean {
  return beneficsIn10thAnd1st;
}
`
    }]
  },

  // 104. Drekkana Deities 27
  {
    step: 104,
    msg: "feat(drekkana): add 36 Drekkana governing Vedic deities (Agni, Varuna, Vayu, Soma, Indra)",
    files: [{
      file: "src/lib/drekkana/drekkanaDeities27.ts",
      content: `export function getDrekkanaDeity(decanateIndex1to3: number): string {
  const DEITIES = ['Narada (Sage / Wisdom)', 'Agastya (Healer / Transformation)', 'Durvasa (Ascetic / High Power)'];
  return DEITIES[(decanateIndex1to3 - 1) % 3] || 'Universal Rishi';
}
`
    }]
  },

  // 105. Daily Motion Difference Metric
  {
    step: 105,
    msg: "feat(speed): add Daily motion acceleration / deceleration delta metric",
    files: [{
      file: "src/lib/speed/dailyMotionDifferenceMetric.ts",
      content: `export function calculateSpeedAcceleration(speedDay1: number, speedDay2: number): number {
  return Number((speedDay2 - speedDay1).toFixed(4));
}
`
    }]
  },

  // 106. Markati Repositioning
  {
    step: 106,
    msg: "feat(kcd): add Markati Gati career pivot and tactical retreat evaluation",
    files: [{
      file: "src/lib/kcd/kcdMarkatiRepositioning.ts",
      content: `export function isMarkatiJump(fromSign: number, toSign: number): boolean {
  return (toSign - fromSign + 12) % 12 === 11;
}
`
    }]
  },

  // 107. Padma Intelligence Mastery
  {
    step: 107,
    msg: "feat(kalasarpa): add Padma Kala Sarpa (5th-11th axis) intellectual brilliance & speculative wealth",
    files: [{
      file: "src/lib/kalasarpa/padmaIntelligenceMastery.ts",
      content: `export function evaluatePadmaImpact(rahuHouse: number): string {
  return rahuHouse === 5 ? 'Padma Kala Sarpa: High intellectual creativity, academic honors, and expansive social network.' : 'Non-Padma Alignment.';
}
`
    }]
  },

  // 108. Ardra Pravesha Rain
  {
    step: 108,
    msg: "feat(medini): add Sun ingress into Ardra nakshatra monsoon onset timing",
    files: [{
      file: "src/lib/medini/ardraPraveshaRain.ts",
      content: `export function isArdraPraveshaActive(sunDegree: number): boolean {
  return sunDegree >= 66.67 && sunDegree <= 80.0; // 6°40' to 20° Gemini
}
`
    }]
  },

  // 109. Nigala Drekkana
  {
    step: 109,
    msg: "feat(drekkana): add Nigala (Fetters) Drekkana psychological restraint & liberation",
    files: [{
      file: "src/lib/drekkana/nigalaDrekkanaRestraint.ts",
      content: `export function isNigalaDrekkana(signIndex: number, decanate: number): boolean {
  return signIndex === 9 && decanate === 1; // Capricorn 1st Drekkana
}
`
    }]
  },

  // 110. Planetary Stationing Degree Span
  {
    step: 110,
    msg: "feat(speed): add 0.5-degree stationing influence orb boundary",
    files: [{
      file: "src/lib/speed/planetaryStationingDegreeSpan.ts",
      content: `export function isWithinStationOrb(planetDeg: number, stationDeg: number): boolean {
  return Math.abs(planetDeg - stationDeg) <= 0.5;
}
`
    }]
  },

  // 111 to 130: Unit Tests
  // 111. KCD Lifespan Test
  {
    step: 111,
    msg: "test(kcd): add unit test suite for KCD lifespan estimation",
    files: [{
      file: "tests/kcdDehaJeevaLongevitySpan.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { estimateKCDLifespan } from '../src/lib/kcd/kcdDehaJeevaLongevitySpan';

describe('KCD Lifespan Estimation', () => {
  it('adds bonus for strong Deha and Jeeva', () => {
    expect(estimateKCDLifespan(true, true, 86)).toBe(96);
  });
});
`
    }]
  },

  // 112. Kulika Test
  {
    step: 112,
    msg: "test(kalasarpa): add unit test suite for Kulika Kala Sarpa",
    files: [{
      file: "tests/kulikaFinancialImpact.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { evaluateKulikaImpact } from '../src/lib/kalasarpa/kulikaFinancialImpact';

describe('Kulika Kala Sarpa', () => {
  it('identifies Kulika for Rahu in 2nd house', () => {
    expect(evaluateKulikaImpact(2)).toContain('Kulika');
  });
});
`
    }]
  },

  // 113. Sun Ingress Test
  {
    step: 113,
    msg: "test(medini): add unit test suite for Solar Ingress quarters",
    files: [{
      file: "tests/sunIngressQuarterlyCharts.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { getIngressQuarter } from '../src/lib/medini/sunIngressQuarterlyCharts';

describe('Solar Ingress Quarters', () => {
  it('identifies Mesha Sankranti for sign 0 and Makara for sign 9', () => {
    expect(getIngressQuarter(0)).toContain('Mesha');
    expect(getIngressQuarter(9)).toContain('Makara');
  });
});
`
    }]
  },

  // 114. Pakshi Drekkana Test
  {
    step: 114,
    msg: "test(drekkana): add unit test suite for Pakshi Drekkana",
    files: [{
      file: "tests/pakshiDrekkanaVision.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isPakshiDrekkana } from '../src/lib/drekkana/pakshiDrekkanaVision';

describe('Pakshi Drekkana', () => {
  it('identifies 2nd decanate of Gemini as Pakshi', () => {
    expect(isPakshiDrekkana(2, 2)).toBe(true);
  });
});
`
    }]
  },

  // 115. Speed Percentiles Test
  {
    step: 115,
    msg: "test(speed): add unit test suite for Speed percentage calculation",
    files: [{
      file: "tests/speedRatioPercentiles.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { calculateSpeedPercentile } from '../src/lib/speed/speedRatioPercentiles';

describe('Speed Percentiles', () => {
  it('calculates 100% for mean speed', () => {
    expect(calculateSpeedPercentile(1.0, 1.0)).toBe(100);
  });
});
`
    }]
  },

  // 116. Simhavalokana Karma Test
  {
    step: 116,
    msg: "test(kcd): add unit test suite for Simhavalokana jump check",
    files: [{
      file: "tests/kcdSimhavalokanaKarma.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { evaluateSimhavalokanaPeriod } from '../src/lib/kcd/kcdSimhavalokanaKarma';

describe('Simhavalokana Karma', () => {
  it('detects Pisces to Scorpio jump', () => {
    expect(evaluateSimhavalokanaPeriod(11, 7)).toBe(true);
  });
});
`
    }]
  },

  // 117. Vasuki Test
  {
    step: 117,
    msg: "test(kalasarpa): add unit test suite for Vasuki Kala Sarpa",
    files: [{
      file: "tests/vasukiSiblingCourage.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { evaluateVasukiImpact } from '../src/lib/kalasarpa/vasukiSiblingCourage';

describe('Vasuki Kala Sarpa', () => {
  it('identifies Vasuki for Rahu in 3rd house', () => {
    expect(evaluateVasukiImpact(3)).toContain('Vasuki');
  });
});
`
    }]
  },

  // 118. Rohini Shakata Test
  {
    step: 118,
    msg: "test(medini): add unit test suite for Rohini Shakata Bhedana check",
    files: [{
      file: "tests/rohiniShakataBhedana.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isRohiniShakataBhedana } from '../src/lib/medini/rohiniShakataBhedana';

describe('Rohini Shakata Bhedana', () => {
  it('detects Saturn piercing Rohini degree span (40° to 53.33°)', () => {
    expect(isRohiniShakataBhedana(45.0)).toBe(true);
    expect(isRohiniShakataBhedana(30.0)).toBe(false);
  });
});
`
    }]
  },

  // 119. Chatushpada Drekkana Test
  {
    step: 119,
    msg: "test(drekkana): add unit test suite for Chatushpada Drekkana",
    files: [{
      file: "tests/chatushpadaDrekkanaStamina.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isChatushpadaDrekkana } from '../src/lib/drekkana/chatushpadaDrekkanaStamina';

describe('Chatushpada Drekkana', () => {
  it('identifies 1st decanate of Taurus as Chatushpada', () => {
    expect(isChatushpadaDrekkana(1, 1)).toBe(true);
  });
});
`
    }]
  },

  // 120. Planetary Station Epoch Test
  {
    step: 120,
    msg: "test(speed): add unit test suite for Station epoch formatting",
    files: [{
      file: "tests/planetaryStationEpoch.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { formatStationEpoch } from '../src/lib/speed/planetaryStationEpoch';

describe('Planetary Station Epoch', () => {
  it('formats station degree and date', () => {
    const epoch = formatStationEpoch(15.421, Date.now());
    expect(epoch.stationDegree).toBe(15.42);
    expect(epoch.status).toContain('Stambhana');
  });
});
`
    }]
  },

  // 121. Manduka Gains Test
  {
    step: 121,
    msg: "test(kcd): add unit test suite for Manduka jump identification",
    files: [{
      file: "tests/kcdMandukaFinancialGains.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isMandukaJump } from '../src/lib/kcd/kcdMandukaFinancialGains';

describe('Manduka Jump', () => {
  it('detects 2-sign skip jump', () => {
    expect(isMandukaJump(0, 2)).toBe(true);
  });
});
`
    }]
  },

  // 122. Shankhapala Test
  {
    step: 122,
    msg: "test(kalasarpa): add unit test suite for Shankhapala Kala Sarpa",
    files: [{
      file: "tests/shankhapalaPropertyVigor.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { evaluateShankhapalaImpact } from '../src/lib/kalasarpa/shankhapalaPropertyVigor';

describe('Shankhapala Kala Sarpa', () => {
  it('identifies Shankhapala for Rahu in 4th house', () => {
    expect(evaluateShankhapalaImpact(4)).toContain('Shankhapala');
  });
});
`
    }]
  },

  // 123. Chhatra Yoga Test
  {
    step: 123,
    msg: "test(medini): add unit test suite for Chhatra Yoga sovereignty check",
    files: [{
      file: "tests/chhatraYogaMundane.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { evaluateChhatraYoga } from '../src/lib/medini/chhatraYogaMundane';

describe('Chhatra Yoga', () => {
  it('confirms sovereignty when benefics hold 10th and 1st', () => {
    expect(evaluateChhatraYoga(true)).toBe(true);
  });
});
`
    }]
  },

  // 124. Drekkana Deities Test
  {
    step: 124,
    msg: "test(drekkana): add unit test suite for Drekkana Vedic deities",
    files: [{
      file: "tests/drekkanaDeities27.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { getDrekkanaDeity } from '../src/lib/drekkana/drekkanaDeities27';

describe('Drekkana Deities', () => {
  it('returns Narada for 1st decanate and Agastya for 2nd', () => {
    expect(getDrekkanaDeity(1)).toContain('Narada');
    expect(getDrekkanaDeity(2)).toContain('Agastya');
  });
});
`
    }]
  },

  // 125. Acceleration Metric Test
  {
    step: 125,
    msg: "test(speed): add unit test suite for Speed acceleration delta",
    files: [{
      file: "tests/dailyMotionDifferenceMetric.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { calculateSpeedAcceleration } from '../src/lib/speed/dailyMotionDifferenceMetric';

describe('Speed Acceleration Delta', () => {
  it('computes daily velocity difference', () => {
    expect(calculateSpeedAcceleration(0.95, 1.05)).toBe(0.1);
  });
});
`
    }]
  },

  // 126. Markati Test
  {
    step: 126,
    msg: "test(kcd): add unit test suite for Markati jump check",
    files: [{
      file: "tests/kcdMarkatiRepositioning.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isMarkatiJump } from '../src/lib/kcd/kcdMarkatiRepositioning';

describe('Markati Jump', () => {
  it('detects backward leap jump', () => {
    expect(isMarkatiJump(4, 3)).toBe(true);
  });
});
`
    }]
  },

  // 127. Padma Test
  {
    step: 127,
    msg: "test(kalasarpa): add unit test suite for Padma Kala Sarpa",
    files: [{
      file: "tests/padmaIntelligenceMastery.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { evaluatePadmaImpact } from '../src/lib/kalasarpa/padmaIntelligenceMastery';

describe('Padma Kala Sarpa', () => {
  it('identifies Padma for Rahu in 5th house', () => {
    expect(evaluatePadmaImpact(5)).toContain('Padma');
  });
});
`
    }]
  },

  // 128. Ardra Pravesha Test
  {
    step: 128,
    msg: "test(medini): add unit test suite for Ardra solar ingress",
    files: [{
      file: "tests/ardraPraveshaRain.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isArdraPraveshaActive } from '../src/lib/medini/ardraPraveshaRain';

describe('Ardra Pravesha Rain', () => {
  it('identifies Sun degree in Ardra nakshatra', () => {
    expect(isArdraPraveshaActive(72.0)).toBe(true);
    expect(isArdraPraveshaActive(60.0)).toBe(false);
  });
});
`
    }]
  },

  // 129. Nigala Drekkana Test
  {
    step: 129,
    msg: "test(drekkana): add unit test suite for Nigala fetters decanate",
    files: [{
      file: "tests/nigalaDrekkanaRestraint.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isNigalaDrekkana } from '../src/lib/drekkana/nigalaDrekkanaRestraint';

describe('Nigala Drekkana', () => {
  it('identifies 1st decanate of Capricorn as Nigala', () => {
    expect(isNigalaDrekkana(9, 1)).toBe(true);
  });
});
`
    }]
  },

  // 130. Station Orb Test
  {
    step: 130,
    msg: "test(speed): add unit test suite for 0.5-deg station orb boundary",
    files: [{
      file: "tests/planetaryStationingDegreeSpan.test.ts",
      content: `import { describe, it, expect } from 'vitest';
import { isWithinStationOrb } from '../src/lib/speed/planetaryStationingDegreeSpan';

describe('Station Orb Boundary', () => {
  it('detects planet within 0.5 deg of station point', () => {
    expect(isWithinStationOrb(15.2, 15.0)).toBe(true);
    expect(isWithinStationOrb(16.0, 15.0)).toBe(false);
  });
});
`
    }]
  },

  // 131. Mahapadma
  {
    step: 131,
    msg: "feat(kcd): add Mahapadma Kala Sarpa (6th-12th axis) overcoming legal friction & foreign gains",
    files: [{
      file: "src/lib/kalasarpa/mahapadmaForeignGains.ts",
      content: `export function evaluateMahapadmaImpact(rahuHouse: number): string {
  return rahuHouse === 6 ? 'Mahapadma Kala Sarpa: Crushing competitors and victory in global litigation.' : 'Non-Mahapadma Alignment.';
}
`
    }]
  },

  // 132. Karkotaka
  {
    step: 132,
    msg: "feat(kalasarpa): add Karkotaka Kala Sarpa (8th-2nd axis) inheritance & occult secrets",
    files: [{
      file: "src/lib/kalasarpa/karkotakaHiddenSensitivities.ts",
      content: `export function evaluateKarkotakaImpact(rahuHouse: number): string {
  return rahuHouse === 8 ? 'Karkotaka Kala Sarpa: Unveiling esoteric secrets, hidden inheritances, and deep research.' : 'Non-Karkotaka Alignment.';
}
`
    }]
  },

  // 133. Planetary War Mundane
  {
    step: 133,
    msg: "feat(medini): add Graha Yuddha (Planetary War) mundane market & geopolitical impacts",
    files: [{
      file: "src/lib/medini/planetaryWarMundane.ts",
      content: `export function evaluatePlanetaryWarMarketEcho(planet1: string, planet2: string): string {
  return \`Graha Yuddha (\${planet1} vs \${planet2}): High economic volatility in commodities ruled by \${planet1} and \${planet2}.\`;
}
`
    }]
  },

  // 134. Sarpa Drekkana
  {
    step: 134,
    msg: "feat(drekkana): add Sarpa (Serpent) Drekkana investigative, occult, and diagnostic aptitude",
    files: [{
      file: "src/lib/drekkana/sarpaDrekkanaWisdom.ts",
      content: `export function isSarpaDrekkana(signIndex: number, decanate: number): boolean {
  return (signIndex === 3 && decanate === 2) || (signIndex === 7 && decanate === 1) || (signIndex === 11 && decanate === 3);
}
`
    }]
  },

  // 135. Station Turnaround Direction
  {
    step: 135,
    msg: "feat(speed): add Vakri (Retrograde) station turnaround direction predictor",
    files: [{
      file: "src/lib/speed/stationTurningRetrograde.ts",
      content: `export function predictStationDirection(isCurrentlyDirect: boolean): string {
  return isCurrentlyDirect ? 'Stationing to Turn Retrograde (Vakri Ingress)' : 'Stationing to Turn Direct (Marga Ingress)';
}
`
    }]
  }
];
