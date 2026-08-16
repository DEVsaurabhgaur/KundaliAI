import { useMemo } from 'react';
import { getLalKitabRemedy } from '../lib/lalkitab/lalkitabRemedies';

export function useLalKitabAnalysis(planetPlacements: { name: string; house: number }[]) {
  const remedies = useMemo(() => {
    return planetPlacements.map(p => ({
      planet: p.name,
      house: p.house,
      remedy: getLalKitabRemedy(p.name, p.house)
    }));
  }, [planetPlacements]);

  return { remedies };
}
