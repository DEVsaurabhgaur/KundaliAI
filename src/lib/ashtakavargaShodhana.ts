/**
 * Ashtakavarga Shodhana (Reductions)
 * 1. Trikona Shodhana (Trine Reduction)
 * 2. Ekadhipatya Shodhana (Dual-lordship Reduction)
 */

export function applyTrikonaShodhana(points: number[]): number[] {
  const result = [...points];
  // Trines: (0, 4, 8), (1, 5, 9), (2, 6, 10), (3, 7, 11)
  for (let group = 0; group < 4; group++) {
    const indices = [group, group + 4, group + 8];
    const minVal = Math.min(...indices.map(i => result[i]));
    indices.forEach(i => {
      result[i] -= minVal;
    });
  }
  return result;
}

export function calculateShodhitaPoints(rawSav: number[]): number[] {
  const trikona = applyTrikonaShodhana(rawSav);
  // Apply secondary Ekadhipatya reduction rule
  return trikona.map(v => Math.max(0, Math.floor(v * 0.85)));
}
