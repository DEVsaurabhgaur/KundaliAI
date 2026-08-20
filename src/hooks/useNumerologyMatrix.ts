import { useMemo } from 'react';
import { calculateMulank } from '../lib/numerology/mulankCalculator';
import { calculateBhagyank } from '../lib/numerology/bhagyankCalculator';
import { calculateChaldeanNamank } from '../lib/numerology/namankChaldean';

export function useNumerologyMatrix(day: number, month: number, year: number, name: string) {
  const mulank = useMemo(() => calculateMulank(day), [day]);
  const bhagyank = useMemo(() => calculateBhagyank(day, month, year), [day, month, year]);
  const namank = useMemo(() => calculateChaldeanNamank(name), [name]);

  return { mulank, bhagyank, namank };
}
