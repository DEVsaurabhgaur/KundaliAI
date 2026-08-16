import { useMemo } from 'react';
import { calculateSpecialNakshatras } from '../lib/specialNakshatras';

export function useSpecialNakshatras(janmaNakshatraIdx: number) {
  const specialNakshatras = useMemo(() => calculateSpecialNakshatras(janmaNakshatraIdx), [janmaNakshatraIdx]);
  return { specialNakshatras };
}
