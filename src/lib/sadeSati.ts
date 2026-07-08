/** Shani Sade Sati (Saturn 7.5-year transit) checker */

export interface SadeSatiResult {
  isActive: boolean;
  phase: 'rising' | 'peak' | 'setting' | 'none';
  description: string;
  startYear?: number;
  endYear?: number;
  advice: string;
}

/**
 * Saturn completes one zodiac revolution in approximately 29.5 years.
 * It spends ~2.5 years in each sign.
 * Sade Sati affects the sign before, the natal Moon sign, and the sign after.
 *
 * @param moonRashi - Natal Moon sign index (0=Aries, 11=Pisces)
 * @param currentYear - Current year for calculation
 */
export function checkSadeSati(moonRashi: number, currentYear: number): SadeSatiResult {
  // Saturn's approximate position: takes 29.5 years to complete one cycle
  // Reference: Saturn was in Aries at approximately 1996.
  const SATURN_ARIES_YEAR = 1996;
  const SATURN_PERIOD = 29.5;
  const YEARS_PER_SIGN = SATURN_PERIOD / 12;

  const yearsSinceRef = currentYear - SATURN_ARIES_YEAR;
  const saturnSignFloat = (yearsSinceRef / YEARS_PER_SIGN) % 12;
  const saturnSign = ((Math.floor(saturnSignFloat) % 12) + 12) % 12;

  const prevSign = (moonRashi - 1 + 12) % 12;
  const nextSign = (moonRashi + 1) % 12;

  let phase: 'rising' | 'peak' | 'setting' | 'none' = 'none';
  if (saturnSign === prevSign) phase = 'rising';
  else if (saturnSign === moonRashi) phase = 'peak';
  else if (saturnSign === nextSign) phase = 'setting';

  const isActive = phase !== 'none';

  const descriptions: Record<string, string> = {
    rising:  'Shani Sade Sati Rising Phase â€” Saturn approaching your Moon sign. Initial challenges in family and domestic life.',
    peak:    'Shani Sade Sati Peak Phase â€” Saturn directly over natal Moon. Maximum intensity; tests in career, health, and relationships.',
    setting: 'Shani Sade Sati Setting Phase â€” Saturn moving away. Gradual relief; lessons being integrated.',
    none:    'Sade Sati is not active at this time.',
  };

  const advice: Record<string, string> = {
    rising:  'Strengthen Saturn: serve others, be disciplined, avoid shortcuts. Chant Shani mantra on Saturdays.',
    peak:    'Practice patience and perseverance. Donate oil/black sesame on Saturdays. Visit Shani temples.',
    setting: 'Consolidate gains made during the challenging period. Complete unfinished projects.',
    none:    'No specific Sade Sati remedies needed at this time.',
  };

  return {
    isActive,
    phase,
    description: descriptions[phase],
    advice: advice[phase],
  };
}
