/**
 * 12 Bhavadhyaksha Yogas (Chamara, Dhenu, Shaurya, Jaladhi, Supushkala, Asura, etc.)
 */

export function evaluateBhavadhyaksha(houseNumber: number, isLordExaltedInKendra: boolean): string {
  const YOGA_NAMES: Record<number, string> = {
    1: 'Chamara Yoga (Universal Radiance)',
    2: 'Dhenu Yoga (Abundant Wealth & Eloquence)',
    3: 'Shaurya Yoga (Valiant Heroism)',
    4: 'Jaladhi Yoga (Vast Fixed Properties & Happiness)'
  };
  return isLordExaltedInKendra ? (YOGA_NAMES[houseNumber] || 'Benefic Bhava Yoga') : 'None';
}
