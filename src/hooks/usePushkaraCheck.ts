import { useMemo } from 'react';
import { checkPushkaraNavamsha } from '../lib/career/pushkaraNavamsha';

export function usePushkaraCheck(signIdx: number, deg: number) {
  const isPushkara = useMemo(() => checkPushkaraNavamsha(signIdx, deg), [signIdx, deg]);
  return { isPushkara };
}
