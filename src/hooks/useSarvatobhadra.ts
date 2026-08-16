import { useMemo } from 'react';
import { evaluateSBCVedhas } from '../lib/sarvatobhadraChakra';

export function useSarvatobhadra(transits: { name: string; nakshatra: number }[]) {
  const vedhas = useMemo(() => evaluateSBCVedhas(transits), [transits]);
  return { vedhas };
}
