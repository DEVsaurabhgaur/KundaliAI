import { useEffect } from 'react';

export function useKeyboardShortcuts(onSwitchVarga?: (varga: string) => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === '1') onSwitchVarga?.('D1');
      if (e.altKey && e.key === '9') onSwitchVarga?.('D9');
      if (e.altKey && e.key === '0') onSwitchVarga?.('D10');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSwitchVarga]);
}
