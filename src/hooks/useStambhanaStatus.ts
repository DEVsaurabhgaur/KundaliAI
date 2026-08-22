import { useMemo } from 'react';
import { isPlanetaryStationing } from '../lib/speed/stambhanaStation';

export function useStambhanaStatus(speedDeg: number) {
  const isStationary = useMemo(() => isPlanetaryStationing(speedDeg), [speedDeg]);
  return { isStationary };
}
