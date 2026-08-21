/**
 * Bhrigu Saral Paddhati (BSP) - Rule 3
 * Rahu introduces foreign, unconventional elements into the 6th house from itself and activates the 12th house in the 37th year.
 */

export function calculateBSP3RahuInfluence(rahuHouse: number) {
  return {
    foreign6th: ((rahuHouse + 5) % 12) + 1,
    activated12thIn37thYear: ((rahuHouse + 11) % 12) + 1
  };
}
