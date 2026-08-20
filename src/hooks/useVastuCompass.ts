import { useMemo } from 'react';
import { getDirectionInfo } from '../lib/vastu/ashtaDikpalas';
import { isRoomPlacementIdeal } from '../lib/vastu/roomSuitabilityMatrix';

export function useVastuCompass(direction: string, roomType: string) {
  const info = useMemo(() => getDirectionInfo(direction), [direction]);
  const isIdeal = useMemo(() => isRoomPlacementIdeal(roomType, direction), [roomType, direction]);

  return { directionInfo: info, isPlacementIdeal: isIdeal };
}
