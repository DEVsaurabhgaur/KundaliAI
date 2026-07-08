/** useCountdown â€” countdown timer hook for rate limit feedback */
import { useState, useEffect, useRef } from 'react';

export interface UseCountdownReturn {
  seconds: number;
  isRunning: boolean;
  start: (seconds: number) => void;
  stop: () => void;
  reset: () => void;
}

/**
 * A countdown timer hook.
 * Useful for showing users how long until they can make another request.
 */
export function useCountdown(): UseCountdownReturn {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const start = (initialSeconds: number) => {
    stop();
    setSeconds(initialSeconds);
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          stop();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  useEffect(() => () => stop(), []);

  return { seconds, isRunning, start, stop, reset };
}
