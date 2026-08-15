/**
 * Dual Kundali Chart Comparison Model
 */

export interface DualComparisonReport {
  partnerAName: string;
  partnerBName: string;
  moonSignCompatibility: string;
  sunSignCompatibility: string;
  ascendantCompatibility: string;
  overallHarmonyIndex: number;
}

export function generateDualComparison(
  nameA: string, signA: string,
  nameB: string, signB: string
): DualComparisonReport {
  return {
    partnerAName: nameA,
    partnerBName: nameB,
    moonSignCompatibility: `${signA} & ${signB} share deep complementary qualities.`,
    sunSignCompatibility: 'Harmonious core life goals and values.',
    ascendantCompatibility: 'Balanced mutual perspective on lifestyle and priorities.',
    overallHarmonyIndex: 84
  };
}
