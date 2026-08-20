/**
 * Tamboola (Betel Leaf) & Ashtamangala Deva Prashna Indicators
 */

export function evaluateTamboolaCount(leafCount: number) {
  const rem = (leafCount * 2 + 1) % 7;
  return {
    indicatorScore: rem,
    isFavorable: [1, 2, 4, 6].includes(rem),
    message: [1, 2, 4, 6].includes(rem) ? 'Auspicious omen indicating favorable outcome.' : 'Caution indicated; proceed with protective prayers.'
  };
}
