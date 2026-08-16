/**
 * Career & Job Promotion Prashna
 */

export function evaluateCareerPrashna(has10thHouseBenefic: boolean, isSunElevated: boolean) {
  const isFavorable = has10thHouseBenefic || isSunElevated;
  return {
    promotionLikelihood: isFavorable ? 'High Probability' : 'Moderate Patience Needed',
    advice: isFavorable ? 'Actively step forward for leadership roles.' : 'Consolidate existing responsibilities.'
  };
}
