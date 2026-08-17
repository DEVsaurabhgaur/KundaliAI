/**
 * Parvata Yoga (Ever-Ascending Status) & Kahala Yoga (Courageous Command)
 */

export function evaluateParvataAndKahala(isLagnaLordStrong: boolean, is4thLordInKendra: boolean) {
  return {
    hasParvataYoga: isLagnaLordStrong && is4thLordInKendra,
    hasKahalaYoga: isLagnaLordStrong
  };
}
