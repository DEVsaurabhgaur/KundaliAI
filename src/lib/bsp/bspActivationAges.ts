/**
 * Bhrigu Saral Paddhati (BSP) Planetary Activation Ages
 */

export const BSP_ACTIVATION_AGES: Record<string, number[]> = {
  Sun: [22],
  Moon: [24],
  Venus: [25],
  Mars: [28],
  Jupiter: [16, 32],
  Mercury: [34],
  Saturn: [36],
  Rahu: [42],
  Ketu: [48]
};

export function getBSPActivationAge(planet: string): number[] {
  return BSP_ACTIVATION_AGES[planet] || [30];
}
