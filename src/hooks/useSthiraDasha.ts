import { useMemo } from 'react';
import { generateSthiraDashaSequence } from '../lib/sthira/sthiraDashaEngine';

export function useSthiraDasha(brahmaSign: number) {
  const timeline = useMemo(() => generateSthiraDashaSequence(brahmaSign), [brahmaSign]);
  return { timeline };
}
