import { useMemo } from 'react';
import { calculateNityaYoga } from '../lib/panchang/nityaYogas';

export function useNityaYogas(sunLong: number, moonLong: number) {
  const yoga = useMemo(() => calculateNityaYoga(sunLong, moonLong), [sunLong, moonLong]);
  return { yoga };
}
