/**
 * Rajju Koota 5 Body Classifications
 * Sira (Head - Husband longevity) | Kantha (Neck - Wife longevity) | Udara (Stomach - Progeny) |
 * Kati (Waist - Poverty) | Pada (Feet - Travel/Wandering)
 * Boy and Girl must NOT have the same Rajju.
 */

export const RAJJU_GROUPS: Record<string, number[]> = {
  Sira: [4, 13, 22], // Mriga, Chitra, Dhanishta
  Kantha: [3, 5, 12, 14, 21, 23],
  Udara: [2, 6, 11, 15, 20, 24],
  Kati: [1, 7, 10, 16, 19, 25],
  Pada: [0, 8, 9, 17, 18, 26]
};

export function getRajjuGroup(nakshatra: number): string {
  const idx = nakshatra % 27;
  for (const [name, stars] of Object.entries(RAJJU_GROUPS)) {
    if (stars.includes(idx)) return name;
  }
  return 'Pada';
}

export function checkRajjuMatch(girlNak: number, boyNak: number) {
  const gRajju = getRajjuGroup(girlNak);
  const bRajju = getRajjuGroup(boyNak);
  const isMatch = gRajju !== bRajju;

  return {
    girlRajju: gRajju,
    boyRajju: bRajju,
    isCompatible: isMatch,
    verdict: isMatch ? 'Rajju Dosha Free: Auspicious' : `Rajju Dosha in ${gRajju}: Requires cancellation`
  };
}
