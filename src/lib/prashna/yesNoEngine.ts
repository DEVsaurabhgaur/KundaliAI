/**
 * Prashna Yes / No Query Resolution Engine
 * Evaluates Lagnesh (Querent) and Karyesh (Matter Lord) relationship.
 */

export interface PrashnaVerdict {
  verdict: 'Yes (Highly Favorable)' | 'No (Unfavorable)' | 'Delayed Success';
  confidenceScore: number;
  rationale: string;
}

export function resolvePrashnaQuery(
  isLagnaLordBenefic: boolean,
  hasIthasalaWithKaryesh: boolean,
  isMoonBenefic: boolean
): PrashnaVerdict {
  if (hasIthasalaWithKaryesh && (isLagnaLordBenefic || isMoonBenefic)) {
    return {
      verdict: 'Yes (Highly Favorable)',
      confidenceScore: 92,
      rationale: 'Ithasala yoga established between Lagnesha and Karyesha under benefic lunar auspices.'
    };
  }
  if (!hasIthasalaWithKaryesh && !isLagnaLordBenefic) {
    return {
      verdict: 'No (Unfavorable)',
      confidenceScore: 85,
      rationale: 'Absence of harmonic aspect between query significators.'
    };
  }
  return {
    verdict: 'Delayed Success',
    confidenceScore: 70,
    rationale: 'Intermediary planet transfer required to fulfill the desired undertaking.'
  };
}
