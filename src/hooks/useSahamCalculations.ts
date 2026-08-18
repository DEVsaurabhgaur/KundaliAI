import { useMemo } from 'react';
import { calculateSaham } from '../lib/tajika/tajikaSahams';

export function useSahamCalculations(moonDeg: number, sunDeg: number, ascDeg: number, isDay: boolean) {
  const punyaSaham = useMemo(() => calculateSaham(moonDeg, sunDeg, ascDeg, isDay), [moonDeg, sunDeg, ascDeg, isDay]);
  return { punyaSaham };
}
