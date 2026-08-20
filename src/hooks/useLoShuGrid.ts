import { useMemo } from 'react';
import { generateLoShuGrid } from '../lib/numerology/loShuGrid';

export function useLoShuGrid(birthDigits: number[]) {
  const grid = useMemo(() => generateLoShuGrid(birthDigits), [birthDigits]);
  return { loShu: grid };
}
