/**
 * Sensitive Star Bindu Distribution
 * 1: Janma Star | 10: Karma Star | 19: Adhana Star | 22: Vainashika Star
 */

export function getSensitiveStarIndices(natalNakshatra: number) {
  return {
    janma: natalNakshatra % 27,
    karma: (natalNakshatra + 9) % 27,
    adhana: (natalNakshatra + 18) % 27,
    vainashika: (natalNakshatra + 21) % 27
  };
}
