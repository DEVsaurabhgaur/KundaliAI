import { useMemo } from 'react';
import { generateKakshyaMatrix } from '../lib/pinda/kakshyaTableGenerator';

export function useKakshyaMatrix(activeBindus: boolean[]) {
  const matrix = useMemo(() => generateKakshyaMatrix(activeBindus), [activeBindus]);
  return { kakshyaMatrix: matrix };
}
