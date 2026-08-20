/**
 * Dispute & Litigation Horary Prashna
 */

export function evaluateLitigation(is1stLordStrongerThan7th: boolean, is6thLordAfflicted: boolean) {
  const willWin = is1stLordStrongerThan7th && is6thLordAfflicted;
  return {
    willPrevail: willWin,
    verdict: willWin ? 'Querent holds legal advantage and favorable outcome.' : 'Settlement or mediation recommended to avoid prolonged litigation.'
  };
}
