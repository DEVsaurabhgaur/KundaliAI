import { useMemo } from 'react';
import { categorizePlanetarySpeed } from '../lib/speed/planetarySpeedRatios';

export function usePlanetarySpeed(currentSpeed: number, meanSpeed: number) {
  const category = useMemo(() => categorizePlanetarySpeed(currentSpeed, meanSpeed), [currentSpeed, meanSpeed]);
  return { speedCategory: category };
}
