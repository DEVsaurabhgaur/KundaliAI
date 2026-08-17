import { useMemo } from 'react';
import { checkVipareetaVedha } from '../lib/gochara/vipareetaVedha';

export function useVipareetaVedha(hasAdverse: boolean, hasOpposing: boolean) {
  const isNeutralized = useMemo(() => checkVipareetaVedha(hasAdverse, hasOpposing), [hasAdverse, hasOpposing]);
  return { isNeutralized };
}
