/**
 * Planetary Speed Variation Categories:
 * 1. Sheeghra (Fast): Speed > 115% of mean speed.
 * 2. Sama (Normal): Speed 85% - 115% of mean.
 * 3. Manda (Slow): Speed < 85% of mean.
 * 4. Vakra (Retrograde): Negative daily motion.
 */

export function categorizePlanetarySpeed(currentSpeedDegPerDay: number, meanSpeedDegPerDay: number): string {
  if (currentSpeedDegPerDay < 0) return 'Vakra (Retrograde - Intensely Powerful Internal Motion)';
  const ratio = (currentSpeedDegPerDay / meanSpeedDegPerDay) * 100;
  if (ratio > 115) return 'Sheeghra (Accelerated / High Momentum)';
  if (ratio < 85) return 'Manda (Slow / Deliberate Expansion)';
  return 'Sama (Balanced Mean Velocity)';
}
