/**
 * Planetary Beej Mantra Resonant Frequencies (Hz)
 */

export const PLANETARY_FREQUENCIES_HZ: Record<string, number> = {
  Sun: 126.22,
  Moon: 210.42,
  Mars: 144.72,
  Mercury: 141.27,
  Jupiter: 183.58,
  Venus: 221.23,
  Saturn: 147.85
};

export function getMantraFrequency(planet: string): number {
  return PLANETARY_FREQUENCIES_HZ[planet] || 108.0;
}
