/**
 * Pancha Mahapurusha Yogas (Ruchaka, Bhadra, Hamsa, Malavya, Sasa)
 */

export function buildMahapurushaSummary(activeYogas: string[]) {
  return {
    count: activeYogas.length,
    yogas: activeYogas,
    hasSupremeKinglyStatus: activeYogas.length >= 2
  };
}
