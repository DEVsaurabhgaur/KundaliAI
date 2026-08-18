import { useMemo } from 'react';
import { checkNadiDoubleTransit } from '../lib/nadi/doubleTransitTiming';

export function useBhriguNandiTransits(targetSign: number, guruSign: number, shaniSign: number) {
  const isTriggered = useMemo(() => checkNadiDoubleTransit(targetSign, guruSign, shaniSign), [targetSign, guruSign, shaniSign]);
  return { isTriggered };
}
