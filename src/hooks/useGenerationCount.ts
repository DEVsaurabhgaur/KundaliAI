/** useGenerationCount â€” track number of kundalis generated this session */
import { useState, useCallback } from 'react';
import { getStoredJSON, setStoredJSON, STORAGE_KEYS } from '../lib/storageKeys';

export function useGenerationCount() {
  const [count, setCount] = useState<number>(() => {
    return getStoredJSON<number>(STORAGE_KEYS.GENERATION_COUNT) ?? 0;
  });

  const increment = useCallback(() => {
    setCount(prev => {
      const next = prev + 1;
      setStoredJSON(STORAGE_KEYS.GENERATION_COUNT, next);
      setStoredJSON(STORAGE_KEYS.LAST_GENERATED_AT, new Date().toISOString());
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setCount(0);
    setStoredJSON(STORAGE_KEYS.GENERATION_COUNT, 0);
  }, []);

  return { count, increment, reset };
}
