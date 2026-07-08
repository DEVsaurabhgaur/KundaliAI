/** useLocalStorage â€” typed localStorage hook with SSR safety */
import { useState, useCallback } from 'react';

/**
 * A React hook to synchronize state with localStorage.
 * @param key - The localStorage key
 * @param initialValue - Default value if key is not found
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    setStoredValue(prev => {
      const resolved = typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;
      try {
        localStorage.setItem(key, JSON.stringify(resolved));
      } catch { /* Ignore quota errors */ }
      return resolved;
    });
  }, [key]);

  const removeValue = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch { /* Ignore */ }
    setStoredValue(initialValue);
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}
