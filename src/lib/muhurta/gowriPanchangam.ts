/**
 * Gowri Panchangam (8 Choghadiya-like portions: Uthi, Amirtham, Rogam, Labam, Dhanam, Sugam, Soram, Visham)
 */

export function isGowriAuspicious(portionName: string): boolean {
  return ['Amirtham', 'Labam', 'Dhanam', 'Sugam'].includes(portionName);
}
