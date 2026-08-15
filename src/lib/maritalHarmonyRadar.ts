/**
 * 5-Dimensional Marital Harmony Radar Calculator
 * Dimensions: Emotional, Physical, Intellectual, Spiritual, Financial
 */

export interface HarmonyDimensions {
  emotional: number;
  physical: number;
  intellectual: number;
  spiritual: number;
  financial: number;
}

export function calculateHarmonyDimensions(
  gunaPoints: { varna: number; yoni: number; maitri: number; gana: number; bhakoot: number }
): HarmonyDimensions {
  return {
    emotional: Math.min(100, (gunaPoints.bhakoot / 7) * 100),
    physical: Math.min(100, (gunaPoints.yoni / 4) * 100),
    intellectual: Math.min(100, (gunaPoints.maitri / 5) * 100),
    spiritual: Math.min(100, (gunaPoints.varna / 1) * 100),
    financial: Math.min(100, (gunaPoints.gana / 6) * 100)
  };
}
