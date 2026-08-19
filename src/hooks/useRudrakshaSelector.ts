import { useMemo } from 'react';
import { getRudrakshaDetails } from '../lib/remedies/rudrakshaMatrix';

export function useRudrakshaSelector(mukhi: number) {
  const rudraksha = useMemo(() => getRudrakshaDetails(mukhi), [mukhi]);
  return { rudraksha };
}
