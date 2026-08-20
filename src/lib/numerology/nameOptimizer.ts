import { calculateChaldeanNamank } from './namankChaldean';
import { getNumberRelationship } from './numberFriendshipMatrix';

export function suggestNameOptimizations(currentName: string, targetNumber: number) {
  const current = calculateChaldeanNamank(currentName);
  const rel = getNumberRelationship(current.singleDigit, targetNumber);

  return {
    originalName: currentName,
    currentCompound: current.compoundNumber,
    currentSingle: current.singleDigit,
    targetNumber,
    isHarmonious: rel === 'Friend',
    recommendation: rel === 'Friend' ? 'Name vibrations are already in perfect harmony.' : `Add subtle letter frequencies (e.g. 'A' or 'E') to resonate with target number ${targetNumber}.`
  };
}
