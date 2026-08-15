/**
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
