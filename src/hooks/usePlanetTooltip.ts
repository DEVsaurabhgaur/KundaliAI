/** usePlanetTooltip â€” manages hover tooltip state for planetary chart nodes */
import { useState, useCallback } from 'react';

export interface TooltipState {
  visible: boolean;
  content: string;
  x: number;
  y: number;
  planet: string | null;
}

const INITIAL: TooltipState = { visible: false, content: '', x: 0, y: 0, planet: null };

export function usePlanetTooltip() {
  const [tooltip, setTooltip] = useState<TooltipState>(INITIAL);

  const show = useCallback((planet: string, content: string, x: number, y: number) => {
    setTooltip({ visible: true, content, x, y, planet });
  }, []);

  const hide = useCallback(() => {
    setTooltip(INITIAL);
  }, []);

  const move = useCallback((x: number, y: number) => {
    setTooltip(prev => prev.visible ? { ...prev, x, y } : prev);
  }, []);

  return { tooltip, show, hide, move };
}
