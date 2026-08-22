/**
 * Megha Garbhadhana (Cloud Conception in Medini Jyotish)
 * Gestation period = 195 Solar Days (6.5 synodic lunar months) from Margashirsha to Ashadha.
 */

export function calculateMonsoonDeliveryDate(conceptionEpochMs: number): number {
  return conceptionEpochMs + 195 * 24 * 60 * 60 * 1000;
}
