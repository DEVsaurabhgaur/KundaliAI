import { useMemo } from 'react';
import { evaluateEclipseMundaneImpact } from '../lib/medini/eclipseImpact';

export function useEclipseImpact(eclipseSign: number, countryLagna: number) {
  const impact = useMemo(() => evaluateEclipseMundaneImpact(eclipseSign, countryLagna), [eclipseSign, countryLagna]);
  return { eclipseImpact: impact };
}
