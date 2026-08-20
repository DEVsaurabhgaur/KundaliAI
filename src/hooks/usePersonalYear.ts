import { useMemo } from 'react';
import { calculatePersonalYear } from '../lib/numerology/personalYearCycle';

export function usePersonalYear(day: number, month: number, year: number) {
  const pYear = useMemo(() => calculatePersonalYear(day, month, year), [day, month, year]);
  return { personalYear: pYear };
}
