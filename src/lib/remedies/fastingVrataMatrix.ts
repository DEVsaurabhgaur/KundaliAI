/**
 * Planetary Fasting (Vrata) Guidelines
 */

export const VRATA_GUIDELINES: Record<string, { day: string; meals: string; saltAllowed: boolean }> = {
  Sun: { day: 'Sunday', meals: 'One meal before sunset (Wheat and Jaggery)', saltAllowed: false },
  Moon: { day: 'Monday', meals: 'Milk, Kheer, and Fruits', saltAllowed: false },
  Mars: { day: 'Tuesday', meals: 'One meal of wheat and jaggery', saltAllowed: false },
  Mercury: { day: 'Wednesday', meals: 'Mung preparations and green fruits', saltAllowed: true },
  Jupiter: { day: 'Thursday', meals: 'Gram flour (Besan) sweets, Chana, Bananas', saltAllowed: false },
  Venus: { day: 'Friday', meals: 'White rice, Kheer, Curd', saltAllowed: false },
  Saturn: { day: 'Saturday', meals: 'Khichdi with sesame or urad dal (one meal)', saltAllowed: true }
};

export function getVrataDetails(planet: string) {
  return VRATA_GUIDELINES[planet] || VRATA_GUIDELINES['Sun'];
}
