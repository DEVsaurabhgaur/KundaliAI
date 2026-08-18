import { useMemo } from 'react';
import { aggregateShadbala } from '../lib/shadbala/shadbalaSummary';

export function useDetailedShadbala(planet: string, sthana: number, dig: number, kala: number, chesta: number, naisargika: number, drik: number) {
  const summary = useMemo(() => aggregateShadbala(planet, sthana, dig, kala, chesta, naisargika, drik), [planet, sthana, dig, kala, chesta, naisargika, drik]);
  return { summary };
}
