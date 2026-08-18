/**
 * Paka Rashi and Bhoga Rashi in Jaimini Chara Dasha
 * - Paka Rashi: The sign occupied by the lord of the active Dasha sign.
 * - Bhoga Rashi: The reflection of the Dasha sign as far from Paka Rashi as Paka is from Dasha sign.
 */

export function calculatePakaAndBhoga(dashaSignIndex: number, lordSignIndex: number) {
  const pakaRashi = lordSignIndex;
  const dist = (lordSignIndex - dashaSignIndex + 12) % 12;
  const bhogaRashi = (lordSignIndex + dist) % 12;

  return {
    dashaSign: dashaSignIndex,
    pakaRashi,
    bhogaRashi,
    description: 'Paka reveals action-energy; Bhoga indicates material fruitions and worldly outcomes.'
  };
}
