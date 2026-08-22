import { useMemo } from 'react';
import { getKalaSarpaType } from '../lib/kalasarpa/kalaSarpa12Types';
import { isKalaSarpaCancelled } from '../lib/kalasarpa/kalaSarpaCancellations';

export function useKalaSarpaYoga(rahuHouse: number, isPlanetOutside: boolean, isGuruKendra: boolean, isGajaKesari: boolean) {
  const yogaType = useMemo(() => getKalaSarpaType(rahuHouse), [rahuHouse]);
  const isCancelled = useMemo(() => isKalaSarpaCancelled(isPlanetOutside, isGuruKendra, isGajaKesari), [isPlanetOutside, isGuruKendra, isGajaKesari]);

  return { yogaType, isCancelled };
}
