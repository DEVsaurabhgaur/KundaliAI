import { useMemo } from 'react';
import { suggestNameOptimizations } from '../lib/numerology/nameOptimizer';

export function useNameOptimizer(name: string, targetNumber: number) {
  const optimization = useMemo(() => suggestNameOptimizations(name, targetNumber), [name, targetNumber]);
  return { optimization };
}
