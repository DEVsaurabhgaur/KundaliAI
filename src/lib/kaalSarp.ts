/** Kaal Sarp Dosha checker â€” all planets hemmed between Rahu and Ketu */

export interface KaalSarpResult {
  hasDosha: boolean;
  type: string | null;
  description: string;
  severity: 'partial' | 'full' | 'none';
  remedy: string;
}

const KAAL_SARP_TYPES: Record<number, string> = {
  1:  'Anant',
  2:  'Kulik',
  3:  'Vasuki',
  4:  'Shankhapal',
  5:  'Padma',
  6:  'Mahapadma',
  7:  'Takshak',
  8:  'Karkotak',
  9:  'Shankhanaad',
  10: 'Patak',
  11: 'Vishakata',
  12: 'Sheshnag',
};

/**
 * Check for Kaal Sarp Dosha.
 * @param planetHouses - Map of planet name to house number
 */
export function checkKaalSarpDosha(
  planetHouses: Record<string, number>
): KaalSarpResult {
  const rahuHouse = planetHouses['Rahu'] ?? planetHouses['Rahu (North Node)'];
  const ketuHouse = planetHouses['Ketu'] ?? planetHouses['Ketu (South Node)'];

  if (!rahuHouse || !ketuHouse) {
    return { hasDosha: false, type: null, severity: 'none', description: 'Rahu/Ketu positions unknown.', remedy: '' };
  }

  const otherPlanets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn']
    .map(p => planetHouses[p])
    .filter(Boolean);

  // Check if all planets fall between Rahu and Ketu (going in one direction)
  let allBetweenRahuToKetu = true;
  let allBetweenKetuToRahu = true;

  for (const house of otherPlanets) {
    const rToK = ((ketuHouse - rahuHouse + 12) % 12);
    const posFromRahu = ((house - rahuHouse + 12) % 12);
    if (posFromRahu > rToK) allBetweenRahuToKetu = false;
    if (posFromRahu < rToK || posFromRahu === 0) allBetweenKetuToRahu = false;
  }

  const hasDosha = allBetweenRahuToKetu || allBetweenKetuToRahu;

  if (!hasDosha) {
    return {
      hasDosha: false, type: null, severity: 'none',
      description: 'No Kaal Sarp Dosha. Planets are not hemmed between Rahu and Ketu.',
      remedy: '',
    };
  }

  const typeName = KAAL_SARP_TYPES[rahuHouse] ?? 'Unknown';

  return {
    hasDosha: true,
    type: typeName,
    severity: 'full',
    description: `${typeName} Kaal Sarp Dosha â€” Rahu in ${rahuHouse}th house, Ketu in ${ketuHouse}th house. All planets are hemmed between them, potentially causing delays, obstacles, and unexpected reversals.`,
    remedy: 'Perform Nag Panchami puja; recite Rahu/Ketu mantras; visit Trimbakeshwar Jyotirlinga for Kaal Sarp puja.',
  };
}
