import { useMemo } from 'react';
import { calculateShadbala, ShadbalaScore } from '../lib/shadbala';

export function useShadbalaRadar(planetPlacements: { name: string; house: number; isRetro: boolean }[]) {
  const scores: ShadbalaScore[] = useMemo(() => {
    return planetPlacements.map(p => calculateShadbala(p.name, p.house, p.isRetro));
  }, [planetPlacements]);

  const strongestPlanet = useMemo(() => {
    return [...scores].sort((a, b) => b.strengthPercent - a.strengthPercent)[0]?.planet ?? 'Sun';
  }, [scores]);

  return { scores, strongestPlanet };
}
