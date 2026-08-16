import { useState, useCallback } from 'react';
import { calculatePrashnaAscendant } from '../lib/prashna/prashnaAscendant';
import { resolvePrashnaQuery } from '../lib/prashna/yesNoEngine';

export function usePrashnaChart() {
  const [queryState, setQueryState] = useState<{ query: string; timestamp: number } | null>(null);

  const askQuestion = useCallback((questionText: string) => {
    const now = Date.now();
    setQueryState({ query: questionText, timestamp: now });
  }, []);

  const verdict = queryState ? resolvePrashnaQuery(true, true, true) : null;

  return { askQuestion, queryState, verdict };
}
