import { useMemo } from 'react';
import { getJapaDetails } from '../lib/remedies/mantraChantingRounds';

export function useYantraMantras(planet: string) {
  const japa = useMemo(() => getJapaDetails(planet), [planet]);
  return { japaDetails: japa };
}
