import { useMemo } from 'react';
import { isSavyaNakshatra } from '../lib/kcd/kcdSavyaApasavya';
import { getKCDDehaJeeva } from '../lib/kcd/kcdDehaJeeva';

export function useKalachakraDasha(nakshatraIdx: number, startSign: number) {
  const isSavya = useMemo(() => isSavyaNakshatra(nakshatraIdx), [nakshatraIdx]);
  const dehaJeeva = useMemo(() => getKCDDehaJeeva(isSavya, startSign), [isSavya, startSign]);

  return { isSavya, dehaJeeva };
}
