import { useMemo } from 'react';
import { evaluateKaryaSiddhi } from '../lib/prashna/karyaSiddhi';

export function usePrashnaQuery(isIthasala: boolean, isMoonGood: boolean, isLordBenefic: boolean) {
  const result = useMemo(() => evaluateKaryaSiddhi(isIthasala, isMoonGood, isLordBenefic), [isIthasala, isMoonGood, isLordBenefic]);
  return { karyaSiddhi: result };
}
