import { useMemo } from 'react';
import { evaluateTajikaYogaName } from '../lib/tajika/tajikaYogas16';

export function useTajikaYogas(isApp: boolean, isSep: boolean, hasInter: boolean) {
  const yogaName = useMemo(() => evaluateTajikaYogaName(isApp, isSep, hasInter), [isApp, isSep, hasInter]);
  return { yogaName };
}
