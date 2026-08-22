import { useMemo } from 'react';
import { evaluateKCDJump } from '../lib/kcd/kcdGatiJumps';

export function useKCDJumps(fromSign: number, toSign: number) {
  const jump = useMemo(() => evaluateKCDJump(fromSign, toSign), [fromSign, toSign]);
  return { jumpInfo: jump };
}
