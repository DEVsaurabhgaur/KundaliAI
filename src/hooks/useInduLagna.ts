import { useMemo } from 'react';
import { calculateInduLagna } from '../lib/career/induLagna';

export function useInduLagna(lagna9th: string, moon9th: string, moonSign: number) {
  const induSign = useMemo(() => calculateInduLagna(lagna9th, moon9th, moonSign), [lagna9th, moon9th, moonSign]);
  return { induSign };
}
