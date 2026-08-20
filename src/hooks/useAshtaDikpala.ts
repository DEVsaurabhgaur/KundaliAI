import { useMemo } from 'react';
import { getDirectionInfo } from '../lib/vastu/ashtaDikpalas';

export function useAshtaDikpala(direction: string) {
  const details = useMemo(() => getDirectionInfo(direction), [direction]);
  return { details };
}
