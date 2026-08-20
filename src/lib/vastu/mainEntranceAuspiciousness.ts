/**
 * 32 Vastu Main Entrance Padas
 * Auspicious Padas:
 * East: Jayanta (E3), Indra (E4)
 * South: Vitatha (S3), Grihakshta (S4)
 * West: Sugriva (W3), Pushpadanta (W4)
 * North: Mukhya (N3), Bhallata (N4), Soma (N5)
 */

export const AUSPICIOUS_PADAS = ['E3', 'E4', 'S3', 'S4', 'W3', 'W4', 'N3', 'N4', 'N5'];

export function isEntrancePadaAuspicious(padaCode: string): boolean {
  return AUSPICIOUS_PADAS.includes(padaCode.toUpperCase());
}
