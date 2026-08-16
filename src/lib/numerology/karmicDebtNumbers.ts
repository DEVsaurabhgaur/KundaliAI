/**
 * Karmic Debt Numbers (13, 14, 16, 19)
 */

export function checkKarmicDebt(unreducedSum: number) {
  const isKarmic = [13, 14, 16, 19].includes(unreducedSum);
  return {
    isKarmicDebt: isKarmic,
    karmicNumber: isKarmic ? unreducedSum : null,
    lesson: isKarmic ? 'Represents past-life unfulfilled duties now surfacing for resolution.' : 'Clear pathway.'
  };
}
