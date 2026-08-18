/**
 * Ishta Phala & Kashta Phala (Benefic vs Malefic Manifestation Ratio)
 * Ishta Phala = sqrt(Uccha Bala * Chesta Bala)
 * Kashta Phala = sqrt((60 - Uccha Bala) * (60 - Chesta Bala))
 */

export function calculateIshtaKashta(ucchaBala: number, chestaBala: number) {
  const ishta = Math.sqrt(Math.max(0, ucchaBala * chestaBala));
  const kashta = Math.sqrt(Math.max(0, (60 - ucchaBala) * (60 - chestaBala)));

  return {
    ishtaPhala: Number(ishta.toFixed(2)),
    kashtaPhala: Number(kashta.toFixed(2)),
    ratio: Number((ishta / (kashta + 0.001)).toFixed(2))
  };
}
