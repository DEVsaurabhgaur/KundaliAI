/**
 * Ishta Phala (Desirable Benefic Capacity) and Kashta Phala (Adverse Tendency)
 * Ranges from 0 to 60 shashtiamshas.
 */

export interface PhalaScore {
  planet: string;
  ishtaPhala: number;
  kashtaPhala: number;
  beneficRatio: number;
}

export function calculateIshtaKashtaPhala(
  planet: string,
  uchchaBala: number,
  chestaBala: number
): PhalaScore {
  // Geometric mean approximation of Uchcha and Chesta strengths
  const ishta = Math.sqrt(Math.max(1, uchchaBala * chestaBala));
  const kashta = 60 - ishta;

  return {
    planet,
    ishtaPhala: Number(ishta.toFixed(2)),
    kashtaPhala: Number(Math.max(0, kashta).toFixed(2)),
    beneficRatio: Number((ishta / 60).toFixed(2))
  };
}
