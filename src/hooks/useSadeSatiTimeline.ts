import { useMemo } from 'react';
import { evaluateSaturnTransit } from '../lib/gochara/sadeSatiPhases';

export function useSadeSatiTimeline(natalMoonSign: number, transitSaturnSign: number) {
  const shani = useMemo(() => evaluateSaturnTransit(natalMoonSign, transitSaturnSign), [natalMoonSign, transitSaturnSign]);
  return { shani };
}
