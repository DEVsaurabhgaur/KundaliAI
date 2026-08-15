/**
 * Bhakoot Koota (7 Points Max)
 * Relative distance between Moon signs.
 * Inauspicious alignments: 2/12 (Dwirdwadasha), 6/8 (Shadashtaka), 9/5 (Navapanchama).
 */

export function calculateBhakootKoota(boySignIndex: number, girlSignIndex: number) {
  const dist = ((girlSignIndex - boySignIndex + 12) % 12) + 1;
  const inauspicious = [2, 12, 6, 8];

  const hasDosha = inauspicious.includes(dist);
  const points = hasDosha ? 0 : 7;

  return {
    koota: 'Bhakoot',
    maxPoints: 7,
    obtainedPoints: points,
    relativeDistance: dist,
    hasBhakootDosha: hasDosha
  };
}
