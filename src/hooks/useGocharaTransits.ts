import { useMemo } from 'react';
import { isTransitBenefic } from '../lib/gochara/transitBeneficHouses';

export function useGocharaTransits(planetHouses: Record<string, number>) {
  const status = useMemo(() => {
    return Object.entries(planetHouses).map(([p, h]) => ({
      planet: p,
      house: h,
      isBenefic: isTransitBenefic(p, h)
    }));
  }, [planetHouses]);

  return { status };
}
