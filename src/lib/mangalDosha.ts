/** Mangal Dosha (Mars affliction) checker for KundaliAI */

/**
 * Houses where Mars placement causes Mangal Dosha.
 * Classical: 1, 2, 4, 7, 8, 12
 * South Indian tradition: also includes 3rd house
 */
const MANGAL_DOSHA_HOUSES_CLASSICAL = [1, 2, 4, 7, 8, 12] as const;
const MANGAL_DOSHA_HOUSES_SOUTH = [1, 2, 3, 4, 7, 8, 12] as const;

export type MangalDoshaResult = {
  hasDosha: boolean;
  marsHouse: number | null;
  severity: 'high' | 'medium' | 'low' | 'none';
  remedy: string;
  note: string;
};

/**
 * Determine if a chart has Mangal Dosha and its severity.
 * @param marsHouse - House number where Mars is placed (1-12)
 * @param lagnaSign - Ascendant sign (for cancellation checks)
 * @param tradition - 'classical' or 'south' (default: 'classical')
 */
export function checkMangalDosha(
  marsHouse: number,
  lagnaSign?: string,
  tradition: 'classical' | 'south' = 'classical'
): MangalDoshaResult {
  const doshaHouses = tradition === 'south'
    ? MANGAL_DOSHA_HOUSES_SOUTH
    : MANGAL_DOSHA_HOUSES_CLASSICAL;

  const hasDosha = (doshaHouses as readonly number[]).includes(marsHouse);

  if (!hasDosha) {
    return {
      hasDosha: false,
      marsHouse,
      severity: 'none',
      remedy: '',
      note: 'No Mangal Dosha present. Mars is in a neutral position.',
    };
  }

  // Severity assessment
  let severity: 'high' | 'medium' | 'low' = 'medium';
  if (marsHouse === 7 || marsHouse === 8) severity = 'high';
  if (marsHouse === 2 || marsHouse === 4) severity = 'medium';
  if (marsHouse === 1 || marsHouse === 12) severity = 'low';

  // Cancellation: Mars in own signs (Aries/Scorpio) or exalted (Capricorn)
  const cancellationSigns = ['Aries', 'Scorpio', 'Capricorn'];
  if (lagnaSign && cancellationSigns.includes(lagnaSign)) severity = 'low';

  const remedies: Record<string, string> = {
    high:   'Perform Mangal puja on Tuesdays; wear red coral (after consultation); chant Mangal Beej Mantra.',
    medium: 'Observe Tuesday fast; donate red lentils; perform Hanuman Chalisa recitation.',
    low:    'Light a ghee lamp on Tuesdays; recite Mangal mantra 108 times.',
  };

  return {
    hasDosha: true,
    marsHouse,
    severity,
    remedy: remedies[severity],
    note: `Mars in ${marsHouse}${['st','nd','rd','th'][Math.min(marsHouse,4)-1] ?? 'th'} house creates ${severity}-severity Mangal Dosha.`,
  };
}
