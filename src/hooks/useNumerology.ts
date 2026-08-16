import { useMemo } from 'react';
import { calculateMulank } from '../lib/numerology/mulank';
import { calculateBhagyank } from '../lib/numerology/bhagyank';
import { calculateChaldeanNamank } from '../lib/numerology/namank';

export function useNumerology(day: number, month: number, year: number, name: string) {
  const mulank = useMemo(() => calculateMulank(day), [day]);
  const bhagyank = useMemo(() => calculateBhagyank(day, month, year), [day, month, year]);
  const namank = useMemo(() => calculateChaldeanNamank(name), [name]);

  return { mulank, bhagyank, namank };
}
