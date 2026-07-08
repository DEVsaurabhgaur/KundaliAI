/** useDarkMode â€” system-aware dark mode toggle with persistence */
import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../lib/storageKeys';

export type Theme = 'dark' | 'light' | 'system';

export function useDarkMode() {
  const [preference, setPreference] = useLocalStorage<Theme>(STORAGE_KEYS.THEME, 'dark');

  const [isDark, setIsDark] = useState(() => {
    if (preference === 'system') {
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
    }
    return preference === 'dark';
  });

  useEffect(() => {
    if (preference === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
      mq.addEventListener('change', handler);
      setIsDark(mq.matches);
      return () => mq.removeEventListener('change', handler);
    }
    setIsDark(preference === 'dark');
  }, [preference]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggle = () => setPreference(prev => prev === 'dark' ? 'light' : 'dark');

  return { isDark, preference, setPreference, toggle };
}
