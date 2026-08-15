/**
 * Shadbala (Six-Fold Planetary Strength System)
 * 1. Sthana Bala (Positional)
 * 2. Dig Bala (Directional)
 * 3. Kaala Bala (Temporal)
 * 4. Chesta Bala (Motional)
 * 5. Naisargika Bala (Natural)
 * 6. Drik Bala (Aspectual)
 */

export interface ShadbalaScore {
  planet: string;
  sthanaBala: number;
  digBala: number;
  kaalaBala: number;
  chestaBala: number;
  naisargikaBala: number;
  drikBala: number;
  totalRupas: number;
  requiredRupas: number;
  strengthPercent: number;
  isAdequate: boolean;
}

const NAISARGIKA_BALA: Record<string, number> = {
  Sun: 60, Moon: 51.43, Venus: 42.86, Jupiter: 34.29,
  Mercury: 25.71, Mars: 17.14, Saturn: 8.57
};

const REQUIRED_RUPAS: Record<string, number> = {
  Sun: 6.5, Moon: 6.0, Mars: 5.0, Mercury: 7.0,
  Jupiter: 6.5, Venus: 5.5, Saturn: 5.0
};

export function calculateShadbala(
  planet: string,
  house: number,
  isRetrograde: boolean
): ShadbalaScore {
  const naisargika = NAISARGIKA_BALA[planet] || 30;
  const digBala = [1, 4, 7, 10].includes(house) ? 50 : 25;
  const sthanaBala = 120 + (house * 5);
  const chestaBala = isRetrograde ? 60 : 30;
  const kaalaBala = 45;
  const drikBala = 15;

  const totalVirupas = sthanaBala + digBala + kaalaBala + chestaBala + naisargika + drikBala;
  const totalRupas = Number((totalVirupas / 60).toFixed(2));
  const required = REQUIRED_RUPAS[planet] || 6.0;

  return {
    planet,
    sthanaBala,
    digBala,
    kaalaBala,
    chestaBala,
    naisargikaBala: naisargika,
    drikBala,
    totalRupas,
    requiredRupas: required,
    strengthPercent: Math.min(100, Math.round((totalRupas / required) * 100)),
    isAdequate: totalRupas >= required
  };
}
