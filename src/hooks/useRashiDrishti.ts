import { useMemo } from 'react';
import { getAspectedSigns } from '../lib/jaimini/rashiDrishti';

export function useRashiDrishti(signIndex: number) {
  const aspectedSigns = useMemo(() => getAspectedSigns(signIndex), [signIndex]);
  return { aspectedSigns };
}
