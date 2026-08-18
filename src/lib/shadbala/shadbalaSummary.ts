/**
 * Complete 6-Fold Shadbala Aggregator
 * 1 Rupa = 60 Virupas. Minimum requirements:
 * Sun: 6.5 Rupas (390 Virupas) | Moon: 6.0 Rupas (360) | Mars: 5.0 Rupas (300) |
 * Mercury: 7.0 Rupas (420) | Jupiter: 6.5 Rupas (390) | Venus: 5.5 Rupas (330) | Saturn: 5.0 Rupas (300)
 */

export interface TotalShadbala {
  planet: string;
  totalVirupas: number;
  totalRupas: number;
  minimumRequiredRupas: number;
  strengthPercentage: number;
  isStrong: boolean;
}

const MINIMUM_RUPAS: Record<string, number> = {
  Sun: 6.5, Moon: 6.0, Mars: 5.0, Mercury: 7.0, Jupiter: 6.5, Venus: 5.5, Saturn: 5.0
};

export function aggregateShadbala(
  planet: string,
  sthana: number,
  dig: number,
  kala: number,
  chesta: number,
  naisargika: number,
  drik: number
): TotalShadbala {
  const totalVirupas = sthana + dig + kala + chesta + naisargika + drik;
  const totalRupas = Number((totalVirupas / 60).toFixed(2));
  const req = MINIMUM_RUPAS[planet] || 5.5;

  return {
    planet,
    totalVirupas: Number(totalVirupas.toFixed(2)),
    totalRupas,
    minimumRequiredRupas: req,
    strengthPercentage: Number(((totalRupas / req) * 100).toFixed(1)),
    isStrong: totalRupas >= req
  };
}
