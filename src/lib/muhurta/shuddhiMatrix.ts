/**
 * 6-Fold Shuddhi Verification Matrix
 */

export function verifySixFoldShuddhi(
  tithiOk: boolean,
  varaOk: boolean,
  nakshatraOk: boolean,
  yogaOk: boolean,
  karanaOk: boolean,
  lagnaOk: boolean
) {
  const score = [tithiOk, varaOk, nakshatraOk, yogaOk, karanaOk, lagnaOk].filter(Boolean).length;
  return {
    score,
    isFullyPure: score === 6,
    rating: score === 6 ? 'Supreme Shuddhi' : score >= 4 ? 'Moderate' : 'Flawed'
  };
}
