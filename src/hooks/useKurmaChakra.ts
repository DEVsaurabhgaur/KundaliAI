import { useMemo } from 'react';
import { getKurmaSector } from '../lib/medini/kurmaChakra';

export function useKurmaChakra(starName: string) {
  const sector = useMemo(() => getKurmaSector(starName), [starName]);
  return { sector };
}
