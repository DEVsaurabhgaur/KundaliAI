import { useMemo } from 'react';
import { evaluateMeshaSankranti } from '../lib/medini/meshaSankranti';

export function useMeshaSankranti(weekdayIdx: number) {
  const ruler = useMemo(() => evaluateMeshaSankranti(weekdayIdx), [weekdayIdx]);
  return { annualRuler: ruler };
}
