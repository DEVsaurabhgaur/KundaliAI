export function isDeceleratingTowardsStation(speedDay1: number, speedDay2: number): boolean {
  return Math.abs(speedDay2) < Math.abs(speedDay1);
}
