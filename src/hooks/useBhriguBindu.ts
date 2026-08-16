import { useMemo } from 'react';
import { calculateBhriguBindu } from '../lib/career/bhriguBindu';

export function useBhriguBindu(moonLong: number, rahuLong: number) {
  const bindu = useMemo(() => calculateBhriguBindu(moonLong, rahuLong), [moonLong, rahuLong]);
  return { bindu };
}
