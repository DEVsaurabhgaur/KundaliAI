/**
 * Saptavargiya Bala (Dignity across 7 divisions: Rashi, Hora, Drekkana, Saptamsha, Navamsha, Dwadamsha, Trimshamsha)
 * Moolatrikona: 45 | Swakshetra: 30 | Mitra: 20 | Sama: 15 | Shatru: 10 | Neecha: 0 Virupas
 */

export function calculateSaptavargiyaBala(vargaDignityScores: number[]): number {
  const sum = vargaDignityScores.reduce((acc, v) => acc + v, 0);
  return Number(sum.toFixed(2));
}
