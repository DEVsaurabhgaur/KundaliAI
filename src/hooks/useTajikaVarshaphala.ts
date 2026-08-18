import { useMemo } from 'react';
import { calculateMuntha } from '../lib/tajika/munthaCalculator';

export function useTajikaVarshaphala(natalLagnaSignIndex: number, age: number) {
  const muntha = useMemo(() => calculateMuntha(natalLagnaSignIndex, age), [natalLagnaSignIndex, age]);
  return { muntha };
}
