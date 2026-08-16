/**
 * Astro-Vastu Synergy Engine
 * Correlates natal house afflictions with physical home sectors.
 */

export function mapKundaliHouseToVastuZone(houseNumber: number): string {
  const MAP: Record<number, string> = {
    1: 'East (Lagna/Self)',
    2: 'North-West (Wealth & Speech)',
    3: 'South (Courage & Siblings)',
    4: 'North-East (Home & Inner Peace)',
    5: 'East-North-East (Creativity & Children)',
    6: 'South-South-West (Debts & Obstacles)',
    7: 'South-West (Partnership & Marriage)',
    8: 'West-North-West (Transformation & Secrets)',
    9: 'North-East (Fortune & Dharma)',
    10: 'South (Career & Public Standing)',
    11: 'West (Monetary Gains & Desires)',
    12: 'North-North-West (Expenses & Foreign Lands)'
  };
  return MAP[houseNumber] || 'Center (Brahmasthan)';
}
