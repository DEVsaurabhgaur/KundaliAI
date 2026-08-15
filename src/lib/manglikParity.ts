/**
 * Manglik Parity Validator
 * When both partners are Manglik, the malefic influence neutralizes mutually.
 */

export function checkManglikMatchParity(isBoyManglik: boolean, isGirlManglik: boolean) {
  if (isBoyManglik && isGirlManglik) {
    return { isNeutralized: true, verdict: 'Both partners possess Manglik alignment; doshas neutralize mutually.' };
  }
  if (!isBoyManglik && !isGirlManglik) {
    return { isNeutralized: true, verdict: 'Neither partner is Manglik; optimal baseline compatibility.' };
  }
  return { isNeutralized: false, verdict: 'Single-sided Manglik dosha; remedies or detailed cancellation checks advised.' };
}
