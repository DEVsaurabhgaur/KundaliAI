import { useMemo } from 'react';
import { calculateShodhyaPinda } from '../lib/pinda/shodhyaPindaAggregator';
import { estimateAyurdayaYears } from '../lib/pinda/ashtakavargaAyurdaya';

export function useShodhyaPinda(rashiPinda: number, grahaPinda: number) {
  const pinda = useMemo(() => calculateShodhyaPinda(rashiPinda, grahaPinda), [rashiPinda, grahaPinda]);
  const lifespan = useMemo(() => estimateAyurdayaYears(pinda), [pinda]);

  return { shodhyaPinda: pinda, estimatedLifespan: lifespan };
}
