export const MEAN_DAILY_MOTIONS: Record<string, number> = {
  Sun: 0.9856,
  Moon: 13.1763,
  Mars: 0.5240,
  Mercury: 1.3833,
  Jupiter: 0.0831,
  Venus: 1.2000,
  Saturn: 0.0335
};

export function getMeanSpeed(planet: string): number {
  return MEAN_DAILY_MOTIONS[planet] || 1.0;
}
