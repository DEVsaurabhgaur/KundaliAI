import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';

/** Scrolls to top of page on route change */
export function useScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch { window.scrollTo(0, 0); }
  }, [location.pathname]);
}

