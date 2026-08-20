import { useMemo } from 'react';
import { detectSBCVedhaHits } from '../lib/sbc/sbcTransitHitDetector';

export function useSBCVedha(maleficStars: number[], natalStars: number[]) {
  const hasHit = useMemo(() => detectSBCVedhaHits(maleficStars, natalStars), [maleficStars, natalStars]);
  return { isAfflictedByVedha: hasHit };
}
