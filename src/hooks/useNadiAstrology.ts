import { useMemo } from 'react';
import { evaluateNadiConjunction } from '../lib/nadi/karmicConjunctions';

export function useNadiAstrology(planetA: string, planetB: string) {
  const interpretation = useMemo(() => evaluateNadiConjunction(planetA, planetB), [planetA, planetB]);
  return { interpretation };
}
