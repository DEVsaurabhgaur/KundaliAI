export function isTurningDirect(isCurrentlyRetrograde: boolean, speedApproachingZero: boolean): boolean {
  return isCurrentlyRetrograde && speedApproachingZero;
}
