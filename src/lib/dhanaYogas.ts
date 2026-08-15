/**
 * Dhana Yogas (Vedic Wealth & Opulence Combinations)
 * Formed by auspicious linkages between 1st (Self), 2nd (Wealth), 5th (Speculation), 9th (Fortune), and 11th (Gains) houses.
 */

export interface DhanaYogaResult {
  yogaName: string;
  strengthGrade: 'Supreme' | 'High' | 'Moderate';
  manifestationEffect: string;
}

export function evaluateDhanaYogas(
  has2ndAnd11thExchange: boolean,
  hasLakshmiYoga: boolean
): DhanaYogaResult[] {
  const results: DhanaYogaResult[] = [];

  if (has2ndAnd11thExchange) {
    results.push({
      yogaName: 'Maha Dhana Yoga (2nd-11th Lord Parivartana)',
      strengthGrade: 'Supreme',
      manifestationEffect: 'Uninterrupted financial gains, multi-source revenue, generational asset accumulation.'
    });
  }

  if (hasLakshmiYoga) {
    results.push({
      yogaName: 'Lakshmi Yoga',
      strengthGrade: 'Supreme',
      manifestationEffect: 'Venus and 9th lord in exaltation or own signs in Kendra houses, bestowing lavish comforts and virtue.'
    });
  }

  return results;
}
