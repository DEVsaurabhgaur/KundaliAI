export function calculateSpeedAcceleration(speedDay1: number, speedDay2: number): number {
  return Number((speedDay2 - speedDay1).toFixed(4));
}
