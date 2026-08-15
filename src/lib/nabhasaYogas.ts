/**
 * Nabhasa Yogas (Celestial pattern yogas formed by distribution of 7 planets)
 */

export function detectSankhyaYoga(distinctSignsOccupied: number): string {
  const SANKHYA_MAP: Record<number, string> = {
    1: 'Gola Yoga (All 7 in 1 sign - Poverty / Solitude)',
    2: 'Yuga Yoga (All 7 in 2 signs - Hypocrisy / Struggle)',
    3: 'Shula Yoga (All 7 in 3 signs - Courage / Fierce temperament)',
    4: 'Kedara Yoga (All 7 in 4 signs - Agricultural wealth / Steadfast)',
    5: 'Pasha Yoga (All 7 in 5 signs - Extensive family / Bondage to duty)',
    6: 'Damini Yoga (All 7 in 6 signs - Philanthropic / Joyous intellect)',
    7: 'Veena Yoga (All 7 in 7 distinct signs - Mastery of fine arts, music, and eloquence)'
  };

  return SANKHYA_MAP[distinctSignsOccupied] || 'General distribution';
}
