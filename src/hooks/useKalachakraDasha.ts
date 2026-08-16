import { useMemo } from 'react';
import { calculateKalachakraPoints } from '../lib/dasha/kalachakraDasha';

export function useKalachakraDasha(nakshatraIdx: number, pada: number) {
  const points = useMemo(() => calculateKalachakraPoints(nakshatraIdx, pada), [nakshatraIdx, pada]);
  return { points };
}
