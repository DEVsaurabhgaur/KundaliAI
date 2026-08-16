import { useMemo } from 'react';
import { calculateArudhaPada } from '../lib/career/arudhaPadas';

export function useArudhaPadas(houseSignIndices: number[], lordSignIndices: number[]) {
  const padas = useMemo(() => {
    return houseSignIndices.map((h, i) => calculateArudhaPada(h, lordSignIndices[i] || h));
  }, [houseSignIndices, lordSignIndices]);
  return { padas };
}
