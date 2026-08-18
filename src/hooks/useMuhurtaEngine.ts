import { useMemo } from 'react';
import { verifySixFoldShuddhi } from '../lib/muhurta/shuddhiMatrix';

export function useMuhurtaEngine(t: boolean, v: boolean, n: boolean, y: boolean, k: boolean, l: boolean) {
  const shuddhi = useMemo(() => verifySixFoldShuddhi(t, v, n, y, k, l), [t, v, n, y, k, l]);
  return { shuddhi };
}
