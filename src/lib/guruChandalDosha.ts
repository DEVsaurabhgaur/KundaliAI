/**
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
