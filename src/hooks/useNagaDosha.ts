import { useMemo } from 'react';
import { evaluateNagaDosha } from '../lib/kalasarpa/nagaDosha';

export function useNagaDosha(is5thRahu: boolean, isGuruAfflicted: boolean) {
  const dosha = useMemo(() => evaluateNagaDosha(is5thRahu, isGuruAfflicted), [is5thRahu, isGuruAfflicted]);
  return { nagaDosha: dosha };
}
