import { useState, useMemo } from 'react';
import { calculateSarvashtakavarga } from '../lib/ashtakavargaSav';

export function useAshtakavargaGrid(planetarySigns: Record<string, number>) {
  const [selectedSign, setSelectedSign] = useState<number | null>(null);

  const savList = useMemo(() => {
    return calculateSarvashtakavarga(planetarySigns);
  }, [planetarySigns]);

  return { savList, selectedSign, setSelectedSign };
}
