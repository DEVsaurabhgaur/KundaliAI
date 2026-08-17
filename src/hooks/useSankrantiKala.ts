import { useMemo } from 'react';
import { getSankrantiDetails } from '../lib/panchang/sankrantiPunyaKala';

export function useSankrantiKala(targetRashiIndex: number) {
  const sankranti = useMemo(() => getSankrantiDetails(targetRashiIndex), [targetRashiIndex]);
  return { sankranti };
}
