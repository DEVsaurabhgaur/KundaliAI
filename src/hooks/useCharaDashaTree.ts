import { useMemo } from 'react';
import { getCharaDashaSequence } from '../lib/chara/charaProgressionDirection';

export function useCharaDashaTree(lagnaSignIndex: number) {
  const sequence = useMemo(() => getCharaDashaSequence(lagnaSignIndex), [lagnaSignIndex]);
  return { sequence };
}
