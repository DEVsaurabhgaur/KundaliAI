/**
 * 3x3 Lo Shu Magic Square Grid (4,9,2 / 3,5,7 / 8,1,6)
 */

export function generateLoShuGrid(birthDigits: number[]) {
  const counts: Record<number, number> = {};
  for (let i = 1; i <= 9; i++) counts[i] = 0;
  for (const d of birthDigits) {
    if (d >= 1 && d <= 9) counts[d] = (counts[d] || 0) + 1;
  }

  return {
    gridCounts: counts,
    thoughtPlane: (counts[4] > 0 ? 1 : 0) + (counts[9] > 0 ? 1 : 0) + (counts[2] > 0 ? 1 : 0),
    willPlane: (counts[3] > 0 ? 1 : 0) + (counts[5] > 0 ? 1 : 0) + (counts[7] > 0 ? 1 : 0),
    actionPlane: (counts[8] > 0 ? 1 : 0) + (counts[1] > 0 ? 1 : 0) + (counts[6] > 0 ? 1 : 0)
  };
}
