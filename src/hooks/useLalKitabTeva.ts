import { useMemo } from 'react';
import { evaluateLalKitabTeva } from '../lib/lalkitab/dharmiTeva';

export function useLalKitabTeva(jupiterHouse: number, moonHouse: number, saturnHouse: number, is10thVacant: boolean) {
  const teva = useMemo(() => evaluateLalKitabTeva(jupiterHouse, moonHouse, saturnHouse, is10thVacant), [jupiterHouse, moonHouse, saturnHouse, is10thVacant]);
  return { teva };
}
