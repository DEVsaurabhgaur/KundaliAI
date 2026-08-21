import { useMemo } from 'react';
import { evaluateSphurana } from '../lib/nimitta/angaSphurana';

export function useAngaSphurana(bodyPart: string, isRightSide: boolean, isMale: boolean) {
  const prognosis = useMemo(() => evaluateSphurana(bodyPart, isRightSide, isMale), [bodyPart, isRightSide, isMale]);
  return { prognosis };
}
