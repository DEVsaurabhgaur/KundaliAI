/**
 * Wealth Potential Index (Dhana & Labha Bhava Accumulator)
 */

export function calculateWealthPotentialIndex(has2ndLordExalted: boolean, has11thLordInKendra: boolean): number {
  let score = 50;
  if (has2ndLordExalted) score += 25;
  if (has11thLordInKendra) score += 25;
  return score;
}
