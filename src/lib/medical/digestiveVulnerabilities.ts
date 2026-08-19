/**
 * Jathara Agni (Digestive Fire) Vulnerabilities
 */

export function evaluateDigestiveAgni(is5thHouseAfflicted: boolean, isMarsAfflicted: boolean): string {
  if (is5thHouseAfflicted && isMarsAfflicted) return 'Mandagni (Sluggish Metabolism): Favor warming spices.';
  if (isMarsAfflicted) return 'Tikshnagni (Excessive Acidic Fire): Favor cooling herbs.';
  return 'Samagni (Balanced Digestive Fire)';
}
