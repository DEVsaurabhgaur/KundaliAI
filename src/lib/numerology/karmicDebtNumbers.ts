/**
 * Karmic Debt Numbers (13, 14, 16, 19)
 */

export function checkKarmicDebt(compoundNumber: number): { isKarmic: boolean; lesson: string } {
  const DEBTS: Record<number, string> = {
    13: 'Karmic Debt 13/4: Discipline, focus, overcoming lethargy through steady hard work.',
    14: 'Karmic Debt 14/5: Moderation, temperance, avoiding sensory escapism.',
    16: 'Karmic Debt 16/7: Ego transcendence, spiritual awakening, shedding illusions.',
    19: 'Karmic Debt 19/1: Self-reliance balanced with humility, avoiding domineering pride.'
  };

  return {
    isKarmic: compoundNumber in DEBTS,
    lesson: DEBTS[compoundNumber] || 'No heavy karmic debt number detected.'
  };
}
