import { useMemo } from 'react';
import { evaluateBhadra } from '../lib/panchang/bhadraTimings';

export function useBhadraTimings(moonSignIndex: number, isVishti: boolean) {
  const bhadra = useMemo(() => evaluateBhadra(moonSignIndex, isVishti), [moonSignIndex, isVishti]);
  return { bhadra };
}
