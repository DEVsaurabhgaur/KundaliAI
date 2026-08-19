import { useMemo } from 'react';
import { checkMahendraKoota } from '../lib/synastry/mahendraKoota';
import { calculateStreeDeergha } from '../lib/synastry/streeDeergha';

export function useRelationshipSynastry(girlNak: number, boyNak: number) {
  const mahendra = useMemo(() => checkMahendraKoota(girlNak, boyNak), [girlNak, boyNak]);
  const streeDeergha = useMemo(() => calculateStreeDeergha(girlNak, boyNak), [girlNak, boyNak]);

  return { isMahendraFavorable: mahendra, streeDeergha };
}
