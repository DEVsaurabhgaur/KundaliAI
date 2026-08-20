import { useMemo } from 'react';
import { locateMissingObject } from '../lib/prashna/missingObjectLocator';

export function useMissingObject(karyaSign: number) {
  const location = useMemo(() => locateMissingObject(karyaSign), [karyaSign]);
  return { locationAdvice: location };
}
