/**
 * Tatwa Shodhana (5 Mahabhutas: Prithvi, Jala, Agni, Vayu, Akasha)
 */

export function getBirthTatwa(minutesAfterSunrise: number, dayOfWeek: number): string {
  const TATWAS = ['Prithvi (Earth)', 'Jala (Water)', 'Agni (Fire)', 'Vayu (Air)', 'Akasha (Ether)'];
  const index = Math.floor((minutesAfterSunrise % 120) / 24);
  return TATWAS[index % 5];
}
