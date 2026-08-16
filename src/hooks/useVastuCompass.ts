import { useState } from 'react';
import { ASHTA_DIKPALAS } from '../lib/vastu/ashtaDikpalas';

export function useVastuCompass() {
  const [selectedDirection, setSelectedDirection] = useState('North-East');
  const activeZone = ASHTA_DIKPALAS.find(d => d.direction === selectedDirection) || ASHTA_DIKPALAS[0];

  return { selectedDirection, setSelectedDirection, activeZone, allZones: ASHTA_DIKPALAS };
}
