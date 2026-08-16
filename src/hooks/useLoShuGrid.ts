import { useMemo } from 'react';
import { generateLoShuGrid } from '../lib/numerology/loShuGrid';

export function useLoShuGrid(birthDateStr: string) {
  const gridData = useMemo(() => generateLoShuGrid(birthDateStr), [birthDateStr]);
  return { gridData };
}
