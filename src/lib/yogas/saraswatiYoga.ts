/**
 * Saraswati Yoga
 * Jupiter, Venus, and Mercury occupy Kendra, Trikona, or 2nd house with strong Jupiter.
 */

export function checkSaraswatiYoga(isJupiterStrong: boolean, areBeneficsInTrines: boolean): boolean {
  return isJupiterStrong && areBeneficsInTrines;
}
