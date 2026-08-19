import { useMemo } from 'react';
import { isKujaDoshaCancelled } from '../lib/synastry/kujaDoshaExceptions';

export function useKujaDoshaCheck(marsHouse: number, marsSign: number, isWithGuruOrMoon: boolean) {
  const isCancelled = useMemo(() => isKujaDoshaCancelled(marsHouse, marsSign, isWithGuruOrMoon), [marsHouse, marsSign, isWithGuruOrMoon]);
  return { isCancelled };
}
