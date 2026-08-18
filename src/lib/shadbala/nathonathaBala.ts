/**
 * Nathonatha Bala (Diurnal / Nocturnal Mid-Arc Virupas)
 */

export function calculateNathonathaBala(hoursFromLocalNoon: number): number {
  const virupas = Math.max(0, 60 - Math.abs(hoursFromLocalNoon) * 5);
  return Number(virupas.toFixed(2));
}
