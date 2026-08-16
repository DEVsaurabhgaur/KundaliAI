import { useMemo } from 'react';
import { evaluateTajikaAspect } from '../lib/prashna/tajikaAspects';

export function useTajikaAspects(fastLong: number, slowLong: number, isApplying: boolean) {
  const aspect = useMemo(() => evaluateTajikaAspect(fastLong, slowLong, isApplying), [fastLong, slowLong, isApplying]);
  return { aspect };
}
