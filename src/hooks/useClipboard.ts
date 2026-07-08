/** useClipboard â€” copy text to clipboard with feedback state */
import { useState, useCallback } from 'react';

export interface UseClipboardReturn {
  copied: boolean;
  copy: (text: string) => Promise<void>;
  error: string | null;
}

/**
 * Hook to copy text to the clipboard.
 * @param resetDelay - How long (ms) to show the "copied" state before resetting (default: 2000)
 */
export function useClipboard(resetDelay = 2000): UseClipboardReturn {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copy = useCallback(async (text: string) => {
    setError(null);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), resetDelay);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to copy');
      setCopied(false);
    }
  }, [resetDelay]);

  return { copied, copy, error };
}
