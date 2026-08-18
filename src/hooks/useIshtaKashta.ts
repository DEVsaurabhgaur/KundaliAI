import { useMemo } from 'react';
import { calculateIshtaKashta } from '../lib/shadbala/ishtaKashtaPhala';

export function useIshtaKashta(uccha: number, chesta: number) {
  const fruit = useMemo(() => calculateIshtaKashta(uccha, chesta), [uccha, chesta]);
  return { fruit };
}
