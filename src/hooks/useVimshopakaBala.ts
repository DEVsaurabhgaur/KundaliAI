import { useMemo } from 'react';
import { calculateVimshopakaScore } from '../lib/vargas/vimshopakaBala';

export function useVimshopakaBala(planet: string) {
  const score = useMemo(() => calculateVimshopakaScore(planet, { D1: 'Exalted', D9: 'Own' }), [planet]);
  return { score };
}
