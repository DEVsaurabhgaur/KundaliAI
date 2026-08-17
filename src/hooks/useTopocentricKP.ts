import { useMemo } from 'react';
import { applyTopocentricParallax } from '../lib/kp/topocentricEphemeris';

export function useTopocentricKP(geoMoon: number, parallaxDeg: number) {
  const topoMoon = useMemo(() => applyTopocentricParallax(geoMoon, parallaxDeg), [geoMoon, parallaxDeg]);
  return { topoMoon };
}
