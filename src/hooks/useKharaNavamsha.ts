import { useMemo } from 'react';
import { calculateKharaPoints } from '../lib/medical/kharaNavamsha';

export function useKharaNavamsha(moonD9Sign: number, lagnaD3Sign: number) {
  const khara = useMemo(() => calculateKharaPoints(moonD9Sign, lagnaD3Sign), [moonD9Sign, lagnaD3Sign]);
  return { kharaPoints: khara };
}
