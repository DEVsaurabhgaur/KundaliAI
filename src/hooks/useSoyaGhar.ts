import { useMemo } from 'react';
import { isHouseSleeping } from '../lib/lalkitab/soyaGharAwakener';

export function useSoyaGhar(houseNumber: number, occupiedHouses: number[]) {
  const isSleeping = useMemo(() => isHouseSleeping(houseNumber, occupiedHouses), [houseNumber, occupiedHouses]);
  return { isSleeping };
}
