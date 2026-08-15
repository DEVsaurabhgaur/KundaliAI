import { useState, useMemo } from 'react';
import { calculateAllNavamsha } from '../lib/navamsha';
import { calculateDashamsha } from '../lib/dashamsha';
import { calculateSaptamsha } from '../lib/saptamsha';

export type DivisionalVarga = 'D1' | 'D7' | 'D9' | 'D10';

export function useDivisionalCharts(planets: { name: string; longitude: number }[]) {
  const [activeVarga, setActiveVarga] = useState<DivisionalVarga>('D1');

  const chartData = useMemo(() => {
    switch (activeVarga) {
      case 'D9':
        return calculateAllNavamsha(planets);
      case 'D10':
        return planets.map(p => calculateDashamsha(p.name, p.longitude));
      case 'D7':
        return planets.map(p => calculateSaptamsha(p.name, p.longitude));
      case 'D1':
      default:
        return planets;
    }
  }, [activeVarga, planets]);

  return { activeVarga, setActiveVarga, chartData };
}
