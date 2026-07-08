/** useWindowSize â€” track browser window dimensions reactively */
import { useState, useEffect } from 'react';

export interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

/**
 * Returns the current window dimensions and responsive breakpoint flags.
 * Automatically updates on resize.
 */
export function useWindowSize(): WindowSize {
  const getSize = (): WindowSize => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
      isMobile:  width < 640,
      isTablet:  width >= 640 && width < 1024,
      isDesktop: width >= 1024,
    };
  };

  const [size, setSize] = useState<WindowSize>(() => {
    if (typeof window === 'undefined') {
      return { width: 1280, height: 800, isMobile: false, isTablet: false, isDesktop: true };
    }
    return getSize();
  });

  useEffect(() => {
    const handler = () => setSize(getSize());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
}
