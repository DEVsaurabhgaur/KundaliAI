import { useMemo } from 'react';
import { evaluateShakuna } from '../lib/nimitta/shakunaShastraOmens';

export function useNimittaOmens(omenKey: string) {
  const omen = useMemo(() => evaluateShakuna(omenKey), [omenKey]);
  return { omen };
}
