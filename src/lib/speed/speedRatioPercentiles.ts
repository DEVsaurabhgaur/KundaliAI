export function calculateSpeedPercentile(currentSpeed: number, meanSpeed: number): number {
  const pct = Math.round((currentSpeed / (meanSpeed || 1)) * 100);
  return Math.min(200, Math.max(-50, pct));
}
