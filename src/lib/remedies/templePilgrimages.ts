/**
 * Navagraha Temples & Pilgrimages (Tamil Nadu / Sacred India)
 */

export const NAVAGRAHA_TEMPLES: Record<string, string> = {
  Sun: 'Suryanar Kovil (Thanjavur, Tamil Nadu) & Konark (Odisha)',
  Moon: 'Thingaloor Kailasanathar (Tamil Nadu)',
  Mars: 'Vaitheeswaran Kovil (Chevvai, Tamil Nadu) & Ujjain Mangalnath',
  Mercury: 'Thiruvenkadu Swetharanyeswarar (Budhan Kovil)',
  Jupiter: 'Alangudi Apatsahayeswarar (Guru Kovil)',
  Venus: 'Kanjanur Agneeswarar (Sukran Kovil)',
  Saturn: 'Thirunallar Saniswaran & Shani Shingnapur (Maharashtra)',
  Rahu: 'Thirunageswaram Naganathar & Sri Kalahasti',
  Ketu: 'Keezhperumpallam Naganathar & Trayambakeshwar'
};

export function getTempleForPlanet(planet: string): string {
  return NAVAGRAHA_TEMPLES[planet] || 'Universal Shiva / Vishnu Temple';
}
