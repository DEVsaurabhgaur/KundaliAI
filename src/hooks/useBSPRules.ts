import { useMemo } from 'react';
import { calculateBSP1SaturnImpact } from '../lib/bsp/bspRule1Saturn3rd';
import { calculateBSP2JupiterBlessing } from '../lib/bsp/bspRule2JupiterBlessing';

export function useBSPRules(saturnHouse: number, jupiterHouse: number) {
  const saturn3rd = useMemo(() => calculateBSP1SaturnImpact(saturnHouse), [saturnHouse]);
  const jupiterBlessing = useMemo(() => calculateBSP2JupiterBlessing(jupiterHouse), [jupiterHouse]);

  return { saturn3rdImpact: saturn3rd, jupiterBlessing };
}
