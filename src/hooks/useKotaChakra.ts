import { useMemo } from 'react';
import { evaluateKotaChakra } from '../lib/kotaChakra';

export function useKotaChakra(transits: { planet: string; houseFromMoon: number }[]) {
  const status = useMemo(() => evaluateKotaChakra(transits), [transits]);
  return { status };
}
