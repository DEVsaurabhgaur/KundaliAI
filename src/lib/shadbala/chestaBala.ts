/**
 * Chesta Bala (Motional Strength: 0 to 60 Virupas)
 * Retrograde (Vakri) planets get full 60 Virupas.
 */

export function calculateChestaBala(isRetrograde: boolean, speedRatio: number): number {
  if (isRetrograde) return 60.0;
  const virupas = Math.min(60, Math.max(0, speedRatio * 30));
  return Number(virupas.toFixed(2));
}
