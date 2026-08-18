import { useMemo } from 'react';
import { checkMuhurtaDoshas } from '../lib/muhurta/mahadosha21';

export function useMahadoshaFilter(latta: boolean, pata: boolean, jamitra: boolean) {
  const activeDoshas = useMemo(() => checkMuhurtaDoshas(latta, pata, jamitra), [latta, pata, jamitra]);
  return { activeDoshas, isClean: activeDoshas.length === 0 };
}
